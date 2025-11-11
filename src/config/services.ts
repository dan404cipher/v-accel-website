import {
  type ServiceCapability,
  type ServiceConfigEntry,
  type ServiceEngagement,
  type ServiceMetric,
  type ServiceSlug,
  type ServiceTheme,
  getServiceBySlug,
  services,
} from "@/app/(marketing)/services/[slug]/serviceData";

export type { ServiceCapability, ServiceEngagement, ServiceMetric, ServiceSlug, ServiceTheme };

export type Sector = ServiceConfigEntry;

export const sectors = services;

export function getSectorBySlug(slug: string): Sector | undefined {
  return getServiceBySlug(slug);
}

