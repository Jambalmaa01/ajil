import { axiosInstance } from "@/app/lib/axios/fetcher"
import { useQuery } from "@tanstack/react-query"
import { useAtomValue } from "jotai"
import { dateRangeEndDateAtom, dateRangeStartDateAtom } from "../atom"



interface ZevsegItem{
    value:string,
    count:number
}
interface TomilgooItem{
  niitManaa: number,
  niitHaruul: number,
  niitHvn: number,
  niitTomilgoo:number,
  hzgbcHaruul:number,
  hzgbcManaa:number,
  hzgbcTomilgoo:number
}

export type DashboardData={
    zevseg:ZevsegItem[];
    tomilgoo:TomilgooItem;
}


export function useDashboard() {
  const dateRangeStartDate = useAtomValue(dateRangeStartDateAtom);
  const dateRangeEndDate = useAtomValue(dateRangeEndDateAtom);
  const dashboard = useQuery<DashboardData>({
    queryKey: ['dashboard', dateRangeStartDate, dateRangeEndDate],
    queryFn: () =>
      axiosInstance
        .get<DashboardData>(
          `/dashboard/?start_date=${dateRangeStartDate}&end_date=${dateRangeEndDate}`
        )
        .then(res => res.data),
  });

  return dashboard;
}
