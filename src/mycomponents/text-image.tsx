
import profilePic from "@/assets/saqlain.png";
import { ReactNode } from "react";

interface Prop {
  textContent: string;
  children?: ReactNode;
}

export function TextImageDiv({ textContent }:Prop)  {
  return (
    <div className="flex w-full">
      <div className="flex-1 p-4">
        <p>{textContent}</p>
      </div>
      <div className="flex-1">
        <img
          src={profilePic}
          alt="Image"
          className=" rounded-full animate-bounce-slow w-4/6 ml-60"
        />
      </div>
    </div>
  );
}

export default TextImageDiv;
