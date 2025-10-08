"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Lock, Eye, EyeOff, Edit2, Save, Loader } from "lucide-react";
import { updateUserProfile } from "@/utils/DashboardUtils";
import { ProfileModalProps } from "@/types/interface";

export const ProfileModal = ({ isOpen, onClose, user, onUserUpdate }: ProfileModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.name ?? "",
    email: user?.email ?? "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.name ?? "",
        email: user.email ?? "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);

    const updatedUser = await updateUserProfile({
      email: formData.email,
      username: formData.username,
      password: formData.password || undefined,
    });

    if (updatedUser) {
      setIsEditing(false);

      // update modal state
      setFormData({
        username: updatedUser.username,
        email: updatedUser.email,
        password: "",
      });

      // propagate to Header
      onUserUpdate?.({
        name: updatedUser.username,
        email: updatedUser.email,
      });
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      username: user?.name ?? "",
      email: user?.email ?? "",
      password: "",
    });
    setShowPassword(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient accent */}
            <div className="relative h-2 bg-gradient-to-r from-primary via-accent to-primary">
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-br from-primary/5 to-accent/5 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-lg font-bold text-white shadow-sm sm:h-14 sm:w-14">
                  {formData.username?.charAt(0) || "?"}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary sm:text-2xl">Profile Settings</h2>
                  <p className="text-sm text-gray-600">Manage your account information</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 text-gray-600 transition-all hover:bg-white hover:text-primary hover:shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6 sm:p-8">
              <form className="space-y-5">
                {/* Username Field */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <User className="h-4 w-4" />
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username ?? ""}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3.5 text-primary transition-all placeholder:text-gray-400 focus:outline-none ${
                        isEditing
                          ? "border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
                          : "border-gray-100 bg-gray-50 cursor-not-allowed"
                      }`}
                      placeholder="Enter your username"
                    />
                    {!isEditing && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Lock className="h-4 w-4" />
                      </div>
                    )}
                    {isEditing && formData.username && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email ?? ""}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3.5 text-primary transition-all placeholder:text-gray-400 focus:outline-none ${
                        isEditing
                          ? "border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
                          : "border-gray-100 bg-gray-50 cursor-not-allowed"
                      }`}
                      placeholder="Enter your email"
                    />
                    {!isEditing && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Lock className="h-4 w-4" />
                      </div>
                    )}
                    {isEditing && formData.email && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <Lock className="h-4 w-4" />
                    Password
                    {!isEditing && (
                      <span className="ml-auto text-xs font-normal text-gray-500">
                        (Hidden for security)
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password ?? ""}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3.5 pr-12 text-primary transition-all placeholder:text-gray-400 focus:outline-none ${
                        isEditing
                          ? "border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
                          : "border-gray-100 bg-gray-50 cursor-not-allowed"
                      }`}
                      placeholder={isEditing ? "Enter new password" : "••••••••"}
                    />
                    {isEditing && (
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-primary"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    )}
                    {!isEditing && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Lock className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <p className="mt-2 text-xs text-gray-500">
                      Leave blank to keep current password
                    </p>
                  )}
                </div>

                {/* Info Box */}
                {!isEditing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-accent/10 p-4"
                  >
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-primary">💡 Tip:</span> Click the "Edit
                      Profile" button to update your information.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                {!isEditing ? (
                  <>
                    <button
                      onClick={onClose}
                      className="order-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:order-1"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="order-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg sm:order-2"
                    >
                      <Edit2 className="h-4 w-4" />
                      Edit Profile
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleCancel}
                      disabled={loading}
                      className="order-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:order-1"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="order-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:order-2"
                    >
                      {loading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
