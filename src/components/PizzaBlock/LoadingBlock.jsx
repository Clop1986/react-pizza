import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="265" rx="3" ry="3" width="280" height="24" />
      <rect x="0" y="308" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="415" rx="3" ry="3" width="90" height="27" />
      <rect x="39" y="416" rx="0" ry="0" width="0" height="1" />
      <rect x="125" y="405" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
