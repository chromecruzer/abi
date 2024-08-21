// // app/middleware.js

// import { NextResponse } from 'next/server';

// const excludeIPs = new Set([
//   // Your IPs to exclude
//   'http://189.240.60.164:9090',
//   'http://50.175.212.76:80',
//   'http://50.144.166.226:80',
//   'http://50.231.104.58:80',
//   'http://50.172.75.123:80',
//   'http://50.223.246.226:80',
//   'http://85.8.68.2:80',
//   'http://50.174.145.10:80',
//   'http://50.223.239.161:80',
//   'http://50.175.212.77:80',
//   'http://50.172.75.127:80',
//   'http://50.145.24.176:80',
//   'http://50.232.104.86:80',
//   'http://50.218.57.70:80',
//   'http://167.102.133.105:80',
//   'http://50.231.172.74:80',
//   'http://172.245.12.55:34567',
//   'http://50.172.75.124:80',
// ]);
// // Define patterns to exclude static files and chunks
// const excludePatterns = [
//     '/_next/static/',  // Static files
//     '/_next/chunks/',  // Next.js chunks
//     '/favicon.ico',    // Favicon
//   ];
//  // Store the last sent timestamp
// let lastSentTimestamp = 0;
// const rateLimitMs = 60000; // 1 minute rate limit

// async function notifyApi(logDetails) {
//   const currentTimestamp = Date.now();
//   if (currentTimestamp - lastSentTimestamp < rateLimitMs) {
//     console.log('Rate limit exceeded. Skipping notification.');
//     return;
//   }
  
//   lastSentTimestamp = currentTimestamp;

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
//   const response = await fetch(`${apiUrl}/api/sendmail`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ logDetails }),
//   });

//   if (!response.ok) {
//     console.error('Failed to send notification email via API route');
//   }
// }

// export async function middleware(request) {
//   const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
//   const url = new URL(request.url);

//   // Exclude requests matching the static patterns
//   if (excludePatterns.some(pattern => url.pathname.startsWith(pattern))) {
//     return NextResponse.next();
//   }

//   // Exclude IPs from logging
//   if (!excludeIPs.has(ip)) {
//     const logDetails = `API request received | Method: ${request.method} | IP: ${ip} | URL: ${url.href}`;
    
//     // Notify via API route
//     await notifyApi(logDetails);
//   }

//   return NextResponse.next();
// }

import { NextResponse } from 'next/server';

const excludeIPs = new Set([
  // Your IPs to exclude
  'http://189.240.60.164:9090',
  'http://50.175.212.76:80',
  'http://50.144.166.226:80',
  'http://50.231.104.58:80',
  'http://50.172.75.123:80',
  'http://50.223.246.226:80',
  'http://85.8.68.2:80',
  'http://50.174.145.10:80',
  'http://50.223.239.161:80',
  'http://50.175.212.77:80',
  'http://50.172.75.127:80',
  'http://50.145.24.176:80',
  'http://50.232.104.86:80',
  'http://50.218.57.70:80',
  'http://167.102.133.105:80',
  'http://50.231.172.74:80',
  'http://172.245.12.55:34567',
  'http://50.172.75.124:80',
]);

// Store the last sent timestamp
let lastSentTimestamp = 0;
const rateLimitMs = 360000; // 6 minute rate limit

async function notifyApi(logDetails) {
  const currentTimestamp = Date.now();
  if (currentTimestamp - lastSentTimestamp < rateLimitMs) {
    console.log('Rate limit exceeded. Skipping notification.');
    return;
  }
  
  lastSentTimestamp = currentTimestamp;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${apiUrl}/api/sendmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ logDetails }),
  });

  if (!response.ok) {
    console.error('Failed to send notification email via API route');
  }
}

export async function middleware(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const url = new URL(request.url);

  // Only trigger on requests to the root path
  if (url.pathname === '/') {
    // Exclude IPs from logging
    if (!excludeIPs.has(ip)) {
     // const logDetails = `API request received | Method: ${request.method} | IP: ${ip} | URL: ${url.href}`;
     const logDetails = `FROM INDIA | Method: ${request.method} <| IP: ${ip} |>`;
      
      // Notify via API route
      await notifyApi(logDetails);
    }
  }

  return NextResponse.next();
}
