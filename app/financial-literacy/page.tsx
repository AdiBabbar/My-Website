"use client"

import type React from "react"

import { useState } from "react"
import {
  DollarSign,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Send,
  CheckCircle,
  Mail,
  Users,
  Star,
  Menu,
  X,
} from "lucide-react"

export default function FinancialLiteracyArchive() {
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
            <div className="text-center md:text-left">
              <div className="mb-6 inline-block bg-red-100 text-red-700 text-lg px-4 py-2 rounded-full">
                🎉 FREE Workshops!
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Financial Literacy for
                <span className="text-emerald-600 block">Young Minds</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Smart Save Jr. empowers youth with essential money skills through engaging, interactive workshops. Give
                your child the financial foundation they need to succeed in life!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("signup")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Join Our Next Workshop - FREE!
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 w-full flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-emerald-100">
                    <div className="w-72 h-72 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center">
                      <PiggyBank className="h-40 w-40 text-emerald-500" />
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <DollarSign className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="h-10 w-10 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Smart Save Jr.</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're on a mission to empower the next generation with financial literacy skills that will serve them for
              life.
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
                  Hi! I'm Aditya Babbar, founder of Smart Save Jr. My passion for finance and seeing young people
                  struggle with basic money concepts inspired me to create this platform. I believe financial education
                  should be accessible, engaging, and relevant for today's youth.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Interactive Learning</h4>
                  <p className="text-slate-600">
                    Hands-on activities and real-world scenarios make learning fun and memorable.
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
                    Limited class sizes ensure personalized attention and meaningful discussions.
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
                    All our workshops are free because we believe financial education should be accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Workshop Topics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial education covering all the essentials young people need to know
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-12 w-12 text-white" />,
                title: "Money Fundamentals",
                description:
                  "Master the basics: What is money, needs vs wants, and smart budgeting with the 50/30/20 rule. Build a strong foundation for lifelong financial success.",
                color: "bg-emerald-500",
                bgColor: "bg-emerald-50",
              },
              {
                icon: <CreditCard className="h-12 w-12 text-white" />,
                title: "Financial Tools & Technology",
                description:
                  "Explore modern banking, digital wallets, debit cards, and payment systems. Learn how to safely navigate today's financial technology landscape.",
                color: "bg-blue-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-white" />,
                title: "Building Wealth & Entrepreneurship",
                description:
                  "Discover how to create income through entrepreneurship, make smart financial decisions, and apply everything you've learned to real-world scenarios.",
                color: "bg-purple-500",
                bgColor: "bg-purple-50",
              },
            ].map((workshop, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${workshop.bgColor}`}
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
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block bg-red-100 text-red-700 text-lg px-6 py-3 rounded-full">
              🎉 100% FREE - No Hidden Costs!
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Join Our Next Workshop</h2>
            <p className="text-xl text-slate-600">
              Sign up your child for our upcoming financial literacy workshop and give them the tools for lifelong
              financial success
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
                    Thank you for signing up! We'll send you workshop details and reminders via email.
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
                    <label htmlFor="signupType" className="block text-lg font-medium text-slate-700 mb-2">
                      Who is signing up?
                    </label>
                    <select
                      id="signupType"
                      name="signupType"
                      required
                      className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="student">Student</option>
                      <option value="parent">Parent/Guardian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="age" className="block text-lg font-medium text-slate-700 mb-2">
                        Student Age
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Your age"
                        required
                        min="8"
                        max="14"
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="school" className="block text-lg font-medium text-slate-700 mb-2">
                        School
                      </label>
                      <input
                        id="school"
                        name="school"
                        type="text"
                        placeholder="Your school or college"
                        className="w-full h-14 text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-lg font-medium text-slate-700 mb-2">
                      What interests you most about financial literacy?
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="Tell us what you'd like to learn about money management, investing, saving, etc..."
                      className="w-full text-lg border-2 border-slate-200 focus:border-emerald-500 rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xl h-16 font-semibold rounded-lg transition-colors"
                  >
                    Sign Me Up - It's FREE!
                  </button>

                  <p className="text-center text-slate-500">
                    No spam, no cost, no commitment. Just valuable financial education!
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
            <p className="text-slate-300 mb-6 text-lg">Empowering the next generation with financial literacy skills</p>
            <div className="flex justify-center space-x-8 text-sm text-slate-400 mb-6">
              <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">
                Home
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
            </div>
            <p className="text-slate-500 text-sm">© 2025 Smart Save Jr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
