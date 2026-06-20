import React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { Post } from "../types/Post";

type Props = {
  post: Post;
  userName: string;
  onPress: () => void;
};

export default function PostCard({ post, userName, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.userRow}>
        <Image
          source={{
            uri: `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(
              userName
            )}&backgroundColor=EEF2FF&textColor=4F46E5`,
          }}
          style={styles.avatar}
        />

        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.body} numberOfLines={3}>
        {post.body}
      </Text>

      <View style={styles.commentsPill}>
        <Text style={styles.commentsPillText}>Details →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
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
    fontWeight: "700",
    color: "#4F46E5",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  body: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 24,
  },

  commentsPill: {
    alignSelf: "flex-start",
    marginTop: 12,
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  commentsPillText: {
    color: "#4F46E5",
    fontWeight: "700",
    fontSize: 14,
  },
});