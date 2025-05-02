import { useState } from "react";
import { data } from "../../data";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const language = "en";
  const heroData = data[language].heroSectionData;
  const {
    header,
    title,
    subtitle,
    buttonIcon1,
    buttonText1,
    buttonIcon2,
    buttonText2,
    navItem1,
    navItem2,
    navItem3,
    image
  } = heroData;

  return (
    <>
      <section
        className="hero hero-gradient text-black dark:text-white"
        id="home"
      >
        <div className="w-[65%]">
          <div className="flex items-center justify-between">
            <h1 className="text-greenLight text-[32px] font-bold justify-start">
              {header}
            </h1>
            <nav className="flex items-center space-x-4 justify-end">
              <a
                href="#"
                className="text-[15px] font-bold text-grayLight"
                dangerouslySetInnerHTML={{ __html: navItem1 }}
              ></a>
              <div className="flex items-center space-x-2">
                {/* Switch */}
                <div
                  className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors ${
                    darkMode ? "bg-purpleLight" : "bg-gray"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform flex items-center justify-center ${
                      darkMode ? "translate-x-8" : "translate-x-0"
                    }`}
                  >
                    {darkMode ? (
                      // Dark mode aktifken normal topuz
                      <div className="w-5 h-5 bg-yellowLight rounded-full"></div>
                    ) : (
                      // Dark mode kapalıyken hilal ikonu
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="text-yellowLight text-2xl "
                      />
                    )}
                  </div>
                </div>
              </div>
              <p className="text-[15px] font-bold text-purpleDark">
                {darkMode ? navItem2 : navItem3}
              </p>
            </nav>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col text-left gap-y-9">
              <h2 className="text-greenLight text-[54px] font-bold leading-none">
                {title}
              </h2>
              <p className="text-2xl font-normal">{subtitle}</p>
              <div className="flex gap-x-3">
                <button className="text-indigo-800 bg-white w-[127px] h-[52px] rounded-[6px] text-lg leading-7 font-medium border-1 border-indigo-800">
                  <i className={buttonIcon1}></i> {buttonText1}
                </button>
                <button className="text-indigo-800 bg-white w-[127px] h-[52px] rounded-[6px] text-lg leading-7 font-medium border-1 border-indigo-800">
                  <i className={buttonIcon2}></i> {buttonText2}
                </button>
              </div>
            </div>
            <img
              src={image}
              alt="Hero"
              className="w-[350px] h-[376px] rounded-[18px] object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
};
