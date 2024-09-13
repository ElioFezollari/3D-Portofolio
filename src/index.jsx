import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { PerspectiveCamera } from '@react-three/drei'
import { radToDeg } from 'three/src/math/MathUtils.js'
import PCamera from './PCamera.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Experience />
        <PCamera/>
    </Canvas>
)