let container;
let scene;
let camera;
let renderer;
let model;
let controls;
var model1, model2, model3, model4;
var pointLight;
var spotLight;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector3(), INTERSECTED;

function init(){
    container = document.querySelector('.scene');


    scene = new THREE.Scene();


    const fov = 75;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1500;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(500, 800, 500);


    const ambientLight = new THREE.AmbientLight(0xd2e4e0, 0.2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, .3)
    directionalLight.position.set(80,40,0)
    scene.add(directionalLight)
    
    
    
    const directionalLight2 = new THREE.DirectionalLight(0x0e1110, 1, 100)
    directionalLight2.position.set(80,100,180)
    directionalLight2.castShadow = true; 
    // directionalLight2.mask = 0x000000; // default mask
    directionalLight2.shadow.mapSize.width = 1024; 
    directionalLight2.shadow.mapSize.height = 1024; 
    directionalLight2.shadow.camera.near = 0.8;       
    directionalLight2.shadow.camera.far = 100   
    scene.add(directionalLight2)

    
    // pointLight = new THREE.PointLight( 0xffef72, 1.6 );
    // pointLight.position.set( 15, 100, 15 );
    // pointLight.decay = 2;
    // pointLight.distance = 500;
    // scene.add( pointLight );

    // spotLight = new THREE.SpotLight( 0xffffff, 1 );
    // spotLight.position.set( 0, 440, -5 );
    // // spotLight.position.set( 400, 440, 100 );
    // spotLight.angle = 0.4;
    // spotLight.penumbra = 0.8;
    // spotLight.decay = 4;
    // spotLight.distance = 6000;
    // spotLight.castShadow = true;
    // scene.add( spotLight );

     spotLight = new THREE.SpotLight( 0xffffff, .5 );
    // spotLight.position.set( -500, 440, -5 );
    spotLight.position.set( 0, 440, 0 );
    spotLight.angle = 1;
    spotLight.penumbra = 0.8;
    spotLight.decay = 4;
    spotLight.distance = 10000;
    spotLight.castShadow = true;
    scene.add( spotLight );
    


    // var spotLightHelper = new THREE.SpotLightHelper( spotLight, 5 );
    // var pointLightHelper = new THREE.PointLightHelper( pointLight, 5 );
    // scene.add( spotLightHelper );
    // scene.add( pointLightHelper );

    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true})
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // let loader = new THREE.GLTFLoader
    // loader.load('./3D-assets/room1/scene.gltf', function(gltf){
    //     scene.add(gltf.scene);
    //     model = gltf.scene.children[0]
    //     // renderer.render(scene, camera)
    //     model.position.set(0, 50, 0)
    //     model.scale.set(.6, .6, .6)
    //     model.traverse( ( child ) => {
    //         if ( child.isMesh ) {
    //         // child.castShadow = true;
    //         // child.receiveShadow = true
    //         child.material.emissive = new THREE.Color( 0x000022 );
    //         child.material.emissiveIntensity = 0.5
    //         // child.material.lightMapIntensity = 2

    //         // child.mask = 0x000000
    //         child.castShadow = true;
    //         child.receiveShadow = true
    //         }
    //         })
    //     animate()
    // })
    // loader.load('./3D-assets/room2/scene.gltf', function(gltf){
    //     scene.add(gltf.scene);
    //     model = gltf.scene.children[0]
    //     // renderer.render(scene, camera)
    //     model.position.set(240, 50, 0)
    //     model.scale.set(.6, .6, .6)

    //     animate()
    // })
    // loader.load('./3D-assets/room3/scene.gltf', function(gltf){
    //     scene.add(gltf.scene);
    //     model = gltf.scene.children[0]
    //     // renderer.render(scene, camera)
    //     model.position.set(0, 50, 240)
    //     model.scale.set(.6, .6, .6)

    //     animate()
    // })

    // loader.load('./3D-assets/room4/scene.gltf', function(gltf){
    //     scene.add(gltf.scene);
    //     model = gltf.scene.children[0]
    //     // renderer.render(scene, camera)
    //     model.position.set(240, 50, 240)
    //     model.scale.set(.6, .6, .6)

    //     animate()
    // })

  

   
// Promises
    var p1 = loadModel('./3D-assets/room1/scene.gltf').then(result => {  model1 = result.scene.children[0]; });
    var p2 = loadModel('./3D-assets/room2/scene.gltf').then(result => {  model2 = result.scene.children[0]; });
    var p3 = loadModel('./3D-assets/room3/scene.gltf').then(result => {  model3 = result.scene.children[0]; });
    var p4 = loadModel('./3D-assets/room4/scene.gltf').then(result => {  model4 = result.scene.children[0]; });


Promise.all([p1,p2,p3,p4]).then(() => {
    model1.position.set(0, 50, 0)
    model1.scale.set(.6, .6, .6)
    model2.position.set(240, 50, 0)
    model2.scale.set(.6, .6, .6)
    model3.position.set(0, 50, 240)
    model3.scale.set(.6, .6, .6)
    model4.position.set(240, 50, 240)
    model4.scale.set(.6, .6, .6)


    model1.castShadow = true;
    model1.receiveShadow = true
    model2.castShadow = true;
    model2.receiveShadow = true
    model3.castShadow = true;
    model3.receiveShadow = true
    model4.castShadow = true;
    model4.receiveShadow = true
 
    // model4.traverse((o) => {
    //     if (o.isMesh) {
    //       o.material.emissive = new THREE.Color( 0x00ffff );
    //     }
    //   });
    //add model to the scene
    scene.add(model1);
    scene.add(model2);
    scene.add(model3);
    scene.add(model4);
    
    //continue the process
    animate()
 });

    

// Controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.update();

    window.addEventListener( 'resize', onWindowResize, false );
}
function loadModel(url) {
    return new Promise(resolve => {
      new THREE.GLTFLoader().load(url, resolve);
    });
  }

function animate(){
    requestAnimationFrame(animate)

    renderer.render(scene, camera)

}
init()

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight

    camera.updateProjectionMatrix()

    renderer.setSize(container.clientWidth, container.clientHeight)
}

window.addEventListener('resize', onWindowResize)
window.addEventListener("click", onDocumentMouseDown, false);

function render() {
    renderer.render( scene, camera );

}
render();
function onDocumentMouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.z = (event.clientY / window.innerHeight) * 2 + 1;
// console.log(mouse)

// x= mouse.x*500
// y= mouse.y*500
// z= mouse.z*500
    // pointLight.position.set( x, 100, 15 );
    // spotLight.position.set( x, 440, -5 );
    // pointLight.position.set( x, 100,z );
    // spotLight.position.set( x, 440, z);


    var models = [];
    models.push(model1);
    models.push(model2);
    models.push(model3);
    models.push(model4);
    // console.log(scene.children[5]);
    console.log(models);





    raycaster.setFromCamera(mouse, camera);
  

    var intersects = raycaster.intersectObjects(models, true);
  
  
    // if (intersects.length > 0) {
    //   intersects.forEach((intersect) => {
    //     // intersect.object.material.color.setHex(Math.random() * 0xffffff);
    //     console.log(intersect)
    //   });
    // }

    if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex( 0xffffa9 );
            INTERSECTED.material.emissiveIntensity = .2;
            // console.log(INTERSECTED)
        }

    } else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;

    }
  }
  

