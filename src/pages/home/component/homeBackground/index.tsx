import React from "react";
import { DivWrapper } from "./style";
import HomeImageSlider from "../imageSlider";

function HomeBackground() {
  return (
    <DivWrapper>
      <div className="box">
        <div className="sideA">
          <div>
            <HomeImageSlider />
          </div>
        </div>
        <div className="sideB">
          <h1>Missing Person</h1>
          <p>
            Finding a missing person can be a difficult task, but if you know
            where to look, it is often much easier to find a missing person.
            Just follow some simple steps to find a missing person in our
            database. We regularly add data of missing children, mental person
            and unknown dead bodies received in Nigeria. You can search about
            your missing person on this website, and can get notification about
            found person through your email or mobile SMS.
          </p>
        </div>
      </div>
    </DivWrapper>
  );
}

export default HomeBackground;
