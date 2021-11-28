import React from 'react'
import { useSelector } from "react-redux";

export default function Temp() {
  const user = useSelector((state) => state.user);
  console.log("Temo",user)
  return (
    <div>
        Temp
    </div>
  )
}
