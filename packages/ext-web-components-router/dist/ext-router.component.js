import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";
export function getRoutes(items) {
  //mjg clean this up
  window._routes = [];

  var routes = _getRoutes(items);

  window._routes = [];
  return routes;
}

function _getRoutes(items) {
  items.forEach(function (item) {
    item.leaf = !item.hasOwnProperty('children');
    item.hash = item.text.replace(/\s/g, '');
    item.hashlower = item.hash.toLowerCase();

    if (item.children == undefined) {
      window._routes.push(new Route(item.hash, item.hashlower, item.component, item["default"]));
    } else {
      _getRoutes(item.children);
    }
  });
  return window._routes;
}

export var Route =
/*#__PURE__*/
function () {
  function Route(hash, hashlower, component, defaultRoute) {
    try {
      if (!hash) {
        throw 'error: hash param is required';
      }
    } catch (e) {
      console.error(e);
    }

    this.hash = hash;
    this.hashlower = hashlower;
    this.component = component;

    if (defaultRoute != undefined) {
      this["default"] = defaultRoute;
    }
  }

  var _proto = Route.prototype;

  _proto.isActiveRoute = function isActiveRoute(hashedPath) {
    return hashedPath.replace('#', '') === this.hash;
  };

  return Route;
}();
export var Router =
/*#__PURE__*/
function () {
  function Router(routes) {
    window.router = this;

    try {
      if (!routes) {
        throw 'error: routes param is mandatory';
      }

      this.routes = routes;
    } catch (e) {
      console.error(e);
    }
  }

  var _proto2 = Router.prototype;

  _proto2.init = function init() {
    this.rootElem = document.getElementById('route');
    var routes = this.routes;

    (function (scope, routes) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, routes);
      });
    })(this, routes);

    this.hasChanged(this, routes);
  };

  _proto2.hasChanged = function hasChanged(scope, routes) {
    if (window.location.hash.length > 0) {
      var currentHash = '';
      var currentHashLower = '';
      var currentComponent = null;

      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];

        if (route.isActiveRoute(window.location.hash.substr(1))) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      scope.rootElem.style.display = "block";
      window[currentHashLower] = new currentComponent();
      var componentHtml = currentHash + 'Component.html';
      scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml];
    } else {
      var currentHash = '';
      var currentHashLower = '';
      var currentComponent = null;

      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];

        if (route["default"] == true) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      if (currentHash == '') {//console.log('no default route specified')
      } else {
        scope.rootElem.style.display = "block";
        window[currentHashLower] = new currentComponent();
        var componentHtml = currentHash + 'Component.html';
        scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml];
      }
    }
  };

  return Router;
}();
export var ExtRouterComponent =
/*#__PURE__*/
function (_HTMLElement) {
  _inheritsLoose(ExtRouterComponent, _HTMLElement);

  _createClass(ExtRouterComponent, [{
    key: "padding",
    get: function get() {
      return this.getAttribute('padding');
    },
    set: function set(padding) {
      this.setAttribute('padding', padding);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.getAttribute('hidden');
    },
    set: function set(hidden) {
      this.setAttribute('hidden', hidden);
    }
  }]);

  function ExtRouterComponent() {
    return _HTMLElement.call(this) || this;
  }

  var _proto3 = ExtRouterComponent.prototype;

  _proto3.attributeChangedCallback = function attributeChangedCallback(attr, oldVal, newVal) {
    var route = document.getElementById("route");

    if (route != null) {
      if (attr == 'hidden') {
        if (newVal == 'true') {
          route.style.display = "none";
        } else {
          route.style.display = "block";
        }
      }
    } else {//console.log('route null: ' + attr + ' - ' + newVal)
    }

    if (attr == 'onready') {
      if (newVal) {
        //mjg check if this event exists for this component
        this.addEventListener(attr.slice(2), function (event) {
          eval(newVal + '(event)');
        });
      } else {//delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    }
  };

  _proto3.setEvent = function setEvent(eventparameters, o, me) {
    o.listeners[eventparameters.name] = function () {
      var eventname = eventparameters.name;
      var parameters = eventparameters.parameters;
      var parms = parameters.split(',');
      var args = Array.prototype.slice.call(arguments);
      var event = {};

      for (var i = 0, j = parms.length; i < j; i++) {
        event[parms[i]] = args[i];
      }

      me.dispatchEvent(new CustomEvent(eventname, {
        detail: event
      }));
    };
  };

  _proto3.connectedCallback = function connectedCallback() {
    var me = this;
    Ext.onReady(function () {
      var div = document.createElement("DIV");
      div.setAttribute("id", "route");
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.padding = me.padding;
      div.style.display = 'none'; //mjg should not be hard coded

      div.style.backgroundSize = '20px 20px';
      div.style.overflow = 'scroll';
      div.style.borderWidth = '0px';
      div.style.backgroundColor = '#e8e8e8';
      div.style.backgroundImage = 'linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0),' + 'linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)';
      var el = Ext.get(div);
      var props = {};
      props['hidden'] = me['hidden'];
      props.listeners = {};
      me.setEvent('onready', props, me);
      props.xtype = 'widget';
      props.element = el;
      me.ext = Ext.create(props);
      me.dispatchEvent(new CustomEvent('ready', {
        detail: {
          cmp: me.ext
        }
      }));
      var nodeParentName = me.parentNode.nodeName;

      if (nodeParentName.substring(0, 3) == 'EXT') {
        var parentCmp = me.parentNode['ext'];
        var childCmp = me.ext;
        parentCmp.add(childCmp);
      }

      me.router = new Router(window.routes);
    });
  };

  _proto3.disconnectedCallback = function disconnectedCallback() {
    delete this.ext;
  };

  _createClass(ExtRouterComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = [];
      attrs.push('hidden');
      attrs.push('onready');
      return attrs;
    }
  }]);

  return ExtRouterComponent;
}(_wrapNativeSuper(HTMLElement));

(function () {
  window.customElements.define('ext-router', ExtRouterComponent);
})();
//# sourceMappingURL=ext-router.component.js.map