import React from 'react';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/constants/routes";
import './Cone.css'


function Cone({ coneParams }) {
  const navigate = useNavigate()
  const  { height, radius, numberOfSegments } = coneParams

  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry(height, radius, numberOfSegments, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x1589ab});
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xffffff}));
    scene.add(line);

    camera.position.z = 30;

    function animate() {
      requestAnimationFrame(animate);

      cone.rotation.x += 0.002;
      cone.rotation.y += 0.002;
      cone.rotation.z += 0.002;
      line.rotation.x += 0.002;
      line.rotation.y += 0.002;
      line.rotation.z += 0.002;
      renderer.render(scene, camera);
    }

    if (WebGL.isWebGLAvailable()) {
      if (height && radius && numberOfSegments) {
        animate();
      } else {
        navigate(MAIN_ROUTE, {replace: true})
      }
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById('container').appendChild(warning);
    }

    return () => {
      document.body.removeChild(renderer.domElement);
    }
  })

  const handleButtonClick = () => {
    navigate(MAIN_ROUTE, {replace: true})
  }

  return (
    <div className='cone'>
      <button onClick={handleButtonClick} className='cone__button'>
        Изменить параметры
      </button>
    </div>
  );
}

export default Cone;
