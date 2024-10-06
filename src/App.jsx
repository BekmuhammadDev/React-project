import React,{useEffect} from 'react';
import { useHref } from 'react-router';
import { Outlet } from "react-router";
import { modalStore } from "@/context";
import 'react-toastify/dist/ReactToastify.css'
import "./style.scss"

const App = () => {

  const href=useHref();

  useEffect(()=>{
    let isAuth=localStorage.getItem('token');
    if(!isAuth){
    window.location.href="/login"
    }
  },[href]);
  return (
    <>
    <modalStore.Provider value={{ isOpen, setModal }}>
      <Outlet/>
      </modalStore.Provider>
    </>
  );
};

export default App;