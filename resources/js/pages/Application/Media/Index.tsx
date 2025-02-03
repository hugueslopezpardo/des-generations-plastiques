'use client';

import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import Footer from "@/components/app/Footer/Footer";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";


interface MediaPageProps {
    files: any[];
}

/**
 * Media Page
 * @constructor
 */
export default function MediaPage({files}: MediaPageProps) {

    console.log(files);

    const tabs = ['En Bref', 'Coup de coeur', 'Livres et films', 'Article scientifique et thèses', 'Dans la presse', 'Trucs et astuces'];

    console.log("files", files);

    const tabsContent = [{
        'En Bref': [
        ],
        'Coup de coeur': [],
        'Livres et films': [],
        'Article scientifique et thèses': [],
        'Dans la presse': [],
        'Trucs et astuces': []
    }]

    for (const file of files) {
        if (file.category.name === 'En Bref') {
            {/* @ts-ignore */}
            tabsContent[0]['En Bref'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        } else if (file.category.name === 'Coup de coeur') {
            {/* @ts-ignore */}
            tabsContent[0]['Coup de coeur'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        } else if (file.category.name === 'Livres et films') {
            {/* @ts-ignore */}
            tabsContent[0]['Livres et films'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        } else if (file.category.name === 'Article scientifique et thèses') {
            {/* @ts-ignore */}
            tabsContent[0]['Article scientifique et thèses'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        } else if (file.category.name === 'Dans la presse') {
            {/* @ts-ignore */}
            tabsContent[0]['Dans la presse'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        } else if (file.category.name === 'Trucs et astuces') {
            {/* @ts-ignore */}
            tabsContent[0]['Trucs et astuces'].push({
                title: file.title,
                description: file.description,
                thumbnail: file.thumbnail_path,
                link: file.file_path
            });
        }
    }

    const [currentTab, setCurrentTab] = React.useState('En Bref');


    return (
        <AuthenticatedLayout title={'Ressources'}>
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
                            <>
                                {/* Section 1*/}
                                <section className={'section bg-[#F18BAF] min-h-screen'}>
                                    <article className={'min-h-screen container mx-auto'}>
                                        <div className={'grid grid-cols-1 md:grid-cols-2'}>
                                            <div className={'h-screen w-full flex flex-col justify-center px-4 space-y-4'}>
                                            <h1 className={'text-4xl md:text-5xl text-center md:text-left font-saps-regular'}>
                                            Les ressources
                                                </h1>
                                                <p className={'text-lg text-justify px-16 md:px-0'}>
                                                        Vous trouverez ici des informations sur les plastiques, des définitions courtes
                                                        et imagées (“En bref”), des liens vers des articles et livres de références pour
                                                        approfondir vos connaissances sur les plastiques, des références de livres ou de
                                                        films qui traitent de la question des transitions en général ou de la transition
                                                        plastique en particulier, mais aussi des trucs et astuces pour remplacer
                                                        certains objets plastiques, pour réfléchir à vos usages…
                                                        Bienvenue, et bonne lecture !
                                                </p>
                                                <img src={"assets/images/Fleche_jaune.png"} className={"h-16 w-16 mx-auto z-50 hover:scale-105 hover:cursor-pointer duration-300 ease-in"} onClick={() => {fullpageApi.moveSectionDown()}} />
                                            </div>
                                            <div className={'md:h-screen w-full flex flex-col justify-center'}>
                                            <img src={'assets/images/2-bis.png'} alt={'Cotes des rives de l\'orne'} className={'hidden md:block cover'}/>
                                        </div>
                                        </div>
                                    </article>
                                </section>

                                {/* Section 2 */}
                                <section className={"section bg-[#FFFFFF]"}>
                                    <article className={"mx-auto min-h-screen container py-16 space-y-12"}>
                                        <div
                                            className={'grid grid-cols-2 md:grid-cols-6 mt-16 gap-2 md:gap-8 text-center text-sm'}>
                                            {tabs.map((category, index) => (
                                                <div key={index}
                                                     className={`p-1 flex justify-center items-center rounded-lg mx-4 md:mx-0 hover:scale-105 cursor-pointer duration-300 ease-in ${currentTab === category ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'}`}
                                                     onClick={() => setCurrentTab(category)}>
                                                    {category}
                                                </div>
                                            ))}
                                        </div>

                                        <div className={'grid grid-cols-1 md:grid-cols-3 gap-8'}>
                                            {/* @ts-ignore */}
                                            {tabsContent[0][currentTab].length === 0 &&
                                                <div className={'col-span-3 text-center text-lg font-bold'}>
                                                    Aucun contenu pour le moment
                                                </div>}

                                            {/* @ts-ignore */}
                                            {tabsContent[0][currentTab].map((content, index) => (
                                                <div
                                                    className={'space-y-2 bg-gray-50 p-4 rounded-lg mx-4 md:mx-0 hover:shadow-lg duration-300 ease-in cursor-pointer'}
                                                    key={index}>
                                                    <img
                                                        src={content.thumbnail}
                                                        alt={content.title}
                                                        className={'h-80 w-full '}
                                                        onClick={() => window.open(content.link, '_blank')}
                                                    />
                                                    <h2 className={'text-lg font-bold'}>{content.title}</h2>
                                                    <p className={'text-sm'}>{content.description}</p>
                                                </div>
                                            ))}
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
}
