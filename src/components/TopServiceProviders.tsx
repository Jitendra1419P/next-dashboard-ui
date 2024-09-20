import React from "react";
import ServiceCads from "./ServiceCads";

const TopServiceProviders = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-5">
      {/* Title */}
      <div className="w-full pt-2 pl-3 mb-3 flex">
        <h1 className="text-xl font-semibold ">Top Service Providers</h1>
      </div>
      <div className="flex items-start justify-start gap-3 mb-4 px-4">
        <ServiceCads
          image="/image_1.png"
          title="Construction Sector"
          icon="/Frame.png"
          follow="+ 200"
          like="+11.02%"
        />
        <ServiceCads
          image="/image4.png"
          title="Health Care Sector"
          icon="/Frame.png"
          follow="+ 180"
          like="+10.02%"
        />
        <ServiceCads
          image="/image3.png"
          title="Home Services Sector"
          icon="/Frame.png"
          follow="+ 150"
          like="+9%"
        />
        <ServiceCads
          image="/image2.png"
          title="Pet Care Sector"
          icon="/Frame.png"
          follow="+ 100"
          like="+5%"
        />
      </div>
    </div>
  );
};

export default TopServiceProviders;
