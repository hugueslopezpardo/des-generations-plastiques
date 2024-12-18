import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
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
import {Progress} from "@radix-ui/react-progress";
import {Badge} from "@/components/ui/badge";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";


interface DashboardSchoolSettingsProps {
    deliveryStatus: any;
    regions: Region[];
    levels: any[];
}

/**
 * The dashboard school Settings component.
 * @param genders
 * @constructor
 */
const DashboardSchoolSettings = ({deliveryStatus, regions, levels}: DashboardSchoolSettingsProps) => {

    /**
     * Use the toast hook.
     */
    const {toast} = useToast();

    /**
     * The form state
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        'school_name': '',
        'school_region': '',
        'school_address': '',
        'school_city': '',
        'school_zip_code': '',
        'school_discipline': '',
        'school_level': '',
        'school_is_ngp': false,
        'school_is_ngp_autonomous': false,
        'school_number_of_students': '0',
        'school_number_of_students_girls': '0',
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
        post(route('dashboard.Settings.store'), {
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
            }
        });
    };

    return (
        <Flex gap={'4'} direction={'column'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Paramètres de l'étalissement
                    </CardTitle>
                    <CardDescription>
                        Configurez les paramètres de votre établissement.
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
                                        <SelectValue placeholder={'Région de l\'établissement'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Région</SelectLabel>
                                            {regions.map((region) => (<SelectItem key={region.name} value={region.name}>
                                                {region.name}
                                            </SelectItem>))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Text className={'text-red-500 text-sm'}>{errors.school_region}</Text>
                            </Flex>

                            {/* School department
                        <Flex direction={'column'} gap={'2'}>
                            <Label htmlFor={'school_department'}>Département de l'établissement</Label>
                            <Select onValueChange={(value) => setData('school_department', value)}>
                                <SelectTrigger className={`${errors.school_department ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder={'Département de l\'établissement'}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Département</SelectLabel>
                                        {filteredDepartments.map((department) => (
                                            <SelectItem key={department.name} value={department.name}>
                                                {department.name}
                                            </SelectItem>))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Text className={'text-red-500 text-sm'}>{errors.school_department}</Text>
                        </Flex>
 */}
                            {/* School address */}
                            <Flex direction={'column'} gap={'2'}>
                                <Label htmlFor={'school_address'}>Adresse de l'établissement</Label>
                                <Input
                                    type={'text'}
                                    id={'school_address'}
                                    name={'school_address'}
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
                                        <SelectValue placeholder={'Niveau de la classe'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Niveau</SelectLabel>
                                            {levels.map((level) => (<SelectItem key={level.name} value={level.name}>
                                                {level.name}
                                            </SelectItem>))}
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
                                    onChange={(e) => setData('school_number_of_students', e.target.value)}
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
                                    onChange={(e) => setData('school_number_of_students_girls', e.target.value)}
                                    className={`${errors.school_number_of_students ? 'border-red-500' : ''}`}
                                />
                                <Text className={'text-red-500 text-sm'}>{errors.school_number_of_students_girls}</Text>
                            </Flex>

                            {data.school_region === 'Normandie' && (
                                <Flex direction={'column'} gap={'2'}>
                                    <Label htmlFor={'school_is_ngp'}>
                                        Votre établissement scolaire a-t-il été sélectionné pour le
                                        programme{" "} <span
                                        className="font-bold">"Nouvelles Générations Plastiques" ?</span>
                                    </Label>
                                    <RadioGroup onValueChange={(value) => setData('school_is_ngp', value === 'true')}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="true" id="r1"/>
                                            <Label htmlFor="r2">Oui</Label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="false" id="r2"/>
                                            <Label htmlFor="r2">Non</Label>
                                        </div>
                                    </RadioGroup>


                                    <Text className={'text-red-500 text-sm'}>{errors.school_is_ngp}</Text>
                                </Flex>
                            )}

                            {data.school_region === 'Normandie' && data.school_is_ngp && (
                                <Flex direction={'column'} gap={'2'}>
                                    <Label htmlFor={'school_is_ngp_autonomous'}>
                                        Avez-vous un accompagnement du Dôme pour le programme{" "}
                                    </Label>
                                    <RadioGroup onValueChange={(value) => setData('school_is_ngp_autonomous', value === 'true')}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="true" id="r1"/>
                                            <Label htmlFor="r2">Oui</Label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="false" id="r2"/>
                                            <Label htmlFor="r2">Non</Label>
                                        </div>
                                    </RadioGroup>
                                    <Text className={'text-red-500 text-sm'}>{errors.school_is_ngp_autonomous}</Text>
                                </Flex>
                            )}


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
        </Flex>
    );
}

export default DashboardSchoolSettings;
