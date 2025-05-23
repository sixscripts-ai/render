import React from 'react';
import './index.css';

interface AppProps {
  title?: string;
}

const App: React.FC<AppProps> = ({ title = 'SixScripts AI' }) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>{title}</h1>
        <p>Your AI-powered solution</p>
      </header>
      <main className="app-content">
        <section className="card">
          <h2>Welcome to SixScripts</h2>
          <p>This is a simple React application ready to be deployed.</p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} SixScripts AI</p>
      </footer>
    </div>
  );
};

export default App;
