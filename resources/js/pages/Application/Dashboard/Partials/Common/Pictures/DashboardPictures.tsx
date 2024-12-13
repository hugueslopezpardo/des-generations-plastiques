import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useForm} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";

interface DashboardPicturesProps {

}

const DashboardPictures = ({}: DashboardPicturesProps) => {

    const { toast } = useToast();

    const {data, setData, post, processing, errors, reset} = useForm({
        image: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('dashboard.pictures.store'), {
            onSuccess: () => {
                toast({
                    title: 'Photo envoyée',
                    description: 'La photo a bien été envoyée.',
                    variant: 'default'
                });
            },
            onError: () => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur est survenue lors de l\'envoi de la photo.',
                    variant: 'destructive'
                });
            },
            onFinish: () => reset('image'),
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Ajouter une photo
                </CardTitle>
                <CardDescription>
                    En ajoutant des photos, vous nous aidez à faire avancer la recherche.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit} encType={'multipart/form-data'}>
                    <Flex direction={'column'} gap={'4'}>
                        <Flex direction={'column'} gap={'2'}>
                            <Label>Choix des photos à envoyer</Label>
                            {/* @ts-ignore */}
                            <Input type="file" multiple={false} accept="image/*" onChange={(e) => setData('image', e.target.files[0])} />
                            <Text className={'text-red-500 text-sm'}>{errors.image}</Text>
                        </Flex>
                        <Button type={'submit'}>
                            Envoyer les photos {' '} <ArrowRight size={16} />
                         </Button>
                    </Flex>
                </form>
            </CardContent>
        </Card>
    );
}

export default DashboardPictures;
