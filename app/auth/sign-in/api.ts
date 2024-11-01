import { axiosInstance } from "@/app/lib/axios/fetcher";
import { AuthSignInSchema } from "./schema";

export type AuthSignInAPIResponse = {
  access: string;
  refresh: string;
  angiDugaar: number;
  salbarDugaar: number;
  salbarDugaar_id: number | null;
  center: string;
  person_role: 'euser' | 'auser' | 'zuser';
  zoom: number;
  minZoom: number;
  h1angiDugaar: string | null;
  h2angiDugaar: string | null;
  tsol: string;
  ner: string;
};

export function authSignInAPI(data: AuthSignInSchema) {
  return axiosInstance
    .post<AuthSignInAPIResponse>('/api/token/', data)
    .then(response => response.data);
}
