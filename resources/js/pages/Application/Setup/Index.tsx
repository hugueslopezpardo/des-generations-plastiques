import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SetupAccountSchool from "@/pages/Application/Setup/Partials/Accounts/School/SetupAccountSchool";
import {DeliveryType, Region, SchoolLevel} from "@/types";
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
    deliveryNeeded: boolean;
    school: any;
}

const SetupPage = ({accountType, regions, levels, associationTypes, deliveryTypes, alreadySetup, deliveryNeeded, school}: SetupPageProps) => {

    return (
        <AuthenticationLayout title={'Configuration du compte'}>
            {alreadySetup ? (
                <SetupDeliveries regions={regions} school={school} />
            ) : (
                <>
                    <SetupAccountSchool regions={regions} levels={levels} school={school} />
                </>
            )}
        </AuthenticationLayout>
    );
}

export default SetupPage;
