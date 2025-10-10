"use client";

import React, { useEffect, useState } from "react";
import { checkIsCompleted, markCompleted } from "@/utils/DashboardUtils";

interface ModuleCompleteButtonProps {
  moduleId: string;
  email: string;
}

export const ModuleCompleteButton: React.FC<ModuleCompleteButtonProps> = ({ moduleId, email }) => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isCompleted = async () => {
      const success = await checkIsCompleted({ moduleId, email });
      if (success) setCompleted(true);
    };
    isCompleted();
  }, []);

  const handleComplete = async () => {
    setLoading(true);
    const success = await markCompleted({ moduleId: moduleId, email });
    setLoading(false);

    if (success) setCompleted(true);
  };

  return (
    <button
      onClick={handleComplete}
      disabled={completed || loading}
      className={`px-6 py-3 rounded ${
        completed ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {loading ? "Saving..." : completed ? "Module Completed ✅" : "Mark Module as Completed"}
    </button>
  );
};
