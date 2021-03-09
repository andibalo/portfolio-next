import React from "react";
import BaseLayout from "@/components/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetPostById } from "@/actions";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();

  const { data, error, loading } = useGetPostById(router.query.id);

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading data...</p>}
        {data && (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
