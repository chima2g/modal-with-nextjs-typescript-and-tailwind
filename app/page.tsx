'use client'

import { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';

export default function Home() {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setConfirmationModalOpen(true)}>
        Click to Open Modal
      </button>
      {confirmationModalOpen && (
        <ConfirmationModal 
          isOpen={confirmationModalOpen}
          handleClose={() => setConfirmationModalOpen(!confirmationModalOpen)}>
            {/* Changed the css in these next two lines. To get it looking right. Perhaps I copied them wrong */}
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex flex-col mr-auto mb-auto items-center justify-center p-8 w-full h-full">
                <span>Are you sure you want to cancel?</span>
                <span>Your current progress will be lost</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-8 align-center">
                <button 
                  className="py-2 px-8 font-bold hover:bg-violet-600 border rounded"
                  type="button"
                  onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}>
                  Continue Working
                </button>
                <button className="py-2 px-8 font-bold hover:bg-violet-600 border rounded"
                  type="button"
                  >
                    Cancel Pomodoro
                </button>
                
              </div>
            </div>

        </ConfirmationModal>
      )}
    </main>
  )
}
