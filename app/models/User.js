const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        //for every user we give an unique id for the user
        _id: {
            type: String,
            required: true,
        },
        //username can be reuse or same, but instagram restricted that username cannot be reuse
        name: {
            type: String,
            required: true,
        },
        //we use 3rd party validator function to validate the email, how to 
        email: {
            type: String,
            validate: {
                validator: validator.isEmail,
                message: "EMAIL_IS_NOT_VALID",
            },
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        role: {
            type: String,
            enum: ['user', 'uploader', 'admin'],
            default: 'user',
        },
        verification: {
            type: String,
        },
        userStatus: {
            type: String,
            enum: ['notVerified', 'verified', 'disabled'],
			default: 'notVerified',
        },
        loginAttempts: {
			type: Number,
			default: 0,
			select: false,
		},
		blockExpires: {
			type: Date,
			default: Date.now,
			select: false,
		},
    },
);