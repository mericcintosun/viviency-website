export default function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#F07F55] border-opacity-75"></div>
        </div>
      </div>
    );
  }
  