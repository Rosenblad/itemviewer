import { AppState } from '../types';

export function getHidden(state: AppState): [] {
  return state.itemViewer.hidden;
}