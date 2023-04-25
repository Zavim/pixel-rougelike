import Rapier from "@dimforge/rapier3d-compat";
import {
  Environment,
  KeyboardControls,
  PointerLockControls,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CapsuleCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import { RefObject, useEffect, useMemo, useRef } from "react";
import { Group, MathUtils, PerspectiveCamera, Vector3 } from "three";
import { clamp } from "three/src/math/MathUtils";

const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();
const rotation = new Vector3();
const characterLinvel = new Vector3();
const characterTranslation = new Vector3();

type KinematicCharacterControllerProps = {
  characterRigidBody: RefObject<RapierRigidBody>;
  characterColliderRef: RefObject<Rapier.Collider>;
  shieldHandRef: RefObject<Group | null>;
  swordHandRef: RefObject<Group | null>;
};

const Player = () => {
  return (
    <mesh
      rotation={[-DEG45, 0, 0]}
      position={[0, 0, HOVER]}
      scale={[0.25, 0.25 * Math.SQRT2, 1]}
      receiveShadow={true}
    >
      <planeGeometry />
      <meshPhongMaterial color={"#cc4422"} />
    </mesh>
  );
};
