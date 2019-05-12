import { AppState } from '../types';

export function getHidden(state: AppState): string[] | [] {
  return state.itemViewer.hidden !== undefined ? state.itemViewer.hidden : [];
}
