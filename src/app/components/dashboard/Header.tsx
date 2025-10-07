"use client";

import { useState, useEffect, useRef } from "react";
import { LogOut, User, Settings, ChevronDown, Bell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logoutUser } from "@/utils/auth";
import { fetchUser } from "@/utils/DashboardUtils";
import { HeaderProps } from "@/types/types";

export const Header = ({ email }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "Loading...",
    email,
  });

  const handleLogout = async () => {
    const success = await logoutUser();
    if (success) window.location.href = "/login";
  };

  useEffect(() => {
    async function loadUser() {
      const data = await fetchUser(email);
      if (data) {
        setUser({ name: data.username, email: data.email });
      }
    }
    if (email) loadUser();
  }, [email]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="mb-6 sm:mb-8 lg:mb-12">
        <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
          {/* Left Section - Greeting */}
          <div className="flex-1 min-w-0">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-success/30 px-2.5 py-1 text-xs font-medium text-green-900 sm:gap-2 sm:px-4 sm:py-1.5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-green-600"></span>
              </span>
              <span className="hidden xs:inline">Active Learning</span>
              <span className="xs:hidden">Active</span>
            </div>
            <h1 className="mb-1 text-xl font-bold leading-tight text-primary sm:mb-2 sm:text-2xl md:text-3xl lg:text-4xl">
              Welcome back,
              <br className="sm:hidden" /> {user.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              <span className="hidden sm:inline">Continue your journey in </span>
              <span className="font-semibold text-accent">Vibe Coding</span>
              <span className="hidden md:inline"> for Non-Techies</span>
            </p>
          </div>

          {/* Right Section - Actions */}
          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
            {/* Notifications - Desktop */}
            <button className="relative hidden h-10 w-10 items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 transition-all hover:bg-white hover:shadow-md sm:flex sm:h-11 sm:w-11">
              <Bell className="h-5 w-5 text-primary" />
              <span className="absolute right-2 top-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 transition-all hover:bg-white hover:shadow-md sm:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>

            {/* Profile Dropdown - Desktop Only */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl bg-white/60 p-2 backdrop-blur-sm ring-1 ring-black/5 transition-all hover:bg-white hover:shadow-md sm:gap-3 sm:pr-4"
              >
                {/* Avatar */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-white shadow-sm">
                  {user.name.charAt(0)}
                </div>

                {/* User Info */}
                <div className="text-left">
                  <p className="text-sm font-semibold leading-tight text-primary">{user.name}</p>
                  <p className="text-xs leading-tight text-gray-500">Student</p>
                </div>

                {/* Chevron */}
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </motion.div>
              </motion.button>

              {/* Dropdown Menu - Desktop */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
                  >
                    {/* User Info Header */}
                    <div className="border-b border-gray-100 bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-3">
                      <p className="text-sm font-semibold text-primary">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="p-1">
                      <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span>View Profile</span>
                      </button>

                      <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <Settings className="h-4 w-4 text-primary" />
                        </div>
                        <span>Settings</span>
                      </button>

                      <div className="my-1 border-t border-gray-100"></div>

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                          <LogOut className="h-4 w-4 text-red-600" />
                        </div>
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm sm:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="border-b border-gray-100 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-primary">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/60 text-primary transition-colors hover:bg-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* User Profile in Mobile */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-base font-bold text-white shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-primary">{user.name}</p>
                    <p className="truncate text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-4">
                {/* Notifications */}
                <button className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                    <span className="absolute right-1 top-1 flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                  </div>
                  <span>Notifications</span>
                  <span className="ml-auto rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-amber-900">
                    3
                  </span>
                </button>

                <button className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <span>View Profile</span>
                </button>

                <button className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <span>Settings</span>
                </button>

                <div className="my-3 border-t border-gray-100"></div>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <LogOut className="h-5 w-5 text-red-600" />
                  </div>
                  <span>Logout</span>
                </button>
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-gray-50 p-4">
                <p className="text-center text-xs text-gray-500">Vibe Coding © 2025</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
