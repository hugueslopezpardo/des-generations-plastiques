'use client';

import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Footer from "@/components/app/Footer/Footer";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {Link} from "@inertiajs/react";

/**
 * Participate Page
 * @constructor
 */
export default function ParticipatePage() {
    return (
        <AuthenticatedLayout title={'Participer'}>
            <ReactFullpage
                licenseKey={'YOUR_KEY'}
                scrollingSpeed={1000}
                credits={{}}
                navigation={true}
                verticalCentered={false}
                scrollOverflow={true}
                fitToSection={false}
                render={({state, fullpageApi}) => {
                    return (
                        <ReactFullpage.Wrapper>
                        <section className={'section bg-[#F7B501] min-h-screen'}>
                            <article className={'min-h-screen container mx-auto'}>
                                <div className={'grid grid-cols-1 md:grid-cols-2'}>
                                    <div className={'h-screen w-full flex flex-col justify-center px-4 space-y-4'}>
                                    <h1 className={'text-4xl md:text-5xl text-center md:text-left font-saps-regular'}>
                                    Participer
                                        </h1>
                                        <p className={'text-lg text-justify px-16 md:px-0'}>
                                        Bienvenue sur la page de participation, un espace sur lequel
                                            vous trouverez les réponses à la plupart des questions que
                                            vous vous posez sur la façon de vous inscrire, de commander
                                            (gratuitement) un Kit et d’accéder aux questionnaires. Vous
                                            y trouverez également un aperçu synthétique du protocole
                                            expérimental et des différents outils de participation ainsi
                                            que des éléments plus précis, tels que la notice qui
                                            accompagne le Kit, des tutos pour l’exposition des
                                            échantillons de plastiques en milieu naturel et quelques
                                            autres informations.
                                        </p>
                                        <img src={"assets/images/fleche_rose.png"} className={"h-16 w-16 mx-auto z-50 hover:scale-105 hover:cursor-pointer duration-300 ease-in"} onClick={() => {fullpageApi.moveSectionDown()}} />

                                    </div>
                                    <div className={'md:h-screen w-full flex flex-col justify-center'}>
                                            <img src={'assets/images/2-bis.png'} alt={'Cotes des rives de l\'orne'} className={'hidden md:block cover'}/>
                                        </div>
                                </div>
                            </article>
                        </section>



                        {/* Section 2 */}
                        <section className={"section bg-[#F2EDE7]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-24 space-y-24"}>
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0 items-center h-full"}>
                                    <div className={'flex justify-center items-center'}>
                                        <img src='assets/images/pages/participate/joel-julie.png' alt='Joël et Julie dans un atelier' className={'md:block w-[80%] rounded-full mx-auto'}/>
                                    </div>
                                    <div className={'space-y-4'}>
                                        <h1 className={"text-5xl text-left font-saps-regular"}>
                                            Un protocole co-construit par près de 300 personnes
                                        </h1>
                                        <p className={'text-md text-justify'}>
                                            Près de trois cents personnes aux profils très divers (jeunes, moins
                                            jeunes,
                                            femmes, hommes, salarié·e·s, étudiant·e·s, personnes sans emploi,
                                            artisan·e·s, agriculteurs·trices…), ont déjà participé à ce programme,
                                            soit
                                            en prenant part à une conférence participative, à un atelier de
                                            co-conception ou de co-prototypage ou à l’occasion d’une visite de
                                            l’Espace
                                            découverte Des générations plastiques, d’un échange sur les pollutions
                                            plastiques, d’un atelier de caractérisation des déchets plastiques
                                            échoués
                                            sur les rives de l’Orne…
                                        </p>
                                        <p className={'text-md text-justify'}>
                                            Le protocole que nous vous présentons plus en détail sur cette page est
                                            le fruit de ces premières participations.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>

                        {/* Section 3 */}
                        <section className={"section bg-[#FFFFFF]"}>
                            <article className={"mx-auto min-h-screen container py-24 space-y-24 flex justify-center items-center flex-col"}>
                                <div className={'space-y-4'}>
                                    <h1 className={"text-5xl text-center font-saps-regular"}>
                                        Découvrez le protocole
                                    </h1>
                                    <p className={"text-center text-md"}>
                                        Nous nous concentrons ici sur la participation au protocole de science participative mais d’autres façons de participer s’offriront à celles et ceux qui le souhaitent durant tout le programme.
                                    </p>
                                </div>
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                    <div className={'space-y-8'}>
                                        <img src='assets/images/pages/welcome/section-2-img-2.png' alt='Le protocole' className={'h-72 w-72 rounded-full bg-gray-200 mx-auto'}/>
                                        <h2 className={"text-2xl text-center font-saps-regular"}>
                                            Un test de dégradation de PHA
                                        </h2>
                                        <p className={"text-center"}>
                                            Les plastiques dits “biodégradables” le sont-ils vraiment ? Aidez-nous à
                                            le découvrir en enfouissant ou exposant votre kit dans votre jardin, sur
                                            votre balcon voire à votre fenêtre.

                                        </p>
                                    </div>
                                    <div className={'space-y-8'}>
                                        <img src='assets/images/pages/welcome/section-2-img-3.png' alt='Le protocole' className={'h-72 w-72 rounded-full bg-gray-200 mx-auto'}/>
                                        <h2 className={"text-2xl text-center font-saps-regular"}>
                                            L’enquête sur nos consommations plastiques
                                        </h2>
                                        <p className={'text-center'}>
                                            Dès les premiers ateliers de co-problématisation, les plublics ont
                                            souhaité
                                            placer la réduction de la production de plastiques au premier plan.
                                            Saurez-vous
                                            relever le défi ?
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>

                        {/* Section 4 */}
                        <section className={"section bg-[#F2EDE7]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container px-12 md:px-0 py-24 space-y-12"}>
                                <div className={'space-y-4 text-center'}>
                                    <h1 className={"text-5xl font-saps-regular"}>
                                        Une expérience de 4 mois pour découvrir les plastiques sous un <br/>
                                        nouvel angle
                                    </h1>
                                </div>
                                <img src='assets/images/pages/program/protocole.png' alt='Le protocole' className={'md:w-[60%] mx-auto border-2 border-white shadow-lg'}/>
                            </article>
                        </section>

                        {/* Section 5 */}
                        <section className={"section bg-[#5BBB7D]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container px-12 md:px-0 py-24 space-y-12"}>
                                <div className={'space-y-4 text-center'}>
                                    <div className={'space-y-4'}>
                                        <h1 className={"text-5xl font-saps-regular"}>
                                            L’exposition des PHA dans un milieu naturel
                                        </h1>
                                        <h2 className={"text-3xl font-saps-regular"}>
                                            Les plastiques dits “biodégradables” le sont-ils vraiment ?
                                        </h2>
                                    </div>
                                    <p className={"text-justify text-md"}>
                                        Cette question s’est imposée d’emblée à nos publics lorsque nous leur avons
                                        présenté les travaux de recherche du laboratoire ABTE sur les PHA
                                        (polyhydroxyalcanoate). Mais comment tester cette biodégradabilité dans des
                                        milieux naturels très variés ? Certes, des études scientifiques très sérieuses
                                        (voir la page ressources) montrent que les PHA sont biodégradables dans de très
                                        nombreuses conditions, mais cette biodégradabilité a-t-elle été testée dans une
                                        forêt de pin du centre de la France en plein été ? au fond d’un lac alpin à 3°C
                                        ? sur une pelouse à Evreux lors d’un hiver sec et rigoureux ? … Car les déchets
                                        plastiques sont partout, un plastique biodégradable doit donc pouvoir se
                                        dégrader dans n’importe quel milieu naturel.
                                    </p>
                                    <p className={"text-justify text-md"}>
                                        C’est cette feuille de route que les participant·e·s des ateliers En Quête de Biodéchets ont donné à celles et ceux qui ont eu la lourde tâche de construire lors des cinq ateliers qui ont suivi, le protocole expérimental qui vous est soumis ici.
                                    </p>
                                    <p className={"text-justify font-bold text-md"}>
                                        Une expérience de 4 mois qui a pour objectif de tester la dégradabilité de bioplastiques dans des environnements variés.                                    </p>
                                </div>
                            </article>
                        </section>

                        {/* Section 6 */}
                        <section className={"section bg-[#FFFFFF]"}>
                            <article className={"mx-auto min-h-screen container py-24 space-y-24"}>
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0 h-full"}>
                                    <div className={'space-y-8 flex justify-center flex-col'}>
                                        <h1 className={"text-4xl text-left font-saps-regular"}>
                                            Étape 1
                                        </h1>
                                        <h2 className={"text-3xl text-left font-saps-regular"}>
                                            Vous vous incrivez et vous choisissez de recevoir le kit par la poste ou
                                            de le retirer au Dôme
                                        </h2>
                                        <div className={'space-y-4'}>
                                            <h3 className={'text-2xl'}>
                                                Le kit comprend :
                                            </h3>

                                            <ul className={'list-disc list-inside'}>
                                                <li>Un cadre à exposer ou enfouir</li>
                                                <li>Une notice d’utilisation</li>
                                                <li>Quatre "clous" en PLA (pour exposition sur le sol, les clous à partir de morceaux de fil de PLA)</li>
                                                <li>Une ficelle de lin</li>
                                                <li>Une feuille de prise de photo avec repères et règle millimétrée adaptée à chaque cas (enfouissement dans la terre ou du compost, cloué sur le sol, accroché à la fenêtre)</li>
                                                <li>Une enveloppe craft avec adresse du Dôme pour envoyer le kit</li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className={'flex justify-center items-center'}>
                                        <img src='assets/images/pages/welcome/section-2-img-2.png' alt='Joël et Julie dans un atelier' className={'md:block w-[80%] rounded-full mx-auto'}/>
                                    </div>
                                </div>
                            </article>
                        </section>

                        {/* Section 7 */}
                        <section className={"section bg-[#FFFFFF]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-16 space-y-8"}>
                                <div className={'space-y-4'}>
                                    <h1 className={"text-5xl text-center font-saps-regular"}>
                                        Étape 2
                                    </h1>
                                    <h2 className={"text-3xl text-center font-saps-regular"}>
                                        Vous assemblez le cadre, en suivant notre pas-à-pas
                                    </h2>
                                </div>
                                <div className={"space-y-4"}>
                                    <div className={'flex justify-center items-center'}>
                                        <img className={'w-[80%] md:w-[40%] bg-gray-200 mx-auto'} src='assets/images/pages/participate/cadre.jpeg' alt='Le kit'/>
                                    </div>
                                    <Card className={'w-[80%] md:w-[50%] mx-auto'}>
                                        <CardHeader>
                                            <CardDescription className={'text-primary'}>
                                                Les échantillons de bioplastiques prennent la forme de
                                                bandelettes,
                                                fixées sur
                                                un cadre qui sera enterré, chaque élément a été
                                                soigneusement pensé
                                                pour
                                                comparé
                                                plusieurs facteurs dans la dégradation du plastiques.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardDescription className={'text-primary'}>
                                                <Link href={'#'} className={'underline'}>
                                                    En savoir plus
                                                </Link>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </article>
                        </section>

                        {/* Section 8 */}
                        <section className={"section bg-[#FFFFFF]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-16 space-y-24"}>
                                <div className={'space-y-4'}>
                                    <h1 className={"text-5xl text-center font-saps-regular"}>
                                        Étape 3
                                    </h1>
                                    <h2 className={"text-3xl text-center font-saps-regular"}>
                                        Vous choisissez la méthode d’installation de votre kit
                                    </h2>
                                </div>
                                <div className={"grid grid-cols-1 md:grid-cols-3 gap-16 p-4 md:p-0"}>
                                    <div className={'space-y-8'}>
                                        <img src='assets/images/pages/participate/enfouie.png' alt='Le protocole 1' className={'h-72 w-72 rounded-full mx-auto'}/>
                                        <h2 className={"text-2xl text-center font-saps-regular"}>
                                            Enfoui dans son jardin ou sa jardinière </h2>
                                        <p className={'text-justify text-md'}>
                                            Dans une jardinière en plein air (qui sera arrosée par la pluie) ou dans
                                            votre jardin recouvert de terre et ou de compost.
                                        </p>
                                    </div>
                                    <div className={'space-y-8'}>
                                        <img src='assets/images/pages/participate/surface.png' alt='Le protocole 1' className={'h-72 w-72 rounded-full mx-auto'}/>
                                        <h2 className={"text-2xl text-center font-saps-regular"}>
                                            Déposé (et cloué) à la surface du sol </h2>
                                        <p className={'text-justify text-md'}>
                                            Une option idéale si vous n'avez pas de matériel ou si votre sol est
                                            trop dur, vous pouvez clouer votre cadre à la surface du sol.
                                        </p>
                                    </div>
                                    <div className={'space-y-8'}>
                                        <img src='assets/images/pages/participate/lumiere.jpg' alt='Le protocole 1' className={'h-72 w-72 rounded-full mx-auto'}/>
                                        <h2 className={"text-2xl text-center font-saps-regular"}>
                                            Suspendu à une fenêtre
                                        </h2>
                                        <p className={'text-justify text-md'}>
                                            La lumière du soleil participe-t-elle à la dégradation des plastiques du
                                            kit ?
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex justify-center flex-col space-y-2"}>
                                    <p className={"text-center text-md font-bold"}>
                                        À vous de choisir l'une de ces possibilités !
                                    </p>
                                    <p className={"text-center text-md"}>
                                        L'enfouissement est le plus riche en enseignement, mais toutes les options
                                        sont possibles. Avant de choisir, n'hésitez pas à prendre le temps de
                                        regarder
                                        nos <a href={'#'} className={'underline'}>tutoriels</a> pour vous aider à
                                        choisir.
                                    </p>
                                </div>
                            </article>
                        </section>

                        {/* Section 9 */}
                        <section className={"section bg-[#FFFFFF]"}>
                            <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-24 space-y-24"}>
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                    <div className={'flex justify-center items-center'}>
                                        <img src='assets/images/pages/participate/joel-julie.png' alt='Joël et Julie dans un atelier' className={'md:block w-[80%] rounded-full mx-auto'}/>
                                    </div>
                                    <div className={'space-y-8 flex justify-center flex-col'}>
                                        <h1 className={"text-4xl text-left font-saps-regular"}>
                                            Étape 4
                                        </h1>
                                        <h2 className={"text-3xl text-left font-saps-regular"}>
                                            Déterrer ou relever vos cadre, et prendre une photo
                                        </h2>
                                        <div className={'space-y-4'}>
                                            <Card>
                                                <CardHeader>
                                                    <CardDescription className={'text-primary'}>
                                                        Avec quelques précautions à retrouver sur la notice, relevez le cadre, prenez le temps d'observer comment les plastiques se sont dégradés et prenez une photo en utilisant le gabarit fourni dans le kit.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className={'text-primary font-bold'}>
                                                        Le petit plus de la recherche : envoyez votre échantillon au Dôme. Les scientifiques de l'ABTE pourront l'analyser afin d'affiner les conclusions de la recherche.
                                                    </CardDescription>
                                                </CardContent>
                                                <CardFooter>
                                                    <Link href={route('login')}>
                                                        <Button>
                                                            Participer au protocole {' '} <ArrowRight size={16} className={'ml-2'} />
                                                        </Button>
                                                    </Link>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <Footer />

                    </ReactFullpage.Wrapper>
                    );
                }}
            />
        </AuthenticatedLayout>
    );
}

