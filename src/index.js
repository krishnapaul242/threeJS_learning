import * as three from 'three';
import cube from './Shapes/Cube';
import line from './Shapes/Line';
const scene = new three.Scene();
const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

scene.add(cube);
scene.add(line);

camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    renderer.render(scene, camera);
}
animate();
