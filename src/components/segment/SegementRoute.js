// "use client"
// import React from 'react'
// import { useEffect } from 'react';

// import Router from 'next/router';
// import { usePathname } from 'next/navigation';

// const SegementRoute = ({children}) => {
//   const pathname=usePathname()
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       if (url) {
//         global.analytics.page('Loaded Another Website Page', {
//           page: url,
//         });
//       }
//     };

//     Router.events.on('routeChangeComplete', handleRouteChange);

//     return () => {
//       Router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, []);
    
//   return (

//     <div>
      
//         {children}
//     </div>
//   )
// }

// export default SegementRoute

"use client"
import React, { useEffect } from 'react';
import Router from 'next/router';

const SegementRoute = ({ children }) => {


  useEffect(() => {
    const handleRouteChange = (url) => {
      const currentUrl = window.location.href;
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const currentTitle = document.title;
      const referrer = document.referrer;

      if (url) {
        global.analytics.page({
          path: currentPath,
          referrer: referrer,
          search: currentSearch,
          title: currentTitle,
          url: currentUrl,
        });
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    // Track the initial page load
    handleRouteChange(window.location.href);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);

  return (
    <div>
      {children}
    </div>
  );
};

export default SegementRoute;
