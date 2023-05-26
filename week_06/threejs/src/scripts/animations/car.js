import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $scene = document.getElementById('scene');
const $triggers = document.querySelectorAll("[data-animation='three-d']");

const X_DEFAULT = 850;
const Y_DEFAULT = 50;
const Z_DEFAULT = -2000;

//#region Setup scene
const scene = new THREE.Scene();
scene.background = new THREE.Color();
//#endregion

//#region Setup renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
const $canvas = renderer.domElement;
$scene.appendChild($canvas);
//#endregion

//#region Setup camera
const cameraAspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(40, cameraAspectRatio, 1, 5000);

camera.position.x = 0;
camera.position.y = 100;
camera.position.z = 2000;
//#endregion

//#region Setup light
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
//#endregion

//#region Adding a model to the scene
const loader = new GLTFLoader();
loader.load('/car/scene.gltf', (gltf) => {
    //#region Adding model
    const model = gltf.scene.children[0];
    model.scale.set(1,1,1);
    model.position.x = convertNumber(X_DEFAULT, false);
    model.position.y = Y_DEFAULT;
    model.position.z = Z_DEFAULT;

    scene.add(gltf.scene);

    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
    //#endregion

    modelAnimation(model);
});
//#endregion

const animation = (model, timeline, xPos, yPos, zPos, modelRotation) => {
    timeline.to(model.position, {
        x: xPos,
        y: yPos,
        z: zPos,
        duration: 2,
        ease: 'power4.inOut'
    }, 0).to(model.rotation, {
        z: modelRotation,
        duration: 2,
        ease: 'power4.inOut'
    }, 0);
}

const convertNumber = (number, isOdd) => {
    return isOdd ? -Math.abs(number) : Math.abs(number);
}

const modelAnimation = (model) => {
    $triggers.forEach(($trigger, index) => {
        const isOdd = index % 2;
        const {x = convertNumber(X_DEFAULT, isOdd), y = convertNumber(Y_DEFAULT, isOdd), z = -1500, rotation = convertNumber(2, isOdd)} = $trigger.dataset;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: $trigger,
                scrub: true,
                end: "bottom bottom"
            }
        });

        animation(model, tl, x, y, z, rotation);
    });
}