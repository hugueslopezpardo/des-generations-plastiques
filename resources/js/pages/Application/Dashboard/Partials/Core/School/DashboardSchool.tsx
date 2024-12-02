import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Gender} from "@/types";
import DashboardSchoolStudents from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolStudents";
import DashboardPictures from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPictures";
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";
import DashboardSchoolGeneral from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneral";

interface DashboardSchoolProps {
    genders: Gender[];
    images: string[];
    students: any[];
}

const DashboardSchool = ({genders, images, students}: DashboardSchoolProps) => {

    return (
        <Tabs defaultValue="general" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="general">
                    Vision générale
                </TabsTrigger>
                <TabsTrigger value="students">
                    Mes élèves
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Photos
                </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
                <DashboardSchoolGeneral students={students} />
            </TabsContent>
            <TabsContent value="students">
                <DashboardSchoolStudents genders={genders} students={students} />
            </TabsContent>
            <TabsContent value="pictures">
                <DashboardPictures />
                <DashboardPicturesGallery images={images} />
            </TabsContent>
        </Tabs>
    );
}

export default DashboardSchool;
