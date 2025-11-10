// FILE: app/utils/mediaHelper.js
// Create this new file to handle media URLs

/**
 * Get the correct media URL based on whether it's uploaded or a path
 * @param {Object} page - The page object from Sanity
 * @returns {string|null} - The media URL or null
 */
export function getMediaUrl(page) {
  if (!page) return null;
  
  // If using uploaded media and URL exists
  if (page.mediaType === 'upload' && page.uploadedMediaUrl) {
    return page.uploadedMediaUrl;
  }
  
  // If using path/URL
  if (page.mediaType === 'url' && page.image) {
    return page.image;
  }
  
  // Fallback: check if image exists (for backwards compatibility)
  if (page.image) {
    return page.image;
  }
  
  // Check for uploaded media as fallback
  if (page.uploadedMediaUrl) {
    return page.uploadedMediaUrl;
  }
  
  return null;
}

/**
 * Check if a URL is a video file
 * @param {string} url - The media URL
 * @returns {boolean}
 */
export function isVideoUrl(url) {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
}

/**
 * Check if a URL is an image file
 * @param {string} url - The media URL
 * @returns {boolean}
 */
export function isImageUrl(url) {
  if (!url) return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
}