import "@radix-ui/themes/styles.css";

import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Toaster } from "@/components/ui/toaster";
import { Theme } from "@radix-ui/themes";
import {NextUIProvider} from "@nextui-org/react";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <Theme appearance={'light'}>
                <NextUIProvider>
                    <App {...props} />
                </NextUIProvider>
                <Toaster/>
            </Theme>
        );
    },
    progress: {
        color: '#4B5563',
    },
}).then(r => {
    console.log(r);
});
