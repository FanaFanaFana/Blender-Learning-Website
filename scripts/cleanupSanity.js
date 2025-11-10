// cleanupSanity.js
// Run with: node cleanupSanity.js

import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: 'l9y29z8y',
  dataset: 'production',
  useCdn: false,
  token: 'sk1vd24uVdWdjwFf01MPOLmcXcH5z5uU3GkBBSpPCCR8LvGf56uf8bequDlXFr7jDsEOSLLubuAFK2OJ4iNpUWPpsrVlMA0dzf33zX3sA56Gk3l9Ifgtvfh2mxyrV0BmvyMVuxZzilHKqHZVxIEXDrskkyQ8Sc9BS40yg8J692pxUFnLr07C',
  apiVersion: '2024-01-01'
});

async function deleteAllLessons() {
  try {
    console.log('🗑️ Fetching all lessons...');
    
    // Fetch all lesson documents
    const lessons = await client.fetch(`*[_type == "lesson"]{_id, heroConfig}`);
    console.log(`📚 Found ${lessons.length} lessons.`);

    if (lessons.length === 0) {
      console.log('Nothing to delete.');
      return;
    }

    // Delete each lesson
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      console.log(`[${i + 1}/${lessons.length}] Deleting: ${lesson.heroConfig?.title || lesson._id}...`);
      await client.delete(lesson._id);
    }

    console.log('✅ All lessons deleted successfully!');
  } catch (error) {
    console.error('💥 Error deleting lessons:', error);
  }
}

deleteAllLessons();
