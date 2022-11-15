import { PageOptions } from "../pages/index";

type Props = {
  pagesOptions: PageOptions;
  setPage: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ pagesOptions, setPage }) => (
  <section>
    <div>
      {Array.from({ length: pagesOptions.numberOfPages }).map(
        (_page, index) => (
          <button
            style={{
              color: pagesOptions.current === index + 1 ? "red" : "initial",
            }}
            onClick={(e) => setPage(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  </section>
);

export default Pagination;
