import NewsIndex from "common/newsIndex";
import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper, { FooterBox } from "./style";

function AppHeader() {
  return (
    <>
      <HeaderWrapper>
        <div className="titlebox">
          <h1>
            <Link to="/">People</Link>
          </h1>
          <div className="box">
            <p>Hot-line:</p>
            <p>+2348164279799</p>
          </div>
        </div>
      </HeaderWrapper>
      <NewsIndex />
    </>
  );
}

export default AppHeader;

export const AppFooter = () => {
  const newYear = new Date().getFullYear();

  return (
    <FooterBox>
      <div className="copyright">
        <p>Copyright © People {newYear}.</p>
        <h4>People</h4>
      </div>
    </FooterBox>
  );
};
