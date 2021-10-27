import { useState } from "react";
import { Formik } from "formik";

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
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email =
              "Veuillez introduire l’adresse e-mail du destinataire";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email =
              "L'e-mail que vous avez entré est inutile. Veuillez vérifier votre é-mail et essayer à nouveau.";
          }
          if (!values.name) {
            errors.name = "Veuillez introduire votre nom";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label className="text-sm pb-3">
              POUR*
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`w-full h-8 p-3  focus:outline-none 	 ${
                  errors.email
                    ? "bg-red-200 border border-red-500"
                    : " border border-customD"
                } `}
                placeholder="Entrez l'adress e-mail"
              />
              <div className="text-red-600">
                {touched.email && errors.email}
              </div>
            </label>
            <label className="text-sm pb-3">
              DE*
              <br />
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={`w-full h-8 p-3  focus:outline-none 	 ${
                  errors.name
                    ? "bg-red-200 border border-red-500"
                    : " border border-customD"
                } `}
                placeholder="Entrez votre nom"
              />
              <div className="text-red-600">{touched.name && errors.name}</div>
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
              En passant cette commande, je reconnais avoir lu et compris les
              Termes et conditions.
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
        )}
      </Formik>
    </div>
  );
}

export default ProductBuyer;
