import { useEffect, useState } from "react";
import PageNumbers from "./PageNumbers";
import ProductCard from "./ProductCard";
import "./Pagination.styles.css";

const PAGE_SIZE = 10;

export default function Pagination() {
  const [products, setProducts] = useState([]);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentProducts = products.slice(start, end);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const results = await data.json();
    setProducts(results.products);
    console.log("results => ", results);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return products.length === 0 ? (
    <h1>No Products Found</h1>
  ) : (
    <div className="App">
      <h1>Products Pagination</h1>
      <div className="pagination-container">
        <PageNumbers
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          noOfPages={noOfPages}
        />
      </div>

      <div className="products-container">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
