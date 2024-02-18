export const getUser = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/user/${id}`, {
    method: "GET",
    cache: "no-store",
    next: { revalidate: 1 },
  });
  if (!res.ok) return Promise.resolve("");

  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: "GET",
    next: { tags: ["users"], revalidate: 1 },
    cache: "no-store",
  });
  if (!res.ok) return Promise.resolve([]);

  return res.json();
};
