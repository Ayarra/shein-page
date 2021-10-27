import ProductIntro from "./ProductIntro";
import ProductModel from "./ProductModel";
import ProductPrice from "./ProductPrice";
import ProductBuyer from "./ProductBuyer";

function ProductSell(props) {
  return (
    <div className="md:w-1/2">
      <ProductIntro name={props.name} price={props.price}></ProductIntro>
      <hr />
      <ProductModel setName={props.setName}></ProductModel>
      <ProductPrice setPrice={props.setPrice}></ProductPrice>
      <ProductBuyer></ProductBuyer>
    </div>
  );
}

export default ProductSell;
