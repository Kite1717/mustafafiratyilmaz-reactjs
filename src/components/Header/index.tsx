import React, { memo } from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-3 shadow-md border rounded-md">
      <Link
        className="font-medium text-black text-xl tracking-tight italic mr-2"
        to="/"
      >
        UPayments Store
      </Link>

      <Link
        className="font-medium text-black text-xl tracking-tight italic mr-2"
        to="/"
      >
        Register
      </Link>
    </nav>
  );
};
export default memo(Header);
