import StatHeader from "../Stat/StatHeader";
import StatContent from "../Stat/StatContent";

export default function Stat() {
  return (
    <div className="py-20 sm:py-28 ">
      <div className="text-center custom-screen ">
        <div className="max-w-2xl md:mx-auto">
          {/* Stat Header */}
          <StatHeader />

          {/* Stat Content */}
          <StatContent />
        </div>
      </div>
    </div>
  );
}
