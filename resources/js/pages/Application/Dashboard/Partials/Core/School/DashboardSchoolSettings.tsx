import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Flex, Text} from "@radix-ui/themes";
import {Gender, Region} from "@/types";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {useToast} from "@/hooks/use-toast";
import {useForm} from "@inertiajs/react";
import {FormEventHandler, useState} from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

interface DashboardSchoolSettingsProps {
    deliveryStatus: any;
    regions: Region[];
    levels: any[];
    schoolInformation: any;
}

/**
 * The dashboard school Settings component.
 * @param genders
 * @constructor
 */
const DashboardSchoolSettings = ({deliveryStatus, regions, levels, schoolInformation}: DashboardSchoolSettingsProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    console.log('School information', schoolInformation);

    /**
     * The form state
     */
    const {data, setData, patch, processing, errors, reset} = useForm({
        'school_name': schoolInformation.name,
        'school_region': schoolInformation.region_id,
        'school_address': schoolInformation.address,
        'school_city': schoolInformation.city,
        'school_zip_code': schoolInformation.zip_code,
        'school_discipline': schoolInformation.discipline,
        'school_level': schoolInformation.school_level_id,
        'school_is_ngp': schoolInformation.is_ngp,
        'school_is_ngp_autonomous': schoolInformation.is_ngp_autonomous,
        'school_number_of_students': schoolInformation.number_of_students,
        'school_number_of_students_girls': schoolInformation.number_of_students_girls,
    });

    /**
     * The current selected region
     */
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('dashboard.school.patch'), {
            onSuccess: () => {
                toast({
                    title: 'Paramètres de l\'établissement',
                    description: 'Les paramètres de l\'établissement ont été mis à jour avec succès.',
                    variant: 'default'
                })
            },
            onError: (errors) => {
                toast({
                    title: 'Paramètres de l\'établissement',
                    description: 'Une erreur est survenue lors de la mise à jour des paramètres de l\'établissement.',
                    variant: 'destructive'
                })
            }
        });
    };

    console.log('School information', schoolInformation);
    console.log('Test 1 : ', levels.find((level) => level.id === schoolInformation.school_level_id)?.name);
    console.log('Test 2 : ', regions.find((region) => region.id === schoolInformation.region_id)?.name);

    return (
        <Flex gap={'4'} direction={'column'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Informations de l'établissement
                    </CardTitle>
                    <CardDescription>
                        Modifier les informations de l'établissement pour faire avancer la recherche.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <Flex direction={'column'} gap={'4'}>
                            {/* School name */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_name'}>Nom de l'établissement</Label>
                                <Input
                                    type={'text'}
                                    id={'school_name'}
                                    name={'school_name'}
                                    placeholder={'Nom de l\'établissement'}
                                    defaultValue={schoolInformation.name}
                                    onChange={(e) => setData('school_name', e.target.value)}
                                    className={`${errors.school_name ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_name}</Text>
                            </Flex>

                            {/* School region */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_region'}>Région de l'établissement</Label>
                                <Select onValueChange={(value) => {
                                    setSelectedRegion(value);
                                    setData('school_region', value);
                                }}>
                                    <SelectTrigger className={`${errors.school_region ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder={regions.find((region) => region.id === schoolInformation.region_id)?.name || 'Région de l\'établissement'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Région</SelectLabel>
                                            {regions.map((region) => (
                                                <SelectItem key={region.name} value={region.name}>
                                                    {region.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.school_region}</Text>
                            </Flex>

                            {/* School address */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_address'}>Adresse de l'établissement</Label>
                                <Input
                                    type={'text'}
                                    id={'school_address'}
                                    name={'school_address'}
                                    defaultValue={schoolInformation.address}
                                    placeholder={'Adresse de l\'établissement'}
                                    onChange={(e) => setData('school_address', e.target.value)}
                                    className={`${errors.school_address ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_address}</Text>
                            </Flex>

                            {/* School city */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_city'}>Ville de l'établissement</Label>
                                <Input
                                    type={'text'}
                                    id={'school_city'}
                                    name={'school_city'}
                                    defaultValue={schoolInformation.city}
                                    placeholder={'Ville de l\'établissement'}
                                    onChange={(e) => setData('school_city', e.target.value)}
                                    className={`${errors.school_city ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_city}</Text>
                            </Flex>

                            {/* School zip code */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_zip_code'}>Code postal de l'établissement</Label>
                                <Input
                                    type={'number'}
                                    id={'school_zip_code'}
                                    name={'school_zip_code'}
                                    defaultValue={schoolInformation.zip_code}
                                    placeholder={'Code postal de l\'établissement'}
                                    onChange={(e) => setData('school_zip_code', e.target.value)}
                                    className={`${errors.school_zip_code ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_zip_code}</Text>
                            </Flex>

                            {/* School discipline */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_discipline'}>Discipline étudiée par la classe</Label>
                                <Input
                                    type={'text'}
                                    id={'school_discipline'}
                                    name={'school_discipline'}
                                    defaultValue={schoolInformation.discipline}
                                    placeholder={'Discipline étudiée par la classe'}
                                    onChange={(e) => setData('school_discipline', e.target.value)}
                                    className={`${errors.school_discipline ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_discipline}</Text>
                            </Flex>

                            {/* School level */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_level'}>Niveau de la classe</Label>
                                <Select onValueChange={(value) => setData('school_level', value)}>
                                    <SelectTrigger className={`${errors.school_level ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder={levels.find((level) => level.id === schoolInformation.school_level_id)?.name || 'Niveau de la classe'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Niveau</SelectLabel>
                                            {levels.map((level) => (
                                                <SelectItem key={level.id} value={level.name}>
                                                    {level.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.school_level}</Text>
                            </Flex>

                            {/* School number of students */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_number_of_students'}>Nombre d'élèves dans la classe</Label>
                                <Input
                                    type={'number'}
                                    id={'school_number_of_students'}
                                    name={'school_number_of_students'}
                                    placeholder={'Nombre d\'élèves dans la classe'}
                                    defaultValue={schoolInformation.number_of_students}
                                    onChange={(e) => setData('school_number_of_students', Number(e.target.value))}
                                    className={`${errors.school_number_of_students ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_number_of_students}</Text>
                            </Flex>

                            {/* School number of students girls */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_number_of_students_girls'}>Nombre de filles dans la classe</Label>
                                <Input
                                    type={'number'}
                                    id={'school_number_of_students_girls'}
                                    name={'school_number_of_students_girls'}
                                    placeholder={'Nombre de filles dans la classe'}
                                    defaultValue={schoolInformation.number_of_students_girls}
                                    onChange={(e) => setData('school_number_of_students_girls', Number(e.target.value))}
                                    className={`${errors.school_number_of_students ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_number_of_students_girls}</Text>
                            </Flex>

                            {/* Submit button */}
                            <Flex direction={'column'} gap={'2'}>
                                <Button
                                    type={'submit'}
                                    disabled={processing}
                                >
                                    Sauvegarder les paramètres <ArrowRight size={16} />
                                </Button>
                            </Flex>

                        </Flex>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Supprimer l'établissement
                    </CardTitle>
                    <CardDescription>
                        Si jamais vous souhaitez supprimer l'établissement, vous pouvez le faire ici, les données essentielles
                        à la recherche seront alors anonymisées pour préserver votre confidentialité, et seront supprimées
                        définitivement deux ans après la dernière utilisation des données par nos chercheurs.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <Button variant={'destructive'} className={'w-full'}>
                            Supprimer l'établissement {' '} <ArrowRight size={16} />
                        </Button>
                    </CardDescription>
                </CardContent>
            </Card>

        </Flex>
    );
}

export default DashboardSchoolSettings;
