import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Pressable, Text, View } from "react-native";

type ScreenTopBarProps = {
  color: string;
  title: string;
  topBarStyle: StyleProp<ViewStyle>;
  iconButtonStyle: StyleProp<ViewStyle>;
  titleStyle: StyleProp<TextStyle>;
  spacerStyle: StyleProp<ViewStyle>;
};

export function ScreenTopBar(props: ScreenTopBarProps) {
  return (
    <View style={props.topBarStyle}>
      <Pressable onPress={() => router.back()} style={props.iconButtonStyle}>
        <Ionicons name="arrow-back" size={20} color={props.color} />
      </Pressable>
      <Text style={props.titleStyle}>{props.title}</Text>
      <View style={props.spacerStyle} />
    </View>
  );
}
