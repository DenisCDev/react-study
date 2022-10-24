import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { DashBoard, Login } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/login" element={<Login />}/>
        <Route path="/homepage" element={<DashBoard />}/>

        <Route path="*" element={<Navigate to="/homepage" />}/>
 
        </Switch>
    </BrowserRouter>
    );
}