// const productApiUrl = 'http://35.225.226.50';
// const userApiUrl: string = 'http://35.223.163.117';
// const searchApiUrl: string = 'http://34.59.239.110';

// export const environment = {
//   production: false,
//   categoryApiUrl: `${productApiUrl}/api/category`, // GKE API
//   productApiUrl: `${productApiUrl}/api/product`,
//   homeApiUrl: `${productApiUrl}/api/home`,
//   productItemApiUrl: `${productApiUrl}/api/product/item`,
//   reviewUrl: `${productApiUrl}/api/product/review`,
//   searchApiUrl: `${searchApiUrl}/api/search`,
//   userApiUrl: `${userApiUrl}/api/user`,
// };

// const productApiUrl: string = 'http://localhost:5267';
// const userApiUrl: string = 'http://localhost:5190';
// const searchApiUrl: string = 'http://localhost:5204';

const productApiUrl: string = 'https://amcart.centralindia.cloudapp.azure.com';
const userApiUrl: string =  'https://amcart.centralindia.cloudapp.azure.com'; // Use HTTP//'https://localhost:44370';  // Identity Server URL
const searchApiUrl: string = 'https://amcart.centralindia.cloudapp.azure.com';
const identityServerURL ='https://amcart.centralindia.cloudapp.azure.com';
export const environment = {
  production: false,
  categoryApiUrl: `${productApiUrl}/api/category`, // GKE API
  // productApiUrl: `${productApiUrl}/api/product`,   ///api/v1/Catalog
  productApiUrl: `${productApiUrl}/api/v1/Catalog`,   ///api/v1/Catalog
  // homeApiUrl: `${productApiUrl}/api/home`,
  homeApiUrl: `${productApiUrl}/api/v1/Catalog`,
  // productItemApiUrl: `${productApiUrl}/api/product/item`,
  productItemApiUrl: `${productApiUrl}/api/v1/Catalog`,
  reviewUrl: `${productApiUrl}/api/product/review`,
  registrationUrl:`${identityServerURL}/api/auth/register`,

  searchApiUrl: `${searchApiUrl}/api/v1/ProductSearch/search`, //https://localhost:44337/api/v1/ProductSearch/search?query=men


  userApiUrl: `${userApiUrl}/api/auth/`,
  identityServerURL: `${identityServerURL}`,
};
