const prices = [570, 760, 950, 1900, 2850, 4750];

function formatMoney(n) {
  return "DH" + (Math.round(n * 100) / 100).toLocaleString() + ".00";
}

function moneyDiscount(n) {
  switch (n) {
    case 570:
      return formatMoney(n);
    case 760:
      return formatMoney(n - 60);
    case 950:
      return formatMoney(n - 85);
    case 1900:
      return formatMoney(n - 210);
    case 2850:
      return formatMoney(n - 345);
    case 4750:
      return formatMoney(n - 620);
    default:
      return;
  }
}

function ProductPrice(props) {
  const priceCards = prices.map((price) => (
    <button
      key={price}
      className="border rounded-2xl p-2 text-sm hover:border-black focus:border-black m-1"
      onClick={() => props.setPrice([moneyDiscount(price), formatMoney(price)])}
    >
      {formatMoney(price)}
    </button>
  ));
  return (
    <div className="pb-7">
      <p className="font-semibold text-sm mb-3">Montant</p>
      <div className="flex flex-wrap">{priceCards}</div>
    </div>
  );
}

export default ProductPrice;
