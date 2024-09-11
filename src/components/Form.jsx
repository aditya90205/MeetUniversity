/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";

import { useEffect, useState } from "react";
import cap from "../assets/cap.jpg";
import axios from "axios";

// Dropdown component
// eslint-disable-next-line react/prop-types
// const Dropdown = ({ label, options, setSelected }) => {
//   const [open, setOpen] = useState(false);

//   const handleOptionClick = (option) => {
//     setSelected(option);
//     setOpen(false);
//   };

//   return (
//     <div className="relative">
//       <div
//         className="flex items-center border p-2 rounded-md cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <span className="flex-grow">{label}</span>
//         <FaBars className="h-6 w-6 text-gray-500" />
//       </div>
//       {open && (
//         <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10">
//           {options.map((option) => (
//             <div
//               key={option}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const Dropdown = ({ label, options, setSelected }) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center border p-2 rounded-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="flex-grow">{label}</span>
        <FaBars className="h-6 w-6 text-gray-500" />
      </div>
      {open && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10 max-h-48 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lastCourse: "",
    lastPercentage: "",
    interestedCourse: "",
    city: "",
    funds: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch the selected country from localStorage and update the form data
  useEffect(() => {
    const selectedCountry = localStorage.getItem("selectedCountry");
    if (selectedCountry) {
      setFormData((prevData) => ({
        ...prevData,
        country: selectedCountry,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.lastCourse) newErrors.lastCourse = "Last course is required";
    if (!formData.lastPercentage || isNaN(formData.lastPercentage))
      newErrors.lastPercentage = "Enter a valid percentage";
    if (!formData.interestedCourse)
      newErrors.interestedCourse = "Select a course";
    if (!formData.city) newErrors.city = "Select a city";
    if (!formData.funds) newErrors.funds = "Enter funds";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiUrl = `https://app.meetuniversity.com/Api_new/landing_register_user/format/json?client_id=mu_internal&key=0a19a3edd791626cca1fe1a33f2f2dba&phone=${formData.phone}&name=${formData.name}&email=${formData.email}&src=0016`;

      axios
        .get(apiUrl)
        .then((response) => {
          console.log("API Response:", response.data);
          // Handle the API response, e.g., show success message or redirect
        })
        .catch((error) => {
          console.error("API Error:", error);
          // Handle the error, e.g., show error message
        });
      console.log("Form submitted successfully", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        lastCourse: "",
        lastPercentage: "",
        interestedCourse: "",
        city: "",
        funds: "",
        country: formData.country,
      });
    }
  };

  return (
    <div className="md:max-w-full max-w-lg mx-auto bg-white  shadow-sm rounded-lg p-6 md:flex md:justify-around md:items-center">
      <div className="mr-6 lg:mr-2">
        {/* This image will show only on medium to large screens */}
        <img
          src={cap}
          alt="cap-img"
          className="hidden md:block h-[27rem] rounded"
        />
      </div>
      <div>
        <h1 className="text-center mb-6 text-3xl">
          Connect with Universities & Study Abroad Experts Instantly !
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Last Course and Percentage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="lastCourse"
                value={formData.lastCourse}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Last Course"
              />
              {errors.lastCourse && (
                <p className="text-red-500 text-sm">{errors.lastCourse}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastPercentage"
                value={formData.lastPercentage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Last Percentage"
              />
              {errors.lastPercentage && (
                <p className="text-red-500 text-sm">{errors.lastPercentage}</p>
              )}
            </div>
          </div>

          {/* Interested Course */}
          <div className="mb-4">
            <Dropdown
              label={formData.interestedCourse || "Interested Course"}
              options={[
                "Accountancy",
                "Accounting & Finance",
                "Agricultural Sciences",
                "Animation",
                "Applied Sciences",
                "Architecture",
                "BBA",
                "Biology",
                "Biomedical Science",
                "Biotechnology",
                "Business and Economics",
                "Business and Entrepreneurship",
                "Business and Finance",
                "Business Management",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science",
                "Computing",
                "Criminology",
                "Cyber Security",
                "Data Science & Analytics",
                "Digital Marketing",
                "Earth Sciences",
                "Economics",
                "Electrical Engineering",
                "Electrical-Electronics",
                "Electronics & Communication",
                "Energy Engineering",
                "Engineering Management",
                "Entrepreneurship",
                "Fashion Design",
                "Finance",
                "Geology",
                "Health Sciences",
                "Hospitality Management",
                "Information Technology",
                "Interior Design",
                "International Business",
                "Journalism & Mass Communication",
                "LLB",
                "LLM",
                "MBA",
                "MBBS",
                "Media Science",
                "Oil & Gas / Petroleum Engineering",
                "Pharmacy",
                "Renewable Energy",
                "Software Engineering",
                "Sustainable Development",
                "Textile Engineering",
                "PHD",
                "Others",
              ]}
              setSelected={(value) =>
                setFormData({ ...formData, interestedCourse: value })
              }
            />
            {errors.interestedCourse && (
              <p className="text-red-500 text-sm">{errors.interestedCourse}</p>
            )}
          </div>

          {/* City and Funds */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <Dropdown
                label={formData.city || "City"}
                options={[
                  "Ahmedabad",
                  "Amritsar",
                  "Bangalore",
                  "Bhubaneshwar",
                  "Chandigarh",
                  "Chennai",
                  "Coimbatore",
                  "Dehradun",
                  "Delhi",
                  "Delhi South",
                  "Delhi West",
                  "Faridabad",
                  "Guntur",
                  "Gurugram",
                  "Guwahati",
                  "Hyderabad",
                  "Indore",
                  "Jalandhar",
                  "Jammu",
                  "Kochi",
                  "Kolkata",
                  "Lucknow",
                  "Ludhiana",
                  "Moga",
                  "Mumbai Churchgate",
                  "Mumbai Dadar",
                  "Mumbai Thane",
                  "Mumbai Vashi",
                  "Mumbai Bandra",
                  "Noida",
                  "Patiala",
                  "Pune",
                  "Surat",
                  "Trivandrum",
                  "Vadodara",
                  "Vijayawada",
                  "Vishakhapatnam",
                ]}
                setSelected={(value) =>
                  setFormData({ ...formData, city: value })
                }
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
            <div>
              <Dropdown
                label={formData.funds || "Funds"}
                options={["Loan", "Self"]}
                setSelected={(value) =>
                  setFormData({ ...formData, funds: value })
                }
              />
              {errors.funds && (
                <p className="text-red-500 text-sm">{errors.funds}</p>
              )}
            </div>
          </div>

          {/* Country (Pre-selected and Read-only) */}
          <div className="mb-4">
            <input
              type="text"
              name="country"
              value={formData.country}
              className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
              readOnly
              placeholder="Selected Country"
            />
          </div>

          {/* Register Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              REGISTER HERE!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
