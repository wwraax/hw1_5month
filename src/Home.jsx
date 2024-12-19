import { useEffect, useState } from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
   
    return (
        <div>
            <h1>Home</h1>
              <Link to={'/page1'}>page1</Link>
              <Link to={'/page2'}>page2</Link>
        </div>
    );
}

export default Home;