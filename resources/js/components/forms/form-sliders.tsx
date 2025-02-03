import { Slider } from "@nextui-org/react";
import { useState } from "react";

export type SliderStepMarks = {
    value: number;
    label: string;
}[];

interface FormSlidersProps {
    labels: string[]; // Liste des noms des sliders
    color:
        | "primary"
        | "success"
        | "warning"
        | "secondary"
        | "danger"
        | "foreground"
        | undefined;
    leftLabel: string; // Texte à gauche du slider
    rightLabel: string; // Texte à droite du slider
    minValue: number; // Valeur minimale
    maxValue: number; // Valeur maximale
    sliderStepMarks: SliderStepMarks; // Marques sur le slider
    json?: any; // Objet JSON à mettre à jour
    setJSON?: (newJson: any) => void; // Fonction pour mettre à jour le JSON
}

export default function FormSliders({
                                        labels,
                                        color,
                                        leftLabel,
                                        rightLabel,
                                        minValue,
                                        maxValue,
                                        sliderStepMarks,
                                        json,
                                        setJSON,
                                    }: FormSlidersProps) {
    const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>(
        Object.fromEntries(labels.map((label) => [label, maxValue / 2])) // Initialiser les sliders à la valeur médiane
    );

    const handleSliderChange = (label: string, value: number) => {
        const updatedValues = { ...sliderValues, [label]: value }; // Met à jour la valeur du slider correspondant
        setSliderValues(updatedValues);

        if (setJSON) {
            // Met à jour le JSON avec les clés entourées de guillemets
            setJSON({
                ...json,
                [`"${label}"`]: value, // Assurez-vous que 'value' est bien un nombre
            });
            console.log({ [`"${label}"`]: value });
        }
    };

    return (
        <div className={`grid gap-4 grid-cols-1 w-full`}>
            {labels.map((label) => (
                <div key={label}>
                    <p className="font-bold mb-2">{label}</p>
                    <Slider
                        className={"m-2"}
                        classNames={{
                            mark: "mt-2",
                        }}
                        color={color}
                        defaultValue={sliderValues[label]} // Définit la valeur initiale
                        hideValue={false}
                        showOutline={true}
                        label={label}
                        marks={sliderStepMarks}
                        maxValue={maxValue}
                        minValue={minValue}
                        step={1}
                        value={sliderValues[label]} // Met à jour la valeur affichée
                        onChange={(value) => handleSliderChange(label, value as number)} // Cast explicitement 'value' comme un nombre
                        renderLabel={({ children, ...props }) => (
                            <label
                                {...props}
                                className="text-md font-bold flex gap-2 items-center"
                            >
                                {children}
                            </label>
                        )}
                        size="lg"
                    />
                    <div className="flex justify-between text-sm">
                        <span>{leftLabel}</span>
                        <span>{rightLabel}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
