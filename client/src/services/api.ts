// const BASE_URL = 'https://api.yourdomain.com';

// async function fetchAPI(endpoint: string, method = 'GET', data?: any) {
//   const response = await fetch(`${BASE_URL}/${endpoint}`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}` // Example of including a token
//     },
//     body: method !== 'GET' ? JSON.stringify(data) : null,
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// }

// export default fetchAPI;