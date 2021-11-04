import React from 'react'

import {AmbientLight, DirectionLight} from './3d/light';
import GLTFModel from './3d/gltf_model';


export default function Card() {

    return (
        <div>
            <GLTFModel
                src="/obj/Final 02.glb"
                scale={{x:0.5,y:0.5,z:0.5}}
                position={{x:0,y:-50,z:10}}
                rotation={{x:0,y:0, z:0}}
                enableZoom={false}
            >
                <AmbientLight color={0xffffff} />
            </GLTFModel>
        </div>
    )
}