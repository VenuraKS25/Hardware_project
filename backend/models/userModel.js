
// import mongoose from "mongoose";

// const userSchema = mongoose.Schema(
//     {
//         rfid: {
//             type: String,
//             required: true,
//             unique: true 
//         },
//         fname: {
//             type: String,
//             required: true,
//         },
//         lname: {
//             type: String,
//             required: true,
//         },
//         nic: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         mobile: {
//             type: String,
//             required: true,
//         },
//         address: {
//             type: String,
//             required: true,
//         },
//         destination: {
//             type: String,
//             required: true,
//         },
//         subDestination: {
//             type: String,
//         },
//         purpose: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: true,
//     }
// );

// export const User = mongoose.model('User', userSchema);

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        rfid: {
            type: String,
            required: true,
            unique: true 
        },
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        destinationId: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        subDestinationId: {
            type: String,
            required: true,
        },
        subDestination: {
            type: String,
            required: true,
        },
        purpose: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);
