import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Link, useForm, usePage} from "@inertiajs/react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import React, {FormEventHandler} from "react";
import {DeliveryType} from "@/types";

/**
 * @interface SetupDeliveryPosteProps - SetupDeliveryPoste component props.
 * @property {Function} setDeliveryMethod - The function to set the delivery method.
 */
interface SetupDeliveryPosteProps {
    setDeliveryMethod: (method: string) => void;
    school: any;
}

/**
 * SetupDeliveryPoste component.
 * @param {SetupDeliveryPosteProps} props - The component props.
 */
const SetupDeliveryPoste = ({setDeliveryMethod, school}: SetupDeliveryPosteProps) => {

    /**
     * Get the authenticated user.
     */
    const user = usePage().props.auth.user;

    /**
     * Use the toast hook.
     */
    const { toast } = useToast();

    /**
     * The form data.
     */
    const { data, setData, post, processing, errors, reset } = useForm({
        'city': school.city,
        'address': school.address,
        'zip_code': school.zip_code,
        'delivery_method': 'La Poste',
        'optional_information': ''
    });

    console.log(school);

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('setup.delivery.poste.store'), {
            onSuccess: () => {
                toast({
                    title: 'Livraison par la poste',
                    description: 'Votre demande de livraison par la poste a bien été prise en compte.',
                    variant: 'default'
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de la validation du formulaire.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <Card className={'w-96 md:w-3/4 shadow-2xl mt-4'}>
            <CardHeader>
                <CardTitle>
                    La Poste
                </CardTitle>
                <CardDescription>
                    Pour recevoir votre kit par la poste, remplissez les informations ci-dessous et vous le recevrez dans votre boîte aux lettres sous 10 jours.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Flex direction={'column'} gap={'4'}>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'first_name'}>Prénom</Label>
                            <Input type={'text'} id={'first_name'} name={'first_name'} defaultValue={user.first_name} placeholder={'Votre prénom'} />
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'last_name'}>Nom</Label>
                            <Input type={'text'} id={'last_name'} name={'last_name'} defaultValue={user.last_name} placeholder={'Votre nom'} />
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'address'}>Adresse</Label>
                            <Input type={'text'} id={'address'} name={'address'}
                                   onChange={(e) => setData('address', e.target.value)}
                                   className={`${errors.address ? 'border-red-500' : ''}`}
                                   placeholder={'Votre adresse'}
                                   defaultValue={school.address}
                            />
                            <Text className={'text-red-500 text-sm'}>{errors.address}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'zip_code'}>Code postal</Label>
                            <Input type={'text'} id={'zip_code'} name={'zip_code'}
                                   onChange={(e) => setData('zip_code', e.target.value)}
                                   className={`${errors.zip_code ? 'border-red-500' : ''}`}
                                   placeholder={'Votre code postal'}
                                   defaultValue={school.zip_code}
                            />
                            <Text className={'text-red-500 text-sm'}>{errors.zip_code}</Text>
                        </Flex>

                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'city'}>Ville</Label>
                            <Input type={'text'} id={'city'} name={'city'}
                                   defaultValue={school.city}
                                   onChange={(e) => setData('city', e.target.value)}
                                   className={`${errors.city ? 'border-red-500' : ''}`}
                                   placeholder={'Votre ville'}/>
                            <Text className={'text-red-500 text-sm'}>{errors.city}</Text>
                        </Flex>


                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'optional_information'}>Informations complémentaires (optionnel)</Label>
                            <Input type={'text'} id={'optional_information'} name={'optional_information'} value={data.optional_information}
                                   onChange={(e) => setData('optional_information', e.target.value)}
                                   className={`${errors.optional_information ? 'border-red-500' : ''}`}
                                        placeholder={'Informations complémentaires'}/>
                            <Text className={'text-red-500 text-sm'}>{errors.optional_information}</Text>
                        </Flex>

                        <Button type={'submit'} disabled={processing}>
                            Je confirme la livraison par la poste {' '} <ArrowRight size={24} />
                        </Button>
                    </Flex>
                </form>
            </CardContent>
        </Card>
    );
}

export default SetupDeliveryPoste;
