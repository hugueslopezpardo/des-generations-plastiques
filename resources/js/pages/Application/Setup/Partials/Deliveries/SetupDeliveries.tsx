import {Region} from "@/types";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Grid} from "@radix-ui/themes";
import {Building, Package, Store} from "lucide-react";
import {useState} from "react";
import SetupDeliveryDome from "@/pages/Application/Setup/Partials/Deliveries/Dome/SetupDeliveryDome";
import SetupDeliveryPoste from "@/pages/Application/Setup/Partials/Deliveries/Poste/SetupDeliveryPoste";

/**
 * @interface SetupDeliveriesProps - The props for the SetupDeliveries component.
 * @property {Region[]} regions - The regions to be used in the component.
 */
interface SetupDeliveriesProps {
    regions: Region[];
    school: any;
}

/**
 * SetupDeliveries - The SetupDeliveries component.
 * @param {SetupDeliveriesProps} props - The props for the component.
 * @param {Region[]} props.regions - The regions to be used in the component.
 */
const SetupDeliveries = ({regions, school}: SetupDeliveriesProps) => {

    const [deliveryMethod, setDeliveryMethod] = useState<string>('');

    return (
        <>
            <Card className={'w-96 md:w-3/4 shadow-2xl'}>
                <CardHeader>
                    <CardTitle>
                        Livraison du kit de démarrage
                    </CardTitle>
                    <CardDescription>
                        Pour commencer l’expérience, commandez votre kit plastique à enfouir, clouer ou exposer à la lumière. Les trois formules sont gratuites et permettent de commencer l’expérience dans un délai de 10 jours.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Grid columns={{
                        'sm': '1', 'md': '3',
                    }} gap={'4'}>

                        {/* La Poste */}
                        <Card className={`duration-300 transform border-2 border-gray-200 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group
                        ${deliveryMethod === 'laposte' ? 'border-2 border-yellow-500' : ''}`}
                              onClick={() => setDeliveryMethod('laposte')}>
                            <CardHeader>
                                <CardTitle>
                                    <Flex justify={'start'} align={'center'} gap={'2'}
                                          className={`group-hover:text-yellow-500 ${deliveryMethod === 'laposte' ? 'text-yellow-500' : ''}`}>
                                        <Package size={32} className={'inline-block'}/> La Poste
                                    </Flex>
                                </CardTitle>
                                <CardDescription>
                                    Vous souhaitez recevoir le kit chez vous, cette formule vous permettra de le recevoir par la poste.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Le Dôme */}
                        <Card className={`duration-300 transform border-2 border-gray-200 hover:shadow-2xl hover:cursor-pointer hover:border-2 hover:border-yellow-500 group
                              ${deliveryMethod === 'dome' ? 'border-2 border-yellow-500' : ''}`}
                              onClick={() => setDeliveryMethod('dome')}>
                            <CardHeader>
                                <CardTitle>
                                    <Flex justify={'start'} align={'center'} gap={'2'}
                                          className={`group-hover:text-yellow-500 ${deliveryMethod === 'dome' ? 'text-yellow-500' : ''}`}>
                                        <Building size={32} className={'inline-block'}/> Le Dôme
                                    </Flex>
                                </CardTitle>
                                <CardDescription>
                                    Vous souhaitez commencer l’expérience tout de suite,  récupérez directement votre kit au Dôme !
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Relais partenaire */}
                        <Card className={'bg-gray-200 hover:cursor-crosshair'}>
                            <CardHeader>
                                <CardTitle>
                                    <Flex justify={'start'} align={'center'} gap={'2'}
                                          className={`group-hover:text-yellow-500`}>
                                        <Store size={32} className={'inline-block'}/> Relais partenaire
                                    </Flex>
                                </CardTitle>
                                <CardDescription>
                                    Si vous le souhaitez, vous pouvez choisir de récupérer votre kit de démarrage dans
                                    un
                                    relais partenaire de votre choix (bientôt disponible).
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Grid>
                </CardContent>
            </Card>

            {deliveryMethod === 'laposte' && (
                <SetupDeliveryPoste setDeliveryMethod={setDeliveryMethod} school={school} />)}

            {deliveryMethod === 'dome' && (
                <SetupDeliveryDome setDeliveryMethod={setDeliveryMethod}/>)}

            {deliveryMethod === 'relais' && (<>
                    {/* TODO : Add relais partner component */}
                </>
            )}
        </>
    );
}

export default SetupDeliveries;
