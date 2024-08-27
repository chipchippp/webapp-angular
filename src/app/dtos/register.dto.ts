import { IsNotEmpty, IsPhoneNumber, IsString, IsNumber, IsDate } from 'class-validator';



export class RegisterDto {
    @IsPhoneNumber()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;

    @IsString()
    fullName: string;

    @IsDate()
    dateOfBirth: Date;

    @IsString()
    @IsNotEmpty()
    address: string;

    // @IsNumber()
    facebook_account_id: number = 0;

    // @IsNumber()
    google_account_id: number = 0;

    // @IsNumber()
    role_id: number = 1;

    constructor(data: any) {
        this.phone_number = data.phone_number;
        this.password = data.password;
        this.confirmPassword = data.confirmPassword;
        this.fullName = data.fullName;
        this.dateOfBirth = data.dateOfBirth;
        this.address = data.address;
        this.facebook_account_id = data.facebook_account_id || 0;
        this.google_account_id = data.google_account_id || 0;
        this.role_id = data.role_id || 1;
    }
}