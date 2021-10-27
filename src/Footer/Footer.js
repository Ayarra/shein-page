import FooterContact from "./FooterContact";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <div className="bg-customA pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <FooterLink></FooterLink>
          <FooterContact></FooterContact>
        </div>
      </div>
    </div>
  );
}

export default Footer;
