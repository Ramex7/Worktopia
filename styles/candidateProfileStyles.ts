import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createCandidateProfileStyles(colors: ThemeColors) {
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
    topBarTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    topBarSpacer: {
      width: 44,
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
    heroCard: {
      backgroundColor: colors.surface,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 18,
      gap: 16,
    },
    heroTopRow: {
      flexDirection: "row",
      gap: 14,
      alignItems: "flex-start",
    },
    avatar: {
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text,
    },
    heroMeta: {
      flex: 1,
      gap: 5,
    },
    name: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
    },
    role: {
      fontSize: 15,
      color: colors.text,
    },
    location: {
      fontSize: 14,
      color: colors.mutedText,
    },
    bio: {
      fontSize: 15,
      lineHeight: 23,
      color: colors.mutedText,
    },
    statRow: {
      flexDirection: "row",
      gap: 10,
    },
    statCard: {
      flex: 1,
      minHeight: 74,
      borderRadius: 16,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    statValue: {
      fontSize: 21,
      fontWeight: "700",
      color: colors.text,
    },
    statLabel: {
      fontSize: 12,
      color: colors.mutedText,
    },
    sectionCard: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      gap: 14,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text,
    },
    sectionBody: {
      gap: 14,
    },
    bodyText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
    },
    listItem: {
      gap: 5,
    },
    listTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
    },
    listMeta: {
      fontSize: 13,
      color: colors.mutedText,
    },
    postCard: {
      borderRadius: 16,
      backgroundColor: colors.background,
      padding: 14,
      gap: 8,
    },
    postTime: {
      fontSize: 12,
      color: colors.mutedText,
    },
    postStats: {
      fontSize: 12,
      fontWeight: "600",
      color: colors.text,
    },
    missingState: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      gap: 12,
    },
    missingTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
    },
    missingText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
      textAlign: "center",
      maxWidth: 280,
    },
    backButton: {
      minHeight: 42,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: colors.tabActive,
      alignItems: "center",
      justifyContent: "center",
    },
    backButtonText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.surface,
    },
  });
}
