import { UserType } from "@/types"
import {User} from '@auth0/auth0-react'
export type CombinedUser = User & UserType
export const transformUserData = (userData:CombinedUser) => {
    const name = userData.nickname || userData.given_name
    const picture = userData.picture 
    return {
        name,
        picture,
        ...userData
    }
}