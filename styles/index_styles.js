import { Color,
    MeshBasicMaterial,
    Clock,
} from "three";
import { IfcViewerAPI } from "web-ifc-viewer";
import CameraControls from 'camera-controls';

// Set simple viewer

const white = new Color("white")
const black = new Color("black")

const container = document.getElementById("viewer_container");

const viewer = new IfcViewerAPI({
    container,
    backgroundColor: black
})

viewer.context.toggleCameraControls(false)

const sizeRatio = window.innerHeight/window.innerWidth;
const renderer =  viewer.context.getRenderer()
const scene = viewer.context.getScene()
let customWidth = 700;

renderer.setSize(customWidth, customWidth*sizeRatio);

viewer.axes.setAxes();
viewer.grid.setGrid();

// Animation of viewer
const camera = viewer.context.getCamera();
camera.position.set(13,13,13)
const clock = new Clock();

// Create Animation
function animate() {

    scene.rotation.z += 0.005;
    scene.rotation.y += 0.004;

    const delta = clock.getDelta();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();


// Change Style

const mybutton = document.getElementsByClassName('button_to_app');
const get_tag = document.querySelectorAll('*')

mybutton[0].addEventListener('mouseover', function() {
    get_tag.forEach((item) => {
        item.style.background = 'white';
        item.style.color = 'black';
    });
    scene.background = white;
})

mybutton[0].addEventListener('mouseout', function() {
    get_tag.forEach((item) => {
        item.style.background = 'black';
        item.style.color = 'white';
    })
    scene.background = black;
})

const div = document.querySelector('#viewer_container div')
div.remove()