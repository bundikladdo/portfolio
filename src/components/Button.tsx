import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: string;
  };

type ButtonElementProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type Props = ButtonLinkProps | ButtonElementProps;

function buttonClassName(variant: ButtonVariant, className?: string) {
  return ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");
}

export function Button(props: Props) {
  if (props.href !== undefined) {
    const { href, variant = "secondary", className, children, ...linkProps } = props;
    const classes = buttonClassName(variant, className);

    if (linkProps.download) {
      return <a href={href} className={classes} {...linkProps}>{children}</a>;
    }

    return <Link href={href} className={classes} {...linkProps}>{children}</Link>;
  }

  const { variant = "secondary", className, children, ...buttonProps } = props;
  return (
    <button type="button" className={buttonClassName(variant, className)} {...buttonProps}>
      {children}
    </button>
  );
}
