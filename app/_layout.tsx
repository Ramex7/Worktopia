import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { getNavigationTheme } from "../styles/theme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = getNavigationTheme(colorScheme);

  return (
    <ThemeProvider value={theme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
