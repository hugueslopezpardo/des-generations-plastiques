import { Card, CardHeader, Spacer } from "@nextui-org/react";

interface FormRadiosProps {
  name: string;
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
}

export default function FormRadios({
  name,
  options,
  nbColumns,
}: FormRadiosProps) {
  return (
    <div
      className={`mt-8 grid gap-4 grid-cols-1 md:grid-cols-${nbColumns} lg:grid-cols-${nbColumns} xl:grid-cols-${nbColumns} 2xl:grid-cols-${nbColumns} w-full`}
    >
      {options.map((option) => (
        <Card key={option}>
          <CardHeader className={"text-left"}>
            <input
              key={option}
              className={"h-5 w-5 min-h-5 min-w-5 max-h-5 min-h-5"}
              name={name}
              type={"radio"}
              value={option}
            />
            <Spacer x={3} />
            <span>{option}</span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
