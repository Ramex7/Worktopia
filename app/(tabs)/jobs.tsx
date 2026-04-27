import { Text, View, useColorScheme } from "react-native";

import { createTabStyles } from "../../styles/tabStyles";
import { getThemeColors } from "../../styles/theme";

export default function JobsScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createTabStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs</Text>
      <Text style={styles.subtitle}>Your job details will show here.</Text>
    </View>
  );
}
