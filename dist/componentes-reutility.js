import { defineComponent as me, useCssVars as We, unref as s, onMounted as st, ref as W, computed as k, watch as dt, openBlock as m, createElementBlock as S, createElementVNode as F, normalizeClass as de, createVNode as we, Transition as kt, withCtx as X, createBlock as te, createCommentVNode as T, renderSlot as z, Fragment as ve, withKeys as he, isRef as Le, createTextVNode as Ue, toDisplayString as ge, reactive as an, useSlots as Et, toRef as Xn, onUnmounted as Oo, mergeProps as He, createSlots as rt, renderList as De, normalizeProps as Ge, guardReactiveProps as ct, resolveDynamicComponent as bi, Teleport as ru, withModifiers as je, normalizeStyle as ft, nextTick as St, withDirectives as It, vShow as cn, onBeforeUpdate as au, getCurrentScope as ou, onScopeDispose as lu, vModelText as iu, vModelDynamic as uu, vModelCheckbox as su } from "vue";
const ht = () => {
  const e = [
    "acento-principal",
    "acento-principal-hover",
    "acento-principal-pressed",
    "acento-secundario",
    "acento-secundario-hover",
    "acento-secundario-pressed",
    "secundario",
    "neutro-1",
    "neutro-2",
    "neutro-3",
    "neutro-4",
    "background",
    "complementario-1",
    "complementario-2",
    "complementario-3",
    "error",
    "error-hover",
    "error-pressed"
  ], t = (r) => e.includes(r);
  return {
    // Methods
    isCustom: t,
    getRealColor: (r) => t(r) ? `rgb(var(--${r}))` : r
  };
}, cu = /* @__PURE__ */ me({
  __name: "SvgIcon",
  props: {
    color: {
      default: "black",
      type: String
    },
    src: {
      type: String,
      required: !0
    },
    size: {
      default: "1.5rem",
      type: [String, Number]
    }
  },
  setup(e) {
    const t = e;
    We((l) => ({
      e03f24d4: e.size,
      e718c2f0: s(a)
    }));
    const n = ht();
    st(() => {
      o();
    });
    const r = W(null), a = k(() => n.getRealColor(t.color)), o = async () => {
      if (!r.value)
        return;
      const l = await fetch(t.src);
      r.value.innerHTML = await l.text();
      const u = r.value.querySelector("svg");
      u && (u.setAttribute("width", t.size.toString()), u.setAttribute("height", t.size.toString()));
    };
    return dt(() => t.src, o), dt(() => t.size, o), (l, u) => (m(), S("div", {
      ref_key: "svgContent",
      ref: r,
      class: "svg-icon__container"
    }, null, 512));
  }
});
const Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, rn = /* @__PURE__ */ Ce(cu, [["__scopeId", "data-v-92aaa30d"]]), fu = { class: "font-awesome-icon__container" }, du = /* @__PURE__ */ me({
  __name: "FontAwesomeIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    color: {
      default: "black",
      type: String
    },
    size: {
      default: "1rem",
      type: [String, Number]
    }
  },
  setup(e) {
    const t = e;
    We((l) => ({
      "392f07b2": e.size,
      b0be874e: s(o)
    }));
    const n = ht(), r = {
      fat: "thin",
      fas: "solid",
      fal: "light",
      fab: "brands",
      far: "regular",
      fad: "duotone"
    }, a = k(() => {
      const l = t.name.endsWith("#"), u = t.name.replace(/#/g, ""), d = u.slice(0, 3), p = u.slice(4);
      if (!d || !p)
        return "fa-solid fa-bug";
      const b = r[d];
      return b ? l ? `fa-sharp fa-${b} fa-${p}` : `fa-${b} fa-${p}` : "fa-solid fa-bug";
    }), o = k(() => n.getRealColor(t.color));
    return (l, u) => (m(), S("div", fu, [
      F("em", {
        class: de(s(a))
      }, null, 2)
    ]));
  }
});
const Ye = /* @__PURE__ */ Ce(du, [["__scopeId", "data-v-b0b932e1"]]), pu = {
  key: 0,
  class: "check-box__icon"
}, wi = /* @__PURE__ */ me({
  __name: "CheckBox",
  props: {
    boxIcon: {
      type: String,
      default: "fal-square"
    },
    boxColor: {
      default: "acento-principal",
      type: String
    },
    checkedColor: {
      default: "acento-principal",
      type: String
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    boxIconSize: {
      default: "1rem",
      type: String
    },
    checkedIcon: {
      type: String,
      default: "fas-square-check"
    },
    checkedIconSize: {
      default: "1rem",
      type: String
    },
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = k({
      get() {
        return n.modelValue;
      },
      set(d) {
        t("update:model-value", d);
      }
    }), a = k(() => ({
      "check-box__container": !0,
      "check-box__container--disabled": n.disabled
    })), o = k(() => n.disabled ? "neutro-4" : n.boxColor), l = k(() => n.disabled ? "neutro-4" : n.checkedColor), u = () => {
      n.readonly || n.disabled || (r.value = !r.value);
    };
    return (d, p) => (m(), S("div", {
      class: de(s(a)),
      onClick: u
    }, [
      we(kt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: X(() => [
          s(r) ? (m(), S("div", pu, [
            e.checkedIcon.startsWith("fa") ? (m(), te(Ye, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: s(l)
            }, null, 8, ["name", "size", "color"])) : (m(), te(rn, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: s(l)
            }, null, 8, ["src", "size", "color"]))
          ])) : T("", !0)
        ]),
        _: 1
      }),
      e.boxIcon.startsWith("fa") ? (m(), te(Ye, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: s(o)
      }, null, 8, ["name", "size", "color"])) : (m(), te(rn, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: s(o)
      }, null, 8, ["src", "size", "color"]))
    ], 2));
  }
});
const yu = { class: "grid-row__container" }, mu = /* @__PURE__ */ me({
  __name: "GridRow",
  props: {
    width: {
      default: "",
      type: [String, Number]
    },
    backgroundColor: {
      default: "",
      type: String
    },
    gridColumn: {
      default: "",
      type: [String, Number]
    },
    gridRow: {
      default: "",
      type: [String, Number]
    },
    padding: {
      default: 0,
      type: [String, Number]
    },
    columnGap: {
      default: 0,
      type: [String, Number]
    },
    gridTemplateColumns: {
      default: "initial",
      type: [String, Number]
    },
    gridAutoColumns: {
      default: "",
      type: String
    },
    justifyContent: {
      default: "",
      type: String
    },
    alignItems: {
      default: "",
      type: String
    },
    height: {
      default: "",
      type: [String, Number]
    }
  },
  setup(e) {
    const t = e;
    We((a) => ({
      "5ebe69da": e.width,
      "29a99d7a": e.height,
      a8be8bc4: e.padding,
      "265db27e": e.gridRow,
      "319daa6d": e.columnGap,
      e4de2de2: e.gridColumn,
      "403ca68e": e.alignItems,
      "27bc691c": e.justifyContent,
      "3c14f515": e.gridAutoColumns,
      ed5c38d8: s(r),
      d898df2c: e.gridTemplateColumns
    }));
    const n = ht(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (m(), S("div", yu, [
      z(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ki = /* @__PURE__ */ Ce(mu, [["__scopeId", "data-v-e59af6d9"]]), vu = { class: "grid-column__container" }, hu = /* @__PURE__ */ me({
  __name: "GridColumn",
  props: {
    alignContent: {
      default: "",
      type: String
    },
    alignItems: {
      default: "",
      type: String
    },
    justifyContent: {
      default: "",
      type: String
    },
    justifyItems: {
      default: "",
      type: String
    },
    width: {
      default: "initial",
      type: [String, Number]
    },
    height: {
      default: "auto",
      type: [String, Number]
    },
    margin: {
      default: 0,
      type: [String, Number]
    },
    rowGap: {
      default: 0,
      type: [String, Number]
    },
    padding: {
      default: 0,
      type: [String, Number]
    },
    gridRow: {
      default: "",
      type: [String, Number]
    },
    gridColumn: {
      default: "",
      type: [String, Number]
    },
    gridTemplateRows: {
      default: "initial",
      type: [String, Number]
    },
    backgroundColor: {
      default: "transparent",
      type: String
    },
    borderRadius: {
      default: "",
      type: String
    },
    boxShadow: {
      default: "",
      type: String
    },
    overflow: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    const t = e;
    We((a) => ({
      "538f1f0e": e.width,
      "414acd4a": e.margin,
      "51f2b658": e.height,
      "2eac2b6e": e.rowGap,
      ac36c3f8: e.padding,
      "29d5eab2": e.gridRow,
      f7acdf22: e.overflow,
      "5aadcffe": e.boxShadow,
      a7f2992e: e.gridColumn,
      "5eb270e8": e.alignItems,
      "98964c6a": e.borderRadius,
      "0d2a84fd": e.justifyItems,
      "366e13a1": e.alignContent,
      27317676: e.justifyContent,
      "32493b46": e.gridTemplateRows,
      b20bf524: s(r)
    }));
    const n = ht(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (m(), S("div", vu, [
      z(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const $o = /* @__PURE__ */ Ce(hu, [["__scopeId", "data-v-584f9924"]]), gu = ["width", "height"], _u = ["fill"], bu = /* @__PURE__ */ F("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), wu = [
  bu
], ku = ["fill"], Ou = /* @__PURE__ */ F("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), $u = [
  Ou
], Su = ["fill"], xu = /* @__PURE__ */ F("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Pu = [
  xu
], Oi = /* @__PURE__ */ me({
  __name: "LdThreeBounce",
  props: {
    fill: {
      default: "black",
      type: String
    },
    size: {
      default: "1rem",
      type: [String, Number]
    }
  },
  setup(e) {
    const t = e, n = ht(), r = k(() => n.getRealColor(t.fill));
    return (a, o) => (m(), S("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 52 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      F("circle", {
        r: "6",
        cx: "6",
        cy: "6",
        stroke: "none",
        fill: s(r)
      }, wu, 8, _u),
      F("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: s(r)
      }, $u, 8, ku),
      F("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: s(r)
      }, Pu, 8, Su)
    ], 8, gu));
  }
}), Tu = ["disabled"], Du = { class: "custom-button__text" }, Cu = /* @__PURE__ */ me({
  __name: "CustomButton",
  props: {
    color: {
      default: "#000000",
      type: String
    },
    contentColor: {
      default: "#ffffff",
      type: String
    },
    hoverColor: {
      default: "",
      type: String
    },
    activeColor: {
      default: "",
      type: String
    },
    outlined: {
      type: Boolean
    },
    width: {
      default: "initial",
      type: String
    },
    height: {
      default: "2.5rem",
      type: String
    },
    disabled: {
      type: Boolean
    },
    appendIcon: {
      default: "",
      type: String
    },
    preppendIcon: {
      default: "",
      type: String
    },
    justifyContent: {
      default: "center",
      type: String
    },
    gridTemplateColumns: {
      default: "",
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((c) => ({
      a2d19c60: s(l),
      "56c5038a": e.width,
      "680c73e3": e.height,
      "53db0d22": s(o),
      "2e0a72f6": e.justifyContent,
      "0354f99a": s(b),
      "98746fd6": s(d),
      "42720fd3": s(u)
    }));
    const r = ht(), a = k(() => n.outlined ? n.color : n.contentColor), o = k(() => r.getRealColor(n.color)), l = k(() => r.getRealColor(n.contentColor)), u = k(() => {
      const c = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(c) ? r.getRealColor(c) : r.getRealColor(n.hoverColor);
    }), d = k(() => {
      const c = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(c) ? r.getRealColor(c) : r.getRealColor(n.activeColor);
    }), p = k(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined,
      "custom-button__container--icon": n.preppendIcon || n.appendIcon
    })), b = k(() => n.gridTemplateColumns ? n.gridTemplateColumns : n.preppendIcon || n.appendIcon ? "1rem 1fr 1rem" : "1fr"), y = (c) => {
      n.disabled || t("click", c);
    };
    return (c, g) => (m(), S("button", {
      disabled: e.disabled,
      class: de(s(p)),
      onClick: y
    }, [
      e.preppendIcon ? (m(), S(ve, { key: 0 }, [
        e.loading ? T("", !0) : (m(), te(Ye, {
          key: 0,
          size: "1rem",
          color: s(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"]))
      ], 64)) : T("", !0),
      F("span", Du, [
        e.loading ? (m(), te(Oi, {
          key: 0,
          fill: s(a)
        }, null, 8, ["fill"])) : z(c.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon ? (m(), S(ve, { key: 1 }, [
        e.loading ? T("", !0) : (m(), te(Ye, {
          key: 0,
          size: "1rem",
          color: s(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"]))
      ], 64)) : T("", !0)
    ], 10, Tu));
  }
});
const ia = /* @__PURE__ */ Ce(Cu, [["__scopeId", "data-v-6d5e0965"]]), Ru = /* @__PURE__ */ me({
  __name: "TextContainer",
  props: {
    fontSize: {
      default: "1rem",
      type: [String, Number]
    },
    padding: {
      default: "0",
      type: [String, Number]
    },
    lineHeight: {
      default: "1rem",
      type: [String, Number]
    },
    textAlign: {
      default: "",
      type: String
    },
    textTransform: {
      default: "",
      type: String
    },
    color: {
      default: "",
      type: String
    },
    hoverColor: {
      default: "",
      type: String
    },
    activeColor: {
      default: "#ffffff",
      type: String
    },
    hoverBackground: {
      default: "neutro-1",
      type: String
    },
    activeBackground: {
      default: "neutro-3",
      type: String
    },
    whiteSpace: {
      default: "",
      type: String
    },
    fontWeight: {
      default: "",
      type: [String, Number]
    },
    letterSpacing: {
      default: "",
      type: [String, Number]
    },
    fontFamily: {
      default: "Metropolis",
      type: String
    },
    predefinedStyle: {
      default: "",
      type: String
    },
    clickable: {
      type: Boolean
    },
    borderRadius: {
      default: "initial",
      type: String
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((y) => ({
      "7b370bf7": e.padding,
      "1dbc99e6": s(o),
      "5944646c": e.fontSize,
      "955ff784": e.textAlign,
      f28676d6: e.lineHeight,
      "79b4e201": e.fontWeight,
      "978c7692": e.whiteSpace,
      f6efa890: e.borderRadius,
      "654566ba": e.letterSpacing,
      c2acd7b6: e.textTransform,
      "5c7bfaed": e.fontFamily,
      "0a9c28f5": s(l),
      "598aca74": s(d),
      "1e42599a": s(u),
      "07dea748": s(p)
    }));
    const r = ht(), a = k(() => {
      const y = ["text__container"];
      return n.clickable && y.push("text__container--clickable"), y.push(`text__container--${n.predefinedStyle}`), y;
    }), o = k(() => r.getRealColor(n.color)), l = k(() => r.getRealColor(n.hoverColor)), u = k(() => r.getRealColor(n.activeColor)), d = k(() => r.getRealColor(n.hoverBackground)), p = k(() => r.getRealColor(n.activeBackground)), b = (y) => {
      t("click", y);
    };
    return (y, c) => (m(), S("div", {
      class: de(s(a)),
      onClick: b
    }, [
      z(y.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Ht = /* @__PURE__ */ Ce(Ru, [["__scopeId", "data-v-6526eede"]]), Mu = ["onKeydown"], Iu = /* @__PURE__ */ me({
  __name: "CustomDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    persistent: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = W(!1), a = W(null), o = k({
      get() {
        return n.modelValue;
      },
      set(y) {
        t("update:model-value", y);
      }
    }), l = k(() => ({
      "custom-dialog__container": !0,
      "custom-dialog__container--closing": r.value
    })), u = () => {
      n.persistent ? r.value = !0 : o.value = !1;
    }, d = () => {
      r.value = !1;
    }, p = () => {
      a.value && a.value.focus();
    }, b = (y) => {
      y.currentTarget === y.target && (n.persistent ? r.value = !0 : o.value = !1);
    };
    return (y, c) => (m(), te(kt, { name: "fade" }, {
      default: X(() => [
        s(o) ? (m(), S("div", {
          key: 0,
          ref_key: "container",
          ref: a,
          tabindex: "-1",
          class: de(s(l)),
          onKeyup: d,
          onMouseover: p,
          onMouseup: d,
          onKeydown: he(u, ["esc"]),
          onMousedown: b
        }, [
          z(y.$slots, "default", {}, void 0, !0)
        ], 42, Mu)) : T("", !0)
      ]),
      _: 3
    }));
  }
});
const So = /* @__PURE__ */ Ce(Iu, [["__scopeId", "data-v-e84429eb"]]), Nu = /* @__PURE__ */ me({
  __name: "ConfirmationDialog",
  props: {
    title: {
      type: String,
      required: !0
    },
    subtitle: {
      default: "",
      type: String
    },
    modelValue: {
      type: Boolean,
      required: !0
    },
    width: {
      default: "520px",
      type: String
    }
  },
  emits: ["click:no", "click:yes", "update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = k({
      get() {
        return n.modelValue;
      },
      set(l) {
        t("update:model-value", l);
      }
    }), a = () => {
      t("click:yes");
    }, o = () => {
      t("click:no");
    };
    return (l, u) => (m(), te(So, {
      modelValue: s(r),
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Le(r) ? r.value = d : null),
      persistent: ""
    }, {
      default: X(() => [
        we($o, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: X(() => [
            we(Ht, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: X(() => [
                Ue(ge(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (m(), te(Ht, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: X(() => [
                Ue(ge(e.subtitle), 1)
              ]),
              _: 1
            })) : T("", !0),
            we(ki, { "column-gap": "0.75rem" }, {
              default: X(() => [
                we(ia, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: X(() => [
                    Ue(" Sí ")
                  ]),
                  _: 1
                }),
                we(ia, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: X(() => [
                    Ue(" No ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["width"])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
function se(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function J(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fn = function(n) {
    return typeof n;
  } : fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fn(e);
}
function ce(e) {
  J(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || fn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function $t(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function mt(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + r + 1, 0);
  var l = o.getDate();
  return a >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
}
function dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dn = function(n) {
    return typeof n;
  } : dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, dn(e);
}
function $i(e, t) {
  if (J(2, arguments), !t || dn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? se(t.years) : 0, r = t.months ? se(t.months) : 0, a = t.weeks ? se(t.weeks) : 0, o = t.days ? se(t.days) : 0, l = t.hours ? se(t.hours) : 0, u = t.minutes ? se(t.minutes) : 0, d = t.seconds ? se(t.seconds) : 0, p = ce(e), b = r || n ? mt(p, r + n * 12) : p, y = o || a ? $t(b, o + a * 7) : b, c = u + l * 60, g = d + c * 60, P = g * 1e3, B = new Date(y.getTime() + P);
  return B;
}
function Bu(e, t) {
  J(2, arguments);
  var n = ce(e).getTime(), r = se(t);
  return new Date(n + r);
}
var Au = {};
function gt() {
  return Au;
}
function Bt(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = gt(), y = se((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : b.weekStartsOn) !== null && r !== void 0 ? r : (d = b.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var c = ce(e), g = c.getDay(), P = (g < y ? 7 : 0) + g - y;
  return c.setDate(c.getDate() - P), c.setHours(0, 0, 0, 0), c;
}
function Jn(e) {
  return J(1, arguments), Bt(e, {
    weekStartsOn: 1
  });
}
function Eu(e) {
  J(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = Jn(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var l = Jn(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Yu(e) {
  J(1, arguments);
  var t = Eu(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Jn(n);
  return r;
}
function er(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ho(e) {
  J(1, arguments);
  var t = ce(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Vu = 864e5;
function Uu(e, t) {
  J(2, arguments);
  var n = Ho(e), r = Ho(t), a = n.getTime() - er(n), o = r.getTime() - er(r);
  return Math.round((a - o) / Vu);
}
function Si(e, t) {
  J(2, arguments);
  var n = se(t);
  return mt(e, n * 12);
}
var xo = 6e4, Po = 36e5, Wu = 1e3;
function pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pn = function(n) {
    return typeof n;
  } : pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pn(e);
}
function xi(e) {
  return J(1, arguments), e instanceof Date || pn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Jt(e) {
  if (J(1, arguments), !xi(e) && typeof e != "number")
    return !1;
  var t = ce(e);
  return !isNaN(Number(t));
}
function zo(e, t) {
  var n;
  J(1, arguments);
  var r = e || {}, a = ce(r.start), o = ce(r.end), l = o.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var u = [], d = a;
  d.setHours(0, 0, 0, 0);
  var p = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (p < 1 || isNaN(p))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; d.getTime() <= l; )
    u.push(ce(d)), d.setDate(d.getDate() + p), d.setHours(0, 0, 0, 0);
  return u;
}
function Fu(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = gt(), y = se((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : b.weekStartsOn) !== null && r !== void 0 ? r : (d = b.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var c = ce(e), g = c.getDay(), P = (g < y ? -7 : 0) + 6 - (g - y);
  return c.setDate(c.getDate() + P), c.setHours(23, 59, 59, 999), c;
}
function Pi(e, t) {
  J(2, arguments);
  var n = se(t);
  return Bu(e, -n);
}
var Hu = 864e5;
function zu(e) {
  J(1, arguments);
  var t = ce(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / Hu) + 1;
}
function zt(e) {
  J(1, arguments);
  var t = 1, n = ce(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Ti(e) {
  J(1, arguments);
  var t = ce(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = zt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var l = zt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Lu(e) {
  J(1, arguments);
  var t = Ti(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = zt(n);
  return r;
}
var ju = 6048e5;
function Di(e) {
  J(1, arguments);
  var t = ce(e), n = zt(t).getTime() - Lu(t).getTime();
  return Math.round(n / ju) + 1;
}
function At(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = gt(), y = se((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : b.weekStartsOn) !== null && r !== void 0 ? r : (d = b.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var c = ce(e), g = c.getUTCDay(), P = (g < y ? 7 : 0) + g - y;
  return c.setUTCDate(c.getUTCDate() - P), c.setUTCHours(0, 0, 0, 0), c;
}
function To(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = ce(e), y = b.getUTCFullYear(), c = gt(), g = se((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = c.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = /* @__PURE__ */ new Date(0);
  P.setUTCFullYear(y + 1, 0, g), P.setUTCHours(0, 0, 0, 0);
  var B = At(P, t), U = /* @__PURE__ */ new Date(0);
  U.setUTCFullYear(y, 0, g), U.setUTCHours(0, 0, 0, 0);
  var G = At(U, t);
  return b.getTime() >= B.getTime() ? y + 1 : b.getTime() >= G.getTime() ? y : y - 1;
}
function qu(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = gt(), y = se((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = b.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), c = To(e, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(c, 0, y), g.setUTCHours(0, 0, 0, 0);
  var P = At(g, t);
  return P;
}
var Gu = 6048e5;
function Ci(e, t) {
  J(1, arguments);
  var n = ce(e), r = At(n, t).getTime() - qu(n, t).getTime();
  return Math.round(r / Gu) + 1;
}
function $e(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Qu = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return $e(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : $e(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return $e(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return $e(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return $e(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return $e(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return $e(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return $e(o, n.length);
  }
};
const Ot = Qu;
var Ut = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Zu = {
  // Era
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Ot.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var o = To(t, a), l = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var u = l % 100;
      return $e(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(l, {
      unit: "year"
    }) : $e(l, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Ti(t);
    return $e(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return $e(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return $e(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return $e(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Ot.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return $e(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, a) {
    var o = Ci(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : $e(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Di(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : $e(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ot.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = zu(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : $e(a, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, a) {
    var o = t.getUTCDay(), l = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(l);
      case "ee":
        return $e(l, 2);
      case "eo":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, a) {
    var o = t.getUTCDay(), l = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(l);
      case "cc":
        return $e(l, n.length);
      case "co":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var a = t.getUTCDay(), o = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return $e(o, n.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var a = t.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a === 12 ? o = Ut.noon : a === 0 ? o = Ut.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a >= 17 ? o = Ut.evening : a >= 12 ? o = Ut.afternoon : a >= 4 ? o = Ut.morning : o = Ut.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Ot.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ot.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : $e(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : $e(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Ot.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ot.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Ot.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (n) {
      case "X":
        return jo(l);
      case "XXXX":
      case "XX":
        return Rt(l);
      case "XXXXX":
      case "XXX":
      default:
        return Rt(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return jo(l);
      case "xxxx":
      case "xx":
        return Rt(l);
      case "xxxxx":
      case "xxx":
      default:
        return Rt(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Lo(l, ":");
      case "OOOO":
      default:
        return "GMT" + Rt(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Lo(l, ":");
      case "zzzz":
      default:
        return "GMT" + Rt(l, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var o = a._originalDate || t, l = Math.floor(o.getTime() / 1e3);
    return $e(l, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTime();
    return $e(l, n.length);
  }
};
function Lo(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var l = t || "";
  return n + String(a) + l + $e(o, 2);
}
function jo(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + $e(Math.abs(e) / 60, 2);
  }
  return Rt(e, t);
}
function Rt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = $e(Math.floor(a / 60), 2), l = $e(a % 60, 2);
  return r + o + n + l;
}
const Ku = Zu;
var qo = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Ri = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Xu = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return qo(t, n);
  var l;
  switch (a) {
    case "P":
      l = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      l = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      l = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      l = n.dateTime({
        width: "full"
      });
      break;
  }
  return l.replace("{{date}}", qo(a, n)).replace("{{time}}", Ri(o, n));
}, Ju = {
  p: Ri,
  P: Xu
};
const ua = Ju;
var es = ["D", "DD"], ts = ["YY", "YYYY"];
function Mi(e) {
  return es.indexOf(e) !== -1;
}
function Ii(e) {
  return ts.indexOf(e) !== -1;
}
function tr(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var ns = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, rs = function(t, n, r) {
  var a, o = ns[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const as = rs;
function qr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var os = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ls = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, is = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, us = {
  date: qr({
    formats: os,
    defaultWidth: "full"
  }),
  time: qr({
    formats: ls,
    defaultWidth: "full"
  }),
  dateTime: qr({
    formats: is,
    defaultWidth: "full"
  })
};
const ss = us;
var cs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, fs = function(t, n, r, a) {
  return cs[t];
};
const ds = fs;
function Qt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[l] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, d = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[d] || e.values[u];
    }
    var p = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[p];
  };
}
var ps = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ys = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ms = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, vs = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, hs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, gs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, _s = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, bs = {
  ordinalNumber: _s,
  era: Qt({
    values: ps,
    defaultWidth: "wide"
  }),
  quarter: Qt({
    values: ys,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Qt({
    values: ms,
    defaultWidth: "wide"
  }),
  day: Qt({
    values: vs,
    defaultWidth: "wide"
  }),
  dayPeriod: Qt({
    values: hs,
    defaultWidth: "wide",
    formattingValues: gs,
    defaultFormattingWidth: "wide"
  })
};
const ws = bs;
function Zt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? Os(u, function(y) {
      return y.test(l);
    }) : ks(u, function(y) {
      return y.test(l);
    }), p;
    p = e.valueCallback ? e.valueCallback(d) : d, p = n.valueCallback ? n.valueCallback(p) : p;
    var b = t.slice(l.length);
    return {
      value: p,
      rest: b
    };
  };
}
function ks(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Os(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function $s(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(a.length);
    return {
      value: l,
      rest: u
    };
  };
}
var Ss = /^(\d+)(th|st|nd|rd)?/i, xs = /\d+/i, Ps = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ts = {
  any: [/^b/i, /^(a|c)/i]
}, Ds = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Cs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ms = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Is = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Bs = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, As = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Es = {
  ordinalNumber: $s({
    matchPattern: Ss,
    parsePattern: xs,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Zt({
    matchPatterns: Ps,
    defaultMatchWidth: "wide",
    parsePatterns: Ts,
    defaultParseWidth: "any"
  }),
  quarter: Zt({
    matchPatterns: Ds,
    defaultMatchWidth: "wide",
    parsePatterns: Cs,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Zt({
    matchPatterns: Rs,
    defaultMatchWidth: "wide",
    parsePatterns: Ms,
    defaultParseWidth: "any"
  }),
  day: Zt({
    matchPatterns: Is,
    defaultMatchWidth: "wide",
    parsePatterns: Ns,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zt({
    matchPatterns: Bs,
    defaultMatchWidth: "any",
    parsePatterns: As,
    defaultParseWidth: "any"
  })
};
const Ys = Es;
var Vs = {
  code: "en-US",
  formatDistance: as,
  formatLong: ss,
  formatRelative: ds,
  localize: ws,
  match: Ys,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ni = Vs;
var Us = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ws = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fs = /^'([^]*?)'?$/, Hs = /''/g, zs = /[a-zA-Z]/;
function en(e, t, n) {
  var r, a, o, l, u, d, p, b, y, c, g, P, B, U, G, j, R, H;
  J(2, arguments);
  var ne = String(t), Q = gt(), oe = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : Q.locale) !== null && r !== void 0 ? r : Ni, x = se((o = (l = (u = (d = n == null ? void 0 : n.firstWeekContainsDate) !== null && d !== void 0 ? d : n == null || (p = n.locale) === null || p === void 0 || (b = p.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : Q.firstWeekContainsDate) !== null && l !== void 0 ? l : (y = Q.locale) === null || y === void 0 || (c = y.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(x >= 1 && x <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = se((g = (P = (B = (U = n == null ? void 0 : n.weekStartsOn) !== null && U !== void 0 ? U : n == null || (G = n.locale) === null || G === void 0 || (j = G.options) === null || j === void 0 ? void 0 : j.weekStartsOn) !== null && B !== void 0 ? B : Q.weekStartsOn) !== null && P !== void 0 ? P : (R = Q.locale) === null || R === void 0 || (H = R.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(O >= 0 && O <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!oe.localize)
    throw new RangeError("locale must contain localize property");
  if (!oe.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var D = ce(e);
  if (!Jt(D))
    throw new RangeError("Invalid time value");
  var C = er(D), q = Pi(D, C), Z = {
    firstWeekContainsDate: x,
    weekStartsOn: O,
    locale: oe,
    _originalDate: D
  }, ae = ne.match(Ws).map(function(K) {
    var Y = K[0];
    if (Y === "p" || Y === "P") {
      var i = ua[Y];
      return i(K, oe.formatLong);
    }
    return K;
  }).join("").match(Us).map(function(K) {
    if (K === "''")
      return "'";
    var Y = K[0];
    if (Y === "'")
      return Ls(K);
    var i = Ku[Y];
    if (i)
      return !(n != null && n.useAdditionalWeekYearTokens) && Ii(K) && tr(K, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Mi(K) && tr(K, t, String(e)), i(q, K, oe.localize, Z);
    if (Y.match(zs))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Y + "`");
    return K;
  }).join("");
  return ae;
}
function Ls(e) {
  var t = e.match(Fs);
  return t ? t[1].replace(Hs, "'") : e;
}
function js(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function qs(e) {
  J(1, arguments);
  var t = ce(e), n = t.getDay();
  return n;
}
function Gs(e) {
  J(1, arguments);
  var t = ce(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function bt(e) {
  J(1, arguments);
  var t = ce(e), n = t.getHours();
  return n;
}
var Qs = 6048e5;
function Zs(e) {
  J(1, arguments);
  var t = ce(e), n = Jn(t).getTime() - Yu(t).getTime();
  return Math.round(n / Qs) + 1;
}
function wt(e) {
  J(1, arguments);
  var t = ce(e), n = t.getMinutes();
  return n;
}
function Pe(e) {
  J(1, arguments);
  var t = ce(e), n = t.getMonth();
  return n;
}
function Lt(e) {
  J(1, arguments);
  var t = ce(e), n = t.getSeconds();
  return n;
}
function Ks(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = ce(e), y = b.getFullYear(), c = gt(), g = se((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = c.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = /* @__PURE__ */ new Date(0);
  P.setFullYear(y + 1, 0, g), P.setHours(0, 0, 0, 0);
  var B = Bt(P, t), U = /* @__PURE__ */ new Date(0);
  U.setFullYear(y, 0, g), U.setHours(0, 0, 0, 0);
  var G = Bt(U, t);
  return b.getTime() >= B.getTime() ? y + 1 : b.getTime() >= G.getTime() ? y : y - 1;
}
function Xs(e, t) {
  var n, r, a, o, l, u, d, p;
  J(1, arguments);
  var b = gt(), y = se((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = b.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), c = Ks(e, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(c, 0, y), g.setHours(0, 0, 0, 0);
  var P = Bt(g, t);
  return P;
}
var Js = 6048e5;
function ec(e, t) {
  J(1, arguments);
  var n = ce(e), r = Bt(n, t).getTime() - Xs(n, t).getTime();
  return Math.round(r / Js) + 1;
}
function Te(e) {
  return J(1, arguments), ce(e).getFullYear();
}
function Do(e, t) {
  J(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() > r.getTime();
}
function Co(e, t) {
  J(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() < r.getTime();
}
function Bi(e, t) {
  J(2, arguments);
  var n = ce(e), r = ce(t);
  return n.getTime() === r.getTime();
}
function yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(n) {
    return typeof n;
  } : yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yn(e);
}
function Ai(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && sa(e, t);
}
function sa(e, t) {
  return sa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, sa(e, t);
}
function Ei(e) {
  var t = nc();
  return function() {
    var r = nr(e), a;
    if (t) {
      var o = nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return tc(this, a);
  };
}
function tc(e, t) {
  return t && (yn(t) === "object" || typeof t == "function") ? t : ca(e);
}
function ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function nr(e) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, nr(e);
}
function Ro(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Go(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mo(e, t, n) {
  return t && Go(e.prototype, t), n && Go(e, n), e;
}
function fa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rc = 10, Yi = /* @__PURE__ */ function() {
  function e() {
    Ro(this, e), fa(this, "subPriority", 0);
  }
  return Mo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), ac = /* @__PURE__ */ function(e) {
  Ai(n, e);
  var t = Ei(n);
  function n(r, a, o, l, u) {
    var d;
    return Ro(this, n), d = t.call(this), d.value = r, d.validateValue = a, d.setValue = o, d.priority = l, u && (d.subPriority = u), d;
  }
  return Mo(n, [{
    key: "validate",
    value: function(a, o) {
      return this.validateValue(a, this.value, o);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return this.setValue(a, o, this.value, l);
    }
  }]), n;
}(Yi), oc = /* @__PURE__ */ function(e) {
  Ai(n, e);
  var t = Ei(n);
  function n() {
    var r;
    Ro(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), fa(ca(r), "priority", rc), fa(ca(r), "subPriority", -1), r;
  }
  return Mo(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var l = /* @__PURE__ */ new Date(0);
      return l.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), l.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), l;
    }
  }]), n;
}(Yi);
function lc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ic(e, t, n) {
  return t && Qo(e.prototype, t), n && Qo(e, n), e;
}
var ke = /* @__PURE__ */ function() {
  function e() {
    lc(this, e);
  }
  return ic(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var l = this.parse(n, r, a, o);
      return l ? {
        setter: new ac(l.value, this.validate, this.set, this.priority, this.subPriority),
        rest: l.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(n) {
    return typeof n;
  } : mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mn(e);
}
function uc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sc(e, t, n) {
  return t && Zo(e.prototype, t), n && Zo(e, n), e;
}
function cc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && da(e, t);
}
function da(e, t) {
  return da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, da(e, t);
}
function fc(e) {
  var t = pc();
  return function() {
    var r = rr(e), a;
    if (t) {
      var o = rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dc(this, a);
  };
}
function dc(e, t) {
  return t && (mn(t) === "object" || typeof t == "function") ? t : pa(e);
}
function pa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rr(e) {
  return rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, rr(e);
}
function Ko(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yc = /* @__PURE__ */ function(e) {
  cc(n, e);
  var t = fc(n);
  function n() {
    var r;
    uc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ko(pa(r), "priority", 140), Ko(pa(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return sc(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return l.era(a, {
            width: "abbreviated"
          }) || l.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return l.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return l.era(a, {
            width: "wide"
          }) || l.era(a, {
            width: "abbreviated"
          }) || l.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return o.era = l, a.setUTCFullYear(l, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke), Ae = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, pt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ee(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ne(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function yt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, l = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Po + o * xo + l * Wu),
    rest: t.slice(n[0].length)
  };
}
function Vi(e) {
  return Ne(Ae.anyDigitsSigned, e);
}
function Be(e, t) {
  switch (e) {
    case 1:
      return Ne(Ae.singleDigit, t);
    case 2:
      return Ne(Ae.twoDigits, t);
    case 3:
      return Ne(Ae.threeDigits, t);
    case 4:
      return Ne(Ae.fourDigits, t);
    default:
      return Ne(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ar(e, t) {
  switch (e) {
    case 1:
      return Ne(Ae.singleDigitSigned, t);
    case 2:
      return Ne(Ae.twoDigitsSigned, t);
    case 3:
      return Ne(Ae.threeDigitsSigned, t);
    case 4:
      return Ne(Ae.fourDigitsSigned, t);
    default:
      return Ne(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Io(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ui(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, l = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + l - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Wi(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function mc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vc(e, t, n) {
  return t && Xo(e.prototype, t), n && Xo(e, n), e;
}
function hc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ya(e, t);
}
function ya(e, t) {
  return ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ya(e, t);
}
function gc(e) {
  var t = bc();
  return function() {
    var r = or(e), a;
    if (t) {
      var o = or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return _c(this, a);
  };
}
function _c(e, t) {
  return t && (vn(t) === "object" || typeof t == "function") ? t : ma(e);
}
function ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function or(e) {
  return or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, or(e);
}
function Jo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wc = /* @__PURE__ */ function(e) {
  hc(n, e);
  var t = gc(n);
  function n() {
    var r;
    mc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Jo(ma(r), "priority", 130), Jo(ma(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return vc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return {
          year: p,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return Ee(Be(4, a), u);
        case "yo":
          return Ee(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Ee(Be(o.length, a), u);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = a.getUTCFullYear();
      if (l.isTwoDigitYear) {
        var d = Ui(l.year, u);
        return a.setUTCFullYear(d, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var p = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return a.setUTCFullYear(p, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function kc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Oc(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function $c(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && va(e, t);
}
function va(e, t) {
  return va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, va(e, t);
}
function Sc(e) {
  var t = Pc();
  return function() {
    var r = lr(e), a;
    if (t) {
      var o = lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return xc(this, a);
  };
}
function xc(e, t) {
  return t && (hn(t) === "object" || typeof t == "function") ? t : ha(e);
}
function ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function lr(e) {
  return lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, lr(e);
}
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tc = /* @__PURE__ */ function(e) {
  $c(n, e);
  var t = Sc(n);
  function n() {
    var r;
    kc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), tl(ha(r), "priority", 130), tl(ha(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Oc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return {
          year: p,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return Ee(Be(4, a), u);
        case "Yo":
          return Ee(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Ee(Be(o.length, a), u);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, l, u) {
      var d = To(a, u);
      if (l.isTwoDigitYear) {
        var p = Ui(l.year, d);
        return a.setUTCFullYear(p, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), At(a, u);
      }
      var b = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return a.setUTCFullYear(b, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), At(a, u);
    }
  }]), n;
}(ke);
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Dc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cc(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function Rc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ga(e, t);
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ga(e, t);
}
function Mc(e) {
  var t = Nc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ic(this, a);
  };
}
function Ic(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : _a(e);
}
function _a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ir(e) {
  return ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ir(e);
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bc = /* @__PURE__ */ function(e) {
  Rc(n, e);
  var t = Mc(n);
  function n() {
    var r;
    Dc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), rl(_a(r), "priority", 130), rl(_a(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Cc(n, [{
    key: "parse",
    value: function(a, o) {
      return ar(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(l, 0, 4), u.setUTCHours(0, 0, 0, 0), zt(u);
    }
  }]), n;
}(ke);
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function Ac(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ec(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function Yc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ba(e, t);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ba(e, t);
}
function Vc(e) {
  var t = Wc();
  return function() {
    var r = ur(e), a;
    if (t) {
      var o = ur(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Uc(this, a);
  };
}
function Uc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ur(e);
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fc = /* @__PURE__ */ function(e) {
  Yc(n, e);
  var t = Vc(n);
  function n() {
    var r;
    Ac(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ol(wa(r), "priority", 130), ol(wa(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Ec(n, [{
    key: "parse",
    value: function(a, o) {
      return ar(o === "u" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCFullYear(l, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function Hc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zc(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), e;
}
function Lc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ka(e, t);
}
function jc(e) {
  var t = Gc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qc(this, a);
  };
}
function qc(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : Oa(e);
}
function Oa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sr(e) {
  return sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, sr(e);
}
function il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qc = /* @__PURE__ */ function(e) {
  Lc(n, e);
  var t = jc(n);
  function n() {
    var r;
    Hc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), il(Oa(r), "priority", 120), il(Oa(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return zc(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "Q":
        case "QQ":
          return Be(o.length, a);
        case "Qo":
          return l.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return l.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return l.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return l.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || l.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth((l - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(n) {
    return typeof n;
  } : wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wn(e);
}
function Zc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Kc(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Xc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $a(e, t);
}
function $a(e, t) {
  return $a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $a(e, t);
}
function Jc(e) {
  var t = tf();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ef(this, a);
  };
}
function ef(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : Sa(e);
}
function Sa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cr(e) {
  return cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cr(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nf = /* @__PURE__ */ function(e) {
  Xc(n, e);
  var t = Jc(n);
  function n() {
    var r;
    Zc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), sl(Sa(r), "priority", 120), sl(Sa(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Kc(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "q":
        case "qq":
          return Be(o.length, a);
        case "qo":
          return l.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return l.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return l.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return l.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || l.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth((l - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function rf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function af(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function of(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xa(e, t);
}
function xa(e, t) {
  return xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xa(e, t);
}
function lf(e) {
  var t = sf();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return uf(this, a);
  };
}
function uf(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Pa(e);
}
function Pa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fr(e);
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cf = /* @__PURE__ */ function(e) {
  of(n, e);
  var t = lf(n);
  function n() {
    var r;
    rf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), fl(Pa(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), fl(Pa(r), "priority", 110), r;
  }
  return af(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p - 1;
      };
      switch (o) {
        case "M":
          return Ee(Ne(Ae.month, a), u);
        case "MM":
          return Ee(Be(2, a), u);
        case "Mo":
          return Ee(l.ordinalNumber(a, {
            unit: "month"
          }), u);
        case "MMM":
          return l.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return l.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return l.month(a, {
            width: "wide",
            context: "formatting"
          }) || l.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.month(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(l, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function ff(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function df(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function pf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ta(e, t);
}
function Ta(e, t) {
  return Ta = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ta(e, t);
}
function yf(e) {
  var t = vf();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return mf(this, a);
  };
}
function mf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Da(e);
}
function Da(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function dr(e) {
  return dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dr(e);
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hf = /* @__PURE__ */ function(e) {
  pf(n, e);
  var t = yf(n);
  function n() {
    var r;
    ff(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), pl(Da(r), "priority", 110), pl(Da(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return df(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p - 1;
      };
      switch (o) {
        case "L":
          return Ee(Ne(Ae.month, a), u);
        case "LL":
          return Ee(Be(2, a), u);
        case "Lo":
          return Ee(l.ordinalNumber(a, {
            unit: "month"
          }), u);
        case "LLL":
          return l.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return l.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return l.month(a, {
            width: "wide",
            context: "standalone"
          }) || l.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.month(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(l, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function gf(e, t, n) {
  J(2, arguments);
  var r = ce(e), a = se(t), o = Ci(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function _f(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bf(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
}
function wf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ca(e, t);
}
function Ca(e, t) {
  return Ca = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ca(e, t);
}
function kf(e) {
  var t = $f();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Of(this, a);
  };
}
function Of(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ra(e);
}
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $f() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pr(e) {
  return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pr(e);
}
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sf = /* @__PURE__ */ function(e) {
  wf(n, e);
  var t = kf(n);
  function n() {
    var r;
    _f(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ml(Ra(r), "priority", 100), ml(Ra(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return bf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "w":
          return Ne(Ae.week, a);
        case "wo":
          return l.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, l, u) {
      return At(gf(a, l, u), u);
    }
  }]), n;
}(ke);
function xf(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t), a = Di(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sn = function(n) {
    return typeof n;
  } : Sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sn(e);
}
function Pf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tf(e, t, n) {
  return t && vl(e.prototype, t), n && vl(e, n), e;
}
function Df(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function Cf(e) {
  var t = Mf();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rf(this, a);
  };
}
function Rf(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yr(e) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yr(e);
}
function hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var If = /* @__PURE__ */ function(e) {
  Df(n, e);
  var t = Cf(n);
  function n() {
    var r;
    Pf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), hl(Ia(r), "priority", 100), hl(Ia(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Tf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "I":
          return Ne(Ae.week, a);
        case "Io":
          return l.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return zt(xf(a, l));
    }
  }]), n;
}(ke);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function Nf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bf(e, t, n) {
  return t && gl(e.prototype, t), n && gl(e, n), e;
}
function Af(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Na(e, t);
}
function Ef(e) {
  var t = Vf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Yf(this, a);
  };
}
function Yf(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Pn(e);
}
function Pn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function Gr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Wf = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ff = /* @__PURE__ */ function(e) {
  Af(n, e);
  var t = Ef(n);
  function n() {
    var r;
    Nf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Gr(Pn(r), "priority", 90), Gr(Pn(r), "subPriority", 1), Gr(Pn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Bf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "d":
          return Ne(Ae.date, a);
        case "do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = Wi(l), d = a.getUTCMonth();
      return u ? o >= 1 && o <= Wf[d] : o >= 1 && o <= Uf[d];
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCDate(l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Hf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zf(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function Lf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ba(e, t);
}
function Ba(e, t) {
  return Ba = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ba(e, t);
}
function jf(e) {
  var t = Gf();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qf(this, a);
  };
}
function qf(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Dn(e);
}
function Dn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function vr(e) {
  return vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vr(e);
}
function Qr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qf = /* @__PURE__ */ function(e) {
  Lf(n, e);
  var t = jf(n);
  function n() {
    var r;
    Hf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Qr(Dn(r), "priority", 90), Qr(Dn(r), "subpriority", 1), Qr(Dn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return zf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "D":
        case "DD":
          return Ne(Ae.dayOfYear, a);
        case "Do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = Wi(l);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(0, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function No(e, t, n) {
  var r, a, o, l, u, d, p, b;
  J(2, arguments);
  var y = gt(), c = se((r = (a = (o = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && a !== void 0 ? a : (p = y.locale) === null || p === void 0 || (b = p.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = ce(e), P = se(t), B = g.getUTCDay(), U = P % 7, G = (U + 7) % 7, j = (G < c ? 7 : 0) + P - B;
  return g.setUTCDate(g.getUTCDate() + j), g;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Zf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Kf(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
}
function Xf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Aa(e, t);
}
function Jf(e) {
  var t = td();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ed(this, a);
  };
}
function ed(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function td() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hr(e);
}
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nd = /* @__PURE__ */ function(e) {
  Xf(n, e);
  var t = Jf(n);
  function n() {
    var r;
    Zf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), wl(Ea(r), "priority", 90), wl(Ea(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Kf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return l.day(a, {
            width: "wide",
            context: "formatting"
          }) || l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, l, u) {
      return a = No(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function rd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ad(e, t, n) {
  return t && kl(e.prototype, t), n && kl(e, n), e;
}
function od(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function ld(e) {
  var t = ud();
  return function() {
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return id(this, a);
  };
}
function id(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ud() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gr(e);
}
function Ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sd = /* @__PURE__ */ function(e) {
  od(n, e);
  var t = ld(n);
  function n() {
    var r;
    rd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ol(Va(r), "priority", 90), Ol(Va(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return ad(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(b) {
        var y = Math.floor((b - 1) / 7) * 7;
        return (b + u.weekStartsOn + 6) % 7 + y;
      };
      switch (o) {
        case "e":
        case "ee":
          return Ee(Be(o.length, a), d);
        case "eo":
          return Ee(l.ordinalNumber(a, {
            unit: "day"
          }), d);
        case "eee":
          return l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return l.day(a, {
            width: "wide",
            context: "formatting"
          }) || l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, l, u) {
      return a = No(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(n) {
    return typeof n;
  } : Mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function cd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fd(e, t, n) {
  return t && $l(e.prototype, t), n && $l(e, n), e;
}
function dd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ua(e, t);
}
function pd(e) {
  var t = md();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return yd(this, a);
  };
}
function yd(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : Wa(e);
}
function Wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function md() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _r(e);
}
function Sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vd = /* @__PURE__ */ function(e) {
  dd(n, e);
  var t = pd(n);
  function n() {
    var r;
    cd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Sl(Wa(r), "priority", 90), Sl(Wa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return fd(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(b) {
        var y = Math.floor((b - 1) / 7) * 7;
        return (b + u.weekStartsOn + 6) % 7 + y;
      };
      switch (o) {
        case "c":
        case "cc":
          return Ee(Be(o.length, a), d);
        case "co":
          return Ee(l.ordinalNumber(a, {
            unit: "day"
          }), d);
        case "ccc":
          return l.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.day(a, {
            width: "short",
            context: "standalone"
          }) || l.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return l.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return l.day(a, {
            width: "short",
            context: "standalone"
          }) || l.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return l.day(a, {
            width: "wide",
            context: "standalone"
          }) || l.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || l.day(a, {
            width: "short",
            context: "standalone"
          }) || l.day(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, l, u) {
      return a = No(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function hd(e, t) {
  J(2, arguments);
  var n = se(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = ce(e), o = a.getUTCDay(), l = n % 7, u = (l + 7) % 7, d = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + d), a;
}
function In(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? In = function(n) {
    return typeof n;
  } : In = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, In(e);
}
function gd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _d(e, t, n) {
  return t && xl(e.prototype, t), n && xl(e, n), e;
}
function bd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function wd(e) {
  var t = Od();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return kd(this, a);
  };
}
function kd(e, t) {
  return t && (In(t) === "object" || typeof t == "function") ? t : Ha(e);
}
function Ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Od() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function Pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $d = /* @__PURE__ */ function(e) {
  bd(n, e);
  var t = wd(n);
  function n() {
    var r;
    gd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Pl(Ha(r), "priority", 90), Pl(Ha(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return _d(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p === 0 ? 7 : p;
      };
      switch (o) {
        case "i":
        case "ii":
          return Be(o.length, a);
        case "io":
          return l.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Ee(l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return Ee(l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return Ee(l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return Ee(l.day(a, {
            width: "wide",
            context: "formatting"
          }) || l.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 7;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a = hd(a, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function Sd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xd(e, t, n) {
  return t && Tl(e.prototype, t), n && Tl(e, n), e;
}
function Pd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && za(e, t);
}
function za(e, t) {
  return za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, za(e, t);
}
function Td(e) {
  var t = Cd();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Dd(this, a);
  };
}
function Dd(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : La(e);
}
function La(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wr(e) {
  return wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, wr(e);
}
function Dl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rd = /* @__PURE__ */ function(e) {
  Pd(n, e);
  var t = Td(n);
  function n() {
    var r;
    Sd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Dl(La(r), "priority", 80), Dl(La(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return xd(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return l.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCHours(Io(l), 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function Md(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Id(e, t, n) {
  return t && Cl(e.prototype, t), n && Cl(e, n), e;
}
function Nd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Bd(e) {
  var t = Ed();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ad(this, a);
  };
}
function Ad(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ed() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function Rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yd = /* @__PURE__ */ function(e) {
  Nd(n, e);
  var t = Bd(n);
  function n() {
    var r;
    Md(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Rl(qa(r), "priority", 80), Rl(qa(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return Id(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return l.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCHours(Io(l), 0, 0, 0), a;
    }
  }]), n;
}(ke);
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Vd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ud(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function Wd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function Fd(e) {
  var t = zd();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hd(this, a);
  };
}
function Hd(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ld = /* @__PURE__ */ function(e) {
  Wd(n, e);
  var t = Fd(n);
  function n() {
    var r;
    Vd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Il(Qa(r), "priority", 80), Il(Qa(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return Ud(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return l.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCHours(Io(l), 0, 0, 0), a;
    }
  }]), n;
}(ke);
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function jd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qd(e, t, n) {
  return t && Nl(e.prototype, t), n && Nl(e, n), e;
}
function Gd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Qd(e) {
  var t = Kd();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Zd(this, a);
  };
}
function Zd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Ka(e);
}
function Ka(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function Bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xd = /* @__PURE__ */ function(e) {
  Gd(n, e);
  var t = Qd(n);
  function n() {
    var r;
    jd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Bl(Ka(r), "priority", 70), Bl(Ka(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return qd(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "h":
          return Ne(Ae.hour12h, a);
        case "ho":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = a.getUTCHours() >= 12;
      return u && l < 12 ? a.setUTCHours(l + 12, 0, 0, 0) : !u && l === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function Jd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ep(e, t, n) {
  return t && Al(e.prototype, t), n && Al(e, n), e;
}
function tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Xa(e, t);
}
function Xa(e, t) {
  return Xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Xa(e, t);
}
function np(e) {
  var t = ap();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return rp(this, a);
  };
}
function rp(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ap() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Sr(e) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sr(e);
}
function El(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var op = /* @__PURE__ */ function(e) {
  tp(n, e);
  var t = np(n);
  function n() {
    var r;
    Jd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), El(Ja(r), "priority", 70), El(Ja(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return ep(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "H":
          return Ne(Ae.hour23h, a);
        case "Ho":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vn = function(n) {
    return typeof n;
  } : Vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vn(e);
}
function lp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ip(e, t, n) {
  return t && Yl(e.prototype, t), n && Yl(e, n), e;
}
function up(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function sp(e) {
  var t = fp();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return cp(this, a);
  };
}
function cp(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function Vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dp = /* @__PURE__ */ function(e) {
  up(n, e);
  var t = sp(n);
  function n() {
    var r;
    lp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Vl(to(r), "priority", 70), Vl(to(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return ip(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "K":
          return Ne(Ae.hour11h, a);
        case "Ko":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = a.getUTCHours() >= 12;
      return u && l < 12 ? a.setUTCHours(l + 12, 0, 0, 0) : a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(n) {
    return typeof n;
  } : Un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Un(e);
}
function pp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yp(e, t, n) {
  return t && Ul(e.prototype, t), n && Ul(e, n), e;
}
function mp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function vp(e) {
  var t = gp();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return hp(this, a);
  };
}
function hp(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _p = /* @__PURE__ */ function(e) {
  mp(n, e);
  var t = vp(n);
  function n() {
    var r;
    pp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Wl(ro(r), "priority", 70), Wl(ro(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return yp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "k":
          return Ne(Ae.hour24h, a);
        case "ko":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = l <= 24 ? l % 24 : l;
      return a.setUTCHours(u, 0, 0, 0), a;
    }
  }]), n;
}(ke);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function bp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wp(e, t, n) {
  return t && Fl(e.prototype, t), n && Fl(e, n), e;
}
function kp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function Op(e) {
  var t = Sp();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return $p(this, a);
  };
}
function $p(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function Hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xp = /* @__PURE__ */ function(e) {
  kp(n, e);
  var t = Op(n);
  function n() {
    var r;
    bp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Hl(oo(r), "priority", 60), Hl(oo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return wp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "m":
          return Ne(Ae.minute, a);
        case "mo":
          return l.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMinutes(l, 0, 0), a;
    }
  }]), n;
}(ke);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function Pp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tp(e, t, n) {
  return t && zl(e.prototype, t), n && zl(e, n), e;
}
function Dp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Cp(e) {
  var t = Mp();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rp(this, a);
  };
}
function Rp(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : io(e);
}
function io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function Ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ip = /* @__PURE__ */ function(e) {
  Dp(n, e);
  var t = Cp(n);
  function n() {
    var r;
    Pp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ll(io(r), "priority", 50), Ll(io(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Tp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "s":
          return Ne(Ae.second, a);
        case "so":
          return l.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Be(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCSeconds(l, 0), a;
    }
  }]), n;
}(ke);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function Np(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bp(e, t, n) {
  return t && jl(e.prototype, t), n && jl(e, n), e;
}
function Ap(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Ep(e) {
  var t = Vp();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Yp(this, a);
  };
}
function Yp(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Up = /* @__PURE__ */ function(e) {
  Ap(n, e);
  var t = Ep(n);
  function n() {
    var r;
    Np(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ql(so(r), "priority", 30), ql(so(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Bp(n, [{
    key: "parse",
    value: function(a, o) {
      var l = function(d) {
        return Math.floor(d * Math.pow(10, -o.length + 3));
      };
      return Ee(Be(o.length, a), l);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMilliseconds(l), a;
    }
  }]), n;
}(ke);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function Wp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fp(e, t, n) {
  return t && Gl(e.prototype, t), n && Gl(e, n), e;
}
function Hp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function zp(e) {
  var t = jp();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Lp(this, a);
  };
}
function Lp(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rr(e);
}
function Ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qp = /* @__PURE__ */ function(e) {
  Hp(n, e);
  var t = zp(n);
  function n() {
    var r;
    Wp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ql(fo(r), "priority", 10), Ql(fo(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return Fp(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return yt(pt.basicOptionalMinutes, a);
        case "XX":
          return yt(pt.basic, a);
        case "XXXX":
          return yt(pt.basicOptionalSeconds, a);
        case "XXXXX":
          return yt(pt.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return yt(pt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
    }
  }]), n;
}(ke);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function Gp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qp(e, t, n) {
  return t && Zl(e.prototype, t), n && Zl(e, n), e;
}
function Zp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function Kp(e) {
  var t = Jp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Xp(this, a);
  };
}
function Xp(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : yo(e);
}
function yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function Kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ey = /* @__PURE__ */ function(e) {
  Zp(n, e);
  var t = Kp(n);
  function n() {
    var r;
    Gp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Kl(yo(r), "priority", 10), Kl(yo(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return Qp(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return yt(pt.basicOptionalMinutes, a);
        case "xx":
          return yt(pt.basic, a);
        case "xxxx":
          return yt(pt.basicOptionalSeconds, a);
        case "xxxxx":
          return yt(pt.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return yt(pt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
    }
  }]), n;
}(ke);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function ty(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ny(e, t, n) {
  return t && Xl(e.prototype, t), n && Xl(e, n), e;
}
function ry(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function ay(e) {
  var t = ly();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return oy(this, a);
  };
}
function oy(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ly() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function Jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var iy = /* @__PURE__ */ function(e) {
  ry(n, e);
  var t = ay(n);
  function n() {
    var r;
    ty(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Jl(vo(r), "priority", 40), Jl(vo(r), "incompatibleTokens", "*"), r;
  }
  return ny(n, [{
    key: "parse",
    value: function(a) {
      return Vi(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(ke);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function uy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ei(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sy(e, t, n) {
  return t && ei(e.prototype, t), n && ei(e, n), e;
}
function cy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function fy(e) {
  var t = py();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dy(this, a);
  };
}
function dy(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function py() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yy = /* @__PURE__ */ function(e) {
  cy(n, e);
  var t = fy(n);
  function n() {
    var r;
    uy(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ti(go(r), "priority", 20), ti(go(r), "incompatibleTokens", "*"), r;
  }
  return sy(n, [{
    key: "parse",
    value: function(a) {
      return Vi(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(ke), my = {
  G: new yc(),
  y: new wc(),
  Y: new Tc(),
  R: new Bc(),
  u: new Fc(),
  Q: new Qc(),
  q: new nf(),
  M: new cf(),
  L: new hf(),
  w: new Sf(),
  I: new If(),
  d: new Ff(),
  D: new Qf(),
  E: new nd(),
  e: new sd(),
  c: new vd(),
  i: new $d(),
  a: new Rd(),
  b: new Yd(),
  B: new Ld(),
  h: new Xd(),
  H: new op(),
  K: new dp(),
  k: new _p(),
  m: new xp(),
  s: new Ip(),
  S: new Up(),
  X: new qp(),
  x: new ey(),
  t: new iy(),
  T: new yy()
};
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function ni(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = vy(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(p) {
        throw p;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var p = n.next();
    return o = p.done, p;
  }, e: function(p) {
    l = !0, u = p;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l)
        throw u;
    }
  } };
}
function vy(e, t) {
  if (e) {
    if (typeof e == "string")
      return ri(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ri(e, t);
  }
}
function ri(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var hy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _y = /^'([^]*?)'?$/, by = /''/g, wy = /\S/, ky = /[a-zA-Z]/;
function _o(e, t, n, r) {
  var a, o, l, u, d, p, b, y, c, g, P, B, U, G, j, R, H, ne;
  J(3, arguments);
  var Q = String(e), oe = String(t), x = gt(), O = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : x.locale) !== null && a !== void 0 ? a : Ni;
  if (!O.match)
    throw new RangeError("locale must contain match property");
  var D = se((l = (u = (d = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (b = r.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && d !== void 0 ? d : x.firstWeekContainsDate) !== null && u !== void 0 ? u : (c = x.locale) === null || c === void 0 || (g = c.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(D >= 1 && D <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = se((P = (B = (U = (G = r == null ? void 0 : r.weekStartsOn) !== null && G !== void 0 ? G : r == null || (j = r.locale) === null || j === void 0 || (R = j.options) === null || R === void 0 ? void 0 : R.weekStartsOn) !== null && U !== void 0 ? U : x.weekStartsOn) !== null && B !== void 0 ? B : (H = x.locale) === null || H === void 0 || (ne = H.options) === null || ne === void 0 ? void 0 : ne.weekStartsOn) !== null && P !== void 0 ? P : 0);
  if (!(C >= 0 && C <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (oe === "")
    return Q === "" ? ce(n) : /* @__PURE__ */ new Date(NaN);
  var q = {
    firstWeekContainsDate: D,
    weekStartsOn: C,
    locale: O
  }, Z = [new oc()], ae = oe.match(gy).map(function(re) {
    var fe = re[0];
    if (fe in ua) {
      var Me = ua[fe];
      return Me(re, O.formatLong);
    }
    return re;
  }).join("").match(hy), K = [], Y = ni(ae), i;
  try {
    var f = function() {
      var fe = i.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Ii(fe) && tr(fe, oe, e), !(r != null && r.useAdditionalDayOfYearTokens) && Mi(fe) && tr(fe, oe, e);
      var Me = fe[0], at = my[Me];
      if (at) {
        var pe = at.incompatibleTokens;
        if (Array.isArray(pe)) {
          var it = K.find(function(Fe) {
            return pe.includes(Fe.token) || Fe.token === Me;
          });
          if (it)
            throw new RangeError("The format string mustn't contain `".concat(it.fullToken, "` and `").concat(fe, "` at the same time"));
        } else if (at.incompatibleTokens === "*" && K.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(fe, "` and any other token at the same time"));
        K.push({
          token: Me,
          fullToken: fe
        });
        var tt = at.run(Q, fe, O.match, q);
        if (!tt)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        Z.push(tt.setter), Q = tt.rest;
      } else {
        if (Me.match(ky))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Me + "`");
        if (fe === "''" ? fe = "'" : Me === "'" && (fe = Oy(fe)), Q.indexOf(fe) === 0)
          Q = Q.slice(fe.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (Y.s(); !(i = Y.n()).done; ) {
      var _ = f();
      if (Gn(_) === "object")
        return _.v;
    }
  } catch (re) {
    Y.e(re);
  } finally {
    Y.f();
  }
  if (Q.length > 0 && wy.test(Q))
    return /* @__PURE__ */ new Date(NaN);
  var w = Z.map(function(re) {
    return re.priority;
  }).sort(function(re, fe) {
    return fe - re;
  }).filter(function(re, fe, Me) {
    return Me.indexOf(re) === fe;
  }).map(function(re) {
    return Z.filter(function(fe) {
      return fe.priority === re;
    }).sort(function(fe, Me) {
      return Me.subPriority - fe.subPriority;
    });
  }).map(function(re) {
    return re[0];
  }), I = ce(n);
  if (isNaN(I.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var L = Pi(I, er(I)), V = {}, $ = ni(w), h;
  try {
    for ($.s(); !(h = $.n()).done; ) {
      var E = h.value;
      if (!E.validate(L, q))
        return /* @__PURE__ */ new Date(NaN);
      var be = E.set(L, V, q);
      Array.isArray(be) ? (L = be[0], js(V, be[1])) : L = be;
    }
  } catch (re) {
    $.e(re);
  } finally {
    $.f();
  }
  return L;
}
function Oy(e) {
  return e.match(_y)[1].replace(by, "'");
}
function $y(e, t) {
  J(2, arguments);
  var n = se(t);
  return $t(e, -n);
}
function Sy(e, t) {
  var n;
  J(1, arguments);
  var r = se((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Dy(e), o;
  if (a.date) {
    var l = Cy(a.date, r);
    o = Ry(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), d = 0, p;
  if (a.time && (d = My(a.time), isNaN(d)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (p = Iy(a.timezone), isNaN(p))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var b = new Date(u + d), y = /* @__PURE__ */ new Date(0);
    return y.setFullYear(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()), y.setHours(b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds(), b.getUTCMilliseconds()), y;
  }
  return new Date(u + d + p);
}
var un = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, xy = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Py = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Ty = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Dy(e) {
  var t = {}, n = e.split(un.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], un.timeZoneDelimiter.test(t.date) && (t.date = e.split(un.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = un.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function Cy(e, t) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var a = r[1] ? parseInt(r[1]) : null, o = r[2] ? parseInt(r[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function Ry(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(xy);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = Kt(n[1]), o = Kt(n[2]) - 1, l = Kt(n[3]), u = Kt(n[4]), d = Kt(n[5]) - 1;
  if (r)
    return Yy(t, u, d) ? Ny(t, u, d) : /* @__PURE__ */ new Date(NaN);
  var p = /* @__PURE__ */ new Date(0);
  return !Ay(t, o, l) || !Ey(t, a) ? /* @__PURE__ */ new Date(NaN) : (p.setUTCFullYear(t, o, Math.max(a, l)), p);
}
function Kt(e) {
  return e ? parseInt(e) : 1;
}
function My(e) {
  var t = e.match(Py);
  if (!t)
    return NaN;
  var n = Zr(t[1]), r = Zr(t[2]), a = Zr(t[3]);
  return Vy(n, r, a) ? n * Po + r * xo + a * 1e3 : NaN;
}
function Zr(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Iy(e) {
  if (e === "Z")
    return 0;
  var t = e.match(Ty);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return Uy(r, a) ? n * (r * Po + a * xo) : NaN;
}
function Ny(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var By = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Fi(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Ay(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (By[t] || (Fi(e) ? 29 : 28));
}
function Ey(e, t) {
  return t >= 1 && t <= (Fi(e) ? 366 : 365);
}
function Yy(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Vy(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Uy(e, t) {
  return t >= 0 && t <= 59;
}
function tn(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t), a = n.getFullYear(), o = n.getDate(), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
  var u = Gs(l);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function Qe(e, t) {
  if (J(2, arguments), Qn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = ce(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = tn(n, t.month)), t.date != null && n.setDate(se(t.date)), t.hours != null && n.setHours(se(t.hours)), t.minutes != null && n.setMinutes(se(t.minutes)), t.seconds != null && n.setSeconds(se(t.seconds)), t.milliseconds != null && n.setMilliseconds(se(t.milliseconds)), n);
}
function Hi(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return n.setHours(r), n;
}
function Bo(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return n.setMilliseconds(r), n;
}
function zi(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return n.setMinutes(r), n;
}
function Li(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return n.setSeconds(r), n;
}
function Nt(e, t) {
  J(2, arguments);
  var n = ce(e), r = se(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function Ft(e, t) {
  J(2, arguments);
  var n = se(t);
  return mt(e, -n);
}
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function Wy(e, t) {
  if (J(2, arguments), !t || Zn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? se(t.years) : 0, r = t.months ? se(t.months) : 0, a = t.weeks ? se(t.weeks) : 0, o = t.days ? se(t.days) : 0, l = t.hours ? se(t.hours) : 0, u = t.minutes ? se(t.minutes) : 0, d = t.seconds ? se(t.seconds) : 0, p = Ft(e, r + n * 12), b = $y(p, o + a * 7), y = u + l * 60, c = d + y * 60, g = c * 1e3, P = new Date(b.getTime() - g);
  return P;
}
function Fy(e, t) {
  J(2, arguments);
  var n = se(t);
  return Si(e, -n);
}
function Ur() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      F("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      F("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      F("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function Hy() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      F("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function ai() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function oi() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function ji() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      F("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function qi() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Gi() {
  return m(), S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      F("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const li = (e, t, n, r) => {
  const a = _o(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Jt(a) && xi(a) ? r ? a : Qe(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, zy = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return li(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const l of t)
      if (o = li(e, l, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, A = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Ly = (e, t) => {
  if (t) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), l = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${r}-${a}T${o}:${l}:00.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, vt = (e) => {
  let t = A(JSON.parse(JSON.stringify(e)));
  return t = Hi(t, 0), t = zi(t, 0), t = Li(t, 0), t = Bo(t, 0), t;
}, ut = (e, t, n, r) => {
  let a = e ? A(e) : A();
  return (t || t === 0) && (a = Hi(a, +t)), (n || n === 0) && (a = zi(a, +n)), (r || r === 0) && (a = Li(a, +r)), Bo(a, 0);
}, Ze = (e, t) => !e || !t ? !1 : Co(vt(e), vt(t)), Re = (e, t) => !e || !t ? !1 : Bi(vt(e), vt(t)), et = (e, t) => !e || !t ? !1 : Do(vt(e), vt(t)), Qi = (e, t, n) => e && e[0] && e[1] ? et(n, e[0]) && Ze(n, e[1]) : e && e[0] && t ? et(n, e[0]) && Ze(n, t) || Ze(n, e[0]) && et(n, t) : !1, Xt = an({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Zi = () => {
  const e = (n) => {
    Xt.menuFocused = n;
  }, t = (n) => {
    Xt.shiftKeyInMenu !== n && (Xt.shiftKeyInMenu = n);
  };
  return {
    control: k(() => ({ shiftKeyInMenu: Xt.shiftKeyInMenu, menuFocused: Xt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function Ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Br = {}, jy = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(jy, Br);
const qy = /* @__PURE__ */ Ao(Br);
var Ar = {}, Gy = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(Gy, Ar);
const ii = /* @__PURE__ */ Ao(Ar);
function Qy(e, t) {
  var n = Jy(t);
  return n.formatToParts ? Ky(n, e) : Xy(n, e);
}
var Zy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ky(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = Zy[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function Xy(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var Kr = {};
function Jy(e) {
  if (!Kr[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Kr[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Kr[e];
}
function Eo(e, t, n, r, a, o, l) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, l), u;
}
var ui = 36e5, em = 6e4, Xr = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Yo(e, t, n) {
  var r, a;
  if (!e || (r = Xr.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = Xr.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), si(o) ? -(o * ui) : NaN;
  if (r = Xr.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var l = parseInt(r[2], 10);
    return si(o, l) ? (a = Math.abs(o) * ui + l * em, o > 0 ? -a : a) : NaN;
  }
  if (rm(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : tm(t), d = bo(u, e), p = n ? d : nm(t, d, e);
    return -p;
  }
  return NaN;
}
function tm(e) {
  return Eo(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function bo(e, t) {
  var n = Qy(e, t), r = Eo(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), a = e.getTime(), o = a % 1e3;
  return a -= o >= 0 ? o : 1e3 + o, r - a;
}
function nm(e, t, n) {
  var r = e.getTime(), a = r - t, o = bo(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var l = bo(new Date(a), n);
  return o === l ? o : Math.max(o, l);
}
function si(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var ci = {};
function rm(e) {
  if (ci[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), ci[e] = !0, !0;
  } catch {
    return !1;
  }
}
var am = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Ki = am;
var Jr = 36e5, fi = 6e4, om = 2, Je = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Ki
};
function wo(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? om : qy(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = lm(e), o = im(a.date, r), l = o.year, u = o.restDateString, d = um(u, l);
  if (isNaN(d))
    return /* @__PURE__ */ new Date(NaN);
  if (d) {
    var p = d.getTime(), b = 0, y;
    if (a.time && (b = sm(a.time), isNaN(b)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (y = Yo(a.timeZone || n.timeZone, new Date(p + b)), isNaN(y))
        return /* @__PURE__ */ new Date(NaN);
    } else
      y = ii(new Date(p + b)), y = ii(new Date(p + b + y));
    return new Date(p + b + y);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function lm(e) {
  var t = {}, n = Je.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Je.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = Je.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function im(e, t) {
  var n = Je.YYY[t], r = Je.YYYYY[t], a;
  if (a = Je.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = Je.YY.exec(e) || n.exec(e), a) {
    var l = a[1];
    return {
      year: parseInt(l, 10) * 100,
      restDateString: e.slice(l.length)
    };
  }
  return {
    year: null
  };
}
function um(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = Je.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, pi(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = Je.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var l = parseInt(n[1], 10);
    return dm(t, l) ? (r.setUTCFullYear(t, 0, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = Je.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return pi(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = Je.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, yi(t, o) ? di(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = Je.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var d = parseInt(n[2], 10) - 1;
    return yi(t, o, d) ? di(t, o, d) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function sm(e) {
  var t, n, r;
  if (t = Je.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ea(n) ? n % 24 * Jr : NaN;
  if (t = Je.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ea(n, r) ? n % 24 * Jr + r * fi : NaN;
  if (t = Je.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ea(n, r, a) ? n % 24 * Jr + r * fi + a * 1e3 : NaN;
  }
  return null;
}
function di(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var cm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fm = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Xi(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function pi(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = Xi(e);
    if (r && n > fm[t] || !r && n > cm[t])
      return !1;
  }
  return !0;
}
function dm(e, t) {
  if (t < 1)
    return !1;
  var n = Xi(e);
  return !(n && t > 366 || !n && t > 365);
}
function yi(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ea(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Er = {}, pm = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, Yr = {}, ym = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
    return r;
  }
  e.exports = t.default;
})(ym, Yr);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(Yr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(pm, Er);
const mm = /* @__PURE__ */ Ao(Er);
function vm(e, t, n) {
  var r = wo(e, n), a = Yo(t, r, !0), o = new Date(r.getTime() - a), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
}
function hm(e, t, n) {
  if (typeof e == "string" && !e.match(Ki)) {
    var r = mm(n);
    return r.timeZone = t, wo(e, r);
  }
  var a = wo(e, n), o = Eo(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), l = Yo(t, new Date(o));
  return new Date(o + l);
}
const gm = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, _m = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, bm = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, wm = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, km = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ve = (e) => {
  const t = s(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Om = (e) => Object.assign({ type: "dot" }, e), Ji = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Vr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, qe = (e) => e, mi = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, vi = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), $m = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (t) => `Increment ${t}`,
    decrementValue: (t) => `Decrement ${t}`,
    openTpOverlay: (t) => `Open ${t} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Sm = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, xm = (e, t, n) => e || (typeof n == "string" ? n : t), Pm = (e) => typeof e == "boolean" ? e ? vi({}) : !1 : vi(e), Tm = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Dm = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), lt = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Vr.prop("partial-range"));
  }, n = k(() => ({
    ariaLabels: $m(e.ariaLabels),
    textInputOptions: Object.assign(Tm(), e.textInputOptions),
    multiCalendars: Sm(e.multiCalendars),
    previewFormat: xm(e.previewFormat, e.format, o()),
    filters: Dm(e.filters),
    transitions: Pm(e.transitions),
    startTime: c()
  })), r = (i) => {
    if (e.range)
      return i();
    throw new Error(Vr.prop("range"));
  }, a = () => {
    const i = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${i}` : `hh:mm${i} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", l = (i, f) => {
    if (typeof e.format == "function")
      return e.format(i);
    const _ = f || o(), w = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(i) ? `${en(i[0], _, w)} ${e.modelAuto && !i[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${i[1] ? en(i[1], _, w) : ""}` : en(i, _, w);
  }, u = (i) => e.timezone ? vm(i, e.timezone) : i, d = (i) => e.timezone ? hm(i, e.timezone) : i, p = k(() => (i) => {
    var f;
    return (f = e.hideNavigation) == null ? void 0 : f.includes(i);
  }), b = (i) => {
    const f = e.maxDate ? et(u(i), u(A(e.maxDate))) : !1, _ = e.minDate ? Ze(u(i), u(A(e.minDate))) : !1, w = G(i, e.disabledDates), I = n.value.filters.months.map((E) => +E).includes(Pe(i)), L = e.disabledWeekDays.length ? e.disabledWeekDays.some((E) => +E === qs(i)) : !1, V = e.allowedDates.length ? !e.allowedDates.some((E) => Re(u(A(E)), u(i))) : !1, $ = Te(i), h = $ < +e.yearRange[0] || $ > +e.yearRange[1];
    return !(f || _ || w || I || h || L || V);
  }, y = (i) => {
    const f = {
      hours: bt(A()),
      minutes: wt(A()),
      seconds: e.enableSeconds ? Lt(A()) : 0
    };
    return Object.assign(f, i);
  }, c = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [y(e.startTime[0]), y(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? y(e.startTime) : null, g = (i) => !b(i), P = (i) => Array.isArray(i) ? Jt(i[0]) && (i[1] ? Jt(i[1]) : !0) : i ? Jt(i) : !1, B = (i) => i instanceof Date ? i : Sy(i), U = (i) => {
    const f = Bt(u(i), { weekStartsOn: +e.weekStart }), _ = Fu(u(i), { weekStartsOn: +e.weekStart });
    return [f, _];
  }, G = (i, f) => Array.isArray(f) ? f.some((_) => Re(u(A(_)), u(i))) : f(i), j = (i, f, _) => {
    let w = i ? A(i) : A();
    return (f || f === 0) && (w = tn(w, f)), _ && (w = Nt(w, _)), w;
  }, R = (i) => Qe(A(), { hours: bt(i), minutes: wt(i), seconds: Lt(i) }), H = (i) => Qe(A(), {
    hours: +i.hours || 0,
    minutes: +i.minutes || 0,
    seconds: +i.seconds || 0
  }), ne = (i, f, _, w) => {
    if (!i)
      return !0;
    if (w) {
      const I = _ === "max" ? Co(i, f) : Do(i, f), L = { seconds: 0, milliseconds: 0 };
      return I || Bi(Qe(i, L), Qe(f, L));
    }
    return _ === "max" ? i.getTime() <= f.getTime() : i.getTime() >= f.getTime();
  }, Q = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, oe = (i) => Array.isArray(i) ? [i[0] ? R(i[0]) : null, i[1] ? R(i[1]) : null] : R(i), x = (i) => {
    const f = e.maxTime ? H(e.maxTime) : A(e.maxDate);
    return Array.isArray(i) ? ne(i[0], f, "max", !!e.maxDate) && ne(i[1], f, "max", !!e.maxDate) : ne(i, f, "max", !!e.maxDate);
  }, O = (i, f) => {
    const _ = e.minTime ? H(e.minTime) : A(e.minDate);
    return Array.isArray(i) ? ne(i[0], _, "min", !!e.minDate) && ne(i[1], _, "min", !!e.minDate) && f : ne(i, _, "min", !!e.minDate) && f;
  }, D = (i) => {
    let f = !0;
    if (!i || Q())
      return !0;
    const _ = !e.minDate && !e.maxDate ? oe(i) : i;
    return (e.maxTime || e.maxDate) && (f = x(qe(_))), (e.minTime || e.minDate) && (f = O(qe(_), f)), f;
  }, C = (i, f) => {
    const _ = A(JSON.parse(JSON.stringify(i))), w = [];
    for (let I = 0; I < 7; I++) {
      const L = $t(_, I), V = Pe(L) !== f;
      w.push({
        text: e.hideOffsetDates && V ? "" : L.getDate(),
        value: L,
        current: !V,
        classData: {}
      });
    }
    return w;
  }, q = (i, f) => {
    const _ = [], w = A(u(new Date(f, i))), I = A(u(new Date(f, i + 1, 0))), L = Bt(w, { weekStartsOn: e.weekStart }), V = ($) => {
      const h = C($, i);
      if (_.push({ days: h }), !_[_.length - 1].days.some(
        (E) => Re(vt(E.value), vt(I))
      )) {
        const E = $t($, 7);
        V(E);
      }
    };
    if (V(L), e.sixWeeks && _.length < 6) {
      const $ = 6 - _.length;
      for (let h = 1; h <= $; h++) {
        const E = _[_.length - 1], be = E.days[E.days.length - 1], re = C($t(be.value, 1), Pe(w));
        _.push({ days: re });
      }
    }
    return _;
  }, Z = (i, f, _) => [Qe(A(i), { date: 1 }), Qe(A(), { month: f, year: _, date: 1 })], ae = (i, f) => Ze(...Z(e.minDate, i, f)) || Re(...Z(e.minDate, i, f)), K = (i, f) => et(...Z(e.maxDate, i, f)) || Re(...Z(e.maxDate, i, f)), Y = (i, f, _) => {
    let w = !1;
    return e.maxDate && _ && K(i, f) && (w = !0), e.minDate && !_ && ae(i, f) && (w = !0), w;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: d,
    formatDate: l,
    getDefaultPattern: o,
    validateDate: b,
    getDefaultStartTime: c,
    isDisabled: g,
    isValidDate: P,
    sanitizeDate: B,
    getWeekFromDate: U,
    matchDate: G,
    setDateMonthOrYear: j,
    isValidTime: D,
    getCalendarDays: q,
    validateMonthYearInRange: (i, f, _, w) => {
      let I = !1;
      return w ? e.minDate && e.maxDate ? I = Y(i, f, _) : (e.minDate && ae(i, f) || e.maxDate && K(i, f)) && (I = !0) : I = !0, I;
    },
    validateMaxDate: K,
    validateMinDate: ae,
    assignDefaultTime: y,
    defaults: n,
    hideNavigationButtons: p
  };
}, xe = an({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), ta = W(null), sn = W(!1), na = W(!1), ra = W(!1), aa = W(!1), Xe = W(0), ze = W(0), xt = () => {
  const e = k(() => sn.value ? [...xe.selectionGrid, xe.actionRow].filter((y) => y.length) : na.value ? [
    ...xe.timePicker[0],
    ...xe.timePicker[1],
    aa.value ? [] : [ta.value],
    xe.actionRow
  ].filter((y) => y.length) : ra.value ? [...xe.monthPicker, xe.actionRow] : [xe.monthYear, ...xe.calendar, xe.time, xe.actionRow].filter((y) => y.length)), t = (y) => {
    Xe.value = y ? Xe.value + 1 : Xe.value - 1;
    let c = null;
    e.value[ze.value] && (c = e.value[ze.value][Xe.value]), c || (Xe.value = y ? Xe.value - 1 : Xe.value + 1);
  }, n = (y) => {
    ze.value === 0 && !y || ze.value === e.value.length && y || (ze.value = y ? ze.value + 1 : ze.value - 1, e.value[ze.value] ? e.value[ze.value] && !e.value[ze.value][Xe.value] && Xe.value !== 0 && (Xe.value = e.value[ze.value].length - 1) : ze.value = y ? ze.value - 1 : ze.value + 1);
  }, r = (y) => {
    let c = null;
    e.value[ze.value] && (c = e.value[ze.value][Xe.value]), c ? c.focus({ preventScroll: !sn.value }) : Xe.value = y ? Xe.value - 1 : Xe.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, l = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, d = (y, c) => {
    xe[c] = y;
  }, p = (y, c) => {
    xe[c] = y;
  }, b = () => {
    Xe.value = 0, ze.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: p,
    setTimePickerBackRef: (y) => {
      ta.value = y;
    },
    setSelectionGrid: (y) => {
      sn.value = y, b(), y || (xe.selectionGrid = []);
    },
    setTimePicker: (y, c = !1) => {
      na.value = y, aa.value = c, b(), y || (xe.timePicker[0] = [], xe.timePicker[1] = []);
    },
    setTimePickerElements: (y, c = 0) => {
      xe.timePicker[c] = y;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: l,
    arrowDown: u,
    clearArrowNav: () => {
      xe.monthYear = [], xe.calendar = [], xe.time = [], xe.actionRow = [], xe.selectionGrid = [], xe.timePicker[0] = [], xe.timePicker[1] = [], sn.value = !1, na.value = !1, aa.value = !1, ra.value = !1, b(), ta.value = null;
    },
    setMonthPicker: (y) => {
      ra.value = y, b();
    },
    refSets: xe
    // exposed for testing
  };
}, hi = (e) => Array.isArray(e), Ct = (e) => Array.isArray(e), gi = (e) => Array.isArray(e) && e.length === 2, Cm = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: l,
    sanitizeDate: u,
    getWeekFromDate: d,
    setDateMonthOrYear: p,
    validateMonthYearInRange: b,
    defaults: y
  } = lt(e), c = k({
    get: () => e.internalModelValue,
    set: (v) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", v);
    }
  }), g = W([]);
  dt(c, () => {
    ne();
  });
  const P = W([{ month: Pe(A()), year: Te(A()) }]), B = an({
    hours: e.range ? [bt(A()), bt(A())] : bt(A()),
    minutes: e.range ? [wt(A()), wt(A())] : wt(A()),
    seconds: e.range ? [0, 0] : 0
  }), U = k(
    () => (v) => P.value[v] ? P.value[v].month : 0
  ), G = k(
    () => (v) => P.value[v] ? P.value[v].year : 0
  ), j = k(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), R = (v, N, le) => {
    var ue, Ie;
    P.value[v] || (P.value[v] = { month: 0, year: 0 }), P.value[v].month = N === null ? (ue = P.value[v]) == null ? void 0 : ue.month : N, P.value[v].year = le === null ? (Ie = P.value[v]) == null ? void 0 : Ie.year : le;
  }, H = (v, N) => {
    B[v] = N;
  };
  st(() => {
    c.value || (e.startDate && (R(0, Pe(A(e.startDate)), Te(A(e.startDate))), y.value.multiCalendars && Se(0)), y.value.startTime && K()), ne(!0);
  });
  const ne = (v = !1) => {
    if (c.value)
      return Array.isArray(c.value) ? (g.value = c.value, D(v)) : oe(c.value);
    if (e.timePicker)
      return C();
    if (e.monthPicker && !e.range)
      return q();
    if (e.yearPicker && !e.range)
      return Z();
    if (y.value.multiCalendars && v && !e.startDate)
      return Q(A(), v);
  }, Q = (v, N = !1) => {
    if ((!y.value.multiCalendars || !e.multiStatic || N) && R(0, Pe(v), Te(v)), y.value.multiCalendars)
      for (let le = 1; le < y.value.multiCalendars; le++) {
        const ue = Qe(A(), { month: U.value(le - 1), year: G.value(le - 1) }), Ie = $i(ue, { months: 1 });
        P.value[le] = { month: Pe(Ie), year: Te(Ie) };
      }
  }, oe = (v) => {
    Q(v), H("hours", bt(v)), H("minutes", wt(v)), H("seconds", Lt(v));
  }, x = (v, N) => {
    Q(v[0], N);
    const le = (ue, Ie) => [
      ue(v[0]),
      v[1] ? ue(v[1]) : B[Ie][1]
    ];
    H("hours", le(bt, "hours")), H("minutes", le(wt, "minutes")), H("seconds", le(Lt, "seconds"));
  }, O = (v, N) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return x(v, N);
    if (e.multiDates) {
      const le = v[v.length - 1];
      return oe(le);
    }
  }, D = (v) => {
    const N = c.value;
    O(N, v), y.value.multiCalendars && e.multiCalendarsSolo && i();
  }, C = () => {
    if (K(), !e.range)
      c.value = ut(A(), B.hours, B.minutes, ae());
    else {
      const v = B.hours, N = B.minutes;
      c.value = [
        ut(A(), v[0], N[0], ae()),
        ut(A(), v[1], N[1], ae(!1))
      ];
    }
  }, q = () => {
    c.value = p(A(), U.value(0), G.value(0));
  }, Z = () => {
    c.value = A();
  }, ae = (v = !0) => e.enableSeconds ? Array.isArray(B.seconds) ? v ? B.seconds[0] : B.seconds[1] : B.seconds : 0, K = () => {
    const v = o();
    if (v) {
      const N = Array.isArray(v), le = N ? [+v[0].hours, +v[1].hours] : +v.hours, ue = N ? [+v[0].minutes, +v[1].minutes] : +v.minutes, Ie = N ? [+v[0].seconds, +v[1].seconds] : +v.seconds;
      H("hours", le), H("minutes", ue), e.enableSeconds && H("seconds", Ie);
    }
  }, Y = () => Array.isArray(c.value) && c.value.length ? c.value[c.value.length - 1] : null, i = () => {
    if (Array.isArray(c.value) && c.value.length === 2) {
      const v = A(
        A(c.value[1] ? c.value[1] : mt(c.value[0], 1))
      ), [N, le] = [Pe(c.value[0]), Te(c.value[0])], [ue, Ie] = [Pe(c.value[1]), Te(c.value[1])];
      (N !== ue || N === ue && le !== Ie) && e.multiCalendarsSolo && R(1, Pe(v), Te(v));
    }
  }, f = (v) => {
    const N = mt(v, 1);
    return { month: Pe(N), year: Te(N) };
  }, _ = (v) => {
    const N = Pe(A(v)), le = Te(A(v));
    if (R(0, N, le), y.value.multiCalendars > 0)
      for (let ue = 1; ue < y.value.multiCalendars; ue++) {
        const Ie = f(
          Qe(A(v), { year: U.value(ue - 1), month: G.value(ue - 1) })
        );
        R(ue, Ie.month, Ie.year);
      }
  }, w = (v) => {
    if (c.value && Array.isArray(c.value))
      if (c.value.some((N) => Re(v, N))) {
        const N = c.value.filter((le) => !Re(le, v));
        c.value = N.length ? N : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > c.value.length || !e.multiDatesLimit) && c.value.push(v);
    else
      c.value = [v];
  }, I = (v, N) => {
    const le = et(v, N) ? N : v, ue = et(N, v) ? N : v;
    return zo({ start: le, end: ue });
  }, L = (v, N = 0) => {
    if (Array.isArray(c.value) && c.value[N]) {
      const le = Uu(v, c.value[N]), ue = I(c.value[N], v), Ie = ue.length === 1 ? 0 : ue.filter((_t) => l(_t)).length, ot = Math.abs(le) - Ie;
      if (e.minRange && e.maxRange)
        return ot >= +e.minRange && ot <= +e.maxRange;
      if (e.minRange)
        return ot >= +e.minRange;
      if (e.maxRange)
        return ot <= +e.maxRange;
    }
    return !0;
  }, V = (v) => Array.isArray(c.value) && c.value.length === 2 ? e.fixedStart && (et(v, c.value[0]) || Re(v, c.value[0])) ? [c.value[0], v] : e.fixedEnd && (Ze(v, c.value[1]) || Re(v, c.value[1])) ? [v, c.value[1]] : (t("invalid-fixed-range", v), c.value) : [], $ = () => {
    e.autoApply && j.value && t("auto-apply", e.partialFlow);
  }, h = () => {
    e.autoApply && t("select-date");
  }, E = (v) => !zo({ start: v[0], end: v[1] }).some((N) => l(N)), be = (v) => (c.value = d(A(v.value)), $()), re = (v) => {
    const N = ut(A(v.value), B.hours, B.minutes, ae());
    e.multiDates ? w(N) : c.value = N, n(), $();
  }, fe = () => {
    g.value = c.value ? c.value.slice() : [], g.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (g.value = []);
  }, Me = (v, N) => {
    const le = [A(v.value), $t(A(v.value), +e.autoRange)];
    E(le) && (N && _(v.value), g.value = le);
  }, at = (v) => {
    pe(v.value) || !L(v.value, e.fixedStart ? 0 : 1) || (g.value = V(A(v.value)));
  }, pe = (v) => e.noDisabledRange ? I(g.value[0], v).some((N) => l(N)) : !1, it = (v, N) => {
    if (fe(), e.autoRange)
      return Me(v, N);
    if (e.fixedStart || e.fixedEnd)
      return at(v);
    g.value[0] ? L(A(v.value)) && !pe(v.value) && (Ze(A(v.value), A(g.value[0])) ? g.value.unshift(A(v.value)) : g.value[1] = A(v.value)) : g.value[0] = A(v.value);
  }, tt = (v) => {
    g.value[v] = ut(
      g.value[v],
      B.hours[v],
      B.minutes[v],
      ae(v !== 1)
    );
  }, Fe = () => {
    g.value.length && (g.value[0] && !g.value[1] ? tt(0) : (tt(0), tt(1), n()), c.value = g.value.slice(), g.value[0] && g.value[1] && e.autoApply && t("auto-apply"), g.value[0] && !g.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, jt = (v, N = !1) => {
    if (!(l(v.value) || !v.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return be(v);
      if (!e.range)
        return re(v);
      Ct(B.hours) && Ct(B.minutes) && !e.multiDates && (it(v, N), Fe());
    }
  }, ye = (v) => {
    const N = v[0];
    return e.weekNumbers === "local" ? ec(N.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? Zs(N.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(N.value) : "";
  }, Se = (v) => {
    for (let N = v - 1; N >= 0; N--) {
      const le = Ft(Qe(A(), { month: U.value(N + 1), year: G.value(N + 1) }), 1);
      R(N, Pe(le), Te(le));
    }
    for (let N = v + 1; N <= y.value.multiCalendars - 1; N++) {
      const le = mt(Qe(A(), { month: U.value(N - 1), year: G.value(N - 1) }), 1);
      R(N, Pe(le), Te(le));
    }
  }, Oe = (v) => p(A(), U.value(v), G.value(v)), Tt = (v) => ut(v, B.hours, B.minutes, ae()), Dt = (v, N) => {
    const le = e.monthPicker ? U.value(v) !== N.month || !N.fromNav : G.value(v) !== N.year;
    if (R(v, N.month, N.year), y.value.multiCalendars && !e.multiCalendarsSolo && Se(v), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let ue = c.value ? c.value.slice() : [];
          ue.length === 2 && ue[1] !== null && (ue = []), ue.length ? Ze(Oe(v), ue[0]) ? ue.unshift(Oe(v)) : ue[1] = Oe(v) : ue = [Oe(v)], c.value = ue;
        }
      } else
        c.value = Oe(v);
    t("update-month-year", { instance: v, month: N.month, year: N.year }), r(e.multiCalendarsSolo ? v : void 0);
  }, Fr = async (v = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await St();
      const N = e.monthPicker ? v : !1;
      e.range ? t("auto-apply", N || !c.value || c.value.length === 1) : t("auto-apply", N);
    }
    n();
  }, on = (v, N) => {
    const le = Qe(A(), { month: U.value(N), year: G.value(N) }), ue = v < 0 ? mt(le, 1) : Ft(le, 1);
    b(Pe(ue), Te(ue), v < 0, e.preventMinMaxNavigation) && (R(N, Pe(ue), Te(ue)), y.value.multiCalendars && !e.multiCalendarsSolo && Se(N), t("update-month-year", { instance: N, month: Pe(ue), year: Te(ue) }), r());
  }, qt = (v) => {
    hi(v) && hi(c.value) && Ct(B.hours) && Ct(B.minutes) ? (v[0] && c.value[0] && (c.value[0] = ut(v[0], B.hours[0], B.minutes[0], ae())), v[1] && c.value[1] && (c.value[1] = ut(v[1], B.hours[1], B.minutes[1], ae(!1)))) : e.multiDates && Array.isArray(c.value) ? c.value[c.value.length - 1] = Tt(v) : !e.range && !gi(v) && (c.value = Tt(v)), t("time-update");
  }, Hr = (v, N = !0, le = !1) => {
    const ue = N ? v : B.hours, Ie = !N && !le ? v : B.minutes, ot = le ? v : B.seconds;
    if (e.range && gi(c.value) && Ct(ue) && Ct(Ie) && Ct(ot) && !e.disableTimeRangeValidation) {
      const _t = (M) => ut(c.value[M], ue[M], Ie[M], ot[M]), Gt = (M) => Bo(c.value[M], 0);
      if (Re(c.value[0], c.value[1]) && (Do(_t(0), Gt(1)) || Co(_t(1), Gt(0))))
        return;
    }
    if (H("hours", ue), H("minutes", Ie), H("seconds", ot), c.value)
      if (e.multiDates) {
        const _t = Y();
        _t && qt(_t);
      } else
        qt(c.value);
    else
      e.timePicker && qt(e.range ? [A(), A()] : A());
    n();
  }, zr = (v, N) => {
    e.monthChangeOnScroll && on(e.monthChangeOnScroll !== "inverse" ? -v.deltaY : v.deltaY, N);
  }, Lr = (v, N, le = !1) => {
    e.monthChangeOnArrows && e.vertical === le && ln(v, N);
  }, ln = (v, N) => {
    on(v === "right" ? -1 : 1, N);
  };
  return {
    time: B,
    month: U,
    year: G,
    modelValue: c,
    calendars: P,
    monthYearSelect: Fr,
    isDisabled: l,
    updateTime: Hr,
    getWeekNum: ye,
    selectDate: jt,
    updateMonthYear: Dt,
    handleScroll: zr,
    getMarker: (v) => e.markers.find((N) => Re(u(v.value), u(N.date))),
    handleArrow: Lr,
    handleSwipe: ln,
    selectCurrentDate: () => {
      e.range ? c.value && Array.isArray(c.value) && c.value[0] ? c.value = Ze(A(), c.value[0]) ? [A(), c.value[0]] : [c.value[0], A()] : c.value = [A()] : c.value = A(), h();
    },
    presetDateRange: (v, N) => {
      N || v.length && v.length <= 2 && e.range && (c.value = v.map((le) => A(le)), h(), e.multiCalendars && St().then(() => ne(!0)));
    }
  };
}, Rm = (e, t, n) => {
  const r = W(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: l,
    getDefaultPattern: u,
    checkRangeEnabled: d,
    checkPartialRangeValue: p,
    isValidDate: b,
    setDateMonthOrYear: y,
    defaults: c
  } = lt(t), g = W(""), P = Xn(t, "format");
  dt(r, () => {
    e("internal-model-change", r.value);
  }), dt(P, () => {
    f();
  });
  const B = ($) => {
    const h = $ || A();
    return t.modelType ? w(h) : {
      hours: bt(h),
      minutes: wt(h),
      seconds: t.enableSeconds ? Lt(h) : 0
    };
  }, U = ($) => t.modelType ? w($) : { month: Pe($), year: Te($) }, G = ($) => Array.isArray($) ? d(() => [
    Nt(A(), $[0]),
    $[1] ? Nt(A(), $[1]) : p()
  ]) : Nt(A(), +$), j = ($, h) => (typeof $ == "string" || typeof $ == "number") && t.modelType ? _($) : h, R = ($) => Array.isArray($) ? [
    j(
      $[0],
      ut(null, +$[0].hours, +$[0].minutes, $[0].seconds)
    ),
    j(
      $[1],
      ut(null, +$[1].hours, +$[1].minutes, $[1].seconds)
    )
  ] : j($, ut(null, $.hours, $.minutes, $.seconds)), H = ($) => Array.isArray($) ? d(() => [
    j($[0], y(null, +$[0].month, +$[0].year)),
    j(
      $[1],
      $[1] ? y(null, +$[1].month, +$[1].year) : p()
    )
  ]) : j($, y(null, +$.month, +$.year)), ne = ($) => {
    if (Array.isArray($))
      return $.map((h) => _(h));
    throw new Error(Vr.dateArr("multi-dates"));
  }, Q = ($) => {
    if (Array.isArray($))
      return [A($[0]), A($[1])];
    throw new Error(Vr.dateArr("week-picker"));
  }, oe = ($) => t.modelAuto ? Array.isArray($) ? [_($[0]), _($[1])] : t.autoApply ? [_($)] : [_($), null] : Array.isArray($) ? d(() => [
    _($[0]),
    $[1] ? _($[1]) : p()
  ]) : _($), x = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(p());
  }, O = () => {
    const $ = r.value;
    return [
      w($[0]),
      $[1] ? w($[1]) : p()
    ];
  }, D = () => r.value[1] ? O() : w(qe(r.value[0])), C = () => (r.value || []).map(($) => w($)), q = () => (x(), t.modelAuto ? D() : t.multiDates ? C() : Array.isArray(r.value) ? d(() => O()) : w(qe(r.value))), Z = ($) => $ ? t.timePicker ? R(qe($)) : t.monthPicker ? H(qe($)) : t.yearPicker ? G(qe($)) : t.multiDates ? ne(qe($)) : t.weekPicker ? Q(qe($)) : oe(qe($)) : null, ae = ($) => {
    const h = Z($);
    b(qe(h)) ? (r.value = qe(h), f()) : (r.value = null, g.value = "");
  }, K = () => {
    var $;
    const h = (E) => {
      var be;
      return en(E, (be = c.value.textInputOptions) == null ? void 0 : be.format);
    };
    return `${h(r.value[0])} ${($ = c.value.textInputOptions) == null ? void 0 : $.rangeSeparator} ${r.value[1] ? h(r.value[1]) : ""}`;
  }, Y = () => {
    var $;
    return n.value && r.value ? Array.isArray(r.value) ? K() : en(r.value, ($ = c.value.textInputOptions) == null ? void 0 : $.format) : l(r.value);
  }, i = () => {
    var $;
    return r.value ? t.multiDates ? r.value.map((h) => l(h)).join("; ") : t.textInput && typeof (($ = c.value.textInputOptions) == null ? void 0 : $.format) == "string" ? Y() : l(r.value) : "";
  }, f = () => {
    !t.format || typeof t.format == "string" ? g.value = i() : g.value = t.format(r.value);
  }, _ = ($) => {
    if (t.utc) {
      const h = new Date($);
      return t.utc === "preserve" ? new Date(h.getTime() + h.getTimezoneOffset() * 6e4) : h;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date($)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? _o($, u(), /* @__PURE__ */ new Date()) : o(_o($, t.modelType, /* @__PURE__ */ new Date())) : o(new Date($));
  }, w = ($) => $ ? t.utc ? Ly($, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a($) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? l(a($)) : l(a($), t.modelType) : a($) : "", I = ($) => {
    e("update:model-value", $);
  }, L = ($) => Array.isArray(r.value) ? [
    $(r.value[0]),
    r.value[1] ? $(r.value[1]) : p()
  ] : $(qe(r.value)), V = ($) => I(qe(L($)));
  return {
    inputValue: g,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ae,
    formatInputValue: f,
    emitModelValue: () => (f(), t.monthPicker ? V(U) : t.timePicker ? V(B) : t.yearPicker ? V(Te) : t.weekPicker ? I(r.value) : I(q()))
  };
}, Mm = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = lt(e), l = (y, c) => {
    let g = y;
    return o.value.filters.months.includes(Pe(g)) ? (g = c ? mt(y, 1) : Ft(y, 1), l(g, c)) : g;
  }, u = (y, c) => {
    let g = y;
    return o.value.filters.years.includes(Te(g)) ? (g = c ? Si(y, 1) : Fy(y, 1), u(g, c)) : g;
  }, d = (y) => {
    const c = Qe(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let g = y ? mt(c, 1) : Ft(c, 1), P = Pe(g), B = Te(g);
    o.value.filters.months.includes(P) && (g = l(g, y), P = Pe(g), B = Te(g)), o.value.filters.years.includes(B) && (g = u(g, y), B = Te(g)), n(P, B, y, e.preventMinMaxNavigation) && p(P, B);
  }, p = (y, c) => {
    t("update-month-year", { month: y, year: c });
  }, b = k(() => (y) => {
    if (!e.preventMinMaxNavigation || y && !e.maxDate || !y && !e.minDate)
      return !1;
    const c = Qe(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), g = y ? mt(c, 1) : Ft(c, 1), P = [Pe(g), Te(g)];
    return y ? !r(...P) : !a(...P);
  });
  return { handleMonthYearChange: d, isDisabled: b, updateMonthYear: p };
};
var Kn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Kn || {});
const Im = (e, t, n, r) => {
  const a = W({
    top: "0",
    left: "0",
    transform: "none"
  }), o = W(!1), l = Xn(r, "teleportCenter");
  dt(l, () => {
    B();
  });
  const u = (x) => {
    if (r.teleport) {
      const O = x.getBoundingClientRect();
      return {
        left: O.left + window.scrollX,
        top: O.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, d = (x, O) => {
    a.value.left = `${x + O}px`, a.value.transform = "translateX(-100%)";
  }, p = (x) => {
    a.value.left = `${x}px`, a.value.transform = "translateX(0)";
  }, b = (x, O, D = !1) => {
    r.position === Kn.left && p(x), r.position === Kn.right && d(x, O), r.position === Kn.center && (a.value.left = `${x + O / 2}px`, a.value.transform = D ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, y = (x) => {
    const { width: O, height: D } = x.getBoundingClientRect(), { top: C, left: q } = r.altPosition ? r.altPosition(x) : u(x);
    return { top: +C, left: +q, width: O, height: D };
  }, c = () => {
    const x = Ve(t);
    if (x) {
      const { top: O, left: D, width: C, height: q } = y(x);
      a.value.top = `${O + q / 2}px`, a.value.transform = "translateY(-50%)", b(D, C, !0);
    }
  }, g = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, P = () => {
    const x = Ve(t), { top: O, left: D, transform: C } = r.altPosition(x);
    a.value = { top: `${O}px`, left: `${D}px`, transform: C || "" };
  }, B = (x = !0) => {
    if (!r.inline)
      return l.value ? g() : r.altPosition !== null ? P() : (x && n("recalculate-position"), ne());
  }, U = ({
    inputEl: x,
    menuEl: O,
    left: D,
    width: C
  }) => {
    window.screen.width > 768 && b(D, C), R(x, O);
  }, G = (x, O) => {
    const { top: D, left: C, height: q, width: Z } = y(x);
    a.value.top = `${q + D + +r.offset}px`, U({ inputEl: x, menuEl: O, left: C, width: Z }), o.value = !1;
  }, j = (x, O) => {
    const { top: D, left: C, width: q } = y(x), { height: Z } = O.getBoundingClientRect();
    a.value.top = `${D - Z - +r.offset}px`, U({ inputEl: x, menuEl: O, left: C, width: q }), o.value = !0;
  }, R = (x, O) => {
    if (r.autoPosition) {
      const { left: D, width: C } = y(x), { left: q, right: Z } = O.getBoundingClientRect();
      return q <= 0 || q <= D ? p(D) : Z >= document.documentElement.clientWidth ? d(D, C) : b(D, C);
    }
  }, H = (x, O) => {
    const { height: D } = O.getBoundingClientRect(), { top: C, height: q } = x.getBoundingClientRect(), Z = window.innerHeight - C - q, ae = C;
    return D <= Z ? G(x, O) : D > Z && D <= ae ? j(x, O) : Z >= ae ? G(x, O) : j(x, O);
  }, ne = () => {
    const x = Ve(t), O = Ve(e);
    if (x && O)
      return r.autoPosition ? H(x, O) : G(x, O);
  }, Q = function(x) {
    if (x) {
      const O = x.scrollHeight > x.clientHeight, D = window.getComputedStyle(x).overflowY.indexOf("hidden") !== -1;
      return O && !D;
    }
    return !0;
  }, oe = function(x) {
    return !x || x === document.body ? window : Q(x) ? x : oe(x.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: B, setInitialPosition: c, getScrollableParent: oe };
}, Wt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], Nm = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Bm = {
  all: () => Wt,
  monthYear: () => Wt.filter((e) => e.use.includes("month-year")),
  input: () => Nm,
  timePicker: () => Wt.filter((e) => e.use.includes("time")),
  action: () => Wt.filter((e) => e.use.includes("action")),
  calendar: () => Wt.filter((e) => e.use.includes("calendar")),
  menu: () => Wt.filter((e) => e.use.includes("menu"))
}, Mt = (e, t, n) => {
  const r = [];
  return Bm[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Wr = (e) => ({ transitionName: k(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Pt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, Am = ["aria-label", "aria-disabled", "aria-readonly"], Em = {
  key: 1,
  class: "dp__input_wrap"
}, Ym = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Vm = {
  key: 2,
  class: "dp__input_icon"
}, Um = {
  key: 4,
  class: "dp__clear_icon"
}, Wm = /* @__PURE__ */ me({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Pt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: l, getDefaultStartTime: u, assignDefaultTime: d } = lt(r), p = W(), b = W(null), y = W(!1), c = k(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: y.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), g = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), p.value = null);
    }, P = (O) => {
      var D;
      const C = u();
      return zy(
        O,
        ((D = l.value.textInputOptions) == null ? void 0 : D.format) || a(),
        C || d({}),
        r.inputValue
      );
    }, B = (O) => {
      const { rangeSeparator: D } = l.value.textInputOptions, [C, q] = O.split(`${D}`);
      if (C) {
        const Z = P(C.trim()), ae = q ? P(q.trim()) : null, K = Z && ae ? [Z, ae] : [Z];
        p.value = Z ? K : null;
      }
    }, U = (O) => {
      if (r.range)
        B(O);
      else if (r.multiDates) {
        const D = O.split(";");
        p.value = D.map((C) => P(C.trim())).filter((C) => C);
      } else
        p.value = P(O);
    }, G = (O) => {
      var D;
      const { value: C } = O.target;
      C !== "" ? ((D = l.value.textInputOptions) != null && D.openMenu && !r.isMenuOpen && n("open"), U(C), n("set-input-date", p.value)) : g(), n("update:input-value", C);
    }, j = () => {
      var O, D;
      (O = l.value.textInputOptions) != null && O.enterSubmit && o(p.value) && r.inputValue !== "" ? (n("set-input-date", p.value, !0), p.value = null) : (D = l.value.textInputOptions) != null && D.enterSubmit && r.inputValue === "" && (p.value = null, n("clear"));
    }, R = () => {
      var O, D;
      (O = l.value.textInputOptions) != null && O.tabSubmit && o(p.value) && r.inputValue !== "" ? (n("set-input-date", p.value, !0), p.value = null) : (D = l.value.textInputOptions) != null && D.tabSubmit && r.inputValue === "" && (p.value = null, n("clear"));
    }, H = () => {
      y.value = !0, n("focus");
    }, ne = (O) => {
      var D;
      O.preventDefault(), O.stopImmediatePropagation(), O.stopPropagation(), r.textInput && (D = l.value.textInputOptions) != null && D.openMenu && !r.inlineWithInput ? r.isMenuOpen ? l.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, Q = () => {
      y.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && p.value && (n("set-input-date", p.value), n("select-date"), p.value = null);
    }, oe = () => {
      n("clear");
    }, x = (O) => {
      r.textInput || O.preventDefault();
    };
    return t({
      focusInput: () => {
        b.value && b.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (O) => {
        p.value = O;
      }
    }), (O, D) => {
      var C;
      return m(), S("div", {
        onClick: ne,
        "aria-label": (C = s(l).ariaLabels) == null ? void 0 : C.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": O.disabled,
        "aria-readonly": O.readonly
      }, [
        O.$slots.trigger && !O.$slots["dp-input"] && !O.inline ? z(O.$slots, "trigger", { key: 0 }) : T("", !0),
        !O.$slots.trigger && (!O.inline || O.inlineWithInput) ? (m(), S("div", Em, [
          O.$slots["dp-input"] && !O.$slots.trigger && !O.inline ? z(O.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: G,
            onEnter: j,
            onTab: R,
            onClear: oe
          }) : T("", !0),
          O.$slots["dp-input"] ? T("", !0) : (m(), S("input", {
            key: 1,
            ref_key: "inputRef",
            ref: b,
            id: O.uid ? `dp-input-${O.uid}` : void 0,
            name: O.name,
            class: de(s(c)),
            inputmode: O.textInput ? "text" : "none",
            placeholder: O.placeholder,
            disabled: O.disabled,
            readonly: O.readonly,
            required: O.required,
            value: e.inputValue,
            autocomplete: O.autocomplete,
            onInput: G,
            onKeydown: [
              he(ne, ["enter"]),
              he(R, ["tab"]),
              x
            ],
            onBlur: Q,
            onFocus: H,
            onKeypress: x
          }, null, 42, Ym)),
          O.$slots["input-icon"] && !O.hideInputIcon ? (m(), S("span", Vm, [
            z(O.$slots, "input-icon")
          ])) : T("", !0),
          !O.$slots["input-icon"] && !O.hideInputIcon && !O.$slots["dp-input"] ? (m(), te(s(Ur), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : T("", !0),
          O.$slots["clear-icon"] && e.inputValue && O.clearable && !O.disabled && !O.readonly ? (m(), S("span", Um, [
            z(O.$slots, "clear-icon", { clear: oe })
          ])) : T("", !0),
          O.clearable && !O.$slots["clear-icon"] && e.inputValue && !O.disabled && !O.readonly ? (m(), te(s(Hy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: je(oe, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : T("", !0)
        ])) : T("", !0)
      ], 8, Am);
    };
  }
}), Fm = { class: "dp__selection_preview" }, Hm = { class: "dp__action_buttons" }, zm = ["onKeydown"], Lm = /* @__PURE__ */ me({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = lt(n), { buildMatrix: l } = xt(), u = W(null), d = W(null);
    st(() => {
      n.arrowNavigation && l([Ve(u), Ve(d)], "actionRow");
    });
    const p = k(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), b = k(() => !c.value || !g.value || !p.value), y = k(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: b.value
    })), c = k(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), g = k(() => n.monthPicker ? G(n.internalModelValue) : !0), P = () => {
      const R = o.value.previewFormat;
      return n.timePicker || n.monthPicker, R(qe(n.internalModelValue));
    }, B = () => {
      const R = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(R[0])} - ${r(R[1])}` : [r(R[0]), r(R[1])];
    }, U = k(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? B() : n.multiDates ? n.internalModelValue.map((R) => `${r(R)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : P()), G = (R) => {
      if (!n.monthPicker)
        return !0;
      let H = !0;
      return n.minDate && n.maxDate ? et(A(R), A(n.minDate)) && Ze(A(R), A(n.maxDate)) : (n.minDate && (H = et(A(R), A(n.minDate))), n.maxDate && (H = Ze(A(R), A(n.maxDate))), H);
    }, j = () => {
      c.value && g.value && p.value ? t("select-date") : t("invalid-select");
    };
    return (R, H) => (m(), S("div", {
      class: "dp__action_row",
      style: ft(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      R.$slots["action-row"] ? z(R.$slots, "action-row", Ge(He({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: s(b),
        selectDate: () => R.$emit("select-date"),
        closePicker: () => R.$emit("close-picker")
      }))) : (m(), S(ve, { key: 1 }, [
        F("div", Fm, [
          R.$slots["action-preview"] ? z(R.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          R.$slots["action-preview"] ? T("", !0) : (m(), S(ve, { key: 1 }, [
            Array.isArray(s(U)) ? T("", !0) : (m(), S(ve, { key: 0 }, [
              Ue(ge(s(U)), 1)
            ], 64)),
            Array.isArray(s(U)) ? (m(!0), S(ve, { key: 1 }, De(s(U), (ne, Q) => (m(), S("div", { key: Q }, ge(ne), 1))), 128)) : T("", !0)
          ], 64))
        ]),
        F("div", Hm, [
          R.$slots["action-select"] ? z(R.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          R.$slots["action-select"] ? T("", !0) : (m(), S(ve, { key: 1 }, [
            R.inline ? T("", !0) : (m(), S("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: H[0] || (H[0] = (ne) => R.$emit("close-picker")),
              onKeydown: [
                H[1] || (H[1] = he((ne) => R.$emit("close-picker"), ["enter"])),
                H[2] || (H[2] = he((ne) => R.$emit("close-picker"), ["space"]))
              ]
            }, ge(R.cancelText), 545)),
            F("span", {
              class: de(s(y)),
              tabindex: "0",
              onKeydown: [
                he(j, ["enter"]),
                he(j, ["space"])
              ],
              onClick: j,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: d
            }, ge(R.selectText), 43, zm)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), jm = ["aria-label"], qm = {
  class: "dp__calendar_header",
  role: "row"
}, Gm = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Qm = /* @__PURE__ */ F("div", { class: "dp__calendar_header_separator" }, null, -1), Zm = ["aria-label"], Km = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Xm = { class: "dp__cell_inner" }, Jm = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], ev = /* @__PURE__ */ me({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Pt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMultiLevelMatrix: a } = xt(), { setDateMonthOrYear: o, defaults: l } = lt(r), u = W(null), d = W({
      bottom: "",
      left: "",
      transform: ""
    }), p = W([]), b = W(null), y = W(!0), c = W(""), g = W({ startX: 0, endX: 0, startY: 0, endY: 0 }), P = W([]), B = W({ left: "50%" }), U = k(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : _m(r.locale, +r.weekStart));
    st(() => {
      n("mount", { cmp: "calendar", refs: p }), r.noSwipe || b.value && (b.value.addEventListener("touchstart", C, { passive: !1 }), b.value.addEventListener("touchend", q, { passive: !1 }), b.value.addEventListener("touchmove", Z, { passive: !1 })), r.monthChangeOnScroll && b.value && b.value.addEventListener("wheel", Y, { passive: !1 });
    });
    const G = (i) => i ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", j = (i, f) => {
      if (r.transitions) {
        const _ = vt(o(A(), r.month, r.year));
        c.value = et(vt(o(A(), i, f)), _) ? l.value.transitions[G(!0)] : l.value.transitions[G(!1)], y.value = !1, St(() => {
          y.value = !0;
        });
      }
    }, R = k(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), H = k(() => (i) => {
      const f = Om(i);
      return {
        dp__marker_dot: f.type === "dot",
        dp__marker_line: f.type === "line"
      };
    }), ne = k(() => (i) => Re(i, u.value)), Q = k(() => ({
      dp__calendar: !0,
      dp__calendar_next: l.value.multiCalendars > 0 && r.instance !== 0
    })), oe = k(() => (i) => r.hideOffsetDates ? i.current : !0), x = k(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), O = async (i, f, _) => {
      var w, I;
      if (n("set-hover-date", i), (I = (w = i.marker) == null ? void 0 : w.tooltip) != null && I.length) {
        const L = Ve(p.value[f][_]);
        if (L) {
          const { width: V, height: $ } = L.getBoundingClientRect();
          u.value = i.value;
          let h = { left: `${V / 2}px` }, E = -50;
          if (await St(), P.value[0]) {
            const { left: be, width: re } = P.value[0].getBoundingClientRect();
            be < 0 && (h = { left: "0" }, E = 0, B.value.left = `${V / 2}px`), window.innerWidth < be + re && (h = { right: "0" }, E = 0, B.value.left = `${re - V / 2}px`);
          }
          d.value = {
            bottom: `${$}px`,
            ...h,
            transform: `translateX(${E}%)`
          }, n("tooltip-open", i.marker);
        }
      }
    }, D = (i) => {
      u.value && (u.value = null, d.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", i.marker));
    }, C = (i) => {
      g.value.startX = i.changedTouches[0].screenX, g.value.startY = i.changedTouches[0].screenY;
    }, q = (i) => {
      g.value.endX = i.changedTouches[0].screenX, g.value.endY = i.changedTouches[0].screenY, ae();
    }, Z = (i) => {
      r.vertical && !r.inline && i.preventDefault();
    }, ae = () => {
      const i = r.vertical ? "Y" : "X";
      Math.abs(g.value[`start${i}`] - g.value[`end${i}`]) > 10 && n("handle-swipe", g.value[`start${i}`] > g.value[`end${i}`] ? "right" : "left");
    }, K = (i, f, _) => {
      i && (Array.isArray(p.value[f]) ? p.value[f][_] = i : p.value[f] = [i]), r.arrowNavigation && a(p.value, "calendar");
    }, Y = (i) => {
      r.monthChangeOnScroll && (i.preventDefault(), n("handle-scroll", i));
    };
    return t({ triggerTransition: j }), (i, f) => {
      var _;
      return m(), S("div", {
        class: de(s(Q))
      }, [
        F("div", {
          style: ft(s(x))
        }, [
          e.specificMode ? T("", !0) : (m(), S("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: b,
            class: de(s(R)),
            role: "grid",
            "aria-label": (_ = s(l).ariaLabels) == null ? void 0 : _.calendarWrap
          }, [
            F("div", qm, [
              i.weekNumbers ? (m(), S("div", Gm, ge(i.weekNumName), 1)) : T("", !0),
              (m(!0), S(ve, null, De(s(U), (w, I) => (m(), S("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: I,
                "data-test": "calendar-header"
              }, [
                i.$slots["calendar-header"] ? z(i.$slots, "calendar-header", {
                  key: 0,
                  day: w,
                  index: I
                }) : T("", !0),
                i.$slots["calendar-header"] ? T("", !0) : (m(), S(ve, { key: 1 }, [
                  Ue(ge(w), 1)
                ], 64))
              ]))), 128))
            ]),
            Qm,
            we(kt, {
              name: c.value,
              css: !!i.transitions
            }, {
              default: X(() => {
                var w;
                return [
                  y.value ? (m(), S("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (w = s(l).ariaLabels) == null ? void 0 : w.calendarDays
                  }, [
                    (m(!0), S(ve, null, De(e.mappedDates, (I, L) => (m(), S("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: L
                    }, [
                      i.weekNumbers ? (m(), S("div", Km, [
                        F("div", Xm, ge(e.getWeekNum(I.days)), 1)
                      ])) : T("", !0),
                      (m(!0), S(ve, null, De(I.days, (V, $) => {
                        var h, E, be;
                        return m(), S("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (re) => K(re, L, $),
                          key: $ + L,
                          "aria-selected": V.classData.dp__active_date || V.classData.dp__range_start || V.classData.dp__range_start,
                          "aria-disabled": V.classData.dp__cell_disabled,
                          "aria-label": (E = (h = s(l).ariaLabels) == null ? void 0 : h.day) == null ? void 0 : E.call(h, V),
                          tabindex: "0",
                          "data-test": V.value,
                          onClick: je((re) => i.$emit("select-date", V), ["stop", "prevent"]),
                          onKeydown: [
                            he((re) => i.$emit("select-date", V), ["enter"]),
                            he((re) => i.$emit("handle-space", V), ["space"])
                          ],
                          onMouseenter: (re) => O(V, L, $),
                          onMouseleave: (re) => D(V)
                        }, [
                          F("div", {
                            class: de(["dp__cell_inner", V.classData])
                          }, [
                            i.$slots.day && s(oe)(V) ? z(i.$slots, "day", {
                              key: 0,
                              day: +V.text,
                              date: V.value
                            }) : T("", !0),
                            i.$slots.day ? T("", !0) : (m(), S(ve, { key: 1 }, [
                              Ue(ge(V.text), 1)
                            ], 64)),
                            V.marker && s(oe)(V) ? (m(), S("div", {
                              key: 2,
                              class: de(s(H)(V.marker)),
                              style: ft(V.marker.color ? { backgroundColor: V.marker.color } : {})
                            }, null, 6)) : T("", !0),
                            s(ne)(V.value) ? (m(), S("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: P,
                              style: ft(d.value)
                            }, [
                              (be = V.marker) != null && be.tooltip ? (m(), S("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: f[0] || (f[0] = je(() => {
                                }, ["stop"]))
                              }, [
                                (m(!0), S(ve, null, De(V.marker.tooltip, (re, fe) => (m(), S("div", {
                                  key: fe,
                                  class: "dp__tooltip_text"
                                }, [
                                  i.$slots["marker-tooltip"] ? z(i.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: re,
                                    day: V.value
                                  }) : T("", !0),
                                  i.$slots["marker-tooltip"] ? T("", !0) : (m(), S(ve, { key: 1 }, [
                                    F("div", {
                                      class: "dp__tooltip_mark",
                                      style: ft(re.color ? { backgroundColor: re.color } : {})
                                    }, null, 4),
                                    F("div", null, ge(re.text), 1)
                                  ], 64))
                                ]))), 128)),
                                F("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: ft(B.value)
                                }, null, 4)
                              ])) : T("", !0)
                            ], 4)) : T("", !0)
                          ], 2)
                        ], 40, Jm);
                      }), 128))
                    ]))), 128))
                  ], 8, Zm)) : T("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, jm))
        ], 4)
      ], 2);
    };
  }
}), tv = ["aria-label", "aria-disabled"], oa = /* @__PURE__ */ me({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = W(null);
    return st(() => t("set-ref", n)), (r, a) => (m(), S("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = he((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = he((o) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      F("div", {
        class: de(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        z(r.$slots, "default")
      ], 2)
    ], 40, tv));
  }
}), nv = ["onKeydown"], rv = { class: "dp__selection_grid_header" }, av = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], ov = ["aria-label", "onKeydown"], nn = /* @__PURE__ */ me({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: l } = xt(), { hideNavigationButtons: u } = lt(r), d = W(!1), p = W(null), b = W(null), y = W([]), c = W(), g = W(null), P = W(0), B = W(null);
    au(() => {
      p.value = null;
    }), st(() => {
      St().then(() => O()), G(), U(!0);
    }), Oo(() => U(!1));
    const U = (Y) => {
      var i;
      r.arrowNavigation && ((i = r.headerRefs) != null && i.length ? l(Y) : a(Y));
    }, G = () => {
      const Y = Ve(b);
      Y && (r.textInput || Y.focus({ preventScroll: !0 }), d.value = Y.clientHeight < Y.scrollHeight);
    }, j = k(
      () => ({
        dp__overlay: !0
      })
    ), R = k(() => ({
      dp__overlay_col: !0
    })), H = (Y) => r.skipActive ? !1 : Y.value === r.modelValue, ne = k(() => r.items.map((Y) => Y.filter((i) => i).map((i) => {
      var f, _, w;
      const I = r.disabledValues.some((V) => V === i.value) || x(i.value), L = (f = r.multiModelValue) != null && f.length ? (_ = r.multiModelValue) == null ? void 0 : _.some(
        (V) => Re(
          V,
          Nt(
            r.monthPicker ? tn(/* @__PURE__ */ new Date(), i.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : i.value
          )
        )
      ) : H(i);
      return {
        ...i,
        className: {
          dp__overlay_cell_active: L,
          dp__overlay_cell: !L,
          dp__overlay_cell_disabled: I,
          dp__overlay_cell_active_disabled: I && L,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (w = r.multiModelValue) != null && w.length ? C(i.value) : !1
        }
      };
    }))), Q = k(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: d.value,
        dp__button_bottom: r.autoApply
      })
    ), oe = k(() => {
      var Y, i;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((Y = r.items) == null ? void 0 : Y.length) <= 6,
        dp__container_block: ((i = r.items) == null ? void 0 : i.length) > 6
      };
    }), x = (Y) => {
      const i = r.maxValue || r.maxValue === 0, f = r.minValue || r.minValue === 0;
      return !i && !f ? !1 : i && f ? +Y > +r.maxValue || +Y < +r.minValue : i ? +Y > +r.maxValue : f ? +Y < +r.minValue : !1;
    }, O = () => {
      const Y = Ve(p), i = Ve(b), f = Ve(g), _ = Ve(B), w = f ? f.getBoundingClientRect().height : 0;
      i && (P.value = i.getBoundingClientRect().height - w), Y && _ && (_.scrollTop = Y.offsetTop - _.offsetTop - (P.value / 2 - Y.getBoundingClientRect().height) - w);
    }, D = (Y) => {
      !r.disabledValues.some((i) => i === Y) && !x(Y) && (n("update:model-value", Y), n("selected"));
    }, C = (Y) => {
      const i = r.monthPicker ? r.year : Y;
      return Qi(
        r.multiModelValue,
        Nt(
          r.monthPicker ? tn(/* @__PURE__ */ new Date(), c.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? i : c.value || i
        ),
        Nt(r.monthPicker ? tn(/* @__PURE__ */ new Date(), Y) : /* @__PURE__ */ new Date(), i)
      );
    }, q = () => {
      n("toggle"), n("reset-flow");
    }, Z = () => {
      r.escClose && q();
    }, ae = (Y, i, f, _) => {
      Y && (i.value === +r.modelValue && !r.disabledValues.includes(i.value) && (p.value = Y), r.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][_] = Y : y.value[f] = [Y], K()));
    }, K = () => {
      var Y, i;
      const f = (Y = r.headerRefs) != null && Y.length ? [r.headerRefs].concat(y.value) : y.value.concat([r.skipButtonRef ? [] : [g.value]]);
      o(qe(f), (i = r.headerRefs) != null && i.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: G }), (Y, i) => {
      var f;
      return m(), S("div", {
        ref_key: "gridWrapRef",
        ref: b,
        class: de(s(j)),
        role: "dialog",
        tabindex: "0",
        onKeydown: he(Z, ["esc"])
      }, [
        F("div", {
          class: de(s(oe)),
          ref_key: "containerRef",
          ref: B,
          role: "grid",
          style: ft({ height: `${P.value}px` })
        }, [
          F("div", rv, [
            z(Y.$slots, "header")
          ]),
          Y.$slots.overlay ? z(Y.$slots, "overlay", { key: 0 }) : (m(!0), S(ve, { key: 1 }, De(s(ne), (_, w) => (m(), S("div", {
            class: "dp__overlay_row",
            key: w,
            role: "row"
          }, [
            (m(!0), S(ve, null, De(_, (I, L) => (m(), S("div", {
              role: "gridcell",
              class: de(s(R)),
              key: I.value,
              "aria-selected": I.value === e.modelValue && !e.disabledValues.includes(I.value),
              "aria-disabled": I.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (V) => ae(V, I, w, L),
              tabindex: "0",
              "data-test": I.text,
              onClick: (V) => D(I.value),
              onKeydown: [
                he((V) => D(I.value), ["enter"]),
                he((V) => D(I.value), ["space"])
              ],
              onMouseover: (V) => c.value = I.value
            }, [
              F("div", {
                class: de(I.className)
              }, [
                Y.$slots.item ? z(Y.$slots, "item", {
                  key: 0,
                  item: I
                }) : T("", !0),
                Y.$slots.item ? T("", !0) : (m(), S(ve, { key: 1 }, [
                  Ue(ge(I.text), 1)
                ], 64))
              ], 2)
            ], 42, av))), 128))
          ]))), 128))
        ], 6),
        Y.$slots["button-icon"] ? It((m(), S("div", {
          key: 0,
          role: "button",
          "aria-label": (f = e.ariaLabels) == null ? void 0 : f.toggleOverlay,
          class: de(s(Q)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: g,
          onClick: q,
          onKeydown: he(q, ["enter"])
        }, [
          z(Y.$slots, "button-icon")
        ], 42, ov)), [
          [cn, !s(u)(e.type)]
        ]) : T("", !0)
      ], 42, nv);
    };
  }
}), lv = ["aria-label"], _i = /* @__PURE__ */ me({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: t }) {
    const n = e, { transitionName: r, showTransition: a } = Wr(n.transitions), o = W(null);
    return st(() => t("set-ref", o)), (l, u) => (m(), S(ve, null, [
      F("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (d) => l.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = he((d) => l.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = he((d) => l.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        z(l.$slots, "default")
      ], 40, lv),
      we(kt, {
        name: s(r)(e.showSelectionGrid),
        css: s(a)
      }, {
        default: X(() => [
          e.showSelectionGrid ? (m(), te(nn, He({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": u[3] || (u[3] = (d) => l.$emit("update:model-value", d)),
            onToggle: u[4] || (u[4] = (d) => l.$emit("toggle"))
          }), rt({
            "button-icon": X(() => [
              l.$slots["calendar-icon"] ? z(l.$slots, "calendar-icon", { key: 0 }) : T("", !0),
              l.$slots["calendar-icon"] ? T("", !0) : (m(), te(s(Ur), { key: 1 }))
            ]),
            _: 2
          }, [
            l.$slots[e.slotName] ? {
              name: "item",
              fn: X(({ item: d }) => [
                z(l.$slots, e.slotName, { item: d })
              ]),
              key: "0"
            } : void 0,
            l.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: X(() => [
                z(l.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            l.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: X(() => [
                z(l.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : T("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), iv = { class: "dp__month_year_row" }, uv = { class: "dp__month_year_wrap" }, sv = { class: "dp__month_picker_header" }, cv = ["aria-label"], fv = ["aria-label"], dv = ["aria-label"], pv = /* @__PURE__ */ me({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = lt(r), { transitionName: o, showTransition: l } = Wr(a.value.transitions), { buildMatrix: u } = xt(), { handleMonthYearChange: d, isDisabled: p, updateMonthYear: b } = Mm(r, n), y = W(!1), c = W(!1), g = W([null, null, null, null]), P = W(null), B = W(null), U = W(null);
    st(() => {
      n("mount");
    });
    const G = (h) => ({
      get: () => r[h],
      set: (E) => {
        const be = h === "month" ? "year" : "month";
        n("update-month-year", { [h]: E, [be]: r[be] }), n("month-year-select", h === "year"), h === "month" ? w(!0) : I(!0);
      }
    }), j = k(G("month")), R = k(G("year")), H = (h) => {
      const E = Te(A(h));
      return r.year === E;
    }, ne = k(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((h) => A(h)).filter((h) => H(h)).map((h) => Pe(h)) : [] : []), Q = k(() => (h) => {
      const E = h === "month";
      return {
        showSelectionGrid: (E ? y : c).value,
        items: (E ? Y : i).value,
        disabledValues: a.value.filters[E ? "months" : "years"].concat(ne.value),
        minValue: (E ? D : x).value,
        maxValue: (E ? C : O).value,
        headerRefs: E && r.monthPicker ? [P.value, B.value, U.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), oe = k(() => (h) => ({
      month: r.month,
      year: r.year,
      items: h === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: b,
      toggle: h === "month" ? w : I
    })), x = k(() => r.minDate ? Te(A(r.minDate)) : null), O = k(() => r.maxDate ? Te(A(r.maxDate)) : null), D = k(() => {
      if (r.minDate && x.value) {
        if (x.value > r.year)
          return 12;
        if (x.value === r.year)
          return Pe(A(r.minDate));
      }
      return null;
    }), C = k(() => r.maxDate && O.value ? O.value < r.year ? -1 : O.value === r.year ? Pe(A(r.maxDate)) : null : null), q = k(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), Z = (h) => h.reverse(), ae = (h, E = !1) => {
      const be = [], re = (fe) => E ? Z(fe) : fe;
      for (let fe = 0; fe < h.length; fe += 3) {
        const Me = [h[fe], h[fe + 1], h[fe + 2]];
        be.push(re(Me));
      }
      return E ? be.reverse() : be;
    }, K = k(() => r.months.find((E) => E.value === r.month) || { text: "", value: 0 }), Y = k(() => ae(r.months)), i = k(() => ae(r.years, r.reverseYears)), f = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), _ = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), w = (h = !1) => {
      L(h), y.value = !y.value, y.value || n("overlay-closed");
    }, I = (h = !1) => {
      L(h), c.value = !c.value, c.value || n("overlay-closed");
    }, L = (h) => {
      h || n("reset-flow");
    }, V = (h = !1) => {
      p.value(h) || n("update-month-year", {
        year: h ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, $ = (h, E) => {
      r.arrowNavigation && (g.value[E] = Ve(h), u(g.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: w,
      toggleYearPicker: I,
      handleMonthYearChange: d
    }), (h, E) => {
      var be, re, fe, Me, at;
      return m(), S("div", iv, [
        h.$slots["month-year"] ? z(h.$slots, "month-year", Ge(He({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: s(b), handleMonthYearChange: s(d), instance: e.instance }))) : (m(), S(ve, { key: 1 }, [
          !h.monthPicker && !h.yearPicker ? (m(), S(ve, { key: 0 }, [
            s(f) && !h.vertical ? (m(), te(oa, {
              key: 0,
              "aria-label": (be = s(a).ariaLabels) == null ? void 0 : be.prevMonth,
              disabled: s(p)(!1),
              onActivate: E[0] || (E[0] = (pe) => s(d)(!1)),
              onSetRef: E[1] || (E[1] = (pe) => $(pe, 0))
            }, {
              default: X(() => [
                h.$slots["arrow-left"] ? z(h.$slots, "arrow-left", { key: 0 }) : T("", !0),
                h.$slots["arrow-left"] ? T("", !0) : (m(), te(s(ai), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            F("div", uv, [
              we(_i, He({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (re = s(a).ariaLabels) == null ? void 0 : re.openMonthsOverlay,
                modelValue: s(j),
                "onUpdate:modelValue": E[2] || (E[2] = (pe) => Le(j) ? j.value = pe : null)
              }, s(Q)("month"), {
                onToggle: w,
                onSetRef: E[3] || (E[3] = (pe) => $(pe, 1))
              }), rt({
                default: X(() => [
                  h.$slots.month ? z(h.$slots, "month", Ge(He({ key: 0 }, s(K)))) : T("", !0),
                  h.$slots.month ? T("", !0) : (m(), S(ve, { key: 1 }, [
                    Ue(ge(s(K).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                h.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: X(() => [
                    z(h.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                h.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: X(({ item: pe }) => [
                    z(h.$slots, "month-overlay-value", {
                      text: pe.text,
                      value: pe.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                h.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: X(() => [
                    z(h.$slots, "month-overlay", Ge(ct(s(oe)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                h.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: X(() => [
                    z(h.$slots, "month-overlay-header", { toggle: w })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              we(_i, He({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (fe = s(a).ariaLabels) == null ? void 0 : fe.openYearsOverlay,
                modelValue: s(R),
                "onUpdate:modelValue": E[4] || (E[4] = (pe) => Le(R) ? R.value = pe : null)
              }, s(Q)("year"), {
                onToggle: I,
                onSetRef: E[5] || (E[5] = (pe) => $(pe, 2))
              }), rt({
                default: X(() => [
                  h.$slots.year ? z(h.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : T("", !0),
                  h.$slots.year ? T("", !0) : (m(), S(ve, { key: 1 }, [
                    Ue(ge(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                h.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: X(() => [
                    z(h.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                h.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: X(({ item: pe }) => [
                    z(h.$slots, "year-overlay-value", {
                      text: pe.text,
                      value: pe.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                h.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: X(() => [
                    z(h.$slots, "year-overlay", Ge(ct(s(oe)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                h.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: X(() => [
                    z(h.$slots, "year-overlay-header", { toggle: I })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            s(f) && h.vertical ? (m(), te(oa, {
              key: 1,
              "aria-label": (Me = s(a).ariaLabels) == null ? void 0 : Me.prevMonth,
              disabled: s(p)(!1),
              onActivate: E[6] || (E[6] = (pe) => s(d)(!1))
            }, {
              default: X(() => [
                h.$slots["arrow-up"] ? z(h.$slots, "arrow-up", { key: 0 }) : T("", !0),
                h.$slots["arrow-up"] ? T("", !0) : (m(), te(s(qi), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            s(_) ? (m(), te(oa, {
              key: 2,
              ref: "rightIcon",
              disabled: s(p)(!0),
              "aria-label": (at = s(a).ariaLabels) == null ? void 0 : at.nextMonth,
              onActivate: E[7] || (E[7] = (pe) => s(d)(!0)),
              onSetRef: E[8] || (E[8] = (pe) => $(pe, 3))
            }, {
              default: X(() => [
                h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? z(h.$slots, h.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : T("", !0),
                h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? T("", !0) : (m(), te(bi(h.vertical ? s(Gi) : s(oi)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : T("", !0)
          ], 64)) : T("", !0),
          h.monthPicker ? (m(), te(nn, He({ key: 1 }, s(Q)("month"), {
            "skip-active": h.range,
            year: e.year,
            "multi-model-value": s(q),
            "month-picker": "",
            modelValue: s(j),
            "onUpdate:modelValue": E[17] || (E[17] = (pe) => Le(j) ? j.value = pe : null),
            onToggle: w,
            onSelected: E[18] || (E[18] = (pe) => h.$emit("overlay-closed"))
          }), rt({
            header: X(() => {
              var pe, it, tt;
              return [
                F("div", sv, [
                  F("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: P,
                    onClick: E[9] || (E[9] = (Fe) => V(!1)),
                    onKeydown: E[10] || (E[10] = he((Fe) => V(!1), ["enter"]))
                  }, [
                    F("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: s(p)(!1) }]),
                      role: "button",
                      "aria-label": (pe = s(a).ariaLabels) == null ? void 0 : pe.prevMonth
                    }, [
                      h.$slots["arrow-left"] ? z(h.$slots, "arrow-left", { key: 0 }) : T("", !0),
                      h.$slots["arrow-left"] ? T("", !0) : (m(), te(s(ai), { key: 1 }))
                    ], 10, cv)
                  ], 544),
                  F("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: B,
                    "aria-label": (it = s(a).ariaLabels) == null ? void 0 : it.openYearsOverlay,
                    tabindex: "0",
                    onClick: E[11] || (E[11] = () => I(!1)),
                    onKeydown: E[12] || (E[12] = he(() => I(!1), ["enter"]))
                  }, [
                    h.$slots.year ? z(h.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : T("", !0),
                    h.$slots.year ? T("", !0) : (m(), S(ve, { key: 1 }, [
                      Ue(ge(e.year), 1)
                    ], 64))
                  ], 40, fv),
                  F("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: U,
                    onClick: E[13] || (E[13] = (Fe) => V(!0)),
                    onKeydown: E[14] || (E[14] = he((Fe) => V(!0), ["enter"]))
                  }, [
                    F("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: s(p)(!0) }]),
                      role: "button",
                      "aria-label": (tt = s(a).ariaLabels) == null ? void 0 : tt.nextMonth
                    }, [
                      h.$slots["arrow-right"] ? z(h.$slots, "arrow-right", { key: 0 }) : T("", !0),
                      h.$slots["arrow-right"] ? T("", !0) : (m(), te(s(oi), { key: 1 }))
                    ], 10, dv)
                  ], 544)
                ]),
                we(kt, {
                  name: s(o)(c.value),
                  css: s(l)
                }, {
                  default: X(() => [
                    c.value ? (m(), te(nn, He({ key: 0 }, s(Q)("year"), {
                      modelValue: s(R),
                      "onUpdate:modelValue": E[15] || (E[15] = (Fe) => Le(R) ? R.value = Fe : null),
                      onToggle: I,
                      onSelected: E[16] || (E[16] = (Fe) => h.$emit("overlay-closed"))
                    }), rt({
                      "button-icon": X(() => [
                        h.$slots["calendar-icon"] ? z(h.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                        h.$slots["calendar-icon"] ? T("", !0) : (m(), te(s(Ur), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      h.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: X(({ item: Fe }) => [
                          z(h.$slots, "year-overlay-value", {
                            text: Fe.text,
                            value: Fe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : T("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            h.$slots["month-overlay-value"] ? {
              name: "item",
              fn: X(({ item: pe }) => [
                z(h.$slots, "month-overlay-value", {
                  text: pe.text,
                  value: pe.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : T("", !0),
          h.yearPicker ? (m(), te(nn, He({ key: 2 }, s(Q)("year"), {
            modelValue: s(R),
            "onUpdate:modelValue": E[19] || (E[19] = (pe) => Le(R) ? R.value = pe : null),
            "multi-model-value": s(q),
            "skip-active": h.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: I,
            onSelected: E[20] || (E[20] = (pe) => h.$emit("overlay-closed"))
          }), rt({ _: 2 }, [
            h.$slots["year-overlay-value"] ? {
              name: "item",
              fn: X(({ item: pe }) => [
                z(h.$slots, "year-overlay-value", {
                  text: pe.text,
                  value: pe.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : T("", !0)
        ], 64))
      ]);
    };
  }
}), yv = {
  key: 0,
  class: "dp__time_input"
}, mv = ["aria-label", "onKeydown", "onClick"], vv = ["aria-label", "data-test", "onKeydown", "onClick"], hv = ["aria-label", "onKeydown", "onClick"], gv = { key: 0 }, _v = ["aria-label", "onKeydown"], bv = /* @__PURE__ */ me({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Pt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = xt(), { defaults: l } = lt(r), { transitionName: u, showTransition: d } = Wr(l.value.transitions), p = an({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), b = W("AM"), y = W(null), c = W([]);
    st(() => {
      n("mounted");
    });
    const g = k(() => (i) => !!(r.maxTime && r.maxTime[i] && r.maxTime[i] < r[i] + +r[`${i}Increment`])), P = k(() => (i) => !!(r.minTime && r.minTime[i] && r.minTime[i] > r[i] - +r[`${i}Increment`])), B = (i, f) => $i(Qe(A(), i), f), U = (i, f) => Wy(Qe(A(), i), f), G = k(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), j = k(() => {
      const i = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? i.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : i;
    }), R = k(() => j.value.filter((i) => !i.separator)), H = k(() => (i) => {
      if (i === "hours") {
        const f = q(r.hours);
        return { text: f < 10 ? `0${f}` : `${f}`, value: f };
      }
      return { text: r[i] < 10 ? `0${r[i]}` : `${r[i]}`, value: r[i] };
    }), ne = (i) => {
      const f = r.is24 ? 24 : 12, _ = i === "hours" ? f : 60, w = +r[`${i}GridIncrement`], I = i === "hours" && !r.is24 ? w : 0, L = [];
      for (let V = I; V < _; V += w)
        L.push({ value: V, text: V < 10 ? `0${V}` : `${V}` });
      return i === "hours" && !r.is24 && L.push({ value: 0, text: "12" }), gm(L);
    }, Q = (i, f) => {
      const _ = r.minTime && r.minTime[f], w = r.maxTime && r.maxTime[f];
      return _ && w ? i < _ || i > w : _ ? i < _ : w ? i > w : !1;
    }, oe = k(() => (i) => ne(i).flat().filter((f) => f).map((f) => f.value).filter((f) => Q(f, i))), x = (i) => r[`no${i[0].toUpperCase() + i.slice(1)}Overlay`], O = (i) => {
      x(i) || (p[i] = !p[i], p[i] || n("overlay-closed"));
    }, D = (i) => i === "hours" ? bt : i === "minutes" ? wt : Lt, C = (i, f = !0) => {
      const _ = f ? B : U;
      (f ? g.value(i) : P.value(i)) || n(
        `update:${i}`,
        D(i)(_({ [i]: +r[i] }, { [i]: +r[`${i}Increment`] }))
      );
    }, q = (i) => r.is24 ? i : (i >= 12 ? b.value = "PM" : b.value = "AM", km(i)), Z = () => {
      b.value === "PM" ? (b.value = "AM", n("update:hours", r.hours - 12)) : (b.value = "PM", n("update:hours", r.hours + 12));
    }, ae = (i) => {
      p[i] = !0;
    }, K = (i, f, _) => {
      if (i && r.arrowNavigation) {
        Array.isArray(c.value[f]) ? c.value[f][_] = i : c.value[f] = [i];
        const w = c.value.reduce(
          (I, L) => L.map((V, $) => [...I[$] || [], L[$]]),
          []
        );
        o(r.closeTimePickerBtn), y.value && (w[1] = w[1].concat(y.value)), a(w, r.order);
      }
    }, Y = (i, f) => i === "hours" && !r.is24 ? n(`update:${i}`, b.value === "PM" ? f + 12 : f) : n(`update:${i}`, f);
    return t({ openChildCmp: ae }), (i, f) => {
      var _;
      return i.disabled ? T("", !0) : (m(), S("div", yv, [
        (m(!0), S(ve, null, De(s(j), (w, I) => {
          var L, V, $;
          return m(), S("div", {
            key: I,
            class: de(s(G))
          }, [
            w.separator ? (m(), S(ve, { key: 0 }, [
              Ue(" : ")
            ], 64)) : (m(), S(ve, { key: 1 }, [
              F("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: s(g)(w.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (L = s(l).ariaLabels) == null ? void 0 : L.incrementValue(w.type),
                tabindex: "0",
                onKeydown: [
                  he((h) => C(w.type), ["enter"]),
                  he((h) => C(w.type), ["space"])
                ],
                onClick: (h) => C(w.type),
                ref_for: !0,
                ref: (h) => K(h, I, 0)
              }, [
                i.$slots["arrow-up"] ? z(i.$slots, "arrow-up", { key: 0 }) : T("", !0),
                i.$slots["arrow-up"] ? T("", !0) : (m(), te(s(qi), { key: 1 }))
              ], 42, mv),
              F("div", {
                role: "button",
                "aria-label": (V = s(l).ariaLabels) == null ? void 0 : V.openTpOverlay(w.type),
                class: de(x(w.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${w.type}-toggle-overlay-btn`,
                onKeydown: [
                  he((h) => O(w.type), ["enter"]),
                  he((h) => O(w.type), ["space"])
                ],
                onClick: (h) => O(w.type),
                ref_for: !0,
                ref: (h) => K(h, I, 1)
              }, [
                i.$slots[w.type] ? z(i.$slots, w.type, {
                  key: 0,
                  text: s(H)(w.type).text,
                  value: s(H)(w.type).value
                }) : T("", !0),
                i.$slots[w.type] ? T("", !0) : (m(), S(ve, { key: 1 }, [
                  Ue(ge(s(H)(w.type).text), 1)
                ], 64))
              ], 42, vv),
              F("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: s(P)(w.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": ($ = s(l).ariaLabels) == null ? void 0 : $.decrementValue(w.type),
                tabindex: "0",
                onKeydown: [
                  he((h) => C(w.type, !1), ["enter"]),
                  he((h) => C(w.type, !1), ["space"])
                ],
                onClick: (h) => C(w.type, !1),
                ref_for: !0,
                ref: (h) => K(h, I, 2)
              }, [
                i.$slots["arrow-down"] ? z(i.$slots, "arrow-down", { key: 0 }) : T("", !0),
                i.$slots["arrow-down"] ? T("", !0) : (m(), te(s(Gi), { key: 1 }))
              ], 42, hv)
            ], 64))
          ], 2);
        }), 128)),
        i.is24 ? T("", !0) : (m(), S("div", gv, [
          i.$slots["am-pm-button"] ? z(i.$slots, "am-pm-button", {
            key: 0,
            toggle: Z,
            value: b.value
          }) : T("", !0),
          i.$slots["am-pm-button"] ? T("", !0) : (m(), S("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: y,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (_ = s(l).ariaLabels) == null ? void 0 : _.amPmButton,
            tabindex: "0",
            onClick: Z,
            onKeydown: [
              he(je(Z, ["prevent"]), ["enter"]),
              he(je(Z, ["prevent"]), ["space"])
            ]
          }, ge(b.value), 41, _v))
        ])),
        (m(!0), S(ve, null, De(s(R), (w, I) => (m(), te(kt, {
          key: I,
          name: s(u)(p[w.type]),
          css: s(d)
        }, {
          default: X(() => [
            p[w.type] ? (m(), te(nn, {
              key: 0,
              items: ne(w.type),
              "disabled-values": s(l).filters.times[w.type].concat(s(oe)(w.type)),
              "esc-close": i.escClose,
              "aria-labels": s(l).ariaLabels,
              "hide-navigation": i.hideNavigation,
              "onUpdate:modelValue": (L) => Y(w.type, L),
              onSelected: (L) => O(w.type),
              onToggle: (L) => O(w.type),
              onResetFlow: f[0] || (f[0] = (L) => i.$emit("reset-flow")),
              type: w.type
            }, rt({
              "button-icon": X(() => [
                i.$slots["clock-icon"] ? z(i.$slots, "clock-icon", { key: 0 }) : T("", !0),
                i.$slots["clock-icon"] ? T("", !0) : (m(), te(s(ji), { key: 1 }))
              ]),
              _: 2
            }, [
              i.$slots[`${w.type}-overlay-value`] ? {
                name: "item",
                fn: X(({ item: L }) => [
                  z(i.$slots, `${w.type}-overlay-value`, {
                    text: L.text,
                    value: L.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : T("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), wv = ["aria-label"], kv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Ov = {
  key: 1,
  class: "dp__overlay_row"
}, $v = ["aria-label"], Sv = /* @__PURE__ */ me({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMatrix: a, setTimePicker: o } = xt(), l = Et(), { hideNavigationButtons: u, defaults: d } = lt(r), { transitionName: p, showTransition: b } = Wr(d.value.transitions), y = W(null), c = W(null), g = W([]), P = W(null);
    st(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Ve(y.value)], "time") : o(!0, r.timePicker);
    });
    const B = k(() => r.range && r.modelAuto ? Ji(r.internalModelValue) : !0), U = W(!1), G = (C) => ({
      hours: Array.isArray(r.hours) ? r.hours[C] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[C] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[C] : r.seconds
    }), j = k(() => {
      const C = [];
      if (r.range)
        for (let q = 0; q < 2; q++)
          C.push(G(q));
      else
        C.push(G(0));
      return C;
    }), R = (C, q = !1, Z = "") => {
      q || n("reset-flow"), U.value = C, C && n("overlay-opened"), r.arrowNavigation && (o(C), C || n("overlay-closed")), St(() => {
        Z !== "" && g.value[0] && g.value[0].openChildCmp(Z);
      });
    }, H = k(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), ne = Mt(l, "timePicker"), Q = (C, q, Z) => r.range ? q === 0 ? [C, j.value[1][Z]] : [j.value[0][Z], C] : C, oe = (C) => {
      n("update:hours", C);
    }, x = (C) => {
      n("update:minutes", C);
    }, O = (C) => {
      n("update:seconds", C);
    }, D = () => {
      P.value && r.arrowNavigation && P.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: R }), (C, q) => {
      var Z;
      return m(), S("div", null, [
        C.timePicker ? T("", !0) : It((m(), S("div", {
          key: 0,
          class: de(s(H)),
          role: "button",
          "aria-label": (Z = s(d).ariaLabels) == null ? void 0 : Z.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: y,
          onKeydown: [
            q[0] || (q[0] = he((ae) => R(!0), ["enter"])),
            q[1] || (q[1] = he((ae) => R(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (ae) => R(!0))
        }, [
          C.$slots["clock-icon"] ? z(C.$slots, "clock-icon", { key: 0 }) : T("", !0),
          C.$slots["clock-icon"] ? T("", !0) : (m(), te(s(ji), { key: 1 }))
        ], 42, wv)), [
          [cn, !s(u)("time")]
        ]),
        we(kt, {
          name: s(p)(U.value),
          css: s(b)
        }, {
          default: X(() => {
            var ae;
            return [
              U.value || C.timePicker ? (m(), S("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: P,
                tabindex: "0"
              }, [
                F("div", kv, [
                  C.$slots["time-picker-overlay"] ? z(C.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: oe,
                    setMinutes: x,
                    setSeconds: O
                  }) : T("", !0),
                  C.$slots["time-picker-overlay"] ? T("", !0) : (m(), S("div", Ov, [
                    (m(!0), S(ve, null, De(s(j), (K, Y) => It((m(), te(bv, He({ key: Y }, {
                      ...C.$props,
                      order: Y,
                      hours: K.hours,
                      minutes: K.minutes,
                      seconds: K.seconds,
                      closeTimePickerBtn: c.value,
                      disabled: Y === 0 ? C.fixedStart : C.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: g,
                      "onUpdate:hours": (i) => oe(Q(i, Y, "hours")),
                      "onUpdate:minutes": (i) => x(Q(i, Y, "minutes")),
                      "onUpdate:seconds": (i) => O(Q(i, Y, "seconds")),
                      onMounted: D,
                      onOverlayClosed: D
                    }), rt({ _: 2 }, [
                      De(s(ne), (i, f) => ({
                        name: i,
                        fn: X((_) => [
                          z(C.$slots, i, Ge(ct(_)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [cn, Y === 0 ? !0 : s(B)]
                    ])), 128))
                  ])),
                  C.timePicker ? T("", !0) : It((m(), S("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: c,
                    class: de(s(H)),
                    role: "button",
                    "aria-label": (ae = s(d).ariaLabels) == null ? void 0 : ae.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[3] || (q[3] = he((K) => R(!1), ["enter"])),
                      q[4] || (q[4] = he((K) => R(!1), ["space"]))
                    ],
                    onClick: q[5] || (q[5] = (K) => R(!1))
                  }, [
                    C.$slots["calendar-icon"] ? z(C.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                    C.$slots["calendar-icon"] ? T("", !0) : (m(), te(s(Ur), { key: 1 }))
                  ], 42, $v)), [
                    [cn, !s(u)("time")]
                  ])
                ])
              ], 512)) : T("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), xv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = lt(t), o = W(null), l = W(A()), u = (f) => {
    !f.current && t.hideOffsetDates || (o.value = f.value);
  }, d = () => {
    o.value = null;
  }, p = (f) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? f ? et(o.value, e.value[0]) : Ze(o.value, e.value[0]) : !0, b = (f, _) => {
    const w = () => e.value ? _ ? e.value[0] || null : e.value[1] : null, I = e.value && Array.isArray(e.value) ? w() : null;
    return Re(A(f.value), I);
  }, y = (f) => {
    const _ = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !Ze(o.value || null, _) : !0;
  }, c = (f, _ = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !f.current ? !1 : Re(A(f.value), e.value[_ ? 0 : 1]) : t.range ? b(f, _) && y(_) || Re(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(_) : !1, g = (f, _, w) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : w ? et(e.value[0], _.value) : Ze(e.value[0], _.value) : !1, P = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Re(f.value, e.value[0] ? e.value[0] : l.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((_) => Re(_, f.value)) : Re(f.value, e.value ? e.value : l.value), B = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const _ = $t(o.value, +t.autoRange), w = a(A(o.value));
        return t.weekPicker ? Re(w[1], A(f.value)) : Re(_, A(f.value));
      }
      return !1;
    }
    return !1;
  }, U = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const _ = $t(o.value, +t.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const w = a(A(o.value));
        return t.weekPicker ? et(f.value, w[0]) && Ze(f.value, w[1]) : et(f.value, o.value) && Ze(f.value, _);
      }
      return !1;
    }
    return !1;
  }, G = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const _ = a(A(o.value));
        return t.weekPicker ? Re(_[0], f.value) : Re(o.value, f.value);
      }
      return !1;
    }
    return !1;
  }, j = (f) => Qi(e.value, o.value, f.value), R = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, H = () => t.modelAuto ? Ji(t.internalModelValue) : !0, ne = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const _ = t.range ? !c(f) && !c(f, !1) : !0;
    return !n(f.value) && !P(f) && !(!f.current && t.hideOffsetDates) && _;
  }, Q = (f) => t.range ? t.modelAuto ? R() && P(f) : !1 : P(f), oe = (f) => t.highlight ? r(f.value, t.highlight) : !1, x = (f) => n(f.value) && t.highlightDisabledDays === !1, O = (f) => t.highlightWeekDays && t.highlightWeekDays.includes(f.value.getDay()), D = (f) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || f.current) && H() && !(!f.current && t.hideOffsetDates) && !P(f) ? j(f) : !1, C = (f) => {
    const { isRangeStart: _, isRangeEnd: w } = ae(f), I = t.range ? _ || w : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !n(f.value),
      dp__cell_disabled: n(f.value),
      dp__cell_highlight: !x(f) && (oe(f) || O(f)) && !Q(f) && !I,
      dp__cell_highlight_active: !x(f) && (oe(f) || O(f)) && Q(f),
      dp__today: !t.noToday && Re(f.value, l.value) && f.current
    };
  }, q = (f) => ({
    dp__active_date: Q(f),
    dp__date_hover: ne(f)
  }), Z = (f) => ({
    ...K(f),
    ...Y(f),
    dp__range_between_week: D(f) && t.weekPicker
  }), ae = (f) => {
    const _ = t.multiCalendars > 0 ? f.current && c(f) && H() : c(f) && H(), w = t.multiCalendars > 0 ? f.current && c(f, !1) && H() : c(f, !1) && H();
    return { isRangeStart: _, isRangeEnd: w };
  }, K = (f) => {
    const { isRangeStart: _, isRangeEnd: w } = ae(f);
    return {
      dp__range_start: _,
      dp__range_end: w,
      dp__range_between: D(f) && !t.weekPicker,
      dp__date_hover_start: g(ne(f), f, !0),
      dp__date_hover_end: g(ne(f), f, !1)
    };
  }, Y = (f) => ({
    ...K(f),
    dp__cell_auto_range: U(f),
    dp__cell_auto_range_start: G(f),
    dp__cell_auto_range_end: B(f)
  }), i = (f) => t.range ? t.autoRange ? Y(f) : t.modelAuto ? { ...q(f), ...K(f) } : K(f) : t.weekPicker ? Z(f) : q(f);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (f) => ({
      ...C(f),
      ...i(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, Pv = ["id", "onKeydown"], Tv = {
  key: 0,
  class: "dp__sidebar_left"
}, Dv = {
  key: 1,
  class: "dp__preset_ranges"
}, Cv = ["onClick"], Rv = {
  key: 2,
  class: "dp__sidebar_right"
}, Mv = {
  key: 3,
  class: "dp__now_wrap"
}, Iv = /* @__PURE__ */ me({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setMenuFocused: a, setShiftKey: o, control: l } = Zi(), { getCalendarDays: u, defaults: d } = lt(r), p = Et(), b = W(null), y = an({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), c = W([]), g = W([]), P = W(null), B = W(null), U = W(0), G = W(!1), j = W(0);
    st(() => {
      var M;
      G.value = !0, !((M = r.presetRanges) != null && M.length) && !p["left-sidebar"] && !p["right-sidebar"] && ye();
      const ee = Ve(B);
      if (ee && !r.textInput && !r.inline && (a(!0), x()), ee) {
        const Ke = (nt) => {
          ["action-row", "time-picker", "month-year"].some(
            (Yt) => Object.keys(p).includes(Yt)
          ) || nt.preventDefault(), nt.stopImmediatePropagation(), nt.stopPropagation();
        };
        ee.addEventListener("pointerdown", Ke), ee.addEventListener("mousedown", Ke);
      }
      window.addEventListener("resize", ye);
    }), Oo(() => {
      window.removeEventListener("resize", ye);
    });
    const { arrowRight: R, arrowLeft: H, arrowDown: ne, arrowUp: Q } = xt(), oe = (M) => {
      M || M === 0 ? g.value[M].triggerTransition(
        Z.value(M),
        ae.value(M)
      ) : g.value.forEach(
        (ee, Ke) => ee.triggerTransition(Z.value(Ke), ae.value(Ke))
      );
    }, x = () => {
      const M = Ve(B);
      M && M.focus({ preventScroll: !0 });
    }, O = () => {
      var M;
      (M = r.flow) != null && M.length && j.value !== -1 && (j.value += 1, n("flow-step", j.value), Ie());
    }, D = () => {
      j.value = -1;
    }, {
      calendars: C,
      modelValue: q,
      month: Z,
      year: ae,
      time: K,
      updateTime: Y,
      updateMonthYear: i,
      selectDate: f,
      getWeekNum: _,
      monthYearSelect: w,
      handleScroll: I,
      handleArrow: L,
      handleSwipe: V,
      getMarker: $,
      selectCurrentDate: h,
      presetDateRange: E
    } = Cm(r, n, O, oe, j), { setHoverDate: be, clearHoverDate: re, getDayClassData: fe } = xv(q, r);
    dt(
      C,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Me = Mt(p, "calendar"), at = Mt(p, "action"), pe = Mt(p, "timePicker"), it = Mt(p, "monthYear"), tt = k(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Fe = k(() => bm(r.yearRange)), jt = k(() => wm(r.locale, r.monthNameFormat)), ye = () => {
      const M = Ve(b);
      M && (U.value = M.getBoundingClientRect().width);
    }, Se = k(() => (M) => u(Z.value(M), ae.value(M))), Oe = k(
      () => d.value.multiCalendars > 0 && r.range ? [...Array(d.value.multiCalendars).keys()] : [0]
    ), Tt = k(
      () => (M) => M === 1
    ), Dt = k(() => r.monthPicker || r.timePicker || r.yearPicker), Fr = k(
      () => ({
        dp__flex_display: d.value.multiCalendars > 0
      })
    ), on = k(() => ({
      dp__instance_calendar: d.value.multiCalendars > 0
    })), qt = k(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), Hr = k(
      () => (M) => Lr(Se, M)
    ), zr = k(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Lr = (M, ee) => M.value(ee).map((Ke) => ({
      ...Ke,
      days: Ke.days.map((nt) => (nt.marker = $(nt), nt.classData = fe(nt), nt))
    })), ln = (M) => {
      M.stopPropagation(), M.stopImmediatePropagation();
    }, v = () => {
      r.escClose && n("close-picker");
    }, N = (M, ee = !1) => {
      f(M, ee), r.spaceConfirm && n("select-date");
    }, le = (M) => {
      var ee;
      (ee = r.flow) != null && ee.length && (y[M] = !0, Object.keys(y).filter((Ke) => !y[Ke]).length || Ie());
    }, ue = (M, ee, Ke, nt, ...Yt) => {
      if (r.flow[j.value] === M) {
        const ie = nt ? ee.value[0] : ee.value;
        ie && ie[Ke](...Yt);
      }
    }, Ie = () => {
      ue("month", c, "toggleMonthPicker", !0, !0), ue("year", c, "toggleYearPicker", !0, !0), ue("calendar", P, "toggleTimePicker", !1, !1, !0), ue("time", P, "toggleTimePicker", !1, !0, !0);
      const M = r.flow[j.value];
      (M === "hours" || M === "minutes" || M === "seconds") && ue(M, P, "toggleTimePicker", !1, !0, !0, M);
    }, ot = (M) => {
      if (r.arrowNavigation) {
        if (M === "up")
          return Q();
        if (M === "down")
          return ne();
        if (M === "left")
          return H();
        if (M === "right")
          return R();
      } else
        M === "left" || M === "up" ? L("left", 0, M === "up") : L("right", 0, M === "down");
    }, _t = (M) => {
      o(M.shiftKey), !r.disableMonthYearSelect && M.code === "Tab" && M.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (M.preventDefault(), M.stopImmediatePropagation(), n("close-picker"));
    }, Gt = (M) => {
      c.value[0] && c.value[0].handleMonthYearChange(M);
    };
    return t({
      updateMonthYear: i
    }), (M, ee) => {
      var Ke;
      return m(), te(kt, {
        appear: "",
        name: (Ke = s(d).transitions) == null ? void 0 : Ke.menuAppear,
        mode: "out-in",
        css: !!M.transitions
      }, {
        default: X(() => {
          var nt, Yt;
          return [
            F("div", {
              id: M.uid ? `dp-menu-${M.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: B,
              role: "dialog",
              class: de(s(zr)),
              onMouseleave: ee[15] || (ee[15] = //@ts-ignore
              (...ie) => s(re) && s(re)(...ie)),
              onClick: ln,
              onKeydown: [
                he(v, ["esc"]),
                ee[16] || (ee[16] = he(je((ie) => ot("left"), ["prevent"]), ["left"])),
                ee[17] || (ee[17] = he(je((ie) => ot("up"), ["prevent"]), ["up"])),
                ee[18] || (ee[18] = he(je((ie) => ot("down"), ["prevent"]), ["down"])),
                ee[19] || (ee[19] = he(je((ie) => ot("right"), ["prevent"]), ["right"])),
                _t
              ]
            }, [
              (M.disabled || M.readonly) && M.inline ? (m(), S("div", {
                key: 0,
                class: de(s(qt))
              }, null, 2)) : T("", !0),
              !M.inline && !M.teleportCenter ? (m(), S("div", {
                key: 1,
                class: de(s(tt))
              }, null, 2)) : T("", !0),
              F("div", {
                class: de({
                  dp__menu_content_wrapper: ((nt = M.presetRanges) == null ? void 0 : nt.length) || !!M.$slots["left-sidebar"] || !!M.$slots["right-sidebar"]
                })
              }, [
                M.$slots["left-sidebar"] ? (m(), S("div", Tv, [
                  z(M.$slots, "left-sidebar", Ge(ct({ handleMonthYearChange: Gt })))
                ])) : T("", !0),
                (Yt = M.presetRanges) != null && Yt.length ? (m(), S("div", Dv, [
                  (m(!0), S(ve, null, De(M.presetRanges, (ie, Vt) => (m(), S("div", {
                    key: Vt,
                    style: ft(ie.style || {}),
                    class: "dp__preset_range",
                    onClick: (_e) => s(E)(ie.range, !!ie.slot)
                  }, [
                    ie.slot ? z(M.$slots, ie.slot, {
                      key: 0,
                      presetDateRange: s(E),
                      label: ie.label,
                      range: ie.range
                    }) : (m(), S(ve, { key: 1 }, [
                      Ue(ge(ie.label), 1)
                    ], 64))
                  ], 12, Cv))), 128))
                ])) : T("", !0),
                F("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: b,
                  role: "document"
                }, [
                  F("div", {
                    class: de(s(Fr))
                  }, [
                    (m(!0), S(ve, null, De(s(Oe), (ie, Vt) => (m(), S("div", {
                      key: ie,
                      class: de(s(on))
                    }, [
                      !M.disableMonthYearSelect && !M.timePicker ? (m(), te(pv, He({
                        key: 0,
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (c.value[Vt] = _e);
                        },
                        months: s(jt),
                        years: s(Fe),
                        month: s(Z)(ie),
                        year: s(ae)(ie),
                        instance: ie,
                        "internal-model-value": e.internalModelValue
                      }, M.$props, {
                        onMount: ee[0] || (ee[0] = (_e) => le("monthYearInput")),
                        onResetFlow: D,
                        onUpdateMonthYear: (_e) => s(i)(ie, _e),
                        onMonthYearSelect: s(w),
                        onOverlayClosed: x
                      }), rt({ _: 2 }, [
                        De(s(it), (_e, nu) => ({
                          name: _e,
                          fn: X((jr) => [
                            z(M.$slots, _e, Ge(ct(jr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : T("", !0),
                      we(ev, He({
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (g.value[Vt] = _e);
                        },
                        "specific-mode": s(Dt),
                        "get-week-num": s(_),
                        instance: ie,
                        "mapped-dates": s(Hr)(ie),
                        month: s(Z)(ie),
                        year: s(ae)(ie)
                      }, M.$props, {
                        "flow-step": j.value,
                        "onUpdate:flowStep": ee[1] || (ee[1] = (_e) => j.value = _e),
                        onSelectDate: (_e) => s(f)(_e, !s(Tt)(ie)),
                        onHandleSpace: (_e) => N(_e, !s(Tt)(ie)),
                        onSetHoverDate: ee[2] || (ee[2] = (_e) => s(be)(_e)),
                        onHandleScroll: (_e) => s(I)(_e, ie),
                        onHandleSwipe: (_e) => s(V)(_e, ie),
                        onMount: ee[3] || (ee[3] = (_e) => le("calendar")),
                        onResetFlow: D,
                        onTooltipOpen: ee[4] || (ee[4] = (_e) => M.$emit("tooltip-open", _e)),
                        onTooltipClose: ee[5] || (ee[5] = (_e) => M.$emit("tooltip-close", _e))
                      }), rt({ _: 2 }, [
                        De(s(Me), (_e, nu) => ({
                          name: _e,
                          fn: X((jr) => [
                            z(M.$slots, _e, Ge(ct({ ...jr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  F("div", null, [
                    M.$slots["time-picker"] ? z(M.$slots, "time-picker", Ge(He({ key: 0 }, { time: s(K), updateTime: s(Y) }))) : (m(), S(ve, { key: 1 }, [
                      M.enableTimePicker && !M.monthPicker && !M.weekPicker ? (m(), te(Sv, He({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: P,
                        hours: s(K).hours,
                        minutes: s(K).minutes,
                        seconds: s(K).seconds,
                        "internal-model-value": e.internalModelValue
                      }, M.$props, {
                        onMount: ee[6] || (ee[6] = (ie) => le("timePicker")),
                        "onUpdate:hours": ee[7] || (ee[7] = (ie) => s(Y)(ie)),
                        "onUpdate:minutes": ee[8] || (ee[8] = (ie) => s(Y)(ie, !1)),
                        "onUpdate:seconds": ee[9] || (ee[9] = (ie) => s(Y)(ie, !1, !0)),
                        onResetFlow: D,
                        onOverlayClosed: x,
                        onOverlayOpened: ee[10] || (ee[10] = (ie) => M.$emit("time-picker-open", ie))
                      }), rt({ _: 2 }, [
                        De(s(pe), (ie, Vt) => ({
                          name: ie,
                          fn: X((_e) => [
                            z(M.$slots, ie, Ge(ct(_e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : T("", !0)
                    ], 64))
                  ])
                ], 512),
                M.$slots["right-sidebar"] ? (m(), S("div", Rv, [
                  z(M.$slots, "right-sidebar", Ge(ct({ handleMonthYearChange: Gt })))
                ])) : T("", !0),
                M.showNowButton ? (m(), S("div", Mv, [
                  M.$slots["now-button"] ? z(M.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: s(h)
                  }) : T("", !0),
                  M.$slots["now-button"] ? T("", !0) : (m(), S("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ee[11] || (ee[11] = //@ts-ignore
                    (...ie) => s(h) && s(h)(...ie))
                  }, ge(M.nowButtonLabel), 1))
                ])) : T("", !0)
              ], 2),
              !M.autoApply || M.keepActionRow ? (m(), te(Lm, He({
                key: 2,
                "menu-mount": G.value,
                "calendar-width": U.value,
                "internal-model-value": e.internalModelValue
              }, M.$props, {
                onClosePicker: ee[12] || (ee[12] = (ie) => M.$emit("close-picker")),
                onSelectDate: ee[13] || (ee[13] = (ie) => M.$emit("select-date")),
                onInvalidSelect: ee[14] || (ee[14] = (ie) => M.$emit("invalid-select"))
              }), rt({ _: 2 }, [
                De(s(at), (ie, Vt) => ({
                  name: ie,
                  fn: X((_e) => [
                    z(M.$slots, ie, Ge(ct({ ..._e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : T("", !0)
            ], 42, Pv)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Nv = typeof window < "u" ? window : void 0, la = () => {
}, Bv = (e) => ou() ? (lu(e), !0) : !1, Av = (e, t, n, r) => {
  if (!e)
    return la;
  let a = la;
  const o = dt(
    () => s(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = la;
      });
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    o(), a();
  };
  return Bv(l), l;
}, Ev = (e, t, n, r = {}) => {
  const { window: a = Nv, event: o = "pointerdown" } = r;
  return a ? Av(a, o, (l) => {
    const u = Ve(e), d = Ve(t);
    !u || !d || u === l.target || l.composedPath().includes(u) || l.composedPath().includes(d) || n(l);
  }, { passive: !0 }) : void 0;
}, Yv = /* @__PURE__ */ me({
  __name: "VueDatePicker",
  props: {
    ...Pt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = Et(), o = W(!1), l = Xn(r, "modelValue"), u = Xn(r, "timezone"), d = W(null), p = W(null), b = W(!1), y = W(null), { setMenuFocused: c, setShiftKey: g } = Zi(), { clearArrowNav: P } = xt(), { validateDate: B, isValidTime: U, defaults: G } = lt(r);
    st(() => {
      C(r.modelValue), r.inline || (x(y.value).addEventListener("scroll", f), window.addEventListener("resize", _)), r.inline && (o.value = !0);
    }), Oo(() => {
      if (!r.inline) {
        const ye = x(y.value);
        ye && ye.removeEventListener("scroll", f), window.removeEventListener("resize", _);
      }
    });
    const j = Mt(a, "all", r.presetRanges), R = Mt(a, "input");
    dt(
      [l, u],
      () => {
        C(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: H, menuPosition: ne, setMenuPosition: Q, setInitialPosition: oe, getScrollableParent: x } = Im(
      d,
      p,
      n,
      r
    ), {
      inputValue: O,
      internalModelValue: D,
      parseExternalModelValue: C,
      emitModelValue: q,
      formatInputValue: Z,
      checkBeforeEmit: ae
    } = Rm(n, r, b), K = k(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), Y = k(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), i = k(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), f = () => {
      o.value && (r.closeOnScroll ? re() : Q());
    }, _ = () => {
      o.value && Q();
    }, w = () => {
      !r.disabled && !r.readonly && (oe(), o.value = !0, St().then(() => {
        Q(), o.value && n("open");
      }), o.value || be(), C(r.modelValue));
    }, I = () => {
      O.value = "", be(), n("update:model-value", null), n("cleared"), re();
    }, L = () => {
      const ye = D.value;
      return !ye || !Array.isArray(ye) && B(ye) ? !0 : Array.isArray(ye) ? ye.length === 2 && B(ye[0]) && B(ye[1]) ? !0 : B(ye[0]) : !1;
    }, V = () => {
      ae() && L() ? (q(), re()) : n("invalid-select", D.value);
    }, $ = (ye) => {
      h(), q(), r.closeOnAutoApply && !ye && re();
    }, h = () => {
      p.value && r.textInput && p.value.setParsedDate(D.value);
    }, E = (ye = !1) => {
      r.autoApply && U(D.value) && L() && (r.range && Array.isArray(D.value) ? (r.partialRange || D.value.length === 2) && $(ye) : $(ye));
    }, be = () => {
      r.textInput || (D.value = null);
    }, re = () => {
      r.inline || (o.value && (o.value = !1, c(!1), g(!1), P(), n("closed"), oe(), O.value && C(l.value)), be(), p.value && p.value.focusInput());
    }, fe = (ye, Se) => {
      if (!ye) {
        D.value = null;
        return;
      }
      D.value = ye, Se && (V(), n("text-submit"));
    }, Me = () => {
      r.autoApply && U(D.value) && q(), h();
    }, at = () => o.value ? re() : w(), pe = (ye) => {
      D.value = ye;
    }, it = k(() => r.textInput && G.value.textInputOptions.format), tt = () => {
      it.value && (b.value = !0, Z()), n("focus");
    }, Fe = () => {
      it.value && (b.value = !1, Z()), n("blur");
    }, jt = (ye) => {
      d.value && d.value.updateMonthYear(0, {
        month: mi(ye.month),
        year: mi(ye.year)
      });
    };
    return Ev(
      d,
      p,
      r.onClickOutside ? () => r.onClickOutside(L) : re
    ), t({
      closeMenu: re,
      selectDate: V,
      clearValue: I,
      openMenu: w,
      onScroll: f,
      formatInputValue: Z,
      // exposed for testing purposes
      updateInternalModelValue: pe,
      // modify internal modelValue
      setMonthYear: jt
    }), (ye, Se) => (m(), S("div", {
      class: de(s(K)),
      ref_key: "pickerWrapperRef",
      ref: y
    }, [
      we(Wm, He({
        ref_key: "inputRef",
        ref: p,
        "is-menu-open": o.value,
        "input-value": s(O),
        "onUpdate:inputValue": Se[0] || (Se[0] = (Oe) => Le(O) ? O.value = Oe : null)
      }, ye.$props, {
        onClear: I,
        onOpen: w,
        onSetInputDate: fe,
        onSetEmptyDate: s(q),
        onSelectDate: V,
        onToggle: at,
        onClose: re,
        onFocus: tt,
        onBlur: Fe
      }), rt({ _: 2 }, [
        De(s(R), (Oe, Tt) => ({
          name: Oe,
          fn: X((Dt) => [
            z(ye.$slots, Oe, Ge(ct(Dt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (m(), te(bi(ye.teleport ? ru : "div"), Ge(He({ key: 0 }, s(i))), {
        default: X(() => [
          o.value ? (m(), te(Iv, He({
            key: 0,
            ref_key: "dpMenuRef",
            ref: d,
            class: s(Y),
            style: s(ne),
            "open-on-top": s(H)
          }, ye.$props, {
            "internal-model-value": s(D),
            "onUpdate:internalModelValue": Se[1] || (Se[1] = (Oe) => Le(D) ? D.value = Oe : null),
            onClosePicker: re,
            onSelectDate: V,
            onAutoApply: E,
            onTimeUpdate: Me,
            onFlowStep: Se[2] || (Se[2] = (Oe) => ye.$emit("flow-step", Oe)),
            onUpdateMonthYear: Se[3] || (Se[3] = (Oe) => ye.$emit("update-month-year", Oe)),
            onInvalidSelect: Se[4] || (Se[4] = (Oe) => ye.$emit("invalid-select", s(D))),
            onInvalidFixedRange: Se[5] || (Se[5] = (Oe) => ye.$emit("invalid-fixed-range", Oe)),
            onRecalculatePosition: s(Q),
            onTooltipOpen: Se[6] || (Se[6] = (Oe) => ye.$emit("tooltip-open", Oe)),
            onTooltipClose: Se[7] || (Se[7] = (Oe) => ye.$emit("tooltip-close", Oe)),
            onTimePickerOpen: Se[8] || (Se[8] = (Oe) => ye.$emit("time-picker-open", Oe))
          }), rt({ _: 2 }, [
            De(s(j), (Oe, Tt) => ({
              name: Oe,
              fn: X((Dt) => [
                z(ye.$slots, Oe, Ge(ct({ ...Dt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : T("", !0)
        ]),
        _: 3
      }, 16)) : T("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ (() => {
  const e = Yv;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Vv).forEach(([e, t]) => {
  e !== "default" && (Vo[e] = t);
});
const Uv = { class: "custom-date-picker__container" }, Wv = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], Fv = ["onClick"], Hv = { class: "custom-date-picker__icon" }, zv = {
  key: 0,
  class: "custom-date-picker__error"
}, Lv = /* @__PURE__ */ me({
  __name: "CustomDatePicker",
  props: {
    modelValue: {
      default: null,
      type: [Array, Date]
    },
    range: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    placeholder: {
      default: "",
      type: String
    },
    maxDate: {
      default: "",
      type: [String, Date]
    },
    minDate: {
      default: "",
      type: [String, Date]
    },
    errorMessage: {
      default: "",
      type: String
    },
    outlined: {
      type: Boolean
    },
    dark: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = W(!1), a = W(null), o = k({
      get() {
        return n.modelValue;
      },
      set(g) {
        t("update:model-value", g);
      }
    }), l = k(() => n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = k(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), d = k(() => ({
      "custom-date-picker__input-container": !0,
      "custom-date-picker__input-container--dark": n.dark,
      "custom-date-picker__input-container--disabled": n.disabled,
      "custom-date-picker__input-container--outlined": n.outlined,
      "custom-date-picker__input-container--error": !!n.errorMessage,
      "custom-date-picker__input-container--opened": r.value || u.value
    })), p = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), b = () => {
      a.value && a.value.openMenu();
    }, y = () => {
      r.value = !0;
    }, c = () => {
      r.value = !1;
    };
    return (g, P) => (m(), S("div", Uv, [
      we(s(Vo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: s(o),
        "onUpdate:modelValue": P[1] || (P[1] = (B) => Le(o) ? o.value = B : null),
        "auto-apply": "",
        range: e.range,
        locale: "es-CL",
        "hide-input-icon": "",
        format: s(l),
        clearable: !1,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        disabled: e.disabled,
        readonly: e.readonly,
        "enable-time-picker": !1,
        class: "custom-date-picker__picker",
        onOpen: y,
        onClosed: c
      }, {
        "dp-input": X(({ value: B, onClear: U, onInput: G, onEnter: j }) => [
          F("div", {
            class: de(s(d))
          }, [
            F("input", {
              readonly: "",
              type: "text",
              value: B,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "custom-date-picker__input",
              onClick: P[0] || (P[0] = je(() => {
              }, ["stop"])),
              onInput: G,
              onFocus: je(b, ["stop"]),
              onKeydown: he(j, ["enter"])
            }, null, 40, Wv),
            F("div", {
              class: "custom-date-picker__clear",
              onClick: je(U, ["stop"])
            }, [
              B && !e.readonly && !e.disabled ? (m(), te(Ye, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fas-circle-xmark"
              })) : T("", !0)
            ], 8, Fv),
            F("div", Hv, [
              e.disabled ? T("", !0) : (m(), te(Ye, {
                key: 0,
                size: "1rem",
                color: s(p),
                name: "far-calendar-days"
              }, null, 8, ["color"]))
            ])
          ], 2)
        ]),
        "arrow-right": X(() => [
          we(Ye, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fas-circle-chevron-right"
          })
        ]),
        "arrow-left": X(() => [
          we(Ye, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fas-circle-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly"]),
      e.errorMessage ? (m(), S("div", zv, ge(e.errorMessage), 1)) : T("", !0)
    ]));
  }
});
const Uo = /* @__PURE__ */ Ce(Lv, [["__scopeId", "data-v-4994f401"]]), eu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, jv = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), eu(e, t.split("."), n)), qv = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return jv(e, t, n);
  if (Array.isArray(t))
    return eu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, Gv = () => ({
  getPropertyFromItem: qv
}), Qv = ["onMousedown"], Zv = ["value", "placeholder", "onKeydown"], Kv = ["onClick"], Xv = { class: "custom-select__icon" }, Jv = {
  key: 0,
  class: "custom-select__search-container"
}, eh = ["onClick"], th = {
  key: 0,
  class: "custom-select__error"
}, nh = /* @__PURE__ */ me({
  __name: "CustomSelect",
  props: {
    errorMessage: {
      default: "",
      type: String
    },
    placeholder: {
      type: String,
      required: !0
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemTitle: {
      type: String,
      default: "title"
    },
    returnObject: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean
    },
    textMultiple: {
      default: "",
      type: String
    },
    items: {
      required: !0,
      type: Array
    },
    textTransform: {
      default: "initial",
      type: String
    },
    multiple: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    modelValue: {
      default: null,
      type: [String, Number, Object, Array]
    },
    outlined: {
      type: Boolean
    },
    searchable: {
      type: Boolean
    },
    dark: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    We((_) => ({
      "74a2d29b": e.textTransform,
      e75da39e: a.value,
      "045e62aa": o.value,
      "863458bc": l.value
    }));
    const { getPropertyFromItem: r } = Gv(), a = W(""), o = W(""), l = W(""), u = W(""), d = W(!1), p = W(!1), b = W(!1), y = W(null), c = W(null), g = W(null), P = k({
      get() {
        return n.modelValue;
      },
      set(_) {
        t("update:model-value", _);
      }
    }), B = k(
      () => j.value && n.clearable && !n.readonly && !n.disabled
    ), U = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), G = k(() => !n.searchable || !u.value ? n.items : n.items.filter((_) => {
      const w = u.value.trim().toLowerCase();
      return w ? ne(_).toLowerCase().includes(w) : !0;
    })), j = k(() => Array.isArray(P.value) ? P.value.length > 0 : !!P.value), R = k(() => ({
      "custom-select__text-container": !0,
      "custom-select__text-container--dark": n.dark,
      "custom-select__text-container--opened": d.value,
      "custom-select__text-container--active": j.value,
      "custom-select__text-container--disabled": n.disabled,
      "custom-select__text-container--outlined": n.outlined,
      "custom-select__text-container--error": !!n.errorMessage
    })), H = k(() => {
      var _;
      if (P.value)
        if (Array.isArray(P.value)) {
          if (P.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(P.value, n.itemTitle, P.value);
          {
            const w = (_ = n.items) == null ? void 0 : _.find((I) => {
              const L = r(I, n.itemValue, I), V = r(P.value, n.itemValue, P.value);
              return L === V;
            });
            return r(w, n.itemTitle, w);
          }
        }
      return "";
    }), ne = (_) => r(_, n.itemTitle, _), Q = () => {
      p.value = !0;
    }, oe = () => {
      p.value = !1;
    }, x = (_) => ({
      "custom-select__menu-item": !0,
      "custom-select__menu-item--selected": i(_)
    }), O = async () => {
      await St();
      const _ = c.value, w = g.value;
      if (!_ || !w)
        return;
      const I = _.getBoundingClientRect(), L = w.getBoundingClientRect();
      o.value = `${I.left}px`, l.value = `${I.width}px`;
      const V = I.top + I.height + L.height, $ = window.innerHeight, h = I.top + I.height - (n.errorMessage ? 18 : 0);
      if (V > $) {
        const E = V - $;
        a.value = `${h - E - 16}px`;
      } else
        a.value = `${h}px`;
    }, D = () => {
      n.disabled || n.readonly || d.value || (d.value = !0, O(), b.value = !0, document.addEventListener("click", ae));
    }, C = () => {
      d.value = !1, p.value = !1, b.value = !1, document.removeEventListener("click", ae);
    }, q = () => {
      p.value || C();
    }, Z = () => {
      d.value && C();
    }, ae = (_) => {
      !c.value || !_.target || c.value.contains(_.target) || C();
    }, K = () => {
      n.disabled || n.readonly || (d.value ? (C(), y.value && y.value.focus()) : (D(), y.value && y.value.blur()));
    }, Y = (_) => {
      const w = r(_, n.itemValue, _);
      if (n.multiple && Array.isArray(P.value)) {
        const I = P.value.slice(), L = n.returnObject ? I.findIndex((V) => r(V, n.itemValue, V) === w) : I.indexOf(w);
        L >= 0 ? I.splice(L, 1) : I.push(n.returnObject ? _ : w), P.value = I;
      } else
        P.value = n.returnObject ? _ : w, C();
    }, i = (_) => {
      if (n.multiple && Array.isArray(P.value))
        return P.value.some((L) => {
          const V = r(L, n.itemValue, L), $ = r(_, n.itemValue, _);
          return V === $;
        });
      const w = r(P.value, n.itemValue, P.value), I = r(_, n.itemValue, _);
      return w === I;
    }, f = () => {
      Array.isArray(P.value) ? P.value = [] : P.value = null;
    };
    return (_, w) => (m(), S("div", {
      ref_key: "container",
      ref: c,
      class: "custom-select__container",
      onMouseenter: Q,
      onMouseleave: oe
    }, [
      F("div", {
        class: de(s(R)),
        onMousedown: je(K, ["stop"])
      }, [
        F("input", {
          ref_key: "input",
          ref: y,
          readonly: "",
          value: s(H),
          placeholder: e.placeholder,
          class: "custom-select__text",
          onFocus: D,
          onBlur: q,
          onKeydown: he(Z, ["tab"])
        }, null, 40, Zv),
        F("div", {
          class: "custom-select__clear",
          onMousedown: w[0] || (w[0] = je(() => {
          }, ["stop"])),
          onClick: je(f, ["stop"])
        }, [
          s(B) ? (m(), te(Ye, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fas-circle-xmark"
          })) : T("", !0)
        ], 40, Kv),
        F("div", Xv, [
          we(Ye, {
            size: "1rem",
            color: s(U),
            name: "fas-caret-down"
          }, null, 8, ["color"])
        ])
      ], 42, Qv),
      we(kt, null, {
        default: X(() => [
          d.value ? (m(), S("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: g,
            class: "custom-select__menu"
          }, [
            e.searchable ? (m(), S("div", Jv, [
              It(F("input", {
                "onUpdate:modelValue": w[1] || (w[1] = (I) => u.value = I),
                type: "text",
                placeholder: "Buscar",
                class: "custom-select__search",
                onClick: w[2] || (w[2] = je(() => {
                }, ["stop"]))
              }, null, 512), [
                [iu, u.value]
              ]),
              we(Ye, {
                size: "1rem",
                color: "acento-principal",
                name: "fas-magnifying-glass"
              })
            ])) : T("", !0),
            (m(!0), S(ve, null, De(s(G), (I, L) => (m(), S("div", {
              key: `item-${L}`,
              class: de(x(I)),
              onClick: je((V) => Y(I), ["stop"])
            }, [
              e.multiple ? (m(), te(wi, {
                key: 0,
                "model-value": i(I)
              }, null, 8, ["model-value"])) : T("", !0),
              Ue(" " + ge(ne(I)), 1)
            ], 10, eh))), 128))
          ], 512)) : T("", !0)
        ]),
        _: 1
      }),
      e.errorMessage ? (m(), S("div", th, ge(e.errorMessage), 1)) : T("", !0)
    ], 544));
  }
});
const Wo = /* @__PURE__ */ Ce(nh, [["__scopeId", "data-v-fa13455e"]]), rh = { class: "custom-text-field__container" }, ah = ["type", "disabled", "readonly", "placeholder"], oh = {
  key: 0,
  class: "custom-text-field__error"
}, lh = /* @__PURE__ */ me({
  __name: "CustomTextField",
  props: {
    placeholder: {
      type: String,
      required: !0
    },
    modelValue: {
      default: "",
      type: [String, Number]
    },
    clearable: {
      type: Boolean
    },
    errorMessage: {
      default: "",
      type: String
    },
    disabled: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    type: {
      default: "text",
      type: String
    },
    dark: {
      type: Boolean
    }
  },
  emits: ["update:model-value", "keydown", "keyup", "input", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = e;
    We((U) => ({
      "17b8178e": s(u),
      "351fc57a": s(l)
    }));
    const r = Et(), a = W(!1), o = k({
      get() {
        return n.modelValue;
      },
      set(U) {
        n.disabled || n.readonly || t("update:model-value", U);
      }
    }), l = k(() => {
      let U = "1fr";
      return n.clearable && (U += " 1rem"), p() && (U += " 1rem"), U;
    }), u = k(() => n.clearable || p() ? "0.75rem" : 0), d = k(() => ({
      "custom-text-field__input-container": !0,
      "custom-text-field__input-container--dark": n.dark,
      "custom-text-field__input-container--outlined": n.outlined,
      "custom-text-field__input-container--disabled": n.disabled,
      "custom-text-field__input-container--error": !!n.errorMessage,
      "custom-text-field__input-container--focused": a.value || !!o.value
    })), p = () => !!r.append, b = () => {
      o.value && (o.value = "");
    }, y = (U) => {
      n.disabled || n.readonly || (a.value = !0, t("focus", U));
    }, c = (U) => {
      n.disabled || n.readonly || (a.value = !1, t("blur", U));
    }, g = (U) => {
      n.disabled || n.readonly || t("input", U);
    }, P = (U) => {
      n.disabled || n.readonly || t("keyup", U);
    }, B = (U) => {
      n.disabled || n.readonly || t("keydown", U);
    };
    return (U, G) => (m(), S("div", rh, [
      F("div", {
        class: de(s(d))
      }, [
        It(F("input", {
          "onUpdate:modelValue": G[0] || (G[0] = (j) => Le(o) ? o.value = j : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "custom-text-field__input",
          onBlur: c,
          onFocus: y,
          onInput: g,
          onKeyup: P,
          onKeydown: B
        }, null, 40, ah), [
          [uu, s(o)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (m(), S("div", {
          key: 0,
          class: "custom-text-field__button",
          onClick: b
        }, [
          s(o) ? (m(), te(Ye, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fas-circle-xmark"
          })) : T("", !0)
        ])) : T("", !0),
        p() ? z(U.$slots, "append", { key: 1 }, void 0, !0) : T("", !0)
      ], 2),
      e.errorMessage ? (m(), S("div", oh, ge(e.errorMessage), 1)) : T("", !0)
    ]));
  }
});
const Fo = /* @__PURE__ */ Ce(lh, [["__scopeId", "data-v-1ae5f861"]]), ih = (e, t) => {
  const n = W(null), r = W(1), a = W("asc"), o = k(() => {
    const R = e.value.slice();
    return n.value ? R.sort((H, ne) => {
      if (!n.value)
        return 0;
      const Q = g(H, n.value.value), oe = g(ne, n.value.value);
      let x = Q > oe ? 1 : -1;
      return n.value.sort && (x = n.value.sort(Q, oe)), a.value === "asc" ? x : x * -1;
    }) : R;
  }), l = k(() => Math.ceil(e.value.length / t.value)), u = k(() => o.value.slice(
    (r.value - 1) * t.value,
    r.value * t.value
  )), d = k(() => a.value), p = () => {
    r.value < l.value && r.value++;
  }, b = () => {
    r.value > 1 && r.value--;
  }, y = (R) => R.id ?? Object.values(R)[0], c = (R, H) => {
    const ne = H.value;
    return `${y(R)}.${ne}`;
  }, g = (R, H) => R[H] ?? "";
  return {
    // Computed
    pageCount: l,
    currentPage: r,
    itemsCurrentPage: u,
    // Methods
    setItems: (R) => {
      e.value = R;
    },
    nextPage: p,
    setSortBy: (R) => {
      var H;
      r.value = 1, ((H = n.value) == null ? void 0 : H.value) === R.value ? a.value === "asc" ? a.value = "desc" : (n.value = null, a.value = "asc") : (n.value = R, a.value = "asc");
    },
    getRowKey: y,
    getCellKey: c,
    isSortedBy: (R) => {
      var H;
      return ((H = n.value) == null ? void 0 : H.value) === R;
    },
    getSortOrder: d,
    getCellValue: g,
    previousPage: b,
    setCurrentPage: (R) => {
      r.value = R;
    },
    setItemsPerPage: (R) => {
      t.value = R;
    }
  };
}, uh = { class: "icon-button__tooltip-container" }, sh = {
  key: 0,
  class: "icon-button__tooltip"
}, ch = /* @__PURE__ */ me({
  __name: "IconButton",
  props: {
    color: {
      default: "black",
      type: String
    },
    icon: {
      type: String,
      required: !0
    },
    size: {
      default: "20px",
      type: String
    },
    disabled: {
      type: Boolean
    },
    backgroundColor: {
      default: "",
      type: String
    },
    containerSize: {
      default: "",
      type: String
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((b) => ({
      "723538e9": e.containerSize,
      "22507e62": s(l)
    }));
    const r = Et(), a = ht(), o = k(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), l = k(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = k(
      () => n.disabled && !n.backgroundColor ? "neutro-4" : n.color
    ), d = () => !!r.default, p = (b) => {
      t("click", b);
    };
    return (b, y) => (m(), S("div", uh, [
      F("div", {
        class: de(s(o)),
        onClick: p
      }, [
        e.icon.startsWith("fa") ? (m(), te(Ye, {
          key: 0,
          name: e.icon,
          size: e.size,
          color: s(u)
        }, null, 8, ["name", "size", "color"])) : (m(), te(rn, {
          key: 1,
          src: e.icon,
          size: e.size,
          color: s(u)
        }, null, 8, ["src", "size", "color"]))
      ], 2),
      d() ? (m(), S("div", sh, [
        z(b.$slots, "default", {}, void 0, !0)
      ])) : T("", !0)
    ]));
  }
});
const ko = /* @__PURE__ */ Ce(ch, [["__scopeId", "data-v-c0a6c63a"]]), fh = { class: "data-table__container" }, dh = {
  class: "data-table__table",
  "aria-describedby": "Reutility"
}, ph = { class: "data-table__head" }, yh = ["onClick"], mh = { class: "data-table__header-text" }, vh = { class: "data-table__body" }, hh = {
  key: 0,
  class: "data-table__row--empty"
}, gh = {
  key: 0,
  class: "data-table__footer"
}, _h = { class: "data-table__footer-buttons" }, bh = ["onClick"], wh = /* @__PURE__ */ me({
  __name: "DataTable",
  props: {
    items: {
      required: !0,
      type: Array
    },
    headers: {
      required: !0,
      type: Array
    },
    itemsPerPage: {
      default: 10,
      type: Number
    },
    height: {
      default: "100%",
      type: String
    },
    gridTemplateColumns: {
      default: "",
      type: String
    },
    noDataText: {
      type: String,
      default: "No hay datos registrados"
    },
    selected: {
      default: "",
      type: String
    },
    compareSelectedWith: {
      type: String,
      default: "id"
    },
    disabledKey: {
      type: String,
      default: ""
    },
    disabledValue: {
      type: String,
      default: ""
    },
    hideNoDataIcon: {
      type: Boolean
    },
    noDataIcon: {
      type: String,
      default: "far-face-frown-slight"
    }
  },
  setup(e) {
    const t = e;
    We((x) => ({
      e0761786: e.height,
      "81b6e2f2": e.gridTemplateColumns
    }));
    const n = k(() => t.items), r = k(() => t.itemsPerPage), a = Et(), o = ih(n, r), l = o.pageCount, u = o.currentPage, d = o.itemsCurrentPage, p = k(() => {
      const x = u.value;
      let O;
      return x === 1 ? O = [x, x + 1, x + 2] : x === l.value ? O = [x - 2, x - 1, x] : O = [x - 1, x, x + 1], O.filter((D) => D > 0 && D <= l.value);
    }), b = o.nextPage, y = o.getRowKey, c = o.getCellKey, g = o.getCellValue, P = o.previousPage, B = o.setCurrentPage, U = (x) => !!a[x], G = (x) => o.isSortedBy(x) ? o.getSortOrder.value === "asc" ? "fad-sort-down" : "fad-sort-up" : "fas-sort", j = (x) => {
      x.sortable !== !1 && o.setSortBy(x);
    }, R = (x) => ({
      "data-table__footer-page": !0,
      "data-table__footer-page--selected": x === u.value
    }), H = (x) => ({
      "data-table__sort-icon": !0,
      "data-table__sort-icon--active": o.isSortedBy(x)
    }), ne = (x) => ({
      "data-table__th": !0,
      "data-table__th--sortable": x.sortable !== !1
    }), Q = (x) => ({
      "data-table__row": !0,
      "data-table__row--selected": x[t.compareSelectedWith] === t.selected,
      "data-table__row--disabled": t.disabledKey && t.disabledValue && x[t.disabledKey] === t.disabledValue
    }), oe = (x) => o.isSortedBy(x) ? "acento-secundario" : "neutro-3";
    return (x, O) => (m(), S("div", fh, [
      F("table", dh, [
        F("thead", ph, [
          F("tr", null, [
            (m(!0), S(ve, null, De(e.headers, (D) => (m(), S("th", {
              key: D.value,
              class: de(ne(D)),
              onClick: (C) => j(D)
            }, [
              F("div", mh, ge(D.text), 1),
              D.sortable !== !1 ? (m(), S("div", {
                key: 0,
                class: de(H(D.value))
              }, [
                we(Ye, {
                  name: G(D.value),
                  color: oe(D.value)
                }, null, 8, ["name", "color"])
              ], 2)) : T("", !0)
            ], 10, yh))), 128))
          ])
        ]),
        F("tbody", vh, [
          e.items.length === 0 ? (m(), S("tr", hh, [
            e.hideNoDataIcon ? T("", !0) : (m(), te(Ye, {
              key: 0,
              size: "5rem",
              color: "neutro-4",
              name: e.noDataIcon
            }, null, 8, ["name"])),
            Ue(" " + ge(e.noDataText), 1)
          ])) : T("", !0),
          (m(!0), S(ve, null, De(s(d), (D) => (m(), S("tr", {
            key: s(y)(D),
            class: de(Q(D))
          }, [
            (m(!0), S(ve, null, De(e.headers, (C) => (m(), S("td", {
              key: s(c)(D, C)
            }, [
              U(C.value) ? z(x.$slots, C.value, {
                key: 0,
                item: D
              }, void 0, !0) : (m(), S(ve, { key: 1 }, [
                Ue(ge(s(g)(D, C.value)), 1)
              ], 64))
            ]))), 128))
          ], 2))), 128))
        ])
      ]),
      s(l) > 1 ? (m(), S("div", gh, [
        we(ko, {
          size: "1rem",
          icon: "fas-arrow-left",
          color: "acento-principal",
          disabled: s(u) === 1,
          onClick: s(P)
        }, null, 8, ["disabled", "onClick"]),
        F("div", _h, [
          (m(!0), S(ve, null, De(s(p), (D) => (m(), S("button", {
            key: `page-${D}`,
            class: de(R(D)),
            onClick: (C) => s(B)(D)
          }, ge(D), 11, bh))), 128))
        ]),
        we(ko, {
          size: "1rem",
          icon: "fas-arrow-right",
          color: "acento-principal",
          disabled: s(u) === s(l),
          onClick: s(b)
        }, null, 8, ["disabled", "onClick"])
      ])) : T("", !0)
    ]));
  }
});
const kh = /* @__PURE__ */ Ce(wh, [["__scopeId", "data-v-825e8152"]]), Oh = /* @__PURE__ */ me({
  __name: "DataTableItem",
  props: {
    disabled: {
      type: Boolean
    },
    selected: {
      type: Boolean
    },
    textTransform: {
      default: "",
      type: String
    },
    textAlign: {
      default: "center",
      type: String
    }
  },
  setup(e) {
    const t = e, n = k(() => t.disabled ? "neutro-4" : t.selected ? "acento-principal" : "secundario"), r = k(() => t.selected ? 700 : 400);
    return (a, o) => (m(), te(Ht, {
      "font-size": "1rem",
      color: s(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": s(r),
      "text-transform": e.textTransform
    }, {
      default: X(() => [
        z(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), $h = { class: "filter-date-picker__container" }, Sh = { class: "filter-date-picker__label" }, xh = /* @__PURE__ */ me({
  __name: "FilterDatePicker",
  props: {
    label: {
      type: String,
      required: !0
    },
    placeholder: {
      default: "",
      type: String
    },
    modelValue: {
      default: null,
      type: [Array, Date]
    },
    range: {
      type: Boolean
    },
    maxDate: {
      default: "",
      type: [String, Date]
    },
    minDate: {
      default: "",
      type: [String, Date]
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (m(), S("div", $h, [
      F("div", Sh, ge(e.label), 1),
      we(Uo, {
        modelValue: s(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Le(r) ? r.value = l : null),
        range: e.range,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        placeholder: e.placeholder
      }, null, 8, ["modelValue", "range", "max-date", "min-date", "placeholder"])
    ]));
  }
});
const Ph = /* @__PURE__ */ Ce(xh, [["__scopeId", "data-v-279f171d"]]), Th = { class: "filter-select__container" }, Dh = { class: "filter-select__label" }, Ch = /* @__PURE__ */ me({
  __name: "FilterSelect",
  props: {
    label: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      required: !0
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemTitle: {
      type: String,
      default: "title"
    },
    returnObject: {
      type: Boolean,
      default: !1
    },
    textMultiple: {
      default: "",
      type: String
    },
    items: {
      required: !0,
      type: Array
    },
    textTransform: {
      default: "initial",
      type: String
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      default: null,
      type: [String, Number, Object, Array]
    },
    searchable: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (m(), S("div", Th, [
      F("div", Dh, ge(e.label), 1),
      we(Wo, {
        modelValue: s(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Le(r) ? r.value = l : null),
        clearable: "",
        items: e.items,
        multiple: e.multiple,
        "item-title": e.itemTitle,
        "item-value": e.itemValue,
        searchable: e.searchable,
        placeholder: e.placeholder,
        "text-multiple": e.textMultiple,
        "return-object": e.returnObject,
        "text-transform": e.textTransform
      }, null, 8, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform"])
    ]));
  }
});
const Rh = /* @__PURE__ */ Ce(Ch, [["__scopeId", "data-v-feb1008c"]]), Mh = { class: "flex__container" }, Ih = /* @__PURE__ */ me({
  __name: "FlexContainer",
  props: {
    padding: {
      default: 0,
      type: [String, Number]
    },
    margin: {
      default: 0,
      type: [String, Number]
    },
    width: {
      default: "",
      type: String
    },
    height: {
      default: "",
      type: String
    },
    alignItems: {
      default: "",
      type: String
    },
    alignContent: {
      default: "",
      type: String
    },
    justifyItems: {
      default: "",
      type: String
    },
    flexDirection: {
      default: "row",
      type: String
    },
    justifyContent: {
      default: "",
      type: String
    }
  },
  setup(e) {
    return We((t) => ({
      "47ff655d": e.width,
      b31b7e12: e.margin,
      c3c36720: e.height,
      "747c2c30": e.padding,
      "07962af8": e.alignItems,
      "7d38963d": e.alignContent,
      "53f50799": e.justifyItems,
      "5e57c01d": e.flexDirection,
      "35347bdc": e.justifyContent
    })), (t, n) => (m(), S("div", Mh, [
      z(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const tu = /* @__PURE__ */ Ce(Ih, [["__scopeId", "data-v-eaa92100"]]), Nh = { class: "form-date-picker__container" }, Bh = { class: "form-date-picker__label" }, Ah = /* @__PURE__ */ me({
  __name: "FormDatePicker",
  props: {
    label: {
      type: String,
      required: !0
    },
    errorMessage: {
      default: "",
      type: String
    },
    placeholder: {
      type: String,
      required: !0
    },
    clearable: {
      type: Boolean
    },
    range: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    modelValue: {
      default: null,
      type: [Array, Date]
    },
    outlined: {
      type: Boolean
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    },
    maxDate: {
      default: "",
      type: [String, Date]
    },
    minDate: {
      default: "",
      type: [String, Date]
    },
    dark: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    We((o) => ({
      "66092ef2": e.gridTemplateColumns,
      "7126c6e5": s(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, l) => (m(), S("div", Nh, [
      F("div", Bh, ge(e.label), 1),
      we(Uo, {
        modelValue: s(r),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Le(r) ? r.value = u : null),
        dark: e.dark,
        range: e.range,
        "min-date": e.minDate,
        "max-date": e.maxDate,
        disabled: e.disabled,
        outlined: e.outlined,
        readonly: e.readonly,
        placeholder: e.placeholder,
        "error-message": e.errorMessage
      }, null, 8, ["modelValue", "dark", "range", "min-date", "max-date", "disabled", "outlined", "readonly", "placeholder", "error-message"])
    ]));
  }
});
const Eh = /* @__PURE__ */ Ce(Ah, [["__scopeId", "data-v-9a009089"]]), Yh = { class: "form-select__container" }, Vh = { class: "form-select__label" }, Uh = /* @__PURE__ */ me({
  __name: "FormSelect",
  props: {
    label: {
      type: String,
      required: !0
    },
    errorMessage: {
      default: "",
      type: String
    },
    placeholder: {
      type: String,
      required: !0
    },
    itemValue: {
      type: String,
      default: "value"
    },
    itemTitle: {
      type: String,
      default: "title"
    },
    returnObject: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean
    },
    textMultiple: {
      default: "",
      type: String
    },
    items: {
      required: !0,
      type: Array
    },
    textTransform: {
      default: "initial",
      type: String
    },
    multiple: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    modelValue: {
      default: null,
      type: [String, Number, Object, Array]
    },
    outlined: {
      type: Boolean
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    },
    searchable: {
      type: Boolean
    },
    dark: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    We((o) => ({
      74659955: e.gridTemplateColumns,
      "6471d657": s(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, l) => (m(), S("div", Yh, [
      F("div", Vh, ge(e.label), 1),
      we(Wo, {
        modelValue: s(r),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Le(r) ? r.value = u : null),
        dark: e.dark,
        items: e.items,
        readonly: e.readonly,
        outlined: e.outlined,
        disabled: e.disabled,
        multiple: e.multiple,
        clearable: e.clearable,
        "item-value": e.itemValue,
        "item-title": e.itemTitle,
        searchable: e.searchable,
        placeholder: e.placeholder,
        "error-message": e.errorMessage,
        "return-object": e.returnObject,
        "text-multiple": e.textMultiple,
        "text-transform": e.textTransform
      }, null, 8, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform"])
    ]));
  }
});
const Wh = /* @__PURE__ */ Ce(Uh, [["__scopeId", "data-v-c5074f18"]]), Fh = { class: "form-text-field__container" }, Hh = { class: "form-text-field__label" }, zh = /* @__PURE__ */ me({
  __name: "FormTextField",
  props: {
    modelValue: {
      default: "",
      type: [String, Number]
    },
    label: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      required: !0
    },
    errorMessage: {
      default: "",
      type: String
    },
    readonly: {
      type: Boolean
    },
    dark: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    clearable: {
      type: Boolean
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    },
    type: {
      default: "text",
      type: String
    }
  },
  emits: ["update:model-value", "keydown", "keyup", "input", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = e;
    We((c) => ({
      "18db180f": e.gridTemplateColumns,
      fd3c0346: s(o)
    }));
    const r = Et(), a = k({
      get() {
        return n.modelValue;
      },
      set(c) {
        t("update:model-value", c);
      }
    }), o = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), l = () => !!r.append, u = (c) => {
      t("focus", c);
    }, d = (c) => {
      t("blur", c);
    }, p = (c) => {
      t("input", c);
    }, b = (c) => {
      t("keyup", c);
    }, y = (c) => {
      t("keydown", c);
    };
    return (c, g) => (m(), S("div", Fh, [
      F("div", Hh, ge(e.label), 1),
      we(Fo, {
        modelValue: s(a),
        "onUpdate:modelValue": g[0] || (g[0] = (P) => Le(a) ? a.value = P : null),
        type: e.type,
        dark: e.dark,
        readonly: e.readonly,
        disabled: e.disabled,
        outlined: e.outlined,
        clearable: e.clearable,
        placeholder: e.placeholder,
        "error-message": e.errorMessage,
        onBlur: d,
        onInput: p,
        onKeyup: b,
        onFocus: u,
        onKeydown: y
      }, {
        default: X(() => [
          l() ? z(c.$slots, "append", { key: 0 }, void 0, !0) : T("", !0)
        ]),
        _: 3
      }, 8, ["modelValue", "type", "dark", "readonly", "disabled", "outlined", "clearable", "placeholder", "error-message"])
    ]));
  }
});
const Lh = /* @__PURE__ */ Ce(zh, [["__scopeId", "data-v-318af843"]]), jh = {
  key: 0,
  class: "gradient-button__content"
}, qh = /* @__PURE__ */ me({
  __name: "GradientButton",
  props: {
    width: {
      default: "100%",
      type: [String, Number]
    },
    height: {
      default: "100%",
      type: [String, Number]
    },
    colorFrom: {
      default: "#000000",
      type: String
    },
    colorTo: {
      default: "#ffffff",
      type: String
    },
    textColor: {
      default: "#ffffff",
      type: String
    },
    disabled: {
      type: Boolean
    },
    icon: {
      default: "",
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((d) => ({
      c6006ce8: e.width,
      "2dab23be": e.height,
      da8c368c: s(o),
      "042a7d9c": s(a),
      "209753a3": s(r)
    }));
    const r = k(() => {
      var d;
      return (d = n.colorFrom) != null && d.startsWith("-") ? `rgb(var(--${n.colorFrom}))` : n.colorFrom;
    }), a = k(() => {
      var d;
      return (d = n.colorTo) != null && d.startsWith("-") ? `rgb(var(--${n.colorTo}))` : n.colorTo;
    }), o = k(() => {
      var d;
      return (d = n.textColor) != null && d.startsWith("-") ? `rgb(var(--${n.textColor}))` : n.textColor;
    }), l = k(() => ({
      "gradient-button__container": !0,
      "gradient-button__container--loading": n.loading,
      "gradient-button__container--disabled": n.disabled
    })), u = (d) => {
      n.disabled || t("click", d);
    };
    return (d, p) => (m(), S("div", {
      class: de(s(l)),
      onClick: u
    }, [
      e.loading ? (m(), te(Oi, {
        key: 1,
        size: "1.125rem",
        fill: "neutro-1"
      })) : (m(), S("div", jh, [
        e.icon ? (m(), te(Ye, {
          key: 0,
          size: "1rem",
          name: e.icon,
          color: e.textColor
        }, null, 8, ["name", "color"])) : T("", !0),
        z(d.$slots, "default", {}, void 0, !0)
      ]))
    ], 2));
  }
});
const Gh = /* @__PURE__ */ Ce(qh, [["__scopeId", "data-v-f6c4cd13"]]), Qh = { class: "header-tabs__container" }, Zh = ["onClick"], Kh = /* @__PURE__ */ me({
  __name: "HeaderTabs",
  props: {
    items: {
      required: !0,
      type: Array
    },
    modelValue: {
      type: Number,
      required: !0
    },
    columnGap: {
      default: "0.5rem",
      type: String
    },
    color: {
      default: "acento-principal",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    We((p) => ({
      "85c2be80": e.columnGap,
      a03e58da: s(o),
      "72c95a67": s(l)
    }));
    const r = ht(), a = k({
      get() {
        return n.modelValue;
      },
      set(p) {
        t("update:model-value", p);
      }
    }), o = k(() => r.getRealColor(n.color)), l = k(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (p) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === p
    }), d = (p) => {
      a.value = p;
    };
    return (p, b) => (m(), S("div", Qh, [
      (m(!0), S(ve, null, De(e.items, (y, c) => (m(), S("button", {
        key: `tab-${c}`,
        class: de(u(c)),
        onClick: (g) => d(c)
      }, ge(y), 11, Zh))), 128))
    ]));
  }
});
const Xh = /* @__PURE__ */ Ce(Kh, [["__scopeId", "data-v-dff7a459"]]), Jh = ["alt", "src"], e0 = /* @__PURE__ */ me({
  __name: "ImageContainer",
  props: {
    src: {
      type: String,
      required: !0
    },
    alt: {
      type: String,
      default: "Image"
    },
    objectPosition: {
      default: "",
      type: String
    },
    width: {
      default: "",
      type: String
    },
    height: {
      default: "",
      type: String
    },
    objectFit: {
      default: "",
      type: String
    },
    aspectRatio: {
      default: "",
      type: String
    },
    clickable: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((l) => ({
      "09dbc539": e.width,
      "17cde814": e.height,
      "2a04da45": e.objectFit,
      "4ad637c6": e.aspectRatio,
      "3f2c0b75": e.objectPosition
    }));
    const r = k(() => new URL(n.src, import.meta.url).href), a = k(() => ({
      image__container: !0,
      "image__container--clickable": n.clickable
    })), o = (l) => {
      t("click", l);
    };
    return (l, u) => (m(), S("img", {
      alt: e.alt,
      src: s(r),
      class: de(s(a)),
      onClick: o
    }, null, 10, Jh));
  }
});
const t0 = /* @__PURE__ */ Ce(e0, [["__scopeId", "data-v-eb6d75f4"]]), n0 = { class: "information-text__container" }, r0 = { class: "information-text__label" }, a0 = { class: "information-text__value" }, o0 = /* @__PURE__ */ me({
  __name: "InformationText",
  props: {
    label: {
      type: String,
      required: !0
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    },
    padding: {
      default: "0.75rem 0",
      type: String
    },
    textTransform: {
      default: "capitalize",
      type: String
    }
  },
  setup(e) {
    return We((t) => ({
      a5ffcb44: e.padding,
      "41c490aa": e.gridTemplateColumns,
      "7591f94c": e.textTransform
    })), (t, n) => (m(), S("div", n0, [
      F("div", r0, ge(e.label), 1),
      F("div", a0, [
        z(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const l0 = /* @__PURE__ */ Ce(o0, [["__scopeId", "data-v-6a5dc30c"]]), i0 = { class: "page-switch__tooltip-container" }, u0 = { class: "page-switch__tooltip" }, s0 = /* @__PURE__ */ me({
  __name: "PageSwitch",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    label: {
      default: "",
      type: String
    },
    tooltip: {
      default: "",
      type: String
    },
    disabled: {
      type: Boolean
    },
    activeColor: {
      default: "acento-principal",
      type: String
    },
    width: {
      default: "1.5rem",
      type: String
    },
    color: {
      default: "neutro-4",
      type: String
    },
    readonly: {
      type: Boolean
    },
    labelWeight: {
      default: 600,
      type: [Number, String]
    },
    gridTemplateColumns: {
      default: "1fr auto",
      type: String
    },
    justifyContent: {
      default: "initial",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = ht(), a = k({
      get() {
        return n.modelValue;
      },
      set(g) {
        n.readonly || t("update:model-value", g);
      }
    }), o = k(() => r.getRealColor(n.activeColor)), l = k(() => r.getRealColor(n.color)), u = k(() => n.activeColor && a.value ? o.value : l.value), d = k(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": a.value
    })), p = k(() => ({
      "justify-content": n.justifyContent,
      "pointer-events": n.disabled ? "none" : "initial",
      "grid-template-columns": n.label ? n.gridTemplateColumns : "1fr"
    })), b = k(() => ({
      width: n.width,
      "background-color": n.disabled ? "rgb(var(--neutro-4))" : u.value
    })), y = k(() => ({
      "font-weight": n.labelWeight
    })), c = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (g, P) => (m(), S("div", i0, [
      F("div", {
        style: ft(s(p)),
        class: "page-switch__container",
        onClick: c
      }, [
        e.label ? (m(), S("div", {
          key: 0,
          style: ft(s(y)),
          class: "page-switch__label"
        }, ge(e.label), 5)) : T("", !0),
        F("div", {
          style: ft(s(b)),
          class: "page-switch__switch"
        }, [
          It(F("input", {
            "onUpdate:modelValue": P[0] || (P[0] = (B) => Le(a) ? a.value = B : null),
            type: "checkbox",
            class: "page-switch__checkbox"
          }, null, 512), [
            [su, s(a)]
          ]),
          F("div", {
            class: de(s(d))
          }, null, 2)
        ], 4)
      ], 4),
      F("div", u0, ge(e.tooltip), 1)
    ]));
  }
});
const c0 = /* @__PURE__ */ Ce(s0, [["__scopeId", "data-v-ef5fc165"]]), f0 = { class: "panel-title__text" }, d0 = /* @__PURE__ */ me({
  __name: "PanelTitle",
  props: {
    closable: {
      type: Boolean
    }
  },
  emits: ["click:close"],
  setup(e, { emit: t }) {
    const n = e, r = k(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), a = () => {
      t("click:close");
    };
    return (o, l) => (m(), S("div", {
      class: de(s(r))
    }, [
      F("div", f0, [
        z(o.$slots, "default", {}, void 0, !0)
      ]),
      e.closable ? (m(), S("div", {
        key: 0,
        class: "panel-title__close",
        onClick: a
      }, [
        we(Ye, {
          size: "1.5rem",
          color: "error",
          name: "fas-xmark-circle"
        })
      ])) : T("", !0)
    ], 2));
  }
});
const p0 = /* @__PURE__ */ Ce(d0, [["__scopeId", "data-v-d95e0bb8"]]), y0 = /* @__PURE__ */ me({
  __name: "SearchTextField",
  props: {
    placeholder: {
      type: String,
      required: !0
    },
    modelValue: {
      default: "",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (m(), te(Fo, {
      modelValue: s(r),
      "onUpdate:modelValue": o[0] || (o[0] = (l) => Le(r) ? r.value = l : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: X(() => [
        we(Ye, {
          size: "1rem",
          color: "acento-principal",
          name: "fas-magnifying-glass"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder"]));
  }
}), m0 = /* @__PURE__ */ me({
  __name: "SuccessDialog",
  props: {
    icon: {
      type: String,
      required: !0
    },
    text: {
      type: String,
      required: !0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    modelValue: {
      type: Boolean,
      required: !0
    },
    subtitle: {
      default: "",
      type: String
    },
    width: {
      default: "520px",
      type: String
    }
  },
  emits: ["close", "update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    We((a) => ({
      "1728723e": e.width
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return dt(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), dt(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (m(), te(So, {
      persistent: "",
      "model-value": s(r)
    }, {
      default: X(() => [
        s(r) ? (m(), te($o, {
          key: 0,
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: X(() => [
            we(tu, { "justify-content": "center" }, {
              default: X(() => [
                e.icon.startsWith("fa") ? (m(), te(Ye, {
                  key: 0,
                  size: "5rem",
                  name: e.icon,
                  color: "acento-principal"
                }, null, 8, ["name"])) : (m(), te(rn, {
                  key: 1,
                  size: "5rem",
                  src: e.icon,
                  color: "acento-principal"
                }, null, 8, ["src"]))
              ]),
              _: 1
            }),
            we(Ht, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: X(() => [
                Ue(ge(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (m(), te(Ht, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: X(() => [
                Ue(ge(e.subtitle), 1)
              ]),
              _: 1
            })) : T("", !0)
          ]),
          _: 1
        }, 8, ["width"])) : T("", !0)
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const v0 = /* @__PURE__ */ Ce(m0, [["__scopeId", "data-v-c4ed0681"]]), g0 = (e) => {
  e.component("CheckBox", wi), e.component("ConfirmationDialog", Nu), e.component("CustomButton", ia), e.component("CustomDatePicker", Uo), e.component("CustomDialog", So), e.component("CustomSelect", Wo), e.component("CustomTextField", Fo), e.component("DataTable", kh), e.component("DataTableItem", Oh), e.component("FilterDatePicker", Ph), e.component("FilterSelect", Rh), e.component("FlexContainer", tu), e.component("FontAwesomeIcon", Ye), e.component("FormDatePicker", Eh), e.component("FormSelect", Wh), e.component("FormTextField", Lh), e.component("GradientButton", Gh), e.component("GridColumn", $o), e.component("GridRow", ki), e.component("HeaderTabs", Xh), e.component("IconButton", ko), e.component("ImageContainer", t0), e.component("InformationText", l0), e.component("PageSwitch", c0), e.component("PanelTitle", p0), e.component("SearchTextField", y0), e.component("SuccessDialog", v0), e.component("SvgIcon", rn), e.component("TextContainer", Ht);
};
export {
  g0 as componentesReutility
};
