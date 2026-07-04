import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center text-center flex-col gap-2 my-8 max-lg:my-4 ">
      <div className="border-b-blue-500 border-b-4">
        <p className="text-5xl font-bold border-b-blue-500 max-md:text-2xl max-lg:text-3xl ">
          {title}
        </p>
      </div>
      <p className="text-2xl font-semibold">{subtitle}</p>
    </div>
  );
};
