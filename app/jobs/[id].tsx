import { Stack, router, useLocalSearchParams } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, ScrollView, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenTopBar } from "../../components/ScreenTopBar";
import { jobs } from "../../data/jobs";
import { createJobProfileStyles } from "../../styles/jobProfileStyles";
import { getThemeColors } from "../../styles/theme";

export default function JobProfileScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createJobProfileStyles(colors);
  const params = useLocalSearchParams<{ id?: string }>();
  const job = jobs.find((item) => item.id === params.id);

  if (!job) {
    return (
      <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.missingState}>
          <Text style={styles.missingTitle}>Job not found</Text>
          <Text style={styles.missingText}>
            This placeholder role is missing, so there is nothing to show here yet.
          </Text>
          <Pressable onPress={() => router.back()} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.screenBody}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ScreenTopBar
            color={colors.text}
            title="Job details"
            topBarStyle={styles.topBar}
            iconButtonStyle={styles.iconButton}
            titleStyle={styles.topBarTitle}
            spacerStyle={styles.topBarSpacer}
          />

          <View style={styles.heroCard}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.metaLine}>
              {job.location} | {job.workMode} | {job.employmentType}
            </Text>
            <Text style={styles.metaLine}>
              {job.level} level | {job.yearsRequired}+ years experience
            </Text>
            <Text style={styles.summary}>{job.summary}</Text>

            <View style={styles.tagRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{job.field}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{job.posted}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{job.salary}</Text>
              </View>
            </View>
          </View>

          <SectionCard title="Overview" styles={styles}>
            <Text style={styles.bodyText}>{job.overview}</Text>
          </SectionCard>

          <SectionCard title="Role snapshot" styles={styles}>
            <View style={styles.snapshotGrid}>
              <Snapshot label="Experience" value={`${job.yearsRequired}+ years`} styles={styles} />
              <Snapshot label="Level" value={job.level} styles={styles} />
              <Snapshot label="Work mode" value={job.workMode} styles={styles} />
              <Snapshot label="Schedule" value={job.employmentType} styles={styles} />
            </View>
          </SectionCard>

          <SectionCard title="Responsibilities" styles={styles}>
            {job.responsibilities.map((item) => (
              <View key={item.title} style={styles.listItem}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.detail}</Text>
              </View>
            ))}
          </SectionCard>

          <SectionCard title="Requirements" styles={styles}>
            {job.requirements.map((item) => (
              <View key={item.title} style={styles.listItem}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.detail}</Text>
              </View>
            ))}
          </SectionCard>

          <SectionCard title="Benefits" styles={styles}>
            {job.benefits.map((item) => (
              <View key={item.title} style={styles.listItem}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.detail}</Text>
              </View>
            ))}
          </SectionCard>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.bottomMeta}>
            <Text style={styles.bottomMetaTitle}>Ready to apply?</Text>
            <Text style={styles.bottomMetaText}>Placeholder action only</Text>
          </View>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function SectionCard(props: {
  title: string;
  children: ReactNode;
  styles: ReturnType<typeof createJobProfileStyles>;
}) {
  const styles = props.styles;

  return (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <View style={styles.sectionBody}>{props.children}</View>
    </View>
  );
}

function Snapshot(props: {
  label: string;
  value: string;
  styles: ReturnType<typeof createJobProfileStyles>;
}) {
  const styles = props.styles;

  return (
    <View style={styles.snapshotCard}>
      <Text style={styles.snapshotLabel}>{props.label}</Text>
      <Text style={styles.snapshotValue}>{props.value}</Text>
    </View>
  );
}
