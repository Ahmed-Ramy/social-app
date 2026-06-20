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
    uri: `https://api.dicebear.com/9.x/initials/png?seed=${encodeURIComponent(comment.name)}&backgroundColor=EEF2FF&textColor=4F46E5`,
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
    marginBottom: 12,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 2,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4F46E5",
  },

  email: {
    color: "#64748B",
    fontSize: 13,
  },

  body: {
    fontSize: 15,
    lineHeight: 22,
    color: "#1F2937",
  }
});