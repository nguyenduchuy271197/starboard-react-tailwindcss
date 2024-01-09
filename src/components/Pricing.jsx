export default function Pricing() {
  return (
    <div>
      <div className="relative max-w-2xl mx-auto sm:text-center">
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
          Buy once, use forever.
        </h2>
        <p>
          Starboard is a quality product that will last a lifetime, so you never
          have to buy again.
        </p>
      </div>
      <div className="justify-center gap-6 mt-12 space-y-6 sm:flex sm:space-y-0">
        <div className="flex flex-col items-stretch h-full p-8 bg-white border shadow-lg gap-y-4 rounded-xl">
          <p className="font-medium text-sky-500">Hobby</p>
          <p className="text-3xl font-semibold text-gray-800">$0 /mo</p>
          <p className="max-w-sm">
            For small teams between 4-7 people focused on collaboration.
          </p>
          <button className="block w-full text-white bg-sky-500 px-4 py-2.5 font-medium text-sm text-center rounded-lg">
            Get Stared
          </button>
        </div>
        <div className="flex flex-col items-stretch h-full p-8 text-gray-300 bg-gray-800 border shadow-lg gap-y-4 rounded-xl ">
          <p className="font-medium text-sky-500">Startup</p>
          <p className="text-3xl font-semibold text-gray-800">$32 /mo</p>
          <p className="max-w-sm">
            For large teams with more security, support, and performance needs,
            and much more.
          </p>
          <button className="block w-full text-white bg-sky-500 px-4 py-2.5 font-medium text-sm text-center rounded-lg">
            Get Stared
          </button>
        </div>
      </div>
    </div>
  );
}
