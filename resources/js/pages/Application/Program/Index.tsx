'use client';

import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import Footer from "@/components/app/Footer/Footer";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

/**
 * Program Page
 * @constructor
 */
export default function ProgramPage() {

    const steps = [{
        title: 'Étape 1', subtitle: 'Le lancement', image: 'assets/images/pages/program/step-1.png'
    }, {
        title: 'Étape 2', subtitle: 'Le commencement', image: 'assets/images/pages/program/step-2.png'
    }, {
        title: 'Étape 3', subtitle: 'La construction', image: 'assets/images/pages/program/step-3.png'
    }, {
        title: 'Étape 4', subtitle: 'La finalisation', image: 'assets/images/pages/program/step-4.png'
    }];

    const [currentStep, setCurrentStep] = React.useState(0);

    return (<AuthenticatedLayout title={'Le programme'}>
            <ReactFullpage
                licenseKey={'YOUR_KEY'}
                scrollingSpeed={1000}
                credits={{}}
                navigation={true}
                verticalCentered={false}
                scrollOverflow={true}
                fitToSection={false}
                render={({state, fullpageApi}) => {
                    return (<ReactFullpage.Wrapper>

                            {/* Section 1 */}
                            <section className={'section bg-[#60FFA7] min-h-screen'}>
                                <article className={'min-h-screen container mx-auto'}>
                                    <div className={'grid grid-cols-1 md:grid-cols-2'}>
                                        <div className={'h-screen w-full flex flex-col justify-center px-4 space-y-4'}>
                                            <h1 className={'text-4xl md:text-5xl text-center md:text-left font-saps-regular'}>
                                                Le programme
                                            </h1>
                                            <p className={'text-lg text-justify px-16 md:px-0'}>
                                                Lancé à la rentrée 2023 par Le Dôme et le laboratoire Aliments,
                                                bioprocédés, toxicologie et environnements (ABTE), Des générations
                                                plastiques est un programme de recherche participative qui a pour
                                                objectif de développer, d’ici à 2026, des alternatives susceptibles de
                                                réduire l’empreinte écologique de notre consommation de plastiques.
                                            </p>
                                            <img src={"assets/images/Fleche_jaune.png"}
                                                 className={"h-16 w-16 mx-auto z-50 hover:scale-105 hover:cursor-pointer duration-300 ease-in"}
                                                 onClick={() => {
                                                     fullpageApi.moveSectionDown()
                                                 }}/>
                                        </div>
                                        <div className={'md:h-screen w-full flex flex-col justify-center'}>
                                            <img src={'assets/images/2-bis.png'} alt={'Cotes des rives de l\'orne'}
                                                 className={'hidden md:block cover'}/>
                                        </div>
                                    </div>
                                </article>
                            </section>

                            {/* Section 2 */}
                            <section className={"section bg-[#FFFFFF]"}>
                                <article
                                    className={"mx-auto h-screen flex justify-center items-center flex-col container py-16 space-y-24"}>
                                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                        <div className={'flex justify-center items-center'}>
                                            <img src='assets/images/pages/program/croissance-prod-plast.png'
                                                 alt='Croissance de la production de plastique'
                                                 className={'hidden md:block w-[80%] rounded-full mx-auto'}/>
                                        </div>
                                        <div className={'space-y-4'}>
                                            <h1 className={"text-5xl text-left font-saps-regular"}>
                                                Partout où on le cherche, on le trouve !
                                            </h1>
                                            <p className={'text-md text-justify'}>
                                                Les scientifiques s’inquiètent de plus en plus de la présence du
                                                plastique,
                                                sous toutes ses formes et dans tous les milieux : mers et océans, sols,
                                                air,
                                                jusque dans les organes et tissus des organismes vivants.
                                            </p>
                                            <p className={'text-md text-justify'}>
                                                Les premières matières plastiques artificielles sont apparues au milieu
                                                du
                                                19ème siècle et c’est seulement au milieu du 20ème siècle que la
                                                production
                                                s’est intensifiée et a connu une croissance exponentielle passant de 2
                                                millions de tonnes en 1950 à plus de 450 millions de tonnes annuelles
                                                aujourd'hui.
                                            </p>
                                            <p className={'text-md text-justify'}>
                                                Le Dôme a développé une expertise et met en œuvre des méthodes de Living
                                                Lab
                                                pour faire interagir des communautés professionnelles différentes
                                                (chercheurs, créateurs numériques, industriels, artistes, agents des
                                                services publics... ) entre elles et avec le public.
                                            </p>
                                            <p className={'text-md text-justify'}>
                                                Ces dernières années, nous assistons à l’émergence de stratégies, de
                                                concepts, d’idées ou de formes d’organisation qui se proposent de
                                                renforcer
                                                le rôle des individus dans la réponse à la diversité de leurs besoins.
                                            </p>
                                            <p className={'text-md text-justify'}>
                                                Le recherche avance tant sur la connaissance du problème que sur
                                                l’émergence
                                                de solutions mais les prévisions de croissance de la production de
                                                plastiques ne sont pas rassurantes : un rythme annuel qui poursuit son
                                                accélération, promettant une production multipliée par trois d’ici 30
                                                ans,
                                                soit des prévisions bien au delà du milliard de tonnes de plastiques
                                                produites chaque année dès 2050.
                                            </p>
                                            <p className={'text-md text-justify'}>
                                                D’autre part, la très lente décomposition du plastique dans notre
                                                environnement n’a pas encore révélé tout son potentiel ! Que
                                                deviendront-ils
                                                dans cent ans, dans deux cents ans ?
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </section>

                            {/* Section 4 */}
                            <section className={"section bg-[#F2EDE7]"}>
                                <article
                                    className={"mx-auto min-h-screen flex justify-center items-center flex-col container px-12 md:px-0 py-16 space-y-12"}>
                                    <div className={'space-y-4 text-center'}>
                                        <h1 className={"text-5xl font-saps-regular"}>
                                            La genèse du programme
                                        </h1>
                                        <p className={'text-md text-justify'}>
                                            Près de trois cents personnes, venues de tout horizon, ont participé au
                                            processus de co-construction du protocole qui vous est proposé aujourd’hui.
                                        </p>
                                        <p className={'text-md text-justify'}>
                                            Un processus structuré en quatre temps autours de séries d’ateliers ouverts
                                            à toutes et à tous, où les publics ont co-construit ce protocole, étape par
                                            étape, avec l’aide des médiateurs et médiatrices du Dôme et en présence d’un
                                            chercheur de l’ABTE.
                                        </p>
                                    </div>
                                    <img src='assets/images/pages/program/protocole.png' alt='Le protocole'
                                         className={'md:w-[60%] mx-auto shadow-lg'}/>
                                </article>
                            </section>

                            {/* Section 5 */}
                            <section className={"section bg-[#FFFFFF]"}>
                                <article className={"mx-auto h-screen mt-12 container px-12 md:px-0 py-16 space-y-12"}>

                                    <div className={'grid grid-cols-1 md:grid-cols-4 gap-8'}>
                                        {steps.map((step, index) => (<div key={index}
                                                                          className={`p-2 text-center rounded-lg hover:scale-105 cursor-pointer duration-300 ease-in ${currentStep === index ? 'bg-[#000] text-white' : 'bg-white text-black'}`}
                                                                          onClick={() => setCurrentStep(index)}>
                                                <h1 className={'text-md font-saps-regular'}>{step.title}</h1>
                                                <p className={'text-md text-center'}>{step.subtitle}</p>
                                            </div>))}
                                    </div>

                                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                                        {/* Content */}
                                        <div className={'space-y-4'}>
                                            {currentStep === 0 && (<>
                                                    <h1 className={'text-5xl font-saps-regular'}>
                                                        Le lancement
                                                    </h1>
                                                    <h2 className={'text-3xl'}>
                                                        Rencontre : Bio-plastique, bio-fantastique : le vrai, le faux,
                                                        le flou
                                                    </h2>
                                                    <h3 className={'text-2xl'}>
                                                        Octobre 2023
                                                    </h3>
                                                    <p className={'text-md text-justify'}>
                                                        Le programme Des générations plastiques a débuté le 17 octobre
                                                        avec une rencontre “le vrai, le faux, le flou” pour établir une
                                                        cartographie des controverses sur les plastiques. Tout au long
                                                        de la soirée, le public a questionné et échangé avec les invité·e·s
                                                        sur les bioplastiques, les matériaux biosourcés, leurs usages et les
                                                        avantages et inconvénients de ces alternatives aux plastiques
                                                        traditionnels.

                                                    </p>
                                                    <p className={'text-md text-justify'}>
                                                        Le lancement s’est poursuivi le lendemain avec un atelier participatif proposé par le CEDRE (Centre de documentation de recherche et d’expérimentations sur les pollutions accidentelles des eaux) pour quantifier et analyser les types de déchets retrouvés sur les rives de l’Orne à Caen.
                                                    </p>
                                                </>)}
                                            {currentStep === 1 && (<>
                                                    <h1 className={'text-5xl font-saps-regular'}>
                                                        Le commencement
                                                    </h1>
                                                    <h2 className={'text-3xl'}>
                                                        En quêtes de biodéchets - une série de 3 ateliers participatifs
                                                    </h2>
                                                    <h3 className={'text-2xl'}>
                                                        Novembre à décembre 2023
                                                    </h3>
                                                    <p className={'text-md text-justify'}>
                                                        La création du protocole de science participatives a commencé
                                                        par
                                                        une série de trois ateliers de co-création. Les publics ont été
                                                        invité·e·s à réfléchir à des usages pour les plastiques
                                                        biosourcés
                                                        et biodégradables étudiés par le laboratoire ABTE (les PHA).
                                                    </p>
                                                    <p className={'text-md text-justify'}>
                                                        Quels objets plastiques sont indispensables à notre quotidien ?
                                                        Dans
                                                        quelles situations pouvons-nous utiliser les plastiques
                                                        biosourcés ? Sont-ils réellement la solution ? A la suite des
                                                        échanges, les
                                                        personnes participantes ont imaginé des hypothèses à tester dans
                                                        un
                                                        protocole de recherche scientifique pour faire avancer les
                                                        connaissances sur la pollution plastique.
                                                    </p>
                                                </>)}
                                            {currentStep === 2 && (<>
                                                    <h1 className={'text-5xl font-saps-regular'}>
                                                        La construction
                                                    </h1>
                                                    <h2 className={'text-3xl'}>
                                                        Prototypes en bioplastique
                                                    </h2>
                                                    <h3 className={'text-2xl'}>
                                                        Avril 2024
                                                    </h3>
                                                    <p className={'text-md text-justify'}>
                                                        A l’occasion du TURFU festival, trois ateliers ont invité les
                                                        publics à écrire des protocoles de recherche pour tester les
                                                        hypothèses imaginées lors des précédents ateliers. Les
                                                        réflexions se sont portées sur des expériences pour mesurer la
                                                        biodégradabilité
                                                        des bioplastiques PHA et sur un prototype du kit plastique à
                                                        enfouir.
                                                    </p>
                                                    <p className={'text-md text-justify'}>
                                                        D’autres participant·e·s ont imaginé des questionnaires
                                                        sur nos comportements de consommation et notre rapport au
                                                        plastique.
                                                    </p>
                                                </>)}

                                            {currentStep === 3 && (<>
                                                    <h1 className={'text-5xl font-saps-regular'}>
                                                        La finalisation
                                                    </h1>
                                                    <h2 className={'text-3xl'}>
                                                        Bioplastiques : c’est quoi la consigne
                                                    </h2>
                                                    <h3 className={'text-2xl'}>
                                                        Mai à juillet 2024
                                                    </h3>
                                                    <p className={'text-md text-justify'}>
                                                        A la suite du Turfu festival, deux ateliers ont donné la parole
                                                        aux
                                                        participant·e·s pour faire évoluer les protocoles de recherche.
                                                        Comment enterrer le kit ? Quels outils utiliser ? Les publics
                                                        ont
                                                        également testé le questionnaire sur les usages du plastique et
                                                        fait
                                                        un retour sur le design de la plateforme.
                                                        Au final, après quelques ajustements techniques, ce processus
                                                        participatif a généré le protocole que nous vous proposons
                                                        aujourd’hui.
                                                    </p>
                                                    <p className={'text-md text-justify'}>
                                                        Le lancement s’est poursuivi le lendemain avec un atelier participatif proposé par le CEDRE (Centre de documentation de recherche et d’expérimentations sur les pollutions accidentelles des eaux) pour quantifier et analyser les types de déchets
                                                        retrouvés sur les rives de l’Orne à Caen.
                                                    </p>
                                                </>)}
                                        </div>

                                        {/* Images */}
                                        <div className={'flex justify-center items-center'}>
                                            {steps.map((step, index) => (
                                                <img key={index} src={step.image} alt={step.title}
                                                     className={`p-4 w-[70%] rounded-full ${currentStep === index ? 'block' : 'hidden'}`}/>))}
                                        </div>

                                    </div>
                                </article>
                            </section>
                            <Footer/>

                        </ReactFullpage.Wrapper>);
                }}/>
        </AuthenticatedLayout>);
}
