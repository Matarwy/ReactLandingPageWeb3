import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {AmbientLight, DirectionLight} from './3d/light';
import GLTFModel from './3d/gltf_model';


const useStyles = makeStyles(theme => ({
    root: {
        '& canvas': {
            [theme.breakpoints.down('sm')]: {
                width: '350px !important',
                height: '350px !important',
            }
        }
    }
}))

export default function Card() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <GLTFModel
                src="/obj/Final 02.glb"
                scale={{x:0.7,y:0.7,z:0.7}}
                position={{x:0,y:-270,z:10}}
                rotation={{x:0,y:0, z:0}}
                enableZoom={false}
            >
                <AmbientLight color={0xfffff0} />
                {/* <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/> */}
            </GLTFModel>
        </div>
    )
}