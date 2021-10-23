function ProductDescription(props) {
  return (
    <div className="flex w-8/12 pr-5">
      <div>
        <img
          src={props.name}
          alt="small"
          height={100}
          width={200}
          className="border border-customE p-1"
        ></img>
      </div>
      <div className="mx-2">
        <img
          src={props.name}
          alt="big"
          height={370}
          width={585}
          className="mx-auto pb-10"
        ></img>
        <hr />
        <p className="pt-2 text-xs font-semibold pb-6">Description</p>
        <p>
          Offrez un cadeau qui vaut vraiment la peine et qui se détache !
          <br /> Peu importe l'occasion, la e-carte cadeau SHEIN est un moyen
          rapide et pratique de faire du shopping pour vous et vos amies sur
          SHEIN. En plus, vous économiserez de l'argent à chaque achat d'e-carte
          cadeau !
        </p>
        <p className="pt-5">
          Cliquez{" "}
          <a href="null" className="text-blue-400 ">
            ici
          </a>{" "}
          pour en savoir plus sur les e-cartes cadeau .
        </p>
      </div>
    </div>
  );
}

export default ProductDescription;
