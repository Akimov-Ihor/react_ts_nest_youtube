import React from 'react';
import { useParams } from 'react-router-dom';

export const Video:React.FC = () => {
  const params = useParams();
  // try {
  //   console.log();
  // } catch (e) { console.log(e); }
  const path = `https://www.youtube.com/embed/${Object.keys(params)[0]}`;

  return (
    <div className="video">
      <iframe
        allowFullScreen
        width="60%"
        height="75%"
        title="test"
        src={`${path}`}
      />
    </div>
  );
};
