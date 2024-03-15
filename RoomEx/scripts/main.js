import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js' 
//Terminal Code: python3 -m http.server
//browser: localhost:8000
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const orbcont = new OrbitControls(camera, renderer.domElement);
scene.background = new THREE.Color(0x2F2F2F);
orbcont.panSpeed = 2;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
const ambient = new THREE.DirectionalLight(0xFFF6C9,0.5);
scene.add(ambient);
const light = new THREE.PointLight( 0xFFF6C9, 1, 100 );
light.position.set(0,20,0);
scene.add( light );


// floor

const floorgeo = new THREE.BoxGeometry(50, 1, 50);
const texture = new THREE.TextureLoader().load("/Textures/WoodenTexture.png");
const floormat = new THREE.MeshLambertMaterial({color: 0x7AC2CF});
const floor = new THREE.Mesh(floorgeo, floormat);
floor.position.set(0, 0, 0);
scene.add(floor);
 
// WALL
const wallgeo = new THREE.BoxGeometry(50, 12.604, 1);
const wallmat = new THREE.MeshLambertMaterial({ color: 0xBABABA });
const wall = new THREE.Mesh(wallgeo, wallmat);
wall.position.set(0, 6.802, 24.501);
scene.add(wall);
 
const wallgeo2 = new THREE.BoxGeometry(50, 12.604, 1);
const wallmat2 = new THREE.MeshLambertMaterial({ color: 0xBABABA });
const wall2 = new THREE.Mesh(wallgeo2, wallmat2);
wall2.position.set(0, 6.802, -24.501);
scene.add(wall2);

const wallgeo3 = new THREE.BoxGeometry(1, 12.604, 50);
const wallmat3 = new THREE.MeshLambertMaterial({ color: 0xBABABA });
const wall3 = new THREE.Mesh(wallgeo3, wallmat3);
wall3.position.set(-24.501, 6.802, 0);
scene.add(wall3);
 
const wallgeo4 = new THREE.BoxGeometry(1, 12.604, 50);
const wallmat4 = new THREE.MeshLambertMaterial({ color: 0xBABABA });
const wall4 = new THREE.Mesh(wallgeo4, wallmat4);
wall4.position.set(24.501, 6.802, 0);
scene.add(wall4);

// BED
const bedgeo = new THREE.BoxGeometry(0.7, 5.58, 5.653);
const bedmat = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const bed = new THREE.Mesh(bedgeo, bedmat);
bed.position.set(-22.807, 3.29, 15.232);
scene.add(bed);

const bedgeo2 = new THREE.BoxGeometry(2.105, 0.577, 3);
const bedmat2 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
const bed2 = new THREE.Mesh(bedgeo2, bedmat2);
bed2.position.set(-21.404, 3.012, 15.232);
scene.add(bed2);

const bedgeo3 = new THREE.BoxGeometry(8.729, 0.788, 5.653);
const bedmat3 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const bed3 = new THREE.Mesh(bedgeo3, bedmat3);
bed3.position.set(-18.092, 2.33, 15.232);
scene.add(bed3);

const bedgeo4 = new THREE.BoxGeometry(8.73, 0.407, 5.653);
const bedmat4 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
const bed4 = new THREE.Mesh(bedgeo4, bedmat4);
bed4.position.set(-18.092, 1.733, 15.232);
scene.add(bed4);

const bedgeo5 = new THREE.BoxGeometry(0.7, 1.03, 0.7);
const bedmat5 = new THREE.MeshLambertMaterial({ color: 0x8B3F00 });
const bed5 = new THREE.Mesh(bedgeo5, bedmat5);
bed5.position.set(-14.086, 1.016, 17.709);
scene.add(bed5);

const bedgeo6 = new THREE.BoxGeometry(0.7, 1.03, 0.7);
const bedmat6 = new THREE.MeshLambertMaterial({ color: 0x8B3F00 });
const bed6 = new THREE.Mesh(bedgeo6, bedmat6);
bed6.position.set(-14.086, 1.016, 12.755);
scene.add(bed6);

// TABLE

const tablegeo = new THREE.BoxGeometry(9.999, 3.526, 5.491);
const tablemat = new THREE.MeshLambertMaterial({ color: 0x8B3F00 });
const table = new THREE.Mesh(tablegeo, tablemat);
table.position.set(-19.002, 2.263, -7.918);
scene.add(table);

const tablegeo2 = new THREE.BoxGeometry(10, 1, 18.83);
const tablemat2 = new THREE.MeshLambertMaterial({ color: 0x8B3F00 });
const table2 = new THREE.Mesh(tablegeo2, tablemat2);
table2.position.set(-19.002, 4.525, -14.587);
scene.add(table2);

const tablegeo3 = new THREE.BoxGeometry(9.999, 3.526, 3.879);
const tablemat3 = new THREE.MeshLambertMaterial({ color: 0x8B3F00 });
const table3 = new THREE.Mesh(tablegeo3, tablemat3);
table3.position.set(-19.002, 2.263, -22.063);
scene.add(table3);

// Computer

const compgeo = new THREE.BoxGeometry(5.197, 5.09, 3.479);
const compmat = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer = new THREE.Mesh(compgeo, compmat);
computer.position.set(-20.23, 7.57, -9.359);
scene.add(computer);

const compgeo2 = new THREE.BoxGeometry(2.538, 0.425, 5.01); // Keyboard
const compmat2 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF});
const computer2 = new THREE.Mesh(compgeo2, compmat2);
computer2.position.set(-16.437, 5.238, -14.96);
scene.add(computer2);

const compgeo3 = new THREE.BoxGeometry(1.4, 4.353, 5.01);
const compmat3 = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer3 = new THREE.Mesh(compgeo3, compmat3);
computer3.position.set(-20.571, 7.938, -14.96);
scene.add(computer3);

const compgeo4 = new THREE.BoxGeometry(1.4, 0.682, 0.784);
const compmat4 = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer4 = new THREE.Mesh(compgeo4, compmat4);
computer4.position.set(-20.571, 5.421, -12.847);
scene.add(computer4);

const compgeo5 = new THREE.BoxGeometry(1.4, 0.682, 0.784);
const compmat5 = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer5 = new THREE.Mesh(compgeo5, compmat5);
computer5.position.set(-20.571, 5.421, -17.073);
scene.add(computer5);

const compgeo6 = new THREE.BoxGeometry(2, 0.054, 0.784);
const compmat6 = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer6 = new THREE.Mesh(compgeo6, compmat6);
computer6.position.set(-20.571, 5.052, -12.847);
scene.add(computer6);

const compgeo7 = new THREE.BoxGeometry(2, 0.054, 0.784);
const compmat7 = new THREE.MeshLambertMaterial({ color: 0x242424 });
const computer7 = new THREE.Mesh(compgeo7, compmat7);
computer7.position.set(-20.571, 5.052, -17.073);
scene.add(computer7);

const compgeo8 = new THREE.BoxGeometry(1.075, 0.338, 0.941);
const compmat8 = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
const computer8 = new THREE.Mesh(compgeo8, compmat8);
computer8.position.set(-16.957, 5.194, -18.819);
scene.add(computer8);

// CHAIR

const chairgeo = new THREE.BoxGeometry(0.607, 2.112, 0.607);
const chairmat = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair = new THREE.Mesh(chairgeo, chairmat);
chair.position.set(-16.348, 1.556, -13.17);
scene.add(chair);

const chairgeo2 = new THREE.BoxGeometry(0.607, 2.112, 0.607);
const chairmat2 = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair2 = new THREE.Mesh(chairgeo2, chairmat2);
chair2.position.set(-16.348, 1.556, -16.824);
scene.add(chair2);

const chairgeo3 = new THREE.BoxGeometry(0.607, 2.112, 0.607);
const chairmat3 = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair3 = new THREE.Mesh(chairgeo3, chairmat3);
chair3.position.set(-12.954, 1.556, -13.17);
scene.add(chair3);

const chairgeo4 = new THREE.BoxGeometry(0.607, 2.112, 0.607);
const chairmat4 = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair4 = new THREE.Mesh(chairgeo4, chairmat4);
chair4.position.set(-12.954, 1.556, -16.824);
scene.add(chair4);

const chairgeo5 = new THREE.BoxGeometry(4, 0.524, 4.26);
const chairmat5 = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair5 = new THREE.Mesh(chairgeo5, chairmat5);
chair5.position.set(-14.651, 2.874, -14.996);
scene.add(chair5);

const chairgeo6 = new THREE.BoxGeometry(0.607, 3.826, 4.26);
const chairmat6 = new THREE.MeshLambertMaterial({ color: 0x8B3F00});
const chair6 = new THREE.Mesh(chairgeo6, chairmat6);
chair6.position.set(-12.954, 5.049, -14.996);
scene.add(chair6);

function animate() {
    requestAnimationFrame(animate);
    orbcont.update(); // Update controls
    renderer.render(scene, camera);
}
 
animate();