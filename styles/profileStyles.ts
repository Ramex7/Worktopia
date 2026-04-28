import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createProfileStyles(colors: ThemeColors) {
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
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    kicker: {
      fontSize: 14,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 0.4,
      color: colors.tabActive,
    },
    headerAction: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 999,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    headerActionText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
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
      alignItems: "center",
    },
    avatar: {
      width: 76,
      height: 76,
      borderRadius: 38,
      backgroundColor: colors.tabActive,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.surface,
    },
    heroMeta: {
      flex: 1,
      gap: 4,
    },
    name: {
      fontSize: 26,
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
      minHeight: 78,
      borderRadius: 16,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    statValue: {
      fontSize: 22,
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
    bodyText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
    },
    stack: {
      gap: 12,
    },
    listItem: {
      gap: 4,
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
    infoChip: {
      borderRadius: 14,
      backgroundColor: colors.background,
      paddingHorizontal: 12,
      paddingVertical: 12,
    },
    infoChipText: {
      fontSize: 14,
      color: colors.text,
    },
    postCard: {
      borderRadius: 18,
      backgroundColor: colors.background,
      padding: 14,
      gap: 12,
    },
    postHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    postHeaderLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      flex: 1,
    },
    postAvatar: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    postAvatarText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text,
    },
    postAuthor: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text,
    },
    postTime: {
      fontSize: 12,
      color: colors.mutedText,
      marginTop: 2,
    },
    postFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    postStat: {
      fontSize: 12,
      color: colors.mutedText,
    },
  });
}
