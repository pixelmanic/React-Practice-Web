import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.status !== 200) {
          throw Error("server didn't respond");
        }
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, isError };
};

export default useAxios;
