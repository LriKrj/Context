import React from "react";
import HeaderButton from "./HeaderButton";
import ThemeContext from "./ThemeContext";
import { buttonThemes } from "./App";

function Header() {
  return (
    <div>
      <ThemeContext.Provider value={buttonThemes}>
        <HeaderButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default Header;
