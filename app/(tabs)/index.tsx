import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createHomeStyles } from "../../styles/homeStyles";
import { getThemeColors } from "../../styles/theme";
import { getInitials } from "../../utils/text";

type FeedActionIcon = ComponentProps<typeof Ionicons>["name"];

const placeholderPosts = [
  {
    id: "1",
    author: "Aisha Kimani",
    role: "Senior Recruiter at Worktopia",
    time: "2h",
    content:
      "We are expanding our product design team and looking for people who love turning messy workflows into calm, useful experiences.",
    likes: "142",
    comments: "18",
    reposts: "7",
  },
  {
    id: "2",
    author: "Daniel Otieno",
    role: "Frontend Engineer",
    time: "4h",
    content:
      "Spent the morning refining our candidate pipeline dashboard. Tiny spacing and copy changes made the whole flow feel more trustworthy.",
    likes: "89",
    comments: "12",
    reposts: "4",
  },
  {
    id: "3",
    author: "Maya Njeri",
    role: "Talent Partner",
    time: "Yesterday",
    content:
      "Placeholder update for the team feed: imagine a thoughtful post here about hiring momentum, community wins, and the next round of open roles.",
    likes: "203",
    comments: "29",
    reposts: "15",
  },
];

const actionItems: { label: string; icon: FeedActionIcon }[] = [
  { label: "Like", icon: "thumbs-up-outline" },
  { label: "Dislike", icon: "thumbs-down-outline" },
  { label: "Comment", icon: "chatbubble-outline" },
  { label: "Repost", icon: "repeat-outline" },
];

export default function HomeScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createHomeStyles(colors);

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Work Feed</Text>
            <Text style={styles.headerSubtitle}>
              Catch up on posts from your network, hiring teams and potential candidates.
            </Text>
          </View>
        </View>

        {placeholderPosts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <View style={styles.postIdentity}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postAvatarText}>{getInitials(post.author)}</Text>
                </View>
                <View style={styles.postMeta}>
                  <Text style={styles.postAuthor}>{post.author}</Text>
                  <Text style={styles.postRole}>{post.role}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>
              <Ionicons name="ellipsis-horizontal" size={20} color={colors.mutedText} />
            </View>

            <Text style={styles.postContent}>{post.content}</Text>

            <View style={styles.postStats}>
              <Text style={styles.postStatsText}>{post.likes} reactions</Text>
              <Text style={styles.postStatsText}>
                {post.comments} comments | {post.reposts} reposts
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.postActions}>
              {actionItems.map((action) => (
                <Pressable key={action.label} style={styles.postActionButton}>
                  <Ionicons name={action.icon} size={18} color={colors.mutedText} />
                  <Text style={styles.postActionText}>{action.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
