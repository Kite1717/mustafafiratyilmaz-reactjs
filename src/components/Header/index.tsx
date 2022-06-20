import React, { useState } from "react";

const Header = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-3 mt-6 mx-6 shadow-md border rounded-md">
      <span className="font-medium text-black text-xl tracking-tight italic text-white ml-2">
        UPayments Store
      </span>
      <a
        href="#"
        className="font-medium text-black text-xl tracking-tight italic text-white mr-2"
      >
        Register
      </a>
    </nav>
  );
};
export default Header;
