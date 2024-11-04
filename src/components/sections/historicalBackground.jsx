import Image from "next/image";

export default function HistoricalBackground({HistoryBgData}) {
  const { title, description, btn, image } = HistoryBgData;
  return (
    <>
      <div className="container mx-auto px-2 py-2">
        <div className="grid md:grid-cols-2 items-center">
          <div className="relative mb-8 md:mb-0">
            <div className="bg-black p-8 text-white rounded-tl-lg rounded-bl-lg font-ibm">
              <h1 className="text-4xl font-bold mb-6">
              {title}
              </h1>
              <p className="text-xl mb-16">
                {description}
              </p>
            </div>
            <button className="absolute -bottom-6 left-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center shadow-md font-ibm text-lg">
              {btn}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="relative rounded-tr-lg rounded-br-lg overflow-hidden">
          {/* https://res.cloudinary.com/drfzbtbzi/image/upload/v1730473374/suceess-2.jpg */}
            {/* Other content here */}
            {HistoryBgData.src ? (
                <video src={HistoryBgData.src} controls autoPlay muted loop />
            ) : (
                <p className="text-red-500 font-ibm text-xl">Video unavailable!</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}