import { useEffect } from 'react';

const useCursor = (isHovering) => {
  useEffect(() => {
    document.body.style.cursor = isHovering ? 'pointer' : 'auto';
  }, [isHovering]);
};

export default useCursor;