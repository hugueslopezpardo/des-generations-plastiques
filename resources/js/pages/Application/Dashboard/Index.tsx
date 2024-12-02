import {Flex} from "@radix-ui/themes";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button";
import DashboardSchool from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchool";
import {Gender} from "@/types";
import {usePage} from "@inertiajs/react";
import DashboardAssociation from "@/pages/Application/Dashboard/Partials/Core/Association/DashboardAssociation";
import DashboardIndividual from "@/pages/Application/Dashboard/Partials/Core/Individual/DashboardIndividual";

interface DashboardPageProps {
    genders: Gender[];
    associations: any[];
    images: any[];
    students: any[];
    members: any[];
}

const DashboardPage = ({genders, associations, images, students, members}: DashboardPageProps) => {

    /**
     * Get the authenticated user.
     */
    const user = usePage().props.auth.user;

    console.log(user);

    return (
       <AuthenticatedLayout title={'Tableau de bord'}>
           <Flex justify={'center'} className={'min-h-screen w-screen bg-gradient-to-r from-[#F7B501] to-yellow-600 py-12'}>

               {user.user_type_id === 1 && (
                   <DashboardIndividual images={images} />
               )}

               {user.user_type_id === 2 && (
                   <DashboardSchool genders={genders} students={students} images={images} />
               )}

                {user.user_type_id === 3 && (
                    <DashboardAssociation genders={genders} members={members} images={images} />
                )}

           </Flex>
       </AuthenticatedLayout>
    );
}

export default DashboardPage;
