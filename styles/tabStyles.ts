import { StyleSheet } from "react-native";

import type { ThemeColors } from "./theme";

export function createTabStyles(colors: ThemeColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
      padding: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
    },
    subtitle: {
      marginTop: 8,
      fontSize: 16,
      color: colors.mutedText,
      textAlign: "center",
    },
    homeTitle: {
      fontSize: 30,
    },
    homeSubtitle: {
      fontSize: 18,
    },
  });
}
