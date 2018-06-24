import { Timer } from './timer'

export class Group {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public timers: Timer[]
  ) {}
}
