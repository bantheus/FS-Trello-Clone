const TitleCard = ({ text }: { text: string }) => {
  return (
    <div
      className="w-fit rounded-md bg-gradient-to-r from-cyan-400
       via-sky-500 to-blue-600 p-2 px-4 pb-4 text-3xl text-white shadow-sm
        md:text-6xl"
    >
      {text}
    </div>
  );
};

export { TitleCard };
