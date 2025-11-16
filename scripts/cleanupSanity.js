// cleanupSanity.js
// Run with: node scripts/cleanupSanity.js

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local from project root
dotenv.config({ path: join(__dirname, '..', '.env.local') });

// Get credentials from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables');
  process.exit(1);
}

if (!token) {
  console.error('❌ Missing SANITY_API_WRITE_TOKEN in environment variables');
  console.log('💡 You need a write token from: https://sanity.io/manage');
  process.exit(1);
}

// Initialize Sanity client
const client = createClient({
  projectId: projectId,
  dataset: 'production',
  useCdn: false,
  token: token, // Use the write token, not project ID
  apiVersion: '2024-01-01'
});

async function deleteAllLessons() {
  try {
    console.log('🗑️  Fetching all lessons...');
    
    // Fetch all lesson documents (including drafts)
    const lessons = await client.fetch(`*[_type == "lesson"]{_id, lessonId, heroConfig}`);
    console.log(`📚 Found ${lessons.length} lessons.`);

    if (lessons.length === 0) {
      console.log('✨ Nothing to delete.');
      return;
    }

    // Show what will be deleted
    console.log('\n📋 Lessons to delete:');
    lessons.forEach((lesson, i) => {
      const title = lesson.heroConfig?.title || lesson.lessonId?.current || lesson._id;
      console.log(`  ${i + 1}. ${title} (${lesson._id})`);
    });

    // Confirm deletion
    console.log('\n⚠️  This will permanently delete all lessons!');
    console.log('Press Ctrl+C to cancel, or wait 3 seconds to continue...\n');
    
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Delete each lesson
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const title = lesson.heroConfig?.title || lesson.lessonId?.current || lesson._id;
      console.log(`[${i + 1}/${lessons.length}] Deleting: ${title}...`);
      
      await client.delete(lesson._id);
    }

    console.log('\n✅ All lessons deleted successfully!');
  } catch (error) {
    console.error('\n💥 Error deleting lessons:', error.message);
    if (error.statusCode === 401) {
      console.error('🔐 Authentication failed. Check your SANITY_API_WRITE_TOKEN');
    }
  }
}

// Run the deletion
deleteAllLessons();