export const getUser = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/user/${id}`, {
    method: "GET",
  });
  if (!res.ok) return Promise.resolve("");

  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: "GET",
    next: { tags: ["users"] },
  });
  if (!res.ok) return Promise.resolve([]);

  return res.json();
};
