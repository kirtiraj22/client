import React from "react";
import Logo from "../assets/logo.avif";
const Banner = () => {
  return (
    <div className="bg-[--bg-color] w-full py-[90px] h-screen">
      <div className="max-w-[1240px] mx-auto text-[--text-color] text-left flex mt-[-20px] w-2/3">
        <div className="flex flex-col">
          <h2 className="font-bold text-[45px] text-left">
            The new standard for safe and reliable data storage
          </h2>
          <p className="text-[22px] text-left mt-7">
            Welcome to SecureVault - the ultimate solution for secure storage
            and sharing of your valuable data. Our platform leverages the power
            of blockchain technology to provide unparalleled security,
            transparency and accessibility to your files. With SecureVault, you
            can easily upload and access your files from anywhere in the world,
            without worrying about data breaches, hacks or unauthorized access.
            Our user-friendly interface and robust security features ensure that
            your data is always safe, encrypted and backed up in multiple
            locations. So, whether you are an individual or a business,
            SecureVault is the ideal choice for all your data storage and
            sharing needs. Sign up today and experience the ultimate peace of
            mind with SecureVault!
          </p>
          <div className="justify-center text-center">
            <button className="bg-[--btn-bg] font-bold py-2 px-4 rounded-md hover:bg-blue-700 items-center justify-items-center text-center">
              Get Started
            </button>
          </div>
        </div>
        <img src={Logo} alt="" className="h-[500px] w-1/3 ml-[40px]" />
      </div>
    </div>
  );
};

export default Banner;
