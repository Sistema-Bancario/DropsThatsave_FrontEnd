
import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);

    // Cleanup method
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

export default useOnScreen;
