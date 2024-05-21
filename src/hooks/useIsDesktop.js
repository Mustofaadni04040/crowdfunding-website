import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint = 1024) {
  const [iseDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);
  return iseDesktop;
}
