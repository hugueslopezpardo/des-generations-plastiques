import {useToast} from "@/hooks/use-toast";
import {Link, useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Gender} from "@/types";
import {Flex, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
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

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        first_name: '', last_name: '', pseudo: '', age: '', gender: '', email: '', password: '', password_confirmation: ''
    });

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

    return (<AuthenticationLayout title={'Inscription'}>
            <Flex justify={'center'} align={'center'} direction={'column'}
                  className={'min-h-screen w-screen bg-gradient-to-r from-[#F7B501] to-yellow-600'}>
                <Card className={'w-3/4 md:w-1/2 shadow-2xl m-4 md:p-0'}>
                    <CardHeader>
                        <CardTitle>
                            Inscription
                        </CardTitle>
                        <CardDescription>
                            Créez un compte pour commencer votre aventure avec nous ! Une fois votre compte créé, vous pourrez le personnaliser selon vos préférences, que vous souhaitiez participer en tant qu'individu, en équipe ou en tant que groupe scolaire. Si vous êtes enseignant et souhaitez que vos étudiants prennent part à l'aventure, vous pourrez également les inscrire facilement via votre compte.
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
                                    <Label htmlFor={'pseudo'}>Pseudo</Label>
                                    <Input type={'text'} id={'pseudo'} name={'pseudo'} value={data.pseudo}
                                           onChange={(e) => setData('pseudo', e.target.value)}
                                           className={`${errors.pseudo ? 'border-red-500' : ''}`}/>
                                    <Text className={'text-red-500 text-sm'}>{errors.pseudo}</Text>
                                </Flex>

                                <Flex direction={'column'} gap={'2'}>
                                    <Label htmlFor={'age'}>Age</Label>
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
                                                {genders.map((gender, index) => (
                                                    <SelectItem key={index} value={gender.slug}>
                                                        {gender.name}
                                                    </SelectItem>
                                                ))}
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
                                    <Text className={'text-center text-sm'}>Vous avez déjà un compte ? <Link href={route('login')} className={'hover:underline'}>Connectez-vous</Link>
                                    </Text>
                                </Flex>
                            </Flex>
                        </form>
                    </CardContent>
                </Card>
            </Flex>
        </AuthenticationLayout>);
}

export default RegisterPage;
