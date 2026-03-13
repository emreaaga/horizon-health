"use client";

import Link from "next/link";
import ProjectIcon from "./new-project-logo";

type BrandProps = {
  href?: string;
  title?: string;
  className?: string;
  isScrolled?: boolean;
  onClickTop?: () => void;
};

export default function BrandLogo({
  href = "/",
  title = "Horizon health",
  className = "",
  isScrolled = false,
  onClickTop,
}: BrandProps) {
  const textClass = isScrolled ? "text-gray-900" : "text-white";
  const iconClass = isScrolled ? "text-gray-900" : "text-white";

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClickTop) {
          e.preventDefault();
          onClickTop();
        }
      }}
      className={`inline-flex items-center ${className}`}
      aria-label={title}
      title={title}
    >
      <ProjectIcon className={`${iconClass} shrink-0`} width={40} height={40} />

      <span
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
        className={`
          ${textClass}
          text-xl /* Для Times New Roman лучше взять чуть больше размер, он визуально мельче */
          font-bold
          tracking-tighter
          leading-none
          -ml-1
        `}
      >
        {title}
      </span>
    </Link>
  );
}
