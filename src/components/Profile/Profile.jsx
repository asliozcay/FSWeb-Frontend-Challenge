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
    <section className="profile bg-purpleDark dark:bg-[#171043] flex items-center justify-center py-20">
      <div className="w-[65%]">
        <h1 className="text-greenLight text-5xl! font-bold">{title}</h1>
        <div className="flex gap-8 pt-8">
          <div className="w-75 flex flex-col gap-4">
            <h2 className="text-white text-3xl font-medium">{subtitle1}</h2>
            <div className="flex gap-3">
              <p className="w-25 text-greenLight font-semibold">
                {dateOfBirth.title}
              </p>
              <p className="text-white w-40">{dateOfBirth.description}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <p className="w-25 text-greenLight font-semibold">
                {location.title}
              </p>
              <p className="text-white w-40">{location.description}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <p className="w-25 text-greenLight font-semibold">
                {education.title}
              </p>
              <p className="text-white w-40">{education.description}</p>
            </div>
            <div className="flex gap-3 mt-2">
              <p className="w-25 text-greenLight font-semibold">{role.title}</p>
              <p className="text-white w-40">{role.description}</p>
            </div>
          </div>
          <img
            src={image}
            alt="Profile"
            className=" h-[290px] rounded-[10px] object-cover w-75"
          />
          <div className="w-75 flex flex-col gap-4">
            <h2 className="text-white text-3xl font-medium">{subtitle2}</h2>
            <p
              className="text-white text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
