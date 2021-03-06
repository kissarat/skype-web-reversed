define("text!views/chat/stickyMessage.html", [], function () {
  return "<div class=\"stickyMessage\" data-bind=\"event: { click: scrollToPoll }\">\r\n    <div class=\"stickyMessageWrapper\" data-bind=\"css: { 'visible': showStickyMessage }\">\r\n        <div class=\"stickyMessageContent\">\r\n            <span class=\"stickyMessageAuthor\" data-bind=\"'text': ongoingPoll()\"></span>\r\n            <span class=\"stickyMessageQuestion\" data-bind=\"text: pollQuestion()\"></span>\r\n        </div>\r\n        <span class=\"stickyMessageStats\" data-bind=\"text: statsMessageText()\"></span>\r\n    </div>\r\n</div>\r\n";
});
