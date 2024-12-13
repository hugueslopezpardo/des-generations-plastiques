
export default function Footer() {
    return (
        <>
            <footer className={'section relative bg-[#F2EDE7]'}>
                <div className={'bg-[#5BBB7D] h-3/4 w-full pt-32 pb-12 px-12'}>
                    <div className={'grid grid-cols-1'}>
                        <div className={'text-center'}>
                            <h2 className={'text-black text-5xl font-bold'}>Contactez-nous</h2>
                            <p className={'text-lg mt-4'}>Vous avez une question ?</p>
                            <ul className={'flex justify-center items-center gap-4 mt-4'}>
                                <li>
                                    Téléphone : 02 31 06 60 50
                                </li>
                                <li>
                                    Email : arioual@ledome.info
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={'h-[200px] w-full bg-white flex justify-center items-center gap-16'}>
                    <img className={'w-64'} src="assets/images/logo_saps_v1-1024x445.png.webp" alt={'Logo'}/>
                    <img className={'w-64'} src="assets/images/logos-Marianne-UNICAEN-1200x396.jpg" alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/Logo-ABTE-2022.jpg" alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/logo-le-dome-530.jpg"  alt={'Logo'}/>
                    <img className={'w-40'} src="assets/images/logo_r.normandie-portrait-cmjn_0.jpg" alt={'Logo'}/>
                </div>

                <div className={'bg-[#F2EDE7] w-full pt-12 pb-12 px-12'}>
                    <div className={'flex justify-center items-center'}>
                        <img className={'w-24'} src="assets/images/logo-orange.png" alt={"Logo"}/>
                    </div>
                    <div className={'flex justify-center items-center gap-8 mt-8'}>
                        <a href={'#'}>Mentions légales</a>
                        <a href={'#'}>Politique de confidentialité</a>
                        <a href={'#'}>Cookies</a>
                    </div>
                </div>

            </footer>
        </>
    )
}
