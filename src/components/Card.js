import React from "react";

const Card = ({ title, imgUrl, content }) => {
  return (
    <div className="m-2 shadow-lg border border-blue-700 shadow-cyan-500/40 hover:shadow-cyan-500">
      <div className="flex justify-center items-center mt-3">
        <img src={imgUrl} alt="img" className="h-[250px] w-[300px]" />
      </div>
      <div className="text-center text-[25px] font-bold mt-3">
        <h2>{title}</h2>
      </div>
      <div className="text-center text-[19px] mt-5">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
