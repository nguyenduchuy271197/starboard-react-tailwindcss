export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-3 custom-screen md:py-5">
      <img
        src="https://starboard-one.vercel.app/starboard.svg"
        alt=""
        className=""
      />
      <div className="py-2.5 px-4 text-center rounded-lg font-medium text-sm text-white bg-gray-800">
        <button>Get started</button>
      </div>
    </div>
  );
}
