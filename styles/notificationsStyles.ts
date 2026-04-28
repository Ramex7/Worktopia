import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createNotificationsStyles(colors: ThemeColors) {
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
    card: {
      backgroundColor: colors.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      flexDirection: "row",
      gap: 12,
    },
    cardIcon: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    cardBody: {
      flex: 1,
      gap: 5,
    },
    cardTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
    },
    cardText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
    },
    cardTime: {
      fontSize: 12,
      color: colors.mutedText,
    },
  });
}
