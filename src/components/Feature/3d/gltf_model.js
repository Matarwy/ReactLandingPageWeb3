import * as THREE from 'three';
import {OrbitControls,MTLLoader,OBJLoader,ColladaLoader} from './loader';

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import Model from './model'

class GltfModel extends Model{
  static defaultProps = Object.assign({}, Model.defaultProps,{
    loader: 'gltf'
  })
  constructor(props){
    super(props)
  }
  load3dModel(){

    var {src,texPath} = this.props;

    if(!src) return false

    // model
    var loader = new GLTFLoader();
    // debugger
    loader.load(src, data => {

      this.obj3d = data.scene;
      // debugger
      // Add the objects to the scene 
      //this.scene.add(data.scene);
      // debugger
      // Look for a camera and lighting
      var result = {};
      data.scene.traverse( n=> { 
        // traverseScene(n, result);
        if (n instanceof THREE.Camera) {
          if (!result.cameras)
            result.cameras = [];

          result.cameras.push(n);
        }
        // Look for lights
        if (n instanceof THREE.Light) {
          if (!result.lights)
            result.lights = [];

          result.lights.push(n);
        }

      });

      if (result.cameras && result.cameras.length){
        this.camera = result.cameras[0];
        this.camera.position.copy( 
          this.camera.position.clone().add(new THREE.Vector3(0,0,.01))
        )

      }else {
        // Find a good camera position based on the size of the scene

        let boundingBox = this.computeBoundingBox(data.scene);
        let front = boundingBox.max;
        let cz = boundingBox.max.z - boundingBox.min.z;
        // debugger
        this.camera.position.set(-26.63908202964038,38.969725973392514, 804.5895455213043);

      }

      if (result.lights && result.lights.length) {
      }
      else{ }

      this.initControl()


      this.props.onLoad && this.props.onLoad()
      // gltf.animations; // Array<THREE.AnimationClip>
      // gltf.scene; // THREE.Scene
      // gltf.scenes; // Array<THREE.Scene>
      // gltf.cameras; // Array<THREE.Camera>
      // gltf.asset; // Object

    }
    ,(xhr)=>{
      this.props.onProgress && this.props.onProgress(xhr)
      // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }
    ,()=>{
      console.log( 'An error happened' );
    }
  );



  }
}

export default GltfModel