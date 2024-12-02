import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";

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
            {children}
        </>
    );
}

export default AuthenticationLayout;
