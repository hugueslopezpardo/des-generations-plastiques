import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Grid} from "@radix-ui/themes";
import {HeartHandshake, School, User} from "lucide-react";

/**
 * @interface SetupAccountsProps - SetupAccounts component props.
 * @property {Function} setAccountType - The function to set the account type.
 */
interface SetupAccountsProps {
    setAccountType: (type: string) => void;
}

/**
 * SetupAccounts component.
 * @param {SetupAccountsProps} props - The component props.
 */
const SetupAccounts = ({setAccountType}: SetupAccountsProps) => {
    return (
        <Card className={'w-96 md:w-3/4 shadow-2xl'}>
            <CardHeader>
                <CardTitle>
                    Configuration du compte
                </CardTitle>
                <CardDescription>
                    Pour commencer nous allons configurer votre compte, quel type de compte souhaitez-vous créer,
                    attention cette action est irréversible une fois la configuration terminée.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Grid columns={{
                    'sm': '1', 'md': '3',
                }} gap={'4'}>

                    {/* Account for a single user */}
                    <Card
                        className={'duration-300 transform hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                        onClick={() => setAccountType('individual')}>
                        <CardHeader>
                            <CardTitle>
                                <Flex justify={'start'} align={'center'} gap={'2'}
                                      className={'group-hover:text-yellow-500'}>
                                    <User size={32} className={'inline-block'}/> Individuel
                                </Flex>
                            </CardTitle>
                            <CardDescription>
                                Vous êtes un utilisateur individuel, choisissez cette option pour réaliser l'aventure
                                en solo et en toute tranquillité.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Account for schools */}
                    <Card
                        className={'duration-300 transform hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                        onClick={() => setAccountType('school')}>
                        <CardHeader>
                            <CardTitle>
                                <Flex justify={'start'} align={'center'} gap={'2'}
                                      className={'group-hover:text-yellow-500'}>
                                    <School size={32} className={'inline-block'}/> Établissement scolaire
                                </Flex>
                            </CardTitle>
                            <CardDescription>
                                Vous êtes un établissement scolaire, choisissez cette option pour réaliser l'aventure
                                en groupe avec vos élèves.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Account for associations */}
                    <Card
                        className={'duration-300 transform hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group'}
                        onClick={() => setAccountType('association')}>
                        <CardHeader>
                            <CardTitle>
                                <Flex justify={'start'} align={'center'} gap={'2'}
                                      className={'group-hover:text-yellow-500'}>
                                    <HeartHandshake size={32} className={'inline-block'}/> Autre
                                </Flex>
                            </CardTitle>
                            <CardDescription>
                                Vous êtes une association, un organisme ou une entreprise, choisissez cette option pour
                                réaliser l'aventure en groupe avec vos membres.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SetupAccounts;
