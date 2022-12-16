var script = {
  data() {
    return {
      health: 100,
      ended: false
    };
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health < 10) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { class: { burst: _vm.ended }, attrs: { id: "bag" } }),
    _vm._v(" "),
    _c("div", { attrs: { id: "bag-health" } }, [
      _c("div", { style: { width: _vm.health + "%" } })
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "controls" } }, [
      _c(
        "button",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.ended,
              expression: "!ended"
            }
          ],
          on: { click: _vm.punch }
        },
        [_vm._v("Punch")]
      ),
      _vm._v(" "),
      _c("button", { on: { click: _vm.restart } }, [_vm._v("Restart")])
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-339ebaf8_0", { source: "\n#bag{\n    width: 200px;\n    height: 500px;\n    margin: 0 auto;\n    background: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag.png) center no-repeat;\n    background-size: 80%;\n}\n#bag.burst{\n    background-image: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag-burst.png);\n}\n#bag-health{\n    width: 200px;\n    border: 2px solid #000;\n    margin: 0 auto 20px auto;\n}\n#bag-health div{\n    height: 20px;\n    background: crimson\n}\n#controls{\n    width: 120px;\n    margin: 0 auto;\n}\n\n", map: {"version":3,"sources":["/tmp/codepen/vuejs/src/pen.vue"],"names":[],"mappings":";AA4CA;IACA,YAAA;IACA,aAAA;IACA,cAAA;IACA,0GAAA;IACA,oBAAA;AACA;AAEA;IACA,qGAAA;AACA;AAEA;IACA,YAAA;IACA,sBAAA;IACA,wBAAA;AACA;AAEA;IACA,YAAA;IACA;AACA;AAEA;IACA,YAAA;IACA,cAAA;AACA","file":"pen.vue","sourcesContent":["<!-- Use preprocessors via the lang attribute! e.g. <template lang=\"pug\"> -->\n<template>\n  <div id=\"app\">\n    <!-- bag image -->\n    <div id=\"bag\" v-bind:class=\"{ burst: ended }\"></div>\n\n    <!-- bag health bar -->\n    <div id=\"bag-health\">\n      <div v-bind:style=\"{ width: health + '%' }\"></div>\n    </div>\n\n    <!-- game control buttons -->\n    <div id=\"controls\">\n      <button v-on:click=\"punch\" v-show=\"!ended\">Punch</button>\n      <button v-on:click=\"restart\">Restart</button>\n      </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      health: 100,\n      ended: false\n    };\n  },\n  methods: {\n    punch: function() {\n      this.health -= 10;\n      if (this.health < 10) {\n        this.ended = true;\n      }\n    },\n    restart: function() {\n      this.health = 100;\n      this.ended = false;\n    }\n  }\n};\n</script>\n\n<!-- Use preprocessors via the lang attribute! e.g. <style lang=\"scss\"> -->\n<style>\n#bag{\n    width: 200px;\n    height: 500px;\n    margin: 0 auto;\n    background: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag.png) center no-repeat;\n    background-size: 80%;\n}\n\n#bag.burst{\n    background-image: url(https://fadzrinmadu.github.io/hosted-assets/simple-punchbag-game/bag-burst.png);\n}\n\n#bag-health{\n    width: 200px;\n    border: 2px solid #000;\n    margin: 0 auto 20px auto;\n}\n\n#bag-health div{\n    height: 20px;\n    background: crimson\n}\n\n#controls{\n    width: 120px;\n    margin: 0 auto;\n}\n\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export default __vue_component__;