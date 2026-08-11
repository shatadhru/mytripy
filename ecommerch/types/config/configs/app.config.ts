export interface AppConfig {
  /* -------------------------------------------------------------------------- */
  /*                               Basic Information                            */
  /* -------------------------------------------------------------------------- */

  name: string;
  shortName?: string;
  description: string;
  version: string;
  author?: string;
  company?: string;
  website?: string;
  repository?: string;
  supportEmail?: string;
  license?: string;

  /* -------------------------------------------------------------------------- */
  /*                              Environment                                   */
  /* -------------------------------------------------------------------------- */

  environment: "development" | "production" | "staging" | "test";
  debug: boolean;
  maintenance: boolean;

  /* -------------------------------------------------------------------------- */
  /*                              Server                                         */
  /* -------------------------------------------------------------------------- */

  url: string;
  apiUrl?: string;
  host?: string;
  port?: number;
  protocol?: "http" | "https";

  /* -------------------------------------------------------------------------- */
  /*                               Localization                                 */
  /* -------------------------------------------------------------------------- */

  locale: string;
  fallbackLocale: string;
  timezone: string;
  currency: string;
  rtl: boolean;

  /* -------------------------------------------------------------------------- */
  /*                                Branding                                    */
  /* -------------------------------------------------------------------------- */

  logo?: string;
  favicon?: string;
  themeColor?: string;

  /* -------------------------------------------------------------------------- */
  /*                                 SEO                                        */
  /* -------------------------------------------------------------------------- */

  seo: {
    title: string;
    titleTemplate?: string;
    description: string;
    keywords: string[];
    canonical?: string;
    robots: string;

    openGraph: {
      enabled: boolean;
      image?: string;
      siteName?: string;
      type?: string;
    };

    twitter: {
      enabled: boolean;
      card?: "summary" | "summary_large_image";
      creator?: string;
      site?: string;
    };
  };

  /* -------------------------------------------------------------------------- */
  /*                              Contact                                       */
  /* -------------------------------------------------------------------------- */

  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };

  /* -------------------------------------------------------------------------- */
  /*                               Social Links                                 */
  /* -------------------------------------------------------------------------- */

  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
    x?: string;
    tiktok?: string;
    discord?: string;
  };

  /* -------------------------------------------------------------------------- */
  /*                             Feature Flags                                  */
  /* -------------------------------------------------------------------------- */

  features?: {
    registration: boolean;
    guestCheckout: boolean;
    maintenancePage: boolean;
    blog: boolean;
    reviews: boolean;
    wishlist: boolean;
    coupons: boolean;
    compareProducts: boolean;
  };
}
