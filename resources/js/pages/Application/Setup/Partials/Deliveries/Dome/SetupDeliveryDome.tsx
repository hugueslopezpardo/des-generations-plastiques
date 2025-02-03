import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Link, useForm} from "@inertiajs/react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {FormEventHandler} from "react";

/**
 * @interface SetupDeliveryDomeProps - SetupDeliveryDome component props.
 * @property {Function} setDeliveryMethod - The function to set the delivery method.
 */
interface SetupDeliveryDomeProps {
    setDeliveryMethod: (method: string) => void;
}

/**
 * SetupDeliveryDome component.
 * @param {SetupDeliveryDomeProps} props - The component props.
 */
const SetupDeliveryDome = ({setDeliveryMethod}: SetupDeliveryDomeProps) => {

    /**
     * Use the toast hook.
     */
    const { toast } = useToast();

    /**
     * The form data.
     */
    const { data, setData, post, processing, errors, reset } = useForm({
        'city': 'Undefined',
        'zip_code': '14000',
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('setup.delivery.dome.store'), {
            onSuccess: () => {
                toast({
                    title: 'Demande de livraison',
                    description: 'Votre demande de livraison a bien été enregistrée. Vous allez être redirigé vers votre tableau de bord.',
                    variant: 'default'
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de l\'enregistrement de votre demande de livraison. Veuillez réessayer.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <Card className={'w-96 md:w-3/4 shadow-2xl mt-4'}>
            <CardHeader>
                <CardTitle>
                    Le Dôme
                </CardTitle>
                <CardDescription>
                    Vous souhaitez commencer l’expérience tout de suite, récupérez directement votre kit au Dôme ! Nous vous accueillons au Fablab (2e étage) du mercredi au samedi de 14h à 18h. Ce sera l’occasion de visiter l’espace découverte des générations plastiques et de découvrir le processus de fabrication des kits.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Flex direction={'column'} gap={'4'}>
                        <Text className={'text-sm text-gray-500'}>
                            Le Dôme est ouvert du mercredi au samedi de 14h à 18h. Vous pouvez récupérer votre kit au Fablab au 2e étage.
                        </Text>

                        <Button type={'submit'} disabled={processing}>
                            Je confirme la livraison au Dôme {' '} <ArrowRight size={24} />
                        </Button>
                    </Flex>
                </form>
            </CardContent>
        </Card>
    );
}

export default SetupDeliveryDome;
