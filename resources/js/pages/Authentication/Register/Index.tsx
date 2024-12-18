import {useToast} from "@/hooks/use-toast";
import {Link, useForm} from "@inertiajs/react";
import {FormEventHandler, useState} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Gender} from "@/types";
import {Flex, Grid, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, HeartHandshake, School, User, Users, Users2} from "lucide-react";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";

/**
 * @interface RegisterPageProps - The props of the register page.
 * @property {Gender} genders - All the genders available.
 */
interface RegisterPageProps {
    genders: Gender[];
}

/**
 * Register page of the application
 * @param genders - All the genders available.
 * @constructor
 */
const RegisterPage = ({genders}: RegisterPageProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    const [accountType, setAccountType] = useState(1);
    const [currentStep, setCurrentStep] = useState(1);


    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        first_name: '',
        last_name: '',
        pseudo: 'N/A',
        age: '',
        gender: '',
        email: '',
        user_type_id: accountType,
        is_solo: true,
        password: '',
        password_confirmation: ''
    });

    const setupAccount = (type: string) => {
        if (type === 'individual') {
            setData('user_type_id', 1);
        }
        if (type === 'school') {
            setData('user_type_id', 2);
        }
        if (type === 'association') {
            setData('user_type_id', 3);
        }
        setCurrentStep(2);
    }

    const setupSolo = (isSolo: boolean) => {
        setData('is_solo', isSolo);
        setCurrentStep(3);
    }

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'), onSuccess: () => {
                toast({
                    title: 'Inscription réussie',
                    description: 'Vous êtes maintenant inscrit à notre application.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                toast({
                    title: 'Erreur lors de l\'inscription',
                    description: 'Veuillez vérifier vos informations et réessayer.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <AuthenticationLayout title={'Inscription'}>
            {currentStep === 1 && (
                <Card className={'w-96 md:w-3/4 shadow-2xl'}>
                    <CardHeader>
                        <CardTitle>
                            Inscription au protocole
                        </CardTitle>
                        <CardDescription>
                            Pour commencer l’aventure, sélectionnez la formule qui vous correspond. Votre inscription comprends trois étapes : la création d’un compte, la commande de votre kit et l’accès à la plateforme avec les questionnaires du protocole.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Grid columns={{
                            'sm': '1', 'md': '3',
                        }} gap={'4'}>

                            {/* Account for a single user */}
                            <Card
                                className={'duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                                onClick={() => setupAccount('individual')}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={'group-hover:text-yellow-500'}>
                                            <User size={32} className={'inline-block'}/> Individuel
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Vous souhaitez faire l’expérience en solo ou en famille, cette formule est pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Account for schools */}
                            <Card
                                className={'duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                                onClick={() => setupAccount('school')}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={'group-hover:text-yellow-500'}>
                                            <School size={32} className={'inline-block'}/> Établissement scolaire
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Vous êtes un établissement scolaire, cette formule vous permettra de participer au projet avec vos élèves.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Account for associations */}
                            <Card
                                className={'duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                                onClick={() => setupAccount('association')}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={'group-hover:text-yellow-500'}>
                                            <HeartHandshake size={32} className={'inline-block'}/> Autre
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Vous êtes une association, un centre culturel, une médiathèque, un centre de loisir, une entreprise, un établissement de santé, ou tout autre structure. cette formule vous permettra de participer au protocole avec votre groupe.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Grid>
                    </CardContent>
                </Card>
            )}

            {currentStep === 2 && (
                <Card className={'w-96 md:w-3/4 shadow-2xl'}>
                    <CardHeader>
                        <CardTitle>
                            Réponses aux questionnaires
                        </CardTitle>
                        <CardDescription>
                            Lors de votre aventure vous aurez trois questionnaires à répondre tout le long de l'aventure, choisissez la manière dont vous souhaitrez répondre à ces questionnaires.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Grid columns={{
                            'sm': '1', 'md': '2',
                        }} gap={'4'}>

                            <Card
                                className={'duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                                onClick={() => setupSolo(true)}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={'group-hover:text-yellow-500'}>
                                            <Users2 size={32} className={'inline-block'}/> Réponse en groupe
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Si vous souhaitez faire l'éxperience seul, ou en tant que groupe mais
                                        en répondant tous ensemble aux questionnaires, cette formule est pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card
                                className={'duration-300 transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                                onClick={() => setupSolo(false)}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={'group-hover:text-yellow-500'}>
                                            <Users size={32} className={'inline-block'}/> Répondre individuellement
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Si vous êtes un groupe et que vous souhaitez que chaque membre réponde individuellement
                                        aux questionnaires, cette formule est pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                        </Grid>
                    </CardContent>
                </Card>
            )}


         {currentStep === 3 && (
        <Card className={'w-3/4 md:w-1/2 shadow-2xl m-4 md:p-0'}>
            <CardHeader>
                <CardTitle>
                    Inscription
                </CardTitle>
                <CardDescription>
                    {data.user_type_id === 1 && (
                        <Text>
                            Créez un compte pour commencer votre aventure en solo avec nous ! Une fois votre compte créé,
                            vous pourrez le personnaliser selon vos préférences et participer à l'aventure.
                        </Text>
                    )}
                    {data.user_type_id === 2 && (
                        <Text>
                            Créez un compte pour commencer l'aventure avec vos élèves ! Une fois votre compte créé, vous
                            pourrez les inscrire facilement et participer à l'aventure en groupe.
                        </Text>
                    )}
                    {data.user_type_id === 3 && (
                        <Text>
                            Créez un compte pour commencer l'aventure avec vos membres ! Une fois votre compte créé, vous
                            pourrez les inscrire facilement et participer à l'aventure en groupe.
                        </Text>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Flex direction={'column'} gap={'4'}>
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'first_name'}>Prénom</Label>
                            <Input type={'text'} id={'first_name'} name={'first_name'} value={data.first_name}
                                   onChange={(e) => setData('first_name', e.target.value)}
                                   className={`${errors.first_name ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.first_name}</Text>
                        </Flex>
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'last_name'}>Nom</Label>
                            <Input type={'text'} id={'last_name'} name={'last_name'} value={data.last_name}
                                   onChange={(e) => setData('last_name', e.target.value)}
                                   className={`${errors.last_name ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.last_name}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'age'}>
                                Année de naissance
                            </Label>
                            <Input type={'number'} id={'age'} name={'age'} value={data.age}
                                   onChange={(e) => setData('age', e.target.value)}
                                   className={`${errors.age ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.age}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'age'}>Genre</Label>
                            <Select onValueChange={(value) => setData('gender', value)}>
                                <SelectTrigger className={`${errors.gender ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Choisir mon genre"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Genre</SelectLabel>
                                        {genders.map((gender, index) => (<SelectItem key={index} value={gender.slug}>
                                                {gender.name}
                                            </SelectItem>))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Text className={'text-red-500 text-sm'}>{errors.gender}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'email'}>Adresse e-mail</Label>
                            <Input type={'email'} id={'email'} name={'email'} value={data.email}
                                   onChange={(e) => setData('email', e.target.value)}
                                   className={`${errors.email ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.email}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'password'}>Mot de passe</Label>
                            <Input type={'password'} id={'password'} name={'password'} value={data.password}
                                   onChange={(e) => setData('password', e.target.value)}
                                   className={`${errors.password ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.password}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'password_confirmation'}>Confirmation du mot de passe</Label>
                            <Input type={'password'} id={'password_confirmation'} name={'password_confirmation'}
                                   value={data.password_confirmation}
                                   onChange={(e) => setData('password_confirmation', e.target.value)}
                                   className={`${errors.password_confirmation ? 'border-red-500' : ''}`}/>
                            <Text className={'text-red-500 text-sm'}>{errors.password_confirmation}</Text>
                        </Flex>

                        <Flex direction={'row'} justify={'end'} align={'center'} gap={'2'}>
                            <Button type={'submit'} disabled={processing}
                                    className={`${processing ? 'cursor-not-allowed' : 'cursor-pointer'} w-full`}>
                                Je crée mon compte {' '} <ArrowRight size={16}/>
                            </Button>
                        </Flex>
                        <Flex direction={'row'} justify={'center'} align={'center'} gap={'2'}>
                            <Text className={'text-center text-sm'}>Vous avez déjà un compte ? <Link
                                href={route('login')} className={'hover:underline'}>Connectez-vous</Link>
                            </Text>
                        </Flex>
                    </Flex>
                </form>
            </CardContent>
        </Card>
        )}
    </AuthenticationLayout>);
}

export default RegisterPage;
