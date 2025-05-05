import React from 'react'

const Toast = ({ show, message, icon = 'fas fa-info-circle', type = 'info' }) => {
  if (!show) return null

  const colorMap = {
    info: 'text-blue-500 border-blue-300',
    success: 'text-green-500 border-green-300',
    error: 'text-red-500 border-red-300',
    warning: 'text-yellow-500 border-yellow-300',
  }

  const colors = colorMap[type] || colorMap.info

  return (
    <div className={`fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md border rounded-2xl px-4 py-3 flex items-center gap-3 animate-fade-in-out ${colors}`}>
      <i className={`${icon} text-lg`}></i>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}

export default Toast