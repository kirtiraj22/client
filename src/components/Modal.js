import { useEffect } from "react";
import styles from "../index.css";
import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-[--bg-color] fixed flex justify-center items-center">
        <div className="w-[500px] h-[200px] border-r-[12px] bg-[--text-color] flex flex-col p-[25px]  text-center">
          <div className="inline-block text-center">Share with</div>
          <div className="flex justify-center items-center font-[1.7rem] text-center">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            />
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="block m-auto h-[30px] w-[330px] text-center">
                People with access
              </option>
            </select>
          </form>
          <div className="flex justify-center items-center">
            <button
              className="w-[100px] h-[35px] m-[10px] bg-[btn-bg] text-white text-[16px] cursor-pointer"
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
