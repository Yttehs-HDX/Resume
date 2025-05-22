/**
 * colors.json is from https://github.com/ozh/github-colors
 */

import colors from "./colors.json";

export function getLanguageColor(language: string) {
  return colors[language as keyof typeof colors]?.color ?? "#666";
}
