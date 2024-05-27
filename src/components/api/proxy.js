// pages/api/proxy.js

import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const proxy = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '', // Remove /api/proxy from the request path
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add custom headers if needed
  },
});

export default function handler(req, res) {
  return proxy(req, res, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
}
