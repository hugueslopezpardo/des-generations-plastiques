"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Image,
    useDisclosure,
    PopoverContent,
    PopoverTrigger,
    Popover,
    Input,
    Textarea,
    Spacer,
    SelectItem,
    Select,
} from "@nextui-org/react";

import Section from "@/components/section/section";
import FormCheckboxs from "@/components/forms/form-checkboxs";
import FormSliders from "@/components/forms/form-sliders";
import FormRadios from "@/components/forms/form-radios";
import React from "react";
import {Head, Link, useForm} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";
import {Flex} from "@radix-ui/themes";

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
        post(route('reports.initial.finish', token), {
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
            <Head title={"Bilan initial"}/>
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
                                    footerColor={color}
                                    title={"Bilan initial"}
                                >
                                    <p className="mt-6 text-lg leading-8 text-justify">
                                        Bienvenue à vous pour cette première étape de l’aventure des
                                        générations plastiques ! Ce questionnaire, imaginé par des
                                        citoyens et citoyennes lors d&apos;ateliers participatifs,
                                        cherche à établir un premier &#34;bilan plastique&#34; : Que
                                        savez-vous sur les plastiques ? Avez-vous l’impression d’être
                                        informé·e·s sur ce sujet ? Est-ce un sujet qui vous préoccupe
                                        ? C’est ce que nous allons découvrir ensemble lors de cette
                                        première étape, à vos marques, prêt·e, partez !!!
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
                                    subtitle={
                                        "Vous voilà contributeur ou contributrice du programme de sciences participatives Des Générations Plastiques (DGP)"
                                    }
                                    title={"Quelles sont vos principales motivations ?"}
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "L'environnement en général",
                                            "La question des plastiques en particulier",
                                            "Les sciences participatives",
                                            "Mon entourage",
                                            "L'occasion de me lancer un défi",
                                            "L'accès à des ressources sur les plastiques",
                                            "La poursuite de mon engagement contre les pollutions plastiques",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F2EDE7]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                >

                                    {/*<img alt={'demo'}  src={'https://cdn.discordapp.com/attachments/990589372795588649/1285610778757562479/1_Transition.png?ex=66eae5d7&is=66e99457&hm=f17d66f6b317b1feb67a519d4a476fea7f45c3d12e4c51b7bf50a481f5831e26&'} className={'w-full'} />
*/}
                                    <h1 className="text-4xl font-bold text-center">
                                        Transition 1
                                    </h1>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                    title={
                                        "Dans les domaines cosmétique, textile et alimentaire, à quelle fréquence achetez-vous des objets plastiques ou emballés dans du plastique"
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
                                            {value: 0, label: "Chaque semaine"},
                                            {value: 1, label: "Chaque mois"},
                                            {value: 2, label: "Chaque année"},
                                            {value: 3, label: "Jamais"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#61FFA8]'}
                                    indicatorColor={'bg-[#F7B501]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={3}
                                    title={
                                        "Dans les domaines des produits ménagers et du mobilier, à quelle fréquence achetez-vous des objets plastiques ou emballés dans du plastique"
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
                                            {value: 0, label: "Chaque semaine"},
                                            {value: 1, label: "Chaque mois"},
                                            {value: 2, label: "Chaque année"},
                                            {value: 3, label: "Jamais"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#61FFA8]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={4}
                                    title={
                                        "Dans les domaines de la santé et du sport & loisirs, à quelle fréquence achetez-vous des objets plastiques ou emballés dans du plastique"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Santé", "Sports et loisirs"]}
                                        leftLabel={""}
                                        maxValue={3}
                                        minValue={0}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 0, label: "Chaque semaine"},
                                            {value: 1, label: "Chaque mois"},
                                            {value: 2, label: "Chaque année"},
                                            {value: 3, label: "Jamais"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={5}
                                    title={"Combien de personnes vivent dans votre foyer ?"}
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Nombre de personnes dans le foyer"]}
                                        leftLabel={""}
                                        maxValue={6}
                                        minValue={1}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 1, label: "1"},
                                            {value: 2, label: "2"},
                                            {value: 3, label: "3"},
                                            {value: 4, label: "4"},
                                            {value: 5, label: "5"},
                                            {value: 6, label: "6+"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={6}
                                    subtitle={
                                        "En sachant qu'une salière en plastique compte pour un objet, qu'un pot de yaourt également"
                                    }
                                    title={
                                        "Dans votre cuisine combien possédez-vous, environ, d'objets plastiques ou emballés dans du plastique ?"
                                    }
                                >
                                    <Button
                                        className={"m-4"}
                                        color="secondary"
                                        size="sm"
                                        variant="solid"
                                        onClick={onOpen}
                                    >
                                        Un petit coup de pouce ?
                                    </Button>

                                    <Modal isOpen={isOpen} size={"5xl"} onClose={onClose}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">
                                                        Ne les oubliez pas !
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <div className={"grid grid-cols-3 gap-10 w-full"}>
                                                            <Image
                                                                alt={"Illustration"}
                                                                className={"h-48"}
                                                                src={"https://dgp.ledome.info/images/im1.png"}
                                                            />
                                                            <Image
                                                                alt={"Illustration"}
                                                                className={"h-48"}
                                                                src={"https://dgp.ledome.info/images/im2.png"}
                                                            />
                                                            <Image
                                                                alt={"Illustration"}
                                                                className={"h-48"}
                                                                src={"https://dgp.ledome.info/images/im3.png"}
                                                            />
                                                        </div>
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button
                                                            color="danger"
                                                            variant="light"
                                                            onPress={onClose}
                                                        >
                                                            Fermer
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>

                                    <Input placeholder={"Nombre d'objets"} type={"number"}/>
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={7}
                                    title={
                                        "Approximativement, quel volume jetez-vous chaque semaine dans la poubelle jaune ?"
                                    }
                                >
                                    <div className={"m-8 mx-auto w-full"}>
                                        <Popover key={"help"} placement="top">
                                            <PopoverTrigger>
                                                <Button color={"secondary"} size={"sm"}>
                                                    Un petit coup de pouce ?
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
                                        color={"secondary"}
                                        name={"volume"}
                                        nbColumns={3}
                                        options={[
                                            "Moins de 75L",
                                            "Entre 75L et 150L",
                                            "Entre 150L et 250L",
                                            "Plus de 250L",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={8}
                                    subtitle={"On se lance dans le tri !"}
                                    title={
                                        "Identifiez quels sont les 3 objets plastiques que vous retrouvez le plus dans vos poubelles jaunes ?"
                                    }
                                >
                                    <Textarea placeholder="Objet 1" rows={1}/>
                                    <Spacer y={8}/>
                                    <Textarea placeholder="Objet 2" rows={1}/>
                                    <Spacer y={8}/>
                                    <Textarea placeholder="Objet 3" rows={1}/>
                                    <Spacer y={8}/>
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={9}
                                    subtitle={
                                        "Classez vos 3 commerces les plus fréquentés de 1 à 3"
                                    }
                                    title={
                                        "Où faites-vous habituellement vos courses alimentaires ?"
                                    }
                                >
                                    <Select label="Magasin 1" placeholder="Premier commerce">
                                        {magasins1.map((magasin) => (
                                            <SelectItem key={magasin} value={magasin}>
                                                {magasin}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Spacer y={2}/>
                                    <Select
                                        className="mt-4"
                                        label="Magasin 2"
                                        placeholder="Deuxième commerce"
                                    >
                                        {magasins.map((magasin) => (
                                            <SelectItem key={magasin} value={magasin}>
                                                {magasin}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Spacer y={2}/>
                                    <Select
                                        className="mt-4"
                                        label="Magasin 3"
                                        placeholder="Troisième commerce"
                                    >
                                        {magasins.map((magasin) => (
                                            <SelectItem key={magasin} value={magasin}>
                                                {magasin}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </Section>

                                <Section
                                    bgColor={'bg-[#F2EDE7]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                >
                                    {/*
                                <img alt={'demo'} src={'https://cdn.discordapp.com/attachments/990589372795588649/1285614742131572787/2_Transition.png?ex=66eae988&is=66e99808&hm=60ebbacb95bcec8554c331cb8cb9e82bea254627096b27d7f637bf9ab75314e4&'} className={'w-full'} />
*/}
                                    <h1 className="text-4xl font-bold text-center">
                                        Transition 2
                                    </h1>
                                </Section>


                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={10}
                                    title={"Aujourd'hui, le plastique pour vous c'est avant tout"}
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "Pratique",
                                            "Du pétrole",
                                            "Une pollution",
                                            "Indispensable",
                                            "Pas cher",
                                            "Imposé par manque d'alternatives",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={11}
                                    title={
                                        "D'après vous, où peut-on retrouver du plastique aujourd'hui ?"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "Dans un océan",
                                            "Dans une rivière, un fleuve",
                                            "Au sommet d'une montagne",
                                            "Dans l'organisme d'un être humain",
                                            "Dans l'organisme d'un animal",
                                            "Dans une forêt",
                                            "Dans une ville",
                                            "Dans un désert",
                                            "Dans un lac",
                                            "Dans les nuages",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={12}
                                    title={
                                        "A quel point vous sentez-vous informé.e sur la thématique des plastiques ?"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Niveau d'information"]}
                                        leftLabel={""}
                                        maxValue={10}
                                        minValue={1}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 1, label: "Pas du tout"},
                                            {value: 10, label: "Parfaitement informé.e"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={13}
                                    title={
                                        "Avez-vous connaissance d'alternatives au plastique dans votre quotidien ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"niveau"}
                                        nbColumns={1}
                                        options={[
                                            "Non, pas du tout",
                                            "Oui un peu",
                                            "Oui, je connais déjà pas mal d'alternatives",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={14}
                                    title={"Les termes suivants vous paraissent-ils clairs ?"}
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={[
                                            "Biodégradables",
                                            "Biosourcés",
                                            "Compostables",
                                            "Bioplastiques",
                                            "Recyclables",
                                        ]}
                                        leftLabel={""}
                                        maxValue={10}
                                        minValue={1}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 1, label: "Pas du tout"},
                                            {value: 10, label: "Tout à fait"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={15}
                                    title={
                                        "Avant de découvrir notre programme de recherche participative, aviez-vous déjà entendu parler de plastiques fabriqués à l'intérieur même de bactéries, tels que les PHA (PolyHydroxyAlcanoates) ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"pha"}
                                        nbColumns={1}
                                        options={["Oui", "Non"]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={16}
                                    title={
                                        "Avant de découvrir notre programme de recherche participative, aviez-vous déjà entendu parler de plastiques produits à partir d'amidon de maïs ou de cane à sucre, tels que les PLA (Acide PolyLactique) ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"pla"}
                                        nbColumns={1}
                                        options={["Oui", "Non"]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={17}
                                    title={
                                        "Lorsque l’on vous parle de bioplastiques, comprenez-vous"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "Des plastiques fabriqués à partir de végétaux",
                                            "Des plastiques dégradables dans des conditions naturelles",
                                            "Des plastiques dégradables en composteur industriel",
                                            "J’ai déjà entendu le terme mais sa définition reste floue",
                                            "Je n’en ai jamais entendu parler",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>


                                <Section
                                    bgColor={'bg-[#F2EDE7]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                >
                                    {/*
                                <img alt={'demo'}  src={'https://cdn.discordapp.com/attachments/990589372795588649/1285615409013198898/3_Transition.png?ex=66eaea27&is=66e998a7&hm=a33d737610545ba3d2318c43557085a37048f9ff72ab45a41eda8ad7e0ba3c77&'} className={'w-full'} />
                                */}
                                    <h1 className="text-4xl font-bold text-center">
                                        Transition 3
                                    </h1>
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={18}
                                    title={
                                        "Avez-vous déjà commencé à diminuer votre consommation plastique ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"consommation"}
                                        nbColumns={1}
                                        options={[
                                            "Oui, depuis un bon moment maintenant",
                                            "Oui, j'y apporte une attention de plus en plus importante",
                                            "Non mais c'est programmé et je m'organise",
                                            "Pas vraiment, mais je souhaite m'y mettre sérieusement",
                                            "Je n'ai pas initié une diminution de ma consommation plastique pour le moment",
                                            "Autre",
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={19}
                                    title={
                                        "Si vous avez déjà entrepris des démarches de modification, avez-vous rencontré des difficultés de ce type ?"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "Problème de temps",
                                            "Problème d'organisation",
                                            "Problème de coût",
                                            "Manque d'envie",
                                            "Difficultés pour trouver des alternatives",
                                            "Indifférence de l'entourage",
                                            "Beaucoup d'effort pour pas grand chose",
                                            "Je n'ai pas rencontré de difficultés particulières",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={20}
                                    title={
                                        "A quel point vous sentez-vous en accord entre ce que vous pensez et ce que vous faîtes à propos de votre consommation de plastique ?"
                                    }
                                >
                                    <FormSliders
                                        color={"secondary"}
                                        labels={["Niveau d'accord"]}
                                        leftLabel={""}
                                        maxValue={10}
                                        minValue={1}
                                        rightLabel={""}
                                        sliderStepMarks={[
                                            {value: 1, label: "Désaccord total"},
                                            {value: 10, label: "Parfaite cohérence"},
                                        ]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={21}
                                    title={
                                        "Connaissez-vous des personnes ou des structures particulièrement engagées dans cette démarche ?"
                                    }
                                >
                                    <FormRadios
                                        color={"secondary"}
                                        name={"engagement"}
                                        nbColumns={1}
                                        options={["Oui", "Non"]}
                                    />
                                </Section>

                                <Section
                                    bgColor={bgColor}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={22}
                                    title={
                                        "Et une dernière question : dans les 3 semaines à venir, comptez-vous :"
                                    }
                                >
                                    <FormCheckboxs
                                        color={"secondary"}
                                        nbColumns={3}
                                        options={[
                                            "Vous renseigner sur les plastiques (fabrication, cycle de vie, pollution)",
                                            "En discuter avec vos proches",
                                            "Vous informer sur les lieux engagés dans une réduction des plastiques",
                                            "Commencer à identifier ce que vous consommez et achetez comme plastique",
                                            "Réduire un peu votre consommation de plastique",
                                            "Réduire beaucoup votre consommation de plastique",
                                            "Ne pas bousculer votre quotidien pour le moment",
                                            "Autre",
                                        ]}
                                        onChange={() => {
                                        }}
                                    />
                                </Section>

                                <Section
                                    bgColor={'bg-[#F2EDE7]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
                                >
                                    <Button className={"m-4"} color="secondary" size="lg" variant="solid">
                                        <Link href={"/"}>Retour à l'accueil</Link>
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
