import * as mongoose from 'mongoose';

  
export const personSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ['Mr', 'Mrs', 'Ms']
    },
    firstname: String,
    lastname: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    phonenumber: {
        type: String,
        index: true
    },
    email:  { 
        type: String, 
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
    },
    dateOfBirth: String,
    addressLine1: String,
    addressLine2: String,
    addressLine3: String,
    state: String,
    postalcode: String,
    city: String,
    country: String,
}, { timestamps: true });