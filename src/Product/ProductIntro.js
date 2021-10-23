function ProductIntro(props) {
  const productName = props.name.replace("/static/media/", "");

  return (
    <div>
      <p className="text-lg pb-1">E-CARTE CADEAU</p>
      <p className="text-xs text-customD pb-2">
        SKU: {productName.replace(/(.png|.webp)/, "")}
      </p>
      <div className="flex pb-6">
        <p className="text-3xl font-bold text-red-500 pr-4">{props.price[0]}</p>
        {props.price[1] === "DH570.00" || (
          <p className="text-xs line-through pt-4">{props.price[1]}</p>
        )}
      </div>
    </div>
  );
}

export default ProductIntro;
