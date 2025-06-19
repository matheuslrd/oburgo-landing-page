import styled from 'styled-components';

export const AppContainer = styled.div`
    font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
`;

export const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(189, 1, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-bottom: 2px; /* Ajuste fino para compensar a tipografia */

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(189, 1, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
        font-size: 1.2rem;
        bottom: 1rem;
        right: 1rem;
    }
`;
