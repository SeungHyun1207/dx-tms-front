import './App.css'
import {viteMode} from "./models/common/CommonModel.ts";
import {Route, Routes} from "react-router-dom";
import Login from "./views/pages/client/Login.tsx";

function App() {

    const activeMode = process.env.NODE_ENV;
    console.log(activeMode);
    console.log(viteMode.PROD);

    return (
        <>
            {activeMode !== viteMode.PROD && (    // mode가 PROD가 일치하지 않을 때,
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                </Routes>
            )}
        </>
    );
}

export default App
