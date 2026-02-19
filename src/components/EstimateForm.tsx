"use client";

import { FormEvent, useState } from "react";

import { siteContent } from "@/content/site";
import { serviceTypeOptions, type EstimateResponse, type ServiceType } from "@/types/estimate";

type FormState = {
  name: string;
  phone: string;
  address: string;
  serviceType: ServiceType;
  details: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  address: "",
  serviceType: "House Wash",
  details: "",
  website: ""
};

export function EstimateForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});
    setStatus("loading");
    setStatusMessage("Sending your estimate request...");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const payload = (await response.json()) as EstimateResponse;

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setStatusMessage(payload.error || "Could not submit your request. Please try again.");
        setFieldErrors(payload.fieldErrors || {});
        return;
      }

      setStatus("success");
      setStatusMessage("Thanks. Your free estimate request was sent. We will follow up shortly.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusMessage("Network issue. Please try again or contact us directly.");
    }
  }

  return (
    <section id="estimate" className="section" aria-labelledby="estimate-title">
      <div className="shell estimate-grid">
        <div>
          <h2 id="estimate-title">Request Your Free Estimate</h2>
          <p className="section-lead">
            Tell us a little about your project and we will send pricing details fast.
          </p>
          <div className="contact-links">
            <a href={`tel:${siteContent.contact.phoneE164}`}>{siteContent.ctaSecondaryCall}</a>
            <a href={`sms:${siteContent.contact.smsE164}`}>{siteContent.ctaSecondaryText}</a>
          </div>
        </div>

        <form className="card estimate-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
          {fieldErrors.name && <p className="field-error">{fieldErrors.name}</p>}

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            required
          />
          {fieldErrors.phone && <p className="field-error">{fieldErrors.phone}</p>}

          <label htmlFor="address">Property Address</label>
          <input
            id="address"
            name="address"
            autoComplete="street-address"
            value={form.address}
            onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
            required
          />
          {fieldErrors.address && <p className="field-error">{fieldErrors.address}</p>}

          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={form.serviceType}
            onChange={(event) => setForm((prev) => ({ ...prev, serviceType: event.target.value as ServiceType }))}
          >
            {serviceTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.serviceType && <p className="field-error">{fieldErrors.serviceType}</p>}

          <label htmlFor="details">Project Details</label>
          <textarea
            id="details"
            name="details"
            rows={5}
            value={form.details}
            onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
            required
          />
          {fieldErrors.details && <p className="field-error">{fieldErrors.details}</p>}

          <div className="hp-field" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
            />
          </div>

          <button className="btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Request Free Estimate"}
          </button>

          {status !== "idle" && (
            <p className={`status-msg ${status === "success" ? "status-success" : "status-error"}`}>{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
