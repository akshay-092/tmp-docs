import React, { useState, useEffect } from 'react';

const FigmaViewerWithPlaceholder = ({ figmaUrl , placeholder }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: '#f3f3f3',
              animation: 'pulse 1.5s infinite',
            }}
          ></div>
        )}
  
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`}
          onLoad={() => setIsLoading(false)}
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            visibility: isLoading ? 'hidden' : 'visible',
          }}
          allowFullScreen
        ></iframe>
  
        <style>
          {`
          @keyframes pulse {
            0% { background-color: #f3f3f3; }
            50% { background-color: #ececec; }
            100% { background-color: #f3f3f3; }
          }
          `}
        </style>
      </div>
    );
  };

export default FigmaViewerWithPlaceholder;