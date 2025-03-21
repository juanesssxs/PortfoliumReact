import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container } from './Components/Container/container';
import { Header } from './Components/Layout/Header/header';
import { Footer } from './components/Layout/Footer/footer';
import { Start}
import { Home } from './Components/Pages/Home/home';
import { Profile } from './components/Pages/Profile/profile';
import { Projects } from './components/Pages/Projects/projects';
import { Skills } from './components/Pages/Skills/skills';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/start" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
      <Footer />  {/* El Footer ahora usa el Container */}
    </>
  );
};
