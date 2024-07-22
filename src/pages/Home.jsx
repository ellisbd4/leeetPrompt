import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Crane from '../models/Crane';
import Bird from '../models/Bird';

const Home = () => {

const adjustCraneForScreenSize =() => {
    let screenScale = null;
    let screenPosition = [0, -1, 0];
    let rotation = [0.5, 4, 0];

    if(window.innerWidth < 768) {
        screenScale =[10, 10, 10]
    } else {
        screenScale = [10, 10, 10];
    }

    return [screenScale, screenPosition, rotation]
}

const [craneScale, cranePosition, craneRotation] = adjustCraneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <Canvas
            className="w-full h-screen bg-transparent"
            camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>

                <directionalLight position={[1, 1, 1]} intensity={1}/>
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
                intensity={1}/>

                <Bird 
                position={[0, 0, 0]}
                />

                {/* <Crane 
                position={cranePosition}
                scale={craneScale}
                rotation={craneRotation}
                /> */}

                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home