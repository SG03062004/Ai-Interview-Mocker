import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight">
            Master Your Interviews with Confidence
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Practice real-world interview questions, get AI-powered feedback, and land your dream job.
          </p>
          <div className="mt-6">
            <Link href="/dashboard/">
              <Button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition">
                Start Practicing
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">📚 Huge Question Bank</h3>
          <p className="mt-2 text-gray-700">
            Access a curated list of **technical, behavioral, and system design questions** from top companies.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">💡 AI-Powered Insights</h3>
          <p className="mt-2 text-gray-700">
            Get **instant feedback** on your responses, improve your **clarity, structure, and confidence**.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-600">🎯 Mock Interviews</h3>
          <p className="mt-2 text-gray-700">
            Simulate real interviews with **timed practice sessions** to build confidence.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-indigo-100 mt-12">
        <h2 className="text-2xl font-bold text-indigo-700">
          Ready to take your preparation to the next level?
        </h2>
        <p className="mt-2 text-gray-600">
          Start practicing today and get one step closer to your dream job.
        </p>
        <div className="mt-6">
          <Link href="/dashboard/upgrade">
            <Button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition">
              Upgrade Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DashboardHome;
