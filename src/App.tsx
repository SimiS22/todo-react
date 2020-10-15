import React from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import Footer from './components/Footer';
import Header from './components/Header'
import InputTextbox from './components/InputTextbox';
import Content from './pages/Content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className='inputDiv'>
        <InputTextbox />
        <AddButton />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
