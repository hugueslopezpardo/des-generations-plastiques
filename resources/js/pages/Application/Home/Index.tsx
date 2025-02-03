'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from "@/components/app/Navbar/Navbar";
import Footer from "@/components/app/Footer/Footer";
import { Link } from 'lucide-react';
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {Button} from "@/components/ui/button";

/**
 * WelcomePage component
 * @param props - The component props
 * @constructor
 */
const WelcomePage = () => {
  return (
      <AuthenticatedLayout title={'Accueil'}>
        <ReactFullpage
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000}
            credits = {{}}
            navigation={true}
            verticalCentered = {false}
            scrollOverflow={true}
            fitToSection={false}
            render={({state, fullpageApi}) => {
              return (
                  <ReactFullpage.Wrapper>
                    <>
                      {/* Section 1 */}
                      <section className={"section bg-[#5BBB7D]"}>
                        <article className={"mx-auto h-screen flex justify-center items-center flex-col container px-16 md:px-0 relative"}>
                          <img src={"assets/images/DGP_Logo_Accueil.png"} className={"z-50 w-[50%] mb-4"}/>
                          <p className={"text-2xl md:text-4xl font-bold text-white p-2 rounded-lg text-center z-50  mb-4"}>
                            Un programme de recherche et de science participatives sur les usages et la
                            dégradation des plastiques et bioplastiques
                          </p>
                        <img src={"assets/images/Fleche_jaune.png"} className={"h-24 w-24 z-50 hover:scale-105 hover:cursor-pointer duration-300 ease-in"} onClick={() => {fullpageApi.moveSectionDown()}} />

                          <div className={"h-screen w-screen absolute z-0"} style={{
                            backgroundImage: "url(assets/images/1.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}/>

                          <div className={"h-screen w-screen absolute z-0"} style={{
                            backgroundImage: "url(assets/images/2.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "top"
                          }}/>

                      <div className={"h-screen w-screen absolute z-0"} style={{
                            backgroundImage: "url(assets/images/3.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "top"
                          }}/>
                        </article>
                      </section>

                      {/* Section 2 */}
                      <section className={"section bg-[#FFFFFF]"}>
                        <article
                            className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-16 space-y-12"}>
                          <h1 className={"text-5xl text-center font-saps-regular"}>
                            Les objectifs du programme
                          </h1>
                          <div className={"grid grid-cols-1 md:grid-cols-3 gap-16 p-4 md:p-0"}>
                            <div className={'space-y-8'}>
                              <img src="/assets/images/pages/welcome/section-2-img-1.png"
                                   className={'h-64 w-64 rounded-full bg-gray-200 mx-auto'}/>
                              <h2 className={"text-2xl text-center font-saps-regular"}>
                                Étudier les enjeux de la pollution plastique
                              </h2>
                              <p className={'text-justify text-md'}>
                                Cette recherche participative vise à étudier les enjeux de la pollution
                                plastique tout en contribuant à sa réduction. Elle est axée sur les
                                comportements de consommation et sur l’étude de nouveaux plastiques
                                biosourcés et biodégradables qui pourraient constituer une solution durable
                                et soutenable pour les plastiques indispensables.
                              </p>
                            </div>
                            <div className={'space-y-8'}>
                              <img src="/assets/images/pages/welcome/section-2-img-2.png"
                                   className={'h-64 w-64 rounded-full bg-gray-200 mx-auto'}/>
                              <h2 className={"text-2xl text-center font-saps-regular"}>
                                Étudier la dégradation de bioplastiques
                              </h2>
                              <p className={'text-justify text-md'}>
                                Fournir au laboratoire ABTE des indications sur la dégradation des matériaux
                                biosourcés qu’ils étudient et produisent (PHA et PHA-lin) dans des
                                environnements très variés qui permettront d’aiguiller, par la suite, les
                                recherches à venir. Ces résultats fourniront des données “hors labo” pour de
                                futures recherches à l’ABTE ou ailleurs car les données seront accessibles
                                librement pour toute structure qui souhaiterait les utiliser.
                              </p>
                            </div>
                            <div className={'space-y-8'}>
                              <img src="/assets/images/pages/welcome/section-2-img-3.png"
                                   className={'h-64 w-64 rounded-full bg-gray-200 mx-auto'}/>
                              <h2 className={"text-2xl text-center font-saps-regular"}>
                                Cibler des usages pour les PHA
                              </h2>
                              <p className={'text-justify text-md'}>
                                Identifier des objets plastiques indispensables à notre quotidien, à
                                réaliser en priorité en plastique biosourcé et biodégradable en milieu
                                naturel. Le PHA ayant déjà fait ses preuves, notamment dans le domaine
                                médical ou dans celui des emballages, il semble intéressant de pouvoir
                                fournir aux laboratoires de recherche mais également aux industriels, des
                                usages à prioriser pour le développement de ces nouveaux matériaux.
                              </p>

                            </div>
                          </div>
                        </article>
                      </section>

                      {/* Section 3
                      <section className={"section bg-[#F18BAF]"}>
                        <article className={"mx-auto min-h-screen container py-16 space-y-24"}>

                        </article>
                      </section>

                      {/* Section 4
                      <section className={"section bg-[#F7B501]"}>
                        <article className={"mx-auto min-h-screen container py-16 space-y-24"}>

                        </article>
                      </section>
                      */}

                      {/* Section 5 */}
                      <section className={"section bg-[#FFFFFF]"}>
                        <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-16 space-y-24"}>
                          <div className={'space-y-2'}>
                            <h1 className={"text-5xl md:text-7xl text-center font-saps-regular"}>
                              Les plastiques
                            </h1>
                            <h2 className={"text-4xl text-center font-saps-regular"}>
                              Observatoire et ressources
                            </h2>
                          </div>
                          <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0'}>
                            <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                              <img src="/assets/images/pages/welcome/media-map.png" alt="Carte des participants" className="md:col-span-1"/>
                                <div className="md:col-span-2 space-y-2">
                                    <h3 className={"text-2xl"}>
                                        Carte des participant·e·s
                                    </h3>
                                    <p className={"text-justify"}>
                                        Une carte actualisée chaque semaine sur laquelle vous pourrez
                                        suivre l’évolution des participations,
                                        les territoires les plus impliqués… vous n’êtes pas seul·e à
                                        vous soucier des plastiques !
                                    </p>
                                    <p className={'text-sm'}>
                                        Bientôt disponible
                                    </p>
                                </div>
                            </div>

                              <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                              <img src="/assets/images/pages/welcome/media-mspr.png"
                              alt="Recherche et science participatives" className="md:col-span-1 border border-gray-300"/>
                                <div className="md:col-span-2 space-y-2">
                                    <h3 className={"text-2xl"}>
                                        Recherche et science participatives
                                    </h3>
                                    <p className={"text-justify"}>
                                        En savoir plus sur les programmes de recherche participative et
                                        de science participative,
                                        découvrir d’autres programmes menés en France sur des
                                        thématiques liées à l’environnement,
                                        à la biodiversité, aux transitions…
                                    </p>
                                    <p className={'text-sm'}>
                                        Bientôt disponible
                                    </p>
                                </div>
                            </div>

                              <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                              <a>
                              <img src="/assets/images/pages/welcome/media-resources.png"
                                   alt="Médiathèque"
                                   className="md:col-span-1 transition duration-300 ease-in transform hover:scale-105"/>
                                </a>
                                <div className="md:col-span-2">
                                    <h3 className={"text-2xl"}>
                                        Médiathèque
                                    </h3>
                                    <p className={"text-justify"}>
                                        Une page où vous trouverez des informations sur les plastiques,
                                        des articles, des astuces pour modifier
                                        votre consommation plastique et approfondir vos connaissances.
                                    </p>
                                    <p className={'text-sm'}>
                                        Bientôt disponible
                                    </p>
                                </div>
                            </div>

                              <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                              <img src="/assets/images/pages/welcome/media-house.png"
                                   alt="La maison DGP"
                                   className="md:col-span-1"/>
                              <div className="md:col-span-2 space-y-2">
                                <h3 className={"text-2xl"}>
                                  La maison DGP
                                </h3>
                                <p className={"text-justify"}>
                                  Une maison interactive où vous pourrez identifier des objets
                                  plastiques à supprimer,
                                  à substituer, à diminuer, et proposer des solutions pour y
                                  parvenir.
                                </p>
                                  <p className={'text-sm'}>
                                      Bientôt disponible
                                  </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </section>
                      <Footer />

                    </>
                  </ReactFullpage.Wrapper>
              );
            }}
        />
      </AuthenticatedLayout>
  );
};

export default WelcomePage;
