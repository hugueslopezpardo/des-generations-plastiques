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
    regions: Region[];
    levels: SchoolLevel[];
    associationTypes: any[];
    deliveryTypes: DeliveryType[];
    alreadySetup: boolean;
}

const SetupPage = ({regions, levels, associationTypes, deliveryTypes, alreadySetup}: SetupPageProps) => {

    const [accountType, setAccountType] = useState<string>('');

    return (
        <AuthenticationLayout title={'Configuration du compte'}>
            <Flex justify={'center'} align={'center'} direction={'column'}
                  className={'min-h-screen w-screen bg-gradient-to-r from-[#F7B501] to-yellow-600 p-24'}>
                {alreadySetup ? (
                    <SetupDeliveries regions={regions} />
                ) : (
                    <>
                        {accountType === '' ? (
                            <SetupAccounts setAccountType={setAccountType}/>) : accountType === 'individual' ? (
                            <SetupAccountIndividual regions={regions}/>) : accountType === 'school' ? (
                            <SetupAccountSchool regions={regions} levels={levels}/>) : accountType === 'association' ? (
                            <SetupAccountAssociation associationTypes={associationTypes} />
                        ) : null}
                    </>
                )}
            </Flex>
        </AuthenticationLayout>
    );
}

export default SetupPage;
