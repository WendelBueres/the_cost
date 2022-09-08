import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Loading } from "../components/Loading";
import { Registro } from "../Pages/Registro";
import { Login } from "../Pages/Login";
import Perfil from "../Pages/Perfil";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route> {/* retornar esse element para Login  */}
      <Route path="/registro" element={<Registro />}></Route>
      <Route element={<Loading />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* Alterar rota quando criada a page de perfil */}
        <Route path="/perfil" element={<Perfil />}></Route> 
      </Route>
    </Routes>
  );
}
