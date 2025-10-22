    // import React from 'react'
    
   // Note: The main layout component (App.js, Layout.js, etc.)
// should handle the overall min-h-screen and the flex-col structure.

const HomePage = () => {
  return (
    // 'flex-grow' ensures this component takes up all available vertical space
    // that isn't used by the navbar or footer.
    <main className="grow flex flex-col items-center justify-center p-8">
      <div className="text-center text-black dark:text-white max-w-xl">
        <h1 className="text-6xl font-black mb-4 tracking-tighter md:text-7xl">
          TaskFlow 🚀
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-300 font-normal">
          Master your workflow. Ship projects faster.
        </p>
      </div>
    </main>
  );
};

export default HomePage;