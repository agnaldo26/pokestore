import GlobalContext from "./context";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <GlobalContext>
      <Header />
      <Main />
    </GlobalContext>
  );
}

export default App;
