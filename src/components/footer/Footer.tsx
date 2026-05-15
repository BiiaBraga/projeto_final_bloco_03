import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-white text-red-600">
                <div className="container flex flex-col items-center py-8">
                    <p className="text-xl font-bold">
                        Farmácia | Copyright: {data}
                    </p>

                    <p className="text-lg">
                        Desenvolvido por Beatriz Braga Silva
                    </p>

                    <p className="text-lg">
                        Acesse minhas redes sociais
                    </p>

                    <div className="flex gap-4 mt-2">
                        <LinkedinLogoIcon size={40} weight="bold" className="hover:bg-red-100 rounded-full p-1 cursor-pointer transition" />
                        <InstagramLogoIcon size={40} weight="bold" className="hover:bg-red-100 rounded-full p-1 cursor-pointer transition" />
                        <FacebookLogoIcon size={40} weight="bold" className="hover:bg-red-100 rounded-full p-1 cursor-pointer transition" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer