
import profilePic from "@/assets/saqlain.png";
import { ReactNode } from "react";
import MyHeading from "@/components/ui/heading";

interface Prop {
  textContent: string;
  children?: ReactNode;
}

export function TextImageDiv({ textContent }:Prop)  {
  return (
    <div className="flex w-full">
      <div className="flex-1 p-4">
        <>
        <MyHeading text="Hello I'm Saqlain Ahmad"></MyHeading>
        <br></br>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight">{textContent}</p>
        
        </>
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
