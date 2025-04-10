import { randomUUID } from 'crypto';

export abstract class PersonEntityProps {
  id?: string;
  name: string;
  lastName: string;
  document: number;
  hasChild: boolean;
  dateBirth: Date;
  gender: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class PersonEntity {
  private readonly props: PersonEntityProps;

  constructor(props: PersonEntityProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }

  public get id(): string | undefined {
    return this.props.id;
  }

  public set id(value: string | undefined) {
    this.props.id = value;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
  }

  public get lastName(): string {
    return this.props.lastName;
  }

  public set lastName(value: string) {
    this.props.lastName = value;
  }

  public get document(): number {
    return this.props.document;
  }

  public set document(value: number) {
    this.props.document = value;
  }

  public get hasChild(): boolean {
    return this.props.hasChild;
  }

  public set hasChild(value: boolean) {
    this.props.hasChild = value;
  }

  public get dateBirth(): Date {
    return this.props.dateBirth;
  }

  public set dateBirth(value: Date) {
    this.props.dateBirth = value;
  }

  public get gender(): string {
    return this.props.gender;
  }

  public set gender(value: string) {
    this.props.gender = value;
  }

  public get createdBy(): string {
    return this.props.createdBy;
  }

  public set createdBy(value: string) {
    this.props.createdBy = value;
  }

  public get updatedBy(): string {
    return this.props.updatedBy;
  }

  public set updatedBy(value: string) {
    this.props.updatedBy = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
