
const Homepage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Profile Card */}
      <div className="bg-blue-700 p-8 rounded-xl shadow-lg flex flex-col items-center mb-4">
        <div className="w-24 h-24 bg-white rounded-full mb-4 flex items-center justify-center">
          {/* Replace with your user icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 11.024a1.76 1.76 0 01.304-.454L9.07 7.024a2.5 2.5 0 113.536 3.536l-2.121 2.12a2.5 2.5 0 01-3.535 0 1.75 1.75 0 01-.454-.305m13.758 2.647a2.5 2.5 0 010-3.535l2.12-2.121a2.5 2.5 0 113.536 3.535l-2.121 2.12a2.5 2.5 0 01-3.535 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold">Ujwal Ponnaluri</p>
          <p className="text-sm">Role: Engineer</p>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="grid grid-cols-3 gap-4">
        {/* Track Equipment */}
        <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex flex-col items-center">
          {/* Icon */}
          <span className="text-2xl mb-2">🔍</span>
          <span>Track Equipment</span>
        </button>

        {/* Add/Remove Equipment */}
        <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex flex-col items-center">
          {/* Icon */}
          <span className="text-2xl mb-2">➕➖</span>
          <span>Add/Remove Equipment</span>
        </button>

        {/* Profile Information */}
        <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex flex-col items-center">
          {/* Icon */}
          <span className="text-2xl mb-2">👤</span>
          <span>Profile Information</span>
        </button>
      </div>
    </div>
  )
}

export default Homepage;