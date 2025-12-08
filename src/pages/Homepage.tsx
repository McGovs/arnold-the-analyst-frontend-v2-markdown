import React from "react";
import { ChatBubbleLeftRightIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  const contactUrl = "https://calendly.com/cian-arnoldtheanalyst/30min";

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      {/* Navbar */}
      <header className="w-full py-4 border-b border-slate-200 bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <span className="text-xl font-semibold text-slate-800">Arnold</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/live-demo" className="text-slate-600 hover:text-slate-900">
              Live Demo
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900">
              About
            </Link>
            <Link to="/support" className="text-slate-600 hover:text-slate-900">
              Support
            </Link>
            <Link to="/privacy" className="text-slate-600 hover:text-slate-900">
              Privacy
            </Link>
          </nav>

          <a
            href="https://slack.com/oauth/v2/authorize?client_id=4380112115109.6603922590664&scope=commands,chat:write,users:read,users:read.email,channels:history,channels:read,groups:history,groups:read,im:history,mpim:history&user_scope="
            className="hidden md:inline-flex items-center bg-white border border-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition"
          >
            Add Arnold to Slack
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="inline-block px-4 py-1 mb-4 text-sm text-green-700 bg-green-100 rounded-full">
          Purpose-built for digital agencies
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Ask your GA4 data anything <br />
          <span className="text-blue-600">— insights in 20 seconds</span>
        </h1>

        <div className="mt-10 mx-auto w-full max-w-3xl h-64 bg-slate-200 rounded-3xl flex items-center justify-center shadow-inner">
          <div className="text-slate-500">
            <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm">Demo GIF goes here</p>
            <p className="text-xs text-slate-400">Place your GIF in /public/demo.gif</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://slack.com/oauth/v2/authorize?client_id=4380112115109.6603922590664&scope=commands,chat:write,users:read,users:read.email,channels:history,channels:read,groups:history,groups:read,im:history,mpim:history&user_scope="
            className="inline-flex items-center bg-white border border-slate-300 px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition"
          >
            Add Arnold to Slack
          </a>

          <Link
            to="/live-demo"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
          >
            Arnold In Action
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="mt-8">
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-700 px-8 py-2 rounded-full text-sm font-medium border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Want more info? Let&apos;s chat
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-4">
          Free to try • Works with any GA4 property
        </p>
      </div>
    </div>
  );
};

export default Homepage;
