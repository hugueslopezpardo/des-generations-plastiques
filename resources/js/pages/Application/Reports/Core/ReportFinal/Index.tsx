"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import {
    Button,
    Image,
    PopoverContent,
    PopoverTrigger,
    Popover,
    Spacer,
} from "@nextui-org/react";

import Section from "@/components/section/section";
import FormSliders from "@/components/forms/form-sliders";
import FormRadios from "@/components/forms/form-radios";
import FormCheckboxs from "@/components/forms/form-checkboxs";
import {Head, Link, useForm} from "@inertiajs/react";
import React from "react";
import {useToast} from "@/hooks/use-toast";
import {Flex} from "@radix-ui/themes";
import {Textarea} from "@/components/ui/textarea";

interface ReportFinalProps {
    token: string;
}

export default function ReportFinal({token}: ReportFinalProps) {
    const nbSteps = 20;

    const bgColor = "bg-slate-700";
    const color = "danger";

    const {toast} = useToast();

    const {data, setData, post, processing, errors, reset} = useForm({
        token: token,
    });

    const submit = (e: any) => {
        console.log('submit');
        e.preventDefault();
        post(route('reports.final.finish', token), {
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
            <Head title={"Bilan final"}/>
            <ReactFullpage
                autoScrolling={true}
                licenseKey={"YOUR_KEY_HERE"}
                credits={{}}
                controlArrows={false}
                normalScrollElements={".section"}
                render={({state, fullpageApi}) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className={'section'}>
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    title={"Bilan final"}>
                                    <p className="mt-6 text-lg leading-8 text-justify">
                                        Vous voilà tout près de la ligne d’arrivée de cette
                                        expérimentation Des générations plastiques, nous espérons que
                                        vous avez vécu une belle expérience de science participative
                                        avec notre équipe et l&apos;ensemble des participant·e·s et nous
                                        souhaitons avec ce dernier questionnaire que vous puissiez
                                        exprimer votre ressenti et dresser un bilan de vos réflexions,
                                        des actions entreprises ou envisagées, des découvertes que vous
                                        avez pu faire... mais aussi identifier les freins et leviers que
                                        vous avez pu rencontrer durant ces quatre mois DGP. N&apos;en
                                        disons pas plus, c&apos;est parti pour une petite dizaine de
                                        minutes !
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
                                    step={1}
                                >
                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t6.png)",
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
                                    title={" Au terme de ces 4 mois"}
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Consommation de plastique"]}
                                        leftLabel={"Je n'ai rien changé"}
                                        maxValue={10}
                                        minValue={0}
                                        rightLabel={"J'ai révolutionné ma consommation plastique"}
                                        sliderStepMarks={[
                                            {value: 0, label: "Rien changé"},
                                            {value: 10, label: "Tout changé"},
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
                                    step={2}
                                    title={
                                        "Quel volume jetez-vous, désormais, chaque semaine dans la poubelle jaune ?"
                                    }
                                >
                                    <div className={"m-8 mx-auto w-full"}>
                                        <Popover key={"help"} placement="top">
                                            <PopoverTrigger>
                                                <Button color={'secondary'} size={"sm"}>
                                                    Besoin d&apos;aide ?
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <Image
                                                    alt={"Illustration"}
                                                    className={"h-44"}
                                                    src={
                                                        "https://lh7-us.googleusercontent.com/Te47-wPG5Qjsnpz9DQtNanv-6IP2iAHz43mGsjBBzRNPJWR1kSI6Fh1T-oOStc8hKbCEEZagfTDfmhUW4eDEfRW0GSJSVWq0QDX2VGjEjF4B-Vfye0nqE88LU1AbwKgrNzdANil8h_qWzy0ugBu5-i-VGIsBcQ"
                                                    }
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <FormRadios
                                        color={color}
                                        name={"volume"}
                                        nbColumns={2}
                                        options={[
                                            "Moins de 75L",
                                            "Entre 75L et 150L",
                                            "Entre 150L et 250L",
                                            "Plus de 250L",
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
                                    step={3}
                                    title={
                                        "A quelle fréquence achetez vous, au sein de ces différentes familles, des objets plastiques ou emballés par du plastique ? (1 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Cosmétique", "Textile", "Alimentaire"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Semaine"},
                                            {value: 1, label: "Mois"},
                                            {value: 2, label: "Année"},
                                            {value: 3, label: "Jamais"},
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
                                    title={
                                        "A quelle fréquence achetez vous, au sein de ces différentes familles, des objets plastiques ou emballés par du plastique ? (2 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Produits ménagers", "Mobilier"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Semaine"},
                                            {value: 1, label: "Mois"},
                                            {value: 2, label: "Année"},
                                            {value: 3, label: "Jamais"},
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
                                        "A quelle fréquence achetez vous, au sein de ces différentes familles, des objets plastiques ou emballés par du plastique ? (3 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Santé", "Sports et loisirs", "Autre"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Semaine"},
                                            {value: 1, label: "Mois"},
                                            {value: 2, label: "Année"},
                                            {value: 3, label: "Jamais"},
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
                                    step={6}
                                    title={
                                        "Avez-vous l'impression, durant ces 4 mois, d'avoir diminué votre consommation plastique ?"
                                    }
                                >
                                    <FormRadios
                                        color={color}
                                        name={"consommation"}
                                        nbColumns={2}
                                        options={["Pas du tout", "Un peu", "Beaucoup", "À la folie"]}
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
                                        "Et dans le détail, quels degrés de réussite par familles de produits ? (1 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Cosmétique", "Textile", "Alimentaire"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Pas du tout\t"},
                                            {value: 1, label: "Un peu"},
                                            {value: 2, label: "Beaucoup"},
                                            {value: 3, label: "Totalement"},
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
                                    step={8}
                                    title={
                                        "Et dans le détail, quels degrés de réussite par familles de produits ? (2 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Produits ménagers", "Mobilier"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Pas du tout\t"},
                                            {value: 1, label: "Un peu"},
                                            {value: 2, label: "Beaucoup"},
                                            {value: 3, label: "Totalement"},
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
                                    step={9}
                                    title={
                                        "Et dans le détail, quels degrés de réussite par familles de produits ? (3 / 3)"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Santé", "Sports et loisirs", "Autre"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Pas du tout\t"},
                                            {value: 1, label: "Un peu"},
                                            {value: 2, label: "Beaucoup"},
                                            {value: 3, label: "Totalement"},
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
                                    step={10}
                                    title={
                                        "Lorsque vous n'avez pas réussi à modifier vos habitudes de consommation plastique, quelle en a été la raison principale ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"habitudes"}
                                        nbColumns={2}
                                        options={[
                                            "À un manque de temps",
                                            "À un prix, souvent plus élevé",
                                            "À un manque d'alternatives existantes",
                                            "À un manque d'informations sur les alternatives possibles",
                                            "À un manque d'envie",
                                            "À l'indifférence de mes proches",
                                            'À un manque de compétences personnelles (je ne suis pas "manuel·le", ...)',
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
                                    step={11}
                                    title={
                                        "Avez-vous rencontré des frustrations lors de cette étude ?"
                                    }
                                >
                                    <FormRadios
                                        color={color}
                                        name={"frustrations"}
                                        nbColumns={2}
                                        options={["Oui", "Non"]}
                                    />

                                    <p className={"mt-8"}>Si oui, lesquelles ?</p>
                                    <Textarea className={"mt-4"} placeholder={"Réponse"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={12}
                                    title={"Aujourd'hui, comment percevez-vous le plastique ?"}
                                >
                                    <FormRadios
                                        color={color}
                                        name={"perception"}
                                        nbColumns={2}
                                        options={[
                                            "C'est quand même pratique ! Et j'ai beaucoup de mal à m'en passer.",
                                            "Certains objets plastiques restent indispensables à mon quotidien, mais j'essaie petit à petit d'en supprimer un maximum.",
                                            "Le plastique est devenu mon ennemi numéro un et je cherche à l'évincer de mon quotidien sauf lorsqu'il est vraiment indispensable.",
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
                                    step={13}
                                    title={
                                        "Après avoir supprimé de votre quotidien certains objets plastiques au cours des quatre derniers mois, certains sont-ils finalement revenu chez vous ?"
                                    }
                                >
                                    <FormRadios
                                        color={color}
                                        name={"perception"}
                                        nbColumns={2}
                                        options={[
                                            "Oui",
                                            "Non",
                                            "Je n'ai pas supprimé de plastiques de mon quotidien.",
                                        ]}
                                    />

                                    <p className={"mt-8"}>Si oui, lesquels ?</p>
                                    <Textarea className={"mt-4"} placeholder={"Réponse"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={14}
                                >
                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t7.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={15}
                                    title={
                                        "Le fait d'avoir diminué votre consommation plastique vous a-t-il rendu"
                                    }
                                >
                                    <FormRadios
                                        color={color}
                                        name={"perception"}
                                        nbColumns={2}
                                        options={[
                                            "Plus heureux/se",
                                            "Plus autonome",
                                            "Plus fier ou plus fière",
                                            "La vie plus compliquée",
                                            "Plus irritable",
                                            "Plus en marge de votre entourage",
                                            "Autre",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={16}
                                    title={
                                        "Lors de cette étude, avez-vous fait des découvertes (personnelles, scientifiques etc.) ?"
                                    }
                                >
                                    <Textarea className={"mt-4"} placeholder={"Réponse"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={17}
                                    title={
                                        "Comment se sont positionnées les personnes présentes dans votre quotidien (famille, ami(e)s, commerçant(e)s...)  vis-à-vis de votre démarche actuelle ?"
                                    }
                                >
                                    <FormCheckboxs
                                        color={color}
                                        nbColumns={2}
                                        options={[
                                            "Certaines personnes ont vu leur curiosité s'éveiller",
                                            "Certaines personnes ont accroché et ont décidé de se lancer dans l'aventure également",
                                            "Certaines personnes vous ont découragé",
                                            "Certaines personnes se sont moqué",
                                            "Vous n'avez pas échangé sur vos pratiques",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={18}
                                    title={
                                        "Lors de cette étude, avez-vous fait des découvertes (personnelles, scientifiques etc.) ?"
                                    }
                                >
                                    <Textarea className={"mt-4"} placeholder={"Réponse"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={18}
                                    title={
                                        "Quels seraient vos 5 chouchous plastiques, les objets plastiques qui vous accompagnent au quotidien et auxquels vous ne renonceriez pour rien au monde ?"
                                    }
                                >
                                    <Textarea className={"mt-4"} placeholder={"Premier chouchou"}/>
                                    <Textarea className={"mt-4"} placeholder={"Deuxième chouchou"}/>
                                    <Textarea className={"mt-4"} placeholder={"Troisième chouchou"}/>
                                    <Textarea className={"mt-4"} placeholder={"Quatrième chouchou"}/>
                                    <Textarea className={"mt-4"} placeholder={"Cinquième chouchou"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={19}
                                    title={"Qu'est-ce que vous aimeriez dire de cette expérience ?"}
                                >
                                    <Textarea className={"mt-4"} placeholder={"Réponse"}/>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={20}
                                    title={"Quelles sont les prochaines étapes pour vous à présent ?"}
                                >
                                    <FormCheckboxs
                                        color={color}
                                        nbColumns={2}
                                        options={[
                                            "Je vais continuer l'aventure DGP en suivant les actualités du site et en n'hésitant pas à commenter et alimenter les espaces participatifs",
                                            "Je vais marquer une pause parce que c'est compliqué de vivre quotidiennement avec moins de plastique",
                                            "Je vais maintenir ma vigilance quant aux types de plastiques présents dans mon quotidien",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
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
