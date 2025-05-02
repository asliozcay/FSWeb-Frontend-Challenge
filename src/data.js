import heroImage from "./assets/hero-image.png";
import jsLogo from "./assets/js-logo.png";
import nodeLogo from "./assets/node-logo.png";
import reactLogo from "./assets/react-logo.png";
import vsLogo from "./assets/vs-logo.png";
import reduxLogo from "./assets/redux-logo.png";
import figmaLogo from "./assets/figma-logo.png";
import profileImage from "./assets/profile-image.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

export const data = {
  en: {
    heroSectionData: {
      header: "almila",
      navItem1: "<span class='text-greenLight'>TÜRKÇE</span>'YE GEÇ",
      navItem2: "DARK MODE",
      navItem3: "LIGHT MODE",
      title: "I am a Frontend Developer...",
      subtitle:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      buttonIcon1: "fa-brands fa-github",
      buttonText1: "Github",
      buttonIcon2: "fa-brands fa-linkedin-in",
      buttonText2: "Linkedin",
      image: heroImage,
    },
    skillsSectionData: {
      title: "Skills",
      skill1: {
        url: jsLogo,
        name: "JAVASCRIPT",
      },
      skill2: {
        url: nodeLogo,
        name: "NODE",
      },
      skill3: {
        url: reactLogo,
        name: "REACT",
      },
      skill4: {
        url: vsLogo,
        name: "VS CODE",
      },
      skill5: {
        url: reduxLogo,
        name: "REDUX",
      },
      skill6: {
        url: figmaLogo,
        name: "FIGMA",
      },
    },
    profileSectionData: {
      title: "Profile",
      subtitle1: "Basic Information",
      dateOfBirth: {
        title: "Date of Birth",
        description: "24.03.1996",
      },
      location: {
        title: "Residence City",
        description: "Ankara",
      },
      education: {
        title: "Education",
        description: "Hacettepe University, Biology Bachelor's Degree, 2016",
      },
      role: {
        title: "Preferred Role",
        description: "Frontend, UI",
      },
      image: profileImage,
      subtitle2: "About Me",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSectionData: {
      title: "Projects",
      project1: {
        title: "Workintech",
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        image: project1,
        pill1: "react",
        pill2: "redux",
        pill3: "vercel",
        link1: "View Site",
        link2: "Github",
      },
      project2: {
        title: "Journey",
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        image: project2,
        pill1: "react",
        pill2: "redux",
        pill3: "vercel",
        link1: "View Site",
        link2: "Github",
      },
    },
    footerData: {
      title: "Send me a message!",
      subtitle:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "almilasucode@gmail.com",
      socials: {
        icon1: "fa-brands fa-twitter",
        icon2: "fa-brands fa-codepen",
        icon3: "fa-solid fa-at",
        icon4: "fa-brands fa-instagram",
      },
    },
  },
  tr: {
    heroSectionData: {
      header: "almila",
      navItem1: "SWITCH TO <span class='text-greenLight'>ENGLISH</span>",
      navItem2: "KARANLIK MOD",
      navItem3: "AÇIK MOD",
      title: "Ben Bir Frontend Geliştiricisiyim...",
      subtitle:
        "...sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven biri.",
      buttonIcon1: "fa-brands fa-github",
      buttonText1: "Github",
      buttonIcon2: "fa-brands fa-linkedin-in",
      buttonText2: "Linkedin",
      image: heroImage,
    },
    skillsSectionData: {
      title: "Yetenekler",
      skill1: {
        url: jsLogo,
        name: "JAVASCRIPT",
      },
      skill2: {
        url: nodeLogo,
        name: "NODE",
      },
      skill3: {
        url: reactLogo,
        name: "REACT",
      },
      skill4: {
        url: vsLogo,
        name: "VS CODE",
      },
      skill5: {
        url: reduxLogo,
        name: "REDUX",
      },
      skill6: {
        url: figmaLogo,
        name: "FIGMA",
      },
    },
    profileSectionData: {
      title: "Profil",
      subtitle1: "Temel Bilgiler",
      dateOfBirth: {
        title: "Doğum Tarihi",
        description: "24.03.1996",
      },
      location: {
        title: "İkamet Şehri",
        description: "Ankara",
      },
      education: {
        title: "Eğitim Durumu",
        description: "Hacettepe Ünv. Biyoloji Lisans, 2016",
      },
      role: {
        title: "Tercih Ettiği Rol",
        description: "Frontend, UI",
      },
      image: profileImage,
      subtitle2: "Hakkımda",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projectsSectionData: {
      title: "Projeler",
      project1: {
        title: "Workintech",
        description:
          "Kullanıcıların hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Bu, saf JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak kullanılabilir ve git deposu herhangi bir türde özelleştirme yapmanıza olanak tanır.",
        image: project1,
        pill1: "react",
        pill2: "redux",
        pill3: "vercel",
        link1: "Siteyi Görüntüle",
        link2: "Github",
      },
      project2: {
        title: "Journey",
        description:
          "Kullanıcıların hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Bu, saf JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak kullanılabilir ve git deposu herhangi bir türde özelleştirme yapmanıza olanak tanır.",
        image: project2,
        pill1: "react",
        pill2: "redux",
        pill3: "vercel",
        link1: "Siteyi Görüntüle",
        link2: "Github",
      },
    },
    footerData: {
      title: "Bana bir mesaj gönder!",
      subtitle:
        "Bir sorunuz veya öneriniz var mı, yoksa sadece merhaba mı demek istiyorsunuz? Buyurun.",
      socials: {
        icon1: "fa-brands fa-twitter",
        icon2: "fa-brands fa-codepen",
        icon3: "fa-solid fa-at",
        icon4: "fa-brands fa-instagram",
      },
    },
  },
};
