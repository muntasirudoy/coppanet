import React from "react";
import { bannerText, bannerBtn } from "./bannerInfo";
import Button from "./Button";
const Banner = ({ bannerText }) => {
  return (
    <div>
      <h1>{bannerText.subtitle}</h1>
      <h1>{bannerText.heading}</h1>
      <h1>{bannerText.para}</h1>
      {bannerBtn.map((e) => (
        <span className="mr-2">
          <Button btnInfo={e} />
        </span>
      ))}
    </div>
  );
};

export default Banner;
