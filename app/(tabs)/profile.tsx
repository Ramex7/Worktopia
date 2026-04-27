import { Text, View, useColorScheme } from "react-native";

import { createTabStyles } from "../../styles/tabStyles";
import { getThemeColors } from "../../styles/theme";

export default function ProfileScreen() {
  const colors = getThemeColors(useColorScheme());
  const styles = createTabStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your account details will show here.</Text>
    </View>
  );
}
