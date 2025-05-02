import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data";

export const Footer = () => {
  const language = "en";
  const footerData = data[language].footerData;
  const { title, subtitle, socials } = footerData;

  return (
    <footer className="bg-[#F9F9F9] text-black">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{subtitle}</p>
        <div className="flex space-x-4">
            <i className= {socials.icon1} ></i>
        </div>
      </div>
    </footer>
  );
};
