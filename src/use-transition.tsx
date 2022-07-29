import * as React from "react";

// Generate 10 thousand products
const products: string[] = [];
let i = 0;
while (i < 10000) {
  products.push("Products" + i);
  i++;
}

const Transition: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const [text, setText] = React.useState("");

  const filteredProducts = React.useMemo(
    () =>
      products.filter((product) =>
        text ? product.toLowerCase().includes(text.toLowerCase()) : true
      ),
    [text]
  );

  const onChange = (value: string) => {
    startTransition(() => setText(value));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="rounded-lg border px-3 py-2 text-base font-medium focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500"
      />
      <p className="my-2">{isPending && "updating list"}</p>
      <div className="mt-8">
        {filteredProducts.map((product, key) => (
          <p key={key} className="text-base font-medium">
            {product}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Transition;
