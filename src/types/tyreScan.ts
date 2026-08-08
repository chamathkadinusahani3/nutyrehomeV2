import type { TyreSize } from './vehicle';

export type ScannedVehicle = {
  make: string;
  model: string;
  generation?: string;
};

export type ScannedTyre = TyreSize & {
  brand?: string;
  model?: string;
  type?: string;
};

export type TyreScanResult = {
  vehicle: ScannedVehicle;
  tyre: ScannedTyre;
  confidencePercent: number;
  /** Always true until a real computer-vision backend is wired up — see src/services/tyreScanner.ts */
  isDemo: true;
};

export type TyreScanOutcome =
  { status: 'success'; result: TyreScanResult } |
  { status: 'error'; message: string };

export const SCAN_STAGES: {id: string;label: string;}[] = [
{ id: 'analyzing', label: 'Looking for tyre markings…' },
{ id: 'tyre', label: 'Identifying tyre size…' },
{ id: 'vehicle', label: 'Checking vehicle…' },
{ id: 'complete', label: 'Scan complete' }];
