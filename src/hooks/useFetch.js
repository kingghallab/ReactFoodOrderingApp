import { useEffect, useState } from "react";
export function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [errorUpdatingLocalData, setErrorUpdatingLocalData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (err) {
        setFetchedData(fetchedData);
        setErrorUpdatingLocalData({
          message: err.message || "failed to fetch data",
        });
      }
    }
    getData();
  }, [fetchFn]);

  return {
    fetchedData,
    errorUpdatingLocalData,
  };
}
