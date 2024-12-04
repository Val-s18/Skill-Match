import Image from "next/image";
import Link from "next/link";
import React from "react";

const ButtonQuizz = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className="bg-orange text-white flex items-center px-[54px] py-2 text-xl transition rounded-tl-[30px] rounded-br-[30px]">
        {text}
      </button>
    </Link>
  );
};

export default ButtonQuizz;
