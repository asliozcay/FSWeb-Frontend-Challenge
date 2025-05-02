import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Hero = ({ setDarkMode, darkMode, setLanguage, language }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

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
    image,
  } = heroData;

  return (
    <>
      <section className="hero-gradient pt-9 pb-37 dark:bg-gradient-to-r from-[#171043] via-[#171043] via-70% to-[#211f0b] to-30%">
        <div className="w-[65%]">
          <div className="flex justify-between h-19">
            <h1 className="flex items-center text-greenLight text-3xl! font-bold ">
              {header}
            </h1>
            <nav className="flex items-start space-x-4">
              <a
                onClick={() => setLanguage(language === "en" ? "tr" : "en")}
                className="text-[15px] font-bold text-grayLight dark:text-[#777777] pr-5"
                dangerouslySetInnerHTML={{ __html: navItem1 }}
              ></a>
              <div className="flex items-center space-x-2">
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
                      <div className="w-5 h-5 bg-yellowLight rounded-full"></div>
                    ) : (
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="text-yellowLight text-2xl "
                      />
                    )}
                  </div>
                </div>
              </div>
              <p className="text-[15px] font-bold text-purpleDark dark:text-[#D9D9D9]">
                {darkMode ? navItem2 : navItem3}
              </p>
            </nav>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col text-left gap-y-9">
              <h2 className="text-greenLight text-[54px] font-bold leading-none">
                {title}
              </h2>
              <p className="text-2xl text-white w-[530px]">{subtitle}</p>
              <div className="flex gap-x-3">
                <button className="text-indigo-800 dark:text-white bg-white dark:bg-[#252128] w-[127px] h-[52px] rounded-[6px] text-lg leading-7 font-medium border-1 border-indigo-800 dark:border-white">
                  <i className={buttonIcon1}></i> {buttonText1}
                </button>
                <button className="text-indigo-800 dark:text-white bg-white dark:bg-[#252128] w-[127px] h-[52px] rounded-[6px] text-lg leading-7 font-medium border-1 border-indigo-800 dark:border-white">
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
