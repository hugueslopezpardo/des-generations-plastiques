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
        'city': '',
        'zip_code': '',
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
                    Le Dôme, anciennement Maison de la recherche et de l'imagination, est un centre de culture scientifique situé à Caen en Normandie. Vous pouvez y retirer vos
                    différents kits de démarrage. Les données relatives à la ville et au code postal seront utilisées par les chercheurs pour
                    pouvoir cartographier les différents kits répartis sur le territoire.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Flex direction={'column'} gap={'4'}>
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'city'}>Ville</Label>
                            <Input type={'text'} id={'city'} name={'city'} value={data.city}
                                   onChange={(e) => setData('city', e.target.value)}
                                   className={`${errors.city ? 'border-red-500' : ''}`}
                                   placeholder={'Votre ville'}/>
                            <Text className={'text-red-500 text-sm'}>{errors.city}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'zip_code'}>Code postal</Label>
                            <Input type={'text'} id={'zip_code'} name={'zip_code'} value={data.zip_code}
                                   onChange={(e) => setData('zip_code', e.target.value)}
                                   className={`${errors.zip_code ? 'border-red-500' : ''}`}
                                      placeholder={'Votre code postal'}/>
                            <Text className={'text-red-500 text-sm'}>{errors.zip_code}</Text>
                        </Flex>

                        <Text className={'text-sm text-gray-500'}>
                            Horaire d'ouverture: 9h00 - 18h00
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