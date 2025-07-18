// //frontend\pages\pet_description.js

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Upload } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import toast, { Toaster } from "react-hot-toast";
// import CryptoJS from "crypto-js";
// import { createPet } from "../utils/api";
// import LoadingScreen from "../components/LoadingScreen";
// import { uploadPetImage, verifyPetImage  } from '../utils/api';
// import * as tf from '@tensorflow/tfjs';
// import * as mobilenet from '@tensorflow-models/mobilenet';

// const SECRET_KEY = "asdasdasd";

// export default function PetDescription() {
//   const router = useRouter();
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSavedLocally, setIsSavedLocally] = useState(false);
//   const [canSaveToDB, setCanSaveToDB] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const [statusText, setStatusText] = useState("");
//   const [dashboardData, setDashboardData] = useState(null);
//   const [model, setModel] = useState(null);
//   const [isModelLoading, setIsModelLoading] = useState(true);

//   useEffect(() => {
//     const token = sessionStorage.getItem("auth_token");
//     const userId = sessionStorage.getItem("user_id");
    
//     if (!token || !userId) {
//       router.push("/login");
//     }
//   }, [router]);

//   useEffect(() => {
//     const loadModel = async () => {
//       try {
//         await tf.ready();
//         const loadedModel = await mobilenet.load();
//         setModel(loadedModel);
//       } catch (error) {
//         console.error("Failed to load pet detection model:", error);
//         toast.error("Pet verification feature is currently unavailable");
//       } finally {
//         setIsModelLoading(false);
//       }
//     };

//     loadModel();

//     return () => {
//       if (model) {
//         tf.disposeVariablesInScope();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const savedDate = localStorage.getItem('petDate');
//     const savedDescription = localStorage.getItem('petDescription');
//     const savedImage = localStorage.getItem('petImageName');
//     const petStatus = localStorage.getItem('petStatus');
    
//     if (savedDate) setDate(savedDate);
//     if (savedDescription) setDescription(savedDescription);
//     if (savedImage) {
//       setSelectedFile({ name: savedImage });
//       setIsSavedLocally(true);
//     }

//     if (petStatus === "Lost") {
//       setStatusText("When was the last time you saw them?");
//     } else if (petStatus === "Pet i Found") {
//       setStatusText("When did you find them?");
//     } else if (petStatus === "Rehome Pet") {
//       setStatusText("When was this pet born?");
//     } else {
//       setStatusText("When was this pet born?");
//     }

//     checkDBRequirements();
//   }, []);

//   const checkDBRequirements = () => {
//     const hasRequiredFields = (
//       localStorage.getItem('petName') &&
//       (localStorage.getItem('petDate') || date) &&
//       (localStorage.getItem('petImageName')) &&
//       description.trim()
//     );
//     setCanSaveToDB(hasRequiredFields);
//   };


//   const isCatOrDog = async (imgElement) => {
//     if (!model) {
//       console.warn("Model not loaded - skipping pet verification");
//       return true;
//     }
  
//     try {
//       const predictions = await model.classify(imgElement);
  
//       // Improved logging for debugging
//       console.log("Raw Predictions:", predictions.map(p => `${p.className} (${(p.probability * 100).toFixed(1)}%)`));
  
//       // Match against common cat and dog keywords
//       const isPet = predictions.some(pred => {
//         const className = pred.className.toLowerCase();
  
//         const dogKeywords = ['dog', 'puppy', 'retriever', 'terrier', 'shepherd', 'bulldog', 'poodle', 'beagle', 'chihuahua', 'dachshund'];
//         const catKeywords = ['cat', 'kitten', 'tabby', 'siamese', 'persian', 'maine coon'];
  
//         const isDog = dogKeywords.some(keyword => className.includes(keyword));
//         const isCat = catKeywords.some(keyword => className.includes(keyword));
  
//         return (isDog || isCat) && pred.probability > 0.3; // Confidence threshold
//       });
  
//       console.log("Is pet detected:", isPet);
//       return isPet;
//     } catch (error) {
//       console.error("Pet detection error:", error);
//       return false;
//     }
//   };




// const handleFileChange = async (event) => {
//   const file = event.target.files?.[0];
//   if (!file) return;

//   // Reset input and state
//   event.target.value = '';
//   setSelectedFile(null);
//   setPreviewUrl(null);

//   // Basic client-side validation
//   if (!file.type.startsWith("image/")) {
//       toast.error("Please upload a valid image file (JPEG, PNG)");
//       return;
//   }

//   try {
//       setIsUploading(true);
//       setUploadStatus("Verifying pet image...");
//       setUploadProgress(10); // Initial progress

//       // Progress simulation function
//       const simulateProgress = async () => {
//           await new Promise(resolve => setTimeout(resolve, 500));
//           setUploadProgress(30);
//           setUploadStatus("Analyzing image...");
          
//           await new Promise(resolve => setTimeout(resolve, 700));
//           setUploadProgress(70);
//           setUploadStatus("Checking for pets...");

//           await new Promise(resolve => setTimeout(resolve, 800));
//           setUploadProgress(95);
          
//           await new Promise(resolve => setTimeout(resolve, 1000));
//           setUploadProgress(99);
//       };


//       // Start progress simulation (don't await yet)
//       const progressPromise = simulateProgress();

//       // Run verification concurrently with progress
//       const verificationPromise = verifyPetImage(file);

//       // Wait for both to complete
//       const [response] = await Promise.all([verificationPromise, progressPromise]);

//       // Complete the progress
//       setUploadProgress(100);
//       setUploadStatus("Verification complete!");

//       if (response.error) {
//           // Handle specific error cases
//           if (response.error === "invalid_file_type") {
//               toast.error("Please upload a JPEG or PNG image");
//           } else if (response.error === "invalid_image_format") {
//               toast.error("The image file appears to be corrupted");
//           } else {
//               toast.error("Could not verify image. Please try another photo.");
//           }
//           return;
//       }

//       if (!response.is_valid) {
//           toast.error(response.message || "Please upload a clear photo of a cat or dog");
//           return;
//       }

//       // If we get here, verification passed
//       setSelectedFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//       setIsSavedLocally(false);
//       toast.success("Pet image verified successfully!");

//       // Brief delay before resetting progress
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//   } catch (error) {
//       console.error("Verification error:", error);
//       toast.error("Image verification service is currently unavailable");
//   } finally {
//       setUploadProgress(0);
//       setUploadStatus("");
//       setIsUploading(false);
//   }
// };



//   const handleSaveToDatabase = async () => {
//     try {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setUploadStatus("Preparing pet data...");
  
//       const userId = sessionStorage.getItem("user_id");
//       if (!userId) {
//         toast.error("Please login first");
//         setIsUploading(false);
//         return;
//       }
  
//       // Progress simulation (runs independently)
//       const simulateProgress = async () => {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setUploadProgress(30);
//         setUploadStatus("Creating pet profile...");
  
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         setUploadProgress(60);
//         setUploadStatus(selectedFile ? "Uploading image..." : "Finalizing...");
  
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         setUploadProgress(90);
//       };
  
//       // Start progress simulation (no await)
//       const progressPromise = simulateProgress();
  
//       // 1. Prepare pet data
//       const petData = {
//         name: localStorage.getItem('petName'),
//         type: localStorage.getItem('petType') || "Dog",
//         gender: localStorage.getItem('petGender') || "Male",
//         description: description,
//         date: localStorage.getItem('petDate') || date,
//         address: localStorage.getItem('petAddress') || "",
//         status: localStorage.getItem('petStatus') || "Safe at Home",
//         image: "temp.jpg", // Temporary placeholder
//         latitude: parseFloat(localStorage.getItem('latitude')) || null, // Added latitude
//         longitude: parseFloat(localStorage.getItem('longitude')) || null, // Added longitude
//         user_id: parseInt(userId)
//       };
  
//       // 2. Create pet (single insertion)
//       const petResponse = await createPet(petData);
//       const petId = petResponse.pet_id;
  
//       // 3. Handle image upload if exists
//       if (selectedFile) {
//         const uploadResponse = await uploadPetImage(selectedFile);
//       }
  
//       // Wait for progress to complete if not done
//       await progressPromise;
//       setUploadProgress(100);
//       setUploadStatus("Successfully uploaded!");
  
//       // Cleanup
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       localStorage.clear();
//       router.push("/pet_dashboard");
  
//     } catch (error) {
//       setUploadStatus("Upload failed");
//       setUploadProgress(prev => Math.max(prev - 10, 0));
//       toast.error(error.message || "Failed to save pet");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleContinue = () => {
//     if (currentStep === 1) {
//       if (!date) {
//         toast.error("Please select the date");
//         return;
//       }
//       localStorage.setItem('petDate', date);
//       setCurrentStep(2);
//     } else if (currentStep === 2) {
//       if (!description.trim()) {
//         toast.error("Please enter a description");
//         return;
//       }
//       localStorage.setItem('petDescription', description);
//       setCurrentStep(3);
//     }
//   };

//   const handleSaveToLocal = () => {
//     if (currentStep === 2) {
//       localStorage.setItem('petDescription', description);
//     } else if (currentStep === 3) {
//       localStorage.setItem('petImageName', selectedFile.name);
//       localStorage.setItem('petImageFile', JSON.stringify({
//         name: selectedFile.name,
//         type: selectedFile.type,
//         size: selectedFile.size,
//         lastModified: selectedFile.lastModified
//       }));
//     }
//     toast.success("Progress saved locally!");
//     setIsSavedLocally(true);
//     checkDBRequirements();
//   };

//   const handleGoBack = () => {
//     if (currentStep === 2) {
//       setCurrentStep(1);
//     } else if (currentStep === 3) {
//       setCurrentStep(2);
//     } else {
//       router.back();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Toaster position="top-right" />

//       {isUploading && (
//         <LoadingScreen progress={uploadProgress} status={uploadStatus} />
//       )}


//       <div className="h-[2px] bg-purple-600 mx-12 my-8"></div>

//       <div className="max-w-2xl mx-auto px-4 text-center">
//          {currentStep === 1 ? (
//           <>
//             <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">
//               {statusText}
//             </h1>
//             <div className="text-purple-900 max-w-md mx-auto">
//               <input
//                 type="datetime-local"
//                 className="w-full p-3 border rounded-lg mb-8"
//                 value={date}
//                 onChange={(e) => {
//                   setDate(e.target.value);
//                   setIsSavedLocally(false);
//                 }}
//               />
//               <div className="flex justify-center gap-4 w-full">
//                 <button
//                   onClick={handleGoBack}
//                   className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1 max-w-[200px]"
//                 >
//                   Go Back
//                 </button>
//                 <button
//                   onClick={handleContinue}
//                   className="px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex-1 max-w-[200px]"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : currentStep === 2 ? (
//           <>
//             <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">
//               What are they like?
//             </h1>
//             <p className="text-gray-600 mb-8">
//               Describe their personality, physical traits, etc.
//             </p>
//             <div className="max-w-md mx-auto">
//               <textarea
//                 className="text-purple-900 w-full p-3 border rounded-lg mb-8 h-32 resize-none"
//                 placeholder="Enter description..."
//                 value={description}
//                 onChange={(e) => {
//                   setDescription(e.target.value);
//                   setIsSavedLocally(false);
//                 }}
//               ></textarea>
//               <div className="flex justify-center gap-4 w-full">
//                 <button
//                   onClick={handleGoBack}
//                   className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1"
//                 >
//                   Go Back
//                 </button>
//                 <button
//                   onClick={handleContinue}
//                   className="px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex-1"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">Add pet photo</h1>
//             <p className="text-gray-600 mb-12">
//               Photo quality will affect your search results. Please select a clear image of one pet looking directly
//               at the camera.
//             </p>

//             <div className="border border-gray-200 rounded-lg p-16">
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 mb-4">
//                   <Upload className="w-full h-full text-purple-600" />
//                 </div>

//                 <h2 className="text-black text-xl mb-2">Photo Upload</h2>
//                 <p className="text-gray-500">
//                   Drag and drop to upload or{" "}
//                   <label htmlFor="file-upload" className="text-purple-600 cursor-pointer">
//                     browse
//                   </label>
//                 </p>

//                 <input
//                   id="file-upload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />

//                 {previewUrl && (
//                   <div className="mt-6">
//                     <img
//                       src={previewUrl}
//                       alt="Preview"
//                       className="max-w-full h-auto rounded-lg"
//                       loading="lazy"
//                     />
//                     <p className="text-sm text-gray-500 mt-2">{selectedFile?.name}</p>
//                   </div>
//                 )}

//                 <div className="flex justify-center gap-4 w-full mt-6">
//                   <button
//                     onClick={handleGoBack}
//                     className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1 max-w-[200px]"
//                   >
//                     Go Back
//                   </button>
//                   <button
//                     onClick={canSaveToDB ? handleSaveToDatabase : handleSaveToLocal}
//                     disabled={!selectedFile}
//                     className={`px-8 py-2 text-white rounded-full hover:opacity-90 flex-1 max-w-[200px] ${
//                       canSaveToDB ? 'bg-green-600' : 'bg-blue-600'
//                     } ${!selectedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     {canSaveToDB ? 'Save to Database' : 'Save Progress'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }


//frontend\pages\pet_description.js

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";
import CryptoJS from "crypto-js";
import { createPet } from "../utils/api";
import LoadingScreen from "../components/LoadingScreen";
import { uploadPetImage, verifyPetImage  } from '../utils/api';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const SECRET_KEY = "asdasdasd";

export default function PetDescription() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSavedLocally, setIsSavedLocally] = useState(false);
  const [canSaveToDB, setCanSaveToDB] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [statusText, setStatusText] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const [model, setModel] = useState(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [petStatus, setPetStatus] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");
    const userId = sessionStorage.getItem("user_id");
    
    if (!token || !userId) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.ready();
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
      } catch (error) {
        console.error("Failed to load pet detection model:", error);
        toast.error("Pet verification feature is currently unavailable");
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModel();

    return () => {
      if (model) {
        tf.disposeVariablesInScope();
      }
    };
  }, []);

  useEffect(() => {
    const savedDate = localStorage.getItem('petDate');
    const savedDescription = localStorage.getItem('petDescription');
    const savedImage = localStorage.getItem('petImageName');
    const savedPetStatus = localStorage.getItem('petStatus');
    
    if (savedDate) setDate(savedDate);
    if (savedDescription) setDescription(savedDescription);
    if (savedImage) {
      setSelectedFile({ name: savedImage });
      setIsSavedLocally(true);
    }

    setPetStatus(savedPetStatus || "");

    if (savedPetStatus === "Lost") {
      setStatusText("When was the last time you saw them?");
    } else if (savedPetStatus === "Pet i Found") {
      setStatusText("When did you find them?");
    } else if (savedPetStatus === "Rehome Pet") {
      setStatusText("When was this pet born?");
    } else {
      setStatusText("When was this pet born?");
    }

    checkDBRequirements();
  }, []);

  const checkDBRequirements = () => {
    const hasRequiredFields = (
      localStorage.getItem('petName') &&
      (localStorage.getItem('petDate') || date) &&
      (localStorage.getItem('petImageName')) &&
      description.trim()
    );
    setCanSaveToDB(hasRequiredFields);
  };

  // Date validation helper functions
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const getMinDate = () => {
    return "2024-01-01T00:00";
  };

  const getMaxDate = () => {
    return getCurrentDateTime();
  };

  const formatDateForSpecialStatuses = (inputDate) => {
    if ((petStatus === "Safe at Home" || petStatus === "Rehome Pet") && inputDate) {
      const dateOnly = inputDate.split('T')[0];
      return `${dateOnly}T00:00`;
    }
    return inputDate;
  };

  const validateDate = (inputDate) => {
    if (!inputDate) return false;

    const selectedDate = new Date(inputDate);
    const currentDate = new Date();
    const minDate = new Date("2024-01-01");

    // Check if date is within valid range
    if (selectedDate < minDate) {
      toast.error("Date cannot be earlier than January 1, 2024");
      return false;
    }

    if (selectedDate > currentDate) {
      toast.error("Date cannot be in the future");
      return false;
    }

    // For Safe at Home and Rehome Pet, ensure time is 00:00
    if ((petStatus === "Safe at Home" || petStatus === "Rehome Pet")) {
      const timeOnly = inputDate.split('T')[1];
      if (timeOnly !== "00:00") {
        toast.error("Time must be set to 00:00 for this pet status");
        return false;
      }
    }

    return true;
  };

  // Description validation
  const validateDescription = (text) => {
    const errors = [];
    
    // Check minimum length
    if (text.trim().length < 10) {
      errors.push("Description must be at least 10 characters long");
    }
    
    // Check maximum length
    if (text.length > 500) {
      errors.push("Description must not exceed 500 characters");
    }
    
    // Check for inappropriate content (basic profanity filter)
    const inappropriateWords = ['fuck', 'shit', 'damn', 'bitch', 'asshole', 'bastard'];
    const containsInappropriate = inappropriateWords.some(word => 
      text.toLowerCase().includes(word.toLowerCase())
    );
    if (containsInappropriate) {
      errors.push("Please keep the description family-friendly");
    }
    
    // Check for excessive special characters
    const specialCharCount = (text.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    if (specialCharCount > text.length * 0.3) {
      errors.push("Description contains too many special characters");
    }
    
    // Check for repeated characters (like "aaaaaaa")
    const hasExcessiveRepeats = /(.)\1{4,}/.test(text);
    if (hasExcessiveRepeats) {
      errors.push("Please avoid excessive repeated characters");
    }
    
    // Check for at least one letter (not just numbers/symbols)
    if (!/[a-zA-Z]/.test(text)) {
      errors.push("Description must contain at least some letters");
    }

    return errors;
  };

  const isCatOrDog = async (imgElement) => {
    if (!model) {
      console.warn("Model not loaded - skipping pet verification");
      return true;
    }
  
    try {
      const predictions = await model.classify(imgElement);
  
      // Improved logging for debugging
      console.log("Raw Predictions:", predictions.map(p => `${p.className} (${(p.probability * 100).toFixed(1)}%)`));
  
      // Match against common cat and dog keywords
      const isPet = predictions.some(pred => {
        const className = pred.className.toLowerCase();
  
        const dogKeywords = ['dog', 'puppy', 'retriever', 'terrier', 'shepherd', 'bulldog', 'poodle', 'beagle', 'chihuahua', 'dachshund'];
        const catKeywords = ['cat', 'kitten', 'tabby', 'siamese', 'persian', 'maine coon'];
  
        const isDog = dogKeywords.some(keyword => className.includes(keyword));
        const isCat = catKeywords.some(keyword => className.includes(keyword));
  
        return (isDog || isCat) && pred.probability > 0.3; // Confidence threshold
      });
  
      console.log("Is pet detected:", isPet);
      return isPet;
    } catch (error) {
      console.error("Pet detection error:", error);
      return false;
    }
  };

const handleFileChange = async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  // Reset input and state
  event.target.value = '';
  setSelectedFile(null);
  setPreviewUrl(null);

  // Basic client-side validation
  if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPEG, PNG)");
      return;
  }

  try {
      setIsUploading(true);
      setUploadStatus("Verifying pet image...");
      setUploadProgress(10); // Initial progress

      // Progress simulation function
      const simulateProgress = async () => {
          await new Promise(resolve => setTimeout(resolve, 500));
          setUploadProgress(30);
          setUploadStatus("Analyzing image...");
          
          await new Promise(resolve => setTimeout(resolve, 700));
          setUploadProgress(70);
          setUploadStatus("Checking for pets...");

          await new Promise(resolve => setTimeout(resolve, 800));
          setUploadProgress(95);
          
          await new Promise(resolve => setTimeout(resolve, 1000));
          setUploadProgress(99);
      };


      // Start progress simulation (don't await yet)
      const progressPromise = simulateProgress();

      // Run verification concurrently with progress
      const verificationPromise = verifyPetImage(file);

      // Wait for both to complete
      const [response] = await Promise.all([verificationPromise, progressPromise]);

      // Complete the progress
      setUploadProgress(100);
      setUploadStatus("Verification complete!");

      if (response.error) {
          // Handle specific error cases
          if (response.error === "invalid_file_type") {
              toast.error("Please upload a JPEG or PNG image");
          } else if (response.error === "invalid_image_format") {
              toast.error("The image file appears to be corrupted");
          } else {
              toast.error("Could not verify image. Please try another photo.");
          }
          return;
      }

      if (!response.is_valid) {
          toast.error(response.message || "Please upload a clear photo of a cat or dog");
          return;
      }

      // If we get here, verification passed
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsSavedLocally(false);
      toast.success("Pet image verified successfully!");

      // Brief delay before resetting progress
      await new Promise(resolve => setTimeout(resolve, 1000));
      
  } catch (error) {
      console.error("Verification error:", error);
      toast.error("Image verification service is currently unavailable");
  } finally {
      setUploadProgress(0);
      setUploadStatus("");
      setIsUploading(false);
  }
};

  const handleSaveToDatabase = async () => {
    try {
      setIsUploading(true);
      setUploadProgress(0);
      setUploadStatus("Preparing pet data...");
  
      const userId = sessionStorage.getItem("user_id");
      if (!userId) {
        toast.error("Please login first");
        setIsUploading(false);
        return;
      }
  
      // Progress simulation (runs independently)
      const simulateProgress = async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setUploadProgress(30);
        setUploadStatus("Creating pet profile...");
  
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUploadProgress(60);
        setUploadStatus(selectedFile ? "Uploading image..." : "Finalizing...");
  
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUploadProgress(90);
      };
  
      // Start progress simulation (no await)
      const progressPromise = simulateProgress();
  
      // 1. Prepare pet data
      const petData = {
        name: localStorage.getItem('petName'),
        type: localStorage.getItem('petType') || "Dog",
        gender: localStorage.getItem('petGender') || "Male",
        description: description,
        date: localStorage.getItem('petDate') || date,
        address: localStorage.getItem('petAddress') || "",
        status: localStorage.getItem('petStatus') || "Safe at Home",
        image: "temp.jpg", // Temporary placeholder
        latitude: parseFloat(localStorage.getItem('latitude')) || null, // Added latitude
        longitude: parseFloat(localStorage.getItem('longitude')) || null, // Added longitude
        user_id: parseInt(userId)
      };
  
      // 2. Create pet (single insertion)
      const petResponse = await createPet(petData);
      const petId = petResponse.pet_id;
  
      // 3. Handle image upload if exists
      if (selectedFile) {
        const uploadResponse = await uploadPetImage(selectedFile);
      }
  
      // Wait for progress to complete if not done
      await progressPromise;
      setUploadProgress(100);
      setUploadStatus("Successfully uploaded!");
  
      // Cleanup
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.clear();
      router.push("/pet_dashboard");
  
    } catch (error) {
      setUploadStatus("Upload failed");
      setUploadProgress(prev => Math.max(prev - 10, 0));
      toast.error(error.message || "Failed to save pet");
    } finally {
      setIsUploading(false);
    }
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (!date) {
        toast.error("Please select the date");
        return;
      }
      
      if (!validateDate(date)) {
        return;
      }
      
      localStorage.setItem('petDate', date);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!description.trim()) {
        toast.error("Please enter a description");
        return;
      }
      
      const errors = validateDescription(description);
      if (errors.length > 0) {
        setDescriptionError(errors[0]);
        toast.error(errors[0]);
        return;
      }
      
      setDescriptionError("");
      localStorage.setItem('petDescription', description);
      setCurrentStep(3);
    }
  };

  const handleSaveToLocal = () => {
    if (currentStep === 2) {
      localStorage.setItem('petDescription', description);
    } else if (currentStep === 3) {
      localStorage.setItem('petImageName', selectedFile.name);
      localStorage.setItem('petImageFile', JSON.stringify({
        name: selectedFile.name,
        type: selectedFile.type,
        size: selectedFile.size,
        lastModified: selectedFile.lastModified
      }));
    }
    toast.success("Progress saved locally!");
    setIsSavedLocally(true);
    checkDBRequirements();
  };

  const handleGoBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else {
      router.back();
    }
  };

  const handleDateChange = (e) => {
    let newDate = e.target.value;
    
    // Auto-format for special statuses
    if (petStatus === "Safe at Home" || petStatus === "Rehome Pet") {
      newDate = formatDateForSpecialStatuses(newDate);
    }
    
    setDate(newDate);
    setIsSavedLocally(false);
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    setIsSavedLocally(false);
    
    // Clear error when user starts typing
    if (descriptionError) {
      setDescriptionError("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Toaster position="top-right" />

      {isUploading && (
        <LoadingScreen progress={uploadProgress} status={uploadStatus} />
      )}

      <div className="h-[2px] bg-purple-600 mx-12 my-8"></div>

      <div className="max-w-2xl mx-auto px-4 text-center">
         {currentStep === 1 ? (
          <>
            <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">
              {statusText}
            </h1>
            <div className="text-purple-900 max-w-md mx-auto">
              <input
                type="datetime-local"
                className="w-full p-3 border rounded-lg mb-2"
                value={date}
                onChange={handleDateChange}
                min={getMinDate()}
                max={getMaxDate()}
                step={petStatus === "Safe at Home" || petStatus === "Rehome Pet" ? "86400" : "60"}
              />
              <div className="text-xs text-gray-500 mb-6 text-left">
                {petStatus === "Safe at Home" || petStatus === "Rehome Pet" ? 
                  "Time will be set to 00:00 automatically" : 
                  "Select date and time"
                }
                <br />
                Valid range: January 1, 2024 to present
              </div>
              <div className="flex justify-center gap-4 w-full">
                <button
                  onClick={handleGoBack}
                  className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1 max-w-[200px]"
                >
                  Go Back
                </button>
                <button
                  onClick={handleContinue}
                  className="px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex-1 max-w-[200px]"
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        ) : currentStep === 2 ? (
          <>
            <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">
              What are they like?
            </h1>
            <p className="text-gray-600 mb-8">
              Describe their personality, physical traits, etc.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <textarea
                  className={`text-purple-900 w-full p-3 border rounded-lg mb-2 h-32 resize-none ${
                    descriptionError ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter description... (min 10 characters, max 500 characters)"
                  value={description}
                  onChange={handleDescriptionChange}
                  maxLength={500}
                ></textarea>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span className={descriptionError ? 'text-red-500' : ''}>
                    {descriptionError || 'Keep it family-friendly and descriptive'}
                  </span>
                  <span className={description.length > 450 ? 'text-red-500' : ''}>
                    {description.length}/500
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-400 mb-6 text-left">
                Requirements:
                <br />• At least 10 characters
                <br />• Family-friendly language
                <br />• Avoid excessive special characters or repeated letters
              </div>
              <div className="flex justify-center gap-4 w-full">
                <button
                  onClick={handleGoBack}
                  className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1"
                >
                  Go Back
                </button>
                <button
                  onClick={handleContinue}
                  className="px-8 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 flex-1"
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">Add pet photo</h1>
            <p className="text-gray-600 mb-12">
              Photo quality will affect your search results. Please select a clear image of one pet looking directly
              at the camera.
            </p>

            <div className="border border-gray-200 rounded-lg p-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  <Upload className="w-full h-full text-purple-600" />
                </div>

                <h2 className="text-black text-xl mb-2">Photo Upload</h2>
                <p className="text-gray-500">
                  Drag and drop to upload or{" "}
                  <label htmlFor="file-upload" className="text-purple-600 cursor-pointer">
                    browse
                  </label>
                </p>

                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {previewUrl && (
                  <div className="mt-6">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-500 mt-2">{selectedFile?.name}</p>
                  </div>
                )}

                <div className="flex justify-center gap-4 w-full mt-6">
                  <button
                    onClick={handleGoBack}
                    className="px-8 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 flex-1 max-w-[200px]"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={canSaveToDB ? handleSaveToDatabase : handleSaveToLocal}
                    disabled={!selectedFile}
                    className={`px-8 py-2 text-white rounded-full hover:opacity-90 flex-1 max-w-[200px] ${
                      canSaveToDB ? 'bg-green-600' : 'bg-blue-600'
                    } ${!selectedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {canSaveToDB ? 'Save to Database' : 'Save Progress'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}