
import React, { useEffect, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ScrollContext } from '../context/scroll-context';

const Page = ({children, ...rest}) => {

  const main = useRef();
  const positions = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (main.current) {
      const position = positions.get(location.pathname);
      if (position && position.top) {
        main.current.scrollTop = position.top;
      }
    }
  }, [])

  return (
    <main {...rest} ref={main}>
      {children}
    </main>
  )
}

export default Page
