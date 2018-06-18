import { Timer } from "./timer"

export interface Group {
  id: number
  name: string
  icon: string
  timers: Timer[]
}
