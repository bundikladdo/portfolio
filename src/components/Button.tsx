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
  const variant = props.variant ?? "secondary";
  const className = buttonClassName(variant, props.className);

  if ("href" in props && props.href) {
    const { href, variant: _variant, className: _className, children, ...linkProps } = props;

    if (linkProps.download) {
      return (
        <a href={href} className={className} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _variant, className: _className, children, ...buttonProps } = props;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
