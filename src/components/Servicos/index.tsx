import { Cards } from './Cards'

export function Servicos(){
    return(
        <>
            <main className="flex flex-col items-center max-w-7xl w-full mx-auto my-20">
                {/* Title Services */}
                <section className="flex flex-col items-center">
                    <h1 className="font-light font-poppins text-[#52C538]">SERVIÇOS</h1>
                    <span className="font-bold font-poppins text-white text-5xl text-center">
                        Opções personalizadas 
                        <h1 className="text-[#52C538]">
                            para o seu negócio
                        </h1>
                    </span>
                </section>

                {/* Cards Services */}
                <section className="w-full flex gap-6 mt-16">
                    <Cards title='Sites Institucionais'
                        description='Sites modernos e responsivos que apresentam o seu negócio e geram confiança.'
                        icon='SlScreenDesktop' 
                        link='#inicio'
                        item1='Design Profissional'
                        item2='Sofisticado para seu negócio'
                        item3='Responsivo'
                        item4='Claro e Objetivo'
                    />

                    <Cards title='Site + Sistema'
                        description='Cardápio digital e sistema personalizado para o seu negócio alavancar cada vez mais.'
                        icon='HiOutlineShoppingBag' 
                        link=''
                        item1='Site sobre seu negócio'
                        item2='Sistema Integrativo'
                        item3='Painel Administrativo'
                        item4='Gestão em suas mãos'
                    />

                    <Cards title='Aplicativos Mobile'
                        description='Aplicativos personalizados para o seu negócio fluir de forma robusta e eficiente. '
                        icon='SlScreenSmartphone' 
                        link=''
                        item1='Escalável'
                        item2='Aplicativo para dispositivos'
                        item3='Personalização'
                        item4='Para baixar'
                    />
                </section>
            </main>
        </>
    )
}