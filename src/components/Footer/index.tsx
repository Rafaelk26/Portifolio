export function Footer(){

    const year = new Date();

    return(
        <>
            <main className="flex max-w-7xl w-full gap-4 mx-auto justify-center my-8
            md:my-6">
                <span className="text-xs font-poppins font-light text-center
                md:text-base">RK Developer © {year.getFullYear()} - Todos os Direitos Reservados</span>
            </main>
        </>
    )
}