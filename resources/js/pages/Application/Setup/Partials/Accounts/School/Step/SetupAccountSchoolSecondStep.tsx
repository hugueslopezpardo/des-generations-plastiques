import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {useToast} from "@/hooks/use-toast";
import {Link, useForm} from "@inertiajs/react";
import {FormEventHandler, useState} from "react";
import {Gender} from "@/types";
import {Flex, Grid, Text} from "@radix-ui/themes";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, HeartHandshake, School, User, Users, Users2} from "lucide-react";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import SetupDeliveries from "@/pages/Application/Setup/Partials/Deliveries/SetupDeliveries";

interface SetupAccountSchoolSecondStepProps {
    regions: any[];
    school: any;
}

const SetupAccountSchoolSecondStep = (props: SetupAccountSchoolSecondStepProps) => {

    /**
     * Use the toast hook.
     */
    const { toast } = useToast();

    /**
     * Get the school from the props.
     */
    const {school, regions} = props;

    /**
     * Form handling.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        is_solo: true,
    });

    /**
     * Handle the form submission
     * @param e - The form event
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('setup.school.account.store'), {
            onSuccess: () => {
                toast({
                    title: 'Configuration de l\'établissement scolaire',
                    description: 'Le choix de la manière de répondre aux questionnaires a été enregistré avec succès.',
                    variant: 'default'
                })
            }, onError: (errors) => {
                console.log(errors);
                toast({
                    title: 'Une erreur est survenue',
                    description: 'Une erreur est survenue lors de la configuration de l\'établissement scolaire.',
                    variant: 'destructive'
                })
            }
        });
    }

    const is_ngp_autonomous: boolean = school.is_ngp_autonomous;

    console.log('Is NGP autonomous: ', is_ngp_autonomous);

    if (!is_ngp_autonomous) {
        return (
                <Card className={'w-96 md:w-3/4 shadow-2xl'}>
                    <CardHeader>
                        <CardTitle>
                            Réponses aux questionnaires
                        </CardTitle>
                        <CardDescription>
                            Vous aurez trois questionnaires à répondre tout le long de l'aventure Des générations plastiques : un bilan initial, un bilan intermédiaire et un bilan final. Nous vous offrons deux possibilités : répondre une fois pour tout le groupe, ou donner la possibilité à chacun des participants de répondre individuellement.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Grid columns={{
                            'sm': '1', 'md': '2',
                        }} gap={'4'}>

                            <Card
                                className={`duration-300 transform border-2 border-gray-200 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group ${data.is_solo ? 'border-yellow-500' : ''}`}
                                onClick={() => setData('is_solo', true)}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={`group-hover:text-yellow-500 ${data.is_solo ? 'text-yellow-500' : ''}`}>
                                            <Users2 size={32} className={'inline-block'}/> Répondre en groupe
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Si vous souhaitez faire l’expérience en répondant aux questionnaires une fois pour tout le groupe, cette option est pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card
                                className={`duration-300 transform border-2 border-gray-200 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group ${!data.is_solo ? 'border-2 border-yellow-500' : ''}`}
                                onClick={() => setData('is_solo', false)}>
                                <CardHeader>
                                    <CardTitle>
                                        <Flex justify={'start'} align={'center'} gap={'2'}
                                              className={`group-hover:text-yellow-500 ${!data.is_solo ? 'text-yellow-500' : ''}`}>
                                            <Users size={32} className={'inline-block'}/> Répondre individuellement
                                        </Flex>
                                    </CardTitle>
                                    <CardDescription>
                                        Si vous souhaitez que chacun de vos élèves répondent individuellement aux questionnaires, cette option est pour vous.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Grid>
                    </CardContent>
                    <CardFooter>
                        <Button className={'w-full'} onClick={submit}>
                            Suivant <ArrowRight className={'inline-block ml-2'}/>
                        </Button>
                    </CardFooter>
                </Card>
        );
    } else {
        return (
            <SetupDeliveries regions={regions} school={school} />
        );
    }

}

export default SetupAccountSchoolSecondStep;
