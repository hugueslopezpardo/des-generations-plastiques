import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import {Flex} from "@radix-ui/themes";

/**
 * @interface AuthenticationLayoutProps - The props of the authentication layout component.
 * @property {string} title - The title of the authentication layout.
 */
interface AuthenticationLayoutProps {
    title: string;
}

/**
 * @function AuthenticationLayout - The authentication layout component.
 * @param title - The title of the authentication layout.
 * @param children - The children of the authentication layout.
 * @constructor
 */
const AuthenticationLayout = ({title, children}: PropsWithChildren<AuthenticationLayoutProps>) => {
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

export default AuthenticationLayout;
