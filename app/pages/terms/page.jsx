'use client'

import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { X } from 'lucide-react'
import '@/components/styles/LegalPages.css'

export default function TermsOfUse() {
  return (
    <>
      <Sidebar />
      
      <main className="legal-page">
        <button 
          onClick={() => window.history.back()} 
          className="legal-close-button" 
          title="Go Back"
        >
          <X size={24} />
        </button>
        
        <div className="legal-container">
          <div className="legal-header">
            <h1>Terms of Use</h1>
            <p className="last-updated">Last updated: November 20, 2025</p>
          </div>

          <div className="legal-content">
            <p>Welcome to BlendDocs. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on BlendDocs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on BlendDocs' website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by BlendDocs at any time.</p>

            <h2>Disclaimer</h2>
            <p>The materials on BlendDocs' website are provided on an 'as is' basis. BlendDocs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, BlendDocs does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

            <h2>Blender and Third-Party Content</h2>
            <p>BlendDocs is an educational platform providing documentation and tutorials for Blender 3D software. This website is not affiliated with, endorsed by, or sponsored by the Blender Foundation.</p>
            <ul>
              <li>Blender® is a registered trademark of the Blender Foundation</li>
              <li>All Blender icons and interface elements are © Blender Foundation</li>
              <li>Blender icons used on this site are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></li>
              <li>Blender software is licensed under the GNU GPL</li>
            </ul>

            <h2>User Accounts</h2>
            <p>When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>

            <h2>Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users and third-party content), features and functionality are and will remain the exclusive property of BlendDocs and its licensors.</p>

            <h2>User-Generated Content</h2>
            <p>Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p>By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.</p>

            <h2>Prohibited Uses</h2>
            <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate BlendDocs, a BlendDocs employee, another user or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>In no event shall BlendDocs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BlendDocs' website, even if BlendDocs or a BlendDocs authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2>Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Germany, specifically Nordrhein-Westfalen, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: yannick.work3d@gmail.com</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}