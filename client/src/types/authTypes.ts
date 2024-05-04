// User.ts

// Example of defining a User type
export interface UserType {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
  // Add other properties as needed
}

// SignInData.ts

// Example of defining SignInData type
export interface SignInDataType {
  email: string;
  password: string;
}


export interface SignUpDataType {
  username: string;
  email: string;
  password: string;
  // Add other properties as needed
}