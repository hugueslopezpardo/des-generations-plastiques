import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Flex, Text} from "@radix-ui/themes";
import {Gender} from "@/types";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {useToast} from "@/hooks/use-toast";
import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface DashboardSchoolStudentsProps {
    genders: Gender[];
    members: any[];
}

/**
 * The dashboard school students component.
 * @param genders
 * @constructor
 */
const DashboardAssociationMembers = ({genders, members}: DashboardSchoolStudentsProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        first_name: '', last_name: '', age: '', gender: ''
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('dashboard.association.store'), {
            onSuccess: () => {
                toast({
                    title: 'Membre ajouté',
                    description: 'Le membre a été ajouté avec succès.',
                    variant: 'default'
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur s\'est produite lors de l\'ajout du membre.',
                    variant: 'destructive'
                })
            }
        });
    };

    return (
        <Flex gap={'4'} direction={'column'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Mes membres
                    </CardTitle>
                    <CardDescription>
                        Vous pouvez voir ici la liste de vos membres et les gérer.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="first_name">Prénom</Label>
                                <Input type="text" placeholder="Prénom du membre" id="first_name" className={`${errors.first_name ? 'border-red-500' : ''}`} onChange={(e) => setData('first_name', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.first_name}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="last_name">Nom</Label>
                                <Input type="text" placeholder="Nom du membre" id="last_name" className={`${errors.last_name ? 'border-red-500' : ''}`} onChange={(e) => setData('last_name', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.last_name}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'age'}>Genre</Label>
                                <Select onValueChange={(value) => setData('gender', value)}>
                                    <SelectTrigger className={`${errors.gender ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder="Genre du membre"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Genre</SelectLabel>
                                            {genders.map((gender, index) => (<SelectItem key={index} value={gender.slug}>
                                                    {gender.name}
                                                </SelectItem>))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.gender}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="age">Âge</Label>
                                <Input type="number" placeholder="Âge du membre" id="age" className={`${errors.age ? 'border-red-500' : ''}`} onChange={(e) => setData('age', e.target.value)}/>
                                <Text className={'text-red-500 text-sm'}>{errors.age}</Text>
                            </Flex>

                            <Button type="submit" className="mt-4" disabled={processing}>
                                Ajouter un membre {processing && '...'} <ArrowRight size={16} />
                            </Button>

                        </Flex>
                    </form>

                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Liste des membres
                    </CardTitle>
                    <CardDescription>
                        Suivez les différents membres participant à votre programme.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>
                            Liste des membres
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Prénom</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead>Genre</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell>{member.first_name}</TableCell>
                                    <TableCell>{member.last_name}</TableCell>
                                    <TableCell>{member.age}</TableCell>
                                    <TableCell>{member.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={8}>Nombre total de membres: {members.length}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>

                </CardContent>
            </Card>



        </Flex>
    );
}

export default DashboardAssociationMembers;
