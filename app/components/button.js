import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({ text, href }) => {
  return (
    <>
      <Link href={href}>
        <button className="bg-bleu text-white flex items-center px-10 py-2 text-xl transition rounded-bl-[30px] rounded-tr-[30px] ">
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
