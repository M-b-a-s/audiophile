import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/queries/product";

export function Products() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      {data?.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}