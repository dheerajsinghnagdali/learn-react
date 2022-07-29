import * as React from "react";

// Generate 10 thousand products
const products: string[] = [];
let i = 0;
while (i < 10000) {
  products.push("Products" + i);
  i++;
}

const Transition: React.FC = () => {
  const [text, setText] = React.useState("");

  const filteredProducts = React.useMemo(
    () =>
      products.filter((product) =>
        text ? product.toLowerCase().includes(text.toLowerCase()) : true
      ),
    [text]
  );

  const onChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        value={text}
        className="rounded-lg border px-3 py-2 text-base font-medium focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

const ProductList: React.FC<{ products: string[] }> = ({ products }) => {
  const deferredValue = React.useDeferredValue(products);

  return (
    <div className="mt-8">
      {deferredValue.map((product, key) => (
        <p key={key} className="text-base font-medium">
          {product}
        </p>
      ))}
    </div>
  );
};

export default Transition;
