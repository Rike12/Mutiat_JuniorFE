// types.ts
export type DataItem = {
  capsule_id: string;
  capsule_serial: string;
  details: string;
  landings: number;
  missions: Mission[];
  original_launch: string;
  original_launch_unix: number;
  reuse_count: number;
  status: string;
  type: string;
}
interface Mission {
  flight: number;
  name: string;
}
 
  
  