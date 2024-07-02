"use client"
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Router from 'next/router';

const SegementRoute = ({children}) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
          if (url) {
            global.analytics.page('Loaded Another Website Page', {
              page: url,
            });
          }
        };
    
        // Get the current page URL on initial load
        global.analytics.page('Loaded Another Website Page', {
          page: router.asPath,
        });
    
        Router.events.on('routeChangeComplete', handleRouteChange);
    
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, [router.asPath]);
    
  return (

    <div>
        {children}
    </div>
  )
}

export default SegementRoute