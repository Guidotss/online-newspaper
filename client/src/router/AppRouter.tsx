import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { JournalRoutes } from '../journal'

export const AppRouter:FC = () => {
  return (
    <Routes>
        <Route path="/journal/*" element={<JournalRoutes/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
    </Routes>
  )
}