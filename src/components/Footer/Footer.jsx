import { data } from "../../data";

export const Footer = ({ language }) => {
  const footerData = data[language].footerData;
  const { title, subtitle, email, socials } = footerData;

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#252128] text-black">
      <div className="container mx-auto px-4 py-10 md:py-20 flex flex-col items-center gap-4 md:gap-6">
        <h2 className="font-bold text-3xl md:text-5xl text-center text-purpleDark dark:text-[#8f88ff]">
          {title}
        </h2>
        <p className="text-blueDark dark:text-white text-lg md:text-2xl w-full md:w-112 text-center px-4">
          {subtitle}
        </p>
        <a
          href={`mailto:${email}`}
          className="text-purpleDark dark:text-[#8f88ff] font-medium text-base md:text-xl underline underline-offset-[4.25px]"
        >
          {email}
        </a>
        <div className="flex text-purpleDark dark:text-[#8f88ff] text-2xl md:text-4xl space-x-4 md:space-x-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className={socials.icon1}></i>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className={socials.icon2}></i>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className={socials.icon3}></i>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className={socials.icon4}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
