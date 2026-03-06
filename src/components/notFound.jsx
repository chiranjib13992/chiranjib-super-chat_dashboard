import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        
        {/* Main Content */}
        <div className="text-center space-y-8">

          {/* 404 Display */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">
              404
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Lost?
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Page Not Found
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg transition-colors duration-200"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>

          </div>

        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-6">
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg opacity-20"></div>
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg opacity-30"></div>
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg opacity-20"></div>
        </div>

      </div>
    </div>
  );
}