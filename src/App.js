import React from 'react';
import Greeting from './components/Greeting';
import {
  THEME,
  LANGUAGE
} from './context';

export const ThemeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: THEME }}>
        <Greeting />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
