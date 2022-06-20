import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";


const HomePage = (): JSX.Element =>{
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
     <HomePage/>
    </div>
  );
}
