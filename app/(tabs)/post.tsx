import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createPostStyles } from "../../styles/postStyles";
import { getThemeColors } from "../../styles/theme";

const quickOptions = [
  { label: "Photo", icon: "image-outline" as const },
  { label: "Video", icon: "videocam-outline" as const },
  { label: "Document", icon: "document-text-outline" as const },
];

const audienceOptions = [
  { label: "Anyone", detail: "Visible across your network" },
  { label: "Connections", detail: "Only people you know" },
];

const placeholders = [
  "Hiring update",
  "Role spotlight",
  "Team win",
  "Career tip",
];

export default function PostScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createPostStyles(colors);

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>Worktopia</Text>
            <Text style={styles.title}>Create post</Text>
            <Text style={styles.subtitle}>
              Draft a placeholder post layout for updates, hiring notes, or team news.
            </Text>
          </View>
          <View style={styles.headerBadge}>
            <Ionicons name="create-outline" size={16} color={colors.tabActive} />
            <Text style={styles.headerBadgeText}>Draft</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.authorRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>WK</Text>
            </View>
            <View style={styles.authorMeta}>
              <Text style={styles.authorName}>Worktopia Studio</Text>
              <View style={styles.authorAudience}>
                <Ionicons name="globe-outline" size={13} color={colors.mutedText} />
                <Text style={styles.authorAudienceText}>Posting to your professional feed</Text>
              </View>
            </View>
          </View>

          <View style={styles.fakeTextArea}>
            <Text style={styles.textAreaPrompt}>What would you like to talk about?</Text>
            <Text style={styles.textAreaBody}>
              This is a placeholder composition area for writing a hiring announcement,
              sharing a quick team update, or posting a professional insight.
            </Text>
          </View>

          <View style={styles.optionRow}>
            {quickOptions.map((option) => (
              <View key={option.label} style={styles.optionChip}>
                <Ionicons name={option.icon} size={18} color={colors.tabActive} />
                <Text style={styles.optionChipText}>{option.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Audience</Text>
          <View style={styles.stack}>
            {audienceOptions.map((option, index) => (
              <View key={option.label} style={styles.rowCard}>
                <View style={styles.rowCardLeft}>
                  <View
                    style={[
                      styles.selectionDot,
                      index === 0 && { borderColor: colors.tabActive },
                    ]}
                  >
                    {index === 0 ? <View style={styles.selectionDotInner} /> : null}
                  </View>
                  <View>
                    <Text style={styles.rowTitle}>{option.label}</Text>
                    <Text style={styles.rowDetail}>{option.detail}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.mutedText} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Post format</Text>
          <View style={styles.placeholderGrid}>
            {placeholders.map((item) => (
              <View key={item} style={styles.placeholderTile}>
                <Text style={styles.placeholderTileText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Post preview</Text>
          <View style={styles.previewCard}>
            <View style={styles.previewTopRow}>
              <View style={styles.previewAvatar}>
                <Text style={styles.previewAvatarText}>WK</Text>
              </View>
              <View style={styles.previewMeta}>
                <Text style={styles.previewName}>Worktopia Studio</Text>
                <Text style={styles.previewRole}>Draft preview</Text>
              </View>
            </View>
            <Text style={styles.previewContent}>
              We are preparing a placeholder post card here so the publishing flow feels real
              before any backend or interaction logic is added.
            </Text>
            <View style={styles.previewFooter}>
              <Text style={styles.previewStat}>124 reactions</Text>
              <Text style={styles.previewStat}>17 comments</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionRow}>
          <View style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Save draft</Text>
          </View>
          <View style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Publish</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
