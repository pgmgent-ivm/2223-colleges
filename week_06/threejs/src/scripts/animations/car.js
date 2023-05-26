import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $scene = document.getElementById('scene');
const $trigger = document.querySelector("[data-animation='three-d']");

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

camera.position.x = -200;
camera.position.y = 50;
camera.position.z = 1750;

// Setup light
const ambientLight = new THREE.AmbientLight (0x404040,100);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffcd87,30);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const light = new THREE.PointLight(0xfff,10);
light.position.set(0,300,500);
scene.add(light);

const light2 = new THREE.PointLight(0xfff,10);
light2.position.set(500,100,0);
scene.add(light2);

const light3 = new THREE.PointLight(0x000b82,10);
light3.position.set(0,100,-500);
scene.add(light3);

const light4 = new THREE.PointLight(0x000b82,10);
light4.position.set(-500,300,500);
scene.add(light4);

// Adding a model to the scene
const loader = new GLTFLoader();
loader.load('/car/scene.gltf', (gltf) => {
    const model = gltf.scene.children[0];
    model.scale.set(.5,.5,.5);
    scene.add(gltf.scene);

    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: $trigger,
            scrub: true,
            end: "bottom bottom",
            markers: true
        }
    });

    tl.to(camera.position, {
        x: -500,
        y: 350,
        z: 2400,
        duration: 2,
        ease: 'power4.inOut'
    }, 0).to(model.rotation, {
        z: 2,
        duration: 2,
        ease: 'power4.inOut'
    }, 0);
});