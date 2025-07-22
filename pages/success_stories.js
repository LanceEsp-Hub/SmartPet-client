// Success stories page

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import { Heart, Camera, User, BookOpen, ChevronRight, X } from "lucide-react"
import { submitSuccessStory, fetchSuccessStories } from "@/utils/api"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const getPetImageUrl = (imageName) => {
  if (!imageName) return "https://via.placeholder.com/400x300?text=Pet+Love"
  return `http://localhost:8000/uploads/success_stories/${imageName}?t=${Date.now()}`
}

export default function SuccessStories() {
  const router = useRouter()
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [stories, setStories] = useState([])
  const [newStory, setNewStory] = useState({
    name: "",
    petName: "",
    content: "",
    imageFiles: [],
    imagePreviews: [],
  })

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token")
    const uid = sessionStorage.getItem("user_id")

    if (!token || !uid) {
      router.push("/login")
    } else {
      setUserId(uid)
      setIsLoading(false)
      loadStories()
    }
  }, [router])

  const loadStories = async () => {
    try {
      const data = await fetchSuccessStories()
      setStories(data)
    } catch (error) {
      console.error("Failed to load success stories:", error)
      toast.error("Failed to load stories")
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewStory((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + newStory.imageFiles.length > 5) {
      toast.error("You can upload up to 5 images")
      return
    }
    setNewStory((prev) => ({
      ...prev,
      imageFiles: [...prev.imageFiles, ...files],
      imagePreviews: [...prev.imagePreviews, ...files.map((file) => URL.createObjectURL(file))],
    }))
  }

  const removeImage = (index) => {
    setNewStory((prev) => ({
      ...prev,
      imageFiles: prev.imageFiles.filter((_, i) => i !== index),
      imagePreviews: prev.imagePreviews.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!newStory.name || !newStory.petName || !newStory.content) {
      toast.error("Please fill all required fields")
      return
    }

    try {
      await toast.promise(
        submitSuccessStory({
          name: newStory.name,
          catName: newStory.petName,
          story: newStory.content,
          images: newStory.imageFiles,
        }),
        {
          loading: "Submitting your story...",
          success: "Story shared successfully!",
          error: "Failed to submit story",
        },
      )

      setNewStory({
        name: "",
        petName: "",
        content: "",
        imageFiles: [],
        imagePreviews: [],
      })

      await loadStories()
    } catch (error) {
      console.error("Error submitting story:", error)
    }
  }

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-purple-700">Loading happy stories...</div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-purple-600 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern-paws.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-lg mb-6">
            <Heart className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Happy Tails</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Share your pet&apos;s journey and inspire others to adopt
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Story Submission Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span>Tell Your Story</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">Your Name*</label>
                <input
                  type="text"
                  name="name"
                  value={newStory.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">Pet&apos;s Name*</label>
                <input
                  type="text"
                  name="petName"
                  value={newStory.petName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your pet&apos;s name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">Your Story*</label>
                <textarea
                  name="content"
                  value={newStory.content}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="How did your pet change your life?"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Photos (max 5)</label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                    <Camera className="h-5 w-5" />
                    Add Photos
                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                  </label>
                  <span className="text-sm text-gray-500">{newStory.imagePreviews.length}/5 images</span>
                </div>

                {newStory.imagePreviews.length > 0 && (
                  <div className="mt-4">
                    <div className="grid grid-cols-3 gap-3">
                      {newStory.imagePreviews.slice(0, 5).map((src, idx) => (
                        <div key={idx} className="relative aspect-square">
                          <img
                            src={src || "/placeholder.svg"}
                            alt={`Preview ${idx}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    {newStory.imagePreviews.length > 5 && (
                      <p className="text-sm text-red-500 mt-2">
                        Maximum 5 images allowed. Only first 5 will be uploaded.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Share Your Story
              </button>
            </form>
          </div>

          {/* Community Stories */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-3">
              <User className="h-6 w-6 text-purple-600" />
              <span>Community Stories</span>
            </h2>

            {stories.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 text-center">
                <p className="text-gray-500">Be the first to share your story!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => router.push(`/stories/${story.id}`)}
                  >
                    <div className="flex gap-4">
                      {/* Story Images Carousel */}
                      {story.image_urls.length > 0 && (
                        <div className="flex-shrink-0 w-1/3">
                          <div className="grid grid-cols-2 gap-2">
                            {story.image_urls.slice(0, 4).map((filename, idx) => (
                              <div key={idx} className="relative aspect-square">
                                <img
                                  src={getPetImageUrl(filename) || "/placeholder.svg"}
                                  alt={`${story.cat_name}&apos;s story ${idx}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                                {idx === 3 && story.image_urls.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                                    <span className="text-white font-bold text-lg">+{story.image_urls.length - 4}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-purple-800">{story.cat_name}&apos;s Journey</h3>
                        <p className="text-gray-600 my-2 line-clamp-3">{story.story}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-sm text-gray-500">by {story.name}</span>
                          <button className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1">
                            Read more <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <Toaster position="bottom-right" />
    </div>
  )
}
