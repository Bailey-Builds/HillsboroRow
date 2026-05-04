export type LegalDocumentType = 'privacy' | 'terms'

type LegalSection = {
  heading: string
  paragraphs: string[]
}

type LegalDocument = {
  title: string
  effectiveDate: string
  intro: string[]
  sections: LegalSection[]
}

export type AppMetadata = {
  slug: string
  name: string
  tagline: string
  shortDescription: string
  longDescription: string
  statusNote: string
  platformNote: string
  appStoreUrl?: string
  links: Array<{
    label: string
    to: string
  }>
  legal: Record<LegalDocumentType, LegalDocument>
}

export const apps: AppMetadata[] = [
  {
    slug: 'gridd',
    name: 'Gridd',
    tagline: 'Plan clearly. Execute consistently.',
    shortDescription:
      'Gridd is a focused productivity app for structuring tasks and moving through work with clarity.',
    longDescription:
      'Gridd helps teams and individuals break work into practical blocks, stay aligned on priorities, and maintain momentum without unnecessary complexity.',
    statusNote: 'Status: Active development',
    platformNote:
      'Platform: Available on the Apple App Store today, with expansion planned over time.',
    appStoreUrl: 'https://apps.apple.com/app/id6748417271',
    links: [
      { label: 'Privacy Policy', to: '/apps/gridd/privacy' },
      { label: 'Terms of Service', to: '/apps/gridd/terms' },
    ],
    legal: {
      privacy: {
        title: 'Gridd Privacy Policy',
        effectiveDate: 'March 7, 2026',
        intro: [
          'This Privacy Policy explains how Gridd may collect, use, and protect information when you use the app and related services.',
          'Hillsboro Street LLC maintains Gridd and is committed to handling data responsibly.',
        ],
        sections: [
          {
            heading: 'Information We May Collect',
            paragraphs: [
              'Gridd may collect information you provide directly, such as account details, profile information, and support messages.',
              'Gridd may also collect limited technical data like device, browser, and usage diagnostics to maintain reliability and improve the experience.',
            ],
          },
          {
            heading: 'How Information Is Used',
            paragraphs: [
              'Information may be used to provide core functionality, improve product performance, respond to support requests, and keep the service secure.',
            ],
          },
          {
            heading: 'Sharing and Retention',
            paragraphs: [
              'Gridd does not sell personal information. Data may be shared with service providers that help operate the app or when required by law.',
              'Information is retained only as long as needed for product operation, security, and legal obligations.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              'Questions about this policy can be directed to Hillsboro Street LLC through the contact method made available by Gridd.',
            ],
          },
        ],
      },
      terms: {
        title: 'Gridd Terms of Service',
        effectiveDate: 'March 7, 2026',
        intro: [
          'These Terms govern your use of Gridd and related services provided by Hillsboro Street LLC.',
        ],
        sections: [
          {
            heading: 'Use of Gridd',
            paragraphs: [
              'You agree to use Gridd lawfully and in a way that does not interfere with service availability, performance, or security.',
            ],
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'Gridd, including software, branding, and content, is owned by Hillsboro Street LLC or its licensors unless stated otherwise.',
            ],
          },
          {
            heading: 'Service Availability',
            paragraphs: [
              'Gridd is provided on an as-is and as-available basis. Features may change as the product evolves.',
            ],
          },
          {
            heading: 'Limitation of Liability',
            paragraphs: [
              'To the maximum extent allowed by law, Hillsboro Street LLC is not liable for indirect, incidental, or consequential damages resulting from use of Gridd.',
            ],
          },
          {
            heading: 'Updates to Terms',
            paragraphs: [
              'These Terms may be updated periodically. Continued use of Gridd after updates indicates acceptance of revised Terms.',
            ],
          },
        ],
      },
    },
  },
]

export function getAppBySlug(appSlug: string): AppMetadata | undefined {
  return apps.find((app) => app.slug === appSlug)
}
