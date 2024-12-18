import {PropsWithChildren} from "react";
import {Head} from "@inertiajs/react";
import Navbar from "@/components/app/Navbar/Navbar";

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
const AuthenticatedLayout = ({title, children}: PropsWithChildren<AuthenticatedLayoutProps>) => {
    return (
        <>
            <Head title={title} />
            <Navbar />
            {children}
        </>
    );
}

export default AuthenticatedLayout;
