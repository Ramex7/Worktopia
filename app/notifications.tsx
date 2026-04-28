import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenTopBar } from "../components/ScreenTopBar";
import { createNotificationsStyles } from "../styles/notificationsStyles";
import { getThemeColors } from "../styles/theme";

const notifications = [
  {
    id: "1",
    title: "New candidate viewed your profile",
    detail: "A placeholder candidate profile opened your page and reviewed your recent posts.",
    time: "5m ago",
  },
  {
    id: "2",
    title: "Application update available",
    detail: "A placeholder job application has moved to the next stage in the hiring flow.",
    time: "1h ago",
  },
  {
    id: "3",
    title: "Post engagement increased",
    detail: "Your latest placeholder post picked up more likes and comments from your network.",
    time: "Yesterday",
  },
];

export default function NotificationsScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createNotificationsStyles(colors);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenTopBar
          color={colors.text}
          title="Notifications"
          topBarStyle={styles.topBar}
          iconButtonStyle={styles.iconButton}
          titleStyle={styles.topBarTitle}
          spacerStyle={styles.topBarSpacer}
        />

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Activity inbox</Text>
          <Text style={styles.heroText}>
            Placeholder alerts for profile visits, post activity, hiring updates, and workflow reminders.
          </Text>
        </View>

        {notifications.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardIcon}>
              <Ionicons name="notifications" size={18} color={colors.tabActive} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.detail}</Text>
              <Text style={styles.cardTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
