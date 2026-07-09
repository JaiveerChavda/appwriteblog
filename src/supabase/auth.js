import { createClient } from '@supabase/supabase-js';
import config from '../config/config.js';

export class AuthService {

    client;
    account;

    constructor() {
        this.client = createClient(
            import.meta.env.VITE_SUPABASE_URL,
            import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
        );
    }

    async login({email,password}){
        try {
            const {data,error} = await this.client.auth.signInWithPassword({
                email: email,
                password: password
            })

            console.log('data',data);
            console.log('error',error);

            return {data,error};
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const response = await this.client.auth.getSession()
            if(response.data){
                const user = await response.data.session.user;
                return user
            }
            return null;
        } catch (error) {
            if (error?.code !== 401) {
                console.log('auth service error :: getCurrentUser method',error)
            }
        }

        return null;
    }

    async logout(){
        try {
            await this.client.auth.signOut()
        } catch (error) {
            console.log('auth service error :: logout method',error)
        }
    }


}

const authService = new AuthService()

export default authService;