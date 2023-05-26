import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const $scene = document.getElementById('scene');

// Setup scene
const scene = new THREE.Scene();
scene.background = new THREE.Color();

// Setup renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
const $canvas = renderer.domElement;
$scene.appendChild($canvas);

// Setup camera
const cameraAspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(40, cameraAspectRatio, 1, 5000);

camera.position.x = 200;
camera.position.y = 200;
camera.position.z = 2000;

// Setup light
const ambientLight = new THREE.AmbientLight(0x404040, 100);
scene.add(ambientLight);

// Adding a model to the scene
const loader = new GLTFLoader();
loader.load('/car/scene.gltf', (gltf) => {
    const model = gltf.scene.children[0];
    model.scale.set(1,1,1);
    scene.add(gltf.scene);

    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
});