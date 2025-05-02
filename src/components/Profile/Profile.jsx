import { data } from "../../data";

export const Profile = ({ language }) => {
  const profileData = data[language].profileSectionData;
  const {
    title,
    subtitle1,
    dateOfBirth,
    location,
    education,
    role,
    image,
    subtitle2,
    description,
  } = profileData;

  return (
    <section className="profile bg-purpleDark dark:bg-[#171043] flex items-center justify-center py-10 md:py-20 px-4">
      <div className="w-full md:w-[65%]">
        <h1 className="text-greenLight text-3xl md:text-5xl font-bold text-center md:text-left">{title}</h1>
        <div className="flex flex-col md:flex-row gap-8 pt-8">
          <div className="w-full md:w-75 flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-3xl font-medium">{subtitle1}</h2>
            <div className="flex flex-col md:flex-row md:gap-3">
              <p className="w-full md:w-25 text-greenLight font-semibold">
                {dateOfBirth.title}
              </p>
              <p className="text-white w-full md:w-40">{dateOfBirth.description}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-3 mt-2">
              <p className="w-full md:w-25 text-greenLight font-semibold">
                {location.title}
              </p>
              <p className="text-white w-full md:w-40">{location.description}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-3 mt-2">
              <p className="w-full md:w-25 text-greenLight font-semibold">
                {education.title}
              </p>
              <p className="text-white w-full md:w-40">{education.description}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-3 mt-2">
              <p className="w-full md:w-25 text-greenLight font-semibold">{role.title}</p>
              <p className="text-white w-full md:w-40">{role.description}</p>
            </div>
          </div>
          <img
            src={image}
            alt="Profile"
            className="w-full md:w-75 h-[250px] md:h-[290px] rounded-[10px] object-cover"
          />
          <div className="w-full md:w-75 flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-3xl font-medium">{subtitle2}</h2>
            <p
              className="text-white text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
