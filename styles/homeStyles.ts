import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createHomeStyles(colors: ThemeColors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 32,
      gap: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
    },
    headerSubtitle: {
      marginTop: 6,
      fontSize: 15,
      lineHeight: 22,
      color: colors.mutedText,
      maxWidth: 260,
    },
    postCard: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
    },
    postHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12,
    },
    postIdentity: {
      flex: 1,
      flexDirection: "row",
      gap: 12,
    },
    postAvatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
    },
    postAvatarText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text,
    },
    postMeta: {
      flex: 1,
      gap: 2,
    },
    postAuthor: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
    },
    postRole: {
      fontSize: 13,
      color: colors.mutedText,
    },
    postTime: {
      fontSize: 12,
      color: colors.mutedText,
    },
    postContent: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 23,
      color: colors.text,
    },
    postStats: {
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    postStatsText: {
      fontSize: 13,
      color: colors.mutedText,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginTop: 14,
      marginBottom: 8,
    },
    postActions: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 8,
    },
    postActionButton: {
      flex: 1,
      minHeight: 42,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 6,
    },
    postActionText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.mutedText,
    },
  });
}
