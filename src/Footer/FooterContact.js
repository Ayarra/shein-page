function importAll(i) {
  let images = {};
  i.keys().forEach((item, index) => {
    images[item.replace("./", "")] = i(item);
  });
  return images;
}

const images = importAll(require.context("./social", false, /png/));

function FooterContact() {
  const icons = Object.keys(images).map((key) => (
    <img
      key={key}
      src={images[key].default}
      alt="l3ilm"
      height={31.66}
      width={50}
      tabIndex="0"
      className="p-1 m-1  cursor-pointer"
    ></img>
  ));
  return (
    <div>
      <p className="text-xs font-semibold">TROUVEZ-NOUS SUR</p>
      <div className="flex pb-3">{icons}</div>
      <p className="text-xs font-semibold pb-2">
        ABONNEZ-VOUS À NOTRE NEWSLETTER POUR SUIVRE TOUTE L'ACTUALITÉ SHEIN EN
        AVANT-PREMIÈRE <br /> ! (VOUS POUVEZ VOUS DÉSABONNER À TOUT MOMENT).
      </p>
      <div className="bg-white flex items-center">
        <input
          className="w-10/12 py-2    px-3     text-gray-700 leading-tight focus:outline-none border-customD border"
          id="Clothes"
          type="text"
          placeholder="Votre adress e-mail"
        ></input>
        <div className="">
          <button className="bg-black p-2 text-white     hover:bg-customD focus:outline-none  flex items-center justify-center">
            S'ABONNER
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
