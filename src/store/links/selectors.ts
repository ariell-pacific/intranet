import { AppState } from '../index';

export const getLinksState = (state: AppState) => state.links;

export const getLinks = (state: AppState) => state.links.data;

export const getState = (state: AppState) => state.links.status;