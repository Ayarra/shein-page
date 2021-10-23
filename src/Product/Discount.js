function Discount() {
  return (
    <div className="bg-customA p-14 px-96   ">
      <p className="text-center text-2xl font-semibold pb-2">
        SOLDE DE LA CARTE CADEAU
      </p>
      <p className="text-center text-sm pb-6">
        Introduisez votre code à 16-20 chiffres
      </p>
      <form>
        <div className="flex justify-center pb-4">
          <label htmlFor="carte" className="px-6 text-xs">
            Numéro De La Carte:
            <br />
            <input
              type="text"
              className="p-2 pr-24"
              placeholder="0000 0000 0000 0000"
            />
          </label>
          <label htmlFor="pin" className="px-6 text-xs">
            PIN:
            <br />
            <input type="text" className="p-2" placeholder="0000" />
          </label>
        </div>
        <button
          type="submit"
          className="mx-16   w-96 text-white text-xl font-bold py-4 bg-black "
        >
          CONSULTER LE SOLDE
        </button>
      </form>
    </div>
  );
}

export default Discount;
