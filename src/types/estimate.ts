export const serviceTypeOptions = [
  "House Wash",
  "Driveway",
  "Deck",
  "Commercial",
  "Other"
] as const;

export type ServiceType = (typeof serviceTypeOptions)[number];

export type EstimateLead = {
  name: string;
  phone: string;
  address: string;
  serviceType: ServiceType;
  details: string;
  website?: string;
};

export type EstimateSuccessResponse = {
  ok: true;
  leadId: string;
};

export type EstimateErrorResponse = {
  ok: false;
  error: string;
  fieldErrors?: Record<string, string>;
};

export type EstimateResponse = EstimateSuccessResponse | EstimateErrorResponse;
