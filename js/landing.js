// global THREE
const colors = [
  0x000000,
  0x404040,
  0xd3d3d3,
  0x646464,
  0xc900d3,
  0xbe0087,
  0x0006be,
  0x3bbe00
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomScale(min, max) {
  return Math.random() * (max - min) + min;
}

function main() {
  const canvas = document.querySelector('#stretcher');
  console.log(canvas.clientWidth, canvas.clientHeight);
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 40; // fov stand for field of view
  const aspect = 2; // canvas default setting
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 120;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(colors[getRandomInt(8)]);

  function resizeRendererToDisplaySize(renderer) {
    const canvasRenderer = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvasRenderer.clientWidth * pixelRatio || 0;
    const height = canvasRenderer.clientHeight * pixelRatio || 0;
    const needResize =
      canvasRenderer.width !== width || canvasRenderer.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const objects = [];
  const spread = 20;

  function addObject(x, y, obj) {
    obj.position.x = x * spread;
    obj.position.y = y * spread;

    scene.add(obj);
    objects.push(obj);
  }

  function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoublSide
    });

    const hue = Math.random();
    const saturation = 1;
    const luminance = randomScale(0.5, 1);
    material.color.setHSL(hue, saturation, luminance);
    return material;
  }

  function addSolidGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh);
  }

  function addLineGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh);
  }

  {
    const loader = new THREE.FontLoader();
    loader.load('three/Staatliches_Regular.json', font => {
      const geometry = new THREE.TextBufferGeometry('ADAMOORE.NET', {
        font: font,
        size: randomScale(8.0, 14),
        height: randomScale(0.2, 2),
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.15,
        bevelSize: 0.3,
        bevelSegments: 5
      });
      const mesh = new THREE.Mesh(geometry, createMaterial());
      geometry.computeBoundingBox();
      geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

      const parent = new THREE.Object3D();
      parent.add(mesh);

      addObject(randomScale(-1, 1), randomScale(-1, 1), parent);
    });
  }
  {
    const loader2 = new THREE.FontLoader();
    loader2.load('three/Staatliches_Regular.json', font => {
      const geometry = new THREE.TextBufferGeometry('Welcome to', {
        font: font,
        size: randomScale(6.0, 12),
        height: randomScale(0.2, 2),
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.15,
        bevelSize: 0.3,
        bevelSegments: 5
      });
      const mesh = new THREE.Mesh(geometry, createMaterial());
      geometry.computeBoundingBox();
      geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

      const parent = new THREE.Object3D();
      parent.add(mesh);

      addObject(randomScale(-1.5, 1.5), randomScale(-1.5, 1.5), parent);
    });
  }

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  function render(time) {
    time *= 0.001; // converting time to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvasResize = renderer.domElement;
      camera.aspect = canvasResize.clientWidth / canvasResize.clientHeight;
      camera.updateProjectionMatrix();
    }
    objects.forEach((obj, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      obj.rotation.x = rot;
      obj.rotation.y = rot;
    });
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
