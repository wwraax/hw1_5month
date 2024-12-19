import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {

  const [data, setData] = useState([]);
    
  const [dataPage, setDataPage] = useState([]);
    

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(({ data }) => setData(data))
      
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => setDataPage(data))
    
}, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/page1'element={<Page1 data={data}/>}/>
        <Route path='/page2'element={<Page2 dataPage={dataPage}/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
