const BASE_URL = "http://127.0.0.1:8000";

export async function fetchSnakes() {
  const res = await fetch(`api/snakes/`);
  if (!res.ok) {
    throw new Error("Failed to fetch snakes");
  }
  return res.json();
}

export async function fetchSnakeById(id) {
  const res = await fetch(`api/snakes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch snake");
  }
  return res.json();
}

