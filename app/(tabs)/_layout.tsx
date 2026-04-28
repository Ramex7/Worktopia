import type { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View, useColorScheme } from "react-native";

import { getThemeColors } from "../../styles/theme";

type TabIconName = ComponentProps<typeof Ionicons>["name"];

function TabBarIcon(props: { name: TabIconName; color: string; focused: boolean }) {
  return (
    <Ionicons
      name={props.name}
      size={props.focused ? 24 : 22}
      color={props.color}
    />
  );
}

function TabsHeader() {
  const colors = getThemeColors(useColorScheme());

  return (
    <View style={styles.headerBrand}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.headerLogo}
      />
      <Text style={[styles.headerTitle, { color: colors.text }]}>Worktopia</Text>
    </View>
  );
}

function HeaderActions() {
  const colors = getThemeColors(useColorScheme());

  return (
    <View style={styles.headerActions}>
      <Pressable
        onPress={() => router.push("/notifications")}
        style={[styles.headerButton, { borderColor: colors.border, backgroundColor: colors.surface }]}
      >
        <View style={styles.notificationWrap}>
          <Ionicons name="notifications-outline" size={18} color={colors.text} />
          <View style={[styles.notificationDot, { backgroundColor: colors.tabActive }]} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => router.push("/settings")}
        style={[styles.headerButton, { borderColor: colors.border, backgroundColor: colors.surface }]}
      >
        <Ionicons name="settings-outline" size={18} color={colors.text} />
      </Pressable>
    </View>
  );
}

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const colors = getThemeColors(colorScheme);

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: () => <TabsHeader />,
        headerRight: () => <HeaderActions />,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerShadowVisible: false,
        headerTitleContainerStyle: {
          left: 16,
        },
        headerRightContainerStyle: {
          paddingRight: 16,
        },
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        sceneStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="candidates"
        options={{
          title: "Candidates",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="people" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="add-circle" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="briefcase" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLogo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationWrap: {
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
