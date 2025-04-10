import { randomUUID } from 'crypto';

export abstract class CarePackageItemEntityProps {
  id: string;
  name: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CarePackageItemEntity {
  private readonly props: CarePackageItemEntityProps;

  constructor(props: CarePackageItemEntityProps) {
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
