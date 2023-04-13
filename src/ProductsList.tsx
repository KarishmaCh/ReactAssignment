import React, { useEffect, useState } from "react";
import { Product } from "./products";

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // new state variable

  const handleAddClick = () => {
    console.log("Add button clicked");

  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const handleSortChange = () => {
    const sorted = [...products].sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setSortedProducts(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // toggle sort order
  };;

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="button-bar">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary mr-2" onClick={handleSortChange}>
            {sortOrder === "asc" ? "Sort ascending" : "Sort descending"}

          </button>
        </div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.sort((a, b) =>
              sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            ).map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
