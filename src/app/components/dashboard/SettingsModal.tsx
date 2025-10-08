"use client";

import { deleteAcc } from "@/utils/auth";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, AlertTriangle, Loader, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const SettingsModal = ({ isOpen, onClose, email }: SettingsModalProps) => {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const success = await deleteAcc(email);

      if (success) {
        toast.success("Account deleted successfully");
        setTimeout(() => {
          window.location.href = "/signup";
        }, 1000);
      } else {
        toast.error("Failed to delete account");
        setLoading(false);
      }
    } catch (error) {
      toast.error(`${error} || An error occurred`);
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setConfirm(false);
      onClose();
    }
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
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient accent */}
            <div className="relative h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-br from-red-50 to-orange-50 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-sm sm:h-14 sm:w-14">
                  <ShieldAlert className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-700 sm:text-2xl">Account Settings</h2>
                  <p className="text-sm text-gray-600">Manage your account preferences</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                disabled={loading}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 text-gray-600 transition-all hover:bg-white hover:text-red-600 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Warning Section */}
              <div className="mb-6 rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-base font-bold text-red-800">Danger Zone</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Deleting your account is{" "}
                  <span className="font-bold text-red-600">permanent and irreversible</span>. All
                  your data, progress, and course access will be permanently lost.
                </p>
              </div>

              {/* Consequences List */}
              <div className="mb-6 space-y-2.5">
                <p className="text-sm font-semibold text-gray-900">What you'll lose:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-600" />
                    </div>
                    <span>All course progress and completed modules</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-600" />
                    </div>
                    <span>Personal information and profile data</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-600" />
                    </div>
                    <span>Access to all learning materials</span>
                  </div>
                </div>
              </div>

              {/* Account Email Display */}
              <div className="mb-6 rounded-xl bg-gray-50 p-4">
                <p className="mb-1 text-xs font-medium text-gray-500">Account to be deleted:</p>
                <p className="font-mono text-sm font-semibold text-gray-900">{email}</p>
              </div>

              {/* Action Buttons */}
              <AnimatePresence mode="wait">
                {!confirm ? (
                  <motion.button
                    key="delete-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={() => setConfirm(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete My Account
                  </motion.button>
                ) : (
                  <motion.div
                    key="confirm-section"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    {/* Confirmation Message */}
                    <div className="rounded-xl bg-amber-50 p-4 ring-1 ring-amber-200">
                      <p className="text-center text-sm font-semibold text-amber-900">
                        Are you absolutely sure? This cannot be undone!
                      </p>
                    </div>

                    {/* Confirm Button */}
                    <button
                      onClick={handleDelete}
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          Deleting Account...
                        </>
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4" />
                          Yes, Delete Forever
                        </>
                      )}
                    </button>

                    {/* Cancel Button */}
                    <button
                      onClick={() => setConfirm(false)}
                      disabled={loading}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      No, Keep My Account
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Note */}
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 sm:px-8">
              <p className="text-center text-xs text-gray-500">
                Need help instead?{" "}
                <a
                  href="/support"
                  className="font-medium text-primary transition-colors hover:text-accent"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
