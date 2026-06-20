import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
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

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        {post.title}
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {post.body}
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Comments
      </Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CommentCard comment={item} />}
        />
      )}
    </View>
  );
}