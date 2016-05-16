define("text!views/userSettings/shortCircuit.html", [], function () {
  return "<div class=\"ShortCircuit\">\r\n    <div class=\"ShortCircuit-header\">\r\n        <p class=\"ShortCircuit-heading fontSize-h3\">\r\n            <span class=\"iconfont contact\"></span>\r\n            <span data-bind=\"l10n: { key: 'contactPage_text_header' }\"></span>\r\n        </p>\r\n    </div>\r\n    <div class=\"ShortCircuit-body\">\r\n        <div class=\"ShortCircuit-settingsTitle\">\r\n            <p data-bind=\"l10n: { key: 'settings_short_circuit_my_contact_list' }\"></p>\r\n        </div>\r\n        <div class=\"ShortCircuit-settings\">\r\n            <div>\r\n                <swx-radio-button params=\"name: 'shortCircuit-setting', id: 'shortCircuit-allow', value: 'allow', checked: shortCircuitSetting, labelKey:'settings_short_circuit_allow'\"></swx-radio-button>\r\n                <p class=\"ShortCircuit-settingsDescription\" data-bind=\"l10n: { key: 'settings_short_circuit_allow_title' }\"></p>\r\n                <swx-button class=\"ShortCircuit-openFlowButton\" params=\"cssClass: 'actionButton', action: openShortCircuitFlow,\r\n                            textKey:'settings_short_circuit_manage_contacts', titleKey: 'settings_short_circuit_manage_contacts',\r\n                            ariaLabelKey: 'settings_short_circuit_manage_contacts'\"></swx-button>\r\n            </div>\r\n            <div>\r\n                <swx-radio-button params=\"name: 'shortCircuit-setting', id: 'shortCircuit-deny', value: 'deny', checked: shortCircuitSetting, labelKey: 'settings_short_circuit_deny'\"></swx-radio-button>\r\n                <p class=\"ShortCircuit-settingsDescription\" data-bind=\"l10n: { key: 'settings_short_circuit_deny_title' }\"></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"ShortCircut-logos\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n";
})