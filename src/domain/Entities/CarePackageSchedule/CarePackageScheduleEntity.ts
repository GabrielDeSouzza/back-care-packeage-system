import { randomUUID } from 'crypto';

export abstract class CarePackageScheduleEntityProps {
  id?: string;
  deliveryDate: Date;
  carePackageCount: number;
}

export class CarePackageScheduleEntity {
  private readonly props: CarePackageScheduleEntityProps;

  constructor(props: CarePackageScheduleEntityProps) {
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

  public get deliveryDate(): Date {
    return this.props.deliveryDate;
  }

  public set deliveryDate(value: Date) {
    this.props.deliveryDate = value;
  }

  public get carePackageCount(): number {
    return this.props.carePackageCount;
  }

  public set carePackageCount(value: number) {
    this.props.carePackageCount = value;
  }
}
