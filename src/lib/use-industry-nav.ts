"use client";

import { useEffect, useState } from "react";

export interface IndustryNavItem {
  name: string;
  desc: string;
  href: string;
}

// Shared by the header dropdown, mobile menu, and footer links so "Industries"
// navigation always reflects whatever is published in the CMS.
export function useIndustryNavItems(): IndustryNavItem[] {
  const [items, setItems] = useState<IndustryNavItem[]>([]);

  useEffect(() => {
    fetch("/api/industries")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setItems(
            json.data.map((i: any) => ({
              name: i.name,
              desc: i.heroDescription || "",
              href: `/industry/${i.slug}`,
            }))
          );
        }
      })
      .catch(console.error);
  }, []);

  return items;
}
