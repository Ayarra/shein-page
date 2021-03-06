function Panier() {
  return (
    <div className=" absolute mt-6  right-5 bg-white w-96 z-10 hidden group-hover:block">
      <div className="shadow-lg text-customB">
        <p className="font-light text-xs text-center py-5">
          Votre panier est vide
        </p>
        <p className="text-xs text-center px-4 pb-7">
          Bienvenue de retour! Si vous avez des articles dans votre panier, nous
          avons les économisés pour vous. Vous pouvez SE CONNECTER maintenant
          pour les voir.
        </p>
      </div>
    </div>
  );
}

export default Panier;
