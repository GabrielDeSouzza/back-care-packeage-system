import { randomUUID } from 'crypto';

export abstract class UserEntityProps {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserEntity {
  private readonly props: UserEntityProps;
  constructor(props: UserEntityProps) {
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

  public get email(): string {
    return this.props.email;
  }

  public set email(value: string) {
    this.props.email = value;
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(value: string) {
    this.props.password = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  public get modifiedAt(): Date {
    return this.props.updatedAt;
  }

  public set modifiedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
