function Discount() {
  return (
    <div className="bg-customA p-14 ">
      <div></div>
      <p className="text-center text-2xl font-semibold pb-2">
        SOLDE DE LA CARTE CADEAU
      </p>
      <p className="text-center text-sm pb-6">
        Introduisez votre code à 16-20 chiffres
      </p>
      <div className="grid justify-center">
        <form>
          <div className="flex  flex-col sm:flex-row justify-center pb-4">
            <label
              htmlFor="carte"
              className="px-6 pb-4 text-xs text-center sm:text-left"
            >
              Numéro De La Carte:
              <br />
              <input
                type="text"
                className="p-2 pr-24"
                placeholder="0000 0000 0000 0000"
              />
            </label>
            <label
              htmlFor="pin"
              className="px-6 pb-4 text-xs text-center sm:text-left"
            >
              PIN:
              <br />
              <input type="text" className="p-2" placeholder="0000" />
            </label>
          </div>
          <button
            type="submit"
            className="text-white text-xl font-bold py-4 w-full bg-black px-5"
          >
            CONSULTER LE SOLDE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Discount;
