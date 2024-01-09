export default function Hero() {
  return (
    <div className="py-28">
      <div className="flex items-center justify-between ">
        <div className="flex-none max-w-2xl space-y-5 ">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            A Powerful Project Management Desktop App
          </h1>
          <p className="">
            With complete software that enables your teams to interact, plan,
            evaluate, and manage daily activities, you can break down large
            projects, quickly, and easily.
          </p>
          <div className="flex gap-5 ">
            <input
              className="px-3 py-2 pl-12 pr-3 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-sky-500"
              type="text"
              name=""
              placeholder="Enter your email"
            ></input>
            <button className="block w-full mt-3 text-white bg-sky-500 hover:bg-sky-600 sm:w-auto sm:mt-0 px-4 py-2.5 font-medium text-sm text-center rounded-lg">
              Try for free
            </button>
          </div>
        </div>
        <img
          className="w-full border shadow-lg rounded-xl md:max-w-2xl"
          src="https://starboard-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesktop-app-prview.7f00f8fa.png&w=1080&q=75"
        ></img>
      </div>
    </div>
  );
}
