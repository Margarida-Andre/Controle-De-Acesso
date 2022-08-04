import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Rotas from "./routes";
import GlobalStyles from "./globalstyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
