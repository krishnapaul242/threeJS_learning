import * as three from 'three';

const geometry = new three.BoxGeometry();
const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new three.Mesh(geometry, material);

export default cube;