import React from "react";
import DomeGallery from "./DomeGallery";

export const MobileDome = () => {
  return (
    <div className=" overflow-x-hidden max-md:w-screen  flex items-center justify-center  w-[80vw] h-[70vh]">
      <DomeGallery fit={0.25} minRadius={200} segments={16} />
    </div>
  );
};
