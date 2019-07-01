async function send(url: string): Promise<any> {
  const apiProxyUrl = new URL('http://localhost:3010/items');

  apiProxyUrl.searchParams.set('url', url);

  const response = await fetch(apiProxyUrl.href, {
    method: 'GET',
    headers: {
      Accept: '*/*',
    },
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Fetch failed');
}

export default {
  send,
};
