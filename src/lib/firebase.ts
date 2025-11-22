import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpeo0kx0YrrgRUqdO9VkrYjelIRcfVQqU",
  authDomain: "bindhu-c58a2.firebaseapp.com",
  databaseURL: "https://bindhu-c58a2-default-rtdb.firebaseio.com",
  projectId: "bindhu-c58a2",
  storageBucket: "bindhu-c58a2.firebasestorage.app",
  messagingSenderId: "930423850676",
  appId: "1:930423850676:web:8c6b17c6b69f2c1fb139e1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Enhanced file upload utility
export const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
  try {
    // Create a unique filename with timestamp
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const uniqueFileName = `${timestamp}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
    
    // Create storage reference
    const fileRef = storageRef(storage, `${path}/${uniqueFileName}`);
    
    // Upload file
    const snapshot = await uploadBytes(fileRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log(`File uploaded successfully to: ${downloadURL}`);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Delete file from storage
export const deleteFileFromStorage = async (filePath: string): Promise<void> => {
  try {
    const fileRef = storageRef(storage, filePath);
    await deleteObject(fileRef);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

// Get file URL from storage path
export const getFileURL = async (filePath: string): Promise<string> => {
  try {
    const fileRef = storageRef(storage, filePath);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
};