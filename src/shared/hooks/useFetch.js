import { useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [{ isLoading, data, error }, fetchData];
}

export default useFetch;
