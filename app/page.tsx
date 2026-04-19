export default function Home() {
  return (
    <div className="mt-6 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Junyong Kim 🇰🇷
        </h1>

        <p className="text-sm text-gray-500 mb-4 tracking-wide">
          INTERESTS
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            💻 코딩
          </span>
          <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
            📷 사진
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
            🎵 음악
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
            🔧 DIY
          </span>
        </div>
      </div>
  );
}
