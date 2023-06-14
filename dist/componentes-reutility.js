var gu = Object.defineProperty;
var bu = (e, t, n) => t in e ? gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cn = (e, t, n) => (bu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as I, defineComponent as fe, useCssVars as xe, unref as c, onMounted as Xe, computed as k, watch as ut, openBlock as y, createElementBlock as O, createElementVNode as H, normalizeClass as ie, createVNode as be, Transition as yt, withCtx as X, createBlock as te, createCommentVNode as T, renderSlot as q, Fragment as ye, withKeys as ge, useSlots as pt, isRef as Fe, createTextVNode as Ae, toDisplayString as he, reactive as Ct, toRef as tr, onUnmounted as Do, mergeProps as je, createSlots as We, renderList as Te, normalizeProps as Qe, guardReactiveProps as mt, resolveDynamicComponent as Rl, Teleport as _u, withModifiers as Ee, normalizeStyle as St, nextTick as dt, withDirectives as xt, vShow as pn, onBeforeUpdate as wu, getCurrentScope as ku, onScopeDispose as Su, vModelText as Ml, vModelDynamic as Zo, vModelCheckbox as $u, pushScopeId as Ou, popScopeId as xu } from "vue";
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
      "6c3a208c": c(a)
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
    return ut(() => t.src, o), ut(() => t.size, o), (i, u) => (y(), O("div", {
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
      "90a78d3e": c(a)
    }));
    const n = Je(), r = k(() => `icon-${t.name}`), a = k(() => n.getRealColor(t.color));
    return (o, i) => (y(), O("div", Cu, [
      H("em", {
        class: ie(c(r))
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
    return (p, f) => (y(), O("div", {
      class: ie(c(a)),
      onClick: u
    }, [
      be(yt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: X(() => [
          c(r) ? (y(), O("div", Ru, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (y(), te(He, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(i)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (y(), te(Rt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(i)
            }, null, 8, ["src", "size", "color"])) : T("", !0)
          ])) : T("", !0)
        ]),
        _: 1
      }),
      e.boxIcon && e.boxIcon.startsWith("fm") ? (y(), te(He, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: c(o)
      }, null, 8, ["name", "size", "color"])) : e.boxIcon ? (y(), te(Rt, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: c(o)
      }, null, 8, ["src", "size", "color"])) : T("", !0)
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
      "03f8bbde": c(r),
      "240b86e0": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", Mu, [
      q(a.$slots, "default", {}, void 0, !0)
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
      "4eafba73": c(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", Nu, [
      q(a.$slots, "default", {}, void 0, !0)
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
        fill: c(r)
      }, Vu, 8, Eu),
      H("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: c(r)
      }, Wu, 8, Uu),
      H("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: c(r)
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
      "13ff2940": e.width,
      "9f83f266": e.height,
      "667788a6": c(i),
      dcf66f94: e.justifyItems,
      "97e6f14e": c(o),
      "03f06122": e.justifyContent,
      "7696b7ee": c(v),
      "8c978302": c(p),
      "61f3b7ae": c(u)
    }));
    const r = Je(), a = k(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = k(() => r.getRealColor(n.color)), i = k(() => r.getRealColor(n.contentColor)), u = k(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), p = k(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), f = k(() => ({
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
    return (s, b) => (y(), O("button", {
      disabled: e.disabled,
      class: ie(c(f)),
      onClick: m
    }, [
      e.preppendIcon && !e.loading ? (y(), O(ye, { key: 0 }, [
        e.preppendIcon && e.preppendIcon.startsWith("fm") ? (y(), te(He, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"])) : (y(), te(Rt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : T("", !0),
      H("span", Gu, [
        e.loading ? (y(), te(ju, {
          key: 0,
          fill: c(a)
        }, null, 8, ["fill"])) : q(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (y(), O(ye, { key: 1 }, [
        e.appendIcon && e.appendIcon.startsWith("fm") ? (y(), te(He, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"])) : (y(), te(Rt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.appendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : T("", !0)
    ], 10, qu));
  }
});
const pa = /* @__PURE__ */ ke(Qu, [["__scopeId", "data-v-27ee1a61"]]), Zu = ["onKeydown"], Ku = /* @__PURE__ */ fe({
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
    }, f = () => {
      a.value && a.value.focus();
    }, v = (m) => {
      m.currentTarget === m.target && (n.persistent ? r.value = !0 : o.value = !1);
    };
    return (m, s) => (y(), te(yt, { name: "fade" }, {
      default: X(() => [
        c(o) ? (y(), O("div", {
          key: 0,
          ref_key: "container",
          ref: a,
          tabindex: "-1",
          class: ie(c(i)),
          onKeyup: p,
          onMouseover: f,
          onMouseup: p,
          onKeydown: ge(u, ["esc"]),
          onMousedown: v
        }, [
          q(m.$slots, "default", {}, void 0, !0)
        ], 42, Zu)) : T("", !0)
      ]),
      _: 3
    }));
  }
});
const Ro = /* @__PURE__ */ ke(Ku, [["__scopeId", "data-v-5fe79967"]]), Xu = /* @__PURE__ */ fe({
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
      "2756fecd": c(u),
      "59f3098a": e.fontSize,
      "0162407e": e.textAlign,
      "861bdf56": e.lineHeight,
      a02ba47e: e.fontWeight,
      "2b21df12": e.whiteSpace,
      "02998778": e.borderRadius,
      "117768e3": e.letterSpacing,
      "3a789f36": e.textTransform,
      "9ebf9596": c(p),
      37143686: c(v),
      "0b5c4ef3": c(f),
      "1f388388": c(m)
    }));
    const r = pt(), a = Je();
    Xe(() => {
      s(n.specialText);
    });
    const o = I(null), i = k(() => {
      const w = ["text__container"];
      return n.clickable && w.push("text__container--clickable"), w.push(`text__container--${n.predefinedStyle}`), w;
    }), u = k(() => a.getRealColor(n.color)), p = k(() => a.getRealColor(n.hoverColor)), f = k(() => a.getRealColor(n.activeColor)), v = k(() => a.getRealColor(n.hoverBackground)), m = k(() => a.getRealColor(n.activeBackground)), s = (w) => {
      if (!w || !o.value || r.default)
        return;
      const D = /\*([^*]+)\*/g;
      o.value.innerHTML = w.replace(D, (R) => `<b>${R.slice(1, R.length - 1)}</b>`);
    }, b = (w) => {
      t("click", w);
    };
    return ut(() => n.specialText, s), (w, D) => (y(), O("div", {
      ref_key: "container",
      ref: o,
      class: ie(c(i)),
      onClick: b
    }, [
      q(w.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Tt = /* @__PURE__ */ ke(Xu, [["__scopeId", "data-v-ae760012"]]), Ju = /* @__PURE__ */ fe({
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
      modelValue: c(r),
      "onUpdate:modelValue": u[0] || (u[0] = (p) => Fe(r) ? r.value = p : null),
      persistent: ""
    }, {
      default: X(() => [
        be(Hr, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: X(() => [
            be(Tt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: X(() => [
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
              default: X(() => [
                Ae(he(e.subtitle), 1)
              ]),
              _: 1
            })) : T("", !0),
            be(Al, { "column-gap": "0.75rem" }, {
              default: X(() => [
                be(pa, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: X(() => [
                    Ae(" Sí ")
                  ]),
                  _: 1
                }),
                be(pa, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: X(() => [
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
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, f = de(e), v = r || n ? gt(f, r + n * 12) : f, m = o || a ? Dt(v, o + a * 7) : v, s = u + i * 60, b = p + s * 60, w = b * 1e3, D = new Date(m.getTime() + w);
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
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), b = s.getDay(), w = (b < m ? 7 : 0) + b - m;
  return s.setDate(s.getDate() - w), s.setHours(0, 0, 0, 0), s;
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
  var f = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (f < 1 || isNaN(f))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; p.getTime() <= i; )
    u.push(de(p)), p.setDate(p.getDate() + f), p.setHours(0, 0, 0, 0);
  return u;
}
function ls(e, t) {
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), b = s.getDay(), w = (b < m ? -7 : 0) + 6 - (b - m);
  return s.setDate(s.getDate() + w), s.setHours(23, 59, 59, 999), s;
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
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : v.weekStartsOn) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), b = s.getUTCDay(), w = (b < m ? 7 : 0) + b - m;
  return s.setUTCDate(s.getUTCDate() - w), s.setUTCHours(0, 0, 0, 0), s;
}
function No(e, t) {
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = de(e), m = v.getUTCFullYear(), s = _t(), b = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(b >= 1 && b <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(m + 1, 0, b), w.setUTCHours(0, 0, 0, 0);
  var D = Ft(w, t), R = /* @__PURE__ */ new Date(0);
  R.setUTCFullYear(m, 0, b), R.setUTCHours(0, 0, 0, 0);
  var Y = Ft(R, t);
  return v.getTime() >= D.getTime() ? m + 1 : v.getTime() >= Y.getTime() ? m : m - 1;
}
function ds(e, t) {
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = No(e, t), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(s, 0, m), b.setUTCHours(0, 0, 0, 0);
  var w = Ft(b, t);
  return w;
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
    var f = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[f];
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
    }), f;
    f = e.valueCallback ? e.valueCallback(p) : p, f = n.valueCallback ? n.valueCallback(f) : f;
    var v = t.slice(i.length);
    return {
      value: f,
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
  var r, a, o, i, u, p, f, v, m, s, b, w, D, R, Y, V, A, L;
  ne(2, arguments);
  var U = String(t), G = _t(), J = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : G.locale) !== null && r !== void 0 ? r : ql, N = ce((o = (i = (u = (p = n == null ? void 0 : n.firstWeekContainsDate) !== null && p !== void 0 ? p : n == null || (f = n.locale) === null || f === void 0 || (v = f.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && u !== void 0 ? u : G.firstWeekContainsDate) !== null && i !== void 0 ? i : (m = G.locale) === null || m === void 0 || (s = m.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = ce((b = (w = (D = (R = n == null ? void 0 : n.weekStartsOn) !== null && R !== void 0 ? R : n == null || (Y = n.locale) === null || Y === void 0 || (V = Y.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && D !== void 0 ? D : G.weekStartsOn) !== null && w !== void 0 ? w : (A = G.locale) === null || A === void 0 || (L = A.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && b !== void 0 ? b : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!J.localize)
    throw new RangeError("locale must contain localize property");
  if (!J.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var M = de(e);
  if (!nn(M))
    throw new RangeError("Invalid time value");
  var P = rr(M), Z = Ul(M, P), ee = {
    firstWeekContainsDate: N,
    weekStartsOn: $,
    locale: J,
    _originalDate: M
  }, re = U.match(ic).map(function(j) {
    var C = j[0];
    if (C === "p" || C === "P") {
      var l = ma[C];
      return l(j, J.formatLong);
    }
    return j;
  }).join("").match(oc).map(function(j) {
    if (j === "''")
      return "'";
    var C = j[0];
    if (C === "'")
      return cc(j);
    var l = vs[C];
    if (l)
      return !(n != null && n.useAdditionalWeekYearTokens) && jl(j) && ar(j, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && zl(j) && ar(j, t, String(e)), l(Z, j, J.localize, ee);
    if (C.match(sc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`");
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
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = de(e), m = v.getFullYear(), s = _t(), b = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = s.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(b >= 1 && b <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setFullYear(m + 1, 0, b), w.setHours(0, 0, 0, 0);
  var D = Ut(w, t), R = /* @__PURE__ */ new Date(0);
  R.setFullYear(m, 0, b), R.setHours(0, 0, 0, 0);
  var Y = Ut(R, t);
  return v.getTime() >= D.getTime() ? m + 1 : v.getTime() >= Y.getTime() ? m : m - 1;
}
function hc(e, t) {
  var n, r, a, o, i, u, p, f;
  ne(1, arguments);
  var v = _t(), m = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (p = v.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = vc(e, t), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(s, 0, m), b.setHours(0, 0, 0, 0);
  var w = Ut(b, t);
  return w;
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
      var u = function(f) {
        return {
          year: f,
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
      var f = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(f, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
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
      var u = function(f) {
        return {
          year: f,
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
        var f = Jl(i.year, p);
        return a.setUTCFullYear(f, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ft(a, u);
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
      var u = function(f) {
        return f - 1;
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
      var u = function(f) {
        return f - 1;
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
  var r, a, o, i, u, p, f, v;
  ne(2, arguments);
  var m = _t(), s = ce((r = (a = (o = (i = n == null ? void 0 : n.weekStartsOn) !== null && i !== void 0 ? i : n == null || (u = n.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && a !== void 0 ? a : (f = m.locale) === null || f === void 0 || (v = f.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = de(e), w = ce(t), D = b.getUTCDay(), R = w % 7, Y = (R + 7) % 7, V = (Y < s ? 7 : 0) + w - D;
  return b.setUTCDate(b.getUTCDate() + V), b;
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
      var u = function(f) {
        return f === 0 ? 7 : f;
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
      }, e: function(f) {
        throw f;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var f = n.next();
    return o = f.done, f;
  }, e: function(f) {
    i = !0, u = f;
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
  var a, o, i, u, p, f, v, m, s, b, w, D, R, Y, V, A, L, U;
  ne(3, arguments);
  var G = String(e), J = String(t), N = _t(), $ = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : N.locale) !== null && a !== void 0 ? a : ql;
  if (!$.match)
    throw new RangeError("locale must contain match property");
  var M = ce((i = (u = (p = (f = r == null ? void 0 : r.firstWeekContainsDate) !== null && f !== void 0 ? f : r == null || (v = r.locale) === null || v === void 0 || (m = v.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && p !== void 0 ? p : N.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = N.locale) === null || s === void 0 || (b = s.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = ce((w = (D = (R = (Y = r == null ? void 0 : r.weekStartsOn) !== null && Y !== void 0 ? Y : r == null || (V = r.locale) === null || V === void 0 || (A = V.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && R !== void 0 ? R : N.weekStartsOn) !== null && D !== void 0 ? D : (L = N.locale) === null || L === void 0 || (U = L.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && w !== void 0 ? w : 0);
  if (!(P >= 0 && P <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (J === "")
    return G === "" ? de(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: M,
    weekStartsOn: P,
    locale: $
  }, ee = [new $c()], re = J.match(Em).map(function(oe) {
    var pe = oe[0];
    if (pe in ma) {
      var Ie = ma[pe];
      return Ie(oe, $.formatLong);
    }
    return oe;
  }).join("").match(Am), j = [], C = cl(re), l;
  try {
    var d = function() {
      var pe = l.value;
      !(r != null && r.useAdditionalWeekYearTokens) && jl(pe) && ar(pe, J, e), !(r != null && r.useAdditionalDayOfYearTokens) && zl(pe) && ar(pe, J, e);
      var Ie = pe[0], it = Nm[Ie];
      if (it) {
        var me = it.incompatibleTokens;
        if (Array.isArray(me)) {
          var ct = j.find(function(ze) {
            return me.includes(ze.token) || ze.token === Ie;
          });
          if (ct)
            throw new RangeError("The format string mustn't contain `".concat(ct.fullToken, "` and `").concat(pe, "` at the same time"));
        } else if (it.incompatibleTokens === "*" && j.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(pe, "` and any other token at the same time"));
        j.push({
          token: Ie,
          fullToken: pe
        });
        var at = it.run(G, pe, $.match, Z);
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
    for (C.s(); !(l = C.n()).done; ) {
      var h = d();
      if (Kn(h) === "object")
        return h.v;
    }
  } catch (oe) {
    C.e(oe);
  } finally {
    C.f();
  }
  if (G.length > 0 && Um.test(G))
    return /* @__PURE__ */ new Date(NaN);
  var S = ee.map(function(oe) {
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
  var K = Ul(E, rr(E)), Q = {}, x = cl(S), _;
  try {
    for (x.s(); !(_ = x.n()).done; ) {
      var z = _.value;
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
  var u = o.getTime(), p = 0, f;
  if (a.time && (p = Km(a.time), isNaN(p)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (f = Xm(a.timezone), isNaN(f))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var v = new Date(u + p), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()), m.setHours(v.getUTCHours(), v.getUTCMinutes(), v.getUTCSeconds(), v.getUTCMilliseconds()), m;
  }
  return new Date(u + p + f);
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
  var f = /* @__PURE__ */ new Date(0);
  return !ty(t, o, i) || !ny(t, a) ? /* @__PURE__ */ new Date(NaN) : (f.setUTCFullYear(t, o, Math.max(a, i)), f);
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
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, p = t.seconds ? ce(t.seconds) : 0, f = jt(e, r + n * 12), v = Hm(f, o + a * 7), m = u + i * 60, s = p + m * 60, b = s * 1e3, w = new Date(v.getTime() - b);
  return w;
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
}, ft = (e, t, n, r) => {
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
    var u = n ? t : _y(t), p = xo(u, e), f = n ? p : wy(t, p, e);
    return -f;
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
    var f = p.getTime(), v = 0, m;
    if (a.time && (v = Py(a.time), isNaN(v)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (m = Lo(a.timeZone || n.timeZone, new Date(f + v)), isNaN(m))
        return /* @__PURE__ */ new Date(NaN);
    } else
      m = yl(new Date(f + v)), m = yl(new Date(f + v + m));
    return new Date(f + v + m);
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
  const t = c(e);
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
}), Gy = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), st = (e) => {
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
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", i = (l, d) => {
    if (typeof e.format == "function")
      return e.format(l);
    const h = d || o(), S = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${rn(l[0], h, S)} ${e.modelAuto && !l[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? rn(l[1], h, S) : ""}` : rn(l, h, S);
  }, u = (l) => e.timezone ? By(l, e.timezone) : l, p = (l) => e.timezone ? Ay(l, e.timezone) : l, f = k(() => (l) => {
    var d;
    return (d = e.hideNavigation) == null ? void 0 : d.includes(l);
  }), v = (l) => {
    const d = e.maxDate ? rt(u(l), u(W(e.maxDate))) : !1, h = e.minDate ? Ke(u(l), u(W(e.minDate))) : !1, S = Y(l, e.disabledDates), E = n.value.filters.months.map((z) => +z).includes(De(l)), K = e.disabledWeekDays.length ? e.disabledWeekDays.some((z) => +z === dc(l)) : !1, Q = e.allowedDates.length ? !e.allowedDates.some((z) => Me(u(W(z)), u(l))) : !1, x = Re(l), _ = x < +e.yearRange[0] || x > +e.yearRange[1];
    return !(d || h || S || E || _ || K || Q);
  }, m = (l) => {
    const d = {
      hours: $t(W()),
      minutes: Ot(W()),
      seconds: e.enableSeconds ? Gt(W()) : 0
    };
    return Object.assign(d, l);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [m(e.startTime[0]), m(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? m(e.startTime) : null, b = (l) => !v(l), w = (l) => Array.isArray(l) ? nn(l[0]) && (l[1] ? nn(l[1]) : !0) : l ? nn(l) : !1, D = (l) => l instanceof Date ? l : Lm(l), R = (l) => {
    const d = Ut(u(l), { weekStartsOn: +e.weekStart }), h = ls(u(l), { weekStartsOn: +e.weekStart });
    return [d, h];
  }, Y = (l, d) => Array.isArray(d) ? d.some((h) => Me(u(W(h)), u(l))) : d(l), V = (l, d, h) => {
    let S = l ? W(l) : W();
    return (d || d === 0) && (S = an(S, d)), h && (S = Vt(S, h)), S;
  }, A = (l) => Ze(W(), { hours: $t(l), minutes: Ot(l), seconds: Gt(l) }), L = (l) => Ze(W(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), U = (l, d, h, S) => {
    if (!l)
      return !0;
    if (S) {
      const E = h === "max" ? Ao(l, d) : Bo(l, d), K = { seconds: 0, milliseconds: 0 };
      return E || Gl(Ze(l, K), Ze(d, K));
    }
    return h === "max" ? l.getTime() <= d.getTime() : l.getTime() >= d.getTime();
  }, G = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, J = (l) => Array.isArray(l) ? [l[0] ? A(l[0]) : null, l[1] ? A(l[1]) : null] : A(l), N = (l) => {
    const d = e.maxTime ? L(e.maxTime) : W(e.maxDate);
    return Array.isArray(l) ? U(l[0], d, "max", !!e.maxDate) && U(l[1], d, "max", !!e.maxDate) : U(l, d, "max", !!e.maxDate);
  }, $ = (l, d) => {
    const h = e.minTime ? L(e.minTime) : W(e.minDate);
    return Array.isArray(l) ? U(l[0], h, "min", !!e.minDate) && U(l[1], h, "min", !!e.minDate) && d : U(l, h, "min", !!e.minDate) && d;
  }, M = (l) => {
    let d = !0;
    if (!l || G())
      return !0;
    const h = !e.minDate && !e.maxDate ? J(l) : l;
    return (e.maxTime || e.maxDate) && (d = N(Ge(h))), (e.minTime || e.minDate) && (d = $(Ge(h), d)), d;
  }, P = (l, d) => {
    const h = W(JSON.parse(JSON.stringify(l))), S = [];
    for (let E = 0; E < 7; E++) {
      const K = Dt(h, E), Q = De(K) !== d;
      S.push({
        text: e.hideOffsetDates && Q ? "" : K.getDate(),
        value: K,
        current: !Q,
        classData: {}
      });
    }
    return S;
  }, Z = (l, d) => {
    const h = [], S = W(u(new Date(d, l))), E = W(u(new Date(d, l + 1, 0))), K = Ut(S, { weekStartsOn: e.weekStart }), Q = (x) => {
      const _ = P(x, l);
      if (h.push({ days: _ }), !h[h.length - 1].days.some(
        (z) => Me(bt(z.value), bt(E))
      )) {
        const z = Dt(x, 7);
        Q(z);
      }
    };
    if (Q(K), e.sixWeeks && h.length < 6) {
      const x = 6 - h.length;
      for (let _ = 1; _ <= x; _++) {
        const z = h[h.length - 1], we = z.days[z.days.length - 1], oe = P(Dt(we.value, 1), De(S));
        h.push({ days: oe });
      }
    }
    return h;
  }, ee = (l, d, h) => [Ze(W(l), { date: 1 }), Ze(W(), { month: d, year: h, date: 1 })], re = (l, d) => Ke(...ee(e.minDate, l, d)) || Me(...ee(e.minDate, l, d)), j = (l, d) => rt(...ee(e.maxDate, l, d)) || Me(...ee(e.maxDate, l, d)), C = (l, d, h) => {
    let S = !1;
    return e.maxDate && h && j(l, d) && (S = !0), e.minDate && !h && re(l, d) && (S = !0), S;
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
    isDisabled: b,
    isValidDate: w,
    sanitizeDate: D,
    getWeekFromDate: R,
    matchDate: Y,
    setDateMonthOrYear: V,
    isValidTime: M,
    getCalendarDays: Z,
    validateMonthYearInRange: (l, d, h, S) => {
      let E = !1;
      return S ? e.minDate && e.maxDate ? E = C(l, d, h) : (e.minDate && re(l, d) || e.maxDate && j(l, d)) && (E = !0) : E = !0, E;
    },
    validateMaxDate: j,
    validateMinDate: re,
    assignDefaultTime: m,
    defaults: n,
    hideNavigationButtons: f
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
  }, f = (m, s) => {
    Ce[s] = m;
  }, v = () => {
    tt.value = 0, qe.value = 0;
  };
  return {
    buildMatrix: p,
    buildMultiLevelMatrix: f,
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
    setDateMonthOrYear: f,
    validateMonthYearInRange: v,
    defaults: m
  } = st(e), s = k({
    get: () => e.internalModelValue,
    set: (g) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", g);
    }
  }), b = I([]);
  ut(s, () => {
    U();
  });
  const w = I([{ month: De(W()), year: Re(W()) }]), D = Ct({
    hours: e.range ? [$t(W()), $t(W())] : $t(W()),
    minutes: e.range ? [Ot(W()), Ot(W())] : Ot(W()),
    seconds: e.range ? [0, 0] : 0
  }), R = k(
    () => (g) => w.value[g] ? w.value[g].month : 0
  ), Y = k(
    () => (g) => w.value[g] ? w.value[g].year : 0
  ), V = k(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), A = (g, F, le) => {
    var se, Ne;
    w.value[g] || (w.value[g] = { month: 0, year: 0 }), w.value[g].month = F === null ? (se = w.value[g]) == null ? void 0 : se.month : F, w.value[g].year = le === null ? (Ne = w.value[g]) == null ? void 0 : Ne.year : le;
  }, L = (g, F) => {
    D[g] = F;
  };
  Xe(() => {
    s.value || (e.startDate && (A(0, De(W(e.startDate)), Re(W(e.startDate))), m.value.multiCalendars && Pe(0)), m.value.startTime && j()), U(!0);
  });
  const U = (g = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (b.value = s.value, M(g)) : J(s.value);
    if (e.timePicker)
      return P();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return ee();
    if (m.value.multiCalendars && g && !e.startDate)
      return G(W(), g);
  }, G = (g, F = !1) => {
    if ((!m.value.multiCalendars || !e.multiStatic || F) && A(0, De(g), Re(g)), m.value.multiCalendars)
      for (let le = 1; le < m.value.multiCalendars; le++) {
        const se = Ze(W(), { month: R.value(le - 1), year: Y.value(le - 1) }), Ne = El(se, { months: 1 });
        w.value[le] = { month: De(Ne), year: Re(Ne) };
      }
  }, J = (g) => {
    G(g), L("hours", $t(g)), L("minutes", Ot(g)), L("seconds", Gt(g));
  }, N = (g, F) => {
    G(g[0], F);
    const le = (se, Ne) => [
      se(g[0]),
      g[1] ? se(g[1]) : D[Ne][1]
    ];
    L("hours", le($t, "hours")), L("minutes", le(Ot, "minutes")), L("seconds", le(Gt, "seconds"));
  }, $ = (g, F) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return N(g, F);
    if (e.multiDates) {
      const le = g[g.length - 1];
      return J(le);
    }
  }, M = (g) => {
    const F = s.value;
    $(F, g), m.value.multiCalendars && e.multiCalendarsSolo && l();
  }, P = () => {
    if (j(), !e.range)
      s.value = ft(W(), D.hours, D.minutes, re());
    else {
      const g = D.hours, F = D.minutes;
      s.value = [
        ft(W(), g[0], F[0], re()),
        ft(W(), g[1], F[1], re(!1))
      ];
    }
  }, Z = () => {
    s.value = f(W(), R.value(0), Y.value(0));
  }, ee = () => {
    s.value = W();
  }, re = (g = !0) => e.enableSeconds ? Array.isArray(D.seconds) ? g ? D.seconds[0] : D.seconds[1] : D.seconds : 0, j = () => {
    const g = o();
    if (g) {
      const F = Array.isArray(g), le = F ? [+g[0].hours, +g[1].hours] : +g.hours, se = F ? [+g[0].minutes, +g[1].minutes] : +g.minutes, Ne = F ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      L("hours", le), L("minutes", se), e.enableSeconds && L("seconds", Ne);
    }
  }, C = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, l = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const g = W(
        W(s.value[1] ? s.value[1] : gt(s.value[0], 1))
      ), [F, le] = [De(s.value[0]), Re(s.value[0])], [se, Ne] = [De(s.value[1]), Re(s.value[1])];
      (F !== se || F === se && le !== Ne) && e.multiCalendarsSolo && A(1, De(g), Re(g));
    }
  }, d = (g) => {
    const F = gt(g, 1);
    return { month: De(F), year: Re(F) };
  }, h = (g) => {
    const F = De(W(g)), le = Re(W(g));
    if (A(0, F, le), m.value.multiCalendars > 0)
      for (let se = 1; se < m.value.multiCalendars; se++) {
        const Ne = d(
          Ze(W(g), { year: R.value(se - 1), month: Y.value(se - 1) })
        );
        A(se, Ne.month, Ne.year);
      }
  }, S = (g) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((F) => Me(g, F))) {
        const F = s.value.filter((le) => !Me(le, g));
        s.value = F.length ? F : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(g);
    else
      s.value = [g];
  }, E = (g, F) => {
    const le = rt(g, F) ? F : g, se = rt(F, g) ? F : g;
    return Xo({ start: le, end: se });
  }, K = (g, F = 0) => {
    if (Array.isArray(s.value) && s.value[F]) {
      const le = os(g, s.value[F]), se = E(s.value[F], g), Ne = se.length === 1 ? 0 : se.filter((wt) => i(wt)).length, lt = Math.abs(le) - Ne;
      if (e.minRange && e.maxRange)
        return lt >= +e.minRange && lt <= +e.maxRange;
      if (e.minRange)
        return lt >= +e.minRange;
      if (e.maxRange)
        return lt <= +e.maxRange;
    }
    return !0;
  }, Q = (g) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (rt(g, s.value[0]) || Me(g, s.value[0])) ? [s.value[0], g] : e.fixedEnd && (Ke(g, s.value[1]) || Me(g, s.value[1])) ? [g, s.value[1]] : (t("invalid-fixed-range", g), s.value) : [], x = () => {
    e.autoApply && V.value && t("auto-apply", e.partialFlow);
  }, _ = () => {
    e.autoApply && t("select-date");
  }, z = (g) => !Xo({ start: g[0], end: g[1] }).some((F) => i(F)), we = (g) => (s.value = p(W(g.value)), x()), oe = (g) => {
    const F = ft(W(g.value), D.hours, D.minutes, re());
    e.multiDates ? S(F) : s.value = F, n(), x();
  }, pe = () => {
    b.value = s.value ? s.value.slice() : [], b.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (b.value = []);
  }, Ie = (g, F) => {
    const le = [W(g.value), Dt(W(g.value), +e.autoRange)];
    z(le) && (F && h(g.value), b.value = le);
  }, it = (g) => {
    me(g.value) || !K(g.value, e.fixedStart ? 0 : 1) || (b.value = Q(W(g.value)));
  }, me = (g) => e.noDisabledRange ? E(b.value[0], g).some((F) => i(F)) : !1, ct = (g, F) => {
    if (pe(), e.autoRange)
      return Ie(g, F);
    if (e.fixedStart || e.fixedEnd)
      return it(g);
    b.value[0] ? K(W(g.value)) && !me(g.value) && (Ke(W(g.value), W(b.value[0])) ? b.value.unshift(W(g.value)) : b.value[1] = W(g.value)) : b.value[0] = W(g.value);
  }, at = (g) => {
    b.value[g] = ft(
      b.value[g],
      D.hours[g],
      D.minutes[g],
      re(g !== 1)
    );
  }, ze = () => {
    b.value.length && (b.value[0] && !b.value[1] ? at(0) : (at(0), at(1), n()), s.value = b.value.slice(), b.value[0] && b.value[1] && e.autoApply && t("auto-apply"), b.value[0] && !b.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
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
    return e.weekNumbers === "local" ? bc(F.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? yc(F.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(F.value) : "";
  }, Pe = (g) => {
    for (let F = g - 1; F >= 0; F--) {
      const le = jt(Ze(W(), { month: R.value(F + 1), year: Y.value(F + 1) }), 1);
      A(F, De(le), Re(le));
    }
    for (let F = g + 1; F <= m.value.multiCalendars - 1; F++) {
      const le = gt(Ze(W(), { month: R.value(F - 1), year: Y.value(F - 1) }), 1);
      A(F, De(le), Re(le));
    }
  }, $e = (g) => f(W(), R.value(g), Y.value(g)), Nt = (g) => ft(g, D.hours, D.minutes, re()), Bt = (g, F) => {
    const le = e.monthPicker ? R.value(g) !== F.month || !F.fromNav : Y.value(g) !== F.year;
    if (A(g, F.month, F.year), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(g), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? Ke($e(g), se[0]) ? se.unshift($e(g)) : se[1] = $e(g) : se = [$e(g)], s.value = se;
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
    const le = Ze(W(), { month: R.value(F), year: Y.value(F) }), se = g < 0 ? gt(le, 1) : jt(le, 1);
    v(De(se), Re(se), g < 0, e.preventMinMaxNavigation) && (A(F, De(se), Re(se)), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(F), t("update-month-year", { instance: F, month: De(se), year: Re(se) }), r());
  }, Zt = (g) => {
    Ol(g) && Ol(s.value) && At(D.hours) && At(D.minutes) ? (g[0] && s.value[0] && (s.value[0] = ft(g[0], D.hours[0], D.minutes[0], re())), g[1] && s.value[1] && (s.value[1] = ft(g[1], D.hours[1], D.minutes[1], re(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(g) : !e.range && !xl(g) && (s.value = Nt(g)), t("time-update");
  }, Gr = (g, F = !0, le = !1) => {
    const se = F ? g : D.hours, Ne = !F && !le ? g : D.minutes, lt = le ? g : D.seconds;
    if (e.range && xl(s.value) && At(se) && At(Ne) && At(lt) && !e.disableTimeRangeValidation) {
      const wt = (B) => ft(s.value[B], se[B], Ne[B], lt[B]), Kt = (B) => Fo(s.value[B], 0);
      if (Me(s.value[0], s.value[1]) && (Bo(wt(0), Kt(1)) || Ao(wt(1), Kt(0))))
        return;
    }
    if (L("hours", se), L("minutes", Ne), L("seconds", lt), s.value)
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
    month: R,
    year: Y,
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
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = Ke(W(), s.value[0]) ? [W(), s.value[0]] : [s.value[0], W()] : s.value = [W()] : s.value = W(), _();
    },
    presetDateRange: (g, F) => {
      F || g.length && g.length <= 2 && e.range && (s.value = g.map((le) => W(le)), _(), e.multiCalendars && dt().then(() => U(!0)));
    }
  };
}, Zy = (e, t, n) => {
  const r = I(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: i,
    getDefaultPattern: u,
    checkRangeEnabled: p,
    checkPartialRangeValue: f,
    isValidDate: v,
    setDateMonthOrYear: m,
    defaults: s
  } = st(t), b = I(""), w = tr(t, "format");
  ut(r, () => {
    e("internal-model-change", r.value);
  }), ut(w, () => {
    d();
  });
  const D = (x) => {
    const _ = x || W();
    return t.modelType ? S(_) : {
      hours: $t(_),
      minutes: Ot(_),
      seconds: t.enableSeconds ? Gt(_) : 0
    };
  }, R = (x) => t.modelType ? S(x) : { month: De(x), year: Re(x) }, Y = (x) => Array.isArray(x) ? p(() => [
    Vt(W(), x[0]),
    x[1] ? Vt(W(), x[1]) : f()
  ]) : Vt(W(), +x), V = (x, _) => (typeof x == "string" || typeof x == "number") && t.modelType ? h(x) : _, A = (x) => Array.isArray(x) ? [
    V(
      x[0],
      ft(null, +x[0].hours, +x[0].minutes, x[0].seconds)
    ),
    V(
      x[1],
      ft(null, +x[1].hours, +x[1].minutes, x[1].seconds)
    )
  ] : V(x, ft(null, x.hours, x.minutes, x.seconds)), L = (x) => Array.isArray(x) ? p(() => [
    V(x[0], m(null, +x[0].month, +x[0].year)),
    V(
      x[1],
      x[1] ? m(null, +x[1].month, +x[1].year) : f()
    )
  ]) : V(x, m(null, +x.month, +x.year)), U = (x) => {
    if (Array.isArray(x))
      return x.map((_) => h(_));
    throw new Error(Wr.dateArr("multi-dates"));
  }, G = (x) => {
    if (Array.isArray(x))
      return [W(x[0]), W(x[1])];
    throw new Error(Wr.dateArr("week-picker"));
  }, J = (x) => t.modelAuto ? Array.isArray(x) ? [h(x[0]), h(x[1])] : t.autoApply ? [h(x)] : [h(x), null] : Array.isArray(x) ? p(() => [
    h(x[0]),
    x[1] ? h(x[1]) : f()
  ]) : h(x), N = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(f());
  }, $ = () => {
    const x = r.value;
    return [
      S(x[0]),
      x[1] ? S(x[1]) : f()
    ];
  }, M = () => r.value[1] ? $() : S(Ge(r.value[0])), P = () => (r.value || []).map((x) => S(x)), Z = () => (N(), t.modelAuto ? M() : t.multiDates ? P() : Array.isArray(r.value) ? p(() => $()) : S(Ge(r.value))), ee = (x) => x ? t.timePicker ? A(Ge(x)) : t.monthPicker ? L(Ge(x)) : t.yearPicker ? Y(Ge(x)) : t.multiDates ? U(Ge(x)) : t.weekPicker ? G(Ge(x)) : J(Ge(x)) : null, re = (x) => {
    const _ = ee(x);
    v(Ge(_)) ? (r.value = Ge(_), d()) : (r.value = null, b.value = "");
  }, j = () => {
    var x;
    const _ = (z) => {
      var we;
      return rn(z, (we = s.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${_(r.value[0])} ${(x = s.value.textInputOptions) == null ? void 0 : x.rangeSeparator} ${r.value[1] ? _(r.value[1]) : ""}`;
  }, C = () => {
    var x;
    return n.value && r.value ? Array.isArray(r.value) ? j() : rn(r.value, (x = s.value.textInputOptions) == null ? void 0 : x.format) : i(r.value);
  }, l = () => {
    var x;
    return r.value ? t.multiDates ? r.value.map((_) => i(_)).join("; ") : t.textInput && typeof ((x = s.value.textInputOptions) == null ? void 0 : x.format) == "string" ? C() : i(r.value) : "";
  }, d = () => {
    !t.format || typeof t.format == "string" ? b.value = l() : b.value = t.format(r.value);
  }, h = (x) => {
    if (t.utc) {
      const _ = new Date(x);
      return t.utc === "preserve" ? new Date(_.getTime() + _.getTimezoneOffset() * 6e4) : _;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(x)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Oo(x, u(), /* @__PURE__ */ new Date()) : o(Oo(x, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(x));
  }, S = (x) => x ? t.utc ? cy(x, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(x) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(a(x)) : i(a(x), t.modelType) : a(x) : "", E = (x) => {
    e("update:model-value", x);
  }, K = (x) => Array.isArray(r.value) ? [
    x(r.value[0]),
    r.value[1] ? x(r.value[1]) : f()
  ] : x(Ge(r.value)), Q = (x) => E(Ge(K(x)));
  return {
    inputValue: b,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: re,
    formatInputValue: d,
    emitModelValue: () => (d(), t.monthPicker ? Q(R) : t.timePicker ? Q(D) : t.yearPicker ? Q(Re) : t.weekPicker ? E(r.value) : E(Z()))
  };
}, Ky = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = st(e), i = (m, s) => {
    let b = m;
    return o.value.filters.months.includes(De(b)) ? (b = s ? gt(m, 1) : jt(m, 1), i(b, s)) : b;
  }, u = (m, s) => {
    let b = m;
    return o.value.filters.years.includes(Re(b)) ? (b = s ? Yl(m, 1) : ly(m, 1), u(b, s)) : b;
  }, p = (m) => {
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let b = m ? gt(s, 1) : jt(s, 1), w = De(b), D = Re(b);
    o.value.filters.months.includes(w) && (b = i(b, m), w = De(b), D = Re(b)), o.value.filters.years.includes(D) && (b = u(b, m), D = Re(b)), n(w, D, m, e.preventMinMaxNavigation) && f(w, D);
  }, f = (m, s) => {
    t("update-month-year", { month: m, year: s });
  }, v = k(() => (m) => {
    if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate)
      return !1;
    const s = Ze(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), b = m ? gt(s, 1) : jt(s, 1), w = [De(b), Re(b)];
    return m ? !r(...w) : !a(...w);
  });
  return { handleMonthYearChange: p, isDisabled: v, updateMonthYear: f };
};
var er = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(er || {});
const Xy = (e, t, n, r) => {
  const a = I({
    top: "0",
    left: "0",
    transform: "none"
  }), o = I(!1), i = tr(r, "teleportCenter");
  ut(i, () => {
    D();
  });
  const u = (N) => {
    if (r.teleport) {
      const $ = N.getBoundingClientRect();
      return {
        left: $.left + window.scrollX,
        top: $.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, p = (N, $) => {
    a.value.left = `${N + $}px`, a.value.transform = "translateX(-100%)";
  }, f = (N) => {
    a.value.left = `${N}px`, a.value.transform = "translateX(0)";
  }, v = (N, $, M = !1) => {
    r.position === er.left && f(N), r.position === er.right && p(N, $), r.position === er.center && (a.value.left = `${N + $ / 2}px`, a.value.transform = M ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, m = (N) => {
    const { width: $, height: M } = N.getBoundingClientRect(), { top: P, left: Z } = r.altPosition ? r.altPosition(N) : u(N);
    return { top: +P, left: +Z, width: $, height: M };
  }, s = () => {
    const N = Le(t);
    if (N) {
      const { top: $, left: M, width: P, height: Z } = m(N);
      a.value.top = `${$ + Z / 2}px`, a.value.transform = "translateY(-50%)", v(M, P, !0);
    }
  }, b = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, w = () => {
    const N = Le(t), { top: $, left: M, transform: P } = r.altPosition(N);
    a.value = { top: `${$}px`, left: `${M}px`, transform: P || "" };
  }, D = (N = !0) => {
    if (!r.inline)
      return i.value ? b() : r.altPosition !== null ? w() : (N && n("recalculate-position"), U());
  }, R = ({
    inputEl: N,
    menuEl: $,
    left: M,
    width: P
  }) => {
    window.screen.width > 768 && v(M, P), A(N, $);
  }, Y = (N, $) => {
    const { top: M, left: P, height: Z, width: ee } = m(N);
    a.value.top = `${Z + M + +r.offset}px`, R({ inputEl: N, menuEl: $, left: P, width: ee }), o.value = !1;
  }, V = (N, $) => {
    const { top: M, left: P, width: Z } = m(N), { height: ee } = $.getBoundingClientRect();
    a.value.top = `${M - ee - +r.offset}px`, R({ inputEl: N, menuEl: $, left: P, width: Z }), o.value = !0;
  }, A = (N, $) => {
    if (r.autoPosition) {
      const { left: M, width: P } = m(N), { left: Z, right: ee } = $.getBoundingClientRect();
      return Z <= 0 || Z <= M ? f(M) : ee >= document.documentElement.clientWidth ? p(M, P) : v(M, P);
    }
  }, L = (N, $) => {
    const { height: M } = $.getBoundingClientRect(), { top: P, height: Z } = N.getBoundingClientRect(), ee = window.innerHeight - P - Z, re = P;
    return M <= ee ? Y(N, $) : M > ee && M <= re ? V(N, $) : ee >= re ? Y(N, $) : V(N, $);
  }, U = () => {
    const N = Le(t), $ = Le(e);
    if (N && $)
      return r.autoPosition ? L(N, $) : Y(N, $);
  }, G = function(N) {
    if (N) {
      const $ = N.scrollHeight > N.clientHeight, M = window.getComputedStyle(N).overflowY.indexOf("hidden") !== -1;
      return $ && !M;
    }
    return !0;
  }, J = function(N) {
    return !N || N === document.body ? window : G(N) ? N : J(N.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: D, setInitialPosition: s, getScrollableParent: J };
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: i, getDefaultStartTime: u, assignDefaultTime: p } = st(r), f = I(), v = I(null), m = I(!1), s = k(
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
    ), b = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), f.value = null);
    }, w = ($) => {
      var M;
      const P = u();
      return sy(
        $,
        ((M = i.value.textInputOptions) == null ? void 0 : M.format) || a(),
        P || p({}),
        r.inputValue
      );
    }, D = ($) => {
      const { rangeSeparator: M } = i.value.textInputOptions, [P, Z] = $.split(`${M}`);
      if (P) {
        const ee = w(P.trim()), re = Z ? w(Z.trim()) : null, j = ee && re ? [ee, re] : [ee];
        f.value = ee ? j : null;
      }
    }, R = ($) => {
      if (r.range)
        D($);
      else if (r.multiDates) {
        const M = $.split(";");
        f.value = M.map((P) => w(P.trim())).filter((P) => P);
      } else
        f.value = w($);
    }, Y = ($) => {
      var M;
      const { value: P } = $.target;
      P !== "" ? ((M = i.value.textInputOptions) != null && M.openMenu && !r.isMenuOpen && n("open"), R(P), n("set-input-date", f.value)) : b(), n("update:input-value", P);
    }, V = () => {
      var $, M;
      ($ = i.value.textInputOptions) != null && $.enterSubmit && o(f.value) && r.inputValue !== "" ? (n("set-input-date", f.value, !0), f.value = null) : (M = i.value.textInputOptions) != null && M.enterSubmit && r.inputValue === "" && (f.value = null, n("clear"));
    }, A = () => {
      var $, M;
      ($ = i.value.textInputOptions) != null && $.tabSubmit && o(f.value) && r.inputValue !== "" ? (n("set-input-date", f.value, !0), f.value = null) : (M = i.value.textInputOptions) != null && M.tabSubmit && r.inputValue === "" && (f.value = null, n("clear"));
    }, L = () => {
      m.value = !0, n("focus");
    }, U = ($) => {
      var M;
      $.preventDefault(), $.stopImmediatePropagation(), $.stopPropagation(), r.textInput && (M = i.value.textInputOptions) != null && M.openMenu && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, G = () => {
      m.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && f.value && (n("set-input-date", f.value), n("select-date"), f.value = null);
    }, J = () => {
      n("clear");
    }, N = ($) => {
      r.textInput || $.preventDefault();
    };
    return t({
      focusInput: () => {
        v.value && v.value.focus({ preventScroll: !0 });
      },
      setParsedDate: ($) => {
        f.value = $;
      }
    }), ($, M) => {
      var P;
      return y(), O("div", {
        onClick: U,
        "aria-label": (P = c(i).ariaLabels) == null ? void 0 : P.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": $.disabled,
        "aria-readonly": $.readonly
      }, [
        $.$slots.trigger && !$.$slots["dp-input"] && !$.inline ? q($.$slots, "trigger", { key: 0 }) : T("", !0),
        !$.$slots.trigger && (!$.inline || $.inlineWithInput) ? (y(), O("div", nv, [
          $.$slots["dp-input"] && !$.$slots.trigger && !$.inline ? q($.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: Y,
            onEnter: V,
            onTab: A,
            onClear: J
          }) : T("", !0),
          $.$slots["dp-input"] ? T("", !0) : (y(), O("input", {
            key: 1,
            ref_key: "inputRef",
            ref: v,
            id: $.uid ? `dp-input-${$.uid}` : void 0,
            name: $.name,
            class: ie(c(s)),
            inputmode: $.textInput ? "text" : "none",
            placeholder: $.placeholder,
            disabled: $.disabled,
            readonly: $.readonly,
            required: $.required,
            value: e.inputValue,
            autocomplete: $.autocomplete,
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
          $.$slots["input-icon"] && !$.hideInputIcon ? (y(), O("span", av, [
            q($.$slots, "input-icon")
          ])) : T("", !0),
          !$.$slots["input-icon"] && !$.hideInputIcon && !$.$slots["dp-input"] ? (y(), te(c(Lr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : T("", !0),
          $.$slots["clear-icon"] && e.inputValue && $.clearable && !$.disabled && !$.readonly ? (y(), O("span", ov, [
            q($.$slots, "clear-icon", { clear: J })
          ])) : T("", !0),
          $.clearable && !$.$slots["clear-icon"] && e.inputValue && !$.disabled && !$.readonly ? (y(), te(c(uy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ee(J, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : T("", !0)
        ])) : T("", !0)
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
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = st(n), { buildMatrix: i } = Mt(), u = I(null), p = I(null);
    Xe(() => {
      n.arrowNavigation && i([Le(u), Le(p)], "actionRow");
    });
    const f = k(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), v = k(() => !s.value || !b.value || !f.value), m = k(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: v.value
    })), s = k(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), b = k(() => n.monthPicker ? Y(n.internalModelValue) : !0), w = () => {
      const A = o.value.previewFormat;
      return n.timePicker || n.monthPicker, A(Ge(n.internalModelValue));
    }, D = () => {
      const A = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(A[0])} - ${r(A[1])}` : [r(A[0]), r(A[1])];
    }, R = k(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? D() : n.multiDates ? n.internalModelValue.map((A) => `${r(A)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : w()), Y = (A) => {
      if (!n.monthPicker)
        return !0;
      let L = !0;
      return n.minDate && n.maxDate ? rt(W(A), W(n.minDate)) && Ke(W(A), W(n.maxDate)) : (n.minDate && (L = rt(W(A), W(n.minDate))), n.maxDate && (L = Ke(W(A), W(n.maxDate))), L);
    }, V = () => {
      s.value && b.value && f.value ? t("select-date") : t("invalid-select");
    };
    return (A, L) => (y(), O("div", {
      class: "dp__action_row",
      style: St(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      A.$slots["action-row"] ? q(A.$slots, "action-row", Qe(je({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: c(v),
        selectDate: () => A.$emit("select-date"),
        closePicker: () => A.$emit("close-picker")
      }))) : (y(), O(ye, { key: 1 }, [
        H("div", lv, [
          A.$slots["action-preview"] ? q(A.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          A.$slots["action-preview"] ? T("", !0) : (y(), O(ye, { key: 1 }, [
            Array.isArray(c(R)) ? T("", !0) : (y(), O(ye, { key: 0 }, [
              Ae(he(c(R)), 1)
            ], 64)),
            Array.isArray(c(R)) ? (y(!0), O(ye, { key: 1 }, Te(c(R), (U, G) => (y(), O("div", { key: G }, he(U), 1))), 128)) : T("", !0)
          ], 64))
        ]),
        H("div", uv, [
          A.$slots["action-select"] ? q(A.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          A.$slots["action-select"] ? T("", !0) : (y(), O(ye, { key: 1 }, [
            A.inline ? T("", !0) : (y(), O("span", {
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
              class: ie(c(m)),
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: i } = st(r), u = I(null), p = I({
      bottom: "",
      left: "",
      transform: ""
    }), f = I([]), v = I(null), m = I(!0), s = I(""), b = I({ startX: 0, endX: 0, startY: 0, endY: 0 }), w = I([]), D = I({ left: "50%" }), R = k(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Yy(r.locale, +r.weekStart));
    Xe(() => {
      n("mount", { cmp: "calendar", refs: f }), r.noSwipe || v.value && (v.value.addEventListener("touchstart", P, { passive: !1 }), v.value.addEventListener("touchend", Z, { passive: !1 }), v.value.addEventListener("touchmove", ee, { passive: !1 })), r.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", C, { passive: !1 });
    });
    const Y = (l) => l ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", V = (l, d) => {
      if (r.transitions) {
        const h = bt(o(W(), r.month, r.year));
        s.value = rt(bt(o(W(), l, d)), h) ? i.value.transitions[Y(!0)] : i.value.transitions[Y(!1)], m.value = !1, dt(() => {
          m.value = !0;
        });
      }
    }, A = k(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), L = k(() => (l) => {
      const d = Wy(l);
      return {
        dp__marker_dot: d.type === "dot",
        dp__marker_line: d.type === "line"
      };
    }), U = k(() => (l) => Me(l, u.value)), G = k(() => ({
      dp__calendar: !0,
      dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
    })), J = k(() => (l) => r.hideOffsetDates ? l.current : !0), N = k(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), $ = async (l, d, h) => {
      var S, E;
      if (n("set-hover-date", l), (E = (S = l.marker) == null ? void 0 : S.tooltip) != null && E.length) {
        const K = Le(f.value[d][h]);
        if (K) {
          const { width: Q, height: x } = K.getBoundingClientRect();
          u.value = l.value;
          let _ = { left: `${Q / 2}px` }, z = -50;
          if (await dt(), w.value[0]) {
            const { left: we, width: oe } = w.value[0].getBoundingClientRect();
            we < 0 && (_ = { left: "0" }, z = 0, D.value.left = `${Q / 2}px`), window.innerWidth < we + oe && (_ = { right: "0" }, z = 0, D.value.left = `${oe - Q / 2}px`);
          }
          p.value = {
            bottom: `${x}px`,
            ..._,
            transform: `translateX(${z}%)`
          }, n("tooltip-open", l.marker);
        }
      }
    }, M = (l) => {
      u.value && (u.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", l.marker));
    }, P = (l) => {
      b.value.startX = l.changedTouches[0].screenX, b.value.startY = l.changedTouches[0].screenY;
    }, Z = (l) => {
      b.value.endX = l.changedTouches[0].screenX, b.value.endY = l.changedTouches[0].screenY, re();
    }, ee = (l) => {
      r.vertical && !r.inline && l.preventDefault();
    }, re = () => {
      const l = r.vertical ? "Y" : "X";
      Math.abs(b.value[`start${l}`] - b.value[`end${l}`]) > 10 && n("handle-swipe", b.value[`start${l}`] > b.value[`end${l}`] ? "right" : "left");
    }, j = (l, d, h) => {
      l && (Array.isArray(f.value[d]) ? f.value[d][h] = l : f.value[d] = [l]), r.arrowNavigation && a(f.value, "calendar");
    }, C = (l) => {
      r.monthChangeOnScroll && (l.preventDefault(), n("handle-scroll", l));
    };
    return t({ triggerTransition: V }), (l, d) => {
      var h;
      return y(), O("div", {
        class: ie(c(G))
      }, [
        H("div", {
          style: St(c(N))
        }, [
          e.specificMode ? T("", !0) : (y(), O("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: v,
            class: ie(c(A)),
            role: "grid",
            "aria-label": (h = c(i).ariaLabels) == null ? void 0 : h.calendarWrap
          }, [
            H("div", dv, [
              l.weekNumbers ? (y(), O("div", pv, he(l.weekNumName), 1)) : T("", !0),
              (y(!0), O(ye, null, Te(c(R), (S, E) => (y(), O("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: E,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? q(l.$slots, "calendar-header", {
                  key: 0,
                  day: S,
                  index: E
                }) : T("", !0),
                l.$slots["calendar-header"] ? T("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(S), 1)
                ], 64))
              ]))), 128))
            ]),
            mv,
            be(yt, {
              name: s.value,
              css: !!l.transitions
            }, {
              default: X(() => {
                var S;
                return [
                  m.value ? (y(), O("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (S = c(i).ariaLabels) == null ? void 0 : S.calendarDays
                  }, [
                    (y(!0), O(ye, null, Te(e.mappedDates, (E, K) => (y(), O("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: K
                    }, [
                      l.weekNumbers ? (y(), O("div", vv, [
                        H("div", hv, he(e.getWeekNum(E.days)), 1)
                      ])) : T("", !0),
                      (y(!0), O(ye, null, Te(E.days, (Q, x) => {
                        var _, z, we;
                        return y(), O("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (oe) => j(oe, K, x),
                          key: x + K,
                          "aria-selected": Q.classData.dp__active_date || Q.classData.dp__range_start || Q.classData.dp__range_start,
                          "aria-disabled": Q.classData.dp__cell_disabled,
                          "aria-label": (z = (_ = c(i).ariaLabels) == null ? void 0 : _.day) == null ? void 0 : z.call(_, Q),
                          tabindex: "0",
                          "data-test": Q.value,
                          onClick: Ee((oe) => l.$emit("select-date", Q), ["stop", "prevent"]),
                          onKeydown: [
                            ge((oe) => l.$emit("select-date", Q), ["enter"]),
                            ge((oe) => l.$emit("handle-space", Q), ["space"])
                          ],
                          onMouseenter: (oe) => $(Q, K, x),
                          onMouseleave: (oe) => M(Q)
                        }, [
                          H("div", {
                            class: ie(["dp__cell_inner", Q.classData])
                          }, [
                            l.$slots.day && c(J)(Q) ? q(l.$slots, "day", {
                              key: 0,
                              day: +Q.text,
                              date: Q.value
                            }) : T("", !0),
                            l.$slots.day ? T("", !0) : (y(), O(ye, { key: 1 }, [
                              Ae(he(Q.text), 1)
                            ], 64)),
                            Q.marker && c(J)(Q) ? (y(), O("div", {
                              key: 2,
                              class: ie(c(L)(Q.marker)),
                              style: St(Q.marker.color ? { backgroundColor: Q.marker.color } : {})
                            }, null, 6)) : T("", !0),
                            c(U)(Q.value) ? (y(), O("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: w,
                              style: St(p.value)
                            }, [
                              (we = Q.marker) != null && we.tooltip ? (y(), O("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: d[0] || (d[0] = Ee(() => {
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
                                  }) : T("", !0),
                                  l.$slots["marker-tooltip"] ? T("", !0) : (y(), O(ye, { key: 1 }, [
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
                              ])) : T("", !0)
                            ], 4)) : T("", !0)
                          ], 2)
                        ], 40, gv);
                      }), 128))
                    ]))), 128))
                  ], 8, yv)) : T("", !0)
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: i } = Mt(), { hideNavigationButtons: u } = st(r), p = I(!1), f = I(null), v = I(null), m = I([]), s = I(), b = I(null), w = I(0), D = I(null);
    wu(() => {
      f.value = null;
    }), Xe(() => {
      dt().then(() => $()), Y(), R(!0);
    }), Do(() => R(!1));
    const R = (C) => {
      var l;
      r.arrowNavigation && ((l = r.headerRefs) != null && l.length ? i(C) : a(C));
    }, Y = () => {
      const C = Le(v);
      C && (r.textInput || C.focus({ preventScroll: !0 }), p.value = C.clientHeight < C.scrollHeight);
    }, V = k(
      () => ({
        dp__overlay: !0
      })
    ), A = k(() => ({
      dp__overlay_col: !0
    })), L = (C) => r.skipActive ? !1 : C.value === r.modelValue, U = k(() => r.items.map((C) => C.filter((l) => l).map((l) => {
      var d, h, S;
      const E = r.disabledValues.some((Q) => Q === l.value) || N(l.value), K = (d = r.multiModelValue) != null && d.length ? (h = r.multiModelValue) == null ? void 0 : h.some(
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
          dp__cell_in_between: (S = r.multiModelValue) != null && S.length ? P(l.value) : !1
        }
      };
    }))), G = k(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: r.autoApply
      })
    ), J = k(() => {
      var C, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((C = r.items) == null ? void 0 : C.length) <= 6,
        dp__container_block: ((l = r.items) == null ? void 0 : l.length) > 6
      };
    }), N = (C) => {
      const l = r.maxValue || r.maxValue === 0, d = r.minValue || r.minValue === 0;
      return !l && !d ? !1 : l && d ? +C > +r.maxValue || +C < +r.minValue : l ? +C > +r.maxValue : d ? +C < +r.minValue : !1;
    }, $ = () => {
      const C = Le(f), l = Le(v), d = Le(b), h = Le(D), S = d ? d.getBoundingClientRect().height : 0;
      l && (w.value = l.getBoundingClientRect().height - S), C && h && (h.scrollTop = C.offsetTop - h.offsetTop - (w.value / 2 - C.getBoundingClientRect().height) - S);
    }, M = (C) => {
      !r.disabledValues.some((l) => l === C) && !N(C) && (n("update:model-value", C), n("selected"));
    }, P = (C) => {
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
    }, re = (C, l, d, h) => {
      C && (l.value === +r.modelValue && !r.disabledValues.includes(l.value) && (f.value = C), r.arrowNavigation && (Array.isArray(m.value[d]) ? m.value[d][h] = C : m.value[d] = [C], j()));
    }, j = () => {
      var C, l;
      const d = (C = r.headerRefs) != null && C.length ? [r.headerRefs].concat(m.value) : m.value.concat([r.skipButtonRef ? [] : [b.value]]);
      o(Ge(d), (l = r.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: Y }), (C, l) => {
      var d;
      return y(), O("div", {
        ref_key: "gridWrapRef",
        ref: v,
        class: ie(c(V)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ge(ee, ["esc"])
      }, [
        H("div", {
          class: ie(c(J)),
          ref_key: "containerRef",
          ref: D,
          role: "grid",
          style: St({ height: `${w.value}px` })
        }, [
          H("div", kv, [
            q(C.$slots, "header")
          ]),
          C.$slots.overlay ? q(C.$slots, "overlay", { key: 0 }) : (y(!0), O(ye, { key: 1 }, Te(c(U), (h, S) => (y(), O("div", {
            class: "dp__overlay_row",
            key: S,
            role: "row"
          }, [
            (y(!0), O(ye, null, Te(h, (E, K) => (y(), O("div", {
              role: "gridcell",
              class: ie(c(A)),
              key: E.value,
              "aria-selected": E.value === e.modelValue && !e.disabledValues.includes(E.value),
              "aria-disabled": E.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Q) => re(Q, E, S, K),
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
                C.$slots.item ? q(C.$slots, "item", {
                  key: 0,
                  item: E
                }) : T("", !0),
                C.$slots.item ? T("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(E.text), 1)
                ], 64))
              ], 2)
            ], 42, Sv))), 128))
          ]))), 128))
        ], 6),
        C.$slots["button-icon"] ? xt((y(), O("div", {
          key: 0,
          role: "button",
          "aria-label": (d = e.ariaLabels) == null ? void 0 : d.toggleOverlay,
          class: ie(c(G)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: b,
          onClick: Z,
          onKeydown: ge(Z, ["enter"])
        }, [
          q(C.$slots, "button-icon")
        ], 42, $v)), [
          [pn, !c(u)(e.type)]
        ]) : T("", !0)
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
        name: c(r)(e.showSelectionGrid),
        css: c(a)
      }, {
        default: X(() => [
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
            "button-icon": X(() => [
              i.$slots["calendar-icon"] ? q(i.$slots, "calendar-icon", { key: 0 }) : T("", !0),
              i.$slots["calendar-icon"] ? T("", !0) : (y(), te(c(Lr), { key: 1 }))
            ]),
            _: 2
          }, [
            i.$slots[e.slotName] ? {
              name: "item",
              fn: X(({ item: p }) => [
                q(i.$slots, e.slotName, { item: p })
              ]),
              key: "0"
            } : void 0,
            i.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: X(() => [
                q(i.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            i.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: X(() => [
                q(i.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : T("", !0)
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
    const r = e, { defaults: a } = st(r), { transitionName: o, showTransition: i } = zr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: p, isDisabled: f, updateMonthYear: v } = Ky(r, n), m = I(!1), s = I(!1), b = I([null, null, null, null]), w = I(null), D = I(null), R = I(null);
    Xe(() => {
      n("mount");
    });
    const Y = (_) => ({
      get: () => r[_],
      set: (z) => {
        const we = _ === "month" ? "year" : "month";
        n("update-month-year", { [_]: z, [we]: r[we] }), n("month-year-select", _ === "year"), _ === "month" ? S(!0) : E(!0);
      }
    }), V = k(Y("month")), A = k(Y("year")), L = (_) => {
      const z = Re(W(_));
      return r.year === z;
    }, U = k(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((_) => W(_)).filter((_) => L(_)).map((_) => De(_)) : [] : []), G = k(() => (_) => {
      const z = _ === "month";
      return {
        showSelectionGrid: (z ? m : s).value,
        items: (z ? C : l).value,
        disabledValues: a.value.filters[z ? "months" : "years"].concat(U.value),
        minValue: (z ? M : N).value,
        maxValue: (z ? P : $).value,
        headerRefs: z && r.monthPicker ? [w.value, D.value, R.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), J = k(() => (_) => ({
      month: r.month,
      year: r.year,
      items: _ === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: v,
      toggle: _ === "month" ? S : E
    })), N = k(() => r.minDate ? Re(W(r.minDate)) : null), $ = k(() => r.maxDate ? Re(W(r.maxDate)) : null), M = k(() => {
      if (r.minDate && N.value) {
        if (N.value > r.year)
          return 12;
        if (N.value === r.year)
          return De(W(r.minDate));
      }
      return null;
    }), P = k(() => r.maxDate && $.value ? $.value < r.year ? -1 : $.value === r.year ? De(W(r.maxDate)) : null : null), Z = k(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), ee = (_) => _.reverse(), re = (_, z = !1) => {
      const we = [], oe = (pe) => z ? ee(pe) : pe;
      for (let pe = 0; pe < _.length; pe += 3) {
        const Ie = [_[pe], _[pe + 1], _[pe + 2]];
        we.push(oe(Ie));
      }
      return z ? we.reverse() : we;
    }, j = k(() => r.months.find((z) => z.value === r.month) || { text: "", value: 0 }), C = k(() => re(r.months)), l = k(() => re(r.years, r.reverseYears)), d = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), h = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), S = (_ = !1) => {
      K(_), m.value = !m.value, m.value || n("overlay-closed");
    }, E = (_ = !1) => {
      K(_), s.value = !s.value, s.value || n("overlay-closed");
    }, K = (_) => {
      _ || n("reset-flow");
    }, Q = (_ = !1) => {
      f.value(_) || n("update-month-year", {
        year: _ ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, x = (_, z) => {
      r.arrowNavigation && (b.value[z] = Le(_), u(b.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: S,
      toggleYearPicker: E,
      handleMonthYearChange: p
    }), (_, z) => {
      var we, oe, pe, Ie, it;
      return y(), O("div", xv, [
        _.$slots["month-year"] ? q(_.$slots, "month-year", Qe(je({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: c(v), handleMonthYearChange: c(p), instance: e.instance }))) : (y(), O(ye, { key: 1 }, [
          !_.monthPicker && !_.yearPicker ? (y(), O(ye, { key: 0 }, [
            c(d) && !_.vertical ? (y(), te(ca, {
              key: 0,
              "aria-label": (we = c(a).ariaLabels) == null ? void 0 : we.prevMonth,
              disabled: c(f)(!1),
              onActivate: z[0] || (z[0] = (me) => c(p)(!1)),
              onSetRef: z[1] || (z[1] = (me) => x(me, 0))
            }, {
              default: X(() => [
                _.$slots["arrow-left"] ? q(_.$slots, "arrow-left", { key: 0 }) : T("", !0),
                _.$slots["arrow-left"] ? T("", !0) : (y(), te(c(dl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            H("div", Tv, [
              be(Tl, je({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (oe = c(a).ariaLabels) == null ? void 0 : oe.openMonthsOverlay,
                modelValue: c(V),
                "onUpdate:modelValue": z[2] || (z[2] = (me) => Fe(V) ? V.value = me : null)
              }, c(G)("month"), {
                onToggle: S,
                onSetRef: z[3] || (z[3] = (me) => x(me, 1))
              }), We({
                default: X(() => [
                  _.$slots.month ? q(_.$slots, "month", Qe(je({ key: 0 }, c(j)))) : T("", !0),
                  _.$slots.month ? T("", !0) : (y(), O(ye, { key: 1 }, [
                    Ae(he(c(j).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                _.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: X(() => [
                    q(_.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                _.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: X(({ item: me }) => [
                    q(_.$slots, "month-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                _.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: X(() => [
                    q(_.$slots, "month-overlay", Qe(mt(c(J)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                _.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: X(() => [
                    q(_.$slots, "month-overlay-header", { toggle: S })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              be(Tl, je({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (pe = c(a).ariaLabels) == null ? void 0 : pe.openYearsOverlay,
                modelValue: c(A),
                "onUpdate:modelValue": z[4] || (z[4] = (me) => Fe(A) ? A.value = me : null)
              }, c(G)("year"), {
                onToggle: E,
                onSetRef: z[5] || (z[5] = (me) => x(me, 2))
              }), We({
                default: X(() => [
                  _.$slots.year ? q(_.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : T("", !0),
                  _.$slots.year ? T("", !0) : (y(), O(ye, { key: 1 }, [
                    Ae(he(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                _.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: X(() => [
                    q(_.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                _.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: X(({ item: me }) => [
                    q(_.$slots, "year-overlay-value", {
                      text: me.text,
                      value: me.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                _.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: X(() => [
                    q(_.$slots, "year-overlay", Qe(mt(c(J)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                _.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: X(() => [
                    q(_.$slots, "year-overlay-header", { toggle: E })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            c(d) && _.vertical ? (y(), te(ca, {
              key: 1,
              "aria-label": (Ie = c(a).ariaLabels) == null ? void 0 : Ie.prevMonth,
              disabled: c(f)(!1),
              onActivate: z[6] || (z[6] = (me) => c(p)(!1))
            }, {
              default: X(() => [
                _.$slots["arrow-up"] ? q(_.$slots, "arrow-up", { key: 0 }) : T("", !0),
                _.$slots["arrow-up"] ? T("", !0) : (y(), te(c(iu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            c(h) ? (y(), te(ca, {
              key: 2,
              ref: "rightIcon",
              disabled: c(f)(!0),
              "aria-label": (it = c(a).ariaLabels) == null ? void 0 : it.nextMonth,
              onActivate: z[7] || (z[7] = (me) => c(p)(!0)),
              onSetRef: z[8] || (z[8] = (me) => x(me, 3))
            }, {
              default: X(() => [
                _.$slots[_.vertical ? "arrow-down" : "arrow-right"] ? q(_.$slots, _.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : T("", !0),
                _.$slots[_.vertical ? "arrow-down" : "arrow-right"] ? T("", !0) : (y(), te(Rl(_.vertical ? c(lu) : c(pl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : T("", !0)
          ], 64)) : T("", !0),
          _.monthPicker ? (y(), te(on, je({ key: 1 }, c(G)("month"), {
            "skip-active": _.range,
            year: e.year,
            "multi-model-value": c(Z),
            "month-picker": "",
            modelValue: c(V),
            "onUpdate:modelValue": z[17] || (z[17] = (me) => Fe(V) ? V.value = me : null),
            onToggle: S,
            onSelected: z[18] || (z[18] = (me) => _.$emit("overlay-closed"))
          }), We({
            header: X(() => {
              var me, ct, at;
              return [
                H("div", Pv, [
                  H("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: w,
                    onClick: z[9] || (z[9] = (ze) => Q(!1)),
                    onKeydown: z[10] || (z[10] = ge((ze) => Q(!1), ["enter"]))
                  }, [
                    H("div", {
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: c(f)(!1) }]),
                      role: "button",
                      "aria-label": (me = c(a).ariaLabels) == null ? void 0 : me.prevMonth
                    }, [
                      _.$slots["arrow-left"] ? q(_.$slots, "arrow-left", { key: 0 }) : T("", !0),
                      _.$slots["arrow-left"] ? T("", !0) : (y(), te(c(dl), { key: 1 }))
                    ], 10, Cv)
                  ], 544),
                  H("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: D,
                    "aria-label": (ct = c(a).ariaLabels) == null ? void 0 : ct.openYearsOverlay,
                    tabindex: "0",
                    onClick: z[11] || (z[11] = () => E(!1)),
                    onKeydown: z[12] || (z[12] = ge(() => E(!1), ["enter"]))
                  }, [
                    _.$slots.year ? q(_.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : T("", !0),
                    _.$slots.year ? T("", !0) : (y(), O(ye, { key: 1 }, [
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
                      class: ie(["dp__inner_nav", { dp__inner_nav_disabled: c(f)(!0) }]),
                      role: "button",
                      "aria-label": (at = c(a).ariaLabels) == null ? void 0 : at.nextMonth
                    }, [
                      _.$slots["arrow-right"] ? q(_.$slots, "arrow-right", { key: 0 }) : T("", !0),
                      _.$slots["arrow-right"] ? T("", !0) : (y(), te(c(pl), { key: 1 }))
                    ], 10, Rv)
                  ], 544)
                ]),
                be(yt, {
                  name: c(o)(s.value),
                  css: c(i)
                }, {
                  default: X(() => [
                    s.value ? (y(), te(on, je({ key: 0 }, c(G)("year"), {
                      modelValue: c(A),
                      "onUpdate:modelValue": z[15] || (z[15] = (ze) => Fe(A) ? A.value = ze : null),
                      onToggle: E,
                      onSelected: z[16] || (z[16] = (ze) => _.$emit("overlay-closed"))
                    }), We({
                      "button-icon": X(() => [
                        _.$slots["calendar-icon"] ? q(_.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                        _.$slots["calendar-icon"] ? T("", !0) : (y(), te(c(Lr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      _.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: X(({ item: ze }) => [
                          q(_.$slots, "year-overlay-value", {
                            text: ze.text,
                            value: ze.value
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
            _.$slots["month-overlay-value"] ? {
              name: "item",
              fn: X(({ item: me }) => [
                q(_.$slots, "month-overlay-value", {
                  text: me.text,
                  value: me.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : T("", !0),
          _.yearPicker ? (y(), te(on, je({ key: 2 }, c(G)("year"), {
            modelValue: c(A),
            "onUpdate:modelValue": z[19] || (z[19] = (me) => Fe(A) ? A.value = me : null),
            "multi-model-value": c(Z),
            "skip-active": _.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: E,
            onSelected: z[20] || (z[20] = (me) => _.$emit("overlay-closed"))
          }), We({ _: 2 }, [
            _.$slots["year-overlay-value"] ? {
              name: "item",
              fn: X(({ item: me }) => [
                q(_.$slots, "year-overlay-value", {
                  text: me.text,
                  value: me.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : T("", !0)
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: i } = st(r), { transitionName: u, showTransition: p } = zr(i.value.transitions), f = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), v = I("AM"), m = I(null), s = I([]);
    Xe(() => {
      n("mounted");
    });
    const b = k(() => (l) => !!(r.maxTime && r.maxTime[l] && r.maxTime[l] < r[l] + +r[`${l}Increment`])), w = k(() => (l) => !!(r.minTime && r.minTime[l] && r.minTime[l] > r[l] - +r[`${l}Increment`])), D = (l, d) => El(Ze(W(), l), d), R = (l, d) => iy(Ze(W(), l), d), Y = k(
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
        const d = Z(r.hours);
        return { text: d < 10 ? `0${d}` : `${d}`, value: d };
      }
      return { text: r[l] < 10 ? `0${r[l]}` : `${r[l]}`, value: r[l] };
    }), U = (l) => {
      const d = r.is24 ? 24 : 12, h = l === "hours" ? d : 60, S = +r[`${l}GridIncrement`], E = l === "hours" && !r.is24 ? S : 0, K = [];
      for (let Q = E; Q < h; Q += S)
        K.push({ value: Q, text: Q < 10 ? `0${Q}` : `${Q}` });
      return l === "hours" && !r.is24 && K.push({ value: 0, text: "12" }), Ey(K);
    }, G = (l, d) => {
      const h = r.minTime && r.minTime[d], S = r.maxTime && r.maxTime[d];
      return h && S ? l < h || l > S : h ? l < h : S ? l > S : !1;
    }, J = k(() => (l) => U(l).flat().filter((d) => d).map((d) => d.value).filter((d) => G(d, l))), N = (l) => r[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], $ = (l) => {
      N(l) || (f[l] = !f[l], f[l] || n("overlay-closed"));
    }, M = (l) => l === "hours" ? $t : l === "minutes" ? Ot : Gt, P = (l, d = !0) => {
      const h = d ? D : R;
      (d ? b.value(l) : w.value(l)) || n(
        `update:${l}`,
        M(l)(h({ [l]: +r[l] }, { [l]: +r[`${l}Increment`] }))
      );
    }, Z = (l) => r.is24 ? l : (l >= 12 ? v.value = "PM" : v.value = "AM", Fy(l)), ee = () => {
      v.value === "PM" ? (v.value = "AM", n("update:hours", r.hours - 12)) : (v.value = "PM", n("update:hours", r.hours + 12));
    }, re = (l) => {
      f[l] = !0;
    }, j = (l, d, h) => {
      if (l && r.arrowNavigation) {
        Array.isArray(s.value[d]) ? s.value[d][h] = l : s.value[d] = [l];
        const S = s.value.reduce(
          (E, K) => K.map((Q, x) => [...E[x] || [], K[x]]),
          []
        );
        o(r.closeTimePickerBtn), m.value && (S[1] = S[1].concat(m.value)), a(S, r.order);
      }
    }, C = (l, d) => l === "hours" && !r.is24 ? n(`update:${l}`, v.value === "PM" ? d + 12 : d) : n(`update:${l}`, d);
    return t({ openChildCmp: re }), (l, d) => {
      var h;
      return l.disabled ? T("", !0) : (y(), O("div", Iv, [
        (y(!0), O(ye, null, Te(c(V), (S, E) => {
          var K, Q, x;
          return y(), O("div", {
            key: E,
            class: ie(c(Y))
          }, [
            S.separator ? (y(), O(ye, { key: 0 }, [
              Ae(" : ")
            ], 64)) : (y(), O(ye, { key: 1 }, [
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(b)(S.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (K = c(i).ariaLabels) == null ? void 0 : K.incrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  ge((_) => P(S.type), ["enter"]),
                  ge((_) => P(S.type), ["space"])
                ],
                onClick: (_) => P(S.type),
                ref_for: !0,
                ref: (_) => j(_, E, 0)
              }, [
                l.$slots["arrow-up"] ? q(l.$slots, "arrow-up", { key: 0 }) : T("", !0),
                l.$slots["arrow-up"] ? T("", !0) : (y(), te(c(iu), { key: 1 }))
              ], 42, Nv),
              H("div", {
                role: "button",
                "aria-label": (Q = c(i).ariaLabels) == null ? void 0 : Q.openTpOverlay(S.type),
                class: ie(N(S.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${S.type}-toggle-overlay-btn`,
                onKeydown: [
                  ge((_) => $(S.type), ["enter"]),
                  ge((_) => $(S.type), ["space"])
                ],
                onClick: (_) => $(S.type),
                ref_for: !0,
                ref: (_) => j(_, E, 1)
              }, [
                l.$slots[S.type] ? q(l.$slots, S.type, {
                  key: 0,
                  text: c(L)(S.type).text,
                  value: c(L)(S.type).value
                }) : T("", !0),
                l.$slots[S.type] ? T("", !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(c(L)(S.type).text), 1)
                ], 64))
              ], 42, Bv),
              H("div", {
                class: ie({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(w)(S.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (x = c(i).ariaLabels) == null ? void 0 : x.decrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  ge((_) => P(S.type, !1), ["enter"]),
                  ge((_) => P(S.type, !1), ["space"])
                ],
                onClick: (_) => P(S.type, !1),
                ref_for: !0,
                ref: (_) => j(_, E, 2)
              }, [
                l.$slots["arrow-down"] ? q(l.$slots, "arrow-down", { key: 0 }) : T("", !0),
                l.$slots["arrow-down"] ? T("", !0) : (y(), te(c(lu), { key: 1 }))
              ], 42, Av)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? T("", !0) : (y(), O("div", Ev, [
          l.$slots["am-pm-button"] ? q(l.$slots, "am-pm-button", {
            key: 0,
            toggle: ee,
            value: v.value
          }) : T("", !0),
          l.$slots["am-pm-button"] ? T("", !0) : (y(), O("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: m,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (h = c(i).ariaLabels) == null ? void 0 : h.amPmButton,
            tabindex: "0",
            onClick: ee,
            onKeydown: [
              ge(Ee(ee, ["prevent"]), ["enter"]),
              ge(Ee(ee, ["prevent"]), ["space"])
            ]
          }, he(v.value), 41, Yv))
        ])),
        (y(!0), O(ye, null, Te(c(A), (S, E) => (y(), te(yt, {
          key: E,
          name: c(u)(f[S.type]),
          css: c(p)
        }, {
          default: X(() => [
            f[S.type] ? (y(), te(on, {
              key: 0,
              items: U(S.type),
              "disabled-values": c(i).filters.times[S.type].concat(c(J)(S.type)),
              "esc-close": l.escClose,
              "aria-labels": c(i).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (K) => C(S.type, K),
              onSelected: (K) => $(S.type),
              onToggle: (K) => $(S.type),
              onResetFlow: d[0] || (d[0] = (K) => l.$emit("reset-flow")),
              type: S.type
            }, We({
              "button-icon": X(() => [
                l.$slots["clock-icon"] ? q(l.$slots, "clock-icon", { key: 0 }) : T("", !0),
                l.$slots["clock-icon"] ? T("", !0) : (y(), te(c(ou), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${S.type}-overlay-value`] ? {
                name: "item",
                fn: X(({ item: K }) => [
                  q(l.$slots, `${S.type}-overlay-value`, {
                    text: K.text,
                    value: K.value
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), i = pt(), { hideNavigationButtons: u, defaults: p } = st(r), { transitionName: f, showTransition: v } = zr(p.value.transitions), m = I(null), s = I(null), b = I([]), w = I(null);
    Xe(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Le(m.value)], "time") : o(!0, r.timePicker);
    });
    const D = k(() => r.range && r.modelAuto ? du(r.internalModelValue) : !0), R = I(!1), Y = (P) => ({
      hours: Array.isArray(r.hours) ? r.hours[P] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[P] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[P] : r.seconds
    }), V = k(() => {
      const P = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          P.push(Y(Z));
      else
        P.push(Y(0));
      return P;
    }), A = (P, Z = !1, ee = "") => {
      Z || n("reset-flow"), R.value = P, P && n("overlay-opened"), r.arrowNavigation && (o(P), P || n("overlay-closed")), dt(() => {
        ee !== "" && b.value[0] && b.value[0].openChildCmp(ee);
      });
    }, L = k(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), U = Yt(i, "timePicker"), G = (P, Z, ee) => r.range ? Z === 0 ? [P, V.value[1][ee]] : [V.value[0][ee], P] : P, J = (P) => {
      n("update:hours", P);
    }, N = (P) => {
      n("update:minutes", P);
    }, $ = (P) => {
      n("update:seconds", P);
    }, M = () => {
      w.value && r.arrowNavigation && w.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: A }), (P, Z) => {
      var ee;
      return y(), O("div", null, [
        P.timePicker ? T("", !0) : xt((y(), O("div", {
          key: 0,
          class: ie(c(L)),
          role: "button",
          "aria-label": (ee = c(p).ariaLabels) == null ? void 0 : ee.openTimePicker,
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
          P.$slots["clock-icon"] ? q(P.$slots, "clock-icon", { key: 0 }) : T("", !0),
          P.$slots["clock-icon"] ? T("", !0) : (y(), te(c(ou), { key: 1 }))
        ], 42, Uv)), [
          [pn, !c(u)("time")]
        ]),
        be(yt, {
          name: c(f)(R.value),
          css: c(v)
        }, {
          default: X(() => {
            var re;
            return [
              R.value || P.timePicker ? (y(), O("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: w,
                tabindex: "0"
              }, [
                H("div", Fv, [
                  P.$slots["time-picker-overlay"] ? q(P.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: J,
                    setMinutes: N,
                    setSeconds: $
                  }) : T("", !0),
                  P.$slots["time-picker-overlay"] ? T("", !0) : (y(), O("div", Wv, [
                    (y(!0), O(ye, null, Te(c(V), (j, C) => xt((y(), te(Vv, je({ key: C }, {
                      ...P.$props,
                      order: C,
                      hours: j.hours,
                      minutes: j.minutes,
                      seconds: j.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: C === 0 ? P.fixedStart : P.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: b,
                      "onUpdate:hours": (l) => J(G(l, C, "hours")),
                      "onUpdate:minutes": (l) => N(G(l, C, "minutes")),
                      "onUpdate:seconds": (l) => $(G(l, C, "seconds")),
                      onMounted: M,
                      onOverlayClosed: M
                    }), We({ _: 2 }, [
                      Te(c(U), (l, d) => ({
                        name: l,
                        fn: X((h) => [
                          q(P.$slots, l, Qe(mt(h)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [pn, C === 0 ? !0 : c(D)]
                    ])), 128))
                  ])),
                  P.timePicker ? T("", !0) : xt((y(), O("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: ie(c(L)),
                    role: "button",
                    "aria-label": (re = c(p).ariaLabels) == null ? void 0 : re.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = ge((j) => A(!1), ["enter"])),
                      Z[4] || (Z[4] = ge((j) => A(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (j) => A(!1))
                  }, [
                    P.$slots["calendar-icon"] ? q(P.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                    P.$slots["calendar-icon"] ? T("", !0) : (y(), te(c(Lr), { key: 1 }))
                  ], 42, Hv)), [
                    [pn, !c(u)("time")]
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
}), zv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = st(t), o = I(null), i = I(W()), u = (d) => {
    !d.current && t.hideOffsetDates || (o.value = d.value);
  }, p = () => {
    o.value = null;
  }, f = (d) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? d ? rt(o.value, e.value[0]) : Ke(o.value, e.value[0]) : !0, v = (d, h) => {
    const S = () => e.value ? h ? e.value[0] || null : e.value[1] : null, E = e.value && Array.isArray(e.value) ? S() : null;
    return Me(W(d.value), E);
  }, m = (d) => {
    const h = Array.isArray(e.value) ? e.value[0] : null;
    return d ? !Ke(o.value || null, h) : !0;
  }, s = (d, h = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !d.current ? !1 : Me(W(d.value), e.value[h ? 0 : 1]) : t.range ? v(d, h) && m(h) || Me(d.value, Array.isArray(e.value) ? e.value[0] : null) && f(h) : !1, b = (d, h, S) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? d ? !1 : S ? rt(e.value[0], h.value) : Ke(e.value[0], h.value) : !1, w = (d) => !e.value || t.hideOffsetDates && !d.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Me(d.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((h) => Me(h, d.value)) : Me(d.value, e.value ? e.value : i.value), D = (d) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !d.current)
          return !1;
        const h = Dt(o.value, +t.autoRange), S = a(W(o.value));
        return t.weekPicker ? Me(S[1], W(d.value)) : Me(h, W(d.value));
      }
      return !1;
    }
    return !1;
  }, R = (d) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const h = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !d.current)
          return !1;
        const S = a(W(o.value));
        return t.weekPicker ? rt(d.value, S[0]) && Ke(d.value, S[1]) : rt(d.value, o.value) && Ke(d.value, h);
      }
      return !1;
    }
    return !1;
  }, Y = (d) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !d.current)
          return !1;
        const h = a(W(o.value));
        return t.weekPicker ? Me(h[0], d.value) : Me(o.value, d.value);
      }
      return !1;
    }
    return !1;
  }, V = (d) => uu(e.value, o.value, d.value), A = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, L = () => t.modelAuto ? du(t.internalModelValue) : !0, U = (d) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const h = t.range ? !s(d) && !s(d, !1) : !0;
    return !n(d.value) && !w(d) && !(!d.current && t.hideOffsetDates) && h;
  }, G = (d) => t.range ? t.modelAuto ? A() && w(d) : !1 : w(d), J = (d) => t.highlight ? r(d.value, t.highlight) : !1, N = (d) => n(d.value) && t.highlightDisabledDays === !1, $ = (d) => t.highlightWeekDays && t.highlightWeekDays.includes(d.value.getDay()), M = (d) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || d.current) && L() && !(!d.current && t.hideOffsetDates) && !w(d) ? V(d) : !1, P = (d) => {
    const { isRangeStart: h, isRangeEnd: S } = re(d), E = t.range ? h || S : !1;
    return {
      dp__cell_offset: !d.current,
      dp__pointer: !t.disabled && !(!d.current && t.hideOffsetDates) && !n(d.value),
      dp__cell_disabled: n(d.value),
      dp__cell_highlight: !N(d) && (J(d) || $(d)) && !G(d) && !E,
      dp__cell_highlight_active: !N(d) && (J(d) || $(d)) && G(d),
      dp__today: !t.noToday && Me(d.value, i.value) && d.current
    };
  }, Z = (d) => ({
    dp__active_date: G(d),
    dp__date_hover: U(d)
  }), ee = (d) => ({
    ...j(d),
    ...C(d),
    dp__range_between_week: M(d) && t.weekPicker
  }), re = (d) => {
    const h = t.multiCalendars > 0 ? d.current && s(d) && L() : s(d) && L(), S = t.multiCalendars > 0 ? d.current && s(d, !1) && L() : s(d, !1) && L();
    return { isRangeStart: h, isRangeEnd: S };
  }, j = (d) => {
    const { isRangeStart: h, isRangeEnd: S } = re(d);
    return {
      dp__range_start: h,
      dp__range_end: S,
      dp__range_between: M(d) && !t.weekPicker,
      dp__date_hover_start: b(U(d), d, !0),
      dp__date_hover_end: b(U(d), d, !1)
    };
  }, C = (d) => ({
    ...j(d),
    dp__cell_auto_range: R(d),
    dp__cell_auto_range_start: Y(d),
    dp__cell_auto_range_end: D(d)
  }), l = (d) => t.range ? t.autoRange ? C(d) : t.modelAuto ? { ...Z(d), ...j(d) } : j(d) : t.weekPicker ? ee(d) : Z(d);
  return {
    setHoverDate: u,
    clearHoverDate: p,
    getDayClassData: (d) => ({
      ...P(d),
      ...l(d),
      [t.dayClass ? t.dayClass(d.value) : ""]: !0,
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: i } = su(), { getCalendarDays: u, defaults: p } = st(r), f = pt(), v = I(null), m = Ct({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = I([]), b = I([]), w = I(null), D = I(null), R = I(0), Y = I(!1), V = I(0);
    Xe(() => {
      var B;
      Y.value = !0, !((B = r.presetRanges) != null && B.length) && !f["left-sidebar"] && !f["right-sidebar"] && ve();
      const ae = Le(D);
      if (ae && !r.textInput && !r.inline && (a(!0), N()), ae) {
        const et = (ot) => {
          ["action-row", "time-picker", "month-year"].some(
            (Wt) => Object.keys(f).includes(Wt)
          ) || ot.preventDefault(), ot.stopImmediatePropagation(), ot.stopPropagation();
        };
        ae.addEventListener("pointerdown", et), ae.addEventListener("mousedown", et);
      }
      window.addEventListener("resize", ve);
    }), Do(() => {
      window.removeEventListener("resize", ve);
    });
    const { arrowRight: A, arrowLeft: L, arrowDown: U, arrowUp: G } = Mt(), J = (B) => {
      B || B === 0 ? b.value[B].triggerTransition(
        ee.value(B),
        re.value(B)
      ) : b.value.forEach(
        (ae, et) => ae.triggerTransition(ee.value(et), re.value(et))
      );
    }, N = () => {
      const B = Le(D);
      B && B.focus({ preventScroll: !0 });
    }, $ = () => {
      var B;
      (B = r.flow) != null && B.length && V.value !== -1 && (V.value += 1, n("flow-step", V.value), Ne());
    }, M = () => {
      V.value = -1;
    }, {
      calendars: P,
      modelValue: Z,
      month: ee,
      year: re,
      time: j,
      updateTime: C,
      updateMonthYear: l,
      selectDate: d,
      getWeekNum: h,
      monthYearSelect: S,
      handleScroll: E,
      handleArrow: K,
      handleSwipe: Q,
      getMarker: x,
      selectCurrentDate: _,
      presetDateRange: z
    } = Qy(r, n, $, J, V), { setHoverDate: we, clearHoverDate: oe, getDayClassData: pe } = zv(Z, r);
    ut(
      P,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Ie = Yt(f, "calendar"), it = Yt(f, "action"), me = Yt(f, "timePicker"), ct = Yt(f, "monthYear"), at = k(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ze = k(() => Vy(r.yearRange)), Qt = k(() => Uy(r.locale, r.monthNameFormat)), ve = () => {
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
    }, g = () => {
      r.escClose && n("close-picker");
    }, F = (B, ae = !1) => {
      d(B, ae), r.spaceConfirm && n("select-date");
    }, le = (B) => {
      var ae;
      (ae = r.flow) != null && ae.length && (m[B] = !0, Object.keys(m).filter((et) => !m[et]).length || Ne());
    }, se = (B, ae, et, ot, ...Wt) => {
      if (r.flow[V.value] === B) {
        const ue = ot ? ae.value[0] : ae.value;
        ue && ue[et](...Wt);
      }
    }, Ne = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", w, "toggleTimePicker", !1, !1, !0), se("time", w, "toggleTimePicker", !1, !0, !0);
      const B = r.flow[V.value];
      (B === "hours" || B === "minutes" || B === "seconds") && se(B, w, "toggleTimePicker", !1, !0, !0, B);
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
        name: (et = c(p).transitions) == null ? void 0 : et.menuAppear,
        mode: "out-in",
        css: !!B.transitions
      }, {
        default: X(() => {
          var ot, Wt;
          return [
            H("div", {
              id: B.uid ? `dp-menu-${B.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: D,
              role: "dialog",
              class: ie(c(Qr)),
              onMouseleave: ae[15] || (ae[15] = //@ts-ignore
              (...ue) => c(oe) && c(oe)(...ue)),
              onClick: sn,
              onKeydown: [
                ge(g, ["esc"]),
                ae[16] || (ae[16] = ge(Ee((ue) => lt("left"), ["prevent"]), ["left"])),
                ae[17] || (ae[17] = ge(Ee((ue) => lt("up"), ["prevent"]), ["up"])),
                ae[18] || (ae[18] = ge(Ee((ue) => lt("down"), ["prevent"]), ["down"])),
                ae[19] || (ae[19] = ge(Ee((ue) => lt("right"), ["prevent"]), ["right"])),
                wt
              ]
            }, [
              (B.disabled || B.readonly) && B.inline ? (y(), O("div", {
                key: 0,
                class: ie(c(Zt))
              }, null, 2)) : T("", !0),
              !B.inline && !B.teleportCenter ? (y(), O("div", {
                key: 1,
                class: ie(c(at))
              }, null, 2)) : T("", !0),
              H("div", {
                class: ie({
                  dp__menu_content_wrapper: ((ot = B.presetRanges) == null ? void 0 : ot.length) || !!B.$slots["left-sidebar"] || !!B.$slots["right-sidebar"]
                })
              }, [
                B.$slots["left-sidebar"] ? (y(), O("div", qv, [
                  q(B.$slots, "left-sidebar", Qe(mt({ handleMonthYearChange: Kt })))
                ])) : T("", !0),
                (Wt = B.presetRanges) != null && Wt.length ? (y(), O("div", Gv, [
                  (y(!0), O(ye, null, Te(B.presetRanges, (ue, Ht) => (y(), O("div", {
                    key: Ht,
                    style: St(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (_e) => c(z)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? q(B.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: c(z),
                      label: ue.label,
                      range: ue.range
                    }) : (y(), O(ye, { key: 1 }, [
                      Ae(he(ue.label), 1)
                    ], 64))
                  ], 12, Qv))), 128))
                ])) : T("", !0),
                H("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: v,
                  role: "document"
                }, [
                  H("div", {
                    class: ie(c(qr))
                  }, [
                    (y(!0), O(ye, null, Te(c($e), (ue, Ht) => (y(), O("div", {
                      key: ue,
                      class: ie(c(un))
                    }, [
                      !B.disableMonthYearSelect && !B.timePicker ? (y(), te(Mv, je({
                        key: 0,
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (s.value[Ht] = _e);
                        },
                        months: c(Qt),
                        years: c(ze),
                        month: c(ee)(ue),
                        year: c(re)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, B.$props, {
                        onMount: ae[0] || (ae[0] = (_e) => le("monthYearInput")),
                        onResetFlow: M,
                        onUpdateMonthYear: (_e) => c(l)(ue, _e),
                        onMonthYearSelect: c(S),
                        onOverlayClosed: N
                      }), We({ _: 2 }, [
                        Te(c(ct), (_e, hu) => ({
                          name: _e,
                          fn: X((Kr) => [
                            q(B.$slots, _e, Qe(mt(Kr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : T("", !0),
                      be(bv, je({
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (b.value[Ht] = _e);
                        },
                        "specific-mode": c(Bt),
                        "get-week-num": c(h),
                        instance: ue,
                        "mapped-dates": c(Gr)(ue),
                        month: c(ee)(ue),
                        year: c(re)(ue)
                      }, B.$props, {
                        "flow-step": V.value,
                        "onUpdate:flowStep": ae[1] || (ae[1] = (_e) => V.value = _e),
                        onSelectDate: (_e) => c(d)(_e, !c(Nt)(ue)),
                        onHandleSpace: (_e) => F(_e, !c(Nt)(ue)),
                        onSetHoverDate: ae[2] || (ae[2] = (_e) => c(we)(_e)),
                        onHandleScroll: (_e) => c(E)(_e, ue),
                        onHandleSwipe: (_e) => c(Q)(_e, ue),
                        onMount: ae[3] || (ae[3] = (_e) => le("calendar")),
                        onResetFlow: M,
                        onTooltipOpen: ae[4] || (ae[4] = (_e) => B.$emit("tooltip-open", _e)),
                        onTooltipClose: ae[5] || (ae[5] = (_e) => B.$emit("tooltip-close", _e))
                      }), We({ _: 2 }, [
                        Te(c(Ie), (_e, hu) => ({
                          name: _e,
                          fn: X((Kr) => [
                            q(B.$slots, _e, Qe(mt({ ...Kr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  H("div", null, [
                    B.$slots["time-picker"] ? q(B.$slots, "time-picker", Qe(je({ key: 0 }, { time: c(j), updateTime: c(C) }))) : (y(), O(ye, { key: 1 }, [
                      B.enableTimePicker && !B.monthPicker && !B.weekPicker ? (y(), te(Lv, je({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: w,
                        hours: c(j).hours,
                        minutes: c(j).minutes,
                        seconds: c(j).seconds,
                        "internal-model-value": e.internalModelValue
                      }, B.$props, {
                        onMount: ae[6] || (ae[6] = (ue) => le("timePicker")),
                        "onUpdate:hours": ae[7] || (ae[7] = (ue) => c(C)(ue)),
                        "onUpdate:minutes": ae[8] || (ae[8] = (ue) => c(C)(ue, !1)),
                        "onUpdate:seconds": ae[9] || (ae[9] = (ue) => c(C)(ue, !1, !0)),
                        onResetFlow: M,
                        onOverlayClosed: N,
                        onOverlayOpened: ae[10] || (ae[10] = (ue) => B.$emit("time-picker-open", ue))
                      }), We({ _: 2 }, [
                        Te(c(me), (ue, Ht) => ({
                          name: ue,
                          fn: X((_e) => [
                            q(B.$slots, ue, Qe(mt(_e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : T("", !0)
                    ], 64))
                  ])
                ], 512),
                B.$slots["right-sidebar"] ? (y(), O("div", Zv, [
                  q(B.$slots, "right-sidebar", Qe(mt({ handleMonthYearChange: Kt })))
                ])) : T("", !0),
                B.showNowButton ? (y(), O("div", Kv, [
                  B.$slots["now-button"] ? q(B.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: c(_)
                  }) : T("", !0),
                  B.$slots["now-button"] ? T("", !0) : (y(), O("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ae[11] || (ae[11] = //@ts-ignore
                    (...ue) => c(_) && c(_)(...ue))
                  }, he(B.nowButtonLabel), 1))
                ])) : T("", !0)
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
                Te(c(it), (ue, Ht) => ({
                  name: ue,
                  fn: X((_e) => [
                    q(B.$slots, ue, Qe(mt({ ..._e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : T("", !0)
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
  const o = ut(
    () => c(e),
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
    const r = e, a = pt(), o = I(!1), i = tr(r, "modelValue"), u = tr(r, "timezone"), p = I(null), f = I(null), v = I(!1), m = I(null), { setMenuFocused: s, setShiftKey: b } = su(), { clearArrowNav: w } = Mt(), { validateDate: D, isValidTime: R, defaults: Y } = st(r);
    Xe(() => {
      P(r.modelValue), r.inline || (N(m.value).addEventListener("scroll", d), window.addEventListener("resize", h)), r.inline && (o.value = !0);
    }), Do(() => {
      if (!r.inline) {
        const ve = N(m.value);
        ve && ve.removeEventListener("scroll", d), window.removeEventListener("resize", h);
      }
    });
    const V = Yt(a, "all", r.presetRanges), A = Yt(a, "input");
    ut(
      [i, u],
      () => {
        P(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: L, menuPosition: U, setMenuPosition: G, setInitialPosition: J, getScrollableParent: N } = Xy(
      p,
      f,
      n,
      r
    ), {
      inputValue: $,
      internalModelValue: M,
      parseExternalModelValue: P,
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
    ), C = k(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), l = k(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), d = () => {
      o.value && (r.closeOnScroll ? oe() : G());
    }, h = () => {
      o.value && G();
    }, S = () => {
      !r.disabled && !r.readonly && (J(), o.value = !0, dt().then(() => {
        G(), o.value && n("open");
      }), o.value || we(), P(r.modelValue));
    }, E = () => {
      $.value = "", we(), n("update:model-value", null), n("cleared"), oe();
    }, K = () => {
      const ve = M.value;
      return !ve || !Array.isArray(ve) && D(ve) ? !0 : Array.isArray(ve) ? ve.length === 2 && D(ve[0]) && D(ve[1]) ? !0 : D(ve[0]) : !1;
    }, Q = () => {
      re() && K() ? (Z(), oe()) : n("invalid-select", M.value);
    }, x = (ve) => {
      _(), Z(), r.closeOnAutoApply && !ve && oe();
    }, _ = () => {
      f.value && r.textInput && f.value.setParsedDate(M.value);
    }, z = (ve = !1) => {
      r.autoApply && R(M.value) && K() && (r.range && Array.isArray(M.value) ? (r.partialRange || M.value.length === 2) && x(ve) : x(ve));
    }, we = () => {
      r.textInput || (M.value = null);
    }, oe = () => {
      r.inline || (o.value && (o.value = !1, s(!1), b(!1), w(), n("closed"), J(), $.value && P(i.value)), we(), f.value && f.value.focusInput());
    }, pe = (ve, Pe) => {
      if (!ve) {
        M.value = null;
        return;
      }
      M.value = ve, Pe && (Q(), n("text-submit"));
    }, Ie = () => {
      r.autoApply && R(M.value) && Z(), _();
    }, it = () => o.value ? oe() : S(), me = (ve) => {
      M.value = ve;
    }, ct = k(() => r.textInput && Y.value.textInputOptions.format), at = () => {
      ct.value && (v.value = !0, ee()), n("focus");
    }, ze = () => {
      ct.value && (v.value = !1, ee()), n("blur");
    }, Qt = (ve) => {
      p.value && p.value.updateMonthYear(0, {
        month: Sl(ve.month),
        year: Sl(ve.year)
      });
    };
    return nh(
      p,
      f,
      r.onClickOutside ? () => r.onClickOutside(K) : oe
    ), t({
      closeMenu: oe,
      selectDate: Q,
      clearValue: E,
      openMenu: S,
      onScroll: d,
      formatInputValue: ee,
      // exposed for testing purposes
      updateInternalModelValue: me,
      // modify internal modelValue
      setMonthYear: Qt
    }), (ve, Pe) => (y(), O("div", {
      class: ie(c(j)),
      ref_key: "pickerWrapperRef",
      ref: m
    }, [
      be(iv, je({
        ref_key: "inputRef",
        ref: f,
        "is-menu-open": o.value,
        "input-value": c($),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Fe($) ? $.value = $e : null)
      }, ve.$props, {
        onClear: E,
        onOpen: S,
        onSetInputDate: pe,
        onSetEmptyDate: c(Z),
        onSelectDate: Q,
        onToggle: it,
        onClose: oe,
        onFocus: at,
        onBlur: ze
      }), We({ _: 2 }, [
        Te(c(A), ($e, Nt) => ({
          name: $e,
          fn: X((Bt) => [
            q(ve.$slots, $e, Qe(mt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (y(), te(Rl(ve.teleport ? _u : "div"), Qe(je({ key: 0 }, c(l))), {
        default: X(() => [
          o.value ? (y(), te(Xv, je({
            key: 0,
            ref_key: "dpMenuRef",
            ref: p,
            class: c(C),
            style: c(U),
            "open-on-top": c(L)
          }, ve.$props, {
            "internal-model-value": c(M),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Fe(M) ? M.value = $e : null),
            onClosePicker: oe,
            onSelectDate: Q,
            onAutoApply: z,
            onTimeUpdate: Ie,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ve.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ve.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ve.$emit("invalid-select", c(M))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ve.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: c(G),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ve.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ve.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ve.$emit("time-picker-open", $e))
          }), We({ _: 2 }, [
            Te(c(V), ($e, Nt) => ({
              name: $e,
              fn: X((Bt) => [
                q(ve.$slots, $e, Qe(mt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : T("", !0)
        ]),
        _: 3
      }, 16)) : T("", !0)
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
      set(b) {
        t("update:model-value", b);
      }
    }), i = k(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = k(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), p = k(() => ({
      "custom-date-picker__input-container": !0,
      "custom-date-picker__input-container--dark": n.dark,
      "custom-date-picker__input-container--disabled": n.disabled,
      "custom-date-picker__input-container--outlined": n.outlined,
      "custom-date-picker__input-container--error": !!n.errorMessage,
      "custom-date-picker__input-container--opened": r.value || u.value
    })), f = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), v = () => {
      a.value && a.value.openMenu();
    }, m = () => {
      r.value = !0;
    }, s = () => {
      r.value = !1;
    };
    return (b, w) => (y(), O("div", oh, [
      be(c(zo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: c(o),
        "onUpdate:modelValue": w[1] || (w[1] = (D) => Fe(o) ? o.value = D : null),
        "auto-apply": "",
        range: e.range,
        locale: "es-CL",
        "hide-input-icon": "",
        format: c(i),
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
        "dp-input": X(({ value: D, onClear: R, onInput: Y, onEnter: V }) => [
          H("div", {
            class: ie(c(p))
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
              })) : T("", !0)
            ], 8, lh),
            H("div", uh, [
              e.disabled ? T("", !0) : (y(), te(He, {
                key: 0,
                size: "1rem",
                color: c(f),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 2)
        ]),
        "arrow-right": X(() => [
          be(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-right"
          })
        ]),
        "arrow-left": X(() => [
          be(He, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly", "month-picker"]),
      e.errorMessage ? (y(), O("div", sh, he(e.errorMessage), 1)) : T("", !0)
    ]));
  }
});
const jo = /* @__PURE__ */ ke(ch, [["__scopeId", "data-v-59b9c697"]]), pu = (e, t, n) => {
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
    xe((h) => ({
      "2508ba42": e.textTransform,
      "5320c375": a.value,
      "10f3e1e7": o.value,
      "0e2527e6": i.value
    }));
    const { getPropertyFromItem: r } = ph(), a = I(""), o = I(""), i = I(""), u = I(""), p = I(!1), f = I(!1), v = I(!1), m = I(null), s = I(null), b = I(null), w = k({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    }), D = k(
      () => V.value && n.clearable && !n.readonly && !n.disabled
    ), R = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), Y = k(() => !n.searchable || !u.value ? n.items : n.items.filter((h) => {
      const S = u.value.trim().toLowerCase();
      return S ? U(h).toLowerCase().includes(S) : !0;
    })), V = k(() => Array.isArray(w.value) ? w.value.length > 0 : !!w.value), A = k(() => ({
      "custom-select__text-container": !0,
      "custom-select__text-container--dark": n.dark,
      "custom-select__text-container--opened": p.value,
      "custom-select__text-container--active": V.value,
      "custom-select__text-container--disabled": n.disabled,
      "custom-select__text-container--outlined": n.outlined,
      "custom-select__text-container--error": !!n.errorMessage
    })), L = k(() => {
      var h;
      if (w.value)
        if (Array.isArray(w.value)) {
          if (w.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(w.value, n.itemTitle, w.value);
          {
            const S = (h = n.items) == null ? void 0 : h.find((E) => {
              const K = r(E, n.itemValue, E), Q = r(w.value, n.itemValue, w.value);
              return K === Q;
            });
            return r(S, n.itemTitle, S);
          }
        }
      return "";
    });
    function U(h) {
      return r(h, n.itemTitle, h);
    }
    function G() {
      f.value = !0;
    }
    function J() {
      f.value = !1;
    }
    function N(h) {
      return {
        "custom-select__menu-item": !0,
        "custom-select__menu-item--selected": l(h)
      };
    }
    async function $() {
      await dt();
      const h = s.value, S = b.value;
      if (!h || !S)
        return;
      const E = h.getBoundingClientRect(), K = S.getBoundingClientRect();
      o.value = `${E.left}px`, i.value = `${E.width}px`;
      const Q = E.top + E.height + K.height, x = window.innerHeight, _ = E.top + E.height - (n.errorMessage ? 18 : 0);
      if (Q > x) {
        const z = Q - x;
        a.value = `${_ - z - 16}px`;
      } else
        a.value = `${_}px`;
    }
    function M() {
      n.disabled || n.readonly || p.value || (p.value = !0, $(), v.value = !0, document.addEventListener("click", re));
    }
    function P() {
      p.value = !1, f.value = !1, v.value = !1, document.removeEventListener("click", re);
    }
    function Z() {
      f.value || P();
    }
    function ee() {
      p.value && P();
    }
    function re(h) {
      !s.value || !h.target || s.value.contains(h.target) || P();
    }
    function j() {
      n.disabled || n.readonly || (p.value ? (P(), m.value && m.value.focus()) : (M(), m.value && m.value.blur()));
    }
    function C(h) {
      const S = r(h, n.itemValue, h);
      if (n.multiple && Array.isArray(w.value)) {
        const E = w.value.slice(), K = n.returnObject ? E.findIndex((Q) => r(Q, n.itemValue, Q) === S) : E.indexOf(S);
        K >= 0 ? E.splice(K, 1) : E.push(n.returnObject ? h : S), w.value = E;
      } else
        w.value = n.returnObject ? h : S, P();
    }
    function l(h) {
      if (n.multiple && Array.isArray(w.value))
        return w.value.some((K) => {
          const Q = r(K, n.itemValue, K), x = r(h, n.itemValue, h);
          return Q === x;
        });
      const S = r(w.value, n.itemValue, w.value), E = r(h, n.itemValue, h);
      return S === E;
    }
    function d() {
      Array.isArray(w.value) ? w.value = [] : w.value = null;
    }
    return (h, S) => (y(), O("div", {
      ref_key: "container",
      ref: s,
      class: "custom-select__container",
      onMouseenter: G,
      onMouseleave: J
    }, [
      H("div", {
        class: ie(c(A)),
        onMousedown: Ee(j, ["stop"])
      }, [
        H("input", {
          ref_key: "input",
          ref: m,
          readonly: "",
          value: c(L),
          placeholder: e.placeholder,
          class: "custom-select__text",
          onFocus: M,
          onBlur: Z,
          onKeydown: ge(ee, ["tab"])
        }, null, 40, yh),
        H("div", {
          class: "custom-select__clear",
          onMousedown: S[0] || (S[0] = Ee(() => {
          }, ["stop"])),
          onClick: Ee(d, ["stop"])
        }, [
          c(D) ? (y(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : T("", !0)
        ], 40, vh),
        H("div", hh, [
          be(He, {
            size: "1rem",
            color: c(R),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ])
      ], 42, mh),
      be(yt, null, {
        default: X(() => [
          p.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: b,
            class: "custom-select__menu"
          }, [
            e.searchable ? (y(), O("div", gh, [
              xt(H("input", {
                "onUpdate:modelValue": S[1] || (S[1] = (E) => u.value = E),
                type: "text",
                placeholder: "Buscar",
                class: "custom-select__search",
                onClick: S[2] || (S[2] = Ee(() => {
                }, ["stop"]))
              }, null, 512), [
                [Ml, u.value]
              ]),
              be(He, {
                size: "1rem",
                color: "acento-principal",
                name: "fm-magnify-glass"
              })
            ])) : T("", !0),
            (y(!0), O(ye, null, Te(c(Y), (E, K) => (y(), O("div", {
              key: `item-${K}`,
              class: ie(N(E)),
              onClick: Ee((Q) => C(E), ["stop"])
            }, [
              e.multiple ? (y(), te(Bl, {
                key: 0,
                "model-value": l(E)
              }, null, 8, ["model-value"])) : T("", !0),
              Ae(" " + he(U(E)), 1)
            ], 10, bh))), 128)),
            c(Y).length === 0 ? (y(), O("div", _h, " Sin datos disponibles ")) : T("", !0),
            q(h.$slots, "append-item", {}, void 0, !0)
          ], 512)) : T("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (y(), O("div", wh, he(e.errorMessage), 1)) : T("", !0)
    ], 544));
  }
});
const qo = /* @__PURE__ */ ke(kh, [["__scopeId", "data-v-67ea42d3"]]);
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
    const { mask: i, escaped: u } = this.escapeMask(n), p = [], f = this.opts.tokens != null ? this.opts.tokens : {}, v = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : i.length - 1, b = this.isReversed() ? () => Y > -1 && V > -1 : () => Y < i.length && V < t.length, w = (A) => !this.isReversed() && A <= s || this.isReversed() && A >= s;
    let D, R = -1, Y = this.isReversed() ? i.length - 1 : 0, V = this.isReversed() ? t.length - 1 : 0;
    for (; b(); ) {
      const A = i.charAt(Y), L = f[A], U = (L == null ? void 0 : L.transform) != null ? L.transform(t.charAt(V)) : t.charAt(V);
      if (!u.includes(Y) && L != null) {
        if (U.match(L.pattern) != null)
          p[m](U), L.repeated ? (R === -1 ? R = Y : Y === s && Y !== R && (Y = R - v), s === R && (Y -= v)) : L.multiple && (Y -= v), Y += v;
        else if (L.multiple) {
          const G = ((a = p[V - v]) == null ? void 0 : a.match(L.pattern)) != null, J = i.charAt(Y + v);
          G && J !== "" && f[J] == null ? (Y += v, V -= v) : p[m]("");
        } else
          U === D ? D = void 0 : L.optional && (Y += v, V -= v);
        V += v;
      } else
        r && !this.isEager() && p[m](A), U === A && !this.isEager() ? V += v : D = A, this.isEager() || (Y += v);
      if (this.isEager())
        for (; w(Y) && (f[i.charAt(Y)] == null || u.includes(Y)); )
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
      let f = i;
      if (o.isEager()) {
        const v = o.masked(i), m = o.unmasked(i);
        m === "" && "data" in r && r.data != null ? f = r.data : m !== o.unmasked(v) && (f = m);
      }
      if (this.setMaskedValue(a, f), "inputType" in r && (r.inputType.startsWith("delete") || u != null && u < i.length))
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
      c1a04602: c(u),
      "6895a22e": c(i)
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
      return n.clearable && (R += " 1rem"), f() && (R += " 1rem"), R;
    }), u = k(() => n.clearable || f() ? "0.75rem" : 0), p = k(() => ({
      "custom-text-field__input-container": !0,
      "custom-text-field__input-container--dark": n.dark,
      "custom-text-field__input-container--outlined": n.outlined,
      "custom-text-field__input-container--disabled": n.disabled,
      "custom-text-field__input-container--error": !!n.errorMessage,
      "custom-text-field__input-container--focused": a.value || !!o.value
    })), f = () => !!r.append, v = () => {
      o.value && (o.value = "");
    }, m = (R) => {
      n.disabled || n.readonly || (a.value = !0, t("focus", R));
    }, s = (R) => {
      n.disabled || n.readonly || (a.value = !1, t("blur", R));
    }, b = (R) => {
      n.disabled || n.readonly || t("input", R);
    }, w = (R) => {
      n.disabled || n.readonly || t("keyup", R);
    }, D = (R) => {
      n.disabled || n.readonly || t("keydown", R);
    };
    return (R, Y) => (y(), O("div", Dh, [
      H("div", {
        class: ie(c(p))
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
          onInput: b,
          onKeyup: w,
          onKeydown: D
        }, null, 40, Rh)), [
          [Zo, c(o)],
          [c(Ch)]
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
          onInput: b,
          onKeyup: w,
          onKeydown: D
        }, null, 40, Mh)), [
          [Zo, c(o)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (y(), O("div", {
          key: 2,
          class: "custom-text-field__button",
          onClick: v
        }, [
          c(o) ? (y(), te(He, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : T("", !0)
        ])) : T("", !0),
        f() ? q(R.$slots, "append", { key: 3 }, void 0, !0) : T("", !0)
      ], 2),
      e.errorMessage ? (y(), O("div", Ih, he(e.errorMessage), 1)) : T("", !0)
    ]));
  }
});
const Go = /* @__PURE__ */ ke(Nh, [["__scopeId", "data-v-fb7b197f"]]), Bh = (e, t) => {
  const n = I(1), r = I([]), a = I("asc"), o = I(null), i = k(() => {
    const U = e.value.slice();
    return o.value ? U.sort((G, J) => {
      if (!o.value)
        return 0;
      const N = D(G, o.value.value), $ = D(J, o.value.value);
      let M = N > $ ? 1 : -1;
      return o.value.sort && (M = o.value.sort(N, $)), a.value === "asc" ? M : M * -1;
    }) : U;
  }), u = k(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), p = k(() => t.value !== null ? i.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? i.value : i.value.filter((U, G) => r.value[G] === n.value)), f = k(() => a.value), v = k(() => {
    const U = n.value;
    let G;
    return U === 1 ? G = [U, U + 1, U + 2] : U === u.value ? G = [U - 2, U - 1, U] : G = [U - 1, U, U + 1], G.filter((J) => J > 0 && J <= u.value);
  });
  function m() {
    n.value < u.value && n.value++;
  }
  function s() {
    n.value > 1 && n.value--;
  }
  function b(U) {
    return U.id ?? Object.values(U)[0];
  }
  function w(U, G) {
    const J = G.value;
    return `${b(U)}.${J}`;
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
    var J;
    U.sortable !== !1 && (n.value = 1, ((J = o.value) == null ? void 0 : J.value) === U.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = U, a.value = "asc"), t.value === null && (r.value = [], await dt(), L(G)));
  }
  function A(U) {
    var G;
    return ((G = o.value) == null ? void 0 : G.value) === U;
  }
  function L(U) {
    const G = [], J = U.getBoundingClientRect(), N = Math.floor(J.height - 52);
    let $ = 1, M = 0;
    const P = U.rows;
    for (let Z = 0; Z < P.length; Z++) {
      const ee = P[Z].offsetHeight;
      M += ee, M >= N && (M = ee, $++), G.push($);
    }
    r.value = [...G];
  }
  return {
    // Computed
    pages: v,
    pageCount: u,
    sortedItems: i,
    currentPage: n,
    getSortOrder: f,
    itemsCurrentPage: p,
    // Methods
    setItems: Y,
    nextPage: m,
    setSortBy: V,
    getRowKey: b,
    getCellKey: w,
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
    })), f = () => !!n.default, v = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await dt();
      const b = r.value.getBoundingClientRect(), w = s.target.getBoundingClientRect(), D = w.x + b.width;
      w.x < 0 ? (o.value = "0", i.value = "initial") : D >= window.innerWidth ? (o.value = "initial", i.value = "0") : w.x !== b.left ? o.value = `${w.x}px` : (o.value = "initial", i.value = "initial"), a.value = `${w.top + w.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value;
    }, m = () => {
      a.value = "", o.value = "", i.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value);
    };
    return (s, b) => (y(), O("div", {
      class: ie(c(p))
    }, [
      H("div", {
        onMouseenter: Ee(v, ["stop"]),
        onMouseleave: Ee(m, ["stop"])
      }, [
        q(s.$slots, "activator", {}, void 0, !0)
      ], 40, Ah),
      f() ? (y(), O("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        q(s.$slots, "default", {}, void 0, !0)
      ], 512)) : T("", !0)
    ], 2));
  }
});
const jr = /* @__PURE__ */ ke(Eh, [["__scopeId", "data-v-50fd21fc"]]), Yh = /* @__PURE__ */ fe({
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
      f72a63ea: e.containerSize,
      "0695c4d5": e.borderRadius,
      "49fc9571": c(i)
    }));
    const r = pt(), a = Je(), o = k(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), i = k(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = k(() => n.disabled ? "neutro-4" : n.color), p = () => !!r.default, f = (v) => {
      n.disabled || n.inactive || t("click", v);
    };
    return (v, m) => (y(), te(jr, { disabled: e.disabled }, We({
      activator: X(() => [
        H("div", {
          class: ie(c(o)),
          onClick: f
        }, [
          e.icon.startsWith("fm") ? (y(), te(He, {
            key: 0,
            name: e.icon,
            size: e.size,
            color: c(u)
          }, null, 8, ["name", "size", "color"])) : (y(), te(Rt, {
            key: 1,
            src: e.icon,
            size: e.size,
            color: c(u)
          }, null, 8, ["src", "size", "color"]))
        ], 2)
      ]),
      _: 2
    }, [
      p() && !e.disabled ? {
        name: "default",
        fn: X(() => [
          q(v.$slots, "default", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Co = /* @__PURE__ */ ke(Yh, [["__scopeId", "data-v-35d7f4fd"]]), Vh = { class: "data-table__container" }, Uh = ["onClick"], Fh = { class: "data-table__header-text" }, Wh = {
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
    xe((l) => ({
      "51f87e7f": e.height,
      "2ec37b53": e.maxHeight,
      "4fd18c7d": e.backgroundColor,
      "31af3f85": e.gridTemplateColumns
    }));
    const r = k(() => n.items), a = k(() => n.itemsPerPage), o = pt(), {
      pages: i,
      pageCount: u,
      currentPage: p,
      getSortOrder: f,
      itemsCurrentPage: v,
      nextPage: m,
      setSortBy: s,
      getRowKey: b,
      isSortedBy: w,
      getCellKey: D,
      getCellValue: R,
      previousPage: Y,
      setCurrentPage: V,
      calculatePagination: A
    } = Bh(r, a);
    Xe(J);
    const L = I(null), U = k(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), G = k(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    }));
    function J() {
      n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null || L.value && A(L.value);
    }
    function N(l) {
      return !!o[l];
    }
    function $(l) {
      return w(l) ? f.value === "asc" ? "fm-arrow-down" : "fm-arrow-up" : "fm-arrow-down";
    }
    function M(l) {
      return {
        "data-table__footer-page": !0,
        "data-table__footer-page--selected": l === p.value
      };
    }
    function P(l) {
      return {
        "data-table__sort-icon": !0,
        "data-table__sort-icon--active": w(l)
      };
    }
    function Z(l) {
      return {
        "data-table__th": !0,
        "data-table__th--sortable": l.sortable !== !1
      };
    }
    function ee(l) {
      return {
        "data-table__row": !0,
        "data-table__row--sticky-last": n.stickyLastColumn,
        "data-table__row--sticky-first": n.stickyFirstColumn,
        "data-table__row--selected": l[n.compareSelectedWith] === n.selected,
        "data-table__row--disabled": n.disabledKey && n.disabledValue && l[n.disabledKey] === n.disabledValue
      };
    }
    function re(l) {
      return w(l) ? "acento-secundario" : "neutro-3";
    }
    function j(l) {
      L.value && s(l, L.value);
    }
    function C(l) {
      t("click:row", l);
    }
    return ut(() => n.items, J), (l, d) => (y(), O("div", Vh, [
      H("table", {
        class: ie(c(G)),
        "aria-describedby": "Reutility"
      }, [
        H("thead", {
          class: ie(c(U))
        }, [
          H("tr", null, [
            (y(!0), O(ye, null, Te(e.headers, (h) => (y(), O("th", {
              key: h.value,
              class: ie(Z(h)),
              onClick: (S) => j(h)
            }, [
              H("div", Fh, [
                N(`header.${h.value}`) ? q(l.$slots, `header.${h.value}`, {
                  key: 0,
                  headerText: h.text
                }, void 0, !0) : (y(), O(ye, { key: 1 }, [
                  Ae(he(h.text), 1)
                ], 64))
              ]),
              h.sortable !== !1 ? (y(), O("div", {
                key: 0,
                class: ie(P(h.value))
              }, [
                be(He, {
                  name: $(h.value),
                  color: re(h.value)
                }, null, 8, ["name", "color"])
              ], 2)) : T("", !0)
            ], 10, Uh))), 128))
          ])
        ], 2),
        H("tbody", {
          ref_key: "tableBodyRef",
          ref: L,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (y(), O("tr", Wh, [
            N("no-data") ? T("", !0) : (y(), O(ye, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (y(), te(He, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? T("", !0) : (y(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ae(" " + he(e.noDataText), 1)
            ], 64)),
            q(l.$slots, "no-data", {}, void 0, !0)
          ])) : T("", !0),
          (y(!0), O(ye, null, Te(c(v), (h) => (y(), O("tr", {
            key: c(b)(h),
            class: ie(ee(h)),
            onClick: (S) => C(h)
          }, [
            (y(!0), O(ye, null, Te(e.headers, (S) => (y(), O("td", {
              key: c(D)(h, S)
            }, [
              N(S.value) ? q(l.$slots, S.value, {
                key: 0,
                item: h
              }, void 0, !0) : (y(), O(ye, { key: 1 }, [
                Ae(he(c(R)(h, S.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, Hh))), 128))
        ], 512)
      ], 2),
      c(u) > 1 ? (y(), O("div", Lh, [
        be(Co, {
          size: "1rem",
          icon: "fm-arrow-left",
          color: "acento-principal",
          disabled: c(p) === 1,
          onClick: c(Y)
        }, null, 8, ["disabled", "onClick"]),
        H("div", zh, [
          (y(!0), O(ye, null, Te(c(i), (h) => (y(), O("button", {
            key: `page-${h}`,
            class: ie(M(h)),
            onClick: (S) => c(V)(h)
          }, he(h), 11, jh))), 128))
        ]),
        be(Co, {
          size: "1rem",
          icon: "fm-arrow-right",
          color: "acento-principal",
          disabled: c(p) === c(u),
          onClick: c(m)
        }, null, 8, ["disabled", "onClick"])
      ])) : T("", !0)
    ]));
  }
});
const Gh = /* @__PURE__ */ ke(qh, [["__scopeId", "data-v-702e0a38"]]), Qh = /* @__PURE__ */ fe({
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
      color: c(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": c(r),
      "text-transform": e.textTransform
    }, {
      default: X(() => [
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
        modelValue: c(r),
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
const Jh = /* @__PURE__ */ ke(Xh, [["__scopeId", "data-v-4d3bdb3f"]]), eg = { class: "filter-select__container" }, tg = { class: "filter-select__label" }, ng = /* @__PURE__ */ fe({
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
        modelValue: c(a),
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
        c(r)["append-item"] ? {
          name: "append-item",
          fn: X(() => [
            q(o.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform"])
    ]));
  }
});
const rg = /* @__PURE__ */ ke(ng, [["__scopeId", "data-v-e667d313"]]), ag = { class: "flex__container" }, og = /* @__PURE__ */ fe({
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
    })), (t, n) => (y(), O("div", ag, [
      q(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const yu = /* @__PURE__ */ ke(og, [["__scopeId", "data-v-4706ceca"]]), ig = { class: "form-date-picker__container" }, lg = { class: "form-date-picker__label" }, ug = /* @__PURE__ */ fe({
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
      dfcc6cf2: c(a)
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
        modelValue: c(r),
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
const sg = /* @__PURE__ */ ke(ug, [["__scopeId", "data-v-e3f90221"]]), cg = { class: "form-select__container" }, fg = { class: "form-select__label" }, dg = /* @__PURE__ */ fe({
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
      "0563447c": c(o)
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
        modelValue: c(a),
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
        c(r)["append-item"] ? {
          name: "append-item",
          fn: X(() => [
            q(i.$slots, "append-item", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform"])
    ]));
  }
});
const pg = /* @__PURE__ */ ke(dg, [["__scopeId", "data-v-a76ba798"]]), mg = { class: "form-text-field__container" }, yg = { class: "form-text-field__label" }, vg = /* @__PURE__ */ fe({
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
      "1c87faee": c(o)
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
    }, f = (s) => {
      t("input", s);
    }, v = (s) => {
      t("keyup", s);
    }, m = (s) => {
      t("keydown", s);
    };
    return (s, b) => (y(), O("div", mg, [
      H("div", yg, he(e.label), 1),
      be(Go, {
        modelValue: c(a),
        "onUpdate:modelValue": b[0] || (b[0] = (w) => Fe(a) ? a.value = w : null),
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
        onInput: f,
        onKeyup: v,
        onFocus: u,
        onKeydown: m
      }, We({ _: 2 }, [
        i() ? {
          name: "append",
          fn: X(() => [
            q(s.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const hg = /* @__PURE__ */ ke(vg, [["__scopeId", "data-v-8806e5e8"]]), gg = { class: "header-tabs__container" }, bg = ["onClick"], _g = /* @__PURE__ */ fe({
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
    xe((f) => ({
      "23c11578": e.columnGap,
      "1d8cf5db": c(o),
      "3f1506a2": c(i)
    }));
    const r = Je(), a = k({
      get() {
        return n.modelValue;
      },
      set(f) {
        t("update:model-value", f);
      }
    }), o = k(() => r.getRealColor(n.color)), i = k(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (f) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === f
    }), p = (f) => {
      a.value = f;
    };
    return (f, v) => (y(), O("div", gg, [
      (y(!0), O(ye, null, Te(e.items, (m, s) => (y(), O("button", {
        key: `tab-${s}`,
        class: ie(u(s)),
        onClick: (b) => p(s)
      }, he(m), 11, bg))), 128))
    ]));
  }
});
const wg = /* @__PURE__ */ ke(_g, [["__scopeId", "data-v-bc4f98ee"]]), kg = ["alt", "src"], Sg = /* @__PURE__ */ fe({
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
    return (i, u) => (y(), O("img", {
      alt: e.alt,
      src: c(r),
      class: ie(c(a)),
      onClick: o
    }, null, 10, kg));
  }
});
const $g = /* @__PURE__ */ ke(Sg, [["__scopeId", "data-v-2d0c5d22"]]), Og = { class: "information-text__container" }, xg = { class: "information-text__label" }, Tg = { class: "information-text__value" }, Pg = /* @__PURE__ */ fe({
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
    })), (t, n) => (y(), O("div", Og, [
      H("div", xg, he(e.label), 1),
      H("div", Tg, [
        q(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const Cg = /* @__PURE__ */ ke(Pg, [["__scopeId", "data-v-75c5c153"]]), Dg = {
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
      "5b5105e1": e.justifyContent,
      adc51118: e.labelWeight,
      "051666a4": e.width,
      "34b9234d": c(u)
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
    })), f = k(() => ({
      "page-switch__container": !0,
      "page-switch__container--disabled": n.disabled
    })), v = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (m, s) => (y(), te(jr, { disabled: e.disabled }, We({
      activator: X(() => [
        H("div", {
          class: ie(c(f)),
          onClick: v
        }, [
          e.label ? (y(), O("div", Dg, he(e.label), 1)) : T("", !0),
          H("div", Rg, [
            xt(H("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (b) => Fe(a) ? a.value = b : null),
              type: "checkbox",
              class: "page-switch__checkbox"
            }, null, 512), [
              [$u, c(a)]
            ]),
            H("div", {
              class: ie(c(p))
            }, null, 2)
          ])
        ], 2)
      ]),
      _: 2
    }, [
      e.tooltip && !e.disabled ? {
        name: "default",
        fn: X(() => [
          Ae(he(e.tooltip), 1)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Ig = /* @__PURE__ */ ke(Mg, [["__scopeId", "data-v-a322991a"]]), Ng = /* @__PURE__ */ fe({
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
      "1ef6cbe8": c(o),
      befa93fe: e.iconSize
    }));
    const r = Je(), a = k(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = k(() => r.getRealColor(n.backgroundColor)), i = () => {
      t("click:close");
    };
    return (u, p) => (y(), O("div", {
      class: ie(c(a))
    }, [
      be(Tt, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: X(() => [
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
      ])) : T("", !0)
    ], 2));
  }
});
const Bg = /* @__PURE__ */ ke(Ng, [["__scopeId", "data-v-e0769a10"]]), Ag = /* @__PURE__ */ fe({
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
      modelValue: c(r),
      "onUpdate:modelValue": o[0] || (o[0] = (i) => Fe(r) ? r.value = i : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: X(() => [
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
    return ut(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), ut(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (y(), te(Ro, {
      persistent: "",
      "model-value": c(r)
    }, {
      default: X(() => [
        c(r) ? (y(), te(Hr, {
          key: 0,
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: X(() => [
            be(yu, { "justify-content": "center" }, {
              default: X(() => [
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
              default: X(() => [
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
              default: X(() => [
                Ae(he(e.subtitle), 1)
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
const Yg = /* @__PURE__ */ ke(Eg, [["__scopeId", "data-v-946512d1"]]);
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
    let f = 0, v = 0;
    const m = u, s = u - p;
    return u === p ? f = 0 : u === a && o >= i ? f = 60 * ((o - i) / s) : u === a && o < i ? f = 60 * ((o - i) / s) + 360 : u === o ? f = 60 * ((i - a) / s) + 120 : u === i && (f = 60 * ((a - o) / s) + 240), u > 0 && (v = 1 - p / u), [Math.round(f), Math.round(v * 100) / 100, Math.round(m * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, i = r * (1 - n), u = r * (1 - o * n), p = r * (1 - (1 - o) * n);
    let f = 0, v = 0, m = 0;
    switch (a) {
      case 0:
        f = r, v = p, m = i;
        break;
      case 1:
        f = u, v = r, m = i;
        break;
      case 2:
        f = i, v = r, m = p;
        break;
      case 3:
        f = i, v = u, m = r;
        break;
      case 4:
        f = p, v = i, m = r;
        break;
      case 5:
        f = r, v = i, m = u;
        break;
    }
    return [Math.round(f * 255), Math.round(v * 255), Math.round(m * 255)];
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
const Qo = (e) => (Ou("data-v-851bc20e"), e = e(), xu(), e), Vg = ["onMousedown"], Ug = /* @__PURE__ */ Qo(() => /* @__PURE__ */ H("div", { class: "color-picker__canvas-thumb" }, null, -1)), Fg = [
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
      "44519b14": c(D),
      "21503e0b": c(Y),
      d11f3254: c(R),
      "40a1b156": p.value,
      "67f5cab4": i.value
    }));
    const { getRealColor: r } = Je(), a = I(!1), o = I(!1), i = I("translateX(0)"), u = I(null), p = I("translate(0, 0"), f = I(null), v = Ct(kt.fromHex(n.modelValue)), m = Ct({
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
    const b = k({
      get() {
        return n.modelValue;
      },
      set(j) {
        t("update:model-value", j);
      }
    }), w = k(() => ({
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
      if (!f.value || !u.value)
        return;
      const j = u.value.getBoundingClientRect(), C = v.hue / 360 * j.width;
      i.value = `translateX(${C}px)`;
      const l = f.value.getBoundingClientRect(), d = v.saturation * l.width, h = (1 - v.value) * l.height;
      p.value = `translate(${d}px, ${h}px)`, b.value = v.hex;
    }
    function L(j) {
      const C = Math.min(m.width, Math.max(0, j.clientX - m.left));
      v.hue = C / m.width * 360, i.value = `translateX(${C}px)`, b.value = v.hex;
    }
    function U(j) {
      if (!f.value)
        return;
      const C = f.value.getBoundingClientRect(), l = Math.min(C.width, Math.max(0, j.clientX - C.left)), d = Math.min(C.height, Math.max(0, j.clientY - C.top));
      v.saturation = l / C.width, v.value = 1 - d / C.height, p.value = `translate(${l}px, ${d}px)`, b.value = v.hex;
    }
    function G(j) {
      if (!f.value)
        return;
      const C = f.value.getBoundingClientRect();
      s.top = C.top, s.left = C.left, s.width = C.width, s.height = C.height, o.value = !0, U(j), M();
    }
    function J(j) {
      if (!u.value)
        return;
      const C = u.value.getBoundingClientRect();
      m.left = C.left, m.width = C.width, a.value = !0, L(j), M();
    }
    function N(j) {
      a.value ? L(j) : o.value && U(j);
    }
    function $() {
      a.value = !1, P();
    }
    function M() {
      document.addEventListener("mouseup", $), document.addEventListener("mousemove", N);
    }
    function P() {
      document.removeEventListener("mouseup", $), document.removeEventListener("mousemove", N);
    }
    function Z(j) {
      const C = ["v", "c"];
      j.ctrlKey && C.includes(j.key) || j.preventDefault();
    }
    function ee(j) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": b.value === j
      };
    }
    function re(j) {
      V.value = j, b.value = j;
    }
    return (j, C) => (y(), O("div", {
      class: ie(c(w))
    }, [
      H("div", {
        ref_key: "canvasRef",
        ref: f,
        class: "color-picker__canvas",
        onMousedown: Ee(G, ["stop", "prevent"])
      }, Fg, 40, Vg),
      H("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: Ee(J, ["stop", "prevent"])
      }, Lg, 40, Wg),
      H("div", zg, [
        jg,
        xt(H("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (l) => Fe(V) ? V.value = l : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Ml, c(V)]
        ])
      ]),
      H("div", qg, [
        (y(!0), O(ye, null, Te(e.pickableColors, (l, d) => (y(), O("div", {
          key: `pickable-color-${d}`,
          style: St(`--color: ${l}`),
          class: ie(ee(l)),
          onClick: (h) => re(l)
        }, null, 14, Gg))), 128))
      ])
    ], 2));
  }
});
const vu = /* @__PURE__ */ ke(Qg, [["__scopeId", "data-v-851bc20e"]]), Zg = { class: "form-color-picker__label" }, Kg = /* @__PURE__ */ fe({
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
      dd83820e: e.gridTemplateColumns,
      b764ef9a: c(D),
      cb454576: c(v),
      "4c14fa71": r.value,
      "36868a6b": a.value
    }));
    const r = I(""), a = I(""), o = I(""), i = I(!1), u = I(!1), p = I(null), f = I(null), v = k({
      get() {
        return n.modelValue;
      },
      set(R) {
        t("update:model-value", R);
      }
    }), m = async () => {
      await dt();
      const R = p.value, Y = f.value;
      if (!R || !Y)
        return;
      const V = R.getBoundingClientRect(), A = Y.getBoundingClientRect();
      a.value = `${V.left}px`, o.value = `${V.width}px`;
      const L = V.top + V.height + A.height, U = window.innerHeight, G = V.top + V.height;
      if (L > U) {
        const J = L - U;
        r.value = `${G - J - 16}px`;
      } else
        r.value = `${G}px`;
    }, s = () => {
      n.disabled || n.readonly || i.value || (i.value = !0, m(), u.value = !0, document.addEventListener("click", b));
    }, b = (R) => {
      !p.value || !R.target || p.value.contains(R.target) || w();
    }, w = () => {
      i.value = !1, u.value = !1, document.removeEventListener("click", b);
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
        default: X(() => [
          i.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: f,
            class: "form-color-picker__menu"
          }, [
            be(vu, {
              modelValue: c(v),
              "onUpdate:modelValue": Y[0] || (Y[0] = (V) => Fe(v) ? v.value = V : null),
              dark: e.dark,
              background: e.background,
              "pickable-colors": e.pickableColors
            }, null, 8, ["modelValue", "dark", "background", "pickable-colors"])
          ], 512)) : T("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
const Xg = /* @__PURE__ */ ke(Kg, [["__scopeId", "data-v-7110e29a"]]), Jg = ["onMousedown"], e0 = /* @__PURE__ */ fe({
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
    })), Xe(() => {
      t.default === !0 && v();
    });
    const n = I(""), r = I(""), a = I(""), o = I(!1), i = I(!1), u = I(null), p = I(null), f = async () => {
      n.value = "", r.value = "", await dt();
      const w = u.value, D = p.value;
      if (!w || !D)
        return;
      const R = w.getBoundingClientRect(), Y = D.getBoundingClientRect(), V = t.nudgeLeft - t.nudgeRight, A = t.nudgeTop - t.nudgeBottom, L = R.left + V;
      r.value = `${L}px`, a.value = `${R.width}px`;
      const U = R.top + R.height + Y.height, G = window.innerHeight, J = R.top + R.height + A;
      if (U > G) {
        const M = U - G;
        n.value = `${J - M - 16}px`;
      } else
        n.value = `${J}px`;
      const N = Y.right, $ = window.innerWidth;
      if (N > $) {
        const M = N - $;
        r.value = `${L - M}px`;
      }
    }, v = () => {
      t.disabled && !t.default || (o.value = !0, f(), !t.disabled && (i.value = !0, document.addEventListener("click", s)));
    }, m = () => {
      t.disabled || (o.value = !1, i.value = !1, document.removeEventListener("click", s));
    }, s = (w) => {
      !u.value || !w.target || u.value.contains(w.target) || m();
    }, b = () => {
      t.disabled || (o.value ? m() : v());
    };
    return (w, D) => (y(), O("div", {
      ref_key: "container",
      ref: u,
      class: "custom-menu__container"
    }, [
      H("div", {
        onMousedown: Ee(b, ["stop"])
      }, [
        q(w.$slots, "activator", {}, void 0, !0)
      ], 40, Jg),
      be(yt, null, {
        default: X(() => [
          o.value ? (y(), O("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: p,
            class: "custom-menu__menu"
          }, [
            q(w.$slots, "default", { close: m }, void 0, !0)
          ], 512)) : T("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const t0 = /* @__PURE__ */ ke(e0, [["__scopeId", "data-v-de3c3a3e"]]), n0 = { class: "expansion-panel__content" }, r0 = /* @__PURE__ */ fe({
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
      "38b8b2fd": e.boxShadow,
      "089aa26c": e.borderRadius,
      "06bcc5e2": c(p),
      "5465fe17": e.transitionDuration,
      "02dce085": e.transitionTimingFunction
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
    function f() {
      o.value = !o.value;
    }
    return (v, m) => (y(), O("div", {
      class: ie(c(i))
    }, [
      H("div", {
        class: "expansion-panel__activator",
        onClick: f
      }, [
        q(v.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      H("div", {
        class: ie(c(u))
      }, [
        H("div", n0, [
          q(v.$slots, "default", {}, void 0, !0)
        ])
      ], 2)
    ], 2));
  }
});
const a0 = /* @__PURE__ */ ke(r0, [["__scopeId", "data-v-d630979d"]]), o0 = { class: "grid__container" }, i0 = /* @__PURE__ */ fe({
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
      a859d660: c(r),
      "102d70a4": e.gridTemplateColumns
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", o0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const l0 = /* @__PURE__ */ ke(i0, [["__scopeId", "data-v-546aaa6e"]]), u0 = { class: "absolute__container" }, s0 = /* @__PURE__ */ fe({
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
      "2eec0816": c(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", u0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const c0 = /* @__PURE__ */ ke(s0, [["__scopeId", "data-v-b5f56ae6"]]), f0 = { class: "relative__container" }, d0 = /* @__PURE__ */ fe({
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
      "3adb92b4": c(r)
    }));
    const n = Je(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (y(), O("div", f0, [
      q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const p0 = /* @__PURE__ */ ke(d0, [["__scopeId", "data-v-c8285f36"]]), m0 = /* @__PURE__ */ fe({
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
      default: X(() => [
        be(jr, null, We({
          activator: X(() => [
            be(Tt, {
              padding: "0.125rem 0",
              "text-transform": e.textTransform,
              "predefined-style": e.opened && e.showActiveStyle ? "body-2" : "body-1",
              color: e.opened && e.showActiveStyle ? "acento-principal" : "secundario"
            }, {
              default: X(() => [
                Ae(he(e.title), 1)
              ]),
              _: 1
            }, 8, ["text-transform", "predefined-style", "color"])
          ]),
          _: 2
        }, [
          n() ? {
            name: "default",
            fn: X(() => [
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
            default: X(() => [
              Ae(he(o), 1)
            ]),
            _: 2
          }, 1032, ["color"]))
        ], 64))), 128)) : T("", !0)
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
    xe((f) => ({
      "072260b7": e.width,
      "794a8754": e.height,
      c5747066: e.borderRadius,
      "290800a0": c(o),
      f76d0492: e.objectPosition,
      b914f27a: e.objectFit
    }));
    const r = I(null), a = k({
      get() {
        return n.modelValue;
      },
      set(f) {
        t("update:model-value", f);
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
      const f = (v = r.value.files) == null ? void 0 : v[0];
      f && (a.value = f, r.value.value = "");
    }
    return (f, v) => (y(), O("div", {
      class: ie(c(i))
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
const v0 = /* @__PURE__ */ ke(y0, [["__scopeId", "data-v-6bd971ca"]]), b0 = (e) => {
  Nl().generateOverlayContainer(), e.component("AbsoluteContainer", c0), e.component("RelativeContainer", p0), e.component("CheckBox", Bl), e.component("ConfirmationDialog", Ju), e.component("CustomButton", pa), e.component("CustomDatePicker", jo), e.component("CustomDialog", Ro), e.component("CustomSelect", qo), e.component("CustomTextField", Go), e.component("DataTable", Gh), e.component("DataTableItem", Qh), e.component("FilterDatePicker", Jh), e.component("FilterSelect", rg), e.component("FlexContainer", yu), e.component("FormDatePicker", sg), e.component("FormSelect", pg), e.component("FormTextField", hg), e.component("GridColumn", Hr), e.component("GridRow", Al), e.component("HeaderTabs", wg), e.component("IconButton", Co), e.component("ImageContainer", $g), e.component("InformationText", Cg), e.component("PageSwitch", Ig), e.component("PanelTitle", Bg), e.component("SearchTextField", Ag), e.component("SuccessDialog", Yg), e.component("SvgIcon", Rt), e.component("TextContainer", Tt), e.component("FormColorPicker", Xg), e.component("ColorPicker", vu), e.component("CustomMenu", t0), e.component("FigmaIcon", He), e.component("ExpansionPanel", a0), e.component("GridContainer", l0), e.component("CustomTooltip", jr), e.component("ExpandableDataTableItem", m0), e.component("ImageInput", v0);
};
export {
  b0 as componentesReutility
};
