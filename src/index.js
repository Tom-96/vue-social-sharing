import SocialSharing from './social-sharing';

SocialSharing.version = '0.0.2';

export default SocialSharing;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('social-sharing', SocialSharing);
}
