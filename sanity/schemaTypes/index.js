// FILE: sanity/schemaTypes/index.js
import lesson from './lesson'

// Export both formats for compatibility
export const schemaTypes = [lesson]
export const schema = {
  types: [lesson]
}