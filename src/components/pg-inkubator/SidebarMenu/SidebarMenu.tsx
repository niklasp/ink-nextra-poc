"use client";

import React from "react";
import Link from "next/link";
import { Sidebar } from "../../../components/Sidebar";
import { useUI } from "../../../hooks";
import { Config } from "../config";
import clsx from "clsx";
export const SidebarMenu: React.FC = () => {
  const { showSidebar, setShowSidebar } = useUI();
  const linkClasses = clsx(
    "rounded-xl hover:bg-brand-gradient active:bg-brand-gradient hover:text-white dark:text-white text-black",
    "block px-6 py-4 text-2xl font-montserrat font-semibold hover:no-underline"
  );

  return (
    <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)}>
      <ul className="m-0 px-2 list-none">
        <li className="p-0 m-0">
          <Link href="/" className={linkClasses}>
            <i className="underline mr-2">View</i>
            ink! Documentation
          </Link>
        </li>

        <li className="pt-2 mx-6 px-0 mb-2 border-b border-solid border-background-700/20 dark:border-background-300/20 border-t-0 border-x-0" />

        <li className="p-0 m-0">
          <a
            href={Config.grantsApplicationURL}
            className={linkClasses}
            target="_blank"
            rel="noreferrer"
          >
            <i className="underline mr-2">Apply</i>
            for an Ecosystem Grant
          </a>
        </li>
      </ul>
    </Sidebar>
  );
};
