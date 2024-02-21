import React from 'react'
import { Outlet } from 'react-router-dom';

export default function(props) {

  console.log(props, props.children);


  return <div>THIS IS ABOUT { props.children}</div>
}