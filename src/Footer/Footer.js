import FooterContact from "./FooterContact";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <div className="bg-customA pt-10 px-80 pb-5">
      <div className="flex">
        <FooterLink></FooterLink>
        <FooterContact></FooterContact>
      </div>
    </div>
  );
}

export default Footer;
