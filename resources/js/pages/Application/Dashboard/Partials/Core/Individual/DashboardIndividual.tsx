import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import DashboardSchoolGeneral from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolGeneral";
import DashboardSchoolStudents from "@/pages/Application/Dashboard/Partials/Core/School/DashboardSchoolStudents";
import DashboardPictures from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPictures";
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";
import DashboardIndividualGeneral
    from "@/pages/Application/Dashboard/Partials/Core/Individual/DashboardIndividualGeneral";

interface DashboardIndividualProps {
    images: string[];
}

const DashboardIndividual = ({images}: DashboardIndividualProps) => {
    return (
        <Tabs defaultValue="general" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="general">
                    Vision générale
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Photos
                </TabsTrigger>
                <TabsTrigger value={'settings'}>
                    Paramètres
                </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
                <DashboardIndividualGeneral />
            </TabsContent>
            <TabsContent value="pictures">
                <DashboardPictures />
                <DashboardPicturesGallery images={images} />
            </TabsContent>
            <TabsContent value={'settings'}>
            </TabsContent>
        </Tabs>
    );
}

export default DashboardIndividual;
