export default function StatContent() {
  return (
    <div className="flex items-center justify-center grid-cols-2 custom-screen gap-7 sm:flex">
      <div className="py-20 sm:py-28 ">
        <p className="text-4xl font-semibold text-gray-800">90K</p>
        <p className="mt-3 font-medium text-gray-600">Active user</p>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-800">120K</p>
        <p className="mt-3 font-medium text-gray-600">Total Sales</p>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-800">25+</p>
        <p className="mt-3 font-medium text-gray-600">Countries</p>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-800">2.5M+</p>
        <p className="mt-3 font-medium text-gray-600">Total revenue</p>
      </div>
    </div>
  );
}
