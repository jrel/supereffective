// autogenerated with @pkg/database/lib/codegen/codegen.cjs
export const _abilityIds = ['stench'] as const

export type AbilityId = (typeof _abilityIds)[number]

export function getAbilityIds(): readonly AbilityId[] {
  return _abilityIds
}
