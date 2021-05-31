import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};


const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)
})

const aspectRatio = sizes.width / sizes.height;

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// mesh.position.set(2,2)
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000);
camera.position.set(0, 0, 5);

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//  Animate

// const clock = new THREE.Clock()

const controls = new OrbitControls(camera, canvas)
// controls.target.y = 1
controls.enableDamping = true

const tick = () => {
  // const elapsedTime = clock.getElapsedTime()
  // mesh.position.x = Math.cos(elapsedTime*5)
  // mesh.position.y = Math.sin(elapsedTime*5)
  
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
    // camera.position.y = cursor.y * 3

  // camera.lookAt(mesh.position)
  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

// Cursor


