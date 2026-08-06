// lib/validate.js

export function validateListing(data) {
  const errors = [];

  if (!data.title || typeof data.title !== 'string' || data.title.length < 3) {
    errors.push('Title must be at least 3 characters');
  }

  if (!data.image || !isValidURL(data.image)) {
    errors.push('Image must be a valid URL');
  }

  if (!data.mapLink || !isValidURL(data.mapLink)) {
    errors.push('Map link must be a valid URL');
  }

  if (data.description && data.description.length > 2000) {
    errors.push('Description too long');
  }

  return { valid: errors.length === 0, errors };
}

function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}
