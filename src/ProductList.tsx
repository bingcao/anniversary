import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import { fetchProducts } from "./firebase";
import { Product } from "./types";
import "./ProductList.css";
import { ListGroup } from "react-bootstrap";

export interface ProductListProps {}

export default function ProductList(props: ProductListProps): JSX.Element {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="list-title">
        All products
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            navigate("/product-form");
          }}
        >
          Add product
        </Button>
      </div>
      {products.map((product, i) => (
        <Card key={i} bg="info" className="card">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.notes.length > 0 ? product.notes : "No notes"}
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
            <ListGroup.Item>
              <Card.Link href={product.url}>Link</Card.Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </>
  );
}
