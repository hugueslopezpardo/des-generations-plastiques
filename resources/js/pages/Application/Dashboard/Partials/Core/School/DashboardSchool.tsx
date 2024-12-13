import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Gender, Region} from "@/types";
import DashboardSchoolStudents from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolStudents";
import DashboardPictures from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPictures";
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";
import DashboardSchoolGeneral from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneral";
import DashboardSchoolSettings from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolSettings";
import DashboardSchoolGeneralGroup
    from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneralGroup";

interface DashboardSchoolProps {
    genders: Gender[];
    regions: Region[];
    deliveryStatus: any;
    images: string[];
    students: any[];
    levels: any[];
}

const DashboardSchool = ({regions, genders, deliveryStatus, images, students, levels}: DashboardSchoolProps) => {
    return (
        <Tabs defaultValue="general_group" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-5">
                <TabsTrigger value="general_group">
                    Groupe
                </TabsTrigger>
                <TabsTrigger value="general_individual">
                    Individuel
                </TabsTrigger>
                <TabsTrigger value="students">
                    Mes élèves
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Photos
                </TabsTrigger>
                <TabsTrigger value={'settings'}>
                    Paramètres
                </TabsTrigger>
            </TabsList>
            <TabsContent value="general_individual">
                <DashboardSchoolGeneral students={students} />
            </TabsContent>
            <TabsContent value="general_group">
                <DashboardSchoolGeneralGroup teacher={students[0]} />
            </TabsContent>
            <TabsContent value="students">
                <DashboardSchoolStudents genders={genders} students={students} />
            </TabsContent>
            <TabsContent value="pictures">
                <DashboardPictures />
                <DashboardPicturesGallery images={images} />
            </TabsContent>
            <TabsContent value={'settings'}>
                <DashboardSchoolSettings deliveryStatus={deliveryStatus} regions={regions} levels={levels} />
            </TabsContent>
        </Tabs>
    );
}

export default DashboardSchool;
