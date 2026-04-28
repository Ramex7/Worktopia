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

import { candidateFilters, candidates } from "../../data/candidates";
import { createCandidatesStyles } from "../../styles/candidatesStyles";
import { getThemeColors } from "../../styles/theme";
import { getInitials } from "../../utils/text";

export default function CandidatesScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createCandidatesStyles(colors);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  function openCandidateProfile(id: string) {
    router.push({
      pathname: "/candidates/[id]",
      params: { id },
    });
  }

  const visibleCandidates = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return candidates.filter((candidate) => {
      const matchesFilter =
        activeFilter === "All" || candidate.filters.includes(activeFilter);
      const matchesSearch =
        query.length === 0 ||
        candidate.name.toLowerCase().includes(query) ||
        candidate.field.toLowerCase().includes(query) ||
        candidate.bio.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <SafeAreaView style={styles.screen} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Candidates</Text>
          <Text style={styles.subtitle}>
            Browse placeholder talent profiles and open a deeper profile view.
          </Text>
        </View>

        <View style={styles.toolbar}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={colors.mutedText} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search by name, field, or bio"
              placeholderTextColor={colors.mutedText}
              style={styles.searchInput}
            />
          </View>
          <View style={styles.filterButton}>
            <Ionicons name="options-outline" size={18} color={colors.text} />
            <Text style={styles.filterButtonText}>Filter</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {candidateFilters.map((filter) => {
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
          <Text style={styles.resultsTitle}>
            {visibleCandidates.length} {visibleCandidates.length === 1 ? 'candidate' : 'candidates'}
          </Text>
          <Text style={styles.resultsHint}>Placeholder profiles</Text>
        </View>

        {visibleCandidates.map((candidate) => (
          <View key={candidate.id} style={styles.card}>
            <View style={styles.cardTopRow}>
              <Pressable
                onPress={() => openCandidateProfile(candidate.id)}
                style={styles.avatar}
              >
                <Text style={styles.avatarText}>{getInitials(candidate.name)}</Text>
              </Pressable>
              <View style={styles.meta}>
                <Pressable onPress={() => openCandidateProfile(candidate.id)}>
                  <Text style={styles.name}>{candidate.name}</Text>
                </Pressable>
                <Text style={styles.field}>
                  {candidate.field} | {candidate.yearsOfExperience} years experience
                </Text>
                <Text style={styles.location}>{candidate.location}</Text>
              </View>
            </View>

            <Text style={styles.bio}>{candidate.bio}</Text>

            <View style={styles.tagRow}>
              {candidate.filters.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.footerText}>
                {candidate.posts.length} {candidate.posts.length === 1 ? 'post' : 'posts'} | {candidate.certificates.length} {candidate.certificates.length === 1 ? 'certificate' : 'certificates'}
              </Text>
              <Pressable
                onPress={() => openCandidateProfile(candidate.id)}
                style={styles.viewButton}
              >
                <Text style={styles.viewButtonText}>View profile</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
