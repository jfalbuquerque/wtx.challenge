/* eslint-disable @next/next/no-img-element */
import { Vehicle } from "../pages/index";
import styles from "../styles/Results.module.css";

type Props = {
  results: Vehicle[];
};

const getPriceFormated = (currency: string, price: number) => {
  const currencyFormat = Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency,
  });

  return currencyFormat.format(price);
};

const Results: React.FC<Props> = ({ results }) => (
  <section>
    <h2>Results</h2>
    <div>
      {results.map((result) => (
        <article key={result.id} className={styles.card}>
          <img src={result.image} alt={result.name} />
          <div className={styles.description}>
            <p>{`${result.brand} ${result.model} ${result.name}`}</p>
            <h2>
              {getPriceFormated(result.price?.currency, result.price?.value)}
            </h2>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Results;
