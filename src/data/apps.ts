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
    tagline: 'A clean, focused Sudoku experience.',
    shortDescription:
      'Gridd is a simple Sudoku app designed for focused play, clear thinking, and a calm puzzle-solving experience.',
    longDescription:
      'Gridd provides a distraction-light environment for enjoying Sudoku, with an intuitive interface that supports focus, logical thinking, and steady problem solving. It is designed for players who want a clean experience without noise, clutter, or unnecessary complexity.',
    statusNote: 'Status: Live on the App Store',
    platformNote:
      'Platform: Available now on the Apple App Store.',
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
          'Hillsboro Row LLC maintains Gridd and is committed to handling data responsibly.',
        ],
        sections: [
          {
            heading: 'Information We May Collect',
            paragraphs: [
              'Gridd may collect information you provide directly, such as preferences and support inquiries.',
              'Limited technical data such as device type and usage diagnostics may also be collected to maintain reliability and improve the experience.',
            ],
          },
          {
            heading: 'How Information Is Used',
            paragraphs: [
              'Information may be used to support core functionality, improve performance, respond to support requests, and maintain service security.',
            ],
          },
          {
            heading: 'Sharing and Retention',
            paragraphs: [
              'Gridd does not sell personal information. Data may be shared with trusted service providers that support app operations or when required by law.',
              'Information is retained only as long as necessary for functionality, security, and legal compliance.',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: [
              'Questions about this policy can be directed to Hillsboro Row LLC through the contact method provided within Gridd.',
            ],
          },
        ],
      },
      terms: {
        title: 'Gridd Terms of Service',
        effectiveDate: 'March 7, 2026',
        intro: [
          'These Terms govern your use of Gridd and related services provided by Hillsboro Row LLC.',
        ],
        sections: [
          {
            heading: 'Use of Gridd',
            paragraphs: [
              'You agree to use Gridd in a lawful manner that does not disrupt or interfere with the service.',
            ],
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'Gridd, including its software, design, and branding, is owned by Hillsboro Row LLC or its licensors unless otherwise stated.',
            ],
          },
          {
            heading: 'Service Availability',
            paragraphs: [
              'Gridd is provided on an as-is and as-available basis. Features may evolve over time.',
            ],
          },
          {
            heading: 'Limitation of Liability',
            paragraphs: [
              'To the maximum extent permitted by law, Hillsboro Row LLC is not liable for indirect or consequential damages arising from use of Gridd.',
            ],
          },
          {
            heading: 'Updates to Terms',
            paragraphs: [
              'These Terms may be updated periodically. Continued use indicates acceptance of the revised Terms.',
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