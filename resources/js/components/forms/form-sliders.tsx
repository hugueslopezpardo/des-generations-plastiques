import { Slider } from "@nextui-org/react";

export type SliderStepMarks = {
  value: number;
  label: string;
}[];

interface FormSlidersProps {
  labels: string[];
  color:
    | "primary"
    | "success"
    | "warning"
    | "secondary"
    | "danger"
    | "foreground"
    | undefined;
  leftLabel: string;
  rightLabel: string;
  minValue: number;
  maxValue: number;
  sliderStepMarks: SliderStepMarks;
}

export default function FormSliders({
  labels,
  color,
  leftLabel,
  rightLabel,
  minValue,
  maxValue,
  sliderStepMarks,
}: FormSlidersProps) {
  return (
    <div className={`mt-8 grid gap-4 grid-cols-1 w-full`}>
      {labels.map((label) => (
        <div key={label}>
          <Slider
            className={"m-2"}
            color={color}
            defaultValue={maxValue / 2}
            hideValue={true}
            label={label}
            marks={sliderStepMarks}
            maxValue={maxValue}
            minValue={minValue}
            renderLabel={({ children, ...props }) => (
              <label
                {...props}
                className="text-xl font-bold flex gap-2 items-center mb-2"
              >
                {children}
              </label>
            )}
            showSteps={true}
            size="lg"
            step={1}
          />
          <div className={"flex justify-between mb-8"}>
            <p className="text-md font-bold text-white">{leftLabel}</p>
            <p className="text-md font-bold text-white">{rightLabel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
