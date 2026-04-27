import { Text, View, useColorScheme } from "react-native";

import { createTabStyles } from "../../styles/tabStyles";
import { getThemeColors } from "../../styles/theme";

export default function HomeScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createTabStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.homeTitle]}>Worktopia</Text>
      <Text style={[styles.subtitle, styles.homeSubtitle]}>Home</Text>
    </View>
  );
}
