import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollPositions = () => {
  const [positions, setPositions] = useState(new Map());
  const location = useLocation();

  useEffect(() => {
    const listener = (ev) => {
      console.log('position: ', ev.target.scrollTop);
      positions.set(location.pathname, { 
        left: ev.target.scrollLeft, 
        top: ev.target.scrollTop
      });
      setPositions(new Map(positions));
    }

    window.addEventListener('scroll', listener, true);

    return () => {
      window.removeEventListener('scroll', listener, true);
    }
  }, [location]);

  return positions;
}