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

interface DashboardPageProps {
    user: any;
    levels: any[];
    regions: any[];
    genders: Gender[];
    deliveryStatus: any;
    associations: any[];
    images: any[];
    students: any[];
    members: any[];
    schoolInformation: any;
    kits: any[];
    kit_vegetations: any[];
    kit_dirts: any[];
    kit_lights: any[];
}

const DashboardPage = ({user, levels, regions, genders, deliveryStatus, images, students, members, schoolInformation, kits, kit_vegetations, kit_dirts, kit_lights}: DashboardPageProps) => {

    return (
       <AuthenticatedLayout title={'Tableau de bord'}>
           <Flex justify={'center'} className={'min-h-screen w-screen bg-[#5BBB7D] py-12'}>

               {user.user_type_id === 2 && (
                   <DashboardSchool genders={genders} students={students} images={images} deliveryStatus={deliveryStatus} regions={regions} levels={levels} schoolInformation={schoolInformation} kits={kits} kit_dirts={kit_dirts} kit_lights={kit_lights} kit_vegetations={kit_vegetations} />
               )}

           </Flex>
       </AuthenticatedLayout>
    );
}

export default DashboardPage;
