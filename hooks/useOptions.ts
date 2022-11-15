import { useQuery } from "react-query";

const useOptions = () => {
  const getOptions = () =>
    Promise.all(
      ["/api/options/brand", "/api/options/model"].map(async (url) => {
        const resp = await fetch(url);
        const options = await resp.json();

        return options.data;
      })
    );

  const { isLoading, data = [] } = useQuery("optionsData", getOptions);

  const [brandOptions, modelOptions] = data;

  return { brandOptions, modelOptions, isLoading };
};

export default useOptions;
