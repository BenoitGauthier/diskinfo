export function getDrives(callback: (err: any, drivers: Driver[]) => void): void;

export interface Driver {
  filesystem: string;
  blocks: number;
  used: number;
  available: number;
  capacity: string;
  mounted: string;
}
