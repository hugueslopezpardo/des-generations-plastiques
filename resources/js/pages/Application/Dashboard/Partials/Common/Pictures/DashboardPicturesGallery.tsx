import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flex, Grid } from "@radix-ui/themes";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@inertiajs/react";

interface DashboardPicturesProps {
    images: any[];
}

const DashboardPictures = ({ images }: DashboardPicturesProps) => {
    const { toast } = useToast();
    const { delete: deleteImage } = useForm();

    const handleDelete = (id: number) => {
        deleteImage(route("dashboard.images.destroy", id), {
            onSuccess: () => {
                toast({
                    title: "Image supprimée",
                    description: "L'image a bien été supprimée.",
                    variant: "default",
                });
            },
            onError: () => {
                toast({
                    title: "Erreur",
                    description: "Impossible de supprimer l'image.",
                    variant: "destructive",
                });
            },
        });
    };

    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>Gérer les photos</CardTitle>
                <CardDescription>
                    Ajouter ou supprimer des photos pour faire avancer la recherche.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Grid columns={{ sm: "1", md: "4" }} gap="2">
                    {images.map((image) => (
                        <Flex key={image.id} direction="row" gap="2" position="relative">
                            <img
                                src={image.path}
                                alt="image"
                                className="w-96 h-72 rounded-md"
                            />
                            <button
                                className="h-8 w-8 absolute top-2 right-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 flex items-center justify-center"
                                onClick={() => handleDelete(image.id)}
                            >
                                <Trash size="16" />
                            </button>
                        </Flex>
                    ))}

                    {images.length === 0 && <Label>Aucune image trouvée</Label>}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DashboardPictures;
