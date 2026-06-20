import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { getPosts, getUserById } from "../services/gorestService";
import PostCard from "../components/PostCard";
import { Post } from "../types/Post";

export default function HomeScreen({ navigation }: any) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const postsData = await getPosts();

      const postsWithUsers = await Promise.all(
        postsData.map(async (post: Post) => {
          const user = await getUserById(post.user_id);

          return {
            ...post,
            userName: user.name || `User ${post.user_id}`,
          };
        })
      );

      setPosts(postsWithUsers);
      setLoading(false);
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
   
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            userName={item.userName}
            onPress={() =>
              navigation.navigate("Post Details", {
                post: item,
                userName: item.userName,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});