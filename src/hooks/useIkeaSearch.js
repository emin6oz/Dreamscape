import { useState, useEffect } from "react";
import axios from "axios";

const useIkeaSearch = (keyword) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/ikea/search", {
          params: { q: keyword },
        });
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return { data, loading, error };
};

export default useIkeaSearch;
