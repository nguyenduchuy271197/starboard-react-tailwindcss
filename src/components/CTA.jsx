export default function CTA() {
  return (
    <div className="py-20 sm:py-28 ">
      <div className="max-w-xl mx-auto text-center custom-screen">
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
          Let’s get started now
        </h2>
        <p className="mt-3 text-gray-600">
          Work with a project management software that's easy and fun to use.
        </p>
        <div className="items-center justify-center gap-3 mt-4 space-y-3 sm:flex sm:space-y-0">
          <button className="py-2.5 px-4 font-medium text-center rounded-lg inline-block text-sm text-white bg-sky-500 hover:bg-sky-600 shadow rounded-lg w-full">
            Get started
          </button>
          <button className="py-2.5 px-4 font-medium text-center rounded-lg inline-block text-sm text-gray-800 hover:bg-gray-50 rounded-lg border w-full">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
