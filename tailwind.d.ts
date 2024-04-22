declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    palette: Record<string, string>,
  ): Record<string, string>;
}
