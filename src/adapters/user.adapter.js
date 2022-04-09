export const createUserAdapter = (user) => ({
  name: user.data.name,
  gender: user.data.gender,
  status: user.data.status,
});

export const userSessionAdapter = ({ accessToken, user: { id, name, email, role }}) => ({
  accessToken,
  user: {
    id,
    name,
    email,
    role: {
      id: role.id,
      name: role.name,
      description: role.description,
      permissions: role.permissions
    }
  }
});
