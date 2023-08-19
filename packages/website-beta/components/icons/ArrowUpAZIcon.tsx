import { BaseIcon, IconProps } from './BaseIcon'

export default function ArrowUpAZIcon(props: IconProps) {
  // https://lucide.dev/icons/arrow-up-a-z
  return (
    <BaseIcon {...props}>
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M20 8h-5" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M15 14h5l-5 6h5" />
    </BaseIcon>
  )
}
