import {Region} from "@/types";
import SetupDeliveries from "@/pages/Application/Setup/Partials/Deliveries/SetupDeliveries";

/**
 * @interface SetupIndividualProps - The props for the SetupIndividual component
 * @property {Region[]} regions - The regions to be used in the component
 */
interface SetupIndividualProps {
    regions: Region[];
}

const SetupAccountIndividual = ({regions}: SetupIndividualProps) => {
    return (
        <SetupDeliveries regions={regions} />
    );
}

export default SetupAccountIndividual;
