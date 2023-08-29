
export const httpRequest = async (url, method='GET', body=null, headers = {
   'Content-Type': 'application/json'
}) => {
   const res = await fetch(url, {method, body, headers});
   if (res.ok) {
      const data = await res.json();

      return data;
   } else {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }
};