import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No Image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",

          data: formData,
          headers: {
            pinata_api_key: "api",
            pinata_secret_api_key: "secret",
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        // const signer = contract.connect(provider.getSigner());
        contract.add(account, ImgHash);
        alert("Image Uploaded Successfully!");
        setFileName("No Image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
        console.log(e);
      }
    }
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <form className="form mt-[20px]" onSubmit={handleSubmit}>
      <label
        htmlFor="file-upload"
        className="py-[5px] px-[10px] mr-[10px] pb-[10px] bg-[--btn-bg] rounded-md text-[--text-color] hover:bg-cyan-500 text-center cursor-pointer"
      >
        Choose Image
      </label>
      <input
        type="file"
        disabled={!account}
        id="file-upload"
        name="data"
        onChange={retrieveFile}
      />
      <span className="textArea">Image : {fileName}</span>
      <button
        type="submit"
        className="upload text-white py-[5px] px-[10px] ml-[10px] rounded-md bg-[--btn-bg]"
        disabled={!file}
      >
        Upload File
      </button>
    </form>
  );
};

export default FileUpload;
