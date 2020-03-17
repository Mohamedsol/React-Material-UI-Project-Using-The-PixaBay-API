import React from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'


function App() {
  return (
    <MultiThemeProvider>
      <div>
    <NavBar />
    <Search />
    </div>
    </MultiThemeProvider>
  );
}

export default App;
