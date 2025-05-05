import React, { lazy, useEffect, useState } from "react";
import type { Route } from "./+types/Layout";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

//import { Welcome } from "../welcome/welcome";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Trajecto" },
    { name: "description", content: "Benvenido ah Trajecto!" },
  ];
}

export default function Home() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3900)
  },[])
  if(!loading){
    return  (
      <DotLottieReact
        src="https://lottie.host/80f5e023-a89a-413d-9d4f-fe40b71b2764/HXdYFFfEGo.lottie"
        loop
        autoplay
        className="h-screen"
      />
    );
  }
  
  return <Provider store={store}>
      <main>
      <div className="z-20 relative"> <Layout /></div>
      <div className="background z-10">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
    </Provider>
}
