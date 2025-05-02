import { data } from "../../data";

export const Footer = ({ language }) => {
  const footerData = data[language].footerData;
  const { title, subtitle, email, socials } = footerData;

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#252128] text-black">
      <div className="container mx-auto py-20 flex flex-col items-center gap-6">
        <h2 className="font-bold text-5xl text-purpleDark dark:text-[#8f88ff]">
          {title}
        </h2>
        <p className="text-blueDark dark:text-white text-2xl w-112 text-center">
          {subtitle}
        </p>
        <a
          href={`mailto:${email}`}
          className="text-purpleDark dark:text-[#8f88ff] font-medium text-xl underline underline-offset-[4.25px]"
        >
          {email}
        </a>
        <div className="flex text-purpleDark dark:text-[#8f88ff] text-4xl space-x-6 ">
          <a href="#">
            <i className={socials.icon1}></i>
          </a>
          <a href="#">
            <i className={socials.icon2}></i>
          </a>
          <a href="#">
            <i className={socials.icon3}></i>
          </a>
          <a href="#">
            <i className={socials.icon4}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
