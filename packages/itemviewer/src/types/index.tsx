export interface IItemProps {
	id: string;
	component?: any;
	children?: React.ReactNode;
	hidden?: boolean;
	url?: string;
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
