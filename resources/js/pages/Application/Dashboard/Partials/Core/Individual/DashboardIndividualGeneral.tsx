import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Grid} from "@radix-ui/themes";
import {Button} from "@/components/ui/button";
import {ArrowRight, QrCode} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {Link} from "@inertiajs/react";
import QRCode from "react-qr-code";

interface DashboardIndividualGeneralProps {
}

const DashboardIndividualGeneral = ({}: DashboardIndividualGeneralProps) => {

    const {toast} = useToast();

    const date = new Date();
    const datePlusUnJour = new Date(date.getTime() + (24 * 60 * 60 * 1000));
    const datePlusTroisSemaines = new Date(date.getTime() + (21 * 24 * 60 * 60 * 1000));
    const datePlusTroisMois = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000));

    const dateFormatee = datePlusUnJour.toLocaleDateString('fr-FR');
    const datePlusTroisSemainesFormatee = datePlusTroisSemaines.toLocaleDateString('fr-FR');
    const datePlusTroisMoisFormatee = datePlusTroisMois.toLocaleDateString('fr-FR');

    const handleLinkCopy = (link: string) => {
        toast({
            title: 'Lien copié',
            description: 'Le lien du questionnaire a bien été copié dans votre presse-papier.',
            variant: 'default',
            duration: 2000
        })
        navigator.clipboard.writeText(link);
    }

    return (<Card>
            <CardHeader>
                <CardTitle>
                    Vision général des questionnaires
                </CardTitle>
                <CardDescription>
                    Suivez l'avancement des questionnaires de l'aventure Des générations plastiques.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Grid columns={{
                    'sm': '1',
                }} gap={'2'}>

                    <Card className={'border-2 border-gray-100'}>
                        <CardHeader>
                            <CardDescription>
                                <Flex direction={'column'} gap={'2'}>
                                    <Card className={'border-2 border-yellow-500'}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Bilan initial
                                                </h2>
                                            </CardTitle>
                                            <CardDescription>
                                                <div className={'grid grid-cols-3'}>
                                                    <div className={'col-span-2'}>
                                                        Bienvenue à vous pour cette première étape de l’aventure des générations
                                                        plastiques ! Ce questionnaire, imaginé par des citoyens et citoyennes
                                                        lors d'ateliers participatifs, cherche à établir un premier "bilan
                                                        plastique" : Que savez-vous sur les plastiques ? Avez-vous l’impression
                                                        d’être informé·e·s sur ce sujet ? Est-ce un sujet qui vous préoccupe ?
                                                        ...
                                                        C’est ce que nous allons découvrir ensemble lors de cette première
                                                        étape, à vos marques, prêt·e, partez !!!
                                                    </div>
                                                    <div className={'h-full col-span-1 flex justify-center'}>
                                                        <div
                                                            style={{height: '150px', width: '150px'}}>
                                                            <QRCode
                                                                size={256}
                                                                style={{
                                                                    height: "auto",
                                                                    maxWidth: "100%",
                                                                    width: "100%"
                                                                }}
                                                                value={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/final/token_test'}
                                                                viewBox={`0 0 256 256`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Disponible le : {dateFormatee}
                                                </h2>
                                            </CardTitle>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription className={'space-x-2'}>
                                                <Link href={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/initial/token_test'}>
                                                    <Button>
                                                        Accéder au questionnaire {' '} <ArrowRight size={16}/>
                                                    </Button>
                                                </Link>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                    <Card className={'border-2 border-red-500'}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Bilan intermédiaire
                                                </h2>
                                            </CardTitle>
                                            <CardDescription>
                                                <div className={'grid grid-cols-3'}>
                                                    <div className={'col-span-2'}>
                                                        Voilà maintenant trois semaines que vous avez débuté l’aventure
                                                        Des
                                                        générations plastiques.
                                                        Nous espérons que tout se passe bien pour vous, que vous
                                                        découvrez des
                                                        choses et prenez plaisir à réfléchir sur les plastiques. Que
                                                        pensez-vous
                                                        de ce début d’aventure ? Comment avez-vous appréhendé et géré
                                                        cette
                                                        période ? Est-ce enrichissant ? Rencontrez-vous des difficultés ? C’est
                                                        le moment de partager vos premiers retours, vos premiers ressentis et
                                                        votre motivation pour la suite de l'aventure.
                                                    </div>
                                                    <div className={'h-full col-span-1 flex justify-center'}>
                                                        <div
                                                            style={{height: '150px', width: '150px'}}>
                                                            <QRCode
                                                                size={256}
                                                                style={{
                                                                    height: "auto",
                                                                    maxWidth: "100%",
                                                                    width: "100%"
                                                                }}
                                                                value={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/intermediate/token_test'}
                                                                viewBox={`0 0 256 256`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Disponible le : {datePlusTroisSemainesFormatee}
                                                </h2>
                                            </CardTitle>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription>
                                                <Link href={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/intermediate/token_test'}>
                                                    <Button>
                                                        Accéder au questionnaire {' '} <ArrowRight size={16}/>
                                                    </Button>
                                                </Link>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                    <Card className={'border-2 border-red-500'}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Bilan final
                                                </h2>
                                            </CardTitle>
                                            <CardDescription>
                                                <div className={'grid grid-cols-3'}>
                                                    <div className={'col-span-2'}>
                                                        Vous voilà tout près de la ligne d’arrivée de cette expérimentation Des
                                                        générations plastiques, nous espérons que vous avez vécu une belle
                                                        expérience de science participative avec notre équipe et l'ensemble des
                                                        participant·e·s et nous souhaitons avec ce dernier questionnaire que
                                                        vous puissiez exprimer votre ressenti et dresser un bilan de vos
                                                        réflexions, des actions entreprises ou envisagées, des découvertes que
                                                        vous avez pu faire... mais aussi identifier les freins et leviers que
                                                        vous avez pu rencontrer durant ces quatre mois DGP.
                                                        N'en disons pas plus, c'est parti pour une petite dizaine de minutes !
                                                    </div>
                                                    <div className={'h-full col-span-1 flex justify-center'}>
                                                        <div
                                                            style={{height: '150px', width: '150px'}}>
                                                            <QRCode
                                                                size={256}
                                                                style={{
                                                                    height: "auto",
                                                                    maxWidth: "100%",
                                                                    width: "100%"
                                                                }}
                                                                value={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/final/token_test'}
                                                                viewBox={`0 0 256 256`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <CardTitle>
                                                <h2 className={'text-sm font-semibold'}>
                                                    Disponible le : {datePlusTroisMoisFormatee}
                                                </h2>
                                            </CardTitle>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription>
                                                <Link href={'https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/final/token_test'}>
                                                    <Button>
                                                        Accéder au questionnaire {' '} <ArrowRight size={16}/>
                                                    </Button>
                                                </Link>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                </Flex>
                            </CardDescription>
                        </CardHeader>
                    </Card>

                </Grid>
            </CardContent>
    </Card>);
}

export default DashboardIndividualGeneral;
