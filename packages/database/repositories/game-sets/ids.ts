// autogenerated with @pkg/database/lib/codegen/codegen.cjs
export const _gameSetIds = [
  'rb',
  'y',
  'gs',
  'c',
  'rs',
  'frlg',
  'e',
  'dp',
  'pt',
  'hgss',
  'bw',
  'b2w2',
  'xy',
  'oras',
  'go',
  'sm',
  'usum',
  'lgpe',
  'swsh',
  'home',
  'bdsp',
  'la',
  'sv',
] as const

export type GameSetId = (typeof _gameSetIds)[number]

export function getGameSetIds(): readonly GameSetId[] {
  return _gameSetIds
}
