/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import single from "../public/images/singlearrow.png";
import double from "../public/images/doublearrow.png";

export default function Arrow({ type }) {
  return (
    <div className="Arrow">
      <Image
        src={type == "Doubly" ? double : single}
        alt="arrow"
        width={50}
        height={50}
      />
    </div>
  );
}
