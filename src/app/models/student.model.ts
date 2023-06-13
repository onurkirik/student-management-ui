import { Adress } from "./adress.model";
import { Gender } from "./gender.model";

export interface Student {
    id: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    email: string,
    phone: string,
    profileImageUrl: string,
    genderId: string,
    gender: Gender,
    adressId: string,
    adress: Adress
}