import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/api',
    component: ComponentCreator('/docs/api', 'b29'),
    exact: true
  },
  {
    path: '/docs/api-refrence-2',
    component: ComponentCreator('/docs/api-refrence-2', '8a4'),
    exact: true
  },
  {
    path: '/docs/api/v2',
    component: ComponentCreator('/docs/api/v2', 'ce2'),
    exact: true
  },
  {
    path: '/docs/chat',
    component: ComponentCreator('/docs/chat', 'acc'),
    exact: true
  },
  {
    path: '/docs/chat/ui-kits',
    component: ComponentCreator('/docs/chat/ui-kits', 'a34'),
    exact: true
  },
  {
    path: '/docs/faq',
    component: ComponentCreator('/docs/faq', '619'),
    exact: true
  },
  {
    path: '/docs/feedback',
    component: ComponentCreator('/docs/feedback', '2c1'),
    exact: true
  },
  {
    path: '/docs/folder/not_listed',
    component: ComponentCreator('/docs/folder/not_listed', '48e'),
    exact: true
  },
  {
    path: '/docs/search',
    component: ComponentCreator('/docs/search', '320'),
    exact: true
  },
  {
    path: '/docs/ai-chatbots',
    component: ComponentCreator('/docs/ai-chatbots', '5ab'),
    routes: [
      {
        path: '/docs/ai-chatbots',
        component: ComponentCreator('/docs/ai-chatbots', '718'),
        routes: [
          {
            path: '/docs/ai-chatbots',
            component: ComponentCreator('/docs/ai-chatbots', '103'),
            routes: [
              {
                path: '/docs/ai-chatbots/bots',
                component: ComponentCreator('/docs/ai-chatbots/bots', 'd6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-chatbots/instructions',
                component: ComponentCreator('/docs/ai-chatbots/instructions', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-chatbots/non-ai-bots',
                component: ComponentCreator('/docs/ai-chatbots/non-ai-bots', '2df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-chatbots/overview',
                component: ComponentCreator('/docs/ai-chatbots/overview', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/articles',
    component: ComponentCreator('/docs/articles', '533'),
    routes: [
      {
        path: '/docs/articles',
        component: ComponentCreator('/docs/articles', '59a'),
        routes: [
          {
            path: '/docs/articles',
            component: ComponentCreator('/docs/articles', '563'),
            routes: [
              {
                path: '/docs/articles/calendar-scheduling',
                component: ComponentCreator('/docs/articles/calendar-scheduling', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/docker',
                component: ComponentCreator('/docs/articles/docker', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/error-guide',
                component: ComponentCreator('/docs/articles/error-guide', 'd3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/limits',
                component: ComponentCreator('/docs/articles/limits', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/migration-guide',
                component: ComponentCreator('/docs/articles/migration-guide', 'c3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/properties-and-constraints',
                component: ComponentCreator('/docs/articles/properties-and-constraints', '4c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/articles/rate-limits',
                component: ComponentCreator('/docs/articles/rate-limits', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/android',
    component: ComponentCreator('/docs/calling/sdk/android', 'c21'),
    routes: [
      {
        path: '/docs/calling/sdk/android',
        component: ComponentCreator('/docs/calling/sdk/android', '754'),
        routes: [
          {
            path: '/docs/calling/sdk/android',
            component: ComponentCreator('/docs/calling/sdk/android', 'd49'),
            routes: [
              {
                path: '/docs/calling/sdk/android/overview',
                component: ComponentCreator('/docs/calling/sdk/android/overview', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/flutter',
    component: ComponentCreator('/docs/calling/sdk/flutter', '96b'),
    routes: [
      {
        path: '/docs/calling/sdk/flutter',
        component: ComponentCreator('/docs/calling/sdk/flutter', 'fbd'),
        routes: [
          {
            path: '/docs/calling/sdk/flutter',
            component: ComponentCreator('/docs/calling/sdk/flutter', '2f5'),
            routes: [
              {
                path: '/docs/calling/sdk/flutter/overview',
                component: ComponentCreator('/docs/calling/sdk/flutter/overview', '56d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/ionic',
    component: ComponentCreator('/docs/calling/sdk/ionic', '4c6'),
    routes: [
      {
        path: '/docs/calling/sdk/ionic',
        component: ComponentCreator('/docs/calling/sdk/ionic', 'd7a'),
        routes: [
          {
            path: '/docs/calling/sdk/ionic',
            component: ComponentCreator('/docs/calling/sdk/ionic', '1a8'),
            routes: [
              {
                path: '/docs/calling/sdk/ionic/overview',
                component: ComponentCreator('/docs/calling/sdk/ionic/overview', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/ios',
    component: ComponentCreator('/docs/calling/sdk/ios', '44a'),
    routes: [
      {
        path: '/docs/calling/sdk/ios',
        component: ComponentCreator('/docs/calling/sdk/ios', 'bde'),
        routes: [
          {
            path: '/docs/calling/sdk/ios',
            component: ComponentCreator('/docs/calling/sdk/ios', '25b'),
            routes: [
              {
                path: '/docs/calling/sdk/ios/overview',
                component: ComponentCreator('/docs/calling/sdk/ios/overview', '423'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/react-native',
    component: ComponentCreator('/docs/calling/sdk/react-native', 'e95'),
    routes: [
      {
        path: '/docs/calling/sdk/react-native',
        component: ComponentCreator('/docs/calling/sdk/react-native', 'b88'),
        routes: [
          {
            path: '/docs/calling/sdk/react-native',
            component: ComponentCreator('/docs/calling/sdk/react-native', '485'),
            routes: [
              {
                path: '/docs/calling/sdk/react-native/overview',
                component: ComponentCreator('/docs/calling/sdk/react-native/overview', '7a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/calling/sdk/react',
    component: ComponentCreator('/docs/calling/sdk/react', 'db7'),
    routes: [
      {
        path: '/docs/calling/sdk/react',
        component: ComponentCreator('/docs/calling/sdk/react', '0f9'),
        routes: [
          {
            path: '/docs/calling/sdk/react',
            component: ComponentCreator('/docs/calling/sdk/react', '791'),
            routes: [
              {
                path: '/docs/calling/sdk/react/overview',
                component: ComponentCreator('/docs/calling/sdk/react/overview', 'ecf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/extensions',
    component: ComponentCreator('/docs/extensions', '4c7'),
    routes: [
      {
        path: '/docs/extensions',
        component: ComponentCreator('/docs/extensions', 'c3a'),
        routes: [
          {
            path: '/docs/extensions',
            component: ComponentCreator('/docs/extensions', 'aae'),
            routes: [
              {
                path: '/docs/extensions/avatars',
                component: ComponentCreator('/docs/extensions/avatars', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/bitly',
                component: ComponentCreator('/docs/extensions/bitly', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/chatwoot',
                component: ComponentCreator('/docs/extensions/chatwoot', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/collaborative-document',
                component: ComponentCreator('/docs/extensions/collaborative-document', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/collaborative-whiteboard',
                component: ComponentCreator('/docs/extensions/collaborative-whiteboard', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/disappearing-messages',
                component: ComponentCreator('/docs/extensions/disappearing-messages', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/email-replies',
                component: ComponentCreator('/docs/extensions/email-replies', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/emojis',
                component: ComponentCreator('/docs/extensions/emojis', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/end-to-end-encryption',
                component: ComponentCreator('/docs/extensions/end-to-end-encryption', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/gfycat',
                component: ComponentCreator('/docs/extensions/gfycat', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/giphy',
                component: ComponentCreator('/docs/extensions/giphy', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/intercom',
                component: ComponentCreator('/docs/extensions/intercom', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/link-preview',
                component: ComponentCreator('/docs/extensions/link-preview', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/mentions',
                component: ComponentCreator('/docs/extensions/mentions', 'da7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/message-shortcuts',
                component: ComponentCreator('/docs/extensions/message-shortcuts', '8e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/message-translation',
                component: ComponentCreator('/docs/extensions/message-translation', '9d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/moderation-extensions',
                component: ComponentCreator('/docs/extensions/moderation-extensions', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/notification-extensions',
                component: ComponentCreator('/docs/extensions/notification-extensions', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/overview',
                component: ComponentCreator('/docs/extensions/overview', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/pin-message',
                component: ComponentCreator('/docs/extensions/pin-message', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/polls',
                component: ComponentCreator('/docs/extensions/polls', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/reactions',
                component: ComponentCreator('/docs/extensions/reactions', 'c64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/reminders',
                component: ComponentCreator('/docs/extensions/reminders', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/rich-media-preview',
                component: ComponentCreator('/docs/extensions/rich-media-preview', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/save-message',
                component: ComponentCreator('/docs/extensions/save-message', 'f47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/smart-replies',
                component: ComponentCreator('/docs/extensions/smart-replies', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/stickers',
                component: ComponentCreator('/docs/extensions/stickers', 'a61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/stickers-stipop',
                component: ComponentCreator('/docs/extensions/stickers-stipop', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/tenor',
                component: ComponentCreator('/docs/extensions/tenor', '63d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/thumbnail-generation',
                component: ComponentCreator('/docs/extensions/thumbnail-generation', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/tinyurl',
                component: ComponentCreator('/docs/extensions/tinyurl', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/video-broadcasting',
                component: ComponentCreator('/docs/extensions/video-broadcasting', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extensions/voice-transcription',
                component: ComponentCreator('/docs/extensions/voice-transcription', '779'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/fundamentals',
    component: ComponentCreator('/docs/fundamentals', 'f49'),
    routes: [
      {
        path: '/docs/fundamentals',
        component: ComponentCreator('/docs/fundamentals', 'ce0'),
        routes: [
          {
            path: '/docs/fundamentals',
            component: ComponentCreator('/docs/fundamentals', '95a'),
            routes: [
              {
                path: '/docs/fundamentals/ai-user-copilot/conversation-starter',
                component: ComponentCreator('/docs/fundamentals/ai-user-copilot/conversation-starter', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/ai-user-copilot/conversation-summary',
                component: ComponentCreator('/docs/fundamentals/ai-user-copilot/conversation-summary', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/ai-user-copilot/overview',
                component: ComponentCreator('/docs/fundamentals/ai-user-copilot/overview', '2ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/ai-user-copilot/smart-replies',
                component: ComponentCreator('/docs/fundamentals/ai-user-copilot/smart-replies', 'c58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/avatars',
                component: ComponentCreator('/docs/fundamentals/avatars', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/bitly',
                component: ComponentCreator('/docs/fundamentals/bitly', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/chatwoot',
                component: ComponentCreator('/docs/fundamentals/chatwoot', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/collaborative-document',
                component: ComponentCreator('/docs/fundamentals/collaborative-document', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/collaborative-whiteboard',
                component: ComponentCreator('/docs/fundamentals/collaborative-whiteboard', '7db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/data-import-and-migration-overview',
                component: ComponentCreator('/docs/fundamentals/data-import-and-migration-overview', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/disappearing-messages',
                component: ComponentCreator('/docs/fundamentals/disappearing-messages', '866'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/email-replies',
                component: ComponentCreator('/docs/fundamentals/email-replies', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/emojis',
                component: ComponentCreator('/docs/fundamentals/emojis', 'e93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/end-to-end-encryption',
                component: ComponentCreator('/docs/fundamentals/end-to-end-encryption', 'ace'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/extensions-overview',
                component: ComponentCreator('/docs/fundamentals/extensions-overview', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/features-core',
                component: ComponentCreator('/docs/fundamentals/features-core', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/gfycat',
                component: ComponentCreator('/docs/fundamentals/gfycat', 'd5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/giphy',
                component: ComponentCreator('/docs/fundamentals/giphy', '0af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/implementation-checklist',
                component: ComponentCreator('/docs/fundamentals/implementation-checklist', '3e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/import-historical-data',
                component: ComponentCreator('/docs/fundamentals/import-historical-data', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/intercom',
                component: ComponentCreator('/docs/fundamentals/intercom', 'd68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/key-concepts',
                component: ComponentCreator('/docs/fundamentals/key-concepts', '0c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/link-preview',
                component: ComponentCreator('/docs/fundamentals/link-preview', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/live-data-migration',
                component: ComponentCreator('/docs/fundamentals/live-data-migration', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/mentions',
                component: ComponentCreator('/docs/fundamentals/mentions', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/message-shortcuts',
                component: ComponentCreator('/docs/fundamentals/message-shortcuts', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/message-translation',
                component: ComponentCreator('/docs/fundamentals/message-translation', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/moderation-extensions',
                component: ComponentCreator('/docs/fundamentals/moderation-extensions', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/multi-tenancy-best-practices',
                component: ComponentCreator('/docs/fundamentals/multi-tenancy-best-practices', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/multi-tenancy-overview',
                component: ComponentCreator('/docs/fundamentals/multi-tenancy-overview', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/notification-extensions',
                component: ComponentCreator('/docs/fundamentals/notification-extensions', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/overview',
                component: ComponentCreator('/docs/fundamentals/overview', '7cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/pin-message',
                component: ComponentCreator('/docs/fundamentals/pin-message', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/polls',
                component: ComponentCreator('/docs/fundamentals/polls', 'ef6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/reactions',
                component: ComponentCreator('/docs/fundamentals/reactions', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/reminders',
                component: ComponentCreator('/docs/fundamentals/reminders', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/rich-media-preview',
                component: ComponentCreator('/docs/fundamentals/rich-media-preview', '79d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/save-message',
                component: ComponentCreator('/docs/fundamentals/save-message', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/smart-replies',
                component: ComponentCreator('/docs/fundamentals/smart-replies', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/stickers',
                component: ComponentCreator('/docs/fundamentals/stickers', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/stickers-stipop',
                component: ComponentCreator('/docs/fundamentals/stickers-stipop', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/tenor',
                component: ComponentCreator('/docs/fundamentals/tenor', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/thumbnail-generation',
                component: ComponentCreator('/docs/fundamentals/thumbnail-generation', '285'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/tinyurl',
                component: ComponentCreator('/docs/fundamentals/tinyurl', '54a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/video-broadcasting',
                component: ComponentCreator('/docs/fundamentals/video-broadcasting', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/voice-transcription',
                component: ComponentCreator('/docs/fundamentals/voice-transcription', '91a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-events',
                component: ComponentCreator('/docs/fundamentals/webhooks-events', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-legacy-events',
                component: ComponentCreator('/docs/fundamentals/webhooks-legacy-events', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-legacy-management',
                component: ComponentCreator('/docs/fundamentals/webhooks-legacy-management', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-legacy-overview',
                component: ComponentCreator('/docs/fundamentals/webhooks-legacy-overview', '111'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-management',
                component: ComponentCreator('/docs/fundamentals/webhooks-management', 'e11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fundamentals/webhooks-overview',
                component: ComponentCreator('/docs/fundamentals/webhooks-overview', '131'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/home',
    component: ComponentCreator('/docs/home', '348'),
    routes: [
      {
        path: '/docs/home',
        component: ComponentCreator('/docs/home', '5a6'),
        routes: [
          {
            path: '/docs/home',
            component: ComponentCreator('/docs/home', '7fe'),
            routes: [
              {
                path: '/docs/home',
                component: ComponentCreator('/docs/home', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/insights',
    component: ComponentCreator('/docs/insights', '77a'),
    routes: [
      {
        path: '/docs/insights',
        component: ComponentCreator('/docs/insights', '96d'),
        routes: [
          {
            path: '/docs/insights',
            component: ComponentCreator('/docs/insights', 'a02'),
            routes: [
              {
                path: '/docs/insights',
                component: ComponentCreator('/docs/insights', '826'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/moderation',
    component: ComponentCreator('/docs/moderation', 'bb6'),
    routes: [
      {
        path: '/docs/moderation',
        component: ComponentCreator('/docs/moderation', '198'),
        routes: [
          {
            path: '/docs/moderation',
            component: ComponentCreator('/docs/moderation', 'd25'),
            routes: [
              {
                path: '/docs/moderation/blocked-messages',
                component: ComponentCreator('/docs/moderation/blocked-messages', '6ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/constraints-and-limits',
                component: ComponentCreator('/docs/moderation/constraints-and-limits', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/data-masking-filter',
                component: ComponentCreator('/docs/moderation/data-masking-filter', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/image-moderation',
                component: ComponentCreator('/docs/moderation/image-moderation', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/in-flight-message-moderation',
                component: ComponentCreator('/docs/moderation/in-flight-message-moderation', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/lists-management',
                component: ComponentCreator('/docs/moderation/lists-management', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/overview',
                component: ComponentCreator('/docs/moderation/overview', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/profanity-filter',
                component: ComponentCreator('/docs/moderation/profanity-filter', 'dda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/report-message',
                component: ComponentCreator('/docs/moderation/report-message', '10e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/report-user',
                component: ComponentCreator('/docs/moderation/report-user', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/rules-management',
                component: ComponentCreator('/docs/moderation/rules-management', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/sentiment-analysis',
                component: ComponentCreator('/docs/moderation/sentiment-analysis', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/slow-mode',
                component: ComponentCreator('/docs/moderation/slow-mode', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/virus-malware-scanner',
                component: ComponentCreator('/docs/moderation/virus-malware-scanner', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/moderation/xss-filter',
                component: ComponentCreator('/docs/moderation/xss-filter', '1a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/notifications',
    component: ComponentCreator('/docs/notifications', 'a31'),
    routes: [
      {
        path: '/docs/notifications',
        component: ComponentCreator('/docs/notifications', 'f7c'),
        routes: [
          {
            path: '/docs/notifications',
            component: ComponentCreator('/docs/notifications', '3e2'),
            routes: [
              {
                path: '/docs/notifications/android-connection-service',
                component: ComponentCreator('/docs/notifications/android-connection-service', 'bfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/android-push-notifications',
                component: ComponentCreator('/docs/notifications/android-push-notifications', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/capacitor-cordova-ionic-push-notifications',
                component: ComponentCreator('/docs/notifications/capacitor-cordova-ionic-push-notifications', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/email-customization',
                component: ComponentCreator('/docs/notifications/email-customization', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/email-integration',
                component: ComponentCreator('/docs/notifications/email-integration', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/email-notification-extension',
                component: ComponentCreator('/docs/notifications/email-notification-extension', 'f9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/email-overview',
                component: ComponentCreator('/docs/notifications/email-overview', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/flutter-push-notifications',
                component: ComponentCreator('/docs/notifications/flutter-push-notifications', 'd4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/ios-apns-push-notifications',
                component: ComponentCreator('/docs/notifications/ios-apns-push-notifications', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/ios-fcm-push-notifications',
                component: ComponentCreator('/docs/notifications/ios-fcm-push-notifications', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/legacy-push-notifications',
                component: ComponentCreator('/docs/notifications/legacy-push-notifications', '00c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/migration-guide-push-notifications',
                component: ComponentCreator('/docs/notifications/migration-guide-push-notifications', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/mute-functionality',
                component: ComponentCreator('/docs/notifications/mute-functionality', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/overview',
                component: ComponentCreator('/docs/notifications/overview', 'd75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/preferences-templates-sounds',
                component: ComponentCreator('/docs/notifications/preferences-templates-sounds', 'f16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/push-customization',
                component: ComponentCreator('/docs/notifications/push-customization', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/push-integration',
                component: ComponentCreator('/docs/notifications/push-integration', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/push-notification-extension-overview',
                component: ComponentCreator('/docs/notifications/push-notification-extension-overview', '102'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/push-overview',
                component: ComponentCreator('/docs/notifications/push-overview', '6ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/react-native-push-notifications',
                component: ComponentCreator('/docs/notifications/react-native-push-notifications', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/sms-customization',
                component: ComponentCreator('/docs/notifications/sms-customization', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/sms-integration',
                component: ComponentCreator('/docs/notifications/sms-integration', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/sms-notification-extension',
                component: ComponentCreator('/docs/notifications/sms-notification-extension', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/sms-overview',
                component: ComponentCreator('/docs/notifications/sms-overview', '583'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/token-management',
                component: ComponentCreator('/docs/notifications/token-management', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/notifications/web-push-notifications',
                component: ComponentCreator('/docs/notifications/web-push-notifications', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/android',
    component: ComponentCreator('/docs/sdk/android', 'f6e'),
    routes: [
      {
        path: '/docs/sdk/android/2.0',
        component: ComponentCreator('/docs/sdk/android/2.0', '6ed'),
        routes: [
          {
            path: '/docs/sdk/android/2.0',
            component: ComponentCreator('/docs/sdk/android/2.0', 'e60'),
            routes: [
              {
                path: '/docs/sdk/android/2.0/add-members-to-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/add-members-to-a-group', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/android/2.0/additional-message-filtering', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/advanced',
                component: ComponentCreator('/docs/sdk/android/2.0/advanced', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/authentication',
                component: ComponentCreator('/docs/sdk/android/2.0/authentication', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/block-users',
                component: ComponentCreator('/docs/sdk/android/2.0/block-users', 'c8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/bots',
                component: ComponentCreator('/docs/sdk/android/2.0/bots', 'a52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/calling',
                component: ComponentCreator('/docs/sdk/android/2.0/calling', '386'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/change-member-scope',
                component: ComponentCreator('/docs/sdk/android/2.0/change-member-scope', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/connection-status',
                component: ComponentCreator('/docs/sdk/android/2.0/connection-status', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/create-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/create-a-group', '422'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/default-calling',
                component: ComponentCreator('/docs/sdk/android/2.0/default-calling', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/delete-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/delete-a-group', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/delete-conversation',
                component: ComponentCreator('/docs/sdk/android/2.0/delete-conversation', 'efe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/delete-message',
                component: ComponentCreator('/docs/sdk/android/2.0/delete-message', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/android/2.0/delivery-read-receipts', '489'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/direct-calling',
                component: ComponentCreator('/docs/sdk/android/2.0/direct-calling', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/edit-message',
                component: ComponentCreator('/docs/sdk/android/2.0/edit-message', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/extensions',
                component: ComponentCreator('/docs/sdk/android/2.0/extensions', 'ee7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/groups',
                component: ComponentCreator('/docs/sdk/android/2.0/groups', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/join-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/join-a-group', '8dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/key-concepts',
                component: ComponentCreator('/docs/sdk/android/2.0/key-concepts', 'c6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/kick-member-from-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/kick-member-from-a-group', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/leave-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/leave-a-group', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/login-listeners',
                component: ComponentCreator('/docs/sdk/android/2.0/login-listeners', '903'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/android/2.0/message-structure-and-hierarchy', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/messaging',
                component: ComponentCreator('/docs/sdk/android/2.0/messaging', 'dd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/overview',
                component: ComponentCreator('/docs/sdk/android/2.0/overview', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/publishing-app-on-playstore',
                component: ComponentCreator('/docs/sdk/android/2.0/publishing-app-on-playstore', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/rate-limits',
                component: ComponentCreator('/docs/sdk/android/2.0/rate-limits', '1be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/receive-messages',
                component: ComponentCreator('/docs/sdk/android/2.0/receive-messages', 'f10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/resources',
                component: ComponentCreator('/docs/sdk/android/2.0/resources', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/android/2.0/resources-all-real-time-listeners', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/resources-upgrading-from-v1',
                component: ComponentCreator('/docs/sdk/android/2.0/resources-upgrading-from-v1', '0bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/android/2.0/retrieve-conversations', '029'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/android/2.0/retrieve-group-members', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/retrieve-groups',
                component: ComponentCreator('/docs/sdk/android/2.0/retrieve-groups', 'bc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/retrieve-users',
                component: ComponentCreator('/docs/sdk/android/2.0/retrieve-users', '6bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/send-message',
                component: ComponentCreator('/docs/sdk/android/2.0/send-message', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/setup',
                component: ComponentCreator('/docs/sdk/android/2.0/setup', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/android/2.0/threaded-messages', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/android/2.0/transfer-group-ownership', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/typing-indicators',
                component: ComponentCreator('/docs/sdk/android/2.0/typing-indicators', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/update-a-group',
                component: ComponentCreator('/docs/sdk/android/2.0/update-a-group', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/user-management',
                component: ComponentCreator('/docs/sdk/android/2.0/user-management', '91c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/user-presence',
                component: ComponentCreator('/docs/sdk/android/2.0/user-presence', '58d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/users',
                component: ComponentCreator('/docs/sdk/android/2.0/users', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/2.0/webhooks',
                component: ComponentCreator('/docs/sdk/android/2.0/webhooks', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/android/3.0',
        component: ComponentCreator('/docs/sdk/android/3.0', 'bdd'),
        routes: [
          {
            path: '/docs/sdk/android/3.0',
            component: ComponentCreator('/docs/sdk/android/3.0', '9ab'),
            routes: [
              {
                path: '/docs/sdk/android/3.0/advanced-connection-status',
                component: ComponentCreator('/docs/sdk/android/3.0/advanced-connection-status', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/advanced-managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/android/3.0/advanced-managing-web-socket-connections-manually', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/advanced-publishing-app-on-playstore',
                component: ComponentCreator('/docs/sdk/android/3.0/advanced-publishing-app-on-playstore', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/android-advanced',
                component: ComponentCreator('/docs/sdk/android/3.0/android-advanced', '68c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/android-resources',
                component: ComponentCreator('/docs/sdk/android/3.0/android-resources', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/authentication',
                component: ComponentCreator('/docs/sdk/android/3.0/authentication', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/android/3.0/authentication-login-listeners', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/bots',
                component: ComponentCreator('/docs/sdk/android/3.0/bots', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling',
                component: ComponentCreator('/docs/sdk/android/3.0/calling', '786'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/android/3.0/calling-default-calling', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/android/3.0/calling-direct-calling', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling-recording',
                component: ComponentCreator('/docs/sdk/android/3.0/calling-recording', 'bdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling-recording-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/calling-recording-v3', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/calling-v3', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/default-calling-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/default-calling-v3', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/direct-calling-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/direct-calling-v3', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/extensions',
                component: ComponentCreator('/docs/sdk/android/3.0/extensions', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups',
                component: ComponentCreator('/docs/sdk/android/3.0/groups', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-add-members-to-group', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-change-member-scope', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-create-group', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-delete-group', '98a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-join-group', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-kick-ban-members', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-leave-group', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-retrieve-group-members', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-retrieve-groups', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-transfer-group-ownership', '2d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/android/3.0/groups-update-group', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/android/3.0/key-concepts', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/android/3.0/message-structure-and-hierarchy', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-additional-message-filtering', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-delete-conversation', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-delete-message', '216'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-edit-message', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-receipts', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-receive-messages', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-retrieve-conversations', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-send-message', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-transient-messages',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-transient-messages', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/android/3.0/messaging-typing-indicators', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/overview',
                component: ComponentCreator('/docs/sdk/android/3.0/overview', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/presenter-mode',
                component: ComponentCreator('/docs/sdk/android/3.0/presenter-mode', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/android/3.0/rate-limits', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/android/3.0/resources-all-real-time-listeners', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/resources-upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/android/3.0/resources-upgrading-from-v2', '24b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/setup',
                component: ComponentCreator('/docs/sdk/android/3.0/setup', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/setup-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/setup-v3', 'ce7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/android/3.0/threaded-messages', 'd67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/android/3.0/user-presence', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/users',
                component: ComponentCreator('/docs/sdk/android/3.0/users', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/users-block-users',
                component: ComponentCreator('/docs/sdk/android/3.0/users-block-users', '80f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/android/3.0/users-retrieve-users', 'eb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/users-user-management',
                component: ComponentCreator('/docs/sdk/android/3.0/users-user-management', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/android/3.0/video-view-customisation', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/video-view-customisation-v3',
                component: ComponentCreator('/docs/sdk/android/3.0/video-view-customisation-v3', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/3.0/webhooks',
                component: ComponentCreator('/docs/sdk/android/3.0/webhooks', '43c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/android',
        component: ComponentCreator('/docs/sdk/android', '276'),
        routes: [
          {
            path: '/docs/sdk/android',
            component: ComponentCreator('/docs/sdk/android', 'ead'),
            routes: [
              {
                path: '/docs/sdk/android/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/android/additional-message-filtering', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/advanced-overview',
                component: ComponentCreator('/docs/sdk/android/advanced-overview', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/authentication-overview',
                component: ComponentCreator('/docs/sdk/android/authentication-overview', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/block-users',
                component: ComponentCreator('/docs/sdk/android/block-users', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/call-logs',
                component: ComponentCreator('/docs/sdk/android/call-logs', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/calling-overview',
                component: ComponentCreator('/docs/sdk/android/calling-overview', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/connection-behaviour',
                component: ComponentCreator('/docs/sdk/android/connection-behaviour', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/connection-status',
                component: ComponentCreator('/docs/sdk/android/connection-status', '45f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/create-group',
                component: ComponentCreator('/docs/sdk/android/create-group', '266'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/default-calling',
                component: ComponentCreator('/docs/sdk/android/default-calling', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/delete-conversation',
                component: ComponentCreator('/docs/sdk/android/delete-conversation', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/delete-group',
                component: ComponentCreator('/docs/sdk/android/delete-group', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/delete-message',
                component: ComponentCreator('/docs/sdk/android/delete-message', 'ca4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/android/delivery-read-receipts', '153'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/direct-calling',
                component: ComponentCreator('/docs/sdk/android/direct-calling', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/edit-message',
                component: ComponentCreator('/docs/sdk/android/edit-message', '742'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/group-add-members',
                component: ComponentCreator('/docs/sdk/android/group-add-members', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/android/group-change-member-scope', 'bcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/group-kick-member',
                component: ComponentCreator('/docs/sdk/android/group-kick-member', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/groups-overview',
                component: ComponentCreator('/docs/sdk/android/groups-overview', 'fad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/interactive-messages',
                component: ComponentCreator('/docs/sdk/android/interactive-messages', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/join-group',
                component: ComponentCreator('/docs/sdk/android/join-group', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/key-concepts',
                component: ComponentCreator('/docs/sdk/android/key-concepts', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/leave-group',
                component: ComponentCreator('/docs/sdk/android/leave-group', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/login-listeners',
                component: ComponentCreator('/docs/sdk/android/login-listeners', '419'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/mentions',
                component: ComponentCreator('/docs/sdk/android/mentions', '00d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/android/message-structure-and-hierarchy', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/messaging-overview',
                component: ComponentCreator('/docs/sdk/android/messaging-overview', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/overview',
                component: ComponentCreator('/docs/sdk/android/overview', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/presenter-mode',
                component: ComponentCreator('/docs/sdk/android/presenter-mode', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/publishing-app-on-playstore',
                component: ComponentCreator('/docs/sdk/android/publishing-app-on-playstore', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/rate-limits',
                component: ComponentCreator('/docs/sdk/android/rate-limits', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/reactions',
                component: ComponentCreator('/docs/sdk/android/reactions', 'd8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/real-time-listeners',
                component: ComponentCreator('/docs/sdk/android/real-time-listeners', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/receive-messages',
                component: ComponentCreator('/docs/sdk/android/receive-messages', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/recording',
                component: ComponentCreator('/docs/sdk/android/recording', '9ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/resources-overview',
                component: ComponentCreator('/docs/sdk/android/resources-overview', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/android/retrieve-conversations', 'cde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/android/retrieve-group-members', 'de8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/retrieve-groups',
                component: ComponentCreator('/docs/sdk/android/retrieve-groups', '034'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/retrieve-users',
                component: ComponentCreator('/docs/sdk/android/retrieve-users', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/send-message',
                component: ComponentCreator('/docs/sdk/android/send-message', 'bbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/setup',
                component: ComponentCreator('/docs/sdk/android/setup', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/setup-calling',
                component: ComponentCreator('/docs/sdk/android/setup-calling', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/threaded-messages',
                component: ComponentCreator('/docs/sdk/android/threaded-messages', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/android/transfer-group-ownership', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/transient-messages',
                component: ComponentCreator('/docs/sdk/android/transient-messages', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/typing-indicators',
                component: ComponentCreator('/docs/sdk/android/typing-indicators', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/update-group',
                component: ComponentCreator('/docs/sdk/android/update-group', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/upgrading-from-v3-guide',
                component: ComponentCreator('/docs/sdk/android/upgrading-from-v3-guide', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/user-management',
                component: ComponentCreator('/docs/sdk/android/user-management', 'fa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/user-presence',
                component: ComponentCreator('/docs/sdk/android/user-presence', '717'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/users-overview',
                component: ComponentCreator('/docs/sdk/android/users-overview', 'f56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/android/video-view-customisation',
                component: ComponentCreator('/docs/sdk/android/video-view-customisation', 'db1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/flutter',
    component: ComponentCreator('/docs/sdk/flutter', '0a1'),
    routes: [
      {
        path: '/docs/sdk/flutter/3.0',
        component: ComponentCreator('/docs/sdk/flutter/3.0', 'ac5'),
        routes: [
          {
            path: '/docs/sdk/flutter/3.0',
            component: ComponentCreator('/docs/sdk/flutter/3.0', 'c6a'),
            routes: [
              {
                path: '/docs/sdk/flutter/3.0/advanced',
                component: ComponentCreator('/docs/sdk/flutter/3.0/advanced', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/advanced-connection-status',
                component: ComponentCreator('/docs/sdk/flutter/3.0/advanced-connection-status', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/advanced-managing-web-sockets-connections-manually',
                component: ComponentCreator('/docs/sdk/flutter/3.0/advanced-managing-web-sockets-connections-manually', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/authentication',
                component: ComponentCreator('/docs/sdk/flutter/3.0/authentication', '0fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/flutter/3.0/authentication-login-listeners', 'bb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/calling-setup',
                component: ComponentCreator('/docs/sdk/flutter/3.0/calling-setup', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/flutter/3.0/calling-v3', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/default-calling',
                component: ComponentCreator('/docs/sdk/flutter/3.0/default-calling', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/direct-calling',
                component: ComponentCreator('/docs/sdk/flutter/3.0/direct-calling', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/flutter-resources',
                component: ComponentCreator('/docs/sdk/flutter/3.0/flutter-resources', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-add-members-to-group', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-change-member-scope', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-create-group', '916'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-delete-group', '7d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-join-group', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-kick-ban-members', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-leave-group', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-retrieve-group-members', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-retrieve-groups', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-transfer-group-ownership', 'e32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/flutter/3.0/groups-update-group', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/flutter/3.0/key-concepts', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/flutter/3.0/message-structure-and-hierarchy', '25d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-additional-message-filtering', '7e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-delete-conversation', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-delete-message', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-edit-message', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-receipts', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-receive-messages', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-retrieve-conversations', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-send-message', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-transient-messages',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-transient-messages', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/flutter/3.0/messaging-typing-indicators', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/overview',
                component: ComponentCreator('/docs/sdk/flutter/3.0/overview', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/presenter',
                component: ComponentCreator('/docs/sdk/flutter/3.0/presenter', '620'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/flutter/3.0/rate-limits', 'b58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/recording',
                component: ComponentCreator('/docs/sdk/flutter/3.0/recording', '50a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/flutter/3.0/resources-all-real-time-listeners', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/setup',
                component: ComponentCreator('/docs/sdk/flutter/3.0/setup', '075'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/flutter/3.0/threaded-messages', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/flutter/3.0/user-presence', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/users',
                component: ComponentCreator('/docs/sdk/flutter/3.0/users', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/users-block-users',
                component: ComponentCreator('/docs/sdk/flutter/3.0/users-block-users', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/flutter/3.0/users-retrieve-users', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/users-user-management',
                component: ComponentCreator('/docs/sdk/flutter/3.0/users-user-management', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/flutter/3.0/video-view-customisation', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/flutter',
        component: ComponentCreator('/docs/sdk/flutter', '1c1'),
        routes: [
          {
            path: '/docs/sdk/flutter',
            component: ComponentCreator('/docs/sdk/flutter', 'f3d'),
            routes: [
              {
                path: '/docs/sdk/flutter/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/flutter/additional-message-filtering', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/advanced-overview',
                component: ComponentCreator('/docs/sdk/flutter/advanced-overview', '6d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/authentication-overview',
                component: ComponentCreator('/docs/sdk/flutter/authentication-overview', '52b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/block-users',
                component: ComponentCreator('/docs/sdk/flutter/block-users', '82a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/call-logs',
                component: ComponentCreator('/docs/sdk/flutter/call-logs', '4c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/calling-overview',
                component: ComponentCreator('/docs/sdk/flutter/calling-overview', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/calling-setup',
                component: ComponentCreator('/docs/sdk/flutter/calling-setup', '809'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/connection-behaviour',
                component: ComponentCreator('/docs/sdk/flutter/connection-behaviour', 'f4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/connection-status',
                component: ComponentCreator('/docs/sdk/flutter/connection-status', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/create-group',
                component: ComponentCreator('/docs/sdk/flutter/create-group', '51f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/default-call',
                component: ComponentCreator('/docs/sdk/flutter/default-call', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/delete-conversation',
                component: ComponentCreator('/docs/sdk/flutter/delete-conversation', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/delete-group',
                component: ComponentCreator('/docs/sdk/flutter/delete-group', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/delete-message',
                component: ComponentCreator('/docs/sdk/flutter/delete-message', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/flutter/delivery-read-receipts', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/direct-call',
                component: ComponentCreator('/docs/sdk/flutter/direct-call', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/edit-message',
                component: ComponentCreator('/docs/sdk/flutter/edit-message', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/group-add-members',
                component: ComponentCreator('/docs/sdk/flutter/group-add-members', 'b78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/flutter/group-change-member-scope', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/group-kick-member',
                component: ComponentCreator('/docs/sdk/flutter/group-kick-member', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/groups-overview',
                component: ComponentCreator('/docs/sdk/flutter/groups-overview', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/interactive-messages',
                component: ComponentCreator('/docs/sdk/flutter/interactive-messages', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/join-group',
                component: ComponentCreator('/docs/sdk/flutter/join-group', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/key-concepts',
                component: ComponentCreator('/docs/sdk/flutter/key-concepts', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/leave-group',
                component: ComponentCreator('/docs/sdk/flutter/leave-group', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/login-listeners',
                component: ComponentCreator('/docs/sdk/flutter/login-listeners', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/mentions',
                component: ComponentCreator('/docs/sdk/flutter/mentions', 'dfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/flutter/message-structure-and-hierarchy', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/messaging-overview',
                component: ComponentCreator('/docs/sdk/flutter/messaging-overview', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/overview',
                component: ComponentCreator('/docs/sdk/flutter/overview', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/presenter-mode',
                component: ComponentCreator('/docs/sdk/flutter/presenter-mode', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/rate-limits',
                component: ComponentCreator('/docs/sdk/flutter/rate-limits', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/reactions',
                component: ComponentCreator('/docs/sdk/flutter/reactions', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/real-time-listeners',
                component: ComponentCreator('/docs/sdk/flutter/real-time-listeners', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/receive-messages',
                component: ComponentCreator('/docs/sdk/flutter/receive-messages', 'ddd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/recording',
                component: ComponentCreator('/docs/sdk/flutter/recording', '149'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/resources-overview',
                component: ComponentCreator('/docs/sdk/flutter/resources-overview', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/flutter/retrieve-conversations', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/flutter/retrieve-group-members', 'd52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/retrieve-groups',
                component: ComponentCreator('/docs/sdk/flutter/retrieve-groups', '345'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/retrieve-users',
                component: ComponentCreator('/docs/sdk/flutter/retrieve-users', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/send-message',
                component: ComponentCreator('/docs/sdk/flutter/send-message', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/setup',
                component: ComponentCreator('/docs/sdk/flutter/setup', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/threaded-messages',
                component: ComponentCreator('/docs/sdk/flutter/threaded-messages', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/flutter/transfer-group-ownership', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/transient-messages',
                component: ComponentCreator('/docs/sdk/flutter/transient-messages', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/typing-indicators',
                component: ComponentCreator('/docs/sdk/flutter/typing-indicators', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/update-group',
                component: ComponentCreator('/docs/sdk/flutter/update-group', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/upgrading-from-v3-guide',
                component: ComponentCreator('/docs/sdk/flutter/upgrading-from-v3-guide', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/user-management',
                component: ComponentCreator('/docs/sdk/flutter/user-management', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/user-presence',
                component: ComponentCreator('/docs/sdk/flutter/user-presence', 'ce1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/users-overview',
                component: ComponentCreator('/docs/sdk/flutter/users-overview', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/flutter/video-view-customisation',
                component: ComponentCreator('/docs/sdk/flutter/video-view-customisation', 'a50'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/ionic',
    component: ComponentCreator('/docs/sdk/ionic', '23b'),
    routes: [
      {
        path: '/docs/sdk/ionic/2.0',
        component: ComponentCreator('/docs/sdk/ionic/2.0', 'b90'),
        routes: [
          {
            path: '/docs/sdk/ionic/2.0',
            component: ComponentCreator('/docs/sdk/ionic/2.0', '24d'),
            routes: [
              {
                path: '/docs/sdk/ionic/2.0/advanced',
                component: ComponentCreator('/docs/sdk/ionic/2.0/advanced', '462'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/advanced-connection-listener',
                component: ComponentCreator('/docs/sdk/ionic/2.0/advanced-connection-listener', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/authentication',
                component: ComponentCreator('/docs/sdk/ionic/2.0/authentication', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/ionic/2.0/authentication-login-listeners', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/bots',
                component: ComponentCreator('/docs/sdk/ionic/2.0/bots', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/calling',
                component: ComponentCreator('/docs/sdk/ionic/2.0/calling', '7e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/ionic/2.0/calling-default-calling', '24b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/ionic/2.0/calling-direct-calling', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-add-members-to-group', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-change-member-scope', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-create-group', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-delete-group', 'e25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-join-group', '41c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-kick-ban-members', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-leave-group', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-retrieve-group-members', '7ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-retrieve-groups', 'dad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-transfer-group-ownership', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/ionic/2.0/groups-update-group', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/key-concepts',
                component: ComponentCreator('/docs/sdk/ionic/2.0/key-concepts', '6c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ionic/2.0/message-structure-and-hierarchy', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-additional-message-filtering', '439'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-delete-conversation', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-delete-message', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-edit-message', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-receipts', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-receive-messages', 'c4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-retrieve-conversations', 'cf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-send-message', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/ionic/2.0/messaging-typing-indicators', '8eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/overview',
                component: ComponentCreator('/docs/sdk/ionic/2.0/overview', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/rate-limits',
                component: ComponentCreator('/docs/sdk/ionic/2.0/rate-limits', 'dab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/resources',
                component: ComponentCreator('/docs/sdk/ionic/2.0/resources', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/ionic/2.0/resources-all-real-time-listeners', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/resources-upgrading-from-v1',
                component: ComponentCreator('/docs/sdk/ionic/2.0/resources-upgrading-from-v1', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/setup',
                component: ComponentCreator('/docs/sdk/ionic/2.0/setup', '298'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/ionic/2.0/threaded-messages', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/user-presence',
                component: ComponentCreator('/docs/sdk/ionic/2.0/user-presence', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/users',
                component: ComponentCreator('/docs/sdk/ionic/2.0/users', '569'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/users-block-users',
                component: ComponentCreator('/docs/sdk/ionic/2.0/users-block-users', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/ionic/2.0/users-retrieve-users', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/users-user-management',
                component: ComponentCreator('/docs/sdk/ionic/2.0/users-user-management', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/2.0/webhooks',
                component: ComponentCreator('/docs/sdk/ionic/2.0/webhooks', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/ionic/3.0',
        component: ComponentCreator('/docs/sdk/ionic/3.0', '40e'),
        routes: [
          {
            path: '/docs/sdk/ionic/3.0',
            component: ComponentCreator('/docs/sdk/ionic/3.0', '3f9'),
            routes: [
              {
                path: '/docs/sdk/ionic/3.0/advanced',
                component: ComponentCreator('/docs/sdk/ionic/3.0/advanced', 'c42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/advanced-connection-listener',
                component: ComponentCreator('/docs/sdk/ionic/3.0/advanced-connection-listener', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/advanced-managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/ionic/3.0/advanced-managing-web-socket-connections-manually', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/authentication',
                component: ComponentCreator('/docs/sdk/ionic/3.0/authentication', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/ionic/3.0/authentication-login-listeners', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/bots',
                component: ComponentCreator('/docs/sdk/ionic/3.0/bots', 'ccf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/calling',
                component: ComponentCreator('/docs/sdk/ionic/3.0/calling', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/ionic/3.0/calling-default-calling', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/ionic/3.0/calling-direct-calling', 'c9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/calling-recording',
                component: ComponentCreator('/docs/sdk/ionic/3.0/calling-recording', '938'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/ionic/3.0/calling-v3', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-add-members-to-group', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-change-member-scope', '2fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-create-group', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-delete-group', '32c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-join-group', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-kick-ban-members', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-leave-group', '16c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-retrieve-group-members', '321'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-retrieve-groups', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-transfer-group-ownership', 'f3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/ionic/3.0/groups-update-group', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/ionic/3.0/key-concepts', 'c15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ionic/3.0/message-structure-and-hierarchy', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-additional-message-filtering', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-delete-conversation', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-delete-message', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-edit-message', '106'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-receipts', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-receive-messages', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-retrieve-conversations', '66d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-send-message', '5c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/ionic/3.0/messaging-typing-indicators', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/overview',
                component: ComponentCreator('/docs/sdk/ionic/3.0/overview', 'a7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/ionic/3.0/rate-limits', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/resources',
                component: ComponentCreator('/docs/sdk/ionic/3.0/resources', 'e31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/ionic/3.0/resources-all-real-time-listeners', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/resources-upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/ionic/3.0/resources-upgrading-from-v2', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/setup',
                component: ComponentCreator('/docs/sdk/ionic/3.0/setup', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/ionic/3.0/threaded-messages', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/transient-messages',
                component: ComponentCreator('/docs/sdk/ionic/3.0/transient-messages', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/ionic/3.0/user-presence', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/users',
                component: ComponentCreator('/docs/sdk/ionic/3.0/users', '57f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/users-block-users',
                component: ComponentCreator('/docs/sdk/ionic/3.0/users-block-users', 'c69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/ionic/3.0/users-retrieve-users', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/users-user-management',
                component: ComponentCreator('/docs/sdk/ionic/3.0/users-user-management', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/v3-calling-recording',
                component: ComponentCreator('/docs/sdk/ionic/3.0/v3-calling-recording', '685'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/v3-setup',
                component: ComponentCreator('/docs/sdk/ionic/3.0/v3-setup', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/v3-start-call-session',
                component: ComponentCreator('/docs/sdk/ionic/3.0/v3-start-call-session', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/v3-video-view-customisation',
                component: ComponentCreator('/docs/sdk/ionic/3.0/v3-video-view-customisation', '434'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/ionic/3.0/video-view-customisation', '6dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/3.0/webhooks',
                component: ComponentCreator('/docs/sdk/ionic/3.0/webhooks', '967'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/ionic',
        component: ComponentCreator('/docs/sdk/ionic', '36a'),
        routes: [
          {
            path: '/docs/sdk/ionic',
            component: ComponentCreator('/docs/sdk/ionic', 'ccf'),
            routes: [
              {
                path: '/docs/sdk/ionic/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ionic/additional-message-filtering', 'd93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/advanced',
                component: ComponentCreator('/docs/sdk/ionic/advanced', '396'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/authentication',
                component: ComponentCreator('/docs/sdk/ionic/authentication', '905'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/block-users',
                component: ComponentCreator('/docs/sdk/ionic/block-users', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/calling-overview',
                component: ComponentCreator('/docs/sdk/ionic/calling-overview', '967'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/calling-setup',
                component: ComponentCreator('/docs/sdk/ionic/calling-setup', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/connection-behaviour',
                component: ComponentCreator('/docs/sdk/ionic/connection-behaviour', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/connection-status',
                component: ComponentCreator('/docs/sdk/ionic/connection-status', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/create-group',
                component: ComponentCreator('/docs/sdk/ionic/create-group', 'b0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/default-call',
                component: ComponentCreator('/docs/sdk/ionic/default-call', '11e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/delete-conversation',
                component: ComponentCreator('/docs/sdk/ionic/delete-conversation', '445'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/delete-group',
                component: ComponentCreator('/docs/sdk/ionic/delete-group', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/delete-message',
                component: ComponentCreator('/docs/sdk/ionic/delete-message', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/ionic/delivery-read-receipts', '770'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/direct-call',
                component: ComponentCreator('/docs/sdk/ionic/direct-call', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/edit-message',
                component: ComponentCreator('/docs/sdk/ionic/edit-message', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/group-add-members',
                component: ComponentCreator('/docs/sdk/ionic/group-add-members', '51d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/ionic/group-change-member-scope', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/group-kick-member',
                component: ComponentCreator('/docs/sdk/ionic/group-kick-member', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/groups-overview',
                component: ComponentCreator('/docs/sdk/ionic/groups-overview', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/interactive-messages',
                component: ComponentCreator('/docs/sdk/ionic/interactive-messages', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/join-group',
                component: ComponentCreator('/docs/sdk/ionic/join-group', '4c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/key-concepts',
                component: ComponentCreator('/docs/sdk/ionic/key-concepts', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/leave-group',
                component: ComponentCreator('/docs/sdk/ionic/leave-group', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/login-listeners',
                component: ComponentCreator('/docs/sdk/ionic/login-listeners', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/managing-connections-manually',
                component: ComponentCreator('/docs/sdk/ionic/managing-connections-manually', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/mentions',
                component: ComponentCreator('/docs/sdk/ionic/mentions', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ionic/message-structure-and-hierarchy', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/messaging-overview',
                component: ComponentCreator('/docs/sdk/ionic/messaging-overview', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/overview',
                component: ComponentCreator('/docs/sdk/ionic/overview', '503'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/presenter-mode',
                component: ComponentCreator('/docs/sdk/ionic/presenter-mode', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/rate-limits',
                component: ComponentCreator('/docs/sdk/ionic/rate-limits', 'd67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/reactions',
                component: ComponentCreator('/docs/sdk/ionic/reactions', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/real-time-listeners',
                component: ComponentCreator('/docs/sdk/ionic/real-time-listeners', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/receive-messages',
                component: ComponentCreator('/docs/sdk/ionic/receive-messages', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/recording',
                component: ComponentCreator('/docs/sdk/ionic/recording', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/resources-overview',
                component: ComponentCreator('/docs/sdk/ionic/resources-overview', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ionic/retrieve-conversations', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ionic/retrieve-group-members', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/retrieve-groups',
                component: ComponentCreator('/docs/sdk/ionic/retrieve-groups', '4ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/retrieve-users',
                component: ComponentCreator('/docs/sdk/ionic/retrieve-users', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/send-message',
                component: ComponentCreator('/docs/sdk/ionic/send-message', 'fa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/setup',
                component: ComponentCreator('/docs/sdk/ionic/setup', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/threaded-messages',
                component: ComponentCreator('/docs/sdk/ionic/threaded-messages', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ionic/transfer-group-ownership', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/transient-messages',
                component: ComponentCreator('/docs/sdk/ionic/transient-messages', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/typing-indicators',
                component: ComponentCreator('/docs/sdk/ionic/typing-indicators', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/update-group',
                component: ComponentCreator('/docs/sdk/ionic/update-group', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/upgrading-from-v3-guide',
                component: ComponentCreator('/docs/sdk/ionic/upgrading-from-v3-guide', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/user-management',
                component: ComponentCreator('/docs/sdk/ionic/user-management', '7a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/user-presence',
                component: ComponentCreator('/docs/sdk/ionic/user-presence', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/users-overview',
                component: ComponentCreator('/docs/sdk/ionic/users-overview', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ionic/video-view-customisation',
                component: ComponentCreator('/docs/sdk/ionic/video-view-customisation', 'f2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/ios',
    component: ComponentCreator('/docs/sdk/ios', '717'),
    routes: [
      {
        path: '/docs/sdk/ios/2.0',
        component: ComponentCreator('/docs/sdk/ios/2.0', 'a0c'),
        routes: [
          {
            path: '/docs/sdk/ios/2.0',
            component: ComponentCreator('/docs/sdk/ios/2.0', '159'),
            routes: [
              {
                path: '/docs/sdk/ios/2.0/add-members-to-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/add-members-to-a-group', '263'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ios/2.0/additional-message-filtering', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/advanced',
                component: ComponentCreator('/docs/sdk/ios/2.0/advanced', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/all-real-time-delegates-listeners',
                component: ComponentCreator('/docs/sdk/ios/2.0/all-real-time-delegates-listeners', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/authentication',
                component: ComponentCreator('/docs/sdk/ios/2.0/authentication', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/block-users',
                component: ComponentCreator('/docs/sdk/ios/2.0/block-users', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/bots',
                component: ComponentCreator('/docs/sdk/ios/2.0/bots', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/calling',
                component: ComponentCreator('/docs/sdk/ios/2.0/calling', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/change-member-scope',
                component: ComponentCreator('/docs/sdk/ios/2.0/change-member-scope', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/connection-status',
                component: ComponentCreator('/docs/sdk/ios/2.0/connection-status', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/create-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/create-a-group', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/default-calling1',
                component: ComponentCreator('/docs/sdk/ios/2.0/default-calling1', '29c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/delete-a-conversation',
                component: ComponentCreator('/docs/sdk/ios/2.0/delete-a-conversation', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/delete-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/delete-a-group', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/delete-a-message',
                component: ComponentCreator('/docs/sdk/ios/2.0/delete-a-message', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/ios/2.0/delivery-read-receipts', '53b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/direct-calling1',
                component: ComponentCreator('/docs/sdk/ios/2.0/direct-calling1', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/edit-a-message',
                component: ComponentCreator('/docs/sdk/ios/2.0/edit-a-message', '4ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/extensions',
                component: ComponentCreator('/docs/sdk/ios/2.0/extensions', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/groups',
                component: ComponentCreator('/docs/sdk/ios/2.0/groups', '26b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/increment-app-icon-badge-count',
                component: ComponentCreator('/docs/sdk/ios/2.0/increment-app-icon-badge-count', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/join-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/join-a-group', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/key-concepts',
                component: ComponentCreator('/docs/sdk/ios/2.0/key-concepts', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/kick-member-from-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/kick-member-from-a-group', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/launch-call-screen-on-tap-of-push-notification',
                component: ComponentCreator('/docs/sdk/ios/2.0/launch-call-screen-on-tap-of-push-notification', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/launch-chat-window-push-notification',
                component: ComponentCreator('/docs/sdk/ios/2.0/launch-chat-window-push-notification', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/leave-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/leave-a-group', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/login-listeners',
                component: ComponentCreator('/docs/sdk/ios/2.0/login-listeners', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ios/2.0/message-structure-and-hierarchy', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/messaging',
                component: ComponentCreator('/docs/sdk/ios/2.0/messaging', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/overview',
                component: ComponentCreator('/docs/sdk/ios/2.0/overview', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/publishing-app-on-appstore',
                component: ComponentCreator('/docs/sdk/ios/2.0/publishing-app-on-appstore', '4bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/rate-limits',
                component: ComponentCreator('/docs/sdk/ios/2.0/rate-limits', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/receive-a-message',
                component: ComponentCreator('/docs/sdk/ios/2.0/receive-a-message', '787'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/remove-delivered-notifications',
                component: ComponentCreator('/docs/sdk/ios/2.0/remove-delivered-notifications', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/resources',
                component: ComponentCreator('/docs/sdk/ios/2.0/resources', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ios/2.0/retrieve-conversations', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ios/2.0/retrieve-group-members', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/retrieve-groups',
                component: ComponentCreator('/docs/sdk/ios/2.0/retrieve-groups', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/retrieve-users',
                component: ComponentCreator('/docs/sdk/ios/2.0/retrieve-users', '266'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/send-a-message',
                component: ComponentCreator('/docs/sdk/ios/2.0/send-a-message', '705'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/setup',
                component: ComponentCreator('/docs/sdk/ios/2.0/setup', '28a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/ios/2.0/threaded-messages', '936'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ios/2.0/transfer-group-ownership', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/typing-indicators',
                component: ComponentCreator('/docs/sdk/ios/2.0/typing-indicators', '15b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/update-a-group',
                component: ComponentCreator('/docs/sdk/ios/2.0/update-a-group', 'ab2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/upgrading-from-v1',
                component: ComponentCreator('/docs/sdk/ios/2.0/upgrading-from-v1', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/user-management',
                component: ComponentCreator('/docs/sdk/ios/2.0/user-management', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/user-presence',
                component: ComponentCreator('/docs/sdk/ios/2.0/user-presence', '16a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/users',
                component: ComponentCreator('/docs/sdk/ios/2.0/users', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/2.0/webhooks',
                component: ComponentCreator('/docs/sdk/ios/2.0/webhooks', '9ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/ios/3.0',
        component: ComponentCreator('/docs/sdk/ios/3.0', '96b'),
        routes: [
          {
            path: '/docs/sdk/ios/3.0',
            component: ComponentCreator('/docs/sdk/ios/3.0', 'e41'),
            routes: [
              {
                path: '/docs/sdk/ios/3.0/add-members-to-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/add-members-to-a-group', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ios/3.0/additional-message-filtering', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/advanced',
                component: ComponentCreator('/docs/sdk/ios/3.0/advanced', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/all-real-time-delegates-listeners',
                component: ComponentCreator('/docs/sdk/ios/3.0/all-real-time-delegates-listeners', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/authentication',
                component: ComponentCreator('/docs/sdk/ios/3.0/authentication', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/block-users',
                component: ComponentCreator('/docs/sdk/ios/3.0/block-users', '7e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/bots',
                component: ComponentCreator('/docs/sdk/ios/3.0/bots', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/calling',
                component: ComponentCreator('/docs/sdk/ios/3.0/calling', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/ios/3.0/calling-v3', '11f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/change-member-scope',
                component: ComponentCreator('/docs/sdk/ios/3.0/change-member-scope', 'c60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/connection-status',
                component: ComponentCreator('/docs/sdk/ios/3.0/connection-status', 'fed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/create-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/create-a-group', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/default-calling',
                component: ComponentCreator('/docs/sdk/ios/3.0/default-calling', 'a48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/default-calling1',
                component: ComponentCreator('/docs/sdk/ios/3.0/default-calling1', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/delete-a-conversation',
                component: ComponentCreator('/docs/sdk/ios/3.0/delete-a-conversation', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/delete-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/delete-a-group', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/delete-a-message',
                component: ComponentCreator('/docs/sdk/ios/3.0/delete-a-message', '976'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/ios/3.0/delivery-read-receipts', 'bed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/direct-calling',
                component: ComponentCreator('/docs/sdk/ios/3.0/direct-calling', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/direct-calling1',
                component: ComponentCreator('/docs/sdk/ios/3.0/direct-calling1', 'a4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/edit-a-message',
                component: ComponentCreator('/docs/sdk/ios/3.0/edit-a-message', 'ae6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/groups',
                component: ComponentCreator('/docs/sdk/ios/3.0/groups', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/increment-app-icon-badge-count',
                component: ComponentCreator('/docs/sdk/ios/3.0/increment-app-icon-badge-count', '31b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/integration',
                component: ComponentCreator('/docs/sdk/ios/3.0/integration', '4be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/join-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/join-a-group', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/ios/3.0/key-concepts', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/kick-member-from-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/kick-member-from-a-group', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/launch-call-screen-on-tap-of-push-notification',
                component: ComponentCreator('/docs/sdk/ios/3.0/launch-call-screen-on-tap-of-push-notification', '5f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/launch-chat-window-push-notification',
                component: ComponentCreator('/docs/sdk/ios/3.0/launch-chat-window-push-notification', '9cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/leave-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/leave-a-group', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/login-listeners',
                component: ComponentCreator('/docs/sdk/ios/3.0/login-listeners', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/ios/3.0/managing-web-socket-connections-manually', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ios/3.0/message-structure-and-hierarchy', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/messaging',
                component: ComponentCreator('/docs/sdk/ios/3.0/messaging', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/overview',
                component: ComponentCreator('/docs/sdk/ios/3.0/overview', 'ade'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/prepare-your-app-for-background-updates',
                component: ComponentCreator('/docs/sdk/ios/3.0/prepare-your-app-for-background-updates', '4cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/presenter-mode',
                component: ComponentCreator('/docs/sdk/ios/3.0/presenter-mode', '6ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/publishing-app-on-appstore',
                component: ComponentCreator('/docs/sdk/ios/3.0/publishing-app-on-appstore', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/ios/3.0/rate-limits', 'a65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/receive-a-message',
                component: ComponentCreator('/docs/sdk/ios/3.0/receive-a-message', 'a00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/recording',
                component: ComponentCreator('/docs/sdk/ios/3.0/recording', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/recording1',
                component: ComponentCreator('/docs/sdk/ios/3.0/recording1', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/remove-delivered-notifications',
                component: ComponentCreator('/docs/sdk/ios/3.0/remove-delivered-notifications', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/resources',
                component: ComponentCreator('/docs/sdk/ios/3.0/resources', '43a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ios/3.0/retrieve-conversations', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ios/3.0/retrieve-group-members', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/retrieve-groups',
                component: ComponentCreator('/docs/sdk/ios/3.0/retrieve-groups', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/retrieve-users',
                component: ComponentCreator('/docs/sdk/ios/3.0/retrieve-users', '1ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/send-a-message',
                component: ComponentCreator('/docs/sdk/ios/3.0/send-a-message', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/setup',
                component: ComponentCreator('/docs/sdk/ios/3.0/setup', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/ios/3.0/threaded-messages', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ios/3.0/transfer-group-ownership', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/transient-messages',
                component: ComponentCreator('/docs/sdk/ios/3.0/transient-messages', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/typing-indicators',
                component: ComponentCreator('/docs/sdk/ios/3.0/typing-indicators', '468'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/update-a-group',
                component: ComponentCreator('/docs/sdk/ios/3.0/update-a-group', 'a53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/ios/3.0/upgrading-from-v2', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/user-management',
                component: ComponentCreator('/docs/sdk/ios/3.0/user-management', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/ios/3.0/user-presence', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/users',
                component: ComponentCreator('/docs/sdk/ios/3.0/users', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/ios/3.0/video-view-customisation', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/video-view-customisation1',
                component: ComponentCreator('/docs/sdk/ios/3.0/video-view-customisation1', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/3.0/webhooks',
                component: ComponentCreator('/docs/sdk/ios/3.0/webhooks', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/ios',
        component: ComponentCreator('/docs/sdk/ios', 'a6f'),
        routes: [
          {
            path: '/docs/sdk/ios',
            component: ComponentCreator('/docs/sdk/ios', '890'),
            routes: [
              {
                path: '/docs/sdk/ios/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/ios/additional-message-filtering', '584'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/advanced',
                component: ComponentCreator('/docs/sdk/ios/advanced', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/all-real-time-delegates-listeners',
                component: ComponentCreator('/docs/sdk/ios/all-real-time-delegates-listeners', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/authentication-overview',
                component: ComponentCreator('/docs/sdk/ios/authentication-overview', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/block-users',
                component: ComponentCreator('/docs/sdk/ios/block-users', 'a4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/call-logs',
                component: ComponentCreator('/docs/sdk/ios/call-logs', '019'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/calling-integration',
                component: ComponentCreator('/docs/sdk/ios/calling-integration', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/calling-overview',
                component: ComponentCreator('/docs/sdk/ios/calling-overview', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/connection-status',
                component: ComponentCreator('/docs/sdk/ios/connection-status', 'aab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/create-group',
                component: ComponentCreator('/docs/sdk/ios/create-group', '895'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/default-calling',
                component: ComponentCreator('/docs/sdk/ios/default-calling', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/delete-conversation',
                component: ComponentCreator('/docs/sdk/ios/delete-conversation', 'e97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/delete-group',
                component: ComponentCreator('/docs/sdk/ios/delete-group', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/delete-message',
                component: ComponentCreator('/docs/sdk/ios/delete-message', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/ios/delivery-read-receipts', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/direct-calling',
                component: ComponentCreator('/docs/sdk/ios/direct-calling', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/edit-message',
                component: ComponentCreator('/docs/sdk/ios/edit-message', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/group-add-members',
                component: ComponentCreator('/docs/sdk/ios/group-add-members', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/ios/group-change-member-scope', '098'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/group-kick-member',
                component: ComponentCreator('/docs/sdk/ios/group-kick-member', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/groups-overview',
                component: ComponentCreator('/docs/sdk/ios/groups-overview', '47f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/increment-app-icon-badge-count',
                component: ComponentCreator('/docs/sdk/ios/increment-app-icon-badge-count', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/interactive-messages',
                component: ComponentCreator('/docs/sdk/ios/interactive-messages', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/join-group',
                component: ComponentCreator('/docs/sdk/ios/join-group', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/key-concepts',
                component: ComponentCreator('/docs/sdk/ios/key-concepts', 'e54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/launch-call-screen-on-tap-of-push-notification',
                component: ComponentCreator('/docs/sdk/ios/launch-call-screen-on-tap-of-push-notification', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/launch-chat-window-on-tap-of-push-notification',
                component: ComponentCreator('/docs/sdk/ios/launch-chat-window-on-tap-of-push-notification', 'd39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/leave-group',
                component: ComponentCreator('/docs/sdk/ios/leave-group', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/login-listeners',
                component: ComponentCreator('/docs/sdk/ios/login-listeners', '582'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/ios/managing-web-socket-connections-manually', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/marking-delivered-with-push-notification',
                component: ComponentCreator('/docs/sdk/ios/marking-delivered-with-push-notification', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/mentions',
                component: ComponentCreator('/docs/sdk/ios/mentions', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/ios/message-structure-and-hierarchy', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/messaging-overview',
                component: ComponentCreator('/docs/sdk/ios/messaging-overview', '8d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/overview',
                component: ComponentCreator('/docs/sdk/ios/overview', '750'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/prepare-your-app-for-background-updates',
                component: ComponentCreator('/docs/sdk/ios/prepare-your-app-for-background-updates', '194'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/presenter-mode',
                component: ComponentCreator('/docs/sdk/ios/presenter-mode', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/publishing-app-on-appstore',
                component: ComponentCreator('/docs/sdk/ios/publishing-app-on-appstore', 'ae4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/rate-limits',
                component: ComponentCreator('/docs/sdk/ios/rate-limits', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/reactions',
                component: ComponentCreator('/docs/sdk/ios/reactions', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/receive-message',
                component: ComponentCreator('/docs/sdk/ios/receive-message', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/recording',
                component: ComponentCreator('/docs/sdk/ios/recording', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/remove-delivered-notifications',
                component: ComponentCreator('/docs/sdk/ios/remove-delivered-notifications', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/resources-overview',
                component: ComponentCreator('/docs/sdk/ios/resources-overview', '0ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/ios/retrieve-conversations', 'a90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/ios/retrieve-group-members', '92a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/retrieve-groups',
                component: ComponentCreator('/docs/sdk/ios/retrieve-groups', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/retrieve-users',
                component: ComponentCreator('/docs/sdk/ios/retrieve-users', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/send-message',
                component: ComponentCreator('/docs/sdk/ios/send-message', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/setup',
                component: ComponentCreator('/docs/sdk/ios/setup', 'b9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/threaded-messages',
                component: ComponentCreator('/docs/sdk/ios/threaded-messages', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/ios/transfer-group-ownership', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/transient-messages',
                component: ComponentCreator('/docs/sdk/ios/transient-messages', '096'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/typing-indicators',
                component: ComponentCreator('/docs/sdk/ios/typing-indicators', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/update-group',
                component: ComponentCreator('/docs/sdk/ios/update-group', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/ios/upgrading-from-v2', '3a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/upgrading-from-v3-to-v4',
                component: ComponentCreator('/docs/sdk/ios/upgrading-from-v3-to-v4', 'e07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/user-management',
                component: ComponentCreator('/docs/sdk/ios/user-management', '9f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/user-presence',
                component: ComponentCreator('/docs/sdk/ios/user-presence', 'c07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/users-overview',
                component: ComponentCreator('/docs/sdk/ios/users-overview', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/video-view-customisation',
                component: ComponentCreator('/docs/sdk/ios/video-view-customisation', '494'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/ios/web-socket-connection-behaviour',
                component: ComponentCreator('/docs/sdk/ios/web-socket-connection-behaviour', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/javascript',
    component: ComponentCreator('/docs/sdk/javascript', 'bff'),
    routes: [
      {
        path: '/docs/sdk/javascript/2.0',
        component: ComponentCreator('/docs/sdk/javascript/2.0', 'fa5'),
        routes: [
          {
            path: '/docs/sdk/javascript/2.0',
            component: ComponentCreator('/docs/sdk/javascript/2.0', '7b1'),
            routes: [
              {
                path: '/docs/sdk/javascript/2.0/advanced',
                component: ComponentCreator('/docs/sdk/javascript/2.0/advanced', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/advanced-connection-listeners',
                component: ComponentCreator('/docs/sdk/javascript/2.0/advanced-connection-listeners', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/authentication',
                component: ComponentCreator('/docs/sdk/javascript/2.0/authentication', 'f3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/javascript/2.0/authentication-login-listeners', 'dc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/bots',
                component: ComponentCreator('/docs/sdk/javascript/2.0/bots', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/calling',
                component: ComponentCreator('/docs/sdk/javascript/2.0/calling', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/calling-custom-css',
                component: ComponentCreator('/docs/sdk/javascript/2.0/calling-custom-css', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/javascript/2.0/calling-default-calling', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/javascript/2.0/calling-direct-calling', 'a7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/calling-recording',
                component: ComponentCreator('/docs/sdk/javascript/2.0/calling-recording', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-add-members-to-group', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-change-member-scope', '585'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-create-group', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-delete-group', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-join-group', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-kick-ban-members', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-leave-group', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-retrieve-group-members', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-retrieve-groups', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-transfer-group-ownership', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/javascript/2.0/groups-update-group', 'c5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/key-concepts',
                component: ComponentCreator('/docs/sdk/javascript/2.0/key-concepts', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/javascript/2.0/message-structure-and-hierarchy', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-additional-message-filtering', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-delete-conversation', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-delete-message', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-edit-message', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-receipts', 'a27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-receive-message',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-receive-message', 'c37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-retrieve-conversations', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-send-message', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/javascript/2.0/messaging-typing-indicators', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/overview',
                component: ComponentCreator('/docs/sdk/javascript/2.0/overview', 'fad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/rate-limits',
                component: ComponentCreator('/docs/sdk/javascript/2.0/rate-limits', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/resources',
                component: ComponentCreator('/docs/sdk/javascript/2.0/resources', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/javascript/2.0/resources-all-real-time-listeners', '76e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/resources-upgrading-from-v1',
                component: ComponentCreator('/docs/sdk/javascript/2.0/resources-upgrading-from-v1', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/setup',
                component: ComponentCreator('/docs/sdk/javascript/2.0/setup', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/javascript/2.0/threaded-messages', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/user-presence',
                component: ComponentCreator('/docs/sdk/javascript/2.0/user-presence', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/users',
                component: ComponentCreator('/docs/sdk/javascript/2.0/users', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/users-block-users',
                component: ComponentCreator('/docs/sdk/javascript/2.0/users-block-users', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/javascript/2.0/users-retrieve-users', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/users-user-management',
                component: ComponentCreator('/docs/sdk/javascript/2.0/users-user-management', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/2.0/webhooks',
                component: ComponentCreator('/docs/sdk/javascript/2.0/webhooks', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/javascript/3.0',
        component: ComponentCreator('/docs/sdk/javascript/3.0', '61b'),
        routes: [
          {
            path: '/docs/sdk/javascript/3.0',
            component: ComponentCreator('/docs/sdk/javascript/3.0', '816'),
            routes: [
              {
                path: '/docs/sdk/javascript/3.0/advanced',
                component: ComponentCreator('/docs/sdk/javascript/3.0/advanced', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/advanced-connection-listeners',
                component: ComponentCreator('/docs/sdk/javascript/3.0/advanced-connection-listeners', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/advanced-managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/javascript/3.0/advanced-managing-web-socket-connections-manually', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/authentication',
                component: ComponentCreator('/docs/sdk/javascript/3.0/authentication', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/javascript/3.0/authentication-login-listeners', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/bots',
                component: ComponentCreator('/docs/sdk/javascript/3.0/bots', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling', '7ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-custom-css',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-custom-css', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-default-calling', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-direct-calling', 'dab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-recording',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-recording', '903'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-recording-v3',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-recording-v3', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/javascript/3.0/calling-v3', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-add-members-to-group', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-change-member-scope', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-create-group', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-delete-group', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-join-group', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-kick-ban-members', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-leave-group', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-retrieve-group-members', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-retrieve-groups', '737'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-transfer-group-ownership', '531'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/javascript/3.0/groups-update-group', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/javascript/3.0/key-concepts', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/javascript/3.0/message-structure-and-hierarchy', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-additional-message-filtering', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-delete-conversation', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-delete-message', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-edit-message', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-receipts', '442'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-receive-message',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-receive-message', '420'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-retrieve-conversations', 'c28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-send-message', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-transient-messages',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-transient-messages', '404'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/javascript/3.0/messaging-typing-indicators', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/overview',
                component: ComponentCreator('/docs/sdk/javascript/3.0/overview', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/presenter-mode',
                component: ComponentCreator('/docs/sdk/javascript/3.0/presenter-mode', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/javascript/3.0/rate-limits', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/resources',
                component: ComponentCreator('/docs/sdk/javascript/3.0/resources', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/javascript/3.0/resources-all-real-time-listeners', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/resources-upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/javascript/3.0/resources-upgrading-from-v2', 'c6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/setup',
                component: ComponentCreator('/docs/sdk/javascript/3.0/setup', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/javascript/3.0/threaded-messages', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/javascript/3.0/user-presence', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/users',
                component: ComponentCreator('/docs/sdk/javascript/3.0/users', '125'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/users-block-users',
                component: ComponentCreator('/docs/sdk/javascript/3.0/users-block-users', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/javascript/3.0/users-retrieve-users', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/users-user-management',
                component: ComponentCreator('/docs/sdk/javascript/3.0/users-user-management', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/v3-default-call',
                component: ComponentCreator('/docs/sdk/javascript/3.0/v3-default-call', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/v3-direct-calling',
                component: ComponentCreator('/docs/sdk/javascript/3.0/v3-direct-calling', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/v3-setup',
                component: ComponentCreator('/docs/sdk/javascript/3.0/v3-setup', '2b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/javascript/3.0/video-view-customisation', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/video-view-customisation-v3',
                component: ComponentCreator('/docs/sdk/javascript/3.0/video-view-customisation-v3', '584'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/virtual-background',
                component: ComponentCreator('/docs/sdk/javascript/3.0/virtual-background', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/virtual-background-v3',
                component: ComponentCreator('/docs/sdk/javascript/3.0/virtual-background-v3', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/3.0/webhooks',
                component: ComponentCreator('/docs/sdk/javascript/3.0/webhooks', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/javascript',
        component: ComponentCreator('/docs/sdk/javascript', '435'),
        routes: [
          {
            path: '/docs/sdk/javascript',
            component: ComponentCreator('/docs/sdk/javascript', '24d'),
            routes: [
              {
                path: '/docs/sdk/javascript/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/javascript/additional-message-filtering', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/advanced-overview',
                component: ComponentCreator('/docs/sdk/javascript/advanced-overview', '434'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/javascript/all-real-time-listeners', '289'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/appendix',
                component: ComponentCreator('/docs/sdk/javascript/appendix', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/authentication-overview',
                component: ComponentCreator('/docs/sdk/javascript/authentication-overview', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/block-users',
                component: ComponentCreator('/docs/sdk/javascript/block-users', '9e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/breakout-groups',
                component: ComponentCreator('/docs/sdk/javascript/breakout-groups', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/call-logs',
                component: ComponentCreator('/docs/sdk/javascript/call-logs', '9b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/calling-overview',
                component: ComponentCreator('/docs/sdk/javascript/calling-overview', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/calling-setup',
                component: ComponentCreator('/docs/sdk/javascript/calling-setup', '574'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/connection-status',
                component: ComponentCreator('/docs/sdk/javascript/connection-status', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/create-group',
                component: ComponentCreator('/docs/sdk/javascript/create-group', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/custom-css',
                component: ComponentCreator('/docs/sdk/javascript/custom-css', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/default-call',
                component: ComponentCreator('/docs/sdk/javascript/default-call', '8ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/delete-conversation',
                component: ComponentCreator('/docs/sdk/javascript/delete-conversation', '37c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/delete-group',
                component: ComponentCreator('/docs/sdk/javascript/delete-group', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/delete-message',
                component: ComponentCreator('/docs/sdk/javascript/delete-message', 'be7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/javascript/delivery-read-receipts', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/direct-call',
                component: ComponentCreator('/docs/sdk/javascript/direct-call', 'd47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/edit-message',
                component: ComponentCreator('/docs/sdk/javascript/edit-message', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/group-add-members',
                component: ComponentCreator('/docs/sdk/javascript/group-add-members', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/javascript/group-change-member-scope', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/group-kick-ban-members',
                component: ComponentCreator('/docs/sdk/javascript/group-kick-ban-members', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/groups-overview',
                component: ComponentCreator('/docs/sdk/javascript/groups-overview', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/interactive-messages',
                component: ComponentCreator('/docs/sdk/javascript/interactive-messages', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/join-group',
                component: ComponentCreator('/docs/sdk/javascript/join-group', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/key-concepts',
                component: ComponentCreator('/docs/sdk/javascript/key-concepts', '8a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/leave-group',
                component: ComponentCreator('/docs/sdk/javascript/leave-group', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/login-listener',
                component: ComponentCreator('/docs/sdk/javascript/login-listener', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/managing-web-sockets-connections-manually',
                component: ComponentCreator('/docs/sdk/javascript/managing-web-sockets-connections-manually', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/mentions',
                component: ComponentCreator('/docs/sdk/javascript/mentions', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/javascript/message-structure-and-hierarchy', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/messaging-overview',
                component: ComponentCreator('/docs/sdk/javascript/messaging-overview', '851'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/overview',
                component: ComponentCreator('/docs/sdk/javascript/overview', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/presenter-mode',
                component: ComponentCreator('/docs/sdk/javascript/presenter-mode', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/rate-limits',
                component: ComponentCreator('/docs/sdk/javascript/rate-limits', '00d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/reactions',
                component: ComponentCreator('/docs/sdk/javascript/reactions', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/receive-message',
                component: ComponentCreator('/docs/sdk/javascript/receive-message', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/recording',
                component: ComponentCreator('/docs/sdk/javascript/recording', '063'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/resources-overview',
                component: ComponentCreator('/docs/sdk/javascript/resources-overview', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/javascript/retrieve-conversations', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/javascript/retrieve-group-members', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/retrieve-groups',
                component: ComponentCreator('/docs/sdk/javascript/retrieve-groups', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/retrieve-users',
                component: ComponentCreator('/docs/sdk/javascript/retrieve-users', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/send-message',
                component: ComponentCreator('/docs/sdk/javascript/send-message', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/setup-sdk',
                component: ComponentCreator('/docs/sdk/javascript/setup-sdk', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/threaded-messages',
                component: ComponentCreator('/docs/sdk/javascript/threaded-messages', '02c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/javascript/transfer-group-ownership', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/transient-messages',
                component: ComponentCreator('/docs/sdk/javascript/transient-messages', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/typing-indicators',
                component: ComponentCreator('/docs/sdk/javascript/typing-indicators', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/update-group',
                component: ComponentCreator('/docs/sdk/javascript/update-group', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/upgrading-from-v3',
                component: ComponentCreator('/docs/sdk/javascript/upgrading-from-v3', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/user-management',
                component: ComponentCreator('/docs/sdk/javascript/user-management', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/user-presence',
                component: ComponentCreator('/docs/sdk/javascript/user-presence', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/users-overview',
                component: ComponentCreator('/docs/sdk/javascript/users-overview', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/video-view-customisation',
                component: ComponentCreator('/docs/sdk/javascript/video-view-customisation', '5ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/javascript/virtual-background',
                component: ComponentCreator('/docs/sdk/javascript/virtual-background', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/sdk/react-native',
    component: ComponentCreator('/docs/sdk/react-native', 'b93'),
    routes: [
      {
        path: '/docs/sdk/react-native/2.0',
        component: ComponentCreator('/docs/sdk/react-native/2.0', '405'),
        routes: [
          {
            path: '/docs/sdk/react-native/2.0',
            component: ComponentCreator('/docs/sdk/react-native/2.0', '4e1'),
            routes: [
              {
                path: '/docs/sdk/react-native/2.0/advanced',
                component: ComponentCreator('/docs/sdk/react-native/2.0/advanced', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/advanced-connection-listener',
                component: ComponentCreator('/docs/sdk/react-native/2.0/advanced-connection-listener', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/authentication',
                component: ComponentCreator('/docs/sdk/react-native/2.0/authentication', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/react-native/2.0/authentication-login-listeners', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/bots',
                component: ComponentCreator('/docs/sdk/react-native/2.0/bots', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/calling',
                component: ComponentCreator('/docs/sdk/react-native/2.0/calling', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/react-native/2.0/calling-default-calling', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/react-native/2.0/calling-direct-calling', '39c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-add-members-to-group', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-change-member-scope', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-create-group', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-delete-group', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-join-group', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-kick-ban-members', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-leave-group', '00a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-retrieve-group-members', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-retrieve-groups', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-transfer-group-ownership', 'd11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/react-native/2.0/groups-update-group', 'f10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/key-concepts',
                component: ComponentCreator('/docs/sdk/react-native/2.0/key-concepts', 'a4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/react-native/2.0/message-structure-and-hierarchy', '40a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging', 'ad3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-additional-message-filtering', '4d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-delete-conversation', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-delete-message', 'd8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-edit-message', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-receipts', 'b80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-receive-messages', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-retrieve-conversations', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-send-message', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/react-native/2.0/messaging-typing-indicators', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/overview',
                component: ComponentCreator('/docs/sdk/react-native/2.0/overview', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/rate-limits',
                component: ComponentCreator('/docs/sdk/react-native/2.0/rate-limits', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/resources',
                component: ComponentCreator('/docs/sdk/react-native/2.0/resources', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/react-native/2.0/resources-all-real-time-listeners', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/resources-push-notification-setup',
                component: ComponentCreator('/docs/sdk/react-native/2.0/resources-push-notification-setup', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/resources-upgrading-from-v1',
                component: ComponentCreator('/docs/sdk/react-native/2.0/resources-upgrading-from-v1', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/setup',
                component: ComponentCreator('/docs/sdk/react-native/2.0/setup', 'e2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/react-native/2.0/threaded-messages', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/user-presence',
                component: ComponentCreator('/docs/sdk/react-native/2.0/user-presence', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/users',
                component: ComponentCreator('/docs/sdk/react-native/2.0/users', '7c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/users-block-users',
                component: ComponentCreator('/docs/sdk/react-native/2.0/users-block-users', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/react-native/2.0/users-retrieve-users', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/users-user-management',
                component: ComponentCreator('/docs/sdk/react-native/2.0/users-user-management', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/2.0/webhooks',
                component: ComponentCreator('/docs/sdk/react-native/2.0/webhooks', '621'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/react-native/3.0',
        component: ComponentCreator('/docs/sdk/react-native/3.0', '85b'),
        routes: [
          {
            path: '/docs/sdk/react-native/3.0',
            component: ComponentCreator('/docs/sdk/react-native/3.0', '7ca'),
            routes: [
              {
                path: '/docs/sdk/react-native/3.0/advanced',
                component: ComponentCreator('/docs/sdk/react-native/3.0/advanced', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/advanced-connection-listener',
                component: ComponentCreator('/docs/sdk/react-native/3.0/advanced-connection-listener', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/authentication',
                component: ComponentCreator('/docs/sdk/react-native/3.0/authentication', '735'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/authentication-login-listeners',
                component: ComponentCreator('/docs/sdk/react-native/3.0/authentication-login-listeners', '2b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/bots',
                component: ComponentCreator('/docs/sdk/react-native/3.0/bots', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/calling',
                component: ComponentCreator('/docs/sdk/react-native/3.0/calling', '9dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/calling-default-calling',
                component: ComponentCreator('/docs/sdk/react-native/3.0/calling-default-calling', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/calling-direct-calling',
                component: ComponentCreator('/docs/sdk/react-native/3.0/calling-direct-calling', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/calling-recording',
                component: ComponentCreator('/docs/sdk/react-native/3.0/calling-recording', '89d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/calling-v3',
                component: ComponentCreator('/docs/sdk/react-native/3.0/calling-v3', '7cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-add-members-to-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-add-members-to-group', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-change-member-scope',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-change-member-scope', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-create-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-create-group', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-delete-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-delete-group', '0de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-join-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-join-group', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-kick-ban-members',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-kick-ban-members', '256'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-leave-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-leave-group', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-retrieve-group-members',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-retrieve-group-members', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-retrieve-groups',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-retrieve-groups', '4fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-transfer-group-ownership', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/groups-update-group',
                component: ComponentCreator('/docs/sdk/react-native/3.0/groups-update-group', '354'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/key-concepts',
                component: ComponentCreator('/docs/sdk/react-native/3.0/key-concepts', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/managing-web-socket-connections-manually',
                component: ComponentCreator('/docs/sdk/react-native/3.0/managing-web-socket-connections-manually', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/react-native/3.0/message-structure-and-hierarchy', 'ba1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging', '8e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-additional-message-filtering',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-additional-message-filtering', 'ea0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-delete-conversation',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-delete-conversation', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-delete-message',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-delete-message', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-edit-message',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-edit-message', 'a49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-receipts',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-receipts', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-receive-messages',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-receive-messages', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-retrieve-conversations',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-retrieve-conversations', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-send-message',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-send-message', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/messaging-typing-indicators',
                component: ComponentCreator('/docs/sdk/react-native/3.0/messaging-typing-indicators', '6d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/overview',
                component: ComponentCreator('/docs/sdk/react-native/3.0/overview', 'c35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/presenter-mode',
                component: ComponentCreator('/docs/sdk/react-native/3.0/presenter-mode', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/rate-limits',
                component: ComponentCreator('/docs/sdk/react-native/3.0/rate-limits', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/recording--beta--v3',
                component: ComponentCreator('/docs/sdk/react-native/3.0/recording--beta--v3', 'e2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/resources',
                component: ComponentCreator('/docs/sdk/react-native/3.0/resources', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/resources-all-real-time-listeners',
                component: ComponentCreator('/docs/sdk/react-native/3.0/resources-all-real-time-listeners', '161'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/resources-push-notification-setup',
                component: ComponentCreator('/docs/sdk/react-native/3.0/resources-push-notification-setup', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/resources-upgrading-from-v2',
                component: ComponentCreator('/docs/sdk/react-native/3.0/resources-upgrading-from-v2', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/setup',
                component: ComponentCreator('/docs/sdk/react-native/3.0/setup', 'cc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/threaded-messages',
                component: ComponentCreator('/docs/sdk/react-native/3.0/threaded-messages', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/transient-messages',
                component: ComponentCreator('/docs/sdk/react-native/3.0/transient-messages', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/user-presence',
                component: ComponentCreator('/docs/sdk/react-native/3.0/user-presence', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/users',
                component: ComponentCreator('/docs/sdk/react-native/3.0/users', '074'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/users-block-users',
                component: ComponentCreator('/docs/sdk/react-native/3.0/users-block-users', 'e21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/users-retrieve-users',
                component: ComponentCreator('/docs/sdk/react-native/3.0/users-retrieve-users', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/users-user-management',
                component: ComponentCreator('/docs/sdk/react-native/3.0/users-user-management', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/v3-default-calling',
                component: ComponentCreator('/docs/sdk/react-native/3.0/v3-default-calling', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/v3-direct-calling',
                component: ComponentCreator('/docs/sdk/react-native/3.0/v3-direct-calling', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/v3-setup',
                component: ComponentCreator('/docs/sdk/react-native/3.0/v3-setup', 'fdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/v3-video-view-customisation',
                component: ComponentCreator('/docs/sdk/react-native/3.0/v3-video-view-customisation', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/video-view-customisation',
                component: ComponentCreator('/docs/sdk/react-native/3.0/video-view-customisation', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/3.0/webhooks',
                component: ComponentCreator('/docs/sdk/react-native/3.0/webhooks', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/sdk/react-native',
        component: ComponentCreator('/docs/sdk/react-native', '2fc'),
        routes: [
          {
            path: '/docs/sdk/react-native',
            component: ComponentCreator('/docs/sdk/react-native', '3e3'),
            routes: [
              {
                path: '/docs/sdk/react-native/additional-message-filtering',
                component: ComponentCreator('/docs/sdk/react-native/additional-message-filtering', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/advanced-overview',
                component: ComponentCreator('/docs/sdk/react-native/advanced-overview', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/authentication-overview',
                component: ComponentCreator('/docs/sdk/react-native/authentication-overview', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/block-users',
                component: ComponentCreator('/docs/sdk/react-native/block-users', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/call-logs',
                component: ComponentCreator('/docs/sdk/react-native/call-logs', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/calling-overview',
                component: ComponentCreator('/docs/sdk/react-native/calling-overview', '450'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/calling-setup',
                component: ComponentCreator('/docs/sdk/react-native/calling-setup', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/connection-status',
                component: ComponentCreator('/docs/sdk/react-native/connection-status', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/create-group',
                component: ComponentCreator('/docs/sdk/react-native/create-group', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/default-call',
                component: ComponentCreator('/docs/sdk/react-native/default-call', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/delete-conversation',
                component: ComponentCreator('/docs/sdk/react-native/delete-conversation', '49d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/delete-group',
                component: ComponentCreator('/docs/sdk/react-native/delete-group', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/delete-message',
                component: ComponentCreator('/docs/sdk/react-native/delete-message', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/delivery-read-receipts',
                component: ComponentCreator('/docs/sdk/react-native/delivery-read-receipts', 'afe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/direct-call',
                component: ComponentCreator('/docs/sdk/react-native/direct-call', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/edit-message',
                component: ComponentCreator('/docs/sdk/react-native/edit-message', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/expo-integration-guide',
                component: ComponentCreator('/docs/sdk/react-native/expo-integration-guide', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/group-add-members',
                component: ComponentCreator('/docs/sdk/react-native/group-add-members', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/group-change-member-scope',
                component: ComponentCreator('/docs/sdk/react-native/group-change-member-scope', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/group-kick-ban-members',
                component: ComponentCreator('/docs/sdk/react-native/group-kick-ban-members', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/groups-overview',
                component: ComponentCreator('/docs/sdk/react-native/groups-overview', 'e0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/interactive-messages',
                component: ComponentCreator('/docs/sdk/react-native/interactive-messages', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/join-group',
                component: ComponentCreator('/docs/sdk/react-native/join-group', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/key-concepts',
                component: ComponentCreator('/docs/sdk/react-native/key-concepts', 'bdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/leave-group',
                component: ComponentCreator('/docs/sdk/react-native/leave-group', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/login-listener',
                component: ComponentCreator('/docs/sdk/react-native/login-listener', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/managing-web-sockets-connections-manually',
                component: ComponentCreator('/docs/sdk/react-native/managing-web-sockets-connections-manually', 'b69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/mentions',
                component: ComponentCreator('/docs/sdk/react-native/mentions', '512'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/sdk/react-native/message-structure-and-hierarchy', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/messaging-overview',
                component: ComponentCreator('/docs/sdk/react-native/messaging-overview', '34d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/overview',
                component: ComponentCreator('/docs/sdk/react-native/overview', 'ccb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/presenter-mode',
                component: ComponentCreator('/docs/sdk/react-native/presenter-mode', 'cad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/push-notification-setup',
                component: ComponentCreator('/docs/sdk/react-native/push-notification-setup', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/rate-limits',
                component: ComponentCreator('/docs/sdk/react-native/rate-limits', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/reactions',
                component: ComponentCreator('/docs/sdk/react-native/reactions', '9a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/real-time-listeners',
                component: ComponentCreator('/docs/sdk/react-native/real-time-listeners', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/receive-messages',
                component: ComponentCreator('/docs/sdk/react-native/receive-messages', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/recording',
                component: ComponentCreator('/docs/sdk/react-native/recording', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/resources-overview',
                component: ComponentCreator('/docs/sdk/react-native/resources-overview', '87e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/retrieve-conversations',
                component: ComponentCreator('/docs/sdk/react-native/retrieve-conversations', '4d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/retrieve-group-members',
                component: ComponentCreator('/docs/sdk/react-native/retrieve-group-members', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/retrieve-groups',
                component: ComponentCreator('/docs/sdk/react-native/retrieve-groups', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/retrieve-users',
                component: ComponentCreator('/docs/sdk/react-native/retrieve-users', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/send-message',
                component: ComponentCreator('/docs/sdk/react-native/send-message', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/setup-sdk',
                component: ComponentCreator('/docs/sdk/react-native/setup-sdk', '420'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/threaded-messages',
                component: ComponentCreator('/docs/sdk/react-native/threaded-messages', '34a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/transfer-group-ownership',
                component: ComponentCreator('/docs/sdk/react-native/transfer-group-ownership', '7b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/transient-messages',
                component: ComponentCreator('/docs/sdk/react-native/transient-messages', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/typing-indicators',
                component: ComponentCreator('/docs/sdk/react-native/typing-indicators', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/update-group',
                component: ComponentCreator('/docs/sdk/react-native/update-group', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/upgrading-from-v3',
                component: ComponentCreator('/docs/sdk/react-native/upgrading-from-v3', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/user-management',
                component: ComponentCreator('/docs/sdk/react-native/user-management', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/user-presence',
                component: ComponentCreator('/docs/sdk/react-native/user-presence', '353'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/users-overview',
                component: ComponentCreator('/docs/sdk/react-native/users-overview', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sdk/react-native/video-view-customisation',
                component: ComponentCreator('/docs/sdk/react-native/video-view-customisation', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/android',
    component: ComponentCreator('/docs/ui-kit/android', 'a4e'),
    routes: [
      {
        path: '/docs/ui-kit/android/v2',
        component: ComponentCreator('/docs/ui-kit/android/v2', '3fb'),
        routes: [
          {
            path: '/docs/ui-kit/android/v2',
            component: ComponentCreator('/docs/ui-kit/android/v2', '078'),
            routes: [
              {
                path: '/docs/ui-kit/android/v2/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/android/v2/customize-ui-kit', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v2/folder-structure-android-uikit',
                component: ComponentCreator('/docs/ui-kit/android/v2/folder-structure-android-uikit', '36f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v2/key-concepts',
                component: ComponentCreator('/docs/ui-kit/android/v2/key-concepts', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v2/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/android/v2/message-structure-and-hierarchy', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v2/overview',
                component: ComponentCreator('/docs/ui-kit/android/v2/overview', 'f57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v2/ui-components',
                component: ComponentCreator('/docs/ui-kit/android/v2/ui-components', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/android/v3',
        component: ComponentCreator('/docs/ui-kit/android/v3', 'fa3'),
        routes: [
          {
            path: '/docs/ui-kit/android/v3',
            component: ComponentCreator('/docs/ui-kit/android/v3', '50a'),
            routes: [
              {
                path: '/docs/ui-kit/android/v3/android-customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/android/v3/android-customize-ui-kit', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/android-java-ui-components',
                component: ComponentCreator('/docs/ui-kit/android/v3/android-java-ui-components', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/conversationlist',
                component: ComponentCreator('/docs/ui-kit/android/v3/conversationlist', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/folder-structure-android-uikit',
                component: ComponentCreator('/docs/ui-kit/android/v3/folder-structure-android-uikit', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/how-to-add-uikit-module',
                component: ComponentCreator('/docs/ui-kit/android/v3/how-to-add-uikit-module', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/key-concepts',
                component: ComponentCreator('/docs/ui-kit/android/v3/key-concepts', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v3/overview',
                component: ComponentCreator('/docs/ui-kit/android/v3/overview', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/android/v4',
        component: ComponentCreator('/docs/ui-kit/android/v4', '432'),
        routes: [
          {
            path: '/docs/ui-kit/android/v4',
            component: ComponentCreator('/docs/ui-kit/android/v4', 'f8a'),
            routes: [
              {
                path: '/docs/ui-kit/android/v4/action-sheet',
                component: ComponentCreator('/docs/ui-kit/android/v4/action-sheet', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/ai-features',
                component: ComponentCreator('/docs/ui-kit/android/v4/ai-features', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/audio-bubble', '27a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/avatar',
                component: ComponentCreator('/docs/ui-kit/android/v4/avatar', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/badge',
                component: ComponentCreator('/docs/ui-kit/android/v4/badge', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/banned-members',
                component: ComponentCreator('/docs/ui-kit/android/v4/banned-members', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-buttons',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-buttons', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-features',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-features', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-log-details',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-log-details', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-log-history',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-log-history', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-log-participants', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-log-recording', '83a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-log-with-details', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-logs',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-logs', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/call-overview',
                component: ComponentCreator('/docs/ui-kit/android/v4/call-overview', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/components-overview',
                component: ComponentCreator('/docs/ui-kit/android/v4/components-overview', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/contacts',
                component: ComponentCreator('/docs/ui-kit/android/v4/contacts', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/conversations',
                component: ComponentCreator('/docs/ui-kit/android/v4/conversations', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/android/v4/conversations-with-messages', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/core-features',
                component: ComponentCreator('/docs/ui-kit/android/v4/core-features', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/create-group',
                component: ComponentCreator('/docs/ui-kit/android/v4/create-group', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/date',
                component: ComponentCreator('/docs/ui-kit/android/v4/date', 'dff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/events',
                component: ComponentCreator('/docs/ui-kit/android/v4/events', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/extensions',
                component: ComponentCreator('/docs/ui-kit/android/v4/extensions', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/file-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/file-bubble', '315'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/getting-started',
                component: ComponentCreator('/docs/ui-kit/android/v4/getting-started', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/group-add-members',
                component: ComponentCreator('/docs/ui-kit/android/v4/group-add-members', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/group-details',
                component: ComponentCreator('/docs/ui-kit/android/v4/group-details', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/group-members',
                component: ComponentCreator('/docs/ui-kit/android/v4/group-members', '7fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/groups',
                component: ComponentCreator('/docs/ui-kit/android/v4/groups', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/android/v4/groups-with-messages', '391'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/image-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/image-bubble', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/incoming-call',
                component: ComponentCreator('/docs/ui-kit/android/v4/incoming-call', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-action-entity', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-button-element', 'c69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-card-bubble', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-card-message', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-checkbox-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-checkbox-element', '412'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-custom-message',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-custom-message', 'e32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-date-time-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-date-time-element', '7d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-element-entity',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-element-entity', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-form-bubble', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-form-message', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-label-element', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-radio-button-element', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-scheduler-message',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-scheduler-message', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-single-select-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-single-select-element', 'a5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-spinner-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-spinner-element', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/interactive-textinput-element',
                component: ComponentCreator('/docs/ui-kit/android/v4/interactive-textinput-element', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/android/v4/join-protected-group', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/list-base',
                component: ComponentCreator('/docs/ui-kit/android/v4/list-base', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/list-item',
                component: ComponentCreator('/docs/ui-kit/android/v4/list-item', '8e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/localize',
                component: ComponentCreator('/docs/ui-kit/android/v4/localize', '746'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/media-recorder',
                component: ComponentCreator('/docs/ui-kit/android/v4/media-recorder', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/android/v4/mentions-formatter-guide', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-bubble', 'a9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-composer',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-composer', '815'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-header',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-header', '644'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-information',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-information', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-input',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-input', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-list',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-list', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/message-template',
                component: ComponentCreator('/docs/ui-kit/android/v4/message-template', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/messages',
                component: ComponentCreator('/docs/ui-kit/android/v4/messages', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/methods',
                component: ComponentCreator('/docs/ui-kit/android/v4/methods', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/android/v4/multi-tab-chat-ui-guide', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/android/v4/ongoing-call', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/android/v4/outgoing-call', 'e0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/overview',
                component: ComponentCreator('/docs/ui-kit/android/v4/overview', '399'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/receipt',
                component: ComponentCreator('/docs/ui-kit/android/v4/receipt', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/android/v4/shortcut-formatter-guide', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/sound-manager',
                component: ComponentCreator('/docs/ui-kit/android/v4/sound-manager', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/status-indicator',
                component: ComponentCreator('/docs/ui-kit/android/v4/status-indicator', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/text-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/text-bubble', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/theme',
                component: ComponentCreator('/docs/ui-kit/android/v4/theme', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/android/v4/threaded-messages', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/android/v4/transfer-ownership', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/users',
                component: ComponentCreator('/docs/ui-kit/android/v4/users', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/android/v4/users-with-messages', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v4/video-bubble',
                component: ComponentCreator('/docs/ui-kit/android/v4/video-bubble', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/android/v5',
        component: ComponentCreator('/docs/ui-kit/android/v5', 'fde'),
        routes: [
          {
            path: '/docs/ui-kit/android/v5',
            component: ComponentCreator('/docs/ui-kit/android/v5', 'fa1'),
            routes: [
              {
                path: '/docs/ui-kit/android/v5/ai-features',
                component: ComponentCreator('/docs/ui-kit/android/v5/ai-features', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/call-buttons',
                component: ComponentCreator('/docs/ui-kit/android/v5/call-buttons', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/call-features',
                component: ComponentCreator('/docs/ui-kit/android/v5/call-features', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/call-logs',
                component: ComponentCreator('/docs/ui-kit/android/v5/call-logs', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/color-resources',
                component: ComponentCreator('/docs/ui-kit/android/v5/color-resources', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/component-styling',
                component: ComponentCreator('/docs/ui-kit/android/v5/component-styling', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/components-overview',
                component: ComponentCreator('/docs/ui-kit/android/v5/components-overview', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/conversations',
                component: ComponentCreator('/docs/ui-kit/android/v5/conversations', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/core-features',
                component: ComponentCreator('/docs/ui-kit/android/v5/core-features', 'a4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/events',
                component: ComponentCreator('/docs/ui-kit/android/v5/events', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/extensions',
                component: ComponentCreator('/docs/ui-kit/android/v5/extensions', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/getting-started',
                component: ComponentCreator('/docs/ui-kit/android/v5/getting-started', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/group-members',
                component: ComponentCreator('/docs/ui-kit/android/v5/group-members', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/groups',
                component: ComponentCreator('/docs/ui-kit/android/v5/groups', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/incoming-call',
                component: ComponentCreator('/docs/ui-kit/android/v5/incoming-call', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/localize',
                component: ComponentCreator('/docs/ui-kit/android/v5/localize', '304'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/android/v5/mentions-formatter-guide', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/message-bubble-styling',
                component: ComponentCreator('/docs/ui-kit/android/v5/message-bubble-styling', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/message-composer',
                component: ComponentCreator('/docs/ui-kit/android/v5/message-composer', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/message-header',
                component: ComponentCreator('/docs/ui-kit/android/v5/message-header', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/message-list',
                component: ComponentCreator('/docs/ui-kit/android/v5/message-list', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/message-template',
                component: ComponentCreator('/docs/ui-kit/android/v5/message-template', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/methods',
                component: ComponentCreator('/docs/ui-kit/android/v5/methods', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/android/v5/outgoing-call', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/overview',
                component: ComponentCreator('/docs/ui-kit/android/v5/overview', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/android/v5/shortcut-formatter-guide', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/sound-manager',
                component: ComponentCreator('/docs/ui-kit/android/v5/sound-manager', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/theme-introduction',
                component: ComponentCreator('/docs/ui-kit/android/v5/theme-introduction', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/threaded-messages-header',
                component: ComponentCreator('/docs/ui-kit/android/v5/threaded-messages-header', '1d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/android/v5/users',
                component: ComponentCreator('/docs/ui-kit/android/v5/users', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/angular',
    component: ComponentCreator('/docs/ui-kit/angular', '586'),
    routes: [
      {
        path: '/docs/ui-kit/angular/2.0',
        component: ComponentCreator('/docs/ui-kit/angular/2.0', 'b65'),
        routes: [
          {
            path: '/docs/ui-kit/angular/2.0',
            component: ComponentCreator('/docs/ui-kit/angular/2.0', '649'),
            routes: [
              {
                path: '/docs/ui-kit/angular/2.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/angular/2.0/key-concepts', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/angular/2.0/message-structure-and-hierarchy', '4ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/2.0/overview',
                component: ComponentCreator('/docs/ui-kit/angular/2.0/overview', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/2.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/angular/2.0/ui-components', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/angular/3.0',
        component: ComponentCreator('/docs/ui-kit/angular/3.0', '075'),
        routes: [
          {
            path: '/docs/ui-kit/angular/3.0',
            component: ComponentCreator('/docs/ui-kit/angular/3.0', '93d'),
            routes: [
              {
                path: '/docs/ui-kit/angular/3.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/angular/3.0/key-concepts', '12e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/3.0/overview',
                component: ComponentCreator('/docs/ui-kit/angular/3.0/overview', 'ace'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/3.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/angular/3.0/ui-components', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/angular',
        component: ComponentCreator('/docs/ui-kit/angular', '808'),
        routes: [
          {
            path: '/docs/ui-kit/angular',
            component: ComponentCreator('/docs/ui-kit/angular', '6dc'),
            routes: [
              {
                path: '/docs/ui-kit/angular/action-sheet',
                component: ComponentCreator('/docs/ui-kit/angular/action-sheet', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/ai-features',
                component: ComponentCreator('/docs/ui-kit/angular/ai-features', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/audio-bubble', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/avatar',
                component: ComponentCreator('/docs/ui-kit/angular/avatar', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/backdrop',
                component: ComponentCreator('/docs/ui-kit/angular/backdrop', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/badge',
                component: ComponentCreator('/docs/ui-kit/angular/badge', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/button-group',
                component: ComponentCreator('/docs/ui-kit/angular/button-group', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-buttons',
                component: ComponentCreator('/docs/ui-kit/angular/call-buttons', 'ce2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-features',
                component: ComponentCreator('/docs/ui-kit/angular/call-features', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-log-details',
                component: ComponentCreator('/docs/ui-kit/angular/call-log-details', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-log-history',
                component: ComponentCreator('/docs/ui-kit/angular/call-log-history', 'a39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/angular/call-log-participants', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/angular/call-log-recording', '8d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/angular/call-log-with-details', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-logs',
                component: ComponentCreator('/docs/ui-kit/angular/call-logs', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/call-overview',
                component: ComponentCreator('/docs/ui-kit/angular/call-overview', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/checkbox',
                component: ComponentCreator('/docs/ui-kit/angular/checkbox', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/cometchat-quick-view',
                component: ComponentCreator('/docs/ui-kit/angular/cometchat-quick-view', '28c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/components-overview',
                component: ComponentCreator('/docs/ui-kit/angular/components-overview', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/confirm-dialog',
                component: ComponentCreator('/docs/ui-kit/angular/confirm-dialog', '73a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/contacts',
                component: ComponentCreator('/docs/ui-kit/angular/contacts', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/conversations',
                component: ComponentCreator('/docs/ui-kit/angular/conversations', '583'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/angular/conversations-with-messages', '687'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/core-features',
                component: ComponentCreator('/docs/ui-kit/angular/core-features', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/create-group',
                component: ComponentCreator('/docs/ui-kit/angular/create-group', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/custom-message-guide',
                component: ComponentCreator('/docs/ui-kit/angular/custom-message-guide', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/custom-text-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/angular/custom-text-formatter-guide', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/date',
                component: ComponentCreator('/docs/ui-kit/angular/date', '717'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/document-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/document-bubble', 'c60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/dropdown',
                component: ComponentCreator('/docs/ui-kit/angular/dropdown', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/emoji-keyboard',
                component: ComponentCreator('/docs/ui-kit/angular/emoji-keyboard', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/events',
                component: ComponentCreator('/docs/ui-kit/angular/events', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/extensions',
                component: ComponentCreator('/docs/ui-kit/angular/extensions', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/file-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/file-bubble', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/getting-started',
                component: ComponentCreator('/docs/ui-kit/angular/getting-started', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/group-add-members',
                component: ComponentCreator('/docs/ui-kit/angular/group-add-members', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/angular/group-banned-members', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/group-details',
                component: ComponentCreator('/docs/ui-kit/angular/group-details', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/group-members',
                component: ComponentCreator('/docs/ui-kit/angular/group-members', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/angular/group-transfer-ownership', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/groups',
                component: ComponentCreator('/docs/ui-kit/angular/groups', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/angular/groups-with-messages', 'a0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/icon',
                component: ComponentCreator('/docs/ui-kit/angular/icon', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/icon-button',
                component: ComponentCreator('/docs/ui-kit/angular/icon-button', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/image-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/image-bubble', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/incoming-call',
                component: ComponentCreator('/docs/ui-kit/angular/incoming-call', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/input',
                component: ComponentCreator('/docs/ui-kit/angular/input', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-action-entity', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-button-element', '460'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-card-bubble', '6cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-card-message', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-checkbox-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-checkbox-element', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-custom-interactive-message',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-custom-interactive-message', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-date-time-picker-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-date-time-picker-element', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-dropdown-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-dropdown-element', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-element-type',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-element-type', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-form-bubble', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-form-message', 'ffb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-label-element', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-radio-button-element', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-scheduler-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-scheduler-bubble', '746'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-scheduler-message',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-scheduler-message', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-single-select-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-single-select-element', '111'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/interactive-text-input-element',
                component: ComponentCreator('/docs/ui-kit/angular/interactive-text-input-element', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/angular/join-protected-group', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/label',
                component: ComponentCreator('/docs/ui-kit/angular/label', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/list',
                component: ComponentCreator('/docs/ui-kit/angular/list', 'ec6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/list-item',
                component: ComponentCreator('/docs/ui-kit/angular/list-item', '44e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/loader',
                component: ComponentCreator('/docs/ui-kit/angular/loader', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/localize',
                component: ComponentCreator('/docs/ui-kit/angular/localize', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/media-recorder',
                component: ComponentCreator('/docs/ui-kit/angular/media-recorder', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/angular/mentions-formatter-guide', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/message-bubble', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-composer',
                component: ComponentCreator('/docs/ui-kit/angular/message-composer', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-header',
                component: ComponentCreator('/docs/ui-kit/angular/message-header', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-information',
                component: ComponentCreator('/docs/ui-kit/angular/message-information', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-input',
                component: ComponentCreator('/docs/ui-kit/angular/message-input', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-list',
                component: ComponentCreator('/docs/ui-kit/angular/message-list', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/message-template',
                component: ComponentCreator('/docs/ui-kit/angular/message-template', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/messages',
                component: ComponentCreator('/docs/ui-kit/angular/messages', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/methods',
                component: ComponentCreator('/docs/ui-kit/angular/methods', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/modal',
                component: ComponentCreator('/docs/ui-kit/angular/modal', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/angular/multi-tab-chat-ui-guide', 'e6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/new-attachment-option-guide',
                component: ComponentCreator('/docs/ui-kit/angular/new-attachment-option-guide', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/new-message-option-guide',
                component: ComponentCreator('/docs/ui-kit/angular/new-message-option-guide', 'e25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/angular/ongoing-call', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/angular/outgoing-call', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/overview',
                component: ComponentCreator('/docs/ui-kit/angular/overview', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/pop-over',
                component: ComponentCreator('/docs/ui-kit/angular/pop-over', 'ae7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/radio-button',
                component: ComponentCreator('/docs/ui-kit/angular/radio-button', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/reaction',
                component: ComponentCreator('/docs/ui-kit/angular/reaction', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/reaction-info',
                component: ComponentCreator('/docs/ui-kit/angular/reaction-info', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/reaction-list',
                component: ComponentCreator('/docs/ui-kit/angular/reaction-list', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/receipt',
                component: ComponentCreator('/docs/ui-kit/angular/receipt', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/search-input',
                component: ComponentCreator('/docs/ui-kit/angular/search-input', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/angular/shortcut-formatter-guide', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/singleselect',
                component: ComponentCreator('/docs/ui-kit/angular/singleselect', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/sound-manager',
                component: ComponentCreator('/docs/ui-kit/angular/sound-manager', 'd96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/status-indicator',
                component: ComponentCreator('/docs/ui-kit/angular/status-indicator', '9d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/text-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/text-bubble', '1b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/theme',
                component: ComponentCreator('/docs/ui-kit/angular/theme', '08a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/angular/threaded-messages', '216'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/url-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/angular/url-formatter-guide', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/user-details',
                component: ComponentCreator('/docs/ui-kit/angular/user-details', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/user-member-wrapper',
                component: ComponentCreator('/docs/ui-kit/angular/user-member-wrapper', '302'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/users',
                component: ComponentCreator('/docs/ui-kit/angular/users', '5ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/angular/users-with-messages', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/angular/video-bubble',
                component: ComponentCreator('/docs/ui-kit/angular/video-bubble', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/flutter',
    component: ComponentCreator('/docs/ui-kit/flutter', 'c23'),
    routes: [
      {
        path: '/docs/ui-kit/flutter/5.0',
        component: ComponentCreator('/docs/ui-kit/flutter/5.0', 'a92'),
        routes: [
          {
            path: '/docs/ui-kit/flutter/5.0',
            component: ComponentCreator('/docs/ui-kit/flutter/5.0', '404'),
            routes: [
              {
                path: '/docs/ui-kit/flutter/5.0/ai-features',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/ai-features', 'f0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/call-buttons',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/call-buttons', '012'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/call-features',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/call-features', '79d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/call-logs',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/call-logs', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/color-resources',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/color-resources', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/component-styling',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/component-styling', 'e2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/components-overview',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/components-overview', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/conversations',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/conversations', '2e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/core-features',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/core-features', '115'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/events',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/events', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/extensions',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/extensions', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/getting-started',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/getting-started', '3ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/group-members',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/group-members', 'd2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/groups',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/groups', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/incoming-call',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/incoming-call', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/localize',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/localize', '7f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/mentions-formatter-guide', '2a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/message-bubble-styling',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/message-bubble-styling', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/message-composer',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/message-composer', '867'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/message-header',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/message-header', 'baf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/message-list',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/message-list', '51d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/message-template',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/message-template', '24e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/methods',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/methods', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/multi-tab-chat-ui-guide', '26f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/ongoing-call', '343'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/outgoing-call', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/overview',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/overview', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/shortcut-formatter-guide', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/shortcut-formatter-guide', '503'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/sound-manager',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/sound-manager', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/theme-introduction',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/theme-introduction', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/threaded-messages-header',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/threaded-messages-header', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/5.0/users',
                component: ComponentCreator('/docs/ui-kit/flutter/5.0/users', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/flutter',
        component: ComponentCreator('/docs/ui-kit/flutter', 'ba1'),
        routes: [
          {
            path: '/docs/ui-kit/flutter',
            component: ComponentCreator('/docs/ui-kit/flutter', '314'),
            routes: [
              {
                path: '/docs/ui-kit/flutter/action-sheet',
                component: ComponentCreator('/docs/ui-kit/flutter/action-sheet', 'ccf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/ai-features',
                component: ComponentCreator('/docs/ui-kit/flutter/ai-features', '92a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/audio-bubble', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/avatar',
                component: ComponentCreator('/docs/ui-kit/flutter/avatar', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/badge',
                component: ComponentCreator('/docs/ui-kit/flutter/badge', 'f77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/button',
                component: ComponentCreator('/docs/ui-kit/flutter/button', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/call-bubble', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-buttons',
                component: ComponentCreator('/docs/ui-kit/flutter/call-buttons', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-features',
                component: ComponentCreator('/docs/ui-kit/flutter/call-features', '001'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-log-details',
                component: ComponentCreator('/docs/ui-kit/flutter/call-log-details', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-log-history',
                component: ComponentCreator('/docs/ui-kit/flutter/call-log-history', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/flutter/call-log-participants', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/flutter/call-log-recording', '368'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/flutter/call-log-with-details', '96e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-logs',
                component: ComponentCreator('/docs/ui-kit/flutter/call-logs', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/call-overview',
                component: ComponentCreator('/docs/ui-kit/flutter/call-overview', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/card',
                component: ComponentCreator('/docs/ui-kit/flutter/card', 'a0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/components-overview',
                component: ComponentCreator('/docs/ui-kit/flutter/components-overview', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/confirm-dialog',
                component: ComponentCreator('/docs/ui-kit/flutter/confirm-dialog', '2c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/contacts',
                component: ComponentCreator('/docs/ui-kit/flutter/contacts', '4a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/conversations',
                component: ComponentCreator('/docs/ui-kit/flutter/conversations', 'e52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/flutter/conversations-with-messages', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/core-features',
                component: ComponentCreator('/docs/ui-kit/flutter/core-features', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/create-group',
                component: ComponentCreator('/docs/ui-kit/flutter/create-group', '9a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/date',
                component: ComponentCreator('/docs/ui-kit/flutter/date', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/emoji-keyboard',
                component: ComponentCreator('/docs/ui-kit/flutter/emoji-keyboard', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/events',
                component: ComponentCreator('/docs/ui-kit/flutter/events', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/extensions',
                component: ComponentCreator('/docs/ui-kit/flutter/extensions', 'bd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/file-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/file-bubble', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/getting-started',
                component: ComponentCreator('/docs/ui-kit/flutter/getting-started', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/group-add-members',
                component: ComponentCreator('/docs/ui-kit/flutter/group-add-members', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/flutter/group-banned-members', 'a67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/group-details',
                component: ComponentCreator('/docs/ui-kit/flutter/group-details', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/group-members',
                component: ComponentCreator('/docs/ui-kit/flutter/group-members', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/flutter/group-transfer-ownership', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/groups',
                component: ComponentCreator('/docs/ui-kit/flutter/groups', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/flutter/groups-with-messages', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/image-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/image-bubble', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/incoming-call',
                component: ComponentCreator('/docs/ui-kit/flutter/incoming-call', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-action-entity', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-button-element', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-card-bubble', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-card-message', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-check-box-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-check-box-element', 'd2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-date-time-picker-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-date-time-picker-element', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-dropdown-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-dropdown-element', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-element-entity',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-element-entity', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-form-bubble', 'edd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-form-message', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-label-element', '558'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-radio-button-element', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-scheduler-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-scheduler-bubble', 'f93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-scheduler-message',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-scheduler-message', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/interactive-textinput-element',
                component: ComponentCreator('/docs/ui-kit/flutter/interactive-textinput-element', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/flutter/join-protected-group', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/list-base',
                component: ComponentCreator('/docs/ui-kit/flutter/list-base', '6b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/list-item',
                component: ComponentCreator('/docs/ui-kit/flutter/list-item', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/localize',
                component: ComponentCreator('/docs/ui-kit/flutter/localize', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/media-recorder',
                component: ComponentCreator('/docs/ui-kit/flutter/media-recorder', '90d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/mentions-formatter-guide', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/message-bubble', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-composer',
                component: ComponentCreator('/docs/ui-kit/flutter/message-composer', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-header',
                component: ComponentCreator('/docs/ui-kit/flutter/message-header', '52f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-information',
                component: ComponentCreator('/docs/ui-kit/flutter/message-information', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-input',
                component: ComponentCreator('/docs/ui-kit/flutter/message-input', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-list',
                component: ComponentCreator('/docs/ui-kit/flutter/message-list', '96a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/message-template',
                component: ComponentCreator('/docs/ui-kit/flutter/message-template', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/messages',
                component: ComponentCreator('/docs/ui-kit/flutter/messages', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/methods',
                component: ComponentCreator('/docs/ui-kit/flutter/methods', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/multi-tab-chat-ui-guide', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/flutter/ongoing-call', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/flutter/outgoing-call', 'e21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/overview',
                component: ComponentCreator('/docs/ui-kit/flutter/overview', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/quick-view',
                component: ComponentCreator('/docs/ui-kit/flutter/quick-view', '3e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/reactions',
                component: ComponentCreator('/docs/ui-kit/flutter/reactions', '434'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/reactions-list',
                component: ComponentCreator('/docs/ui-kit/flutter/reactions-list', '0d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/receipt',
                component: ComponentCreator('/docs/ui-kit/flutter/receipt', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/flutter/shortcut-formatter-guide', 'a97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/single-select',
                component: ComponentCreator('/docs/ui-kit/flutter/single-select', 'b89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/sound-manager',
                component: ComponentCreator('/docs/ui-kit/flutter/sound-manager', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/status-indicator',
                component: ComponentCreator('/docs/ui-kit/flutter/status-indicator', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/text-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/text-bubble', 'd00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/theme',
                component: ComponentCreator('/docs/ui-kit/flutter/theme', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/flutter/threaded-messages', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/user-details',
                component: ComponentCreator('/docs/ui-kit/flutter/user-details', 'e7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/users',
                component: ComponentCreator('/docs/ui-kit/flutter/users', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/flutter/users-with-messages', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/flutter/video-bubble',
                component: ComponentCreator('/docs/ui-kit/flutter/video-bubble', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/ios',
    component: ComponentCreator('/docs/ui-kit/ios', 'b3f'),
    routes: [
      {
        path: '/docs/ui-kit/ios/v2',
        component: ComponentCreator('/docs/ui-kit/ios/v2', '4c7'),
        routes: [
          {
            path: '/docs/ui-kit/ios/v2',
            component: ComponentCreator('/docs/ui-kit/ios/v2', '833'),
            routes: [
              {
                path: '/docs/ui-kit/ios/v2/ios-customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/ios/v2/ios-customize-ui-kit', '1ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v2/key-concepts',
                component: ComponentCreator('/docs/ui-kit/ios/v2/key-concepts', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v2/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/ios/v2/message-structure-and-hierarchy', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v2/overview',
                component: ComponentCreator('/docs/ui-kit/ios/v2/overview', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v2/ui-components',
                component: ComponentCreator('/docs/ui-kit/ios/v2/ui-components', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/ios/v3',
        component: ComponentCreator('/docs/ui-kit/ios/v3', 'a73'),
        routes: [
          {
            path: '/docs/ui-kit/ios/v3',
            component: ComponentCreator('/docs/ui-kit/ios/v3', '59a'),
            routes: [
              {
                path: '/docs/ui-kit/ios/v3/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/ios/v3/customize-ui-kit', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v3/ios-ui-components',
                component: ComponentCreator('/docs/ui-kit/ios/v3/ios-ui-components', '93a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v3/key-concepts',
                component: ComponentCreator('/docs/ui-kit/ios/v3/key-concepts', '14e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v3/overview',
                component: ComponentCreator('/docs/ui-kit/ios/v3/overview', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/ios/v4',
        component: ComponentCreator('/docs/ui-kit/ios/v4', 'f21'),
        routes: [
          {
            path: '/docs/ui-kit/ios/v4',
            component: ComponentCreator('/docs/ui-kit/ios/v4', '1ec'),
            routes: [
              {
                path: '/docs/ui-kit/ios/v4/action-sheet',
                component: ComponentCreator('/docs/ui-kit/ios/v4/action-sheet', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/ai-features',
                component: ComponentCreator('/docs/ui-kit/ios/v4/ai-features', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/audio-bubble', '815'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/avatar',
                component: ComponentCreator('/docs/ui-kit/ios/v4/avatar', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/badge',
                component: ComponentCreator('/docs/ui-kit/ios/v4/badge', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-buttons',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-buttons', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-features',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-features', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-log-details',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-log-details', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-log-history',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-log-history', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-log-participants', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-log-recording', '298'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-log-with-details', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-logs',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-logs', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/call-overview',
                component: ComponentCreator('/docs/ui-kit/ios/v4/call-overview', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/components-overview',
                component: ComponentCreator('/docs/ui-kit/ios/v4/components-overview', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/contacts',
                component: ComponentCreator('/docs/ui-kit/ios/v4/contacts', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/conversations',
                component: ComponentCreator('/docs/ui-kit/ios/v4/conversations', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/ios/v4/conversations-with-messages', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/core-features',
                component: ComponentCreator('/docs/ui-kit/ios/v4/core-features', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/create-group',
                component: ComponentCreator('/docs/ui-kit/ios/v4/create-group', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/date',
                component: ComponentCreator('/docs/ui-kit/ios/v4/date', '427'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/events',
                component: ComponentCreator('/docs/ui-kit/ios/v4/events', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/extensions',
                component: ComponentCreator('/docs/ui-kit/ios/v4/extensions', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/file-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/file-bubble', '3a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/getting-started',
                component: ComponentCreator('/docs/ui-kit/ios/v4/getting-started', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/group-add-members',
                component: ComponentCreator('/docs/ui-kit/ios/v4/group-add-members', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/ios/v4/group-banned-members', '8c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/group-details',
                component: ComponentCreator('/docs/ui-kit/ios/v4/group-details', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/group-members',
                component: ComponentCreator('/docs/ui-kit/ios/v4/group-members', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/ios/v4/group-transfer-ownership', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/groups',
                component: ComponentCreator('/docs/ui-kit/ios/v4/groups', 'd8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/ios/v4/groups-with-messages', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/image-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/image-bubble', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/incoming-call',
                component: ComponentCreator('/docs/ui-kit/ios/v4/incoming-call', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-action-entity', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-button-element', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-card-bubble', '78e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-card-message', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-check-box-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-check-box-element', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-date-time-picker-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-date-time-picker-element', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-dropdown-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-dropdown-element', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-element-entity',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-element-entity', 'd9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-form-bubble', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-form-message', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-label-element', '13c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-radio-button-element', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-scheduler-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-scheduler-bubble', '61c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-scheduler-message',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-scheduler-message', '133'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/interactive-textinput-element',
                component: ComponentCreator('/docs/ui-kit/ios/v4/interactive-textinput-element', '1c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/ios/v4/join-protected-group', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/list-base',
                component: ComponentCreator('/docs/ui-kit/ios/v4/list-base', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/list-item',
                component: ComponentCreator('/docs/ui-kit/ios/v4/list-item', 'e3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/localize',
                component: ComponentCreator('/docs/ui-kit/ios/v4/localize', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/media-recorder',
                component: ComponentCreator('/docs/ui-kit/ios/v4/media-recorder', 'ad7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/ios/v4/mentions-formatter-guide', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-bubble', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-composer',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-composer', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-header',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-header', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-information',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-information', '43c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-input',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-input', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-list',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-list', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/message-template',
                component: ComponentCreator('/docs/ui-kit/ios/v4/message-template', '94f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/messages',
                component: ComponentCreator('/docs/ui-kit/ios/v4/messages', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/methods',
                component: ComponentCreator('/docs/ui-kit/ios/v4/methods', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/ios/v4/multi-tab-chat-ui-guide', 'df0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/ios/v4/ongoing-call', 'd46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/ios/v4/outgoing-call', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/overview',
                component: ComponentCreator('/docs/ui-kit/ios/v4/overview', '265'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/quick-reactions',
                component: ComponentCreator('/docs/ui-kit/ios/v4/quick-reactions', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/reactions',
                component: ComponentCreator('/docs/ui-kit/ios/v4/reactions', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/reactions-list',
                component: ComponentCreator('/docs/ui-kit/ios/v4/reactions-list', '32c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/receipt',
                component: ComponentCreator('/docs/ui-kit/ios/v4/receipt', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/ios/v4/shortcut-formatter-guide', '838'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/sound-manager',
                component: ComponentCreator('/docs/ui-kit/ios/v4/sound-manager', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/status-indicator',
                component: ComponentCreator('/docs/ui-kit/ios/v4/status-indicator', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/text-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/text-bubble', '35d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/theme',
                component: ComponentCreator('/docs/ui-kit/ios/v4/theme', 'a6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/ios/v4/threaded-messages', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/user-details',
                component: ComponentCreator('/docs/ui-kit/ios/v4/user-details', '3fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/users',
                component: ComponentCreator('/docs/ui-kit/ios/v4/users', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/ios/v4/users-with-messages', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v4/video-bubble',
                component: ComponentCreator('/docs/ui-kit/ios/v4/video-bubble', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/ios/v5',
        component: ComponentCreator('/docs/ui-kit/ios/v5', 'b29'),
        routes: [
          {
            path: '/docs/ui-kit/ios/v5',
            component: ComponentCreator('/docs/ui-kit/ios/v5', 'd78'),
            routes: [
              {
                path: '/docs/ui-kit/ios/v5/ai-features',
                component: ComponentCreator('/docs/ui-kit/ios/v5/ai-features', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/call-buttons',
                component: ComponentCreator('/docs/ui-kit/ios/v5/call-buttons', 'f0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/call-features',
                component: ComponentCreator('/docs/ui-kit/ios/v5/call-features', 'cb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/call-logs',
                component: ComponentCreator('/docs/ui-kit/ios/v5/call-logs', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/color-resources',
                component: ComponentCreator('/docs/ui-kit/ios/v5/color-resources', 'fbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/component-styling',
                component: ComponentCreator('/docs/ui-kit/ios/v5/component-styling', 'c06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/components-overview',
                component: ComponentCreator('/docs/ui-kit/ios/v5/components-overview', 'cb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/conversations',
                component: ComponentCreator('/docs/ui-kit/ios/v5/conversations', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/core-features',
                component: ComponentCreator('/docs/ui-kit/ios/v5/core-features', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/events',
                component: ComponentCreator('/docs/ui-kit/ios/v5/events', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/extensions',
                component: ComponentCreator('/docs/ui-kit/ios/v5/extensions', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/getting-started',
                component: ComponentCreator('/docs/ui-kit/ios/v5/getting-started', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/group-members',
                component: ComponentCreator('/docs/ui-kit/ios/v5/group-members', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/groups',
                component: ComponentCreator('/docs/ui-kit/ios/v5/groups', 'd8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/incoming-call',
                component: ComponentCreator('/docs/ui-kit/ios/v5/incoming-call', 'd0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/localize',
                component: ComponentCreator('/docs/ui-kit/ios/v5/localize', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/ios/v5/mentions-formatter-guide', '0c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/message-bubble-styling',
                component: ComponentCreator('/docs/ui-kit/ios/v5/message-bubble-styling', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/message-composer',
                component: ComponentCreator('/docs/ui-kit/ios/v5/message-composer', 'c47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/message-header',
                component: ComponentCreator('/docs/ui-kit/ios/v5/message-header', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/message-list',
                component: ComponentCreator('/docs/ui-kit/ios/v5/message-list', 'c9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/message-template',
                component: ComponentCreator('/docs/ui-kit/ios/v5/message-template', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/methods',
                component: ComponentCreator('/docs/ui-kit/ios/v5/methods', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/ios/v5/ongoing-call', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/ios/v5/outgoing-call', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/overview',
                component: ComponentCreator('/docs/ui-kit/ios/v5/overview', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/ios/v5/shortcut-formatter-guide', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/sound-manager',
                component: ComponentCreator('/docs/ui-kit/ios/v5/sound-manager', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/theme-introduction',
                component: ComponentCreator('/docs/ui-kit/ios/v5/theme-introduction', '284'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/threaded-messages-header',
                component: ComponentCreator('/docs/ui-kit/ios/v5/threaded-messages-header', '4ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/ios/v5/users',
                component: ComponentCreator('/docs/ui-kit/ios/v5/users', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/kotlin',
    component: ComponentCreator('/docs/ui-kit/kotlin', '98a'),
    routes: [
      {
        path: '/docs/ui-kit/kotlin/2.0',
        component: ComponentCreator('/docs/ui-kit/kotlin/2.0', '68f'),
        routes: [
          {
            path: '/docs/ui-kit/kotlin/2.0',
            component: ComponentCreator('/docs/ui-kit/kotlin/2.0', 'dc6'),
            routes: [
              {
                path: '/docs/ui-kit/kotlin/2.0/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/kotlin/2.0/customize-ui-kit', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/2.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/kotlin/2.0/key-concepts', 'e26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/kotlin/2.0/message-structure-and-hierarchy', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/2.0/overview',
                component: ComponentCreator('/docs/ui-kit/kotlin/2.0/overview', '762'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/2.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/kotlin/2.0/ui-components', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/kotlin',
        component: ComponentCreator('/docs/ui-kit/kotlin', '86b'),
        routes: [
          {
            path: '/docs/ui-kit/kotlin',
            component: ComponentCreator('/docs/ui-kit/kotlin', 'a5e'),
            routes: [
              {
                path: '/docs/ui-kit/kotlin/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/kotlin/customize-ui-kit', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/key-concepts',
                component: ComponentCreator('/docs/ui-kit/kotlin/key-concepts', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/overview',
                component: ComponentCreator('/docs/ui-kit/kotlin/overview', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/kotlin/ui-components',
                component: ComponentCreator('/docs/ui-kit/kotlin/ui-components', 'e65'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/react-native',
    component: ComponentCreator('/docs/ui-kit/react-native', 'ace'),
    routes: [
      {
        path: '/docs/ui-kit/react-native/2.0',
        component: ComponentCreator('/docs/ui-kit/react-native/2.0', '7e1'),
        routes: [
          {
            path: '/docs/ui-kit/react-native/2.0',
            component: ComponentCreator('/docs/ui-kit/react-native/2.0', '2e0'),
            routes: [
              {
                path: '/docs/ui-kit/react-native/2.0/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/react-native/2.0/customize-ui-kit', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/2.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/react-native/2.0/key-concepts', 'e27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/react-native/2.0/message-structure-and-hierarchy', '266'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/2.0/overview',
                component: ComponentCreator('/docs/ui-kit/react-native/2.0/overview', '6ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/2.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/react-native/2.0/ui-components', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react-native/3.0',
        component: ComponentCreator('/docs/ui-kit/react-native/3.0', 'a58'),
        routes: [
          {
            path: '/docs/ui-kit/react-native/3.0',
            component: ComponentCreator('/docs/ui-kit/react-native/3.0', 'db6'),
            routes: [
              {
                path: '/docs/ui-kit/react-native/3.0/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/react-native/3.0/customize-ui-kit', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/3.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/react-native/3.0/key-concepts', '817'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/3.0/overview',
                component: ComponentCreator('/docs/ui-kit/react-native/3.0/overview', 'f13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/3.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/react-native/3.0/ui-components', '8d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react-native',
        component: ComponentCreator('/docs/ui-kit/react-native', '943'),
        routes: [
          {
            path: '/docs/ui-kit/react-native',
            component: ComponentCreator('/docs/ui-kit/react-native', 'e28'),
            routes: [
              {
                path: '/docs/ui-kit/react-native/ai-features',
                component: ComponentCreator('/docs/ui-kit/react-native/ai-features', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/apple-privacy-manifest-guide',
                component: ComponentCreator('/docs/ui-kit/react-native/apple-privacy-manifest-guide', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/audio-bubble', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/avatar',
                component: ComponentCreator('/docs/ui-kit/react-native/avatar', '90e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/badge',
                component: ComponentCreator('/docs/ui-kit/react-native/badge', 'df8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-buttons',
                component: ComponentCreator('/docs/ui-kit/react-native/call-buttons', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-features',
                component: ComponentCreator('/docs/ui-kit/react-native/call-features', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-log-details',
                component: ComponentCreator('/docs/ui-kit/react-native/call-log-details', '9d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-log-history',
                component: ComponentCreator('/docs/ui-kit/react-native/call-log-history', '8f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/react-native/call-log-participants', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/react-native/call-log-recording', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/react-native/call-log-with-details', '183'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-logs',
                component: ComponentCreator('/docs/ui-kit/react-native/call-logs', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/call-overview',
                component: ComponentCreator('/docs/ui-kit/react-native/call-overview', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/components-overview',
                component: ComponentCreator('/docs/ui-kit/react-native/components-overview', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/contacts',
                component: ComponentCreator('/docs/ui-kit/react-native/contacts', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/conversations',
                component: ComponentCreator('/docs/ui-kit/react-native/conversations', '1a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/react-native/conversations-with-messages', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/core-features',
                component: ComponentCreator('/docs/ui-kit/react-native/core-features', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/create-group',
                component: ComponentCreator('/docs/ui-kit/react-native/create-group', '40f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/date',
                component: ComponentCreator('/docs/ui-kit/react-native/date', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/events',
                component: ComponentCreator('/docs/ui-kit/react-native/events', 'd3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/expo-integration-guide',
                component: ComponentCreator('/docs/ui-kit/react-native/expo-integration-guide', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/extensions',
                component: ComponentCreator('/docs/ui-kit/react-native/extensions', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/file-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/file-bubble', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/getting-started',
                component: ComponentCreator('/docs/ui-kit/react-native/getting-started', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/group-add-members',
                component: ComponentCreator('/docs/ui-kit/react-native/group-add-members', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/react-native/group-banned-members', '633'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/group-details',
                component: ComponentCreator('/docs/ui-kit/react-native/group-details', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/group-members',
                component: ComponentCreator('/docs/ui-kit/react-native/group-members', 'be3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/react-native/group-transfer-ownership', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/groups',
                component: ComponentCreator('/docs/ui-kit/react-native/groups', 'fab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/react-native/groups-with-messages', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/image-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/image-bubble', 'f5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/incoming-call',
                component: ComponentCreator('/docs/ui-kit/react-native/incoming-call', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-action-entity', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-button-element', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-card-bubble', '1c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-card-message', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-checkbox-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-checkbox-element', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-custom-interactive-message',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-custom-interactive-message', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-dropdown-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-dropdown-element', '4f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-element-entity',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-element-entity', '050'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-form-bubble', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-form-message', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-label-element', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-radio-button-element', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-single-select-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-single-select-element', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/interactive-textinput-element',
                component: ComponentCreator('/docs/ui-kit/react-native/interactive-textinput-element', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/react-native/join-protected-group', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/label-alignment',
                component: ComponentCreator('/docs/ui-kit/react-native/label-alignment', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/list-item',
                component: ComponentCreator('/docs/ui-kit/react-native/list-item', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/localize',
                component: ComponentCreator('/docs/ui-kit/react-native/localize', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/media-recorder',
                component: ComponentCreator('/docs/ui-kit/react-native/media-recorder', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react-native/mentions-formatter-guide', '13c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/message-bubble', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-composer',
                component: ComponentCreator('/docs/ui-kit/react-native/message-composer', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-header',
                component: ComponentCreator('/docs/ui-kit/react-native/message-header', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-information',
                component: ComponentCreator('/docs/ui-kit/react-native/message-information', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-list',
                component: ComponentCreator('/docs/ui-kit/react-native/message-list', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/message-template',
                component: ComponentCreator('/docs/ui-kit/react-native/message-template', 'cfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/messages',
                component: ComponentCreator('/docs/ui-kit/react-native/messages', 'f78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/methods',
                component: ComponentCreator('/docs/ui-kit/react-native/methods', '3cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/react-native/multi-tab-chat-ui-guide', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/react-native/ongoing-call', '443'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/react-native/outgoing-call', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/overview',
                component: ComponentCreator('/docs/ui-kit/react-native/overview', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/quick-reactions',
                component: ComponentCreator('/docs/ui-kit/react-native/quick-reactions', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/reaction',
                component: ComponentCreator('/docs/ui-kit/react-native/reaction', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/reaction-list',
                component: ComponentCreator('/docs/ui-kit/react-native/reaction-list', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/receipt',
                component: ComponentCreator('/docs/ui-kit/react-native/receipt', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react-native/shortcut-formatter-guide', 'be9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/sound-manager',
                component: ComponentCreator('/docs/ui-kit/react-native/sound-manager', '95f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/status-indicator',
                component: ComponentCreator('/docs/ui-kit/react-native/status-indicator', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/text-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/text-bubble', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/theme',
                component: ComponentCreator('/docs/ui-kit/react-native/theme', '98d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/react-native/threaded-messages', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/user-details',
                component: ComponentCreator('/docs/ui-kit/react-native/user-details', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/users',
                component: ComponentCreator('/docs/ui-kit/react-native/users', 'ecd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/react-native/users-with-messages', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react-native/video-bubble',
                component: ComponentCreator('/docs/ui-kit/react-native/video-bubble', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/react',
    component: ComponentCreator('/docs/ui-kit/react', '434'),
    routes: [
      {
        path: '/docs/ui-kit/react/v2',
        component: ComponentCreator('/docs/ui-kit/react/v2', '6fa'),
        routes: [
          {
            path: '/docs/ui-kit/react/v2',
            component: ComponentCreator('/docs/ui-kit/react/v2', '9ea'),
            routes: [
              {
                path: '/docs/ui-kit/react/v2/customize-ui-kit',
                component: ComponentCreator('/docs/ui-kit/react/v2/customize-ui-kit', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v2/integration-with-nextjs',
                component: ComponentCreator('/docs/ui-kit/react/v2/integration-with-nextjs', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v2/key-concepts',
                component: ComponentCreator('/docs/ui-kit/react/v2/key-concepts', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v2/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/react/v2/message-structure-and-hierarchy', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v2/overview',
                component: ComponentCreator('/docs/ui-kit/react/v2/overview', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v2/ui-components',
                component: ComponentCreator('/docs/ui-kit/react/v2/ui-components', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react/v3',
        component: ComponentCreator('/docs/ui-kit/react/v3', '569'),
        routes: [
          {
            path: '/docs/ui-kit/react/v3',
            component: ComponentCreator('/docs/ui-kit/react/v3', '22b'),
            routes: [
              {
                path: '/docs/ui-kit/react/v3/customize',
                component: ComponentCreator('/docs/ui-kit/react/v3/customize', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v3/key-concepts',
                component: ComponentCreator('/docs/ui-kit/react/v3/key-concepts', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v3/nextjs',
                component: ComponentCreator('/docs/ui-kit/react/v3/nextjs', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v3/overview',
                component: ComponentCreator('/docs/ui-kit/react/v3/overview', '177'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v3/ui-components',
                component: ComponentCreator('/docs/ui-kit/react/v3/ui-components', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react/v4',
        component: ComponentCreator('/docs/ui-kit/react/v4', 'aca'),
        routes: [
          {
            path: '/docs/ui-kit/react/v4',
            component: ComponentCreator('/docs/ui-kit/react/v4', '4de'),
            routes: [
              {
                path: '/docs/ui-kit/react/v4/action-sheet',
                component: ComponentCreator('/docs/ui-kit/react/v4/action-sheet', '2ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/ai-features',
                component: ComponentCreator('/docs/ui-kit/react/v4/ai-features', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/audio-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/audio-bubble', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/avatar',
                component: ComponentCreator('/docs/ui-kit/react/v4/avatar', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/backdrop',
                component: ComponentCreator('/docs/ui-kit/react/v4/backdrop', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/badge',
                component: ComponentCreator('/docs/ui-kit/react/v4/badge', '8f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/button-group',
                component: ComponentCreator('/docs/ui-kit/react/v4/button-group', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-buttons',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-buttons', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-features',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-features', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-log-details',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-log-details', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-log-history',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-log-history', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-log-participants',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-log-participants', 'dea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-log-recording',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-log-recording', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-log-with-details',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-log-with-details', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-logs',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-logs', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/call-overview',
                component: ComponentCreator('/docs/ui-kit/react/v4/call-overview', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/checkbox',
                component: ComponentCreator('/docs/ui-kit/react/v4/checkbox', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/cometchat-quick-view',
                component: ComponentCreator('/docs/ui-kit/react/v4/cometchat-quick-view', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/components-overview',
                component: ComponentCreator('/docs/ui-kit/react/v4/components-overview', '778'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/confirm-dialog',
                component: ComponentCreator('/docs/ui-kit/react/v4/confirm-dialog', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/contacts',
                component: ComponentCreator('/docs/ui-kit/react/v4/contacts', '9a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/conversations',
                component: ComponentCreator('/docs/ui-kit/react/v4/conversations', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/react/v4/conversations-with-messages', '18c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/core-features',
                component: ComponentCreator('/docs/ui-kit/react/v4/core-features', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/create-group',
                component: ComponentCreator('/docs/ui-kit/react/v4/create-group', 'b19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/custom-text-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/custom-text-formatter-guide', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/date',
                component: ComponentCreator('/docs/ui-kit/react/v4/date', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/document-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/document-bubble', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/dropdown',
                component: ComponentCreator('/docs/ui-kit/react/v4/dropdown', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/emoji-keyboard',
                component: ComponentCreator('/docs/ui-kit/react/v4/emoji-keyboard', 'c31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/events',
                component: ComponentCreator('/docs/ui-kit/react/v4/events', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/extensions',
                component: ComponentCreator('/docs/ui-kit/react/v4/extensions', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/file-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/file-bubble', 'fa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/getting-started',
                component: ComponentCreator('/docs/ui-kit/react/v4/getting-started', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/group-add-members',
                component: ComponentCreator('/docs/ui-kit/react/v4/group-add-members', 'e3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/react/v4/group-banned-members', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/group-details',
                component: ComponentCreator('/docs/ui-kit/react/v4/group-details', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/group-members',
                component: ComponentCreator('/docs/ui-kit/react/v4/group-members', '1ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/react/v4/group-transfer-ownership', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/groups',
                component: ComponentCreator('/docs/ui-kit/react/v4/groups', '410'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/react/v4/groups-with-messages', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/icon',
                component: ComponentCreator('/docs/ui-kit/react/v4/icon', 'f8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/icon-button',
                component: ComponentCreator('/docs/ui-kit/react/v4/icon-button', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/image-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/image-bubble', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/incoming-call',
                component: ComponentCreator('/docs/ui-kit/react/v4/incoming-call', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/input',
                component: ComponentCreator('/docs/ui-kit/react/v4/input', '41a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-action-entity',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-action-entity', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-button-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-button-element', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-card-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-card-bubble', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-card-message',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-card-message', '0a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-checkbox-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-checkbox-element', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-custom-interactive-message',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-custom-interactive-message', '781'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-date-time-picker-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-date-time-picker-element', 'c72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-dropdown-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-dropdown-element', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-element-type',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-element-type', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-form-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-form-bubble', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-form-message',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-form-message', 'ea8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-label-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-label-element', '000'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-radio-button-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-radio-button-element', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-scheduler-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-scheduler-bubble', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-scheduler-message',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-scheduler-message', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-single-select-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-single-select-element', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/interactive-text-input-element',
                component: ComponentCreator('/docs/ui-kit/react/v4/interactive-text-input-element', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/join-protected-group',
                component: ComponentCreator('/docs/ui-kit/react/v4/join-protected-group', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/label',
                component: ComponentCreator('/docs/ui-kit/react/v4/label', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/list',
                component: ComponentCreator('/docs/ui-kit/react/v4/list', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/list-item',
                component: ComponentCreator('/docs/ui-kit/react/v4/list-item', '79f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/loader',
                component: ComponentCreator('/docs/ui-kit/react/v4/loader', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/localize',
                component: ComponentCreator('/docs/ui-kit/react/v4/localize', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/media-recorder',
                component: ComponentCreator('/docs/ui-kit/react/v4/media-recorder', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/mentions-formatter-guide', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-bubble', '304'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-composer',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-composer', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-header',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-header', '02c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-information',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-information', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-input',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-input', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-list',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-list', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/message-template',
                component: ComponentCreator('/docs/ui-kit/react/v4/message-template', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/messages',
                component: ComponentCreator('/docs/ui-kit/react/v4/messages', 'a40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/methods',
                component: ComponentCreator('/docs/ui-kit/react/v4/methods', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/modal',
                component: ComponentCreator('/docs/ui-kit/react/v4/modal', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/multi-tab-chat-ui-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/multi-tab-chat-ui-guide', '988'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/next-js-integration-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/next-js-integration-guide', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/react/v4/ongoing-call', 'cdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/react/v4/outgoing-call', '2dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/overview',
                component: ComponentCreator('/docs/ui-kit/react/v4/overview', 'c6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/pop-over',
                component: ComponentCreator('/docs/ui-kit/react/v4/pop-over', '943'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/property-changes',
                component: ComponentCreator('/docs/ui-kit/react/v4/property-changes', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/radio-button',
                component: ComponentCreator('/docs/ui-kit/react/v4/radio-button', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/reaction',
                component: ComponentCreator('/docs/ui-kit/react/v4/reaction', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/reaction-info',
                component: ComponentCreator('/docs/ui-kit/react/v4/reaction-info', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/reaction-list',
                component: ComponentCreator('/docs/ui-kit/react/v4/reaction-list', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/receipt',
                component: ComponentCreator('/docs/ui-kit/react/v4/receipt', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/search-input',
                component: ComponentCreator('/docs/ui-kit/react/v4/search-input', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/shortcut-formatter-guide', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/singleselect',
                component: ComponentCreator('/docs/ui-kit/react/v4/singleselect', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/sound-manager',
                component: ComponentCreator('/docs/ui-kit/react/v4/sound-manager', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/status-indicator',
                component: ComponentCreator('/docs/ui-kit/react/v4/status-indicator', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/text-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/text-bubble', '161'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/theme',
                component: ComponentCreator('/docs/ui-kit/react/v4/theme', '02d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/react/v4/threaded-messages', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/upgrade-to-v5',
                component: ComponentCreator('/docs/ui-kit/react/v4/upgrade-to-v5', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/url-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v4/url-formatter-guide', '255'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/user-member-wrapper',
                component: ComponentCreator('/docs/ui-kit/react/v4/user-member-wrapper', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/users',
                component: ComponentCreator('/docs/ui-kit/react/v4/users', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/users-details',
                component: ComponentCreator('/docs/ui-kit/react/v4/users-details', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/react/v4/users-with-messages', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v4/video-bubble',
                component: ComponentCreator('/docs/ui-kit/react/v4/video-bubble', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react/v5',
        component: ComponentCreator('/docs/ui-kit/react/v5', '32f'),
        routes: [
          {
            path: '/docs/ui-kit/react/v5',
            component: ComponentCreator('/docs/ui-kit/react/v5', '054'),
            routes: [
              {
                path: '/docs/ui-kit/react/v5/ai-features',
                component: ComponentCreator('/docs/ui-kit/react/v5/ai-features', 'dbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/call-buttons',
                component: ComponentCreator('/docs/ui-kit/react/v5/call-buttons', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/call-features',
                component: ComponentCreator('/docs/ui-kit/react/v5/call-features', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/call-logs',
                component: ComponentCreator('/docs/ui-kit/react/v5/call-logs', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/components-overview',
                component: ComponentCreator('/docs/ui-kit/react/v5/components-overview', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/conversations',
                component: ComponentCreator('/docs/ui-kit/react/v5/conversations', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/core-features',
                component: ComponentCreator('/docs/ui-kit/react/v5/core-features', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/custom-text-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v5/custom-text-formatter-guide', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/events',
                component: ComponentCreator('/docs/ui-kit/react/v5/events', '492'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/extensions',
                component: ComponentCreator('/docs/ui-kit/react/v5/extensions', '7a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/group-members',
                component: ComponentCreator('/docs/ui-kit/react/v5/group-members', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/groups',
                component: ComponentCreator('/docs/ui-kit/react/v5/groups', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/incoming-call',
                component: ComponentCreator('/docs/ui-kit/react/v5/incoming-call', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/integration',
                component: ComponentCreator('/docs/ui-kit/react/v5/integration', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/integration/next-js',
                component: ComponentCreator('/docs/ui-kit/react/v5/integration/next-js', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/localize',
                component: ComponentCreator('/docs/ui-kit/react/v5/localize', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v5/mentions-formatter-guide', '0a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/message-composer',
                component: ComponentCreator('/docs/ui-kit/react/v5/message-composer', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/message-header',
                component: ComponentCreator('/docs/ui-kit/react/v5/message-header', 'be0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/message-list',
                component: ComponentCreator('/docs/ui-kit/react/v5/message-list', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/message-template',
                component: ComponentCreator('/docs/ui-kit/react/v5/message-template', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/methods',
                component: ComponentCreator('/docs/ui-kit/react/v5/methods', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/react/v5/outgoing-call', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/overview',
                component: ComponentCreator('/docs/ui-kit/react/v5/overview', 'c23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/property-changes',
                component: ComponentCreator('/docs/ui-kit/react/v5/property-changes', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v5/shortcut-formatter-guide', 'b45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/sound-manager',
                component: ComponentCreator('/docs/ui-kit/react/v5/sound-manager', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/theme',
                component: ComponentCreator('/docs/ui-kit/react/v5/theme', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/theme/color-resources',
                component: ComponentCreator('/docs/ui-kit/react/v5/theme/color-resources', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/theme/message-bubble-styling',
                component: ComponentCreator('/docs/ui-kit/react/v5/theme/message-bubble-styling', '7ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/threaded-message-preview',
                component: ComponentCreator('/docs/ui-kit/react/v5/threaded-message-preview', 'e7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/upgrading-from-v4',
                component: ComponentCreator('/docs/ui-kit/react/v5/upgrading-from-v4', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/url-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v5/url-formatter-guide', '75e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v5/users',
                component: ComponentCreator('/docs/ui-kit/react/v5/users', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/react/v6',
        component: ComponentCreator('/docs/ui-kit/react/v6', 'df4'),
        routes: [
          {
            path: '/docs/ui-kit/react/v6',
            component: ComponentCreator('/docs/ui-kit/react/v6', '4f3'),
            routes: [
              {
                path: '/docs/ui-kit/react/v6/ai-features',
                component: ComponentCreator('/docs/ui-kit/react/v6/ai-features', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/call-buttons',
                component: ComponentCreator('/docs/ui-kit/react/v6/call-buttons', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/call-features',
                component: ComponentCreator('/docs/ui-kit/react/v6/call-features', 'f13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/call-logs',
                component: ComponentCreator('/docs/ui-kit/react/v6/call-logs', '479'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/components-overview',
                component: ComponentCreator('/docs/ui-kit/react/v6/components-overview', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/conversations',
                component: ComponentCreator('/docs/ui-kit/react/v6/conversations', '1ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/core-features',
                component: ComponentCreator('/docs/ui-kit/react/v6/core-features', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/custom-text-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v6/custom-text-formatter-guide', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/events',
                component: ComponentCreator('/docs/ui-kit/react/v6/events', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/extensions',
                component: ComponentCreator('/docs/ui-kit/react/v6/extensions', '4b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/group-members',
                component: ComponentCreator('/docs/ui-kit/react/v6/group-members', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/groups',
                component: ComponentCreator('/docs/ui-kit/react/v6/groups', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/incoming-call',
                component: ComponentCreator('/docs/ui-kit/react/v6/incoming-call', 'e52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/localize',
                component: ComponentCreator('/docs/ui-kit/react/v6/localize', '514'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/mentions-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v6/mentions-formatter-guide', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/message-composer',
                component: ComponentCreator('/docs/ui-kit/react/v6/message-composer', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/message-header',
                component: ComponentCreator('/docs/ui-kit/react/v6/message-header', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/message-list',
                component: ComponentCreator('/docs/ui-kit/react/v6/message-list', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/message-template',
                component: ComponentCreator('/docs/ui-kit/react/v6/message-template', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/methods',
                component: ComponentCreator('/docs/ui-kit/react/v6/methods', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/next-js-integration',
                component: ComponentCreator('/docs/ui-kit/react/v6/next-js-integration', '519'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/react/v6/outgoing-call', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/overview',
                component: ComponentCreator('/docs/ui-kit/react/v6/overview', 'cbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/property-changes',
                component: ComponentCreator('/docs/ui-kit/react/v6/property-changes', 'b44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/react-conversation',
                component: ComponentCreator('/docs/ui-kit/react/v6/react-conversation', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/react-js-integration',
                component: ComponentCreator('/docs/ui-kit/react/v6/react-js-integration', '31c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/react-one-to-one-chat',
                component: ComponentCreator('/docs/ui-kit/react/v6/react-one-to-one-chat', '05a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/react-tab-based-chat',
                component: ComponentCreator('/docs/ui-kit/react/v6/react-tab-based-chat', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/shortcut-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v6/shortcut-formatter-guide', '621'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/sound-manager',
                component: ComponentCreator('/docs/ui-kit/react/v6/sound-manager', '4bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/theme',
                component: ComponentCreator('/docs/ui-kit/react/v6/theme', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/theme/color-resources',
                component: ComponentCreator('/docs/ui-kit/react/v6/theme/color-resources', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/theme/message-bubble-styling',
                component: ComponentCreator('/docs/ui-kit/react/v6/theme/message-bubble-styling', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/thread-header',
                component: ComponentCreator('/docs/ui-kit/react/v6/thread-header', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/upgrading-from-v5',
                component: ComponentCreator('/docs/ui-kit/react/v6/upgrading-from-v5', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/url-formatter-guide',
                component: ComponentCreator('/docs/ui-kit/react/v6/url-formatter-guide', '3ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/react/v6/users',
                component: ComponentCreator('/docs/ui-kit/react/v6/users', 'b75'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/ui-kit/vue',
    component: ComponentCreator('/docs/ui-kit/vue', '34e'),
    routes: [
      {
        path: '/docs/ui-kit/vue/2.0',
        component: ComponentCreator('/docs/ui-kit/vue/2.0', '95c'),
        routes: [
          {
            path: '/docs/ui-kit/vue/2.0',
            component: ComponentCreator('/docs/ui-kit/vue/2.0', 'c21'),
            routes: [
              {
                path: '/docs/ui-kit/vue/2.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/vue/2.0/key-concepts', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/2.0/message-structure-and-hierarchy',
                component: ComponentCreator('/docs/ui-kit/vue/2.0/message-structure-and-hierarchy', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/2.0/overview',
                component: ComponentCreator('/docs/ui-kit/vue/2.0/overview', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/2.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/vue/2.0/ui-components', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/vue/3.0',
        component: ComponentCreator('/docs/ui-kit/vue/3.0', '93f'),
        routes: [
          {
            path: '/docs/ui-kit/vue/3.0',
            component: ComponentCreator('/docs/ui-kit/vue/3.0', '3ba'),
            routes: [
              {
                path: '/docs/ui-kit/vue/3.0/integration-with-nuxtjs',
                component: ComponentCreator('/docs/ui-kit/vue/3.0/integration-with-nuxtjs', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/3.0/key-concepts',
                component: ComponentCreator('/docs/ui-kit/vue/3.0/key-concepts', '98d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/3.0/overview',
                component: ComponentCreator('/docs/ui-kit/vue/3.0/overview', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/3.0/ui-components',
                component: ComponentCreator('/docs/ui-kit/vue/3.0/ui-components', '3a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/ui-kit/vue',
        component: ComponentCreator('/docs/ui-kit/vue', 'fc8'),
        routes: [
          {
            path: '/docs/ui-kit/vue',
            component: ComponentCreator('/docs/ui-kit/vue', '138'),
            routes: [
              {
                path: '/docs/ui-kit/vue/ai-assist-bot',
                component: ComponentCreator('/docs/ui-kit/vue/ai-assist-bot', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ai-conversation-starter',
                component: ComponentCreator('/docs/ui-kit/vue/ai-conversation-starter', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ai-conversation-summary',
                component: ComponentCreator('/docs/ui-kit/vue/ai-conversation-summary', '455'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ai-integration',
                component: ComponentCreator('/docs/ui-kit/vue/ai-integration', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ai-smart-replies',
                component: ComponentCreator('/docs/ui-kit/vue/ai-smart-replies', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/call-buttons',
                component: ComponentCreator('/docs/ui-kit/vue/call-buttons', '85b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/calls-integration',
                component: ComponentCreator('/docs/ui-kit/vue/calls-integration', 'e2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/contacts',
                component: ComponentCreator('/docs/ui-kit/vue/contacts', 'd35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/conversations',
                component: ComponentCreator('/docs/ui-kit/vue/conversations', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/conversations-with-messages',
                component: ComponentCreator('/docs/ui-kit/vue/conversations-with-messages', '733'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/group-add-members',
                component: ComponentCreator('/docs/ui-kit/vue/group-add-members', '246'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/group-banned-members',
                component: ComponentCreator('/docs/ui-kit/vue/group-banned-members', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/group-details',
                component: ComponentCreator('/docs/ui-kit/vue/group-details', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/group-members',
                component: ComponentCreator('/docs/ui-kit/vue/group-members', '87d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/group-transfer-ownership',
                component: ComponentCreator('/docs/ui-kit/vue/group-transfer-ownership', '3f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/groups',
                component: ComponentCreator('/docs/ui-kit/vue/groups', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/groups-with-messages',
                component: ComponentCreator('/docs/ui-kit/vue/groups-with-messages', 'e39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/incoming-call',
                component: ComponentCreator('/docs/ui-kit/vue/incoming-call', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/integration',
                component: ComponentCreator('/docs/ui-kit/vue/integration', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/key-concepts',
                component: ComponentCreator('/docs/ui-kit/vue/key-concepts', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/message-bubble',
                component: ComponentCreator('/docs/ui-kit/vue/message-bubble', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/message-composer',
                component: ComponentCreator('/docs/ui-kit/vue/message-composer', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/message-header',
                component: ComponentCreator('/docs/ui-kit/vue/message-header', '3ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/message-information',
                component: ComponentCreator('/docs/ui-kit/vue/message-information', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/message-list',
                component: ComponentCreator('/docs/ui-kit/vue/message-list', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/messages',
                component: ComponentCreator('/docs/ui-kit/vue/messages', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/nuxtjs-integration',
                component: ComponentCreator('/docs/ui-kit/vue/nuxtjs-integration', 'f89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ongoing-call',
                component: ComponentCreator('/docs/ui-kit/vue/ongoing-call', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/outgoing-call',
                component: ComponentCreator('/docs/ui-kit/vue/outgoing-call', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/overview',
                component: ComponentCreator('/docs/ui-kit/vue/overview', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/shared-elements',
                component: ComponentCreator('/docs/ui-kit/vue/shared-elements', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/tabs',
                component: ComponentCreator('/docs/ui-kit/vue/tabs', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/theme',
                component: ComponentCreator('/docs/ui-kit/vue/theme', '0a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/threaded-messages',
                component: ComponentCreator('/docs/ui-kit/vue/threaded-messages', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ui-components-overview',
                component: ComponentCreator('/docs/ui-kit/vue/ui-components-overview', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/ui-kit-methods',
                component: ComponentCreator('/docs/ui-kit/vue/ui-kit-methods', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/user-details',
                component: ComponentCreator('/docs/ui-kit/vue/user-details', 'e27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/user-member-wrapper',
                component: ComponentCreator('/docs/ui-kit/vue/user-member-wrapper', 'd59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/users',
                component: ComponentCreator('/docs/ui-kit/vue/users', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/users-with-messages',
                component: ComponentCreator('/docs/ui-kit/vue/users-with-messages', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-kit/vue/web-elements',
                component: ComponentCreator('/docs/ui-kit/vue/web-elements', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/web-elements',
    component: ComponentCreator('/docs/web-elements', 'd5c'),
    routes: [
      {
        path: '/docs/web-elements',
        component: ComponentCreator('/docs/web-elements', '1d5'),
        routes: [
          {
            path: '/docs/web-elements',
            component: ComponentCreator('/docs/web-elements', 'd10'),
            routes: [
              {
                path: '/docs/web-elements/action-sheet',
                component: ComponentCreator('/docs/web-elements/action-sheet', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/audio-bubble',
                component: ComponentCreator('/docs/web-elements/audio-bubble', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/avatar',
                component: ComponentCreator('/docs/web-elements/avatar', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/backdrop',
                component: ComponentCreator('/docs/web-elements/backdrop', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/badge',
                component: ComponentCreator('/docs/web-elements/badge', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/button-group',
                component: ComponentCreator('/docs/web-elements/button-group', '0b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/checkbox',
                component: ComponentCreator('/docs/web-elements/checkbox', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/cometchat-quick-view',
                component: ComponentCreator('/docs/web-elements/cometchat-quick-view', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/confirm-dialog',
                component: ComponentCreator('/docs/web-elements/confirm-dialog', 'f0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/date',
                component: ComponentCreator('/docs/web-elements/date', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/document-bubble',
                component: ComponentCreator('/docs/web-elements/document-bubble', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/dropdown',
                component: ComponentCreator('/docs/web-elements/dropdown', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/emoji-keyboard',
                component: ComponentCreator('/docs/web-elements/emoji-keyboard', '8af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/file-bubble',
                component: ComponentCreator('/docs/web-elements/file-bubble', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/icon',
                component: ComponentCreator('/docs/web-elements/icon', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/icon-button',
                component: ComponentCreator('/docs/web-elements/icon-button', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/image-bubble',
                component: ComponentCreator('/docs/web-elements/image-bubble', '386'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/input',
                component: ComponentCreator('/docs/web-elements/input', '7dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/label',
                component: ComponentCreator('/docs/web-elements/label', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/list-item',
                component: ComponentCreator('/docs/web-elements/list-item', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/loader',
                component: ComponentCreator('/docs/web-elements/loader', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/media-recorder',
                component: ComponentCreator('/docs/web-elements/media-recorder', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/message-input',
                component: ComponentCreator('/docs/web-elements/message-input', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/modal',
                component: ComponentCreator('/docs/web-elements/modal', 'd3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/overview',
                component: ComponentCreator('/docs/web-elements/overview', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/pop-over',
                component: ComponentCreator('/docs/web-elements/pop-over', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/radio-button',
                component: ComponentCreator('/docs/web-elements/radio-button', 'ba6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/receipt',
                component: ComponentCreator('/docs/web-elements/receipt', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/search-input',
                component: ComponentCreator('/docs/web-elements/search-input', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/singleselect',
                component: ComponentCreator('/docs/web-elements/singleselect', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/status-indicator',
                component: ComponentCreator('/docs/web-elements/status-indicator', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/text-bubble',
                component: ComponentCreator('/docs/web-elements/text-bubble', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/text-input',
                component: ComponentCreator('/docs/web-elements/text-input', 'f3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-elements/video-bubble',
                component: ComponentCreator('/docs/web-elements/video-bubble', '506'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/web-shared',
    component: ComponentCreator('/docs/web-shared', 'cb9'),
    routes: [
      {
        path: '/docs/web-shared',
        component: ComponentCreator('/docs/web-shared', '507'),
        routes: [
          {
            path: '/docs/web-shared',
            component: ComponentCreator('/docs/web-shared', 'bf8'),
            routes: [
              {
                path: '/docs/web-shared/action-entity',
                component: ComponentCreator('/docs/web-shared/action-entity', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/actionitem',
                component: ComponentCreator('/docs/web-shared/actionitem', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/actionsicon',
                component: ComponentCreator('/docs/web-shared/actionsicon', '355'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/actionsview',
                component: ComponentCreator('/docs/web-shared/actionsview', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/add-members-configuration',
                component: ComponentCreator('/docs/web-shared/add-members-configuration', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/addmembersstyle',
                component: ComponentCreator('/docs/web-shared/addmembersstyle', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-assist-bot-configuration',
                component: ComponentCreator('/docs/web-shared/ai-assist-bot-configuration', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-assist-bot-style',
                component: ComponentCreator('/docs/web-shared/ai-assist-bot-style', '84a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-conversation-starter-configuration',
                component: ComponentCreator('/docs/web-shared/ai-conversation-starter-configuration', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-conversation-starter-style',
                component: ComponentCreator('/docs/web-shared/ai-conversation-starter-style', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-conversation-summary-configuration',
                component: ComponentCreator('/docs/web-shared/ai-conversation-summary-configuration', '3d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-conversation-summary-style',
                component: ComponentCreator('/docs/web-shared/ai-conversation-summary-style', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-smart-replies-configuration',
                component: ComponentCreator('/docs/web-shared/ai-smart-replies-configuration', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ai-smart-replies-style',
                component: ComponentCreator('/docs/web-shared/ai-smart-replies-style', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/auxiliarybuttonalignment',
                component: ComponentCreator('/docs/web-shared/auxiliarybuttonalignment', '734'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/banned-members-configuration',
                component: ComponentCreator('/docs/web-shared/banned-members-configuration', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/bannedmembersstyle',
                component: ComponentCreator('/docs/web-shared/bannedmembersstyle', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/button-element',
                component: ComponentCreator('/docs/web-shared/button-element', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/call-log-details-configuration',
                component: ComponentCreator('/docs/web-shared/call-log-details-configuration', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/call-log-history-configuration',
                component: ComponentCreator('/docs/web-shared/call-log-history-configuration', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/call-log-participants-configuration',
                component: ComponentCreator('/docs/web-shared/call-log-participants-configuration', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/call-log-recordings-configuration',
                component: ComponentCreator('/docs/web-shared/call-log-recordings-configuration', '07f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/call-logs-configuration',
                component: ComponentCreator('/docs/web-shared/call-logs-configuration', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/callbuttonsstyle',
                component: ComponentCreator('/docs/web-shared/callbuttonsstyle', '2ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/calllogdetailsstyle',
                component: ComponentCreator('/docs/web-shared/calllogdetailsstyle', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/callloghistorystyle',
                component: ComponentCreator('/docs/web-shared/callloghistorystyle', 'b14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/calllogparticipantsstyle',
                component: ComponentCreator('/docs/web-shared/calllogparticipantsstyle', '177'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/calllogrecordingsstyle',
                component: ComponentCreator('/docs/web-shared/calllogrecordingsstyle', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/calllogsstyle',
                component: ComponentCreator('/docs/web-shared/calllogsstyle', '445'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/calls-events',
                component: ComponentCreator('/docs/web-shared/calls-events', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/card-bubble',
                component: ComponentCreator('/docs/web-shared/card-bubble', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/card-message',
                component: ComponentCreator('/docs/web-shared/card-message', '7a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/checkbox-element',
                component: ComponentCreator('/docs/web-shared/checkbox-element', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/cometchatschedulerbubble',
                component: ComponentCreator('/docs/web-shared/cometchatschedulerbubble', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/contacts-configuration',
                component: ComponentCreator('/docs/web-shared/contacts-configuration', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/contactsstyle',
                component: ComponentCreator('/docs/web-shared/contactsstyle', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/conversations-configuration',
                component: ComponentCreator('/docs/web-shared/conversations-configuration', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/conversations-events',
                component: ComponentCreator('/docs/web-shared/conversations-events', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/conversationsstyle',
                component: ComponentCreator('/docs/web-shared/conversationsstyle', 'a4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/creategroup-configuration',
                component: ComponentCreator('/docs/web-shared/creategroup-configuration', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/creategroupstyle',
                component: ComponentCreator('/docs/web-shared/creategroupstyle', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/custom-interactive-message',
                component: ComponentCreator('/docs/web-shared/custom-interactive-message', '16c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/Date-time-picker-element',
                component: ComponentCreator('/docs/web-shared/Date-time-picker-element', 'e11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/datepatterns',
                component: ComponentCreator('/docs/web-shared/datepatterns', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/details-configuration',
                component: ComponentCreator('/docs/web-shared/details-configuration', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/detailsoption',
                component: ComponentCreator('/docs/web-shared/detailsoption', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/detailsstyle',
                component: ComponentCreator('/docs/web-shared/detailsstyle', '322'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/detailstemplate',
                component: ComponentCreator('/docs/web-shared/detailstemplate', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/documenticonalignment',
                component: ComponentCreator('/docs/web-shared/documenticonalignment', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/dropdown-element',
                component: ComponentCreator('/docs/web-shared/dropdown-element', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/element-type',
                component: ComponentCreator('/docs/web-shared/element-type', 'cb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/form-bubble',
                component: ComponentCreator('/docs/web-shared/form-bubble', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/form-message',
                component: ComponentCreator('/docs/web-shared/form-message', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/group-members-configuration',
                component: ComponentCreator('/docs/web-shared/group-members-configuration', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/groupmembersstyle',
                component: ComponentCreator('/docs/web-shared/groupmembersstyle', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/groups-configurations',
                component: ComponentCreator('/docs/web-shared/groups-configurations', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/groups-events',
                component: ComponentCreator('/docs/web-shared/groups-events', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/groupsstyle',
                component: ComponentCreator('/docs/web-shared/groupsstyle', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/httpsrequestmethods',
                component: ComponentCreator('/docs/web-shared/httpsrequestmethods', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/iconbuttonalignment',
                component: ComponentCreator('/docs/web-shared/iconbuttonalignment', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/incomingcallstyle',
                component: ComponentCreator('/docs/web-shared/incomingcallstyle', 'e6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/joinggroupstyle',
                component: ComponentCreator('/docs/web-shared/joinggroupstyle', '644'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/joingroup-configuration',
                component: ComponentCreator('/docs/web-shared/joingroup-configuration', '786'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/label-element',
                component: ComponentCreator('/docs/web-shared/label-element', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/labelalignment',
                component: ComponentCreator('/docs/web-shared/labelalignment', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/localize',
                component: ComponentCreator('/docs/web-shared/localize', '012'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/mentions-text-formatter',
                component: ComponentCreator('/docs/web-shared/mentions-text-formatter', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/message-composer-configuration',
                component: ComponentCreator('/docs/web-shared/message-composer-configuration', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/message-header-configuration',
                component: ComponentCreator('/docs/web-shared/message-header-configuration', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/message-information-configuration',
                component: ComponentCreator('/docs/web-shared/message-information-configuration', '0d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/message-list-configuration',
                component: ComponentCreator('/docs/web-shared/message-list-configuration', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/message-template',
                component: ComponentCreator('/docs/web-shared/message-template', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagebubblealignment',
                component: ComponentCreator('/docs/web-shared/messagebubblealignment', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagebubblestyle',
                component: ComponentCreator('/docs/web-shared/messagebubblestyle', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagecomposeraction',
                component: ComponentCreator('/docs/web-shared/messagecomposeraction', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagecomposerstyle',
                component: ComponentCreator('/docs/web-shared/messagecomposerstyle', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messageheaderstyle',
                component: ComponentCreator('/docs/web-shared/messageheaderstyle', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messageinformationstyle',
                component: ComponentCreator('/docs/web-shared/messageinformationstyle', '504'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagelistalignment',
                component: ComponentCreator('/docs/web-shared/messagelistalignment', '531'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messageliststyle',
                component: ComponentCreator('/docs/web-shared/messageliststyle', 'e94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messages-configuration',
                component: ComponentCreator('/docs/web-shared/messages-configuration', '5ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messages-events',
                component: ComponentCreator('/docs/web-shared/messages-events', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/messagesstyle',
                component: ComponentCreator('/docs/web-shared/messagesstyle', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ongoingcallstyle',
                component: ComponentCreator('/docs/web-shared/ongoingcallstyle', 'e83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/option',
                component: ComponentCreator('/docs/web-shared/option', '105'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/outgoingcallstyle',
                component: ComponentCreator('/docs/web-shared/outgoingcallstyle', 'cad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/overview',
                component: ComponentCreator('/docs/web-shared/overview', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/radio-button-element',
                component: ComponentCreator('/docs/web-shared/radio-button-element', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-info',
                component: ComponentCreator('/docs/web-shared/reaction-info', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-info-configuration',
                component: ComponentCreator('/docs/web-shared/reaction-info-configuration', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-info-style',
                component: ComponentCreator('/docs/web-shared/reaction-info-style', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-list',
                component: ComponentCreator('/docs/web-shared/reaction-list', '50a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-list-configuration',
                component: ComponentCreator('/docs/web-shared/reaction-list-configuration', 'aa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reaction-list-style',
                component: ComponentCreator('/docs/web-shared/reaction-list-style', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reactions',
                component: ComponentCreator('/docs/web-shared/reactions', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reactions-configuration',
                component: ComponentCreator('/docs/web-shared/reactions-configuration', '9f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/reactions-style',
                component: ComponentCreator('/docs/web-shared/reactions-style', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/receipts',
                component: ComponentCreator('/docs/web-shared/receipts', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/scheduler-message',
                component: ComponentCreator('/docs/web-shared/scheduler-message', 'adb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/selectionmode',
                component: ComponentCreator('/docs/web-shared/selectionmode', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/single-select-element',
                component: ComponentCreator('/docs/web-shared/single-select-element', 'd25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/sound-manager',
                component: ComponentCreator('/docs/web-shared/sound-manager', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/tabalignment',
                component: ComponentCreator('/docs/web-shared/tabalignment', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/tabitem',
                component: ComponentCreator('/docs/web-shared/tabitem', 'fb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/tabitemstyle',
                component: ComponentCreator('/docs/web-shared/tabitemstyle', '354'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/tabsstyle',
                component: ComponentCreator('/docs/web-shared/tabsstyle', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/tabsvisibility',
                component: ComponentCreator('/docs/web-shared/tabsvisibility', '6a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/text-formatters',
                component: ComponentCreator('/docs/web-shared/text-formatters', 'a9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/text-input-element',
                component: ComponentCreator('/docs/web-shared/text-input-element', 'c73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/theme',
                component: ComponentCreator('/docs/web-shared/theme', '25d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/threaded-messages-configuration',
                component: ComponentCreator('/docs/web-shared/threaded-messages-configuration', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/threadedmessagesstyle',
                component: ComponentCreator('/docs/web-shared/threadedmessagesstyle', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/timestampalignment',
                component: ComponentCreator('/docs/web-shared/timestampalignment', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/transfer-ownership-configuration',
                component: ComponentCreator('/docs/web-shared/transfer-ownership-configuration', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/transferownershipstyle',
                component: ComponentCreator('/docs/web-shared/transferownershipstyle', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/ui-events',
                component: ComponentCreator('/docs/web-shared/ui-events', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/uikitsettings',
                component: ComponentCreator('/docs/web-shared/uikitsettings', '4cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/url-text-formatter',
                component: ComponentCreator('/docs/web-shared/url-text-formatter', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/usermember-wrapper-configuration',
                component: ComponentCreator('/docs/web-shared/usermember-wrapper-configuration', '0ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/users-configuration',
                component: ComponentCreator('/docs/web-shared/users-configuration', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/users-events',
                component: ComponentCreator('/docs/web-shared/users-events', '8d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/usersstyle',
                component: ComponentCreator('/docs/web-shared/usersstyle', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/withdetailsstyle',
                component: ComponentCreator('/docs/web-shared/withdetailsstyle', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/web-shared/withmessagesstyle',
                component: ComponentCreator('/docs/web-shared/withmessagesstyle', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/widget',
    component: ComponentCreator('/docs/widget', '6f7'),
    routes: [
      {
        path: '/docs/widget',
        component: ComponentCreator('/docs/widget', 'bdc'),
        routes: [
          {
            path: '/docs/widget',
            component: ComponentCreator('/docs/widget', '109'),
            routes: [
              {
                path: '/docs/widget/custom-build',
                component: ComponentCreator('/docs/widget/custom-build', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/widget/html-bootstrap-jquery',
                component: ComponentCreator('/docs/widget/html-bootstrap-jquery', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/widget/overview',
                component: ComponentCreator('/docs/widget/overview', '4b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/widget/wordpress-buddypress',
                component: ComponentCreator('/docs/widget/wordpress-buddypress', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '2a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
