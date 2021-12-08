const localAuth = {
  isAuthenticated: false,
  checkToken(callback: VoidFunction) {
    localAuth.isAuthenticated = true;
    callback();
  },
  signIn(callback: VoidFunction) {
    localAuth.isAuthenticated = true;
    callback(); // fake async
  },
  signOut(callback: VoidFunction) {
    localAuth.isAuthenticated = false;
    callback();
  },
};

export { localAuth };
