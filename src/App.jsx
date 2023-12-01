import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [category, setCategory] = useState("technology");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <News category={category} />
    </>
  );
}

export default App;
