import { Color, MeshBasicMaterial } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";
import { IfcManager } from "web-ifc-viewer/dist/components";
import { IfcSelector } from "web-ifc-viewer/dist/components/ifc/selection/selector";
import { projects } from "./ifc_files.js";

const container = document.getElementById("viewer_container");
const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color("white")
})

viewer.axes.setAxes();
viewer.grid.setGrid();
viewer.IFC.setWasmPath("wasm/")

const pickMat = new MeshBasicMaterial({
    color: 0x3d7af5,
    transparent: true,
    opacity: 0.7,
});
  
const prePickMat = new MeshBasicMaterial({
    color: 0xb1fc03,
    transparent: true,
    opacity: 0.7,
});

viewer.IFC.selector.preselection.material = prePickMat;
viewer.IFC.selector.selection.material = pickMat;

async function loadIfc(url) {
    const model = await viewer.IFC.loadIfcUrl(url);
    await viewer.shadowDropper.renderShadow(model.modelID);
    viewer.context.renderer.postProduction.active = true;
}

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");

let modelUrl;

if (currentProjectID === null) {
    const input = document.getElementById("file_input");
    const label = document.querySelector('.custom_file_upload')
    input.addEventListener("change", async () => {
        const file = input.files[0];
        modelUrl = URL.createObjectURL(file);
        loadIfc(modelUrl)
        label.classList.add('hidden')
    });
} else {
    const label = document.querySelector('.custom_file_upload');
    label.classList.add('hidden')
    const currentProject = projects.find((project) => project.id === currentProjectID);
    modelUrl = currentProject.url;
    loadIfc(modelUrl)
}

window.onclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
window.ondblclick = () => viewer.IFC.selector.unpickIfcItems();
