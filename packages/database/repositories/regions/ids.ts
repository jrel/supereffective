// autogenerated with @pkg/database/lib/codegen/codegen.cjs
export const _regionIds = [
  'other',
  'kanto',
  'johto',
  'hoenn',
  'orre',
  'sinnoh',
  'unova',
  'kalos',
  'alola',
  'galar',
  'hisui',
  'paldea',
] as const

export type RegionId = (typeof _regionIds)[number]

export function getRegionIds(): readonly RegionId[] {
  return _regionIds
}
