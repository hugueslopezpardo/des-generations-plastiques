'use client';

import ReactFullpage from "@fullpage/react-fullpage";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/app/Footer/Footer";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

export default function AboutPage() {
  return (
      <AuthenticatedLayout title={'Qui sommes-nous ?'}>
      <ReactFullpage
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000}
          credits={{}}
          verticalCentered={false}
          navigation={true}
          navigationPosition={'right'}
          scrollOverflow={true}
          fitToSection={false}
          render={({state, fullpageApi}) => {
              return (
                  <ReactFullpage.Wrapper>

                                      {/* Section 1*/}
                                      <section className={'section bg-[#F7B501] min-h-screen'}>
                                    <article className={'min-h-screen container mx-auto'}>
                                        <div className={'grid grid-cols-1 md:grid-cols-2'}>
                                            <div className={'h-screen w-full flex flex-col justify-center px-4 space-y-4'}>
                                                <h1 className={'text-4xl md:text-5xl text-center md:text-left font-saps-regular'}>
                                                Qui sommes-nous ?
                                                </h1>
                                                <p className={'text-lg text-justify px-16 md:px-0'}>
                                                Des générations plastiques est un programme de recherche
                                      participative porté par le laboratoire ABTE de l’Université
                                      de Caen et par le Dôme, le centre de culture scientifique
                                      technique et industrielle de Caen Normandie. Il s’inscrit au sein de PROSPERITY, un programme plus vaste de recherche sur les matériaux plastiques et composites 100% biosourcés et 100% biodégradables.
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
                      <section className={"section bg-[#FFFFFF]"}>
                          <article
                              className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-24 space-y-24"}>
                          <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                  <div className={'flex justify-center items-center'}>
                                      <div className={'w-[80%] aspect-square rounded-full bg-gray-200 mx-auto'}/>
                                      <img src={'assets/images/pages/about/laboratoire-abte.png'} alt={'Logo du laboratoire ABTE'} className={'rounded-lg mx-auto'}/>
                                  </div>
                                  <div className={'space-y-4'}>
                                      <h1 className={"text-5xl text-left font-saps-regular"}>
                                          Le laboratoire ABTE de l&#39;université de Caen
                                      </h1>
                                      <p className={'text-md text-justify'}>
                                          <span className={'font-bold'}>L&#39;unité de recherche ABTE</span>,
                                          créée en 2012 sous la tutelle des universités
                                          de Caen et de Rouen, se consacre à l&#39;étude des impacts des aliments
                                          et
                                          des environnements sur la santé humaine. Son programme scientifique
                                          s&#39;articule autour de deux axes principaux.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          <span className={'font-bold'}>Le premier axe</span> vise à utiliser
                                          les ressources pour des aliments et des
                                          environnements durables. Il s&#39;agit de comprendre les processus
                                          biologiques à l&#39;origine des écosystèmes alimentaires, d&#39;étudier le
                                          transfert des polluants dans les ressources agricoles, et
                                          d&#39;identifier
                                          des moyens de produire des aliments de qualité. L&#39;axe inclut
                                          également
                                          la valorisation des biomasses et l&#39;utilisation de la biodiversité
                                          pour
                                          la bioremédiation des sols et l&#39;amélioration de la santé humaine,
                                          notamment en oncologie et en infectiologie.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          <span className={'font-bold'}>Le deuxième axe</span> explore les
                                          réponses biologiques aux multiexpositions
                                          environnementales, comme les polluants et les changements
                                          climatiques,
                                          ainsi que les facteurs individuels, tels que les traitements
                                          médicaux.
                                          Ces recherches visent à développer des outils pour évaluer et
                                          prévenir
                                          les risques liés aux multiexpositions, tant pour les humains que
                                          pour
                                          les végétaux et les microorganismes.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          L&#39;ABTE a pour objectif de promouvoir des solutions
                                          durables en matière de santé, d&#39;alimentation, et d&#39;environnement.
                                      </p>
                                      <div className={'mt-2'}>
                                          <a href={'https://abte.eu'} className={'mt-24'}>
                                              <Button>
                                                  En savoir plus {' '} <ArrowRight size={16} className={'ml-2'}/>
                                              </Button>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </article>
                      </section>


                      {/* Section 3 */}
                      <section className={"section bg-[#F2EDE7]"}>
                          <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-24 space-y-24"}>
                              <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                  <div className={'space-y-4'}>
                                      <h1 className={"text-5xl text-left font-saps-regular"}>
                                          Le Dôme
                                      </h1>
                                      <p className={'text-md text-justify'}>
                                                    <span
                                                        className={'font-bold'}>Centre de sciences de Caen Normandie, </span> Le
                                          Dôme est un espace collaboratif
                                          d&#39;innovation ouvert à tous les publics.
                                          Il propose des actions de culture scientifique et technique autour
                                          de
                                          projets réels de recherche et d’innovation.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Il est piloté par l’association Relais d’sciences qui déploie depuis
                                          plus de 20 ans une programmation sciences et société sur l’ensemble du
                                          territoire normand.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Le Dôme a développé une expertise et met en œuvre des méthodes de
                                          Living
                                          Lab
                                          pour faire interagir des communautés professionnelles différentes
                                          (chercheurs, créateurs numériques, industriels, artistes, agents des
                                          services publics... ) entre elles et avec le public.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Ces dernières années, nous assistons à l’émergence de stratégies, de
                                          concepts, d’idées ou de formes d’organisation qui se proposent de
                                          renforcer
                                          le rôle des individus dans la réponse à la diversité de leurs
                                          besoins.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                                    <span className={'font-bold'}>Premier tiers-lieu français dédié à la recherche et à l’innovation
                                                    participatives,</span> Le Dôme mobilise tou·te·s celles et ceux qui
                                          souhaitent
                                          partager leurs savoirs, explorer et imaginer collectivement des
                                          solutions
                                          concrètes aux enjeux sociétaux d’aujourd’hui et de demain.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Il s’attache notamment à mobiliser les jeunes adultes et les publics
                                          les
                                          plus éloignés des pratiques culturelles ou des enjeux de sciences et
                                          de
                                          société. Il travaille également à reconnaître l’engagement, les
                                          savoirs,
                                          les pratiques et les apprentissages informels des personnes
                                          participantes.
                                      </p>
                                      <div className={'mt-2'}>
                                          <a href={'https://ledome.info'}>
                                              <Button>
                                                  En savoir plus {' '} <ArrowRight size={16} className={'ml-2'}/>
                                              </Button>
                                          </a>
                                      </div>
                                  </div>
                                  <div className={'flex justify-center items-center'}>
                                      <img src={'assets/images/pages/about/le-dome.png'} alt={'Logo du Dôme'} className={'rounded-lg mx-auto'}/>
                                  </div>
                              </div>
                          </article>
                      </section>

                      {/* Section 4 */}
                      <section className={"section bg-[#FFFFFF]"}>
                          <article className={"mx-auto min-h-screen flex justify-center items-center flex-col container py-24 space-y-24"}>
                              <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 p-4 md:p-0"}>
                                  <div className={'flex justify-center items-center'}>
                                      <div className={'w-[80%] aspect-square rounded-lg bg-gray-200 mx-auto'} style={{backgroundImage: 'url(assets/images/depestel.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top'}}/>
                                  </div>
                                  <div className={'space-y-4'}>
                                      <h1 className={"text-5xl text-left font-saps-regular"}>
                                          Le groupe Depestele
                                      </h1>
                                      <p className={'text-md text-justify'}>
                                          Le groupe Depestele est une <span className={'font-bold'}>entreprise familiale</span> œuvrant
                                          depuis <span className={'font-bold'}>1850</span> dans la
                                          transformation de lin.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          <span className={'font-bold'}>Premier producteur privé de lin en Europe</span>,
                                          Depestele
                                          valorise la totalité de la paille dans divers produits : fibres
                                          longues, fibres courtes, anas et graines. L’entreprise produit
                                          également des renforts en fibres de lin utilisés dans l’industrie
                                          des composites, sous la forme de rovings ou de tissus techniques.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Le groupe collecte du lin sur toute la Normandie ainsi qu’en
                                          Île-de-France et en Bretagne, en collaboration avec plus de 900
                                          exploitants agricoles.
                                      </p>
                                      <p className={'text-md text-justify'}>
                                          Depuis 2009, Depestele a structuré son département R&D en faveur de
                                          la valorisation des produits et co-produits du lin dans les
                                          matériaux composites. Le groupe s’est ensuite doté d’un centre de
                                          production de lin technique pour la fabrication de renforts.
                                      </p>
                                      <div className={'mt-2'}>
                                          <a href={'https://groupe-depestele.com'}>
                                              <Button>
                                                  En savoir plus {' '} <ArrowRight size={16} className={'ml-2'} />
                                              </Button>
                                          </a>
                                      </div>
                                      <h2 className={'text-3xl font-saps-regular'}>
                                          Le projet PROSPERITY
                                      </h2>
                                      <p className={'text-md text-justify'}>
                                          L’objectif de <span className={'font-bold'}>PROSPERITY</span>, financé par l'appel à projets "I-Démo" du plan France 2030, est de concevoir des renforts pré-imprégnés issus à 100% de ressources renouvelables (fibres de lin et polymères biosourcés et biodégradables, notamment les PHAs), tout en proposant une analyse de cycle de vie maitrisée.
                                      </p>
                                      <img src={'assets/images/shared/logo-prosperity.png'} alt={'Logo du projet PROSPERITY'} className={'w-1/2 rounded-sm'}/>
                                  </div>
                              </div>
                          </article>
                      </section>

                      {/* Section 5 */}
                      <section className={"section bg-[#FFFFFF]"}>
                          <article className={"mx-auto min-h-screen container py-24 space-y-24"}>

                              <div className={'space-y-4 text-center'}>
                                  <h1 className={"text-5xl text-center font-saps-regular"}>
                                      Un programme du label Science avec et pour la société (SAPS)
                                  </h1>
                                  <p className={'text-lg mt-8'}>
                                      Un label delivré par le ministère de l&#39;enseignement supérieur et de la
                                      recherche.
                                  </p>
                              </div>

                              <div className={'grid grid-cols-1 md:grid-cols-4 gap-16'}>
                                  <Card className={'h-16 flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-abte.jpg'}
                                           alt={'Logo du laboratoire ABTE'} className={'object-cover'}/>
                                  </Card>
                                  <Card className={'flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-universite-caen.jpg'}
                                           alt={'Logo de l\'université de Caen'} className={'object-cover'}/>
                                  </Card>
                                  <Card className={'flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-le-dome.jpg'} alt={'Logo du Dôme'}
                                           className={'object-cover'}/>
                                  </Card>
                                  <Card className={'flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-saps.webp'} alt={'Logo de SAPS'}
                                           className={'object-cover'}/>
                                  </Card>
                              </div>

                              <h2 className={'text-3xl text-center font-saps-regular'}>
                                  Financé par :
                              </h2>

                              <div className={'grid grid-cols-1 md:grid-cols-3 gap-16'}>
                                  <Card className={'md:h-40 flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-europe.svg'}
                                           alt={'Logo de l\'europe'} className={'h-36 object-cover'}/>
                                  </Card>
                                  <Card className={'h-40 flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-france-2030.png'}
                                           alt={'Logo de France 2030'} className={'h-36 object-cover'}/>
                                  </Card>
                                  <Card className={'h-40 flex justify-center items-center shadow-lg rounded-lg'}>
                                      <img src={'assets/images/shared/logo-normandie.jpg'}
                                           alt={'Logo de la région normandie'}
                                           className={'h-36 object-cover'}/>
                                  </Card>
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
