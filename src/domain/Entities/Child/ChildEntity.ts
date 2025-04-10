import { randomUUID } from 'crypto';

export abstract class ChildEntityProps {
  id: string;
  name: string;
  lastName: string;
  dateBirh: Date;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  responsibleId: string;
}

export class ChildEntity {
  private readonly props: ChildEntityProps;

  constructor(props: ChildEntityProps) {
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

  public get dateBirh(): Date {
    return this.props.dateBirh;
  }

  public set dateBirh(value: Date) {
    this.props.dateBirh = value;
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

  public get responsibleId(): string {
    return this.props.responsibleId;
  }

  public set responsibleId(value: string) {
    this.props.responsibleId = value;
  }
}
