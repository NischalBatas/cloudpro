"use client"
import React from 'react'
import { useEffect } from 'react';

import Router from 'next/router';
import { usePathname } from 'next/navigation';

const SegementRoute = ({children}) => {
  const pathname=usePathname()
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url) {
        global.analytics.page('Loaded Another Website Page', {
          page: url,
        });
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
    
  return (

    <div>
      
        {children}
    </div>
  )
}

export default SegementRoute