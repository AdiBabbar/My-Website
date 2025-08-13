"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import {
  Camera,
  Video,
  PiggyBank,
  Send,
  CheckCircle,
  Mail,
  Users,
  Star,
  Menu,
  X,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">Smart Save Jr.</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "upcoming", label: "Upcoming" },
                { id: "about", label: "About" },
                { id: "workshops", label: "Workshops" },
                { id: "signup", label: "Sign Up" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              {[
                { id: "home", label: "Home" },
                { id: "upcoming", label: "Upcoming" },
                { id: "about", label: "About" },
                { id: "workshops", label: "Workshops" },
                { id: "signup", label: "Sign Up" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="mb-6 inline-block bg-red-100 text-red-700 text-lg px-4 py-2 rounded-full">
                🎉 FREE Workshops!
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Creative Skills for
                <span className="text-emerald-600 block">Everyone</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Smart Save Jr. empowers people with essential creative skills through engaging, hands-on workshops.
                Discover photography and videography in a fun, supportive environment!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("upcoming")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Upcoming Workshops
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in-right animation-delay-200">
              <div className="relative h-96 w-full flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-emerald-100">
                    <div className="w-72 h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center">
                      <PiggyBank className="h-40 w-40 text-emerald-500" />
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Camera className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Video className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Upcoming Workshops</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our hands-on creative workshops and learn new skills in a fun, supportive environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Photography Workshop */}
            <div className="bg-red-50 border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-left">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/photography-workshop-banner.png"
                  alt="Photography workshop with professional camera equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    August 20 - 22
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Intro to Photography</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Learn the fundamentals of photography including composition, lighting, and camera settings. Perfect
                  for beginners who want to take better photos with any camera.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-red-500" />
                    <span>August 20 - 22</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <span>12:00 PM - 1:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Online Workshop</span>
                  </div>
                </div>
                <Link
                  href="/photography"
                  className="w-full bg-red-500 hover:bg-red-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors block"
                >
                  Learn More & Sign Up
                </Link>
              </div>
            </div>

            {/* Videography Workshop */}
            <div className="bg-blue-50 border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-right animation-delay-200">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/videography-workshop-banner.png"
                  alt="Videography workshop with professional video equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    August 20 - 22
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Intro to Videography</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Discover the art of video creation from planning to editing. Learn about storytelling, camera
                  movement, and basic editing techniques to create engaging videos.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>August 20 - 22</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>1:30 PM - 2:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>Online Workshop</span>
                  </div>
                </div>
                <Link
                  href="/videography"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors block"
                >
                  Learn More & Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Smart Save Jr.</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're on a mission to empower people with practical creative skills that will serve them for life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    AB
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Aditya Babbar</h3>
                    <p className="text-emerald-600 font-medium">Founder & Lead Instructor</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Hi! I'm Aditya Babbar, founder of Smart Save Jr. My passion for creative education and helping people
                  develop new skills inspired me to create this platform. I believe learning should be accessible,
                  engaging, and fun for everyone.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Hands-On Learning</h4>
                  <p className="text-slate-600">
                    Interactive workshops with practical exercises that help you learn by doing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Small Groups</h4>
                  <p className="text-slate-600">
                    Limited class sizes ensure personalized attention and meaningful feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Completely Free</h4>
                  <p className="text-slate-600">
                    All our workshops are free because we believe creative education should be accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in-up animation-delay-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Workshop Topics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive creative education covering essential skills for modern content creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-12 w-12 text-white" />,
                title: "Photography Fundamentals",
                description:
                  "Master composition, lighting, and camera settings. Learn to capture compelling images with any camera, from smartphones to DSLRs.",
                color: "bg-red-500",
                bgColor: "bg-red-50",
              },
              {
                icon: <Video className="h-12 w-12 text-white" />,
                title: "Video Production",
                description:
                  "Explore storytelling, camera movement, and editing techniques. Create engaging videos from concept to final cut.",
                color: "bg-blue-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: <Star className="h-12 w-12 text-white" />,
                title: "Creative Development",
                description:
                  "Build your creative confidence and develop your unique style. Learn to share your work and connect with audiences.",
                color: "bg-purple-500",
                bgColor: "bg-purple-50",
              },
            ].map((workshop, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${workshop.bgColor} animate-fade-in-up ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""}`}
              >
                <div className="p-8">
                  <div
                    className={`w-20 h-20 ${workshop.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    {workshop.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{workshop.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block bg-red-100 text-red-700 text-lg px-6 py-3 rounded-full">
              🎉 100% FREE - No Hidden Costs!
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Stay Updated</h2>
            <p className="text-xl text-slate-600">
              Sign up to receive notifications about upcoming workshops and new creative learning opportunities
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <div className="p-8 md:p-12">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">You're All Set!</h3>
                  <p className="text-xl text-slate-600">
                    Thank you for signing up! We'll send you updates about upcoming workshops.
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
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors"
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
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors"
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
                      className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-lg font-medium text-slate-700 mb-2">
                      What interests you most?
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="Photography, videography, or other creative skills you'd like to learn..."
                      className="w-full text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xl h-16 font-semibold rounded-lg transition-colors"
                  >
                    Stay Updated - It's FREE!
                  </button>

                  <p className="text-center text-slate-500">
                    No spam, no cost, no commitment. Just updates about creative workshops!
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-600">Have questions about our workshops? We'd love to hear from you!</p>
          </div>

          <div className="border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-lg font-medium text-slate-700 mb-2">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full h-12 border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-lg font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full h-12 border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-lg font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Your message..."
                        required
                        className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                        rows={5}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                        <p className="text-slate-600">savesmartjr@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("upcoming")} className="hover:text-white transition-colors">
                Upcoming
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("workshops")} className="hover:text-white transition-colors">
                Workshops
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                Contact
              </button>
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
