// Google Tag Manager utility functions

/**
 * Push event to Google Tag Manager dataLayer
 * @param {Object} eventData - Event data to push to GTM
 */
export const gtmPush = (eventData) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

/**
 * Track page view
 * @param {string} pageName - Name of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pageName, pageTitle) => {
  gtmPush({
    event: 'page_view',
    page_name: pageName,
    page_title: pageTitle,
    page_location: window.location.href
  });
};

/**
 * Track purchase attempt
 * @param {string} email - Customer email
 * @param {string} productName - Product name
 * @param {number} price - Product price
 */
export const trackPurchaseAttempt = (email, productName, price) => {
  gtmPush({
    event: 'purchase_attempt',
    email_provided: email,
    product_name: productName,
    product_price: price,
    currency: 'USD'
  });
};

/**
 * Track redirect to payment provider
 * @param {string} provider - Payment provider name
 * @param {string} productName - Product name
 * @param {number} price - Product price
 */
export const trackPaymentRedirect = (provider, productName, price) => {
  gtmPush({
    event: 'redirect_to_payment',
    payment_provider: provider,
    product_name: productName,
    product_price: price,
    currency: 'USD'
  });
};

/**
 * Track form interactions
 * @param {string} formName - Name of the form
 * @param {string} action - Action taken (focus, blur, submit, etc.)
 */
export const trackFormInteraction = (formName, action) => {
  gtmPush({
    event: 'form_interaction',
    form_name: formName,
    form_action: action
  });
};

/**
 * Track scroll depth
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage) => {
  gtmPush({
    event: 'scroll_depth',
    scroll_percentage: percentage
  });
};

/**
 * Track section views
 * @param {string} sectionName - Name of the section viewed
 */
export const trackSectionView = (sectionName) => {
  gtmPush({
    event: 'section_view',
    section_name: sectionName
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name/ID of the button
 * @param {string} buttonText - Text on the button
 * @param {string} location - Where the button is located
 */
export const trackButtonClick = (buttonName, buttonText, location) => {
  gtmPush({
    event: 'button_click',
    button_name: buttonName,
    button_text: buttonText,
    button_location: location
  });
};

/**
 * Track errors
 * @param {string} errorType - Type of error
 * @param {string} errorMessage - Error message
 * @param {string} location - Where the error occurred
 */
export const trackError = (errorType, errorMessage, location) => {
  gtmPush({
    event: 'error',
    error_type: errorType,
    error_message: errorMessage,
    error_location: location
  });
};

/**
 * Track email signup/collection
 * @param {string} email - Email address
 * @param {string} source - Where the email was collected
 */
export const trackEmailCollection = (email, source) => {
  gtmPush({
    event: 'email_collection',
    email_provided: email,
    collection_source: source
  });
};

/**
 * Track testimonial interactions
 * @param {string} testimonialAuthor - Author of the testimonial
 * @param {string} action - Action taken (view, click, etc.)
 */
export const trackTestimonialInteraction = (testimonialAuthor, action) => {
  gtmPush({
    event: 'testimonial_interaction',
    testimonial_author: testimonialAuthor,
    testimonial_action: action
  });
};

