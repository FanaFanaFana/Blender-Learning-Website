// FILE: sanity/lib/serverClient.js
import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion} from './env'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Server-side only token
})