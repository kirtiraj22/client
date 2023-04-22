import React from "react";
import Card from "../components/Card";
import Ipfs from "../assets/ipfs.png";
import Access from "../assets/access.jfif";
import Immutable from "../assets/immutable.jpg";
import Scalable from "../assets/scalable.jfif";

const Features = () => {
  return (
    <div className="h-screen bg-[--bg-color] text-[--text-color]">
      <div>
        <h2 className="text-center items-center text-[40px] font-bold">
          OUR <span className="text-blue-700">FEATURES</span>
        </h2>
      </div>
      <div className="flex justify-between mt-[80px]">
        <Card
          title="Decentralized Storage"
          imgUrl={Ipfs}
          content="SecureVault allows you to store your files in a completely decentralized manner using the InterPlanetary File System (IPFS), ensuring that your data is secure and tamper-proof."
        />
        <Card
          title="Access Control"
          imgUrl={Access}
          content="SecureVault lets you control who has access to your files by allowing you to grant and revoke access to individual users, making it easy to collaborate while keeping your files secure."
        />
        <Card
          title="Scalable"
          imgUrl={Scalable}
          content="SecureVault's use of IPFS allows for unlimited storage capacity, meaning you can store as many files as you need without worrying about storage limitations."
        />
        <Card
          title="Immutable"
          imgUrl={Immutable}
          content="SecureVault ensures that the stored files cannot be tampered with, as they are stored on a decentralized network that provides immutability. This makes it an ideal solution for storing sensitive documents that require a high level of security."
        />
      </div>
    </div>
  );
};

export default Features;
