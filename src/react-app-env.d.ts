/// <reference types="react-scripts" />
import { Action, Dispatch } from 'redux';

declare module 'react-redux' {
  export function useSelector<TState, TSelected>(
    selector: (state: TState) => TSelected,
    // eslint-disable-next-line @typescript-eslint/array-type
    deps?: ReadonlyArray<any>,
  ): TSelected;
  export function useDispatch<A extends Action = any>(): Dispatch<A>;
}
