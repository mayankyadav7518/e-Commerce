
export default function LoadingAnimation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="relative">
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-linear-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full blur-sm opacity-70 animate-pulse-slow" />
      </div>

      <div className="mt-2">
        <div className="w-12 h-12 rounded-full border-4 border-t-teal-500 border-gray-200 animate-spin" />
      </div>
      
      <p className="mt-2 text-teal-600 text-lg sm:text-xl font-medium tracking-wide">
        Loading...
      </p>

      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
