// Common, publicly-standard car tyre size combinations (ETRTO), used to
// populate cascading Width → Profile → Rim dropdowns so customers can only
// pick combinations that actually exist as real tyre sizes.
export const tyreSizeCombinations: {width: number;profile: number;rim: number;}[] = [
{ width: 155, profile: 65, rim: 14 },
{ width: 165, profile: 65, rim: 14 },
{ width: 165, profile: 70, rim: 14 },
{ width: 175, profile: 65, rim: 14 },
{ width: 175, profile: 70, rim: 14 },
{ width: 175, profile: 65, rim: 15 },
{ width: 185, profile: 60, rim: 14 },
{ width: 185, profile: 65, rim: 15 },
{ width: 185, profile: 60, rim: 15 },
{ width: 185, profile: 55, rim: 15 },
{ width: 195, profile: 65, rim: 15 },
{ width: 195, profile: 60, rim: 15 },
{ width: 195, profile: 55, rim: 15 },
{ width: 195, profile: 55, rim: 16 },
{ width: 195, profile: 50, rim: 16 },
{ width: 195, profile: 65, rim: 16 },
{ width: 205, profile: 60, rim: 15 },
{ width: 205, profile: 55, rim: 16 },
{ width: 205, profile: 60, rim: 16 },
{ width: 205, profile: 50, rim: 16 },
{ width: 205, profile: 45, rim: 16 },
{ width: 205, profile: 55, rim: 17 },
{ width: 205, profile: 50, rim: 17 },
{ width: 205, profile: 45, rim: 17 },
{ width: 215, profile: 55, rim: 16 },
{ width: 215, profile: 60, rim: 16 },
{ width: 215, profile: 50, rim: 17 },
{ width: 215, profile: 55, rim: 17 },
{ width: 215, profile: 45, rim: 17 },
{ width: 215, profile: 50, rim: 18 },
{ width: 225, profile: 45, rim: 17 },
{ width: 225, profile: 50, rim: 17 },
{ width: 225, profile: 55, rim: 17 },
{ width: 225, profile: 40, rim: 18 },
{ width: 225, profile: 45, rim: 18 },
{ width: 225, profile: 50, rim: 18 },
{ width: 225, profile: 40, rim: 19 },
{ width: 235, profile: 45, rim: 17 },
{ width: 235, profile: 50, rim: 18 },
{ width: 235, profile: 45, rim: 18 },
{ width: 235, profile: 40, rim: 18 },
{ width: 235, profile: 40, rim: 19 },
{ width: 235, profile: 35, rim: 19 },
{ width: 245, profile: 45, rim: 18 },
{ width: 245, profile: 40, rim: 18 },
{ width: 245, profile: 40, rim: 19 },
{ width: 245, profile: 35, rim: 19 },
{ width: 245, profile: 35, rim: 20 },
{ width: 255, profile: 40, rim: 19 },
{ width: 255, profile: 35, rim: 19 },
{ width: 255, profile: 35, rim: 20 },
{ width: 265, profile: 35, rim: 20 },
{ width: 275, profile: 40, rim: 20 }];


export function getWidthOptions(): number[] {
  return Array.from(new Set(tyreSizeCombinations.map((item) => item.width))).sort((a, b) => a - b);
}

export function getProfileOptions(width: number | null): number[] {
  if (!width) return [];
  return Array.from(
    new Set(tyreSizeCombinations.filter((item) => item.width === width).map((item) => item.profile))
  ).sort((a, b) => a - b);
}

export function getRimOptions(width: number | null, profile: number | null): number[] {
  if (!width || !profile) return [];
  return Array.from(
    new Set(
      tyreSizeCombinations.
      filter((item) => item.width === width && item.profile === profile).
      map((item) => item.rim)
    )
  ).sort((a, b) => a - b);
}

export function isValidTyreSize(width: number, profile: number, rim: number): boolean {
  return tyreSizeCombinations.some((item) => item.width === width && item.profile === profile && item.rim === rim);
}
