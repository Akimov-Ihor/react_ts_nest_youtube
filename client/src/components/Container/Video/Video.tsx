import React from 'react';

export const Video:React.FC = () => {
  return (
    <div className="video">
      <iframe
        allowFullScreen
        width="60%"
        height="75%"
        title="test"
        src="https://www.youtube.com/embed/Aqk7x_w1H98"
      />
    </div>
  );
};
