import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar2, DataWorks } from '../components';

const Data = () => {
  const [iFrameLoaded, setIFrameLoaded] = React.useState(false);
  const divBoxRef = React.useRef(null);
  const resizeIframe = (iframe) => {
    // .. resize iFrame container divBoxRef as needed.
    // set the height of the iframe as
    // the height of the iframe content
    // iframe.width = iframe.contentWindow.document.body.scrollWidth;
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
  };
  const iframeStyle = { width: '100%' };
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <div className="relative z-1000 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar2 />
        </div>
      </div>
      <div
        ref={divBoxRef}
        className=" relative text-gray-600 top-[75px]"
      >
        {!iFrameLoaded && (
          <span className="inline-block">loading notebook ...</span>
        )}
        <iframe
          scrolling="no"
          style={iframeStyle}
          onLoad={(e) => {
            setIFrameLoaded(true);
            resizeIframe(e.target);
          }}
          title="static_html"
          src={data}
        ></iframe>
      </div>
    </div>
  );
};

export default Data;
