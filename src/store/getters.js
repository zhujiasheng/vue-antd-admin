export default {
  sidebar: state => state.layout.sidebar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  userId: state => state.user.userId,
  userName: state => state.user.name,
  routes: state => state.auth.routes
}
