import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Login from "./login";
import Filters from "../components/Filters";
import Results from "../components/Results";
import Pagination from "../components/Pagination";

import useOptions from "../hooks/useOptions";
import useResults from "../hooks/useResults";
import useFilters from "../hooks/useFilters";

import useSessionStorage from "../hooks/useSessionStorage";

export type Vehicle = {
  image: string;
  name: string;
  model: string;
  brand: string;
  id: string;
  price: {
    value: number;
    currency: string;
  };
};

export type Options = { data: { value: string; label: string }[] };

export type PageOptions = {
  numberOfPages: number;
  hasNext: boolean;
  current: number;
};

/* const fetchSearchResults = async ({
  brand,
  model,
  page,
}: {
  brand: string;
  model: string;
  page: number;
}): Promise<{
  data: Vehicle[];
  metadata: { numberOfPages: number; hasNext: boolean; current: number };
}> => {
  return fetch(`/api/search?brand=${brand}&model=${model}&page=${page}`)
    .then((r) => r.json())
    .then((data) => data);
};

const fetchBrandOptions = async (): Promise<Options | any> => {
  return fetch("/api/options/brand")
    .then((r) => r.json())
    .then((data) => data);
};
const fetchModelOptions = async (): Promise<Options | any> => {
  return fetch("/api/options/model")
    .then((r) => r.json())
    .then((data) => data);
}; */

const Home: NextPage = () => {
  const { filters, setFilters, clearFilters } = useFilters();
  const [storage] = useSessionStorage({
    key: "wxt_token",
  });

  const {
    brandOptions,
    modelOptions,
    isLoading: optionsLoading,
  } = useOptions();

  const {
    isLoading: resultsLoading,
    results,
    pagesOptions,
  } = useResults(filters);

  const loading = optionsLoading || resultsLoading;

  if (loading) {
    return <div>App is loading</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to WTX search</h1>
      {storage ? (
        <section>
          <div>
            <Link href="/my-account">Go to my account page</Link>
          </div>
        </section>
      ) : (
        <Login />
      )}

      <Filters
        brand={filters.brand}
        setBrand={(brand) => setFilters({ brand })}
        model={filters.model}
        setModel={(model) => setFilters({ model })}
        brandOptions={brandOptions}
        clearAllFilters={clearFilters}
        modelOptions={modelOptions}
      />

      <Results results={results} />

      <Pagination
        pagesOptions={pagesOptions}
        setPage={(page) => setFilters({ page })}
      />
    </div>
  );
};

export default Home;
