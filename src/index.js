import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBrpyoim-LV9qHBvOtfgSOgS4U8Lp0IyEQ'

// Creating new component. This componnet should produce
// some HTML
// const App = function() {
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it 
//  on the (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));