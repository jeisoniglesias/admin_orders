export type BooleanValue = { requiredLength: number };
export type ErrorFunction = (
  booleanValue?: BooleanValue,
  controlName?: string
) => string;

export const DefaultErrorMessages: Record<string, ErrorFunction> = {
  required: () => 'Campo requerido',
  email: () => 'Correo electronico no valido!',
  pattern: () => 'El campo no tiene un formato válido.',
  minlength: (booleanValue: BooleanValue = { requiredLength: 6 }) =>
    `El campo debe tener al menos ${booleanValue.requiredLength} caracterres.`,
  maxlength: (booleanValue: BooleanValue = { requiredLength: 50 }) =>
    `El campo debe tener un máximo de ${booleanValue.requiredLength} caracterres.`,
  noSimilar: () => 'Las contraseñas no coinciden.',
  // ... other errors can be added here
};
