import { useEffect, useState } from "react";
import Item from "./Item";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge rounded-pill bg-danger">News</span></h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{`Error: ${error}`}</p>
      ) : articles.length === 0 ? (
        <p className="text-center">No articles found for the selected category.</p>
      ) : (
        articles.map((news, index) => (
          <Item key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      )}
    </div>
  );
};

export default News;
