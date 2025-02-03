import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Grid, Text} from "@radix-ui/themes";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@inertiajs/react";
import {Button} from "@/components/ui/button";

interface DashboardPicturesProps {
    images: any[];
}

const DashboardPictures = ({ images }: DashboardPicturesProps) => {
    const { toast } = useToast();
    const { delete: deleteImage } = useForm();

    const handleDelete = (id: number) => {
        deleteImage(route("dashboard.kit.image.destroy", id), {
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
        <Card className="mt-1">
            <CardHeader>
                <CardTitle>Mes photos</CardTitle>
                <CardDescription>
                    Partagez vos photos du lancement de l’expérience : le kit enfoui, cloué ou exposé à la lumière.
                    Vous pourrez également déposer votre photo à la fin de l’expérience, dans 4 mois.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Grid columns={{ sm: "1", md: "3" }} gap="2">
                    {images.map((image, index) => (
                            <Flex key={index} direction="row" gap="2" position="relative">
                                <Card>
                                    <CardHeader>
                                        <img
                                            src={image.href}
                                            alt="image"
                                            className="w-96 h-72 rounded-md"
                                        />
                                        <CardTitle>
                                            <Text>{image.title}</Text>
                                        </CardTitle>
                                        <CardDescription>
                                            <Text>{image.description} | {image.date}</Text>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button onClick={() => handleDelete(image.id)} className={'bg-red-500 w-full'}>
                                            Supprimer
                                            <Trash size="16" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Flex>
                    ))}
                    {images.length === 0 && <Label>Aucune image trouvée</Label>}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DashboardPictures;
