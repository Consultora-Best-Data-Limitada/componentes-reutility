var gu = Object.defineProperty;
var bu = (e, t, n) => t in e ? gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cn = (e, t, n) => (bu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as I, defineComponent as fe, useCssVars as xe, unref as f, onMounted as Ke, computed as k, watch as it, openBlock as v, createElementBlock as O, createElementVNode as H, normalizeClass as ie, createVNode as ge, Transition as bt, withCtx as J, createBlock as te, createCommentVNode as P, renderSlot as j, Fragment as ye, useSlots as pt, isRef as Fe, createTextVNode as Ae, toDisplayString as he, reactive as Ct, toRef as tr, onUnmounted as Do, mergeProps as je, createSlots as We, renderList as Te, normalizeProps as Qe, guardReactiveProps as mt, resolveDynamicComponent as Rl, Teleport as _u, withKeys as be, withModifiers as Ee, normalizeStyle as St, nextTick as dt, withDirectives as xt, vShow as pn, onBeforeUpdate as wu, getCurrentScope as ku, onScopeDispose as Su, vModelText as Ml, vModelDynamic as Zo, vModelCheckbox as $u, pushScopeId as Ou, popScopeId as xu } from "vue";
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
      "5f21c29a": e.size,
      "6c3a208c": f(a)
    }));
    const n = Je();
    Ke(() => {
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
    return it(() => t.src, o), it(() => t.size, o), (i, u) => (v(), O("div", {
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
}, Rt = /* @__PURE__ */ ke(Pu, [["__scopeId", "data-v-b7e98673"]]), Cu = { class: "font-awesome-icon__container" }, Du = /* @__PURE__ */ fe({
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
      "660f41a2": e.size,
      "90a78d3e": f(a)
    }));
    const n = Je(), r = k(() => `icon-${t.name}`), a = k(() => n.getRealColor(t.color));
    return (o, i) => (v(), O("div", Cu, [
      H("em", {
        class: ie(f(r))
      }, null, 2)
    ]));
  }
});
const He = /* @__PURE__ */ ke(Du, [["__scopeId", "data-v-f943628b"]]), Ru = {
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
    return (p, d) => (v(), O("div", {
      class: ie(f(a)),
      onClick: u
    }, [
      ge(bt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: J(() => [
          f(r) ? (v(), O("div", Ru, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (v(), te(He, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (v(), te(Rt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["src", "size", "color"])) : P("", !0)
          ])) : P("", !0)
        ]),
        _: 1
      }),
      e.boxIcon && e.boxIcon.startsWith("fm") ? (v(), te(He, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: f(o)
      }, null, 8, ["name", "size", "color"])) : e.boxIcon ? (v(), te(Rt, {
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
      e65cafee: e.width,
      "18d74178": e.height,
      "1f0e3194": e.padding,
      "603e9e37": e.gridRow,
      "7f8b1c63": e.columnGap,
      "055c944e": e.gridColumn,
      a0051950: e.alignItems,
      "05547e34": e.justifyContent,
      "19a6968b": e.gridAutoColumns,
      "03f8bbde": f(r),
      "240b86e0": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), O("div", Mu, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Al = /* @__PURE__ */ ke(Iu, [["__scopeId", "data-v-65fb3aec"]]), Nu = { class: "grid-column__container" }, Bu = /* @__PURE__ */ fe({
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
      "6781f214": e.width,
      "77414b20": e.margin,
      "6eed5699": e.height,
      fedec7e4: e.rowGap,
      "0ed424df": e.padding,
      50049182: e.gridRow,
      "85aa3618": e.overflow,
      "41d70c19": e.boxShadow,
      abf60aa4: e.gridColumn,
      "5cb0b82d": e.alignItems,
      "2b3e63d0": e.borderRadius,
      f697e1fc: e.justifyItems,
      a410c4b4: e.alignContent,
      "3afed98a": e.justifyContent,
      "56443acb": e.gridTemplateRows,
      "4eafba73": f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), O("div", Nu, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Hr = /* @__PURE__ */ ke(Bu, [["__scopeId", "data-v-4058c78a"]]), Au = ["width", "height"], Eu = ["fill"], Yu = /* @__PURE__ */ H("animate", {
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
    return (a, o) => (v(), O("svg", {
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
      "29a0064f": e.width,
      "1edc6c84": e.height,
      bc5995d6: f(i),
      "4d3cd267": e.justifyItems,
      "4df369ca": f(o),
      a833dd40: e.justifyContent,
      "8d5f1d10": f(y),
      "6909c830": f(p),
      "461fbf50": f(u)
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
    })), y = k(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), m = (s) => {
      n.disabled || t("click", s);
    };
    return (s, h) => (v(), O("button", {
      disabled: e.disabled,
      class: ie(f(d)),
      onClick: m
    }, [
      e.preppendIcon && !e.loading ? (v(), O(ye, { key: 0 }, [
        e.preppendIcon && e.preppendIcon.startsWith("fm") ? (v(), te(He, {
          key: 0,
          size: "1rem",
          color: f(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"])) : (v(), te(Rt, {
          key: 1,
          size: "1rem",
          color: f(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : P("", !0),
      H("span", Gu, [
        e.loading ? (v(), te(ju, {
          key: 0,
          fill: f(a)
        }, null, 8, ["fill"])) : j(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (v(), O(ye, { key: 1 }, [
        e.appendIcon && e.appendIcon.startsWith("fm") ? (v(), te(He, {
          key: 0,
          size: "1rem",
          color: f(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"])) : (v(), te(Rt, {
          key: 1,
          size: "1rem",
          color: f(a),
          src: e.appendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : P("", !0)
    ], 10, qu));
  }
});
const pa = /* @__PURE__ */ ke(Qu, [["__scopeId", "data-v-007c780d"]]), Zu = /* @__PURE__ */ fe({
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
    const n = e, r = I(null), a = I(!1), o = I(!1), i = I(!1), u = k(() => ({
      custom__dialog: !0,
      "custom__dialog--closing": o.value,
      "custom__dialog--shaking": i.value,
      "custom__dialog--opening": a.value
    })), p = k({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    });
    it(p, (h) => {
      r.value && (h ? (a.value = !0, r.value.showModal()) : o.value = !0);
    });
    function d() {
      n.persistent ? i.value = !0 : p.value = !1;
    }
    function y(h) {
      h.target === h.currentTarget && d();
    }
    function m() {
      if (i.value)
        i.value = !1;
      else if (o.value) {
        if (o.value = !1, !r.value)
          return;
        r.value.close();
      } else
        a.value && (a.value = !1);
    }
    function s(h) {
      h.key === "Escape" && (h.preventDefault(), d());
    }
    return (h, w) => (v(), O("dialog", {
      ref_key: "dialogRef",
      ref: r,
      class: ie(f(u)),
      onClick: y,
      onKeydown: s,
      onAnimationend: m
    }, [
      j(h.$slots, "default", {}, void 0, !0)
    ], 34));
  }
});
const Ro = /* @__PURE__ */ ke(Zu, [["__scopeId", "data-v-e186ca82"]]), Xu = /* @__PURE__ */ fe({
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
    xe((w) => ({
      "19a94f92": e.padding,
      "2756fecd": f(u),
      "59f3098a": e.fontSize,
      "0162407e": e.textAlign,
      "861bdf56": e.lineHeight,
      a02ba47e: e.fontWeight,
      "2b21df12": e.whiteSpace,
      "02998778": e.borderRadius,
      "117768e3": e.letterSpacing,
      "3a789f36": e.textTransform,
      "9ebf9596": f(p),
      37143686: f(y),
      "0b5c4ef3": f(d),
      "1f388388": f(m)
    }));
    const r = pt(), a = Je();
    Ke(() => {
      s(n.specialText);
    });
    const o = I(null), i = k(() => {
      const w = ["text__container"];
      return n.clickable && w.push("text__container--clickable"), w.push(`text__container--${n.predefinedStyle}`), w;
    }), u = k(() => a.getRealColor(n.color)), p = k(() => a.getRealColor(n.hoverColor)), d = k(() => a.getRealColor(n.activeColor)), y = k(() => a.getRealColor(n.hoverBackground)), m = k(() => a.getRealColor(n.activeBackground)), s = (w) => {
      if (!w || !o.value || r.default)
        return;
      const D = /\*([^*]+)\*/g;
      o.value.innerHTML = w.replace(D, (M) => `<b>${M.slice(1, M.length - 1)}</b>`);
    }, h = (w) => {
      t("click", w);
    };
    return it(() => n.specialText, s), (w, D) => (v(), O("div", {
      ref_key: "container",
      ref: o,
      class: ie(f(i)),
      onClick: h
    }, [
      j(w.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Tt = /* @__PURE__ */ ke(Xu, [["__scopeId", "data-v-ae760012"]]), Ku = /* @__PURE__ */ fe({
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
    return (i, u) => (v(), te(Ro, {
      modelValue: f(r),
      "onUpdate:modelValue": u[0] || (u[0] = (p) => Fe(r) ? r.value = p : null),
      persistent: ""
    }, {
      default: J(() => [
        ge(Hr, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: J(() => [
            ge(Tt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: J(() => [
                Ae(he(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(Tt, {
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
            ge(Al, { "column-gap": "0.75rem" }, {
              default: J(() => [
                ge(pa, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: J(() => [
                    Ae(" Sí ")
                  ]),
                  _: 1
                }),
                ge(pa, {
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
function re(e, t) {
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
  re(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || mn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Dt(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ht(e, t) {
  re(2, arguments);
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
  if (re(2, arguments), !t || yn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, d = de(e), y = r || n ? ht(d, r + n * 12) : d, m = o || a ? Dt(y, o + a * 7) : y, s = u + i * 60, h = p + s * 60, w = h * 1e3, D = new Date(m.getTime() + w);
  return D;
}
function Ju(e, t) {
  re(2, arguments);
  var n = de(e).getTime(), r = ce(t);
  return new Date(n + r);
}
var es = {};
function _t() {
  return es;
}
function Ut(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (p = y.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getDay(), w = (h < m ? 7 : 0) + h - m;
  return s.setDate(s.getDate() - w), s.setHours(0, 0, 0, 0), s;
}
function nr(e) {
  return re(1, arguments), Ut(e, {
    weekStartsOn: 1
  });
}
function ts(e) {
  re(1, arguments);
  var t = de(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = nr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var i = nr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function ns(e) {
  re(1, arguments);
  var t = ts(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = nr(n);
  return r;
}
function rr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Xo(e) {
  re(1, arguments);
  var t = de(e);
  return t.setHours(0, 0, 0, 0), t;
}
var rs = 864e5;
function as(e, t) {
  re(2, arguments);
  var n = Xo(e), r = Xo(t), a = n.getTime() - rr(n), o = r.getTime() - rr(r);
  return Math.round((a - o) / rs);
}
function Yl(e, t) {
  re(2, arguments);
  var n = ce(t);
  return ht(e, n * 12);
}
var Mo = 6e4, Io = 36e5, os = 1e3;
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function Vl(e) {
  return re(1, arguments), e instanceof Date || vn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nn(e) {
  if (re(1, arguments), !Vl(e) && typeof e != "number")
    return !1;
  var t = de(e);
  return !isNaN(Number(t));
}
function Ko(e, t) {
  var n;
  re(1, arguments);
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
function is(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (p = y.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getDay(), w = (h < m ? -7 : 0) + 6 - (h - m);
  return s.setDate(s.getDate() + w), s.setHours(23, 59, 59, 999), s;
}
function Ul(e, t) {
  re(2, arguments);
  var n = ce(t);
  return Ju(e, -n);
}
var ls = 864e5;
function us(e) {
  re(1, arguments);
  var t = de(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / ls) + 1;
}
function qt(e) {
  re(1, arguments);
  var t = 1, n = de(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Fl(e) {
  re(1, arguments);
  var t = de(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = qt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = qt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function ss(e) {
  re(1, arguments);
  var t = Fl(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = qt(n);
  return r;
}
var cs = 6048e5;
function Wl(e) {
  re(1, arguments);
  var t = de(e), n = qt(t).getTime() - ss(t).getTime();
  return Math.round(n / cs) + 1;
}
function Ft(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (p = y.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getUTCDay(), w = (h < m ? 7 : 0) + h - m;
  return s.setUTCDate(s.getUTCDate() - w), s.setUTCHours(0, 0, 0, 0), s;
}
function No(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = de(e), m = y.getUTCFullYear(), s = _t(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(m + 1, 0, h), w.setUTCHours(0, 0, 0, 0);
  var D = Ft(w, t), M = /* @__PURE__ */ new Date(0);
  M.setUTCFullYear(m, 0, h), M.setUTCHours(0, 0, 0, 0);
  var V = Ft(M, t);
  return y.getTime() >= D.getTime() ? m + 1 : y.getTime() >= V.getTime() ? m : m - 1;
}
function fs(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = y.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = No(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(s, 0, m), h.setUTCHours(0, 0, 0, 0);
  var w = Ft(h, t);
  return w;
}
var ds = 6048e5;
function Hl(e, t) {
  re(1, arguments);
  var n = de(e), r = Ft(n, t).getTime() - fs(n, t).getTime();
  return Math.round(r / ds) + 1;
}
function Oe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var ps = {
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
const Pt = ps;
var Lt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ms = {
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
    var a = us(t);
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
const ys = ms;
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
}, vs = function(t, n) {
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
}, hs = {
  p: Ll,
  P: vs
};
const ma = hs;
var gs = ["D", "DD"], bs = ["YY", "YYYY"];
function zl(e) {
  return gs.indexOf(e) !== -1;
}
function jl(e) {
  return bs.indexOf(e) !== -1;
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
var _s = {
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
}, ws = function(t, n, r) {
  var a, o = _s[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const ks = ws;
function Kr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Ss = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, $s = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Os = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xs = {
  date: Kr({
    formats: Ss,
    defaultWidth: "full"
  }),
  time: Kr({
    formats: $s,
    defaultWidth: "full"
  }),
  dateTime: Kr({
    formats: Os,
    defaultWidth: "full"
  })
};
const Ts = xs;
var Ps = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Cs = function(t, n, r, a) {
  return Ps[t];
};
const Ds = Cs;
function Kt(e) {
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
var Rs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ms = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Is = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ns = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Bs = {
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
}, As = {
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
}, Es = function(t, n) {
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
}, Ys = {
  ordinalNumber: Es,
  era: Kt({
    values: Rs,
    defaultWidth: "wide"
  }),
  quarter: Kt({
    values: Ms,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Kt({
    values: Is,
    defaultWidth: "wide"
  }),
  day: Kt({
    values: Ns,
    defaultWidth: "wide"
  }),
  dayPeriod: Kt({
    values: Bs,
    defaultWidth: "wide",
    formattingValues: As,
    defaultFormattingWidth: "wide"
  })
};
const Vs = Ys;
function Jt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(u) ? Fs(u, function(m) {
      return m.test(i);
    }) : Us(u, function(m) {
      return m.test(i);
    }), d;
    d = e.valueCallback ? e.valueCallback(p) : p, d = n.valueCallback ? n.valueCallback(d) : d;
    var y = t.slice(i.length);
    return {
      value: d,
      rest: y
    };
  };
}
function Us(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Fs(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ws(e) {
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
var Hs = /^(\d+)(th|st|nd|rd)?/i, Ls = /\d+/i, zs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, js = {
  any: [/^b/i, /^(a|c)/i]
}, qs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Qs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zs = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Xs = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ks = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Js = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ec = {
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
}, tc = {
  ordinalNumber: Ws({
    matchPattern: Hs,
    parsePattern: Ls,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Jt({
    matchPatterns: zs,
    defaultMatchWidth: "wide",
    parsePatterns: js,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: qs,
    defaultMatchWidth: "wide",
    parsePatterns: Gs,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Jt({
    matchPatterns: Qs,
    defaultMatchWidth: "wide",
    parsePatterns: Zs,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: Xs,
    defaultMatchWidth: "wide",
    parsePatterns: Ks,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: Js,
    defaultMatchWidth: "any",
    parsePatterns: ec,
    defaultParseWidth: "any"
  })
};
const nc = tc;
var rc = {
  code: "en-US",
  formatDistance: ks,
  formatLong: Ts,
  formatRelative: Ds,
  localize: Vs,
  match: nc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ql = rc;
var ac = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ic = /^'([^]*?)'?$/, lc = /''/g, uc = /[a-zA-Z]/;
function rn(e, t, n) {
  var r, a, o, i, u, p, d, y, m, s, h, w, D, M, V, U, E, q;
  re(2, arguments);
  var X = String(t), Y = _t(), Q = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : Y.locale) !== null && r !== void 0 ? r : ql, R = ce((o = (i = (u = (p = n == null ? void 0 : n.firstWeekContainsDate) !== null && p !== void 0 ? p : n == null || (d = n.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : Y.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = Y.locale) === null || m === void 0 || (s = m.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(R >= 1 && R <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = ce((h = (w = (D = (M = n == null ? void 0 : n.weekStartsOn) !== null && M !== void 0 ? M : n == null || (V = n.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && D !== void 0 ? D : Y.weekStartsOn) !== null && w !== void 0 ? w : (E = Y.locale) === null || E === void 0 || (q = E.options) === null || q === void 0 ? void 0 : q.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var B = de(e);
  if (!nn(B))
    throw new RangeError("Invalid time value");
  var T = rr(B), Z = Ul(B, T), ee = {
    firstWeekContainsDate: R,
    weekStartsOn: $,
    locale: Q,
    _originalDate: B
  }, ne = X.match(oc).map(function(z) {
    var C = z[0];
    if (C === "p" || C === "P") {
      var l = ma[C];
      return l(z, Q.formatLong);
    }
    return z;
  }).join("").match(ac).map(function(z) {
    if (z === "''")
      return "'";
    var C = z[0];
    if (C === "'")
      return sc(z);
    var l = ys[C];
    if (l)
      return !(n != null && n.useAdditionalWeekYearTokens) && jl(z) && ar(z, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && zl(z) && ar(z, t, String(e)), l(Z, z, Q.localize, ee);
    if (C.match(uc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`");
    return z;
  }).join("");
  return ne;
}
function sc(e) {
  var t = e.match(ic);
  return t ? t[1].replace(lc, "'") : e;
}
function cc(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function fc(e) {
  re(1, arguments);
  var t = de(e), n = t.getDay();
  return n;
}
function dc(e) {
  re(1, arguments);
  var t = de(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function $t(e) {
  re(1, arguments);
  var t = de(e), n = t.getHours();
  return n;
}
var pc = 6048e5;
function mc(e) {
  re(1, arguments);
  var t = de(e), n = nr(t).getTime() - ns(t).getTime();
  return Math.round(n / pc) + 1;
}
function Ot(e) {
  re(1, arguments);
  var t = de(e), n = t.getMinutes();
  return n;
}
function De(e) {
  re(1, arguments);
  var t = de(e), n = t.getMonth();
  return n;
}
function Gt(e) {
  re(1, arguments);
  var t = de(e), n = t.getSeconds();
  return n;
}
function yc(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = de(e), m = y.getFullYear(), s = _t(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setFullYear(m + 1, 0, h), w.setHours(0, 0, 0, 0);
  var D = Ut(w, t), M = /* @__PURE__ */ new Date(0);
  M.setFullYear(m, 0, h), M.setHours(0, 0, 0, 0);
  var V = Ut(M, t);
  return y.getTime() >= D.getTime() ? m + 1 : y.getTime() >= V.getTime() ? m : m - 1;
}
function vc(e, t) {
  var n, r, a, o, i, u, p, d;
  re(1, arguments);
  var y = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = y.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = yc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(s, 0, m), h.setHours(0, 0, 0, 0);
  var w = Ut(h, t);
  return w;
}
var hc = 6048e5;
function gc(e, t) {
  re(1, arguments);
  var n = de(e), r = Ut(n, t).getTime() - vc(n, t).getTime();
  return Math.round(r / hc) + 1;
}
function Re(e) {
  return re(1, arguments), de(e).getFullYear();
}
function Bo(e, t) {
  re(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() > r.getTime();
}
function Ao(e, t) {
  re(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() < r.getTime();
}
function Gl(e, t) {
  re(2, arguments);
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
  var t = _c();
  return function() {
    var r = or(e), a;
    if (t) {
      var o = or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return bc(this, a);
  };
}
function bc(e, t) {
  return t && (hn(t) === "object" || typeof t == "function") ? t : va(e);
}
function va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _c() {
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
var wc = 10, Xl = /* @__PURE__ */ function() {
  function e() {
    Eo(this, e), ha(this, "subPriority", 0);
  }
  return Yo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), kc = /* @__PURE__ */ function(e) {
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
}(Xl), Sc = /* @__PURE__ */ function(e) {
  Ql(n, e);
  var t = Zl(n);
  function n() {
    var r;
    Eo(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ha(va(r), "priority", wc), ha(va(r), "subPriority", -1), r;
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
}(Xl);
function $c(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Oc(e, t, n) {
  return t && ri(e.prototype, t), n && ri(e, n), e;
}
var Se = /* @__PURE__ */ function() {
  function e() {
    $c(this, e);
  }
  return Oc(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var i = this.parse(n, r, a, o);
      return i ? {
        setter: new kc(i.value, this.validate, this.set, this.priority, this.subPriority),
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
function xc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tc(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function Pc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ga(e, t);
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ga(e, t);
}
function Cc(e) {
  var t = Rc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Dc(this, a);
  };
}
function Dc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : ba(e);
}
function ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rc() {
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
var Mc = /* @__PURE__ */ function(e) {
  Pc(n, e);
  var t = Cc(n);
  function n() {
    var r;
    xc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), oi(ba(r), "priority", 140), oi(ba(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Tc(n, [{
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
}, yt = {
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
function vt(e, t) {
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
    value: r * (a * Io + o * Mo + i * os),
    rest: t.slice(n[0].length)
  };
}
function Kl(e) {
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
function Ic(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ii(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nc(e, t, n) {
  return t && ii(e.prototype, t), n && ii(e, n), e;
}
function Bc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
function Ac(e) {
  var t = Yc();
  return function() {
    var r = ur(e), a;
    if (t) {
      var o = ur(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ec(this, a);
  };
}
function Ec(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yc() {
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
var Vc = /* @__PURE__ */ function(e) {
  Bc(n, e);
  var t = Ac(n);
  function n() {
    var r;
    Ic(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), li(wa(r), "priority", 130), li(wa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Nc(n, [{
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
function Uc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fc(e, t, n) {
  return t && ui(e.prototype, t), n && ui(e, n), e;
}
function Wc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ka(e, t);
}
function Hc(e) {
  var t = zc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Lc(this, a);
  };
}
function Lc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : Sa(e);
}
function Sa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zc() {
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
var jc = /* @__PURE__ */ function(e) {
  Wc(n, e);
  var t = Hc(n);
  function n() {
    var r;
    Uc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), si(Sa(r), "priority", 130), si(Sa(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Fc(n, [{
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
      var y = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(y, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ft(a, u);
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
function qc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gc(e, t, n) {
  return t && ci(e.prototype, t), n && ci(e, n), e;
}
function Qc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $a(e, t);
}
function $a(e, t) {
  return $a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $a(e, t);
}
function Zc(e) {
  var t = Kc();
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
function Kc() {
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
var Jc = /* @__PURE__ */ function(e) {
  Qc(n, e);
  var t = Zc(n);
  function n() {
    var r;
    qc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), fi(Oa(r), "priority", 130), fi(Oa(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Gc(n, [{
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
function ef(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tf(e, t, n) {
  return t && di(e.prototype, t), n && di(e, n), e;
}
function nf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xa(e, t);
}
function xa(e, t) {
  return xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xa(e, t);
}
function rf(e) {
  var t = of();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return af(this, a);
  };
}
function af(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function of() {
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
var lf = /* @__PURE__ */ function(e) {
  nf(n, e);
  var t = rf(n);
  function n() {
    var r;
    ef(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), pi(Ta(r), "priority", 130), pi(Ta(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return tf(n, [{
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
function uf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sf(e, t, n) {
  return t && mi(e.prototype, t), n && mi(e, n), e;
}
function cf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pa(e, t);
}
function ff(e) {
  var t = pf();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return df(this, a);
  };
}
function df(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pf() {
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
var mf = /* @__PURE__ */ function(e) {
  cf(n, e);
  var t = ff(n);
  function n() {
    var r;
    uf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), yi(Ca(r), "priority", 120), yi(Ca(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return sf(n, [{
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
function yf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vf(e, t, n) {
  return t && vi(e.prototype, t), n && vi(e, n), e;
}
function hf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Da(e, t);
}
function gf(e) {
  var t = _f();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return bf(this, a);
  };
}
function bf(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ra(e);
}
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _f() {
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
var wf = /* @__PURE__ */ function(e) {
  hf(n, e);
  var t = gf(n);
  function n() {
    var r;
    yf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), hi(Ra(r), "priority", 120), hi(Ra(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return vf(n, [{
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
function kf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Sf(e, t, n) {
  return t && gi(e.prototype, t), n && gi(e, n), e;
}
function $f(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function Of(e) {
  var t = Tf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return xf(this, a);
  };
}
function xf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tf() {
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
var Pf = /* @__PURE__ */ function(e) {
  $f(n, e);
  var t = Of(n);
  function n() {
    var r;
    kf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), bi(Ia(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), bi(Ia(r), "priority", 110), r;
  }
  return Sf(n, [{
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
function Cf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Df(e, t, n) {
  return t && _i(e.prototype, t), n && _i(e, n), e;
}
function Rf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Na(e, t);
}
function Mf(e) {
  var t = Nf();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return If(this, a);
  };
}
function If(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nf() {
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
var Bf = /* @__PURE__ */ function(e) {
  Rf(n, e);
  var t = Mf(n);
  function n() {
    var r;
    Cf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), wi(Ba(r), "priority", 110), wi(Ba(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Df(n, [{
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
function Af(e, t, n) {
  re(2, arguments);
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
function Ef(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yf(e, t, n) {
  return t && ki(e.prototype, t), n && ki(e, n), e;
}
function Vf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Aa(e, t);
}
function Uf(e) {
  var t = Wf();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ff(this, a);
  };
}
function Ff(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wf() {
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
var Hf = /* @__PURE__ */ function(e) {
  Vf(n, e);
  var t = Uf(n);
  function n() {
    var r;
    Ef(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Si(Ea(r), "priority", 100), Si(Ea(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Yf(n, [{
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
      return Ft(Af(a, i, u), u);
    }
  }]), n;
}(Se);
function Lf(e, t) {
  re(2, arguments);
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
function zf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jf(e, t, n) {
  return t && $i(e.prototype, t), n && $i(e, n), e;
}
function qf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function Gf(e) {
  var t = Zf();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qf(this, a);
  };
}
function Qf(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zf() {
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
  qf(n, e);
  var t = Gf(n);
  function n() {
    var r;
    zf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Oi(Va(r), "priority", 100), Oi(Va(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return jf(n, [{
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
      return qt(Lf(a, i));
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
function Kf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jf(e, t, n) {
  return t && xi(e.prototype, t), n && xi(e, n), e;
}
function ed(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ua(e, t);
}
function td(e) {
  var t = rd();
  return function() {
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return nd(this, a);
  };
}
function nd(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Dn(e);
}
function Dn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rd() {
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
var ad = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], od = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], id = /* @__PURE__ */ function(e) {
  ed(n, e);
  var t = td(n);
  function n() {
    var r;
    Kf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Jr(Dn(r), "priority", 90), Jr(Dn(r), "subPriority", 1), Jr(Dn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Jf(n, [{
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
      return u ? o >= 1 && o <= od[p] : o >= 1 && o <= ad[p];
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
function ld(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ud(e, t, n) {
  return t && Ti(e.prototype, t), n && Ti(e, n), e;
}
function sd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function cd(e) {
  var t = dd();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return fd(this, a);
  };
}
function fd(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Mn(e);
}
function Mn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dd() {
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
var pd = /* @__PURE__ */ function(e) {
  sd(n, e);
  var t = cd(n);
  function n() {
    var r;
    ld(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ea(Mn(r), "priority", 90), ea(Mn(r), "subpriority", 1), ea(Mn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return ud(n, [{
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
  var r, a, o, i, u, p, d, y;
  re(2, arguments);
  var m = _t(), s = ce((r = (a = (o = (i = n == null ? void 0 : n.weekStartsOn) !== null && i !== void 0 ? i : n == null || (u = n.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && a !== void 0 ? a : (d = m.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = de(e), w = ce(t), D = h.getUTCDay(), M = w % 7, V = (M + 7) % 7, U = (V < s ? 7 : 0) + w - D;
  return h.setUTCDate(h.getUTCDate() + U), h;
}
function In(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? In = function(n) {
    return typeof n;
  } : In = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, In(e);
}
function md(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yd(e, t, n) {
  return t && Pi(e.prototype, t), n && Pi(e, n), e;
}
function vd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wa(e, t);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Wa(e, t);
}
function hd(e) {
  var t = bd();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return gd(this, a);
  };
}
function gd(e, t) {
  return t && (In(t) === "object" || typeof t == "function") ? t : Ha(e);
}
function Ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bd() {
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
var _d = /* @__PURE__ */ function(e) {
  vd(n, e);
  var t = hd(n);
  function n() {
    var r;
    md(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ci(Ha(r), "priority", 90), Ci(Ha(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return yd(n, [{
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
function wd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function kd(e, t, n) {
  return t && Di(e.prototype, t), n && Di(e, n), e;
}
function Sd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function $d(e) {
  var t = xd();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Od(this, a);
  };
}
function Od(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xd() {
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
var Td = /* @__PURE__ */ function(e) {
  Sd(n, e);
  var t = $d(n);
  function n() {
    var r;
    wd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ri(za(r), "priority", 90), Ri(za(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return kd(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var p = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + m;
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
function Pd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cd(e, t, n) {
  return t && Mi(e.prototype, t), n && Mi(e, n), e;
}
function Dd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Rd(e) {
  var t = Id();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Md(this, a);
  };
}
function Md(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Id() {
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
var Nd = /* @__PURE__ */ function(e) {
  Dd(n, e);
  var t = Rd(n);
  function n() {
    var r;
    Pd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ii(qa(r), "priority", 90), Ii(qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Cd(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var p = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + m;
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
function Bd(e, t) {
  re(2, arguments);
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
function Ad(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ed(e, t, n) {
  return t && Ni(e.prototype, t), n && Ni(e, n), e;
}
function Yd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function Vd(e) {
  var t = Fd();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ud(this, a);
  };
}
function Ud(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fd() {
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
var Wd = /* @__PURE__ */ function(e) {
  Yd(n, e);
  var t = Vd(n);
  function n() {
    var r;
    Ad(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Bi(Qa(r), "priority", 90), Bi(Qa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Ed(n, [{
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
      return a = Bd(a, i), a.setUTCHours(0, 0, 0, 0), a;
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
function Hd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ld(e, t, n) {
  return t && Ai(e.prototype, t), n && Ai(e, n), e;
}
function zd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function jd(e) {
  var t = Gd();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qd(this, a);
  };
}
function qd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gd() {
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
var Qd = /* @__PURE__ */ function(e) {
  zd(n, e);
  var t = jd(n);
  function n() {
    var r;
    Hd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ei(Xa(r), "priority", 80), Ei(Xa(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Ld(n, [{
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
function Zd(e, t) {
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
function Kd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function Jd(e) {
  var t = tp();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ep(this, a);
  };
}
function ep(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tp() {
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
var np = /* @__PURE__ */ function(e) {
  Kd(n, e);
  var t = Jd(n);
  function n() {
    var r;
    Zd(this, n);
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
function rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ap(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
function op(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function ip(e) {
  var t = up();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return lp(this, a);
  };
}
function lp(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function up() {
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
var sp = /* @__PURE__ */ function(e) {
  op(n, e);
  var t = ip(n);
  function n() {
    var r;
    rp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Fi(to(r), "priority", 80), Fi(to(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return ap(n, [{
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
function cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fp(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), e;
}
function dp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function pp(e) {
  var t = yp();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return mp(this, a);
  };
}
function mp(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yp() {
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
var vp = /* @__PURE__ */ function(e) {
  dp(n, e);
  var t = pp(n);
  function n() {
    var r;
    cp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Hi(ro(r), "priority", 70), Hi(ro(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return fp(n, [{
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
function hp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gp(e, t, n) {
  return t && Li(e.prototype, t), n && Li(e, n), e;
}
function bp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function _p(e) {
  var t = kp();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return wp(this, a);
  };
}
function wp(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kp() {
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
var Sp = /* @__PURE__ */ function(e) {
  bp(n, e);
  var t = _p(n);
  function n() {
    var r;
    hp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), zi(oo(r), "priority", 70), zi(oo(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return gp(n, [{
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
function $p(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Op(e, t, n) {
  return t && ji(e.prototype, t), n && ji(e, n), e;
}
function xp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function Tp(e) {
  var t = Cp();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pp(this, a);
  };
}
function Pp(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cp() {
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
var Dp = /* @__PURE__ */ function(e) {
  xp(n, e);
  var t = Tp(n);
  function n() {
    var r;
    $p(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), qi(lo(r), "priority", 70), qi(lo(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Op(n, [{
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
function Rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mp(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function Ip(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Np(e) {
  var t = Ap();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bp(this, a);
  };
}
function Bp(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ap() {
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
var Ep = /* @__PURE__ */ function(e) {
  Ip(n, e);
  var t = Np(n);
  function n() {
    var r;
    Rp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Qi(so(r), "priority", 70), Qi(so(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Mp(n, [{
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
function Yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vp(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function Up(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Fp(e) {
  var t = Hp();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wp(this, a);
  };
}
function Wp(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hp() {
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
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lp = /* @__PURE__ */ function(e) {
  Up(n, e);
  var t = Fp(n);
  function n() {
    var r;
    Yp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Xi(fo(r), "priority", 60), Xi(fo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Vp(n, [{
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
function zp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jp(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function qp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function Gp(e) {
  var t = Zp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qp(this, a);
  };
}
function Qp(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : mo(e);
}
function mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zp() {
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
  qp(n, e);
  var t = Gp(n);
  function n() {
    var r;
    zp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ji(mo(r), "priority", 50), Ji(mo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return jp(n, [{
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
function Kp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jp(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function em(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function tm(e) {
  var t = rm();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return nm(this, a);
  };
}
function nm(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rm() {
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
var am = /* @__PURE__ */ function(e) {
  em(n, e);
  var t = tm(n);
  function n() {
    var r;
    Kp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), tl(vo(r), "priority", 30), tl(vo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Jp(n, [{
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
function om(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function im(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function lm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function um(e) {
  var t = cm();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return sm(this, a);
  };
}
function sm(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cm() {
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
var fm = /* @__PURE__ */ function(e) {
  lm(n, e);
  var t = um(n);
  function n() {
    var r;
    om(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), rl(go(r), "priority", 10), rl(go(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return im(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return vt(yt.basicOptionalMinutes, a);
        case "XX":
          return vt(yt.basic, a);
        case "XXXX":
          return vt(yt.basicOptionalSeconds, a);
        case "XXXXX":
          return vt(yt.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return vt(yt.extended, a);
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
function dm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pm(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function mm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function ym(e) {
  var t = hm();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return vm(this, a);
  };
}
function vm(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hm() {
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
var gm = /* @__PURE__ */ function(e) {
  mm(n, e);
  var t = ym(n);
  function n() {
    var r;
    dm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ol(_o(r), "priority", 10), ol(_o(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return pm(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return vt(yt.basicOptionalMinutes, a);
        case "xx":
          return vt(yt.basic, a);
        case "xxxx":
          return vt(yt.basicOptionalSeconds, a);
        case "xxxxx":
          return vt(yt.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return vt(yt.extended, a);
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
function bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _m(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function wm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function km(e) {
  var t = $m();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Sm(this, a);
  };
}
function Sm(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $m() {
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
var Om = /* @__PURE__ */ function(e) {
  wm(n, e);
  var t = km(n);
  function n() {
    var r;
    bm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ll(ko(r), "priority", 40), ll(ko(r), "incompatibleTokens", "*"), r;
  }
  return _m(n, [{
    key: "parse",
    value: function(a) {
      return Kl(a);
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
function xm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tm(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Pm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && So(e, t);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, So(e, t);
}
function Cm(e) {
  var t = Rm();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Dm(this, a);
  };
}
function Dm(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : $o(e);
}
function $o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rm() {
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
var Mm = /* @__PURE__ */ function(e) {
  Pm(n, e);
  var t = Cm(n);
  function n() {
    var r;
    xm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), sl($o(r), "priority", 20), sl($o(r), "incompatibleTokens", "*"), r;
  }
  return Tm(n, [{
    key: "parse",
    value: function(a) {
      return Kl(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se), Im = {
  G: new Mc(),
  y: new Vc(),
  Y: new jc(),
  R: new Jc(),
  u: new lf(),
  Q: new mf(),
  q: new wf(),
  M: new Pf(),
  L: new Bf(),
  w: new Hf(),
  I: new Xf(),
  d: new id(),
  D: new pd(),
  E: new _d(),
  e: new Td(),
  c: new Nd(),
  i: new Wd(),
  a: new Qd(),
  b: new np(),
  B: new sp(),
  h: new vp(),
  H: new Sp(),
  K: new Dp(),
  k: new Ep(),
  m: new Lp(),
  s: new Xp(),
  S: new am(),
  X: new fm(),
  x: new gm(),
  t: new Om(),
  T: new Mm()
};
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function cl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Nm(e)) || t && e && typeof e.length == "number") {
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
function Nm(e, t) {
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
var Bm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Am = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Em = /^'([^]*?)'?$/, Ym = /''/g, Vm = /\S/, Um = /[a-zA-Z]/;
function Oo(e, t, n, r) {
  var a, o, i, u, p, d, y, m, s, h, w, D, M, V, U, E, q, X;
  re(3, arguments);
  var Y = String(e), Q = String(t), R = _t(), $ = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : R.locale) !== null && a !== void 0 ? a : ql;
  if (!$.match)
    throw new RangeError("locale must contain match property");
  var B = ce((i = (u = (p = (d = r == null ? void 0 : r.firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (y = r.locale) === null || y === void 0 || (m = y.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && p !== void 0 ? p : R.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = R.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var T = ce((w = (D = (M = (V = r == null ? void 0 : r.weekStartsOn) !== null && V !== void 0 ? V : r == null || (U = r.locale) === null || U === void 0 || (E = U.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && M !== void 0 ? M : R.weekStartsOn) !== null && D !== void 0 ? D : (q = R.locale) === null || q === void 0 || (X = q.options) === null || X === void 0 ? void 0 : X.weekStartsOn) !== null && w !== void 0 ? w : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (Q === "")
    return Y === "" ? de(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: B,
    weekStartsOn: T,
    locale: $
  }, ee = [new Sc()], ne = Q.match(Am).map(function(oe) {
    var pe = oe[0];
    if (pe in ma) {
      var Ie = ma[pe];
      return Ie(oe, $.formatLong);
    }
    return oe;
  }).join("").match(Bm), z = [], C = cl(ne), l;
  try {
    var c = function() {
      var pe = l.value;
      !(r != null && r.useAdditionalWeekYearTokens) && jl(pe) && ar(pe, Q, e), !(r != null && r.useAdditionalDayOfYearTokens) && zl(pe) && ar(pe, Q, e);
      var Ie = pe[0], lt = Im[Ie];
      if (lt) {
        var me = lt.incompatibleTokens;
        if (Array.isArray(me)) {
          var ct = z.find(function(ze) {
            return me.includes(ze.token) || ze.token === Ie;
          });
          if (ct)
            throw new RangeError("The format string mustn't contain `".concat(ct.fullToken, "` and `").concat(pe, "` at the same time"));
        } else if (lt.incompatibleTokens === "*" && z.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(pe, "` and any other token at the same time"));
        z.push({
          token: Ie,
          fullToken: pe
        });
        var at = lt.run(Y, pe, $.match, Z);
        if (!at)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        ee.push(at.setter), Y = at.rest;
      } else {
        if (Ie.match(Um))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ie + "`");
        if (pe === "''" ? pe = "'" : Ie === "'" && (pe = Fm(pe)), Y.indexOf(pe) === 0)
          Y = Y.slice(pe.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (C.s(); !(l = C.n()).done; ) {
      var S = c();
      if (Xn(S) === "object")
        return S.v;
    }
  } catch (oe) {
    C.e(oe);
  } finally {
    C.f();
  }
  if (Y.length > 0 && Vm.test(Y))
    return /* @__PURE__ */ new Date(NaN);
  var b = ee.map(function(oe) {
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
  }), N = de(n);
  if (isNaN(N.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var K = Ul(N, rr(N)), G = {}, x = cl(b), _;
  try {
    for (x.s(); !(_ = x.n()).done; ) {
      var L = _.value;
      if (!L.validate(K, Z))
        return /* @__PURE__ */ new Date(NaN);
      var we = L.set(K, G, Z);
      Array.isArray(we) ? (K = we[0], cc(G, we[1])) : K = we;
    }
  } catch (oe) {
    x.e(oe);
  } finally {
    x.f();
  }
  return K;
}
function Fm(e) {
  return e.match(Em)[1].replace(Ym, "'");
}
function Wm(e, t) {
  re(2, arguments);
  var n = ce(t);
  return Dt(e, -n);
}
function Hm(e, t) {
  var n;
  re(1, arguments);
  var r = ce((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = qm(e), o;
  if (a.date) {
    var i = Gm(a.date, r);
    o = Qm(i.restDateString, i.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), p = 0, d;
  if (a.time && (p = Zm(a.time), isNaN(p)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (d = Xm(a.timezone), isNaN(d))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var y = new Date(u + p), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()), m.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()), m;
  }
  return new Date(u + p + d);
}
var fn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Lm = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, zm = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, jm = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function qm(e) {
  var t = {}, n = e.split(fn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], fn.timeZoneDelimiter.test(t.date) && (t.date = e.split(fn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = fn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function Gm(e, t) {
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
function Qm(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(Lm);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = en(n[1]), o = en(n[2]) - 1, i = en(n[3]), u = en(n[4]), p = en(n[5]) - 1;
  if (r)
    return ny(t, u, p) ? Km(t, u, p) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !ey(t, o, i) || !ty(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, o, Math.max(a, i)), d);
}
function en(e) {
  return e ? parseInt(e) : 1;
}
function Zm(e) {
  var t = e.match(zm);
  if (!t)
    return NaN;
  var n = ta(t[1]), r = ta(t[2]), a = ta(t[3]);
  return ry(n, r, a) ? n * Io + r * Mo + a * 1e3 : NaN;
}
function ta(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Xm(e) {
  if (e === "Z")
    return 0;
  var t = e.match(jm);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return ay(r, a) ? n * (r * Io + a * Mo) : NaN;
}
function Km(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Jm = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function tu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ey(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Jm[t] || (tu(e) ? 29 : 28));
}
function ty(e, t) {
  return t >= 1 && t <= (tu(e) ? 366 : 365);
}
function ny(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function ry(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function ay(e, t) {
  return t >= 0 && t <= 59;
}
function an(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t), a = n.getFullYear(), o = n.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(a, r, 15), i.setHours(0, 0, 0, 0);
  var u = dc(i);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function Ze(e, t) {
  if (re(2, arguments), Kn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = de(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = an(n, t.month)), t.date != null && n.setDate(ce(t.date)), t.hours != null && n.setHours(ce(t.hours)), t.minutes != null && n.setMinutes(ce(t.minutes)), t.seconds != null && n.setSeconds(ce(t.seconds)), t.milliseconds != null && n.setMilliseconds(ce(t.milliseconds)), n);
}
function nu(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setHours(r), n;
}
function Fo(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMilliseconds(r), n;
}
function ru(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMinutes(r), n;
}
function au(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setSeconds(r), n;
}
function Vt(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function jt(e, t) {
  re(2, arguments);
  var n = ce(t);
  return ht(e, -n);
}
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function oy(e, t) {
  if (re(2, arguments), !t || Jn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, d = jt(e, r + n * 12), y = Wm(d, o + a * 7), m = u + i * 60, s = p + m * 60, h = s * 1e3, w = new Date(y.getTime() - h);
  return w;
}
function iy(e, t) {
  re(2, arguments);
  var n = ce(t);
  return Yl(e, -n);
}
function Lr() {
  return v(), O(
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
function ly() {
  return v(), O(
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
  return v(), O(
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
  return v(), O(
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
  return v(), O(
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
  return v(), O(
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
  return v(), O(
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
}, uy = (e, t, n, r) => {
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
}, W = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), sy = (e, t) => {
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
}, gt = (e) => {
  let t = W(JSON.parse(JSON.stringify(e)));
  return t = nu(t, 0), t = ru(t, 0), t = au(t, 0), t = Fo(t, 0), t;
}, ft = (e, t, n, r) => {
  let a = e ? W(e) : W();
  return (t || t === 0) && (a = nu(a, +t)), (n || n === 0) && (a = ru(a, +n)), (r || r === 0) && (a = au(a, +r)), Fo(a, 0);
}, Xe = (e, t) => !e || !t ? !1 : Ao(gt(e), gt(t)), Me = (e, t) => !e || !t ? !1 : Gl(gt(e), gt(t)), rt = (e, t) => !e || !t ? !1 : Bo(gt(e), gt(t)), uu = (e, t, n) => e && e[0] && e[1] ? rt(n, e[0]) && Xe(n, e[1]) : e && e[0] && t ? rt(n, e[0]) && Xe(n, t) || Xe(n, e[0]) && rt(n, t) : !1, tn = Ct({
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
var Yr = {}, cy = {
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
})(cy, Yr);
const fy = /* @__PURE__ */ Wo(Yr);
var Vr = {}, dy = {
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
})(dy, Vr);
const yl = /* @__PURE__ */ Wo(Vr);
function py(e, t) {
  var n = hy(t);
  return n.formatToParts ? yy(n, e) : vy(n, e);
}
var my = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function yy(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = my[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function vy(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var na = {};
function hy(e) {
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
var vl = 36e5, gy = 6e4, ra = {
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
    return hl(o, i) ? (a = Math.abs(o) * vl + i * gy, o > 0 ? -a : a) : NaN;
  }
  if (wy(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : by(t), p = xo(u, e), d = n ? p : _y(t, p, e);
    return -d;
  }
  return NaN;
}
function by(e) {
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
  var n = py(e, t), r = Ho(
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
function _y(e, t, n) {
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
function wy(e) {
  if (gl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), gl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var ky = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const cu = ky;
var aa = 36e5, bl = 6e4, Sy = 2, nt = {
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
  var n = t || {}, r = n.additionalDigits == null ? Sy : fy(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = $y(e), o = Oy(a.date, r), i = o.year, u = o.restDateString, p = xy(u, i);
  if (isNaN(p))
    return /* @__PURE__ */ new Date(NaN);
  if (p) {
    var d = p.getTime(), y = 0, m;
    if (a.time && (y = Ty(a.time), isNaN(y)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (m = Lo(a.timeZone || n.timeZone, new Date(d + y)), isNaN(m))
        return /* @__PURE__ */ new Date(NaN);
    } else
      m = yl(new Date(d + y)), m = yl(new Date(d + y + m));
    return new Date(d + y + m);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function $y(e) {
  var t = {}, n = nt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = nt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = nt.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function Oy(e, t) {
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
function xy(e, t) {
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
    return Dy(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
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
function Ty(e) {
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
var Py = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Cy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    if (r && n > Cy[t] || !r && n > Py[t])
      return !1;
  }
  return !0;
}
function Dy(e, t) {
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
var Ur = {}, Ry = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Fr = {}, My = {
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
})(My, Fr);
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
})(Ry, Ur);
const Iy = /* @__PURE__ */ Wo(Ur);
function Ny(e, t, n) {
  var r = To(e, n), a = Lo(t, r, !0), o = new Date(r.getTime() - a), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function By(e, t, n) {
  if (typeof e == "string" && !e.match(cu)) {
    var r = Iy(n);
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
const Ay = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, Ey = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Yy = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Vy = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Uy = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Le = (e) => {
  const t = f(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Fy = (e) => Object.assign({ type: "dot" }, e), du = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Wr = {
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
), Wy = (e) => Object.assign(
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
), Hy = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Ly = (e, t, n) => e || (typeof n == "string" ? n : t), zy = (e) => typeof e == "boolean" ? e ? $l({}) : !1 : $l(e), jy = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), qy = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), st = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Wr.prop("partial-range"));
  }, n = k(() => ({
    ariaLabels: Wy(e.ariaLabels),
    textInputOptions: Object.assign(jy(), e.textInputOptions),
    multiCalendars: Hy(e.multiCalendars),
    previewFormat: Ly(e.previewFormat, e.format, o()),
    filters: qy(e.filters),
    transitions: zy(e.transitions),
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
    const S = c || o(), b = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${rn(l[0], S, b)} ${e.modelAuto && !l[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? rn(l[1], S, b) : ""}` : rn(l, S, b);
  }, u = (l) => e.timezone ? Ny(l, e.timezone) : l, p = (l) => e.timezone ? By(l, e.timezone) : l, d = k(() => (l) => {
    var c;
    return (c = e.hideNavigation) == null ? void 0 : c.includes(l);
  }), y = (l) => {
    const c = e.maxDate ? rt(u(l), u(W(e.maxDate))) : !1, S = e.minDate ? Xe(u(l), u(W(e.minDate))) : !1, b = V(l, e.disabledDates), N = n.value.filters.months.map((L) => +L).includes(De(l)), K = e.disabledWeekDays.length ? e.disabledWeekDays.some((L) => +L === fc(l)) : !1, G = e.allowedDates.length ? !e.allowedDates.some((L) => Me(u(W(L)), u(l))) : !1, x = Re(l), _ = x < +e.yearRange[0] || x > +e.yearRange[1];
    return !(c || S || b || N || _ || K || G);
  }, m = (l) => {
    const c = {
      hours: $t(W()),
      minutes: Ot(W()),
      seconds: e.enableSeconds ? Gt(W()) : 0
    };
    return Object.assign(c, l);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [m(e.startTime[0]), m(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? m(e.startTime) : null, h = (l) => !y(l), w = (l) => Array.isArray(l) ? nn(l[0]) && (l[1] ? nn(l[1]) : !0) : l ? nn(l) : !1, D = (l) => l instanceof Date ? l : Hm(l), M = (l) => {
    const c = Ut(u(l), { weekStartsOn: +e.weekStart }), S = is(u(l), { weekStartsOn: +e.weekStart });
    return [c, S];
  }, V = (l, c) => Array.isArray(c) ? c.some((S) => Me(u(W(S)), u(l))) : c(l), U = (l, c, S) => {
    let b = l ? W(l) : W();
    return (c || c === 0) && (b = an(b, c)), S && (b = Vt(b, S)), b;
  }, E = (l) => Ze(W(), { hours: $t(l), minutes: Ot(l), seconds: Gt(l) }), q = (l) => Ze(W(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), X = (l, c, S, b) => {
    if (!l)
      return !0;
    if (b) {
      const N = S === "max" ? Ao(l, c) : Bo(l, c), K = { seconds: 0, milliseconds: 0 };
      return N || Gl(Ze(l, K), Ze(c, K));
    }
    return S === "max" ? l.getTime() <= c.getTime() : l.getTime() >= c.getTime();
  }, Y = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, Q = (l) => Array.isArray(l) ? [l[0] ? E(l[0]) : null, l[1] ? E(l[1]) : null] : E(l), R = (l) => {
    const c = e.maxTime ? q(e.maxTime) : W(e.maxDate);
    return Array.isArray(l) ? X(l[0], c, "max", !!e.maxDate) && X(l[1], c, "max", !!e.maxDate) : X(l, c, "max", !!e.maxDate);
  }, $ = (l, c) => {
    const S = e.minTime ? q(e.minTime) : W(e.minDate);
    return Array.isArray(l) ? X(l[0], S, "min", !!e.minDate) && X(l[1], S, "min", !!e.minDate) && c : X(l, S, "min", !!e.minDate) && c;
  }, B = (l) => {
    let c = !0;
    if (!l || Y())
      return !0;
    const S = !e.minDate && !e.maxDate ? Q(l) : l;
    return (e.maxTime || e.maxDate) && (c = R(Ge(S))), (e.minTime || e.minDate) && (c = $(Ge(S), c)), c;
  }, T = (l, c) => {
    const S = W(JSON.parse(JSON.stringify(l))), b = [];
    for (let N = 0; N < 7; N++) {
      const K = Dt(S, N), G = De(K) !== c;
      b.push({
        text: e.hideOffsetDates && G ? "" : K.getDate(),
        value: K,
        current: !G,
        classData: {}
      });
    }
    return b;
  }, Z = (l, c) => {
    const S = [], b = W(u(new Date(c, l))), N = W(u(new Date(c, l + 1, 0))), K = Ut(b, { weekStartsOn: e.weekStart }), G = (x) => {
      const _ = T(x, l);
      if (S.push({ days: _ }), !S[S.length - 1].days.some(
        (L) => Me(gt(L.value), gt(N))
      )) {
        const L = Dt(x, 7);
        G(L);
      }
    };
    if (G(K), e.sixWeeks && S.length < 6) {
      const x = 6 - S.length;
      for (let _ = 1; _ <= x; _++) {
        const L = S[S.length - 1], we = L.days[L.days.length - 1], oe = T(Dt(we.value, 1), De(b));
        S.push({ days: oe });
      }
    }
    return S;
  }, ee = (l, c, S) => [Ze(W(l), { date: 1 }), Ze(W(), { month: c, year: S, date: 1 })], ne = (l, c) => Xe(...ee(e.minDate, l, c)) || Me(...ee(e.minDate, l, c)), z = (l, c) => rt(...ee(e.maxDate, l, c)) || Me(...ee(e.maxDate, l, c)), C = (l, c, S) => {
    let b = !1;
    return e.maxDate && S && z(l, c) && (b = !0), e.minDate && !S && ne(l, c) && (b = !0), b;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: p,
    formatDate: i,
    getDefaultPattern: o,
    validateDate: y,
    getDefaultStartTime: s,
    isDisabled: h,
    isValidDate: w,
    sanitizeDate: D,
    getWeekFromDate: M,
    matchDate: V,
    setDateMonthOrYear: U,
    isValidTime: B,
    getCalendarDays: Z,
    validateMonthYearInRange: (l, c, S, b) => {
      let N = !1;
      return b ? e.minDate && e.maxDate ? N = C(l, c, S) : (e.minDate && ne(l, c) || e.maxDate && z(l, c)) && (N = !0) : N = !0, N;
    },
    validateMaxDate: z,
    validateMinDate: ne,
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
  }, y = () => {
    tt.value = 0, qe.value = 0;
  };
  return {
    buildMatrix: p,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (m) => {
      ia.value = m;
    },
    setSelectionGrid: (m) => {
      dn.value = m, y(), m || (Ce.selectionGrid = []);
    },
    setTimePicker: (m, s = !1) => {
      la.value = m, sa.value = s, y(), m || (Ce.timePicker[0] = [], Ce.timePicker[1] = []);
    },
    setTimePickerElements: (m, s = 0) => {
      Ce.timePicker[s] = m;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: i,
    arrowDown: u,
    clearArrowNav: () => {
      Ce.monthYear = [], Ce.calendar = [], Ce.time = [], Ce.actionRow = [], Ce.selectionGrid = [], Ce.timePicker[0] = [], Ce.timePicker[1] = [], dn.value = !1, la.value = !1, sa.value = !1, ua.value = !1, y(), ia.value = null;
    },
    setMonthPicker: (m) => {
      ua.value = m, y();
    },
    refSets: Ce
    // exposed for testing
  };
}, Ol = (e) => Array.isArray(e), At = (e) => Array.isArray(e), xl = (e) => Array.isArray(e) && e.length === 2, Gy = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: i,
    sanitizeDate: u,
    getWeekFromDate: p,
    setDateMonthOrYear: d,
    validateMonthYearInRange: y,
    defaults: m
  } = st(e), s = k({
    get: () => e.internalModelValue,
    set: (g) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", g);
    }
  }), h = I([]);
  it(s, () => {
    X();
  });
  const w = I([{ month: De(W()), year: Re(W()) }]), D = Ct({
    hours: e.range ? [$t(W()), $t(W())] : $t(W()),
    minutes: e.range ? [Ot(W()), Ot(W())] : Ot(W()),
    seconds: e.range ? [0, 0] : 0
  }), M = k(
    () => (g) => w.value[g] ? w.value[g].month : 0
  ), V = k(
    () => (g) => w.value[g] ? w.value[g].year : 0
  ), U = k(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), E = (g, F, le) => {
    var se, Ne;
    w.value[g] || (w.value[g] = { month: 0, year: 0 }), w.value[g].month = F === null ? (se = w.value[g]) == null ? void 0 : se.month : F, w.value[g].year = le === null ? (Ne = w.value[g]) == null ? void 0 : Ne.year : le;
  }, q = (g, F) => {
    D[g] = F;
  };
  Ke(() => {
    s.value || (e.startDate && (E(0, De(W(e.startDate)), Re(W(e.startDate))), m.value.multiCalendars && Pe(0)), m.value.startTime && z()), X(!0);
  });
  const X = (g = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (h.value = s.value, B(g)) : Q(s.value);
    if (e.timePicker)
      return T();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return ee();
    if (m.value.multiCalendars && g && !e.startDate)
      return Y(W(), g);
  }, Y = (g, F = !1) => {
    if ((!m.value.multiCalendars || !e.multiStatic || F) && E(0, De(g), Re(g)), m.value.multiCalendars)
      for (let le = 1; le < m.value.multiCalendars; le++) {
        const se = Ze(W(), { month: M.value(le - 1), year: V.value(le - 1) }), Ne = El(se, { months: 1 });
        w.value[le] = { month: De(Ne), year: Re(Ne) };
      }
  }, Q = (g) => {
    Y(g), q("hours", $t(g)), q("minutes", Ot(g)), q("seconds", Gt(g));
  }, R = (g, F) => {
    Y(g[0], F);
    const le = (se, Ne) => [
      se(g[0]),
      g[1] ? se(g[1]) : D[Ne][1]
    ];
    q("hours", le($t, "hours")), q("minutes", le(Ot, "minutes")), q("seconds", le(Gt, "seconds"));
  }, $ = (g, F) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return R(g, F);
    if (e.multiDates) {
      const le = g[g.length - 1];
      return Q(le);
    }
  }, B = (g) => {
    const F = s.value;
    $(F, g), m.value.multiCalendars && e.multiCalendarsSolo && l();
  }, T = () => {
    if (z(), !e.range)
      s.value = ft(W(), D.hours, D.minutes, ne());
    else {
      const g = D.hours, F = D.minutes;
      s.value = [
        ft(W(), g[0], F[0], ne()),
        ft(W(), g[1], F[1], ne(!1))
      ];
    }
  }, Z = () => {
    s.value = d(W(), M.value(0), V.value(0));
  }, ee = () => {
    s.value = W();
  }, ne = (g = !0) => e.enableSeconds ? Array.isArray(D.seconds) ? g ? D.seconds[0] : D.seconds[1] : D.seconds : 0, z = () => {
    const g = o();
    if (g) {
      const F = Array.isArray(g), le = F ? [+g[0].hours, +g[1].hours] : +g.hours, se = F ? [+g[0].minutes, +g[1].minutes] : +g.minutes, Ne = F ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      q("hours", le), q("minutes", se), e.enableSeconds && q("seconds", Ne);
    }
  }, C = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, l = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const g = W(
        W(s.value[1] ? s.value[1] : ht(s.value[0], 1))
      ), [F, le] = [De(s.value[0]), Re(s.value[0])], [se, Ne] = [De(s.value[1]), Re(s.value[1])];
      (F !== se || F === se && le !== Ne) && e.multiCalendarsSolo && E(1, De(g), Re(g));
    }
  }, c = (g) => {
    const F = ht(g, 1);
    return { month: De(F), year: Re(F) };
  }, S = (g) => {
    const F = De(W(g)), le = Re(W(g));
    if (E(0, F, le), m.value.multiCalendars > 0)
      for (let se = 1; se < m.value.multiCalendars; se++) {
        const Ne = c(
          Ze(W(g), { year: M.value(se - 1), month: V.value(se - 1) })
        );
        E(se, Ne.month, Ne.year);
      }
  }, b = (g) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((F) => Me(g, F))) {
        const F = s.value.filter((le) => !Me(le, g));
        s.value = F.length ? F : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(g);
    else
      s.value = [g];
  }, N = (g, F) => {
    const le = rt(g, F) ? F : g, se = rt(F, g) ? F : g;
    return Ko({ start: le, end: se });
  }, K = (g, F = 0) => {
    if (Array.isArray(s.value) && s.value[F]) {
      const le = as(g, s.value[F]), se = N(s.value[F], g), Ne = se.length === 1 ? 0 : se.filter((wt) => i(wt)).length, ut = Math.abs(le) - Ne;
      if (e.minRange && e.maxRange)
        return ut >= +e.minRange && ut <= +e.maxRange;
      if (e.minRange)
        return ut >= +e.minRange;
      if (e.maxRange)
        return ut <= +e.maxRange;
    }
    return !0;
  }, G = (g) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (rt(g, s.value[0]) || Me(g, s.value[0])) ? [s.value[0], g] : e.fixedEnd && (Xe(g, s.value[1]) || Me(g, s.value[1])) ? [g, s.value[1]] : (t("invalid-fixed-range", g), s.value) : [], x = () => {
    e.autoApply && U.value && t("auto-apply", e.partialFlow);
  }, _ = () => {
    e.autoApply && t("select-date");
  }, L = (g) => !Ko({ start: g[0], end: g[1] }).some((F) => i(F)), we = (g) => (s.value = p(W(g.value)), x()), oe = (g) => {
    const F = ft(W(g.value), D.hours, D.minutes, ne());
    e.multiDates ? b(F) : s.value = F, n(), x();
  }, pe = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Ie = (g, F) => {
    const le = [W(g.value), Dt(W(g.value), +e.autoRange)];
    L(le) && (F && S(g.value), h.value = le);
  }, lt = (g) => {
    me(g.value) || !K(g.value, e.fixedStart ? 0 : 1) || (h.value = G(W(g.value)));
  }, me = (g) => e.noDisabledRange ? N(h.value[0], g).some((F) => i(F)) : !1, ct = (g, F) => {
    if (pe(), e.autoRange)
      return Ie(g, F);
    if (e.fixedStart || e.fixedEnd)
      return lt(g);
    h.value[0] ? K(W(g.value)) && !me(g.value) && (Xe(W(g.value), W(h.value[0])) ? h.value.unshift(W(g.value)) : h.value[1] = W(g.value)) : h.value[0] = W(g.value);
  }, at = (g) => {
    h.value[g] = ft(
      h.value[g],
      D.hours[g],
      D.minutes[g],
      ne(g !== 1)
    );
  }, ze = () => {
    h.value.length && (h.value[0] && !h.value[1] ? at(0) : (at(0), at(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Qt = (g, F = !1) => {
    if (!(i(g.value) || !g.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return we(g);
      if (!e.range)
        return oe(g);
      At(D.hours) && At(D.minutes) && !e.multiDates && (ct(g, F), ze());
    }
  }, ve = (g) => {
    const F = g[0];
    return e.weekNumbers === "local" ? gc(F.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? mc(F.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(F.value) : "";
  }, Pe = (g) => {
    for (let F = g - 1; F >= 0; F--) {
      const le = jt(Ze(W(), { month: M.value(F + 1), year: V.value(F + 1) }), 1);
      E(F, De(le), Re(le));
    }
    for (let F = g + 1; F <= m.value.multiCalendars - 1; F++) {
      const le = ht(Ze(W(), { month: M.value(F - 1), year: V.value(F - 1) }), 1);
      E(F, De(le), Re(le));
    }
  }, $e = (g) => d(W(), M.value(g), V.value(g)), Nt = (g) => ft(g, D.hours, D.minutes, ne()), Bt = (g, F) => {
    const le = e.monthPicker ? M.value(g) !== F.month || !F.fromNav : V.value(g) !== F.year;
    if (E(g, F.month, F.year), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(g), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? Xe($e(g), se[0]) ? se.unshift($e(g)) : se[1] = $e(g) : se = [$e(g)], s.value = se;
        }
      } else
        s.value = $e(g);
    t("update-month-year", { instance: g, month: F.month, year: F.year }), r(e.multiCalendarsSolo ? g : void 0);
  }, qr = async (g = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await dt();
      const F = e.monthPicker ? g : !1;
      e.range ? t("auto-apply", F || !s.value || s.value.length === 1) : t("auto-apply", F);
    }
    n();
  }, un = (g, F) => {
    const le = Ze(W(), { month: M.value(F), year: V.value(F) }), se = g < 0 ? ht(le, 1) : jt(le, 1);
    y(De(se), Re(se), g < 0, e.preventMinMaxNavigation) && (E(F, De(se), Re(se)), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(F), t("update-month-year", { instance: F, month: De(se), year: Re(se) }), r());
  }, Zt = (g) => {
    Ol(g) && Ol(s.value) && At(D.hours) && At(D.minutes) ? (g[0] && s.value[0] && (s.value[0] = ft(g[0], D.hours[0], D.minutes[0], ne())), g[1] && s.value[1] && (s.value[1] = ft(g[1], D.hours[1], D.minutes[1], ne(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(g) : !e.range && !xl(g) && (s.value = Nt(g)), t("time-update");
  }, Gr = (g, F = !0, le = !1) => {
    const se = F ? g : D.hours, Ne = !F && !le ? g : D.minutes, ut = le ? g : D.seconds;
    if (e.range && xl(s.value) && At(se) && At(Ne) && At(ut) && !e.disableTimeRangeValidation) {
      const wt = (A) => ft(s.value[A], se[A], Ne[A], ut[A]), Xt = (A) => Fo(s.value[A], 0);
      if (Me(s.value[0], s.value[1]) && (Bo(wt(0), Xt(1)) || Ao(wt(1), Xt(0))))
        return;
    }
    if (q("hours", se), q("minutes", Ne), q("seconds", ut), s.value)
      if (e.multiDates) {
        const wt = C();
        wt && Zt(wt);
      } else
        Zt(s.value);
    else
      e.timePicker && Zt(e.range ? [W(), W()] : W());
    n();
  }, Qr = (g, F) => {
    e.monthChangeOnScroll && un(e.monthChangeOnScroll !== "inverse" ? -g.deltaY : g.deltaY, F);
  }, Zr = (g, F, le = !1) => {
    e.monthChangeOnArrows && e.vertical === le && sn(g, F);
  }, sn = (g, F) => {
    un(g === "right" ? -1 : 1, F);
  };
  return {
    time: D,
    month: M,
    year: V,
    modelValue: s,
    calendars: w,
    monthYearSelect: qr,
    isDisabled: i,
    updateTime: Gr,
    getWeekNum: ve,
    selectDate: Qt,
    updateMonthYear: Bt,
    handleScroll: Qr,
    getMarker: (g) => e.markers.find((F) => Me(u(g.value), u(F.date))),
    handleArrow: Zr,
    handleSwipe: sn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = Xe(W(), s.value[0]) ? [W(), s.value[0]] : [s.value[0], W()] : s.value = [W()] : s.value = W(), _();
    },
    presetDateRange: (g, F) => {
      F || g.length && g.length <= 2 && e.range && (s.value = g.map((le) => W(le)), _(), e.multiCalendars && dt().then(() => X(!0)));
    }
  };
}, Qy = (e, t, n) => {
  const r = I(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: i,
    getDefaultPattern: u,
    checkRangeEnabled: p,
    checkPartialRangeValue: d,
    isValidDate: y,
    setDateMonthOrYear: m,
    defaults: s
  } = st(t), h = I(""), w = tr(t, "format");
  it(r, () => {
    e("internal-model-change", r.value);
  }), it(w, () => {
    c();
  });
  const D = (x) => {
    const _ = x || W();
    return t.modelType ? b(_) : {
      hours: $t(_),
      minutes: Ot(_),
      seconds: t.enableSeconds ? Gt(_) : 0
    };
  }, M = (x) => t.modelType ? b(x) : { month: De(x), year: Re(x) }, V = (x) => Array.isArray(x) ? p(() => [
    Vt(W(), x[0]),
    x[1] ? Vt(W(), x[1]) : d()
  ]) : Vt(W(), +x), U = (x, _) => (typeof x == "string" || typeof x == "number") && t.modelType ? S(x) : _, E = (x) => Array.isArray(x) ? [
    U(
      x[0],
      ft(null, +x[0].hours, +x[0].minutes, x[0].seconds)
    ),
    U(
      x[1],
      ft(null, +x[1].hours, +x[1].minutes, x[1].seconds)
    )
  ] : U(x, ft(null, x.hours, x.minutes, x.seconds)), q = (x) => Array.isArray(x) ? p(() => [
    U(x[0], m(null, +x[0].month, +x[0].year)),
    U(
      x[1],
      x[1] ? m(null, +x[1].month, +x[1].year) : d()
    )
  ]) : U(x, m(null, +x.month, +x.year)), X = (x) => {
    if (Array.isArray(x))
      return x.map((_) => S(_));
    throw new Error(Wr.dateArr("multi-dates"));
  }, Y = (x) => {
    if (Array.isArray(x))
      return [W(x[0]), W(x[1])];
    throw new Error(Wr.dateArr("week-picker"));
  }, Q = (x) => t.modelAuto ? Array.isArray(x) ? [S(x[0]), S(x[1])] : t.autoApply ? [S(x)] : [S(x), null] : Array.isArray(x) ? p(() => [
    S(x[0]),
    x[1] ? S(x[1]) : d()
  ]) : S(x), R = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(d());
  }, $ = () => {
    const x = r.value;
    return [
      b(x[0]),
      x[1] ? b(x[1]) : d()
    ];
  }, B = () => r.value[1] ? $() : b(Ge(r.value[0])), T = () => (r.value || []).map((x) => b(x)), Z = () => (R(), t.modelAuto ? B() : t.multiDates ? T() : Array.isArray(r.value) ? p(() => $()) : b(Ge(r.value))), ee = (x) => x ? t.timePicker ? E(Ge(x)) : t.monthPicker ? q(Ge(x)) : t.yearPicker ? V(Ge(x)) : t.multiDates ? X(Ge(x)) : t.weekPicker ? Y(Ge(x)) : Q(Ge(x)) : null, ne = (x) => {
    const _ = ee(x);
    y(Ge(_)) ? (r.value = Ge(_), c()) : (r.value = null, h.value = "");
  }, z = () => {
    var x;
    const _ = (L) => {
      var we;
      return rn(L, (we = s.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${_(r.value[0])} ${(x = s.value.textInputOptions) == null ? void 0 : x.rangeSeparator} ${r.value[1] ? _(r.value[1]) : ""}`;
  }, C = () => {
    var x;
    return n.value && r.value ? Array.isArray(r.value) ? z() : rn(r.value, (x = s.value.textInputOptions) == null ? void 0 : x.format) : i(r.value);
  }, l = () => {
    var x;
    return r.value ? t.multiDates ? r.value.map((_) => i(_)).join("; ") : t.textInput && typeof ((x = s.value.textInputOptions) == null ? void 0 : x.format) == "string" ? C() : i(r.value) : "";
  }, c = () => {
    !t.format || typeof t.format == "string" ? h.value = l() : h.value = t.format(r.value);
  }, S = (x) => {
    if (t.utc) {
      const _ = new Date(x);
      return t.utc === "preserve" ? new Date(_.getTime() + _.getTimezoneOffset() * 6e4) : _;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(x)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Oo(x, u(), /* @__PURE__ */ new Date()) : o(Oo(x, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(x));
  }, b = (x) => x ? t.utc ? sy(x, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(x) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(a(x)) : i(a(x), t.modelType) : a(x) : "", N = (x) => {
    e("update:model-value", x);
  }, K = (x) => Array.isArray(r.value) ? [
    x(r.value[0]),
    r.value[1] ? x(r.value[1]) : d()
  ] : x(Ge(r.value)), G = (x) => N(Ge(K(x)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ne,
    formatInputValue: c,
    emitModelValue: () => (c(), t.monthPicker ? G(M) : t.timePicker ? G(D) : t.yearPicker ? G(Re) : t.weekPicker ? N(r.value) : N(Z()))
  };
}, Zy = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = st(e), i = (m, s) => {
    let h = m;
    return o.value.filters.months.includes(De(h)) ? (h = s ? ht(m, 1) : jt(m, 1), i(h, s)) : h;
  }, u = (m, s) => {
    let h = m;
    return o.value.filters.years.includes(Re(h)) ? (h = s ? Yl(m, 1) : iy(m, 1), u(h, s)) : h;
  }, p = (m) => {
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let h = m ? ht(s, 1) : jt(s, 1), w = De(h), D = Re(h);
    o.value.filters.months.includes(w) && (h = i(h, m), w = De(h), D = Re(h)), o.value.filters.years.includes(D) && (h = u(h, m), D = Re(h)), n(w, D, m, e.preventMinMaxNavigation) && d(w, D);
  }, d = (m, s) => {
    t("update-month-year", { month: m, year: s });
  }, y = k(() => (m) => {
    if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate)
      return !1;
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), h = m ? ht(s, 1) : jt(s, 1), w = [De(h), Re(h)];
    return m ? !r(...w) : !a(...w);
  });
  return { handleMonthYearChange: p, isDisabled: y, updateMonthYear: d };
};
var er = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(er || {});
const Xy = (e, t, n, r) => {
  const a = I({
    top: "0",
    left: "0",
    transform: "none"
  }), o = I(!1), i = tr(r, "teleportCenter");
  it(i, () => {
    D();
  });
  const u = (R) => {
    if (r.teleport) {
      const $ = R.getBoundingClientRect();
      return {
        left: $.left + window.scrollX,
        top: $.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, p = (R, $) => {
    a.value.left = `${R + $}px`, a.value.transform = "translateX(-100%)";
  }, d = (R) => {
    a.value.left = `${R}px`, a.value.transform = "translateX(0)";
  }, y = (R, $, B = !1) => {
    r.position === er.left && d(R), r.position === er.right && p(R, $), r.position === er.center && (a.value.left = `${R + $ / 2}px`, a.value.transform = B ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, m = (R) => {
    const { width: $, height: B } = R.getBoundingClientRect(), { top: T, left: Z } = r.altPosition ? r.altPosition(R) : u(R);
    return { top: +T, left: +Z, width: $, height: B };
  }, s = () => {
    const R = Le(t);
    if (R) {
      const { top: $, left: B, width: T, height: Z } = m(R);
      a.value.top = `${$ + Z / 2}px`, a.value.transform = "translateY(-50%)", y(B, T, !0);
    }
  }, h = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, w = () => {
    const R = Le(t), { top: $, left: B, transform: T } = r.altPosition(R);
    a.value = { top: `${$}px`, left: `${B}px`, transform: T || "" };
  }, D = (R = !0) => {
    if (!r.inline)
      return i.value ? h() : r.altPosition !== null ? w() : (R && n("recalculate-position"), X());
  }, M = ({
    inputEl: R,
    menuEl: $,
    left: B,
    width: T
  }) => {
    window.screen.width > 768 && y(B, T), E(R, $);
  }, V = (R, $) => {
    const { top: B, left: T, height: Z, width: ee } = m(R);
    a.value.top = `${Z + B + +r.offset}px`, M({ inputEl: R, menuEl: $, left: T, width: ee }), o.value = !1;
  }, U = (R, $) => {
    const { top: B, left: T, width: Z } = m(R), { height: ee } = $.getBoundingClientRect();
    a.value.top = `${B - ee - +r.offset}px`, M({ inputEl: R, menuEl: $, left: T, width: Z }), o.value = !0;
  }, E = (R, $) => {
    if (r.autoPosition) {
      const { left: B, width: T } = m(R), { left: Z, right: ee } = $.getBoundingClientRect();
      return Z <= 0 || Z <= B ? d(B) : ee >= document.documentElement.clientWidth ? p(B, T) : y(B, T);
    }
  }, q = (R, $) => {
    const { height: B } = $.getBoundingClientRect(), { top: T, height: Z } = R.getBoundingClientRect(), ee = window.innerHeight - T - Z, ne = T;
    return B <= ee ? V(R, $) : B > ee && B <= ne ? U(R, $) : ee >= ne ? V(R, $) : U(R, $);
  }, X = () => {
    const R = Le(t), $ = Le(e);
    if (R && $)
      return r.autoPosition ? q(R, $) : V(R, $);
  }, Y = function(R) {
    if (R) {
      const $ = R.scrollHeight > R.clientHeight, B = window.getComputedStyle(R).overflowY.indexOf("hidden") !== -1;
      return $ && !B;
    }
    return !0;
  }, Q = function(R) {
    return !R || R === document.body ? window : Y(R) ? R : Q(R.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: D, setInitialPosition: s, getScrollableParent: Q };
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
], Ky = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Jy = {
  all: () => zt,
  monthYear: () => zt.filter((e) => e.use.includes("month-year")),
  input: () => Ky,
  timePicker: () => zt.filter((e) => e.use.includes("time")),
  action: () => zt.filter((e) => e.use.includes("action")),
  calendar: () => zt.filter((e) => e.use.includes("calendar")),
  menu: () => zt.filter((e) => e.use.includes("menu"))
}, Yt = (e, t, n) => {
  const r = [];
  return Jy[t]().forEach((a) => {
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
}, ev = ["aria-label", "aria-disabled", "aria-readonly"], tv = {
  key: 1,
  class: "dp__input_wrap"
}, nv = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], rv = {
  key: 2,
  class: "dp__input_icon"
}, av = {
  key: 4,
  class: "dp__clear_icon"
}, ov = /* @__PURE__ */ fe({
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: i, getDefaultStartTime: u, assignDefaultTime: p } = st(r), d = I(), y = I(null), m = I(!1), s = k(
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
    ), h = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), d.value = null);
    }, w = ($) => {
      var B;
      const T = u();
      return uy(
        $,
        ((B = i.value.textInputOptions) == null ? void 0 : B.format) || a(),
        T || p({}),
        r.inputValue
      );
    }, D = ($) => {
      const { rangeSeparator: B } = i.value.textInputOptions, [T, Z] = $.split(`${B}`);
      if (T) {
        const ee = w(T.trim()), ne = Z ? w(Z.trim()) : null, z = ee && ne ? [ee, ne] : [ee];
        d.value = ee ? z : null;
      }
    }, M = ($) => {
      if (r.range)
        D($);
      else if (r.multiDates) {
        const B = $.split(";");
        d.value = B.map((T) => w(T.trim())).filter((T) => T);
      } else
        d.value = w($);
    }, V = ($) => {
      var B;
      const { value: T } = $.target;
      T !== "" ? ((B = i.value.textInputOptions) != null && B.openMenu && !r.isMenuOpen && n("open"), M(T), n("set-input-date", d.value)) : h(), n("update:input-value", T);
    }, U = () => {
      var $, B;
      ($ = i.value.textInputOptions) != null && $.enterSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (B = i.value.textInputOptions) != null && B.enterSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, E = () => {
      var $, B;
      ($ = i.value.textInputOptions) != null && $.tabSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (B = i.value.textInputOptions) != null && B.tabSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, q = () => {
      m.value = !0, n("focus");
    }, X = ($) => {
      var B;
      $.preventDefault(), $.stopImmediatePropagation(), $.stopPropagation(), r.textInput && (B = i.value.textInputOptions) != null && B.openMenu && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, Y = () => {
      m.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && d.value && (n("set-input-date", d.value), n("select-date"), d.value = null);
    }, Q = () => {
      n("clear");
    }, R = ($) => {
      r.textInput || $.preventDefault();
    };
    return t({
      focusInput: () => {
        y.value && y.value.focus({ preventScroll: !0 });
      },
      setParsedDate: ($) => {
        d.value = $;
      }
    }), ($, B) => {
      var T;
      return v(), O("div", {
        onClick: X,
        "aria-label": (T = f(i).ariaLabels) == null ? void 0 : T.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": $.disabled,
        "aria-readonly": $.readonly
      }, [
        $.$slots.trigger && !$.$slots["dp-input"] && !$.inline ? j($.$slots, "trigger", { key: 0 }) : P("", !0),
        !$.$slots.trigger && (!$.inline || $.inlineWithInput) ? (v(), O("div", tv, [
          $.$slots["dp-input"] && !$.$slots.trigger && !$.inline ? j($.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: V,
            onEnter: U,
            onTab: E,
            onClear: Q
          }) : P("", !0),
          $.$slots["dp-input"] ? P("", !0) : (v(), O("input", {
            key: 1,
            ref_key: "inputRef",
            ref: y,
            id: $.uid ? `dp-input-${$.uid}` : void 0,
            name: $.name,
            class: ie(f(s)),
            inputmode: $.textInput ? "text" : "none",
            placeholder: $.placeholder,
            disabled: $.disabled,
            readonly: $.readonly,
            required: $.required,
            value: e.inputValue,
            autocomplete: $.autocomplete,
            onInput: V,
            onKeydown: [
              be(X, ["enter"]),
              be(E, ["tab"]),
              R
            ],
            onBlur: Y,
            onFocus: q,
            onKeypress: R
          }, null, 42, nv)),
          $.$slots["input-icon"] && !$.hideInputIcon ? (v(), O("span", rv, [
            j($.$slots, "input-icon")
          ])) : P("", !0),
          !$.$slots["input-icon"] && !$.hideInputIcon && !$.$slots["dp-input"] ? (v(), te(f(Lr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : P("", !0),
          $.$slots["clear-icon"] && e.inputValue && $.clearable && !$.disabled && !$.readonly ? (v(), O("span", av, [
            j($.$slots, "clear-icon", { clear: Q })
          ])) : P("", !0),
          $.clearable && !$.$slots["clear-icon"] && e.inputValue && !$.disabled && !$.readonly ? (v(), te(f(ly), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ee(Q, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : P("", !0)
        ])) : P("", !0)
      ], 8, ev);
    };
  }
}), iv = { class: "dp__selection_preview" }, lv = { class: "dp__action_buttons" }, uv = ["onKeydown"], sv = /* @__PURE__ */ fe({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = st(n), { buildMatrix: i } = Mt(), u = I(null), p = I(null);
    Ke(() => {
      n.arrowNavigation && i([Le(u), Le(p)], "actionRow");
    });
    const d = k(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), y = k(() => !s.value || !h.value || !d.value), m = k(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: y.value
    })), s = k(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = k(() => n.monthPicker ? V(n.internalModelValue) : !0), w = () => {
      const E = o.value.previewFormat;
      return n.timePicker || n.monthPicker, E(Ge(n.internalModelValue));
    }, D = () => {
      const E = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(E[0])} - ${r(E[1])}` : [r(E[0]), r(E[1])];
    }, M = k(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? D() : n.multiDates ? n.internalModelValue.map((E) => `${r(E)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : w()), V = (E) => {
      if (!n.monthPicker)
        return !0;
      let q = !0;
      return n.minDate && n.maxDate ? rt(W(E), W(n.minDate)) && Xe(W(E), W(n.maxDate)) : (n.minDate && (q = rt(W(E), W(n.minDate))), n.maxDate && (q = Xe(W(E), W(n.maxDate))), q);
    }, U = () => {
      s.value && h.value && d.value ? t("select-date") : t("invalid-select");
    };
    return (E, q) => (v(), O("div", {
      class: "dp__action_row",
      style: St(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      E.$slots["action-row"] ? j(E.$slots, "action-row", Qe(je({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: f(y),
        selectDate: () => E.$emit("select-date"),
        closePicker: () => E.$emit("close-picker")
      }))) : (v(), O(ye, { key: 1 }, [
        H("div", iv, [
          E.$slots["action-preview"] ? j(E.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : P("", !0),
          E.$slots["action-preview"] ? P("", !0) : (v(), O(ye, { key: 1 }, [
            Array.isArray(f(M)) ? P("", !0) : (v(), O(ye, { key: 0 }, [
              Ae(he(f(M)), 1)
            ], 64)),
            Array.isArray(f(M)) ? (v(!0), O(ye, { key: 1 }, Te(f(M), (X, Y) => (v(), O("div", { key: Y }, he(X), 1))), 128)) : P("", !0)
          ], 64))
        ]),
        H("div", lv, [
          E.$slots["action-select"] ? j(E.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : P("", !0),
          E.$slots["action-select"] ? P("", !0) : (v(), O(ye, { key: 1 }, [
            E.inline ? P("", !0) : (v(), O("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: q[0] || (q[0] = (X) => E.$emit("close-picker")),
              onKeydown: [
                q[1] || (q[1] = be((X) => E.$emit("close-picker"), ["enter"])),
                q[2] || (q[2] = be((X) => E.$emit("close-picker"), ["space"]))
              ]
            }, he(E.cancelText), 545)),
            H("span", {
              class: ie(f(m)),
              tabindex: "0",
              onKeydown: [
                be(U, ["enter"]),
                be(U, ["space"])
              ],
              onClick: U,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: p
            }, he(E.selectText), 43, uv)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), cv = ["aria-label"], fv = {
  class: "dp__calendar_header",
  role: "row"
}, dv = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, pv = /* @__PURE__ */ H("div", { class: "dp__calendar_header_separator" }, null, -1), mv = ["aria-label"], yv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, vv = { class: "dp__cell_inner" }, hv = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], gv = /* @__PURE__ */ fe({
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: i } = st(r), u = I(null), p = I({
      bottom: "",
      left: "",
      transform: ""
    }), d = I([]), y = I(null), m = I(!0), s = I(""), h = I({ startX: 0, endX: 0, startY: 0, endY: 0 }), w = I([]), D = I({ left: "50%" }), M = k(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Ey(r.locale, +r.weekStart));
    Ke(() => {
      n("mount", { cmp: "calendar", refs: d }), r.noSwipe || y.value && (y.value.addEventListener("touchstart", T, { passive: !1 }), y.value.addEventListener("touchend", Z, { passive: !1 }), y.value.addEventListener("touchmove", ee, { passive: !1 })), r.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", C, { passive: !1 });
    });
    const V = (l) => l ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", U = (l, c) => {
      if (r.transitions) {
        const S = gt(o(W(), r.month, r.year));
        s.value = rt(gt(o(W(), l, c)), S) ? i.value.transitions[V(!0)] : i.value.transitions[V(!1)], m.value = !1, dt(() => {
          m.value = !0;
        });
      }
    }, E = k(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), q = k(() => (l) => {
      const c = Fy(l);
      return {
        dp__marker_dot: c.type === "dot",
        dp__marker_line: c.type === "line"
      };
    }), X = k(() => (l) => Me(l, u.value)), Y = k(() => ({
      dp__calendar: !0,
      dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
    })), Q = k(() => (l) => r.hideOffsetDates ? l.current : !0), R = k(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), $ = async (l, c, S) => {
      var b, N;
      if (n("set-hover-date", l), (N = (b = l.marker) == null ? void 0 : b.tooltip) != null && N.length) {
        const K = Le(d.value[c][S]);
        if (K) {
          const { width: G, height: x } = K.getBoundingClientRect();
          u.value = l.value;
          let _ = { left: `${G / 2}px` }, L = -50;
          if (await dt(), w.value[0]) {
            const { left: we, width: oe } = w.value[0].getBoundingClientRect();
            we < 0 && (_ = { left: "0" }, L = 0, D.value.left = `${G / 2}px`), window.innerWidth < we + oe && (_ = { right: "0" }, L = 0, D.value.left = `${oe - G / 2}px`);
          }
          p.value = {
            bottom: `${x}px`,
            ..._,
            transform: `translateX(${L}%)`
          }, n("tooltip-open", l.marker);
        }
      }
    }, B = (l) => {
      u.value && (u.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", l.marker));
    }, T = (l) => {
      h.value.startX = l.changedTouches[0].screenX, h.value.startY = l.changedTouches[0].screenY;
    }, Z = (l) => {
      h.value.endX = l.changedTouches[0].screenX, h.value.endY = l.changedTouches[0].screenY, ne();
    }, ee = (l) => {
      r.vertical && !r.inline && l.preventDefault();
    }, ne = () => {
      const l = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${l}`] - h.value[`end${l}`]) > 10 && n("handle-swipe", h.value[`start${l}`] > h.value[`end${l}`] ? "right" : "left");
    }, z = (l, c, S) => {
      l && (Array.isArray(d.value[c]) ? d.value[c][S] = l : d.value[c] = [l]), r.arrowNavigation && a(d.value, "calendar");
    }, C = (l) => {
      r.monthChangeOnScroll && (l.preventDefault(), n("handle-scroll", l));
    };
    return t({ triggerTransition: U }), (l, c) => {
      var S;
      return v(), O("div", {
        class: ie(f(Y))
      }, [
        H("div", {
          style: St(f(R))
        }, [
          e.specificMode ? P("", !0) : (v(), O("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: y,
            class: ie(f(E)),
            role: "grid",
            "aria-label": (S = f(i).ariaLabels) == null ? void 0 : S.calendarWrap
          }, [
            H("div", fv, [
              l.weekNumbers ? (v(), O("div", dv, he(l.weekNumName), 1)) : P("", !0),
              (v(!0), O(ye, null, Te(f(M), (b, N) => (v(), O("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: N,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? j(l.$slots, "calendar-header", {
                  key: 0,
                  day: b,
                  index: N
                }) : P("", !0),
                l.$slots["calendar-header"] ? P("", !0) : (v(), O(ye, { key: 1 }, [
                  Ae(he(b), 1)
                ], 64))
              ]))), 128))
            ]),
            pv,
            ge(bt, {
              name: s.value,
              css: !!l.transitions
            }, {
              default: J(() => {
                var b;
                return [
                  m.value ? (v(), O("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (b = f(i).ariaLabels) == null ? void 0 : b.calendarDays
                  }, [
                    (v(!0), O(ye, null, Te(e.mappedDates, (N, K) => (v(), O("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: K
                    }, [
                      l.weekNumbers ? (v(), O("div", yv, [
                        H("div", vv, he(e.getWeekNum(N.days)), 1)
                      ])) : P("", !0),
                      (v(!0), O(ye, null, Te(N.days, (G, x) => {
                        var _, L, we;
                        return v(), O("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (oe) => z(oe, K, x),
                          key: x + K,
                          "aria-selected": G.classData.dp__active_date || G.classData.dp__range_start || G.classData.dp__range_start,
                          "aria-disabled": G.classData.dp__cell_disabled,
                          "aria-label": (L = (_ = f(i).ariaLabels) == null ? void 0 : _.day) == null ? void 0 : L.call(_, G),
                          tabindex: "0",
                          "data-test": G.value,
                          onClick: Ee((oe) => l.$emit("select-date", G), ["stop", "prevent"]),
                          onKeydown: [
                            be((oe) => l.$emit("select-date", G), ["enter"]),
                            be((oe) => l.$emit("handle-space", G), ["space"])
                          ],
                          onMouseenter: (oe) => $(G, K, x),
                          onMouseleave: (oe) => B(G)
                        }, [
                          H("div", {
                            class: ie(["dp__cell_inner", G.classData])
                          }, [
                            l.$slots.day && f(Q)(G) ? j(l.$slots, "day", {
                              key: 0,
                              day: +G.text,
                              date: G.value
                            }) : P("", !0),
                            l.$slots.day ? P("", !0) : (v(), O(ye, { key: 1 }, [
                              Ae(he(G.text), 1)
                            ], 64)),
                            G.marker && f(Q)(G) ? (v(), O("div", {
                              key: 2,
                              class: ie(f(q)(G.marker)),
                              style: St(G.marker.color ? { backgroundColor: G.marker.color } : {})
                            }, null, 6)) : P("", !0),
                            f(X)(G.value) ? (v(), O("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: w,
                              style: St(p.value)
                            }, [
                              (we = G.marker) != null && we.tooltip ? (v(), O("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: c[0] || (c[0] = Ee(() => {
                                }, ["stop"]))
                              }, [
                                (v(!0), O(ye, null, Te(G.marker.tooltip, (oe, pe) => (v(), O("div", {
                                  key: pe,
                                  class: "dp__tooltip_text"
                                }, [
                                  l.$slots["marker-tooltip"] ? j(l.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: oe,
                                    day: G.value
                                  }) : P("", !0),
                                  l.$slots["marker-tooltip"] ? P("", !0) : (v(), O(ye, { key: 1 }, [
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
                        ], 40, hv);
                      }), 128))
                    ]))), 128))
                  ], 8, mv)) : P("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, cv))
        ], 4)
      ], 2);
    };
  }
}), bv = ["aria-label", "aria-disabled"], ca = /* @__PURE__ */ fe({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = I(null);
    return Ke(() => t("set-ref", n)), (r, a) => (v(), O("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = be((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = be((o) => r.$emit("activate"), ["space"]))
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
        j(r.$slots, "default")
      ], 2)
    ], 40, bv));
  }
}), _v = ["onKeydown"], wv = { class: "dp__selection_grid_header" }, kv = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Sv = ["aria-label", "onKeydown"], on = /* @__PURE__ */ fe({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: i } = Mt(), { hideNavigationButtons: u } = st(r), p = I(!1), d = I(null), y = I(null), m = I([]), s = I(), h = I(null), w = I(0), D = I(null);
    wu(() => {
      d.value = null;
    }), Ke(() => {
      dt().then(() => $()), V(), M(!0);
    }), Do(() => M(!1));
    const M = (C) => {
      var l;
      r.arrowNavigation && ((l = r.headerRefs) != null && l.length ? i(C) : a(C));
    }, V = () => {
      const C = Le(y);
      C && (r.textInput || C.focus({ preventScroll: !0 }), p.value = C.clientHeight < C.scrollHeight);
    }, U = k(
      () => ({
        dp__overlay: !0
      })
    ), E = k(() => ({
      dp__overlay_col: !0
    })), q = (C) => r.skipActive ? !1 : C.value === r.modelValue, X = k(() => r.items.map((C) => C.filter((l) => l).map((l) => {
      var c, S, b;
      const N = r.disabledValues.some((G) => G === l.value) || R(l.value), K = (c = r.multiModelValue) != null && c.length ? (S = r.multiModelValue) == null ? void 0 : S.some(
        (G) => Me(
          G,
          Vt(
            r.monthPicker ? an(/* @__PURE__ */ new Date(), l.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : l.value
          )
        )
      ) : q(l);
      return {
        ...l,
        className: {
          dp__overlay_cell_active: K,
          dp__overlay_cell: !K,
          dp__overlay_cell_disabled: N,
          dp__overlay_cell_active_disabled: N && K,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (b = r.multiModelValue) != null && b.length ? T(l.value) : !1
        }
      };
    }))), Y = k(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: r.autoApply
      })
    ), Q = k(() => {
      var C, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((C = r.items) == null ? void 0 : C.length) <= 6,
        dp__container_block: ((l = r.items) == null ? void 0 : l.length) > 6
      };
    }), R = (C) => {
      const l = r.maxValue || r.maxValue === 0, c = r.minValue || r.minValue === 0;
      return !l && !c ? !1 : l && c ? +C > +r.maxValue || +C < +r.minValue : l ? +C > +r.maxValue : c ? +C < +r.minValue : !1;
    }, $ = () => {
      const C = Le(d), l = Le(y), c = Le(h), S = Le(D), b = c ? c.getBoundingClientRect().height : 0;
      l && (w.value = l.getBoundingClientRect().height - b), C && S && (S.scrollTop = C.offsetTop - S.offsetTop - (w.value / 2 - C.getBoundingClientRect().height) - b);
    }, B = (C) => {
      !r.disabledValues.some((l) => l === C) && !R(C) && (n("update:model-value", C), n("selected"));
    }, T = (C) => {
      const l = r.monthPicker ? r.year : C;
      return uu(
        r.multiModelValue,
        Vt(
          r.monthPicker ? an(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? l : s.value || l
        ),
        Vt(r.monthPicker ? an(/* @__PURE__ */ new Date(), C) : /* @__PURE__ */ new Date(), l)
      );
    }, Z = () => {
      n("toggle"), n("reset-flow");
    }, ee = () => {
      r.escClose && Z();
    }, ne = (C, l, c, S) => {
      C && (l.value === +r.modelValue && !r.disabledValues.includes(l.value) && (d.value = C), r.arrowNavigation && (Array.isArray(m.value[c]) ? m.value[c][S] = C : m.value[c] = [C], z()));
    }, z = () => {
      var C, l;
      const c = (C = r.headerRefs) != null && C.length ? [r.headerRefs].concat(m.value) : m.value.concat([r.skipButtonRef ? [] : [h.value]]);
      o(Ge(c), (l = r.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: V }), (C, l) => {
      var c;
      return v(), O("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: ie(f(U)),
        role: "dialog",
        tabindex: "0",
        onKeydown: be(ee, ["esc"])
      }, [
        H("div", {
          class: ie(f(Q)),
          ref_key: "containerRef",
          ref: D,
          role: "grid",
          style: St({ height: `${w.value}px` })
        }, [
          H("div", wv, [
            j(C.$slots, "header")
          ]),
          C.$slots.overlay ? j(C.$slots, "overlay", { key: 0 }) : (v(!0), O(ye, { key: 1 }, Te(f(X), (S, b) => (v(), O("div", {
            class: "dp__overlay_row",
            key: b,
            role: "row"
          }, [
            (v(!0), O(ye, null, Te(S, (N, K) => (v(), O("div", {
              role: "gridcell",
              class: ie(f(E)),
              key: N.value,
              "aria-selected": N.value === e.modelValue && !e.disabledValues.includes(N.value),
              "aria-disabled": N.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (G) => ne(G, N, b, K),
              tabindex: "0",
              "data-test": N.text,
              onClick: (G) => B(N.value),
              onKeydown: [
                be((G) => B(N.value), ["enter"]),
                be((G) => B(N.value), ["space"])
              ],
              onMouseover: (G) => s.value = N.value
            }, [
              H("div", {
                class: ie(N.className)
              }, [
                C.$slots.item ? j(C.$slots, "item", {
                  key: 0,
                  item: N
                }) : P("", !0),
                C.$slots.item ? P("", !0) : (v(), O(ye, { key: 1 }, [
                  Ae(he(N.text), 1)
                ], 64))
              ], 2)
            ], 42, kv))), 128))
          ]))), 128))
        ], 6),
        C.$slots["button-icon"] ? xt((v(), O("div", {
          key: 0,
          role: "button",
          "aria-label": (c = e.ariaLabels) == null ? void 0 : c.toggleOverlay,
          class: ie(f(Y)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h,
          onClick: Z,
          onKeydown: be(Z, ["enter"])
        }, [
          j(C.$slots, "button-icon")
        ], 42, Sv)), [
          [pn, !f(u)(e.type)]
        ]) : P("", !0)
      ], 42, _v);
    };
  }
}), $v = ["aria-label"], Tl = /* @__PURE__ */ fe({
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
    return Ke(() => t("set-ref", o)), (i, u) => (v(), O(ye, null, [
      H("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (p) => i.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = be((p) => i.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = be((p) => i.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        j(i.$slots, "default")
      ], 40, $v),
      ge(bt, {
        name: f(r)(e.showSelectionGrid),
        css: f(a)
      }, {
        default: J(() => [
          e.showSelectionGrid ? (v(), te(on, je({ key: 0 }, {
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
              i.$slots["calendar-icon"] ? j(i.$slots, "calendar-icon", { key: 0 }) : P("", !0),
              i.$slots["calendar-icon"] ? P("", !0) : (v(), te(f(Lr), { key: 1 }))
            ]),
            _: 2
          }, [
            i.$slots[e.slotName] ? {
              name: "item",
              fn: J(({ item: p }) => [
                j(i.$slots, e.slotName, { item: p })
              ]),
              key: "0"
            } : void 0,
            i.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: J(() => [
                j(i.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            i.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: J(() => [
                j(i.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : P("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Ov = { class: "dp__month_year_row" }, xv = { class: "dp__month_year_wrap" }, Tv = { class: "dp__month_picker_header" }, Pv = ["aria-label"], Cv = ["aria-label"], Dv = ["aria-label"], Rv = /* @__PURE__ */ fe({
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
    const r = e, { defaults: a } = st(r), { transitionName: o, showTransition: i } = zr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: p, isDisabled: d, updateMonthYear: y } = Zy(r, n), m = I(!1), s = I(!1), h = I([null, null, null, null]), w = I(null), D = I(null), M = I(null);
    Ke(() => {
      n("mount");
    });
    const V = (_) => ({
      get: () => r[_],
      set: (L) => {
        const we = _ === "month" ? "year" : "month";
        n("update-month-year", { [_]: L, [we]: r[we] }), n("month-year-select", _ === "year"), _ === "month" ? b(!0) : N(!0);
      }
    }), U = k(V("month")), E = k(V("year")), q = (_) => {
      const L = Re(W(_));
      return r.year === L;
    }, X = k(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((_) => W(_)).filter((_) => q(_)).map((_) => De(_)) : [] : []), Y = k(() => (_) => {
      const L = _ === "month";
      return {
        showSelectionGrid: (L ? m : s).value,
        items: (L ? C : l).value,
        disabledValues: a.value.filters[L ? "months" : "years"].concat(X.value),
        minValue: (L ? B : R).value,
        maxValue: (L ? T : $).value,
        headerRefs: L && r.monthPicker ? [w.value, D.value, M.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), Q = k(() => (_) => ({
      month: r.month,
      year: r.year,
      items: _ === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: y,
      toggle: _ === "month" ? b : N
    })), R = k(() => r.minDate ? Re(W(r.minDate)) : null), $ = k(() => r.maxDate ? Re(W(r.maxDate)) : null), B = k(() => {
      if (r.minDate && R.value) {
        if (R.value > r.year)
          return 12;
        if (R.value === r.year)
          return De(W(r.minDate));
      }
      return null;
    }), T = k(() => r.maxDate && $.value ? $.value < r.year ? -1 : $.value === r.year ? De(W(r.maxDate)) : null : null), Z = k(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), ee = (_) => _.reverse(), ne = (_, L = !1) => {
      const we = [], oe = (pe) => L ? ee(pe) : pe;
      for (let pe = 0; pe < _.length; pe += 3) {
        const Ie = [_[pe], _[pe + 1], _[pe + 2]];
        we.push(oe(Ie));
      }
      return L ? we.reverse() : we;
    }, z = k(() => r.months.find((L) => L.value === r.month) || { text: "", value: 0 }), C = k(() => ne(r.months)), l = k(() => ne(r.years, r.reverseYears)), c = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), S = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), b = (_ = !1) => {
      K(_), m.value = !m.value, m.value || n("overlay-closed");
    }, N = (_ = !1) => {
      K(_), s.value = !s.value, s.value || n("overlay-closed");
    }, K = (_) => {
      _ || n("reset-flow");
    }, G = (_ = !1) => {
      d.value(_) || n("update-month-year", {
        year: _ ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, x = (_, L) => {
      r.arrowNavigation && (h.value[L] = Le(_), u(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: b,
      toggleYearPicker: N,
      handleMonthYearChange: p
    }), (_, L) => {
      var we, oe, pe, Ie, lt;
      return v(), O("div", Ov, [
        _.$slots["month-year"] ? j(_.$slots, "month-year", Qe(je({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: f(y), handleMonthYearChange: f(p), instance: e.instance }))) : (v(), O(ye, { key: 1 }, [
          !_.monthPicker && !_.yearPicker ? (v(), O(ye, { key: 0 }, [
            f(c) && !_.vertical ? (v(), te(ca, {
              key: 0,
              "aria-label": (we = f(a).ariaLabels) == null ? void 0 : we.prevMonth,
              disabled: f(d)(!1),
              onActivate: L[0] || (L[0] = (me) => f(p)(!1)),
              onSetRef: L[1] || (L[1] = (me) => x(me, 0))
            }, {
              default: J(() => [
                _.$slots["arrow-left"] ? j(_.$slots, "arrow-left", { key: 0 }) : P("", !0),
                _.$slots["arrow-left"] ? P("", !0) : (v(), te(f(dl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            H("div", xv, [
              ge(Tl, je({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (oe = f(a).ariaLabels) == null ? void 0 : oe.openMonthsOverlay,
                modelValue: f(U),
                "onUpdate:modelValue": L[2] || (L[2] = (me) => Fe(U) ? U.value = me : null)
              }, f(Y)("month"), {
                onToggle: b,
                onSetRef: L[3] || (L[3] = (me) => x(me, 1))
              }), We({
                default: J(() => [
                  _.$slots.month ? j(_.$slots, "month", Qe(je({ key: 0 }, f(z)))) : P("", !0),
                  _.$slots.month ? P("", !0) : (v(), O(ye, { key: 1 }, [
                    Ae(he(f(z).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                _.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: J(() => [
                    j(_.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                _.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: J(({ item: me }) => [
                    j(_.$slots, "month-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                _.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: J(() => [
                    j(_.$slots, "month-overlay", Qe(mt(f(Q)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                _.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: J(() => [
                    j(_.$slots, "month-overlay-header", { toggle: b })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              ge(Tl, je({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (pe = f(a).ariaLabels) == null ? void 0 : pe.openYearsOverlay,
                modelValue: f(E),
                "onUpdate:modelValue": L[4] || (L[4] = (me) => Fe(E) ? E.value = me : null)
              }, f(Y)("year"), {
                onToggle: N,
                onSetRef: L[5] || (L[5] = (me) => x(me, 2))
              }), We({
                default: J(() => [
                  _.$slots.year ? j(_.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : P("", !0),
                  _.$slots.year ? P("", !0) : (v(), O(ye, { key: 1 }, [
                    Ae(he(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                _.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: J(() => [
                    j(_.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                _.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: J(({ item: me }) => [
                    j(_.$slots, "year-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                _.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: J(() => [
                    j(_.$slots, "year-overlay", Qe(mt(f(Q)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                _.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: J(() => [
                    j(_.$slots, "year-overlay-header", { toggle: N })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            f(c) && _.vertical ? (v(), te(ca, {
              key: 1,
              "aria-label": (Ie = f(a).ariaLabels) == null ? void 0 : Ie.prevMonth,
              disabled: f(d)(!1),
              onActivate: L[6] || (L[6] = (me) => f(p)(!1))
            }, {
              default: J(() => [
                _.$slots["arrow-up"] ? j(_.$slots, "arrow-up", { key: 0 }) : P("", !0),
                _.$slots["arrow-up"] ? P("", !0) : (v(), te(f(iu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            f(S) ? (v(), te(ca, {
              key: 2,
              ref: "rightIcon",
              disabled: f(d)(!0),
              "aria-label": (lt = f(a).ariaLabels) == null ? void 0 : lt.nextMonth,
              onActivate: L[7] || (L[7] = (me) => f(p)(!0)),
              onSetRef: L[8] || (L[8] = (me) => x(me, 3))
            }, {
              default: J(() => [
                _.$slots[_.vertical ? "arrow-down" : "arrow-right"] ? j(_.$slots, _.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : P("", !0),
                _.$slots[_.vertical ? "arrow-down" : "arrow-right"] ? P("", !0) : (v(), te(Rl(_.vertical ? f(lu) : f(pl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : P("", !0)
          ], 64)) : P("", !0),
          _.monthPicker ? (v(), te(on, je({ key: 1 }, f(Y)("month"), {
            "skip-active": _.range,
            year: e.year,
            "multi-model-value": f(Z),
            "month-picker": "",
            modelValue: f(U),
            "onUpdate:modelValue": L[17] || (L[17] = (me) => Fe(U) ? U.value = me : null),
            onToggle: b,
            onSelected: L[18] || (L[18] = (me) => _.$emit("overlay-closed"))
          }), We({
            header: J(() => {
              var me, ct, at;
              return [
                H("div", Tv, [
                  H("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: w,
                    onClick: L[9] || (L[9] = (ze) => G(!1)),
                    onKeydown: L[10] || (L[10] = be((ze) => G(!1), ["enter"]))
                  }, [
                    H("div", {
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!1) }]),
                      role: "button",
                      "aria-label": (me = f(a).ariaLabels) == null ? void 0 : me.prevMonth
                    }, [
                      _.$slots["arrow-left"] ? j(_.$slots, "arrow-left", { key: 0 }) : P("", !0),
                      _.$slots["arrow-left"] ? P("", !0) : (v(), te(f(dl), { key: 1 }))
                    ], 10, Pv)
                  ], 544),
                  H("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: D,
                    "aria-label": (ct = f(a).ariaLabels) == null ? void 0 : ct.openYearsOverlay,
                    tabindex: "0",
                    onClick: L[11] || (L[11] = () => N(!1)),
                    onKeydown: L[12] || (L[12] = be(() => N(!1), ["enter"]))
                  }, [
                    _.$slots.year ? j(_.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : P("", !0),
                    _.$slots.year ? P("", !0) : (v(), O(ye, { key: 1 }, [
                      Ae(he(e.year), 1)
                    ], 64))
                  ], 40, Cv),
                  H("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: M,
                    onClick: L[13] || (L[13] = (ze) => G(!0)),
                    onKeydown: L[14] || (L[14] = be((ze) => G(!0), ["enter"]))
                  }, [
                    H("div", {
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!0) }]),
                      role: "button",
                      "aria-label": (at = f(a).ariaLabels) == null ? void 0 : at.nextMonth
                    }, [
                      _.$slots["arrow-right"] ? j(_.$slots, "arrow-right", { key: 0 }) : P("", !0),
                      _.$slots["arrow-right"] ? P("", !0) : (v(), te(f(pl), { key: 1 }))
                    ], 10, Dv)
                  ], 544)
                ]),
                ge(bt, {
                  name: f(o)(s.value),
                  css: f(i)
                }, {
                  default: J(() => [
                    s.value ? (v(), te(on, je({ key: 0 }, f(Y)("year"), {
                      modelValue: f(E),
                      "onUpdate:modelValue": L[15] || (L[15] = (ze) => Fe(E) ? E.value = ze : null),
                      onToggle: N,
                      onSelected: L[16] || (L[16] = (ze) => _.$emit("overlay-closed"))
                    }), We({
                      "button-icon": J(() => [
                        _.$slots["calendar-icon"] ? j(_.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                        _.$slots["calendar-icon"] ? P("", !0) : (v(), te(f(Lr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      _.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: J(({ item: ze }) => [
                          j(_.$slots, "year-overlay-value", {
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
            _.$slots["month-overlay-value"] ? {
              name: "item",
              fn: J(({ item: me }) => [
                j(_.$slots, "month-overlay-value", {
                  text: me.text,
                  value: me.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : P("", !0),
          _.yearPicker ? (v(), te(on, je({ key: 2 }, f(Y)("year"), {
            modelValue: f(E),
            "onUpdate:modelValue": L[19] || (L[19] = (me) => Fe(E) ? E.value = me : null),
            "multi-model-value": f(Z),
            "skip-active": _.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: N,
            onSelected: L[20] || (L[20] = (me) => _.$emit("overlay-closed"))
          }), We({ _: 2 }, [
            _.$slots["year-overlay-value"] ? {
              name: "item",
              fn: J(({ item: me }) => [
                j(_.$slots, "year-overlay-value", {
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
}), Mv = {
  key: 0,
  class: "dp__time_input"
}, Iv = ["aria-label", "onKeydown", "onClick"], Nv = ["aria-label", "data-test", "onKeydown", "onClick"], Bv = ["aria-label", "onKeydown", "onClick"], Av = { key: 0 }, Ev = ["aria-label", "onKeydown"], Yv = /* @__PURE__ */ fe({
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: i } = st(r), { transitionName: u, showTransition: p } = zr(i.value.transitions), d = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = I("AM"), m = I(null), s = I([]);
    Ke(() => {
      n("mounted");
    });
    const h = k(() => (l) => !!(r.maxTime && r.maxTime[l] && r.maxTime[l] < r[l] + +r[`${l}Increment`])), w = k(() => (l) => !!(r.minTime && r.minTime[l] && r.minTime[l] > r[l] - +r[`${l}Increment`])), D = (l, c) => El(Ze(W(), l), c), M = (l, c) => oy(Ze(W(), l), c), V = k(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), U = k(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), E = k(() => U.value.filter((l) => !l.separator)), q = k(() => (l) => {
      if (l === "hours") {
        const c = Z(r.hours);
        return { text: c < 10 ? `0${c}` : `${c}`, value: c };
      }
      return { text: r[l] < 10 ? `0${r[l]}` : `${r[l]}`, value: r[l] };
    }), X = (l) => {
      const c = r.is24 ? 24 : 12, S = l === "hours" ? c : 60, b = +r[`${l}GridIncrement`], N = l === "hours" && !r.is24 ? b : 0, K = [];
      for (let G = N; G < S; G += b)
        K.push({ value: G, text: G < 10 ? `0${G}` : `${G}` });
      return l === "hours" && !r.is24 && K.push({ value: 0, text: "12" }), Ay(K);
    }, Y = (l, c) => {
      const S = r.minTime && r.minTime[c], b = r.maxTime && r.maxTime[c];
      return S && b ? l < S || l > b : S ? l < S : b ? l > b : !1;
    }, Q = k(() => (l) => X(l).flat().filter((c) => c).map((c) => c.value).filter((c) => Y(c, l))), R = (l) => r[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], $ = (l) => {
      R(l) || (d[l] = !d[l], d[l] || n("overlay-closed"));
    }, B = (l) => l === "hours" ? $t : l === "minutes" ? Ot : Gt, T = (l, c = !0) => {
      const S = c ? D : M;
      (c ? h.value(l) : w.value(l)) || n(
        `update:${l}`,
        B(l)(S({ [l]: +r[l] }, { [l]: +r[`${l}Increment`] }))
      );
    }, Z = (l) => r.is24 ? l : (l >= 12 ? y.value = "PM" : y.value = "AM", Uy(l)), ee = () => {
      y.value === "PM" ? (y.value = "AM", n("update:hours", r.hours - 12)) : (y.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (l) => {
      d[l] = !0;
    }, z = (l, c, S) => {
      if (l && r.arrowNavigation) {
        Array.isArray(s.value[c]) ? s.value[c][S] = l : s.value[c] = [l];
        const b = s.value.reduce(
          (N, K) => K.map((G, x) => [...N[x] || [], K[x]]),
          []
        );
        o(r.closeTimePickerBtn), m.value && (b[1] = b[1].concat(m.value)), a(b, r.order);
      }
    }, C = (l, c) => l === "hours" && !r.is24 ? n(`update:${l}`, y.value === "PM" ? c + 12 : c) : n(`update:${l}`, c);
    return t({ openChildCmp: ne }), (l, c) => {
      var S;
      return l.disabled ? P("", !0) : (v(), O("div", Mv, [
        (v(!0), O(ye, null, Te(f(U), (b, N) => {
          var K, G, x;
          return v(), O("div", {
            key: N,
            class: ie(f(V))
          }, [
            b.separator ? (v(), O(ye, { key: 0 }, [
              Ae(" : ")
            ], 64)) : (v(), O(ye, { key: 1 }, [
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(h)(b.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (K = f(i).ariaLabels) == null ? void 0 : K.incrementValue(b.type),
                tabindex: "0",
                onKeydown: [
                  be((_) => T(b.type), ["enter"]),
                  be((_) => T(b.type), ["space"])
                ],
                onClick: (_) => T(b.type),
                ref_for: !0,
                ref: (_) => z(_, N, 0)
              }, [
                l.$slots["arrow-up"] ? j(l.$slots, "arrow-up", { key: 0 }) : P("", !0),
                l.$slots["arrow-up"] ? P("", !0) : (v(), te(f(iu), { key: 1 }))
              ], 42, Iv),
              H("div", {
                role: "button",
                "aria-label": (G = f(i).ariaLabels) == null ? void 0 : G.openTpOverlay(b.type),
                class: ie(R(b.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${b.type}-toggle-overlay-btn`,
                onKeydown: [
                  be((_) => $(b.type), ["enter"]),
                  be((_) => $(b.type), ["space"])
                ],
                onClick: (_) => $(b.type),
                ref_for: !0,
                ref: (_) => z(_, N, 1)
              }, [
                l.$slots[b.type] ? j(l.$slots, b.type, {
                  key: 0,
                  text: f(q)(b.type).text,
                  value: f(q)(b.type).value
                }) : P("", !0),
                l.$slots[b.type] ? P("", !0) : (v(), O(ye, { key: 1 }, [
                  Ae(he(f(q)(b.type).text), 1)
                ], 64))
              ], 42, Nv),
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(w)(b.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (x = f(i).ariaLabels) == null ? void 0 : x.decrementValue(b.type),
                tabindex: "0",
                onKeydown: [
                  be((_) => T(b.type, !1), ["enter"]),
                  be((_) => T(b.type, !1), ["space"])
                ],
                onClick: (_) => T(b.type, !1),
                ref_for: !0,
                ref: (_) => z(_, N, 2)
              }, [
                l.$slots["arrow-down"] ? j(l.$slots, "arrow-down", { key: 0 }) : P("", !0),
                l.$slots["arrow-down"] ? P("", !0) : (v(), te(f(lu), { key: 1 }))
              ], 42, Bv)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? P("", !0) : (v(), O("div", Av, [
          l.$slots["am-pm-button"] ? j(l.$slots, "am-pm-button", {
            key: 0,
            toggle: ee,
            value: y.value
          }) : P("", !0),
          l.$slots["am-pm-button"] ? P("", !0) : (v(), O("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: m,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (S = f(i).ariaLabels) == null ? void 0 : S.amPmButton,
            tabindex: "0",
            onClick: ee,
            onKeydown: [
              be(Ee(ee, ["prevent"]), ["enter"]),
              be(Ee(ee, ["prevent"]), ["space"])
            ]
          }, he(y.value), 41, Ev))
        ])),
        (v(!0), O(ye, null, Te(f(E), (b, N) => (v(), te(bt, {
          key: N,
          name: f(u)(d[b.type]),
          css: f(p)
        }, {
          default: J(() => [
            d[b.type] ? (v(), te(on, {
              key: 0,
              items: X(b.type),
              "disabled-values": f(i).filters.times[b.type].concat(f(Q)(b.type)),
              "esc-close": l.escClose,
              "aria-labels": f(i).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (K) => C(b.type, K),
              onSelected: (K) => $(b.type),
              onToggle: (K) => $(b.type),
              onResetFlow: c[0] || (c[0] = (K) => l.$emit("reset-flow")),
              type: b.type
            }, We({
              "button-icon": J(() => [
                l.$slots["clock-icon"] ? j(l.$slots, "clock-icon", { key: 0 }) : P("", !0),
                l.$slots["clock-icon"] ? P("", !0) : (v(), te(f(ou), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${b.type}-overlay-value`] ? {
                name: "item",
                fn: J(({ item: K }) => [
                  j(l.$slots, `${b.type}-overlay-value`, {
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
}), Vv = ["aria-label"], Uv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Fv = {
  key: 1,
  class: "dp__overlay_row"
}, Wv = ["aria-label"], Hv = /* @__PURE__ */ fe({
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), i = pt(), { hideNavigationButtons: u, defaults: p } = st(r), { transitionName: d, showTransition: y } = zr(p.value.transitions), m = I(null), s = I(null), h = I([]), w = I(null);
    Ke(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Le(m.value)], "time") : o(!0, r.timePicker);
    });
    const D = k(() => r.range && r.modelAuto ? du(r.internalModelValue) : !0), M = I(!1), V = (T) => ({
      hours: Array.isArray(r.hours) ? r.hours[T] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[T] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[T] : r.seconds
    }), U = k(() => {
      const T = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          T.push(V(Z));
      else
        T.push(V(0));
      return T;
    }), E = (T, Z = !1, ee = "") => {
      Z || n("reset-flow"), M.value = T, T && n("overlay-opened"), r.arrowNavigation && (o(T), T || n("overlay-closed")), dt(() => {
        ee !== "" && h.value[0] && h.value[0].openChildCmp(ee);
      });
    }, q = k(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), X = Yt(i, "timePicker"), Y = (T, Z, ee) => r.range ? Z === 0 ? [T, U.value[1][ee]] : [U.value[0][ee], T] : T, Q = (T) => {
      n("update:hours", T);
    }, R = (T) => {
      n("update:minutes", T);
    }, $ = (T) => {
      n("update:seconds", T);
    }, B = () => {
      w.value && r.arrowNavigation && w.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: E }), (T, Z) => {
      var ee;
      return v(), O("div", null, [
        T.timePicker ? P("", !0) : xt((v(), O("div", {
          key: 0,
          class: ie(f(q)),
          role: "button",
          "aria-label": (ee = f(p).ariaLabels) == null ? void 0 : ee.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: m,
          onKeydown: [
            Z[0] || (Z[0] = be((ne) => E(!0), ["enter"])),
            Z[1] || (Z[1] = be((ne) => E(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (ne) => E(!0))
        }, [
          T.$slots["clock-icon"] ? j(T.$slots, "clock-icon", { key: 0 }) : P("", !0),
          T.$slots["clock-icon"] ? P("", !0) : (v(), te(f(ou), { key: 1 }))
        ], 42, Vv)), [
          [pn, !f(u)("time")]
        ]),
        ge(bt, {
          name: f(d)(M.value),
          css: f(y)
        }, {
          default: J(() => {
            var ne;
            return [
              M.value || T.timePicker ? (v(), O("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: w,
                tabindex: "0"
              }, [
                H("div", Uv, [
                  T.$slots["time-picker-overlay"] ? j(T.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: Q,
                    setMinutes: R,
                    setSeconds: $
                  }) : P("", !0),
                  T.$slots["time-picker-overlay"] ? P("", !0) : (v(), O("div", Fv, [
                    (v(!0), O(ye, null, Te(f(U), (z, C) => xt((v(), te(Yv, je({ key: C }, {
                      ...T.$props,
                      order: C,
                      hours: z.hours,
                      minutes: z.minutes,
                      seconds: z.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: C === 0 ? T.fixedStart : T.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (l) => Q(Y(l, C, "hours")),
                      "onUpdate:minutes": (l) => R(Y(l, C, "minutes")),
                      "onUpdate:seconds": (l) => $(Y(l, C, "seconds")),
                      onMounted: B,
                      onOverlayClosed: B
                    }), We({ _: 2 }, [
                      Te(f(X), (l, c) => ({
                        name: l,
                        fn: J((S) => [
                          j(T.$slots, l, Qe(mt(S)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [pn, C === 0 ? !0 : f(D)]
                    ])), 128))
                  ])),
                  T.timePicker ? P("", !0) : xt((v(), O("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: ie(f(q)),
                    role: "button",
                    "aria-label": (ne = f(p).ariaLabels) == null ? void 0 : ne.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = be((z) => E(!1), ["enter"])),
                      Z[4] || (Z[4] = be((z) => E(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (z) => E(!1))
                  }, [
                    T.$slots["calendar-icon"] ? j(T.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                    T.$slots["calendar-icon"] ? P("", !0) : (v(), te(f(Lr), { key: 1 }))
                  ], 42, Wv)), [
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
}), Lv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = st(t), o = I(null), i = I(W()), u = (c) => {
    !c.current && t.hideOffsetDates || (o.value = c.value);
  }, p = () => {
    o.value = null;
  }, d = (c) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? c ? rt(o.value, e.value[0]) : Xe(o.value, e.value[0]) : !0, y = (c, S) => {
    const b = () => e.value ? S ? e.value[0] || null : e.value[1] : null, N = e.value && Array.isArray(e.value) ? b() : null;
    return Me(W(c.value), N);
  }, m = (c) => {
    const S = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !Xe(o.value || null, S) : !0;
  }, s = (c, S = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Me(W(c.value), e.value[S ? 0 : 1]) : t.range ? y(c, S) && m(S) || Me(c.value, Array.isArray(e.value) ? e.value[0] : null) && d(S) : !1, h = (c, S, b) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : b ? rt(e.value[0], S.value) : Xe(e.value[0], S.value) : !1, w = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Me(c.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((S) => Me(S, c.value)) : Me(c.value, e.value ? e.value : i.value), D = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const S = Dt(o.value, +t.autoRange), b = a(W(o.value));
        return t.weekPicker ? Me(b[1], W(c.value)) : Me(S, W(c.value));
      }
      return !1;
    }
    return !1;
  }, M = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const S = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const b = a(W(o.value));
        return t.weekPicker ? rt(c.value, b[0]) && Xe(c.value, b[1]) : rt(c.value, o.value) && Xe(c.value, S);
      }
      return !1;
    }
    return !1;
  }, V = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const S = a(W(o.value));
        return t.weekPicker ? Me(S[0], c.value) : Me(o.value, c.value);
      }
      return !1;
    }
    return !1;
  }, U = (c) => uu(e.value, o.value, c.value), E = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, q = () => t.modelAuto ? du(t.internalModelValue) : !0, X = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const S = t.range ? !s(c) && !s(c, !1) : !0;
    return !n(c.value) && !w(c) && !(!c.current && t.hideOffsetDates) && S;
  }, Y = (c) => t.range ? t.modelAuto ? E() && w(c) : !1 : w(c), Q = (c) => t.highlight ? r(c.value, t.highlight) : !1, R = (c) => n(c.value) && t.highlightDisabledDays === !1, $ = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), B = (c) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || c.current) && q() && !(!c.current && t.hideOffsetDates) && !w(c) ? U(c) : !1, T = (c) => {
    const { isRangeStart: S, isRangeEnd: b } = ne(c), N = t.range ? S || b : !1;
    return {
      dp__cell_offset: !c.current,
      dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
      dp__cell_disabled: n(c.value),
      dp__cell_highlight: !R(c) && (Q(c) || $(c)) && !Y(c) && !N,
      dp__cell_highlight_active: !R(c) && (Q(c) || $(c)) && Y(c),
      dp__today: !t.noToday && Me(c.value, i.value) && c.current
    };
  }, Z = (c) => ({
    dp__active_date: Y(c),
    dp__date_hover: X(c)
  }), ee = (c) => ({
    ...z(c),
    ...C(c),
    dp__range_between_week: B(c) && t.weekPicker
  }), ne = (c) => {
    const S = t.multiCalendars > 0 ? c.current && s(c) && q() : s(c) && q(), b = t.multiCalendars > 0 ? c.current && s(c, !1) && q() : s(c, !1) && q();
    return { isRangeStart: S, isRangeEnd: b };
  }, z = (c) => {
    const { isRangeStart: S, isRangeEnd: b } = ne(c);
    return {
      dp__range_start: S,
      dp__range_end: b,
      dp__range_between: B(c) && !t.weekPicker,
      dp__date_hover_start: h(X(c), c, !0),
      dp__date_hover_end: h(X(c), c, !1)
    };
  }, C = (c) => ({
    ...z(c),
    dp__cell_auto_range: M(c),
    dp__cell_auto_range_start: V(c),
    dp__cell_auto_range_end: D(c)
  }), l = (c) => t.range ? t.autoRange ? C(c) : t.modelAuto ? { ...Z(c), ...z(c) } : z(c) : t.weekPicker ? ee(c) : Z(c);
  return {
    setHoverDate: u,
    clearHoverDate: p,
    getDayClassData: (c) => ({
      ...T(c),
      ...l(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, zv = ["id", "onKeydown"], jv = {
  key: 0,
  class: "dp__sidebar_left"
}, qv = {
  key: 1,
  class: "dp__preset_ranges"
}, Gv = ["onClick"], Qv = {
  key: 2,
  class: "dp__sidebar_right"
}, Zv = {
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: i } = su(), { getCalendarDays: u, defaults: p } = st(r), d = pt(), y = I(null), m = Ct({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = I([]), h = I([]), w = I(null), D = I(null), M = I(0), V = I(!1), U = I(0);
    Ke(() => {
      var A;
      V.value = !0, !((A = r.presetRanges) != null && A.length) && !d["left-sidebar"] && !d["right-sidebar"] && ve();
      const ae = Le(D);
      if (ae && !r.textInput && !r.inline && (a(!0), R()), ae) {
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
    const { arrowRight: E, arrowLeft: q, arrowDown: X, arrowUp: Y } = Mt(), Q = (A) => {
      A || A === 0 ? h.value[A].triggerTransition(
        ee.value(A),
        ne.value(A)
      ) : h.value.forEach(
        (ae, et) => ae.triggerTransition(ee.value(et), ne.value(et))
      );
    }, R = () => {
      const A = Le(D);
      A && A.focus({ preventScroll: !0 });
    }, $ = () => {
      var A;
      (A = r.flow) != null && A.length && U.value !== -1 && (U.value += 1, n("flow-step", U.value), Ne());
    }, B = () => {
      U.value = -1;
    }, {
      calendars: T,
      modelValue: Z,
      month: ee,
      year: ne,
      time: z,
      updateTime: C,
      updateMonthYear: l,
      selectDate: c,
      getWeekNum: S,
      monthYearSelect: b,
      handleScroll: N,
      handleArrow: K,
      handleSwipe: G,
      getMarker: x,
      selectCurrentDate: _,
      presetDateRange: L
    } = Gy(r, n, $, Q, U), { setHoverDate: we, clearHoverDate: oe, getDayClassData: pe } = Lv(Z, r);
    it(
      T,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Ie = Yt(d, "calendar"), lt = Yt(d, "action"), me = Yt(d, "timePicker"), ct = Yt(d, "monthYear"), at = k(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ze = k(() => Yy(r.yearRange)), Qt = k(() => Vy(r.locale, r.monthNameFormat)), ve = () => {
      const A = Le(y);
      A && (M.value = A.getBoundingClientRect().width);
    }, Pe = k(() => (A) => u(ee.value(A), ne.value(A))), $e = k(
      () => p.value.multiCalendars > 0 && r.range ? [...Array(p.value.multiCalendars).keys()] : [0]
    ), Nt = k(
      () => (A) => A === 1
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
      () => (A) => Zr(Pe, A)
    ), Qr = k(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Zr = (A, ae) => A.value(ae).map((et) => ({
      ...et,
      days: et.days.map((ot) => (ot.marker = x(ot), ot.classData = pe(ot), ot))
    })), sn = (A) => {
      A.stopPropagation(), A.stopImmediatePropagation();
    }, g = () => {
      r.escClose && n("close-picker");
    }, F = (A, ae = !1) => {
      c(A, ae), r.spaceConfirm && n("select-date");
    }, le = (A) => {
      var ae;
      (ae = r.flow) != null && ae.length && (m[A] = !0, Object.keys(m).filter((et) => !m[et]).length || Ne());
    }, se = (A, ae, et, ot, ...Wt) => {
      if (r.flow[U.value] === A) {
        const ue = ot ? ae.value[0] : ae.value;
        ue && ue[et](...Wt);
      }
    }, Ne = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", w, "toggleTimePicker", !1, !1, !0), se("time", w, "toggleTimePicker", !1, !0, !0);
      const A = r.flow[U.value];
      (A === "hours" || A === "minutes" || A === "seconds") && se(A, w, "toggleTimePicker", !1, !0, !0, A);
    }, ut = (A) => {
      if (r.arrowNavigation) {
        if (A === "up")
          return Y();
        if (A === "down")
          return X();
        if (A === "left")
          return q();
        if (A === "right")
          return E();
      } else
        A === "left" || A === "up" ? K("left", 0, A === "up") : K("right", 0, A === "down");
    }, wt = (A) => {
      o(A.shiftKey), !r.disableMonthYearSelect && A.code === "Tab" && A.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (A.preventDefault(), A.stopImmediatePropagation(), n("close-picker"));
    }, Xt = (A) => {
      s.value[0] && s.value[0].handleMonthYearChange(A);
    };
    return t({
      updateMonthYear: l
    }), (A, ae) => {
      var et;
      return v(), te(bt, {
        appear: "",
        name: (et = f(p).transitions) == null ? void 0 : et.menuAppear,
        mode: "out-in",
        css: !!A.transitions
      }, {
        default: J(() => {
          var ot, Wt;
          return [
            H("div", {
              id: A.uid ? `dp-menu-${A.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: D,
              role: "dialog",
              class: ie(f(Qr)),
              onMouseleave: ae[15] || (ae[15] = //@ts-ignore
              (...ue) => f(oe) && f(oe)(...ue)),
              onClick: sn,
              onKeydown: [
                be(g, ["esc"]),
                ae[16] || (ae[16] = be(Ee((ue) => ut("left"), ["prevent"]), ["left"])),
                ae[17] || (ae[17] = be(Ee((ue) => ut("up"), ["prevent"]), ["up"])),
                ae[18] || (ae[18] = be(Ee((ue) => ut("down"), ["prevent"]), ["down"])),
                ae[19] || (ae[19] = be(Ee((ue) => ut("right"), ["prevent"]), ["right"])),
                wt
              ]
            }, [
              (A.disabled || A.readonly) && A.inline ? (v(), O("div", {
                key: 0,
                class: ie(f(Zt))
              }, null, 2)) : P("", !0),
              !A.inline && !A.teleportCenter ? (v(), O("div", {
                key: 1,
                class: ie(f(at))
              }, null, 2)) : P("", !0),
              H("div", {
                class: ie({
                  dp__menu_content_wrapper: ((ot = A.presetRanges) == null ? void 0 : ot.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"]
                })
              }, [
                A.$slots["left-sidebar"] ? (v(), O("div", jv, [
                  j(A.$slots, "left-sidebar", Qe(mt({ handleMonthYearChange: Xt })))
                ])) : P("", !0),
                (Wt = A.presetRanges) != null && Wt.length ? (v(), O("div", qv, [
                  (v(!0), O(ye, null, Te(A.presetRanges, (ue, Ht) => (v(), O("div", {
                    key: Ht,
                    style: St(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (_e) => f(L)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? j(A.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: f(L),
                      label: ue.label,
                      range: ue.range
                    }) : (v(), O(ye, { key: 1 }, [
                      Ae(he(ue.label), 1)
                    ], 64))
                  ], 12, Gv))), 128))
                ])) : P("", !0),
                H("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: y,
                  role: "document"
                }, [
                  H("div", {
                    class: ie(f(qr))
                  }, [
                    (v(!0), O(ye, null, Te(f($e), (ue, Ht) => (v(), O("div", {
                      key: ue,
                      class: ie(f(un))
                    }, [
                      !A.disableMonthYearSelect && !A.timePicker ? (v(), te(Rv, je({
                        key: 0,
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (s.value[Ht] = _e);
                        },
                        months: f(Qt),
                        years: f(ze),
                        month: f(ee)(ue),
                        year: f(ne)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, A.$props, {
                        onMount: ae[0] || (ae[0] = (_e) => le("monthYearInput")),
                        onResetFlow: B,
                        onUpdateMonthYear: (_e) => f(l)(ue, _e),
                        onMonthYearSelect: f(b),
                        onOverlayClosed: R
                      }), We({ _: 2 }, [
                        Te(f(ct), (_e, hu) => ({
                          name: _e,
                          fn: J((Xr) => [
                            j(A.$slots, _e, Qe(mt(Xr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : P("", !0),
                      ge(gv, je({
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (h.value[Ht] = _e);
                        },
                        "specific-mode": f(Bt),
                        "get-week-num": f(S),
                        instance: ue,
                        "mapped-dates": f(Gr)(ue),
                        month: f(ee)(ue),
                        year: f(ne)(ue)
                      }, A.$props, {
                        "flow-step": U.value,
                        "onUpdate:flowStep": ae[1] || (ae[1] = (_e) => U.value = _e),
                        onSelectDate: (_e) => f(c)(_e, !f(Nt)(ue)),
                        onHandleSpace: (_e) => F(_e, !f(Nt)(ue)),
                        onSetHoverDate: ae[2] || (ae[2] = (_e) => f(we)(_e)),
                        onHandleScroll: (_e) => f(N)(_e, ue),
                        onHandleSwipe: (_e) => f(G)(_e, ue),
                        onMount: ae[3] || (ae[3] = (_e) => le("calendar")),
                        onResetFlow: B,
                        onTooltipOpen: ae[4] || (ae[4] = (_e) => A.$emit("tooltip-open", _e)),
                        onTooltipClose: ae[5] || (ae[5] = (_e) => A.$emit("tooltip-close", _e))
                      }), We({ _: 2 }, [
                        Te(f(Ie), (_e, hu) => ({
                          name: _e,
                          fn: J((Xr) => [
                            j(A.$slots, _e, Qe(mt({ ...Xr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  H("div", null, [
                    A.$slots["time-picker"] ? j(A.$slots, "time-picker", Qe(je({ key: 0 }, { time: f(z), updateTime: f(C) }))) : (v(), O(ye, { key: 1 }, [
                      A.enableTimePicker && !A.monthPicker && !A.weekPicker ? (v(), te(Hv, je({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: w,
                        hours: f(z).hours,
                        minutes: f(z).minutes,
                        seconds: f(z).seconds,
                        "internal-model-value": e.internalModelValue
                      }, A.$props, {
                        onMount: ae[6] || (ae[6] = (ue) => le("timePicker")),
                        "onUpdate:hours": ae[7] || (ae[7] = (ue) => f(C)(ue)),
                        "onUpdate:minutes": ae[8] || (ae[8] = (ue) => f(C)(ue, !1)),
                        "onUpdate:seconds": ae[9] || (ae[9] = (ue) => f(C)(ue, !1, !0)),
                        onResetFlow: B,
                        onOverlayClosed: R,
                        onOverlayOpened: ae[10] || (ae[10] = (ue) => A.$emit("time-picker-open", ue))
                      }), We({ _: 2 }, [
                        Te(f(me), (ue, Ht) => ({
                          name: ue,
                          fn: J((_e) => [
                            j(A.$slots, ue, Qe(mt(_e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : P("", !0)
                    ], 64))
                  ])
                ], 512),
                A.$slots["right-sidebar"] ? (v(), O("div", Qv, [
                  j(A.$slots, "right-sidebar", Qe(mt({ handleMonthYearChange: Xt })))
                ])) : P("", !0),
                A.showNowButton ? (v(), O("div", Zv, [
                  A.$slots["now-button"] ? j(A.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: f(_)
                  }) : P("", !0),
                  A.$slots["now-button"] ? P("", !0) : (v(), O("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ae[11] || (ae[11] = //@ts-ignore
                    (...ue) => f(_) && f(_)(...ue))
                  }, he(A.nowButtonLabel), 1))
                ])) : P("", !0)
              ], 2),
              !A.autoApply || A.keepActionRow ? (v(), te(sv, je({
                key: 2,
                "menu-mount": V.value,
                "calendar-width": M.value,
                "internal-model-value": e.internalModelValue
              }, A.$props, {
                onClosePicker: ae[12] || (ae[12] = (ue) => A.$emit("close-picker")),
                onSelectDate: ae[13] || (ae[13] = (ue) => A.$emit("select-date")),
                onInvalidSelect: ae[14] || (ae[14] = (ue) => A.$emit("invalid-select"))
              }), We({ _: 2 }, [
                Te(f(lt), (ue, Ht) => ({
                  name: ue,
                  fn: J((_e) => [
                    j(A.$slots, ue, Qe(mt({ ..._e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : P("", !0)
            ], 42, zv)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Kv = typeof window < "u" ? window : void 0, fa = () => {
}, Jv = (e) => ku() ? (Su(e), !0) : !1, eh = (e, t, n, r) => {
  if (!e)
    return fa;
  let a = fa;
  const o = it(
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
  return Jv(i), i;
}, th = (e, t, n, r = {}) => {
  const { window: a = Kv, event: o = "pointerdown" } = r;
  return a ? eh(a, o, (i) => {
    const u = Le(e), p = Le(t);
    !u || !p || u === i.target || i.composedPath().includes(u) || i.composedPath().includes(p) || n(i);
  }, { passive: !0 }) : void 0;
}, nh = /* @__PURE__ */ fe({
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
    const r = e, a = pt(), o = I(!1), i = tr(r, "modelValue"), u = tr(r, "timezone"), p = I(null), d = I(null), y = I(!1), m = I(null), { setMenuFocused: s, setShiftKey: h } = su(), { clearArrowNav: w } = Mt(), { validateDate: D, isValidTime: M, defaults: V } = st(r);
    Ke(() => {
      T(r.modelValue), r.inline || (R(m.value).addEventListener("scroll", c), window.addEventListener("resize", S)), r.inline && (o.value = !0);
    }), Do(() => {
      if (!r.inline) {
        const ve = R(m.value);
        ve && ve.removeEventListener("scroll", c), window.removeEventListener("resize", S);
      }
    });
    const U = Yt(a, "all", r.presetRanges), E = Yt(a, "input");
    it(
      [i, u],
      () => {
        T(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: q, menuPosition: X, setMenuPosition: Y, setInitialPosition: Q, getScrollableParent: R } = Xy(
      p,
      d,
      n,
      r
    ), {
      inputValue: $,
      internalModelValue: B,
      parseExternalModelValue: T,
      emitModelValue: Z,
      formatInputValue: ee,
      checkBeforeEmit: ne
    } = Qy(n, r, y), z = k(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), C = k(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), l = k(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), c = () => {
      o.value && (r.closeOnScroll ? oe() : Y());
    }, S = () => {
      o.value && Y();
    }, b = () => {
      !r.disabled && !r.readonly && (Q(), o.value = !0, dt().then(() => {
        Y(), o.value && n("open");
      }), o.value || we(), T(r.modelValue));
    }, N = () => {
      $.value = "", we(), n("update:model-value", null), n("cleared"), oe();
    }, K = () => {
      const ve = B.value;
      return !ve || !Array.isArray(ve) && D(ve) ? !0 : Array.isArray(ve) ? ve.length === 2 && D(ve[0]) && D(ve[1]) ? !0 : D(ve[0]) : !1;
    }, G = () => {
      ne() && K() ? (Z(), oe()) : n("invalid-select", B.value);
    }, x = (ve) => {
      _(), Z(), r.closeOnAutoApply && !ve && oe();
    }, _ = () => {
      d.value && r.textInput && d.value.setParsedDate(B.value);
    }, L = (ve = !1) => {
      r.autoApply && M(B.value) && K() && (r.range && Array.isArray(B.value) ? (r.partialRange || B.value.length === 2) && x(ve) : x(ve));
    }, we = () => {
      r.textInput || (B.value = null);
    }, oe = () => {
      r.inline || (o.value && (o.value = !1, s(!1), h(!1), w(), n("closed"), Q(), $.value && T(i.value)), we(), d.value && d.value.focusInput());
    }, pe = (ve, Pe) => {
      if (!ve) {
        B.value = null;
        return;
      }
      B.value = ve, Pe && (G(), n("text-submit"));
    }, Ie = () => {
      r.autoApply && M(B.value) && Z(), _();
    }, lt = () => o.value ? oe() : b(), me = (ve) => {
      B.value = ve;
    }, ct = k(() => r.textInput && V.value.textInputOptions.format), at = () => {
      ct.value && (y.value = !0, ee()), n("focus");
    }, ze = () => {
      ct.value && (y.value = !1, ee()), n("blur");
    }, Qt = (ve) => {
      p.value && p.value.updateMonthYear(0, {
        month: Sl(ve.month),
        year: Sl(ve.year)
      });
    };
    return th(
      p,
      d,
      r.onClickOutside ? () => r.onClickOutside(K) : oe
    ), t({
      closeMenu: oe,
      selectDate: G,
      clearValue: N,
      openMenu: b,
      onScroll: c,
      formatInputValue: ee,
      // exposed for testing purposes
      updateInternalModelValue: me,
      // modify internal modelValue
      setMonthYear: Qt
    }), (ve, Pe) => (v(), O("div", {
      class: ie(f(z)),
      ref_key: "pickerWrapperRef",
      ref: m
    }, [
      ge(ov, je({
        ref_key: "inputRef",
        ref: d,
        "is-menu-open": o.value,
        "input-value": f($),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Fe($) ? $.value = $e : null)
      }, ve.$props, {
        onClear: N,
        onOpen: b,
        onSetInputDate: pe,
        onSetEmptyDate: f(Z),
        onSelectDate: G,
        onToggle: lt,
        onClose: oe,
        onFocus: at,
        onBlur: ze
      }), We({ _: 2 }, [
        Te(f(E), ($e, Nt) => ({
          name: $e,
          fn: J((Bt) => [
            j(ve.$slots, $e, Qe(mt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (v(), te(Rl(ve.teleport ? _u : "div"), Qe(je({ key: 0 }, f(l))), {
        default: J(() => [
          o.value ? (v(), te(Xv, je({
            key: 0,
            ref_key: "dpMenuRef",
            ref: p,
            class: f(C),
            style: f(X),
            "open-on-top": f(q)
          }, ve.$props, {
            "internal-model-value": f(B),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Fe(B) ? B.value = $e : null),
            onClosePicker: oe,
            onSelectDate: G,
            onAutoApply: L,
            onTimeUpdate: Ie,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ve.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ve.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ve.$emit("invalid-select", f(B))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ve.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: f(Y),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ve.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ve.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ve.$emit("time-picker-open", $e))
          }), We({ _: 2 }, [
            Te(f(U), ($e, Nt) => ({
              name: $e,
              fn: J((Bt) => [
                j(ve.$slots, $e, Qe(mt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : P("", !0)
        ]),
        _: 3
      }, 16)) : P("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ (() => {
  const e = nh;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(rh).forEach(([e, t]) => {
  e !== "default" && (zo[e] = t);
});
const ah = { class: "custom-date-picker__container" }, oh = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], ih = ["onClick"], lh = { class: "custom-date-picker__icon" }, uh = {
  key: 0,
  class: "custom-date-picker__error"
}, sh = /* @__PURE__ */ fe({
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
      set(h) {
        t("update:model-value", h);
      }
    }), i = k(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = k(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), p = k(() => ({
      "custom-date-picker__input-container": !0,
      "custom-date-picker__input-container--dark": n.dark,
      "custom-date-picker__input-container--disabled": n.disabled,
      "custom-date-picker__input-container--outlined": n.outlined,
      "custom-date-picker__input-container--error": !!n.errorMessage,
      "custom-date-picker__input-container--opened": r.value || u.value
    })), d = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), y = () => {
      a.value && a.value.openMenu();
    }, m = () => {
      r.value = !0;
    }, s = () => {
      r.value = !1;
    };
    return (h, w) => (v(), O("div", ah, [
      ge(f(zo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: f(o),
        "onUpdate:modelValue": w[1] || (w[1] = (D) => Fe(o) ? o.value = D : null),
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
        "dp-input": J(({ value: D, onClear: M, onInput: V, onEnter: U }) => [
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
              onClick: w[0] || (w[0] = Ee(() => {
              }, ["stop"])),
              onInput: V,
              onFocus: Ee(y, ["stop"]),
              onKeydown: be(U, ["enter"])
            }, null, 40, oh),
            H("div", {
              class: "custom-date-picker__clear",
              onClick: Ee(M, ["stop"])
            }, [
              D && !e.readonly && !e.disabled && e.clearable ? (v(), te(He, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fm-circle-close"
              })) : P("", !0)
            ], 8, ih),
            H("div", lh, [
              e.disabled ? P("", !0) : (v(), te(He, {
                key: 0,
                size: "1rem",
                color: f(d),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 2)
        ]),
        "arrow-right": J(() => [
          ge(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-right"
          })
        ]),
        "arrow-left": J(() => [
          ge(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly", "month-picker"]),
      e.errorMessage ? (v(), O("div", uh, he(e.errorMessage), 1)) : P("", !0)
    ]));
  }
});
const jo = /* @__PURE__ */ ke(sh, [["__scopeId", "data-v-59b9c697"]]), pu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, ch = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), pu(e, t.split("."), n)), fh = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return ch(e, t, n);
  if (Array.isArray(t))
    return pu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, dh = () => ({
  getPropertyFromItem: fh
}), ph = ["onMousedown"], mh = ["value", "placeholder", "onKeydown"], yh = ["onClick"], vh = { class: "custom-select__icon" }, hh = {
  key: 0,
  class: "custom-select__search-container"
}, gh = ["onClick"], bh = {
  key: 1,
  class: "custom-select__no-data"
}, _h = {
  key: 0,
  class: "custom-select__error"
}, wh = /* @__PURE__ */ fe({
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
    xe((S) => ({
      "2508ba42": e.textTransform,
      "5320c375": a.value,
      "10f3e1e7": o.value,
      "0e2527e6": i.value
    }));
    const { getPropertyFromItem: r } = dh(), a = I(""), o = I(""), i = I(""), u = I(""), p = I(!1), d = I(!1), y = I(!1), m = I(null), s = I(null), h = I(null), w = k({
      get() {
        return n.modelValue;
      },
      set(S) {
        t("update:model-value", S);
      }
    }), D = k(
      () => U.value && n.clearable && !n.readonly && !n.disabled
    ), M = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), V = k(() => !n.searchable || !u.value ? n.items : n.items.filter((S) => {
      const b = u.value.trim().toLowerCase();
      return b ? X(S).toLowerCase().includes(b) : !0;
    })), U = k(() => Array.isArray(w.value) ? w.value.length > 0 : !!w.value), E = k(() => ({
      "custom-select__text-container": !0,
      "custom-select__text-container--dark": n.dark,
      "custom-select__text-container--opened": p.value,
      "custom-select__text-container--active": U.value,
      "custom-select__text-container--disabled": n.disabled,
      "custom-select__text-container--outlined": n.outlined,
      "custom-select__text-container--error": !!n.errorMessage
    })), q = k(() => {
      var S;
      if (w.value)
        if (Array.isArray(w.value)) {
          if (w.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(w.value, n.itemTitle, w.value);
          {
            const b = (S = n.items) == null ? void 0 : S.find((N) => {
              const K = r(N, n.itemValue, N), G = r(w.value, n.itemValue, w.value);
              return K === G;
            });
            return r(b, n.itemTitle, b);
          }
        }
      return "";
    });
    function X(S) {
      return r(S, n.itemTitle, S);
    }
    function Y() {
      d.value = !0;
    }
    function Q() {
      d.value = !1;
    }
    function R(S) {
      return {
        "custom-select__menu-item": !0,
        "custom-select__menu-item--selected": l(S)
      };
    }
    async function $() {
      await dt();
      const S = s.value, b = h.value;
      if (!S || !b)
        return;
      const N = S.getBoundingClientRect(), K = b.getBoundingClientRect();
      o.value = `${N.left}px`, i.value = `${N.width}px`;
      const G = N.top + N.height + K.height, x = window.innerHeight, _ = N.top + N.height - (n.errorMessage ? 18 : 0);
      if (G > x) {
        const L = G - x;
        a.value = `${_ - L - 16}px`;
      } else
        a.value = `${_}px`;
    }
    function B() {
      n.disabled || n.readonly || p.value || (p.value = !0, $(), y.value = !0, document.addEventListener("click", ne));
    }
    function T() {
      p.value = !1, d.value = !1, y.value = !1, document.removeEventListener("click", ne);
    }
    function Z() {
      d.value || T();
    }
    function ee() {
      p.value && T();
    }
    function ne(S) {
      !s.value || !S.target || s.value.contains(S.target) || T();
    }
    function z() {
      n.disabled || n.readonly || (p.value ? (T(), m.value && m.value.focus()) : (B(), m.value && m.value.blur()));
    }
    function C(S) {
      const b = r(S, n.itemValue, S);
      if (n.multiple && Array.isArray(w.value)) {
        const N = w.value.slice(), K = n.returnObject ? N.findIndex((G) => r(G, n.itemValue, G) === b) : N.indexOf(b);
        K >= 0 ? N.splice(K, 1) : N.push(n.returnObject ? S : b), w.value = N;
      } else
        w.value = n.returnObject ? S : b, T();
    }
    function l(S) {
      if (n.multiple && Array.isArray(w.value))
        return w.value.some((K) => {
          const G = r(K, n.itemValue, K), x = r(S, n.itemValue, S);
          return G === x;
        });
      const b = r(w.value, n.itemValue, w.value), N = r(S, n.itemValue, S);
      return b === N;
    }
    function c() {
      Array.isArray(w.value) ? w.value = [] : w.value = null;
    }
    return (S, b) => (v(), O("div", {
      ref_key: "container",
      ref: s,
      class: "custom-select__container",
      onMouseenter: Y,
      onMouseleave: Q
    }, [
      H("div", {
        class: ie(f(E)),
        onMousedown: Ee(z, ["stop"])
      }, [
        H("input", {
          ref_key: "input",
          ref: m,
          readonly: "",
          value: f(q),
          placeholder: e.placeholder,
          class: "custom-select__text",
          onFocus: B,
          onBlur: Z,
          onKeydown: be(ee, ["tab"])
        }, null, 40, mh),
        H("div", {
          class: "custom-select__clear",
          onMousedown: b[0] || (b[0] = Ee(() => {
          }, ["stop"])),
          onClick: Ee(c, ["stop"])
        }, [
          f(D) ? (v(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : P("", !0)
        ], 40, yh),
        H("div", vh, [
          ge(He, {
            size: "1rem",
            color: f(M),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ])
      ], 42, ph),
      ge(bt, null, {
        default: J(() => [
          p.value ? (v(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: h,
            class: "custom-select__menu"
          }, [
            e.searchable ? (v(), O("div", hh, [
              xt(H("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (N) => u.value = N),
                type: "text",
                placeholder: "Buscar",
                class: "custom-select__search",
                onClick: b[2] || (b[2] = Ee(() => {
                }, ["stop"]))
              }, null, 512), [
                [Ml, u.value]
              ]),
              ge(He, {
                size: "1rem",
                color: "acento-principal",
                name: "fm-magnify-glass"
              })
            ])) : P("", !0),
            (v(!0), O(ye, null, Te(f(V), (N, K) => (v(), O("div", {
              key: `item-${K}`,
              class: ie(R(N)),
              onClick: Ee((G) => C(N), ["stop"])
            }, [
              e.multiple ? (v(), te(Bl, {
                key: 0,
                "model-value": l(N)
              }, null, 8, ["model-value"])) : P("", !0),
              Ae(" " + he(X(N)), 1)
            ], 10, gh))), 128)),
            f(V).length === 0 ? (v(), O("div", bh, " Sin datos disponibles ")) : P("", !0),
            j(S.$slots, "append-item", {}, void 0, !0)
          ], 512)) : P("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (v(), O("div", _h, he(e.errorMessage), 1)) : P("", !0)
    ], 544));
  }
});
const qo = /* @__PURE__ */ ke(wh, [["__scopeId", "data-v-67ea42d3"]]);
/*! maska v2.1.7 | (c) Alexander Shabunevich | Released under the MIT license */
var kh = Object.defineProperty, Sh = (e, t, n) => t in e ? kh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ln = (e, t, n) => (Sh(e, typeof t != "symbol" ? t + "" : t, n), n);
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
    const { mask: i, escaped: u } = this.escapeMask(n), p = [], d = this.opts.tokens != null ? this.opts.tokens : {}, y = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : i.length - 1, h = this.isReversed() ? () => V > -1 && U > -1 : () => V < i.length && U < t.length, w = (E) => !this.isReversed() && E <= s || this.isReversed() && E >= s;
    let D, M = -1, V = this.isReversed() ? i.length - 1 : 0, U = this.isReversed() ? t.length - 1 : 0;
    for (; h(); ) {
      const E = i.charAt(V), q = d[E], X = (q == null ? void 0 : q.transform) != null ? q.transform(t.charAt(U)) : t.charAt(U);
      if (!u.includes(V) && q != null) {
        if (X.match(q.pattern) != null)
          p[m](X), q.repeated ? (M === -1 ? M = V : V === s && V !== M && (V = M - y), s === M && (V -= y)) : q.multiple && (V -= y), V += y;
        else if (q.multiple) {
          const Y = ((a = p[U - y]) == null ? void 0 : a.match(q.pattern)) != null, Q = i.charAt(V + y);
          Y && Q !== "" && d[Q] == null ? (V += y, U -= y) : p[m]("");
        } else
          X === D ? D = void 0 : q.optional && (V += y, U -= y);
        U += y;
      } else
        r && !this.isEager() && p[m](E), X === E && !this.isEager() ? U += y : D = E, this.isEager() || (V += y);
      if (this.isEager())
        for (; w(V) && (d[i.charAt(V)] == null || u.includes(V)); )
          r ? p[m](i.charAt(V)) : i.charAt(V) === t.charAt(U) && (U += y), V += y;
    }
    return this.memo.set(o, p.join("")), this.memo.get(o);
  }
}
const mu = (e) => JSON.parse(e.replaceAll("'", '"')), Dl = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = $h(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = da(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = da(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = da(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Oh(e.dataset.maskaTokens)), n;
}, da = (e) => e !== "" ? !!JSON.parse(e) : !0, $h = (e) => e.startsWith("[") && e.endsWith("]") ? mu(e) : e, Oh = (e) => {
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
class xh {
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
        const y = o.masked(i), m = o.unmasked(i);
        m === "" && "data" in r && r.data != null ? d = r.data : m !== o.unmasked(y) && (d = m);
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
const Po = /* @__PURE__ */ new WeakMap(), Th = (e) => {
  setTimeout(() => {
    var t;
    ((t = Po.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, Ph = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), r = { ...t.arg };
  if (n == null)
    return;
  Th(n);
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
  Po.set(n, new xh(n, r));
}, Ch = { class: "custom-text-field__container" }, Dh = ["type", "data-maska", "disabled", "readonly", "placeholder", "data-maska-tokens"], Rh = ["type", "disabled", "readonly", "placeholder"], Mh = {
  key: 0,
  class: "custom-text-field__error"
}, Ih = /* @__PURE__ */ fe({
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
    xe((M) => ({
      c1a04602: f(u),
      "6895a22e": f(i)
    }));
    const r = pt(), a = I(!1), o = k({
      get() {
        return n.modelValue;
      },
      set(M) {
        n.disabled || n.readonly || t("update:model-value", M);
      }
    }), i = k(() => {
      let M = "1fr";
      return n.clearable && (M += " 1rem"), d() && (M += " 1rem"), M;
    }), u = k(() => n.clearable || d() ? "0.75rem" : 0), p = k(() => ({
      "custom-text-field__input-container": !0,
      "custom-text-field__input-container--dark": n.dark,
      "custom-text-field__input-container--outlined": n.outlined,
      "custom-text-field__input-container--disabled": n.disabled,
      "custom-text-field__input-container--error": !!n.errorMessage,
      "custom-text-field__input-container--focused": a.value || !!o.value
    })), d = () => !!r.append, y = () => {
      o.value && (o.value = "");
    }, m = (M) => {
      n.disabled || n.readonly || (a.value = !0, t("focus", M));
    }, s = (M) => {
      n.disabled || n.readonly || (a.value = !1, t("blur", M));
    }, h = (M) => {
      n.disabled || n.readonly || t("input", M);
    }, w = (M) => {
      n.disabled || n.readonly || t("keyup", M);
    }, D = (M) => {
      n.disabled || n.readonly || t("keydown", M);
    };
    return (M, V) => (v(), O("div", Ch, [
      H("div", {
        class: ie(f(p))
      }, [
        e.mask ? xt((v(), O("input", {
          key: 0,
          "onUpdate:modelValue": V[0] || (V[0] = (U) => Fe(o) ? o.value = U : null),
          type: e.type,
          "data-maska": e.mask,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "data-maska-tokens": e.maskTokens,
          class: "custom-text-field__input",
          onBlur: s,
          onFocus: m,
          onInput: h,
          onKeyup: w,
          onKeydown: D
        }, null, 40, Dh)), [
          [Zo, f(o)],
          [f(Ph)]
        ]) : xt((v(), O("input", {
          key: 1,
          "onUpdate:modelValue": V[1] || (V[1] = (U) => Fe(o) ? o.value = U : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "custom-text-field__input",
          onBlur: s,
          onFocus: m,
          onInput: h,
          onKeyup: w,
          onKeydown: D
        }, null, 40, Rh)), [
          [Zo, f(o)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (v(), O("div", {
          key: 2,
          class: "custom-text-field__button",
          onClick: y
        }, [
          f(o) ? (v(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : P("", !0)
        ])) : P("", !0),
        d() ? j(M.$slots, "append", { key: 3 }, void 0, !0) : P("", !0)
      ], 2),
      e.errorMessage ? (v(), O("div", Mh, he(e.errorMessage), 1)) : P("", !0)
    ]));
  }
});
const Go = /* @__PURE__ */ ke(Ih, [["__scopeId", "data-v-fb7b197f"]]), Nh = (e, t) => {
  const n = I(1), r = I([]), a = I("asc"), o = I(null), i = k(() => {
    const Y = e.value.slice();
    return o.value ? Y.sort((Q, R) => {
      if (!o.value)
        return 0;
      const $ = D(Q, o.value.value), B = D(R, o.value.value);
      let T = $ > B ? 1 : -1;
      return o.value.sort && (T = o.value.sort($, B)), a.value === "asc" ? T : T * -1;
    }) : Y;
  }), u = k(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), p = k(() => t.value !== null ? i.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? i.value : i.value.filter((Y, Q) => r.value[Q] === n.value)), d = k(() => a.value), y = k(() => {
    const Y = n.value;
    let Q;
    return Y === 1 ? Q = [Y, Y + 1, Y + 2] : Y === u.value ? Q = [Y - 2, Y - 1, Y] : Q = [Y - 1, Y, Y + 1], Q.filter((R) => R > 0 && R <= u.value);
  });
  function m() {
    n.value < u.value && n.value++;
  }
  function s() {
    n.value > 1 && n.value--;
  }
  function h(Y) {
    return Y.id ?? Object.values(Y)[0];
  }
  function w(Y, Q) {
    const R = Q.value;
    return `${h(Y)}.${R}`;
  }
  function D(Y, Q) {
    return Y[Q] ?? "";
  }
  function M(Y) {
    n.value = Y;
  }
  function V(Y) {
    e.value = Y;
  }
  async function U(Y, Q) {
    var R;
    Y.sortable !== !1 && (n.value = 1, ((R = o.value) == null ? void 0 : R.value) === Y.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = Y, a.value = "asc"), t.value === null && await q(Q));
  }
  function E(Y) {
    var Q;
    return ((Q = o.value) == null ? void 0 : Q.value) === Y;
  }
  async function q(Y) {
    r.value = [], await dt(), X(Y);
  }
  function X(Y) {
    const Q = [], R = Y.getBoundingClientRect(), $ = Math.floor(R.height - 52);
    let B = 1, T = 0;
    const Z = Y.rows;
    for (let ee = 0; ee < Z.length; ee++) {
      const ne = Z[ee].offsetHeight;
      T += ne, T >= $ && (T = ne, B++), Q.push(B);
    }
    r.value = [...Q];
  }
  return {
    // Computed
    pages: y,
    pageCount: u,
    sortedItems: i,
    currentPage: n,
    getSortOrder: d,
    itemsCurrentPage: p,
    // Methods
    setItems: V,
    nextPage: m,
    setSortBy: U,
    getRowKey: h,
    getCellKey: w,
    isSortedBy: E,
    getCellValue: D,
    previousPage: s,
    setCurrentPage: M,
    calculatePagination: X,
    recalculatePagination: q
  };
}, Bh = ["onMouseenter", "onMouseleave"], Ah = /* @__PURE__ */ fe({
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
    })), d = () => !!n.default, y = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await dt();
      const h = r.value.getBoundingClientRect(), w = s.target.getBoundingClientRect(), D = w.x + h.width;
      w.x < 0 ? (o.value = "0", i.value = "initial") : D >= window.innerWidth ? (o.value = "initial", i.value = "0") : w.x !== h.left ? o.value = `${w.x}px` : (o.value = "initial", i.value = "initial"), a.value = `${w.top + w.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value;
    }, m = () => {
      a.value = "", o.value = "", i.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value);
    };
    return (s, h) => (v(), O("div", {
      class: ie(f(p))
    }, [
      H("div", {
        onMouseenter: Ee(y, ["stop"]),
        onMouseleave: Ee(m, ["stop"])
      }, [
        j(s.$slots, "activator", {}, void 0, !0)
      ], 40, Bh),
      d() ? (v(), O("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        j(s.$slots, "default", {}, void 0, !0)
      ], 512)) : P("", !0)
    ], 2));
  }
});
const jr = /* @__PURE__ */ ke(Ah, [["__scopeId", "data-v-50fd21fc"]]), Eh = /* @__PURE__ */ fe({
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
    xe((y) => ({
      f72a63ea: e.containerSize,
      "0695c4d5": e.borderRadius,
      "49fc9571": f(i)
    }));
    const r = pt(), a = Je(), o = k(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), i = k(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = k(() => n.disabled ? "neutro-4" : n.color), p = () => !!r.default, d = (y) => {
      n.disabled || n.inactive || t("click", y);
    };
    return (y, m) => (v(), te(jr, { disabled: e.disabled }, We({
      activator: J(() => [
        H("div", {
          class: ie(f(o)),
          onClick: d
        }, [
          e.icon.startsWith("fm") ? (v(), te(He, {
            key: 0,
            name: e.icon,
            size: e.size,
            color: f(u)
          }, null, 8, ["name", "size", "color"])) : (v(), te(Rt, {
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
          j(y.$slots, "default", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Co = /* @__PURE__ */ ke(Eh, [["__scopeId", "data-v-35d7f4fd"]]), Yh = { class: "data-table__container" }, Vh = ["onClick"], Uh = { class: "data-table__header-text" }, Fh = {
  key: 0,
  class: "data-table__row--empty"
}, Wh = ["onClick"], Hh = {
  key: 0,
  class: "data-table__footer"
}, Lh = { class: "data-table__footer-buttons" }, zh = ["onClick"], jh = /* @__PURE__ */ fe({
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
    xe((c) => ({
      "732f1607": e.height,
      "3eaf56cb": e.maxHeight,
      "4418edf5": e.backgroundColor,
      "07f924fd": e.gridTemplateColumns
    }));
    const r = k(() => n.items), a = k(() => n.itemsPerPage), o = pt(), {
      pages: i,
      pageCount: u,
      currentPage: p,
      getSortOrder: d,
      itemsCurrentPage: y,
      nextPage: m,
      setSortBy: s,
      getRowKey: h,
      isSortedBy: w,
      getCellKey: D,
      getCellValue: M,
      previousPage: V,
      setCurrentPage: U,
      calculatePagination: E,
      recalculatePagination: q
    } = Nh(r, a);
    Ke(() => {
      !X.value || R.value || E(X.value);
    });
    const X = I(null), Y = k(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), Q = k(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    })), R = k(() => n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null);
    function $(c) {
      return !!o[c];
    }
    function B(c) {
      return w(c) ? d.value === "asc" ? "fm-arrow-down" : "fm-arrow-up" : "fm-arrow-down";
    }
    function T(c) {
      return {
        "data-table__footer-page": !0,
        "data-table__footer-page--selected": c === p.value
      };
    }
    function Z(c) {
      return {
        "data-table__sort-icon": !0,
        "data-table__sort-icon--active": w(c)
      };
    }
    function ee(c) {
      return {
        "data-table__th": !0,
        "data-table__th--sortable": c.sortable !== !1
      };
    }
    function ne(c) {
      return {
        "data-table__row": !0,
        "data-table__row--sticky-last": n.stickyLastColumn,
        "data-table__row--sticky-first": n.stickyFirstColumn,
        "data-table__row--selected": c[n.compareSelectedWith] === n.selected,
        "data-table__row--disabled": n.disabledKey && n.disabledValue && c[n.disabledKey] === n.disabledValue
      };
    }
    function z(c) {
      return w(c) ? "acento-secundario" : "neutro-3";
    }
    function C(c) {
      X.value && s(c, X.value);
    }
    function l(c) {
      t("click:row", c);
    }
    return it(
      () => n.items,
      async () => {
        !X.value || R.value || await q(X.value);
      }
    ), (c, S) => (v(), O("div", Yh, [
      H("table", {
        class: ie(f(Q)),
        "aria-describedby": "Reutility"
      }, [
        H("thead", {
          class: ie(f(Y))
        }, [
          H("tr", null, [
            (v(!0), O(ye, null, Te(e.headers, (b) => (v(), O("th", {
              key: b.value,
              class: ie(ee(b)),
              onClick: (N) => C(b)
            }, [
              H("div", Uh, [
                $(`header.${b.value}`) ? j(c.$slots, `header.${b.value}`, {
                  key: 0,
                  headerText: b.text
                }, void 0, !0) : (v(), O(ye, { key: 1 }, [
                  Ae(he(b.text), 1)
                ], 64))
              ]),
              b.sortable !== !1 ? (v(), O("div", {
                key: 0,
                class: ie(Z(b.value))
              }, [
                ge(He, {
                  name: B(b.value),
                  color: z(b.value)
                }, null, 8, ["name", "color"])
              ], 2)) : P("", !0)
            ], 10, Vh))), 128))
          ])
        ], 2),
        H("tbody", {
          ref_key: "tableBodyRef",
          ref: X,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (v(), O("tr", Fh, [
            $("no-data") ? P("", !0) : (v(), O(ye, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (v(), te(He, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? P("", !0) : (v(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ae(" " + he(e.noDataText), 1)
            ], 64)),
            j(c.$slots, "no-data", {}, void 0, !0)
          ])) : P("", !0),
          (v(!0), O(ye, null, Te(f(y), (b) => (v(), O("tr", {
            key: f(h)(b),
            class: ie(ne(b)),
            onClick: (N) => l(b)
          }, [
            (v(!0), O(ye, null, Te(e.headers, (N) => (v(), O("td", {
              key: f(D)(b, N)
            }, [
              $(N.value) ? j(c.$slots, N.value, {
                key: 0,
                item: b
              }, void 0, !0) : (v(), O(ye, { key: 1 }, [
                Ae(he(f(M)(b, N.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, Wh))), 128))
        ], 512)
      ], 2),
      f(u) > 1 ? (v(), O("div", Hh, [
        ge(Co, {
          size: "1rem",
          icon: "fm-arrow-left",
          color: "acento-principal",
          disabled: f(p) === 1,
          onClick: f(V)
        }, null, 8, ["disabled", "onClick"]),
        H("div", Lh, [
          (v(!0), O(ye, null, Te(f(i), (b) => (v(), O("button", {
            key: `page-${b}`,
            class: ie(T(b)),
            onClick: (N) => f(U)(b)
          }, he(b), 11, zh))), 128))
        ]),
        ge(Co, {
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
const qh = /* @__PURE__ */ ke(jh, [["__scopeId", "data-v-a1f0ed3d"]]), Gh = /* @__PURE__ */ fe({
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
    return (a, o) => (v(), te(Tt, {
      "font-size": "1rem",
      color: f(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": f(r),
      "text-transform": e.textTransform
    }, {
      default: J(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), Qh = { class: "filter-date-picker__container" }, Zh = { class: "filter-date-picker__label" }, Xh = /* @__PURE__ */ fe({
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
    return (a, o) => (v(), O("div", Qh, [
      H("div", Zh, he(e.label), 1),
      ge(jo, {
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
const Kh = /* @__PURE__ */ ke(Xh, [["__scopeId", "data-v-4d3bdb3f"]]), Jh = { class: "filter-select__container" }, eg = { class: "filter-select__label" }, tg = /* @__PURE__ */ fe({
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
    return (o, i) => (v(), O("div", Jh, [
      H("div", eg, he(e.label), 1),
      ge(qo, {
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
            j(o.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform"])
    ]));
  }
});
const ng = /* @__PURE__ */ ke(tg, [["__scopeId", "data-v-e667d313"]]), rg = { class: "flex__container" }, ag = /* @__PURE__ */ fe({
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
      "59751ba7": e.width,
      78995826: e.margin,
      89414134: e.height,
      "50a335b2": e.padding,
      c7b0db0c: e.alignItems,
      "29bdce9a": e.alignContent,
      "7c44ebe2": e.justifyItems,
      a500e732: e.flexDirection,
      "7b377f08": e.justifyContent
    })), (t, n) => (v(), O("div", rg, [
      j(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const yu = /* @__PURE__ */ ke(ag, [["__scopeId", "data-v-4706ceca"]]), og = { class: "form-date-picker__container" }, ig = { class: "form-date-picker__label" }, lg = /* @__PURE__ */ fe({
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
      "0e7787b6": e.gridTemplateColumns,
      dfcc6cf2: f(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, i) => (v(), O("div", og, [
      H("div", ig, he(e.label), 1),
      ge(jo, {
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
const ug = /* @__PURE__ */ ke(lg, [["__scopeId", "data-v-e3f90221"]]), sg = { class: "form-select__container" }, cg = { class: "form-select__label" }, fg = /* @__PURE__ */ fe({
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
      "2fcd44d0": e.gridTemplateColumns,
      "0563447c": f(o)
    }));
    const r = pt(), a = k({
      get() {
        return n.modelValue;
      },
      set(i) {
        t("update:model-value", i);
      }
    }), o = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (i, u) => (v(), O("div", sg, [
      H("div", cg, he(e.label), 1),
      ge(qo, {
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
            j(i.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform"])
    ]));
  }
});
const dg = /* @__PURE__ */ ke(fg, [["__scopeId", "data-v-a76ba798"]]), pg = { class: "form-text-field__container" }, mg = { class: "form-text-field__label" }, yg = /* @__PURE__ */ fe({
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
      "3f6ca2c4": e.gridTemplateColumns,
      "1c87faee": f(o)
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
    }, y = (s) => {
      t("keyup", s);
    }, m = (s) => {
      t("keydown", s);
    };
    return (s, h) => (v(), O("div", pg, [
      H("div", mg, he(e.label), 1),
      ge(Go, {
        modelValue: f(a),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => Fe(a) ? a.value = w : null),
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
        onKeyup: y,
        onFocus: u,
        onKeydown: m
      }, We({ _: 2 }, [
        i() ? {
          name: "append",
          fn: J(() => [
            j(s.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const vg = /* @__PURE__ */ ke(yg, [["__scopeId", "data-v-8806e5e8"]]), hg = { class: "header-tabs__container" }, gg = ["onClick"], bg = /* @__PURE__ */ fe({
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
      "23c11578": e.columnGap,
      "1d8cf5db": f(o),
      "3f1506a2": f(i)
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
    return (d, y) => (v(), O("div", hg, [
      (v(!0), O(ye, null, Te(e.items, (m, s) => (v(), O("button", {
        key: `tab-${s}`,
        class: ie(u(s)),
        onClick: (h) => p(s)
      }, he(m), 11, gg))), 128))
    ]));
  }
});
const _g = /* @__PURE__ */ ke(bg, [["__scopeId", "data-v-bc4f98ee"]]), wg = ["alt", "src"], kg = /* @__PURE__ */ fe({
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
      "4b1fc71c": e.width,
      "01ebbade": e.height,
      "43df32a8": e.objectFit,
      "577c0369": e.aspectRatio,
      "066055c8": e.borderRadius,
      "10f878f2": e.objectPosition
    }));
    const r = k(() => new URL(n.src, import.meta.url).href), a = k(() => ({
      image__container: !0,
      "image__container--clickable": n.clickable
    })), o = (i) => {
      t("click", i);
    };
    return (i, u) => (v(), O("img", {
      alt: e.alt,
      src: f(r),
      class: ie(f(a)),
      onClick: o
    }, null, 10, wg));
  }
});
const Sg = /* @__PURE__ */ ke(kg, [["__scopeId", "data-v-2d0c5d22"]]), $g = { class: "information-text__container" }, Og = { class: "information-text__label" }, xg = { class: "information-text__value" }, Tg = /* @__PURE__ */ fe({
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
      "29358aff": e.padding,
      "69b917cb": e.gridTemplateColumns,
      "34bead2d": e.textTransform
    })), (t, n) => (v(), O("div", $g, [
      H("div", Og, he(e.label), 1),
      H("div", xg, [
        j(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const Pg = /* @__PURE__ */ ke(Tg, [["__scopeId", "data-v-75c5c153"]]), Cg = {
  key: 0,
  class: "page-switch__label"
}, Dg = { class: "page-switch__switch" }, Rg = /* @__PURE__ */ fe({
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
      "5b5105e1": e.justifyContent,
      adc51118: e.labelWeight,
      "051666a4": e.width,
      "34b9234d": f(u)
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
    })), y = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (m, s) => (v(), te(jr, { disabled: e.disabled }, We({
      activator: J(() => [
        H("div", {
          class: ie(f(d)),
          onClick: y
        }, [
          e.label ? (v(), O("div", Cg, he(e.label), 1)) : P("", !0),
          H("div", Dg, [
            xt(H("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (h) => Fe(a) ? a.value = h : null),
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
const Mg = /* @__PURE__ */ ke(Rg, [["__scopeId", "data-v-a322991a"]]), Ig = /* @__PURE__ */ fe({
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
      "1ef6cbe8": f(o),
      befa93fe: e.iconSize
    }));
    const r = Je(), a = k(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = k(() => r.getRealColor(n.backgroundColor)), i = () => {
      t("click:close");
    };
    return (u, p) => (v(), O("div", {
      class: ie(f(a))
    }, [
      ge(Tt, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: J(() => [
          j(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color", "predefined-style"]),
      e.closable ? (v(), O("div", {
        key: 0,
        class: "panel-title__close",
        onClick: i
      }, [
        ge(He, {
          color: "error",
          size: e.iconSize,
          name: "fm-circle-close"
        }, null, 8, ["size"])
      ])) : P("", !0)
    ], 2));
  }
});
const Ng = /* @__PURE__ */ ke(Ig, [["__scopeId", "data-v-e0769a10"]]), Bg = /* @__PURE__ */ fe({
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
    return (a, o) => (v(), te(Go, {
      modelValue: f(r),
      "onUpdate:modelValue": o[0] || (o[0] = (i) => Fe(r) ? r.value = i : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: J(() => [
        ge(He, {
          size: "1rem",
          name: "fm-magnify-glass",
          color: "acento-principal"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder"]));
  }
}), Ag = /* @__PURE__ */ fe({
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
      a073eb70: e.width
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return it(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), it(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (v(), te(Ro, {
      persistent: "",
      "model-value": f(r)
    }, {
      default: J(() => [
        f(r) ? (v(), te(Hr, {
          key: 0,
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: J(() => [
            ge(yu, { "justify-content": "center" }, {
              default: J(() => [
                e.icon.startsWith("fm") ? (v(), te(He, {
                  key: 0,
                  size: "5rem",
                  name: e.icon,
                  color: e.iconColor
                }, null, 8, ["name", "color"])) : (v(), te(Rt, {
                  key: 1,
                  size: "5rem",
                  src: e.icon,
                  color: e.iconColor
                }, null, 8, ["src", "color"]))
              ]),
              _: 1
            }),
            ge(Tt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: J(() => [
                Ae(he(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(Tt, {
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
const Eg = /* @__PURE__ */ ke(Ag, [["__scopeId", "data-v-946512d1"]]);
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
    let d = 0, y = 0;
    const m = u, s = u - p;
    return u === p ? d = 0 : u === a && o >= i ? d = 60 * ((o - i) / s) : u === a && o < i ? d = 60 * ((o - i) / s) + 360 : u === o ? d = 60 * ((i - a) / s) + 120 : u === i && (d = 60 * ((a - o) / s) + 240), u > 0 && (y = 1 - p / u), [Math.round(d), Math.round(y * 100) / 100, Math.round(m * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, i = r * (1 - n), u = r * (1 - o * n), p = r * (1 - (1 - o) * n);
    let d = 0, y = 0, m = 0;
    switch (a) {
      case 0:
        d = r, y = p, m = i;
        break;
      case 1:
        d = u, y = r, m = i;
        break;
      case 2:
        d = i, y = r, m = p;
        break;
      case 3:
        d = i, y = u, m = r;
        break;
      case 4:
        d = p, y = i, m = r;
        break;
      case 5:
        d = r, y = i, m = u;
        break;
    }
    return [Math.round(d * 255), Math.round(y * 255), Math.round(m * 255)];
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
const Qo = (e) => (Ou("data-v-851bc20e"), e = e(), xu(), e), Yg = ["onMousedown"], Vg = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("div", { class: "color-picker__canvas-thumb" }, null, -1)), Ug = [
  Vg
], Fg = ["onMousedown"], Wg = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("div", { class: "color-picker__hue-thumb" }, null, -1)), Hg = [
  Wg
], Lg = { class: "color-picker__hex-input-container" }, zg = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("span", { class: "color-picker__hex-hash" }, " # ", -1)), jg = { class: "color-picker__colors" }, qg = ["onClick"], Gg = /* @__PURE__ */ fe({
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
    xe((z) => ({
      "44519b14": f(D),
      "21503e0b": f(V),
      d11f3254: f(M),
      "40a1b156": p.value,
      "67f5cab4": i.value
    }));
    const { getRealColor: r } = Je(), a = I(!1), o = I(!1), i = I("translateX(0)"), u = I(null), p = I("translate(0, 0"), d = I(null), y = Ct(kt.fromHex(n.modelValue)), m = Ct({
      left: 0,
      width: 0
    }), s = Ct({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    Ke(() => {
      E();
    });
    const h = k({
      get() {
        return n.modelValue;
      },
      set(z) {
        t("update:model-value", z);
      }
    }), w = k(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), D = k(() => r(n.background)), M = k(() => `rgb(${y.rgb.join(",")})`), V = k(() => `hsl(${y.hue}, 100%, 50%)`), U = k({
      get() {
        return y.hex.slice(1);
      },
      set(z) {
        y.setFromHex(z), E();
      }
    });
    function E() {
      if (!d.value || !u.value)
        return;
      const z = u.value.getBoundingClientRect(), C = y.hue / 360 * z.width;
      i.value = `translateX(${C}px)`;
      const l = d.value.getBoundingClientRect(), c = y.saturation * l.width, S = (1 - y.value) * l.height;
      p.value = `translate(${c}px, ${S}px)`, h.value = y.hex;
    }
    function q(z) {
      const C = Math.min(m.width, Math.max(0, z.clientX - m.left));
      y.hue = C / m.width * 360, i.value = `translateX(${C}px)`, h.value = y.hex;
    }
    function X(z) {
      if (!d.value)
        return;
      const C = d.value.getBoundingClientRect(), l = Math.min(C.width, Math.max(0, z.clientX - C.left)), c = Math.min(C.height, Math.max(0, z.clientY - C.top));
      y.saturation = l / C.width, y.value = 1 - c / C.height, p.value = `translate(${l}px, ${c}px)`, h.value = y.hex;
    }
    function Y(z) {
      if (!d.value)
        return;
      const C = d.value.getBoundingClientRect();
      s.top = C.top, s.left = C.left, s.width = C.width, s.height = C.height, o.value = !0, X(z), B();
    }
    function Q(z) {
      if (!u.value)
        return;
      const C = u.value.getBoundingClientRect();
      m.left = C.left, m.width = C.width, a.value = !0, q(z), B();
    }
    function R(z) {
      a.value ? q(z) : o.value && X(z);
    }
    function $() {
      a.value = !1, T();
    }
    function B() {
      document.addEventListener("mouseup", $), document.addEventListener("mousemove", R);
    }
    function T() {
      document.removeEventListener("mouseup", $), document.removeEventListener("mousemove", R);
    }
    function Z(z) {
      const C = ["v", "c"];
      z.ctrlKey && C.includes(z.key) || z.preventDefault();
    }
    function ee(z) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": h.value === z
      };
    }
    function ne(z) {
      U.value = z, h.value = z;
    }
    return (z, C) => (v(), O("div", {
      class: ie(f(w))
    }, [
      H("div", {
        ref_key: "canvasRef",
        ref: d,
        class: "color-picker__canvas",
        onMousedown: Ee(Y, ["stop", "prevent"])
      }, Ug, 40, Yg),
      H("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: Ee(Q, ["stop", "prevent"])
      }, Hg, 40, Fg),
      H("div", Lg, [
        zg,
        xt(H("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (l) => Fe(U) ? U.value = l : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Ml, f(U)]
        ])
      ]),
      H("div", jg, [
        (v(!0), O(ye, null, Te(e.pickableColors, (l, c) => (v(), O("div", {
          key: `pickable-color-${c}`,
          style: St(`--color: ${l}`),
          class: ie(ee(l)),
          onClick: (S) => ne(l)
        }, null, 14, qg))), 128))
      ])
    ], 2));
  }
});
const vu = /* @__PURE__ */ ke(Gg, [["__scopeId", "data-v-851bc20e"]]), Qg = { class: "form-color-picker__label" }, Zg = /* @__PURE__ */ fe({
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
    xe((M) => ({
      dd83820e: e.gridTemplateColumns,
      b764ef9a: f(D),
      cb454576: f(y),
      "4c14fa71": r.value,
      "36868a6b": a.value
    }));
    const r = I(""), a = I(""), o = I(""), i = I(!1), u = I(!1), p = I(null), d = I(null), y = k({
      get() {
        return n.modelValue;
      },
      set(M) {
        t("update:model-value", M);
      }
    }), m = async () => {
      await dt();
      const M = p.value, V = d.value;
      if (!M || !V)
        return;
      const U = M.getBoundingClientRect(), E = V.getBoundingClientRect();
      a.value = `${U.left}px`, o.value = `${U.width}px`;
      const q = U.top + U.height + E.height, X = window.innerHeight, Y = U.top + U.height;
      if (q > X) {
        const Q = q - X;
        r.value = `${Y - Q - 16}px`;
      } else
        r.value = `${Y}px`;
    }, s = () => {
      n.disabled || n.readonly || i.value || (i.value = !0, m(), u.value = !0, document.addEventListener("click", h));
    }, h = (M) => {
      !p.value || !M.target || p.value.contains(M.target) || w();
    }, w = () => {
      i.value = !1, u.value = !1, document.removeEventListener("click", h);
    }, D = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (M, V) => (v(), O("div", {
      ref_key: "container",
      ref: p,
      class: "form-color-picker__container"
    }, [
      H("div", Qg, he(e.label), 1),
      H("div", {
        class: "form-color-picker__input",
        onClick: s
      }),
      ge(bt, null, {
        default: J(() => [
          i.value ? (v(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "form-color-picker__menu"
          }, [
            ge(vu, {
              modelValue: f(y),
              "onUpdate:modelValue": V[0] || (V[0] = (U) => Fe(y) ? y.value = U : null),
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
const Xg = /* @__PURE__ */ ke(Zg, [["__scopeId", "data-v-7110e29a"]]), Kg = ["onMousedown"], Jg = /* @__PURE__ */ fe({
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
    xe((w) => ({
      "26fcb3e4": n.value,
      b8a15b24: r.value
    })), Ke(() => {
      t.default === !0 && y();
    });
    const n = I(""), r = I(""), a = I(""), o = I(!1), i = I(!1), u = I(null), p = I(null), d = async () => {
      n.value = "", r.value = "", await dt();
      const w = u.value, D = p.value;
      if (!w || !D)
        return;
      const M = w.getBoundingClientRect(), V = D.getBoundingClientRect(), U = t.nudgeLeft - t.nudgeRight, E = t.nudgeTop - t.nudgeBottom, q = M.left + U;
      r.value = `${q}px`, a.value = `${M.width}px`;
      const X = M.top + M.height + V.height, Y = window.innerHeight, Q = M.top + M.height + E;
      if (X > Y) {
        const B = X - Y;
        n.value = `${Q - B - 16}px`;
      } else
        n.value = `${Q}px`;
      const R = V.right, $ = window.innerWidth;
      if (R > $) {
        const B = R - $;
        r.value = `${q - B}px`;
      }
    }, y = () => {
      t.disabled && !t.default || (o.value = !0, d(), !t.disabled && (i.value = !0, document.addEventListener("click", s)));
    }, m = () => {
      t.disabled || (o.value = !1, i.value = !1, document.removeEventListener("click", s));
    }, s = (w) => {
      !u.value || !w.target || u.value.contains(w.target) || m();
    }, h = () => {
      t.disabled || (o.value ? m() : y());
    };
    return (w, D) => (v(), O("div", {
      ref_key: "container",
      ref: u,
      class: "custom-menu__container"
    }, [
      H("div", {
        onMousedown: Ee(h, ["stop"])
      }, [
        j(w.$slots, "activator", {}, void 0, !0)
      ], 40, Kg),
      ge(bt, null, {
        default: J(() => [
          o.value ? (v(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: p,
            class: "custom-menu__menu"
          }, [
            j(w.$slots, "default", { close: m }, void 0, !0)
          ], 512)) : P("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const e0 = /* @__PURE__ */ ke(Jg, [["__scopeId", "data-v-de3c3a3e"]]), t0 = { class: "expansion-panel__content" }, n0 = /* @__PURE__ */ fe({
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
    xe((y) => ({
      "38b8b2fd": e.boxShadow,
      "089aa26c": e.borderRadius,
      "06bcc5e2": f(p),
      "5465fe17": e.transitionDuration,
      "02dce085": e.transitionTimingFunction
    }));
    const r = Je(), a = I(!1), o = k({
      get() {
        return n.modelValue === void 0 ? a.value : n.modelValue;
      },
      set(y) {
        a.value = y, t("update:model-value", y);
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
    return (y, m) => (v(), O("div", {
      class: ie(f(i))
    }, [
      H("div", {
        class: "expansion-panel__activator",
        onClick: d
      }, [
        j(y.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      H("div", {
        class: ie(f(u))
      }, [
        H("div", t0, [
          j(y.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
});
const r0 = /* @__PURE__ */ ke(n0, [["__scopeId", "data-v-d630979d"]]), a0 = { class: "grid__container" }, o0 = /* @__PURE__ */ fe({
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
      "59a767b6": e.height,
      "61fb5c3d": e.margin,
      "6b4aad2b": e.rowGap,
      "7b5c3762": e.padding,
      a6b6ec48: e.boxShadow,
      "006ee6b1": e.columnGap,
      "4b92f2ca": e.alignItems,
      "2b0729a6": e.borderRadius,
      "6d35a503": e.alignContent,
      "43f2165f": e.justifyItems,
      "76d29c32": e.gridAutoFlow,
      "6b4b9150": e.justifyContent,
      a37568b0: e.gridTemplateRows,
      a859d660: f(r),
      "102d70a4": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), O("div", a0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const i0 = /* @__PURE__ */ ke(o0, [["__scopeId", "data-v-546aaa6e"]]), l0 = { class: "absolute__container" }, u0 = /* @__PURE__ */ fe({
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
      "757d0361": e.top,
      "3a1f9f7b": e.left,
      "0a2ab128": e.right,
      "0a711cd2": e.width,
      "20388c9f": e.bottom,
      32377822: e.margin,
      "29e3839b": e.height,
      "471266ec": e.zIndex,
      "9ab8cfc6": e.padding,
      d96c4d14: e.overflow,
      "420af478": e.transform,
      "2f96a7d7": e.boxShadow,
      "37eb4752": e.borderRadius,
      "2eec0816": f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), O("div", l0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const s0 = /* @__PURE__ */ ke(u0, [["__scopeId", "data-v-b5f56ae6"]]), c0 = { class: "relative__container" }, f0 = /* @__PURE__ */ fe({
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
      "66ca137e": e.width,
      "956e66da": e.margin,
      a6164fe8: e.height,
      dc865c68: e.padding,
      d15054b2: e.overflow,
      a56f9c74: e.boxShadow,
      "4f4dc303": e.borderRadius,
      "3adb92b4": f(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), O("div", c0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const d0 = /* @__PURE__ */ ke(f0, [["__scopeId", "data-v-c8285f36"]]), p0 = /* @__PURE__ */ fe({
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
    return (r, a) => (v(), te(Hr, null, {
      default: J(() => [
        ge(jr, null, We({
          activator: J(() => [
            ge(Tt, {
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
              j(r.$slots, "default")
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.opened ? (v(!0), O(ye, { key: 0 }, Te(e.items, (o, i) => (v(), O(ye, {
          key: `item-${i.toString()}`
        }, [
          n("value") ? j(r.$slots, "value", {
            key: 0,
            value: o
          }) : (v(), te(Tt, {
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
}), m0 = /* @__PURE__ */ fe({
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
      "072260b7": e.width,
      "794a8754": e.height,
      c5747066: e.borderRadius,
      "290800a0": f(o),
      f76d0492: e.objectPosition,
      b914f27a: e.objectFit
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
      var y;
      if (!r.value)
        return;
      const d = (y = r.value.files) == null ? void 0 : y[0];
      d && (a.value = d, r.value.value = "");
    }
    return (d, y) => (v(), O("div", {
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
        ge(He, {
          name: "fm-image",
          size: e.iconSize,
          color: "neutro-4"
        }, null, 8, ["size"])
      ])
    ], 2));
  }
});
const y0 = /* @__PURE__ */ ke(m0, [["__scopeId", "data-v-6bd971ca"]]), g0 = (e) => {
  Nl().generateOverlayContainer(), e.component("AbsoluteContainer", s0), e.component("RelativeContainer", d0), e.component("CheckBox", Bl), e.component("ConfirmationDialog", Ku), e.component("CustomButton", pa), e.component("CustomDatePicker", jo), e.component("CustomDialog", Ro), e.component("CustomSelect", qo), e.component("CustomTextField", Go), e.component("DataTable", qh), e.component("DataTableItem", Gh), e.component("FilterDatePicker", Kh), e.component("FilterSelect", ng), e.component("FlexContainer", yu), e.component("FormDatePicker", ug), e.component("FormSelect", dg), e.component("FormTextField", vg), e.component("GridColumn", Hr), e.component("GridRow", Al), e.component("HeaderTabs", _g), e.component("IconButton", Co), e.component("ImageContainer", Sg), e.component("InformationText", Pg), e.component("PageSwitch", Mg), e.component("PanelTitle", Ng), e.component("SearchTextField", Bg), e.component("SuccessDialog", Eg), e.component("SvgIcon", Rt), e.component("TextContainer", Tt), e.component("FormColorPicker", Xg), e.component("ColorPicker", vu), e.component("CustomMenu", e0), e.component("FigmaIcon", He), e.component("ExpansionPanel", r0), e.component("GridContainer", i0), e.component("CustomTooltip", jr), e.component("ExpandableDataTableItem", p0), e.component("ImageInput", y0);
};
export {
  g0 as componentesReutility
};
