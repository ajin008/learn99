import type { ComponentType, SVGProps } from "react";
export type VerifyLoginProps = {
  email: string;
  password: string;
};

export type HeaderProps = {
  email: string;
};

export type ModuleMeta = {
  slug: string; // e.g. "m1-intro"
  title: string; // Module title
  summary: string; // Short description for cards
  durationMins: number; // Estimated time in minutes
  order: number; // Display order
};

export type Lesson = {
  id: string;
  title: string;
};

export type DashboardModule = {
  id: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  lessons: Lesson[];
  completed: boolean;
  locked: boolean;
};
