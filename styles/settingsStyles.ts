import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createSettingsStyles(colors: ThemeColors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      padding: 16,
      paddingBottom: 32,
      gap: 16,
    },
    topBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconButton: {
      width: 44,
      height: 44,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    topBarTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    topBarSpacer: {
      width: 44,
    },
    heroCard: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 18,
      gap: 8,
    },
    heroTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
    },
    heroText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
    },
    sectionCard: {
      backgroundColor: colors.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      gap: 14,
    },
    sectionTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
    },
    stack: {
      gap: 10,
    },
    row: {
      minHeight: 52,
      borderRadius: 14,
      backgroundColor: colors.background,
      paddingHorizontal: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    rowText: {
      fontSize: 14,
      color: colors.text,
    },
  });
}
