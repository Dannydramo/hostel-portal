import { AdminFormDetails } from "../interface";
import supabase from "../lib/supabase";

let errorMessage: any;
export const handleAdminFormUpload = async (data: AdminFormDetails, userId: string) => {
    try {

        const { error } = await supabase.from("profiles").upsert({
            id: userId,
            hostelallocated: data.hostelallocated,
            phone: data.phone,
            address: data.address

        });

        if (error) {
            throw error;
        }
    } catch (error: any) {
        errorMessage = error.message
    }
    return errorMessage
}