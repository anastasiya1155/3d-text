import { useControls } from "leva";
import { useMemo } from "react";

function Particles() {
  const {particlesSize, particlesNumber} = useControls({ particlesSize: 0.2, particlesNumber: 5000 })

  const positions = useMemo(() => {
    const array = new Float32Array(particlesNumber * 3);
    for (let i = 0; i < particlesNumber; i++) {
      array[i] = (Math.random() - 0.5) * 100;
    }
    return array;
  }, [particlesNumber]);

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
        size={particlesSize}
        sizeAttenuation
        color="#5d75ff"
        transparent
        alphaTest={0.5}
        opacity={0.8}
      />
    </points>
  )
}

export default Particles;
