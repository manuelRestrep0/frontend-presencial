import React from "react"
import instagramLogo from "public/instagram-logo.svg"
import twitterLogo from "public/twitter-logo.svg"
import YTLogo from "public/youtube-logo.svg"
import whatsappLogo from "public/whatsapp-logo.svg"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="flex justify-center bg-cyan-500">
      <div className="space-y-8 p-4">
        <h2 className="text-3xl font-light text-white">¡Comunicate con nosotros!</h2>
        <div className="flex justify-center space-x-8">
          <Image className="h-12" src={instagramLogo} alt="instagram" width={48} height={48} />
          <Image className="h-12" src={twitterLogo} alt="twitter" width={48} height={48} />
          <Image className="h-12" src={YTLogo} alt="youtube" width={48} height={48} />
          <Image className="h-12" src={whatsappLogo} alt="whatsapp" width={48} height={48} />
        </div>
        <p className="text-center text-white">Copyright &copy; 2024</p>
      </div>
    </footer>
  )
}

export default Footer
