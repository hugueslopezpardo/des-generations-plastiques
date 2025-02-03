import {useToast} from "@/hooks/use-toast";
import {useForm} from "@inertiajs/react";
import React, {FormEventHandler} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * @interface ResetPasswordPageProps - The props of the reset password page.
 * @property {string} token - The token of the reset password.
 * @property {string} email - The email of the reset password.
 */
interface ResetPasswordPageProps {
    token: string;
    email: string;
}

/**
 * Reset password page of the application.
 * @param token - The token of the reset password.
 * @param email - The email of the reset password.
 * @constructor
 */
const ResetPasswordPage = ({token, email}: ResetPasswordPageProps) => {

    const {toast} = useToast();

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        token: token, email: email, password: '', password_confirmation: '',
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'), onSuccess: () => {
                toast({
                    title: 'Mot de passe réinitialisé',
                    description: 'Votre mot de passe a été réinitialisé avec succès.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                toast({
                    title: 'Erreur lors de la réinitialisation du mot de passe',
                    description: 'Veuillez vérifier vos informations et réessayer.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (<AuthenticationLayout title={'Réinitialisation du mot de passe'}>
            <Card className={'w-96 md:w-1/2'}>
                <CardHeader>
                    <CardTitle>
                        Réinitialisation du mot de passe
                    </CardTitle>
                    <CardDescription>
                        Réinitialisez votre mot de passe en toute sécurité.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'email'}>Adresse e-mail</Label>
                                <Input id={'email'} type={'email'} name={'email'} value={data.email}
                                       className={'mt-1 block w-full'} autoComplete={'username'}
                                       onChange={(e) => setData('email', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.email}</Text>
                            </Flex>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'password'}>Mot de passe</Label>
                                <Input id={'password'} type={'password'} name={'password'} value={data.password}
                                       className={'mt-1 block w-full'} autoComplete={'new-password'}
                                       onChange={(e) => setData('password', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.password}</Text>
                            </Flex>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'password_confirmation'}>Confirmation du mot de passe</Label>
                                <Input id={'password_confirmation'} type={'password'} name={'password_confirmation'}
                                       value={data.password_confirmation} className={'mt-1 block w-full'}
                                       autoComplete={'new-password'}
                                       onChange={(e) => setData('password_confirmation', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.password_confirmation}</Text>
                            </Flex>
                            <Flex direction={'row'} justify={'center'} align={'center'}>
                                <Button type={'submit'} className={'w-full'} disabled={processing}>
                                    {processing ? 'Chargement...' : 'Réinitialiser le mot de passe'} {' '} <ArrowRight
                                    size={16}/>
                                </Button>
                            </Flex>
                        </Flex>
                    </form>
                </CardContent>
            </Card>
        </AuthenticationLayout>);
}

export default ResetPasswordPage;
