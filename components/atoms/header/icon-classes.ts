export const HEADER_ICON_BASE =
  "inline-flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-200";

export const headerIconVariant = (isScrolled: boolean): string =>
  isScrolled
    ? "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900"
    : "bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200";
