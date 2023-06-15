const SocialMedia = ({ image, description, link }) => {
    return (
      <div className="bg-teal-400 rounded shadow-lg flex flex-col items-center p-4 hover:scale-105 transition-transform sm:mr-4 sm:ml-4 md:mr-16 md:ml-16 lg:mr-4 lg:ml-4 sm:h-32 md:h-40 lg:h-48">
        <img className="p-2 h-16 md:h-24 lg:h-32 mb-2 hover:scale-105 transition-all duration-300" src={image} alt="Social Media Icon" />
        <a href={link} className="text-md md:text-xl text-white hover:text-black hover:underline hover:text-lg font-roboto">
          {description}
        </a>
      </div>
    );
  };
  
  export default SocialMedia;