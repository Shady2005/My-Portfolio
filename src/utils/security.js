/**
 * Sanitizes input strings to prevent XSS attacks and injection vectors.
 * Converts special HTML characters into safe entity representations.
 * 
 * @param {string} input - The raw input string
 * @returns {string} - The sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Validates whether an external URL is safe (http/https).
 * 
 * @param {string} url - The URL to validate
 * @returns {boolean}
 */
export const isSafeUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('https://wa.me/');
};
