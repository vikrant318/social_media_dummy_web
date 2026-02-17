import { request } from "./httpClient";

export const fetchPosts = ({ signal } = {}) => {
  return request("/posts", { signal });
};

export const createPost = (postPayload, { signal } = {}) => {
  return request("/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postPayload),
    signal,
  });
};
