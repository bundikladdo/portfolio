import type { Brand } from "@/data/site";
import { autodeusProducts, brands } from "@/data/site";

export function BrandChip({
  brand,
  href,
}: {
  brand: Brand;
  href?: string;
}) {
  const inner = (
    <span className="brand-chip-name">{brand.name}</span>
  );

  const to = href ?? brand.href;
  if (to) {
    return (
      <a className="brand-chip" href={to}>
        {inner}
      </a>
    );
  }
  return <span className="brand-chip">{inner}</span>;
}

export function AutodeusChip() {
  const brand = brands.autodeus;
  return (
    <span className="brand-tip">
      <button type="button" className="brand-chip" aria-describedby="autodeus-tip">
        <span className="brand-chip-name">{brand.name}</span>
      </button>
      <span id="autodeus-tip" role="tooltip" className="brand-tip-card">
        <span className="brand-tip-diamond" aria-hidden />
        <span className="brand-tip-label">Products</span>
        {autodeusProducts.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noreferrer">
            <span
              className="brand-tip-thumb"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            {p.name}
          </a>
        ))}
      </span>
    </span>
  );
}
