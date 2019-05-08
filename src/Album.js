import React from "react";

const Album = ({ album }) => {
  return (
    <div>
      <ul>
        <li key={album.id}>{album.title}</li>
      </ul>
    </div>
  );
};

export default Album;
