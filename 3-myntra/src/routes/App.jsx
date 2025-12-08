// import './App.css'

import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Fetchitems from "../Fetchitems";
import {useSelector} from 'react-redux'
import Loading from "../Loading";

function App() {
 
  
  const fetchStatus = useSelector((store) => store.fetchStatus);
  
  return (
    <>
      <div>
        <Header />
        <Fetchitems/>

        {fetchStatus.currentlyFetching ? <Loading></Loading> : 
        <Outlet/>
        }
         
        <Footer />
      </div>
    </>
  );
}

export default App;
