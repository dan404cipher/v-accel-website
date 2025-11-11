import { ComponentType } from "react";

import { EdtechExperience } from "@/features/services/edtech";
import { FintechExperience } from "@/features/services/fintech";
import { HealthcareExperience } from "@/features/services/healthcare";

import type { ServiceSlug } from "./serviceData";

export const servicePageComponents: Partial<Record<ServiceSlug, ComponentType>> = {
  fintech: FintechExperience,
  edtech: EdtechExperience,
  healthcare: HealthcareExperience,
};

