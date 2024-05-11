const canvas = document.getElementById("render-canvas");

const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

var t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  //   box.rotation.y = t * 2;
}
engine.runRenderLoop(renderLoop);

// const camera = new BABYLON.FreeCamera(
//   "camera",
//   new BABYLON.Vector3(0, 0, -10),
//   scene
// );

var camera = new BABYLON.ArcRotateCamera(
  "Camera",
  0,
  Math.PI / 2,
  10,
  new BABYLON.Vector3(0, 0, 0),
  scene
);
camera.attachControl(canvas, true);

const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
