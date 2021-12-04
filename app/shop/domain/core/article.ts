interface Props {
  image: string;
  name: string;
  price?: number;
  currency?: string;
  description?: string;
}

export class ShopArticle {
  constructor(private props: Props) {}

  get image(): string { return this.props.image}
  get name(): string { return this.props.name}
  get price() { return this.props.price}
  get currency() { return this.props.currency }
  get description() { return this.props.description}
}