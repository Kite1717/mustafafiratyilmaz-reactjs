import React, { memo } from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-3 shadow-md border rounded-md">
      <div className="flex flex:row justify-between w-96 max-w-96 items-center">
        <Link
          className="font-medium text-black text-xl tracking-tight italic mr-2"
          to="/"
        >
          UPayments Store
        </Link>
        <Link
          to="/new-product"
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          Create New Product
        </Link>
      </div>

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
