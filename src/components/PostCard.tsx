import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Post } from "../types/Post";

type Props = {
  post: Post;
  userName: string;
  onPress: () => void;
};

export default function PostCard({
  post,
  userName,
  onPress,
}: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.userRow}>
      <Image
  source={{
    uri: `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(userName)}&backgroundColor=CBD5E1&textColor=334155`,
  }}
  style={styles.avatar}
/>

        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.body} numberOfLines={3}>
        {post.body}
      </Text>

      <Text style={styles.readMore}>Read Comments →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E3A8A",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 10,
  },

  body: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },

  readMore: {
    marginTop: 12,
    color: "#2563EB",
    fontWeight: "600",
  },
});