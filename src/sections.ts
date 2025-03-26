import type { ComponentProps, ReactNode } from "react";
import {
  JSIcon,
  IonicIcon,
  ReactIcon,
  AndroidIcon,
  FlutterIcon,
  VueIcon,
  AngularIcon,
  SwiftIcon,
  KotlinIcon,
} from "./icons";

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<"svg">) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  // UI Kits
  {
    name: "React",
    docId: "react-chat-ui-kit",
    icon: ReactIcon,
    section: "ui-kits",
  },
  {
    name: "React Native",
    docId: "react-native-chat-ui-kit",
    icon: ReactIcon,
    section: "ui-kits",
  },
  {
    name: "iOS",
    docId: "ios-chat-ui-kit",
    icon: SwiftIcon,
    section: "ui-kits",
  },
  {
    name: "Android",
    docId: "android-chat-ui-kit",
    icon: AndroidIcon,
    section: "ui-kits",
  },
  {
    name: "Flutter",
    docId: "flutter-chat-ui-kit",
    icon: FlutterIcon,
    section: "ui-kits",
  },
  {
    name: "Angular",
    docId: "angular-chat-ui-kit",
    icon: AngularIcon,
    section: "ui-kits",
  },
  {
    name: "Vue",
    docId: "vue-chat-ui-kit",
    icon: VueIcon,
    section: "ui-kits",
  },
  {
    name: "Kotlin",
    docId: "android-kotlin-chat-ui-kit",
    icon: KotlinIcon,
    section: "ui-kits",
  },
  // SDKs Chat
  {
    name: "JavaScript",
    docId: "javascript-chat-sdk",
    icon: JSIcon,
    section: "sdk",
  },
  {
    name: "React Native",
    docId: "react-native-chat-sdk",
    icon: ReactIcon,
    section: "sdk",
  },
  {
    name: "iOS",
    docId: "ios-chat-sdk",
    icon: SwiftIcon,
    section: "sdk",
  },
  {
    name: "Android",
    docId: "android-chat-sdk",
    icon: AndroidIcon,
    section: "sdk",
  },
  {
    name: "Flutter",
    docId: "flutter-chat-sdk",
    icon: FlutterIcon,
    section: "sdk",
  },
  {
    name: "Ionic",
    docId: "ionic-chat-sdk",
    icon: IonicIcon,
    section: "sdk",
  },
  // SDKs Call
  {
    name: "React",
    docId: "react-call-sdk",
    icon: ReactIcon,
    section: "sdk-call",
  },
  {
    name: "Flutter",
    docId: "flutter-call-sdk",
    icon: FlutterIcon,
    section: "sdk-call",
  },
  {
    name: "React Native",
    docId: "react-native-call-sdk",
    icon: ReactIcon,
    section: "sdk-call",
  },
  {
    name: "iOS",
    docId: "ios-call-sdk",
    icon: SwiftIcon,
    section: "sdk-call",
  },
  {
    name: "Android",
    docId: "android-call-sdk",
    icon: AndroidIcon,
    section: "sdk-call",
  },
  {
    name: "Ionic",
    docId: "ionic-call-sdk",
    icon: IonicIcon,
    section: "sdk-call",
  },
  // Widgets
  {
    name: "Chat Widgets",
    docId: "chat-widgets",
    icon: JSIcon,
    section: "widgets",
  },
  // More
  {
    name: "Extensions",
    docId: "extensions",
    icon: JSIcon,
    section: "extensions",
  },
  {
    name: "Webhooks",
    docId: "webhooks",
    icon: JSIcon,
    section: "webhooks",
  },
  {
    name: "AI",
    docId: "ai",
    icon: JSIcon,
    section: "ai",
  },
  {
    name: "Notifications",
    docId: "notifications",
    icon: JSIcon,
    section: "notifications",
  },
  {
    name: "Bots",
    docId: "bots",
    icon: JSIcon,
    section: "bots",
  },
  {
    name: "AI",
    docId: "ai",
    icon: JSIcon,
    section: "ai",
  },
  {
    name: "Platform",
    docId: "platform",
    icon: JSIcon,
    section: "platform",
  },
  // Moderation
  {
    name: "Moderation",
    docId: "moderation",
    icon: JSIcon,
    section: "moderation",
  },
];

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: "UI Kits",
      section: "ui-kits",
      description: "Description for UI Kits",
    },
    {
      name: "SDKs",
      section: "sdk",
      description: "Description for SDKs",
    },
    {
      name: "SDKs Call",
      section: "sdk-call",
      description: "Description for SDKs Call",
    },
    {
      name: "Widgets",
      section: "widgets",
      description: "Description for Widgets",
    },
  ],
];

export { SECTION_GROUPS, SECTIONS };
