import { useState } from 'react';
import type { CSSProperties } from 'react';

interface ImageWithFallbackProps {
  src: string | undefined;
  alt: string;
  fallbackSrc: string;
  className?: string;
  showCount?: number;
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  badge: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
  },
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  showCount,
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [error, setError] = useState<boolean>(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // Combiner les styles de base avec les classes personnalisées
  const containerStyle = {
    ...styles.container,
    ...(className ? { className } : {}),
  };

  return (
    <div style={containerStyle}>
      <img
        src={error || !imgSrc ? fallbackSrc : imgSrc}
        alt={alt}
        style={styles.image}
        onError={handleError}
      />
      {showCount !== undefined && (
        <div style={styles.badge}>
          {showCount} {showCount > 1 ? 'images' : 'image'}
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
