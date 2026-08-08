import type { VehicleLookupResult } from '../types/vehicle';
import { isValidUkRegistration, normalizeRegistration } from '../types/vehicle';

/**
 * Vehicle registration → tyre size lookup.
 *
 * There is no vehicle-data API connected to this project yet (no backend,
 * no .env, no DVLA/tyre-fitment integration exists anywhere in the repo).
 * This function intentionally does NOT invent a vehicle for whatever
 * registration a customer types — doing so would show fabricated make/model
 * data as if it were a real government/industry lookup, which is misleading
 * on a real customer-facing site.
 *
 * To connect a real provider (e.g. DVLA VES API, or a commercial
 * registration→tyre-size API such as Vantage/Tyre-Size lookup providers):
 *   1. Add the endpoint + key as Vite env vars, e.g.
 *        VITE_VEHICLE_LOOKUP_URL
 *        VITE_VEHICLE_LOOKUP_KEY
 *   2. Replace the body of this function with a `fetch(...)` call to that
 *      endpoint, mapping its response into the `Vehicle` shape from
 *      `src/types/vehicle.ts` (make, model, variant?, year?, tyreSizes[]).
 *   3. Keep the same return shape (`VehicleLookupResult`) so every component
 *      that calls this (RegistrationSearchForm, VehicleFindPage) keeps
 *      working without changes — they already handle 'success',
 *      'not_found', 'invalid_registration' and 'error'.
 */
export async function lookupVehicleByRegistration(rawRegistration: string): Promise<VehicleLookupResult> {
  const registration = normalizeRegistration(rawRegistration);

  if (!isValidUkRegistration(registration)) {
    return { status: 'invalid_registration' };
  }

  const lookupUrl = import.meta.env.VITE_VEHICLE_LOOKUP_URL as string | undefined;

  if (!lookupUrl) {
    // No real provider configured — simulate realistic network latency so
    // the UI's loading state is exercised, then report honestly that we
    // have no data for this registration rather than guessing.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { status: 'not_found' };
  }

  try {
    const response = await fetch(`${lookupUrl}?registration=${encodeURIComponent(registration)}`, {
      headers: { Accept: 'application/json' }
    });
    if (response.status === 404) return { status: 'not_found' };
    if (!response.ok) return { status: 'error', message: `Lookup failed (${response.status})` };
    const vehicle = await response.json();
    return { status: 'success', vehicle };
  } catch {
    return { status: 'error', message: 'Unable to reach the vehicle lookup service.' };
  }
}
