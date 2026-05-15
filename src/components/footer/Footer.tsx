import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-white text-red-600 border-t border-red-300">
                
                <div className="container flex flex-col items-center py-8">

                    <p className="text-2xl font-bold">
                        Farmácia | Copyright: {data}
                    </p>

                    <p className="text-xl mt-1">
                        Desenvolvido por Beatriz Braga Silva
                    </p>

                    <p className="text-xl mt-1">
                        Acesse minhas redes sociais
                    </p>

                    <div className="flex gap-4 mt-3">

                        <a 
                            href="https://www.linkedin.com/in/beatriz-braga-silva/" 
                            target="_blank"
                            className="p-2 rounded-full hover:bg-red-100 transition"
                        >
                            <LinkedinLogoIcon 
                                size={36} 
                                weight='bold'
                            />
                        </a>

                        <a 
                            href="https://www.instagram.com/biia.braga" 
                            target="_blank"
                            className="p-2 rounded-full hover:bg-red-100 transition"
                        >
                            <InstagramLogoIcon 
                                size={36} 
                                weight='bold'
                            />
                        </a>

                        <a 
                            href="https://www.facebook.com/biia.braga.16" 
                            target="_blank"
                            className="p-2 rounded-full hover:bg-red-100 transition"
                        >
                            <FacebookLogoIcon 
                                size={36} 
                                weight='bold'
                            />
                        </a>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer