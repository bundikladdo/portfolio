"""Read the portfolio's resume JSON from stdin and generate the public PDF."""
import json
import sys
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

content = json.load(sys.stdin)
site, resume, jobs, skills = (content[key] for key in ("site", "resume", "jobs", "resumeSkills"))
output = Path(__file__).resolve().parents[1] / "public" / "kartik-jangid-resume.pdf"
ink = colors.HexColor("#1c1917")
body = colors.HexColor("#44403c")
muted = colors.HexColor("#57534e")
styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=27, textColor=ink, spaceAfter=5),
    "role": ParagraphStyle("role", fontName="Helvetica", fontSize=12, leading=17, textColor=ink, spaceAfter=7),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=14, textColor=body, spaceAfter=5),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.5, leading=12, textColor=muted, spaceAfter=5),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11, leading=16, textColor=ink, spaceBefore=14, spaceAfter=7),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=ink, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, leading=14, leftIndent=10, firstLineIndent=-10, textColor=body, spaceAfter=4),
}

def plain(text):
    return escape(text.replace("—", "-").replace("–", "-").replace("→", " to ").replace("’", "'").replace("·", " | "))

def p(text, style="body"):
    return Paragraph(plain(text), styles[style])

story = [p(site["name"], "name"), p(site["role"], "role")]
story.append(p(f'{site["location"]} | {site["email"]}', "small"))
story.append(Paragraph(f'<link href="{escape(site["social"]["linkedin"])}">LinkedIn</link> | <link href="{escape(site["social"]["github"])}">GitHub</link>', styles["small"]))
story += [Spacer(1, 7), p(site["intro"] + " " + resume["summary"]), p("Experience", "section")]
for job in jobs:
    block = [p(" / ".join(role["title"] for role in job["roles"]) + " | " + job["company"], "job")]
    block.append(p(job["period"] + " | " + job["origin"], "small"))
    block.append(p(job.get("summary") or job.get("featured", {}).get("description", "")))
    if job["id"] == "smartify":
        block += [p("- " + achievement, "bullet") for achievement in resume["achievements"]]
    block.append(Spacer(1, 7))
    story.append(KeepTogether(block))
story.append(p("Skills", "section"))
for skill in skills:
    story.append(Paragraph(f'<b>{plain(skill["title"])}:</b> {plain(skill["detail"])}', styles["body"]))
story += [p("Education", "section"), p(resume["education"]["degree"] + " | " + resume["education"]["year"], "job"), p(resume["education"]["school"])]
SimpleDocTemplate(str(output), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=38, bottomMargin=38, title=f'{site["name"]} - Resume', author=site["name"], subject=site["role"]).build(story)
print(output)
