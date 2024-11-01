import { getDateRange } from '@/app/utils/getDataRange';

import { atom } from 'jotai';


const [start, end] = getDateRange(); 

export const dateRangeStartDateAtom = atom(start);
export const dateRangeEndDateAtom = atom(end);
