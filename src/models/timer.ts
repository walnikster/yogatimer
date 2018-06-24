export class Timer {
  constructor(
    public id: number,
    public isRunning: boolean,
    public isRecording: boolean,
    public name: string,
    public duration: number
  ) {}
}
