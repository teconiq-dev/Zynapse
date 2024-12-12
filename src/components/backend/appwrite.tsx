import { Client, Account } from 'appwrite';

export const client = new Client();

const id = process.env.AW_PRO_ID;

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(id); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
