'use client'

import {
  Button,
  Group,
  Input,
  NumberField,
} from "react-aria-components";
import { MinusIcon, PlusIcon } from "lucide-react";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

interface StepperProps {
  label: string;
  description?: string;
  errorMessage?: string;
  value: number;
  onChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}

export default function Stepper({
  label,
  description,
  errorMessage,
  value,
  onChange,
  minValue = 0,
  maxValue = 10,
}: StepperProps) {
  return (
    <Field>
      <NumberField
        value={value}
        onChange={onChange}
        minValue={minValue}
        maxValue={maxValue}
        className="space-y-2"
      >
        <FieldLabel>{label}</FieldLabel>

        {description && (
          <FieldDescription>{description}</FieldDescription>
        )}

        <Group className="flex h-10 items-center overflow-hidden rounded-lg border">
          <Button
            slot="decrement"
            className="flex h-full w-10 items-center justify-center border-r hover:bg-muted"
          >
            <MinusIcon className="size-4" />
          </Button>

          <Input className="flex-1 text-center font-medium outline-none" />

          <Button
            slot="increment"
            className="flex h-full w-10 items-center justify-center border-l hover:bg-muted"
          >
            <PlusIcon className="size-4" />
          </Button>
        </Group>

        <FieldError>{errorMessage}</FieldError>
      </NumberField>
    </Field>
  );
}