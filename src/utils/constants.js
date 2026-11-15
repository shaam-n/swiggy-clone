// Swiggy Assets and CDN URLs

// Authentic Swiggy Orange Pin/Logo
export const LOGO_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png";

// Swiggy Cloudinary image CDN base URL for food & restaurant images
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// App download badges from Swiggy CDN
export const PLAYSTORE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png";

export const APPSTORE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png";

// Swiggy Desktop Listing Live API URL (Bangalore coordinates)
export const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Swiggy Live API URL via CORS Proxy (for local browser development without CORS errors)
export const SWIGGY_CORS_PROXY_URL =
  "https://corsproxy.io/?" + encodeURIComponent(SWIGGY_API_URL);
