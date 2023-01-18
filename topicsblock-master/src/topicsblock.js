'use strict';
// Rewrite the browingsTopics function
document.browsingTopics = function() {
  document.dispatchEvent(new CustomEvent("browsingTopics", {}));
  return Promise.reject();
}