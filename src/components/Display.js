import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    let dataArray;
    const OtherAddress = document.querySelector(".address").value;
    try {
      if (OtherAddress) {
        dataArray = await contract.display(OtherAddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have ACCESS!!");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="image"
              className="image-list m-[10px]"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div className="image-list m-[10px]">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="block m-auto h-[30px] w-[330px] text-center"
      />
      <button
        className="bg-[--btn-bg] py-2 px-4 rounded-md hover:bg-blue-700 items-center justify-items-center text-center text-white ml-10 mb-5 mt-7"
        onClick={getdata}
      >
        Get Data
      </button>
    </>
  );
};

export default Display;
