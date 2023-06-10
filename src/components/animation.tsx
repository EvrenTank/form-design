import { useRef } from 'react';
import Lottie from 'react-lottie-segments';
import animationData from '../animation/hamburger_menu_recrigoblue.json';

const HamburgerAnimation = ({ mySegments }: any) => {
  const lottieRef = useRef<null | HTMLDivElement>(null);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const segments = mySegments;

  const sequence = {
    segments: segments,
    forceFlag: true
  };

  return (
    <Lottie
      ref={lottieRef}
      options={defaultOptions}
      playSegments={sequence}
      speed={0.75}
    >
      {' '}
    </Lottie>
  );
};
export default HamburgerAnimation;
