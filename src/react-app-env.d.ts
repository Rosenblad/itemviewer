/// <reference types="react-scripts" />
import { Action, Dispatch } from 'redux';

declare module 'react-redux' {
  export function useSelector<TState, TSelected>(
    selector: (state: TState) => TSelected,
    deps?: readonly any[],
  ): TSelected;
  export function useDispatch<A extends Action = any>(): Dispatch<A>;
}
