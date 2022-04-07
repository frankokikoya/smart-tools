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
      type: role.type,
      privileges: role.privileges
    }
  }
});
