import Img from "./Img";

function CoverCard() {
  return (
    <div className="relative">
      <div className="flex gap-4 items-center">
        <Img
          src="/images/play_it_safe.svg"
          containerClassName="aspect-square h-16"
        />
        <div>
          <h1 className="font-extralight">Play It Safe</h1>
          <h2 className="text-[#B3B3B3] text-sm font-extralight">Julia Wolf</h2>
        </div>
      </div>
    </div>
  );
}

export default function Player() {
  return (
    <div className="flex bg-[#181818] z-30 bottom-0 w-full text-white justify-between px-5 items-center py-5">
      <div className="flex justify-between items-center gap-6">
        <CoverCard />
        <button>
          <Img
            src="/images/icons/Heart_Fill_XS.svg"
            containerClassName="h-6 w-6"
          />
        </button>
      </div>

      <div>
        <div className="flex items-center justify-center gap-5">
          <button>
            <Img
              src="/images/icons/Shuffle_S.svg"
              containerClassName="w-7 h-7"
            />
          </button>
          <button>
            <Img
              src="/images/icons/play_back.svg"
              containerClassName="w-8 h-8"
            />
          </button>
          <button>
            <Img src="/images/icons/play.svg" />
          </button>
          <button>
            <Img
              src="/images/icons/play_next.svg"
              containerClassName="w-8 h-8"
            />
          </button>
          <button>
            <Img
              src="/images/icons/Repeat_S.svg"
              containerClassName="w-7 h-7"
            />
          </button>
        </div>
        <div className="flex items-center gap-2 text-[#B3B3B3]">
          <span>2:39</span>
          <Img
            src="/images/icons/playing-progress.svg"
            containerClassName="w-[500px] h-1 aspect-square	"
          />
          <span>4:22</span>
        </div>
      </div>

      <div className="flex gap-4 items-end justify-between">
        <button>
          <Img src="/images/icons/Queue_XS.svg" containerClassName="h-7 w-7" />
        </button>
        <button>
          <Img
            src="/images/icons/Devices_XS.svg"
            containerClassName="h-7 w-7"
          />
        </button>
        <div className="flex gap-2 items-center">
          <button>
            <Img
              src="/images/icons/Volume_XS.svg"
              containerClassName="h-7 w-7"
            />
          </button>
          <Img
            src="/images/icons/volume-progress.svg"
            containerClassName="h-1 w-24"
          />
        </div>
        <button>
          <Img
            src="/images/icons/FullScreen_S.svg"
            containerClassName="h-7 w-7"
          />
        </button>
      </div>
    </div>
  );
}
