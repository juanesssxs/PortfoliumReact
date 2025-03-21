import React from 'react';
import { Container } from '/Users/user1/Documents/ReactPortfolium/ReactPortfolium/src/Components/Container/container';  // Importamos el Container
import './footer.css';  // Estilos para el Footer

export const Footer = () => {
  return (
    <Container>
      <div className="footer-content">
        <p>&copy; 2025 REACTPORTFOLIUM. Todos los derechos reservados.</p>
        <p>Hecho por Juan Esteban Restrepo EScobar</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </Container>
  );
};

