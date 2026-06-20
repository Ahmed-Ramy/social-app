import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";

import { getCommentsByPostId } from "../services/gorestService";
import CommentCard from "../components/CommentCard";
import { Comment } from "../types/Comment";

export default function PostDetailsScreen({ route }: any) {
  const { post, userName } = route.params;

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComments() {
      const data = await getCommentsByPostId(post.id);
      setComments(data);
      setLoading(false);
    }

    loadComments();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={comments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CommentCard comment={item} />}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        <>
          <View style={styles.postCard}>
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
            <Text style={styles.body}>{post.body}</Text>
          </View>

          <Text style={styles.commentsHeader}>Comments</Text>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  listContent: {
    padding: 16,
    paddingBottom: 20,
  },

  postCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,

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
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4F46E5",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 12,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#1F2937",
  },

  commentsHeader: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 12,
  },
});