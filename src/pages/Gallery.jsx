import { View } from "@react-three/drei";

function ImageGallery() {
  return (
    <>
      <div className="flex flex-col w-full bg-slate-600 items-center p-4 rounded-2xl space-y-6">
        <picture className="w-4/5">
          <img src="./certificates/js-certificate.jpeg" alt="js basics" />
        </picture>
        <h4>JavaScript basics</h4>
      </div>
    </>
  );
}

export default function Gallery() {
  return (
    <>
      <div className="w-full h-full bg-gray-800 grid grid-cols-2 gap-6 rounded-[90px] py-28 px-6 content-start text-white">
        <h3 className="col-span-2 py-4 text-center text-5xl">Certificates</h3>
        <ImageGallery />
        <ImageGallery />
        <ImageGallery />
        <ImageGallery />
        <ImageGallery />
      </div>
    </>
  );
}
