import { Client, Account } from "appwrite";

export const client = new Client();

const id = process.env.NEXT_PUBLIC_APP_ID;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(id);

export const account = new Account(client);
export { ID } from "appwrite";
