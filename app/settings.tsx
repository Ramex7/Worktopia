import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenTopBar } from "../components/ScreenTopBar";
import { createSettingsStyles } from "../styles/settingsStyles";
import { getThemeColors } from "../styles/theme";

const settingsGroups = [
  {
    title: "Account",
    items: ["Profile details", "Privacy", "Password"],
  },
  {
    title: "Preferences",
    items: ["Notifications", "Appearance", "Language"],
  },
  {
    title: "Workflows",
    items: ["Saved jobs", "Applications", "Posting defaults"],
  },
];

export default function SettingsScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createSettingsStyles(colors);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenTopBar
          color={colors.text}
          title="Settings"
          topBarStyle={styles.topBar}
          iconButtonStyle={styles.iconButton}
          titleStyle={styles.topBarTitle}
          spacerStyle={styles.topBarSpacer}
        />

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Workspace settings</Text>
          <Text style={styles.heroText}>
            Placeholder controls for account preferences, notifications, privacy, and app behavior.
          </Text>
        </View>

        {settingsGroups.map((group) => (
          <View key={group.title} style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{group.title}</Text>
            <View style={styles.stack}>
              {group.items.map((item) => (
                <View key={item} style={styles.row}>
                  <Text style={styles.rowText}>{item}</Text>
                  <Ionicons name="chevron-forward" size={18} color={colors.mutedText} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
