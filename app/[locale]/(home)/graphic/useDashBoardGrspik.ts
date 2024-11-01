import { axiosInstance } from '@/app/lib/axios/fetcher';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { dateRangeEndDateAtom, dateRangeStartDateAtom } from '../atom';
import dayjs from 'dayjs';

interface HuchData {
  Автомашин: { option_value: string; count: number }[];
  Мотоцикл: { option_value: string; count: number }[];
  'Цасны чарга': { option_value: string; count: number }[];
  'Моторт завь': { option_value: string; count: number }[];
  Зэвсэг: { option_value: string; count: number }[];
  ТРС: { option_value: string; count: number }[];
  РЛС: { option_value: string; count: number }[];
  'Радио станц': { option_value: string; count: number }[];
}

interface Engineer {
  name: string;
  count: number;
}

interface AmraltCounts {
  count: number;
  type: string;
}

interface Bureldehuun {
  person_count: number;
  amralt_counts: {
    'аж ахуйн ажил': AmraltCounts;
    амралт: AmraltCounts;
    гадна: AmraltCounts;
    манаа: AmraltCounts;
  };
}

export type DashboardData = {
  huch_data: HuchData;
  engineer: Engineer[];
  bureldehuun: Bureldehuun;
};

export function useDashboardGraphic() {
  const dateRangeStartDate = useAtomValue(dateRangeStartDateAtom);
  const dateRangeEndDate = useAtomValue(dateRangeEndDateAtom);

  const startDate = dayjs(dateRangeStartDate).format('YYYY-MM-DD');
  const endDate = dayjs(dateRangeEndDate).format('YYYY-MM-DD');

  const dashboard = useQuery<DashboardData>({
    queryKey: ['dashboard/graph/', startDate, endDate],
    queryFn: () =>
      axiosInstance
        .get<DashboardData>(
          `/dashboard/graph/?start_date=${startDate}&end_date=${endDate}`
        )
        .then(res => {
          const data = res.data;

          const huchDataCount = {
            Автомашин: data.huch_data.Автомашин,
            Мотоцикл: data.huch_data.Мотоцикл,
            'Цасны чарга': data.huch_data['Цасны чарга'],
            'Моторт завь': data.huch_data['Моторт завь'],
            Зэвсэг: data.huch_data.Зэвсэг,
            ТРС: data.huch_data.ТРС,
            РЛС: data.huch_data.РЛС,
            'Радио станц': data.huch_data['Радио станц'],
          };

          const ajAhuinAjilCount = {
            'аж ахуйн ажил': data.bureldehuun.amralt_counts[
              'аж ахуйн ажил'
            ] || { count: 0, type: 'Unknown' },
            амралт: data.bureldehuun.amralt_counts.амралт || {
              count: 0,
              type: 'Unknown',
            },
            гадна: data.bureldehuun.amralt_counts.гадна || {
              count: 0,
              type: 'Unknown',
            },
            манаа: data.bureldehuun.amralt_counts.манаа || {
              count: 0,
              type: 'Unknown',
            },
          };

          const personCount = data.bureldehuun.person_count;

          return {
            ...data,
            huchDataCount,
            ajAhuinAjilCount,
            personCount,
          };
        }),
  });

  return dashboard;
}
