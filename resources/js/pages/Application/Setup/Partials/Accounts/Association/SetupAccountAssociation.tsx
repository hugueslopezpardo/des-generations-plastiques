import {Region} from "@/types";
import {useForm, usePage} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";
import {FormEventHandler} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * @interface SetupAssociationProps - The props for the SetupAssociation component
 * @property {Region[]} regions - The regions to be used in the component
 */
interface SetupAssociationProps {
    associationTypes: any[];
}

const SetupAssociation = ({associationTypes}: SetupAssociationProps) => {

    /**
     * Get the authenticated user.
     */
    const user = usePage().props.auth.user;

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    /**
     * The form state.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        'association_name': '',
        'association_number_of_members': '',
        'association_number_of_members_girls': '',
        'association_type': '',
    });

    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('setup.association.store'), {
            onSuccess: () => {
                toast({
                    title: 'Établissement créé',
                    description: 'Votre établissement a été créé avec succès.',
                    variant: 'default'
                })
            },
            onError: () => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur s\'est produite lors de la création de votre établissement.',
                    variant: 'destructive'
                })
            }
        });
    }

    return (
        <>
            <Card className={'w-11/12 md:w-3/4 shadow-2xl'}>
                <CardHeader>
                    <CardTitle>
                        Configuration de votre établissement
                    </CardTitle>
                    <CardDescription>
                        Pour commencer nous allons configurer vous demander quelques informations sur votre
                        établissement, ces informations seront utilisées pour la suite de la configuration
                        afin de vous fournir une expérience personnalisée.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>

                            {/* Association name */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'association_name'}>Nom de l'établissement</Label>
                                <Input
                                    type={'text'}
                                    id={'association_name'}
                                    name={'association_name'}
                                    placeholder={'Nom de l\'établissement'}
                                    onChange={(e) => setData('association_name', e.target.value)}
                                    className={`${errors.association_name ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.association_name}</Text>
                            </Flex>

                            {/* Number of members */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'association_number_of_members'}>Nombre de membres</Label>
                                <Input
                                    type={'number'}
                                    id={'association_number_of_members'}
                                    name={'association_number_of_members'}
                                    placeholder={'Nombre de membres'}
                                    onChange={(e) => setData('association_number_of_members', e.target.value)}
                                    className={`${errors.association_number_of_members ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.association_number_of_members}</Text>
                            </Flex>

                            {/* Number of members girls */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'association_number_of_members_girls'}>Nombre de membres filles</Label>
                                <Input
                                    type={'number'}
                                    id={'association_number_of_members_girls'}
                                    name={'association_number_of_members_girls'}
                                    placeholder={'Nombre de membres filles'}
                                    onChange={(e) => setData('association_number_of_members_girls', e.target.value)}
                                    className={`${errors.association_number_of_members_girls ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.association_number_of_members_girls}</Text>
                            </Flex>

                            {/* Association type */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'association_type'}>Type d'établissement</Label>
                                <Select onValueChange={(value) => setData('association_type', value)}>
                                    <SelectTrigger className={`${errors.association_type ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder={'Votre type d\'établisement'}>{data.association_type}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Type</SelectLabel>
                                            {associationTypes.map((association) => (
                                                <SelectItem key={association.name} value={association.name}>{association.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.association_type}</Text>
                            </Flex>

                            {/* Submit button */}
                            <Flex direction={'column'} gap={'2'}>
                                <Button
                                    type={'submit'}
                                    disabled={processing}
                                >
                                    Étape suivante {' '} <ArrowRight size={16}/>
                                </Button>
                            </Flex>

                        </Flex>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default SetupAssociation;
