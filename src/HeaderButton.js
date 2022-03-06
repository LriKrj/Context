import React from "react";

import ThemeContext from "./ThemeContext";

function HeaderButton() {
  const colorChoice = React.useContext(ThemeContext);
  return (
    <div>
      <button style={colorChoice.black}>Press me</button>
    </div>
  );
}

export default HeaderButton;
