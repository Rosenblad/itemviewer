import { AppState } from '../types';

export function saveToLocalStorage(key: string, data: any) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.log(err);
  }
}

export function getFromLocalStorage(key: string) {
  try {
    const serializedData = localStorage.getItem(key);

    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
