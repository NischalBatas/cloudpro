import Script from 'next/script'
import React from 'react'
import * as snippet from '@segment/snippet'

const SegementKey = () => {
  function renderSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
   // note: the page option only covers SSR tracking.
      page: true,
    }
  
    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts)
    }
  
    return snippet.min(opts)
  }
  return (
   <>
   <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
  {/* <Script

      dangerouslySetInnerHTML={{
        __html: `
          !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="YOUR_WRITE_KEY";;analytics.SNIPPET_VERSION="5.2.1";
analytics.load("YOUR_WRITE_KEY");
analytics.page();
}}();
        `,
      }}
    /> */}
   </>
  )
}

export default SegementKey