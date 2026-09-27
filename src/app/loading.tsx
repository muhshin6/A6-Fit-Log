const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-lime-300" />

        <p className="text-gray-400">Loading exercises...</p>
      </div>
    </div>
  );
};

export default Loading;
