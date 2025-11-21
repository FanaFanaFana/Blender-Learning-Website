// FILE: sanity/lib/client.js
import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Only available server-side (no NEXT_PUBLIC_ prefix)
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})