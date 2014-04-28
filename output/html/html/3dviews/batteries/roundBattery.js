var camera, controls, scene, renderer;
function attach_renderer(target) {

	var SCREEN_WIDTH = 600, SCREEN_HEIGHT = 300;
	var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	target.appendChild( renderer.domElement );

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE, // Field of view
		ASPECT, // Aspect ratio
		NEAR, // Near plane
		FAR // Far plane
	);
	camera.position.set(11.3651181031,11.3651181031,89.0);
                camera.lookAt( scene.position );
                 // placeholder for the FreeCAD camera
	controls = new THREE.TrackballControls( camera );

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];

	var geom = new THREE.Geometry();
                var v0 = new THREE.Vector3(-0.670602384215,-1.42510260763,44.5);
                var v1 = new THREE.Vector3(-1.27420176614,-0.925761772361,44.5);
                var v2 = new THREE.Vector3(-1.00394278385,-1.21355835737,44.5);
                var v3 = new THREE.Vector3(-1.46439796527,0.579796170478,44.5);
                var v4 = new THREE.Vector3(-1.56258065457,0.197399842864,44.5);
                var v5 = new THREE.Vector3(-1.56258065457,-0.197399842864,44.5);
                var v6 = new THREE.Vector3(-1.27420176614,0.925761772361,44.5);
                var v7 = new THREE.Vector3(-1.46439796527,-0.579796170478,44.5);
                var v8 = new THREE.Vector3(1.14812558819,-1.07816169184,44.5);
                var v9 = new THREE.Vector3(0.486701766141,-1.49791401316,44.5);
                var v10 = new THREE.Vector3(0.843927202092,-1.32981648267,44.5);
                var v11 = new THREE.Vector3(-0.670602384215,1.42510260763,44.5);
                var v12 = new THREE.Vector3(-1.00394278385,1.21355835737,44.5);
                var v13 = new THREE.Vector3(1.52551847878,-0.391686572285,44.5);
                var v14 = new THREE.Vector3(1.38018302107,-0.75876203671,44.5);
                var v15 = new THREE.Vector3(1.575,-3.85763741731e-16,44.5);
                var v16 = new THREE.Vector3(-0.295125570473,-1.5471024199,44.5);
                var v17 = new THREE.Vector3(0.0988950682587,-1.57189209727,44.5);
                var v18 = new THREE.Vector3(0.0988950682587,1.57189209727,44.5);
                var v19 = new THREE.Vector3(-0.295125570473,1.5471024199,44.5);
                var v20 = new THREE.Vector3(0.486701766141,1.49791401316,44.5);
                var v21 = new THREE.Vector3(1.52551847878,0.391686572285,44.5);
                var v22 = new THREE.Vector3(1.38018302107,0.75876203671,44.5);
                var v23 = new THREE.Vector3(1.14812558819,1.07816169184,44.5);
                var v24 = new THREE.Vector3(0.843927202092,1.32981648267,44.5);
                var v25 = new THREE.Vector3(0.486701766141,-1.49791401316,43.165);
                var v26 = new THREE.Vector3(0.843927202092,-1.32981648267,43.165);
                var v27 = new THREE.Vector3(1.14812558819,-1.07816169184,43.165);
                var v28 = new THREE.Vector3(1.575,-3.85763741731e-16,43.165);
                var v29 = new THREE.Vector3(1.52551847878,0.391686572285,43.165);
                var v30 = new THREE.Vector3(1.38018302107,0.75876203671,43.165);
                var v31 = new THREE.Vector3(1.38018302107,-0.75876203671,43.165);
                var v32 = new THREE.Vector3(1.14812558819,1.07816169184,43.165);
                var v33 = new THREE.Vector3(1.52551847878,-0.391686572285,43.165);
                var v34 = new THREE.Vector3(0.843927202092,1.32981648267,43.165);
                var v35 = new THREE.Vector3(0.486701766141,1.49791401316,43.165);
                var v36 = new THREE.Vector3(0.0988950682587,1.57189209727,43.165);
                var v37 = new THREE.Vector3(-0.295125570473,1.5471024199,43.165);
                var v38 = new THREE.Vector3(-0.670602384215,1.42510260763,43.165);
                var v39 = new THREE.Vector3(-1.00394278385,1.21355835737,43.165);
                var v40 = new THREE.Vector3(-1.27420176614,0.925761772361,43.165);
                var v41 = new THREE.Vector3(-1.46439796527,0.579796170478,43.165);
                var v42 = new THREE.Vector3(-1.56258065457,0.197399842864,43.165);
                var v43 = new THREE.Vector3(-1.56258065457,-0.197399842864,43.165);
                var v44 = new THREE.Vector3(-1.46439796527,-0.579796170478,43.165);
                var v45 = new THREE.Vector3(-1.27420176614,-0.925761772361,43.165);
                var v46 = new THREE.Vector3(-1.00394278385,-1.21355835737,43.165);
                var v47 = new THREE.Vector3(-0.670602384215,-1.42510260763,43.165);
                var v48 = new THREE.Vector3(-0.295125570473,-1.5471024199,43.165);
                var v49 = new THREE.Vector3(0.0988950682587,-1.57189209727,43.165);
                var v50 = new THREE.Vector3(4.60061007023,-2.52920678903,43.165);
                var v51 = new THREE.Vector3(3.82708529396,-3.59387230613,43.165);
                var v52 = new THREE.Vector3(-2.23534128072,4.75034202545,43.165);
                var v53 = new THREE.Vector3(-3.34647594618,4.04519452457,43.165);
                var v54 = new THREE.Vector3(5.08506159593,-1.30562190762,43.165);
                var v55 = new THREE.Vector3(-4.24733922047,-3.08587257454,43.165);
                var v56 = new THREE.Vector3(-3.34647594618,-4.04519452457,43.165);
                var v57 = new THREE.Vector3(-0.983751901575,5.15700806633,43.165);
                var v58 = new THREE.Vector3(5.25,-1.2858791391e-15,43.165);
                var v59 = new THREE.Vector3(-2.23534128072,-4.75034202545,43.165);
                var v60 = new THREE.Vector3(0.329650227529,5.23964032425,43.165);
                var v61 = new THREE.Vector3(5.08506159593,1.30562190762,43.165);
                var v62 = new THREE.Vector3(-5.2086021819,-0.657999476213,43.165);
                var v63 = new THREE.Vector3(-4.88132655091,-1.93265390159,43.165);
                var v64 = new THREE.Vector3(-0.983751901575,-5.15700806633,43.165);
                var v65 = new THREE.Vector3(1.62233922047,4.99304671055,43.165);
                var v66 = new THREE.Vector3(4.60061007023,2.52920678903,43.165);
                var v67 = new THREE.Vector3(2.81309067364,4.43272160889,43.165);
                var v68 = new THREE.Vector3(0.329650227529,-5.23964032425,43.165);
                var v69 = new THREE.Vector3(1.62233922047,-4.99304671055,43.165);
                var v70 = new THREE.Vector3(3.82708529396,3.59387230613,43.165);
                var v71 = new THREE.Vector3(-5.2086021819,0.657999476213,43.165);
                var v72 = new THREE.Vector3(-4.88132655091,1.93265390159,43.165);
                var v73 = new THREE.Vector3(2.81309067364,-4.43272160889,43.165);
                var v74 = new THREE.Vector3(-4.24733922047,3.08587257454,43.165);
                var v75 = new THREE.Vector3(1.62233922047,-4.99304671055,0.0);
                var v76 = new THREE.Vector3(2.81309067364,-4.43272160889,0.0);
                var v77 = new THREE.Vector3(3.82708529396,-3.59387230613,0.0);
                var v78 = new THREE.Vector3(5.25,-1.2858791391e-15,0.0);
                var v79 = new THREE.Vector3(5.08506159593,1.30562190762,0.0);
                var v80 = new THREE.Vector3(4.60061007023,-2.52920678903,0.0);
                var v81 = new THREE.Vector3(5.08506159593,-1.30562190762,0.0);
                var v82 = new THREE.Vector3(4.60061007023,2.52920678903,0.0);
                var v83 = new THREE.Vector3(3.82708529396,3.59387230613,0.0);
                var v84 = new THREE.Vector3(2.81309067364,4.43272160889,0.0);
                var v85 = new THREE.Vector3(1.62233922047,4.99304671055,0.0);
                var v86 = new THREE.Vector3(0.329650227529,5.23964032425,0.0);
                var v87 = new THREE.Vector3(-0.983751901575,5.15700806633,0.0);
                var v88 = new THREE.Vector3(-2.23534128072,4.75034202545,0.0);
                var v89 = new THREE.Vector3(-3.34647594618,4.04519452457,0.0);
                var v90 = new THREE.Vector3(-4.24733922047,3.08587257454,0.0);
                var v91 = new THREE.Vector3(-4.88132655091,1.93265390159,0.0);
                var v92 = new THREE.Vector3(-5.2086021819,0.657999476213,0.0);
                var v93 = new THREE.Vector3(-5.2086021819,-0.657999476213,0.0);
                var v94 = new THREE.Vector3(-4.88132655091,-1.93265390159,0.0);
                var v95 = new THREE.Vector3(-4.24733922047,-3.08587257454,0.0);
                var v96 = new THREE.Vector3(-3.34647594618,-4.04519452457,0.0);
                var v97 = new THREE.Vector3(-2.23534128072,-4.75034202545,0.0);
                var v98 = new THREE.Vector3(-0.983751901575,-5.15700806633,0.0);
                var v99 = new THREE.Vector3(0.329650227529,-5.23964032425,0.0);
                console.log(geom.vertices)
                geom.vertices.push(v0);
                geom.vertices.push(v1);
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.vertices.push(v4);
                geom.vertices.push(v5);
                geom.vertices.push(v6);
                geom.vertices.push(v7);
                geom.vertices.push(v8);
                geom.vertices.push(v9);
                geom.vertices.push(v10);
                geom.vertices.push(v11);
                geom.vertices.push(v12);
                geom.vertices.push(v13);
                geom.vertices.push(v14);
                geom.vertices.push(v15);
                geom.vertices.push(v16);
                geom.vertices.push(v17);
                geom.vertices.push(v18);
                geom.vertices.push(v19);
                geom.vertices.push(v20);
                geom.vertices.push(v21);
                geom.vertices.push(v22);
                geom.vertices.push(v23);
                geom.vertices.push(v24);
                geom.vertices.push(v25);
                geom.vertices.push(v26);
                geom.vertices.push(v27);
                geom.vertices.push(v28);
                geom.vertices.push(v29);
                geom.vertices.push(v30);
                geom.vertices.push(v31);
                geom.vertices.push(v32);
                geom.vertices.push(v33);
                geom.vertices.push(v34);
                geom.vertices.push(v35);
                geom.vertices.push(v36);
                geom.vertices.push(v37);
                geom.vertices.push(v38);
                geom.vertices.push(v39);
                geom.vertices.push(v40);
                geom.vertices.push(v41);
                geom.vertices.push(v42);
                geom.vertices.push(v43);
                geom.vertices.push(v44);
                geom.vertices.push(v45);
                geom.vertices.push(v46);
                geom.vertices.push(v47);
                geom.vertices.push(v48);
                geom.vertices.push(v49);
                geom.vertices.push(v50);
                geom.vertices.push(v51);
                geom.vertices.push(v52);
                geom.vertices.push(v53);
                geom.vertices.push(v54);
                geom.vertices.push(v55);
                geom.vertices.push(v56);
                geom.vertices.push(v57);
                geom.vertices.push(v58);
                geom.vertices.push(v59);
                geom.vertices.push(v60);
                geom.vertices.push(v61);
                geom.vertices.push(v62);
                geom.vertices.push(v63);
                geom.vertices.push(v64);
                geom.vertices.push(v65);
                geom.vertices.push(v66);
                geom.vertices.push(v67);
                geom.vertices.push(v68);
                geom.vertices.push(v69);
                geom.vertices.push(v70);
                geom.vertices.push(v71);
                geom.vertices.push(v72);
                geom.vertices.push(v73);
                geom.vertices.push(v74);
                geom.vertices.push(v75);
                geom.vertices.push(v76);
                geom.vertices.push(v77);
                geom.vertices.push(v78);
                geom.vertices.push(v79);
                geom.vertices.push(v80);
                geom.vertices.push(v81);
                geom.vertices.push(v82);
                geom.vertices.push(v83);
                geom.vertices.push(v84);
                geom.vertices.push(v85);
                geom.vertices.push(v86);
                geom.vertices.push(v87);
                geom.vertices.push(v88);
                geom.vertices.push(v89);
                geom.vertices.push(v90);
                geom.vertices.push(v91);
                geom.vertices.push(v92);
                geom.vertices.push(v93);
                geom.vertices.push(v94);
                geom.vertices.push(v95);
                geom.vertices.push(v96);
                geom.vertices.push(v97);
                geom.vertices.push(v98);
                geom.vertices.push(v99);
                geom.faces.push( new THREE.Face3(0, 1, 2) );
                geom.faces.push( new THREE.Face3(3, 4, 5) );
                geom.faces.push( new THREE.Face3(6, 5, 7) );
                geom.faces.push( new THREE.Face3(6, 7, 1) );
                geom.faces.push( new THREE.Face3(6, 1, 0) );
                geom.faces.push( new THREE.Face3(6, 3, 5) );
                geom.faces.push( new THREE.Face3(8, 9, 10) );
                geom.faces.push( new THREE.Face3(11, 12, 6) );
                geom.faces.push( new THREE.Face3(13, 8, 14) );
                geom.faces.push( new THREE.Face3(15, 0, 16) );
                geom.faces.push( new THREE.Face3(15, 16, 17) );
                geom.faces.push( new THREE.Face3(15, 17, 9) );
                geom.faces.push( new THREE.Face3(15, 9, 8) );
                geom.faces.push( new THREE.Face3(15, 8, 13) );
                geom.faces.push( new THREE.Face3(18, 19, 11) );
                geom.faces.push( new THREE.Face3(18, 11, 6) );
                geom.faces.push( new THREE.Face3(18, 6, 0) );
                geom.faces.push( new THREE.Face3(18, 0, 15) );
                geom.faces.push( new THREE.Face3(20, 15, 21) );
                geom.faces.push( new THREE.Face3(20, 18, 15) );
                geom.faces.push( new THREE.Face3(22, 20, 21) );
                geom.faces.push( new THREE.Face3(23, 24, 20) );
                geom.faces.push( new THREE.Face3(23, 20, 22) );
                geom.faces.push( new THREE.Face3(10, 25, 26) );
                geom.faces.push( new THREE.Face3(10, 9, 25) );
                geom.faces.push( new THREE.Face3(8, 26, 27) );
                geom.faces.push( new THREE.Face3(8, 10, 26) );
                geom.faces.push( new THREE.Face3(21, 28, 29) );
                geom.faces.push( new THREE.Face3(21, 29, 30) );
                geom.faces.push( new THREE.Face3(21, 15, 28) );
                geom.faces.push( new THREE.Face3(14, 27, 31) );
                geom.faces.push( new THREE.Face3(14, 8, 27) );
                geom.faces.push( new THREE.Face3(22, 30, 32) );
                geom.faces.push( new THREE.Face3(22, 21, 30) );
                geom.faces.push( new THREE.Face3(13, 31, 33) );
                geom.faces.push( new THREE.Face3(13, 33, 28) );
                geom.faces.push( new THREE.Face3(13, 14, 31) );
                geom.faces.push( new THREE.Face3(23, 32, 34) );
                geom.faces.push( new THREE.Face3(23, 22, 32) );
                geom.faces.push( new THREE.Face3(15, 13, 28) );
                geom.faces.push( new THREE.Face3(24, 34, 35) );
                geom.faces.push( new THREE.Face3(24, 23, 34) );
                geom.faces.push( new THREE.Face3(20, 35, 36) );
                geom.faces.push( new THREE.Face3(20, 24, 35) );
                geom.faces.push( new THREE.Face3(18, 20, 36) );
                geom.faces.push( new THREE.Face3(19, 36, 37) );
                geom.faces.push( new THREE.Face3(19, 37, 38) );
                geom.faces.push( new THREE.Face3(19, 18, 36) );
                geom.faces.push( new THREE.Face3(11, 38, 39) );
                geom.faces.push( new THREE.Face3(11, 19, 38) );
                geom.faces.push( new THREE.Face3(12, 39, 40) );
                geom.faces.push( new THREE.Face3(12, 11, 39) );
                geom.faces.push( new THREE.Face3(6, 12, 40) );
                geom.faces.push( new THREE.Face3(3, 40, 41) );
                geom.faces.push( new THREE.Face3(3, 41, 42) );
                geom.faces.push( new THREE.Face3(3, 6, 40) );
                geom.faces.push( new THREE.Face3(4, 3, 42) );
                geom.faces.push( new THREE.Face3(4, 42, 43) );
                geom.faces.push( new THREE.Face3(5, 4, 43) );
                geom.faces.push( new THREE.Face3(7, 5, 43) );
                geom.faces.push( new THREE.Face3(7, 43, 44) );
                geom.faces.push( new THREE.Face3(1, 44, 45) );
                geom.faces.push( new THREE.Face3(1, 7, 44) );
                geom.faces.push( new THREE.Face3(2, 45, 46) );
                geom.faces.push( new THREE.Face3(2, 46, 47) );
                geom.faces.push( new THREE.Face3(2, 1, 45) );
                geom.faces.push( new THREE.Face3(0, 2, 47) );
                geom.faces.push( new THREE.Face3(16, 47, 48) );
                geom.faces.push( new THREE.Face3(16, 0, 47) );
                geom.faces.push( new THREE.Face3(17, 48, 49) );
                geom.faces.push( new THREE.Face3(17, 49, 25) );
                geom.faces.push( new THREE.Face3(17, 16, 48) );
                geom.faces.push( new THREE.Face3(9, 17, 25) );
                geom.faces.push( new THREE.Face3(50, 31, 51) );
                geom.faces.push( new THREE.Face3(52, 53, 39) );
                geom.faces.push( new THREE.Face3(52, 39, 38) );
                geom.faces.push( new THREE.Face3(54, 31, 50) );
                geom.faces.push( new THREE.Face3(54, 33, 31) );
                geom.faces.push( new THREE.Face3(54, 28, 33) );
                geom.faces.push( new THREE.Face3(46, 55, 56) );
                geom.faces.push( new THREE.Face3(57, 37, 36) );
                geom.faces.push( new THREE.Face3(57, 38, 37) );
                geom.faces.push( new THREE.Face3(57, 52, 38) );
                geom.faces.push( new THREE.Face3(45, 55, 46) );
                geom.faces.push( new THREE.Face3(58, 28, 54) );
                geom.faces.push( new THREE.Face3(47, 56, 59) );
                geom.faces.push( new THREE.Face3(60, 57, 36) );
                geom.faces.push( new THREE.Face3(47, 46, 56) );
                geom.faces.push( new THREE.Face3(60, 36, 35) );
                geom.faces.push( new THREE.Face3(61, 29, 28) );
                geom.faces.push( new THREE.Face3(44, 62, 63) );
                geom.faces.push( new THREE.Face3(44, 63, 55) );
                geom.faces.push( new THREE.Face3(44, 55, 45) );
                geom.faces.push( new THREE.Face3(61, 28, 58) );
                geom.faces.push( new THREE.Face3(48, 59, 64) );
                geom.faces.push( new THREE.Face3(65, 35, 34) );
                geom.faces.push( new THREE.Face3(65, 60, 35) );
                geom.faces.push( new THREE.Face3(48, 47, 59) );
                geom.faces.push( new THREE.Face3(66, 29, 61) );
                geom.faces.push( new THREE.Face3(66, 30, 29) );
                geom.faces.push( new THREE.Face3(66, 32, 30) );
                geom.faces.push( new THREE.Face3(43, 62, 44) );
                geom.faces.push( new THREE.Face3(67, 65, 34) );
                geom.faces.push( new THREE.Face3(49, 64, 68) );
                geom.faces.push( new THREE.Face3(49, 68, 69) );
                geom.faces.push( new THREE.Face3(70, 34, 32) );
                geom.faces.push( new THREE.Face3(70, 67, 34) );
                geom.faces.push( new THREE.Face3(49, 48, 64) );
                geom.faces.push( new THREE.Face3(70, 32, 66) );
                geom.faces.push( new THREE.Face3(42, 71, 62) );
                geom.faces.push( new THREE.Face3(42, 62, 43) );
                geom.faces.push( new THREE.Face3(25, 49, 69) );
                geom.faces.push( new THREE.Face3(41, 72, 71) );
                geom.faces.push( new THREE.Face3(41, 71, 42) );
                geom.faces.push( new THREE.Face3(26, 69, 73) );
                geom.faces.push( new THREE.Face3(26, 25, 69) );
                geom.faces.push( new THREE.Face3(40, 74, 72) );
                geom.faces.push( new THREE.Face3(40, 72, 41) );
                geom.faces.push( new THREE.Face3(39, 74, 40) );
                geom.faces.push( new THREE.Face3(51, 27, 26) );
                geom.faces.push( new THREE.Face3(51, 26, 73) );
                geom.faces.push( new THREE.Face3(31, 27, 51) );
                geom.faces.push( new THREE.Face3(53, 74, 39) );
                geom.faces.push( new THREE.Face3(69, 75, 76) );
                geom.faces.push( new THREE.Face3(73, 69, 76) );
                geom.faces.push( new THREE.Face3(51, 73, 76) );
                geom.faces.push( new THREE.Face3(51, 76, 77) );
                geom.faces.push( new THREE.Face3(61, 78, 79) );
                geom.faces.push( new THREE.Face3(51, 77, 80) );
                geom.faces.push( new THREE.Face3(61, 58, 78) );
                geom.faces.push( new THREE.Face3(50, 51, 80) );
                geom.faces.push( new THREE.Face3(50, 80, 81) );
                geom.faces.push( new THREE.Face3(66, 79, 82) );
                geom.faces.push( new THREE.Face3(66, 61, 79) );
                geom.faces.push( new THREE.Face3(54, 50, 81) );
                geom.faces.push( new THREE.Face3(58, 81, 78) );
                geom.faces.push( new THREE.Face3(70, 82, 83) );
                geom.faces.push( new THREE.Face3(58, 54, 81) );
                geom.faces.push( new THREE.Face3(70, 66, 82) );
                geom.faces.push( new THREE.Face3(67, 83, 84) );
                geom.faces.push( new THREE.Face3(67, 70, 83) );
                geom.faces.push( new THREE.Face3(65, 84, 85) );
                geom.faces.push( new THREE.Face3(65, 85, 86) );
                geom.faces.push( new THREE.Face3(65, 67, 84) );
                geom.faces.push( new THREE.Face3(60, 65, 86) );
                geom.faces.push( new THREE.Face3(57, 86, 87) );
                geom.faces.push( new THREE.Face3(57, 87, 88) );
                geom.faces.push( new THREE.Face3(57, 60, 86) );
                geom.faces.push( new THREE.Face3(52, 88, 89) );
                geom.faces.push( new THREE.Face3(52, 57, 88) );
                geom.faces.push( new THREE.Face3(53, 52, 89) );
                geom.faces.push( new THREE.Face3(74, 89, 90) );
                geom.faces.push( new THREE.Face3(74, 90, 91) );
                geom.faces.push( new THREE.Face3(74, 53, 89) );
                geom.faces.push( new THREE.Face3(72, 74, 91) );
                geom.faces.push( new THREE.Face3(72, 91, 92) );
                geom.faces.push( new THREE.Face3(71, 72, 92) );
                geom.faces.push( new THREE.Face3(71, 92, 93) );
                geom.faces.push( new THREE.Face3(62, 71, 93) );
                geom.faces.push( new THREE.Face3(62, 93, 94) );
                geom.faces.push( new THREE.Face3(63, 62, 94) );
                geom.faces.push( new THREE.Face3(55, 63, 94) );
                geom.faces.push( new THREE.Face3(55, 94, 95) );
                geom.faces.push( new THREE.Face3(55, 95, 96) );
                geom.faces.push( new THREE.Face3(56, 55, 96) );
                geom.faces.push( new THREE.Face3(59, 56, 96) );
                geom.faces.push( new THREE.Face3(59, 96, 97) );
                geom.faces.push( new THREE.Face3(59, 97, 98) );
                geom.faces.push( new THREE.Face3(64, 59, 98) );
                geom.faces.push( new THREE.Face3(68, 64, 98) );
                geom.faces.push( new THREE.Face3(68, 98, 99) );
                geom.faces.push( new THREE.Face3(68, 99, 75) );
                geom.faces.push( new THREE.Face3(69, 68, 75) );
                geom.faces.push( new THREE.Face3(96, 95, 94) );
                geom.faces.push( new THREE.Face3(97, 96, 98) );
                geom.faces.push( new THREE.Face3(94, 93, 92) );
                geom.faces.push( new THREE.Face3(99, 98, 75) );
                geom.faces.push( new THREE.Face3(98, 96, 75) );
                geom.faces.push( new THREE.Face3(94, 92, 91) );
                geom.faces.push( new THREE.Face3(76, 75, 77) );
                geom.faces.push( new THREE.Face3(96, 94, 77) );
                geom.faces.push( new THREE.Face3(94, 91, 77) );
                geom.faces.push( new THREE.Face3(75, 96, 77) );
                geom.faces.push( new THREE.Face3(91, 90, 89) );
                geom.faces.push( new THREE.Face3(80, 77, 81) );
                geom.faces.push( new THREE.Face3(77, 91, 81) );
                geom.faces.push( new THREE.Face3(89, 88, 87) );
                geom.faces.push( new THREE.Face3(91, 89, 87) );
                geom.faces.push( new THREE.Face3(78, 81, 79) );
                geom.faces.push( new THREE.Face3(87, 86, 85) );
                geom.faces.push( new THREE.Face3(91, 87, 85) );
                geom.faces.push( new THREE.Face3(81, 91, 82) );
                geom.faces.push( new THREE.Face3(79, 81, 82) );
                geom.faces.push( new THREE.Face3(91, 85, 82) );
                geom.faces.push( new THREE.Face3(85, 84, 83) );
                geom.faces.push( new THREE.Face3(82, 85, 83) );
                var basematerial = new THREE.MeshBasicMaterial( { color: 0x888888 } );
                var mesh = new THREE.Mesh( geom, basematerial );
                scene.add( mesh );
                var linematerial = new THREE.LineBasicMaterial({color: 0x000000,});
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 44.5));
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 44.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 43.165));
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 44.5));
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 43.165));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 43.165));
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 43.165));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 43.165));
                wire.vertices.push(new THREE.Vector3(1.575, -3.85763741731e-16, 43.165));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 43.165));
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 0.0));
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 43.165));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 0.0));
                wire.vertices.push(new THREE.Vector3(5.25, -1.2858791391e-15, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
 // placeholder for the FreeCAD objects

	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( -10000, -10000, 10000 );
	scene.add( light );
	renderer.render( scene, camera );
	animate();
};

function animate(){
	requestAnimationFrame( animate );
	render();
};

function render(){
	controls.update();
	renderer.render( scene, camera );
};