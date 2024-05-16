import { Provider } from "react-redux";
import "./App.css";
import Routes from "./routes/Routes";
import storeConfig from "./store/storeConfig";

function App() {
    return (
        <>
            <Provider store={storeConfig}>
                <Routes />
            </Provider>
        </>
    );
}

export default App;
