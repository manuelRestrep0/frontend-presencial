interface IconProps {
  className?: string
  width?: number
  height?: number
}

interface SeatProps {
  seat: string
}

export const SeatIcon: React.FC<IconProps> = ({ className = "", width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-armchair-2 ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
      <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
      <path d="M8 12h8" />
      <path d="M7 19v2" />
      <path d="M17 19v2" />
    </svg>
  )
}

export const SeatIconOff: React.FC<IconProps> = ({ className = "", width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-armchair-2-off ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 10v-4a3 3 0 0 1 .128 -.869m2.038 -2.013c.264 -.078 .544 -.118 .834 -.118h8a3 3 0 0 1 3 3v4" />
      <path d="M16.124 12.145a3 3 0 1 1 3.756 3.724m-.88 3.131h-14v-3a3 3 0 1 1 3 -3v2" />
      <path d="M8 12h4" />
      <path d="M7 19v2" />
      <path d="M17 19v2" />
      <path d="M3 3l18 18" />
    </svg>
  )
}

const Seat = ({ seat }: SeatProps) => {
  const color = seat.length > 0 ? "bg-green-500/30 text-green-500" : "bg-gray-500/30 text-gray-500"
  return (
    <div className={`flex w-fit items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold ${color}`}>
      {seat.length > 0 ? <SeatIcon /> : <SeatIconOff />}
      <p>{seat.length > 0 ? seat : "N/A"}</p>
    </div>
  )
}

export default Seat
