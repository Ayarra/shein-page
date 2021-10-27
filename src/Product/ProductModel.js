function importAll(i) {
  let images = {};
  i.keys().forEach((item, index) => {
    images[item.replace("./", "")] = i(item);
  });
  return images;
}

const images = importAll(require.context("../img", false, /gift-200311/));

function ProductModel(props) {
  const imageCard = Object.keys(images).map((key) => (
    <div key={key} onClick={() => props.setName(images[key].default)}>
      <img
        src={images[key].default}
        alt="l3ilm"
        height={31.66}
        width={50}
        tabIndex="0"
        className="border border-customD p-1 m-1 hover:border-black focus:border-black cursor-pointer"
      ></img>
    </div>
  ));
  return (
    <div className="mt-6 mb-4">
      <p className="font-semibold text-sm mb-3">Modèle</p>
      <div className="flex flex-wrap">{imageCard}</div>
    </div>
  );
}

export default ProductModel;
