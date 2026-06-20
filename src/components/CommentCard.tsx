import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Comment } from "../types/Comment";

type Props = {
  comment: Comment;
};

export default function CommentCard({ comment }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
      <Image
  source={{
    uri: `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(comment.name)}&backgroundColor=CBD5E1&textColor=334155`,
  }}
  style={styles.avatar}
/>

        <View>
          <Text style={styles.name}>{comment.name}</Text>
        </View>
      </View>

      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  email: {
    color: "#666",
    fontSize: 13,
  },

  body: {
    color: "#444",
    lineHeight: 20,
  },
});