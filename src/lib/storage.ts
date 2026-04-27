import { ProjectData } from "./types";

const STORAGE_KEY = "detail-maker-project";

export function saveProject(data: ProjectData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadProject(): ProjectData | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as ProjectData;
  } catch {
    return null;
  }
}