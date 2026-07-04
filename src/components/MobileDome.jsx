import React from "react";
import DomeGallery from "./DomeGallery";

export const MobileDome = () => {
  return (
    <div className=" overflow-x-hidden max-md:w-screen max-md:h-[50vh] w-[80vw] h-[80vh]">
      <DomeGallery fit={0.25} minRadius={200} segments={15} />
    </div>
  );
};
