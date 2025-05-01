import React, { lazy } from "react";
import type { Route } from "./+types/Layout";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "@store/store";
//import { Welcome } from "../welcome/welcome";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Trajecto" },
    { name: "description", content: "Benvenido ah Trajecto!" },
  ];
}

export default function Home() {
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
    </div>
  </main>
  </Provider>
}
