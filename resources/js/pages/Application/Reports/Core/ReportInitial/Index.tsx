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
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ArrowRight} from "lucide-react";

interface ReportInitialProps {
    token: string;
    status: string;
}

export default function ReportInitial({token, status}: ReportInitialProps) {
    const nbSteps = 26;
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

                                {/* Diapositive 1 */}
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

                                {/* Diapositive 2 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={2}
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

                                {/* Diapositive 3 */}
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
                                        backgroundImage: "url(../../assets/images/t1.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                </Section>

                                {/* Diapositive 4 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={4}
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

                                {/* Diapositive 5 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={5}
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

                                {/* Diapositive 6 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={6}
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

                                {/* Diapositive 7 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={7}
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

                                {/* Diapositive 8 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={8}
                                    subtitle={
                                        "En sachant qu'une salière en plastique compte pour un objet, qu'un pot de yaourt également"
                                    }
                                    title={
                                        "Dans votre cuisine combien possédez-vous, environ, d'objets plastiques ou emballés dans du plastique ?"
                                    }
                                >
                                    <Button
                                        className={"m-4 w-96 mx-auto"}
                                        color="secondary"
                                        size="sm"
                                        onClick={onOpen}
                                    >
                                        Un petit coup de pouce ?
                                    </Button>

                                    <Modal isOpen={isOpen} size={"5xl"} onClose={onClose}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalBody>
                                                        <div className={"w-full"}>
                                                            <Image
                                                                alt={"Illustration"}
                                                                className={"w-full"}
                                                                src={"https://media.discordapp.net/attachments/990589372795588649/1329487786474078320/coup_pouce_1_1.png?ex=678a857c&is=678933fc&hm=fb95cd45ebf39a39f247625a520620bbf764c79b0e80402a5cdf0e520656aa19&=&width=2000&height=1434"}
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

                                    <Input placeholder={"Nombre d'objets"} type={'number'} />
                                </Section>

                                {/* Diapositive 9 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={9}
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
                                                        "https://cdn.discordapp.com/attachments/990589372795588649/1329487786796908716/CoupPouce_1_2.png?ex=678a857d&is=678933fd&hm=ca070823698aa7dbe83c5a2729f85b56642705af6f792b0d0cb76ca12cf22ed2&"
                                                    }
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <FormRadios
                                        color={"secondary"}
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

                                {/* Diapositive 10 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={10}
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

                                {/* Diapositive 11 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#F7B501]'}
                                    indicatorColor={'bg-[#FAEF38]'}
                                    btnTextColor={'text-black'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={11}
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

                                {/* Diapositive 12 */}
                                <Section
                                    bgColor={'bg-[#F7B501]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={11}
                                >

                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t2.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }}/>

                                </Section>

                                {/* Diapositive 12 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={12}
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

                                {/* Diapositive 13 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={13}
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

                                {/* Diapositive 14 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={14}
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

                                {/* Diapositive 15 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={15}
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

                                {/* Diapositive 16 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={16}
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

                                {/* Diapositive 17 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={17}
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

                                {/* Diapositive 18 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={18}
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

                                {/* Diapositive 19 */}
                                <Section
                                    bgColor={'bg-[#5BBB7D]'}
                                    btnColor={'bg-[#F18BAF]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={19}
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

                                {/* Diapositive 20 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={20}
                                >

                                    <div className={"h-96 w-full z-0"} style={{
                                        backgroundImage: "url(../../assets/images/t3.png)",
                                        backgroundSize: "contain",
                                        backgroundPosition: "top",
                                        backgroundRepeat: 'no-repeat'
                                    }}/>

                                </Section>

                                {/* Diapositive 21 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={21}
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

                                {/* Diapositive 22 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={22}
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

                                {/* Diapositive 23 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={23}
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

                                {/* Diapositive 24 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={24}
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

                                {/* Diapositive 25 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    step={25}
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

                                {/* Diapositive 26 */}
                                <Section
                                    bgColor={'bg-[#F18BAF]'}
                                    btnColor={'bg-[#5BBB7D]'}
                                    indicatorColor={'bg-[#61FFA8]'}
                                    footerColor={color}
                                    fullpageApi={fullpageApi}
                                    nbSteps={nbSteps}
                                    title={"Merci à vous d'avoir répondu à ce questionnaire !"}
                                    step={26}
                                >

                                    <Button className={"mt-6"} color="secondary" size="lg" variant="solid" onClick={submit} disabled={status === 'enabled'}>
                                        Je valide mes réponses {' '} <ArrowRight size={16} />
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
