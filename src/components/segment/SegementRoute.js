"use client"
import React, { useEffect } from 'react';
import Router from 'next/router';

const SegementRoute = ({ children }) => {

  useEffect(() => {
    const handleRouteChange = () => {
      const currentUrl = window.location.href;
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const currentTitle = document.title;
      const referrer = document.referrer;

      global.analytics.page({
        path: currentPath,
        referrer: referrer,
        search: currentSearch,
        title: currentTitle,
        url: currentUrl,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Track the initial page load once when the component mounts
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentTitle = document.title;
    const referrer = document.referrer;

    global.analytics.page({
      path: currentPath,
      referrer: referrer,
      search: currentSearch,
      title: currentTitle,
      url: currentUrl,
    });
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default SegementRoute;
