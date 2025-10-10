"use client";

import { useEffect, useState } from "react";
import { vibeModules } from "@/lib/modules";
import { getCompletedModules } from "@/utils/DashboardUtils";

export function useModuleProgress(email: string) {
  const [ids, setIds] = useState<string[]>([]);
  const total = vibeModules.length;

  useEffect(() => {
    let alive = true;
    (async () => {
      const list = await getCompletedModules(email);
      console.log("email in hook:", email);
      console.log("completed ids:", list);

      if (alive) setIds(list);
    })();
    return () => {
      alive = false;
    };
  }, [email]);

  return {
    completedIds: ids,
    completed: ids.length,
    total,
    percentage: total ? Math.round((ids.length / total) * 100) : 0,
  };
}
