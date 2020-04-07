var v;
var w = window;
var d = document;

(function () {
  if (w.Velaro) {
    return;
  }

  v = function () {
    return v.c(arguments);
  };

  v.q = [];

  v.c = function (args) {
    v.q.push(args);
  };

  w.Velaro = v;

  v.endpoints = {
    mainApi: "https://api-main-us-east.velaro.com/",
    cdn: "https://eastprodcdn.azureedge.net/",
  };

  w.addEventListener("load", function () {
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = v.endpoints.cdn + "widgets/shim";
    var x = d.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  });
})();

module.exports = {
  boot(opts, callback) {
    return w.Velaro("boot", opts, callback);
  },

  destroy() {
    w.Velaro("destroy");
  },

  mountDynamicButton(opts) {
    w.Velaro("mountDynamicButton", opts);
  },

  mountPopoutButton(opts) {
    w.Velaro("mountPopoutButton", opts);
  },

  isChatAvailable(callback) {
    return w.Velaro("isChatAvailable", callback);
  },

  expand() {
    return w.Velaro("expand");
  },

  collapse() {
    return w.Velaro("collapse");
  },

  popout() {
    return w.Velaro("popout");
  },

  isExpanded() {
    return w.Velaro("isExpanded");
  },

  onExpand(callback) {
    w.Velaro("onExpand", callback);
  },

  onCollapse(callback) {
    w.Velaro("onCollapse", callback);
  },

  setLauncherVisibility(visibility) {
    w.Velaro("setLauncherVisibility", visibility);
  },

  addConversion(conversion) {
    return w.Velaro("addConversion", conversion);
  },
};
