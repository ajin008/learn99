"use client";

import { getStudyMaterial } from "@/utils/DashboardUtils";
import React, { useEffect, useState } from "react";

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
    <div className="p-4 border rounded-lg mb-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-800 whitespace-pre-line mb-4">{answer}</p>

      {loading && <p className="text-gray-500">Loading study material...</p>}

      {!loading && materials?.video_url && (
        <div className="mb-4">
          <video controls className="w-full rounded-lg shadow">
            <source src={materials.video_url} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      )}

      {!loading && materials?.screenshots?.length ? (
        <div className="grid grid-cols-2 gap-2">
          {materials.screenshots.map((src, idx) => (
            <img key={idx} src={src} alt={`screenshot-${idx}`} className="rounded-lg shadow" />
          ))}
        </div>
      ) : null}
    </div>
  );
};
