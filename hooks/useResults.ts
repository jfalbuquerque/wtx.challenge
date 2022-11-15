import { useQuery } from "react-query";

const useResults = (filters: {
  brand: string;
  model: string;
  page: number;
}) => {
  const getResults = ({
    brand,
    model,
    page,
  }: {
    brand: string;
    model: string;
    page: number;
  }) =>
    fetch(`/api/search?brand=${brand}&model=${model}&page=${page}`)
      .then((r) => r.json())
      .then((data) => data);

  const { isLoading, data } = useQuery(["optionsResults", filters], () =>
    getResults(filters)
  );

  return { results: data?.data, pagesOptions: data?.metadata, isLoading };
};

export default useResults;
