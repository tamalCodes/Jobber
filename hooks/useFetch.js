import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY, RAPID_API_HOST } from "react-native-dotenv";

const rapidapikey = RAPID_API_KEY;
const rapidapihost = RAPID_API_HOST;

const useFetch = (endpoint, query) => {
  const [popularjobs, setpopularjobs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidapikey,
      "X-RapidAPI-Host": rapidapihost,
    },
    params: { ...query },
  };

  const fetchData = async () => {
    try {
      setisLoading(true);

      const response = await axios.request(options);
      setpopularjobs(response.data.data);

      setisLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return { popularjobs, error, isLoading, refetch };
};

export default useFetch;
