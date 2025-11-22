import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, onValue, push, remove, set } from 'firebase/database';
import { auth, db, uploadFileToStorage, deleteFileFromStorage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Trash2, 
  Users, 
  MessageSquare, 
  Images, 
  BookOpen, 
  Calendar,
  LogOut,
  Upload,
  X,
  Search,
  Eye,
  Edit,
  CheckCircle,
  AlertTriangle,
  Filter
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';

const AdminPanel = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Data states
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const [popupImages, setPopupImages] = useState<any[]>([]);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  
  // Form states
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: null as File | null });
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', image: null as File | null });
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  
  // UI states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewDetails, setViewDetails] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      if (user) {
        fetchData();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchData = () => {
    // Fetch admissions
    const admissionsRef = ref(db, 'admissions');
    onValue(admissionsRef, (snapshot) => {
      const data = snapshot.val();
      setAdmissions(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch enquiries
    const enquiriesRef = ref(db, 'enquiries');
    onValue(enquiriesRef, (snapshot) => {
      const data = snapshot.val();
      setEnquiries(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch contact submissions
    const contactRef = ref(db, 'contactSubmissions');
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContactSubmissions(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch popup images
    const popupRef = ref(db, 'popupImages');
    onValue(popupRef, (snapshot) => {
      const data = snapshot.val();
      setPopupImages(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch gallery images
    const galleryRef = ref(db, 'galleryImages');
    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setGalleryImages(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch blogs
    const blogsRef = ref(db, 'blogs');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      setBlogs(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });

    // Fetch events
    const eventsRef = ref(db, 'events');
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      setEvents(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value as any) })) : []);
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const uploadFile = async (file: File, path: string): Promise<string> => {
    console.log('Uploading file to storage:', file.name, 'to path:', path);
    try {
      const url = await uploadFileToStorage(file, path);
      console.log('Upload successful, URL:', url);
      return url;
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    }
  };

  const addPopupImage = async (file: File) => {
    try {
      console.log('Starting popup image upload:', file.name);
      const imageUrl = await uploadFile(file, 'popup');
      console.log('Image uploaded successfully:', imageUrl);
      await push(ref(db, 'popupImages'), {
        url: imageUrl,
        createdAt: new Date().toISOString(),
      });
      toast({
        title: "Success",
        description: "Popup image added successfully!",
      });
    } catch (error) {
      console.error('Error uploading popup image:', error);
      toast({
        title: "Error",
        description: `Failed to add popup image: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };

  const addGalleryImages = async (files: FileList) => {
    try {
      console.log('Starting gallery images upload:', files.length, 'files');
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Uploading file ${i + 1}/${files.length}:`, file.name);
        const imageUrl = await uploadFile(file, 'gallery');
        console.log('Gallery image uploaded:', imageUrl);
        await push(ref(db, 'galleryImages'), {
          url: imageUrl,
          createdAt: new Date().toISOString(),
        });
      }
      toast({
        title: "Success",
        description: "Gallery images added successfully!",
      });
    } catch (error) {
      console.error('Error uploading gallery images:', error);
      toast({
        title: "Error",
        description: `Failed to add gallery images: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };

  const addBlog = async () => {
    if (!newBlog.title || !newBlog.content) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      let imageUrl = '';
      if (newBlog.image) {
        imageUrl = await uploadFile(newBlog.image, 'blogs');
      }

      await push(ref(db, 'blogs'), {
        title: newBlog.title,
        content: newBlog.content,
        image: imageUrl,
        createdAt: new Date().toISOString(),
      });

      setNewBlog({ title: '', content: '', image: null });
      toast({
        title: "Success",
        description: "Blog added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add blog.",
        variant: "destructive",
      });
    }
  };

  const addEvent = async () => {
    if (!newEvent.title || !newEvent.description || !newEvent.date) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      let imageUrl = '';
      if (newEvent.image) {
        imageUrl = await uploadFile(newEvent.image, 'events');
      }

      await push(ref(db, 'events'), {
        title: newEvent.title,
        description: newEvent.description,
        date: newEvent.date,
        image: imageUrl,
        createdAt: new Date().toISOString(),
      });

      setNewEvent({ title: '', description: '', date: '', image: null });
      toast({
        title: "Success",
        description: "Event added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add event.",
        variant: "destructive",
      });
    }
  };

  const deleteItem = async (collection: string, id: string) => {
    setIsDeleting(true);
    try {
      await remove(ref(db, `${collection}/${id}`));
      toast({
        title: "Success",
        description: "Item deleted successfully!",
      });
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Error",
        description: `Failed to delete item: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const bulkDelete = async (collection: string, ids: string[]) => {
    setIsDeleting(true);
    try {
      const deletePromises = ids.map(id => remove(ref(db, `${collection}/${id}`)));
      await Promise.all(deletePromises);
      setSelectedItems(new Set());
      toast({
        title: "Success",
        description: `${ids.length} items deleted successfully!`,
      });
    } catch (error) {
      console.error('Bulk delete error:', error);
      toast({
        title: "Error",
        description: "Failed to delete some items.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const toggleSelectItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const selectAllItems = (items: any[]) => {
    const allIds = items.map(item => item.id);
    setSelectedItems(new Set(allIds));
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
  };

  const filterItems = (items: any[], searchFields: string[]) => {
    if (!searchTerm) return items;
    return items.filter(item =>
      searchFields.some(field =>
        item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-navy">Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="enquiries">Enquiries</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="popup">Popup Images</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Admission Applications ({filterItems(admissions, ['name', 'email', 'interestedCourse']).length})
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    {selectedItems.size > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" disabled={isDeleting}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Selected ({selectedItems.size})
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Applications</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {selectedItems.size} application(s)? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => bulkDelete('admissions', Array.from(selectedItems))}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>
                {filterItems(admissions, ['name', 'email', 'interestedCourse']).length > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={selectedItems.size === filterItems(admissions, ['name', 'email', 'interestedCourse']).length}
                      onCheckedChange={() => {
                        if (selectedItems.size === filterItems(admissions, ['name', 'email', 'interestedCourse']).length) {
                          clearSelection();
                        } else {
                          selectAllItems(filterItems(admissions, ['name', 'email', 'interestedCourse']));
                        }
                      }}
                    />
                    <span>Select all</span>
                    {selectedItems.size > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearSelection}>
                        Clear selection
                      </Button>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filterItems(admissions, ['name', 'email', 'interestedCourse']).map((admission) => (
                    <div key={admission.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedItems.has(admission.id)}
                          onCheckedChange={() => toggleSelectItem(admission.id)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{admission.name}</h3>
                            <div className="flex gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Application Details</DialogTitle>
                                    <DialogDescription>Full details for {admission.name}</DialogDescription>
                                  </DialogHeader>
                                  <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div><strong>Name:</strong> {admission.name}</div>
                                    <div><strong>Email:</strong> {admission.email}</div>
                                    <div><strong>Phone:</strong> {admission.phone}</div>
                                    <div><strong>Course:</strong> {admission.interestedCourse}</div>
                                    <div><strong>Category:</strong> {admission.category}</div>
                                    <div><strong>DOB:</strong> {new Date(admission.dateOfBirth).toLocaleDateString()}</div>
                                    <div><strong>Address:</strong> {admission.address}</div>
                                    <div><strong>Status:</strong> <Badge>{admission.status}</Badge></div>
                                  </div>
                                  {admission.profilePicture && (
                                    <div className="mt-4">
                                      <strong>Profile Picture:</strong>
                                      <img src={admission.profilePicture} alt="Profile" className="w-32 h-32 rounded-lg object-cover mt-2" />
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm" disabled={isDeleting}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Application</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete the application from {admission.name}? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteItem('admissions', admission.id)}>
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <p><strong>Email:</strong> {admission.email}</p>
                            <p><strong>Phone:</strong> {admission.phone}</p>
                            <p><strong>Course:</strong> {admission.interestedCourse}</p>
                            <p><strong>Status:</strong> <Badge>{admission.status}</Badge></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filterItems(admissions, ['name', 'email', 'interestedCourse']).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No applications found matching your search.' : 'No applications yet.'}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="enquiries">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Contact Enquiries ({filterItems(enquiries, ['name', 'email', 'message']).length})
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search enquiries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    {selectedItems.size > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" disabled={isDeleting}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Selected ({selectedItems.size})
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Enquiries</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {selectedItems.size} enquirie(s)? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => bulkDelete('enquiries', Array.from(selectedItems))}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filterItems(enquiries, ['name', 'email', 'message']).map((enquiry) => (
                    <div key={enquiry.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedItems.has(enquiry.id)}
                          onCheckedChange={() => toggleSelectItem(enquiry.id)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{enquiry.name}</h3>
                            <div className="flex gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Enquiry Details</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-3">
                                    <div><strong>Name:</strong> {enquiry.name}</div>
                                    <div><strong>Email:</strong> {enquiry.email}</div>
                                    <div><strong>Phone:</strong> {enquiry.phone}</div>
                                    <div><strong>Message:</strong></div>
                                    <div className="bg-gray-50 p-3 rounded">{enquiry.message}</div>
                                    <div><strong>Submitted:</strong> {new Date(enquiry.submittedAt).toLocaleString()}</div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm" disabled={isDeleting}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Enquiry</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete the enquiry from {enquiry.name}? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteItem('enquiries', enquiry.id)}>
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                          <div className="text-sm space-y-1">
                            <p><strong>Email:</strong> {enquiry.email}</p>
                            <p><strong>Phone:</strong> {enquiry.phone}</p>
                            <p><strong>Message:</strong> {enquiry.message.substring(0, 100)}...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filterItems(enquiries, ['name', 'email', 'message']).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No enquiries found matching your search.' : 'No enquiries yet.'}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Contact Submissions ({filterItems(contactSubmissions, ['firstName', 'lastName', 'email', 'subject']).length})
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search contacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    {selectedItems.size > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" disabled={isDeleting}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Selected ({selectedItems.size})
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Contact Submissions</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {selectedItems.size} contact submission(s)? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => bulkDelete('contactSubmissions', Array.from(selectedItems))}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filterItems(contactSubmissions, ['firstName', 'lastName', 'email', 'subject']).map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedItems.has(contact.id)}
                          onCheckedChange={() => toggleSelectItem(contact.id)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{contact.firstName} {contact.lastName}</h3>
                            <div className="flex gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Contact Details</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-3">
                                    <div><strong>Name:</strong> {contact.firstName} {contact.lastName}</div>
                                    <div><strong>Email:</strong> {contact.email}</div>
                                    <div><strong>Phone:</strong> {contact.phone}</div>
                                    <div><strong>Subject:</strong> {contact.subject}</div>
                                    <div><strong>Course Interest:</strong> {contact.courseInterest || 'N/A'}</div>
                                    <div><strong>Preferred Branch:</strong> {contact.preferredBranch || 'N/A'}</div>
                                    <div><strong>Message:</strong> {contact.message}</div>
                                    <div><strong>Status:</strong> <Badge variant={contact.status === 'new' ? 'destructive' : 'default'}>{contact.status}</Badge></div>
                                    <div><strong>Submitted:</strong> {new Date(contact.createdAt).toLocaleString()}</div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm" disabled={isDeleting}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Contact</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete this contact submission? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteItem('contactSubmissions', contact.id)}>
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Phone:</strong> {contact.phone}</p>
                            <p><strong>Subject:</strong> {contact.subject}</p>
                            <p><strong>Status:</strong> <Badge variant={contact.status === 'new' ? 'destructive' : 'default'}>{contact.status}</Badge></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filterItems(contactSubmissions, ['firstName', 'lastName', 'email', 'subject']).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No contact submissions found matching your search.' : 'No contact submissions yet.'}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="popup">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Images className="h-5 w-5" />
                    Popup Images ({popupImages.length})
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {selectedItems.size > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" disabled={isDeleting}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Selected ({selectedItems.size})
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Images</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {selectedItems.size} image(s)? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => bulkDelete('popupImages', Array.from(selectedItems))}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Popup Image
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Popup Image</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="popup-image">Select Image</Label>
                            <Input
                              id="popup-image"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  addPopupImage(file);
                                  // Reset input
                                  e.target.value = '';
                                }
                              }}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                {popupImages.length > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={selectedItems.size === popupImages.length}
                      onCheckedChange={() => {
                        if (selectedItems.size === popupImages.length) {
                          clearSelection();
                        } else {
                          selectAllItems(popupImages);
                        }
                      }}
                    />
                    <span>Select all</span>
                    {selectedItems.size > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearSelection}>
                        Clear selection
                      </Button>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {popupImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <div className="absolute top-2 left-2 z-10">
                        <Checkbox
                          checked={selectedItems.has(image.id)}
                          onCheckedChange={() => toggleSelectItem(image.id)}
                          className="bg-white/80"
                        />
                      </div>
                      <img
                        src={image.url}
                        alt="Popup"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" disabled={isDeleting}>
                              <X className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Image</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this popup image? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => deleteItem('popupImages', image.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))}
                </div>
                {popupImages.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No popup images yet. Add some images to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Images className="h-5 w-5" />
                    Gallery Images ({galleryImages.length})
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {selectedItems.size > 0 && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" disabled={isDeleting}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Selected ({selectedItems.size})
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Images</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {selectedItems.size} image(s)? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => bulkDelete('galleryImages', Array.from(selectedItems))}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Gallery Images
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Gallery Images</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="gallery-images">Select Images</Label>
                            <Input
                              id="gallery-images"
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={(e) => {
                                const files = e.target.files;
                                if (files) {
                                  addGalleryImages(files);
                                  // Reset input
                                  e.target.value = '';
                                }
                              }}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                {galleryImages.length > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={selectedItems.size === galleryImages.length}
                      onCheckedChange={() => {
                        if (selectedItems.size === galleryImages.length) {
                          clearSelection();
                        } else {
                          selectAllItems(galleryImages);
                        }
                      }}
                    />
                    <span>Select all</span>
                    {selectedItems.size > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearSelection}>
                        Clear selection
                      </Button>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <div className="absolute top-2 left-2 z-10">
                        <Checkbox
                          checked={selectedItems.has(image.id)}
                          onCheckedChange={() => toggleSelectItem(image.id)}
                          className="bg-white/80"
                        />
                      </div>
                      <img
                        src={image.url}
                        alt="Gallery"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" disabled={isDeleting}>
                              <X className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Image</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this gallery image? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => deleteItem('galleryImages', image.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))}
                </div>
                {galleryImages.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No gallery images yet. Add some images to showcase your work.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogs">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Blogs ({blogs.length})
                  </span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Blog
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Blog</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="blog-title">Title</Label>
                          <Input
                            id="blog-title"
                            value={newBlog.title}
                            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="blog-content">Content</Label>
                          <Textarea
                            id="blog-content"
                            rows={6}
                            value={newBlog.content}
                            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="blog-image">Image</Label>
                          <Input
                            id="blog-image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.files?.[0] || null })}
                          />
                        </div>
                        <Button onClick={addBlog} className="w-full">
                          Add Blog
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{blog.title}</h3>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteItem('blogs', blog.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {blog.content.substring(0, 100)}...
                      </p>
                      {blog.image && (
                        <img src={blog.image} alt="Blog" className="w-20 h-20 object-cover rounded" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-between">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Events ({events.length})
                  </span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Event</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="event-title">Title</Label>
                          <Input
                            id="event-title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="event-date">Date</Label>
                          <Input
                            id="event-date"
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="event-description">Description</Label>
                          <Textarea
                            id="event-description"
                            rows={4}
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="event-image">Image</Label>
                          <Input
                            id="event-image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewEvent({ ...newEvent, image: e.target.files?.[0] || null })}
                          />
                        </div>
                        <Button onClick={addEvent} className="w-full">
                          Add Event
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {events.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteItem('events', event.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {event.description.substring(0, 100)}...
                      </p>
                      {event.image && (
                        <img src={event.image} alt="Event" className="w-20 h-20 object-cover rounded" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;