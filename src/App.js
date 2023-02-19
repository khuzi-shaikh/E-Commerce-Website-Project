import { useSelector } from "react-redux";
import "./App.css";
import { Loader } from "./Components/Loader";
import { RouteData } from "./Components/RouteData";

function App() {
  const select = useSelector((state)=>state)
  const loader = select.ProductReducer.loader;
  return (
    <div className="App">
      {loader && <Loader/>}
      <RouteData />
    </div>
  );
}
export default App;
