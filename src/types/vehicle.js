export function formatTyreSize(size) {
  const base = `${size.width}/${size.profile} ${size.construction}${size.rim}`;
  if (size.loadIndex && size.speedRating) {
    return `${base} ${size.loadIndex}${size.speedRating}`;
  }
  return base;
}

export function tyreSizeToSlug(size) {
  return `${size.width}-${size.profile}-r${size.rim}`;
}

export function slugToTyreSize(slug) {
  const match = /^(\d{2,3})-(\d{2,3})-r(\d{2})$/i.exec(slug.trim());
  if (!match) return null;
  return { width: match[1], profile: match[2], rim: match[3] };
}

const UK_REG_PATTERN = /^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$|^[A-Z][0-9]{1,3}\s?[A-Z]{3}$|^[A-Z]{3}\s?[0-9]{1,3}[A-Z]$/;

export function normalizeRegistration(input) {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function isValidUkRegistration(input) {
  const normalized = normalizeRegistration(input);
  if (normalized.length < 2 || normalized.length > 7) return false;
  return UK_REG_PATTERN.test(normalized);
}
