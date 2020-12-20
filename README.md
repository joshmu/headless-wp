# Wordpress (NEXT & GATSBY)

Utilizing Wordpress as a headless CMS

- admin: `/wp-admin`
- json: `/wp-json`

Additionally in the wordpress backend a `slide` custom post type was created to integrate a slideshow with images.

_WP Migrate DB Pro_ plugin for local wp db migration to server

# with Next (Rest Api)

Nextjs as the front end.

### PLUGINS REQUIRED

- _Advanced Custom Fields_ By Elliot Condon
- _Custom Post Type UI_ By WebDevStudio
- _Api V2 Menus_ By Claudio La Barbera
- _ACF to WP-API_ by Chris hutchinson

**Activate all plugins**

# with Gatsby (Graphql)

Gatsby as the front end.

### PLUGINS REQUIRED

#### Gatsby

- _gatsby-source-wordpress_

#### WP

- _WPGraphQL_
- _WPGatsby_

Since Gatsby is statically generated.. In production install a wp plugin for webhooks to trigger a gatsby rebuild whenever backend data is modified.
