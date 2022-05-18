export const registerData = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Your name',
    errorMessage:
      "Your name is required. It can't be empty and must be at least 3 characters long.",
    label: 'Name',
    required: true,
    minLength: { 3: true },
    value: '',
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
    value: '',
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
    required: true,
    value: '',
  },
];

export const loginData = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
    value: '',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
    required: true,
    value: '',
  },
];

export const resetPasswordData = [
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
];

export const newPasswordData = [
  {
    id: 1,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&/.*])[a-zA-Z0-9!@#$%^&/.*]{8,20}$`,
    required: true,
  },
  {
    id: 2,
    name: 'confirm password',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: 'Password does not match',
    label: 'Confirm Password',
    required: true,
  },
];
 
