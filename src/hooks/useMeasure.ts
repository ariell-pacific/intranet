import { useEffect, useState } from 'react';

export default function useMeasure(elementId: string) {
  const [measure, setMeasure] = useState<Omit<DOMRect, 'toJSON'>>({
    bottom: 0,
    right: 0,
    left: 0,
    height: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0
  });

  useEffect(() => {
    const resizeCallback = () => {
      const element = document.getElementById(elementId);

      if (!element) return;
      const bounds = element.getBoundingClientRect();
      setMeasure(bounds);
    };

    resizeCallback();

    window.addEventListener('resize', resizeCallback);

    return () => window.removeEventListener('resize', resizeCallback);
  }, [elementId]);

  return measure;
}
