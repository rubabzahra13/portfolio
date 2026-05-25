'use client';

import { useEffect, useRef } from 'react';

const SimpleTechCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let animationId: number;
    let rotation = { x: 0, y: 0 };

    const animate = () => {
      rotation.x += 0.3;
      rotation.y += 0.5;
      
      if (cube) {
        cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const faces = [
    { text: 'REACT', transform: 'translateZ(100px)', bgColor: '#58a6ff', borderColor: '#79c0ff' },
    { text: 'NEXT.JS', transform: 'rotateY(180deg) translateZ(100px)', bgColor: '#3fb950', borderColor: '#56d364' },
    { text: 'NODE', transform: 'rotateY(90deg) translateZ(100px)', bgColor: '#79c0ff', borderColor: '#a5d6ff' },
    { text: 'PYTHON', transform: 'rotateY(-90deg) translateZ(100px)', bgColor: '#58a6ff', borderColor: '#79c0ff' },
    { text: 'TS', transform: 'rotateX(90deg) translateZ(100px)', bgColor: '#3fb950', borderColor: '#56d364' },
    { text: 'MONGO', transform: 'rotateX(-90deg) translateZ(100px)', bgColor: '#79c0ff', borderColor: '#a5d6ff' },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center perspective-1000">
      <div 
        ref={cubeRef}
        className="relative aspect-square h-[min(11rem,38vw)] w-[min(11rem,38vw)] max-h-48 max-w-48 transform-style-3d transition-transform duration-100 sm:h-[min(12rem,32vw)] sm:w-[min(12rem,32vw)]"
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute flex h-full w-full items-center justify-center rounded-lg text-xs font-bold text-white backdrop-blur-sm sm:text-base md:text-lg"
            style={{ 
              transform: face.transform,
              backgroundColor: `${face.bgColor}CC`,  // 80% opacity
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: face.borderColor,
              boxShadow: `0 0 20px ${face.bgColor}40, inset 0 0 20px ${face.bgColor}20`
            }}
          >
            {face.text}
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default SimpleTechCube;