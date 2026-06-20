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
  const { post } = route.params;

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
                  uri: `https://api.dicebear.com/9.x/initials/png?seed=User ${post.user_id}&backgroundColor=CBD5E1&textColor=334155`,
                }}
                style={styles.avatar}
              />
  
              <Text style={styles.userName}>User {post.user_id}</Text>
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
  },

  postCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
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
    fontWeight: "600",
    color: "#1E3A8A",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 12,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },

  commentsHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 12,
  },

  container: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },
  
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
});