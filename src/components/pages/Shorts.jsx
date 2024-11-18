import buttons from "../../data/Shorts";

const Shorts = () => {
  return (
    <div className="absolute w-auto right-0 left-20 top-16 bg-black space-y-4">
      <div className="scrollbar-thumb-gray-700 w-[38rem] h-[54rem] inset-0 m-auto flex scrollable-item">
        <div className="h-full w-[32rem] overflow-hidden">
          <img
            className="h-full w-full rounded-xl"
            src="https://w0.peakpx.com/wallpaper/438/267/HD-wallpaper-anime-portrait-display-landscape.jpg"
            alt="short"
          />
        </div>
        <div className="relative h-full w-20 flex flex-col items-center gap-y-8 justify-end">
          {buttons[0].video.map((items, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-full mb-3 hover:bg-gray-600"
            >
              <span className="block m-3">
                <items.image color="white" size={25} />
              </span>
              <div className="flex justify-center">
                <h1 className="absolute text-white text-base font-semibold">
                  {items.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[38rem] h-[54rem] inset-0 m-auto flex">
        <div className="h-full w-[32rem] overflow-hidden">
          <img
            className="h-full w-full rounded-xl"
            src="https://w0.peakpx.com/wallpaper/438/267/HD-wallpaper-anime-portrait-display-landscape.jpg"
            alt="short"
          />
        </div>
        <div className="relative h-full w-20 flex flex-col items-center gap-y-8 justify-end">
          {buttons[0].video.map((items, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-full mb-3 hover:bg-gray-600"
            >
              <span className="block m-3">
                <items.image color="white" size={25} />
              </span>
              <div className="flex justify-center">
                <h1 className="absolute text-white text-base font-semibold">
                  {items.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[38rem] h-[54rem] inset-0 m-auto flex">
        <div className="h-full w-[32rem] overflow-hidden">
          <img
            className="h-full w-full rounded-xl"
            src="https://w0.peakpx.com/wallpaper/438/267/HD-wallpaper-anime-portrait-display-landscape.jpg"
            alt="short"
          />
        </div>
        <div className="relative h-full w-20 flex flex-col items-center gap-y-8 justify-end">
          {buttons[0].video.map((items, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-full mb-3 hover:bg-gray-600"
            >
              <span className="block m-3">
                <items.image color="white" size={25} />
              </span>
              <div className="flex justify-center">
                <h1 className="absolute text-white text-base font-semibold">
                  {items.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
