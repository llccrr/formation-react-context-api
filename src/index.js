import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './store/UserProvider';
import { Test } from './Test';
import './styles.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Test />
      </div>
    </UserProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
