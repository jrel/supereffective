// autogenerated with @pkg/database/lib/codegen/codegen.cjs
export const _itemIds = ['master-ball'] as const

export type ItemId = (typeof _itemIds)[number]

export function getItemIds(): readonly ItemId[] {
  return _itemIds
}
