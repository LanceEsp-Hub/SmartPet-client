// // // "use client"

// // // import { useState } from "react"
// // // import { Menu, X } from "lucide-react"

// // // export default function Home() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// // //   return (
// // //     <div className="relative">
// // //       <nav className="bg-white shadow-md">
// // //         <div className="flex justify-center items-center px-6 py-2 border-b">
// // //           <div className="text-gray-600 text-xs space-x-4">
// // //             <a href="/lost" className="hover:text-purple-700">
// // //               Petco Love Lost
// // //             </a>
// // //             <a href="/adopt" className="hover:text-purple-700">
// // //               Petco Love Adopt
// // //             </a>
// // //             <a href="/care" className="hover:text-purple-700">
// // //               Petco Love Care
// // //             </a>
// // //           </div>
// // //         </div>
// // //         <div className="flex justify-between items-center p-4">
// // //           <button className="text-gray-600 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
// // //             <Menu size={24} />
// // //           </button>
// // //           <div className="text-2xl font-bold text-purple-700">
// // //             Petco <span className="text-black">love</span>
// // //           </div>
// // //           <button className="bg-purple-700 text-white px-6 py-2 rounded-full">Donate</button>
// // //         </div>
// // //       </nav>

// // //       {isMenuOpen && (
// // //         <div className="fixed inset-0 bg-white z-50 transition-transform duration-300 transform translate-x-0">
// // //           <div className="flex justify-between items-center p-4 border-b">
// // //             <div className="text-2xl font-bold text-purple-700">
// // //               Petco <span className="text-black">love</span>
// // //             </div>
// // //             <button className="text-gray-600 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
// // //               <X size={24} />
// // //             </button>
// // //           </div>
// // //           <div className="p-4">
// // //             <h2 className="text-xl font-bold mb-4">Menu</h2>
// // //             <ul className="space-y-4">
// // //               <li>
// // //                 <h3 className="font-semibold">About</h3>
// // //                 <ul className="ml-4 mt-2 space-y-2">
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Who We Are
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       What We Do
// // //                     </a>
// // //                   </li>
// // //                 </ul>
// // //               </li>
// // //               <li>
// // //                 <h3 className="font-semibold">Shelter Partners</h3>
// // //                 <ul className="ml-4 mt-2 space-y-2">
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Vaccines
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Grant Opportunities
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Adopt at Petco
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Toolkits
// // //                     </a>
// // //                   </li>
// // //                 </ul>
// // //               </li>
// // //               <li>
// // //                 <h3 className="font-semibold">Our Family</h3>
// // //                 <ul className="ml-4 mt-2 space-y-2">
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Petco Love Lost
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Petco Love Adopt
// // //                     </a>
// // //                   </li>
// // //                   <li>
// // //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// // //                       Petco Love Care
// // //                     </a>
// // //                   </li>
// // //                 </ul>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <section className="flex flex-col md:flex-row items-center text-left p-12 bg-purple-700 text-white">
// // //         <div className="md:w-1/2 p-6">
// // //           <h1 className="text-5xl font-bold">Love changes lives.</h1>
// // //           <p className="mt-4 text-lg">
// // //             Petco Love, a national nonprofit, improves the lives of pets and their people. With nearly $400M invested,
// // //             we're creating a lifesaving nation.
// // //           </p>
// // //         </div>
// // //         <div className="md:w-1/2 p-6 flex justify-center">
// // //           <img
// // //             src="https://via.placeholder.com/500"
// // //             alt="Woman hugging dog"
// // //             className="rounded-lg shadow-lg w-full max-w-md"
// // //           />
// // //         </div>
// // //       </section>

// // //       <section className="bg-white py-16 px-8 text-center">
// // //         <h2 className="text-4xl font-bold mb-6">Paws up if you're down to help us</h2>
// // //         <p className="text-xl mb-8">
// // //           We harness the power of love to make communities and pet families closer, stronger, and healthier.
// // //         </p>
// // //       </section>

// // //       <section className="bg-gray-100 py-16 px-8">
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // //           {[1, 2, 3, 4].map((i) => (
// // //             <div key={i} className="bg-white rounded-lg shadow-md p-4">
// // //               <img
// // //                 src={`https://via.placeholder.com/300x200?text=Image+${i}`}
// // //                 alt={`Image ${i}`}
// // //                 className="w-full h-auto rounded"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       <section className="bg-purple-700 text-white py-16 px-8 text-center">
// // //         <h2 className="text-4xl font-bold mb-6">The challenge</h2>
// // //         <p className="text-xl">All pets deserve Love. We help them find it.</p>
// // //       </section>

// // //       <section className="bg-white py-16 px-8">
// // //         <div className="grid grid-cols-2 gap-8">
// // //           {[1, 2, 3, 4].map((i) => (
// // //             <div key={i} className="bg-gray-100 rounded-lg shadow-md p-4">
// // //               <img
// // //                 src={`https://via.placeholder.com/400x300?text=Image+${i}`}
// // //                 alt={`Image ${i}`}
// // //                 className="w-full h-auto rounded"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       <footer className="bg-gray-800 text-white py-12 px-8">
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // //           <div>
// // //             <h3 className="font-bold mb-4">Contact</h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Email
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Phone
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Address
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //           <div>
// // //             <h3 className="font-bold mb-4">About</h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Our Mission
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Team
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Careers
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //           <div>
// // //             <h3 className="font-bold mb-4">More</h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Blog
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Press
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Partners
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //           <div>
// // //             <h3 className="font-bold mb-4">Legal</h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Privacy Policy
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Terms of Service
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="hover:text-purple-400">
// // //                   Cookie Policy
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   )
// // // }



// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation";
// // // import toast, { Toaster } from "react-hot-toast";
// // // import { Heart, User, ChevronRight } from "lucide-react";
// // // import { fetchSuccessStories } from "@/utils/api";


// // // const getPetImageUrl = (imageName) => {
// // //   if (!imageName) return "https://via.placeholder.com/400x300?text=Pet+Love";
// // //   return `http://localhost:8000/uploads/success_stories/${imageName}?t=${Date.now()}`;
// // // };

// // // export default function SuccessStories() {
// // //   const router = useRouter();
// // //   const [userId, setUserId] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [stories, setStories] = useState([]);

// // //   useEffect(() => {



// // //       setIsLoading(false);
// // //       loadStories();
    
// // //   }, [router]);

// // //   const loadStories = async () => {
// // //     try {
// // //       const data = await fetchSuccessStories();
// // //       setStories(data);
// // //     } catch (error) {
// // //       console.error("Failed to load success stories:", error);
// // //       toast.error("Failed to load stories");
// // //     }
// // //   };

// // //   if (isLoading) return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //       <div className="animate-pulse text-purple-700">Loading happy stories...</div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">

// // //       {/* Hero Section */}
// // //       <div className="relative bg-purple-600 py-16 overflow-hidden">
// // //         <div className="absolute inset-0 opacity-10">
// // //           <div className="absolute inset-0 bg-[url('/pattern-paws.svg')] bg-repeat"></div>
// // //         </div>
// // //         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
// // //           <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6">
// // //             <Heart className="h-8 w-8 text-purple-600" />
// // //           </div>
// // //           <h1 className="text-4xl font-bold text-white mb-4">Happy Tails</h1>
// // //           <p className="text-xl text-purple-100 max-w-3xl mx-auto">
// // //             Share your pet's journey and inspire others to adopt
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="max-w-7xl mx-auto px-4 py-12">
// // //         <div className="grid lg:grid-cols-1 gap-12">
// // //           {/* Community Stories */}
// // //           <div>
// // //             <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
// // //               <User className="h-6 w-6 text-purple-600" />
// // //               <span>Community Stories</span>
// // //             </h2>

// // //             {stories.length === 0 ? (
// // //               <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 text-center">
// // //                 <p className="text-gray-500">No stories have been shared yet.</p>
// // //               </div>
// // //             ) : (
// // //               <div className="space-y-6">
// // //                 {stories.map((story) => (
// // //                   <div
// // //                     key={story.id}
// // //                     className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-all cursor-pointer"
// // //                     onClick={() => router.push(`/stories/${story.id}`)}
// // //                   >
// // //                     <div className="flex gap-4">
// // //                       {/* Story Images Carousel */}
// // //                       {story.image_urls.length > 0 && (
// // //                         <div className="flex-shrink-0 w-1/3">
// // //                           <div className="grid grid-cols-2 gap-2">
// // //                             {story.image_urls.slice(0, 4).map((filename, idx) => (
// // //                               <div key={idx} className="relative aspect-square">
// // //                                 <img
// // //                                   src={getPetImageUrl(filename)}
// // //                                   alt={`${story.cat_name}'s story ${idx}`}
// // //                                   className="w-full h-full object-cover rounded-lg"
// // //                                 />
// // //                                 {idx === 3 && story.image_urls.length > 4 && (
// // //                                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
// // //                                     <span className="text-white font-bold text-lg">
// // //                                       +{story.image_urls.length - 4}
// // //                                     </span>
// // //                                   </div>
// // //                                 )}
// // //                               </div>
// // //                             ))}
// // //                           </div>
// // //                         </div>
// // //                       )}
// // //                       <div className="flex-1">
// // //                         <h3 className="font-bold text-lg text-purple-800">
// // //                           {story.cat_name}'s Journey
// // //                         </h3>
// // //                         <p className="text-gray-600 my-2 line-clamp-3">
// // //                           {story.story}
// // //                         </p>
// // //                         <div className="flex items-center justify-between mt-3">
// // //                           <span className="text-sm text-gray-500">by {story.name}</span>
// // //                           <button className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1">
// // //                             Read more <ChevronRight className="h-4 w-4" />
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Toaster position="bottom-right" />
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { Menu, X, Heart, User, ChevronRight } from "lucide-react";
// // import toast, { Toaster } from "react-hot-toast";
// // import { fetchSuccessStories } from "@/utils/api";

// // const getPetImageUrl = (imageName) => {
// //   if (!imageName) return "https://via.placeholder.com/400x300?text=Pet+Love";
// //   return `http://localhost:8000/uploads/success_stories/${imageName}?t=${Date.now()}`;
// // };

// // export default function SuccessStoriesPage() {
// //   const router = useRouter();
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [stories, setStories] = useState([]);

// //   useEffect(() => {
// //     setIsLoading(false);
// //     loadStories();
// //   }, [router]);

// //   const loadStories = async () => {
// //     try {
// //       const data = await fetchSuccessStories();
// //       setStories(data);
// //     } catch (error) {
// //       console.error("Failed to load success stories:", error);
// //       toast.error("Failed to load stories");
// //     }
// //   };

// //   if (isLoading) return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //       <div className="animate-pulse text-purple-700">Loading happy stories...</div>
// //     </div>
// //   );

// //   return (
// //     <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
// //       {/* Navigation */}
// //       <nav className="bg-white shadow-md">
// //         <div className="flex justify-center items-center px-6 py-2 border-b">
// //           <div className="text-gray-600 text-xs space-x-4">
// //             <a href="/lost" className="hover:text-purple-700">
// //               Petco Love Lost
// //             </a>
// //             <a href="/adopt" className="hover:text-purple-700">
// //               Petco Love Adopt
// //             </a>
// //             <a href="/care" className="hover:text-purple-700">
// //               Petco Love Care
// //             </a>
// //           </div>
// //         </div>
// //         <div className="flex justify-between items-center p-4">
// //           <button 
// //             className="text-gray-600 focus:outline-none" 
// //             onClick={() => setIsMenuOpen(true)}
// //           >
// //             <Menu size={24} />
// //           </button>
// //           <div className="text-2xl font-bold text-purple-700">
// //             Petco <span className="text-black">love</span>
// //           </div>
// //           <button 
// //             className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors"
// //             onClick={() => router.push('/stories/new')}
// //           >
// //             Share Story
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="fixed inset-0 bg-white z-50 transition-transform duration-300 transform translate-x-0">
// //           <div className="flex justify-between items-center p-4 border-b">
// //             <div className="text-2xl font-bold text-purple-700">
// //               Petco <span className="text-black">love</span>
// //             </div>
// //             <button 
// //               className="text-gray-600 focus:outline-none" 
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               <X size={24} />
// //             </button>
// //           </div>
// //           <div className="p-4">
// //             <h2 className="text-xl font-bold mb-4">Menu</h2>
// //             <ul className="space-y-4">
// //               <li>
// //                 <h3 className="font-semibold">About</h3>
// //                 <ul className="ml-4 mt-2 space-y-2">
// //                   <li>
// //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// //                       Who We Are
// //                     </a>
// //                   </li>
// //                   <li>
// //                     <a href="#" className="text-gray-600 hover:text-purple-700">
// //                       What We Do
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </li>
// //               <li>
// //                 <h3 className="font-semibold">Success Stories</h3>
// //                 <ul className="ml-4 mt-2 space-y-2">
// //                   <li>
// //                     <a 
// //                       href="/success_stories" 
// //                       className="text-gray-600 hover:text-purple-700"
// //                     >
// //                       Browse Stories
// //                     </a>
// //                   </li>
// //                   <li>
// //                     <a 
// //                       href="/stories/new" 
// //                       className="text-gray-600 hover:text-purple-700"
// //                     >
// //                       Share Your Story
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </li>
// //               <li>
// //                 <h3 className="font-semibold">Our Family</h3>
// //                 <ul className="ml-4 mt-2 space-y-2">
// //                   <li>
// //                     <a href="/lost" className="text-gray-600 hover:text-purple-700">
// //                       Petco Love Lost
// //                     </a>
// //                   </li>
// //                   <li>
// //                     <a href="/adopt" className="text-gray-600 hover:text-purple-700">
// //                       Petco Love Adopt
// //                     </a>
// //                   </li>
// //                   <li>
// //                     <a href="/care" className="text-gray-600 hover:text-purple-700">
// //                       Petco Love Care
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       )}

// //       {/* Hero Section */}
// //       <section className="relative bg-purple-600 py-16 overflow-hidden">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute inset-0 bg-[url('/pattern-paws.svg')] bg-repeat"></div>
// //         </div>
// //         <div className="max-w-7xl mx-auto px-4 relative z-10">
// //           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
// //             <div className="md:w-1/2">
// //               <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6">
// //                 <Heart className="h-8 w-8 text-purple-600" />
// //               </div>
// //               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Happy Tails</h1>
// //               <p className="text-xl text-purple-100">
// //                 Share your pet's journey and inspire others to adopt. Love changes lives.
// //               </p>
// //             </div>
// //             <div className="md:w-1/2 flex justify-center">
// //               <img
// //                 src="https://via.placeholder.com/500x300?text=Happy+Pets"
// //                 alt="Happy pets together"
// //                 className="rounded-lg shadow-lg w-full max-w-md"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission Statement */}
// //       <section className="bg-white py-16 px-8 text-center">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
// //           Paws up for happy endings
// //         </h2>
// //         <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
// //           We harness the power of love to make communities and pet families closer, stronger, and healthier.
// //           Every adoption story inspires others to open their hearts and homes.
// //         </p>
// //       </section>

// //       {/* Featured Stories */}
// //       <section className="bg-gray-100 py-16 px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-2xl font-bold text-purple-800 mb-8 flex items-center gap-3">
// //             <User className="h-6 w-6 text-purple-600" />
// //             <span>Featured Success Stories</span>
// //           </h2>

// //           {stories.length === 0 ? (
// //             <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 text-center">
// //               <p className="text-gray-500">No stories have been shared yet.</p>
// //               <button 
// //                 className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors"
// //                 onClick={() => router.push('/stories/new')}
// //               >
// //                 Be the first to share
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {stories.slice(0, 3).map((story) => (
// //                 <div
// //                   key={story.id}
// //                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
// //                   onClick={() => router.push(`/stories/${story.id}`)}
// //                 >
// //                   {story.image_urls.length > 0 ? (
// //                     <div className="relative h-48 overflow-hidden">
// //                       <img
// //                         src={getPetImageUrl(story.image_urls[0])}
// //                         alt={`${story.cat_name}'s story`}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </div>
// //                   ) : (
// //                     <div className="h-48 bg-purple-100 flex items-center justify-center">
// //                       <Heart className="h-12 w-12 text-purple-400" />
// //                     </div>
// //                   )}
// //                   <div className="p-6">
// //                     <h3 className="font-bold text-xl text-purple-800 mb-2">
// //                       {story.cat_name}'s Journey
// //                     </h3>
// //                     <p className="text-gray-600 mb-4 line-clamp-3">
// //                       {story.story}
// //                     </p>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-sm text-gray-500">by {story.name}</span>
// //                       <button className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1">
// //                         Read more <ChevronRight className="h-4 w-4" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* All Stories Section */}
// //       <section className="bg-white py-16 px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-2xl font-bold text-purple-800 mb-8">All Community Stories</h2>
          
// //           {stories.length === 0 ? null : (
// //             <div className="space-y-6">
// //               {stories.map((story) => (
// //                 <div
// //                   key={story.id}
// //                   className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-all cursor-pointer"
// //                   onClick={() => router.push(`/stories/${story.id}`)}
// //                 >
// //                   <div className="flex flex-col md:flex-row gap-6">
// //                     {story.image_urls.length > 0 && (
// //                       <div className="md:w-1/3">
// //                         <div className="grid grid-cols-2 gap-2">
// //                           {story.image_urls.slice(0, 4).map((filename, idx) => (
// //                             <div key={idx} className="relative aspect-square">
// //                               <img
// //                                 src={getPetImageUrl(filename)}
// //                                 alt={`${story.cat_name}'s story ${idx}`}
// //                                 className="w-full h-full object-cover rounded-lg"
// //                               />
// //                               {idx === 3 && story.image_urls.length > 4 && (
// //                                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
// //                                   <span className="text-white font-bold text-lg">
// //                                     +{story.image_urls.length - 4}
// //                                   </span>
// //                                 </div>
// //                               )}
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                     <div className="md:flex-1">
// //                       <h3 className="font-bold text-lg text-purple-800">
// //                         {story.cat_name}'s Journey
// //                       </h3>
// //                       <p className="text-gray-600 my-2 line-clamp-3">
// //                         {story.story}
// //                       </p>
// //                       <div className="flex items-center justify-between mt-3">
// //                         <span className="text-sm text-gray-500">by {story.name}</span>
// //                         <button className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1">
// //                           Read more <ChevronRight className="h-4 w-4" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="bg-purple-700 text-white py-16 px-8 text-center">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-6">Share your story</h2>
// //         <p className="text-xl mb-8 max-w-2xl mx-auto">
// //           Has your pet found a loving home? Inspire others by sharing your success story.
// //         </p>
// //         <button 
// //           className="px-8 py-3 bg-white text-purple-700 rounded-full font-bold hover:bg-purple-100 transition-colors"
// //           onClick={() => router.push('/stories/new')}
// //         >
// //           Share Your Story
// //         </button>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white py-12 px-8">
// //         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
// //           <div>
// //             <h3 className="font-bold mb-4">Contact</h3>
// //             <ul className="space-y-2">
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Email
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Phone
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Address
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h3 className="font-bold mb-4">About</h3>
// //             <ul className="space-y-2">
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Our Mission
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Team
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Careers
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h3 className="font-bold mb-4">Programs</h3>
// //             <ul className="space-y-2">
// //               <li>
// //                 <a href="/lost" className="hover:text-purple-400">
// //                   Petco Love Lost
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/adopt" className="hover:text-purple-400">
// //                   Petco Love Adopt
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/care" className="hover:text-purple-400">
// //                   Petco Love Care
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h3 className="font-bold mb-4">Legal</h3>
// //             <ul className="space-y-2">
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Privacy Policy
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Terms of Service
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" className="hover:text-purple-400">
// //                   Cookie Policy
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </footer>

// //       <Toaster position="bottom-right" />
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Menu, X, Heart, MapPin, Search, MessageCircle, Shield, Zap, ChevronRight, Star, Users, PawPrint, Camera, Bell } from 'lucide-react';
// import toast, { Toaster } from "react-hot-toast";
// import { fetchSuccessStories } from "@/utils/api";

// const getPetImageUrl = (imageName) => {
//   if (!imageName) return "https://via.placeholder.com/400x300?text=Pet+Love";
//   return `http://localhost:8000/uploads/success_stories/${imageName}?t=${Date.now()}`;
// };

// export default function SmartPetHomepage() {
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     setIsLoading(false);
//     loadStories();
//   }, []);

//   const loadStories = async () => {
//     try {
//       const data = await fetchSuccessStories();
//       setStories(data);
//     } catch (error) {
//       console.error("Failed to load success stories:", error);
//       toast.error("Failed to load stories");
//     }
//   };

//   const features = [
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "AI-Powered Matching",
//       description: "Advanced machine learning algorithms analyze pet characteristics to find perfect matches between lost pets and their families.",
//       color: "bg-blue-500"
//     },
//     {
//       icon: <MapPin className="h-8 w-8" />,
//       title: "Smart Geolocation",
//       description: "Real-time location tracking helps reunite pets with owners by matching proximity and contextual factors.",
//       color: "bg-green-500"
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Centralized Platform",
//       description: "All-in-one digital hub for pet adoption, lost & found reporting, and administrative tracking with real-time notifications.",
//       color: "bg-purple-500"
//     },
//     {
//       icon: <MessageCircle className="h-8 w-8" />,
//       title: "Secure Messaging",
//       description: "Safe communication between adopters and pet owners with automated application reviews and digital agreements.",
//       color: "bg-orange-500"
//     }
//   ];

//   const stats = [
//     { number: "10,000+", label: "Pets Reunited", icon: <Heart className="h-6 w-6" /> },
//     { number: "5,000+", label: "Successful Adoptions", icon: <Users className="h-6 w-6" /> },
//     { number: "98%", label: "Match Accuracy", icon: <Star className="h-6 w-6" /> },
//     { number: "24/7", label: "Real-time Tracking", icon: <Bell className="h-6 w-6" /> }
//   ];

//   if (isLoading) return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="animate-pulse text-blue-600 text-xl">Loading SmartPet...</div>
//     </div>
//   );

//   return (
//     <div className="relative min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             {/* Mobile Menu Button */}
//             <button 
//               className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none transition-colors" 
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Menu size={24} />
//             </button>

//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <img
//                 src="/logo.png"
//                 alt="SmartPet"
//                 className="h-12 w-auto"
//               />
//               <div className="hidden sm:block">
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   SmartPet
//                 </h1>
//                 <p className="text-xs text-gray-500">AI-Powered Pet Care</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 Features
//               </a>
//               <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 How It Works
//               </a>
//               <a href="#success-stories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 Success Stories
//               </a>
//               <a href="/lost-pet" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 Report Lost Pet
//               </a>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex items-center space-x-3">
//               <button 
//                 className="hidden sm:block px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
//                 onClick={() => router.push('/login')}
//               >
//                 Sign In
//               </button>
//               <button 
//                 className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg"
//                 onClick={() => router.push('/register')}
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
//           <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300">
//             <div className="flex justify-between items-center p-6 border-b">
//               <div className="flex items-center space-x-3">
//                 <img src="/logo.png" alt="SmartPet" className="h-10 w-auto" />
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">SmartPet</h2>
//                   <p className="text-xs text-gray-500">AI-Powered Pet Care</p>
//                 </div>
//               </div>
//               <button 
//                 className="text-gray-600 hover:text-gray-800" 
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <X size={24} />
//               </button>
//             </div>
            
//             <div className="p-6">
//               <nav className="space-y-6">
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
//                     Main Menu
//                   </h3>
//                   <ul className="space-y-3">
//                     <li>
//                       <a href="#features" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <Zap className="h-5 w-5" />
//                         <span>Features</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#how-it-works" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <Search className="h-5 w-5" />
//                         <span>How It Works</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#success-stories" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <Heart className="h-5 w-5" />
//                         <span>Success Stories</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
//                     Quick Actions
//                   </h3>
//                   <ul className="space-y-3">
//                     <li>
//                       <a href="/lost-pet" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <MapPin className="h-5 w-5" />
//                         <span>Report Lost Pet</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/found-pet" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <Camera className="h-5 w-5" />
//                         <span>Report Found Pet</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/adopt" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
//                         <PawPrint className="h-5 w-5" />
//                         <span>Browse Adoptions</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/pattern-paws.svg')] opacity-5"></div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//                   <Zap className="h-4 w-4" />
//                   <span>AI-Powered Pet Matching</span>
//                 </div>
//                 <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                   Reunite with your
//                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> beloved pets</span>
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   SmartPet uses advanced AI and geolocation technology to help you find lost pets, 
//                   facilitate adoptions, and create lasting bonds between pets and families.
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button 
//                   className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg transform hover:scale-105"
//                   onClick={() => router.push('/register')}
//                 >
//                   Start Your Search
//                 </button>
//                 <button 
//                   className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all font-semibold"
//                   onClick={() => router.push('/demo')}
//                 >
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="flex justify-center mb-2 text-blue-600">
//                       {stat.icon}
//                     </div>
//                     <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="relative z-10">
//                 <img
//                   src="https://via.placeholder.com/600x500?text=Happy+Pet+Family"
//                   alt="Happy pet family"
//                   className="rounded-2xl shadow-2xl w-full"
//                 />
//               </div>
//               <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
//               <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Powered by Advanced Technology
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our cutting-edge platform combines AI, machine learning, and geolocation 
//               to create the most effective pet reunion and adoption system.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                   <div className={`${feature.color} text-white p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform`}>
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               How SmartPet Works
//             </h2>
//             <p className="text-xl text-gray-600">
//               Simple steps to reunite with your pet or find your perfect companion
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Camera className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">1. Upload & Report</h3>
//               <p className="text-gray-600">
//                 Upload photos and details of your lost pet or pet available for adoption. 
//                 Our AI analyzes key characteristics.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Zap className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">2. AI Matching</h3>
//               <p className="text-gray-600">
//                 Advanced algorithms analyze pet features, location data, and behavioral patterns 
//                 to find potential matches.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Heart className="h-8 w-8 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">3. Connect & Reunite</h3>
//               <p className="text-gray-600">
//                 Get instant notifications when matches are found. Connect securely through 
//                 our messaging system and arrange safe meetups.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories Section */}
//       <section id="success-stories" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Success Stories
//             </h2>
//             <p className="text-xl text-gray-600">
//               Real families reunited through SmartPet's intelligent matching system
//             </p>
//           </div>

//           {stories.length === 0 ? (
//             <div className="bg-gray-50 p-12 rounded-2xl text-center">
//               <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//               <p className="text-gray-500 text-lg">No success stories yet. Be the first to share yours!</p>
//               <button 
//                 className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
//                 onClick={() => router.push('/stories/new')}
//               >
//                 Share Your Story
//               </button>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {stories.slice(0, 6).map((story) => (
//                 <div
//                   key={story.id}
//                   className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
//                   onClick={() => router.push(`/stories/${story.id}`)}
//                 >
//                   {story.image_urls && story.image_urls.length > 0 ? (
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={getPetImageUrl(story.image_urls[0]) || "/placeholder.svg"}
//                         alt={`${story.cat_name}'s story`}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
//                         <span className="text-sm font-medium text-gray-700">Success</span>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                       <Heart className="h-12 w-12 text-blue-400" />
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <h3 className="font-bold text-xl text-gray-900 mb-2">
//                       {story.cat_name}'s Journey
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3">
//                       {story.story}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-500">by {story.name}</span>
//                       <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 font-medium">
//                         Read more <ChevronRight className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Find Your Perfect Match?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Join thousands of pet families who have found their companions through SmartPet's 
//             intelligent matching system.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg"
//               onClick={() => router.push('/register')}
//             >
//               Get Started Free
//             </button>
//             <button 
//               className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all font-semibold"
//               onClick={() => router.push('/lost-pet')}
//             >
//               Report Lost Pet
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="col-span-2">
//               <div className="flex items-center space-x-3 mb-6">
//                 <img src="/logo.png" alt="SmartPet" className="h-10 w-auto" />
//                 <div>
//                   <h3 className="text-xl font-bold">SmartPet</h3>
//                   <p className="text-gray-400 text-sm">AI-Powered Pet Care</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Connecting pets with families through advanced AI technology and compassionate care. 
//                 Every pet deserves a loving home.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">Facebook</span>
//                   <div className="w-6 h-6 bg-gray-600 rounded"></div>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">Twitter</span>
//                   <div className="w-6 h-6 bg-gray-600 rounded"></div>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   <span className="sr-only">Instagram</span>
//                   <div className="w-6 h-6 bg-gray-600 rounded"></div>
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="/lost-pet" className="text-gray-400 hover:text-white transition-colors">Report Lost Pet</a></li>
//                 <li><a href="/found-pet" className="text-gray-400 hover:text-white transition-colors">Report Found Pet</a></li>
//                 <li><a href="/adopt" className="text-gray-400 hover:text-white transition-colors">Browse Adoptions</a></li>
//                 <li><a href="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Support</h4>
//               <ul className="space-y-2">
//                 <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
//                 <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//                 <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//             <p className="text-gray-400">
//               © 2024 SmartPet. All rights reserved. Made with ❤️ for pets and their families.
//             </p>
//           </div>
//         </div>
//       </footer>

//       <Toaster position="bottom-right" />
//     </div>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, Heart, MapPin, Search, MessageCircle, Shield, Zap, ChevronRight, Star, Users, PawPrint, Camera, Bell } from 'lucide-react'
import toast, { Toaster } from "react-hot-toast"
import { fetchSuccessStories } from "@/utils/api"

const getPetImageUrl = (imageName) => {
  if (!imageName) return "https://via.placeholder.com/400x300?text=Pet+Love"
  return `http://localhost:8000/uploads/success_stories/${imageName}?t=${Date.now()}`
}

export default function SmartPetHomepage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [stories, setStories] = useState([])

  useEffect(() => {
    setIsLoading(false)
    loadStories()
  }, [])

  const loadStories = async () => {
    try {
      const data = await fetchSuccessStories()
      setStories(data)
    } catch (error) {
      console.error("Failed to load success stories:", error)
      toast.error("Failed to load stories")
    }
  }

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description:
        "Advanced machine learning algorithms analyze pet characteristics to find perfect matches between lost pets and their families.",
      color: "bg-blue-500",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Geolocation",
      description:
        "Real-time location tracking helps reunite pets with owners by matching proximity and contextual factors.",
      color: "bg-green-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Centralized Platform",
      description:
        "All-in-one digital hub for pet adoption, lost & found reporting, and administrative tracking with real-time notifications.",
      color: "bg-purple-500",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Secure Messaging",
      description:
        "Safe communication between adopters and pet owners with automated application reviews and digital agreements.",
      color: "bg-orange-500",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Pets Reunited", icon: <Heart className="h-6 w-6" /> },
    { number: "5,000+", label: "Successful Adoptions", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Match Accuracy", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Real-time Tracking", icon: <Bell className="h-6 w-6" /> },
  ]

  // Sample hero images array
  const heroImages = [
    "https://via.placeholder.com/300x200?text=Happy+Dog+1",
    "https://via.placeholder.com/300x200?text=Happy+Cat+1",
    "https://via.placeholder.com/300x200?text=Happy+Dog+2",
    "https://via.placeholder.com/300x200?text=Happy+Cat+2",
    "https://via.placeholder.com/300x200?text=Happy+Dog+3",
    "https://via.placeholder.com/300x200?text=Happy+Cat+3",
  ]

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="animate-pulse text-blue-600 text-xl">Loading SmartPet...</div>
      </div>
    )

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="SmartPet" className="h-12 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SmartPet
                </h1>
                <p className="text-xs text-gray-500">AI-Powered Pet Care</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#success-stories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Success Stories
              </a>
              <a href="/lost-pet" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Report Lost Pet
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <button
                className="hidden sm:block px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
                onClick={() => router.push("/login")}
              >
                Sign In
              </button>
              <button
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg"
                onClick={() => router.push("/login")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="SmartPet" className="h-10 w-auto" />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">SmartPet</h2>
                  <p className="text-xs text-gray-500">AI-Powered Pet Care</p>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <nav className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Main Menu</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#features"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Zap className="h-5 w-5" />
                        <span>Features</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#how-it-works"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Search className="h-5 w-5" />
                        <span>How It Works</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#success-stories"
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Heart className="h-5 w-5" />
                        <span>Success Stories</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => {
                          router.push("/lost-pet")
                          setIsMenuOpen(false)
                        }}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                      >
                        <MapPin className="h-5 w-5" />
                        <span>Report Lost Pet</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/found-pet")
                          setIsMenuOpen(false)
                        }}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                      >
                        <Camera className="h-5 w-5" />
                        <span>Report Found Pet</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/adopt")
                          setIsMenuOpen(false)
                        }}
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                      >
                        <PawPrint className="h-5 w-5" />
                        <span>Browse Adoptions</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-paws.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  <span>AI-Powered Pet Matching</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Reunite with your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    beloved pets
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  SmartPet uses advanced AI and geolocation technology to help you find lost pets, facilitate adoptions,
                  and create lasting bonds between pets and families.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg transform hover:scale-105"
                  onClick={() => router.push("/login")}
                >
                  Start Your Search
                </button>
                <button
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all font-semibold"
                  onClick={() => router.push("/demo")}
                >
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-blue-600">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge platform combines AI, machine learning, and geolocation to create the most effective pet
              reunion and adoption system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`${feature.color} text-white p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SmartPet Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to reunite with your pet or find your perfect companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Upload & Report</h3>
              <p className="text-gray-600">
                Upload photos and details of your lost pet or pet available for adoption. Our AI analyzes key
                characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. AI Matching</h3>
              <p className="text-gray-600">
                Advanced algorithms analyze pet features, location data, and behavioral patterns to find potential
                matches.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Connect & Reunite</h3>
              <p className="text-gray-600">
                Get instant notifications when matches are found. Connect securely through our messaging system and
                arrange safe meetups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real families reunited through SmartPet's intelligent matching system
            </p>
          </div>

          {stories.length === 0 ? (
            <div className="bg-gray-50 p-12 rounded-2xl text-center">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No success stories yet. Be the first to share yours!</p>
              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => router.push("/stories/new")}
              >
                Share Your Story
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.slice(0, 6).map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                  onClick={() => router.push(`/stories/${story.id}`)}
                >
                  {/* Image Grid for Multiple Images */}
                  {story.image_urls && story.image_urls.length > 0 ? (
                    <div className="relative h-48 overflow-hidden">
                      {story.image_urls.length === 1 ? (
                        <img
                          src={getPetImageUrl(story.image_urls[0]) || "/placeholder.svg"}
                          alt={`${story.cat_name}'s story`}
                          className="w-full h-full object-cover"
                        />
                      ) : story.image_urls.length === 2 ? (
                        <div className="grid grid-cols-2 gap-1 h-full">
                          {story.image_urls.slice(0, 2).map((filename, idx) => (
                            <img
                              key={idx}
                              src={getPetImageUrl(filename) || "/placeholder.svg"}
                              alt={`${story.cat_name}'s story ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ))}
                        </div>
                      ) : story.image_urls.length === 3 ? (
                        <div className="grid grid-cols-2 gap-1 h-full">
                          <img
                            src={getPetImageUrl(story.image_urls[0]) || "/placeholder.svg"}
                            alt={`${story.cat_name}'s story 1`}
                            className="w-full h-full object-cover"
                          />
                          <div className="grid grid-rows-2 gap-1">
                            {story.image_urls.slice(1, 3).map((filename, idx) => (
                              <img
                                key={idx}
                                src={getPetImageUrl(filename) || "/placeholder.svg"}
                                alt={`${story.cat_name}'s story ${idx + 2}`}
                                className="w-full h-full object-cover"
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-1 h-full">
                          <div className="grid grid-rows-2 gap-1">
                            {story.image_urls.slice(0, 2).map((filename, idx) => (
                              <img
                                key={idx}
                                src={getPetImageUrl(filename) || "/placeholder.svg"}
                                alt={`${story.cat_name}'s story ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ))}
                          </div>
                          <div className="grid grid-rows-2 gap-1">
                            {story.image_urls.slice(2, 4).map((filename, idx) => (
                              <div key={idx} className="relative">
                                <img
                                  src={getPetImageUrl(filename) || "/placeholder.svg"}
                                  alt={`${story.cat_name}'s story ${idx + 3}`}
                                  className="w-full h-full object-cover"
                                />
                                {idx === 1 && story.image_urls.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                      +{story.image_urls.length - 4}
                                    </span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-700">Success</span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Heart className="h-12 w-12 text-blue-400" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{story.cat_name}'s Journey</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{story.story}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">by {story.name}</span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 font-medium">
                        Read more <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of pet families who have found their companions through SmartPet's intelligent matching
            system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              onClick={() => router.push("/login")}
            >
              Get Started Free
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all font-semibold"
              onClick={() => router.push("/lost-pet")}
            >
              Report Lost Pet
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.png" alt="SmartPet" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">SmartPet</h3>
                  <p className="text-gray-400 text-sm">AI-Powered Pet Care</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting pets with families through advanced AI technology and compassionate care. Every pet deserves
                a loving home.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => router.push("/lost-pet")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Report Lost Pet
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/found-pet")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Report Found Pet
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/adopt")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Browse Adoptions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/success-stories")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Success Stories
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => router.push("/help")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/contact")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/privacy")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push("/terms")}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SmartPet. All rights reserved. Made with ❤️ for pets and their families.
            </p>
          </div>
        </div>
      </footer>

      <Toaster position="bottom-right" />
    </div>
  )
}
