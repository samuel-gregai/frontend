import React from "react";
import Image from "next/image";
import { Send } from "../images";

function SendIcon() {
  return (
    <div>
      <Image src={Send} alt="send-icon" />
    </div>
  );
}

export default SendIcon;
