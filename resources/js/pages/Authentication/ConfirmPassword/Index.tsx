import {useForm} from "@inertiajs/react";
import React, {FormEventHandler} from "react";
import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Flex} from "@radix-ui/themes";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

/**
 * The ConfirmPassword component.
 */
const ConfirmPasswordPage = () => {

    /**
     * The form data.
     */
    const {data, setData, post, processing, errors, reset} = useForm({
        password: '',
    });

    /**
     * Submit the form.
     * @param e - The form event.
     */
    const submit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    }

    return (<>
            <AuthenticationLayout title={'Confirmer le mot de passe'}>
                <Card className={'w-96 md:w-1/2'}>
                    <CardHeader>
                        <CardTitle>
                            Confirmer le mot de passe
                        </CardTitle>
                        <CardDescription>
                            Ceci est une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de
                            continuer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <Flex direction={'column'} gap={'4'}>
                                <Flex direction={'column'} gap={'2'}>
                                    <Label htmlFor={'password'}>
                                        Mot de passe
                                    </Label>
                                    <Input type={'password'} name={'password'} value={data.password}
                                           onChange={(e) => setData('password', e.target.value)}/>
                                </Flex>
                                <Flex direction={'column'} justify={'center'}>
                                    <Button type={'submit'} className={'w-full'} disabled={processing}>
                                        {processing ? 'Chargement...' : 'Confirmer'} {' '} <ArrowRight size={16}/>
                                    </Button>
                                </Flex>
                            </Flex>
                        </form>
                    </CardContent>
                </Card>
            </AuthenticationLayout>
        </>)
}

export default ConfirmPasswordPage;
