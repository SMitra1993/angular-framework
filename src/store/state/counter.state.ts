export interface CounterState {
  counter: number;
  channelName: string
}
export const initialCounterState: CounterState = {
  counter: 0,
  channelName: 'Tech Stack'
};
