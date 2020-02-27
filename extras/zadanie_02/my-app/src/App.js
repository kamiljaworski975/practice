import React from "react";

import { GlobalStyles } from "./themeComponents/global";
import { Wrapper } from "./themeComponents/wrapper";

import ProgressBar from "./progressBar/progressBar";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <ProgressBar />
    </Wrapper>
  );
}

export default App;
