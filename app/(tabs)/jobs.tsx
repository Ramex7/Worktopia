import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { jobFilters, jobs } from "../../data/jobs";
import { createJobsStyles } from "../../styles/jobsStyles";
import { getThemeColors } from "../../styles/theme";

export default function JobsScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createJobsStyles(colors);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  function openJobDetails(id: string) {
    router.push({
      pathname: "/jobs/[id]",
      params: { id },
    });
  }

  const visibleJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesFilter = activeFilter === "All" || job.filters.includes(activeFilter);
      const matchesSearch =
        query.length === 0 ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.field.toLowerCase().includes(query) ||
        job.summary.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Jobs</Text>
          <Text style={styles.subtitle}>
            Browse placeholder openings and open the full role page for more detail.
          </Text>
        </View>

        <View style={styles.toolbar}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={colors.mutedText} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search by role, company, or field"
              placeholderTextColor={colors.mutedText}
              style={styles.searchInput}
            />
          </View>
          <Pressable style={styles.filterButton}>
            <Ionicons name="options-outline" size={18} color={colors.text} />
            <Text style={styles.filterButtonText}>Filter</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {jobFilters.map((filter) => {
            const selected = filter === activeFilter;

            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[
                  styles.filterChip,
                  selected && {
                    backgroundColor: colors.tabActive,
                    borderColor: colors.tabActive,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    selected && { color: colors.surface },
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>{visibleJobs.length} roles</Text>
          <Text style={styles.resultsHint}>Placeholder listings</Text>
        </View>

        {visibleJobs.map((job) => (
          <Pressable
            key={job.id}
            onPress={() => openJobDetails(job.id)}
            style={styles.card}
          >
            <View style={styles.cardTop}>
              <View style={styles.companyBadge}>
                <Text style={styles.companyBadgeText}>
                  {job.company
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </Text>
              </View>
              <View style={styles.cardMeta}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
            </View>

            <Text style={styles.summary}>{job.summary}</Text>

            <View style={styles.specRow}>
              <View style={styles.specChip}>
                <Text style={styles.specChipText}>{job.level}</Text>
              </View>
              <View style={styles.specChip}>
                <Text style={styles.specChipText}>{job.yearsRequired}+ years</Text>
              </View>
              <View style={styles.specChip}>
                <Text style={styles.specChipText}>{job.workMode}</Text>
              </View>
              <View style={styles.specChip}>
                <Text style={styles.specChipText}>{job.employmentType}</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.footerText}>
                {job.field} | Posted {job.posted}
              </Text>
              <View style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View job</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
