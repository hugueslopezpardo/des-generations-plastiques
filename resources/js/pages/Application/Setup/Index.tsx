import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Flex} from "@radix-ui/themes";
import {useState} from "react";
import SetupAccountIndividual from "@/pages/Application/Setup/Partials/Accounts/Individual/SetupAccountIndividual";
import SetupAccountSchool from "@/pages/Application/Setup/Partials/Accounts/School/SetupAccountSchool";
import {DeliveryType, Region, SchoolLevel} from "@/types";
import SetupAccounts from "@/pages/Application/Setup/Partials/Accounts/SetupAccounts";
import SetupAccountAssociation from "@/pages/Application/Setup/Partials/Accounts/Association/SetupAccountAssociation";
import SetupDeliveries from "@/pages/Application/Setup/Partials/Deliveries/SetupDeliveries";


/**
 * @interface SetupPageProps - The props for the SetupPage component.
 * @property {Region[]} regions - The regions available for selection.
 * @property {SchoolLevel[]} levels - The school levels available for selection.
 * @property {boolean} alreadySetup - Whether the account has already been setup.
 */
interface SetupPageProps {
    accountType: number;
    regions: Region[];
    levels: SchoolLevel[];
    associationTypes: any[];
    deliveryTypes: DeliveryType[];
    alreadySetup: boolean;
}

const SetupPage = ({accountType, regions, levels, associationTypes, deliveryTypes, alreadySetup}: SetupPageProps) => {

    return (
        <AuthenticationLayout title={'Configuration du compte'}>
            {alreadySetup ? (
                <SetupDeliveries regions={regions} />
            ) : (
                <>
                    {accountType === 1 ? (
                        <SetupAccountIndividual regions={regions} />
                    ) : accountType === 2 ? (
                        <SetupAccountSchool regions={regions} levels={levels} />
                    ) : accountType === 3 ? (
                        <SetupAccountAssociation associationTypes={associationTypes} />
                    ) : null}
                </>
            )}





        </AuthenticationLayout>
    );
}

export default SetupPage;
