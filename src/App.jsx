import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <div className="max-w-screen-lg">
        <Header></Header>
        <Body></Body>
      </div>
    </>
  );
}

export default App;
