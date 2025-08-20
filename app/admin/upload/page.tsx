'use client';

import { useState } from 'react';
import { Button } from '@kps/ui';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage('');

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`Successfully uploaded ${result.uploadedFiles.length} files!`);
      } else {
        setMessage('Upload failed. Please try again.');
      }
    } catch (error) {
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-neutral-200">
            <h1 className="text-3xl font-bold text-neutral-900 mb-8">Upload Team Photos</h1>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Select Images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-kps-navy file:text-white hover:file:bg-kps-navy/80"
                />
              </div>

              {uploading && (
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-kps-navy"></div>
                  <p className="mt-2 text-neutral-600">Uploading...</p>
                </div>
              )}

              {message && (
                <div className={`p-4 rounded-lg ${message.includes('Success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}

              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Instructions:</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Upload team member photos (JPG, PNG, WebP)</li>
                  <li>• Recommended size: 400x400 pixels or larger</li>
                  <li>• Files will be saved to /public/assets/team/</li>
                  <li>• Update the team page code to use the new photos</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Upload team photos using the form above</li>
                  <li>2. Note the filenames of uploaded images</li>
                  <li>3. Update the TEAM_MEMBERS array in /team/page.tsx</li>
                  <li>4. Uncomment the img tags in the team page</li>
                  <li>5. Test the team page to ensure photos display correctly</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
