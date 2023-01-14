import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { HomePage, JournalRoutes } from '../journal'

export const AppRouter:FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'/journal'}/>}/>
        <Route path="/journal/*" element={<JournalRoutes/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
    </Routes>
  )
}