import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createProfileStyles } from "../../styles/profileStyles";
import { getThemeColors } from "../../styles/theme";

const profilePosts = [
  {
    id: "1",
    time: "3h",
    content:
      "Spent today refining the way candidate profiles and job pages connect across the product. Small details really change how professional the whole experience feels.",
    likes: "48",
    comments: "9",
  },
  {
    id: "2",
    time: "2d",
    content:
      "Placeholder note for profile activity: sharing progress updates, hiring insights, and product decisions all in one place makes the profile feel alive.",
    likes: "76",
    comments: "14",
  },
];

const experienceHighlights = [
  {
    title: "Product Designer",
    company: "Worktopia",
    period: "2023 - Present",
  },
  {
    title: "UX Designer",
    company: "Bright Labs",
    period: "2020 - 2023",
  },
];

const educationHighlights = [
  "B.A. Design, University of Nairobi",
  "Google UX Design Certificate",
];

export default function ProfileScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createProfileStyles(colors);

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Profile</Text>
          <View style={styles.headerAction}>
            <Ionicons name="create-outline" size={16} color={colors.tabActive} />
            <Text style={styles.headerActionText}>Edit</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AK</Text>
            </View>
            <View style={styles.heroMeta}>
              <Text style={styles.name}>Aisha Kimani</Text>
              <Text style={styles.role}>Senior Product Designer</Text>
              <Text style={styles.location}>Nairobi, Kenya</Text>
            </View>
          </View>

          <Text style={styles.bio}>
            Designing hiring tools and professional workflows that feel calm, clear, and
            trustworthy for teams and candidates.
          </Text>

          <View style={styles.statRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>624</Text>
              <Text style={styles.statLabel}>Connections</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>18</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>9</Text>
              <Text style={styles.statLabel}>Certificates</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bodyText}>
            Placeholder professional profile for someone focused on product design, hiring
            systems, and the experience of connecting employers with strong candidates. This
            section can later hold a real bio, personal goals, and a richer summary of work.
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.stack}>
            {experienceHighlights.map((item) => (
              <View key={`${item.company}-${item.title}`} style={styles.listItem}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.listMeta}>
                  {item.company} | {item.period}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Education & certificates</Text>
          <View style={styles.stack}>
            {educationHighlights.map((item) => (
              <View key={item} style={styles.infoChip}>
                <Text style={styles.infoChipText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Posts</Text>
          <View style={styles.stack}>
            {profilePosts.map((post) => (
              <View key={post.id} style={styles.postCard}>
                <View style={styles.postHeader}>
                  <View style={styles.postHeaderLeft}>
                    <View style={styles.postAvatar}>
                      <Text style={styles.postAvatarText}>AK</Text>
                    </View>
                    <View>
                      <Text style={styles.postAuthor}>Aisha Kimani</Text>
                      <Text style={styles.postTime}>{post.time}</Text>
                    </View>
                  </View>
                  <Ionicons name="ellipsis-horizontal" size={18} color={colors.mutedText} />
                </View>

                <Text style={styles.bodyText}>{post.content}</Text>

                <View style={styles.postFooter}>
                  <Text style={styles.postStat}>{post.likes} likes</Text>
                  <Text style={styles.postStat}>{post.comments} comments</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
