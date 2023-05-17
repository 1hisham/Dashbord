import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppContainer } from "./containers/AppContainer";
import Routing from "./router";

function App() {
  return (
    <div className="conaitner max-w-full">
      <BrowserRouter>
        <AppContainer>
          <Routing />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
