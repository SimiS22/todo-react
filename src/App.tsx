import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header'
import Content from './pages/Content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
