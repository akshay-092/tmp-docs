import React from "react";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import { Linkedin, Twitter } from "react-feather";
import { DiscordIcon } from "@site/src/icons";
const footerData = require("../../data/footer.json");

export default function HomeFooter({ className }: { className?: string }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          "mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8",
          className
        )}>
        <div>
          <ThemedImage
            sources={{
              light: footerData.logo.light,
              dark: footerData.logo.dark,
            }}
            alt={footerData.logo.alt}
            className="h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href={footerData.discordLink} aria-label="Discord community">
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href={footerData.twitterLink} aria-label="Twitter">
            <Twitter className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href={footerData.linkedinLink} aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; {footerData.copyright}
        </div>
      </div>
    </footer>
  );
}
