module.exports = {
  // Theming
  theme: 'uzezue',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'uzeuze',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  session: {
    currency: {
      code: 'USD',
      symbol: '$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'BRA',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://www.uzeuze.com.br',
  secureSubdomain: 'https://secure.uzeuze.com.br',
  checkoutUrl: 'https://secure.uzeuze.com.br/checkout',
  loginUrl: 'https://secure.uzeuze.com.br/api/io/login',
  accountUrl: 'https://secure.uzeuze.com.br/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
