import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from 'appwrite'

export const createUserAccount = async (User: INewUser) => {
    try {
        const newAccount = account.create(
            ID.unique(),
            User.email,
            User.password,
            User.name
        )
        return newAccount
    }
    catch (error) {
        console.error(error)
    }
}