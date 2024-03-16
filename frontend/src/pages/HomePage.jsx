import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-full">
        <Navbar />
        <main>
          <div className="mx-auto max-[1440px]">
            <ProductList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
