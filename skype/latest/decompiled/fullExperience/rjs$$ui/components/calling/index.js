define("ui/components/calling/index", [
  "require",
  "ui/components/calling/callScreen",
  "ui/components/calling/participant",
  "ui/components/calling/participantMenu",
  "ui/components/calling/roster",
  "ui/components/calling/callAnimation",
  "ui/components/calling/endCall",
  "ui/components/calling/callScreenContent",
  "ui/components/calling/callScreenHeader",
  "ui/components/calling/callScreenFooter",
  "ui/components/calling/joinCallButton",
  "ui/components/calling/startCallButton",
  "ui/components/calling/cqf",
  "ui/components/calling/cqfQuestion",
  "ui/components/calling/skypeOut",
  "ui/components/calling/skypeOut/skypeOutHeader",
  "ui/components/calling/skypeOut/dialpad",
  "ui/components/calling/skypeOut/countryPicker"
], function (e) {
  return [
    e("ui/components/calling/callScreen"),
    e("ui/components/calling/participant"),
    e("ui/components/calling/participantMenu"),
    e("ui/components/calling/roster"),
    e("ui/components/calling/callAnimation"),
    e("ui/components/calling/endCall"),
    e("ui/components/calling/callScreenContent"),
    e("ui/components/calling/callScreenHeader"),
    e("ui/components/calling/callScreenFooter"),
    e("ui/components/calling/joinCallButton"),
    e("ui/components/calling/startCallButton"),
    e("ui/components/calling/cqf"),
    e("ui/components/calling/cqfQuestion"),
    e("ui/components/calling/skypeOut"),
    e("ui/components/calling/skypeOut/skypeOutHeader"),
    e("ui/components/calling/skypeOut/dialpad"),
    e("ui/components/calling/skypeOut/countryPicker")
  ];
});
