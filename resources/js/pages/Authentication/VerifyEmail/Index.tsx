import {useToast} from "@/hooks/use-toast";
import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Flex, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * @interface VerifyEmailPageProps - The props of the verify email page.
 * @property {string} status - The status of the verify email.
 */
interface VerifyEmailPageProps {
    status?: string;
}

/**
 * Verify email page of the application.
 * @param status - The status of the verify email.
 * @constructor
 */
const VerifyEmailPage = ({status}: VerifyEmailPageProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({});

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('verification.send'), {
            onSuccess: () => {
                toast({
                    title: 'Email de vérification envoyé',
                    description: 'Un email de vérification a été envoyé à votre adresse email.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                toast({
                    title: 'Erreur lors de l\'envoi de l\'email de vérification',
                    description: 'Veuillez réessayer.',
                    variant: 'destructive'
                })
            }
        });
    };

    return (<AuthenticationLayout title={'Vérification de l\'email'}>
            <Card className={'w-96 md:w-1/2'}>
                <CardHeader>
                    <CardTitle>
                        Vérification de l'email
                    </CardTitle>
                    <CardDescription>
                        Merci pour votre inscription ! Avant de commencer, pourriez-vous vérifier votre adresse e-mail
                        en cliquant sur le lien que nous venons de vous envoyer ? Si vous n'avez pas reçu l'e-mail, nous
                        serons ravis de vous en envoyer un autre.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            <Flex direction={'column'} gap={'2'}>
                                {status === 'verification-link-sent' && (
                                    <Text className={'text-green-600 text-sm'}>Un nouvel email de vérification a été
                                        envoyé à l'adresse email que vous avez fournie lors de votre
                                        inscription.</Text>)}
                            </Flex>
                            <Flex direction={'column'} gap={'2'}>
                                <Button type={'submit'} className={'w-full'} disabled={processing}>
                                    {processing ? 'Envoi en cours...' : 'Renvoyer l\'email de vérification'} {' '}
                                    <ArrowRight size={16}/>
                                </Button>
                            </Flex>
                        </Flex>
                    </form>
                </CardContent>
            </Card>
        </AuthenticationLayout>);
};

export default VerifyEmailPage;
