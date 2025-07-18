// frontend/pages/report_user.js
"use client";

import { Flag, AlertTriangle, UserX, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReportUser() {
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [reportData, setReportData] = useState({
        reportedUserId: "",
        reason: "",
        description: "",
        evidence: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("auth_token");
        const userId = sessionStorage.getItem("user_id");
        
        if (!token || !userId) {
            router.push("/login");
        } else {
            setUserId(userId);
            setIsLoading(false);
        }
    }, [router]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReportData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setReportData(prev => ({
            ...prev,
            evidence: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Basic validation
        if (!reportData.reportedUserId.trim()) {
            toast.error("Please enter the user ID you're reporting");
            setIsSubmitting(false);
            return;
        }

        if (!reportData.reason) {
            toast.error("Please select a reason for reporting");
            setIsSubmitting(false);
            return;
        }

        try {
            // In a real app, you would send this data to your backend
            const formData = new FormData();
            formData.append('reporterId', userId);
            formData.append('reportedUserId', reportData.reportedUserId);
            formData.append('reason', reportData.reason);
            formData.append('description', reportData.description);
            if (reportData.evidence) {
                formData.append('evidence', reportData.evidence);
            }

            // Simulate API call
            await toast.promise(
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                }),
                {
                    loading: 'Submitting report...',
                    success: 'Report submitted successfully!',
                    error: 'Failed to submit report'
                }
            );

            // Reset form after successful submission
            setReportData({
                reportedUserId: "",
                reason: "",
                description: "",
                evidence: null
            });

        } catch (error) {
            console.error("Error submitting report:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="bg-[#C84E00] text-white text-center py-3">
                <p>
                    Help keep our community safe.{" "}
                    <a href="/safety_tips" className="underline hover:text-orange-200">
                        View safety tips
                    </a>
                </p>
            </div>

            <div className="h-[2px] bg-purple-600 mx-12 my-8" />

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Shield className="h-12 w-12 text-purple-700" />
                    </div>
                    <h1 className="text-[2.5rem] font-bold text-[#1A237E] mb-4">
                        Report Suspicious Activity
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Help us maintain a safe community by reporting users who violate our guidelines.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 sm:p-12">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-8">
                            {/* Reported User ID */}
                            <div>
                                <label htmlFor="reportedUserId" className="block text-lg font-medium text-gray-700 mb-2">
                                    User ID of the account you're reporting
                                </label>
                                <input
                                    type="text"
                                    id="reportedUserId"
                                    name="reportedUserId"
                                    value={reportData.reportedUserId}
                                    onChange={handleInputChange}
                                    placeholder="Enter user ID (e.g., 12345)"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Reason for Reporting */}
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">
                                    Reason for reporting
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { value: "spam", label: "Spam or scams", icon: Flag },
                                        { value: "harassment", label: "Harassment", icon: AlertTriangle },
                                        { value: "fake_profile", label: "Fake profile", icon: UserX },
                                        { value: "other", label: "Other", icon: Flag }
                                    ].map((reason) => {
                                        const Icon = reason.icon;
                                        return (
                                            <div key={reason.value} className="relative">
                                                <input
                                                    type="radio"
                                                    id={reason.value}
                                                    name="reason"
                                                    value={reason.value}
                                                    checked={reportData.reason === reason.value}
                                                    onChange={handleInputChange}
                                                    className="hidden peer"
                                                    disabled={isSubmitting}
                                                />
                                                <label
                                                    htmlFor={reason.value}
                                                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${reportData.reason === reason.value ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:bg-gray-50'}`}
                                                >
                                                    <Icon className={`h-5 w-5 ${reportData.reason === reason.value ? 'text-purple-700' : 'text-gray-500'}`} />
                                                    <span>{reason.label}</span>
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div>
                                <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
                                    Additional details (optional)
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={reportData.description}
                                    onChange={handleInputChange}
                                    placeholder="Please provide any additional information that might help us investigate..."
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Evidence Upload */}
                            <div>
                                <label htmlFor="evidence" className="block text-lg font-medium text-gray-700 mb-2">
                                    Upload evidence (optional)
                                </label>
                                <div className="flex items-center gap-4">
                                    <label className="cursor-pointer">
                                        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 border border-gray-300">
                                            Choose File
                                        </span>
                                        <input
                                            type="file"
                                            id="evidence"
                                            name="evidence"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            disabled={isSubmitting}
                                            accept="image/*,.pdf"
                                        />
                                    </label>
                                    <span className="text-sm text-gray-500">
                                        {reportData.evidence ? reportData.evidence.name : "No file chosen"}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    You can upload screenshots or documents (JPG, PNG, PDF up to 5MB)
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Flag className="h-5 w-5" />
                                            Submit Report
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-800 text-lg mb-2">What happens after you report someone?</h3>
                    <ul className="list-disc pl-5 space-y-2 text-blue-700">
                        <li>Our safety team will review your report</li>
                        <li>We'll investigate the reported account</li>
                        <li>You won't see the reported user in your matches</li>
                        <li>We'll notify you of any actions taken (without sharing details)</li>
                    </ul>
                </div>
            </main>

            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
}