import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type AccountAtom = {
  angiDugaar: string;
  salbarDugaar: string;
  salbarDugaar_id: number | null;
  center: [number, number];
  person_role: 'euser' | 'auser' | 'zuser';
  zoom: number;
  h1angiDugaar: string | null;
  h2angiDugaar: string | null;
  minZoom: number;
  tsol: string;
  ner: string;
};

export const accountAtom = atomWithStorage<AccountAtom | null>('account', null);
export const accountDrawerWidthAtom = atom(260);
export const accountDrawerOpenAtom = atom(false);
