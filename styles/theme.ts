import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";
import type { ColorSchemeName } from "react-native";

export const lightColors = {
  background: "#f8fafc",
  surface: "#ffffff",
  text: "#0f172a",
  mutedText: "#475569",
  tabActive: "#0f766e",
  tabInactive: "#64748b",
  border: "#e2e8f0",
};

export const darkColors = {
  background: "#0f172a",
  surface: "#111827",
  text: "#f8fafc",
  mutedText: "#94a3b8",
  tabActive: "#5eead4",
  tabInactive: "#94a3b8",
  border: "#1f2937",
};

export type ThemeColors = typeof darkColors;

export function getThemeColors(colorScheme: ColorSchemeName) {
  return colorScheme === "dark" ? darkColors : lightColors;
}

export function getNavigationTheme(colorScheme: ColorSchemeName): Theme {
  const baseTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const colors = getThemeColors(colorScheme);

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.border,
      primary: colors.tabActive,
      notification: colors.tabActive,
    },
  };
}
