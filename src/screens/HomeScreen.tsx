import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { getPosts } from "../services/gorestService";
import PostCard from "../components/PostCard";
import { Post } from "../types/Post";

export default function HomeScreen({ navigation }: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();
      setPosts(data);
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
      <Text style={styles.header}>Social Feed</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
            <PostCard
  post={item}
  userName={`User ${item.user_id}`}
  onPress={() =>
    navigation.navigate("PostDetails", {
      post: item,
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
    backgroundColor: "#EEF2FF",
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 20,
    marginTop: 10,
  },
});