import { useControls } from "leva";
import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import {TextureLoader} from "three";
import circleImg from "./textures/circle.png"

function Particles() {
  const {size, number, color} = useControls('particles', {
    size: 0.7,
    number: 5000,
    color: '#304FFF'
  })
  const circleTexture = useLoader(TextureLoader, circleImg);

  const positions = useMemo(() => {
    const array = new Float32Array(number * 3);
    for (let i = 0; i < number; i++) {
      array[i] = (Math.random() - 0.5) * 60;
    }
    return array;
  }, [number]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={size}
        sizeAttenuation
        color={color}
        alphaMap={circleTexture}
        transparent
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  )
}

export default Particles;
