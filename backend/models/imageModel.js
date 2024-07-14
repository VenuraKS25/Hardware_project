import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  image: {
    type: String, // Store image data as a base64 encoded string
    required: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

export const Images = mongoose.model('Image', imageSchema);
