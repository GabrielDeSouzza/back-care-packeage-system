import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint({ name: 'AtLeastOneField', async: false })
export class AtLeastOneFieldConstraint implements ValidatorConstraintInterface {
  validate<T extends Record<string, any>>(
    object: T,
    args: ValidationArguments,
  ): boolean {
    const fields = args.constraints[0] as (keyof T)[];

    return fields.some((field) => {
      const val = args.object[field.toString()];
      return val !== undefined && val !== null && val !== '';
    });
  }

  defaultMessage(args: ValidationArguments): string {
    const fields = args.constraints[0];
    return `Pelo menos um dos seguintes campos deve ser preenchido: ${fields.join(', ')}`;
  }
}

export function AtLeastOneField<T>(
  fields: (keyof T)[],
  validationOptions?: ValidationOptions,
) {
  return function (constructor: Function) {
    registerDecorator({
      name: 'AtLeastOneField',
      target: constructor,
      propertyName: undefined!,
      constraints: [fields],
      options: validationOptions,
      validator: AtLeastOneFieldConstraint,
    });
  };
}
