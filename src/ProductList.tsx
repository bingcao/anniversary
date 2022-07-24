import React, { useEffect, useState } from "react";

import { fetchProducts } from "./firebase";
import { Product } from "./types";
import "./ProductList.css";

export interface ProductListProps {}

export default function ProductList(props: ProductListProps): JSX.Element {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {products.map((product, i) => (
        <div key={i}>
          <div className="name">{product.name}</div>
          <div>Price: ${product.price.toFixed(2)}</div>
          <div>Rating: {product.rating}</div>
          <a href={product.url}>Link</a>
          <div>{product.notes}</div>
        </div>
      ))}
    </>
  );
}
