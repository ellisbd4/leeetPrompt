import { useRef, useEffect, useState } from 'react'

import birdScene from '../assets/3d/phoenix_bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    const [animationStep, setAnimationStep] = useState(0);

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

useEffect(() => {
    actions['Take 001'].play();

    async function animateBird() {
        await delay(2000);
        setAnimationStep(1); // Start the turning animation
        await delay(1000);
        setAnimationStep(2); // Start flying away
        await delay(500)
        setAnimationStep(3);
    }
    animateBird();
}, []);

useFrame(({ clock, camera }) => {

    if(animationStep === 0) {
        birdRef.current.position.x=0
        birdRef.current.position.y=0
        birdRef.current.position.z=0

        birdRef.current.scale.x=0.01
        birdRef.current.scale.y=0.01
        birdRef.current.scale.z=0.01

    } else if(animationStep === 1) {
        birdRef.current.rotation.y += 0.01;

    } else if(animationStep === 2) {
        birdRef.current.position.z -= 0.05;
    } else if(animationStep === 3) {
        birdRef.current.position.z -= 0.05;
        birdRef.current.rotation.y +=0.001;
        birdRef.current.position.x -= 0.005;
    }


    /* birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if(birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
        birdRef.rotation.y = 0;
    }

    if(birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
    } else {
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
    } */
})
    

    return (
        <mesh
        ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird