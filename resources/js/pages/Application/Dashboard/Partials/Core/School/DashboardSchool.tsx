import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {Gender, Region} from "@/types";
import DashboardSchoolStudents from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolStudents";
import DashboardSchoolGeneral from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneral";
import DashboardSchoolSettings from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolSettings";
import DashboardSchoolGeneralGroup
    from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneralGroup";
import {useForm, usePage} from "@inertiajs/react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Flex, Grid, Text} from "@radix-ui/themes";
import {Checkbox} from "@/components/ui/checkbox";
import {
    ArrowRight,
    Building,
    Earth,
    Globe,
    Hammer,
    Lightbulb,
    Package,
    StepForward,
    Store,
    Terminal
} from "lucide-react";
import React, {FormEventHandler} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Input} from "@/components/ui/input";
interface DashboardSchoolProps {
    schoolInformation: any;
    genders: Gender[];
    regions: Region[];
    deliveryStatus: any;
    images: string[];
    students: any[];
    levels: any[];
    kits: any[];
    kit_vegetations: any[];
    kit_dirts: any[];
    kit_lights: any[];
}
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/libs/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { fr } from 'date-fns/locale';
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";

enum TerrainType {
    UNDEFINED = 'UNDEFINED',
    ENFOUISSEMENT = 'ENFOUISSEMENT',
    CLOUAGE = 'CLOUAGE',
    LUMIERE = 'LUMIERE'
}

enum DeliveryStatus {
    WAITING = 'WAITING',
    DELIVERED = 'DELIVERED',
}


interface DashboardSchoolBiodegradabilityKitImageProps {
    kit_id: number;
    kit_index: number;
    card_title: string;
    card_description: string;
    title: string;
    description: string;
}

const DashboardSchoolBiodegradabilityKitImage = (props: DashboardSchoolBiodegradabilityKitImageProps) => {

    const [date, setDate] = React.useState<Date>()

    const {data, setData, post, processing, errors, reset} = useForm({
        kit_id: props.kit_id,
        index: props.kit_index,
        title: props.title,
        description: props.description,
        image: null as File | null,
        date: date?.toDateString(),
    });

    React.useEffect(() => {
        setData('date', date?.toLocaleDateString());
    }, [date]);

    const {toast} = useToast();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('dashboard.kit.image.store'), {
            onSuccess: () => {
                toast({
                    title: 'Photo enregistrée',
                    description: 'La photo a bien été enregistrée.',
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de l\'enregistrement de la photo.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardDescription>
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit} encType={'multipart/form-data'}>

                    <Flex direction={'column'} gap={'4'}>
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'photo'}>Date de la photo</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground" &&
                                            `${errors.date ? 'border-red-500' : ''}`
                                        )}
                                    >
                                        <CalendarIcon/>
                                        {date ? format(date, "PPP", {locale: fr}) : <span>Cliquez pour choisir une date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        locale={fr}
                                    />
                                </PopoverContent>
                            </Popover>
                            <Text className={'text-sm text-red-500'}>
                                {errors.date}
                            </Text>
                        </Flex>
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'photo'}>Choix de la photo</Label>
                            <Input
                                className={`${
                                    errors.image ? 'border-red-500' : ''
                                }`}
                                type="file"
                                multiple={false}
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setData('image', file);
                                    }
                                }}
                            />
                            <Text className={'text-sm text-red-500'}>
                                {errors.image}
                            </Text>
                        </Flex>
                        <Flex direction={'column'} gap={'2'}>
                            <Button className={'w-full'} onClick={submit}>
                                Ajouter une photo <ArrowRight size={16}/>
                            </Button>
                        </Flex>
                    </Flex>
                </form>
            </CardContent>
        </Card>
    )
}

const DashboardSchoolDelivery = ({deliveryStatus, school}: any) => {

    // Get the user
    const {user} = usePage().props.auth;

    const {data, setData, post, processing, errors, reset} = useForm({
        is_delivery: deliveryStatus.delivery_status_id,
    });

    const handleDelivery = (status: number) => {
        if (status === 1) {
            setData('is_delivery', 3);
        } else {
            setData('is_delivery', 1);
        }

    }

    const {toast} = useToast();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('dashboard.school.delivery.status'), {
            onSuccess: () => {
                toast({
                    title: 'Statut de livraison enregistré',
                    description: 'Le statut de livraison a bien été enregistré.',
                })
            },
            onError: () => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de l\'enregistrement du statut de livraison.',
                    variant: 'destructive'
                })
            }
        });
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Statut de livraison du kit
                </CardTitle>
                <CardDescription>
                        <Text>
                            Une fois les kits en votre possession, veuillez cocher la case ci-dessous pour confirmer la réception de vos kits.
                        </Text>

                </CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {deliveryStatus.delivery_status_id === 1 && (
                        <Badge className={'bg-slate-500 text-white'}>
                            En attente de livraison
                        </Badge>)}
                    {deliveryStatus.delivery_status_id === 2 && (
                        <Badge className={'bg-green-500 text-white'}>
                            En cours de livraison
                        </Badge>)}

                    {deliveryStatus.delivery_status_id === 3 && (
                        <Badge className={'bg-green-500 text-white'}>
                            Livré
                        </Badge>)}

                    {deliveryStatus.delivery_status_id === 4 && (<Badge className={'bg-red-500 text-white'}>
                        Annulé
                    </Badge>)}

                    {deliveryStatus.delivery_status_id === 5 && (
                        <Badge className={'bg-gray-500 text-white'}>
                            Retourné
                        </Badge>
                    )}
                    {deliveryStatus.delivery_status_id === 6 && (
                        <Badge className={'bg-gray-500 text-white'}>
                            Livraison par nos médiateur·rices
                        </Badge>
                    )}

                    <Grid columns={{
                        'sm': '1', 'md': '2',
                    }} gap={'4'} className={'mt-4'}>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="delivery" defaultChecked={data.is_delivery === 3} onClick={() => handleDelivery(data.is_delivery)} />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Je confirme avoir reçu mes kits
                            </label>
                        </div>
                    </Grid>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button onClick={submit}>
                    Enregistrer <ArrowRight size={16}/>
                </Button>
            </CardFooter>
        </Card>
    );
}

interface DashboardSchoolProtocoleProps {
    kits: any;
    kit_vegetations: any;
    kit_dirts: any;
    kit_lights: any;
}

const DashboardSchoolProtocole = ({kits, kit_vegetations, kit_dirts, kit_lights}: DashboardSchoolProtocoleProps) => {
    const {data, setData, patch, processing, errors, reset} = useForm({
        kit_id: 0,
        kit_protocol_id: 1,
        kit_protocol_type: 1,
        kit_vegetation_id: 1,
        kit_dirt_id: 1,
        kit_light_id: 1,
    });

    const {toast} = useToast();

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('dashboard.kit.patch'), {
            onSuccess: () => {
                toast({
                    title: 'Protocole enregistré',
                    description: 'Le protocole a bien été enregistré.',
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de l\'enregistrement du protocole.',
                    variant: 'destructive'
                })
            }
        });
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Gestions des kits
                </CardTitle>
                <CardDescription>
                    Gérez les kits de l'aventure "Des générations plastiques".
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {kits.map((kit: any, index: number) => (
                        <AccordionItem key={index} value={`kit-${index}`}>
                            <AccordionTrigger onClick={() => {setData('kit_id', kit.id)}}>Kit numéro {index + 1}</AccordionTrigger>
                            <AccordionContent>
                                <Flex gap={'2'} direction={'column'}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Choix du type de protocole
                                            </CardTitle>
                                            <CardDescription>
                                                Choisissez le type de protocole que vous souhaitez réaliser pour l'expérience de biodégradabilité.
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <CardDescription>
                                                <Grid columns={{
                                                    'sm': '1', 'md': '3',
                                                }} gap={'4'}>

                                                    <Card className={`border-2 border-gray-200 shadow-lg ${data.kit_protocol_id === 2 ? ' border-green-500 text-green-500' : ''} ${kit.kit_protocol_id === 2 ? ' bg-green-500 text-white border-2 border-green-400' : ''}`}
                                                          onClick={() => {setData('kit_protocol_id', 2)}}>
                                                        <CardHeader>
                                                            <CardTitle>
                                                                <Flex justify={'start'} align={'center'} gap={'2'}
                                                                      className={`group-hover:text-green-500`}>
                                                                    <Earth size={32} className={'inline-block'}/> Enfouissement
                                                                </Flex>
                                                            </CardTitle>
                                                            <CardDescription className={`${kit.kit_protocol_id === 2 ? 'text-white' : ''}`}>
                                                                Je choisis d’enfouir le cadre dans de la terre pour réaliser l’expérience de biodégradabilité.
                                                            </CardDescription>
                                                        </CardHeader>
                                                    </Card>

                                                    <Card className={`border-2 border-gray-200 shadow-lg ${data.kit_protocol_id === 3 ? ' border-green-500 text-green-500' : ''} ${kit.kit_protocol_id === 3 ? ' bg-green-500 text-white border-2 border-green-400' : ''}`}
                                                          onClick={() => setData('kit_protocol_id', 3)}>
                                                        <CardHeader>
                                                            <CardTitle>
                                                                <Flex justify={'start'} align={'center'} gap={'2'}
                                                                      className={`group-hover:text-green-500`}>
                                                                    <Hammer size={32} className={'inline-block'}/> Clouage du kit
                                                                </Flex>
                                                            </CardTitle>
                                                            <CardDescription className={`${kit.kit_protocol_id === 3 ? 'text-white' : ''}`}>
                                                                Je choisis de clouer le cadre sur un support à l’extérieur pour réaliser l’expérience de biodégradabilité.
                                                            </CardDescription>
                                                        </CardHeader>
                                                    </Card>

                                                    <Card className={`border-2 border-gray-200 shadow-lg ${data.kit_protocol_id === 4 ? ' border-green-500 text-green-500' : ''} ${kit.kit_protocol_id === 4 ? ' bg-green-500 text-white border-2 border-green-400' : ''}`}
                                                          onClick={() => setData('kit_protocol_id', 4)}>
                                                        <CardHeader>
                                                            <CardTitle>
                                                                <Flex justify={'start'} align={'center'} gap={'2'}
                                                                      className={`group-hover:text-green-500`}>
                                                                    <Lightbulb size={32} className={'inline-block'}/> Exposition à la lumière
                                                                </Flex>
                                                            </CardTitle>
                                                            <CardDescription className={`${kit.kit_protocol_id === 4 ? 'text-white' : ''}`}>
                                                                Je choisis d’accrocher le cadre à la face intérieure d’une fenêtre pour réaliser l’expérience de biodégradabilité.                                                             </CardDescription>
                                                        </CardHeader>
                                                    </Card>
                                                </Grid>
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter>
                                            <Flex direction={'column'} className={'w-full'}>
                                                {(data.kit_protocol_id !== 1) &&
                                                    (data.kit_protocol_id === 2 || data.kit_protocol_id === 3) && (
                                                        <Card>
                                                            <CardHeader>
                                                                <CardTitle>
                                                                    Type de terrain
                                                                </CardTitle>
                                                                <CardDescription>
                                                                    Précisez le type de terrain sur lequel vous allez réaliser l'expérience de biodégradabilité.
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent>

                                                                <Flex justify={'center'} align={'center'} gapY={'4'} direction={'column'}>
                                                                    <Flex direction={'column'} className={'w-full'} gap={'2'}>
                                                                        <Label htmlFor="type_terre" className={'text-sm font-medium'}>
                                                                            Type de terre
                                                                        </Label>
                                                                        <Select onValueChange={(value) => setData('kit_dirt_id', Number(value))}>
                                                                            <SelectTrigger className="w-full">
                                                                                <SelectValue placeholder={
                                                                                    kit_dirts.find((dirt: any) => dirt.id === data.kit_dirt_id)?.name ?? 'Choisissez un type de terre'
                                                                                } className={`${errors.kit_dirt_id ? 'text-red-500' : ''}`}/>
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectGroup>
                                                                                    <SelectLabel>Type de sol ou contenant</SelectLabel>
                                                                                    {kit_dirts.slice(1).map((dirt: any, index: number) => (
                                                                                        <SelectItem key={index} value={dirt.id}>{dirt.name}</SelectItem>
                                                                                    ))}
                                                                                </SelectGroup>
                                                                            </SelectContent>
                                                                        </Select>
                                                                        <Text className={'text-sm text-red-500'}>
                                                                            {errors.kit_dirt_id}
                                                                        </Text>
                                                                    </Flex>

                                                                    <Flex direction={'column'} className={'w-full'} gap={'2'}>
                                                                        <Label htmlFor="type_vegetal" className={'text-sm font-medium'}>
                                                                            Type de végétal
                                                                        </Label>
                                                                        <Select onValueChange={(value) => setData('kit_vegetation_id', Number(value))}>
                                                                            <SelectTrigger className="w-full">
                                                                                <SelectValue placeholder={
                                                                                    kit_vegetations.find((vegetation: any) => vegetation.id === data.kit_vegetation_id)?.name ?? 'Choisissez un type de végétal'
                                                                                }
                                                                                             className={`${errors.kit_vegetation_id ? 'text-red-500' : ''}`}/>
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectGroup>
                                                                                    <SelectLabel>Type de végétal</SelectLabel>
                                                                                    {kit_vegetations.slice(1).map((vegetation: any, index: number) => (
                                                                                        <SelectItem key={index} value={vegetation.id}>{vegetation.name}</SelectItem>
                                                                                    ))}
                                                                                </SelectGroup>
                                                                            </SelectContent>
                                                                        </Select>
                                                                        <Text className={'text-sm text-red-500'}>
                                                                            {errors.kit_vegetation_id}
                                                                        </Text>
                                                                    </Flex>

                                                                </Flex>

                                                            </CardContent>
                                                        </Card>
                                                    )
                                                }

                                                {(data.kit_protocol_id == 4) && (
                                                    <Card>
                                                        <CardHeader>
                                                            <CardTitle>
                                                                Type d'éxposition
                                                            </CardTitle>
                                                            <CardDescription>
                                                                Précisez le type d'exposition à la lumière que vous allez réaliser l'expérience de biodégradabilité.
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent>

                                                            <Flex justify={'center'} align={'center'} gapY={'4'} direction={'column'}>
                                                                <Flex direction={'column'} className={'w-full'} gap={'2'}>
                                                                    <Label htmlFor="type_terre" className={'text-sm font-medium'}>
                                                                        Type d'exposition
                                                                    </Label>
                                                                    <Select onValueChange={(value) => setData('kit_light_id', Number(value))}>
                                                                        <SelectTrigger className="w-full">
                                                                            <SelectValue placeholder={
                                                                                kit_lights.find((light: any) => light.id === data.kit_light_id)?.name ?? 'Choisissez un type d\'exposition'
                                                                            }
                                                                                         className={`${errors.kit_light_id ? 'text-red-500' : ''}`}/>
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectGroup>
                                                                                <SelectLabel>Type de sol ou contenant</SelectLabel>
                                                                                {kit_lights.slice(1).map((light: any, index: number) => (
                                                                                    <SelectItem key={index} value={light.id}>{light.name}</SelectItem>
                                                                                ))}
                                                                            </SelectGroup>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <Text className={'text-sm text-red-500'}>
                                                                        {errors.kit_light_id}
                                                                    </Text>
                                                                </Flex>

                                                            </Flex>

                                                        </CardContent>
                                                    </Card>
                                                )}


                                                <Button onClick={submit} className={'mt-4'}>
                                                    Enregistrer <ArrowRight size={16}/>
                                                </Button>
                                            </Flex>
                                        </CardFooter>
                                    </Card>

                                    <DashboardSchoolBiodegradabilityKitImage card_title={'Photo du lieu de l\'expérience'} card_description={`Ajouter une photo du lieu de l'expérience pour le kit numéro ${index + 1}.`} kit_id={kit.id}  title={'Photo du lieu de l\'expérience'} description={`Kit numéro ${index + 1}`} kit_index={index + 1} />
                                    <DashboardSchoolBiodegradabilityKitImage card_title={'Photo de début de l\'expérience'} card_description={`Ajouter une photo de votre kit assemblé pour le kit numéro ${index + 1}.`} kit_id={kit.id} title={'Photo de début de l\'expérience'} description={`Kit numéro ${index + 1}`} kit_index={index + 1} />
                                    <DashboardSchoolBiodegradabilityKitImage card_title={'Photo de fin de l\'expérience'} card_description={`Ajouter une photo du kit après l'expérience pour le kit numéro ${index + 1}.`} kit_id={kit.id}  title={'Photo de fin de l\'expérience'} description={`Kit numéro ${index + 1}`} kit_index={index + 1} />
                                    <DashboardPicturesGallery images={kit.images} />
                                </Flex>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )

}

const DashboardSchool = ({schoolInformation, regions, genders, deliveryStatus, images, students, levels, kits, kit_vegetations, kit_dirts, kit_lights}: DashboardSchoolProps) => {

    // Get the user
    const {user} = usePage().props.auth;

    {/* @ts-ignore */}
    const isSolo = user.is_solo;

    const nbStudents = students.length;

    const nbImages = images.length;

    const imagesOfKits:any[] = [];

    kits.forEach((kit: any) => {
        kit.images.forEach((image: any) => {
            imagesOfKits.push(image);
        });
    });

    return (
        <>

        {isSolo ? (<Tabs defaultValue="general_home" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="general_home">
                    Accueil
                </TabsTrigger>
                <TabsTrigger value="general_group">
                    Expérience de consommation
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Expérience de biodégradabilité
                </TabsTrigger>
                <TabsTrigger value="settings">Informations du compte</TabsTrigger>
            </TabsList>
            <TabsContent value={'general_home'}>
                <Flex direction={'column'} gap={'2'}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <b className={'uppercase'}>Bienvenue sur Des Générations Plastiques</b>
                            </CardTitle>
                            <CardDescription>
                                Cet espace vous permettra de suivre l’expérience pendant les 4 mois. Vous pourrez suivre votre kit, déposer des photos du protocole sur la biodégradabilité et accéder à vos 3 questionnaires.
                                Nous vous souhaitons une bonne aventure des générations plastiques !
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Aide au démarrage du protocole scolaire
                            </CardTitle>
                            <CardDescription>
                                Vous ne savez pas par où commencer ? Suivez les étapes ci-dessous pour bien démarrer votre aventure
                            </CardDescription>
                            </CardHeader>
                        <CardContent>
                            <Flex direction={'column'} gap={'2'}>
                                <Alert className={`${nbStudents > 1 ? 'bg-green-100 text-green-500' : ''}`}>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Première étape : Préparez l’expérience comportementale
                                    </AlertTitle>
                                    <AlertDescription>
                                        Découvrez le premier questionnaire (bilan initial) en amont de votre session de médiation dans l’onglet “Expérience de consommation”.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Seconde étape : Répondez au bilan initial avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Répondez au premier questionnaire (bilan initial) dans l’onglet “Expérience de consommation” avec vos élèves.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Troisième étape :  Recevez vos kits et démarrez le protocole de dégradabilité
                                    </AlertTitle>
                                    <AlertDescription>
                                        Suivez l’état de vos kits sur l’onglet “Expérience de dégradabilité” de l’interface utilisateur. Une fois vos kits reçus,
                                        assemblez-les et prenez les en photos (une photo par kit).
                                        Renseignez sur ce même onglet le type de protocole choisi (enfouissement, clouage, exposition à la lumière).
                                        Une fois enfouis, cloués ou suspendus, prenez une photo de chaque environnement ,
                                        et remplissez les informations dans l’interface utilisateur.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Quatrième étape : Répondez au bilan intermédiaire avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Comme pour le premier questionnaire, vous pouvez y accéder en amont.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Cinquième étape : Répondez au bilan final avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Troisième et dernier questionnaire, il fonctionne comme les deux premiers !
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Sixième étape : Récupérez l’échantillon
                                    </AlertTitle>
                                    <AlertDescription>
                                        Déterrez ou récupérez l’échantillon, prenez une photo à l’aide du guide et téléchargez-la sur l’onglet “Expérience de dégradabilité”.
                                        <br />
                                        Bonus : prélevez un peu de terre et renvoyez-la avec l’échantillon à nos chercheurs.
                                    </AlertDescription>
                                </Alert>
                            </Flex>
                        </CardContent>
                    </Card>
                </Flex>
            </TabsContent>
            <TabsContent value="general_group">
                <DashboardSchoolGeneralGroup teacher={students[0]}/>
            </TabsContent>
            <TabsContent value="pictures">
                <Flex className={'flex-col gap-2'}>
                    <DashboardSchoolDelivery deliveryStatus={deliveryStatus} school={schoolInformation} />
                    <DashboardSchoolProtocole kits={kits} kit_vegetations={kit_vegetations} kit_dirts={kit_dirts} kit_lights={kit_lights} />
                    {/* @ts-ignore
                    <DashboardPicturesGallery images={imagesOfKits} />
                     */}
                </Flex>
            </TabsContent>
            <TabsContent value="settings">
                <DashboardSchoolSettings
                    deliveryStatus={deliveryStatus}
                    regions={regions}
                    levels={levels}
                    schoolInformation={schoolInformation}
                />
            </TabsContent>
        </Tabs>) : (<Tabs defaultValue="general_home" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-5">
                <TabsTrigger value="general_home">
                    Accueil
                </TabsTrigger>
                <TabsTrigger value="general_individual">
                    Expérience de consommation
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Expérience de biodégradabilité
                </TabsTrigger>
                <TabsTrigger value="students">Mes élèves</TabsTrigger>
                <TabsTrigger value="settings">Informations du compte</TabsTrigger>
            </TabsList>
            <TabsContent value={'general_home'}>
                <Flex direction={'column'} gap={'2'}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <b className={'uppercase'}>Bienvenue sur Des Générations Plastiques</b>
                            </CardTitle>
                            <CardDescription>
                                Cet espace vous permettra de suivre l’expérience pendant les 4 mois. Vous pourrez suivre votre kit, déposer des photos du protocole sur la biodégradabilité et accéder à vos 3 questionnaires.
                                Nous vous souhaitons une bonne aventure des générations plastiques !{' '}
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Aide au démarrage du protocole scolaire
                            </CardTitle>
                            <CardDescription>
                                Vous ne savez pas par où commencer ? Suivez les étapes ci-dessous pour bien démarrer votre aventure                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Flex direction={'column'} gap={'2'}>
                                <Alert className={`${nbStudents > 1 ? 'bg-green-100 text-green-500' : ''}`}>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Première étape : Préparez l’expérience comportementale
                                    </AlertTitle>
                                    <AlertDescription>
                                        Découvrez le premier questionnaire (bilan initial) en amont de votre session de médiation dans l’onglet “Expérience de consommation”. Puis ajoutez les élèves de votre classe dans l’onglet “Mes élèves”.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Seconde étape : Répondez au bilan initial avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Récupérez les liens individuels vers le premier questionnaire (bilan initial) dans l’onglet “Expérience de consommation” pour les envoyer à vos élèves. Chacune et chacun répondra individuellement.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Troisième étape : Recevez vos kits et démarrez le protocole de dégradabilité
                                    </AlertTitle>
                                    <AlertDescription>
                                        Suivez l’état de vos kits sur l’onglet “Expérience de dégradabilité” de l’interface utilisateur. Une fois vos kits reçus,
                                        assemblez-les et prenez les en photos (une photo par kit).
                                        Renseignez sur ce même onglet le type de protocole choisi (enfouissement, clouage, exposition à la lumière).
                                        Une fois enfouis, cloués ou suspendus, prenez une photo de chaque environnement ,
                                        et remplissez les informations dans l’interface utilisateur.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Quatrième étape : Répondez au bilan intermédiaire avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Comme pour le premier questionnaire, vous pouvez y accéder en amont, et récupérer les liens individuels pour vos élèves.
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Cinquième étape : Répondez au bilan final avec vos élèves
                                    </AlertTitle>
                                    <AlertDescription>
                                        Troisième et dernier questionnaire, il fonctionne comme les deux premiers !
                                    </AlertDescription>
                                </Alert>
                                <Alert>
                                    <StepForward className="h-4 w-4" />
                                    <AlertTitle>
                                        Sixième étape : Récupérez l’échantillon
                                    </AlertTitle>
                                    <AlertDescription>
                                        Déterrez ou récupérez l’échantillon, prenez une photo à l’aide du guide et téléchargez-la sur l’onglet “Expérience de dégradabilité”. Bonus : prélevez un peu de terre et renvoyez-la avec l’échantillon à nos chercheurs.
                                    </AlertDescription>
                                </Alert>
                            </Flex>
                        </CardContent>
                    </Card>
                </Flex>
            </TabsContent>
            <TabsContent value="general_individual">
                <DashboardSchoolGeneral students={students}/>
            </TabsContent>
            <TabsContent value="general_group">
                <DashboardSchoolGeneralGroup teacher={students[0]}/>
            </TabsContent>
            <TabsContent value="students">
                <DashboardSchoolStudents genders={genders} students={students}/>
            </TabsContent>
            <TabsContent value="pictures">
                <Flex className={'flex-col gap-2'}>
                    <DashboardSchoolDelivery deliveryStatus={deliveryStatus} school={schoolInformation} />
                    <DashboardSchoolProtocole kits={kits} kit_vegetations={kit_vegetations} kit_dirts={kit_dirts} kit_lights={kit_lights} />
                </Flex>
            </TabsContent>
            <TabsContent value="settings">
                <DashboardSchoolSettings
                    schoolInformation={schoolInformation}
                    deliveryStatus={deliveryStatus}
                    regions={regions}
                    levels={levels}
                />
            </TabsContent>
        </Tabs>)}
    </>);
}

export default DashboardSchool;
