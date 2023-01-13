import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookAndArtsPage, HomePage, PoliticsPage, SportsPage, TechPage } from '../pages';

export const JournalRoutes:FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sports' element={<SportsPage/>}/>
        <Route path='/politics' element={<PoliticsPage/>}/>
        <Route path='/books-arts' element={<BookAndArtsPage/>}/>
        <Route path='/tech' element={<TechPage/>}/>
    </Routes>
  )
}