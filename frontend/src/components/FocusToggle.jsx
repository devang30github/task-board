function FocusToggle({ focusMode, onToggle }) {
  return (
    <div className="flex items-center justify-center mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-gray-700 font-medium">Focus Mode</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={focusMode}
            onChange={(e) => onToggle(e.target.checked)}
            className="sr-only"
          />
          <div className={`w-14 h-8 rounded-full transition-colors ${focusMode ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${focusMode ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
        </div>
        <span className="text-sm text-gray-500">{focusMode ? 'ON' : 'OFF'}</span>
      </label>
    </div>
  )
}

export default FocusToggle