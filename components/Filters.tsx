import { Options } from "../pages/index";

type Props = {
  brand: string;
  setBrand: (brand: string) => void;
  brandOptions?: Options["data"];
  model: string;
  setModel: (brand: string) => void;
  modelOptions?: Options["data"];
  clearAllFilters: () => void;
};

const Filters: React.FC<Props> = ({
  brand,
  setBrand,
  brandOptions = [],
  model,
  setModel,
  clearAllFilters,
  modelOptions = [],
}) => (
  <section>
    <h2>Filters</h2>
    <div>
      <label htmlFor="brand-select">Brand - {brand}</label>
      <select
        id="brand-select"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option key="default" value="">
          Select brand
        </option>
        {brandOptions.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="brand-select">Model - {model}</label>
      <select
        id="brand-select"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option key="default" value="">
          Select model
        </option>
        {modelOptions.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    <div>
      <button onClick={() => clearAllFilters()}>Clear all filters</button>
    </div>
  </section>
);

export default Filters;
