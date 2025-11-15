'use client'

// FILE: sanity/components/LessonImporter.jsx
import React, { useState } from 'react'
import { Stack, Button, Card, Text, Box } from '@sanity/ui'
import { UploadIcon } from '@sanity/icons'
import { useFormValue, useClient } from 'sanity'
import { useRouter } from 'sanity/router'

export function LessonImporter(props) {
  const { onChange, value } = props
  const [importing, setImporting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const client = useClient({ apiVersion: '2023-05-03' })
  const router = useRouter()
  const documentId = useFormValue(['_id'])
  const documentType = useFormValue(['_type'])

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setImporting(true)
    setError(null)
    setSuccess(false)

    try {
      const text = await file.text()
      const lessonData = JSON.parse(text)

      // Validate required fields
      if (!lessonData.lessonId?.current) {
        throw new Error('Missing required field: lessonId.current')
      }

      // Function to add _key to array items recursively
      const addKeysToArrays = (obj) => {
        if (Array.isArray(obj)) {
          return obj.map((item, index) => {
            if (typeof item === 'object' && item !== null) {
              return {
                _key: `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
                ...addKeysToArrays(item)
              }
            }
            return item
          })
        } else if (typeof obj === 'object' && obj !== null) {
          const newObj = {}
          for (const key in obj) {
            newObj[key] = addKeysToArrays(obj[key])
          }
          return newObj
        }
        return obj
      }

      // Add _key to all arrays in the lesson data
      const lessonDataWithKeys = addKeysToArrays(lessonData)

      console.log('Parsed lesson data with keys:', lessonDataWithKeys)

      // Check if document exists
      let existingDoc = null
      if (documentId) {
        try {
          existingDoc = await client.fetch(
            `*[_id == $id][0]`,
            { id: documentId }
          )
        } catch (fetchErr) {
          console.log('Document not found, will create new one')
        }
      }

      let result

      if (existingDoc) {
        // Update existing document
        console.log('Updating existing document:', documentId)
        result = await client
          .patch(documentId)
          .set(lessonDataWithKeys)
          .commit()
      } else {
        // Create new document
        console.log('Creating new document')
        
        const newDoc = {
          _type: 'lesson',
          ...lessonDataWithKeys
        }

        result = await client.create(newDoc)
        
        // Navigate to the newly created document
        console.log('Created document:', result._id)
        
        setTimeout(() => {
          router.navigateIntent('edit', {
            id: result._id,
            type: 'lesson'
          })
        }, 1000)
      }

      console.log('Import result:', result)
      setSuccess(true)
      
      // Reload after a short delay
      setTimeout(() => {
        window.location.reload()
      }, 1500)

    } catch (err) {
      console.error('Import error:', err)
      setError(err.message || 'Failed to import lesson data')
    } finally {
      setImporting(false)
      event.target.value = '' // Reset file input
    }
  }

  return (
    <Stack space={3}>
      <Card padding={4} radius={2} shadow={1} tone="primary">
        <Stack space={3}>
          <Text size={2} weight="semibold">
            📤 Import Lesson from JSON
          </Text>
          <Text size={1} muted>
            Upload a JSON file to automatically populate all lesson fields. Works for both new and existing documents!
          </Text>
          
          <Box>
            <input
              id="lesson-import-file"
              name="lesson-import-file"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              aria-label="Upload JSON lesson file"
              disabled={importing}
            />
            <label htmlFor="lesson-import-file" style={{ cursor: 'pointer' }}>
              <Button
                mode="ghost"
                icon={UploadIcon}
                text={importing ? 'Importing...' : 'Choose JSON File'}
                disabled={importing}
                as="span"
              />
            </label>
          </Box>

          {success && (
            <Card padding={3} radius={2} tone="positive">
              <Stack space={2}>
                <Text size={1} weight="semibold">✅ Lesson imported successfully!</Text>
                <Text size={1} style={{ color: '#059669' }}>
                  🔄 Reloading page to show imported data...
                </Text>
              </Stack>
            </Card>
          )}

          {error && (
            <Card padding={3} radius={2} tone="critical">
              <Text size={1}>❌ {error}</Text>
            </Card>
          )}
        </Stack>
      </Card>

      <Card padding={4} radius={2} shadow={1} tone="transparent" border>
        <Stack space={3}>
          <Text size={1} weight="semibold">
            📋 How to use:
          </Text>
          <Text size={1}>
            1. Open any Lesson document (new or existing)<br/>
            2. Click "Choose JSON File" and select your exported lesson<br/>
            3. The importer will either:<br/>
            &nbsp;&nbsp;&nbsp;• Update the current document (if it exists)<br/>
            &nbsp;&nbsp;&nbsp;• Create a new document (if it doesn't exist)<br/>
            4. The page will reload with all your imported data!
          </Text>
          <Card padding={2} radius={2} tone="positive">
            <Text size={1} weight="semibold">✨ New Feature:</Text>
            <Text size={1}>
              No need to save first! The importer now handles both new and existing documents automatically.
            </Text>
          </Card>
        </Stack>
      </Card>
    </Stack>
  )
}