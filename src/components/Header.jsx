import logo from "../assets/logo.png";
import student from "../assets/student.png";
import country from "../assets/country.png";

const Header = () => {
  return (
    <div className="m-3">
      <a href="https://www.meetuniversity.com/home">
      <img src={logo} alt="logo-img" className="h-10 md:h-20 m-auto mb-5 md:mb-9" />
      </a>
      
      <h1 className="text-2xl text-center lg:text-4xl mb-[.9rem]">MeetUniversity - Study Abroad</h1>
      <h1 className=" hidden md:block text-center text-2xl lg:text-4xl">
        Study Abroad in UK, USA, Austrailia, New Zealand
      </h1>

      <div
        className="flex
         flex-col items-center mt-6 md:flex-row md:justify-around"  
      >
        <div className="text-center mb-3 mt-8">
          <p className="mb-1 text-lg lg:text-3xl text-orange-600">632229+</p>
          <p className="text-sm md:text-lg lg:text-xl">Students Counseled</p>
        </div>
        <div className="text-center mb-3">
          <p className="mb-1 text-lg lg:text-3xl text-orange-600">206993+</p>
          <p className="text-sm md:text-lg lg:text-xl">University Connects</p>
        </div>
        <div className="text-center">
          <p className="mb-1 text-lg lg:text-3xl text-orange-600">750+</p>
          <p className="text-sm md:text-lg lg:text-xl">Colleges & Universities</p>
        </div>
      </div>

      {/* <div className='grid relative mt-6'>
            <img src={country} alt="country-img" className='rounded flex-wrap relative'/>
            <img src={student} alt="student-img" className='h-[8.3rem] bottom-0 right-0 absolute'/>
        </div> */}
      <div className="relative mt-6 flex justify-center items-center sm:mt-16 md:hidden">
        <img
          src={country}
          alt="country-img"
          className="rounded w-full lg:w-1/2"
        />
        <p className="absolute sm:text-4xl sm:left-7 left-4 text-lg text-white  font-bold">APPLY TO <br /> TOP <br /> UNIVERSITIES</p>
        <img
          src={student}
          alt="student-img"
          className="h-auto w-2/4 absolute bottom-0 right-0 lg:right-[10%] lg:bottom-[5%] object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
