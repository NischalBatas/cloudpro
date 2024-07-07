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

   </>
  )
}

export default SegementKey