import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Basic from "./pages/basic";


const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path={"/basic"} element={<Basic/>}/>
            </Routes>


        </div>
    );
};

export default App;
