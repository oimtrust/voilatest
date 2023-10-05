import { fakerID_ID } from '@faker-js/faker';

export function generateEmail() {
  return "automation." + fakerID_ID.number.int({min: 1, max: 1000}) + fakerID_ID.internet.email().toLocaleLowerCase();
}

export function generatePassword() {
  return fakerID_ID.internet.password();
}