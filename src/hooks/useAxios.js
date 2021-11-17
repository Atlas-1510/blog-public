import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = function (url) {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setError(false);
        const result = await axios(url);
        setResult(result.data);
      } catch (err) {
        setError(true);
      }
    }
    fetch();
  }, [url]);

  return { result, error };
};

export default useFetch;
