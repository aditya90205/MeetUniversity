/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";

import { useState } from "react";
import cap from "../assets/cap.jpg";

// Dropdown component
// eslint-disable-next-line react/prop-types
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
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-10">
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
  });

  const [errors, setErrors] = useState({});

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
      console.log("Form submitted successfully", formData);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      lastCourse: "",
      lastPercentage: "",
      interestedCourse: "",
      city: "",
      funds: "",
    });
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
          <div className="grid grid-cols-2 gap-4 mb-4">
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
              options={["Course 1", "Course 2", "Course 3"]}
              setSelected={(value) =>
                setFormData({ ...formData, interestedCourse: value })
              }
            />
            {errors.interestedCourse && (
              <p className="text-red-500 text-sm">{errors.interestedCourse}</p>
            )}
          </div>

          {/* City and Funds */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Dropdown
                label={formData.city || "City"}
                options={["City 1", "City 2", "City 3"]}
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
                options={["$1000", "$2000", "$3000"]}
                setSelected={(value) =>
                  setFormData({ ...formData, funds: value })
                }
              />
              {errors.funds && (
                <p className="text-red-500 text-sm">{errors.funds}</p>
              )}
            </div>
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
