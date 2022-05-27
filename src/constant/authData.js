export const registerData = [
  {
    id: 1,
    name: 'firstName',
    type: 'text',
    placeholder: 'First name',
    errorMessage:
      "Your name is required. It can't be empty and must be at least 3 characters long.",
    label: 'First Name',
    required: true,
    minLength: { 3: true },
    value: '',
  },
  {
    id: 2,
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name',
    errorMessage:
      "Your name is required. It can't be empty and must be at least 3 characters long.",
    label: 'Last Name',
    required: true,
    minLength: { 3: true },
    value: '',
  },
  {
    id: 3,
    name: 'phoneNumber',
    type: 'text',
    placeholder: '080XXXXXXXX',
    errorMessage:
      "Your number is required. It can't be empty and must be 11 characters long.",
    label: 'Phone Number',
    required: true,
    minLength: { 11: true },
    value: '',
  },
  {
    id: 4,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
    value: '',
  },
  {
    id: 5,
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
    id: 1,
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
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
    value: '',
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
    value: ''
  },
  {
    id: 2,
    name: 'confirm password',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: 'Password does not match',
    label: 'Confirm Password',
    required: true,
    value: ''
  },
];
 
