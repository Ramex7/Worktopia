import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createCandidatesStyles(colors: ThemeColors) {
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
      gap: 6,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
    },
    subtitle: {
      fontSize: 15,
      lineHeight: 22,
      color: colors.mutedText,
      maxWidth: 320,
    },
    toolbar: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    searchBar: {
      flex: 1,
      minHeight: 50,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingHorizontal: 14,
    },
    searchInput: {
      flex: 1,
      fontSize: 15,
      color: colors.text,
      paddingVertical: 0,
    },
    filterButton: {
      minHeight: 50,
      paddingHorizontal: 14,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
    },
    filterButtonText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
    },
    filterRow: {
      gap: 10,
      paddingRight: 12,
    },
    filterChip: {
      minHeight: 38,
      paddingHorizontal: 14,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    filterChipText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
    },
    resultsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    resultsTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    resultsHint: {
      fontSize: 13,
      color: colors.mutedText,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      gap: 14,
    },
    cardTopRow: {
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
    },
    avatarText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    meta: {
      flex: 1,
      gap: 4,
    },
    name: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text,
    },
    field: {
      fontSize: 14,
      color: colors.text,
    },
    location: {
      fontSize: 13,
      color: colors.mutedText,
    },
    bio: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.mutedText,
    },
    tagRow: {
      flexDirection: "row",
      gap: 8,
      flexWrap: "wrap",
    },
    tag: {
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 999,
      backgroundColor: colors.background,
    },
    tagText: {
      fontSize: 12,
      fontWeight: "600",
      color: colors.text,
    },
    cardFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    footerText: {
      flex: 1,
      fontSize: 13,
      color: colors.mutedText,
    },
    viewButton: {
      minHeight: 40,
      paddingHorizontal: 14,
      borderRadius: 12,
      backgroundColor: colors.tabActive,
      alignItems: "center",
      justifyContent: "center",
    },
    viewButtonText: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.surface,
    },
  });
}
