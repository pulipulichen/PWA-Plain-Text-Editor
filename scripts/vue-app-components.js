/* global Vue, httpVueLoader */

//httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  //'template': httpVueLoader('./components/template.vue'),
  
  'textarea-editor': httpVueLoader('./components/textarea-editor.vue'),
  'replace-panel': httpVueLoader('./components/replace-panel.vue'),
  'float-action-button': httpVueLoader('./components/float-action-button.vue'),
  'config-modal': httpVueLoader('./components/config-modal.vue'),
}