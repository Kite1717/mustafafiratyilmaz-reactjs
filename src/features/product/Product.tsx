import React, { useState} from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectProducts } from "./productSlice";

export default function Counter(): JSX.Element {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  return <div>Product element</div>;
}
