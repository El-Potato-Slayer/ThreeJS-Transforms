import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// Sizes
const sizes = {
  width: 800,
  height: 600
}

const aspectRatio = sizes.width/sizes.height


// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(2, 2)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio)
camera.position.z = 5
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// You can get the length of a vector:
// console.log(mesh.position.length())
// console.log(mesh.position.distanceTo(camera.position))
