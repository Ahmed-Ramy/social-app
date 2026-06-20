import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Comment } from "../types/Comment";

type Props = {
  comment: Comment;
};

export default function CommentCard({ comment }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{comment.name}</Text>
      <Text style={styles.email}>{comment.email}</Text>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "#777",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: "#333",
  },
});