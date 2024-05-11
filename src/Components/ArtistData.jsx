import React from "react";

const ArtistData = ({data}) => {
  return (
    <div className="xl:h-screen h-[50vh] details flex items-center justify-center xl:justify-start xl:ps-16">
      <div className="text-white max-w-[450px]">
        <p className="text-5xl font-Logo font-medium">{data.name}</p>
        <p className="text-sm mt-1">{data.dateOfBirth} - {data.dateOfDeath}</p>
        <p className="text-sm mt-1">{data.nationality}</p>
        <div className="my-3 border-b border-b-white w-[250px]"></div>
        <p className="mt-6">
        {data.shortBio}
        </p>
      </div>
    </div>
  );
};

export default ArtistData;
