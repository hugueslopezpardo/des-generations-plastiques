import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Grid} from "@radix-ui/themes";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {Label} from "@/components/ui/label";
import QRCode from "react-qr-code";
import {Link} from "@inertiajs/react";
import {Badge} from "@/components/ui/badge";

interface DashboardSchoolGeneralProps {
    students: any[];
}

const DashboardSchoolGeneral = ({students}: DashboardSchoolGeneralProps) => {

    const { toast } = useToast();

    const date = new Date();
    const datePlusUnJour = new Date(date.getTime() + (24 * 60 * 60));
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

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Répondre aux questionnaires individuellement
                </CardTitle>
                <CardDescription>
                    Vous souhaitez répondre aux questionnaires individuellement ? C'est par ici ! Si jamais vous
                    souhaitez répondre en tant que groupe, vous pouvez le faire en cliquant sur l'onget "Groupe".
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Grid columns={{
                    'sm': '1',
                }} gap={'2'}>


                    {/* Bilan initial */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Bilan initial
                            </CardTitle>
                            <CardDescription>
                                Bienvenue à vous pour cette première étape de l’aventure des générations
                                plastiques ! Ce questionnaire, imaginé par des citoyens et citoyennes
                                lors d'ateliers participatifs, cherche à établir un premier "bilan
                                plastique" : Que savez-vous sur les plastiques ? Avez-vous l’impression
                                d’être informé·e·s sur ce sujet ? Est-ce un sujet qui vous préoccupe ?
                                C’est ce que nous allons découvrir ensemble lors de cette première
                                étape, à vos marques, prêt·e, partez !!!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className={'grid grid-cols-1 md:grid-cols-3 gap-2'}>
                                {students.map((student, index) => (
                                    <Card className={`border-2 ${student.is_first_report_finished ? 'border-green-500' : 'border-yellow-500'}`}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h1 className={'text-sm font-semibold'}>
                                                    {student.first_name} {student.last_name}
                                                </h1>
                                            </CardTitle>
                                            <CardDescription>
                                                <Badge variant={'default'} className={`${student.is_first_report_finished ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                                    {student.is_first_report_finished ? 'Terminé' : 'Non terminé'}
                                                </Badge>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
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
                                                        value={`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/initial/${student.token}`}
                                                        viewBox={`0 0 256 256`}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription className={'w-full flex justify-center flex-col gap-4'}>
                                                <Button onClick={() => handleLinkCopy(`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/initial/${student.token}`)}>
                                                    Copier le lien <ArrowRight size={16} />
                                                </Button>
                                                <p className={'text-sm'}>
                                                    Disponible à partir du {dateFormatee}
                                                </p>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Bilan intermédiaire */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Bilan intermédiaire
                            </CardTitle>
                            <CardDescription>
                                Voilà maintenant trois semaines que vous avez débuté l’aventure
                                Des générations plastiques.
                                Nous espérons que tout se passe bien pour vous, que vous
                                découvrez des choses et prenez plaisir à réfléchir sur les plastiques. Que
                                pensez-vous de ce début d’aventure ? Comment avez-vous appréhendé et géré
                                cette période ? Est-ce enrichissant ? Rencontrez-vous des difficultés ? C’est
                                le moment de partager vos premiers retours, vos premiers ressentis et
                                votre motivation pour la suite de l'aventure.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className={'grid grid-cols-1 md:grid-cols-3 gap-2'}>
                                {students.map((student, index) => (
                                    <Card className={`border-2 ${student.is_second_report_finished ? 'border-green-500' : 'border-yellow-500'}`}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h1 className={'text-sm font-semibold'}>
                                                    {student.first_name} {student.last_name}
                                                </h1>
                                            </CardTitle>
                                            <CardDescription>
                                                <Badge variant={'default'} className={`${student.is_second_report_finished ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                                    {student.is_second_report_finished ? 'Terminé' : 'Non terminé'}
                                                </Badge>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
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
                                                        value={`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/intermediate/${student.token}`}
                                                        viewBox={`0 0 256 256`}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription className={'w-full flex justify-center flex-col gap-4'}>
                                                <Button onClick={() => handleLinkCopy(`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/intermediate/${student.token}`)}>
                                                    Copier le lien <ArrowRight size={16} />
                                                </Button>
                                                <p className={'text-sm'}>
                                                    Disponible à partir du {datePlusTroisSemainesFormatee}
                                                </p>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </CardDescription>
                        </CardContent>
                    </Card>


                    {/* Bilan final */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Bilan final
                            </CardTitle>
                            <CardDescription>
                                Vous voilà tout près de la ligne d’arrivée de cette expérimentation Des
                                générations plastiques, nous espérons que vous avez vécu une belle
                                expérience de science participative avec notre équipe et l'ensemble des
                                participant·e·s et nous souhaitons avec ce dernier questionnaire que
                                vous puissiez exprimer votre ressenti et dresser un bilan de vos
                                réflexions, des actions entreprises ou envisagées, des découvertes que
                                vous avez pu faire... mais aussi identifier les freins et leviers que
                                vous avez pu rencontrer durant ces quatre mois DGP.
                                N'en disons pas plus, c'est parti pour une petite dizaine de minutes !
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className={'grid grid-cols-1 md:grid-cols-3 gap-2'}>{students.map((student, index) => (
                                    <Card className={`border-2 ${student.is_third_report_finished ? 'border-green-500' : 'border-yellow-500'}`}>
                                        <CardHeader>
                                            <CardTitle>
                                                <h1 className={'text-sm font-semibold'}>
                                                    {student.first_name} {student.last_name}
                                                </h1>
                                            </CardTitle>
                                            <CardDescription>
                                                <Badge variant={'default'} className={`${student.is_third_report_finished ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                                    {student.is_third_report_finished ? 'Terminé' : 'Non terminé'}
                                                </Badge>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
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
                                                        value={`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/final/${student.token}`}
                                                        viewBox={`0 0 256 256`}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <CardDescription className={'w-full flex justify-center flex-col gap-4'}>
                                                <Button
                                                    onClick={() => handleLinkCopy(`https://des-generations-plastiques-app.dhrcy9.easypanel.host/reports/final/${student.token}`)}>
                                                    Copier le lien <ArrowRight size={16}/>
                                                </Button>
                                                <p className={'text-sm'}>
                                                    Disponible à partir du {datePlusTroisMoisFormatee}
                                                </p>
                                            </CardDescription>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {students.length === 0 && (
                        <Label>
                            Aucun élève n'a été trouvé.
                        </Label>
                    )}

                </Grid>
            </CardContent>
        </Card>
    );
}

export default DashboardSchoolGeneral;
