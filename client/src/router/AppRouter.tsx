import { FC, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Loading, Text } from '@nextui-org/react';
import { AuthRoutes } from '../auth'
import { useAuth } from '../hooks'
import { HomePage, JournalRoutes } from '../journal'
import { LoadingSpinner } from '../components';

export const AppRouter:FC = () => {

  const { status,checkToken,isCeo,isJournalist } = useAuth(); 

  useEffect(() => {
    checkToken()
  },[]); 

  if(status === 'checking'){
    return (
      <LoadingSpinner/>
    )
  }
  return (
    <Routes>
        <Route path="/journal/*" element={<JournalRoutes/>}/>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        {
          (status === 'authenticated' && isCeo) && <Route path='/' element={<Navigate to={'/admin'}/>}/>
        }
        <Route path='/' element={<Navigate to={'/journal'}/>}/>
    </Routes>
  )
}