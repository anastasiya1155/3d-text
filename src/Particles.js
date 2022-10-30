import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {TextureLoader} from "three";
import circleImg from "./textures/circle.png"

function Particles() {
  const ref = useRef();
  const {size, number, color, multiColored} = useControls('particles', {
    size: 0.7,
    number: 5000,
    color: '#304FFF',
    multiColored: true,
  })
  const circleTexture = useLoader(TextureLoader, circleImg);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(number * 3);
    const colors = new Float32Array(number * 3);
    for (let i = 0; i < number; i++) {
      positions[i] = (Math.random() - 0.5) * 60;
      colors[i] = Math.random();
    }
    return {positions, colors};
  }, [number]);

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime()
    if (ref.current) {
      ref.current.position.z = (elapsedTime * 0.3) % 20
    }
  })

  const props = multiColored ? {vertexColors: true} : {color}
  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={size}
        sizeAttenuation
        {...props}
        alphaMap={circleTexture}
        transparent
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  )
}

export default Particles;
