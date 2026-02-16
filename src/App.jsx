// src/App.jsx
import React, { useEffect } from 'react';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import './index.css';

export default function App() {
  useEffect(() => {
    // Apply saved theme or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}