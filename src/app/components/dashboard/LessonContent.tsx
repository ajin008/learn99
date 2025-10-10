"use client";

import { getStudyMaterial } from "@/utils/DashboardUtils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, Loader, FileText, X, ZoomIn } from "lucide-react";

interface LessonContentProps {
  id: string;
  title: string;
  answer: string;
}

interface LessonMaterial {
  video_url?: string;
  screenshots?: string[];
}

export const LessonContent: React.FC<LessonContentProps> = ({ id, title, answer }) => {
  const [materials, setMaterials] = useState<LessonMaterial | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getStudyMaterial(id);
      setMaterials(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-md"
      >
        {/* Lesson Header */}
        <div className="border-b border-gray-100 bg-gradient-to-r from-primary/5 to-accent/5 px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-white shadow-sm sm:h-10 sm:w-10"></div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="p-5 sm:p-6">
          {/* Answer Text */}
          <div className="mb-6 rounded-xl bg-gray-50 p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
              <FileText className="h-4 w-4" />
              Lesson Content
            </div>
            <div className="text-sm leading-relaxed text-gray-800 sm:text-base">
              <p className="whitespace-pre-line">{answer}</p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-primary/5 p-6"
            >
              <Loader className="h-5 w-5 animate-spin text-primary" />
              <p className="text-sm font-medium text-primary">Loading study materials...</p>
            </motion.div>
          )}

          {/* Video Section */}
          {!loading && materials?.video_url && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <Play className="h-4 w-4" />
                Video Tutorial
              </div>
              <div className="overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
                <video controls className="w-full bg-black">
                  <source src={materials.video_url} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </motion.div>
          )}

          {/* Screenshots Section */}
          {!loading && materials?.screenshots && materials.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <ImageIcon className="h-4 w-4" />
                Screenshots ({materials.screenshots.length})
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {materials.screenshots.map((src, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 transition-all hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        View Full Size
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* No Materials Message */}
          {!loading &&
            !materials?.video_url &&
            (!materials?.screenshots || materials.screenshots.length === 0) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl bg-accent/10 p-4 text-center"
              >
                <p className="text-sm text-gray-600">
                  No additional study materials available for this lesson.
                </p>
              </motion.div>
            )}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:scale-110 sm:-right-4 sm:-top-4"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="max-h-[90vh] w-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
