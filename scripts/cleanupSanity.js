// cleanupSanity.js
// Run with: node cleanupSanity.js

import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: SANITY_TOKEN,
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
