import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Australia from "../assets/Australia.png";
import Canada from "../assets/Canada.png";
import Frame2 from "../assets/document.png";
import France from "../assets/France.png";
import Germany from "../assets/Germany.png";
import Ireland from "../assets/Ireland.png";
import Italy from "../assets/Italy.png";
import logo from "../assets/logo.png";
import Frame4 from "../assets/money.png";
import Frame3 from "../assets/passport.png";
import Frame5 from "../assets/plane.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import Singapore from "../assets/Singapore.png";
import stars from "../assets/Stars.png";
import Switzerland from "../assets/Switzerland.png";
import teachers from "../assets/teachers.png";
import UK from "../assets/United kingdom.png";
import USA from "../assets/United states of america.png";
import Frame1 from "../assets/university.png";
const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const countries = [
    { name: "USA", img: USA },
    { name: "UK", img: UK },
    { name: "Italy", img: Italy },
    { name: "Germany", img: Germany },
    { name: "Switzerland", img: Switzerland },
    { name: "Ireland", img: Ireland },
    { name: "Canada", img: Canada },
    { name: "Australia", img: Australia },
    { name: "France", img: France },
    { name: "Singapore", img: Singapore },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleEnroll = () => {
    if (selectedCountry) {
      // Store the selected country in localStorage
      localStorage.setItem("selectedCountry", selectedCountry);
      // Redirect to the /register page
      navigate("/registration");
    } else {
      alert("Please select a country first.");
    }
  };
  return (
    <div className="md:flex md:flex-row md:justify-evenly">
      <div className="m-4 md:m-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-6 md:hidden">
          <img src={logo} alt="MeetUniversity Logo" className="h-12" />
        </div>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md md:shadow-2xl">
          {/* Logo Section */}
          <div className="justify-center mb-6 hidden md:block">
            <img src={logo} alt="MeetUniversity Logo" className="h-12" />
          </div>
          {/* Title Section */}
          <h2 className="text-xl font-semibold text-center md:text-left mb-4">
            Study at your dream university abroad
          </h2>

          {/* Services List */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center md:items-start space-x-3">
              <img
                src={Frame1}
                alt="Personalized University Selection"
                className="w-6 h-6 bg-blue-200"
              />
              <p>Personalized University Selection</p>
            </div>
            <div className="flex items-center md:items-start space-x-3">
              <img
                src={Frame2}
                alt="Application Assistance"
                className="w-6 h-6 bg-blue-400"
              />
              <p>Application Assistance</p>
            </div>
            <div className="flex items-center md:items-start space-x-3">
              <img src={Frame3} alt="Visa Support" className="w-6 h-6" />
              <p>Visa Support</p>
            </div>
            <div className="flex items-center md:items-start space-x-3">
              <img
                src={Frame4}
                alt="Scholarship and Financial Aid Guidance"
                className="w-6 h-6"
              />
              <p>Scholarship and Financial Aid Guidance</p>
            </div>
            <div className="flex items-center md:items-start space-x-3">
              <img
                src={Frame5}
                alt="Pre-Departure and Post-Arrival Support"
                className="w-6 h-6"
              />
              <p>Pre-Departure and Post-Arrival Support</p>
            </div>
          </div>

          {/* Country Buttons which only used for small screens*/}
          <div className="md:hidden">
            {/* Course Section */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-center mb-4">
                Choose your courses
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Detailed & easy to understand information about each course
                abroad
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500 my-2">
                <span className="mr-2 font-bold"> 🕛 Course schedule:</span>
                <span className="font-medium">9 sep - 14 sep</span>
              </div>

              {/* Country Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    className={`border rounded-md px-4 py-2 text-center w-full truncate ${
                      selectedCountry && selectedCountry !== country.name
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => handleCountrySelect(country.name)}
                    disabled={
                      selectedCountry && selectedCountry !== country.name
                    }
                  >
                    <div className="flex justify-center items-center space-x-3">
                      <img
                        src={country.img}
                        alt={country.name}
                        className="h-5"
                      />
                      <p>{country.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Enroll Button */}
            <div className="text-center mb-6">
              <button
                className="bg-blue-500 text-white rounded-md px-6 py-2 whitespace-nowrap"
                onClick={handleEnroll}
              >
                Enroll Now
              </button>
              <p className="text-sm mt-2 ">
                Trusted by more than 40k+ students
              </p>
            </div>
          </div>

          {/* Expert Faculty Section */}
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-500">
            Expert Faculty
          </h3>
          <div className="flex justify-center mb-6">
            <img src={teachers} alt="Faculty Member 1" className="" />
            {/* <img src={faculty2} alt="Faculty Member 2" className="" />
          <img src={faculty3} alt="Faculty Member 3" className="" /> */}
          </div>

          {/* Student Reviews Section */}
          <div className="flex flex-col justify-center items-center">
            <img src={stars} alt="" />
            <h3 className="text-xl font-semibold text-center mb-4 text-lime-600">
              Highly rated by students
            </h3>
          </div>
          <div className="space-y-6">
            {/* Student 1 Review */}
            <div className="flex items-start space-x-3">
              <img
                src={profile1}
                alt="Sagar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Sagar <span className="text-yellow-500">4.8 ★</span>
                </p>
                <p className="text-sm">
                  Meet University provided me with exceptional guidance and
                  assistance throughout the entire process.
                </p>
              </div>
            </div>

            {/* Student 2 Review */}
            <div className="flex items-start space-x-3">
              <img
                src={profile2}
                alt="Saudamini"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Saudamini <span className="text-yellow-500">4.8 ★</span>
                </p>
                <p className="text-sm">
                  I’m deeply grateful to the Meet University team for their
                  unwavering support and guidance.
                </p>
              </div>
            </div>

            {/* Student 3 Review */}
            <div className="flex items-start space-x-3">
              <img
                src={profile3}
                alt="Aditya"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  Aditya <span className="text-yellow-500">4.8 ★</span>
                </p>
                <p className="text-sm">
                  I chose Meet University for their reliability, and they
                  invested significant time in helping me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:mt-14">
        {/* Course Section */}
        <div className="text-left mb-6">
          <h3 className="text-xl font-semibold text-left mb-4">
            Choose your courses
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Detailed & easy to understand information about each course abroad
          </p>
          <div className="flex items-start  text-sm text-gray-500 my-2">
            <span className="mr-2 font-bold"> 🕛 Course schedule:</span>
            <span className="font-medium">9 sep - 14 sep</span>
          </div>

          {/* Country Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {countries.map((country) => (
              <button
                key={country.name}
                className={`border rounded-md px-4 py-2 text-center w-full truncate ${
                  selectedCountry && selectedCountry !== country.name
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleCountrySelect(country.name)}
                disabled={selectedCountry && selectedCountry !== country.name}
              >
                <div className="flex justify-center items-center space-x-3">
                  <img src={country.img} alt={country.name} className="h-5" />
                  <p>{country.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enroll Button */}
        <div className="text-center mb-6">
          <button
            className="bg-blue-500 text-white rounded-md px-6 py-2 whitespace-nowrap"
            onClick={handleEnroll}
          >
            Enroll Now
          </button>
          <p className="text-md mt-2 ">Trusted by more than 40k+ students</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;
