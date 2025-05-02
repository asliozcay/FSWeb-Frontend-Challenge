import { data } from "../../data";

export const Profile = () => {
  const language = "en";
  const profileData = data[language].profileSectionData;
  const { title, subtitle1, dateOfBirth, location, education } = profileData;

  return (
    <section className="profile" id="profile">
      <div className="profile-content w-[65%]">
        <h1 className="text-greenLight text-[32px] font-bold">{title}</h1>
        <h2 className="text-grayLight text-[20px] font-bold mt-4">{subtitle1}</h2>
        <div className="profile-details mt-4">
          <p className="text-grayLight text-[15px] font-bold">
            {dateOfBirth.title}: {dateOfBirth.description}
          </p>
          <p className="text-grayLight text-[15px] font-bold">
            {location.title}: {location.description}
          </p>
          <p className="text-grayLight text-[15px] font-bold">
            {education.title}: {education.description}
          </p>
        </div>
      </div>
    </section>
  );
}