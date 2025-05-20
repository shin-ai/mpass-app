// Mengambil variabel dari environment
const API_BASE = import.meta.env.VITE_API_BASE;
const AUTH_TOKEN = import.meta.env.VITE_API_AUTH_TOKEN;

export const fetchPromos = async () => {
  const response = await fetch(`${API_BASE}/promos`, {
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });
  const data = await response.json();
  return data.data;
};
