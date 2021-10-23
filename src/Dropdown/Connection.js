function Connection() {
  return (
    <div className="absolute z-10 hidden mt-6 bg-white group-hover:block">
      <div className=" mr-9 px-6 py-4 shadow-lg">
        <button className="text-xs font-bold pb-3">Me Connecter</button>
        <hr></hr>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Mes Commandes
        </button>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Mes Notifications
        </button>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Mes Coupons
        </button>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Mes Points Bonus
        </button>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Recemment Vus
        </button>
        <button className="text-xs  pb-2 text-customB hover:text-black">
          Plus De Services
        </button>
      </div>
    </div>
  );
}

export default Connection;
