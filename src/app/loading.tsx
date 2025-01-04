export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-svh">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-lg font-medium">Loading, please wait...</p>
    </div>
  );
}
