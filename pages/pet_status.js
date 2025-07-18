// "use client";

// import { useState, useEffect } from "react";
// import { Home, Search, SignpostBig } from "lucide-react";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation"; // For redirection
// import Navbar from "../components/Navbar"; // Import Navbar
// import Footer from "../components/Footer"; // Import Footer

// export default function PetType() {
//     const router = useRouter();
//     const [isUploading, setIsUploading] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         // Check if session data exists
//         const token = sessionStorage.getItem("auth_token");
//         const userId = sessionStorage.getItem("user_id");
        
//         if (!token || !userId) {
//             router.push("/login");
//         } else {
//             setUserId(userId);
//             setIsLoading(false);
//         }
//     }, [router]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     // Simulate upload process
//     const handleOptionClick = async (option) => {
//         setIsUploading(true);
    
//         // Show loading toaster
//         toast.promise(
//             new Promise((resolve) => {
//                 setTimeout(() => {
//                     // Save status directly to localStorage
//                     localStorage.setItem('petStatus', option);
                    
//                     resolve(`Pet marked as ${option}!`);
//                 }, 2000); // Simulate a 2-second upload process
//             }),
//             {
//                 loading: "Uploading...",
//                 success: (message) => `${message}`,
//                 error: "Upload failed. Please try again.",
//             }
//         ).then(() => {
//             // Redirect to /pet_location after upload is complete
//             router.push("/pet_location");
//         }).finally(() => {
//             setIsUploading(false);
//         });
//     };

//     const handleGoBack = () => {
//         // Remove pet status from localStorage
//         localStorage.removeItem('petStatus');
        
//         // Navigate back
//         router.back();
//     };

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Add Navbar */}
//             <Navbar />

//             {/* Alert Banner */}
//             <div className="bg-[#C84E00] text-white text-center py-3">
//                 <p>
//                     You have a lost pet.{" "}
//                     <a href="/search" className="underline">
//                         Click to Search
//                     </a>
//                 </p>
//             </div>

//             {/* Purple Line */}
//             <div className="h-[2px] bg-purple-600 mx-12 my-8" />

//             <div className="max-w-2xl mx-auto px-4 text-center text-black">
//                 <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-12">Nice name! This pet is:</h1>

//                 {/* Display user_id */}
//                 <div className="mb-4">
//                     <p className="text-gray-600">User ID: <span className="font-semibold">{userId}</span></p>
//                 </div>

//                 <div className="max-w-md mx-auto mb-8">
//                     <button
//                         onClick={handleGoBack}
//                         disabled={isUploading}
//                         className="w-full flex items-center justify-center gap-2 p-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         ← Go Back
//                     </button>
//                 </div>
                
//                 <div className="max-w-md mx-auto space-y-4">
//                     {/* Safe at Home Button */}
//                     <button
//                         onClick={() => handleOptionClick("Safe at Home")}
//                         disabled={isUploading}
//                         className="text-purple-700 w-full flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <Home className="h-5 w-5" />
//                         <span>Safe at Home</span>
//                     </button>

//                     {/* Lost Button */}
//                     <button
//                         onClick={() => handleOptionClick("Lost")}
//                         disabled={isUploading}
//                         className="text-purple-700 w-full flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <SignpostBig className="h-5 w-5" />
//                         <span>Lost</span>
//                     </button>

//                     {/* Pet I Found Button */}
//                     <button
//                         onClick={() => handleOptionClick("Pet I Found")}
//                         disabled={isUploading}
//                         className="text-purple-700 w-full flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <Search className="h-5 w-5" />
//                         <span>Found</span>
//                     </button>

//                     <button
//                         onClick={() => handleOptionClick("Rehome Pet")}
//                         disabled={isUploading}
//                         className="text-purple-700 w-full flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         <Search className="h-5 w-5" />
//                         <span>Rehome Pet</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Add Footer */}
//             <Footer />

//             {/* Toaster for Notifications */}
//             <Toaster position="bottom-right" />
//         </div>
//     );
// }


"use client";

import { useState, useEffect } from "react";
import { Home, Search, SignpostBig } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Constants for status options
const STATUS_OPTIONS = [
  { 
    value: "Safe at Home", 
    icon: Home,
    label: "Safe at Home"
  },
  { 
    value: "Lost", 
    icon: SignpostBig,
    label: "Lost"
  },
  { 
    value: "Pet I Found", 
    icon: Search,
    label: "Found"
  },
  { 
    value: "Rehome Pet", 
    icon: Search,
    label: "Rehome Pet"
  }
];

export default function PetType() {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const authenticate = () => {
            const token = sessionStorage.getItem("auth_token");
            const userId = sessionStorage.getItem("user_id");
            
            if (!token || !userId) {
                router.push("/login");
            } else {
                setUserId(userId);
                setIsLoading(false);
            }
        };

        authenticate();
    }, [router]);

    const handleOptionClick = async (option) => {
        setIsUploading(true);
        
        try {
            await toast.promise(
                new Promise((resolve) => {
                    setTimeout(() => {
                        localStorage.setItem('petStatus', option);
                        resolve(`Pet marked as ${option}!`);
                    }, 2000);
                }),
                {
                    loading: "Saving status...",
                    success: (message) => message,
                    error: (err) => err.message || "Failed to save status",
                }
            );
            router.push("/pet_location");
        } catch (error) {
            console.error("Error saving pet status:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleGoBack = () => {
        localStorage.removeItem('petStatus');
        router.back();
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <div className="bg-[#C84E00] text-white text-center py-3">
                <p>
                    You have a lost pet.{" "}
                    <a href="/search" className="underline hover:text-orange-200">
                        Click to Search
                    </a>
                </p>
            </div>

            <div className="h-[2px] bg-purple-600 mx-12 my-8" />

            <main className="max-w-2xl mx-auto px-4 text-center text-black flex-grow">
                <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-12">
                    Nice name! This pet is:
                </h1>

                <div className="mb-4">
                    <p className="text-gray-600">
                        User ID: <span className="font-semibold">{userId}</span>
                    </p>
                </div>

                <div className="max-w-md mx-auto mb-8">
                    <button
                        onClick={handleGoBack}
                        disabled={isUploading}
                        className="w-full flex items-center justify-center gap-2 p-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ← Go Back
                    </button>
                </div>
                
                <div className="max-w-md mx-auto space-y-4">
                    {STATUS_OPTIONS.map((option) => {
                        const Icon = option.icon;
                        return (
                            <button
                                key={option.value}
                                onClick={() => handleOptionClick(option.value)}
                                disabled={isUploading}
                                className="text-purple-700 w-full flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Icon className="h-5 w-5" />
                                <span>{option.label}</span>
                            </button>
                        );
                    })}
                </div>
            </main>

            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
}