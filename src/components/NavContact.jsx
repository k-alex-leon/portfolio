import { CONTACT_ICONS } from "../constants";

export default function NavContact() {
  return (
    <div className="w-auto h-10 absolute grid grid-cols-3 right-5 top-4 gap-7 place-content-center z-[999]">
      {CONTACT_ICONS.map(({ name, link, icon }, inx) => (
        <a
          key={inx}
          target="_blank"
          href={link}
          aria-label={name}
          className="text-gray-400 text-3xl w-full p-2 hover:text-gray-700 transform transition-all delay-75"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
