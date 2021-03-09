import useSWR from "swr";

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/v1/posts", (url) =>
    fetch(url).then((res) => res.json())
  );

  return { data, error, loading: !data && !error, ...rest };
};

export const useGetPostById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/posts/${id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  return { data, error, loading: !data && !error, ...rest };
};
