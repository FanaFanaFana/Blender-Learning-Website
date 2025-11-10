// FILE: sanity/lib/client.js
import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for mutations (uploads, updates)
  token: process.env.SANITY_TOKEN, // ✅ ADD THIS
})