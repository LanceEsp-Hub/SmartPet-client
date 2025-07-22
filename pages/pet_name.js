// Pet name page

"use client"

import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function PetName() {
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [petGender, setPetGender] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState(null)
  const [errors, setErrors] = useState({
    petType: "",
    petGender: "",
    petName: "",
  })
  const router = useRouter()

  useEffect(() => {
    // Check if session data exists
    const token = sessionStorage.getItem("auth_token")
    const userId = sessionStorage.getItem("user_id")

    if (!token || !userId) {
      router.push("/login")
    } else {
      setUserId(userId)
      setIsLoading(false)
    }
  }, [router])

  const validateForm = () => {
    const newErrors = {
      petType: "",
      petGender: "",
      petName: "",
    }
    let isValid = true

    if (!petType) {
      newErrors.petType = "Please select a pet type"
      isValid = false
    }

    if (!petGender) {
      newErrors.petGender = "Please select a pet gender"
      isValid = false
    }

    if (!petName.trim()) {
      newErrors.petName = "Please enter your pet's name"
      isValid = false
    } else if (petName.length > 30) {
      newErrors.petName = "Name must be 30 characters or less"
      isValid = false
    } else if (!/^[a-zA-Z\s'-]+$/.test(petName)) {
      newErrors.petName = "Name contains invalid characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Save each piece of data separately in localStorage
      localStorage.setItem("petName", petName.trim())
      localStorage.setItem("petType", petType)
      localStorage.setItem("petGender", petGender)

      toast
        .promise(
          new Promise((resolve) => {
            setTimeout(() => {
              resolve("Pet details saved successfully!")
            }, 1000)
          }),
          {
            loading: "Saving...",
            success: (message) => `${message}`,
            error: "Failed to save details. Please try again.",
          },
        )
        .then(() => {
          router.push("/pet_status")
        })
    } catch (error) {
      toast.error("Error saving pet details. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoBack = () => {
    localStorage.removeItem("petName")
    localStorage.removeItem("petType")
    localStorage.removeItem("petGender")
    router.back()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-[#C84E00] text-white text-center py-3">
        <p>
          You have a lost pet.{" "}
          <a href="/search" className="underline">
            Click to Search
          </a>
        </p>
      </div>

      <div className="h-[2px] bg-purple-600 mx-12 my-8" />

      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-6">What's your pet's name?</h1>

        <p className="text-gray-600 mb-12">
          Your pet&apos;s name is an important part of their identity. Choose a name that&apos;s meaningful to you.
        </p>

        <div className="mb-4">
          <p className="text-gray-600">
            User ID: <span className="font-semibold">{userId}</span>
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-8 sm:p-16">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              {/* Pet Type Selection */}
              <div className="mb-8 w-full">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Pet Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="radio"
                      name="pet-type"
                      id="Dog"
                      value="Dog"
                      className="hidden peer"
                      checked={petType === "Dog"}
                      onChange={() => {
                        setPetType("Dog")
                        setErrors({ ...errors, petType: "" })
                      }}
                    />
                    <label
                      htmlFor="Dog"
                      className={`flex flex-col items-center justify-center p-4 text-gray-500 bg-white border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ${
                        errors.petType ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 mb-2"
                      >
                        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"></path>
                        <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path>
                        <path d="M8 14v.5"></path>
                        <path d="M16 14v.5"></path>
                        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
                        <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"></path>
                      </svg>
                      <div className="w-full text-center">Dog</div>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      name="pet-type"
                      id="Cat"
                      value="Cat"
                      className="hidden peer"
                      checked={petType === "Cat"}
                      onChange={() => {
                        setPetType("Cat")
                        setErrors({ ...errors, petType: "" })
                      }}
                    />
                    <label
                      htmlFor="Cat"
                      className={`flex flex-col items-center justify-center p-4 text-gray-500 bg-white border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ${
                        errors.petType ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 mb-2"
                      >
                        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
                        <path d="M8 14v.5"></path>
                        <path d="M16 14v.5"></path>
                        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
                      </svg>
                      <div className="w-full text-center">Cat</div>
                    </label>
                  </div>
                </div>
                {errors.petType && <p className="mt-2 text-sm text-red-600">{errors.petType}</p>}
              </div>

              {/* Pet Gender Selection */}
              <div className="mb-8 w-full">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Pet Gender</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="radio"
                      name="pet-gender"
                      id="Male"
                      value="Male"
                      className="hidden peer"
                      checked={petGender === "Male"}
                      onChange={() => {
                        setPetGender("Male")
                        setErrors({ ...errors, petGender: "" })
                      }}
                    />
                    <label
                      htmlFor="Male"
                      className={`flex flex-col items-center justify-center p-4 text-gray-500 bg-white border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ${
                        errors.petGender ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 mb-2"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      <div className="w-full text-center">Male</div>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      name="pet-gender"
                      id="Female"
                      value="Female"
                      className="hidden peer"
                      checked={petGender === "Female"}
                      onChange={() => {
                        setPetGender("Female")
                        setErrors({ ...errors, petGender: "" })
                      }}
                    />
                    <label
                      htmlFor="Female"
                      className={`flex flex-col items-center justify-center p-4 text-gray-500 bg-white border rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ${
                        errors.petGender ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10 mb-2"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M3 7v3a9 9 0 1 0 18 0V7"></path>
                      </svg>
                      <div className="w-full text-center">Female</div>
                    </label>
                  </div>
                </div>
                {errors.petGender && <p className="mt-2 text-sm text-red-600">{errors.petGender}</p>}
              </div>

              {/* Name Input */}
              <div className="w-full mb-6">
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => {
                    const input = e.target.value
                    // Capitalize first letter and leave the rest unchanged
                    const capitalized = input.charAt(0).toUpperCase() + input.slice(1)
                    setPetName(capitalized)
                    setErrors({ ...errors, petName: "" })
                  }}
                  placeholder="Enter pet's name"
                  className={`text-black w-full p-3 border rounded-lg text-center text-lg ${
                    errors.petName ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.petName && <p className="mt-2 text-sm text-red-600">{errors.petName}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 w-full max-w-xs">
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="mt-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 w-full"
                >
                  Go Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                >
                  {isSubmitting ? "Saving..." : "Save & Continue"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      <Toaster position="bottom-right" />
    </div>
  )
}
