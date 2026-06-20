const BASE_URL = "https://gorest.co.in/public/v2";

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};

export const getCommentsByPostId = async (postId: number) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  return response.json();
};