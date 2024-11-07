import { createGlobalStyle } from "styled-components";
import AppWrapper from "./components/AppWrapper.jsx";
function App() {
  return (
    <div className="App">
      <AppWrapper></AppWrapper>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;
