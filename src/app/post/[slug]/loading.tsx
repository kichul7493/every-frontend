export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mt-8 mb-7">
      <div className="w-4/5 h-8 mb-3 bg-gray-400 animate-pulse rounded-xl" />
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-400 animate-pulse" />
          <div className="flex flex-col">
            <div className="w-16 h-8 bg-gray-400 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-3/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-3/5 h-4 bg-gray-400 animate-pulse mb-10 rounded-xl"></div>

        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-4/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-3/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
        <div className="w-3/5 h-4 bg-gray-400 animate-pulse mb-2 rounded-xl"></div>
      </div>
    </div>
  );
}
