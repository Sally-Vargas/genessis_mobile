const requestLogin =
  ({ User, login, userData }) =>
  async () => {
    User.setUsername(userData.username);
    await User.login(userData.password);
    const userLogin = await User.getLogin();
    if (!userLogin) return login(null);
    User.saveLogin();
    login(userLogin);
  };

export { requestLogin };
