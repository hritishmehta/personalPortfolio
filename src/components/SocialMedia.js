const SocialMedia = ({ image, description, link }) => {
    return (
      <div className="bg-teal-400 rounded shadow-lg flex flex-col items-center p-4 hover:shadow-xl transition-all duration-300">
        <img className="max-h-32 mb-4 hover:scale-105 transition-all duration-300" src={image} alt="Social Media Icon" />
        <a href={link} className="text-base text-white hover:text-black hover:underline hover:text-lg font-roboto">
          {description}
        </a>
      </div>
    );
  };
  
  export default SocialMedia;