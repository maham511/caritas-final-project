import React, { useState } from 'react'

const Modal = ({ handleClose }) => {
  return (
    <>
      <div className="mt-16 ml-72 max-w-lg z-10 border-4 rounded-sm border-red-600 fixed top-0 left-0 w-full modal-overlay absolute opacity-95">
        <div className="flex items-center">
          <div className="p-6 bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dont go...
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Subscribe to our newsletter and keep up to date with the latest
              Caritas news & events.
            </p>
            <a
              href="https://caritassalford.us2.list-manage.com/subscribe?u=88f66394d53d39d0a756488c6&id=fb5b6e366c"
              target="_blank"
              className="inline-flex items-center p-2 m-4 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-sm hover:bg-red-800 focus:ring-4 focus:ring-gray-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-gray-800"
            >
              Yes Please!
            </a>
            <button
              onClick={handleClose}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-sm hover:bg-red-800 focus:ring-4 focus:ring-gray-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-gray-800"
            >
              No thanks...
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
