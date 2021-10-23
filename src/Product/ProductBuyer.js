import { useState } from "react";

function ProductBuyer() {
  const [isChecked, setIschecked] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const handleChange = (e) => {
    setTextLength(e.target.value.length);
  };

  const checkCheckbox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIschecked(true);
    } else {
      setIschecked(false);
    }
  };

  console.log(isChecked);
  return (
    <div className=" flex flex-col">
      <form>
        <label className=" text-sm pb-3">
          POUR*
          <br />
          <input
            type="text"
            name="pour"
            className="w-full h-8 p-3 border border-customD"
            placeholder="Entrez l'adress e-mail"
          />
        </label>
        <label className="text-sm pb-3">
          DE*
          <br />
          <input
            type="text"
            name="de"
            className="w-full h-8 p-3 border border-customD"
            placeholder="Entrez votre nom"
          />
        </label>
        <label className=" text-sm pb-3">
          Ajoutez un message personnalisé:
          <br />
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Envoyez un message au destinaire"
            className="w-full resize-none p-3 border border-customD"
          ></textarea>
          <p className="text-right">{textLength} / 250</p>
        </label>

        <label className="pb-3 pt-2 block">
          <input
            type="checkbox"
            name="accept"
            id="accept"
            value="accepted"
            onClick={(e) => {
              checkCheckbox(e);
            }}
          ></input>
          En passant cette commande, je reconnais avoir lu et compris les Termes
          et conditions.
        </label>
        <button
          type="submit"
          className={`w-full disabled:cursor-not-allowed text-white text-xl font-bold py-4 ${
            !isChecked ? "disabled:bg-customD" : "bg-black"
          }`}
          disabled
        >
          Payer
        </button>
      </form>
    </div>
  );
}

export default ProductBuyer;
