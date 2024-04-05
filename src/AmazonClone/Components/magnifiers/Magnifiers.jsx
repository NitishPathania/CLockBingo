import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const Magnifiers = () => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Small Image',
            src: './Images/cimageone.jpg', // Path relative to the public folder
            width: 400, // Width of the small image
            height: 300 // Height of the small image
          },
          largeImage: {
            src: './Images/cimageone.jpg', // Path relative to the public folder
            width: 1900, // Width of the large image
            height: 1300 // Height of the large image
          },
          isHintEnabled: true // Whether to show hint for the magnified area
        }}
      />
    </div>
  );
};

export default Magnifiers;