// Cloudflare Worker for RadioID.net API proxy
// Deploy this at: https://radioid.bugra.workers.dev

export default {
  async fetch(request) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // Build the target API URL
    const targetUrl = new URL('https://radioid.net/api/dmr/user/');
    searchParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });

    // Fetch from RadioID.net API
    const response = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'DMRContactListEditor/1.0',
      },
    });

    const data = await response.json();

    // Return response with CORS headers
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
  },
};
