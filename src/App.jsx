import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "./data";

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://reqres.in/api/workintech",
          data,
          {
            headers: {
              "x-api-key": "reqres-free-v1",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Skills language={language} />
      <Profile language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
