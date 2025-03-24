// const productApiUrl: string = 'http://localhost:5267';
// const userApiUrl: string = 'http://localhost:5190';
// const searchApiUrl: string = 'http://localhost:5204';


// **************************  LOCLHOST  **************************

// const productApiUrl: string = 'http://localhost:5002';
// const userApiUrl: string =  'http://localhost:50595'; // Use HTTP//'https://localhost:44370';  // Identity Server URL
// const searchApiUrl: string = 'https://localhost:44337';
// const identityServerURL ='http://localhost:50595';

// **************************  AKS  **************************

const productApiUrl: string = 'https://amcart.centralindia.cloudapp.azure.com';
const userApiUrl: string =  'https://amcart.centralindia.cloudapp.azure.com'; // Use HTTP//'https://localhost:44370';  // Identity Server URL
const searchApiUrl: string = 'https://amcart.centralindia.cloudapp.azure.com';
const identityServerURL ='https://amcart.centralindia.cloudapp.azure.com';

//********************************************************** */
export const environment = {
  production: false,
  categoryApiUrl: `${productApiUrl}/api/category`, // GKE API
  // productApiUrl: `${productApiUrl}/api/product`,   ///api/v1/Catalog
  productApiUrl: `${productApiUrl}/api/v1/Catalog`,   ///api/v1/Catalog
  // homeApiUrl: `${productApiUrl}/api/home`,
  homeApiUrl: `${productApiUrl}/api/v1/Catalog/all`,  // Get all products
  // productItemApiUrl: `${productApiUrl}/api/product/item`,
  productItemApiUrl: `${productApiUrl}/api/v1/Catalog`,
  reviewUrl: `${productApiUrl}/api/product/review`,
  registrationUrl:`${identityServerURL}/api/auth/register`,

  searchApiUrl: `${searchApiUrl}/api/v1/ProductSearch/search`, //https://localhost:44337/api/v1/ProductSearch/search?query=men


  userApiUrl: `${userApiUrl}/api/auth/`,
  identityServerURL: `${identityServerURL}`,
};
