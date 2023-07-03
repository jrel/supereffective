export const Routes = {
  API: {
    SignIn: '/api/auth/signin/email',
    SignInCallback: '/api/auth/callback/email',
    LivingDexes: '/api/livingdexes',
    LegacyLivingDexes: '/api/livingdexes/legacy',
    PatreonUnlink: '/api/patreon/unlink',
    PatreonCallback: '/api/callbacks/patreon',
  },
  Home: '/',
  Login: '/login',
  AuthError: '/auth/error',
  VerifyEmail: '/auth/verify-email',
  Profile: '/profile',
  LivingDex: '/apps/livingdex',
  LegacyLivingDexImport: '/apps/livingdex/import',
  Pokedex: '/apps/pokedex',
  Donate: '/donate',
}
