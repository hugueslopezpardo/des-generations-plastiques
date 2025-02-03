import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {useToast} from "@/hooks/use-toast";
import {useForm} from "@inertiajs/react";
import React, {FormEventHandler} from "react";
import {Flex, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";


/**
 * @interface ForgotPasswordPageProps - The props of the forgot password page.
 * @property {string} status - The status of the forgot password.
 */
interface ForgotPasswordPageProps {
    status?: string;
}

/**
 * Forgot password page of the application.
 * @param status - The status of the forgot password.
 * @constructor
 */
const ForgotPasswordPage = ({status}: ForgotPasswordPageProps) => {

    const {toast} = useToast();

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors} = useForm({
        email: '',
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.email'), {
            onSuccess: () => {
                toast({
                    title: 'Email envoyé',
                    description: 'Un email de réinitialisation de mot de passe vous a été envoyé.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                toast({
                    title: 'Erreur lors de l\'envoi de l\'email',
                    description: 'Veuillez vérifier votre adresse email et réessayer.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (<AuthenticationLayout title={'Mot de passe oublié'}>
            <Card className={'w-96 md:w-1/2'}>
                <CardHeader>
                    <CardTitle>Mot de passe oublié ?</CardTitle>
                    <CardDescription>
                        Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous simplement votre
                        adresse e-mail, et nous vous enverrons un lien de réinitialisation de mot de passe qui vous
                        permettra d'en choisir un nouveau.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'email'}>Adresse e-mail</Label>
                                <Input
                                    id={'email'}
                                    type={'email'}
                                    name={'email'}
                                    value={data.email}
                                    className={'mt-1 block w-full'}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <Text className={'text-red-500 text-sm'}>{errors.email}</Text>}
                                {status && <Text className={'text-green-500 text-sm'}>{status}</Text>}
                            </Flex>
                            <Flex direction={'column'} justify={'center'}>
                                <Button type={'submit'} className={'w-full'} disabled={processing}>
                                    {processing ? 'Envoi en cours...' : 'Envoyer'} {' '} <ArrowRight size={16}/>
                                </Button>
                            </Flex>
                        </Flex>
                    </form>
                </CardContent>
            </Card>
        </AuthenticationLayout>);
}

export default ForgotPasswordPage;
