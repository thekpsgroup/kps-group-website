// Simple script to help get Stripe checkout links
// You'll need to run this with your Stripe secret key

const pricingTables = {
  starter: "prctbl_1RxysH2K0wLA8j3Go1ecWenh",
  professional: "prctbl_1RxxKK2K0wLA8j3G9h9tjOrs",
};

console.log("Stripe Pricing Table IDs:");
console.log("========================");
console.log(`Starter Packages: ${pricingTables.starter}`);
console.log(`Professional Packages: ${pricingTables.professional}`);
console.log("");
console.log("To get checkout links, you can:");
console.log("1. Go to your Stripe Dashboard");
console.log("2. Navigate to Products > Pricing Tables");
console.log("3. Click on each pricing table");
console.log('4. Copy the "Payment link" URL');
console.log("");
console.log("Or use the Stripe CLI:");
console.log("stripe pricing_tables retrieve prctbl_1RxysH2K0wLA8j3Go1ecWenh");
console.log("stripe pricing_tables retrieve prctbl_1RxxKK2K0wLA8j3G9h9tjOrs");
