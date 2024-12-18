import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {Gender, Region} from "@/types";
import DashboardSchoolStudents from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolStudents";
import DashboardPictures from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPictures";
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";
import DashboardSchoolGeneral from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneral";
import DashboardSchoolSettings from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolSettings";
import DashboardSchoolGeneralGroup
    from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneralGroup";
import {usePage} from "@inertiajs/react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Flex} from "@radix-ui/themes";

interface DashboardSchoolProps {
    genders: Gender[];
    regions: Region[];
    deliveryStatus: any;
    images: string[];
    students: any[];
    levels: any[];
}

const DashboardSchool = ({regions, genders, deliveryStatus, images, students, levels}: DashboardSchoolProps) => {

    // Get the user
    const {user} = usePage().props.auth;

    console.log(user);

    {/* @ts-ignore */}
    const isSolo = user.is_solo;

    console.log(isSolo);

    return (<>

        {isSolo ? (<Tabs defaultValue="general_home" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="general_home">
                    Accueil
                </TabsTrigger>
                <TabsTrigger value="general_group">
                    Expérience comportement de consommation
                </TabsTrigger>
                <TabsTrigger value="pictures">Gestion du kit</TabsTrigger>
                <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>
            <TabsContent value={'general_home'}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <b className={'uppercase'}>Bienvenue sur Des Générations Plastiques</b>
                        </CardTitle>
                        <CardDescription>
                            Information à définir.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </TabsContent>
            <TabsContent value="general_group">
                <DashboardSchoolGeneralGroup teacher={students[0]}/>
            </TabsContent>
            <TabsContent value="pictures">
                <Flex className={'flex-col gap-2'}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Statut de livraison du kit
                        </CardTitle>
                        <CardDescription>
                            Suivez l'avancement de la livraison de votre kit de l'aventure Des générations
                            plastiques.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>

                            {deliveryStatus.delivery_status_id === 1 && (<Badge className={'bg-slate-500 text-white'}>
                                En attente de livraison
                            </Badge>)}
                            {deliveryStatus.delivery_status_id === 2 && (<Badge className={'bg-yellow-500 text-white'}>
                                En cours de livraison
                            </Badge>)}

                            {deliveryStatus.delivery_status_id === 3 && (<Badge className={'bg-green-500 text-white'}>
                                Livré
                            </Badge>)}

                            {deliveryStatus.delivery_status_id === 4 && (<Badge className={'bg-red-500 text-white'}>
                                Annulé
                            </Badge>)}

                            {deliveryStatus.delivery_status_id === 5 && (<Badge className={'bg-gray-500 text-white'}>
                                Retourné
                            </Badge>)}

                        </CardDescription>
                    </CardContent>

                </Card>
                <DashboardPictures/>
                <DashboardPicturesGallery images={images}/>
                </Flex>
            </TabsContent>
            <TabsContent value="settings">
                <DashboardSchoolSettings
                    deliveryStatus={deliveryStatus}
                    regions={regions}
                    levels={levels}
                />
            </TabsContent>
        </Tabs>) : (<Tabs defaultValue="general_home" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-5">
                <TabsTrigger value="general_home">
                    Accueil
                </TabsTrigger>
                <TabsTrigger value="general_individual">
                    Expérience comportement de consommation
                </TabsTrigger>
                <TabsTrigger value="students">Mes élèves</TabsTrigger>
                <TabsTrigger value="pictures">
                    Expérience biodégradabilité
                </TabsTrigger>
                <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>
            <TabsContent value={'general_home'}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <b className={'uppercase'}>Bienvenue sur Des Générations Plastiques</b>
                        </CardTitle>
                        <CardDescription>
                            Information à définir.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </TabsContent>
            <TabsContent value="general_individual">
                <DashboardSchoolGeneral students={students}/>
            </TabsContent>
            <TabsContent value="general_group">
                <DashboardSchoolGeneralGroup teacher={students[0]}/>
            </TabsContent>
            <TabsContent value="students">
                <DashboardSchoolStudents genders={genders} students={students}/>
            </TabsContent>
            <TabsContent value="pictures">
                <Flex className={'flex-col gap-2'}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Statut de livraison du kit
                            </CardTitle>
                            <CardDescription>
                                Suivez l'avancement de la livraison de votre kit de l'aventure Des générations plastiques.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>

                                {deliveryStatus.delivery_status_id === 1 && (<Badge className={'bg-slate-500 text-white'}>
                                        En attente de livraison
                                    </Badge>)}
                                {deliveryStatus.delivery_status_id === 2 && (<Badge className={'bg-yellow-500 text-white'}>
                                        En cours de livraison
                                    </Badge>)}

                                {deliveryStatus.delivery_status_id === 3 && (<Badge className={'bg-green-500 text-white'}>
                                        Livré
                                    </Badge>)}

                                {deliveryStatus.delivery_status_id === 4 && (<Badge className={'bg-red-500 text-white'}>
                                        Annulé
                                    </Badge>)}

                                {deliveryStatus.delivery_status_id === 5 && (<Badge className={'bg-gray-500 text-white'}>
                                        Retourné
                                    </Badge>)}

                            </CardDescription>
                        </CardContent>
                    </Card>
                <DashboardPictures/>
                <DashboardPicturesGallery images={images}/>
                </Flex>
            </TabsContent>
            <TabsContent value="settings">
                <DashboardSchoolSettings
                    deliveryStatus={deliveryStatus}
                    regions={regions}
                    levels={levels}
                />
            </TabsContent>
        </Tabs>)}
    </>);
}

export default DashboardSchool;
