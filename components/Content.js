import React, { Suspense, useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import * as THREE from "three";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

extend({ GlitchPass });

const Gun = ({ gun }) => {
  const createVideo = (src) => {
    const vid = document.getElementById("video");
    vid.src = src;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();

    return vid;
  };

  const [video, setVideo] = useState(createVideo(gun.video));

  useEffect(() => {
    const vid = createVideo(gun.video);
    setVideo(vid);
  }, [gun.video]);

  return (
    <group rotation={[0, Math.PI * 1, 0]}>
      <mesh rotation={[0, Math.PI * 1, Math.PI * 0.1]} position={[0, 0, -3.8]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

const Content = ({ gun }) => {
  return (
    <>
      <Canvas>
        <Effects>
          <glitchPass goWild={false} randX={1} attachArray="passes" />
        </Effects>

        <Suspense fallback={null}>
          <Gun gun={gun} />
        </Suspense>
      </Canvas>
      <video id="video" style={{ display: "none" }} />
    </>
  );
};

export default Content;
