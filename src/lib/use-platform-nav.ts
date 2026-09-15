"use client";

import { useEffect, useState } from "react";

export interface PlatformNavItem {
  name: string;
  desc: string;
  href: string;
}

// Shared by the header dropdown, mobile menu, and footer links so "Platform OS"
// navigation always reflects whatever is published in the CMS.
export function usePlatformNavItems(): PlatformNavItem[] {
  const [items, setItems] = useState<PlatformNavItem[]>([]);

  useEffect(() => {
    fetch("/api/platforms")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setItems(
            json.data.map((p: any) => ({
              name: p.name,
              desc: p.heroTitle || "",
              href: `/platform-detail?slug=${p.slug}`,
            }))
          );
        }
      })
      .catch(console.error);
  }, []);

  return items;
}
