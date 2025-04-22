export default async function getRequestFetchNative(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
}
export async function postRequestNativeFetch(data) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json()
}
