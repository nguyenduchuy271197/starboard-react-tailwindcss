export default function Trial() {
  return (
    <div className="py-20 sm:py-28">
      <div className="flex flex-col-reverse justify-between custom-screen gap-x-12 md:flex-row md:items-center">
        <div className="flex-none max-w-xl space-y-3">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Get a free trial today and start making progress!
          </h2>
          <p className="text-gray-600">
            Starboard is a comprehensive project management software that
            captures the entire project lifecycle, from backlog to release. With
            a variety of features. Allow your teams to collaborate effectively
            on projects and stay on top of deadlines.
          </p>
          <button className="bg-sky-500 rounded-lg py-2.5 px-4 inline-block font-medium text-sm text-white">
            Get free trial
          </button>
        </div>
        <div>
          <img src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-img.41d94ab4.png&w=640&q=75"></img>
        </div>
      </div>
    </div>
  );
}
