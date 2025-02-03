import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import Navbar from "@/components/app/Navbar/Navbar";
import {Flex} from "@radix-ui/themes";

/**
 * @interface AuthenticatedLayoutProps - The props of the Authenticated layout component.
 * @property {string} title - The title of the Authenticated layout.
 */
interface AuthenticatedLayoutProps {
    title: string;
}

/**
 * @function AuthenticatedLayout - The Authenticated layout component.
 * @param title - The title of the Authenticated layout.
 * @param children - The children of the Authenticated layout.
 * @constructor
 */
const AuthenticatedLayoutSecond = ({title, children}: PropsWithChildren<AuthenticatedLayoutProps>) => {
    return (
        <>
            <Head title={title} />
            <Flex justify={'center'} align={'center'} direction={'column'} className={'py-8 min-h-screen bg-gradient-to-r from-[#F7B501] to-yellow-500'}>
                <img src={'/assets/images/logo-rond.png'} alt={'Logo'} className={'mx-auto mb-8 w-36 h-36'} />
                {children}
            </Flex>
        </>
    );
}

export default AuthenticatedLayoutSecond;
