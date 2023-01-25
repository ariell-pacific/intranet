export interface HdLinks {
  linkId: number;
  linkName: string;
  linkDescription: string;
  url: string;
  isActive: boolean;
}

export interface LinksState {
  status: "idle" | "loading" | "success" | "failed";
  error: string | null | undefined;
  data: HdLinks[];
}

export const CALL_LINK_API = 'call/link/api';
export const SET_LINK_STATUS_FAILED = 'set/links/failed';
export const LOAD_LINK_DATA = 'load/links/data';
export const SET_LINK_STATUS = 'set/links/status';


interface LoadLinkDataAction {
  type: typeof LOAD_LINK_DATA;
  payload: { data: LinksState['data'] };
}

interface SetLinkDataAction {
  type: typeof SET_LINK_STATUS;
}

export interface CallLinkApiAction {
  type: typeof CALL_LINK_API;
}

export interface CallLinkApiFailedAction {
  type: typeof SET_LINK_STATUS_FAILED;
  payload: string | null;
}

export type LinkAction =
  | LoadLinkDataAction
  | SetLinkDataAction | CallLinkApiAction | CallLinkApiFailedAction; 
