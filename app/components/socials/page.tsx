// app/components/social/SocialIcons.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-gray-600 text-sm md:text-base">
      <a href="#" aria-label="Facebook" className="hover:text-black">
        <FaFacebookF className="h-5 w-5" />
      </a>
      <a href="#" aria-label="Twitter" className="hover:text-black">
        <FaTwitter className="h-5 w-5" />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-black">
        <FaInstagram className="h-5 w-5" />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:text-black">
        <FaLinkedinIn className="h-5 w-5" />
      </a>
    </div>
  );
}