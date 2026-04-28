import { Stack, router, useLocalSearchParams } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenTopBar } from "../../components/ScreenTopBar";
import { createCandidateProfileStyles } from "../../styles/candidateProfileStyles";
import { candidates } from "../../data/candidates";
import { getThemeColors } from "../../styles/theme";
import { getInitials } from "../../utils/text";

export default function CandidateProfileScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createCandidateProfileStyles(colors);
  const params = useLocalSearchParams<{ id?: string }>();
  const candidate = candidates.find((item) => item.id === params.id);

  if (!candidate) {
    return (
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.missingState}>
          <Text style={styles.missingTitle}>Candidate not found</Text>
          <Text style={styles.missingText}>
            This placeholder profile is missing, so there is nothing to show here yet.
          </Text>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenTopBar
          color={colors.text}
          title="Candidate profile"
          topBarStyle={styles.topBar}
          iconButtonStyle={styles.iconButton}
          titleStyle={styles.topBarTitle}
          spacerStyle={styles.topBarSpacer}
        />

        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{getInitials(candidate.name)}</Text>
            </View>
            <View style={styles.heroMeta}>
              <Text style={styles.name}>{candidate.name}</Text>
              <Text style={styles.role}>
                {candidate.field} | {candidate.yearsOfExperience} years experience
              </Text>
              <Text style={styles.location}>{candidate.location}</Text>
            </View>
          </View>
          <Text style={styles.bio}>{candidate.bio}</Text>

          <View style={styles.statRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{candidate.posts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{candidate.experience.length}</Text>
              <Text style={styles.statLabel}>Roles</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{candidate.certificates.length}</Text>
              <Text style={styles.statLabel}>Certificates</Text>
            </View>
          </View>
        </View>

        <SectionCard title="About" styles={styles}>
          <Text style={styles.bodyText}>{candidate.about}</Text>
        </SectionCard>

        <SectionCard title="Experience" styles={styles}>
          {candidate.experience.map((job) => (
            <View key={`${job.company}-${job.role}`} style={styles.listItem}>
              <Text style={styles.listTitle}>{job.role}</Text>
              <Text style={styles.listMeta}>
                {job.company} | {job.period}
              </Text>
              <Text style={styles.bodyText}>{job.summary}</Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Education" styles={styles}>
          {candidate.education.map((item) => (
            <View key={`${item.school}-${item.program}`} style={styles.listItem}>
              <Text style={styles.listTitle}>{item.program}</Text>
              <Text style={styles.listMeta}>
                {item.school} | {item.period}
              </Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Certificates" styles={styles}>
          {candidate.certificates.map((item) => (
            <View key={`${item.name}-${item.year}`} style={styles.listItem}>
              <Text style={styles.listTitle}>{item.name}</Text>
              <Text style={styles.listMeta}>
                {item.issuer} | {item.year}
              </Text>
            </View>
          ))}
        </SectionCard>

        <SectionCard title="Posts" styles={styles}>
          {candidate.posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <Text style={styles.postTime}>{post.time}</Text>
              <Text style={styles.bodyText}>{post.content}</Text>
              <Text style={styles.postStats}>
                {post.likes} likes | {post.comments} comments
              </Text>
            </View>
          ))}
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionCard(props: {
  title: string;
  children: ReactNode;
  styles: ReturnType<typeof createCandidateProfileStyles>;
}) {
  const styles = props.styles;

  return (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <View style={styles.sectionBody}>{props.children}</View>
    </View>
  );
}
