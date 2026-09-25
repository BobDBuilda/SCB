export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {
      const gwReq = new Request(request, {
        headers: {
          ...Object.fromEntries(request.headers),
          'X-Internal-Secret': env.INTERNAL_SECRET,
        },
      });
      return env.API_GATEWAY.fetch(gwReq);
    }

    return env.ASSETS.fetch(request);
  },
};
