"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import {
    Button,
    useDisclosure,
} from "@nextui-org/react";

import Section from "@/components/section/section";
import FormCheckboxs from "@/components/forms/form-checkboxs";
import FormSliders from "@/components/forms/form-sliders";
import FormRadios from "@/components/forms/form-radios";
import React from "react";
import {Head, Link, useForm} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";
import {Flex} from "@radix-ui/themes";
import {Textarea} from "@/components/ui/textarea";

interface ReportInitialProps {
    token: string;
}

export default function ReportInitial({token}: ReportInitialProps) {
    const nbSteps = 22;
    const {isOpen, onOpen, onClose} = useDisclosure();

    const magasins = [
        "Je ne fréquente pas d'autres types de magasins",
        "Grandes surfaces",
        "Drive (grandes surfaces)",
        "Drive (autres magasins)",
        "Boulangerie",
        "Marché",
        "Magasins spécialisés bio",
        "Magasins alimentaires de proximité",
        "Boucherie / Charcuterie",
        "Producteurs en direct",
        "Distributeurs en circuit court",
        "Primeurs",
        "Poissonnerie",
        "Boutiques spécialisées en vrac",
        "Autre…",
        "Je ne fais pas mes courses",
    ];

    const magasins1 = [
        "Grandes surfaces",
        "Drive (grandes surfaces)",
        "Drive (autres magasins)",
        "Boulangerie",
        "Marché",
        "Magasins spécialisés bio",
        "Magasins alimentaires de proximité",
        "Boucherie / Charcuterie",
        "Producteurs en direct",
        "Distributeurs en circuit court",
        "Primeurs",
        "Poissonnerie",
        "Boutiques spécialisées en vrac",
        "Autre…",
        "Je ne fais pas mes courses",
    ];

    const bgColor = "bg-indigo-500";
    const color = "secondary";

    const {toast} = useToast();

    const {data, setData, post, processing, errors, reset} = useForm({
        token: token,
    });

    const submit = (e: any) => {
        console.log('submit');
        e.preventDefault();
        post(route('reports.intermediate.finish', token), {
            onSuccess: () => {
                toast({
                    title: 'Questionnaire validé',
                    description: 'Merci pour votre participation',
                    variant: 'default'
                })
            },
            onError: () => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de la validation du questionnaire',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <>
            <Head title={"Bilan intermédiaire"}/>
            <ReactFullpage
                autoScrolling={true}
                licenseKey={"YOUR_KEY_HERE"}
                credits={{}}
                controlArrows={false}
                normalScrollElements={".section"}
                render={({state, fullpageApi}) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className={"section "}>
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    title={"Bilan intermédiaire"}
                                >
                                    <p className="mt-6 text-lg leading-8 text-justify">
                                        Voilà maintenant trois semaines que vous avez débuté l’aventure
                                        Des générations plastiques. Nous espérons que tout se passe bien
                                        pour vous, que vous découvrez des choses et prenez plaisir à
                                        réfléchir sur les plastiques. Que pensez-vous de ce début
                                        d’aventure ? Comment avez-vous appréhendé et géré cette période
                                        ? Est-ce enrichissant ? Rencontrez-vous des difficultés ? C’est
                                        le moment de partager vos premiers retours, vos premiers
                                        ressentis et votre motivation pour la suite de l&apos;aventure.
                                    </p>
                                    <Flex justify={'center'} align={'center'} gap={'4'}>
                                        <Button
                                            className={"mt-6 bg-[#F18BAF] text-white"}
                                            size="lg"
                                            variant="solid"
                                            onClick={() => fullpageApi.moveSlideRight()}
                                        >
                                            Commencer le questionnaire
                                        </Button>

                                        <Button className={"mt-6"} color="secondary" size="lg" variant="solid"
                                                onClick={submit}>
                                            Valider le questionnaire (Pour les tests)
                                        </Button>
                                    </Flex>
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={3}
                                >
                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t4.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={1}
                                    title={
                                        "Comment se sont passées ces 3 dernières semaines ? Avez vous :"
                                    }
                                >
                                    <FormCheckboxs
                                        color={color}
                                        nbColumns={1}
                                        options={[
                                            "Commencé à vous renseigner sur les plastiques (fabrication, cycle de vie, pollution)",
                                            "Discuté avec vos proches du plastique",
                                            "Identifié des structures proposant des alternatives au plastique",
                                            "Commencé à identifier ce que vous achetez et consommez comme plastique",
                                            "Remplacé ou supprimé certains objets plastique de votre quotidien",
                                            "Décidé de ne pas bousculer votre quotidien pour le moment",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                    subtitle={"(2 réponses maximum)"}
                                    title={
                                        "Personnellement, vous avez trouvé ce début d'expérience ?"
                                    }
                                >
                                    <FormCheckboxs
                                        color={color}
                                        nbColumns={1}
                                        options={[
                                            "Enrichissant",
                                            "Stimulant",
                                            "Ennuyeux",
                                            "Sans intérêt",
                                            "C'est trop tôt pour que je puisse faire un retour",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={3}
                                    title={
                                        "Jusqu'à présent, vous avez plutôt vécu ce début d'expérience"
                                    }
                                >
                                    <FormRadios
                                        color={color}
                                        name={"context"}
                                        nbColumns={1}
                                        options={[
                                            "Individuellement",
                                            "Collectivement (avec des ami·e·s, en famille, en couple, au sein d'un groupe associatif...)",
                                            "Dans le cadre d'un programme scolaire",
                                            "Autre",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={4}
                                    title={"Vos changements de comportement de consommation ont été"}
                                >
                                    <FormRadios
                                        color={color}
                                        name={"context"}
                                        nbColumns={1}
                                        options={[
                                            "Faciles à réaliser dans l'ensemble",
                                            "Simples pour certains et plus compliqués pour d'autres",
                                            "Compliqués dans l'ensemble",
                                            "Je n'ai pas entrepris de changement pour le moment",
                                            "Autre",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={5}
                                    title={
                                        "Les difficultés que vous avez rencontrées étaient plutôt liées"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"warning"}
                                        nbColumns={1}
                                        options={[
                                            "À un manque de temps",
                                            "À un prix, souvent plus élevé",
                                            "À un manque d'alternatives existantes",
                                            "À un manque d'informations sur les alternatives possibles",
                                            "À un manque d'envie",
                                            "À l'indifférence de mes proches",
                                            "À un manque de compétences personnelles (je ne suis pas 'manuel·le', ...)",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={6}
                                    title={
                                        "Avez-vous identifié des objets, en plastique, qui vont être difficiles à remplacer ou à supprimer de votre quotidien ?"
                                    }
                                >
                                    <FormRadios
                                        color={"warning"}
                                        name={"context"}
                                        nbColumns={1}
                                        options={[
                                            "Oui",
                                            "Non, pour l'instant, les objets auxquels je me suis intéressé·e étaient plutôt simples à rermplacer",
                                            "Non car je n'ai pas entamé encore de démarche de réduction ou remplacement des plastiques",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={7}
                                    title={
                                        "Les difficultés que vous avez rencontrées étaient plutôt liées"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"warning"}
                                        nbColumns={1}
                                        options={[
                                            "Cosmétiques",
                                            "Textile",
                                            "Alimentaire",
                                            "Produits ménagers",
                                            "Mobilier",
                                            "Santé",
                                            "Sports et loisirs",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>



                                {/* T2 */}
                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={3}
                                >
                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t5.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                </Section>






                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={8}
                                    title={
                                        "Plus qu’une simple enquête sur les plastiques, Des générations plastiques est une démarche qui s’installe dans votre quotidien. Quels sont les impacts de vos réflexions sur vos relations ?"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"warning"}
                                        nbColumns={1}
                                        options={[
                                            "Elles ont contribué à sensibiliser mon entourage aux enjeux des consommations plastiques",
                                            "Elles ont motivé mon entourage",
                                            "Elles ont contribué à modifier les pratiques de mon entourage",
                                            "Elles ont entraîné des moqueries de la part de certains de mes proches",
                                            "Elles ont entraîné des tensions avec certains de mes proches",
                                            "Elles n'ont pas eu d'impact sur mon entourage",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={9}
                                    title={
                                        "Êtes-vous entré en contact avec des personnes ou structures engagées dans une diminution du plastique ?"
                                    }
                                >
                                    <FormRadios
                                        color={"warning"}
                                        name={"context"}
                                        nbColumns={1}
                                        options={["Oui", "Non"]}
                                    />

                                    <p className="mt-6 text-lg leading-8 text-justify">
                                        Si oui lesquelles ?
                                    </p>

                                    <Textarea placeholder="Réponse"/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={10}
                                    title={
                                        "Pour vous accompagner, le site internet de DGP vous donne accès à des ressources sur les plastiques, les avez-vous regardées ?"
                                    }
                                >
                                    <FormRadios
                                        color={"warning"}
                                        name={"context"}
                                        nbColumns={1}
                                        options={["Oui", "Non"]}
                                    />

                                    <p className="mt-6 text-lg leading-8 text-justify">
                                        Si oui lesquelles ?
                                    </p>

                                    <Textarea placeholder="Réponse"/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={11}
                                    title={"Les informations du site sont dans l'ensemble"}
                                >
                                    <FormCheckboxs
                                        color={"warning"}
                                        nbColumns={1}
                                        options={[
                                            "Intéressantes",
                                            "Accessibles",
                                            "Pertinentes",
                                            "DGP est devenu mon site préféré",
                                            "Incomplètes",
                                            "Pas assez nombreuses",
                                            "Superficielles",
                                            "Trop compliquées",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={12}
                                    subtitle={"Défi du jour : "}
                                    title={
                                        "Faites votre profil plastique : choisissez celui qui vous correspond le mieux et que vous pensez adopter pour les 3 prochains mois"
                                    }
                                >
                                    <FormRadios
                                        color={"warning"}
                                        name={"context"}
                                        nbColumns={1}
                                        options={[
                                            "L'ambitieux/se : Vous souhaitez entreprendre de grands changements car vous vous êtes donné d'importants objectifs",
                                            "La/Le modeste : Vous souhaitez entreprendre quelques changements simples sans pour autant remettre en question fondamentalement votre quotidien",
                                            "La tortue : Vous souhaitez réaliser des changements mais à votre rythme.",
                                            "La/Le perséverant-e : Vous estimez qu'au vu des 3 premières semaines écoulées, un changement de consommation s'annonce compliqué mais vous souhaitez persévérer tout de même",
                                            "La/Le démissionnaire : Vous décidez de quitter l'aventure DGP et avec, vos réflexions et actions sur les plastiques",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    title={"Merci à vous d'avoir répondu à ce questionnaire !"}
                                >
                                    <Button className={"mt-6"} color="secondary" size="lg" variant="solid" onClick={submit} disabled={status === 'enabled'}>
                                        Je finalise le questionnaire
                                    </Button>
                                </Section>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>

    );
}
