import * as three from 'three';

const material = new three.MeshBasicMaterial({ color: '#00b' });
const points = [];
points.push(new three.Vector3(-10, 0, 0));
points.push(new three.Vector3(0, 10, 0));
points.push(new three.Vector3(10, 0, 0));
const geometry = new three.BufferGeometry().setFromPoints(points);  
const line = new three.Line(geometry, material);
export default line;