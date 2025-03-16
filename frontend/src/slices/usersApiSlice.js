import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({                      // mutation instead of just Query.
            query:(data)=>({
                url:`${USERS_URL}/login` ,
                method:'POST',
                body:data
            }),
            
        }),
        register:builder.mutation({                      // mutation instead of just Query.
            query:(data)=>({
                url:`${USERS_URL}/register` ,
                method:'POST',
                body:data
            }),
            
        }),
        logut:builder.mutation({                   // mutation instead of just Query.
            query:(data)=>({
                url:`${USERS_URL}/logout`,
                method:'POST',

            })
        })
       
    }),
})

export const {useLoginMutation,useLogutMutation,useRegisterMutation}=usersApiSlice