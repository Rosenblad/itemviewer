export interface ItemProps {
  id: string;
  component?: React.ReactType;
  children?: React.ReactNode;
  hidden?: boolean;
  url?: string | null;
  price?: string | number;
  layout?: 'grid' | 'list';
  image?: string;
  title?: string;
  subtitle?: string;
  other?: [];
  discount?: string;
  discountedPrice?: string;
  onHide?(id: string): void;
  onDelete?(id: string): void;
}
