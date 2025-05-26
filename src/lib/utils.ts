import { type ClassValue, clsx } from "clsx";
import { Briefcase, BrifecaseTick, CallCalling } from "iconsax-react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

import { type ChartConfig } from "@/components/ui/chart";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCallDistributionConfig(
  data: CallDistribution[]
): ChartConfig {
  return data.reduce<ChartConfig>(
    (config, { business }, idx) => {
      const label = business.charAt(0).toUpperCase() + business.slice(1);

      const color = `var(--chart-${idx + 1})`;

      return {
        ...config,
        [business.toLowerCase()]: { label, color },
      };
    },
    {
      calls: { label: "Calls" },
    }
  );
}

export function formatDashboardStats(data: DashboardStats) {
  return [
    {
      id: 1,
      name: "Total Businesses",
      amount: data.total_businesses,
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Active Businesses",
      amount: data.active_businesses,
      icon: BrifecaseTick,
    },
    {
      id: 3,
      name: "Calls Today",
      amount: data.calls_today,
      icon: CallCalling,
    },
  ];
}

export function formatBusinessStats(data: BusinessStats) {
  return [
    {
      id: 1,
      name: "Total Number of Calls",
      amount: data.totalCalls,
      icon: CallCalling,
    },
    {
      id: 2,
      name: "Number of Success Calls",
      amount: data.successCalls,
      icon: CallCalling,
    },
    {
      id: 3,
      name: "Number of Failed Calls",
      amount: data.failedCalls,
      icon: CallCalling,
    },
  ];
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text) {
    return false;
  }

  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to Clipboard!");
      return true;
    } catch (err) {
      toast.error((err as Error).message);
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!successful) {
      toast.error("copyToClipboard: execCommand('copy') returned false");
    }

    toast.success("Copied to Clipboard!");
    return successful;
  } catch (err) {
    toast.error((err as Error).message);
    return false;
  }
}
