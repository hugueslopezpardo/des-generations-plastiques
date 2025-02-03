import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Flex, Text} from "@radix-ui/themes";
import {Gender} from "@/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
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
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

interface DashboardSchoolStudentsProps {
    genders: Gender[];
    students: any[];
}

/**
 * Component for deleting a student.
 * @param student - The student.
 * @constructor
 */
const DashboardSchoolGeneralDeleteStudent = ({student}: any) => {

        const {data, setData, post, processing, errors, reset} = useForm({
            id: student.id
        });

        const {toast} = useToast();

        /**
         * Submit the form.
         * @param e - The form event.
         */
        const submit: FormEventHandler = (e: React.FormEvent) => {
            e.preventDefault();
            post(route('dashboard.students.delete', student.id), {
                onSuccess: () => {
                    toast({
                        title: 'Élève supprimé',
                        description: 'L\'élève a été supprimé avec succès.',
                        variant: 'default'
                    })
                },
                onError: (errors) => {
                    toast({
                        title: 'Erreur',
                        description: 'Une erreur s\'est produite lors de la suppression de l\'élève.',
                        variant: 'destructive'
                    })
                },
                onFinish: () => {
                    reset();
                }
            });
        }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={'destructive'} size={'sm'}>Supprimer</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Voulez-vous vraiment supprimer cet élève?</SheetTitle>
                    <SheetDescription>
                        Cette action est irréversible. Cela supprimera définitivement le compte de l'élève
                        et supprimera vos données de nos serveurs.
                    </SheetDescription>
                    <form onSubmit={submit}>
                        <Input type={'hidden'} value={student.id} onChange={(e) => setData('id', e.target.value)}/>
                        <Button type={'submit'} variant={'destructive'}>Je confirme</Button>
                    </form>
                </SheetHeader>

            </SheetContent>
        </Sheet>
    )
}

/**
 * The dashboard school students component.
 * @param genders
 * @constructor
 */
const DashboardSchoolStudents = ({genders, students}: DashboardSchoolStudentsProps) => {

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
        post(route('dashboard.students.store'), {
            onSuccess: () => {
                toast({
                    title: 'Élève ajouté',
                    description: 'L\'élève a été ajouté avec succès.',
                    variant: 'default'
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Erreur',
                    description: 'Une erreur s\'est produite lors de l\'ajout de l\'élève.',
                    variant: 'destructive'
                })
            },
            onFinish: () => {
                reset('first_name', 'last_name', 'age');

                const inputs = document.querySelectorAll('input');
                inputs.forEach((input) => {
                    input.value = '';
                });

            }
        });
    };

    students = Object.values(students);

    return (
        <Flex gap={'4'} direction={'column'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Mes élèves
                    </CardTitle>
                    <CardDescription>
                        Vous pouvez voir ici la liste de vos élèves et les gérer.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="first_name">Prénom</Label>
                                <Input type="text" placeholder="Prénom de l'élève" id="first_name"
                                       className={`${errors.first_name ? 'border-red-500' : ''}`}
                                       onChange={(e) => setData('first_name', e.target.value)}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.first_name}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="last_name">Nom</Label>
                                <Input type="text" placeholder="Nom de l'élève"
                                       id="last_name"
                                       className={`${errors.last_name ? 'border-red-500' : ''}`}
                                       onChange={(e) => setData('last_name', e.target.value)}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.last_name}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'age'}>Genre</Label>
                                <Select onValueChange={(value) => setData('gender', value)}>
                                    <SelectTrigger className={`${errors.gender ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder="Genre de l'élève"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Genre</SelectLabel>
                                            {genders.map((gender, index) => (
                                                <SelectItem key={index} value={gender.slug}>
                                                    {gender.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.gender}</Text>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor="age">Âge</Label>
                                <Input type="number" placeholder="Àge de l'élève" id="age" className={`${errors.age ? 'border-red-500' : ''}`} onChange={(e) => setData('age', e.target.value)} />
                                <Text className={'text-red-500 text-sm'}>{errors.age}</Text>
                            </Flex>

                            <Button type="submit" className="mt-4" disabled={processing}>
                                Ajouter un élève {processing && '...'} <ArrowRight size={16} />
                            </Button>
                        </Flex>
                    </form>

                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Liste des élèves
                    </CardTitle>
                    <CardDescription>
                        Suivez les différents élèves participant à votre programme.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>
                            Liste des élèves
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Prénom</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.length > 0 ? (
                                students.slice(1).map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell>{student.first_name}</TableCell>
                                        <TableCell>{student.last_name}</TableCell>
                                        <TableCell>{student.age}</TableCell>
                                        <TableCell>{student.gender}</TableCell>
                                        <TableCell>
                                            <DashboardSchoolGeneralDeleteStudent student={student} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        Aucun élève disponible.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={8}>Nombre total d'élèves: {students.length - 1}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>

                </CardContent>
            </Card>

        </Flex>
    );
}

export default DashboardSchoolStudents;
