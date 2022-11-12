import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import { MenuItems } from "./helper";
const btnText = {
  name: "Call Now",
  padding: "10px 25px",
};
const Header = () => {
  return (
    <div className=" border-b-2">
      <Container>
        <div className=" w-[100%] bg-white flex justify-between items-center  py-5 border-b">
          <div className="w-[20%] text-[24px] font-semibold">Coppanet</div>
          <div className="w-[80%] flex justify-end items-center">
            {MenuItems.map((e, i) => (
              <List data={e} padding="0 10px" />
            ))}
            <Button btnInfo={btnText} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
