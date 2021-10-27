function FooterLink() {
  return (
    <div className="md:w-9/12 pb-6">
      <div className="flex pb-14">
        <div className="mx-8">
          <p className="text-sm font-semibold">INFORMATIONS SUR L'ENTREPRISE</p>
          <button className=" text-xs text-left text-customD hover:text-customE">
            Qui Sommes-Nous?
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Affilié
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Blogger
          </button>
        </div>
        <div className="mx-8">
          <p className="text-sm font-semibold">CENTRE &amp; D'AIDE</p>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Livraison
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Retour
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Commande
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Statut de Commande
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Guide Des Tailles
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Responsabilité Sociale
          </button>
        </div>
        <div className="mx-8">
          <p className="text-sm font-semibold">AIDE</p>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Nous Contacter
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Paiement
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Points Bonus
          </button>
          <button className="block text-xs text-left text-customD hover:text-customE">
            Avantaged des Membres
          </button>
        </div>
      </div>
      <div className="m-3">
        <p className="text-sm">©2009-2021 SHEIN Tous droits réservés</p>
        <div className="flex flex-wrap">
          <button className="text-xs text-customD underline px-2">
            Centre de confidentialité
          </button>
          <button className="text-xs text-customD underline px-2">
            Politique de confidentialité &amp; cookies
          </button>
          <button className="text-xs text-customD underline px-2">
            Termes et conditions
          </button>
          <button className="text-xs text-customD underline px-2">
            Notice de droits d'auteur
          </button>
          <button className="text-xs text-customD underline px-2">
            Impression
          </button>
          <button className="text-xs text-customD underline px-2">
            {" "}
            Morocco
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterLink;
