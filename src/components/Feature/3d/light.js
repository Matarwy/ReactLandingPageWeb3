import React,{Component} from 'react';
import * as THREE from 'three';

export class AmbientLight extends Component{
  static defaultProps = {
    color:'rgb(30,30,30)'
    ,__constructor:'ambientlight'
  }
  render(){
    return (
      <React.Fragment> </React.Fragment>
    )
  }
}

export class DirectionLight extends Component{
  static defaultProps = {
    color:0xffffff
    ,__constructor:'directionligth'
    ,position:new THREE.Vector3(-30,30,30)
    ,castShadow:true
  }
  render(){
    return (
      <React.Fragment> </React.Fragment>
    )
  }
}