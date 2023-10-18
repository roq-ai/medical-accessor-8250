interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Customer Service Representative', 'Sales Representative'],
  tenantName: 'Store',
  applicationName: 'Medical Accessories Store Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View products', 'Place orders', 'View order status', 'Edit personal information'],
  ownerAbilities: [
    'Manage product inventory',
    'Manage store information',
    'View order details',
    'Edit product details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f4661dd2-8d17-42c5-91af-088bd5da7a5c',
};
