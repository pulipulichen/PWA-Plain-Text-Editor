/* global Vue, httpVueLoader */

//httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  //'template-example': httpVueLoader('./components/template-example/template-example.vue'),
  
  'textarea-editor': httpVueLoader('./components/textarea-editor/textarea-editor.vue'),
  'replace-panel': httpVueLoader('./components/replace-panel/replace-panel.vue'),
  'float-action-button': httpVueLoader('./components/float-action-button/float-action-button.vue'),
  'config-modal': httpVueLoader('./components/config-modal/config-modal.vue'),
  
  'code-mirror': httpVueLoader('./components/code-mirror/code-mirror.vue'),
  'key-bindings': httpVueLoader('./components/key-bindings/key-bindings.vue'),
}