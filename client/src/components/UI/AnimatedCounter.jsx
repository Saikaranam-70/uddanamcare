import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ endValue, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
