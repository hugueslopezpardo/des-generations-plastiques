import {useToast} from "@/hooks/use-toast";
import {Link, useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Flex, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * @interface LoginPageProps - The props of the login page.
 * @property {string} status - The status of the login.
 * @property {boolean} canResetPassword - Whether the password can be reset.
 */
interface LoginPageProps {
    status?: string;
    canResetPassword: boolean;
}

/**
 * Login page of the application.
 * @param status - The status of the login.
 * @param canResetPassword - Whether the password can be reset.
 * @constructor
 */
const LoginPage = ({status, canResetPassword}: LoginPageProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '', password: '', remember: false,
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'), onSuccess: () => {
                toast({
                    title: 'Connexion réussie',
                    description: 'Vous êtes maintenant connecté à votre compte.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                toast({
                    title: 'Erreur lors de la connexion',
                    description: 'Veuillez vérifier vos informations de connexion et réessayer.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (<AuthenticationLayout title={'Connexion'}>
            <Card className={'w-96 md:w-1/2 shadow-2xl'}>
                <CardHeader>
                    <CardTitle>
                        Connexion
                    </CardTitle>
                    <CardDescription>
                        Connectez-vous à votre compte pour continuer l'aventure.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'email'}>Adresse e-mail</Label>
                                <Input type={'email'} id={'email'} name={'email'} value={data.email}
                                       onChange={(e) => setData('email', e.target.value)}
                                       className={`${errors.email ? 'border-red-500' : ''}`}/>
                                <Text className={'text-red-500 text-sm'}>{errors.email}</Text>
                            </Flex>
                            <Flex direction={'column'} gap={'2'}>
                                <Flex direction={'row'} justify={'between'} align={'center'} gap={'2'}>
                                    <Label htmlFor={'password'}>Mot de passe</Label>
                                    <Link href={route('password.request')} className={'text-sm hover:underline'}>Mot de
                                        passe oublié ?</Link>
                                </Flex>
                                <Input type={'password'} id={'password'} name={'password'} value={data.password}
                                       onChange={(e) => setData('password', e.target.value)}
                                       className={`${errors.password ? 'border-red-500' : ''}`}/>
                                <Text className={'text-red-500 text-sm'}>{errors.password}</Text>
                            </Flex>
                            <Flex direction={'row'} gap={'2'}>
                                <Checkbox id={'remember'} name={'remember'}
                                          onChange={(e) => setData('remember', (e.target as HTMLInputElement).checked)}/>
                                <Label htmlFor={'remember'}>Se souvenir de moi</Label>
                            </Flex>
                            <Flex direction={'row'} justify={'end'} align={'center'} gap={'2'}>
                                <Button type={'submit'} disabled={processing}
                                        className={`${processing ? 'cursor-not-allowed' : 'cursor-pointer'} w-full`}>
                                    Connexion {' '} <ArrowRight size={16}/>
                                </Button>
                            </Flex>
                            <Flex direction={'row'} justify={'center'} align={'center'} gap={'2'}>
                                <Text className={'text-center text-sm'}>Vous n'avez pas de compte ? <Link
                                    href={route('register')} className={'hover:underline'}>Inscrivez-vous</Link></Text>
                            </Flex>
                        </Flex>
                    </form>
                </CardContent>
            </Card>
        </AuthenticationLayout>)
}

export default LoginPage;
