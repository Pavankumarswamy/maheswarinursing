import { useState, useEffect } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';
import { db } from '@/lib/firebase';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  createdAt: string;
  readTime?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  courseInterest?: string;
  preferredBranch?: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export const useFirebaseData = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs
    const blogsRef = ref(db, 'nursing/blogs');
    const unsubscribeBlogs = onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      const blogsList = data 
        ? Object.entries(data).map(([key, value]: [string, any]) => ({
            id: key,
            ...value,
          }))
        : [];
      setBlogs(blogsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    });

    // Fetch gallery images
    const galleryRef = ref(db, 'nursing/galleryImages');
    const unsubscribeGallery = onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      const imagesList = data 
        ? Object.entries(data).map(([key, value]: [string, any]) => ({
            id: key,
            ...value,
          }))
        : [];
      setGalleryImages(imagesList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    });

    // Fetch contact submissions
    const contactRef = ref(db, 'nursing/contactSubmissions');
    const unsubscribeContact = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      const contactsList = data 
        ? Object.entries(data).map(([key, value]: [string, any]) => ({
            id: key,
            ...value,
          }))
        : [];
      setContactSubmissions(contactsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      setLoading(false);
    });

    return () => {
      unsubscribeBlogs();
      unsubscribeGallery();
      unsubscribeContact();
    };
  }, []);

  const submitContactForm = async (formData: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>) => {
    try {
      await push(ref(db, 'nursing/contactSubmissions'), {
        ...formData,
        status: 'new',
        createdAt: new Date().toISOString(),
      });
      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error: error as Error };
    }
  };

  return {
    blogs,
    galleryImages,
    contactSubmissions,
    loading,
    submitContactForm,
  };
};