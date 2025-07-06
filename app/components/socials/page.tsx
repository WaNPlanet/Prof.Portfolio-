
import { FaLinkedinIn, FaYoutube , FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-gray-600 text-sm md:text-base">
      <a href="https://www.youtube.com/@Planet.speaks" target="_blank" aria-label="YouTube" className="hover:text-black">
        <FaYoutube className="h-5 w-5" />
      </a>
      <a href="https://www.linkedin.com/in/ofosuhene-kyere-267076246" target="_blank" aria-label="LinkedIn" className="hover:text-black">
        <FaLinkedinIn className="h-5 w-5" />
      </a>
  <a href=" https://github.com/WaNPlanet" target="_blank" aria-label="Github" className="hover:text-black">
        <FaGithub className="h-5 w-5" />
      </a>
     
    </div>
  );
}