let container;
let scene1;
let scene2;
let scene3;
let scene4;
let camera;
let renderer;
let controls;
let models = [];
var model1, model2, model3, model4;
let pointLight1;
let pointLight2;
let pointLight3;
let pointLight4;
let spotLight1;
let spotLight2;
let spotLight3;
let spotLight4;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector3(), INTERSECTED;
let room1Info = document.querySelector('.room1')
let room2Info = document.querySelector('.room2')
let room3Info = document.querySelector('.room3')
let room4Info = document.querySelector('.room4')




function init(){
    container = document.querySelector('.container');

    // Scenes
    scene1 = new THREE.Scene();
    scene2 = new THREE.Scene();
    scene3 = new THREE.Scene();
    scene4 = new THREE.Scene();

    // Camera
    const fov = 75;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1500;


    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(500, 800, 500);
// camera.position.set( 0.5, 0.5, 0.5 );
		// camera.lookAt( scene1.position );

    // lights
    // Scene1
    // Ambient light 1
    const ambientLight1 = new THREE.AmbientLight(0xd2e4e0, 0.2)
    scene1.add(ambientLight1)
    
    // Directional light 1a
    const directionalLight1a = new THREE.DirectionalLight(0xffffff, .3)
    directionalLight1a.position.set(80,40,0)
    scene1.add(directionalLight1a)
    
    // Directional light 1b
    const directionalLight1b = new THREE.DirectionalLight(0x0e1110, 1, 100)
    directionalLight1b.position.set(80,100,180)
    directionalLight1b.castShadow = true; 
    // directionalLight1b.mask = 0x000000;
    directionalLight1b.shadow.mapSize.width = 1024; 
    directionalLight1b.shadow.mapSize.height = 1024; 
    directionalLight1b.shadow.camera.near = 0.8;       
    directionalLight1b.shadow.camera.far = 100   
    scene1.add(directionalLight1b)
    
    
    // Point light 1
    pointLight1 = new THREE.PointLight( 0xffef72, 0 );
    pointLight1.position.set( 15, 200, 13 );
    pointLight1.decay = 2;
    pointLight1.distance = 1000;
    scene1.add( pointLight1 );
    
    // Spot light 1
    spotLight1 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight1.position.set( 0, 440, -5 );
    // spotLight1.position.set( 400, 440, 100 );
    spotLight1.angle = 0.4;
    spotLight1.penumbra = 0.8;
    spotLight1.decay = 4;
    spotLight1.distance = 6000;
    spotLight1.castShadow = true;
    // scene1.add( spotLight1 );


    //  spotLight1 = new THREE.SpotLight( 0xffffff, .5 );
    // // spotLight1.position.set( -500, 440, -5 );
    // spotLight1.position.set( 0, 440, 0 );
    // spotLight1.angle = 1;
    // spotLight1.penumbra = 0.8;
    // spotLight1.decay = 4;
    // spotLight1.distance = 10000;
    // spotLight1.castShadow = true;
    // scene1.add( spotLight );
    

    // Helpers
    // var spotLightHelper1 = new THREE.SpotLightHelper( spotLight1, 5 );
    var pointLightHelper1 = new THREE.PointLightHelper( pointLight1, 5 );
    // scene1.add( spotLightHelper1 );
    // scene1.add( pointLightHelper1 );
    
    // -------------------------------------------------------------------------
    // Scene2
    // Ambient light 2
    const ambientLight2 = new THREE.AmbientLight(0xd2e4e0, 0.2)
    scene2.add(ambientLight2)
   


    // Directional light 2a
    const directionalLight2a = new THREE.DirectionalLight(0xffffff, .3)
    directionalLight2a.position.set(80,40,0)
    scene2.add(directionalLight2a)
    
    // Directional light 2b
    const directionalLight2b = new THREE.DirectionalLight(0x0e1110, 1, 100)
    directionalLight2b.position.set(80,100,180)
    directionalLight2b.castShadow = true; 
    // directionalLight2b.mask = 0x000000;
    directionalLight2b.shadow.mapSize.width = 1024; 
    directionalLight2b.shadow.mapSize.height = 1024; 
    directionalLight2b.shadow.camera.near = 0.8;       
    directionalLight2b.shadow.camera.far = 100   
    scene2.add(directionalLight2b)

    
    // Point light 2
    pointLight2 = new THREE.PointLight( 0xffef72, 0 );
    pointLight2.position.set( 245, 200, 10 );
    pointLight2.decay = 2;
    pointLight2.distance = 1000;
    scene2.add( pointLight2 );
    
    // Spot light 2
    spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight2.position.set( 240, 440, 10 );
    // spotLight2.position.set( 400, 440, 100 );
    spotLight2.angle = 0.4;
    spotLight2.penumbra = 0.8;
    spotLight2.decay = 4;
    spotLight2.distance = 6000;
    spotLight2.castShadow = true;
    // scene2.add( spotLight2 );


    //  spotLight2 = new THREE.SpotLight( 0xffffff, .5 );
    // // spotLight2.position.set( -500, 440, -5 );
    // spotLight2.position.set( 0, 440, 0 );
    // spotLight2.angle = 1;
    // spotLight2.penumbra = 0.8;
    // spotLight2.decay = 4;
    // spotLight2.distance = 10000;
    // spotLight2.castShadow = true;
    // scene2.add( spotLight2 );
    

    // Helpers
    var spotLightHelper2 = new THREE.SpotLightHelper( spotLight2, 5 );
    var pointLightHelper2 = new THREE.PointLightHelper( pointLight2, 5 );
    // scene2.add( spotLightHelper2 );
    // scene2.add( pointLightHelper2 );

    // -------------------------------------------------------------------------
    // Scene3
    // Ambient light 3
    const ambientLight3 = new THREE.AmbientLight(0xd2e4e0, 0.2)
    scene3.add(ambientLight3)
    
    // Directional light 3a
    const directionalLight3a = new THREE.DirectionalLight(0xffffff, .3)
    directionalLight3a.position.set(80,40,0)
    scene3.add(directionalLight3a)
    
    // Directional light 3b
    const directionalLight3b = new THREE.DirectionalLight(0x0e1110, 1, 100)
    directionalLight3b.position.set(80,200,180)
    directionalLight3b.castShadow = true; 
    // directionalLight3b.mask = 0x000000;
    directionalLight3b.shadow.mapSize.width = 1024; 
    directionalLight3b.shadow.mapSize.height = 1024; 
    directionalLight3b.shadow.camera.near = 0.8;       
    directionalLight3b.shadow.camera.far = 100   
    scene3.add(directionalLight3b)
    
    
    // Point light 3
    pointLight3 = new THREE.PointLight( 0xffef72, 0 );
    pointLight3.position.set(16, 200, 245 );
    pointLight3.decay = 2;
    pointLight3.distance = 1000;
    scene3.add( pointLight3 );
    
    // Spot light 3
    spotLight3 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight3.position.set( 0, 440, -5 );
    // spotLight3.position.set( 400, 440, 100 );
    spotLight3.angle = 0.4;
    spotLight3.penumbra = 0.8;
    spotLight3.decay = 4;
    spotLight3.distance = 6000;
    spotLight3.castShadow = true;
    // scene3.add( spotLight3 );


    //  spotLight3 = new THREE.SpotLight( 0xffffff, .5 );
    // // spotLight3.position.set( -500, 440, -5 );
    // spotLight3.position.set( 0, 440, 0 );
    // spotLight3.angle = 1;
    // spotLight3.penumbra = 0.8;
    // spotLight3.decay = 4;
    // spotLight3.distance = 10000;
    // spotLight3.castShadow = true;
    // scene3.add( spotLight3 );
    

    // // Helpers
    // var spotLightHelper3 = new THREE.SpotLightHelper( spotLight3, 5 );
    var pointLightHelper3 = new THREE.PointLightHelper( pointLight3, 5 );
    // scene3.add( spotLightHelper3 );
    // scene3.add( pointLightHelper3 );

    // -------------------------------------------------------------------------
    // Scene4
    // Ambient light 4
    const ambientLight4 = new THREE.AmbientLight(0xd2e4e0, 0.2)
    scene4.add(ambientLight4)
    
    // Directional light 4a
    const directionalLight4a = new THREE.DirectionalLight(0xffffff, .3)
    directionalLight4a.position.set(80,40,0)
    scene4.add(directionalLight4a)
    
    // Directional light 4b
    const directionalLight4b = new THREE.DirectionalLight(0x0e1110, 1, 100)
    directionalLight4b.position.set(80,100,180)
    directionalLight4b.castShadow = true; 
    // directionalLight4b.mask = 0x000000;
    directionalLight4b.shadow.mapSize.width = 1024; 
    directionalLight4b.shadow.mapSize.height = 1024; 
    directionalLight4b.shadow.camera.near = 0.8;       
    directionalLight4b.shadow.camera.far = 100   
    scene4.add(directionalLight4b)
    
    
    // Point light 4
    pointLight4 = new THREE.PointLight( 0xffef72, 0 );
    pointLight4.position.set( 245, 100, 245 );
    pointLight4.decay = 2;
    pointLight4.distance = 1000;
    scene4.add( pointLight4 );
    
    // Spot light 3
    spotLight4 = new THREE.SpotLight( 0xffffff, 1 );
    spotLight4.position.set( 0, 440, -5 );
    // spotLight3.position.set( 400, 440, 100 );
    spotLight4.angle = 0.4;
    spotLight4.penumbra = 0.8;
    spotLight4.decay = 4;
    spotLight4.distance = 6000;
    spotLight4.castShadow = true;
    // scene4.add( spotLight4 );


    //  spotLight4 = new THREE.SpotLight( 0xffffff, .5 );
    // // spotLight4.position.set( -500, 440, -5 );
    // spotLight4.position.set( 0, 440, 0 );
    // spotLight4.angle = 1;
    // spotLight4.penumbra = 0.8;
    // spotLight4.decay = 4;
    // spotLight4.distance = 10000;
    // spotLight4.castShadow = true;
    // scene4.add( spotLight4 );
    

    // // Helpers
    // var spotLightHelper4 = new THREE.SpotLightHelper( spotLight4, 5 );
    var pointLightHelper4 = new THREE.PointLightHelper( pointLight4, 5 );
    // scene4.add( spotLightHelper4 );
    // scene4.add( pointLightHelper4 );

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true})
    renderer.setSize(container.clientWidth, container.clientHeight)
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.autoClear = false;
    renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.setScissorTest( true );
    container.appendChild(renderer.domElement)  
    // canvas.appendChild( renderer.domElement );

    // renderer.setScissorTest( true );
    // const {left, right, top, bottom, width, height} =
    // container.getBoundingClientRect();
    // const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
    // renderer.setScissor(left, positiveYUpBottom, width, height);

    renderer.setAnimationLoop( function () {

        render();

    } );

    // Loaders
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

        models.push(model1);
        models.push(model2);
        models.push(model3);
        models.push(model4);
        
        scene1.add(model1);
        scene2.add(model2);
        scene3.add(model3);
        scene4.add(model4);
        
        animate()
    });


    

    // Controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY
        // RIGHT: THREE.MOUSE.PAN
    }
    controls.touches = {
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN
    }

    controls.update();

    window.addEventListener( 'resize', onWindowResize, false );
}

// Loader
function loadModel(url) {
    return new Promise(resolve => {
      new THREE.GLTFLoader().load(url, resolve);
    });
  }

function animate(){
    // requestAnimationFrame(animate)

    // renderer.render(scene, camera)

    requestAnimationFrame(animate);
    // controls.update()
    renderer.autoClear = true;

    renderer.render(scene1, camera);

    renderer.autoClear = false;

    renderer.render(scene2, camera);

    renderer.autoClear = false;

    renderer.render(scene3, camera);

    renderer.autoClear = false;

    renderer.render(scene4, camera);
}

init()

function onWindowResize(){
    // camera.aspect = container.innerWidth, container.innerHeight

    // camera.updateProjectionMatrix()

    // renderer.setSize(container.innerWidth, container.innerHeightt)


    camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( container.clientWidth, container.clientHeight );
}

window.addEventListener('resize', onWindowResize)
window.addEventListener("click", onDocumentMouseDown, false);

function render() {
    renderer.autoClear = true;

    renderer.render(scene1, camera);

    renderer.autoClear = false;

    renderer.render(scene2, camera);

    renderer.autoClear = false;

    renderer.render(scene3, camera);

    renderer.autoClear = false;

    renderer.render(scene4, camera);
}
render();


function onDocumentMouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.z = (event.clientY / window.innerHeight) * 2 + 1;
    // console.log(mouse)

    x= mouse.x
    y= mouse.y
    z= mouse.z
    


    // var models = [];
    // models.push(model1);
    // models.push(model2);
    // models.push(model3);
    // models.push(model4);
    // console.log(models);

    var scenes = [];
    scenes.push(scene1);
    scenes.push(scene2);
    scenes.push(scene3);
    scenes.push(scene4);
    // console.log(scene1.children);
    // console.log(scenes);

    raycaster.setFromCamera(mouse, camera);
  

    // var intersects = raycaster.intersectObjects(models, true);
    var intersects = raycaster.intersectObjects(scenes, true);
  
  
    

    if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

                INTERSECTED = intersects[ 0 ].object;
                
                // console.log(intersects)
                // console.log(INTERSECTED.id)
    
                if(INTERSECTED.id === 95 ){
                    pointLight4.intensity = 1.5
                    room3Info.style.opacity = 1
                    room3Info.style.transform =  `translate(${x}%,${y}%,${z})`;
                    // room3Info.style.left = `${x}`;
                   
    
                    pointLight3.intensity = 0
                    room1Info.style.opacity = 0
    
                    pointLight1.intensity = 0
                    room2Info.style.opacity = 0
    
                    pointLight2.intensity = 0
                    room4Info.style.opacity = 0
                }
                else if(INTERSECTED.id === 94 ){
                    pointLight3.intensity = 1.5
                    room1Info.style.opacity = 1
                    // room1Info.style.top = `${y}`;
                    // room1Info.style.left = `${x}`;
                    room1Info.style.transform =  `translate(${x}%,${y}%,${z})`;
    
                    pointLight4.intensity = 0
                    room3Info.style.opacity = 0
    
                    pointLight1.intensity = 0
                    room2Info.style.opacity = 0
                    
                    pointLight2.intensity = 0
                    room4Info.style.opacity = 0
                }
                else if(INTERSECTED.id === 92 ){
                    pointLight1.intensity = 1.5
                    room2Info.style.opacity = 1
                    // room2Info.style.top = `${y}`;
                    // room2Info.style.left = `${x}`;
                    room2Info.style.transform =  `translate(${x}%,${y}%,${z})`;
    
                    pointLight4.intensity = 0
                    room3Info.style.opacity = 0
    
                    pointLight3.intensity = 0
                    room1Info.style.opacity = 0
    
                    pointLight2.intensity = 0
                    room4Info.style.opacity = 0
                }
                else if(INTERSECTED.id === 93 ){
                    pointLight2.intensity = 1.5
                    room4Info.style.opacity = 1
                    // room4Info.style.top = `${y}`;
                    // room4Info.style.left = `${x}`;
                    room4Info.style.transform =  `translate(${x}%,${y}%,${z})`;
    
                    pointLight3.intensity = 0
                    room1Info.style.opacity = 0
    
                    pointLight1.intensity = 0
                    room2Info.style.opacity = 0
    
                    pointLight4.intensity = 0
                    room3Info.style.opacity = 0
                }
            
        }

    } else {
        if ( INTERSECTED ) {
            pointLight4.intensity = 0
            room3Info.style.opacity = 0
            pointLight3.intensity = 0
            room1Info.style.opacity = 0

            pointLight1.intensity = 0
            room2Info.style.opacity = 0

            pointLight2.intensity = 0
            room4Info.style.opacity = 0
        }
      
        INTERSECTED = null;

    }
  }
  

