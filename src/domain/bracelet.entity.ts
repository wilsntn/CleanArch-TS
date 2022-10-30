export type BraceletProps = {
  name: string;
  email?: string;
  code: string;
};

export class Bracelet {
  public props: Required<BraceletProps>;
  constructor(props: BraceletProps) {
    this.props = {
      ...props,
      email: props.email || "",
    };
  }
  updateName(name: string) {
    this.name = name;
  }

  updateCode(code: string) {
    this.code = code;
  }

  updateEmail(email: string) {
    this.props.email = email;
  }

  get email() {
    if (this.props.email) {
      return this.props.email;
    } else {
      return "";
    }
  }

  get code() {
    return this.props.code;
  }
  get name() {
    return this.props.name;
  }

  private set code(value: string) {
    this.props.code = value;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  toJSON() {
    return this.props;
  }
}
