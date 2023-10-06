const Button = ({ label, imgUrl }) => {
  return (
    <div>
      <button className="flex justify-center items-center bg-coral-red rounded-full border-red-500 text-white px-7 py-4 gap-2 hover:text-[18px]">
        {label}
        <img
          src={imgUrl}
          alt="arrow-image"
          className="ml-2 rounded-full w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Button;
