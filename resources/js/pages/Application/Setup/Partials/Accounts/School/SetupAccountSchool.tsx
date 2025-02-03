import {Region, SchoolLevel} from "@/types";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex, Text} from "@radix-ui/themes";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm, usePage} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {FormEventHandler, useEffect, useState} from "react";
import {ArrowRight} from "lucide-react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import SetupAccountSchoolFirstStep
    from "@/pages/Application/Setup/Partials/Accounts/School/Step/SetupAccountSchoolFirstStep";
import SetupAccountSchoolSecondStep
    from "@/pages/Application/Setup/Partials/Accounts/School/Step/SetupAccountSchoolSecondStep";

/**
 * @interface SetupSchoolProps - The props for the SetupSchool component
 * @property {Region[]} regions - The regions to be used in the component
 */
interface SetupSchoolProps {
    school: any;
    regions: Region[];
    levels: SchoolLevel[];
}

const SetupAccountSchool = ({regions, levels, school}: SetupSchoolProps) => {

    /**
     * Get the authenticated user.
     */
    const user = usePage().props.auth.user;

    console.log(school);

    return (
        <>
            {school !== null ?
                <SetupAccountSchoolSecondStep school={school} regions={regions} />
             : (
                <SetupAccountSchoolFirstStep regions={regions} levels={levels} />
            )}
        </>
    );

};

export default SetupAccountSchool;
