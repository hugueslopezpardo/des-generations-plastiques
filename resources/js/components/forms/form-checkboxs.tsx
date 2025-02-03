import { Card, CardHeader, Spacer, Checkbox } from "@nextui-org/react";

interface FormCheckboxsProps {
  color:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "secondary"
    | "danger"
    | undefined;
  options: string[];
  nbColumns: number;
  onChange: (value: string[]) => void;
}

export default function FormCheckboxs({
  color,
  options,
  nbColumns,
  onChange,
}: FormCheckboxsProps) {
  return (
      <>
       <p className="my-8 text-lg font-bold">Plusieurs choix possibles</p>

        <div
            className={`grid gap-4 grid-cols-1 sm:grid-cols-${nbColumns} md:grid-cols-${nbColumns} lg:grid-cols-${nbColumns} xl:grid-cols-${nbColumns} 2xl:grid-cols-${nbColumns} w-full`}
        >

          {options.map((option) => (
            <Card key={option}>
              <CardHeader>
                <Checkbox color={color} />
                <Spacer x={3} />
                <span>{option}</span>
              </CardHeader>
            </Card>
          ))}
        </div>
      </>

  );
}
