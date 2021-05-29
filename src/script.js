// import './style.css'
// import * as THREE from 'three'



// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Objects
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // mesh.position.x = 3
// scene.add(mesh)


// /**
//  * Sizes
//  */
// const sizes = {
//     width: 800,
//     height: 600
// }

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// // camera.position.x = 1
// // camera.position.y = 1
// scene.add(camera)


// /**
//  * Axes Helper
//  */
//  const axesHelper = new THREE.AxesHelper(3)
//  scene.add(axesHelper)

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// // renderer.render(scene, camera)

// const clock = new THREE.Clock()

// const cursor = {
//   x: 0,
//   y: 0
// }

// window.addEventListener('mousemove', (e) => {
//   cursor.x = e.clientX / sizes.width - 0.5
//   cursor.y = -(e.clientY / sizes.height - 0.5)
// })

// const tick = () =>
// {
//     // const elapsedTime = clock.getElapsedTime()
//     // mesh.position.x = Math.sin(elapsedTime)
//     // mesh.position.y = Math.cos(elapsedTime)
//     camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
//     camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3 
//     camera.position.y = cursor.y * Math.PI * 2
//     camera.lookAt(mesh.position)
//     // camera.rotation.x = cursor.x
    
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// tick()