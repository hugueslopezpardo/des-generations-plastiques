import {Button, Progress, Spacer} from "@nextui-org/react";
import {ArrowLeft, ArrowRight} from "lucide-react";

interface SectionProps {
    children: any;
    title?: string;
    subtitle?: string;
    nbSteps?: number;
    step?: number;
    bgColor?: string;
    footerColor?: "warning" | "secondary" | "default" | "primary" | "success" | "danger" | undefined;
    fullpageApi?: any;
    indicatorColor?: any;
    btnColor?: any;
    btnTextColor?: any;
}

export default function Section({
                                    children,
                                    title,
                                    subtitle,
                                    nbSteps,
                                    step,
                                    bgColor,
                                    footerColor,
                                    fullpageApi,
                                    indicatorColor,
                                    btnColor,
                                    btnTextColor
                                }: SectionProps) {
    return (
        <section className={`slide flex flex-col items-center justify-center h-screen w-screen text-black ${bgColor}`}>
            <div className={`h-screen w-screen min-w-full max-w-7xl p-8 text-center flex justify-center flex-col relative`}>
                <div>
                    <h1 className="text-lg md:text-3xl font-bold mb-4 mt-24 md:mt-0">{title}</h1>
                    {subtitle && <p className="text-lg font-medium mb-4">{subtitle}</p>}
                    {children}
                </div>

                {step && nbSteps && (<>
                        <Spacer y={8}/>
                        <div className={"flex flex-col w-full mb-16 md:mb-0 absolute bottom-10 left-0"}>
                            <Progress
                                className="w-full"
                                label="Progression"
                                maxValue={nbSteps}
                                showValueLabel={false}
                                size="md"
                                value={step}
                                classNames={{
                                    indicator: indicatorColor
                                }}
                            />

                            <div className="mt-6 w-full flex justify-between ">
                                <Button
                                    size="lg"
                                    variant="solid"
                                    className={`${btnTextColor} ${btnColor}`}
                                    onClick={() => fullpageApi.moveSlideLeft()}
                                >
                                    <ArrowLeft size={16}/> Précédent
                                </Button>
                                <Button
                                    className={`ml-4 ${btnTextColor} ${btnColor}`}
                                    size="lg"
                                    variant="solid"
                                    onClick={() => fullpageApi.moveSlideRight()}
                                >
                                    Suivant <ArrowRight size={16}/>
                                </Button>
                            </div>
                        </div>
                    </>)}
            </div>
        </section>);
}
