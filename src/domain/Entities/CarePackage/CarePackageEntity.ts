import { randomUUID } from 'crypto';

export abstract class CarePackageEntityProps {
  id: string;
  numberControl: number;
  typeCarePackageId: string;
  personId: string;
  carePackageScheduleId: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CarePackageEntity {
  private readonly props: CarePackageEntityProps;

  constructor(props: CarePackageEntityProps) {
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

  public get numberControl(): number {
    return this.props.numberControl;
  }

  public set numberControl(value: number) {
    this.props.numberControl = value;
  }

  public get typeCarePackageId(): string {
    return this.props.typeCarePackageId;
  }

  public set typeCarePackageId(value: string) {
    this.props.typeCarePackageId = value;
  }

  public get personId(): string {
    return this.props.personId;
  }

  public set personId(value: string) {
    this.props.personId = value;
  }

  public get carePackageScheduleId(): string {
    return this.props.carePackageScheduleId;
  }

  public set carePackageScheduleId(value: string) {
    this.props.carePackageScheduleId = value;
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
