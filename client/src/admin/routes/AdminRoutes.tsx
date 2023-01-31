import { FC } from "react"
import { Route, Routes } from 'react-router-dom';
import { AdminPage, CreatePage, EditPage } from "../pages";


export const AdminRoutes:FC = () => {
  return (
    <Routes>
        <Route path="/newNews" element={<CreatePage/>}/>
        <Route path="/edit" element={<EditPage/>}/>
        <Route path='/adminPanel' element={<AdminPage/>}/>
    </Routes>
  )
}