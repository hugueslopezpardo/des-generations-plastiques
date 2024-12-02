import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import DashboardPictures from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPictures";
import DashboardPicturesGallery from "@/pages/Application/Dashboard/Partials/Common/Pictures/DashboardPicturesGallery";
import DashboardAssociationGeneral
    from "@/pages/Application/Dashboard/Partials/Core/Association/DashboardAssociationGeneral";
import DashboardAssociationMembers
    from "@/pages/Application/Dashboard/Partials/Core/Association/DashboardAssociationMembers";
import {Gender} from "@/types";

interface DashboardAssociationProps {
    genders: Gender[];
    images: string[];
    members: any[];
}

const DashboardAssociation = ({genders, images, members}: DashboardAssociationProps) => {

    return (
        <Tabs defaultValue="general" className="w-11/12 md:w-3/4 mt-24">
            <TabsList className="grid h-auto w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="general">
                    Vision générale
                </TabsTrigger>
                <TabsTrigger value="members">
                    Membres
                </TabsTrigger>
                <TabsTrigger value="pictures">
                    Photos
                </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
                <DashboardAssociationGeneral members={members} />
            </TabsContent>
            <TabsContent value="members">
                <DashboardAssociationMembers members={members} genders={genders} />
            </TabsContent>
            <TabsContent value="pictures">
                <DashboardPictures />
                <DashboardPicturesGallery images={images} />
            </TabsContent>
        </Tabs>
    );
}

export default DashboardAssociation;
