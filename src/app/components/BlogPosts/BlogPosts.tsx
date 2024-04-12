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
    <div className="p-14 card bg-base-400">
      <h1 className="text-3xl">Want to read more? Check out my blog</h1>
      <div className="pt-4">
        {articles.map((article) => (
          <a
            className="card md:w-2/5  bg-base-300 shadow-xl"
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
