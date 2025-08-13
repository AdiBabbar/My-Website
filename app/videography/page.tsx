"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { PiggyBank, CheckCircle, Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"

export default function VideographyWorkshop() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mvgqgkar", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormSubmitted(true)
        form.reset()
        setTimeout(() => setFormSubmitted(false), 3000)
      } else {
        alert("There was an issue submitting the form. Please try again.")
      }
    } catch (error) {
      alert("There was a problem submitting the form. Please check your connection and try again.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-slate-600" />
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">Smart Save Jr.</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Workshop Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block bg-blue-100 text-blue-700 text-lg px-4 py-2 rounded-full">
                🎉 FREE Workshop!
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Intro to
                <span className="text-blue-600 block">Videography</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Discover the art of video creation from planning to editing in this online workshop. Learn storytelling
                techniques, camera movement, and basic editing to create engaging videos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">August 20-22, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">1:30 PM - 2:30 PM (1 hour)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Online Workshop</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/videography-banner.png"
                  alt="Videography workshop with professional video equipment"
                  className="w-full h-full object-cover animate-scale-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">What You'll Learn</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Video Planning",
                    description: "Learn to create shot lists, storyboards, and plan your video content effectively.",
                  },
                  {
                    title: "Camera Techniques",
                    description: "Master camera movements, framing, and shooting techniques for dynamic videos.",
                  },
                  {
                    title: "Storytelling Basics",
                    description: "Understand narrative structure and how to engage your audience through video.",
                  },
                  {
                    title: "Audio Fundamentals",
                    description: "Learn the importance of good audio and basic recording techniques.",
                  },
                  {
                    title: "Basic Editing",
                    description: "Introduction to video editing software and essential editing techniques.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Workshop Details</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">What to Bring</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Any video recording device (smartphone, camera, etc.)</li>
                  <li>• Laptop or computer for video editing</li>
                  <li>• Notebook for planning exercises</li>
                  <li>• Creative ideas you'd like to explore!</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Prerequisites</h3>
                <p className="text-slate-600 mb-4">
                  No prior videography experience required! This workshop is perfect for beginners who want to start
                  creating videos or improve their existing skills.
                </p>
                <h3 className="text-xl font-bold text-slate-800 mb-4">After the Workshop</h3>
                <p className="text-slate-600">
                  You'll receive a comprehensive guide with video planning templates, recommended editing software, and
                  practice projects to continue developing your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block bg-blue-100 text-blue-700 text-lg px-6 py-3 rounded-full">
              🎉 100% FREE - Limited Spots Available!
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Sign Up for Videography Workshop</h2>
            <p className="text-xl text-slate-600">
              Reserve your spot in our upcoming videography workshop and start creating compelling videos
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="p-8 md:p-12">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">You're Registered!</h3>
                  <p className="text-xl text-slate-600">
                    Thank you for signing up! We'll send you the workshop link and materials via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-lg font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        required
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-lg font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        required
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-lg font-medium text-slate-700 mb-2">
                      Video Creation Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors bg-white"
                    >
                      <option value="">Select your level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="equipment" className="block text-lg font-medium text-slate-700 mb-2">
                      What equipment will you be using?
                    </label>
                    <input
                      id="equipment"
                      name="equipment"
                      type="text"
                      placeholder="e.g., iPhone, Android phone, DSLR, camcorder, etc."
                      className="w-full h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-lg font-medium text-slate-700 mb-2">
                      What type of videos are you interested in creating? (Optional)
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      placeholder="Tell us about your video goals - social media content, documentaries, tutorials, etc..."
                      className="w-full text-lg border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl h-16 font-semibold rounded-lg transition-colors"
                  >
                    Register for Videography Workshop
                  </button>

                  <p className="text-center text-slate-500">
                    Free workshop with limited spots. We'll send you the workshop details via email.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <PiggyBank className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Smart Save Jr.</h3>
            </div>
            <p className="text-slate-300 mb-6 text-lg">Empowering creativity through accessible education</p>
            <div className="flex justify-center space-x-8 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/photography" className="hover:text-white transition-colors">
                Photography Workshop
              </Link>
              <Link href="/financial-literacy" className="hover:text-white transition-colors">
                Financial Literacy
              </Link>
            </div>
            <p className="text-slate-500 text-sm">© 2025 Smart Save Jr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
