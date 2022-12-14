import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: var(--dark-primary);
  border-bottom: 2px solid var(--dark-primary);
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 9999;
  padding: 10px 50px;
  color: var(--neutral-light);
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
  }

  .titlebox {
    display: flex;
    justify-content: space-between;
  }
  .box {
    display: flex;
    flex-direction: column;
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 18px 20px;
    .box {
      display: flex;
      flex-direction: row;
      font-size: 15px;
      align-items: center;
    }
  }
`;
export default HeaderWrapper;

export const SmallHeader = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: center;
  height: 30px;
  font-size: 13px;
  font-weight: 700;
  color: var(--neutral-light);
  background: #606096;
  .text {
    display: flex;
    gap: 35px;
  }

  p {
    margin-top: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
    .mobile {
      display: none;
    }
  }
`;

export const FooterBox = styled.div`
  font-size: 14px;
  background-color: var(--dark-primary);
  color: var(--neutral-light);
  padding: 0px 50px;
  .copyright {
    display: flex;
    justify-content: space-between;
  }
  p,
  h4 {
    margin-top: 8px;
  }

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
