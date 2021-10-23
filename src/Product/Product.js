import { useState } from "react";
import Discount from "./Discount";

import ProductDescription from "./ProductDescription";
import ProductSell from "./ProductSell";

function Product() {
  const [name, setName] = useState(
    "/static/media/gift-200311-copy-22336-22338.708f65be.png"
  );
  const [price, setPrice] = useState(["DH570.00", ""]);

  return (
    <div className="mx-80 pb-40">
      <div className="text-customD text-sm p-3">
        <button className="hover:text-black hover:underline">Acceuil</button>
        <span> / </span>
        <button className="hover:text-black hover:underline">
          Carte Cadeau
        </button>
      </div>
      <div className="flex pb-10">
        <ProductDescription name={name}></ProductDescription>
        <ProductSell
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
        ></ProductSell>
      </div>
      <Discount></Discount>
    </div>
  );
}

export default Product;
