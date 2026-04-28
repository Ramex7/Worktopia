import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createJobProfileStyles(colors: ThemeColors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    screenBody: {
      flex: 1,
    },
    content: {
      padding: 16,
      paddingBottom: 140,
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
      gap: 10,
    },
    company: {
      fontSize: 14,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 0.4,
      color: colors.tabActive,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
    },
    metaLine: {
      fontSize: 14,
      color: colors.mutedText,
    },
    summary: {
      marginTop: 4,
      fontSize: 15,
      lineHeight: 23,
      color: colors.text,
    },
    tagRow: {
      flexDirection: "row",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 4,
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
    snapshotGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
    snapshotCard: {
      width: "47%",
      minHeight: 88,
      borderRadius: 16,
      backgroundColor: colors.background,
      padding: 14,
      justifyContent: "space-between",
    },
    snapshotLabel: {
      fontSize: 12,
      color: colors.mutedText,
    },
    snapshotValue: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    listItem: {
      gap: 6,
    },
    listTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
    },
    bottomBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 16,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    bottomMeta: {
      flex: 1,
      gap: 2,
    },
    bottomMetaTitle: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text,
    },
    bottomMetaText: {
      fontSize: 12,
      color: colors.mutedText,
    },
    primaryButton: {
      minHeight: 46,
      paddingHorizontal: 18,
      borderRadius: 14,
      backgroundColor: colors.tabActive,
      alignItems: "center",
      justifyContent: "center",
    },
    primaryButtonText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.surface,
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
  });
}
