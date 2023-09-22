import supabase from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";

let err: any;

export const profileUpload = async (userId: string, file: File) => {
    try {
        const { error } = await supabase.storage
            .from("profiles")
            .upload(userId + "/" + uuidv4(), file);
        if (error) {
            throw Error;
        }
    } catch (error: any) {
        err = error.message;
    }
};

export const schoolFeesReceipt = async (userId: string, file: File) => {
    try {
        const { error } = await supabase.storage
            .from("schoolfeesreceipt")
            .upload(userId + "/" + uuidv4(), file);
        if (error) {
            throw Error;
        }
    } catch (error: any) {
        err = error.message;
    }
};

export const hostelFeesReceipt = async (userId: string, file: File) => {
    try {
        const { error } = await supabase.storage
            .from("hostelfeereceipt")
            .upload(userId + "/" + uuidv4(), file);
        if (error) {
            throw Error;
        }
    } catch (error: any) {
        err = error.message;
    }
};

export const accommodationUndertaking = async (userId: string, file: File) => {
    try {
        const { error } = await supabase.storage
            .from("accommodationundertaking")
            .upload(userId + "/" + uuidv4(), file);
        if (error) {
            throw Error;
        }
    } catch (error: any) {
        err = error.message;
    }
};
