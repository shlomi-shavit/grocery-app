import React from 'react';
import './App.module.scss';

// Component
import Header from './component/header/header';
import GroceryPage from './pages/grocery-page/grocery-page.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <GroceryPage />
    </div>
  );
}

export default App;
