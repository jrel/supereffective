import { isDevelopment } from '@app/src/config/env'

const legacyConfig = {
  limits: {
    saveBtnDelay: 2500,
    maxDexes: 4,
    maxPokemonPerBox: 30,
    maxBoxTitleSize: 15,
    maxDexTitleSize: 32,
  },
}

if (isDevelopment()) {
  legacyConfig.limits.maxDexes = 20
}

export default legacyConfig
