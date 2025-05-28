import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(code);
    window.location.href = '/' + code
  }

  return (
    <div className="h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-300">
      <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-20">
        Faiq's URL Shortener
      </h1>

      <p className="text-lg text-gray-700 mb-4">Check available URL short code</p>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="eg: funnyImage"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white shadow-md hover:from-blue-700 hover:to-pink-600 transition cursor-pointer"
          >
            Go!
          </button>
        </div>
      </form>
    </div>
  )
}