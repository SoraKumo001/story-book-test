import React from "react";

export function Test01(props:{label:string,onClick:()=>void}){
  return <button onClick={props.onClick}>{props.label}</button>
}