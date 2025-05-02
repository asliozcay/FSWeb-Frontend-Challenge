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
      <section className="hero-gradient pt-4 md:pt-9 pb-16 md:pb-37">
        <div className="w-[90%] md:w-[65%] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:h-19 gap-4 md:gap-0">
            <h1 className="flex items-center text-greenLight text-2xl md:text-3xl font-bold">
              {header}
            </h1>
            <nav className="flex flex-wrap md:flex-nowrap items-start gap-4 md:space-x-4">
              <a
                onClick={() => setLanguage(language === "en" ? "tr" : "en")}
                className="text-[14px] md:text-[15px] font-bold text-grayLight dark:text-[#777777] md:pr-5 cursor-pointer"
                dangerouslySetInnerHTML={{ __html: navItem1 }}
              ></a>
              <div className="flex items-center space-x-2">
                <div
                  className={`relative w-14 md:w-16 h-7 md:h-8 rounded-full cursor-pointer transition-colors ${
                    darkMode ? "bg-purpleLight" : "bg-gray"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 md:w-6 h-5 md:h-6 rounded-full transition-transform flex items-center justify-center ${
                      darkMode ? "translate-x-7 md:translate-x-8" : "translate-x-0"
                    }`}
                  >
                    {darkMode ? (
                      <div className="w-4 md:w-5 h-4 md:h-5 bg-yellowLight rounded-full"></div>
                    ) : (
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="text-yellowLight text-xl md:text-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
              <p className="text-[14px] md:text-[15px] text-greenLight font-bold md:text-purpleDark dark:text-[#D9D9D9]">
                {darkMode ? navItem2 : navItem3}
              </p>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-10 gap-8 md:gap-0">
            <div className="flex flex-col text-center md:text-left gap-y-6 md:gap-y-9">
              <h2 className="text-greenLight text-4xl md:text-[54px] font-bold leading-tight md:leading-none">
                {title}
              </h2>
              <p className="text-xl md:text-2xl text-white w-full md:w-[530px]">{subtitle}</p>
              <div className="flex justify-center md:justify-start gap-x-3">
                <button className="text-indigo-800 dark:text-white bg-white dark:bg-[#252128] w-[120px] md:w-[127px] h-[48px] md:h-[52px] rounded-[6px] text-base md:text-lg leading-7 font-medium border-1 border-indigo-800 dark:border-white hover:opacity-90 transition-opacity">
                  <i className={buttonIcon1}></i> {buttonText1}
                </button>
                <button className="text-indigo-800 dark:text-white bg-white dark:bg-[#252128] w-[120px] md:w-[127px] h-[48px] md:h-[52px] rounded-[6px] text-base md:text-lg leading-7 font-medium border-1 border-indigo-800 dark:border-white hover:opacity-90 transition-opacity">
                  <i className={buttonIcon2}></i> {buttonText2}
                </button>
              </div>
            </div>
            <img
              src={image}
              alt="Hero"
              className="w-[280px] md:w-[350px] h-[300px] md:h-[376px] rounded-[18px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
