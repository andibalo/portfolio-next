import React from "react";
import BaseLayout from "@/components/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";

const Portfolio = () => {
  const { data, error, loading } = useGetPosts();

  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolio</h1>
        {loading && <p>Loading data...</p>}
        <ul>
          {data &&
            data.map((post) => (
              <li key={post.id}>
                <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
        </ul>
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
