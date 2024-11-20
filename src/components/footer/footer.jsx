import "./footer.scss";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";

import { footerText } from "../../constants/footertext";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-2xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          metus sapien. Nam suscipit sollicitudin.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} className="hover:cursor-pointer" />
          <FaInstagram size={30} className="hover:cursor-pointer" />
          <FaTwitterSquare size={30} className="hover:cursor-pointer" />
          <FaGithubSquare size={30} className="hover:cursor-pointer" />
          <FaDribbbleSquare size={30} className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {footerText.map((section) => (
          <div key={section.id}>
            <h6 className="font-medium text-gray-400">{section.headings}</h6>
            <ul>
              {section.subHeadings.map((subheading) => (
                <li
                  key={subheading}
                  className="py-2 text-sm hover:cursor-pointer"
                >
                  {subheading}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
