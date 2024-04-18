import React, { useEffect, useState } from "react";

const BlogPosts = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    cover_image: string;
  }

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mmcode")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setArticles(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <div className="p-14">
      <h1 className="text-2xl font-bold justify-center flex">
        Want to read more? Check out my blog
      </h1>
      <div className="pt-4 justify-center flex">
        {articles.map((article) => (
          <a
            key={article.id}
            className="card max-w-3xl bg-base-300 shadow-xl"
            href={article.url}
          >
            <figure>
              <img src={article.cover_image} alt="Blog Post Cover" />
            </figure>
            <div className="card-body" key={article.id}>
              <h2 className="card-title">{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
