var gu = Object.defineProperty;
var bu = (e, t, n) => t in e ? gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cn = (e, t, n) => (bu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as I, defineComponent as fe, useCssVars as xe, unref as f, onMounted as Xe, computed as k, watch as ft, openBlock as y, createElementBlock as O, createElementVNode as H, normalizeClass as ie, createVNode as be, Transition as yt, withCtx as J, createBlock as te, createCommentVNode as P, renderSlot as q, Fragment as ye, withKeys as ge, useSlots as pt, isRef as Fe, createTextVNode as Ae, toDisplayString as he, reactive as Ct, toRef as tr, onUnmounted as Do, mergeProps as je, createSlots as We, renderList as Te, normalizeProps as Qe, guardReactiveProps as mt, resolveDynamicComponent as Rl, Teleport as _u, withModifiers as Ee, normalizeStyle as St, nextTick as dt, withDirectives as xt, vShow as pn, onBeforeUpdate as wu, getCurrentScope as ku, onScopeDispose as Su, vModelText as Ml, vModelDynamic as Zo, vModelCheckbox as $u, pushScopeId as Ou, popScopeId as xu } from "vue";
const Il = I(null);
function Tu() {
  const e = document.createElement("div");
  e.classList.add("custom-tooltip--overlay"), document.body.appendChild(e), Il.value = e;
}
function Nl() {
  return {
    overlayContainer: Il,
    generateOverlayContainer: Tu
  };
}
const Je = () => {
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
}, Pu = /* @__PURE__ */ fe({
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
    xe((i) => ({
      "423dd3aa": e.size,
      "22a9259c": f(a)
    }));
    const n = Je();
    Xe(() => {
      o();
    });
    const r = I(null), a = k(() => n.getRealColor(t.color)), o = async () => {
      if (r.value)
        try {
          const i = await fetch(t.src);
          r.value.innerHTML = await i.text();
          const u = r.value.querySelector("svg");
          if (!u)
            return;
          u.setAttribute("width", t.size.toString()), u.setAttribute("height", t.size.toString());
        } catch (i) {
          console.log(i);
        }
    };
    return ft(() => t.src, o), ft(() => t.size, o), (i, u) => (y(), O("div", {
      ref_key: "svgContent",
      ref: r,
      class: "svg-icon__container"
    }, null, 512));
  }
});
const ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Rt = /* @__PURE__ */ ke(Pu, [["__scopeId", "data-v-cf89b881"]]), Cu = { class: "font-awesome-icon__container" }, Du = /* @__PURE__ */ fe({
  __name: "FigmaIcon",
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
    xe((o) => ({
      "0b42bb94": e.size,
      "745fdb28": f(a)
    }));
    const n = Je(), r = k(() => `icon-${t.name}`), a = k(() => n.getRealColor(t.color));
    return (o, i) => (y(), O("div", Cu, [
      H("em", {
        class: ie(f(r))
      }, null, 2)
    ]));
  }
});
const He = /* @__PURE__ */ ke(Du, [["__scopeId", "data-v-6fecd874"]]), Ru = {
  key: 0,
  class: "check-box__icon"
}, Bl = /* @__PURE__ */ fe({
  __name: "CheckBox",
  props: {
    boxIcon: {
      type: String,
      default: "fm-square-outlined"
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
      default: "fm-square-check",
      type: String
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
      set(p) {
        t("update:model-value", p);
      }
    }), a = k(() => ({
      "check-box__container": !0,
      "check-box__container--disabled": n.disabled
    })), o = k(() => n.disabled ? "neutro-4" : n.boxColor), i = k(() => n.disabled ? "neutro-4" : n.checkedColor), u = () => {
      n.readonly || n.disabled || (r.value = !r.value);
    };
    return (p, d) => (y(), O("div", {
      class: ie(f(a)),
      onClick: u
    }, [
      be(yt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: J(() => [
          f(r) ? (y(), O("div", Ru, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (y(), te(He, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (y(), te(Rt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["src", "size", "color"])) : P("", !0)
          ])) : P("", !0)
        ]),
        _: 1
      }),
      e.boxIcon && e.boxIcon.startsWith("fm") ? (y(), te(He, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: f(o)
      }, null, 8, ["name", "size", "color"])) : e.boxIcon ? (y(), te(Rt, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: f(o)
      }, null, 8, ["src", "size", "color"])) : P("", !0)
    ], 2));
  }
});
const Mu = { class: "grid-row__container" }, Iu = /* @__PURE__ */ fe({
  __name: "GridRow",
  props: {
    width: {
      default: "initial",
      type: [String, Number]
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    gridColumn: {
      default: "initial",
      type: [String, Number]
    },
    gridRow: {
      default: "initial",
      type: [String, Number]
    },
    padding: {
      default: "initial",
      type: [String, Number]
    },
    columnGap: {
      default: "initial",
      type: [String, Number]
    },
    gridTemplateColumns: {
      default: "initial",
      type: [String, Number]
    },
    gridAutoColumns: {
      default: "initial",
      type: String
    },
    justifyContent: {
      default: "initial",
      type: String
    },
    alignItems: {
      default: "initial",
      type: String
    },
    height: {
      default: "initial",
      type: [String, Number]
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      c6035c90: e.width,
      "2e062916": e.height,
      "5291a8fa": e.padding,
      "17e79826": e.gridRow,
      "1e4552dc": e.columnGap,
      "93727cec": e.gridColumn,
      "68f27f09": e.alignItems,
      "4ee8e7d2": e.justifyContent,
      b5ab9d0c: e.gridAutoColumns,
      d708c362: f(r),
      "854bdb62": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", Mu, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Al = /* @__PURE__ */ ke(Iu, [["__scopeId", "data-v-cd454b08"]]), Nu = { class: "grid-column__container" }, Bu = /* @__PURE__ */ fe({
  __name: "GridColumn",
  props: {
    alignContent: {
      default: "initial",
      type: String
    },
    alignItems: {
      default: "initial",
      type: String
    },
    justifyContent: {
      default: "initial",
      type: String
    },
    justifyItems: {
      default: "initial",
      type: String
    },
    width: {
      default: "initial",
      type: [String, Number]
    },
    height: {
      default: "initial",
      type: [String, Number]
    },
    margin: {
      default: "initial",
      type: [String, Number]
    },
    rowGap: {
      default: "initial",
      type: [String, Number]
    },
    padding: {
      default: "initial",
      type: [String, Number]
    },
    gridRow: {
      default: "initial",
      type: [String, Number]
    },
    gridColumn: {
      default: "initial",
      type: [String, Number]
    },
    gridTemplateRows: {
      default: "initial",
      type: [String, Number]
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    boxShadow: {
      default: "initial",
      type: String
    },
    overflow: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      "66e6ceac": e.width,
      "98e9116c": e.margin,
      a990fa7a: e.height,
      "864a6f90": e.rowGap,
      "5bcf7df5": e.padding,
      c6002ad0: e.gridRow,
      "0f9aae9e": e.overflow,
      "3d6077af": e.boxShadow,
      "1fa901d8": e.gridColumn,
      "5b568152": e.alignItems,
      "70056f0c": e.borderRadius,
      "2172f3ac": e.justifyItems,
      "4ab68250": e.alignContent,
      "4b18f565": e.justifyContent,
      "0b668b16": e.gridTemplateRows,
      "948755c6": f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", Nu, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Hr = /* @__PURE__ */ ke(Bu, [["__scopeId", "data-v-8fe59b43"]]), Au = ["width", "height"], Eu = ["fill"], Yu = /* @__PURE__ */ H("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Vu = [
  Yu
], Uu = ["fill"], Fu = /* @__PURE__ */ H("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Wu = [
  Fu
], Hu = ["fill"], Lu = /* @__PURE__ */ H("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), zu = [
  Lu
], ju = /* @__PURE__ */ fe({
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
    const t = e, n = Je(), r = k(() => n.getRealColor(t.fill));
    return (a, o) => (y(), O("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 52 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      H("circle", {
        r: "6",
        cx: "6",
        cy: "6",
        stroke: "none",
        fill: f(r)
      }, Vu, 8, Eu),
      H("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: f(r)
      }, Wu, 8, Uu),
      H("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: f(r)
      }, zu, 8, Hu)
    ], 8, Au));
  }
}), qu = ["disabled"], Gu = { class: "custom-button__text" }, Qu = /* @__PURE__ */ fe({
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
      default: "initial",
      type: String
    },
    preppendIcon: {
      default: "initial",
      type: String
    },
    justifyContent: {
      default: "center",
      type: String
    },
    justifyItems: {
      default: "initial",
      type: String
    },
    gridTemplateColumns: {
      default: "initial",
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    xe((s) => ({
      a220dde0: e.width,
      "1533971d": e.height,
      "1aeba656": f(i),
      "97fe46f4": e.justifyItems,
      efbd20ae: f(o),
      "71d00fbf": e.justifyContent,
      "74c811b9": f(v),
      "5c6daacf": f(p),
      "5774244e": f(u)
    }));
    const r = Je(), a = k(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = k(() => r.getRealColor(n.color)), i = k(() => r.getRealColor(n.contentColor)), u = k(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), p = k(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), d = k(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined
    })), v = k(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), m = (s) => {
      n.disabled || t("click", s);
    };
    return (s, g) => (y(), O("button", {
      disabled: e.disabled,
      class: ie(f(d)),
      onClick: m
    }, [
      e.preppendIcon && !e.loading ? (y(), O(ye, { key: 0 }, [
        e.preppendIcon && e.preppendIcon.startsWith("fm") ? (y(), te(He, {
          key: 0,
          size: "1rem",
          color: f(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"])) : (y(), te(Rt, {
          key: 1,
          size: "1rem",
          color: f(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : P("", !0),
      H("span", Gu, [
        e.loading ? (y(), te(ju, {
          key: 0,
          fill: f(a)
        }, null, 8, ["fill"])) : q(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (y(), O(ye, { key: 1 }, [
        e.appendIcon && e.appendIcon.startsWith("fm") ? (y(), te(He, {
          key: 0,
          size: "1rem",
          color: f(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"])) : (y(), te(Rt, {
          key: 1,
          size: "1rem",
          color: f(a),
          src: e.appendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : P("", !0)
    ], 10, qu));
  }
});
const pa = /* @__PURE__ */ ke(Qu, [["__scopeId", "data-v-aa78fcdf"]]), Zu = ["onKeydown"], Ku = /* @__PURE__ */ fe({
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
    const n = e, r = I(!1), a = I(null), o = k({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), i = k(() => ({
      "custom-dialog__container": !0,
      "custom-dialog__container--closing": r.value
    })), u = () => {
      n.persistent ? r.value = !0 : o.value = !1;
    }, p = () => {
      r.value = !1;
    }, d = () => {
      a.value && a.value.focus();
    }, v = (m) => {
      m.currentTarget === m.target && (n.persistent ? r.value = !0 : o.value = !1);
    };
    return (m, s) => (y(), te(yt, { name: "fade" }, {
      default: J(() => [
        f(o) ? (y(), O("div", {
          key: 0,
          ref_key: "container",
          ref: a,
          tabindex: "-1",
          class: ie(f(i)),
          onKeyup: p,
          onMouseover: d,
          onMouseup: p,
          onKeydown: ge(u, ["esc"]),
          onMousedown: v
        }, [
          q(m.$slots, "default", {}, void 0, !0)
        ], 42, Zu)) : P("", !0)
      ]),
      _: 3
    }));
  }
});
const Ro = /* @__PURE__ */ ke(Ku, [["__scopeId", "data-v-01fdd0ad"]]), Xu = /* @__PURE__ */ fe({
  __name: "TextContainer",
  props: {
    fontSize: {
      default: "1rem",
      type: [String, Number]
    },
    padding: {
      default: "initial",
      type: [String, Number]
    },
    lineHeight: {
      default: "1rem",
      type: [String, Number]
    },
    textAlign: {
      default: "initial",
      type: String
    },
    textTransform: {
      default: "initial",
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
      default: "initial",
      type: String
    },
    fontWeight: {
      default: "initial",
      type: [String, Number]
    },
    letterSpacing: {
      default: "initial",
      type: [String, Number]
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
    },
    specialText: {
      default: "",
      type: String
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    xe((_) => ({
      "2174a082": e.padding,
      ed6a62bc: f(u),
      "165a6ac2": e.fontSize,
      "7b0abbee": e.textAlign,
      "1ee5e02a": e.lineHeight,
      "11ddfd96": e.fontWeight,
      "4c62e04c": e.whiteSpace,
      "924e93e6": e.borderRadius,
      "35c3e624": e.letterSpacing,
      "932b5720": e.textTransform,
      "352e0280": f(p),
      "57cbffca": f(v),
      "18882b08": f(d),
      "22ebec93": f(m)
    }));
    const r = pt(), a = Je();
    Xe(() => {
      s(n.specialText);
    });
    const o = I(null), i = k(() => {
      const _ = ["text__container"];
      return n.clickable && _.push("text__container--clickable"), _.push(`text__container--${n.predefinedStyle}`), _;
    }), u = k(() => a.getRealColor(n.color)), p = k(() => a.getRealColor(n.hoverColor)), d = k(() => a.getRealColor(n.activeColor)), v = k(() => a.getRealColor(n.hoverBackground)), m = k(() => a.getRealColor(n.activeBackground)), s = (_) => {
      if (!_ || !o.value || r.default)
        return;
      const D = /\*([^*]+)\*/g;
      o.value.innerHTML = _.replace(D, (R) => `<b>${R.slice(1, R.length - 1)}</b>`);
    }, g = (_) => {
      t("click", _);
    };
    return ft(() => n.specialText, s), (_, D) => (y(), O("div", {
      ref_key: "container",
      ref: o,
      class: ie(f(i)),
      onClick: g
    }, [
      q(_.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Tt = /* @__PURE__ */ ke(Xu, [["__scopeId", "data-v-6ebfa83b"]]), Ju = /* @__PURE__ */ fe({
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
      set(i) {
        t("update:model-value", i);
      }
    }), a = () => {
      t("click:yes");
    }, o = () => {
      t("click:no");
    };
    return (i, u) => (y(), te(Ro, {
      modelValue: f(r),
      "onUpdate:modelValue": u[0] || (u[0] = (p) => Fe(r) ? r.value = p : null),
      persistent: ""
    }, {
      default: J(() => [
        be(Hr, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: J(() => [
            be(Tt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: J(() => [
                Ae(he(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (y(), te(Tt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: J(() => [
                Ae(he(e.subtitle), 1)
              ]),
              _: 1
            })) : P("", !0),
            be(Al, { "column-gap": "0.75rem" }, {
              default: J(() => [
                be(pa, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: J(() => [
                    Ae(" Sí ")
                  ]),
                  _: 1
                }),
                be(pa, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: J(() => [
                    Ae(" No ")
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
function ce(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ne(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(n) {
    return typeof n;
  } : mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mn(e);
}
function de(e) {
  ne(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || mn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Dt(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function gt(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + r + 1, 0);
  var i = o.getDate();
  return a >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
}
function yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(n) {
    return typeof n;
  } : yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yn(e);
}
function El(e, t) {
  if (ne(2, arguments), !t || yn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, d = de(e), v = r || n ? gt(d, r + n * 12) : d, m = o || a ? Dt(v, o + a * 7) : v, s = u + i * 60, g = p + s * 60, _ = g * 1e3, D = new Date(m.getTime() + _);
  return D;
}
function es(e, t) {
  ne(2, arguments);
  var n = de(e).getTime(), r = ce(t);
  return new Date(n + r);
}
var ts = {};
function _t() {
  return ts;
}
function Ut(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), g = s.getDay(), _ = (g < m ? 7 : 0) + g - m;
  return s.setDate(s.getDate() - _), s.setHours(0, 0, 0, 0), s;
}
function nr(e) {
  return ne(1, arguments), Ut(e, {
    weekStartsOn: 1
  });
}
function ns(e) {
  ne(1, arguments);
  var t = de(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = nr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var i = nr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function rs(e) {
  ne(1, arguments);
  var t = ns(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = nr(n);
  return r;
}
function rr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ko(e) {
  ne(1, arguments);
  var t = de(e);
  return t.setHours(0, 0, 0, 0), t;
}
var as = 864e5;
function os(e, t) {
  ne(2, arguments);
  var n = Ko(e), r = Ko(t), a = n.getTime() - rr(n), o = r.getTime() - rr(r);
  return Math.round((a - o) / as);
}
function Yl(e, t) {
  ne(2, arguments);
  var n = ce(t);
  return gt(e, n * 12);
}
var Mo = 6e4, Io = 36e5, is = 1e3;
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function Vl(e) {
  return ne(1, arguments), e instanceof Date || vn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nn(e) {
  if (ne(1, arguments), !Vl(e) && typeof e != "number")
    return !1;
  var t = de(e);
  return !isNaN(Number(t));
}
function Xo(e, t) {
  var n;
  ne(1, arguments);
  var r = e || {}, a = de(r.start), o = de(r.end), i = o.getTime();
  if (!(a.getTime() <= i))
    throw new RangeError("Invalid interval");
  var u = [], p = a;
  p.setHours(0, 0, 0, 0);
  var d = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; p.getTime() <= i; )
    u.push(de(p)), p.setDate(p.getDate() + d), p.setHours(0, 0, 0, 0);
  return u;
}
function ls(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), g = s.getDay(), _ = (g < m ? -7 : 0) + 6 - (g - m);
  return s.setDate(s.getDate() + _), s.setHours(23, 59, 59, 999), s;
}
function Ul(e, t) {
  ne(2, arguments);
  var n = ce(t);
  return es(e, -n);
}
var us = 864e5;
function ss(e) {
  ne(1, arguments);
  var t = de(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / us) + 1;
}
function qt(e) {
  ne(1, arguments);
  var t = 1, n = de(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Fl(e) {
  ne(1, arguments);
  var t = de(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = qt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = qt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function cs(e) {
  ne(1, arguments);
  var t = Fl(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = qt(n);
  return r;
}
var fs = 6048e5;
function Wl(e) {
  ne(1, arguments);
  var t = de(e), n = qt(t).getTime() - cs(t).getTime();
  return Math.round(n / fs) + 1;
}
function Ft(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), g = s.getUTCDay(), _ = (g < m ? 7 : 0) + g - m;
  return s.setUTCDate(s.getUTCDate() - _), s.setUTCHours(0, 0, 0, 0), s;
}
function No(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = de(e), m = v.getUTCFullYear(), s = _t(), g = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = /* @__PURE__ */ new Date(0);
  _.setUTCFullYear(m + 1, 0, g), _.setUTCHours(0, 0, 0, 0);
  var D = Ft(_, t), R = /* @__PURE__ */ new Date(0);
  R.setUTCFullYear(m, 0, g), R.setUTCHours(0, 0, 0, 0);
  var Y = Ft(R, t);
  return v.getTime() >= D.getTime() ? m + 1 : v.getTime() >= Y.getTime() ? m : m - 1;
}
function ds(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = No(e, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(s, 0, m), g.setUTCHours(0, 0, 0, 0);
  var _ = Ft(g, t);
  return _;
}
var ps = 6048e5;
function Hl(e, t) {
  ne(1, arguments);
  var n = de(e), r = Ft(n, t).getTime() - ds(n, t).getTime();
  return Math.round(r / ps) + 1;
}
function Oe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var ms = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return Oe(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Oe(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Oe(t.getUTCDate(), n.length);
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
    return Oe(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Oe(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Oe(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Oe(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return Oe(o, n.length);
  }
};
const Pt = ms;
var Lt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ys = {
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
    return Pt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var o = No(t, a), i = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var u = i % 100;
      return Oe(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : Oe(i, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Fl(t);
    return Oe(r, n.length);
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
    return Oe(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return Oe(a, 2);
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
        return Oe(a, 2);
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
        return Pt.M(t, n);
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
        return Oe(a + 1, 2);
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
    var o = Hl(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Oe(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Wl(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Pt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = ss(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : Oe(a, n.length);
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
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return Oe(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
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
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return Oe(i, n.length);
      case "co":
        return r.ordinalNumber(i, {
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
        return Oe(o, n.length);
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
    switch (a === 12 ? o = Lt.noon : a === 0 ? o = Lt.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? o = Lt.evening : a >= 12 ? o = Lt.afternoon : a >= 4 ? o = Lt.morning : o = Lt.night, n) {
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
    return Pt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Pt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Oe(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Oe(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Pt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Pt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Pt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return ei(i);
      case "XXXX":
      case "XX":
        return Et(i);
      case "XXXXX":
      case "XXX":
      default:
        return Et(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return ei(i);
      case "xxxx":
      case "xx":
        return Et(i);
      case "xxxxx":
      case "xxx":
      default:
        return Et(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Jo(i, ":");
      case "OOOO":
      default:
        return "GMT" + Et(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Jo(i, ":");
      case "zzzz":
      default:
        return "GMT" + Et(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var o = a._originalDate || t, i = Math.floor(o.getTime() / 1e3);
    return Oe(i, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTime();
    return Oe(i, n.length);
  }
};
function Jo(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var i = t || "";
  return n + String(a) + i + Oe(o, 2);
}
function ei(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Oe(Math.abs(e) / 60, 2);
  }
  return Et(e, t);
}
function Et(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = Oe(Math.floor(a / 60), 2), i = Oe(a % 60, 2);
  return r + o + n + i;
}
const vs = ys;
var ti = function(t, n) {
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
}, Ll = function(t, n) {
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
}, hs = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return ti(t, n);
  var i;
  switch (a) {
    case "P":
      i = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = n.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", ti(a, n)).replace("{{time}}", Ll(o, n));
}, gs = {
  p: Ll,
  P: hs
};
const ma = gs;
var bs = ["D", "DD"], _s = ["YY", "YYYY"];
function zl(e) {
  return bs.indexOf(e) !== -1;
}
function jl(e) {
  return _s.indexOf(e) !== -1;
}
function ar(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var ws = {
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
}, ks = function(t, n, r) {
  var a, o = ws[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Ss = ks;
function Xr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var $s = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Os = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ts = {
  date: Xr({
    formats: $s,
    defaultWidth: "full"
  }),
  time: Xr({
    formats: Os,
    defaultWidth: "full"
  }),
  dateTime: Xr({
    formats: xs,
    defaultWidth: "full"
  })
};
const Ps = Ts;
var Cs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ds = function(t, n, r, a) {
  return Cs[t];
};
const Rs = Ds;
function Xt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, p = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[p] || e.values[u];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[d];
  };
}
var Ms = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Is = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ns = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Bs = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, As = {
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
}, Es = {
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
}, Ys = function(t, n) {
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
}, Vs = {
  ordinalNumber: Ys,
  era: Xt({
    values: Ms,
    defaultWidth: "wide"
  }),
  quarter: Xt({
    values: Is,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Xt({
    values: Ns,
    defaultWidth: "wide"
  }),
  day: Xt({
    values: Bs,
    defaultWidth: "wide"
  }),
  dayPeriod: Xt({
    values: As,
    defaultWidth: "wide",
    formattingValues: Es,
    defaultFormattingWidth: "wide"
  })
};
const Us = Vs;
function Jt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(u) ? Ws(u, function(m) {
      return m.test(i);
    }) : Fs(u, function(m) {
      return m.test(i);
    }), d;
    d = e.valueCallback ? e.valueCallback(p) : p, d = n.valueCallback ? n.valueCallback(d) : d;
    var v = t.slice(i.length);
    return {
      value: d,
      rest: v
    };
  };
}
function Fs(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ws(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Hs(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var u = t.slice(a.length);
    return {
      value: i,
      rest: u
    };
  };
}
var Ls = /^(\d+)(th|st|nd|rd)?/i, zs = /\d+/i, js = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qs = {
  any: [/^b/i, /^(a|c)/i]
}, Gs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Qs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ks = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Xs = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Js = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ec = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tc = {
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
}, nc = {
  ordinalNumber: Hs({
    matchPattern: Ls,
    parsePattern: zs,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Jt({
    matchPatterns: js,
    defaultMatchWidth: "wide",
    parsePatterns: qs,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: Gs,
    defaultMatchWidth: "wide",
    parsePatterns: Qs,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Jt({
    matchPatterns: Zs,
    defaultMatchWidth: "wide",
    parsePatterns: Ks,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: Xs,
    defaultMatchWidth: "wide",
    parsePatterns: Js,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: ec,
    defaultMatchWidth: "any",
    parsePatterns: tc,
    defaultParseWidth: "any"
  })
};
const rc = nc;
var ac = {
  code: "en-US",
  formatDistance: Ss,
  formatLong: Ps,
  formatRelative: Rs,
  localize: Us,
  match: rc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ql = ac;
var oc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ic = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lc = /^'([^]*?)'?$/, uc = /''/g, sc = /[a-zA-Z]/;
function rn(e, t, n) {
  var r, a, o, i, u, p, d, v, m, s, g, _, D, R, Y, V, A, L;
  ne(2, arguments);
  var U = String(t), G = _t(), X = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : G.locale) !== null && r !== void 0 ? r : ql, N = ce((o = (i = (u = (p = n == null ? void 0 : n.firstWeekContainsDate) !== null && p !== void 0 ? p : n == null || (d = n.locale) === null || d === void 0 || (v = d.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && u !== void 0 ? u : G.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = G.locale) === null || m === void 0 || (s = m.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = ce((g = (_ = (D = (R = n == null ? void 0 : n.weekStartsOn) !== null && R !== void 0 ? R : n == null || (Y = n.locale) === null || Y === void 0 || (V = Y.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && D !== void 0 ? D : G.weekStartsOn) !== null && _ !== void 0 ? _ : (A = G.locale) === null || A === void 0 || (L = A.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(S >= 0 && S <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!X.localize)
    throw new RangeError("locale must contain localize property");
  if (!X.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var M = de(e);
  if (!nn(M))
    throw new RangeError("Invalid time value");
  var C = rr(M), Z = Ul(M, C), ee = {
    firstWeekContainsDate: N,
    weekStartsOn: S,
    locale: X,
    _originalDate: M
  }, re = U.match(ic).map(function(j) {
    var T = j[0];
    if (T === "p" || T === "P") {
      var l = ma[T];
      return l(j, X.formatLong);
    }
    return j;
  }).join("").match(oc).map(function(j) {
    if (j === "''")
      return "'";
    var T = j[0];
    if (T === "'")
      return cc(j);
    var l = vs[T];
    if (l)
      return !(n != null && n.useAdditionalWeekYearTokens) && jl(j) && ar(j, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && zl(j) && ar(j, t, String(e)), l(Z, j, X.localize, ee);
    if (T.match(sc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + T + "`");
    return j;
  }).join("");
  return re;
}
function cc(e) {
  var t = e.match(lc);
  return t ? t[1].replace(uc, "'") : e;
}
function fc(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function dc(e) {
  ne(1, arguments);
  var t = de(e), n = t.getDay();
  return n;
}
function pc(e) {
  ne(1, arguments);
  var t = de(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function $t(e) {
  ne(1, arguments);
  var t = de(e), n = t.getHours();
  return n;
}
var mc = 6048e5;
function yc(e) {
  ne(1, arguments);
  var t = de(e), n = nr(t).getTime() - rs(t).getTime();
  return Math.round(n / mc) + 1;
}
function Ot(e) {
  ne(1, arguments);
  var t = de(e), n = t.getMinutes();
  return n;
}
function De(e) {
  ne(1, arguments);
  var t = de(e), n = t.getMonth();
  return n;
}
function Gt(e) {
  ne(1, arguments);
  var t = de(e), n = t.getSeconds();
  return n;
}
function vc(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = de(e), m = v.getFullYear(), s = _t(), g = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = /* @__PURE__ */ new Date(0);
  _.setFullYear(m + 1, 0, g), _.setHours(0, 0, 0, 0);
  var D = Ut(_, t), R = /* @__PURE__ */ new Date(0);
  R.setFullYear(m, 0, g), R.setHours(0, 0, 0, 0);
  var Y = Ut(R, t);
  return v.getTime() >= D.getTime() ? m + 1 : v.getTime() >= Y.getTime() ? m : m - 1;
}
function hc(e, t) {
  var n, r, a, o, i, u, p, d;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = vc(e, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(s, 0, m), g.setHours(0, 0, 0, 0);
  var _ = Ut(g, t);
  return _;
}
var gc = 6048e5;
function bc(e, t) {
  ne(1, arguments);
  var n = de(e), r = Ut(n, t).getTime() - hc(n, t).getTime();
  return Math.round(r / gc) + 1;
}
function Re(e) {
  return ne(1, arguments), de(e).getFullYear();
}
function Bo(e, t) {
  ne(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() > r.getTime();
}
function Ao(e, t) {
  ne(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() < r.getTime();
}
function Gl(e, t) {
  ne(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() === r.getTime();
}
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Ql(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ya(e, t);
}
function ya(e, t) {
  return ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ya(e, t);
}
function Zl(e) {
  var t = wc();
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
  return t && (hn(t) === "object" || typeof t == "function") ? t : va(e);
}
function va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wc() {
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
function Eo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yo(e, t, n) {
  return t && ni(e.prototype, t), n && ni(e, n), e;
}
function ha(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kc = 10, Kl = /* @__PURE__ */ function() {
  function e() {
    Eo(this, e), ha(this, "subPriority", 0);
  }
  return Yo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Sc = /* @__PURE__ */ function(e) {
  Ql(n, e);
  var t = Zl(n);
  function n(r, a, o, i, u) {
    var p;
    return Eo(this, n), p = t.call(this), p.value = r, p.validateValue = a, p.setValue = o, p.priority = i, u && (p.subPriority = u), p;
  }
  return Yo(n, [{
    key: "validate",
    value: function(a, o) {
      return this.validateValue(a, this.value, o);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return this.setValue(a, o, this.value, i);
    }
  }]), n;
}(Kl), $c = /* @__PURE__ */ function(e) {
  Ql(n, e);
  var t = Zl(n);
  function n() {
    var r;
    Eo(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ha(va(r), "priority", kc), ha(va(r), "subPriority", -1), r;
  }
  return Yo(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), i.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), i;
    }
  }]), n;
}(Kl);
function Oc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xc(e, t, n) {
  return t && ri(e.prototype, t), n && ri(e, n), e;
}
var Se = /* @__PURE__ */ function() {
  function e() {
    Oc(this, e);
  }
  return xc(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var i = this.parse(n, r, a, o);
      return i ? {
        setter: new Sc(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Tc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pc(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function Cc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ga(e, t);
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ga(e, t);
}
function Dc(e) {
  var t = Mc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rc(this, a);
  };
}
function Rc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : ba(e);
}
function ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mc() {
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
function oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ic = /* @__PURE__ */ function(e) {
  Cc(n, e);
  var t = Dc(n);
  function n() {
    var r;
    Tc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), oi(ba(r), "priority", 140), oi(ba(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Pc(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return i.era(a, {
            width: "abbreviated"
          }) || i.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return i.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return i.era(a, {
            width: "wide"
          }) || i.era(a, {
            width: "abbreviated"
          }) || i.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.era = i, a.setUTCFullYear(i, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se), Ve = {
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
}, vt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ue(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Be(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function ht(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, i = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Io + o * Mo + i * is),
    rest: t.slice(n[0].length)
  };
}
function Xl(e) {
  return Be(Ve.anyDigitsSigned, e);
}
function Ye(e, t) {
  switch (e) {
    case 1:
      return Be(Ve.singleDigit, t);
    case 2:
      return Be(Ve.twoDigits, t);
    case 3:
      return Be(Ve.threeDigits, t);
    case 4:
      return Be(Ve.fourDigits, t);
    default:
      return Be(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function lr(e, t) {
  switch (e) {
    case 1:
      return Be(Ve.singleDigitSigned, t);
    case 2:
      return Be(Ve.twoDigitsSigned, t);
    case 3:
      return Be(Ve.threeDigitsSigned, t);
    case 4:
      return Be(Ve.fourDigitsSigned, t);
    default:
      return Be(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Vo(e) {
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
function Jl(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, i = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + i - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function eu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function Nc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ii(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bc(e, t, n) {
  return t && ii(e.prototype, t), n && ii(e, n), e;
}
function Ac(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
function Ec(e) {
  var t = Vc();
  return function() {
    var r = ur(e), a;
    if (t) {
      var o = ur(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Yc(this, a);
  };
}
function Yc(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vc() {
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
function li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uc = /* @__PURE__ */ function(e) {
  Ac(n, e);
  var t = Ec(n);
  function n() {
    var r;
    Nc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), li(wa(r), "priority", 130), li(wa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Bc(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return {
          year: d,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return Ue(Ye(4, a), u);
        case "yo":
          return Ue(i.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Ue(Ye(o.length, a), u);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = a.getUTCFullYear();
      if (i.isTwoDigitYear) {
        var p = Jl(i.year, u);
        return a.setUTCFullYear(p, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var d = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(d, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function Fc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wc(e, t, n) {
  return t && ui(e.prototype, t), n && ui(e, n), e;
}
function Hc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ka(e, t);
}
function Lc(e) {
  var t = jc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return zc(this, a);
  };
}
function zc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : Sa(e);
}
function Sa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jc() {
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
function si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qc = /* @__PURE__ */ function(e) {
  Hc(n, e);
  var t = Lc(n);
  function n() {
    var r;
    Fc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), si(Sa(r), "priority", 130), si(Sa(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Wc(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return {
          year: d,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return Ue(Ye(4, a), u);
        case "Yo":
          return Ue(i.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Ue(Ye(o.length, a), u);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, i, u) {
      var p = No(a, u);
      if (i.isTwoDigitYear) {
        var d = Jl(i.year, p);
        return a.setUTCFullYear(d, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ft(a, u);
      }
      var v = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(v, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ft(a, u);
    }
  }]), n;
}(Se);
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(n) {
    return typeof n;
  } : wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wn(e);
}
function Gc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qc(e, t, n) {
  return t && ci(e.prototype, t), n && ci(e, n), e;
}
function Zc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $a(e, t);
}
function $a(e, t) {
  return $a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $a(e, t);
}
function Kc(e) {
  var t = Jc();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Xc(this, a);
  };
}
function Xc(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : Oa(e);
}
function Oa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jc() {
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
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ef = /* @__PURE__ */ function(e) {
  Zc(n, e);
  var t = Kc(n);
  function n() {
    var r;
    Gc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), fi(Oa(r), "priority", 130), fi(Oa(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Qc(n, [{
    key: "parse",
    value: function(a, o) {
      return lr(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(i, 0, 4), u.setUTCHours(0, 0, 0, 0), qt(u);
    }
  }]), n;
}(Se);
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function tf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nf(e, t, n) {
  return t && di(e.prototype, t), n && di(e, n), e;
}
function rf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xa(e, t);
}
function xa(e, t) {
  return xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xa(e, t);
}
function af(e) {
  var t = lf();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return of(this, a);
  };
}
function of(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lf() {
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
function pi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var uf = /* @__PURE__ */ function(e) {
  rf(n, e);
  var t = af(n);
  function n() {
    var r;
    tf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), pi(Ta(r), "priority", 130), pi(Ta(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return nf(n, [{
    key: "parse",
    value: function(a, o) {
      return lr(o === "u" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCFullYear(i, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sn = function(n) {
    return typeof n;
  } : Sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sn(e);
}
function sf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cf(e, t, n) {
  return t && mi(e.prototype, t), n && mi(e, n), e;
}
function ff(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pa(e, t);
}
function df(e) {
  var t = mf();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return pf(this, a);
  };
}
function pf(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mf() {
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
function yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yf = /* @__PURE__ */ function(e) {
  ff(n, e);
  var t = df(n);
  function n() {
    var r;
    sf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), yi(Ca(r), "priority", 120), yi(Ca(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return cf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "Q":
        case "QQ":
          return Ye(o.length, a);
        case "Qo":
          return i.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return i.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return i.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return i.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || i.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(a, {
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
    value: function(a, o, i) {
      return a.setUTCMonth((i - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function vf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hf(e, t, n) {
  return t && vi(e.prototype, t), n && vi(e, n), e;
}
function gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Da(e, t);
}
function bf(e) {
  var t = wf();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return _f(this, a);
  };
}
function _f(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ra(e);
}
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wf() {
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
function hi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kf = /* @__PURE__ */ function(e) {
  gf(n, e);
  var t = bf(n);
  function n() {
    var r;
    vf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), hi(Ra(r), "priority", 120), hi(Ra(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return hf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "q":
        case "qq":
          return Ye(o.length, a);
        case "qo":
          return i.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return i.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return i.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return i.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || i.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(a, {
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
    value: function(a, o, i) {
      return a.setUTCMonth((i - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function Sf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $f(e, t, n) {
  return t && gi(e.prototype, t), n && gi(e, n), e;
}
function Of(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function xf(e) {
  var t = Pf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Tf(this, a);
  };
}
function Tf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pf() {
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
function bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cf = /* @__PURE__ */ function(e) {
  Of(n, e);
  var t = xf(n);
  function n() {
    var r;
    Sf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), bi(Ia(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), bi(Ia(r), "priority", 110), r;
  }
  return $f(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "M":
          return Ue(Be(Ve.month, a), u);
        case "MM":
          return Ue(Ye(2, a), u);
        case "Mo":
          return Ue(i.ordinalNumber(a, {
            unit: "month"
          }), u);
        case "MMM":
          return i.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return i.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return i.month(a, {
            width: "wide",
            context: "formatting"
          }) || i.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(a, {
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
    value: function(a, o, i) {
      return a.setUTCMonth(i, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function Df(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rf(e, t, n) {
  return t && _i(e.prototype, t), n && _i(e, n), e;
}
function Mf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Na(e, t);
}
function If(e) {
  var t = Bf();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Nf(this, a);
  };
}
function Nf(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bf() {
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
function wi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Af = /* @__PURE__ */ function(e) {
  Mf(n, e);
  var t = If(n);
  function n() {
    var r;
    Df(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), wi(Ba(r), "priority", 110), wi(Ba(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Rf(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "L":
          return Ue(Be(Ve.month, a), u);
        case "LL":
          return Ue(Ye(2, a), u);
        case "Lo":
          return Ue(i.ordinalNumber(a, {
            unit: "month"
          }), u);
        case "LLL":
          return i.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return i.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return i.month(a, {
            width: "wide",
            context: "standalone"
          }) || i.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(a, {
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
    value: function(a, o, i) {
      return a.setUTCMonth(i, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Ef(e, t, n) {
  ne(2, arguments);
  var r = de(e), a = ce(t), o = Hl(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Yf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vf(e, t, n) {
  return t && ki(e.prototype, t), n && ki(e, n), e;
}
function Uf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Aa(e, t);
}
function Ff(e) {
  var t = Hf();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wf(this, a);
  };
}
function Wf(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hf() {
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
function Si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lf = /* @__PURE__ */ function(e) {
  Uf(n, e);
  var t = Ff(n);
  function n() {
    var r;
    Yf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Si(Ea(r), "priority", 100), Si(Ea(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Vf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "w":
          return Be(Ve.week, a);
        case "wo":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, i, u) {
      return Ft(Ef(a, i, u), u);
    }
  }]), n;
}(Se);
function zf(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t), a = Wl(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
}
function jf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qf(e, t, n) {
  return t && $i(e.prototype, t), n && $i(e, n), e;
}
function Gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function Qf(e) {
  var t = Kf();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Zf(this, a);
  };
}
function Zf(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kf() {
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
function Oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xf = /* @__PURE__ */ function(e) {
  Gf(n, e);
  var t = Qf(n);
  function n() {
    var r;
    jf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Oi(Va(r), "priority", 100), Oi(Va(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return qf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "I":
          return Be(Ve.week, a);
        case "Io":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return qt(zf(a, i));
    }
  }]), n;
}(Se);
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Jf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ed(e, t, n) {
  return t && xi(e.prototype, t), n && xi(e, n), e;
}
function td(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ua(e, t);
}
function nd(e) {
  var t = ad();
  return function() {
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return rd(this, a);
  };
}
function rd(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Dn(e);
}
function Dn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ad() {
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
function Jr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var od = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], id = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ld = /* @__PURE__ */ function(e) {
  td(n, e);
  var t = nd(n);
  function n() {
    var r;
    Jf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Jr(Dn(r), "priority", 90), Jr(Dn(r), "subPriority", 1), Jr(Dn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ed(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "d":
          return Be(Ve.date, a);
        case "do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), u = eu(i), p = a.getUTCMonth();
      return u ? o >= 1 && o <= id[p] : o >= 1 && o <= od[p];
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCDate(i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function ud(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sd(e, t, n) {
  return t && Ti(e.prototype, t), n && Ti(e, n), e;
}
function cd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function fd(e) {
  var t = pd();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dd(this, a);
  };
}
function dd(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Mn(e);
}
function Mn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pd() {
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
function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var md = /* @__PURE__ */ function(e) {
  cd(n, e);
  var t = fd(n);
  function n() {
    var r;
    ud(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ea(Mn(r), "priority", 90), ea(Mn(r), "subpriority", 1), ea(Mn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return sd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "D":
        case "DD":
          return Be(Ve.dayOfYear, a);
        case "Do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), u = eu(i);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth(0, i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Uo(e, t, n) {
  var r, a, o, i, u, p, d, v;
  ne(2, arguments);
  var m = _t(), s = ce((r = (a = (o = (i = n == null ? void 0 : n.weekStartsOn) !== null && i !== void 0 ? i : n == null || (u = n.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && a !== void 0 ? a : (d = m.locale) === null || d === void 0 || (v = d.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = de(e), _ = ce(t), D = g.getUTCDay(), R = _ % 7, Y = (R + 7) % 7, V = (Y < s ? 7 : 0) + _ - D;
  return g.setUTCDate(g.getUTCDate() + V), g;
}
function In(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? In = function(n) {
    return typeof n;
  } : In = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, In(e);
}
function yd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vd(e, t, n) {
  return t && Pi(e.prototype, t), n && Pi(e, n), e;
}
function hd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wa(e, t);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Wa(e, t);
}
function gd(e) {
  var t = _d();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return bd(this, a);
  };
}
function bd(e, t) {
  return t && (In(t) === "object" || typeof t == "function") ? t : Ha(e);
}
function Ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _d() {
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
function Ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wd = /* @__PURE__ */ function(e) {
  hd(n, e);
  var t = gd(n);
  function n() {
    var r;
    yd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ci(Ha(r), "priority", 90), Ci(Ha(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return vd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
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
    value: function(a, o, i, u) {
      return a = Uo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function kd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Sd(e, t, n) {
  return t && Di(e.prototype, t), n && Di(e, n), e;
}
function $d(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function Od(e) {
  var t = Td();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return xd(this, a);
  };
}
function xd(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Td() {
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
function Ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pd = /* @__PURE__ */ function(e) {
  $d(n, e);
  var t = Od(n);
  function n() {
    var r;
    kd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ri(za(r), "priority", 90), Ri(za(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Sd(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var p = function(v) {
        var m = Math.floor((v - 1) / 7) * 7;
        return (v + u.weekStartsOn + 6) % 7 + m;
      };
      switch (o) {
        case "e":
        case "ee":
          return Ue(Ye(o.length, a), p);
        case "eo":
          return Ue(i.ordinalNumber(a, {
            unit: "day"
          }), p);
        case "eee":
          return i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
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
    value: function(a, o, i, u) {
      return a = Uo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function Cd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dd(e, t, n) {
  return t && Mi(e.prototype, t), n && Mi(e, n), e;
}
function Rd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Md(e) {
  var t = Nd();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Id(this, a);
  };
}
function Id(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nd() {
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
function Ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bd = /* @__PURE__ */ function(e) {
  Rd(n, e);
  var t = Md(n);
  function n() {
    var r;
    Cd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ii(qa(r), "priority", 90), Ii(qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Dd(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var p = function(v) {
        var m = Math.floor((v - 1) / 7) * 7;
        return (v + u.weekStartsOn + 6) % 7 + m;
      };
      switch (o) {
        case "c":
        case "cc":
          return Ue(Ye(o.length, a), p);
        case "co":
          return Ue(i.ordinalNumber(a, {
            unit: "day"
          }), p);
        case "ccc":
          return i.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return i.day(a, {
            width: "wide",
            context: "standalone"
          }) || i.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
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
    value: function(a, o, i, u) {
      return a = Uo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Ad(e, t) {
  ne(2, arguments);
  var n = ce(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = de(e), o = a.getUTCDay(), i = n % 7, u = (i + 7) % 7, p = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + p), a;
}
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Ed(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yd(e, t, n) {
  return t && Ni(e.prototype, t), n && Ni(e, n), e;
}
function Vd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function Ud(e) {
  var t = Wd();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Fd(this, a);
  };
}
function Fd(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wd() {
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
function Bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hd = /* @__PURE__ */ function(e) {
  Vd(n, e);
  var t = Ud(n);
  function n() {
    var r;
    Ed(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Bi(Qa(r), "priority", 90), Bi(Qa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Yd(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (o) {
        case "i":
        case "ii":
          return Ye(o.length, a);
        case "io":
          return i.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Ue(i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return Ue(i.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return Ue(i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return Ue(i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
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
    value: function(a, o, i) {
      return a = Ad(a, i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function Ld(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zd(e, t, n) {
  return t && Ai(e.prototype, t), n && Ai(e, n), e;
}
function jd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function qd(e) {
  var t = Qd();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Gd(this, a);
  };
}
function Gd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Ka(e);
}
function Ka(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qd() {
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
function Ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zd = /* @__PURE__ */ function(e) {
  jd(n, e);
  var t = qd(n);
  function n() {
    var r;
    Ld(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ei(Ka(r), "priority", 80), Ei(Ka(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return zd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(Vo(i), 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function Kd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xd(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), e;
}
function Jd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Xa(e, t);
}
function Xa(e, t) {
  return Xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Xa(e, t);
}
function ep(e) {
  var t = np();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return tp(this, a);
  };
}
function tp(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function np() {
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
function Vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rp = /* @__PURE__ */ function(e) {
  Jd(n, e);
  var t = ep(n);
  function n() {
    var r;
    Kd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Vi(Ja(r), "priority", 80), Vi(Ja(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return Xd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(Vo(i), 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vn = function(n) {
    return typeof n;
  } : Vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vn(e);
}
function ap(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function op(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
function ip(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function lp(e) {
  var t = sp();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return up(this, a);
  };
}
function up(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sp() {
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
function Fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cp = /* @__PURE__ */ function(e) {
  ip(n, e);
  var t = lp(n);
  function n() {
    var r;
    ap(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Fi(to(r), "priority", 80), Fi(to(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return op(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(Vo(i), 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(n) {
    return typeof n;
  } : Un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Un(e);
}
function fp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function dp(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), e;
}
function pp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function mp(e) {
  var t = vp();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return yp(this, a);
  };
}
function yp(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vp() {
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
function Hi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hp = /* @__PURE__ */ function(e) {
  pp(n, e);
  var t = mp(n);
  function n() {
    var r;
    fp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Hi(ro(r), "priority", 70), Hi(ro(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return dp(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "h":
          return Be(Ve.hour12h, a);
        case "ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = a.getUTCHours() >= 12;
      return u && i < 12 ? a.setUTCHours(i + 12, 0, 0, 0) : !u && i === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function gp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bp(e, t, n) {
  return t && Li(e.prototype, t), n && Li(e, n), e;
}
function _p(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function wp(e) {
  var t = Sp();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return kp(this, a);
  };
}
function kp(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : oo(e);
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
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $p = /* @__PURE__ */ function(e) {
  _p(n, e);
  var t = wp(n);
  function n() {
    var r;
    gp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), zi(oo(r), "priority", 70), zi(oo(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return bp(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "H":
          return Be(Ve.hour23h, a);
        case "Ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function Op(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xp(e, t, n) {
  return t && ji(e.prototype, t), n && ji(e, n), e;
}
function Tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function Pp(e) {
  var t = Dp();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Cp(this, a);
  };
}
function Cp(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dp() {
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
function qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rp = /* @__PURE__ */ function(e) {
  Tp(n, e);
  var t = Pp(n);
  function n() {
    var r;
    Op(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), qi(lo(r), "priority", 70), qi(lo(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return xp(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "K":
          return Be(Ve.hour11h, a);
        case "Ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = a.getUTCHours() >= 12;
      return u && i < 12 ? a.setUTCHours(i + 12, 0, 0, 0) : a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function Mp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ip(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function Np(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Bp(e) {
  var t = Ep();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ap(this, a);
  };
}
function Ap(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ep() {
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
function Qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yp = /* @__PURE__ */ function(e) {
  Np(n, e);
  var t = Bp(n);
  function n() {
    var r;
    Mp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Qi(so(r), "priority", 70), Qi(so(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Ip(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "k":
          return Be(Ve.hour24h, a);
        case "ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = i <= 24 ? i % 24 : i;
      return a.setUTCHours(u, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function Vp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Up(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function Fp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Wp(e) {
  var t = Lp();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hp(this, a);
  };
}
function Hp(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lp() {
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
function Ki(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zp = /* @__PURE__ */ function(e) {
  Fp(n, e);
  var t = Wp(n);
  function n() {
    var r;
    Vp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ki(fo(r), "priority", 60), Ki(fo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Up(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "m":
          return Be(Ve.minute, a);
        case "mo":
          return i.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMinutes(i, 0, 0), a;
    }
  }]), n;
}(Se);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function jp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qp(e, t, n) {
  return t && Xi(e.prototype, t), n && Xi(e, n), e;
}
function Gp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function Qp(e) {
  var t = Kp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Zp(this, a);
  };
}
function Zp(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : mo(e);
}
function mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kp() {
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
function Ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xp = /* @__PURE__ */ function(e) {
  Gp(n, e);
  var t = Qp(n);
  function n() {
    var r;
    jp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ji(mo(r), "priority", 50), Ji(mo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return qp(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "s":
          return Be(Ve.second, a);
        case "so":
          return i.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCSeconds(i, 0), a;
    }
  }]), n;
}(Se);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Jp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function em(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function tm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function nm(e) {
  var t = am();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return rm(this, a);
  };
}
function rm(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function am() {
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
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var om = /* @__PURE__ */ function(e) {
  tm(n, e);
  var t = nm(n);
  function n() {
    var r;
    Jp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), tl(vo(r), "priority", 30), tl(vo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return em(n, [{
    key: "parse",
    value: function(a, o) {
      var i = function(p) {
        return Math.floor(p * Math.pow(10, -o.length + 3));
      };
      return Ue(Ye(o.length, a), i);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMilliseconds(i), a;
    }
  }]), n;
}(Se);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lm(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function sm(e) {
  var t = fm();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return cm(this, a);
  };
}
function cm(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fm() {
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
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dm = /* @__PURE__ */ function(e) {
  um(n, e);
  var t = sm(n);
  function n() {
    var r;
    im(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), rl(go(r), "priority", 10), rl(go(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return lm(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return ht(vt.basicOptionalMinutes, a);
        case "XX":
          return ht(vt.basic, a);
        case "XXXX":
          return ht(vt.basicOptionalSeconds, a);
        case "XXXXX":
          return ht(vt.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return ht(vt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.timestampIsSet ? a : new Date(a.getTime() - i);
    }
  }]), n;
}(Se);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function pm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function mm(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function ym(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function vm(e) {
  var t = gm();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return hm(this, a);
  };
}
function hm(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gm() {
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
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bm = /* @__PURE__ */ function(e) {
  ym(n, e);
  var t = vm(n);
  function n() {
    var r;
    pm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ol(_o(r), "priority", 10), ol(_o(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return mm(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return ht(vt.basicOptionalMinutes, a);
        case "xx":
          return ht(vt.basic, a);
        case "xxxx":
          return ht(vt.basicOptionalSeconds, a);
        case "xxxxx":
          return ht(vt.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return ht(vt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.timestampIsSet ? a : new Date(a.getTime() - i);
    }
  }]), n;
}(Se);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function _m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wm(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function km(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function Sm(e) {
  var t = Om();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return $m(this, a);
  };
}
function $m(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Om() {
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
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xm = /* @__PURE__ */ function(e) {
  km(n, e);
  var t = Sm(n);
  function n() {
    var r;
    _m(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ll(ko(r), "priority", 40), ll(ko(r), "incompatibleTokens", "*"), r;
  }
  return wm(n, [{
    key: "parse",
    value: function(a) {
      return Xl(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function Tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pm(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Cm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && So(e, t);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, So(e, t);
}
function Dm(e) {
  var t = Mm();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rm(this, a);
  };
}
function Rm(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : $o(e);
}
function $o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mm() {
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
function Er(e) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Im = /* @__PURE__ */ function(e) {
  Cm(n, e);
  var t = Dm(n);
  function n() {
    var r;
    Tm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), sl($o(r), "priority", 20), sl($o(r), "incompatibleTokens", "*"), r;
  }
  return Pm(n, [{
    key: "parse",
    value: function(a) {
      return Xl(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se), Nm = {
  G: new Ic(),
  y: new Uc(),
  Y: new qc(),
  R: new ef(),
  u: new uf(),
  Q: new yf(),
  q: new kf(),
  M: new Cf(),
  L: new Af(),
  w: new Lf(),
  I: new Xf(),
  d: new ld(),
  D: new md(),
  E: new wd(),
  e: new Pd(),
  c: new Bd(),
  i: new Hd(),
  a: new Zd(),
  b: new rp(),
  B: new cp(),
  h: new hp(),
  H: new $p(),
  K: new Rp(),
  k: new Yp(),
  m: new zp(),
  s: new Xp(),
  S: new om(),
  X: new dm(),
  x: new bm(),
  t: new xm(),
  T: new Im()
};
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function cl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Bm(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var d = n.next();
    return o = d.done, d;
  }, e: function(d) {
    i = !0, u = d;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (i)
        throw u;
    }
  } };
}
function Bm(e, t) {
  if (e) {
    if (typeof e == "string")
      return fl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fl(e, t);
  }
}
function fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var Am = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Em = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ym = /^'([^]*?)'?$/, Vm = /''/g, Um = /\S/, Fm = /[a-zA-Z]/;
function Oo(e, t, n, r) {
  var a, o, i, u, p, d, v, m, s, g, _, D, R, Y, V, A, L, U;
  ne(3, arguments);
  var G = String(e), X = String(t), N = _t(), S = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : N.locale) !== null && a !== void 0 ? a : ql;
  if (!S.match)
    throw new RangeError("locale must contain match property");
  var M = ce((i = (u = (p = (d = r == null ? void 0 : r.firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (v = r.locale) === null || v === void 0 || (m = v.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && p !== void 0 ? p : N.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = N.locale) === null || s === void 0 || (g = s.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = ce((_ = (D = (R = (Y = r == null ? void 0 : r.weekStartsOn) !== null && Y !== void 0 ? Y : r == null || (V = r.locale) === null || V === void 0 || (A = V.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && R !== void 0 ? R : N.weekStartsOn) !== null && D !== void 0 ? D : (L = N.locale) === null || L === void 0 || (U = L.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && _ !== void 0 ? _ : 0);
  if (!(C >= 0 && C <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (X === "")
    return G === "" ? de(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: M,
    weekStartsOn: C,
    locale: S
  }, ee = [new $c()], re = X.match(Em).map(function(oe) {
    var pe = oe[0];
    if (pe in ma) {
      var Ie = ma[pe];
      return Ie(oe, S.formatLong);
    }
    return oe;
  }).join("").match(Am), j = [], T = cl(re), l;
  try {
    var c = function() {
      var pe = l.value;
      !(r != null && r.useAdditionalWeekYearTokens) && jl(pe) && ar(pe, X, e), !(r != null && r.useAdditionalDayOfYearTokens) && zl(pe) && ar(pe, X, e);
      var Ie = pe[0], it = Nm[Ie];
      if (it) {
        var me = it.incompatibleTokens;
        if (Array.isArray(me)) {
          var st = j.find(function(ze) {
            return me.includes(ze.token) || ze.token === Ie;
          });
          if (st)
            throw new RangeError("The format string mustn't contain `".concat(st.fullToken, "` and `").concat(pe, "` at the same time"));
        } else if (it.incompatibleTokens === "*" && j.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(pe, "` and any other token at the same time"));
        j.push({
          token: Ie,
          fullToken: pe
        });
        var at = it.run(G, pe, S.match, Z);
        if (!at)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        ee.push(at.setter), G = at.rest;
      } else {
        if (Ie.match(Fm))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ie + "`");
        if (pe === "''" ? pe = "'" : Ie === "'" && (pe = Wm(pe)), G.indexOf(pe) === 0)
          G = G.slice(pe.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (T.s(); !(l = T.n()).done; ) {
      var w = c();
      if (Kn(w) === "object")
        return w.v;
    }
  } catch (oe) {
    T.e(oe);
  } finally {
    T.f();
  }
  if (G.length > 0 && Um.test(G))
    return /* @__PURE__ */ new Date(NaN);
  var $ = ee.map(function(oe) {
    return oe.priority;
  }).sort(function(oe, pe) {
    return pe - oe;
  }).filter(function(oe, pe, Ie) {
    return Ie.indexOf(oe) === pe;
  }).map(function(oe) {
    return ee.filter(function(pe) {
      return pe.priority === oe;
    }).sort(function(pe, Ie) {
      return Ie.subPriority - pe.subPriority;
    });
  }).map(function(oe) {
    return oe[0];
  }), E = de(n);
  if (isNaN(E.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var K = Ul(E, rr(E)), Q = {}, x = cl($), b;
  try {
    for (x.s(); !(b = x.n()).done; ) {
      var z = b.value;
      if (!z.validate(K, Z))
        return /* @__PURE__ */ new Date(NaN);
      var we = z.set(K, Q, Z);
      Array.isArray(we) ? (K = we[0], fc(Q, we[1])) : K = we;
    }
  } catch (oe) {
    x.e(oe);
  } finally {
    x.f();
  }
  return K;
}
function Wm(e) {
  return e.match(Ym)[1].replace(Vm, "'");
}
function Hm(e, t) {
  ne(2, arguments);
  var n = ce(t);
  return Dt(e, -n);
}
function Lm(e, t) {
  var n;
  ne(1, arguments);
  var r = ce((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Gm(e), o;
  if (a.date) {
    var i = Qm(a.date, r);
    o = Zm(i.restDateString, i.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), p = 0, d;
  if (a.time && (p = Km(a.time), isNaN(p)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (d = Xm(a.timezone), isNaN(d))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var v = new Date(u + p), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()), m.setHours(v.getUTCHours(), v.getUTCMinutes(), v.getUTCSeconds(), v.getUTCMilliseconds()), m;
  }
  return new Date(u + p + d);
}
var fn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, zm = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, jm = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, qm = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Gm(e) {
  var t = {}, n = e.split(fn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], fn.timeZoneDelimiter.test(t.date) && (t.date = e.split(fn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = fn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function Qm(e, t) {
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
function Zm(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(zm);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = en(n[1]), o = en(n[2]) - 1, i = en(n[3]), u = en(n[4]), p = en(n[5]) - 1;
  if (r)
    return ry(t, u, p) ? Jm(t, u, p) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !ty(t, o, i) || !ny(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, o, Math.max(a, i)), d);
}
function en(e) {
  return e ? parseInt(e) : 1;
}
function Km(e) {
  var t = e.match(jm);
  if (!t)
    return NaN;
  var n = ta(t[1]), r = ta(t[2]), a = ta(t[3]);
  return ay(n, r, a) ? n * Io + r * Mo + a * 1e3 : NaN;
}
function ta(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Xm(e) {
  if (e === "Z")
    return 0;
  var t = e.match(qm);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return oy(r, a) ? n * (r * Io + a * Mo) : NaN;
}
function Jm(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var ey = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function tu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ty(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (ey[t] || (tu(e) ? 29 : 28));
}
function ny(e, t) {
  return t >= 1 && t <= (tu(e) ? 366 : 365);
}
function ry(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function ay(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function oy(e, t) {
  return t >= 0 && t <= 59;
}
function an(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t), a = n.getFullYear(), o = n.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(a, r, 15), i.setHours(0, 0, 0, 0);
  var u = pc(i);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function Ze(e, t) {
  if (ne(2, arguments), Xn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = de(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = an(n, t.month)), t.date != null && n.setDate(ce(t.date)), t.hours != null && n.setHours(ce(t.hours)), t.minutes != null && n.setMinutes(ce(t.minutes)), t.seconds != null && n.setSeconds(ce(t.seconds)), t.milliseconds != null && n.setMilliseconds(ce(t.milliseconds)), n);
}
function nu(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return n.setHours(r), n;
}
function Fo(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMilliseconds(r), n;
}
function ru(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMinutes(r), n;
}
function au(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return n.setSeconds(r), n;
}
function Vt(e, t) {
  ne(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function jt(e, t) {
  ne(2, arguments);
  var n = ce(t);
  return gt(e, -n);
}
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function iy(e, t) {
  if (ne(2, arguments), !t || Jn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, d = jt(e, r + n * 12), v = Hm(d, o + a * 7), m = u + i * 60, s = p + m * 60, g = s * 1e3, _ = new Date(v.getTime() - g);
  return _;
}
function ly(e, t) {
  ne(2, arguments);
  var n = ce(t);
  return Yl(e, -n);
}
function Lr() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      H("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      H("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      H("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function uy() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      H("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function dl() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function pl() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function ou() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      H("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function iu() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function lu() {
  return y(), O(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      H("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const ml = (e, t, n, r) => {
  const a = Oo(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return nn(a) && Vl(a) ? r ? a : Ze(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, sy = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return ml(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const i of t)
      if (o = ml(e, i, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, W = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), cy = (e, t) => {
  if (t) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${r}-${a}T${o}:${i}:00.000Z`;
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
}, bt = (e) => {
  let t = W(JSON.parse(JSON.stringify(e)));
  return t = nu(t, 0), t = ru(t, 0), t = au(t, 0), t = Fo(t, 0), t;
}, ct = (e, t, n, r) => {
  let a = e ? W(e) : W();
  return (t || t === 0) && (a = nu(a, +t)), (n || n === 0) && (a = ru(a, +n)), (r || r === 0) && (a = au(a, +r)), Fo(a, 0);
}, Ke = (e, t) => !e || !t ? !1 : Ao(bt(e), bt(t)), Me = (e, t) => !e || !t ? !1 : Gl(bt(e), bt(t)), rt = (e, t) => !e || !t ? !1 : Bo(bt(e), bt(t)), uu = (e, t, n) => e && e[0] && e[1] ? rt(n, e[0]) && Ke(n, e[1]) : e && e[0] && t ? rt(n, e[0]) && Ke(n, t) || Ke(n, e[0]) && rt(n, t) : !1, tn = Ct({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), su = () => {
  const e = (n) => {
    tn.menuFocused = n;
  }, t = (n) => {
    tn.shiftKeyInMenu !== n && (tn.shiftKeyInMenu = n);
  };
  return {
    control: k(() => ({ shiftKeyInMenu: tn.shiftKeyInMenu, menuFocused: tn.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function Wo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = {}, fy = {
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
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(fy, Yr);
const dy = /* @__PURE__ */ Wo(Yr);
var Vr = {}, py = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
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
})(py, Vr);
const yl = /* @__PURE__ */ Wo(Vr);
function my(e, t) {
  var n = gy(t);
  return n.formatToParts ? vy(n, e) : hy(n, e);
}
var yy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function vy(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = yy[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function hy(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var na = {};
function gy(e) {
  if (!na[e]) {
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
    na[e] = n ? new Intl.DateTimeFormat("en-US", {
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
  return na[e];
}
function Ho(e, t, n, r, a, o, i) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, i), u;
}
var vl = 36e5, by = 6e4, ra = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Lo(e, t, n) {
  var r, a;
  if (!e || (r = ra.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = ra.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), hl(o) ? -(o * vl) : NaN;
  if (r = ra.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var i = parseInt(r[2], 10);
    return hl(o, i) ? (a = Math.abs(o) * vl + i * by, o > 0 ? -a : a) : NaN;
  }
  if (ky(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : _y(t), p = xo(u, e), d = n ? p : wy(t, p, e);
    return -d;
  }
  return NaN;
}
function _y(e) {
  return Ho(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function xo(e, t) {
  var n = my(e, t), r = Ho(
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
function wy(e, t, n) {
  var r = e.getTime(), a = r - t, o = xo(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var i = xo(new Date(a), n);
  return o === i ? o : Math.max(o, i);
}
function hl(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var gl = {};
function ky(e) {
  if (gl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Sy = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const cu = Sy;
var aa = 36e5, bl = 6e4, $y = 2, nt = {
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
  timeZone: cu
};
function To(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? $y : dy(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Oy(e), o = xy(a.date, r), i = o.year, u = o.restDateString, p = Ty(u, i);
  if (isNaN(p))
    return /* @__PURE__ */ new Date(NaN);
  if (p) {
    var d = p.getTime(), v = 0, m;
    if (a.time && (v = Py(a.time), isNaN(v)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (m = Lo(a.timeZone || n.timeZone, new Date(d + v)), isNaN(m))
        return /* @__PURE__ */ new Date(NaN);
    } else
      m = yl(new Date(d + v)), m = yl(new Date(d + v + m));
    return new Date(d + v + m);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Oy(e) {
  var t = {}, n = nt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = nt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = nt.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function xy(e, t) {
  var n = nt.YYY[t], r = nt.YYYYY[t], a;
  if (a = nt.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = nt.YY.exec(e) || n.exec(e), a) {
    var i = a[1];
    return {
      year: parseInt(i, 10) * 100,
      restDateString: e.slice(i.length)
    };
  }
  return {
    year: null
  };
}
function Ty(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = nt.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, wl(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = nt.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var i = parseInt(n[1], 10);
    return Ry(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = nt.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return wl(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = nt.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, kl(t, o) ? _l(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = nt.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var p = parseInt(n[2], 10) - 1;
    return kl(t, o, p) ? _l(t, o, p) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Py(e) {
  var t, n, r;
  if (t = nt.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), oa(n) ? n % 24 * aa : NaN;
  if (t = nt.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), oa(n, r) ? n % 24 * aa + r * bl : NaN;
  if (t = nt.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return oa(n, r, a) ? n % 24 * aa + r * bl + a * 1e3 : NaN;
  }
  return null;
}
function _l(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Cy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Dy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function fu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function wl(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = fu(e);
    if (r && n > Dy[t] || !r && n > Cy[t])
      return !1;
  }
  return !0;
}
function Ry(e, t) {
  if (t < 1)
    return !1;
  var n = fu(e);
  return !(n && t > 366 || !n && t > 365);
}
function kl(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function oa(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ur = {}, My = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Fr = {}, Iy = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
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
})(Iy, Fr);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(Fr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(My, Ur);
const Ny = /* @__PURE__ */ Wo(Ur);
function By(e, t, n) {
  var r = To(e, n), a = Lo(t, r, !0), o = new Date(r.getTime() - a), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Ay(e, t, n) {
  if (typeof e == "string" && !e.match(cu)) {
    var r = Ny(n);
    return r.timeZone = t, To(e, r);
  }
  var a = To(e, n), o = Ho(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), i = Lo(t, new Date(o));
  return new Date(o + i);
}
const Ey = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, Yy = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Vy = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Uy = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Fy = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Le = (e) => {
  const t = f(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Wy = (e) => Object.assign({ type: "dot" }, e), du = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Wr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ge = (e) => e, Sl = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, $l = (e) => Object.assign(
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
), Hy = (e) => Object.assign(
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
), Ly = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, zy = (e, t, n) => e || (typeof n == "string" ? n : t), jy = (e) => typeof e == "boolean" ? e ? $l({}) : !1 : $l(e), qy = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Gy = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), ut = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Wr.prop("partial-range"));
  }, n = k(() => ({
    ariaLabels: Hy(e.ariaLabels),
    textInputOptions: Object.assign(qy(), e.textInputOptions),
    multiCalendars: Ly(e.multiCalendars),
    previewFormat: zy(e.previewFormat, e.format, o()),
    filters: Gy(e.filters),
    transitions: jy(e.transitions),
    startTime: s()
  })), r = (l) => {
    if (e.range)
      return l();
    throw new Error(Wr.prop("range"));
  }, a = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", i = (l, c) => {
    if (typeof e.format == "function")
      return e.format(l);
    const w = c || o(), $ = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${rn(l[0], w, $)} ${e.modelAuto && !l[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? rn(l[1], w, $) : ""}` : rn(l, w, $);
  }, u = (l) => e.timezone ? By(l, e.timezone) : l, p = (l) => e.timezone ? Ay(l, e.timezone) : l, d = k(() => (l) => {
    var c;
    return (c = e.hideNavigation) == null ? void 0 : c.includes(l);
  }), v = (l) => {
    const c = e.maxDate ? rt(u(l), u(W(e.maxDate))) : !1, w = e.minDate ? Ke(u(l), u(W(e.minDate))) : !1, $ = Y(l, e.disabledDates), E = n.value.filters.months.map((z) => +z).includes(De(l)), K = e.disabledWeekDays.length ? e.disabledWeekDays.some((z) => +z === dc(l)) : !1, Q = e.allowedDates.length ? !e.allowedDates.some((z) => Me(u(W(z)), u(l))) : !1, x = Re(l), b = x < +e.yearRange[0] || x > +e.yearRange[1];
    return !(c || w || $ || E || b || K || Q);
  }, m = (l) => {
    const c = {
      hours: $t(W()),
      minutes: Ot(W()),
      seconds: e.enableSeconds ? Gt(W()) : 0
    };
    return Object.assign(c, l);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [m(e.startTime[0]), m(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? m(e.startTime) : null, g = (l) => !v(l), _ = (l) => Array.isArray(l) ? nn(l[0]) && (l[1] ? nn(l[1]) : !0) : l ? nn(l) : !1, D = (l) => l instanceof Date ? l : Lm(l), R = (l) => {
    const c = Ut(u(l), { weekStartsOn: +e.weekStart }), w = ls(u(l), { weekStartsOn: +e.weekStart });
    return [c, w];
  }, Y = (l, c) => Array.isArray(c) ? c.some((w) => Me(u(W(w)), u(l))) : c(l), V = (l, c, w) => {
    let $ = l ? W(l) : W();
    return (c || c === 0) && ($ = an($, c)), w && ($ = Vt($, w)), $;
  }, A = (l) => Ze(W(), { hours: $t(l), minutes: Ot(l), seconds: Gt(l) }), L = (l) => Ze(W(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), U = (l, c, w, $) => {
    if (!l)
      return !0;
    if ($) {
      const E = w === "max" ? Ao(l, c) : Bo(l, c), K = { seconds: 0, milliseconds: 0 };
      return E || Gl(Ze(l, K), Ze(c, K));
    }
    return w === "max" ? l.getTime() <= c.getTime() : l.getTime() >= c.getTime();
  }, G = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, X = (l) => Array.isArray(l) ? [l[0] ? A(l[0]) : null, l[1] ? A(l[1]) : null] : A(l), N = (l) => {
    const c = e.maxTime ? L(e.maxTime) : W(e.maxDate);
    return Array.isArray(l) ? U(l[0], c, "max", !!e.maxDate) && U(l[1], c, "max", !!e.maxDate) : U(l, c, "max", !!e.maxDate);
  }, S = (l, c) => {
    const w = e.minTime ? L(e.minTime) : W(e.minDate);
    return Array.isArray(l) ? U(l[0], w, "min", !!e.minDate) && U(l[1], w, "min", !!e.minDate) && c : U(l, w, "min", !!e.minDate) && c;
  }, M = (l) => {
    let c = !0;
    if (!l || G())
      return !0;
    const w = !e.minDate && !e.maxDate ? X(l) : l;
    return (e.maxTime || e.maxDate) && (c = N(Ge(w))), (e.minTime || e.minDate) && (c = S(Ge(w), c)), c;
  }, C = (l, c) => {
    const w = W(JSON.parse(JSON.stringify(l))), $ = [];
    for (let E = 0; E < 7; E++) {
      const K = Dt(w, E), Q = De(K) !== c;
      $.push({
        text: e.hideOffsetDates && Q ? "" : K.getDate(),
        value: K,
        current: !Q,
        classData: {}
      });
    }
    return $;
  }, Z = (l, c) => {
    const w = [], $ = W(u(new Date(c, l))), E = W(u(new Date(c, l + 1, 0))), K = Ut($, { weekStartsOn: e.weekStart }), Q = (x) => {
      const b = C(x, l);
      if (w.push({ days: b }), !w[w.length - 1].days.some(
        (z) => Me(bt(z.value), bt(E))
      )) {
        const z = Dt(x, 7);
        Q(z);
      }
    };
    if (Q(K), e.sixWeeks && w.length < 6) {
      const x = 6 - w.length;
      for (let b = 1; b <= x; b++) {
        const z = w[w.length - 1], we = z.days[z.days.length - 1], oe = C(Dt(we.value, 1), De($));
        w.push({ days: oe });
      }
    }
    return w;
  }, ee = (l, c, w) => [Ze(W(l), { date: 1 }), Ze(W(), { month: c, year: w, date: 1 })], re = (l, c) => Ke(...ee(e.minDate, l, c)) || Me(...ee(e.minDate, l, c)), j = (l, c) => rt(...ee(e.maxDate, l, c)) || Me(...ee(e.maxDate, l, c)), T = (l, c, w) => {
    let $ = !1;
    return e.maxDate && w && j(l, c) && ($ = !0), e.minDate && !w && re(l, c) && ($ = !0), $;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: p,
    formatDate: i,
    getDefaultPattern: o,
    validateDate: v,
    getDefaultStartTime: s,
    isDisabled: g,
    isValidDate: _,
    sanitizeDate: D,
    getWeekFromDate: R,
    matchDate: Y,
    setDateMonthOrYear: V,
    isValidTime: M,
    getCalendarDays: Z,
    validateMonthYearInRange: (l, c, w, $) => {
      let E = !1;
      return $ ? e.minDate && e.maxDate ? E = T(l, c, w) : (e.minDate && re(l, c) || e.maxDate && j(l, c)) && (E = !0) : E = !0, E;
    },
    validateMaxDate: j,
    validateMinDate: re,
    assignDefaultTime: m,
    defaults: n,
    hideNavigationButtons: d
  };
}, Ce = Ct({
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
}), ia = I(null), dn = I(!1), la = I(!1), ua = I(!1), sa = I(!1), tt = I(0), qe = I(0), Mt = () => {
  const e = k(() => dn.value ? [...Ce.selectionGrid, Ce.actionRow].filter((m) => m.length) : la.value ? [
    ...Ce.timePicker[0],
    ...Ce.timePicker[1],
    sa.value ? [] : [ia.value],
    Ce.actionRow
  ].filter((m) => m.length) : ua.value ? [...Ce.monthPicker, Ce.actionRow] : [Ce.monthYear, ...Ce.calendar, Ce.time, Ce.actionRow].filter((m) => m.length)), t = (m) => {
    tt.value = m ? tt.value + 1 : tt.value - 1;
    let s = null;
    e.value[qe.value] && (s = e.value[qe.value][tt.value]), s || (tt.value = m ? tt.value - 1 : tt.value + 1);
  }, n = (m) => {
    qe.value === 0 && !m || qe.value === e.value.length && m || (qe.value = m ? qe.value + 1 : qe.value - 1, e.value[qe.value] ? e.value[qe.value] && !e.value[qe.value][tt.value] && tt.value !== 0 && (tt.value = e.value[qe.value].length - 1) : qe.value = m ? qe.value - 1 : qe.value + 1);
  }, r = (m) => {
    let s = null;
    e.value[qe.value] && (s = e.value[qe.value][tt.value]), s ? s.focus({ preventScroll: !dn.value }) : tt.value = m ? tt.value - 1 : tt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, i = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, p = (m, s) => {
    Ce[s] = m;
  }, d = (m, s) => {
    Ce[s] = m;
  }, v = () => {
    tt.value = 0, qe.value = 0;
  };
  return {
    buildMatrix: p,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (m) => {
      ia.value = m;
    },
    setSelectionGrid: (m) => {
      dn.value = m, v(), m || (Ce.selectionGrid = []);
    },
    setTimePicker: (m, s = !1) => {
      la.value = m, sa.value = s, v(), m || (Ce.timePicker[0] = [], Ce.timePicker[1] = []);
    },
    setTimePickerElements: (m, s = 0) => {
      Ce.timePicker[s] = m;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: i,
    arrowDown: u,
    clearArrowNav: () => {
      Ce.monthYear = [], Ce.calendar = [], Ce.time = [], Ce.actionRow = [], Ce.selectionGrid = [], Ce.timePicker[0] = [], Ce.timePicker[1] = [], dn.value = !1, la.value = !1, sa.value = !1, ua.value = !1, v(), ia.value = null;
    },
    setMonthPicker: (m) => {
      ua.value = m, v();
    },
    refSets: Ce
    // exposed for testing
  };
}, Ol = (e) => Array.isArray(e), At = (e) => Array.isArray(e), xl = (e) => Array.isArray(e) && e.length === 2, Qy = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: i,
    sanitizeDate: u,
    getWeekFromDate: p,
    setDateMonthOrYear: d,
    validateMonthYearInRange: v,
    defaults: m
  } = ut(e), s = k({
    get: () => e.internalModelValue,
    set: (h) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", h);
    }
  }), g = I([]);
  ft(s, () => {
    U();
  });
  const _ = I([{ month: De(W()), year: Re(W()) }]), D = Ct({
    hours: e.range ? [$t(W()), $t(W())] : $t(W()),
    minutes: e.range ? [Ot(W()), Ot(W())] : Ot(W()),
    seconds: e.range ? [0, 0] : 0
  }), R = k(
    () => (h) => _.value[h] ? _.value[h].month : 0
  ), Y = k(
    () => (h) => _.value[h] ? _.value[h].year : 0
  ), V = k(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), A = (h, F, le) => {
    var se, Ne;
    _.value[h] || (_.value[h] = { month: 0, year: 0 }), _.value[h].month = F === null ? (se = _.value[h]) == null ? void 0 : se.month : F, _.value[h].year = le === null ? (Ne = _.value[h]) == null ? void 0 : Ne.year : le;
  }, L = (h, F) => {
    D[h] = F;
  };
  Xe(() => {
    s.value || (e.startDate && (A(0, De(W(e.startDate)), Re(W(e.startDate))), m.value.multiCalendars && Pe(0)), m.value.startTime && j()), U(!0);
  });
  const U = (h = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (g.value = s.value, M(h)) : X(s.value);
    if (e.timePicker)
      return C();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return ee();
    if (m.value.multiCalendars && h && !e.startDate)
      return G(W(), h);
  }, G = (h, F = !1) => {
    if ((!m.value.multiCalendars || !e.multiStatic || F) && A(0, De(h), Re(h)), m.value.multiCalendars)
      for (let le = 1; le < m.value.multiCalendars; le++) {
        const se = Ze(W(), { month: R.value(le - 1), year: Y.value(le - 1) }), Ne = El(se, { months: 1 });
        _.value[le] = { month: De(Ne), year: Re(Ne) };
      }
  }, X = (h) => {
    G(h), L("hours", $t(h)), L("minutes", Ot(h)), L("seconds", Gt(h));
  }, N = (h, F) => {
    G(h[0], F);
    const le = (se, Ne) => [
      se(h[0]),
      h[1] ? se(h[1]) : D[Ne][1]
    ];
    L("hours", le($t, "hours")), L("minutes", le(Ot, "minutes")), L("seconds", le(Gt, "seconds"));
  }, S = (h, F) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return N(h, F);
    if (e.multiDates) {
      const le = h[h.length - 1];
      return X(le);
    }
  }, M = (h) => {
    const F = s.value;
    S(F, h), m.value.multiCalendars && e.multiCalendarsSolo && l();
  }, C = () => {
    if (j(), !e.range)
      s.value = ct(W(), D.hours, D.minutes, re());
    else {
      const h = D.hours, F = D.minutes;
      s.value = [
        ct(W(), h[0], F[0], re()),
        ct(W(), h[1], F[1], re(!1))
      ];
    }
  }, Z = () => {
    s.value = d(W(), R.value(0), Y.value(0));
  }, ee = () => {
    s.value = W();
  }, re = (h = !0) => e.enableSeconds ? Array.isArray(D.seconds) ? h ? D.seconds[0] : D.seconds[1] : D.seconds : 0, j = () => {
    const h = o();
    if (h) {
      const F = Array.isArray(h), le = F ? [+h[0].hours, +h[1].hours] : +h.hours, se = F ? [+h[0].minutes, +h[1].minutes] : +h.minutes, Ne = F ? [+h[0].seconds, +h[1].seconds] : +h.seconds;
      L("hours", le), L("minutes", se), e.enableSeconds && L("seconds", Ne);
    }
  }, T = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, l = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const h = W(
        W(s.value[1] ? s.value[1] : gt(s.value[0], 1))
      ), [F, le] = [De(s.value[0]), Re(s.value[0])], [se, Ne] = [De(s.value[1]), Re(s.value[1])];
      (F !== se || F === se && le !== Ne) && e.multiCalendarsSolo && A(1, De(h), Re(h));
    }
  }, c = (h) => {
    const F = gt(h, 1);
    return { month: De(F), year: Re(F) };
  }, w = (h) => {
    const F = De(W(h)), le = Re(W(h));
    if (A(0, F, le), m.value.multiCalendars > 0)
      for (let se = 1; se < m.value.multiCalendars; se++) {
        const Ne = c(
          Ze(W(h), { year: R.value(se - 1), month: Y.value(se - 1) })
        );
        A(se, Ne.month, Ne.year);
      }
  }, $ = (h) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((F) => Me(h, F))) {
        const F = s.value.filter((le) => !Me(le, h));
        s.value = F.length ? F : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(h);
    else
      s.value = [h];
  }, E = (h, F) => {
    const le = rt(h, F) ? F : h, se = rt(F, h) ? F : h;
    return Xo({ start: le, end: se });
  }, K = (h, F = 0) => {
    if (Array.isArray(s.value) && s.value[F]) {
      const le = os(h, s.value[F]), se = E(s.value[F], h), Ne = se.length === 1 ? 0 : se.filter((wt) => i(wt)).length, lt = Math.abs(le) - Ne;
      if (e.minRange && e.maxRange)
        return lt >= +e.minRange && lt <= +e.maxRange;
      if (e.minRange)
        return lt >= +e.minRange;
      if (e.maxRange)
        return lt <= +e.maxRange;
    }
    return !0;
  }, Q = (h) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (rt(h, s.value[0]) || Me(h, s.value[0])) ? [s.value[0], h] : e.fixedEnd && (Ke(h, s.value[1]) || Me(h, s.value[1])) ? [h, s.value[1]] : (t("invalid-fixed-range", h), s.value) : [], x = () => {
    e.autoApply && V.value && t("auto-apply", e.partialFlow);
  }, b = () => {
    e.autoApply && t("select-date");
  }, z = (h) => !Xo({ start: h[0], end: h[1] }).some((F) => i(F)), we = (h) => (s.value = p(W(h.value)), x()), oe = (h) => {
    const F = ct(W(h.value), D.hours, D.minutes, re());
    e.multiDates ? $(F) : s.value = F, n(), x();
  }, pe = () => {
    g.value = s.value ? s.value.slice() : [], g.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (g.value = []);
  }, Ie = (h, F) => {
    const le = [W(h.value), Dt(W(h.value), +e.autoRange)];
    z(le) && (F && w(h.value), g.value = le);
  }, it = (h) => {
    me(h.value) || !K(h.value, e.fixedStart ? 0 : 1) || (g.value = Q(W(h.value)));
  }, me = (h) => e.noDisabledRange ? E(g.value[0], h).some((F) => i(F)) : !1, st = (h, F) => {
    if (pe(), e.autoRange)
      return Ie(h, F);
    if (e.fixedStart || e.fixedEnd)
      return it(h);
    g.value[0] ? K(W(h.value)) && !me(h.value) && (Ke(W(h.value), W(g.value[0])) ? g.value.unshift(W(h.value)) : g.value[1] = W(h.value)) : g.value[0] = W(h.value);
  }, at = (h) => {
    g.value[h] = ct(
      g.value[h],
      D.hours[h],
      D.minutes[h],
      re(h !== 1)
    );
  }, ze = () => {
    g.value.length && (g.value[0] && !g.value[1] ? at(0) : (at(0), at(1), n()), s.value = g.value.slice(), g.value[0] && g.value[1] && e.autoApply && t("auto-apply"), g.value[0] && !g.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Qt = (h, F = !1) => {
    if (!(i(h.value) || !h.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return we(h);
      if (!e.range)
        return oe(h);
      At(D.hours) && At(D.minutes) && !e.multiDates && (st(h, F), ze());
    }
  }, ve = (h) => {
    const F = h[0];
    return e.weekNumbers === "local" ? bc(F.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? yc(F.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(F.value) : "";
  }, Pe = (h) => {
    for (let F = h - 1; F >= 0; F--) {
      const le = jt(Ze(W(), { month: R.value(F + 1), year: Y.value(F + 1) }), 1);
      A(F, De(le), Re(le));
    }
    for (let F = h + 1; F <= m.value.multiCalendars - 1; F++) {
      const le = gt(Ze(W(), { month: R.value(F - 1), year: Y.value(F - 1) }), 1);
      A(F, De(le), Re(le));
    }
  }, $e = (h) => d(W(), R.value(h), Y.value(h)), Nt = (h) => ct(h, D.hours, D.minutes, re()), Bt = (h, F) => {
    const le = e.monthPicker ? R.value(h) !== F.month || !F.fromNav : Y.value(h) !== F.year;
    if (A(h, F.month, F.year), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(h), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? Ke($e(h), se[0]) ? se.unshift($e(h)) : se[1] = $e(h) : se = [$e(h)], s.value = se;
        }
      } else
        s.value = $e(h);
    t("update-month-year", { instance: h, month: F.month, year: F.year }), r(e.multiCalendarsSolo ? h : void 0);
  }, qr = async (h = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await dt();
      const F = e.monthPicker ? h : !1;
      e.range ? t("auto-apply", F || !s.value || s.value.length === 1) : t("auto-apply", F);
    }
    n();
  }, un = (h, F) => {
    const le = Ze(W(), { month: R.value(F), year: Y.value(F) }), se = h < 0 ? gt(le, 1) : jt(le, 1);
    v(De(se), Re(se), h < 0, e.preventMinMaxNavigation) && (A(F, De(se), Re(se)), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(F), t("update-month-year", { instance: F, month: De(se), year: Re(se) }), r());
  }, Zt = (h) => {
    Ol(h) && Ol(s.value) && At(D.hours) && At(D.minutes) ? (h[0] && s.value[0] && (s.value[0] = ct(h[0], D.hours[0], D.minutes[0], re())), h[1] && s.value[1] && (s.value[1] = ct(h[1], D.hours[1], D.minutes[1], re(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(h) : !e.range && !xl(h) && (s.value = Nt(h)), t("time-update");
  }, Gr = (h, F = !0, le = !1) => {
    const se = F ? h : D.hours, Ne = !F && !le ? h : D.minutes, lt = le ? h : D.seconds;
    if (e.range && xl(s.value) && At(se) && At(Ne) && At(lt) && !e.disableTimeRangeValidation) {
      const wt = (B) => ct(s.value[B], se[B], Ne[B], lt[B]), Kt = (B) => Fo(s.value[B], 0);
      if (Me(s.value[0], s.value[1]) && (Bo(wt(0), Kt(1)) || Ao(wt(1), Kt(0))))
        return;
    }
    if (L("hours", se), L("minutes", Ne), L("seconds", lt), s.value)
      if (e.multiDates) {
        const wt = T();
        wt && Zt(wt);
      } else
        Zt(s.value);
    else
      e.timePicker && Zt(e.range ? [W(), W()] : W());
    n();
  }, Qr = (h, F) => {
    e.monthChangeOnScroll && un(e.monthChangeOnScroll !== "inverse" ? -h.deltaY : h.deltaY, F);
  }, Zr = (h, F, le = !1) => {
    e.monthChangeOnArrows && e.vertical === le && sn(h, F);
  }, sn = (h, F) => {
    un(h === "right" ? -1 : 1, F);
  };
  return {
    time: D,
    month: R,
    year: Y,
    modelValue: s,
    calendars: _,
    monthYearSelect: qr,
    isDisabled: i,
    updateTime: Gr,
    getWeekNum: ve,
    selectDate: Qt,
    updateMonthYear: Bt,
    handleScroll: Qr,
    getMarker: (h) => e.markers.find((F) => Me(u(h.value), u(F.date))),
    handleArrow: Zr,
    handleSwipe: sn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = Ke(W(), s.value[0]) ? [W(), s.value[0]] : [s.value[0], W()] : s.value = [W()] : s.value = W(), b();
    },
    presetDateRange: (h, F) => {
      F || h.length && h.length <= 2 && e.range && (s.value = h.map((le) => W(le)), b(), e.multiCalendars && dt().then(() => U(!0)));
    }
  };
}, Zy = (e, t, n) => {
  const r = I(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: i,
    getDefaultPattern: u,
    checkRangeEnabled: p,
    checkPartialRangeValue: d,
    isValidDate: v,
    setDateMonthOrYear: m,
    defaults: s
  } = ut(t), g = I(""), _ = tr(t, "format");
  ft(r, () => {
    e("internal-model-change", r.value);
  }), ft(_, () => {
    c();
  });
  const D = (x) => {
    const b = x || W();
    return t.modelType ? $(b) : {
      hours: $t(b),
      minutes: Ot(b),
      seconds: t.enableSeconds ? Gt(b) : 0
    };
  }, R = (x) => t.modelType ? $(x) : { month: De(x), year: Re(x) }, Y = (x) => Array.isArray(x) ? p(() => [
    Vt(W(), x[0]),
    x[1] ? Vt(W(), x[1]) : d()
  ]) : Vt(W(), +x), V = (x, b) => (typeof x == "string" || typeof x == "number") && t.modelType ? w(x) : b, A = (x) => Array.isArray(x) ? [
    V(
      x[0],
      ct(null, +x[0].hours, +x[0].minutes, x[0].seconds)
    ),
    V(
      x[1],
      ct(null, +x[1].hours, +x[1].minutes, x[1].seconds)
    )
  ] : V(x, ct(null, x.hours, x.minutes, x.seconds)), L = (x) => Array.isArray(x) ? p(() => [
    V(x[0], m(null, +x[0].month, +x[0].year)),
    V(
      x[1],
      x[1] ? m(null, +x[1].month, +x[1].year) : d()
    )
  ]) : V(x, m(null, +x.month, +x.year)), U = (x) => {
    if (Array.isArray(x))
      return x.map((b) => w(b));
    throw new Error(Wr.dateArr("multi-dates"));
  }, G = (x) => {
    if (Array.isArray(x))
      return [W(x[0]), W(x[1])];
    throw new Error(Wr.dateArr("week-picker"));
  }, X = (x) => t.modelAuto ? Array.isArray(x) ? [w(x[0]), w(x[1])] : t.autoApply ? [w(x)] : [w(x), null] : Array.isArray(x) ? p(() => [
    w(x[0]),
    x[1] ? w(x[1]) : d()
  ]) : w(x), N = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(d());
  }, S = () => {
    const x = r.value;
    return [
      $(x[0]),
      x[1] ? $(x[1]) : d()
    ];
  }, M = () => r.value[1] ? S() : $(Ge(r.value[0])), C = () => (r.value || []).map((x) => $(x)), Z = () => (N(), t.modelAuto ? M() : t.multiDates ? C() : Array.isArray(r.value) ? p(() => S()) : $(Ge(r.value))), ee = (x) => x ? t.timePicker ? A(Ge(x)) : t.monthPicker ? L(Ge(x)) : t.yearPicker ? Y(Ge(x)) : t.multiDates ? U(Ge(x)) : t.weekPicker ? G(Ge(x)) : X(Ge(x)) : null, re = (x) => {
    const b = ee(x);
    v(Ge(b)) ? (r.value = Ge(b), c()) : (r.value = null, g.value = "");
  }, j = () => {
    var x;
    const b = (z) => {
      var we;
      return rn(z, (we = s.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${b(r.value[0])} ${(x = s.value.textInputOptions) == null ? void 0 : x.rangeSeparator} ${r.value[1] ? b(r.value[1]) : ""}`;
  }, T = () => {
    var x;
    return n.value && r.value ? Array.isArray(r.value) ? j() : rn(r.value, (x = s.value.textInputOptions) == null ? void 0 : x.format) : i(r.value);
  }, l = () => {
    var x;
    return r.value ? t.multiDates ? r.value.map((b) => i(b)).join("; ") : t.textInput && typeof ((x = s.value.textInputOptions) == null ? void 0 : x.format) == "string" ? T() : i(r.value) : "";
  }, c = () => {
    !t.format || typeof t.format == "string" ? g.value = l() : g.value = t.format(r.value);
  }, w = (x) => {
    if (t.utc) {
      const b = new Date(x);
      return t.utc === "preserve" ? new Date(b.getTime() + b.getTimezoneOffset() * 6e4) : b;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(x)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Oo(x, u(), /* @__PURE__ */ new Date()) : o(Oo(x, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(x));
  }, $ = (x) => x ? t.utc ? cy(x, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(x) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(a(x)) : i(a(x), t.modelType) : a(x) : "", E = (x) => {
    e("update:model-value", x);
  }, K = (x) => Array.isArray(r.value) ? [
    x(r.value[0]),
    r.value[1] ? x(r.value[1]) : d()
  ] : x(Ge(r.value)), Q = (x) => E(Ge(K(x)));
  return {
    inputValue: g,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: re,
    formatInputValue: c,
    emitModelValue: () => (c(), t.monthPicker ? Q(R) : t.timePicker ? Q(D) : t.yearPicker ? Q(Re) : t.weekPicker ? E(r.value) : E(Z()))
  };
}, Ky = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = ut(e), i = (m, s) => {
    let g = m;
    return o.value.filters.months.includes(De(g)) ? (g = s ? gt(m, 1) : jt(m, 1), i(g, s)) : g;
  }, u = (m, s) => {
    let g = m;
    return o.value.filters.years.includes(Re(g)) ? (g = s ? Yl(m, 1) : ly(m, 1), u(g, s)) : g;
  }, p = (m) => {
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let g = m ? gt(s, 1) : jt(s, 1), _ = De(g), D = Re(g);
    o.value.filters.months.includes(_) && (g = i(g, m), _ = De(g), D = Re(g)), o.value.filters.years.includes(D) && (g = u(g, m), D = Re(g)), n(_, D, m, e.preventMinMaxNavigation) && d(_, D);
  }, d = (m, s) => {
    t("update-month-year", { month: m, year: s });
  }, v = k(() => (m) => {
    if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate)
      return !1;
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), g = m ? gt(s, 1) : jt(s, 1), _ = [De(g), Re(g)];
    return m ? !r(..._) : !a(..._);
  });
  return { handleMonthYearChange: p, isDisabled: v, updateMonthYear: d };
};
var er = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(er || {});
const Xy = (e, t, n, r) => {
  const a = I({
    top: "0",
    left: "0",
    transform: "none"
  }), o = I(!1), i = tr(r, "teleportCenter");
  ft(i, () => {
    D();
  });
  const u = (N) => {
    if (r.teleport) {
      const S = N.getBoundingClientRect();
      return {
        left: S.left + window.scrollX,
        top: S.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, p = (N, S) => {
    a.value.left = `${N + S}px`, a.value.transform = "translateX(-100%)";
  }, d = (N) => {
    a.value.left = `${N}px`, a.value.transform = "translateX(0)";
  }, v = (N, S, M = !1) => {
    r.position === er.left && d(N), r.position === er.right && p(N, S), r.position === er.center && (a.value.left = `${N + S / 2}px`, a.value.transform = M ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, m = (N) => {
    const { width: S, height: M } = N.getBoundingClientRect(), { top: C, left: Z } = r.altPosition ? r.altPosition(N) : u(N);
    return { top: +C, left: +Z, width: S, height: M };
  }, s = () => {
    const N = Le(t);
    if (N) {
      const { top: S, left: M, width: C, height: Z } = m(N);
      a.value.top = `${S + Z / 2}px`, a.value.transform = "translateY(-50%)", v(M, C, !0);
    }
  }, g = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, _ = () => {
    const N = Le(t), { top: S, left: M, transform: C } = r.altPosition(N);
    a.value = { top: `${S}px`, left: `${M}px`, transform: C || "" };
  }, D = (N = !0) => {
    if (!r.inline)
      return i.value ? g() : r.altPosition !== null ? _() : (N && n("recalculate-position"), U());
  }, R = ({
    inputEl: N,
    menuEl: S,
    left: M,
    width: C
  }) => {
    window.screen.width > 768 && v(M, C), A(N, S);
  }, Y = (N, S) => {
    const { top: M, left: C, height: Z, width: ee } = m(N);
    a.value.top = `${Z + M + +r.offset}px`, R({ inputEl: N, menuEl: S, left: C, width: ee }), o.value = !1;
  }, V = (N, S) => {
    const { top: M, left: C, width: Z } = m(N), { height: ee } = S.getBoundingClientRect();
    a.value.top = `${M - ee - +r.offset}px`, R({ inputEl: N, menuEl: S, left: C, width: Z }), o.value = !0;
  }, A = (N, S) => {
    if (r.autoPosition) {
      const { left: M, width: C } = m(N), { left: Z, right: ee } = S.getBoundingClientRect();
      return Z <= 0 || Z <= M ? d(M) : ee >= document.documentElement.clientWidth ? p(M, C) : v(M, C);
    }
  }, L = (N, S) => {
    const { height: M } = S.getBoundingClientRect(), { top: C, height: Z } = N.getBoundingClientRect(), ee = window.innerHeight - C - Z, re = C;
    return M <= ee ? Y(N, S) : M > ee && M <= re ? V(N, S) : ee >= re ? Y(N, S) : V(N, S);
  }, U = () => {
    const N = Le(t), S = Le(e);
    if (N && S)
      return r.autoPosition ? L(N, S) : Y(N, S);
  }, G = function(N) {
    if (N) {
      const S = N.scrollHeight > N.clientHeight, M = window.getComputedStyle(N).overflowY.indexOf("hidden") !== -1;
      return S && !M;
    }
    return !0;
  }, X = function(N) {
    return !N || N === document.body ? window : G(N) ? N : X(N.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: D, setInitialPosition: s, getScrollableParent: X };
}, zt = [
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
], Jy = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ev = {
  all: () => zt,
  monthYear: () => zt.filter((e) => e.use.includes("month-year")),
  input: () => Jy,
  timePicker: () => zt.filter((e) => e.use.includes("time")),
  action: () => zt.filter((e) => e.use.includes("action")),
  calendar: () => zt.filter((e) => e.use.includes("calendar")),
  menu: () => zt.filter((e) => e.use.includes("menu"))
}, Yt = (e, t, n) => {
  const r = [];
  return ev[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, zr = (e) => ({ transitionName: k(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), It = {
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
}, tv = ["aria-label", "aria-disabled", "aria-readonly"], nv = {
  key: 1,
  class: "dp__input_wrap"
}, rv = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], av = {
  key: 2,
  class: "dp__input_icon"
}, ov = {
  key: 4,
  class: "dp__clear_icon"
}, iv = /* @__PURE__ */ fe({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...It
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: i, getDefaultStartTime: u, assignDefaultTime: p } = ut(r), d = I(), v = I(null), m = I(!1), s = k(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: m.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), g = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), d.value = null);
    }, _ = (S) => {
      var M;
      const C = u();
      return sy(
        S,
        ((M = i.value.textInputOptions) == null ? void 0 : M.format) || a(),
        C || p({}),
        r.inputValue
      );
    }, D = (S) => {
      const { rangeSeparator: M } = i.value.textInputOptions, [C, Z] = S.split(`${M}`);
      if (C) {
        const ee = _(C.trim()), re = Z ? _(Z.trim()) : null, j = ee && re ? [ee, re] : [ee];
        d.value = ee ? j : null;
      }
    }, R = (S) => {
      if (r.range)
        D(S);
      else if (r.multiDates) {
        const M = S.split(";");
        d.value = M.map((C) => _(C.trim())).filter((C) => C);
      } else
        d.value = _(S);
    }, Y = (S) => {
      var M;
      const { value: C } = S.target;
      C !== "" ? ((M = i.value.textInputOptions) != null && M.openMenu && !r.isMenuOpen && n("open"), R(C), n("set-input-date", d.value)) : g(), n("update:input-value", C);
    }, V = () => {
      var S, M;
      (S = i.value.textInputOptions) != null && S.enterSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (M = i.value.textInputOptions) != null && M.enterSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, A = () => {
      var S, M;
      (S = i.value.textInputOptions) != null && S.tabSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (M = i.value.textInputOptions) != null && M.tabSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, L = () => {
      m.value = !0, n("focus");
    }, U = (S) => {
      var M;
      S.preventDefault(), S.stopImmediatePropagation(), S.stopPropagation(), r.textInput && (M = i.value.textInputOptions) != null && M.openMenu && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, G = () => {
      m.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && d.value && (n("set-input-date", d.value), n("select-date"), d.value = null);
    }, X = () => {
      n("clear");
    }, N = (S) => {
      r.textInput || S.preventDefault();
    };
    return t({
      focusInput: () => {
        v.value && v.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (S) => {
        d.value = S;
      }
    }), (S, M) => {
      var C;
      return y(), O("div", {
        onClick: U,
        "aria-label": (C = f(i).ariaLabels) == null ? void 0 : C.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": S.disabled,
        "aria-readonly": S.readonly
      }, [
        S.$slots.trigger && !S.$slots["dp-input"] && !S.inline ? q(S.$slots, "trigger", { key: 0 }) : P("", !0),
        !S.$slots.trigger && (!S.inline || S.inlineWithInput) ? (y(), O("div", nv, [
          S.$slots["dp-input"] && !S.$slots.trigger && !S.inline ? q(S.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: Y,
            onEnter: V,
            onTab: A,
            onClear: X
          }) : P("", !0),
          S.$slots["dp-input"] ? P("", !0) : (y(), O("input", {
            key: 1,
            ref_key: "inputRef",
            ref: v,
            id: S.uid ? `dp-input-${S.uid}` : void 0,
            name: S.name,
            class: ie(f(s)),
            inputmode: S.textInput ? "text" : "none",
            placeholder: S.placeholder,
            disabled: S.disabled,
            readonly: S.readonly,
            required: S.required,
            value: e.inputValue,
            autocomplete: S.autocomplete,
            onInput: Y,
            onKeydown: [
              ge(U, ["enter"]),
              ge(A, ["tab"]),
              N
            ],
            onBlur: G,
            onFocus: L,
            onKeypress: N
          }, null, 42, rv)),
          S.$slots["input-icon"] && !S.hideInputIcon ? (y(), O("span", av, [
            q(S.$slots, "input-icon")
          ])) : P("", !0),
          !S.$slots["input-icon"] && !S.hideInputIcon && !S.$slots["dp-input"] ? (y(), te(f(Lr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : P("", !0),
          S.$slots["clear-icon"] && e.inputValue && S.clearable && !S.disabled && !S.readonly ? (y(), O("span", ov, [
            q(S.$slots, "clear-icon", { clear: X })
          ])) : P("", !0),
          S.clearable && !S.$slots["clear-icon"] && e.inputValue && !S.disabled && !S.readonly ? (y(), te(f(uy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ee(X, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : P("", !0)
        ])) : P("", !0)
      ], 8, tv);
    };
  }
}), lv = { class: "dp__selection_preview" }, uv = { class: "dp__action_buttons" }, sv = ["onKeydown"], cv = /* @__PURE__ */ fe({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = ut(n), { buildMatrix: i } = Mt(), u = I(null), p = I(null);
    Xe(() => {
      n.arrowNavigation && i([Le(u), Le(p)], "actionRow");
    });
    const d = k(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), v = k(() => !s.value || !g.value || !d.value), m = k(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: v.value
    })), s = k(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), g = k(() => n.monthPicker ? Y(n.internalModelValue) : !0), _ = () => {
      const A = o.value.previewFormat;
      return n.timePicker || n.monthPicker, A(Ge(n.internalModelValue));
    }, D = () => {
      const A = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(A[0])} - ${r(A[1])}` : [r(A[0]), r(A[1])];
    }, R = k(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? D() : n.multiDates ? n.internalModelValue.map((A) => `${r(A)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : _()), Y = (A) => {
      if (!n.monthPicker)
        return !0;
      let L = !0;
      return n.minDate && n.maxDate ? rt(W(A), W(n.minDate)) && Ke(W(A), W(n.maxDate)) : (n.minDate && (L = rt(W(A), W(n.minDate))), n.maxDate && (L = Ke(W(A), W(n.maxDate))), L);
    }, V = () => {
      s.value && g.value && d.value ? t("select-date") : t("invalid-select");
    };
    return (A, L) => (y(), O("div", {
      class: "dp__action_row",
      style: St(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      A.$slots["action-row"] ? q(A.$slots, "action-row", Qe(je({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: f(v),
        selectDate: () => A.$emit("select-date"),
        closePicker: () => A.$emit("close-picker")
      }))) : (y(), O(ye, { key: 1 }, [
        H("div", lv, [
          A.$slots["action-preview"] ? q(A.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : P("", !0),
          A.$slots["action-preview"] ? P("", !0) : (y(), O(ye, { key: 1 }, [
            Array.isArray(f(R)) ? P("", !0) : (y(), O(ye, { key: 0 }, [
              Ae(he(f(R)), 1)
            ], 64)),
            Array.isArray(f(R)) ? (y(!0), O(ye, { key: 1 }, Te(f(R), (U, G) => (y(), O("div", { key: G }, he(U), 1))), 128)) : P("", !0)
          ], 64))
        ]),
        H("div", uv, [
          A.$slots["action-select"] ? q(A.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : P("", !0),
          A.$slots["action-select"] ? P("", !0) : (y(), O(ye, { key: 1 }, [
            A.inline ? P("", !0) : (y(), O("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: L[0] || (L[0] = (U) => A.$emit("close-picker")),
              onKeydown: [
                L[1] || (L[1] = ge((U) => A.$emit("close-picker"), ["enter"])),
                L[2] || (L[2] = ge((U) => A.$emit("close-picker"), ["space"]))
              ]
            }, he(A.cancelText), 545)),
            H("span", {
              class: ie(f(m)),
              tabindex: "0",
              onKeydown: [
                ge(V, ["enter"]),
                ge(V, ["space"])
              ],
              onClick: V,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: p
            }, he(A.selectText), 43, sv)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), fv = ["aria-label"], dv = {
  class: "dp__calendar_header",
  role: "row"
}, pv = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, mv = /* @__PURE__ */ H("div", { class: "dp__calendar_header_separator" }, null, -1), yv = ["aria-label"], vv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, hv = { class: "dp__cell_inner" }, gv = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], bv = /* @__PURE__ */ fe({
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
    ...It
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: i } = ut(r), u = I(null), p = I({
      bottom: "",
      left: "",
      transform: ""
    }), d = I([]), v = I(null), m = I(!0), s = I(""), g = I({ startX: 0, endX: 0, startY: 0, endY: 0 }), _ = I([]), D = I({ left: "50%" }), R = k(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Yy(r.locale, +r.weekStart));
    Xe(() => {
      n("mount", { cmp: "calendar", refs: d }), r.noSwipe || v.value && (v.value.addEventListener("touchstart", C, { passive: !1 }), v.value.addEventListener("touchend", Z, { passive: !1 }), v.value.addEventListener("touchmove", ee, { passive: !1 })), r.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", T, { passive: !1 });
    });
    const Y = (l) => l ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", V = (l, c) => {
      if (r.transitions) {
        const w = bt(o(W(), r.month, r.year));
        s.value = rt(bt(o(W(), l, c)), w) ? i.value.transitions[Y(!0)] : i.value.transitions[Y(!1)], m.value = !1, dt(() => {
          m.value = !0;
        });
      }
    }, A = k(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), L = k(() => (l) => {
      const c = Wy(l);
      return {
        dp__marker_dot: c.type === "dot",
        dp__marker_line: c.type === "line"
      };
    }), U = k(() => (l) => Me(l, u.value)), G = k(() => ({
      dp__calendar: !0,
      dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
    })), X = k(() => (l) => r.hideOffsetDates ? l.current : !0), N = k(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), S = async (l, c, w) => {
      var $, E;
      if (n("set-hover-date", l), (E = ($ = l.marker) == null ? void 0 : $.tooltip) != null && E.length) {
        const K = Le(d.value[c][w]);
        if (K) {
          const { width: Q, height: x } = K.getBoundingClientRect();
          u.value = l.value;
          let b = { left: `${Q / 2}px` }, z = -50;
          if (await dt(), _.value[0]) {
            const { left: we, width: oe } = _.value[0].getBoundingClientRect();
            we < 0 && (b = { left: "0" }, z = 0, D.value.left = `${Q / 2}px`), window.innerWidth < we + oe && (b = { right: "0" }, z = 0, D.value.left = `${oe - Q / 2}px`);
          }
          p.value = {
            bottom: `${x}px`,
            ...b,
            transform: `translateX(${z}%)`
          }, n("tooltip-open", l.marker);
        }
      }
    }, M = (l) => {
      u.value && (u.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", l.marker));
    }, C = (l) => {
      g.value.startX = l.changedTouches[0].screenX, g.value.startY = l.changedTouches[0].screenY;
    }, Z = (l) => {
      g.value.endX = l.changedTouches[0].screenX, g.value.endY = l.changedTouches[0].screenY, re();
    }, ee = (l) => {
      r.vertical && !r.inline && l.preventDefault();
    }, re = () => {
      const l = r.vertical ? "Y" : "X";
      Math.abs(g.value[`start${l}`] - g.value[`end${l}`]) > 10 && n("handle-swipe", g.value[`start${l}`] > g.value[`end${l}`] ? "right" : "left");
    }, j = (l, c, w) => {
      l && (Array.isArray(d.value[c]) ? d.value[c][w] = l : d.value[c] = [l]), r.arrowNavigation && a(d.value, "calendar");
    }, T = (l) => {
      r.monthChangeOnScroll && (l.preventDefault(), n("handle-scroll", l));
    };
    return t({ triggerTransition: V }), (l, c) => {
      var w;
      return y(), O("div", {
        class: ie(f(G))
      }, [
        H("div", {
          style: St(f(N))
        }, [
          e.specificMode ? P("", !0) : (y(), O("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: v,
            class: ie(f(A)),
            role: "grid",
            "aria-label": (w = f(i).ariaLabels) == null ? void 0 : w.calendarWrap
          }, [
            H("div", dv, [
              l.weekNumbers ? (y(), O("div", pv, he(l.weekNumName), 1)) : P("", !0),
              (y(!0), O(ye, null, Te(f(R), ($, E) => (y(), O("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: E,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? q(l.$slots, "calendar-header", {
                  key: 0,
                  day: $,
                  index: E
                }) : P("", !0),
                l.$slots["calendar-header"] ? P("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he($), 1)
                ], 64))
              ]))), 128))
            ]),
            mv,
            be(yt, {
              name: s.value,
              css: !!l.transitions
            }, {
              default: J(() => {
                var $;
                return [
                  m.value ? (y(), O("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": ($ = f(i).ariaLabels) == null ? void 0 : $.calendarDays
                  }, [
                    (y(!0), O(ye, null, Te(e.mappedDates, (E, K) => (y(), O("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: K
                    }, [
                      l.weekNumbers ? (y(), O("div", vv, [
                        H("div", hv, he(e.getWeekNum(E.days)), 1)
                      ])) : P("", !0),
                      (y(!0), O(ye, null, Te(E.days, (Q, x) => {
                        var b, z, we;
                        return y(), O("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (oe) => j(oe, K, x),
                          key: x + K,
                          "aria-selected": Q.classData.dp__active_date || Q.classData.dp__range_start || Q.classData.dp__range_start,
                          "aria-disabled": Q.classData.dp__cell_disabled,
                          "aria-label": (z = (b = f(i).ariaLabels) == null ? void 0 : b.day) == null ? void 0 : z.call(b, Q),
                          tabindex: "0",
                          "data-test": Q.value,
                          onClick: Ee((oe) => l.$emit("select-date", Q), ["stop", "prevent"]),
                          onKeydown: [
                            ge((oe) => l.$emit("select-date", Q), ["enter"]),
                            ge((oe) => l.$emit("handle-space", Q), ["space"])
                          ],
                          onMouseenter: (oe) => S(Q, K, x),
                          onMouseleave: (oe) => M(Q)
                        }, [
                          H("div", {
                            class: ie(["dp__cell_inner", Q.classData])
                          }, [
                            l.$slots.day && f(X)(Q) ? q(l.$slots, "day", {
                              key: 0,
                              day: +Q.text,
                              date: Q.value
                            }) : P("", !0),
                            l.$slots.day ? P("", !0) : (y(), O(ye, { key: 1 }, [
                              Ae(he(Q.text), 1)
                            ], 64)),
                            Q.marker && f(X)(Q) ? (y(), O("div", {
                              key: 2,
                              class: ie(f(L)(Q.marker)),
                              style: St(Q.marker.color ? { backgroundColor: Q.marker.color } : {})
                            }, null, 6)) : P("", !0),
                            f(U)(Q.value) ? (y(), O("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: _,
                              style: St(p.value)
                            }, [
                              (we = Q.marker) != null && we.tooltip ? (y(), O("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: c[0] || (c[0] = Ee(() => {
                                }, ["stop"]))
                              }, [
                                (y(!0), O(ye, null, Te(Q.marker.tooltip, (oe, pe) => (y(), O("div", {
                                  key: pe,
                                  class: "dp__tooltip_text"
                                }, [
                                  l.$slots["marker-tooltip"] ? q(l.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: oe,
                                    day: Q.value
                                  }) : P("", !0),
                                  l.$slots["marker-tooltip"] ? P("", !0) : (y(), O(ye, { key: 1 }, [
                                    H("div", {
                                      class: "dp__tooltip_mark",
                                      style: St(oe.color ? { backgroundColor: oe.color } : {})
                                    }, null, 4),
                                    H("div", null, he(oe.text), 1)
                                  ], 64))
                                ]))), 128)),
                                H("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: St(D.value)
                                }, null, 4)
                              ])) : P("", !0)
                            ], 4)) : P("", !0)
                          ], 2)
                        ], 40, gv);
                      }), 128))
                    ]))), 128))
                  ], 8, yv)) : P("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, fv))
        ], 4)
      ], 2);
    };
  }
}), _v = ["aria-label", "aria-disabled"], ca = /* @__PURE__ */ fe({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = I(null);
    return Xe(() => t("set-ref", n)), (r, a) => (y(), O("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = ge((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = ge((o) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      H("div", {
        class: ie(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        q(r.$slots, "default")
      ], 2)
    ], 40, _v));
  }
}), wv = ["onKeydown"], kv = { class: "dp__selection_grid_header" }, Sv = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], $v = ["aria-label", "onKeydown"], on = /* @__PURE__ */ fe({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: i } = Mt(), { hideNavigationButtons: u } = ut(r), p = I(!1), d = I(null), v = I(null), m = I([]), s = I(), g = I(null), _ = I(0), D = I(null);
    wu(() => {
      d.value = null;
    }), Xe(() => {
      dt().then(() => S()), Y(), R(!0);
    }), Do(() => R(!1));
    const R = (T) => {
      var l;
      r.arrowNavigation && ((l = r.headerRefs) != null && l.length ? i(T) : a(T));
    }, Y = () => {
      const T = Le(v);
      T && (r.textInput || T.focus({ preventScroll: !0 }), p.value = T.clientHeight < T.scrollHeight);
    }, V = k(
      () => ({
        dp__overlay: !0
      })
    ), A = k(() => ({
      dp__overlay_col: !0
    })), L = (T) => r.skipActive ? !1 : T.value === r.modelValue, U = k(() => r.items.map((T) => T.filter((l) => l).map((l) => {
      var c, w, $;
      const E = r.disabledValues.some((Q) => Q === l.value) || N(l.value), K = (c = r.multiModelValue) != null && c.length ? (w = r.multiModelValue) == null ? void 0 : w.some(
        (Q) => Me(
          Q,
          Vt(
            r.monthPicker ? an(/* @__PURE__ */ new Date(), l.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : l.value
          )
        )
      ) : L(l);
      return {
        ...l,
        className: {
          dp__overlay_cell_active: K,
          dp__overlay_cell: !K,
          dp__overlay_cell_disabled: E,
          dp__overlay_cell_active_disabled: E && K,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: ($ = r.multiModelValue) != null && $.length ? C(l.value) : !1
        }
      };
    }))), G = k(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: r.autoApply
      })
    ), X = k(() => {
      var T, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((T = r.items) == null ? void 0 : T.length) <= 6,
        dp__container_block: ((l = r.items) == null ? void 0 : l.length) > 6
      };
    }), N = (T) => {
      const l = r.maxValue || r.maxValue === 0, c = r.minValue || r.minValue === 0;
      return !l && !c ? !1 : l && c ? +T > +r.maxValue || +T < +r.minValue : l ? +T > +r.maxValue : c ? +T < +r.minValue : !1;
    }, S = () => {
      const T = Le(d), l = Le(v), c = Le(g), w = Le(D), $ = c ? c.getBoundingClientRect().height : 0;
      l && (_.value = l.getBoundingClientRect().height - $), T && w && (w.scrollTop = T.offsetTop - w.offsetTop - (_.value / 2 - T.getBoundingClientRect().height) - $);
    }, M = (T) => {
      !r.disabledValues.some((l) => l === T) && !N(T) && (n("update:model-value", T), n("selected"));
    }, C = (T) => {
      const l = r.monthPicker ? r.year : T;
      return uu(
        r.multiModelValue,
        Vt(
          r.monthPicker ? an(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? l : s.value || l
        ),
        Vt(r.monthPicker ? an(/* @__PURE__ */ new Date(), T) : /* @__PURE__ */ new Date(), l)
      );
    }, Z = () => {
      n("toggle"), n("reset-flow");
    }, ee = () => {
      r.escClose && Z();
    }, re = (T, l, c, w) => {
      T && (l.value === +r.modelValue && !r.disabledValues.includes(l.value) && (d.value = T), r.arrowNavigation && (Array.isArray(m.value[c]) ? m.value[c][w] = T : m.value[c] = [T], j()));
    }, j = () => {
      var T, l;
      const c = (T = r.headerRefs) != null && T.length ? [r.headerRefs].concat(m.value) : m.value.concat([r.skipButtonRef ? [] : [g.value]]);
      o(Ge(c), (l = r.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: Y }), (T, l) => {
      var c;
      return y(), O("div", {
        ref_key: "gridWrapRef",
        ref: v,
        class: ie(f(V)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ge(ee, ["esc"])
      }, [
        H("div", {
          class: ie(f(X)),
          ref_key: "containerRef",
          ref: D,
          role: "grid",
          style: St({ height: `${_.value}px` })
        }, [
          H("div", kv, [
            q(T.$slots, "header")
          ]),
          T.$slots.overlay ? q(T.$slots, "overlay", { key: 0 }) : (y(!0), O(ye, { key: 1 }, Te(f(U), (w, $) => (y(), O("div", {
            class: "dp__overlay_row",
            key: $,
            role: "row"
          }, [
            (y(!0), O(ye, null, Te(w, (E, K) => (y(), O("div", {
              role: "gridcell",
              class: ie(f(A)),
              key: E.value,
              "aria-selected": E.value === e.modelValue && !e.disabledValues.includes(E.value),
              "aria-disabled": E.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Q) => re(Q, E, $, K),
              tabindex: "0",
              "data-test": E.text,
              onClick: (Q) => M(E.value),
              onKeydown: [
                ge((Q) => M(E.value), ["enter"]),
                ge((Q) => M(E.value), ["space"])
              ],
              onMouseover: (Q) => s.value = E.value
            }, [
              H("div", {
                class: ie(E.className)
              }, [
                T.$slots.item ? q(T.$slots, "item", {
                  key: 0,
                  item: E
                }) : P("", !0),
                T.$slots.item ? P("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(E.text), 1)
                ], 64))
              ], 2)
            ], 42, Sv))), 128))
          ]))), 128))
        ], 6),
        T.$slots["button-icon"] ? xt((y(), O("div", {
          key: 0,
          role: "button",
          "aria-label": (c = e.ariaLabels) == null ? void 0 : c.toggleOverlay,
          class: ie(f(G)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: g,
          onClick: Z,
          onKeydown: ge(Z, ["enter"])
        }, [
          q(T.$slots, "button-icon")
        ], 42, $v)), [
          [pn, !f(u)(e.type)]
        ]) : P("", !0)
      ], 42, wv);
    };
  }
}), Ov = ["aria-label"], Tl = /* @__PURE__ */ fe({
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
    const n = e, { transitionName: r, showTransition: a } = zr(n.transitions), o = I(null);
    return Xe(() => t("set-ref", o)), (i, u) => (y(), O(ye, null, [
      H("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (p) => i.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = ge((p) => i.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = ge((p) => i.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        q(i.$slots, "default")
      ], 40, Ov),
      be(yt, {
        name: f(r)(e.showSelectionGrid),
        css: f(a)
      }, {
        default: J(() => [
          e.showSelectionGrid ? (y(), te(on, je({ key: 0 }, {
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
            "onUpdate:modelValue": u[3] || (u[3] = (p) => i.$emit("update:model-value", p)),
            onToggle: u[4] || (u[4] = (p) => i.$emit("toggle"))
          }), We({
            "button-icon": J(() => [
              i.$slots["calendar-icon"] ? q(i.$slots, "calendar-icon", { key: 0 }) : P("", !0),
              i.$slots["calendar-icon"] ? P("", !0) : (y(), te(f(Lr), { key: 1 }))
            ]),
            _: 2
          }, [
            i.$slots[e.slotName] ? {
              name: "item",
              fn: J(({ item: p }) => [
                q(i.$slots, e.slotName, { item: p })
              ]),
              key: "0"
            } : void 0,
            i.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: J(() => [
                q(i.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            i.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: J(() => [
                q(i.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : P("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), xv = { class: "dp__month_year_row" }, Tv = { class: "dp__month_year_wrap" }, Pv = { class: "dp__month_picker_header" }, Cv = ["aria-label"], Dv = ["aria-label"], Rv = ["aria-label"], Mv = /* @__PURE__ */ fe({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = ut(r), { transitionName: o, showTransition: i } = zr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: p, isDisabled: d, updateMonthYear: v } = Ky(r, n), m = I(!1), s = I(!1), g = I([null, null, null, null]), _ = I(null), D = I(null), R = I(null);
    Xe(() => {
      n("mount");
    });
    const Y = (b) => ({
      get: () => r[b],
      set: (z) => {
        const we = b === "month" ? "year" : "month";
        n("update-month-year", { [b]: z, [we]: r[we] }), n("month-year-select", b === "year"), b === "month" ? $(!0) : E(!0);
      }
    }), V = k(Y("month")), A = k(Y("year")), L = (b) => {
      const z = Re(W(b));
      return r.year === z;
    }, U = k(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((b) => W(b)).filter((b) => L(b)).map((b) => De(b)) : [] : []), G = k(() => (b) => {
      const z = b === "month";
      return {
        showSelectionGrid: (z ? m : s).value,
        items: (z ? T : l).value,
        disabledValues: a.value.filters[z ? "months" : "years"].concat(U.value),
        minValue: (z ? M : N).value,
        maxValue: (z ? C : S).value,
        headerRefs: z && r.monthPicker ? [_.value, D.value, R.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), X = k(() => (b) => ({
      month: r.month,
      year: r.year,
      items: b === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: v,
      toggle: b === "month" ? $ : E
    })), N = k(() => r.minDate ? Re(W(r.minDate)) : null), S = k(() => r.maxDate ? Re(W(r.maxDate)) : null), M = k(() => {
      if (r.minDate && N.value) {
        if (N.value > r.year)
          return 12;
        if (N.value === r.year)
          return De(W(r.minDate));
      }
      return null;
    }), C = k(() => r.maxDate && S.value ? S.value < r.year ? -1 : S.value === r.year ? De(W(r.maxDate)) : null : null), Z = k(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), ee = (b) => b.reverse(), re = (b, z = !1) => {
      const we = [], oe = (pe) => z ? ee(pe) : pe;
      for (let pe = 0; pe < b.length; pe += 3) {
        const Ie = [b[pe], b[pe + 1], b[pe + 2]];
        we.push(oe(Ie));
      }
      return z ? we.reverse() : we;
    }, j = k(() => r.months.find((z) => z.value === r.month) || { text: "", value: 0 }), T = k(() => re(r.months)), l = k(() => re(r.years, r.reverseYears)), c = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), w = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), $ = (b = !1) => {
      K(b), m.value = !m.value, m.value || n("overlay-closed");
    }, E = (b = !1) => {
      K(b), s.value = !s.value, s.value || n("overlay-closed");
    }, K = (b) => {
      b || n("reset-flow");
    }, Q = (b = !1) => {
      d.value(b) || n("update-month-year", {
        year: b ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, x = (b, z) => {
      r.arrowNavigation && (g.value[z] = Le(b), u(g.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: $,
      toggleYearPicker: E,
      handleMonthYearChange: p
    }), (b, z) => {
      var we, oe, pe, Ie, it;
      return y(), O("div", xv, [
        b.$slots["month-year"] ? q(b.$slots, "month-year", Qe(je({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: f(v), handleMonthYearChange: f(p), instance: e.instance }))) : (y(), O(ye, { key: 1 }, [
          !b.monthPicker && !b.yearPicker ? (y(), O(ye, { key: 0 }, [
            f(c) && !b.vertical ? (y(), te(ca, {
              key: 0,
              "aria-label": (we = f(a).ariaLabels) == null ? void 0 : we.prevMonth,
              disabled: f(d)(!1),
              onActivate: z[0] || (z[0] = (me) => f(p)(!1)),
              onSetRef: z[1] || (z[1] = (me) => x(me, 0))
            }, {
              default: J(() => [
                b.$slots["arrow-left"] ? q(b.$slots, "arrow-left", { key: 0 }) : P("", !0),
                b.$slots["arrow-left"] ? P("", !0) : (y(), te(f(dl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            H("div", Tv, [
              be(Tl, je({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (oe = f(a).ariaLabels) == null ? void 0 : oe.openMonthsOverlay,
                modelValue: f(V),
                "onUpdate:modelValue": z[2] || (z[2] = (me) => Fe(V) ? V.value = me : null)
              }, f(G)("month"), {
                onToggle: $,
                onSetRef: z[3] || (z[3] = (me) => x(me, 1))
              }), We({
                default: J(() => [
                  b.$slots.month ? q(b.$slots, "month", Qe(je({ key: 0 }, f(j)))) : P("", !0),
                  b.$slots.month ? P("", !0) : (y(), O(ye, { key: 1 }, [
                    Ae(he(f(j).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                b.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: J(() => [
                    q(b.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                b.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: J(({ item: me }) => [
                    q(b.$slots, "month-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                b.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: J(() => [
                    q(b.$slots, "month-overlay", Qe(mt(f(X)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                b.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: J(() => [
                    q(b.$slots, "month-overlay-header", { toggle: $ })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              be(Tl, je({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (pe = f(a).ariaLabels) == null ? void 0 : pe.openYearsOverlay,
                modelValue: f(A),
                "onUpdate:modelValue": z[4] || (z[4] = (me) => Fe(A) ? A.value = me : null)
              }, f(G)("year"), {
                onToggle: E,
                onSetRef: z[5] || (z[5] = (me) => x(me, 2))
              }), We({
                default: J(() => [
                  b.$slots.year ? q(b.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : P("", !0),
                  b.$slots.year ? P("", !0) : (y(), O(ye, { key: 1 }, [
                    Ae(he(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                b.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: J(() => [
                    q(b.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                b.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: J(({ item: me }) => [
                    q(b.$slots, "year-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                b.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: J(() => [
                    q(b.$slots, "year-overlay", Qe(mt(f(X)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                b.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: J(() => [
                    q(b.$slots, "year-overlay-header", { toggle: E })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            f(c) && b.vertical ? (y(), te(ca, {
              key: 1,
              "aria-label": (Ie = f(a).ariaLabels) == null ? void 0 : Ie.prevMonth,
              disabled: f(d)(!1),
              onActivate: z[6] || (z[6] = (me) => f(p)(!1))
            }, {
              default: J(() => [
                b.$slots["arrow-up"] ? q(b.$slots, "arrow-up", { key: 0 }) : P("", !0),
                b.$slots["arrow-up"] ? P("", !0) : (y(), te(f(iu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            f(w) ? (y(), te(ca, {
              key: 2,
              ref: "rightIcon",
              disabled: f(d)(!0),
              "aria-label": (it = f(a).ariaLabels) == null ? void 0 : it.nextMonth,
              onActivate: z[7] || (z[7] = (me) => f(p)(!0)),
              onSetRef: z[8] || (z[8] = (me) => x(me, 3))
            }, {
              default: J(() => [
                b.$slots[b.vertical ? "arrow-down" : "arrow-right"] ? q(b.$slots, b.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : P("", !0),
                b.$slots[b.vertical ? "arrow-down" : "arrow-right"] ? P("", !0) : (y(), te(Rl(b.vertical ? f(lu) : f(pl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : P("", !0)
          ], 64)) : P("", !0),
          b.monthPicker ? (y(), te(on, je({ key: 1 }, f(G)("month"), {
            "skip-active": b.range,
            year: e.year,
            "multi-model-value": f(Z),
            "month-picker": "",
            modelValue: f(V),
            "onUpdate:modelValue": z[17] || (z[17] = (me) => Fe(V) ? V.value = me : null),
            onToggle: $,
            onSelected: z[18] || (z[18] = (me) => b.$emit("overlay-closed"))
          }), We({
            header: J(() => {
              var me, st, at;
              return [
                H("div", Pv, [
                  H("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: _,
                    onClick: z[9] || (z[9] = (ze) => Q(!1)),
                    onKeydown: z[10] || (z[10] = ge((ze) => Q(!1), ["enter"]))
                  }, [
                    H("div", {
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!1) }]),
                      role: "button",
                      "aria-label": (me = f(a).ariaLabels) == null ? void 0 : me.prevMonth
                    }, [
                      b.$slots["arrow-left"] ? q(b.$slots, "arrow-left", { key: 0 }) : P("", !0),
                      b.$slots["arrow-left"] ? P("", !0) : (y(), te(f(dl), { key: 1 }))
                    ], 10, Cv)
                  ], 544),
                  H("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: D,
                    "aria-label": (st = f(a).ariaLabels) == null ? void 0 : st.openYearsOverlay,
                    tabindex: "0",
                    onClick: z[11] || (z[11] = () => E(!1)),
                    onKeydown: z[12] || (z[12] = ge(() => E(!1), ["enter"]))
                  }, [
                    b.$slots.year ? q(b.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : P("", !0),
                    b.$slots.year ? P("", !0) : (y(), O(ye, { key: 1 }, [
                      Ae(he(e.year), 1)
                    ], 64))
                  ], 40, Dv),
                  H("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: R,
                    onClick: z[13] || (z[13] = (ze) => Q(!0)),
                    onKeydown: z[14] || (z[14] = ge((ze) => Q(!0), ["enter"]))
                  }, [
                    H("div", {
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!0) }]),
                      role: "button",
                      "aria-label": (at = f(a).ariaLabels) == null ? void 0 : at.nextMonth
                    }, [
                      b.$slots["arrow-right"] ? q(b.$slots, "arrow-right", { key: 0 }) : P("", !0),
                      b.$slots["arrow-right"] ? P("", !0) : (y(), te(f(pl), { key: 1 }))
                    ], 10, Rv)
                  ], 544)
                ]),
                be(yt, {
                  name: f(o)(s.value),
                  css: f(i)
                }, {
                  default: J(() => [
                    s.value ? (y(), te(on, je({ key: 0 }, f(G)("year"), {
                      modelValue: f(A),
                      "onUpdate:modelValue": z[15] || (z[15] = (ze) => Fe(A) ? A.value = ze : null),
                      onToggle: E,
                      onSelected: z[16] || (z[16] = (ze) => b.$emit("overlay-closed"))
                    }), We({
                      "button-icon": J(() => [
                        b.$slots["calendar-icon"] ? q(b.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                        b.$slots["calendar-icon"] ? P("", !0) : (y(), te(f(Lr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      b.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: J(({ item: ze }) => [
                          q(b.$slots, "year-overlay-value", {
                            text: ze.text,
                            value: ze.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : P("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            b.$slots["month-overlay-value"] ? {
              name: "item",
              fn: J(({ item: me }) => [
                q(b.$slots, "month-overlay-value", {
                  text: me.text,
                  value: me.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : P("", !0),
          b.yearPicker ? (y(), te(on, je({ key: 2 }, f(G)("year"), {
            modelValue: f(A),
            "onUpdate:modelValue": z[19] || (z[19] = (me) => Fe(A) ? A.value = me : null),
            "multi-model-value": f(Z),
            "skip-active": b.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: E,
            onSelected: z[20] || (z[20] = (me) => b.$emit("overlay-closed"))
          }), We({ _: 2 }, [
            b.$slots["year-overlay-value"] ? {
              name: "item",
              fn: J(({ item: me }) => [
                q(b.$slots, "year-overlay-value", {
                  text: me.text,
                  value: me.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : P("", !0)
        ], 64))
      ]);
    };
  }
}), Iv = {
  key: 0,
  class: "dp__time_input"
}, Nv = ["aria-label", "onKeydown", "onClick"], Bv = ["aria-label", "data-test", "onKeydown", "onClick"], Av = ["aria-label", "onKeydown", "onClick"], Ev = { key: 0 }, Yv = ["aria-label", "onKeydown"], Vv = /* @__PURE__ */ fe({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...It
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: i } = ut(r), { transitionName: u, showTransition: p } = zr(i.value.transitions), d = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), v = I("AM"), m = I(null), s = I([]);
    Xe(() => {
      n("mounted");
    });
    const g = k(() => (l) => !!(r.maxTime && r.maxTime[l] && r.maxTime[l] < r[l] + +r[`${l}Increment`])), _ = k(() => (l) => !!(r.minTime && r.minTime[l] && r.minTime[l] > r[l] - +r[`${l}Increment`])), D = (l, c) => El(Ze(W(), l), c), R = (l, c) => iy(Ze(W(), l), c), Y = k(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), V = k(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), A = k(() => V.value.filter((l) => !l.separator)), L = k(() => (l) => {
      if (l === "hours") {
        const c = Z(r.hours);
        return { text: c < 10 ? `0${c}` : `${c}`, value: c };
      }
      return { text: r[l] < 10 ? `0${r[l]}` : `${r[l]}`, value: r[l] };
    }), U = (l) => {
      const c = r.is24 ? 24 : 12, w = l === "hours" ? c : 60, $ = +r[`${l}GridIncrement`], E = l === "hours" && !r.is24 ? $ : 0, K = [];
      for (let Q = E; Q < w; Q += $)
        K.push({ value: Q, text: Q < 10 ? `0${Q}` : `${Q}` });
      return l === "hours" && !r.is24 && K.push({ value: 0, text: "12" }), Ey(K);
    }, G = (l, c) => {
      const w = r.minTime && r.minTime[c], $ = r.maxTime && r.maxTime[c];
      return w && $ ? l < w || l > $ : w ? l < w : $ ? l > $ : !1;
    }, X = k(() => (l) => U(l).flat().filter((c) => c).map((c) => c.value).filter((c) => G(c, l))), N = (l) => r[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], S = (l) => {
      N(l) || (d[l] = !d[l], d[l] || n("overlay-closed"));
    }, M = (l) => l === "hours" ? $t : l === "minutes" ? Ot : Gt, C = (l, c = !0) => {
      const w = c ? D : R;
      (c ? g.value(l) : _.value(l)) || n(
        `update:${l}`,
        M(l)(w({ [l]: +r[l] }, { [l]: +r[`${l}Increment`] }))
      );
    }, Z = (l) => r.is24 ? l : (l >= 12 ? v.value = "PM" : v.value = "AM", Fy(l)), ee = () => {
      v.value === "PM" ? (v.value = "AM", n("update:hours", r.hours - 12)) : (v.value = "PM", n("update:hours", r.hours + 12));
    }, re = (l) => {
      d[l] = !0;
    }, j = (l, c, w) => {
      if (l && r.arrowNavigation) {
        Array.isArray(s.value[c]) ? s.value[c][w] = l : s.value[c] = [l];
        const $ = s.value.reduce(
          (E, K) => K.map((Q, x) => [...E[x] || [], K[x]]),
          []
        );
        o(r.closeTimePickerBtn), m.value && ($[1] = $[1].concat(m.value)), a($, r.order);
      }
    }, T = (l, c) => l === "hours" && !r.is24 ? n(`update:${l}`, v.value === "PM" ? c + 12 : c) : n(`update:${l}`, c);
    return t({ openChildCmp: re }), (l, c) => {
      var w;
      return l.disabled ? P("", !0) : (y(), O("div", Iv, [
        (y(!0), O(ye, null, Te(f(V), ($, E) => {
          var K, Q, x;
          return y(), O("div", {
            key: E,
            class: ie(f(Y))
          }, [
            $.separator ? (y(), O(ye, { key: 0 }, [
              Ae(" : ")
            ], 64)) : (y(), O(ye, { key: 1 }, [
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(g)($.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (K = f(i).ariaLabels) == null ? void 0 : K.incrementValue($.type),
                tabindex: "0",
                onKeydown: [
                  ge((b) => C($.type), ["enter"]),
                  ge((b) => C($.type), ["space"])
                ],
                onClick: (b) => C($.type),
                ref_for: !0,
                ref: (b) => j(b, E, 0)
              }, [
                l.$slots["arrow-up"] ? q(l.$slots, "arrow-up", { key: 0 }) : P("", !0),
                l.$slots["arrow-up"] ? P("", !0) : (y(), te(f(iu), { key: 1 }))
              ], 42, Nv),
              H("div", {
                role: "button",
                "aria-label": (Q = f(i).ariaLabels) == null ? void 0 : Q.openTpOverlay($.type),
                class: ie(N($.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${$.type}-toggle-overlay-btn`,
                onKeydown: [
                  ge((b) => S($.type), ["enter"]),
                  ge((b) => S($.type), ["space"])
                ],
                onClick: (b) => S($.type),
                ref_for: !0,
                ref: (b) => j(b, E, 1)
              }, [
                l.$slots[$.type] ? q(l.$slots, $.type, {
                  key: 0,
                  text: f(L)($.type).text,
                  value: f(L)($.type).value
                }) : P("", !0),
                l.$slots[$.type] ? P("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(f(L)($.type).text), 1)
                ], 64))
              ], 42, Bv),
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(_)($.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (x = f(i).ariaLabels) == null ? void 0 : x.decrementValue($.type),
                tabindex: "0",
                onKeydown: [
                  ge((b) => C($.type, !1), ["enter"]),
                  ge((b) => C($.type, !1), ["space"])
                ],
                onClick: (b) => C($.type, !1),
                ref_for: !0,
                ref: (b) => j(b, E, 2)
              }, [
                l.$slots["arrow-down"] ? q(l.$slots, "arrow-down", { key: 0 }) : P("", !0),
                l.$slots["arrow-down"] ? P("", !0) : (y(), te(f(lu), { key: 1 }))
              ], 42, Av)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? P("", !0) : (y(), O("div", Ev, [
          l.$slots["am-pm-button"] ? q(l.$slots, "am-pm-button", {
            key: 0,
            toggle: ee,
            value: v.value
          }) : P("", !0),
          l.$slots["am-pm-button"] ? P("", !0) : (y(), O("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: m,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (w = f(i).ariaLabels) == null ? void 0 : w.amPmButton,
            tabindex: "0",
            onClick: ee,
            onKeydown: [
              ge(Ee(ee, ["prevent"]), ["enter"]),
              ge(Ee(ee, ["prevent"]), ["space"])
            ]
          }, he(v.value), 41, Yv))
        ])),
        (y(!0), O(ye, null, Te(f(A), ($, E) => (y(), te(yt, {
          key: E,
          name: f(u)(d[$.type]),
          css: f(p)
        }, {
          default: J(() => [
            d[$.type] ? (y(), te(on, {
              key: 0,
              items: U($.type),
              "disabled-values": f(i).filters.times[$.type].concat(f(X)($.type)),
              "esc-close": l.escClose,
              "aria-labels": f(i).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (K) => T($.type, K),
              onSelected: (K) => S($.type),
              onToggle: (K) => S($.type),
              onResetFlow: c[0] || (c[0] = (K) => l.$emit("reset-flow")),
              type: $.type
            }, We({
              "button-icon": J(() => [
                l.$slots["clock-icon"] ? q(l.$slots, "clock-icon", { key: 0 }) : P("", !0),
                l.$slots["clock-icon"] ? P("", !0) : (y(), te(f(ou), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${$.type}-overlay-value`] ? {
                name: "item",
                fn: J(({ item: K }) => [
                  q(l.$slots, `${$.type}-overlay-value`, {
                    text: K.text,
                    value: K.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : P("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Uv = ["aria-label"], Fv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Wv = {
  key: 1,
  class: "dp__overlay_row"
}, Hv = ["aria-label"], Lv = /* @__PURE__ */ fe({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), i = pt(), { hideNavigationButtons: u, defaults: p } = ut(r), { transitionName: d, showTransition: v } = zr(p.value.transitions), m = I(null), s = I(null), g = I([]), _ = I(null);
    Xe(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Le(m.value)], "time") : o(!0, r.timePicker);
    });
    const D = k(() => r.range && r.modelAuto ? du(r.internalModelValue) : !0), R = I(!1), Y = (C) => ({
      hours: Array.isArray(r.hours) ? r.hours[C] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[C] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[C] : r.seconds
    }), V = k(() => {
      const C = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          C.push(Y(Z));
      else
        C.push(Y(0));
      return C;
    }), A = (C, Z = !1, ee = "") => {
      Z || n("reset-flow"), R.value = C, C && n("overlay-opened"), r.arrowNavigation && (o(C), C || n("overlay-closed")), dt(() => {
        ee !== "" && g.value[0] && g.value[0].openChildCmp(ee);
      });
    }, L = k(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), U = Yt(i, "timePicker"), G = (C, Z, ee) => r.range ? Z === 0 ? [C, V.value[1][ee]] : [V.value[0][ee], C] : C, X = (C) => {
      n("update:hours", C);
    }, N = (C) => {
      n("update:minutes", C);
    }, S = (C) => {
      n("update:seconds", C);
    }, M = () => {
      _.value && r.arrowNavigation && _.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: A }), (C, Z) => {
      var ee;
      return y(), O("div", null, [
        C.timePicker ? P("", !0) : xt((y(), O("div", {
          key: 0,
          class: ie(f(L)),
          role: "button",
          "aria-label": (ee = f(p).ariaLabels) == null ? void 0 : ee.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: m,
          onKeydown: [
            Z[0] || (Z[0] = ge((re) => A(!0), ["enter"])),
            Z[1] || (Z[1] = ge((re) => A(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (re) => A(!0))
        }, [
          C.$slots["clock-icon"] ? q(C.$slots, "clock-icon", { key: 0 }) : P("", !0),
          C.$slots["clock-icon"] ? P("", !0) : (y(), te(f(ou), { key: 1 }))
        ], 42, Uv)), [
          [pn, !f(u)("time")]
        ]),
        be(yt, {
          name: f(d)(R.value),
          css: f(v)
        }, {
          default: J(() => {
            var re;
            return [
              R.value || C.timePicker ? (y(), O("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: _,
                tabindex: "0"
              }, [
                H("div", Fv, [
                  C.$slots["time-picker-overlay"] ? q(C.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: X,
                    setMinutes: N,
                    setSeconds: S
                  }) : P("", !0),
                  C.$slots["time-picker-overlay"] ? P("", !0) : (y(), O("div", Wv, [
                    (y(!0), O(ye, null, Te(f(V), (j, T) => xt((y(), te(Vv, je({ key: T }, {
                      ...C.$props,
                      order: T,
                      hours: j.hours,
                      minutes: j.minutes,
                      seconds: j.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: T === 0 ? C.fixedStart : C.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: g,
                      "onUpdate:hours": (l) => X(G(l, T, "hours")),
                      "onUpdate:minutes": (l) => N(G(l, T, "minutes")),
                      "onUpdate:seconds": (l) => S(G(l, T, "seconds")),
                      onMounted: M,
                      onOverlayClosed: M
                    }), We({ _: 2 }, [
                      Te(f(U), (l, c) => ({
                        name: l,
                        fn: J((w) => [
                          q(C.$slots, l, Qe(mt(w)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [pn, T === 0 ? !0 : f(D)]
                    ])), 128))
                  ])),
                  C.timePicker ? P("", !0) : xt((y(), O("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: ie(f(L)),
                    role: "button",
                    "aria-label": (re = f(p).ariaLabels) == null ? void 0 : re.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = ge((j) => A(!1), ["enter"])),
                      Z[4] || (Z[4] = ge((j) => A(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (j) => A(!1))
                  }, [
                    C.$slots["calendar-icon"] ? q(C.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                    C.$slots["calendar-icon"] ? P("", !0) : (y(), te(f(Lr), { key: 1 }))
                  ], 42, Hv)), [
                    [pn, !f(u)("time")]
                  ])
                ])
              ], 512)) : P("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), zv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = ut(t), o = I(null), i = I(W()), u = (c) => {
    !c.current && t.hideOffsetDates || (o.value = c.value);
  }, p = () => {
    o.value = null;
  }, d = (c) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? c ? rt(o.value, e.value[0]) : Ke(o.value, e.value[0]) : !0, v = (c, w) => {
    const $ = () => e.value ? w ? e.value[0] || null : e.value[1] : null, E = e.value && Array.isArray(e.value) ? $() : null;
    return Me(W(c.value), E);
  }, m = (c) => {
    const w = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !Ke(o.value || null, w) : !0;
  }, s = (c, w = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Me(W(c.value), e.value[w ? 0 : 1]) : t.range ? v(c, w) && m(w) || Me(c.value, Array.isArray(e.value) ? e.value[0] : null) && d(w) : !1, g = (c, w, $) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : $ ? rt(e.value[0], w.value) : Ke(e.value[0], w.value) : !1, _ = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Me(c.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((w) => Me(w, c.value)) : Me(c.value, e.value ? e.value : i.value), D = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const w = Dt(o.value, +t.autoRange), $ = a(W(o.value));
        return t.weekPicker ? Me($[1], W(c.value)) : Me(w, W(c.value));
      }
      return !1;
    }
    return !1;
  }, R = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const w = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const $ = a(W(o.value));
        return t.weekPicker ? rt(c.value, $[0]) && Ke(c.value, $[1]) : rt(c.value, o.value) && Ke(c.value, w);
      }
      return !1;
    }
    return !1;
  }, Y = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const w = a(W(o.value));
        return t.weekPicker ? Me(w[0], c.value) : Me(o.value, c.value);
      }
      return !1;
    }
    return !1;
  }, V = (c) => uu(e.value, o.value, c.value), A = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, L = () => t.modelAuto ? du(t.internalModelValue) : !0, U = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const w = t.range ? !s(c) && !s(c, !1) : !0;
    return !n(c.value) && !_(c) && !(!c.current && t.hideOffsetDates) && w;
  }, G = (c) => t.range ? t.modelAuto ? A() && _(c) : !1 : _(c), X = (c) => t.highlight ? r(c.value, t.highlight) : !1, N = (c) => n(c.value) && t.highlightDisabledDays === !1, S = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), M = (c) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || c.current) && L() && !(!c.current && t.hideOffsetDates) && !_(c) ? V(c) : !1, C = (c) => {
    const { isRangeStart: w, isRangeEnd: $ } = re(c), E = t.range ? w || $ : !1;
    return {
      dp__cell_offset: !c.current,
      dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
      dp__cell_disabled: n(c.value),
      dp__cell_highlight: !N(c) && (X(c) || S(c)) && !G(c) && !E,
      dp__cell_highlight_active: !N(c) && (X(c) || S(c)) && G(c),
      dp__today: !t.noToday && Me(c.value, i.value) && c.current
    };
  }, Z = (c) => ({
    dp__active_date: G(c),
    dp__date_hover: U(c)
  }), ee = (c) => ({
    ...j(c),
    ...T(c),
    dp__range_between_week: M(c) && t.weekPicker
  }), re = (c) => {
    const w = t.multiCalendars > 0 ? c.current && s(c) && L() : s(c) && L(), $ = t.multiCalendars > 0 ? c.current && s(c, !1) && L() : s(c, !1) && L();
    return { isRangeStart: w, isRangeEnd: $ };
  }, j = (c) => {
    const { isRangeStart: w, isRangeEnd: $ } = re(c);
    return {
      dp__range_start: w,
      dp__range_end: $,
      dp__range_between: M(c) && !t.weekPicker,
      dp__date_hover_start: g(U(c), c, !0),
      dp__date_hover_end: g(U(c), c, !1)
    };
  }, T = (c) => ({
    ...j(c),
    dp__cell_auto_range: R(c),
    dp__cell_auto_range_start: Y(c),
    dp__cell_auto_range_end: D(c)
  }), l = (c) => t.range ? t.autoRange ? T(c) : t.modelAuto ? { ...Z(c), ...j(c) } : j(c) : t.weekPicker ? ee(c) : Z(c);
  return {
    setHoverDate: u,
    clearHoverDate: p,
    getDayClassData: (c) => ({
      ...C(c),
      ...l(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, jv = ["id", "onKeydown"], qv = {
  key: 0,
  class: "dp__sidebar_left"
}, Gv = {
  key: 1,
  class: "dp__preset_ranges"
}, Qv = ["onClick"], Zv = {
  key: 2,
  class: "dp__sidebar_right"
}, Kv = {
  key: 3,
  class: "dp__now_wrap"
}, Xv = /* @__PURE__ */ fe({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: i } = su(), { getCalendarDays: u, defaults: p } = ut(r), d = pt(), v = I(null), m = Ct({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = I([]), g = I([]), _ = I(null), D = I(null), R = I(0), Y = I(!1), V = I(0);
    Xe(() => {
      var B;
      Y.value = !0, !((B = r.presetRanges) != null && B.length) && !d["left-sidebar"] && !d["right-sidebar"] && ve();
      const ae = Le(D);
      if (ae && !r.textInput && !r.inline && (a(!0), N()), ae) {
        const et = (ot) => {
          ["action-row", "time-picker", "month-year"].some(
            (Wt) => Object.keys(d).includes(Wt)
          ) || ot.preventDefault(), ot.stopImmediatePropagation(), ot.stopPropagation();
        };
        ae.addEventListener("pointerdown", et), ae.addEventListener("mousedown", et);
      }
      window.addEventListener("resize", ve);
    }), Do(() => {
      window.removeEventListener("resize", ve);
    });
    const { arrowRight: A, arrowLeft: L, arrowDown: U, arrowUp: G } = Mt(), X = (B) => {
      B || B === 0 ? g.value[B].triggerTransition(
        ee.value(B),
        re.value(B)
      ) : g.value.forEach(
        (ae, et) => ae.triggerTransition(ee.value(et), re.value(et))
      );
    }, N = () => {
      const B = Le(D);
      B && B.focus({ preventScroll: !0 });
    }, S = () => {
      var B;
      (B = r.flow) != null && B.length && V.value !== -1 && (V.value += 1, n("flow-step", V.value), Ne());
    }, M = () => {
      V.value = -1;
    }, {
      calendars: C,
      modelValue: Z,
      month: ee,
      year: re,
      time: j,
      updateTime: T,
      updateMonthYear: l,
      selectDate: c,
      getWeekNum: w,
      monthYearSelect: $,
      handleScroll: E,
      handleArrow: K,
      handleSwipe: Q,
      getMarker: x,
      selectCurrentDate: b,
      presetDateRange: z
    } = Qy(r, n, S, X, V), { setHoverDate: we, clearHoverDate: oe, getDayClassData: pe } = zv(Z, r);
    ft(
      C,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Ie = Yt(d, "calendar"), it = Yt(d, "action"), me = Yt(d, "timePicker"), st = Yt(d, "monthYear"), at = k(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ze = k(() => Vy(r.yearRange)), Qt = k(() => Uy(r.locale, r.monthNameFormat)), ve = () => {
      const B = Le(v);
      B && (R.value = B.getBoundingClientRect().width);
    }, Pe = k(() => (B) => u(ee.value(B), re.value(B))), $e = k(
      () => p.value.multiCalendars > 0 && r.range ? [...Array(p.value.multiCalendars).keys()] : [0]
    ), Nt = k(
      () => (B) => B === 1
    ), Bt = k(() => r.monthPicker || r.timePicker || r.yearPicker), qr = k(
      () => ({
        dp__flex_display: p.value.multiCalendars > 0
      })
    ), un = k(() => ({
      dp__instance_calendar: p.value.multiCalendars > 0
    })), Zt = k(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), Gr = k(
      () => (B) => Zr(Pe, B)
    ), Qr = k(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Zr = (B, ae) => B.value(ae).map((et) => ({
      ...et,
      days: et.days.map((ot) => (ot.marker = x(ot), ot.classData = pe(ot), ot))
    })), sn = (B) => {
      B.stopPropagation(), B.stopImmediatePropagation();
    }, h = () => {
      r.escClose && n("close-picker");
    }, F = (B, ae = !1) => {
      c(B, ae), r.spaceConfirm && n("select-date");
    }, le = (B) => {
      var ae;
      (ae = r.flow) != null && ae.length && (m[B] = !0, Object.keys(m).filter((et) => !m[et]).length || Ne());
    }, se = (B, ae, et, ot, ...Wt) => {
      if (r.flow[V.value] === B) {
        const ue = ot ? ae.value[0] : ae.value;
        ue && ue[et](...Wt);
      }
    }, Ne = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", _, "toggleTimePicker", !1, !1, !0), se("time", _, "toggleTimePicker", !1, !0, !0);
      const B = r.flow[V.value];
      (B === "hours" || B === "minutes" || B === "seconds") && se(B, _, "toggleTimePicker", !1, !0, !0, B);
    }, lt = (B) => {
      if (r.arrowNavigation) {
        if (B === "up")
          return G();
        if (B === "down")
          return U();
        if (B === "left")
          return L();
        if (B === "right")
          return A();
      } else
        B === "left" || B === "up" ? K("left", 0, B === "up") : K("right", 0, B === "down");
    }, wt = (B) => {
      o(B.shiftKey), !r.disableMonthYearSelect && B.code === "Tab" && B.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (B.preventDefault(), B.stopImmediatePropagation(), n("close-picker"));
    }, Kt = (B) => {
      s.value[0] && s.value[0].handleMonthYearChange(B);
    };
    return t({
      updateMonthYear: l
    }), (B, ae) => {
      var et;
      return y(), te(yt, {
        appear: "",
        name: (et = f(p).transitions) == null ? void 0 : et.menuAppear,
        mode: "out-in",
        css: !!B.transitions
      }, {
        default: J(() => {
          var ot, Wt;
          return [
            H("div", {
              id: B.uid ? `dp-menu-${B.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: D,
              role: "dialog",
              class: ie(f(Qr)),
              onMouseleave: ae[15] || (ae[15] = //@ts-ignore
              (...ue) => f(oe) && f(oe)(...ue)),
              onClick: sn,
              onKeydown: [
                ge(h, ["esc"]),
                ae[16] || (ae[16] = ge(Ee((ue) => lt("left"), ["prevent"]), ["left"])),
                ae[17] || (ae[17] = ge(Ee((ue) => lt("up"), ["prevent"]), ["up"])),
                ae[18] || (ae[18] = ge(Ee((ue) => lt("down"), ["prevent"]), ["down"])),
                ae[19] || (ae[19] = ge(Ee((ue) => lt("right"), ["prevent"]), ["right"])),
                wt
              ]
            }, [
              (B.disabled || B.readonly) && B.inline ? (y(), O("div", {
                key: 0,
                class: ie(f(Zt))
              }, null, 2)) : P("", !0),
              !B.inline && !B.teleportCenter ? (y(), O("div", {
                key: 1,
                class: ie(f(at))
              }, null, 2)) : P("", !0),
              H("div", {
                class: ie({
                  dp__menu_content_wrapper: ((ot = B.presetRanges) == null ? void 0 : ot.length) || !!B.$slots["left-sidebar"] || !!B.$slots["right-sidebar"]
                })
              }, [
                B.$slots["left-sidebar"] ? (y(), O("div", qv, [
                  q(B.$slots, "left-sidebar", Qe(mt({ handleMonthYearChange: Kt })))
                ])) : P("", !0),
                (Wt = B.presetRanges) != null && Wt.length ? (y(), O("div", Gv, [
                  (y(!0), O(ye, null, Te(B.presetRanges, (ue, Ht) => (y(), O("div", {
                    key: Ht,
                    style: St(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (_e) => f(z)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? q(B.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: f(z),
                      label: ue.label,
                      range: ue.range
                    }) : (y(), O(ye, { key: 1 }, [
                      Ae(he(ue.label), 1)
                    ], 64))
                  ], 12, Qv))), 128))
                ])) : P("", !0),
                H("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: v,
                  role: "document"
                }, [
                  H("div", {
                    class: ie(f(qr))
                  }, [
                    (y(!0), O(ye, null, Te(f($e), (ue, Ht) => (y(), O("div", {
                      key: ue,
                      class: ie(f(un))
                    }, [
                      !B.disableMonthYearSelect && !B.timePicker ? (y(), te(Mv, je({
                        key: 0,
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (s.value[Ht] = _e);
                        },
                        months: f(Qt),
                        years: f(ze),
                        month: f(ee)(ue),
                        year: f(re)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, B.$props, {
                        onMount: ae[0] || (ae[0] = (_e) => le("monthYearInput")),
                        onResetFlow: M,
                        onUpdateMonthYear: (_e) => f(l)(ue, _e),
                        onMonthYearSelect: f($),
                        onOverlayClosed: N
                      }), We({ _: 2 }, [
                        Te(f(st), (_e, hu) => ({
                          name: _e,
                          fn: J((Kr) => [
                            q(B.$slots, _e, Qe(mt(Kr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : P("", !0),
                      be(bv, je({
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (g.value[Ht] = _e);
                        },
                        "specific-mode": f(Bt),
                        "get-week-num": f(w),
                        instance: ue,
                        "mapped-dates": f(Gr)(ue),
                        month: f(ee)(ue),
                        year: f(re)(ue)
                      }, B.$props, {
                        "flow-step": V.value,
                        "onUpdate:flowStep": ae[1] || (ae[1] = (_e) => V.value = _e),
                        onSelectDate: (_e) => f(c)(_e, !f(Nt)(ue)),
                        onHandleSpace: (_e) => F(_e, !f(Nt)(ue)),
                        onSetHoverDate: ae[2] || (ae[2] = (_e) => f(we)(_e)),
                        onHandleScroll: (_e) => f(E)(_e, ue),
                        onHandleSwipe: (_e) => f(Q)(_e, ue),
                        onMount: ae[3] || (ae[3] = (_e) => le("calendar")),
                        onResetFlow: M,
                        onTooltipOpen: ae[4] || (ae[4] = (_e) => B.$emit("tooltip-open", _e)),
                        onTooltipClose: ae[5] || (ae[5] = (_e) => B.$emit("tooltip-close", _e))
                      }), We({ _: 2 }, [
                        Te(f(Ie), (_e, hu) => ({
                          name: _e,
                          fn: J((Kr) => [
                            q(B.$slots, _e, Qe(mt({ ...Kr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  H("div", null, [
                    B.$slots["time-picker"] ? q(B.$slots, "time-picker", Qe(je({ key: 0 }, { time: f(j), updateTime: f(T) }))) : (y(), O(ye, { key: 1 }, [
                      B.enableTimePicker && !B.monthPicker && !B.weekPicker ? (y(), te(Lv, je({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: _,
                        hours: f(j).hours,
                        minutes: f(j).minutes,
                        seconds: f(j).seconds,
                        "internal-model-value": e.internalModelValue
                      }, B.$props, {
                        onMount: ae[6] || (ae[6] = (ue) => le("timePicker")),
                        "onUpdate:hours": ae[7] || (ae[7] = (ue) => f(T)(ue)),
                        "onUpdate:minutes": ae[8] || (ae[8] = (ue) => f(T)(ue, !1)),
                        "onUpdate:seconds": ae[9] || (ae[9] = (ue) => f(T)(ue, !1, !0)),
                        onResetFlow: M,
                        onOverlayClosed: N,
                        onOverlayOpened: ae[10] || (ae[10] = (ue) => B.$emit("time-picker-open", ue))
                      }), We({ _: 2 }, [
                        Te(f(me), (ue, Ht) => ({
                          name: ue,
                          fn: J((_e) => [
                            q(B.$slots, ue, Qe(mt(_e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : P("", !0)
                    ], 64))
                  ])
                ], 512),
                B.$slots["right-sidebar"] ? (y(), O("div", Zv, [
                  q(B.$slots, "right-sidebar", Qe(mt({ handleMonthYearChange: Kt })))
                ])) : P("", !0),
                B.showNowButton ? (y(), O("div", Kv, [
                  B.$slots["now-button"] ? q(B.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: f(b)
                  }) : P("", !0),
                  B.$slots["now-button"] ? P("", !0) : (y(), O("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ae[11] || (ae[11] = //@ts-ignore
                    (...ue) => f(b) && f(b)(...ue))
                  }, he(B.nowButtonLabel), 1))
                ])) : P("", !0)
              ], 2),
              !B.autoApply || B.keepActionRow ? (y(), te(cv, je({
                key: 2,
                "menu-mount": Y.value,
                "calendar-width": R.value,
                "internal-model-value": e.internalModelValue
              }, B.$props, {
                onClosePicker: ae[12] || (ae[12] = (ue) => B.$emit("close-picker")),
                onSelectDate: ae[13] || (ae[13] = (ue) => B.$emit("select-date")),
                onInvalidSelect: ae[14] || (ae[14] = (ue) => B.$emit("invalid-select"))
              }), We({ _: 2 }, [
                Te(f(it), (ue, Ht) => ({
                  name: ue,
                  fn: J((_e) => [
                    q(B.$slots, ue, Qe(mt({ ..._e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : P("", !0)
            ], 42, jv)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Jv = typeof window < "u" ? window : void 0, fa = () => {
}, eh = (e) => ku() ? (Su(e), !0) : !1, th = (e, t, n, r) => {
  if (!e)
    return fa;
  let a = fa;
  const o = ft(
    () => f(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = fa;
      });
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    o(), a();
  };
  return eh(i), i;
}, nh = (e, t, n, r = {}) => {
  const { window: a = Jv, event: o = "pointerdown" } = r;
  return a ? th(a, o, (i) => {
    const u = Le(e), p = Le(t);
    !u || !p || u === i.target || i.composedPath().includes(u) || i.composedPath().includes(p) || n(i);
  }, { passive: !0 }) : void 0;
}, rh = /* @__PURE__ */ fe({
  __name: "VueDatePicker",
  props: {
    ...It
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
    const r = e, a = pt(), o = I(!1), i = tr(r, "modelValue"), u = tr(r, "timezone"), p = I(null), d = I(null), v = I(!1), m = I(null), { setMenuFocused: s, setShiftKey: g } = su(), { clearArrowNav: _ } = Mt(), { validateDate: D, isValidTime: R, defaults: Y } = ut(r);
    Xe(() => {
      C(r.modelValue), r.inline || (N(m.value).addEventListener("scroll", c), window.addEventListener("resize", w)), r.inline && (o.value = !0);
    }), Do(() => {
      if (!r.inline) {
        const ve = N(m.value);
        ve && ve.removeEventListener("scroll", c), window.removeEventListener("resize", w);
      }
    });
    const V = Yt(a, "all", r.presetRanges), A = Yt(a, "input");
    ft(
      [i, u],
      () => {
        C(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: L, menuPosition: U, setMenuPosition: G, setInitialPosition: X, getScrollableParent: N } = Xy(
      p,
      d,
      n,
      r
    ), {
      inputValue: S,
      internalModelValue: M,
      parseExternalModelValue: C,
      emitModelValue: Z,
      formatInputValue: ee,
      checkBeforeEmit: re
    } = Zy(n, r, v), j = k(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), T = k(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), l = k(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), c = () => {
      o.value && (r.closeOnScroll ? oe() : G());
    }, w = () => {
      o.value && G();
    }, $ = () => {
      !r.disabled && !r.readonly && (X(), o.value = !0, dt().then(() => {
        G(), o.value && n("open");
      }), o.value || we(), C(r.modelValue));
    }, E = () => {
      S.value = "", we(), n("update:model-value", null), n("cleared"), oe();
    }, K = () => {
      const ve = M.value;
      return !ve || !Array.isArray(ve) && D(ve) ? !0 : Array.isArray(ve) ? ve.length === 2 && D(ve[0]) && D(ve[1]) ? !0 : D(ve[0]) : !1;
    }, Q = () => {
      re() && K() ? (Z(), oe()) : n("invalid-select", M.value);
    }, x = (ve) => {
      b(), Z(), r.closeOnAutoApply && !ve && oe();
    }, b = () => {
      d.value && r.textInput && d.value.setParsedDate(M.value);
    }, z = (ve = !1) => {
      r.autoApply && R(M.value) && K() && (r.range && Array.isArray(M.value) ? (r.partialRange || M.value.length === 2) && x(ve) : x(ve));
    }, we = () => {
      r.textInput || (M.value = null);
    }, oe = () => {
      r.inline || (o.value && (o.value = !1, s(!1), g(!1), _(), n("closed"), X(), S.value && C(i.value)), we(), d.value && d.value.focusInput());
    }, pe = (ve, Pe) => {
      if (!ve) {
        M.value = null;
        return;
      }
      M.value = ve, Pe && (Q(), n("text-submit"));
    }, Ie = () => {
      r.autoApply && R(M.value) && Z(), b();
    }, it = () => o.value ? oe() : $(), me = (ve) => {
      M.value = ve;
    }, st = k(() => r.textInput && Y.value.textInputOptions.format), at = () => {
      st.value && (v.value = !0, ee()), n("focus");
    }, ze = () => {
      st.value && (v.value = !1, ee()), n("blur");
    }, Qt = (ve) => {
      p.value && p.value.updateMonthYear(0, {
        month: Sl(ve.month),
        year: Sl(ve.year)
      });
    };
    return nh(
      p,
      d,
      r.onClickOutside ? () => r.onClickOutside(K) : oe
    ), t({
      closeMenu: oe,
      selectDate: Q,
      clearValue: E,
      openMenu: $,
      onScroll: c,
      formatInputValue: ee,
      // exposed for testing purposes
      updateInternalModelValue: me,
      // modify internal modelValue
      setMonthYear: Qt
    }), (ve, Pe) => (y(), O("div", {
      class: ie(f(j)),
      ref_key: "pickerWrapperRef",
      ref: m
    }, [
      be(iv, je({
        ref_key: "inputRef",
        ref: d,
        "is-menu-open": o.value,
        "input-value": f(S),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Fe(S) ? S.value = $e : null)
      }, ve.$props, {
        onClear: E,
        onOpen: $,
        onSetInputDate: pe,
        onSetEmptyDate: f(Z),
        onSelectDate: Q,
        onToggle: it,
        onClose: oe,
        onFocus: at,
        onBlur: ze
      }), We({ _: 2 }, [
        Te(f(A), ($e, Nt) => ({
          name: $e,
          fn: J((Bt) => [
            q(ve.$slots, $e, Qe(mt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (y(), te(Rl(ve.teleport ? _u : "div"), Qe(je({ key: 0 }, f(l))), {
        default: J(() => [
          o.value ? (y(), te(Xv, je({
            key: 0,
            ref_key: "dpMenuRef",
            ref: p,
            class: f(T),
            style: f(U),
            "open-on-top": f(L)
          }, ve.$props, {
            "internal-model-value": f(M),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Fe(M) ? M.value = $e : null),
            onClosePicker: oe,
            onSelectDate: Q,
            onAutoApply: z,
            onTimeUpdate: Ie,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ve.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ve.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ve.$emit("invalid-select", f(M))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ve.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: f(G),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ve.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ve.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ve.$emit("time-picker-open", $e))
          }), We({ _: 2 }, [
            Te(f(V), ($e, Nt) => ({
              name: $e,
              fn: J((Bt) => [
                q(ve.$slots, $e, Qe(mt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : P("", !0)
        ]),
        _: 3
      }, 16)) : P("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ (() => {
  const e = rh;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ah).forEach(([e, t]) => {
  e !== "default" && (zo[e] = t);
});
const oh = { class: "custom-date-picker__container" }, ih = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], lh = ["onClick"], uh = { class: "custom-date-picker__icon" }, sh = {
  key: 0,
  class: "custom-date-picker__error"
}, ch = /* @__PURE__ */ fe({
  __name: "CustomDatePicker",
  props: {
    modelValue: {
      default: null,
      type: [Array, Date, Object]
    },
    monthPicker: {
      type: Boolean
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
    },
    clearable: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = I(!1), a = I(null), o = k({
      get() {
        return n.modelValue;
      },
      set(g) {
        t("update:model-value", g);
      }
    }), i = k(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = k(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), p = k(() => ({
      "custom-date-picker__input-container": !0,
      "custom-date-picker__input-container--dark": n.dark,
      "custom-date-picker__input-container--disabled": n.disabled,
      "custom-date-picker__input-container--outlined": n.outlined,
      "custom-date-picker__input-container--error": !!n.errorMessage,
      "custom-date-picker__input-container--opened": r.value || u.value
    })), d = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), v = () => {
      a.value && a.value.openMenu();
    }, m = () => {
      r.value = !0;
    }, s = () => {
      r.value = !1;
    };
    return (g, _) => (y(), O("div", oh, [
      be(f(zo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: f(o),
        "onUpdate:modelValue": _[1] || (_[1] = (D) => Fe(o) ? o.value = D : null),
        "auto-apply": "",
        range: e.range,
        locale: "es-CL",
        "hide-input-icon": "",
        format: f(i),
        clearable: !1,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        disabled: e.disabled,
        readonly: e.readonly,
        "month-picker": e.monthPicker,
        "enable-time-picker": !1,
        class: "custom-date-picker__picker",
        onOpen: m,
        onClosed: s
      }, {
        "dp-input": J(({ value: D, onClear: R, onInput: Y, onEnter: V }) => [
          H("div", {
            class: ie(f(p))
          }, [
            H("input", {
              readonly: "",
              type: "text",
              value: D,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "custom-date-picker__input",
              onClick: _[0] || (_[0] = Ee(() => {
              }, ["stop"])),
              onInput: Y,
              onFocus: Ee(v, ["stop"]),
              onKeydown: ge(V, ["enter"])
            }, null, 40, ih),
            H("div", {
              class: "custom-date-picker__clear",
              onClick: Ee(R, ["stop"])
            }, [
              D && !e.readonly && !e.disabled && e.clearable ? (y(), te(He, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fm-circle-close"
              })) : P("", !0)
            ], 8, lh),
            H("div", uh, [
              e.disabled ? P("", !0) : (y(), te(He, {
                key: 0,
                size: "1rem",
                color: f(d),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 2)
        ]),
        "arrow-right": J(() => [
          be(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-right"
          })
        ]),
        "arrow-left": J(() => [
          be(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly", "month-picker"]),
      e.errorMessage ? (y(), O("div", sh, he(e.errorMessage), 1)) : P("", !0)
    ]));
  }
});
const jo = /* @__PURE__ */ ke(ch, [["__scopeId", "data-v-ae778ab9"]]), pu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, fh = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), pu(e, t.split("."), n)), dh = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return fh(e, t, n);
  if (Array.isArray(t))
    return pu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, ph = () => ({
  getPropertyFromItem: dh
}), mh = ["onMousedown"], yh = ["value", "placeholder", "onKeydown"], vh = ["onClick"], hh = { class: "custom-select__icon" }, gh = {
  key: 0,
  class: "custom-select__search-container"
}, bh = ["onClick"], _h = {
  key: 1,
  class: "custom-select__no-data"
}, wh = {
  key: 0,
  class: "custom-select__error"
}, kh = /* @__PURE__ */ fe({
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
    xe((w) => ({
      "4446c9ea": e.textTransform,
      "1325c2a1": a.value,
      "518ec83b": o.value,
      "3e31e7dc": i.value
    }));
    const { getPropertyFromItem: r } = ph(), a = I(""), o = I(""), i = I(""), u = I(""), p = I(!1), d = I(!1), v = I(!1), m = I(null), s = I(null), g = I(null), _ = k({
      get() {
        return n.modelValue;
      },
      set(w) {
        t("update:model-value", w);
      }
    }), D = k(
      () => V.value && n.clearable && !n.readonly && !n.disabled
    ), R = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), Y = k(() => !n.searchable || !u.value ? n.items : n.items.filter((w) => {
      const $ = u.value.trim().toLowerCase();
      return $ ? U(w).toLowerCase().includes($) : !0;
    })), V = k(() => Array.isArray(_.value) ? _.value.length > 0 : !!_.value), A = k(() => ({
      "custom-select__text-container": !0,
      "custom-select__text-container--dark": n.dark,
      "custom-select__text-container--opened": p.value,
      "custom-select__text-container--active": V.value,
      "custom-select__text-container--disabled": n.disabled,
      "custom-select__text-container--outlined": n.outlined,
      "custom-select__text-container--error": !!n.errorMessage
    })), L = k(() => {
      var w;
      if (_.value)
        if (Array.isArray(_.value)) {
          if (_.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(_.value, n.itemTitle, _.value);
          {
            const $ = (w = n.items) == null ? void 0 : w.find((E) => {
              const K = r(E, n.itemValue, E), Q = r(_.value, n.itemValue, _.value);
              return K === Q;
            });
            return r($, n.itemTitle, $);
          }
        }
      return "";
    });
    function U(w) {
      return r(w, n.itemTitle, w);
    }
    function G() {
      d.value = !0;
    }
    function X() {
      d.value = !1;
    }
    function N(w) {
      return {
        "custom-select__menu-item": !0,
        "custom-select__menu-item--selected": l(w)
      };
    }
    async function S() {
      await dt();
      const w = s.value, $ = g.value;
      if (!w || !$)
        return;
      const E = w.getBoundingClientRect(), K = $.getBoundingClientRect();
      o.value = `${E.left}px`, i.value = `${E.width}px`;
      const Q = E.top + E.height + K.height, x = window.innerHeight, b = E.top + E.height - (n.errorMessage ? 18 : 0);
      if (Q > x) {
        const z = Q - x;
        a.value = `${b - z - 16}px`;
      } else
        a.value = `${b}px`;
    }
    function M() {
      n.disabled || n.readonly || p.value || (p.value = !0, S(), v.value = !0, document.addEventListener("click", re));
    }
    function C() {
      p.value = !1, d.value = !1, v.value = !1, document.removeEventListener("click", re);
    }
    function Z() {
      d.value || C();
    }
    function ee() {
      p.value && C();
    }
    function re(w) {
      !s.value || !w.target || s.value.contains(w.target) || C();
    }
    function j() {
      n.disabled || n.readonly || (p.value ? (C(), m.value && m.value.focus()) : (M(), m.value && m.value.blur()));
    }
    function T(w) {
      const $ = r(w, n.itemValue, w);
      if (n.multiple && Array.isArray(_.value)) {
        const E = _.value.slice(), K = n.returnObject ? E.findIndex((Q) => r(Q, n.itemValue, Q) === $) : E.indexOf($);
        K >= 0 ? E.splice(K, 1) : E.push(n.returnObject ? w : $), _.value = E;
      } else
        _.value = n.returnObject ? w : $, C();
    }
    function l(w) {
      if (n.multiple && Array.isArray(_.value))
        return _.value.some((K) => {
          const Q = r(K, n.itemValue, K), x = r(w, n.itemValue, w);
          return Q === x;
        });
      const $ = r(_.value, n.itemValue, _.value), E = r(w, n.itemValue, w);
      return $ === E;
    }
    function c() {
      Array.isArray(_.value) ? _.value = [] : _.value = null;
    }
    return (w, $) => (y(), O("div", {
      ref_key: "container",
      ref: s,
      class: "custom-select__container",
      onMouseenter: G,
      onMouseleave: X
    }, [
      H("div", {
        class: ie(f(A)),
        onMousedown: Ee(j, ["stop"])
      }, [
        H("input", {
          ref_key: "input",
          ref: m,
          readonly: "",
          value: f(L),
          placeholder: e.placeholder,
          class: "custom-select__text",
          onFocus: M,
          onBlur: Z,
          onKeydown: ge(ee, ["tab"])
        }, null, 40, yh),
        H("div", {
          class: "custom-select__clear",
          onMousedown: $[0] || ($[0] = Ee(() => {
          }, ["stop"])),
          onClick: Ee(c, ["stop"])
        }, [
          f(D) ? (y(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : P("", !0)
        ], 40, vh),
        H("div", hh, [
          be(He, {
            size: "1rem",
            color: f(R),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ])
      ], 42, mh),
      be(yt, null, {
        default: J(() => [
          p.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: g,
            class: "custom-select__menu"
          }, [
            e.searchable ? (y(), O("div", gh, [
              xt(H("input", {
                "onUpdate:modelValue": $[1] || ($[1] = (E) => u.value = E),
                type: "text",
                placeholder: "Buscar",
                class: "custom-select__search",
                onClick: $[2] || ($[2] = Ee(() => {
                }, ["stop"]))
              }, null, 512), [
                [Ml, u.value]
              ]),
              be(He, {
                size: "1rem",
                color: "acento-principal",
                name: "fm-magnify-glass"
              })
            ])) : P("", !0),
            (y(!0), O(ye, null, Te(f(Y), (E, K) => (y(), O("div", {
              key: `item-${K}`,
              class: ie(N(E)),
              onClick: Ee((Q) => T(E), ["stop"])
            }, [
              e.multiple ? (y(), te(Bl, {
                key: 0,
                "model-value": l(E)
              }, null, 8, ["model-value"])) : P("", !0),
              Ae(" " + he(U(E)), 1)
            ], 10, bh))), 128)),
            f(Y).length === 0 ? (y(), O("div", _h, " Sin datos disponibles ")) : P("", !0),
            q(w.$slots, "append-item", {}, void 0, !0)
          ], 512)) : P("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (y(), O("div", wh, he(e.errorMessage), 1)) : P("", !0)
    ], 544));
  }
});
const qo = /* @__PURE__ */ ke(kh, [["__scopeId", "data-v-19a2e4a7"]]);
/*! maska v2.1.7 | (c) Alexander Shabunevich | Released under the MIT license */
var Sh = Object.defineProperty, $h = (e, t, n) => t in e ? Sh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ln = (e, t, n) => ($h(e, typeof t != "symbol" ? t + "" : t, n), n);
const Pl = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class Cl {
  constructor(t = {}) {
    ln(this, "opts", {}), ln(this, "memo", /* @__PURE__ */ new Map());
    var n;
    const r = { ...t };
    if (r.tokens != null) {
      r.tokens = r.tokensReplace ? { ...r.tokens } : { ...Pl, ...r.tokens };
      for (const a of Object.values(r.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      r.tokens = Pl;
    Array.isArray(r.mask) && (r.mask.length > 1 ? r.mask.sort((a, o) => a.length - o.length) : r.mask = (n = r.mask[0]) != null ? n : ""), r.mask === "" && (r.mask = null), this.opts = r;
  }
  masked(t) {
    return this.process(t, this.findMask(t));
  }
  unmasked(t) {
    return this.process(t, this.findMask(t), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const n = this.findMask(t);
    if (this.opts.mask == null || n == null)
      return !1;
    const r = this.process(t, n).length;
    return typeof this.opts.mask == "string" ? r >= this.opts.mask.length : typeof this.opts.mask == "function" ? r >= n.length : this.opts.mask.filter((a) => r >= a.length).length === this.opts.mask.length;
  }
  findMask(t) {
    var n, r;
    const a = this.opts.mask;
    if (a == null)
      return null;
    if (typeof a == "string")
      return a;
    if (typeof a == "function")
      return a(t);
    const o = this.process(t, (n = a.slice(-1).pop()) != null ? n : "", !1);
    return (r = a.find((i) => this.process(t, i, !1).length >= o.length)) != null ? r : "";
  }
  escapeMask(t) {
    const n = [], r = [];
    return t.split("").forEach((a, o) => {
      a === "!" && t[o - 1] !== "!" ? r.push(o - r.length) : n.push(a);
    }), { mask: n.join(""), escaped: r };
  }
  process(t, n, r = !0) {
    var a;
    if (n == null)
      return t;
    const o = `value=${t},mask=${n},masked=${r ? 1 : 0}`;
    if (this.memo.has(o))
      return this.memo.get(o);
    const { mask: i, escaped: u } = this.escapeMask(n), p = [], d = this.opts.tokens != null ? this.opts.tokens : {}, v = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : i.length - 1, g = this.isReversed() ? () => Y > -1 && V > -1 : () => Y < i.length && V < t.length, _ = (A) => !this.isReversed() && A <= s || this.isReversed() && A >= s;
    let D, R = -1, Y = this.isReversed() ? i.length - 1 : 0, V = this.isReversed() ? t.length - 1 : 0;
    for (; g(); ) {
      const A = i.charAt(Y), L = d[A], U = (L == null ? void 0 : L.transform) != null ? L.transform(t.charAt(V)) : t.charAt(V);
      if (!u.includes(Y) && L != null) {
        if (U.match(L.pattern) != null)
          p[m](U), L.repeated ? (R === -1 ? R = Y : Y === s && Y !== R && (Y = R - v), s === R && (Y -= v)) : L.multiple && (Y -= v), Y += v;
        else if (L.multiple) {
          const G = ((a = p[V - v]) == null ? void 0 : a.match(L.pattern)) != null, X = i.charAt(Y + v);
          G && X !== "" && d[X] == null ? (Y += v, V -= v) : p[m]("");
        } else
          U === D ? D = void 0 : L.optional && (Y += v, V -= v);
        V += v;
      } else
        r && !this.isEager() && p[m](A), U === A && !this.isEager() ? V += v : D = A, this.isEager() || (Y += v);
      if (this.isEager())
        for (; _(Y) && (d[i.charAt(Y)] == null || u.includes(Y)); )
          r ? p[m](i.charAt(Y)) : i.charAt(Y) === t.charAt(V) && (V += v), Y += v;
    }
    return this.memo.set(o, p.join("")), this.memo.get(o);
  }
}
const mu = (e) => JSON.parse(e.replaceAll("'", '"')), Dl = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Oh(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = da(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = da(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = da(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = xh(e.dataset.maskaTokens)), n;
}, da = (e) => e !== "" ? !!JSON.parse(e) : !0, Oh = (e) => e.startsWith("[") && e.endsWith("]") ? mu(e) : e, xh = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return mu(e);
  const t = {};
  return e.split("|").forEach((n) => {
    const r = n.split(":");
    t[r[0]] = {
      pattern: new RegExp(r[1]),
      optional: r[2] === "optional",
      multiple: r[2] === "multiple",
      repeated: r[2] === "repeated"
    };
  }), t;
};
class Th {
  constructor(t, n = {}) {
    ln(this, "items", /* @__PURE__ */ new Map()), ln(this, "beforeinputEvent", (r) => {
      const a = r.target, o = this.items.get(a);
      o.isEager() && "inputType" in r && r.inputType.startsWith("delete") && o.unmasked(a.value).length <= 1 && this.setMaskedValue(a, "");
    }), ln(this, "inputEvent", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked" in r.detail)
        return;
      const a = r.target, o = this.items.get(a), i = a.value, u = a.selectionStart, p = a.selectionEnd;
      let d = i;
      if (o.isEager()) {
        const v = o.masked(i), m = o.unmasked(i);
        m === "" && "data" in r && r.data != null ? d = r.data : m !== o.unmasked(v) && (d = m);
      }
      if (this.setMaskedValue(a, d), "inputType" in r && (r.inputType.startsWith("delete") || u != null && u < i.length))
        try {
          a.setSelectionRange(u, p);
        } catch {
        }
    }), this.options = n, typeof t == "string" ? this.init(
      Array.from(document.querySelectorAll(t)),
      this.getMaskOpts(n)
    ) : this.init(
      "length" in t ? Array.from(t) : [t],
      this.getMaskOpts(n)
    );
  }
  destroy() {
    for (const t of this.items.keys())
      t.removeEventListener("input", this.inputEvent), t.removeEventListener("beforeinput", this.beforeinputEvent);
    this.items.clear();
  }
  needUpdateOptions(t, n) {
    const r = this.items.get(t), a = new Cl(Dl(t, this.getMaskOpts(n)));
    return JSON.stringify(r.opts) !== JSON.stringify(a.opts);
  }
  needUpdateValue(t) {
    const n = t.dataset.maskaValue;
    return n == null && t.value !== "" || n != null && n !== t.value;
  }
  getMaskOpts(t) {
    const { onMaska: n, preProcess: r, postProcess: a, ...o } = t;
    return o;
  }
  init(t, n) {
    for (const r of t) {
      const a = new Cl(Dl(r, n));
      this.items.set(r, a), r.value !== "" && this.setMaskedValue(r, r.value), r.addEventListener("input", this.inputEvent), r.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, n) {
    const r = this.items.get(t);
    this.options.preProcess != null && (n = this.options.preProcess(n));
    const a = r.masked(n), o = r.unmasked(r.isEager() ? a : n), i = r.completed(n), u = { masked: a, unmasked: o, completed: i };
    n = a, this.options.postProcess != null && (n = this.options.postProcess(n)), t.value = n, t.dataset.maskaValue = n, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((p) => p(u)) : this.options.onMaska(u)), t.dispatchEvent(new CustomEvent("maska", { detail: u })), t.dispatchEvent(new CustomEvent("input", { detail: u }));
  }
}
const Po = /* @__PURE__ */ new WeakMap(), Ph = (e) => {
  setTimeout(() => {
    var t;
    ((t = Po.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, Ch = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), r = { ...t.arg };
  if (n == null)
    return;
  Ph(n);
  const a = Po.get(n);
  if (a != null) {
    if (!a.needUpdateOptions(n, r))
      return;
    a.destroy();
  }
  if (t.value != null) {
    const o = t.value, i = (u) => {
      o.masked = u.masked, o.unmasked = u.unmasked, o.completed = u.completed;
    };
    r.onMaska = r.onMaska == null ? i : Array.isArray(r.onMaska) ? [...r.onMaska, i] : [r.onMaska, i];
  }
  Po.set(n, new Th(n, r));
}, Dh = { class: "custom-text-field__container" }, Rh = ["type", "data-maska", "disabled", "readonly", "placeholder", "data-maska-tokens"], Mh = ["type", "disabled", "readonly", "placeholder"], Ih = {
  key: 0,
  class: "custom-text-field__error"
}, Nh = /* @__PURE__ */ fe({
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
    },
    mask: {
      default: "",
      type: String
    },
    maskTokens: {
      default: "",
      type: String
    }
  },
  emits: ["update:model-value", "keydown", "keyup", "input", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = e;
    xe((R) => ({
      "1401e10e": f(u),
      "7a191f2f": f(i)
    }));
    const r = pt(), a = I(!1), o = k({
      get() {
        return n.modelValue;
      },
      set(R) {
        n.disabled || n.readonly || t("update:model-value", R);
      }
    }), i = k(() => {
      let R = "1fr";
      return n.clearable && (R += " 1rem"), d() && (R += " 1rem"), R;
    }), u = k(() => n.clearable || d() ? "0.75rem" : 0), p = k(() => ({
      "custom-text-field__input-container": !0,
      "custom-text-field__input-container--dark": n.dark,
      "custom-text-field__input-container--outlined": n.outlined,
      "custom-text-field__input-container--disabled": n.disabled,
      "custom-text-field__input-container--error": !!n.errorMessage,
      "custom-text-field__input-container--focused": a.value || !!o.value
    })), d = () => !!r.append, v = () => {
      o.value && (o.value = "");
    }, m = (R) => {
      n.disabled || n.readonly || (a.value = !0, t("focus", R));
    }, s = (R) => {
      n.disabled || n.readonly || (a.value = !1, t("blur", R));
    }, g = (R) => {
      n.disabled || n.readonly || t("input", R);
    }, _ = (R) => {
      n.disabled || n.readonly || t("keyup", R);
    }, D = (R) => {
      n.disabled || n.readonly || t("keydown", R);
    };
    return (R, Y) => (y(), O("div", Dh, [
      H("div", {
        class: ie(f(p))
      }, [
        e.mask ? xt((y(), O("input", {
          key: 0,
          "onUpdate:modelValue": Y[0] || (Y[0] = (V) => Fe(o) ? o.value = V : null),
          type: e.type,
          "data-maska": e.mask,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "data-maska-tokens": e.maskTokens,
          class: "custom-text-field__input",
          onBlur: s,
          onFocus: m,
          onInput: g,
          onKeyup: _,
          onKeydown: D
        }, null, 40, Rh)), [
          [Zo, f(o)],
          [f(Ch)]
        ]) : xt((y(), O("input", {
          key: 1,
          "onUpdate:modelValue": Y[1] || (Y[1] = (V) => Fe(o) ? o.value = V : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "custom-text-field__input",
          onBlur: s,
          onFocus: m,
          onInput: g,
          onKeyup: _,
          onKeydown: D
        }, null, 40, Mh)), [
          [Zo, f(o)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (y(), O("div", {
          key: 2,
          class: "custom-text-field__button",
          onClick: v
        }, [
          f(o) ? (y(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : P("", !0)
        ])) : P("", !0),
        d() ? q(R.$slots, "append", { key: 3 }, void 0, !0) : P("", !0)
      ], 2),
      e.errorMessage ? (y(), O("div", Ih, he(e.errorMessage), 1)) : P("", !0)
    ]));
  }
});
const Go = /* @__PURE__ */ ke(Nh, [["__scopeId", "data-v-52ce3172"]]), Bh = (e, t) => {
  const n = I(1), r = I([]), a = I("asc"), o = I(null), i = k(() => {
    const U = e.value.slice();
    return o.value ? U.sort((G, X) => {
      if (!o.value)
        return 0;
      const N = D(G, o.value.value), S = D(X, o.value.value);
      let M = N > S ? 1 : -1;
      return o.value.sort && (M = o.value.sort(N, S)), a.value === "asc" ? M : M * -1;
    }) : U;
  }), u = k(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), p = k(() => t.value !== null ? i.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? i.value : i.value.filter((U, G) => r.value[G] === n.value)), d = k(() => a.value), v = k(() => {
    const U = n.value;
    let G;
    return U === 1 ? G = [U, U + 1, U + 2] : U === u.value ? G = [U - 2, U - 1, U] : G = [U - 1, U, U + 1], G.filter((X) => X > 0 && X <= u.value);
  });
  function m() {
    n.value < u.value && n.value++;
  }
  function s() {
    n.value > 1 && n.value--;
  }
  function g(U) {
    return U.id ?? Object.values(U)[0];
  }
  function _(U, G) {
    const X = G.value;
    return `${g(U)}.${X}`;
  }
  function D(U, G) {
    return U[G] ?? "";
  }
  function R(U) {
    n.value = U;
  }
  function Y(U) {
    e.value = U;
  }
  async function V(U, G) {
    var X;
    U.sortable !== !1 && (n.value = 1, ((X = o.value) == null ? void 0 : X.value) === U.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = U, a.value = "asc"), t.value === null && (r.value = [], await dt(), L(G)));
  }
  function A(U) {
    var G;
    return ((G = o.value) == null ? void 0 : G.value) === U;
  }
  function L(U) {
    const G = [], X = U.getBoundingClientRect(), N = Math.floor(X.height - 52);
    let S = 1, M = 0;
    const C = U.rows;
    for (let Z = 0; Z < C.length; Z++) {
      const ee = C[Z].offsetHeight;
      M += ee, M >= N && (M = ee, S++), G.push(S);
    }
    r.value = [...G];
  }
  return {
    // Computed
    pages: v,
    pageCount: u,
    sortedItems: i,
    currentPage: n,
    getSortOrder: d,
    itemsCurrentPage: p,
    // Methods
    setItems: Y,
    nextPage: m,
    setSortBy: V,
    getRowKey: g,
    getCellKey: _,
    isSortedBy: A,
    getCellValue: D,
    previousPage: s,
    setCurrentPage: R,
    calculatePagination: L
  };
}, Ah = ["onMouseenter", "onMouseleave"], Eh = /* @__PURE__ */ fe({
  __name: "CustomTooltip",
  props: {
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = pt(), { overlayContainer: r } = Nl(), a = I("initial"), o = I("initial"), i = I("initial"), u = I(null), p = k(() => ({
      "custom-tooltip__container": !0,
      "custom-tooltip__container--disabled": t.disabled
    })), d = () => !!n.default, v = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await dt();
      const g = r.value.getBoundingClientRect(), _ = s.target.getBoundingClientRect(), D = _.x + g.width;
      _.x < 0 ? (o.value = "0", i.value = "initial") : D >= window.innerWidth ? (o.value = "initial", i.value = "0") : _.x !== g.left ? o.value = `${_.x}px` : (o.value = "initial", i.value = "initial"), a.value = `${_.top + _.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value;
    }, m = () => {
      a.value = "", o.value = "", i.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value);
    };
    return (s, g) => (y(), O("div", {
      class: ie(f(p))
    }, [
      H("div", {
        onMouseenter: Ee(v, ["stop"]),
        onMouseleave: Ee(m, ["stop"])
      }, [
        q(s.$slots, "activator", {}, void 0, !0)
      ], 40, Ah),
      d() ? (y(), O("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        q(s.$slots, "default", {}, void 0, !0)
      ], 512)) : P("", !0)
    ], 2));
  }
});
const jr = /* @__PURE__ */ ke(Eh, [["__scopeId", "data-v-646ae85d"]]), Yh = /* @__PURE__ */ fe({
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
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "1rem",
      type: String
    },
    inactive: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    xe((v) => ({
      bef17412: e.containerSize,
      "62549f69": e.borderRadius,
      "5e4a7b46": f(i)
    }));
    const r = pt(), a = Je(), o = k(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), i = k(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = k(() => n.disabled ? "neutro-4" : n.color), p = () => !!r.default, d = (v) => {
      n.disabled || n.inactive || t("click", v);
    };
    return (v, m) => (y(), te(jr, { disabled: e.disabled }, We({
      activator: J(() => [
        H("div", {
          class: ie(f(o)),
          onClick: d
        }, [
          e.icon.startsWith("fm") ? (y(), te(He, {
            key: 0,
            name: e.icon,
            size: e.size,
            color: f(u)
          }, null, 8, ["name", "size", "color"])) : (y(), te(Rt, {
            key: 1,
            src: e.icon,
            size: e.size,
            color: f(u)
          }, null, 8, ["src", "size", "color"]))
        ], 2)
      ]),
      _: 2
    }, [
      p() && !e.disabled ? {
        name: "default",
        fn: J(() => [
          q(v.$slots, "default", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Co = /* @__PURE__ */ ke(Yh, [["__scopeId", "data-v-e022ef9b"]]), Vh = { class: "data-table__container" }, Uh = ["onClick"], Fh = { class: "data-table__header-text" }, Wh = {
  key: 0,
  class: "data-table__row--empty"
}, Hh = ["onClick"], Lh = {
  key: 0,
  class: "data-table__footer"
}, zh = { class: "data-table__footer-buttons" }, jh = ["onClick"], qh = /* @__PURE__ */ fe({
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
    backgroundColor: {
      default: "initial",
      type: String
    },
    itemsPerPage: {
      default: null,
      type: Number
    },
    height: {
      default: "initial",
      type: String
    },
    gridTemplateColumns: {
      default: "initial",
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
      default: "fm-sad-face"
    },
    stickyFirstColumn: {
      type: Boolean
    },
    stickyLastColumn: {
      type: Boolean
    },
    stickyHead: {
      type: Boolean
    },
    maxHeight: {
      default: "inital",
      type: String
    }
  },
  emits: ["click:row"],
  setup(e, { emit: t }) {
    const n = e;
    xe((T) => ({
      "2280bc92": e.height,
      cec225ca: e.maxHeight,
      c51aef76: e.backgroundColor,
      e945d166: e.gridTemplateColumns
    }));
    const r = k(() => n.items), a = k(() => n.itemsPerPage), o = pt(), {
      pages: i,
      pageCount: u,
      currentPage: p,
      getSortOrder: d,
      itemsCurrentPage: v,
      nextPage: m,
      setSortBy: s,
      getRowKey: g,
      isSortedBy: _,
      getCellKey: D,
      getCellValue: R,
      previousPage: Y,
      setCurrentPage: V,
      calculatePagination: A
    } = Bh(r, a);
    Xe(() => {
      n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null || L.value && A(L.value);
    });
    const L = I(null), U = k(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), G = k(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    }));
    function X(T) {
      return !!o[T];
    }
    function N(T) {
      return _(T) ? d.value === "asc" ? "fm-arrow-down" : "fm-arrow-up" : "fm-arrow-down";
    }
    function S(T) {
      return {
        "data-table__footer-page": !0,
        "data-table__footer-page--selected": T === p.value
      };
    }
    function M(T) {
      return {
        "data-table__sort-icon": !0,
        "data-table__sort-icon--active": _(T)
      };
    }
    function C(T) {
      return {
        "data-table__th": !0,
        "data-table__th--sortable": T.sortable !== !1
      };
    }
    function Z(T) {
      return {
        "data-table__row": !0,
        "data-table__row--sticky-last": n.stickyLastColumn,
        "data-table__row--sticky-first": n.stickyFirstColumn,
        "data-table__row--selected": T[n.compareSelectedWith] === n.selected,
        "data-table__row--disabled": n.disabledKey && n.disabledValue && T[n.disabledKey] === n.disabledValue
      };
    }
    function ee(T) {
      return _(T) ? "acento-secundario" : "neutro-3";
    }
    function re(T) {
      L.value && s(T, L.value);
    }
    function j(T) {
      t("click:row", T);
    }
    return (T, l) => (y(), O("div", Vh, [
      H("table", {
        class: ie(f(G)),
        "aria-describedby": "Reutility"
      }, [
        H("thead", {
          class: ie(f(U))
        }, [
          H("tr", null, [
            (y(!0), O(ye, null, Te(e.headers, (c) => (y(), O("th", {
              key: c.value,
              class: ie(C(c)),
              onClick: (w) => re(c)
            }, [
              H("div", Fh, [
                X(`header.${c.value}`) ? q(T.$slots, `header.${c.value}`, {
                  key: 0,
                  headerText: c.text
                }, void 0, !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(c.text), 1)
                ], 64))
              ]),
              c.sortable !== !1 ? (y(), O("div", {
                key: 0,
                class: ie(M(c.value))
              }, [
                be(He, {
                  name: N(c.value),
                  color: ee(c.value)
                }, null, 8, ["name", "color"])
              ], 2)) : P("", !0)
            ], 10, Uh))), 128))
          ])
        ], 2),
        H("tbody", {
          ref_key: "tableBodyRef",
          ref: L,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (y(), O("tr", Wh, [
            X("no-data") ? P("", !0) : (y(), O(ye, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (y(), te(He, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? P("", !0) : (y(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ae(" " + he(e.noDataText), 1)
            ], 64)),
            q(T.$slots, "no-data", {}, void 0, !0)
          ])) : P("", !0),
          (y(!0), O(ye, null, Te(f(v), (c) => (y(), O("tr", {
            key: f(g)(c),
            class: ie(Z(c)),
            onClick: (w) => j(c)
          }, [
            (y(!0), O(ye, null, Te(e.headers, (w) => (y(), O("td", {
              key: f(D)(c, w)
            }, [
              X(w.value) ? q(T.$slots, w.value, {
                key: 0,
                item: c
              }, void 0, !0) : (y(), O(ye, { key: 1 }, [
                Ae(he(f(R)(c, w.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, Hh))), 128))
        ], 512)
      ], 2),
      f(u) > 1 ? (y(), O("div", Lh, [
        be(Co, {
          size: "1rem",
          icon: "fm-arrow-left",
          color: "acento-principal",
          disabled: f(p) === 1,
          onClick: f(Y)
        }, null, 8, ["disabled", "onClick"]),
        H("div", zh, [
          (y(!0), O(ye, null, Te(f(i), (c) => (y(), O("button", {
            key: `page-${c}`,
            class: ie(S(c)),
            onClick: (w) => f(V)(c)
          }, he(c), 11, jh))), 128))
        ]),
        be(Co, {
          size: "1rem",
          icon: "fm-arrow-right",
          color: "acento-principal",
          disabled: f(p) === f(u),
          onClick: f(m)
        }, null, 8, ["disabled", "onClick"])
      ])) : P("", !0)
    ]));
  }
});
const Gh = /* @__PURE__ */ ke(qh, [["__scopeId", "data-v-17028fbf"]]), Qh = /* @__PURE__ */ fe({
  __name: "DataTableItem",
  props: {
    disabled: {
      type: Boolean
    },
    selected: {
      type: Boolean
    },
    textTransform: {
      default: "initial",
      type: String
    },
    textAlign: {
      default: "center",
      type: String
    }
  },
  setup(e) {
    const t = e, n = k(() => t.disabled ? "neutro-4" : t.selected ? "acento-principal" : "secundario"), r = k(() => t.selected ? 700 : 400);
    return (a, o) => (y(), te(Tt, {
      "font-size": "1rem",
      color: f(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": f(r),
      "text-transform": e.textTransform
    }, {
      default: J(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), Zh = { class: "filter-date-picker__container" }, Kh = { class: "filter-date-picker__label" }, Xh = /* @__PURE__ */ fe({
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
      type: [Array, Date, Object]
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
    },
    monthPicker: {
      type: Boolean
    },
    clearable: {
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
    return (a, o) => (y(), O("div", Zh, [
      H("div", Kh, he(e.label), 1),
      be(jo, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (i) => Fe(r) ? r.value = i : null),
        range: e.range,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        clearable: e.clearable,
        placeholder: e.placeholder,
        "month-picker": e.monthPicker
      }, null, 8, ["modelValue", "range", "max-date", "min-date", "clearable", "placeholder", "month-picker"])
    ]));
  }
});
const Jh = /* @__PURE__ */ ke(Xh, [["__scopeId", "data-v-160df9f0"]]), eg = { class: "filter-select__container" }, tg = { class: "filter-select__label" }, ng = /* @__PURE__ */ fe({
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
    const n = e, r = pt(), a = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, i) => (y(), O("div", eg, [
      H("div", tg, he(e.label), 1),
      be(qo, {
        modelValue: f(a),
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Fe(a) ? a.value = u : null),
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
      }, We({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: J(() => [
            q(o.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform"])
    ]));
  }
});
const rg = /* @__PURE__ */ ke(ng, [["__scopeId", "data-v-de8e51dc"]]), ag = { class: "flex__container" }, og = /* @__PURE__ */ fe({
  __name: "FlexContainer",
  props: {
    padding: {
      default: "initial",
      type: [String, Number]
    },
    margin: {
      default: "initial",
      type: [String, Number]
    },
    width: {
      default: "initial",
      type: String
    },
    height: {
      default: "initial",
      type: String
    },
    alignItems: {
      default: "initial",
      type: String
    },
    alignContent: {
      default: "initial",
      type: String
    },
    justifyItems: {
      default: "initial",
      type: String
    },
    flexDirection: {
      default: "row",
      type: String
    },
    justifyContent: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    return xe((t) => ({
      "0a148d6d": e.width,
      "27021ae7": e.margin,
      "1eae2660": e.height,
      "572d4df8": e.padding,
      c7336718: e.alignItems,
      "52cd87a6": e.alignContent,
      a554a4ee: e.justifyItems,
      "310bd82d": e.flexDirection,
      "6934ac02": e.justifyContent
    })), (t, n) => (y(), O("div", ag, [
      q(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const yu = /* @__PURE__ */ ke(og, [["__scopeId", "data-v-291869d6"]]), ig = { class: "form-date-picker__container" }, lg = { class: "form-date-picker__label" }, ug = /* @__PURE__ */ fe({
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
      type: [Array, Date, Object]
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
    },
    monthPicker: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((o) => ({
      "5e14a64a": e.gridTemplateColumns,
      "77c29411": f(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, i) => (y(), O("div", ig, [
      H("div", lg, he(e.label), 1),
      be(jo, {
        modelValue: f(r),
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Fe(r) ? r.value = u : null),
        dark: e.dark,
        range: e.range,
        "min-date": e.minDate,
        "max-date": e.maxDate,
        disabled: e.disabled,
        outlined: e.outlined,
        readonly: e.readonly,
        clearable: e.clearable,
        placeholder: e.placeholder,
        "month-picker": e.monthPicker,
        "error-message": e.errorMessage
      }, null, 8, ["modelValue", "dark", "range", "min-date", "max-date", "disabled", "outlined", "readonly", "clearable", "placeholder", "month-picker", "error-message"])
    ]));
  }
});
const sg = /* @__PURE__ */ ke(ug, [["__scopeId", "data-v-2ded3a4a"]]), cg = { class: "form-select__container" }, fg = { class: "form-select__label" }, dg = /* @__PURE__ */ fe({
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
    xe((i) => ({
      e6a147f0: e.gridTemplateColumns,
      "51c7ae44": f(o)
    }));
    const r = pt(), a = k({
      get() {
        return n.modelValue;
      },
      set(i) {
        t("update:model-value", i);
      }
    }), o = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (i, u) => (y(), O("div", cg, [
      H("div", fg, he(e.label), 1),
      be(qo, {
        modelValue: f(a),
        "onUpdate:modelValue": u[0] || (u[0] = (p) => Fe(a) ? a.value = p : null),
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
      }, We({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: J(() => [
            q(i.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform"])
    ]));
  }
});
const pg = /* @__PURE__ */ ke(dg, [["__scopeId", "data-v-7ed32697"]]), mg = { class: "form-text-field__container" }, yg = { class: "form-text-field__label" }, vg = /* @__PURE__ */ fe({
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
    },
    mask: {
      default: "",
      type: String
    },
    maskTokens: {
      default: "",
      type: String
    }
  },
  emits: ["update:model-value", "keydown", "keyup", "input", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = e;
    xe((s) => ({
      "6dd83380": e.gridTemplateColumns,
      "5a800fcc": f(o)
    }));
    const r = pt(), a = k({
      get() {
        return n.modelValue;
      },
      set(s) {
        t("update:model-value", s);
      }
    }), o = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), i = () => !!r.append, u = (s) => {
      t("focus", s);
    }, p = (s) => {
      t("blur", s);
    }, d = (s) => {
      t("input", s);
    }, v = (s) => {
      t("keyup", s);
    }, m = (s) => {
      t("keydown", s);
    };
    return (s, g) => (y(), O("div", mg, [
      H("div", yg, he(e.label), 1),
      be(Go, {
        modelValue: f(a),
        "onUpdate:modelValue": g[0] || (g[0] = (_) => Fe(a) ? a.value = _ : null),
        type: e.type,
        dark: e.dark,
        mask: e.mask,
        readonly: e.readonly,
        disabled: e.disabled,
        outlined: e.outlined,
        clearable: e.clearable,
        "mask-tokens": e.maskTokens,
        placeholder: e.placeholder,
        "error-message": e.errorMessage,
        onBlur: p,
        onInput: d,
        onKeyup: v,
        onFocus: u,
        onKeydown: m
      }, We({ _: 2 }, [
        i() ? {
          name: "append",
          fn: J(() => [
            q(s.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const hg = /* @__PURE__ */ ke(vg, [["__scopeId", "data-v-82a41f27"]]), gg = { class: "header-tabs__container" }, bg = ["onClick"], _g = /* @__PURE__ */ fe({
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
    xe((d) => ({
      "6efbf4ab": e.columnGap,
      "39adfd08": f(o),
      "06d2f848": f(i)
    }));
    const r = Je(), a = k({
      get() {
        return n.modelValue;
      },
      set(d) {
        t("update:model-value", d);
      }
    }), o = k(() => r.getRealColor(n.color)), i = k(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (d) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === d
    }), p = (d) => {
      a.value = d;
    };
    return (d, v) => (y(), O("div", gg, [
      (y(!0), O(ye, null, Te(e.items, (m, s) => (y(), O("button", {
        key: `tab-${s}`,
        class: ie(u(s)),
        onClick: (g) => p(s)
      }, he(m), 11, bg))), 128))
    ]));
  }
});
const wg = /* @__PURE__ */ ke(_g, [["__scopeId", "data-v-8ddf32d6"]]), kg = ["alt", "src"], Sg = /* @__PURE__ */ fe({
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
      default: "initial",
      type: String
    },
    width: {
      default: "initial",
      type: String
    },
    height: {
      default: "initial",
      type: String
    },
    objectFit: {
      default: "initial",
      type: String
    },
    aspectRatio: {
      default: "initial",
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
    xe((i) => ({
      "6e35978a": e.width,
      "3eae5fe3": e.height,
      "4d9b1c16": e.objectFit,
      "3c396d52": e.aspectRatio,
      "6e3c64cc": e.borderRadius,
      "38fb4444": e.objectPosition
    }));
    const r = k(() => new URL(n.src, import.meta.url).href), a = k(() => ({
      image__container: !0,
      "image__container--clickable": n.clickable
    })), o = (i) => {
      t("click", i);
    };
    return (i, u) => (y(), O("img", {
      alt: e.alt,
      src: f(r),
      class: ie(f(a)),
      onClick: o
    }, null, 10, kg));
  }
});
const $g = /* @__PURE__ */ ke(Sg, [["__scopeId", "data-v-15671b1a"]]), Og = { class: "information-text__container" }, xg = { class: "information-text__label" }, Tg = { class: "information-text__value" }, Pg = /* @__PURE__ */ fe({
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
    return xe((t) => ({
      "31ff1844": e.padding,
      "4a8aaa2a": e.gridTemplateColumns,
      a56d9a68: e.textTransform
    })), (t, n) => (y(), O("div", Og, [
      H("div", xg, he(e.label), 1),
      H("div", Tg, [
        q(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const Cg = /* @__PURE__ */ ke(Pg, [["__scopeId", "data-v-55646bf9"]]), Dg = {
  key: 0,
  class: "page-switch__label"
}, Rg = { class: "page-switch__switch" }, Mg = /* @__PURE__ */ fe({
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
    const n = e;
    xe((m) => ({
      "55af4d01": e.justifyContent,
      b9ccf758: e.labelWeight,
      "1597fce4": e.width,
      "1e12e82d": f(u)
    }));
    const r = Je(), a = k({
      get() {
        return n.modelValue;
      },
      set(m) {
        n.readonly || t("update:model-value", m);
      }
    }), o = k(() => r.getRealColor(n.activeColor)), i = k(() => r.getRealColor(n.color)), u = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.activeColor && a.value ? o.value : i.value), p = k(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": a.value
    })), d = k(() => ({
      "page-switch__container": !0,
      "page-switch__container--disabled": n.disabled
    })), v = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (m, s) => (y(), te(jr, { disabled: e.disabled }, We({
      activator: J(() => [
        H("div", {
          class: ie(f(d)),
          onClick: v
        }, [
          e.label ? (y(), O("div", Dg, he(e.label), 1)) : P("", !0),
          H("div", Rg, [
            xt(H("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (g) => Fe(a) ? a.value = g : null),
              type: "checkbox",
              class: "page-switch__checkbox"
            }, null, 512), [
              [$u, f(a)]
            ]),
            H("div", {
              class: ie(f(p))
            }, null, 2)
          ])
        ], 2)
      ]),
      _: 2
    }, [
      e.tooltip && !e.disabled ? {
        name: "default",
        fn: J(() => [
          Ae(he(e.tooltip), 1)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Ig = /* @__PURE__ */ ke(Mg, [["__scopeId", "data-v-5998c99b"]]), Ng = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    closable: {
      type: Boolean
    },
    iconSize: {
      type: String,
      default: "1.5rem"
    },
    predefinedStyle: {
      default: "subtitle-2",
      type: String
    },
    textColor: {
      default: "acento-principal",
      type: String
    },
    backgroundColor: {
      default: "initial",
      type: String
    }
  },
  emits: ["click:close"],
  setup(e, { emit: t }) {
    const n = e;
    xe((u) => ({
      "1a122f47": f(o),
      "77ee2040": e.iconSize
    }));
    const r = Je(), a = k(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = k(() => r.getRealColor(n.backgroundColor)), i = () => {
      t("click:close");
    };
    return (u, p) => (y(), O("div", {
      class: ie(f(a))
    }, [
      be(Tt, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: J(() => [
          q(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color", "predefined-style"]),
      e.closable ? (y(), O("div", {
        key: 0,
        class: "panel-title__close",
        onClick: i
      }, [
        be(He, {
          color: "error",
          size: e.iconSize,
          name: "fm-circle-close"
        }, null, 8, ["size"])
      ])) : P("", !0)
    ], 2));
  }
});
const Bg = /* @__PURE__ */ ke(Ng, [["__scopeId", "data-v-e4e2b930"]]), Ag = /* @__PURE__ */ fe({
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
    return (a, o) => (y(), te(Go, {
      modelValue: f(r),
      "onUpdate:modelValue": o[0] || (o[0] = (i) => Fe(r) ? r.value = i : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: J(() => [
        be(He, {
          size: "1rem",
          name: "fm-magnify-glass",
          color: "acento-principal"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder"]));
  }
}), Eg = /* @__PURE__ */ fe({
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
    },
    iconColor: {
      default: "acento-principal",
      type: String
    }
  },
  emits: ["close", "update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((a) => ({
      "4d8dac0e": e.width
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return ft(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), ft(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (y(), te(Ro, {
      persistent: "",
      "model-value": f(r)
    }, {
      default: J(() => [
        f(r) ? (y(), te(Hr, {
          key: 0,
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: J(() => [
            be(yu, { "justify-content": "center" }, {
              default: J(() => [
                e.icon.startsWith("fm") ? (y(), te(He, {
                  key: 0,
                  size: "5rem",
                  name: e.icon,
                  color: e.iconColor
                }, null, 8, ["name", "color"])) : (y(), te(Rt, {
                  key: 1,
                  size: "5rem",
                  src: e.icon,
                  color: e.iconColor
                }, null, 8, ["src", "color"]))
              ]),
              _: 1
            }),
            be(Tt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: J(() => [
                Ae(he(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (y(), te(Tt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: J(() => [
                Ae(he(e.subtitle), 1)
              ]),
              _: 1
            })) : P("", !0)
          ]),
          _: 1
        }, 8, ["width"])) : P("", !0)
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const Yg = /* @__PURE__ */ ke(Eg, [["__scopeId", "data-v-4358ad85"]]);
class kt {
  // 0-1
  constructor(t, n, r) {
    // HSV
    cn(this, "hue");
    // 0-360
    cn(this, "saturation");
    // 0-1
    cn(this, "value");
    this.hue = t, this.value = r, this.saturation = n;
  }
  get rgb() {
    return kt.hsvToRgb(this.hue, this.saturation, this.value);
  }
  get hex() {
    return `#${this.rgb.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
  }
  setFromRgb(t, n, r) {
    const [a, o, i] = kt.rgbToHsv(t, n, r);
    this.hue = a, this.value = i, this.saturation = o;
  }
  setFromHex(t) {
    const [n, r, a] = kt.hexToRgb(t);
    this.setFromRgb(n, r, a);
  }
  static rgbToHsv(t, n, r) {
    const a = t / 255, o = n / 255, i = r / 255, u = Math.max(a, o, i), p = Math.min(a, o, i);
    let d = 0, v = 0;
    const m = u, s = u - p;
    return u === p ? d = 0 : u === a && o >= i ? d = 60 * ((o - i) / s) : u === a && o < i ? d = 60 * ((o - i) / s) + 360 : u === o ? d = 60 * ((i - a) / s) + 120 : u === i && (d = 60 * ((a - o) / s) + 240), u > 0 && (v = 1 - p / u), [Math.round(d), Math.round(v * 100) / 100, Math.round(m * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, i = r * (1 - n), u = r * (1 - o * n), p = r * (1 - (1 - o) * n);
    let d = 0, v = 0, m = 0;
    switch (a) {
      case 0:
        d = r, v = p, m = i;
        break;
      case 1:
        d = u, v = r, m = i;
        break;
      case 2:
        d = i, v = r, m = p;
        break;
      case 3:
        d = i, v = u, m = r;
        break;
      case 4:
        d = p, v = i, m = r;
        break;
      case 5:
        d = r, v = i, m = u;
        break;
    }
    return [Math.round(d * 255), Math.round(v * 255), Math.round(m * 255)];
  }
  static hexToRgb(t) {
    if (!/^#([\da-fA-F]{3}|[\da-fA-F]{6})$/g.test(t))
      return [0, 0, 0];
    t = t.slice(1);
    let r, a, o;
    if (t.length === 3) {
      const [i, u, p] = t.split("");
      r = parseInt(i.repeat(2), 16), a = parseInt(u.repeat(2), 16), o = parseInt(p.repeat(2), 16);
    } else {
      const [i, u, p] = t.match(/.{2}/g) ?? ["0", "0", "0"];
      r = parseInt(i, 16), a = parseInt(u, 16), o = parseInt(p, 16);
    }
    return [r, a, o];
  }
  static fromRgb(t, n, r) {
    const [a, o, i] = kt.rgbToHsv(t, n, r);
    return new kt(a, o, i);
  }
  static fromHex(t) {
    const [n, r, a] = kt.hexToRgb(t);
    return kt.fromRgb(n, r, a);
  }
}
const Qo = (e) => (Ou("data-v-36d44455"), e = e(), xu(), e), Vg = ["onMousedown"], Ug = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("div", { class: "color-picker__canvas-thumb" }, null, -1)), Fg = [
  Ug
], Wg = ["onMousedown"], Hg = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("div", { class: "color-picker__hue-thumb" }, null, -1)), Lg = [
  Hg
], zg = { class: "color-picker__hex-input-container" }, jg = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("span", { class: "color-picker__hex-hash" }, " # ", -1)), qg = { class: "color-picker__colors" }, Gg = ["onClick"], Qg = /* @__PURE__ */ fe({
  __name: "ColorPicker",
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    background: {
      default: "neutro-1",
      type: String
    },
    dark: {
      type: Boolean
    },
    pickableColors: {
      type: Array,
      default: () => [
        "#EF4444",
        "#F97316",
        "#FACC15",
        "#4ADE80",
        "#2DD4BF",
        "#3B82F6",
        "#6366F1",
        "#EC4899",
        "#F43F5E",
        "#D946EF",
        "#0EA5E9",
        "#10B981",
        "#28A22F",
        "#84CC16"
      ]
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((j) => ({
      "0ba29d96": f(D),
      "6751406c": f(Y),
      "7cc7b577": f(R),
      "10f82a92": p.value,
      "771744e5": i.value
    }));
    const { getRealColor: r } = Je(), a = I(!1), o = I(!1), i = I("translateX(0)"), u = I(null), p = I("translate(0, 0"), d = I(null), v = Ct(kt.fromHex(n.modelValue)), m = Ct({
      left: 0,
      width: 0
    }), s = Ct({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    Xe(() => {
      A();
    });
    const g = k({
      get() {
        return n.modelValue;
      },
      set(j) {
        t("update:model-value", j);
      }
    }), _ = k(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), D = k(() => r(n.background)), R = k(() => `rgb(${v.rgb.join(",")})`), Y = k(() => `hsl(${v.hue}, 100%, 50%)`), V = k({
      get() {
        return v.hex.slice(1);
      },
      set(j) {
        v.setFromHex(j), A();
      }
    });
    function A() {
      if (!d.value || !u.value)
        return;
      const j = u.value.getBoundingClientRect(), T = v.hue / 360 * j.width;
      i.value = `translateX(${T}px)`;
      const l = d.value.getBoundingClientRect(), c = v.saturation * l.width, w = (1 - v.value) * l.height;
      p.value = `translate(${c}px, ${w}px)`, g.value = v.hex;
    }
    function L(j) {
      const T = Math.min(m.width, Math.max(0, j.clientX - m.left));
      v.hue = T / m.width * 360, i.value = `translateX(${T}px)`, g.value = v.hex;
    }
    function U(j) {
      if (!d.value)
        return;
      const T = d.value.getBoundingClientRect(), l = Math.min(T.width, Math.max(0, j.clientX - T.left)), c = Math.min(T.height, Math.max(0, j.clientY - T.top));
      v.saturation = l / T.width, v.value = 1 - c / T.height, p.value = `translate(${l}px, ${c}px)`, g.value = v.hex;
    }
    function G(j) {
      if (!d.value)
        return;
      const T = d.value.getBoundingClientRect();
      s.top = T.top, s.left = T.left, s.width = T.width, s.height = T.height, o.value = !0, U(j), M();
    }
    function X(j) {
      if (!u.value)
        return;
      const T = u.value.getBoundingClientRect();
      m.left = T.left, m.width = T.width, a.value = !0, L(j), M();
    }
    function N(j) {
      a.value ? L(j) : o.value && U(j);
    }
    function S() {
      a.value = !1, C();
    }
    function M() {
      document.addEventListener("mouseup", S), document.addEventListener("mousemove", N);
    }
    function C() {
      document.removeEventListener("mouseup", S), document.removeEventListener("mousemove", N);
    }
    function Z(j) {
      const T = ["v", "c"];
      j.ctrlKey && T.includes(j.key) || j.preventDefault();
    }
    function ee(j) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": g.value === j
      };
    }
    function re(j) {
      V.value = j, g.value = j;
    }
    return (j, T) => (y(), O("div", {
      class: ie(f(_))
    }, [
      H("div", {
        ref_key: "canvasRef",
        ref: d,
        class: "color-picker__canvas",
        onMousedown: Ee(G, ["stop", "prevent"])
      }, Fg, 40, Vg),
      H("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: Ee(X, ["stop", "prevent"])
      }, Lg, 40, Wg),
      H("div", zg, [
        jg,
        xt(H("input", {
          "onUpdate:modelValue": T[0] || (T[0] = (l) => Fe(V) ? V.value = l : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Ml, f(V)]
        ])
      ]),
      H("div", qg, [
        (y(!0), O(ye, null, Te(e.pickableColors, (l, c) => (y(), O("div", {
          key: `pickable-color-${c}`,
          style: St(`--color: ${l}`),
          class: ie(ee(l)),
          onClick: (w) => re(l)
        }, null, 14, Gg))), 128))
      ])
    ], 2));
  }
});
const vu = /* @__PURE__ */ ke(Qg, [["__scopeId", "data-v-36d44455"]]), Zg = { class: "form-color-picker__label" }, Kg = /* @__PURE__ */ fe({
  __name: "FormColorPicker",
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    background: {
      default: "neutro-1",
      type: String
    },
    dark: {
      type: Boolean
    },
    pickableColors: {
      default: void 0,
      type: Array
    },
    label: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((R) => ({
      "4b8700ff": e.gridTemplateColumns,
      "3b2f476d": f(D),
      f548fc6a: f(v),
      "5b3e8877": r.value,
      "0c8ebd25": a.value
    }));
    const r = I(""), a = I(""), o = I(""), i = I(!1), u = I(!1), p = I(null), d = I(null), v = k({
      get() {
        return n.modelValue;
      },
      set(R) {
        t("update:model-value", R);
      }
    }), m = async () => {
      await dt();
      const R = p.value, Y = d.value;
      if (!R || !Y)
        return;
      const V = R.getBoundingClientRect(), A = Y.getBoundingClientRect();
      a.value = `${V.left}px`, o.value = `${V.width}px`;
      const L = V.top + V.height + A.height, U = window.innerHeight, G = V.top + V.height;
      if (L > U) {
        const X = L - U;
        r.value = `${G - X - 16}px`;
      } else
        r.value = `${G}px`;
    }, s = () => {
      n.disabled || n.readonly || i.value || (i.value = !0, m(), u.value = !0, document.addEventListener("click", g));
    }, g = (R) => {
      !p.value || !R.target || p.value.contains(R.target) || _();
    }, _ = () => {
      i.value = !1, u.value = !1, document.removeEventListener("click", g);
    }, D = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (R, Y) => (y(), O("div", {
      ref_key: "container",
      ref: p,
      class: "form-color-picker__container"
    }, [
      H("div", Zg, he(e.label), 1),
      H("div", {
        class: "form-color-picker__input",
        onClick: s
      }),
      be(yt, null, {
        default: J(() => [
          i.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "form-color-picker__menu"
          }, [
            be(vu, {
              modelValue: f(v),
              "onUpdate:modelValue": Y[0] || (Y[0] = (V) => Fe(v) ? v.value = V : null),
              dark: e.dark,
              background: e.background,
              "pickable-colors": e.pickableColors
            }, null, 8, ["modelValue", "dark", "background", "pickable-colors"])
          ], 512)) : P("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
const Xg = /* @__PURE__ */ ke(Kg, [["__scopeId", "data-v-6da76967"]]), Jg = ["onMousedown"], e0 = /* @__PURE__ */ fe({
  __name: "CustomMenu",
  props: {
    disabled: {
      type: Boolean
    },
    default: {
      type: Boolean,
      default: void 0
    },
    nudgeTop: {
      default: 0,
      type: Number
    },
    nudgeBottom: {
      default: 0,
      type: Number
    },
    nudgeLeft: {
      default: 0,
      type: Number
    },
    nudgeRight: {
      default: 0,
      type: Number
    }
  },
  setup(e) {
    const t = e;
    xe((_) => ({
      d13ee8e4: n.value,
      "54ad1cee": r.value
    })), Xe(() => {
      t.default === !0 && v();
    });
    const n = I(""), r = I(""), a = I(""), o = I(!1), i = I(!1), u = I(null), p = I(null), d = async () => {
      n.value = "", r.value = "", await dt();
      const _ = u.value, D = p.value;
      if (!_ || !D)
        return;
      const R = _.getBoundingClientRect(), Y = D.getBoundingClientRect(), V = t.nudgeLeft - t.nudgeRight, A = t.nudgeTop - t.nudgeBottom, L = R.left + V;
      r.value = `${L}px`, a.value = `${R.width}px`;
      const U = R.top + R.height + Y.height, G = window.innerHeight, X = R.top + R.height + A;
      if (U > G) {
        const M = U - G;
        n.value = `${X - M - 16}px`;
      } else
        n.value = `${X}px`;
      const N = Y.right, S = window.innerWidth;
      if (N > S) {
        const M = N - S;
        r.value = `${L - M}px`;
      }
    }, v = () => {
      t.disabled && !t.default || (o.value = !0, d(), !t.disabled && (i.value = !0, document.addEventListener("click", s)));
    }, m = () => {
      t.disabled || (o.value = !1, i.value = !1, document.removeEventListener("click", s));
    }, s = (_) => {
      !u.value || !_.target || u.value.contains(_.target) || m();
    }, g = () => {
      t.disabled || (o.value ? m() : v());
    };
    return (_, D) => (y(), O("div", {
      ref_key: "container",
      ref: u,
      class: "custom-menu__container"
    }, [
      H("div", {
        onMousedown: Ee(g, ["stop"])
      }, [
        q(_.$slots, "activator", {}, void 0, !0)
      ], 40, Jg),
      be(yt, null, {
        default: J(() => [
          o.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: p,
            class: "custom-menu__menu"
          }, [
            q(_.$slots, "default", { close: m }, void 0, !0)
          ], 512)) : P("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const t0 = /* @__PURE__ */ ke(e0, [["__scopeId", "data-v-36d0ea39"]]), n0 = { class: "expansion-panel__content" }, r0 = /* @__PURE__ */ fe({
  __name: "ExpansionPanel",
  props: {
    outlined: {
      type: Boolean
    },
    backgroundColor: {
      default: "neutro-1",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    modelValue: {
      default: void 0,
      type: Boolean
    },
    transitionDuration: {
      default: "250ms",
      type: String
    },
    transitionTimingFunction: {
      default: "ease-in-out",
      type: String
    },
    boxShadow: {
      default: "initial",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((v) => ({
      "166f1cd7": e.boxShadow,
      "117a9b5c": e.borderRadius,
      "09733216": f(p),
      ad3fed06: e.transitionDuration,
      "2c9e476b": e.transitionTimingFunction
    }));
    const r = Je(), a = I(!1), o = k({
      get() {
        return n.modelValue === void 0 ? a.value : n.modelValue;
      },
      set(v) {
        a.value = v, t("update:model-value", v);
      }
    }), i = k(() => ({
      "expansion-panel__container": !0,
      "expansion-panel__container--outlined": n.outlined
    })), u = k(() => ({
      "expansion-panel__wrapper": !0,
      "expansion-panel__wrapper--opened": o.value
    })), p = k(() => r.getRealColor(n.backgroundColor));
    function d() {
      o.value = !o.value;
    }
    return (v, m) => (y(), O("div", {
      class: ie(f(i))
    }, [
      H("div", {
        class: "expansion-panel__activator",
        onClick: d
      }, [
        q(v.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      H("div", {
        class: ie(f(u))
      }, [
        H("div", n0, [
          q(v.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
});
const a0 = /* @__PURE__ */ ke(r0, [["__scopeId", "data-v-bf5a6abe"]]), o0 = { class: "grid__container" }, i0 = /* @__PURE__ */ fe({
  __name: "GridContainer",
  props: {
    height: {
      default: "initial",
      type: [String, Number]
    },
    alignItems: {
      default: "initial",
      type: String
    },
    alignContent: {
      default: "initial",
      type: String
    },
    justifyContent: {
      default: "initial",
      type: String
    },
    justifyItems: {
      default: "initial",
      type: String
    },
    gridTemplateRows: {
      default: "initial",
      type: String
    },
    rowGap: {
      default: "initial",
      type: [String, Number]
    },
    margin: {
      default: "initial",
      type: [String, Number]
    },
    padding: {
      default: "initial",
      type: [String, Number]
    },
    gridTemplateColumns: {
      default: "initial",
      type: String
    },
    columnGap: {
      default: "initial",
      type: [String, Number]
    },
    gridAutoFlow: {
      default: "initial",
      type: String
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    boxShadow: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      "2b0db15d": e.height,
      "3361a5e4": e.margin,
      "3cb0f6d2": e.rowGap,
      "5281baca": e.padding,
      "8a0cea56": e.boxShadow,
      "0ec3e7aa": e.columnGap,
      "07de10f1": e.alignItems,
      "7f0ec8d8": e.borderRadius,
      "4331d56a": e.alignContent,
      "19ee46c6": e.justifyItems,
      "4ccecc99": e.gridAutoFlow,
      "120be9ff": e.justifyContent,
      "5f561ee2": e.gridTemplateRows,
      "4227ee37": f(r),
      "9b1fb532": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", o0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const l0 = /* @__PURE__ */ ke(i0, [["__scopeId", "data-v-0be56675"]]), u0 = { class: "absolute__container" }, s0 = /* @__PURE__ */ fe({
  __name: "AbsoluteContainer",
  props: {
    width: {
      default: "initial",
      type: String
    },
    height: {
      default: "auto",
      type: String
    },
    margin: {
      default: "initial",
      type: String
    },
    padding: {
      default: "initial",
      type: String
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    boxShadow: {
      default: "initial",
      type: String
    },
    overflow: {
      default: "initial",
      type: String
    },
    top: {
      default: "initial",
      type: String
    },
    left: {
      default: "initial",
      type: String
    },
    right: {
      default: "initial",
      type: String
    },
    bottom: {
      default: "initial",
      type: String
    },
    transform: {
      default: "initial",
      type: String
    },
    zIndex: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      "75c39e79": e.top,
      "42ac6763": e.left,
      "1336e640": e.right,
      "137d51ea": e.width,
      "38b2fa87": e.bottom,
      "4ab1e60a": e.margin,
      "425df183": e.height,
      "5f8cd4d4": e.zIndex,
      ad123196: e.padding,
      "76e06d5e": e.overflow,
      "5d7244e0": e.transform,
      "825ade22": e.boxShadow,
      f674b18c: e.borderRadius,
      "7e99f3dd": f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", u0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const c0 = /* @__PURE__ */ ke(s0, [["__scopeId", "data-v-8b246d7c"]]), f0 = { class: "relative__container" }, d0 = /* @__PURE__ */ fe({
  __name: "RelativeContainer",
  props: {
    width: {
      default: "initial",
      type: [String, Number]
    },
    height: {
      default: "initial",
      type: [String, Number]
    },
    margin: {
      default: "initial",
      type: [String, Number]
    },
    padding: {
      default: "initial",
      type: [String, Number]
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    boxShadow: {
      default: "initial",
      type: String
    },
    overflow: {
      default: "initial",
      type: String
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      "05ebc8c1": e.width,
      b3db6bda: e.margin,
      c48354e8: e.height,
      "8bb9f768": e.padding,
      "7bb7f327": e.overflow,
      "54ebc446": e.boxShadow,
      b939befa: e.borderRadius,
      50321426: f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", f0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const p0 = /* @__PURE__ */ ke(d0, [["__scopeId", "data-v-95f80b5d"]]), m0 = /* @__PURE__ */ fe({
  __name: "ExpandableDataTableItem",
  props: {
    title: {
      required: !0,
      type: [String, Number]
    },
    opened: {
      type: Boolean
    },
    textTransform: {
      default: "capitalize",
      type: String
    },
    items: {
      required: !0,
      type: [Array, Object]
    },
    showActiveStyle: {
      type: Boolean
    },
    itemColor: {
      default: "neutro-4",
      type: String
    }
  },
  setup(e) {
    const t = pt();
    function n(r = "default") {
      return !!t[r];
    }
    return (r, a) => (y(), te(Hr, null, {
      default: J(() => [
        be(jr, null, We({
          activator: J(() => [
            be(Tt, {
              padding: "0.125rem 0",
              "text-transform": e.textTransform,
              "predefined-style": e.opened && e.showActiveStyle ? "body-2" : "body-1",
              color: e.opened && e.showActiveStyle ? "acento-principal" : "secundario"
            }, {
              default: J(() => [
                Ae(he(e.title), 1)
              ]),
              _: 1
            }, 8, ["text-transform", "predefined-style", "color"])
          ]),
          _: 2
        }, [
          n() ? {
            name: "default",
            fn: J(() => [
              q(r.$slots, "default")
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.opened ? (y(!0), O(ye, { key: 0 }, Te(e.items, (o, i) => (y(), O(ye, {
          key: `item-${i.toString()}`
        }, [
          n("value") ? q(r.$slots, "value", {
            key: 0,
            value: o
          }) : (y(), te(Tt, {
            key: 1,
            color: e.itemColor,
            padding: "0.125rem 0",
            "predefined-style": "caption"
          }, {
            default: J(() => [
              Ae(he(o), 1)
            ]),
            _: 2
          }, 1032, ["color"]))
        ], 64))), 128)) : P("", !0)
      ]),
      _: 3
    }));
  }
}), y0 = /* @__PURE__ */ fe({
  __name: "ImageInput",
  props: {
    modelValue: {
      default: null,
      type: Object
    },
    iconSize: {
      default: "1rem",
      type: String
    },
    src: {
      default: null,
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    },
    width: {
      default: "1rem",
      type: String
    },
    height: {
      default: "1rem",
      type: String
    },
    objectFit: {
      default: "cover",
      type: String
    },
    objectPosition: {
      default: "initial",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((d) => ({
      "2373346e": e.width,
      "31245f7f": e.height,
      "3e2eaf94": e.borderRadius,
      "6fcf53d2": f(o),
      "6ab5e7e0": e.objectPosition,
      "8190b20c": e.objectFit
    }));
    const r = I(null), a = k({
      get() {
        return n.modelValue;
      },
      set(d) {
        t("update:model-value", d);
      }
    }), o = k(() => a.value ? `url("${URL.createObjectURL(a.value)}")` : n.src ? `url("${n.src}")` : ""), i = k(() => ({
      "input-image__wrapper": !0,
      "input-image__wrapper--hidden": !!(a.value || n.src)
    }));
    function u() {
      r.value && r.value.click();
    }
    function p() {
      var v;
      if (!r.value)
        return;
      const d = (v = r.value.files) == null ? void 0 : v[0];
      d && (a.value = d, r.value.value = "");
    }
    return (d, v) => (y(), O("div", {
      class: ie(f(i))
    }, [
      H("input", {
        ref_key: "inputRef",
        ref: r,
        hidden: "",
        type: "file",
        onChange: p
      }, null, 544),
      H("div", {
        class: "input-image__icon",
        onClick: u
      }, [
        be(He, {
          name: "fm-image",
          size: e.iconSize,
          color: "neutro-4"
        }, null, 8, ["size"])
      ])
    ], 2));
  }
});
const v0 = /* @__PURE__ */ ke(y0, [["__scopeId", "data-v-cecbe62b"]]), b0 = (e) => {
  Nl().generateOverlayContainer(), e.component("AbsoluteContainer", c0), e.component("RelativeContainer", p0), e.component("CheckBox", Bl), e.component("ConfirmationDialog", Ju), e.component("CustomButton", pa), e.component("CustomDatePicker", jo), e.component("CustomDialog", Ro), e.component("CustomSelect", qo), e.component("CustomTextField", Go), e.component("DataTable", Gh), e.component("DataTableItem", Qh), e.component("FilterDatePicker", Jh), e.component("FilterSelect", rg), e.component("FlexContainer", yu), e.component("FormDatePicker", sg), e.component("FormSelect", pg), e.component("FormTextField", hg), e.component("GridColumn", Hr), e.component("GridRow", Al), e.component("HeaderTabs", wg), e.component("IconButton", Co), e.component("ImageContainer", $g), e.component("InformationText", Cg), e.component("PageSwitch", Ig), e.component("PanelTitle", Bg), e.component("SearchTextField", Ag), e.component("SuccessDialog", Yg), e.component("SvgIcon", Rt), e.component("TextContainer", Tt), e.component("FormColorPicker", Xg), e.component("ColorPicker", vu), e.component("CustomMenu", t0), e.component("FigmaIcon", He), e.component("ExpansionPanel", a0), e.component("GridContainer", l0), e.component("CustomTooltip", jr), e.component("ExpandableDataTableItem", m0), e.component("ImageInput", v0);
};
export {
  b0 as componentesReutility
};
