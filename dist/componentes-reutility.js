var ku = Object.defineProperty;
var xu = (e, t, n) => t in e ? ku(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fn = (e, t, n) => (xu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as R, defineComponent as ie, useCssVars as xe, unref as f, onMounted as qe, computed as b, watch as Ze, openBlock as v, createElementBlock as k, createElementVNode as Y, normalizeClass as fe, createVNode as pe, Transition as yt, withCtx as K, createBlock as te, createCommentVNode as D, renderSlot as j, Fragment as me, nextTick as lt, useSlots as mt, isRef as Ye, createTextVNode as Ie, toDisplayString as he, reactive as Pt, toRef as nr, onUnmounted as Ro, mergeProps as je, createSlots as Le, renderList as Te, normalizeProps as Ke, guardReactiveProps as pt, resolveDynamicComponent as Il, Teleport as Su, withKeys as be, withModifiers as Ee, normalizeStyle as St, withDirectives as Ct, vShow as pn, onBeforeUpdate as $u, getCurrentScope as Ou, onScopeDispose as Tu, vModelDynamic as Ko, vModelCheckbox as Pu, vModelText as Cu, pushScopeId as Mo, popScopeId as Io } from "vue";
const Nl = R(null);
function Du() {
  const e = document.createElement("div");
  e.classList.add("custom-tooltip--overlay"), document.body.appendChild(e), Nl.value = e;
}
function Bl() {
  return {
    overlayContainer: Nl,
    generateOverlayContainer: Du
  };
}
const Ge = () => {
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
}, Ru = /* @__PURE__ */ ie({
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
    const n = Ge();
    qe(() => {
      o();
    });
    const r = R(null), a = b(() => n.getRealColor(t.color)), o = async () => {
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
    return Ze(() => t.src, o), Ze(() => t.size, o), (i, u) => (v(), k("div", {
      ref_key: "svgContent",
      ref: r,
      class: "svg-icon__container"
    }, null, 512));
  }
});
const we = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Rt = /* @__PURE__ */ we(Ru, [["__scopeId", "data-v-b7e98673"]]), Mu = { class: "font-awesome-icon__container" }, Iu = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => `icon-${t.name}`), a = b(() => n.getRealColor(t.color));
    return (o, i) => (v(), k("div", Mu, [
      Y("em", {
        class: fe(f(r))
      }, null, 2)
    ]));
  }
});
const Fe = /* @__PURE__ */ we(Iu, [["__scopeId", "data-v-f943628b"]]), Nu = {
  key: 0,
  class: "check-box__icon"
}, Al = /* @__PURE__ */ ie({
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
    const n = e, r = b({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), a = b(() => ({
      "check-box__container": !0,
      "check-box__container--disabled": n.disabled
    })), o = b(() => n.disabled ? "neutro-4" : n.boxColor), i = b(() => n.disabled ? "neutro-4" : n.checkedColor), u = () => {
      n.readonly || n.disabled || (r.value = !r.value);
    };
    return (m, d) => (v(), k("div", {
      class: fe(f(a)),
      onClick: u
    }, [
      pe(yt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: K(() => [
          f(r) ? (v(), k("div", Nu, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (v(), te(Fe, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (v(), te(Rt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(i)
            }, null, 8, ["src", "size", "color"])) : D("", !0)
          ])) : D("", !0)
        ]),
        _: 1
      }),
      e.boxIcon && e.boxIcon.startsWith("fm") ? (v(), te(Fe, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: f(o)
      }, null, 8, ["name", "size", "color"])) : e.boxIcon ? (v(), te(Rt, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: f(o)
      }, null, 8, ["src", "size", "color"])) : D("", !0)
    ], 2));
  }
});
const Bu = { class: "grid-row__container" }, Au = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), k("div", Bu, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const El = /* @__PURE__ */ we(Au, [["__scopeId", "data-v-65fb3aec"]]), Eu = { class: "grid-column__container" }, Vu = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), k("div", Eu, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Hr = /* @__PURE__ */ we(Vu, [["__scopeId", "data-v-4058c78a"]]), Yu = ["width", "height"], Fu = ["fill"], Uu = /* @__PURE__ */ Y("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Wu = [
  Uu
], Lu = ["fill"], Hu = /* @__PURE__ */ Y("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), zu = [
  Hu
], ju = ["fill"], qu = /* @__PURE__ */ Y("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Gu = [
  qu
], Qu = /* @__PURE__ */ ie({
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
    const t = e, n = Ge(), r = b(() => n.getRealColor(t.fill));
    return (a, o) => (v(), k("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 52 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      Y("circle", {
        r: "6",
        cx: "6",
        cy: "6",
        stroke: "none",
        fill: f(r)
      }, Wu, 8, Fu),
      Y("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: f(r)
      }, zu, 8, Lu),
      Y("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: f(r)
      }, Gu, 8, ju)
    ], 8, Yu));
  }
}), Zu = ["disabled"], Xu = { class: "custom-button__text" }, Ku = /* @__PURE__ */ ie({
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
      "6909c830": f(m),
      "461fbf50": f(u)
    }));
    const r = Ge(), a = b(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = b(() => r.getRealColor(n.color)), i = b(() => r.getRealColor(n.contentColor)), u = b(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), m = b(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), d = b(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined
    })), y = b(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), p = (s) => {
      n.disabled || t("click", s);
    };
    return (s, h) => (v(), k("button", {
      disabled: e.disabled,
      class: fe(f(d)),
      onClick: p
    }, [
      e.preppendIcon && !e.loading ? (v(), k(me, { key: 0 }, [
        e.preppendIcon && e.preppendIcon.startsWith("fm") ? (v(), te(Fe, {
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
      ], 64)) : D("", !0),
      Y("span", Xu, [
        e.loading ? (v(), te(Qu, {
          key: 0,
          fill: f(a)
        }, null, 8, ["fill"])) : j(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (v(), k(me, { key: 1 }, [
        e.appendIcon && e.appendIcon.startsWith("fm") ? (v(), te(Fe, {
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
      ], 64)) : D("", !0)
    ], 10, Zu));
  }
});
const ya = /* @__PURE__ */ we(Ku, [["__scopeId", "data-v-007c780d"]]), Ju = /* @__PURE__ */ ie({
  __name: "CustomDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    persistent: {
      type: Boolean
    },
    margin: {
      default: "auto",
      type: String
    }
  },
  emits: ["update:model-value", "closed"],
  setup(e, { emit: t }) {
    const n = e;
    xe((h) => ({
      f8894e10: e.margin
    }));
    const r = R(null), a = R(!1), o = R(!1), i = R(!1), u = b(() => ({
      custom__dialog: !0,
      "custom__dialog--closing": o.value,
      "custom__dialog--shaking": i.value,
      "custom__dialog--opening": a.value
    })), m = b({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    });
    Ze(m, (h) => {
      r.value && (h ? (a.value = !0, r.value.showModal()) : o.value = !0);
    });
    function d() {
      n.persistent ? i.value = !0 : m.value = !1;
    }
    function y(h) {
      h.target === h.currentTarget && d();
    }
    function p() {
      if (i.value)
        i.value = !1;
      else if (o.value) {
        if (o.value = !1, !r.value)
          return;
        r.value.close(), t("closed");
      } else
        a.value && (a.value = !1);
    }
    function s(h) {
      h.key === "Escape" && (h.preventDefault(), d());
    }
    return Ze(m, async (h) => {
      var g;
      h && (await lt(), (g = r.value) == null || g.focus());
    }), (h, g) => (v(), k("dialog", {
      ref_key: "dialogRef",
      ref: r,
      class: fe(f(u)),
      onClick: y,
      onKeydown: s,
      onAnimationend: p
    }, [
      j(h.$slots, "default", {}, void 0, !0)
    ], 34));
  }
});
const No = /* @__PURE__ */ we(Ju, [["__scopeId", "data-v-049c2987"]]), es = /* @__PURE__ */ ie({
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
    xe((g) => ({
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
      "9ebf9596": f(m),
      37143686: f(y),
      "0b5c4ef3": f(d),
      "1f388388": f(p)
    }));
    const r = mt(), a = Ge();
    qe(() => {
      s(n.specialText);
    });
    const o = R(null), i = b(() => {
      const g = ["text__container"];
      return n.clickable && g.push("text__container--clickable"), g.push(`text__container--${n.predefinedStyle}`), g;
    }), u = b(() => a.getRealColor(n.color)), m = b(() => a.getRealColor(n.hoverColor)), d = b(() => a.getRealColor(n.activeColor)), y = b(() => a.getRealColor(n.hoverBackground)), p = b(() => a.getRealColor(n.activeBackground)), s = (g) => {
      if (!g || !o.value || r.default)
        return;
      const M = /\*([^*]+)\*/g;
      o.value.innerHTML = g.replace(M, (W) => `<b>${W.slice(1, W.length - 1)}</b>`);
    }, h = (g) => {
      t("click", g);
    };
    return Ze(() => n.specialText, s), (g, M) => (v(), k("div", {
      ref_key: "container",
      ref: o,
      class: fe(f(i)),
      onClick: h
    }, [
      j(g.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const bt = /* @__PURE__ */ we(es, [["__scopeId", "data-v-ae760012"]]), ts = /* @__PURE__ */ ie({
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
    const n = e, r = b({
      get() {
        return n.modelValue;
      },
      set(i) {
        t("update:model-value", i);
      }
    });
    function a() {
      t("click:yes");
    }
    function o() {
      t("click:no");
    }
    return (i, u) => (v(), te(No, {
      modelValue: f(r),
      "onUpdate:modelValue": u[0] || (u[0] = (m) => Ye(r) ? r.value = m : null),
      persistent: ""
    }, {
      default: K(() => [
        pe(Hr, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: K(() => [
            pe(bt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: K(() => [
                Ie(he(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(bt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: K(() => [
                Ie(he(e.subtitle), 1)
              ]),
              _: 1
            })) : D("", !0),
            pe(El, { "column-gap": "0.75rem" }, {
              default: K(() => [
                pe(ya, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: K(() => [
                    Ie(" Sí ")
                  ]),
                  _: 1
                }),
                pe(ya, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: K(() => [
                    Ie(" No ")
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
function yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(n) {
    return typeof n;
  } : yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yn(e);
}
function de(e) {
  re(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || yn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Dt(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function gt(e, t) {
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
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function Vl(e, t) {
  if (re(2, arguments), !t || vn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, m = t.seconds ? ce(t.seconds) : 0, d = de(e), y = r || n ? gt(d, r + n * 12) : d, p = o || a ? Dt(y, o + a * 7) : y, s = u + i * 60, h = m + s * 60, g = h * 1e3, M = new Date(p.getTime() + g);
  return M;
}
function ns(e, t) {
  re(2, arguments);
  var n = de(e).getTime(), r = ce(t);
  return new Date(n + r);
}
var rs = {};
function wt() {
  return rs;
}
function Ft(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getDay(), g = (h < p ? 7 : 0) + h - p;
  return s.setDate(s.getDate() - g), s.setHours(0, 0, 0, 0), s;
}
function rr(e) {
  return re(1, arguments), Ft(e, {
    weekStartsOn: 1
  });
}
function as(e) {
  re(1, arguments);
  var t = de(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = rr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var i = rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function os(e) {
  re(1, arguments);
  var t = as(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = rr(n);
  return r;
}
function ar(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Jo(e) {
  re(1, arguments);
  var t = de(e);
  return t.setHours(0, 0, 0, 0), t;
}
var is = 864e5;
function ls(e, t) {
  re(2, arguments);
  var n = Jo(e), r = Jo(t), a = n.getTime() - ar(n), o = r.getTime() - ar(r);
  return Math.round((a - o) / is);
}
function Yl(e, t) {
  re(2, arguments);
  var n = ce(t);
  return gt(e, n * 12);
}
var Bo = 6e4, Ao = 36e5, us = 1e3;
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Fl(e) {
  return re(1, arguments), e instanceof Date || hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rn(e) {
  if (re(1, arguments), !Fl(e) && typeof e != "number")
    return !1;
  var t = de(e);
  return !isNaN(Number(t));
}
function ei(e, t) {
  var n;
  re(1, arguments);
  var r = e || {}, a = de(r.start), o = de(r.end), i = o.getTime();
  if (!(a.getTime() <= i))
    throw new RangeError("Invalid interval");
  var u = [], m = a;
  m.setHours(0, 0, 0, 0);
  var d = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; m.getTime() <= i; )
    u.push(de(m)), m.setDate(m.getDate() + d), m.setHours(0, 0, 0, 0);
  return u;
}
function ss(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getDay(), g = (h < p ? -7 : 0) + 6 - (h - p);
  return s.setDate(s.getDate() + g), s.setHours(23, 59, 59, 999), s;
}
function Ul(e, t) {
  re(2, arguments);
  var n = ce(t);
  return ns(e, -n);
}
var cs = 864e5;
function fs(e) {
  re(1, arguments);
  var t = de(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / cs) + 1;
}
function qt(e) {
  re(1, arguments);
  var t = 1, n = de(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Wl(e) {
  re(1, arguments);
  var t = de(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = qt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = qt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function ds(e) {
  re(1, arguments);
  var t = Wl(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = qt(n);
  return r;
}
var ms = 6048e5;
function Ll(e) {
  re(1, arguments);
  var t = de(e), n = qt(t).getTime() - ds(t).getTime();
  return Math.round(n / ms) + 1;
}
function Ut(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = de(e), h = s.getUTCDay(), g = (h < p ? 7 : 0) + h - p;
  return s.setUTCDate(s.getUTCDate() - g), s.setUTCHours(0, 0, 0, 0), s;
}
function Eo(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = de(e), p = y.getUTCFullYear(), s = wt(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = s.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(p + 1, 0, h), g.setUTCHours(0, 0, 0, 0);
  var M = Ut(g, t), W = /* @__PURE__ */ new Date(0);
  W.setUTCFullYear(p, 0, h), W.setUTCHours(0, 0, 0, 0);
  var B = Ut(W, t);
  return y.getTime() >= M.getTime() ? p + 1 : y.getTime() >= B.getTime() ? p : p - 1;
}
function ps(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Eo(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(s, 0, p), h.setUTCHours(0, 0, 0, 0);
  var g = Ut(h, t);
  return g;
}
var ys = 6048e5;
function Hl(e, t) {
  re(1, arguments);
  var n = de(e), r = Ut(n, t).getTime() - ps(n, t).getTime();
  return Math.round(r / ys) + 1;
}
function Oe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var vs = {
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
const Tt = vs;
var Ht = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, hs = {
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
    return Tt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var o = Eo(t, a), i = o > 0 ? o : 1 - o;
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
    var r = Wl(t);
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
        return Tt.M(t, n);
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
    var a = Ll(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Tt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = fs(t);
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
    switch (a === 12 ? o = Ht.noon : a === 0 ? o = Ht.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? o = Ht.evening : a >= 12 ? o = Ht.afternoon : a >= 4 ? o = Ht.morning : o = Ht.night, n) {
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
    return Tt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Tt.H(t, n);
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
    }) : Tt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Tt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Tt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return ni(i);
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
        return ni(i);
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
        return "GMT" + ti(i, ":");
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
        return "GMT" + ti(i, ":");
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
function ti(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var i = t || "";
  return n + String(a) + i + Oe(o, 2);
}
function ni(e, t) {
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
const gs = hs;
var ri = function(t, n) {
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
}, zl = function(t, n) {
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
}, bs = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return ri(t, n);
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
  return i.replace("{{date}}", ri(a, n)).replace("{{time}}", zl(o, n));
}, _s = {
  p: zl,
  P: bs
};
const va = _s;
var ws = ["D", "DD"], ks = ["YY", "YYYY"];
function jl(e) {
  return ws.indexOf(e) !== -1;
}
function ql(e) {
  return ks.indexOf(e) !== -1;
}
function or(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var xs = {
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
}, Ss = function(t, n, r) {
  var a, o = xs[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const $s = Ss;
function ea(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Os = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ts = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ps = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Cs = {
  date: ea({
    formats: Os,
    defaultWidth: "full"
  }),
  time: ea({
    formats: Ts,
    defaultWidth: "full"
  }),
  dateTime: ea({
    formats: Ps,
    defaultWidth: "full"
  })
};
const Ds = Cs;
var Rs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ms = function(t, n, r, a) {
  return Rs[t];
};
const Is = Ms;
function Jt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, m = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[m] || e.values[u];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[d];
  };
}
var Ns = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, As = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Es = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Vs = {
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
}, Ys = {
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
}, Fs = function(t, n) {
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
}, Us = {
  ordinalNumber: Fs,
  era: Jt({
    values: Ns,
    defaultWidth: "wide"
  }),
  quarter: Jt({
    values: Bs,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Jt({
    values: As,
    defaultWidth: "wide"
  }),
  day: Jt({
    values: Es,
    defaultWidth: "wide"
  }),
  dayPeriod: Jt({
    values: Vs,
    defaultWidth: "wide",
    formattingValues: Ys,
    defaultFormattingWidth: "wide"
  })
};
const Ws = Us;
function en(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(u) ? Hs(u, function(p) {
      return p.test(i);
    }) : Ls(u, function(p) {
      return p.test(i);
    }), d;
    d = e.valueCallback ? e.valueCallback(m) : m, d = n.valueCallback ? n.valueCallback(d) : d;
    var y = t.slice(i.length);
    return {
      value: d,
      rest: y
    };
  };
}
function Ls(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Hs(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function zs(e) {
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
var js = /^(\d+)(th|st|nd|rd)?/i, qs = /\d+/i, Gs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qs = {
  any: [/^b/i, /^(a|c)/i]
}, Zs = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Xs = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ks = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Js = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ec = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rc = {
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
}, ac = {
  ordinalNumber: zs({
    matchPattern: js,
    parsePattern: qs,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: en({
    matchPatterns: Gs,
    defaultMatchWidth: "wide",
    parsePatterns: Qs,
    defaultParseWidth: "any"
  }),
  quarter: en({
    matchPatterns: Zs,
    defaultMatchWidth: "wide",
    parsePatterns: Xs,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: en({
    matchPatterns: Ks,
    defaultMatchWidth: "wide",
    parsePatterns: Js,
    defaultParseWidth: "any"
  }),
  day: en({
    matchPatterns: ec,
    defaultMatchWidth: "wide",
    parsePatterns: tc,
    defaultParseWidth: "any"
  }),
  dayPeriod: en({
    matchPatterns: nc,
    defaultMatchWidth: "any",
    parsePatterns: rc,
    defaultParseWidth: "any"
  })
};
const oc = ac;
var ic = {
  code: "en-US",
  formatDistance: $s,
  formatLong: Ds,
  formatRelative: Is,
  localize: Ws,
  match: oc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Gl = ic;
var lc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, uc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sc = /^'([^]*?)'?$/, cc = /''/g, fc = /[a-zA-Z]/;
function an(e, t, n) {
  var r, a, o, i, u, m, d, y, p, s, h, g, M, W, B, L, P, V;
  re(2, arguments);
  var Q = String(t), X = wt(), ee = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : X.locale) !== null && r !== void 0 ? r : Gl, N = ce((o = (i = (u = (m = n == null ? void 0 : n.firstWeekContainsDate) !== null && m !== void 0 ? m : n == null || (d = n.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : X.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = X.locale) === null || p === void 0 || (s = p.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var x = ce((h = (g = (M = (W = n == null ? void 0 : n.weekStartsOn) !== null && W !== void 0 ? W : n == null || (B = n.locale) === null || B === void 0 || (L = B.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && M !== void 0 ? M : X.weekStartsOn) !== null && g !== void 0 ? g : (P = X.locale) === null || P === void 0 || (V = P.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(x >= 0 && x <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var A = de(e);
  if (!rn(A))
    throw new RangeError("Invalid time value");
  var I = ar(A), Z = Ul(A, I), q = {
    firstWeekContainsDate: N,
    weekStartsOn: x,
    locale: ee,
    _originalDate: A
  }, ne = Q.match(uc).map(function(C) {
    var $ = C[0];
    if ($ === "p" || $ === "P") {
      var l = va[$];
      return l(C, ee.formatLong);
    }
    return C;
  }).join("").match(lc).map(function(C) {
    if (C === "''")
      return "'";
    var $ = C[0];
    if ($ === "'")
      return dc(C);
    var l = gs[$];
    if (l)
      return !(n != null && n.useAdditionalWeekYearTokens) && ql(C) && or(C, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && jl(C) && or(C, t, String(e)), l(Z, C, ee.localize, q);
    if ($.match(fc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + $ + "`");
    return C;
  }).join("");
  return ne;
}
function dc(e) {
  var t = e.match(sc);
  return t ? t[1].replace(cc, "'") : e;
}
function mc(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function pc(e) {
  re(1, arguments);
  var t = de(e), n = t.getDay();
  return n;
}
function yc(e) {
  re(1, arguments);
  var t = de(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function $t(e) {
  re(1, arguments);
  var t = de(e), n = t.getHours();
  return n;
}
var vc = 6048e5;
function hc(e) {
  re(1, arguments);
  var t = de(e), n = rr(t).getTime() - os(t).getTime();
  return Math.round(n / vc) + 1;
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
function gc(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = de(e), p = y.getFullYear(), s = wt(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = s.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = /* @__PURE__ */ new Date(0);
  g.setFullYear(p + 1, 0, h), g.setHours(0, 0, 0, 0);
  var M = Ft(g, t), W = /* @__PURE__ */ new Date(0);
  W.setFullYear(p, 0, h), W.setHours(0, 0, 0, 0);
  var B = Ft(W, t);
  return y.getTime() >= M.getTime() ? p + 1 : y.getTime() >= B.getTime() ? p : p - 1;
}
function bc(e, t) {
  var n, r, a, o, i, u, m, d;
  re(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = gc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(s, 0, p), h.setHours(0, 0, 0, 0);
  var g = Ft(h, t);
  return g;
}
var _c = 6048e5;
function wc(e, t) {
  re(1, arguments);
  var n = de(e), r = Ft(n, t).getTime() - bc(n, t).getTime();
  return Math.round(r / _c) + 1;
}
function Re(e) {
  return re(1, arguments), de(e).getFullYear();
}
function Vo(e, t) {
  re(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() > r.getTime();
}
function Yo(e, t) {
  re(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() < r.getTime();
}
function Ql(e, t) {
  re(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() === r.getTime();
}
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Zl(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ha(e, t);
}
function ha(e, t) {
  return ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ha(e, t);
}
function Xl(e) {
  var t = xc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return kc(this, a);
  };
}
function kc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : ga(e);
}
function ga(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xc() {
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
function Fo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uo(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function ba(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sc = 10, Kl = /* @__PURE__ */ function() {
  function e() {
    Fo(this, e), ba(this, "subPriority", 0);
  }
  return Uo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), $c = /* @__PURE__ */ function(e) {
  Zl(n, e);
  var t = Xl(n);
  function n(r, a, o, i, u) {
    var m;
    return Fo(this, n), m = t.call(this), m.value = r, m.validateValue = a, m.setValue = o, m.priority = i, u && (m.subPriority = u), m;
  }
  return Uo(n, [{
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
}(Kl), Oc = /* @__PURE__ */ function(e) {
  Zl(n, e);
  var t = Xl(n);
  function n() {
    var r;
    Fo(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ba(ga(r), "priority", Sc), ba(ga(r), "subPriority", -1), r;
  }
  return Uo(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), i.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), i;
    }
  }]), n;
}(Kl);
function Tc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pc(e, t, n) {
  return t && oi(e.prototype, t), n && oi(e, n), e;
}
var Se = /* @__PURE__ */ function() {
  function e() {
    Tc(this, e);
  }
  return Pc(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var i = this.parse(n, r, a, o);
      return i ? {
        setter: new $c(i.value, this.validate, this.set, this.priority, this.subPriority),
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
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function Cc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ii(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dc(e, t, n) {
  return t && ii(e.prototype, t), n && ii(e, n), e;
}
function Rc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
function Mc(e) {
  var t = Nc();
  return function() {
    var r = lr(e), a;
    if (t) {
      var o = lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ic(this, a);
  };
}
function Ic(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
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
function lr(e) {
  return lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, lr(e);
}
function li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bc = /* @__PURE__ */ function(e) {
  Rc(n, e);
  var t = Mc(n);
  function n() {
    var r;
    Cc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), li(wa(r), "priority", 140), li(wa(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Dc(n, [{
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
}(Se), Ue = {
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
function We(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ae(e, t) {
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
    value: r * (a * Ao + o * Bo + i * us),
    rest: t.slice(n[0].length)
  };
}
function Jl(e) {
  return Ae(Ue.anyDigitsSigned, e);
}
function Ve(e, t) {
  switch (e) {
    case 1:
      return Ae(Ue.singleDigit, t);
    case 2:
      return Ae(Ue.twoDigits, t);
    case 3:
      return Ae(Ue.threeDigits, t);
    case 4:
      return Ae(Ue.fourDigits, t);
    default:
      return Ae(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ur(e, t) {
  switch (e) {
    case 1:
      return Ae(Ue.singleDigitSigned, t);
    case 2:
      return Ae(Ue.twoDigitsSigned, t);
    case 3:
      return Ae(Ue.threeDigitsSigned, t);
    case 4:
      return Ae(Ue.fourDigitsSigned, t);
    default:
      return Ae(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Wo(e) {
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
function eu(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, i = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + i - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function tu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
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
function ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ec(e, t, n) {
  return t && ui(e.prototype, t), n && ui(e, n), e;
}
function Vc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ka(e, t);
}
function Yc(e) {
  var t = Uc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Fc(this, a);
  };
}
function Fc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uc() {
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
var Wc = /* @__PURE__ */ function(e) {
  Vc(n, e);
  var t = Yc(n);
  function n() {
    var r;
    Ac(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), si(xa(r), "priority", 130), si(xa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Ec(n, [{
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
          return We(Ve(4, a), u);
        case "yo":
          return We(i.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return We(Ve(o.length, a), u);
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
        var m = eu(i.year, u);
        return a.setUTCFullYear(m, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var d = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(d, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
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
function Lc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hc(e, t, n) {
  return t && ci(e.prototype, t), n && ci(e, n), e;
}
function zc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sa(e, t);
}
function Sa(e, t) {
  return Sa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Sa(e, t);
}
function jc(e) {
  var t = Gc();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qc(this, a);
  };
}
function qc(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : $a(e);
}
function $a(e) {
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
function cr(e) {
  return cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cr(e);
}
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qc = /* @__PURE__ */ function(e) {
  zc(n, e);
  var t = jc(n);
  function n() {
    var r;
    Lc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), fi($a(r), "priority", 130), fi($a(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Hc(n, [{
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
          return We(Ve(4, a), u);
        case "Yo":
          return We(i.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return We(Ve(o.length, a), u);
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
      var m = Eo(a, u);
      if (i.isTwoDigitYear) {
        var d = eu(i.year, m);
        return a.setUTCFullYear(d, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ut(a, u);
      }
      var y = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(y, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ut(a, u);
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
function Zc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xc(e, t, n) {
  return t && di(e.prototype, t), n && di(e, n), e;
}
function Kc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oa(e, t);
}
function Oa(e, t) {
  return Oa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Oa(e, t);
}
function Jc(e) {
  var t = tf();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ef(this, a);
  };
}
function ef(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
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
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fr(e);
}
function mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nf = /* @__PURE__ */ function(e) {
  Kc(n, e);
  var t = Jc(n);
  function n() {
    var r;
    Zc(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), mi(Ta(r), "priority", 130), mi(Ta(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Xc(n, [{
    key: "parse",
    value: function(a, o) {
      return ur(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(i, 0, 4), u.setUTCHours(0, 0, 0, 0), qt(u);
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
function rf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function af(e, t, n) {
  return t && pi(e.prototype, t), n && pi(e, n), e;
}
function of(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pa(e, t);
}
function lf(e) {
  var t = sf();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return uf(this, a);
  };
}
function uf(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
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
function dr(e) {
  return dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dr(e);
}
function yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cf = /* @__PURE__ */ function(e) {
  of(n, e);
  var t = lf(n);
  function n() {
    var r;
    rf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), yi(Ca(r), "priority", 130), yi(Ca(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return af(n, [{
    key: "parse",
    value: function(a, o) {
      return ur(o === "u" ? 4 : o.length, a);
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
function ff(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function df(e, t, n) {
  return t && vi(e.prototype, t), n && vi(e, n), e;
}
function mf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Da(e, t);
}
function pf(e) {
  var t = vf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return yf(this, a);
  };
}
function yf(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ra(e);
}
function Ra(e) {
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
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function hi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hf = /* @__PURE__ */ function(e) {
  mf(n, e);
  var t = pf(n);
  function n() {
    var r;
    ff(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), hi(Ra(r), "priority", 120), hi(Ra(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return df(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "Q":
        case "QQ":
          return Ve(o.length, a);
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
function gf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bf(e, t, n) {
  return t && gi(e.prototype, t), n && gi(e, n), e;
}
function _f(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function wf(e) {
  var t = xf();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return kf(this, a);
  };
}
function kf(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xf() {
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
function bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sf = /* @__PURE__ */ function(e) {
  _f(n, e);
  var t = wf(n);
  function n() {
    var r;
    gf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), bi(Ia(r), "priority", 120), bi(Ia(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return bf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "q":
        case "qq":
          return Ve(o.length, a);
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
function $f(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Of(e, t, n) {
  return t && _i(e.prototype, t), n && _i(e, n), e;
}
function Tf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Na(e, t);
}
function Pf(e) {
  var t = Df();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Cf(this, a);
  };
}
function Cf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Df() {
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
var Rf = /* @__PURE__ */ function(e) {
  Tf(n, e);
  var t = Pf(n);
  function n() {
    var r;
    $f(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), wi(Ba(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), wi(Ba(r), "priority", 110), r;
  }
  return Of(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "M":
          return We(Ae(Ue.month, a), u);
        case "MM":
          return We(Ve(2, a), u);
        case "Mo":
          return We(i.ordinalNumber(a, {
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
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Mf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function If(e, t, n) {
  return t && ki(e.prototype, t), n && ki(e, n), e;
}
function Nf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Aa(e, t);
}
function Bf(e) {
  var t = Ef();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Af(this, a);
  };
}
function Af(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ef() {
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
function xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vf = /* @__PURE__ */ function(e) {
  Nf(n, e);
  var t = Bf(n);
  function n() {
    var r;
    Mf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), xi(Ea(r), "priority", 110), xi(Ea(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return If(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "L":
          return We(Ae(Ue.month, a), u);
        case "LL":
          return We(Ve(2, a), u);
        case "Lo":
          return We(i.ordinalNumber(a, {
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
function Yf(e, t, n) {
  re(2, arguments);
  var r = de(e), a = ce(t), o = Hl(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
}
function Ff(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Si(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uf(e, t, n) {
  return t && Si(e.prototype, t), n && Si(e, n), e;
}
function Wf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Va(e, t);
}
function Va(e, t) {
  return Va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Va(e, t);
}
function Lf(e) {
  var t = zf();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hf(this, a);
  };
}
function Hf(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Ya(e);
}
function Ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zf() {
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
function $i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jf = /* @__PURE__ */ function(e) {
  Wf(n, e);
  var t = Lf(n);
  function n() {
    var r;
    Ff(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), $i(Ya(r), "priority", 100), $i(Ya(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Uf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "w":
          return Ae(Ue.week, a);
        case "wo":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ve(o.length, a);
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
      return Ut(Yf(a, i, u), u);
    }
  }]), n;
}(Se);
function qf(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t), a = Ll(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Gf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qf(e, t, n) {
  return t && Oi(e.prototype, t), n && Oi(e, n), e;
}
function Zf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function Xf(e) {
  var t = Jf();
  return function() {
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Kf(this, a);
  };
}
function Kf(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ua(e);
}
function Ua(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jf() {
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
function Ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ed = /* @__PURE__ */ function(e) {
  Zf(n, e);
  var t = Xf(n);
  function n() {
    var r;
    Gf(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ti(Ua(r), "priority", 100), Ti(Ua(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Qf(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "I":
          return Ae(Ue.week, a);
        case "Io":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ve(o.length, a);
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
      return qt(qf(a, i));
    }
  }]), n;
}(Se);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function td(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nd(e, t, n) {
  return t && Pi(e.prototype, t), n && Pi(e, n), e;
}
function rd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wa(e, t);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Wa(e, t);
}
function ad(e) {
  var t = id();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return od(this, a);
  };
}
function od(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Rn(e);
}
function Rn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function id() {
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
function ta(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ld = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ud = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], sd = /* @__PURE__ */ function(e) {
  rd(n, e);
  var t = ad(n);
  function n() {
    var r;
    td(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ta(Rn(r), "priority", 90), ta(Rn(r), "subPriority", 1), ta(Rn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return nd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "d":
          return Ae(Ue.date, a);
        case "do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ve(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), u = tu(i), m = a.getUTCMonth();
      return u ? o >= 1 && o <= ud[m] : o >= 1 && o <= ld[m];
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCDate(i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
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
function Ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fd(e, t, n) {
  return t && Ci(e.prototype, t), n && Ci(e, n), e;
}
function dd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function md(e) {
  var t = yd();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return pd(this, a);
  };
}
function pd(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yd() {
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
function na(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vd = /* @__PURE__ */ function(e) {
  dd(n, e);
  var t = md(n);
  function n() {
    var r;
    cd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), na(In(r), "priority", 90), na(In(r), "subpriority", 1), na(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return fd(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "D":
        case "DD":
          return Ae(Ue.dayOfYear, a);
        case "Do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ve(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), u = tu(i);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth(0, i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Lo(e, t, n) {
  var r, a, o, i, u, m, d, y;
  re(2, arguments);
  var p = wt(), s = ce((r = (a = (o = (i = n == null ? void 0 : n.weekStartsOn) !== null && i !== void 0 ? i : n == null || (u = n.locale) === null || u === void 0 || (m = u.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && o !== void 0 ? o : p.weekStartsOn) !== null && a !== void 0 ? a : (d = p.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = de(e), g = ce(t), M = h.getUTCDay(), W = g % 7, B = (W + 7) % 7, L = (B < s ? 7 : 0) + g - M;
  return h.setUTCDate(h.getUTCDate() + L), h;
}
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function hd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gd(e, t, n) {
  return t && Di(e.prototype, t), n && Di(e, n), e;
}
function bd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function _d(e) {
  var t = kd();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return wd(this, a);
  };
}
function wd(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kd() {
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
var xd = /* @__PURE__ */ function(e) {
  bd(n, e);
  var t = _d(n);
  function n() {
    var r;
    hd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ri(za(r), "priority", 90), Ri(za(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return gd(n, [{
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
      return a = Lo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
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
function Sd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $d(e, t, n) {
  return t && Mi(e.prototype, t), n && Mi(e, n), e;
}
function Od(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Td(e) {
  var t = Cd();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pd(this, a);
  };
}
function Pd(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
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
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function Ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dd = /* @__PURE__ */ function(e) {
  Od(n, e);
  var t = Td(n);
  function n() {
    var r;
    Sd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ii(qa(r), "priority", 90), Ii(qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return $d(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var m = function(y) {
        var p = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + p;
      };
      switch (o) {
        case "e":
        case "ee":
          return We(Ve(o.length, a), m);
        case "eo":
          return We(i.ordinalNumber(a, {
            unit: "day"
          }), m);
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
      return a = Lo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Rd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Md(e, t, n) {
  return t && Ni(e.prototype, t), n && Ni(e, n), e;
}
function Id(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function Nd(e) {
  var t = Ad();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bd(this, a);
  };
}
function Bd(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ad() {
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
function Bi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ed = /* @__PURE__ */ function(e) {
  Id(n, e);
  var t = Nd(n);
  function n() {
    var r;
    Rd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Bi(Qa(r), "priority", 90), Bi(Qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Md(n, [{
    key: "parse",
    value: function(a, o, i, u) {
      var m = function(y) {
        var p = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + p;
      };
      switch (o) {
        case "c":
        case "cc":
          return We(Ve(o.length, a), m);
        case "co":
          return We(i.ordinalNumber(a, {
            unit: "day"
          }), m);
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
      return a = Lo(a, i, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Vd(e, t) {
  re(2, arguments);
  var n = ce(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = de(e), o = a.getUTCDay(), i = n % 7, u = (i + 7) % 7, m = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + m), a;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function Yd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fd(e, t, n) {
  return t && Ai(e.prototype, t), n && Ai(e, n), e;
}
function Ud(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Wd(e) {
  var t = Hd();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ld(this, a);
  };
}
function Ld(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hd() {
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
function Ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zd = /* @__PURE__ */ function(e) {
  Ud(n, e);
  var t = Wd(n);
  function n() {
    var r;
    Yd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ei(Xa(r), "priority", 90), Ei(Xa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Fd(n, [{
    key: "parse",
    value: function(a, o, i) {
      var u = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (o) {
        case "i":
        case "ii":
          return Ve(o.length, a);
        case "io":
          return i.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return We(i.day(a, {
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
          return We(i.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return We(i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return We(i.day(a, {
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
      return a = Vd(a, i), a.setUTCHours(0, 0, 0, 0), a;
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
function jd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qd(e, t, n) {
  return t && Vi(e.prototype, t), n && Vi(e, n), e;
}
function Gd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function Qd(e) {
  var t = Xd();
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
  return t && (Vn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xd() {
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
function Yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kd = /* @__PURE__ */ function(e) {
  Gd(n, e);
  var t = Qd(n);
  function n() {
    var r;
    jd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Yi(Ja(r), "priority", 80), Yi(Ja(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return qd(n, [{
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
      return a.setUTCHours(Wo(i), 0, 0, 0), a;
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
function Jd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function em(e, t, n) {
  return t && Fi(e.prototype, t), n && Fi(e, n), e;
}
function tm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function nm(e) {
  var t = am();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return rm(this, a);
  };
}
function rm(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
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
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function Ui(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var om = /* @__PURE__ */ function(e) {
  tm(n, e);
  var t = nm(n);
  function n() {
    var r;
    Jd(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ui(to(r), "priority", 80), Ui(to(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return em(n, [{
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
      return a.setUTCHours(Wo(i), 0, 0, 0), a;
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
function im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lm(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), e;
}
function um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function sm(e) {
  var t = fm();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return cm(this, a);
  };
}
function cm(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
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
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function Li(e, t, n) {
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
    return r = t.call.apply(t, [this].concat(o)), Li(ro(r), "priority", 80), Li(ro(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return lm(n, [{
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
      return a.setUTCHours(Wo(i), 0, 0, 0), a;
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
function mm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pm(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function ym(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function vm(e) {
  var t = gm();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return hm(this, a);
  };
}
function hm(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
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
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bm = /* @__PURE__ */ function(e) {
  ym(n, e);
  var t = vm(n);
  function n() {
    var r;
    mm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), zi(oo(r), "priority", 70), zi(oo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return pm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "h":
          return Ae(Ue.hour12h, a);
        case "ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ve(o.length, a);
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
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function _m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wm(e, t, n) {
  return t && ji(e.prototype, t), n && ji(e, n), e;
}
function km(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function xm(e) {
  var t = $m();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Sm(this, a);
  };
}
function Sm(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
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
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Om = /* @__PURE__ */ function(e) {
  km(n, e);
  var t = xm(n);
  function n() {
    var r;
    _m(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), qi(lo(r), "priority", 70), qi(lo(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return wm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "H":
          return Ae(Ue.hour23h, a);
        case "Ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ve(o.length, a);
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
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function Tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pm(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function Cm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Dm(e) {
  var t = Mm();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rm(this, a);
  };
}
function Rm(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
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
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function Qi(e, t, n) {
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
    return r = t.call.apply(t, [this].concat(o)), Qi(so(r), "priority", 70), Qi(so(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Pm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "K":
          return Ae(Ue.hour11h, a);
        case "Ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ve(o.length, a);
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
function Nm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bm(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function Am(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Em(e) {
  var t = Ym();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Vm(this, a);
  };
}
function Vm(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ym() {
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
var Fm = /* @__PURE__ */ function(e) {
  Am(n, e);
  var t = Em(n);
  function n() {
    var r;
    Nm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Xi(fo(r), "priority", 70), Xi(fo(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Bm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "k":
          return Ae(Ue.hour24h, a);
        case "ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ve(o.length, a);
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
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function Um(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wm(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function Lm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function Hm(e) {
  var t = jm();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return zm(this, a);
  };
}
function zm(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : po(e);
}
function po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jm() {
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
var qm = /* @__PURE__ */ function(e) {
  Lm(n, e);
  var t = Hm(n);
  function n() {
    var r;
    Um(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ji(po(r), "priority", 60), Ji(po(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Wm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "m":
          return Ae(Ue.minute, a);
        case "mo":
          return i.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Ve(o.length, a);
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
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Gm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qm(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function Zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function Xm(e) {
  var t = Jm();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Km(this, a);
  };
}
function Km(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jm() {
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
var ep = /* @__PURE__ */ function(e) {
  Zm(n, e);
  var t = Xm(n);
  function n() {
    var r;
    Gm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), tl(vo(r), "priority", 50), tl(vo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Qm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "s":
          return Ae(Ue.second, a);
        case "so":
          return i.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Ve(o.length, a);
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
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function tp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function np(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function rp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function ap(e) {
  var t = ip();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return op(this, a);
  };
}
function op(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ip() {
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
var lp = /* @__PURE__ */ function(e) {
  rp(n, e);
  var t = ap(n);
  function n() {
    var r;
    tp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), rl(go(r), "priority", 30), rl(go(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return np(n, [{
    key: "parse",
    value: function(a, o) {
      var i = function(m) {
        return Math.floor(m * Math.pow(10, -o.length + 3));
      };
      return We(Ve(o.length, a), i);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMilliseconds(i), a;
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
function up(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sp(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function cp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function fp(e) {
  var t = mp();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dp(this, a);
  };
}
function dp(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mp() {
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
var pp = /* @__PURE__ */ function(e) {
  cp(n, e);
  var t = fp(n);
  function n() {
    var r;
    up(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ol(_o(r), "priority", 10), ol(_o(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return sp(n, [{
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
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vp(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function hp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function gp(e) {
  var t = _p();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return bp(this, a);
  };
}
function bp(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _p() {
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
var wp = /* @__PURE__ */ function(e) {
  hp(n, e);
  var t = gp(n);
  function n() {
    var r;
    yp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ll(ko(r), "priority", 10), ll(ko(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return vp(n, [{
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
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function kp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xp(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Sp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xo(e, t);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xo(e, t);
}
function $p(e) {
  var t = Tp();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Op(this, a);
  };
}
function Op(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : So(e);
}
function So(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tp() {
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
var Pp = /* @__PURE__ */ function(e) {
  Sp(n, e);
  var t = $p(n);
  function n() {
    var r;
    kp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), sl(So(r), "priority", 40), sl(So(r), "incompatibleTokens", "*"), r;
  }
  return xp(n, [{
    key: "parse",
    value: function(a) {
      return Jl(a);
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
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function Cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dp(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function Rp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function Mp(e) {
  var t = Np();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var o = Vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ip(this, a);
  };
}
function Ip(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Np() {
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
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vr(e);
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bp = /* @__PURE__ */ function(e) {
  Rp(n, e);
  var t = Mp(n);
  function n() {
    var r;
    Cp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), fl(Oo(r), "priority", 20), fl(Oo(r), "incompatibleTokens", "*"), r;
  }
  return Dp(n, [{
    key: "parse",
    value: function(a) {
      return Jl(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se), Ap = {
  G: new Bc(),
  y: new Wc(),
  Y: new Qc(),
  R: new nf(),
  u: new cf(),
  Q: new hf(),
  q: new Sf(),
  M: new Rf(),
  L: new Vf(),
  w: new jf(),
  I: new ed(),
  d: new sd(),
  D: new vd(),
  E: new xd(),
  e: new Dd(),
  c: new Ed(),
  i: new zd(),
  a: new Kd(),
  b: new om(),
  B: new dm(),
  h: new bm(),
  H: new Om(),
  K: new Im(),
  k: new Fm(),
  m: new qm(),
  s: new ep(),
  S: new lp(),
  X: new pp(),
  x: new wp(),
  t: new Pp(),
  T: new Bp()
};
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function dl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Ep(e)) || t && e && typeof e.length == "number") {
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
function Ep(e, t) {
  if (e) {
    if (typeof e == "string")
      return ml(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ml(e, t);
  }
}
function ml(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var Vp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fp = /^'([^]*?)'?$/, Up = /''/g, Wp = /\S/, Lp = /[a-zA-Z]/;
function To(e, t, n, r) {
  var a, o, i, u, m, d, y, p, s, h, g, M, W, B, L, P, V, Q;
  re(3, arguments);
  var X = String(e), ee = String(t), N = wt(), x = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : N.locale) !== null && a !== void 0 ? a : Gl;
  if (!x.match)
    throw new RangeError("locale must contain match property");
  var A = ce((i = (u = (m = (d = r == null ? void 0 : r.firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (y = r.locale) === null || y === void 0 || (p = y.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && m !== void 0 ? m : N.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = N.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var I = ce((g = (M = (W = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (L = r.locale) === null || L === void 0 || (P = L.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && W !== void 0 ? W : N.weekStartsOn) !== null && M !== void 0 ? M : (V = N.locale) === null || V === void 0 || (Q = V.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(I >= 0 && I <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (ee === "")
    return X === "" ? de(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: A,
    weekStartsOn: I,
    locale: x
  }, q = [new Oc()], ne = ee.match(Yp).map(function(oe) {
    var ye = oe[0];
    if (ye in va) {
      var Ne = va[ye];
      return Ne(oe, x.formatLong);
    }
    return oe;
  }).join("").match(Vp), C = [], $ = dl(ne), l;
  try {
    var c = function() {
      var ye = l.value;
      !(r != null && r.useAdditionalWeekYearTokens) && ql(ye) && or(ye, ee, e), !(r != null && r.useAdditionalDayOfYearTokens) && jl(ye) && or(ye, ee, e);
      var Ne = ye[0], ut = Ap[Ne];
      if (ut) {
        var ve = ut.incompatibleTokens;
        if (Array.isArray(ve)) {
          var ft = C.find(function(ze) {
            return ve.includes(ze.token) || ze.token === Ne;
          });
          if (ft)
            throw new RangeError("The format string mustn't contain `".concat(ft.fullToken, "` and `").concat(ye, "` at the same time"));
        } else if (ut.incompatibleTokens === "*" && C.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ye, "` and any other token at the same time"));
        C.push({
          token: Ne,
          fullToken: ye
        });
        var ot = ut.run(X, ye, x.match, Z);
        if (!ot)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        q.push(ot.setter), X = ot.rest;
      } else {
        if (Ne.match(Lp))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
        if (ye === "''" ? ye = "'" : Ne === "'" && (ye = Hp(ye)), X.indexOf(ye) === 0)
          X = X.slice(ye.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for ($.s(); !(l = $.n()).done; ) {
      var O = c();
      if (Kn(O) === "object")
        return O.v;
    }
  } catch (oe) {
    $.e(oe);
  } finally {
    $.f();
  }
  if (X.length > 0 && Wp.test(X))
    return /* @__PURE__ */ new Date(NaN);
  var S = q.map(function(oe) {
    return oe.priority;
  }).sort(function(oe, ye) {
    return ye - oe;
  }).filter(function(oe, ye, Ne) {
    return Ne.indexOf(oe) === ye;
  }).map(function(oe) {
    return q.filter(function(ye) {
      return ye.priority === oe;
    }).sort(function(ye, Ne) {
      return Ne.subPriority - ye.subPriority;
    });
  }).map(function(oe) {
    return oe[0];
  }), H = de(n);
  if (isNaN(H.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var J = Ul(H, ar(H)), G = {}, T = dl(S), w;
  try {
    for (T.s(); !(w = T.n()).done; ) {
      var z = w.value;
      if (!z.validate(J, Z))
        return /* @__PURE__ */ new Date(NaN);
      var ke = z.set(J, G, Z);
      Array.isArray(ke) ? (J = ke[0], mc(G, ke[1])) : J = ke;
    }
  } catch (oe) {
    T.e(oe);
  } finally {
    T.f();
  }
  return J;
}
function Hp(e) {
  return e.match(Fp)[1].replace(Up, "'");
}
function zp(e, t) {
  re(2, arguments);
  var n = ce(t);
  return Dt(e, -n);
}
function jp(e, t) {
  var n;
  re(1, arguments);
  var r = ce((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Zp(e), o;
  if (a.date) {
    var i = Xp(a.date, r);
    o = Kp(i.restDateString, i.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), m = 0, d;
  if (a.time && (m = Jp(a.time), isNaN(m)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (d = ey(a.timezone), isNaN(d))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var y = new Date(u + m), p = /* @__PURE__ */ new Date(0);
    return p.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()), p.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()), p;
  }
  return new Date(u + m + d);
}
var dn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, qp = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Gp = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Qp = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Zp(e) {
  var t = {}, n = e.split(dn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], dn.timeZoneDelimiter.test(t.date) && (t.date = e.split(dn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = dn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function Xp(e, t) {
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
function Kp(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(qp);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = tn(n[1]), o = tn(n[2]) - 1, i = tn(n[3]), u = tn(n[4]), m = tn(n[5]) - 1;
  if (r)
    return oy(t, u, m) ? ty(t, u, m) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !ry(t, o, i) || !ay(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, o, Math.max(a, i)), d);
}
function tn(e) {
  return e ? parseInt(e) : 1;
}
function Jp(e) {
  var t = e.match(Gp);
  if (!t)
    return NaN;
  var n = ra(t[1]), r = ra(t[2]), a = ra(t[3]);
  return iy(n, r, a) ? n * Ao + r * Bo + a * 1e3 : NaN;
}
function ra(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function ey(e) {
  if (e === "Z")
    return 0;
  var t = e.match(Qp);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return ly(r, a) ? n * (r * Ao + a * Bo) : NaN;
}
function ty(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var ny = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function nu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ry(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (ny[t] || (nu(e) ? 29 : 28));
}
function ay(e, t) {
  return t >= 1 && t <= (nu(e) ? 366 : 365);
}
function oy(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function iy(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function ly(e, t) {
  return t >= 0 && t <= 59;
}
function on(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t), a = n.getFullYear(), o = n.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(a, r, 15), i.setHours(0, 0, 0, 0);
  var u = yc(i);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Je(e, t) {
  if (re(2, arguments), Jn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = de(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = on(n, t.month)), t.date != null && n.setDate(ce(t.date)), t.hours != null && n.setHours(ce(t.hours)), t.minutes != null && n.setMinutes(ce(t.minutes)), t.seconds != null && n.setSeconds(ce(t.seconds)), t.milliseconds != null && n.setMilliseconds(ce(t.milliseconds)), n);
}
function ru(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setHours(r), n;
}
function Ho(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMilliseconds(r), n;
}
function au(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMinutes(r), n;
}
function ou(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return n.setSeconds(r), n;
}
function Yt(e, t) {
  re(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function jt(e, t) {
  re(2, arguments);
  var n = ce(t);
  return gt(e, -n);
}
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function uy(e, t) {
  if (re(2, arguments), !t || er(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, i = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, m = t.seconds ? ce(t.seconds) : 0, d = jt(e, r + n * 12), y = zp(d, o + a * 7), p = u + i * 60, s = m + p * 60, h = s * 1e3, g = new Date(y.getTime() - h);
  return g;
}
function sy(e, t) {
  re(2, arguments);
  var n = ce(t);
  return Yl(e, -n);
}
function zr() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Y("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Y("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Y("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function cy() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Y("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function pl() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function yl() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function iu() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Y("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function lu() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function uu() {
  return v(), k(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Y("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const vl = (e, t, n, r) => {
  const a = To(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return rn(a) && Fl(a) ? r ? a : Je(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, fy = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return vl(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const i of t)
      if (o = vl(e, i, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, U = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), dy = (e, t) => {
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
}, _t = (e) => {
  let t = U(JSON.parse(JSON.stringify(e)));
  return t = ru(t, 0), t = au(t, 0), t = ou(t, 0), t = Ho(t, 0), t;
}, dt = (e, t, n, r) => {
  let a = e ? U(e) : U();
  return (t || t === 0) && (a = ru(a, +t)), (n || n === 0) && (a = au(a, +n)), (r || r === 0) && (a = ou(a, +r)), Ho(a, 0);
}, et = (e, t) => !e || !t ? !1 : Yo(_t(e), _t(t)), Me = (e, t) => !e || !t ? !1 : Ql(_t(e), _t(t)), at = (e, t) => !e || !t ? !1 : Vo(_t(e), _t(t)), su = (e, t, n) => e && e[0] && e[1] ? at(n, e[0]) && et(n, e[1]) : e && e[0] && t ? at(n, e[0]) && et(n, t) || et(n, e[0]) && at(n, t) : !1, nn = Pt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), cu = () => {
  const e = (n) => {
    nn.menuFocused = n;
  }, t = (n) => {
    nn.shiftKeyInMenu !== n && (nn.shiftKeyInMenu = n);
  };
  return {
    control: b(() => ({ shiftKeyInMenu: nn.shiftKeyInMenu, menuFocused: nn.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = {}, my = {
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
})(my, Yr);
const py = /* @__PURE__ */ zo(Yr);
var Fr = {}, yy = {
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
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(yy, Fr);
const hl = /* @__PURE__ */ zo(Fr);
function vy(e, t) {
  var n = _y(t);
  return n.formatToParts ? gy(n, e) : by(n, e);
}
var hy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function gy(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = hy[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function by(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var aa = {};
function _y(e) {
  if (!aa[e]) {
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
    aa[e] = n ? new Intl.DateTimeFormat("en-US", {
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
  return aa[e];
}
function jo(e, t, n, r, a, o, i) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, i), u;
}
var gl = 36e5, wy = 6e4, oa = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function qo(e, t, n) {
  var r, a;
  if (!e || (r = oa.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = oa.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), bl(o) ? -(o * gl) : NaN;
  if (r = oa.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var i = parseInt(r[2], 10);
    return bl(o, i) ? (a = Math.abs(o) * gl + i * wy, o > 0 ? -a : a) : NaN;
  }
  if (Sy(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : ky(t), m = Po(u, e), d = n ? m : xy(t, m, e);
    return -d;
  }
  return NaN;
}
function ky(e) {
  return jo(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Po(e, t) {
  var n = vy(e, t), r = jo(
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
function xy(e, t, n) {
  var r = e.getTime(), a = r - t, o = Po(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var i = Po(new Date(a), n);
  return o === i ? o : Math.max(o, i);
}
function bl(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var _l = {};
function Sy(e) {
  if (_l[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _l[e] = !0, !0;
  } catch {
    return !1;
  }
}
var $y = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const fu = $y;
var ia = 36e5, wl = 6e4, Oy = 2, rt = {
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
  timeZone: fu
};
function Co(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? Oy : py(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Ty(e), o = Py(a.date, r), i = o.year, u = o.restDateString, m = Cy(u, i);
  if (isNaN(m))
    return /* @__PURE__ */ new Date(NaN);
  if (m) {
    var d = m.getTime(), y = 0, p;
    if (a.time && (y = Dy(a.time), isNaN(y)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (p = qo(a.timeZone || n.timeZone, new Date(d + y)), isNaN(p))
        return /* @__PURE__ */ new Date(NaN);
    } else
      p = hl(new Date(d + y)), p = hl(new Date(d + y + p));
    return new Date(d + y + p);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Ty(e) {
  var t = {}, n = rt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = rt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = rt.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function Py(e, t) {
  var n = rt.YYY[t], r = rt.YYYYY[t], a;
  if (a = rt.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = rt.YY.exec(e) || n.exec(e), a) {
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
function Cy(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = rt.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, xl(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var i = parseInt(n[1], 10);
    return Iy(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return xl(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, Sl(t, o) ? kl(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var m = parseInt(n[2], 10) - 1;
    return Sl(t, o, m) ? kl(t, o, m) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Dy(e) {
  var t, n, r;
  if (t = rt.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), la(n) ? n % 24 * ia : NaN;
  if (t = rt.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), la(n, r) ? n % 24 * ia + r * wl : NaN;
  if (t = rt.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return la(n, r, a) ? n % 24 * ia + r * wl + a * 1e3 : NaN;
  }
  return null;
}
function kl(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Ry = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], My = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function du(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function xl(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = du(e);
    if (r && n > My[t] || !r && n > Ry[t])
      return !1;
  }
  return !0;
}
function Iy(e, t) {
  if (t < 1)
    return !1;
  var n = du(e);
  return !(n && t > 366 || !n && t > 365);
}
function Sl(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function la(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ur = {}, Ny = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Wr = {}, By = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
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
})(By, Wr);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(Wr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(Ny, Ur);
const Ay = /* @__PURE__ */ zo(Ur);
function Ey(e, t, n) {
  var r = Co(e, n), a = qo(t, r, !0), o = new Date(r.getTime() - a), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Vy(e, t, n) {
  if (typeof e == "string" && !e.match(fu)) {
    var r = Ay(n);
    return r.timeZone = t, Co(e, r);
  }
  var a = Co(e, n), o = jo(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), i = qo(t, new Date(o));
  return new Date(o + i);
}
const Yy = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, Fy = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Uy = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Wy = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Ly = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], He = (e) => {
  const t = f(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Hy = (e) => Object.assign({ type: "dot" }, e), mu = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Xe = (e) => e, $l = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Ol = (e) => Object.assign(
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
), zy = (e) => Object.assign(
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
), jy = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, qy = (e, t, n) => e || (typeof n == "string" ? n : t), Gy = (e) => typeof e == "boolean" ? e ? Ol({}) : !1 : Ol(e), Qy = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Zy = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), ct = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lr.prop("partial-range"));
  }, n = b(() => ({
    ariaLabels: zy(e.ariaLabels),
    textInputOptions: Object.assign(Qy(), e.textInputOptions),
    multiCalendars: jy(e.multiCalendars),
    previewFormat: qy(e.previewFormat, e.format, o()),
    filters: Zy(e.filters),
    transitions: Gy(e.transitions),
    startTime: s()
  })), r = (l) => {
    if (e.range)
      return l();
    throw new Error(Lr.prop("range"));
  }, a = () => {
    const l = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${l}` : `hh:mm${l} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", i = (l, c) => {
    if (typeof e.format == "function")
      return e.format(l);
    const O = c || o(), S = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(l) ? `${an(l[0], O, S)} ${e.modelAuto && !l[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${l[1] ? an(l[1], O, S) : ""}` : an(l, O, S);
  }, u = (l) => e.timezone ? Ey(l, e.timezone) : l, m = (l) => e.timezone ? Vy(l, e.timezone) : l, d = b(() => (l) => {
    var c;
    return (c = e.hideNavigation) == null ? void 0 : c.includes(l);
  }), y = (l) => {
    const c = e.maxDate ? at(u(l), u(U(e.maxDate))) : !1, O = e.minDate ? et(u(l), u(U(e.minDate))) : !1, S = B(l, e.disabledDates), H = n.value.filters.months.map((z) => +z).includes(De(l)), J = e.disabledWeekDays.length ? e.disabledWeekDays.some((z) => +z === pc(l)) : !1, G = e.allowedDates.length ? !e.allowedDates.some((z) => Me(u(U(z)), u(l))) : !1, T = Re(l), w = T < +e.yearRange[0] || T > +e.yearRange[1];
    return !(c || O || S || H || w || J || G);
  }, p = (l) => {
    const c = {
      hours: $t(U()),
      minutes: Ot(U()),
      seconds: e.enableSeconds ? Gt(U()) : 0
    };
    return Object.assign(c, l);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [p(e.startTime[0]), p(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? p(e.startTime) : null, h = (l) => !y(l), g = (l) => Array.isArray(l) ? rn(l[0]) && (l[1] ? rn(l[1]) : !0) : l ? rn(l) : !1, M = (l) => l instanceof Date ? l : jp(l), W = (l) => {
    const c = Ft(u(l), { weekStartsOn: +e.weekStart }), O = ss(u(l), { weekStartsOn: +e.weekStart });
    return [c, O];
  }, B = (l, c) => Array.isArray(c) ? c.some((O) => Me(u(U(O)), u(l))) : c(l), L = (l, c, O) => {
    let S = l ? U(l) : U();
    return (c || c === 0) && (S = on(S, c)), O && (S = Yt(S, O)), S;
  }, P = (l) => Je(U(), { hours: $t(l), minutes: Ot(l), seconds: Gt(l) }), V = (l) => Je(U(), {
    hours: +l.hours || 0,
    minutes: +l.minutes || 0,
    seconds: +l.seconds || 0
  }), Q = (l, c, O, S) => {
    if (!l)
      return !0;
    if (S) {
      const H = O === "max" ? Yo(l, c) : Vo(l, c), J = { seconds: 0, milliseconds: 0 };
      return H || Ql(Je(l, J), Je(c, J));
    }
    return O === "max" ? l.getTime() <= c.getTime() : l.getTime() >= c.getTime();
  }, X = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, ee = (l) => Array.isArray(l) ? [l[0] ? P(l[0]) : null, l[1] ? P(l[1]) : null] : P(l), N = (l) => {
    const c = e.maxTime ? V(e.maxTime) : U(e.maxDate);
    return Array.isArray(l) ? Q(l[0], c, "max", !!e.maxDate) && Q(l[1], c, "max", !!e.maxDate) : Q(l, c, "max", !!e.maxDate);
  }, x = (l, c) => {
    const O = e.minTime ? V(e.minTime) : U(e.minDate);
    return Array.isArray(l) ? Q(l[0], O, "min", !!e.minDate) && Q(l[1], O, "min", !!e.minDate) && c : Q(l, O, "min", !!e.minDate) && c;
  }, A = (l) => {
    let c = !0;
    if (!l || X())
      return !0;
    const O = !e.minDate && !e.maxDate ? ee(l) : l;
    return (e.maxTime || e.maxDate) && (c = N(Xe(O))), (e.minTime || e.minDate) && (c = x(Xe(O), c)), c;
  }, I = (l, c) => {
    const O = U(JSON.parse(JSON.stringify(l))), S = [];
    for (let H = 0; H < 7; H++) {
      const J = Dt(O, H), G = De(J) !== c;
      S.push({
        text: e.hideOffsetDates && G ? "" : J.getDate(),
        value: J,
        current: !G,
        classData: {}
      });
    }
    return S;
  }, Z = (l, c) => {
    const O = [], S = U(u(new Date(c, l))), H = U(u(new Date(c, l + 1, 0))), J = Ft(S, { weekStartsOn: e.weekStart }), G = (T) => {
      const w = I(T, l);
      if (O.push({ days: w }), !O[O.length - 1].days.some(
        (z) => Me(_t(z.value), _t(H))
      )) {
        const z = Dt(T, 7);
        G(z);
      }
    };
    if (G(J), e.sixWeeks && O.length < 6) {
      const T = 6 - O.length;
      for (let w = 1; w <= T; w++) {
        const z = O[O.length - 1], ke = z.days[z.days.length - 1], oe = I(Dt(ke.value, 1), De(S));
        O.push({ days: oe });
      }
    }
    return O;
  }, q = (l, c, O) => [Je(U(l), { date: 1 }), Je(U(), { month: c, year: O, date: 1 })], ne = (l, c) => et(...q(e.minDate, l, c)) || Me(...q(e.minDate, l, c)), C = (l, c) => at(...q(e.maxDate, l, c)) || Me(...q(e.maxDate, l, c)), $ = (l, c, O) => {
    let S = !1;
    return e.maxDate && O && C(l, c) && (S = !0), e.minDate && !O && ne(l, c) && (S = !0), S;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: m,
    formatDate: i,
    getDefaultPattern: o,
    validateDate: y,
    getDefaultStartTime: s,
    isDisabled: h,
    isValidDate: g,
    sanitizeDate: M,
    getWeekFromDate: W,
    matchDate: B,
    setDateMonthOrYear: L,
    isValidTime: A,
    getCalendarDays: Z,
    validateMonthYearInRange: (l, c, O, S) => {
      let H = !1;
      return S ? e.minDate && e.maxDate ? H = $(l, c, O) : (e.minDate && ne(l, c) || e.maxDate && C(l, c)) && (H = !0) : H = !0, H;
    },
    validateMaxDate: C,
    validateMinDate: ne,
    assignDefaultTime: p,
    defaults: n,
    hideNavigationButtons: d
  };
}, Ce = Pt({
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
}), ua = R(null), mn = R(!1), sa = R(!1), ca = R(!1), fa = R(!1), nt = R(0), Qe = R(0), Mt = () => {
  const e = b(() => mn.value ? [...Ce.selectionGrid, Ce.actionRow].filter((p) => p.length) : sa.value ? [
    ...Ce.timePicker[0],
    ...Ce.timePicker[1],
    fa.value ? [] : [ua.value],
    Ce.actionRow
  ].filter((p) => p.length) : ca.value ? [...Ce.monthPicker, Ce.actionRow] : [Ce.monthYear, ...Ce.calendar, Ce.time, Ce.actionRow].filter((p) => p.length)), t = (p) => {
    nt.value = p ? nt.value + 1 : nt.value - 1;
    let s = null;
    e.value[Qe.value] && (s = e.value[Qe.value][nt.value]), s || (nt.value = p ? nt.value - 1 : nt.value + 1);
  }, n = (p) => {
    Qe.value === 0 && !p || Qe.value === e.value.length && p || (Qe.value = p ? Qe.value + 1 : Qe.value - 1, e.value[Qe.value] ? e.value[Qe.value] && !e.value[Qe.value][nt.value] && nt.value !== 0 && (nt.value = e.value[Qe.value].length - 1) : Qe.value = p ? Qe.value - 1 : Qe.value + 1);
  }, r = (p) => {
    let s = null;
    e.value[Qe.value] && (s = e.value[Qe.value][nt.value]), s ? s.focus({ preventScroll: !mn.value }) : nt.value = p ? nt.value - 1 : nt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, i = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, m = (p, s) => {
    Ce[s] = p;
  }, d = (p, s) => {
    Ce[s] = p;
  }, y = () => {
    nt.value = 0, Qe.value = 0;
  };
  return {
    buildMatrix: m,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (p) => {
      ua.value = p;
    },
    setSelectionGrid: (p) => {
      mn.value = p, y(), p || (Ce.selectionGrid = []);
    },
    setTimePicker: (p, s = !1) => {
      sa.value = p, fa.value = s, y(), p || (Ce.timePicker[0] = [], Ce.timePicker[1] = []);
    },
    setTimePickerElements: (p, s = 0) => {
      Ce.timePicker[s] = p;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: i,
    arrowDown: u,
    clearArrowNav: () => {
      Ce.monthYear = [], Ce.calendar = [], Ce.time = [], Ce.actionRow = [], Ce.selectionGrid = [], Ce.timePicker[0] = [], Ce.timePicker[1] = [], mn.value = !1, sa.value = !1, fa.value = !1, ca.value = !1, y(), ua.value = null;
    },
    setMonthPicker: (p) => {
      ca.value = p, y();
    },
    refSets: Ce
    // exposed for testing
  };
}, Tl = (e) => Array.isArray(e), At = (e) => Array.isArray(e), Pl = (e) => Array.isArray(e) && e.length === 2, Xy = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: i,
    sanitizeDate: u,
    getWeekFromDate: m,
    setDateMonthOrYear: d,
    validateMonthYearInRange: y,
    defaults: p
  } = ct(e), s = b({
    get: () => e.internalModelValue,
    set: (_) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", _);
    }
  }), h = R([]);
  Ze(s, () => {
    Q();
  });
  const g = R([{ month: De(U()), year: Re(U()) }]), M = Pt({
    hours: e.range ? [$t(U()), $t(U())] : $t(U()),
    minutes: e.range ? [Ot(U()), Ot(U())] : Ot(U()),
    seconds: e.range ? [0, 0] : 0
  }), W = b(
    () => (_) => g.value[_] ? g.value[_].month : 0
  ), B = b(
    () => (_) => g.value[_] ? g.value[_].year : 0
  ), L = b(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), P = (_, F, le) => {
    var se, Be;
    g.value[_] || (g.value[_] = { month: 0, year: 0 }), g.value[_].month = F === null ? (se = g.value[_]) == null ? void 0 : se.month : F, g.value[_].year = le === null ? (Be = g.value[_]) == null ? void 0 : Be.year : le;
  }, V = (_, F) => {
    M[_] = F;
  };
  qe(() => {
    s.value || (e.startDate && (P(0, De(U(e.startDate)), Re(U(e.startDate))), p.value.multiCalendars && Pe(0)), p.value.startTime && C()), Q(!0);
  });
  const Q = (_ = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (h.value = s.value, A(_)) : ee(s.value);
    if (e.timePicker)
      return I();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return q();
    if (p.value.multiCalendars && _ && !e.startDate)
      return X(U(), _);
  }, X = (_, F = !1) => {
    if ((!p.value.multiCalendars || !e.multiStatic || F) && P(0, De(_), Re(_)), p.value.multiCalendars)
      for (let le = 1; le < p.value.multiCalendars; le++) {
        const se = Je(U(), { month: W.value(le - 1), year: B.value(le - 1) }), Be = Vl(se, { months: 1 });
        g.value[le] = { month: De(Be), year: Re(Be) };
      }
  }, ee = (_) => {
    X(_), V("hours", $t(_)), V("minutes", Ot(_)), V("seconds", Gt(_));
  }, N = (_, F) => {
    X(_[0], F);
    const le = (se, Be) => [
      se(_[0]),
      _[1] ? se(_[1]) : M[Be][1]
    ];
    V("hours", le($t, "hours")), V("minutes", le(Ot, "minutes")), V("seconds", le(Gt, "seconds"));
  }, x = (_, F) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return N(_, F);
    if (e.multiDates) {
      const le = _[_.length - 1];
      return ee(le);
    }
  }, A = (_) => {
    const F = s.value;
    x(F, _), p.value.multiCalendars && e.multiCalendarsSolo && l();
  }, I = () => {
    if (C(), !e.range)
      s.value = dt(U(), M.hours, M.minutes, ne());
    else {
      const _ = M.hours, F = M.minutes;
      s.value = [
        dt(U(), _[0], F[0], ne()),
        dt(U(), _[1], F[1], ne(!1))
      ];
    }
  }, Z = () => {
    s.value = d(U(), W.value(0), B.value(0));
  }, q = () => {
    s.value = U();
  }, ne = (_ = !0) => e.enableSeconds ? Array.isArray(M.seconds) ? _ ? M.seconds[0] : M.seconds[1] : M.seconds : 0, C = () => {
    const _ = o();
    if (_) {
      const F = Array.isArray(_), le = F ? [+_[0].hours, +_[1].hours] : +_.hours, se = F ? [+_[0].minutes, +_[1].minutes] : +_.minutes, Be = F ? [+_[0].seconds, +_[1].seconds] : +_.seconds;
      V("hours", le), V("minutes", se), e.enableSeconds && V("seconds", Be);
    }
  }, $ = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, l = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const _ = U(
        U(s.value[1] ? s.value[1] : gt(s.value[0], 1))
      ), [F, le] = [De(s.value[0]), Re(s.value[0])], [se, Be] = [De(s.value[1]), Re(s.value[1])];
      (F !== se || F === se && le !== Be) && e.multiCalendarsSolo && P(1, De(_), Re(_));
    }
  }, c = (_) => {
    const F = gt(_, 1);
    return { month: De(F), year: Re(F) };
  }, O = (_) => {
    const F = De(U(_)), le = Re(U(_));
    if (P(0, F, le), p.value.multiCalendars > 0)
      for (let se = 1; se < p.value.multiCalendars; se++) {
        const Be = c(
          Je(U(_), { year: W.value(se - 1), month: B.value(se - 1) })
        );
        P(se, Be.month, Be.year);
      }
  }, S = (_) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((F) => Me(_, F))) {
        const F = s.value.filter((le) => !Me(le, _));
        s.value = F.length ? F : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(_);
    else
      s.value = [_];
  }, H = (_, F) => {
    const le = at(_, F) ? F : _, se = at(F, _) ? F : _;
    return ei({ start: le, end: se });
  }, J = (_, F = 0) => {
    if (Array.isArray(s.value) && s.value[F]) {
      const le = ls(_, s.value[F]), se = H(s.value[F], _), Be = se.length === 1 ? 0 : se.filter((kt) => i(kt)).length, st = Math.abs(le) - Be;
      if (e.minRange && e.maxRange)
        return st >= +e.minRange && st <= +e.maxRange;
      if (e.minRange)
        return st >= +e.minRange;
      if (e.maxRange)
        return st <= +e.maxRange;
    }
    return !0;
  }, G = (_) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (at(_, s.value[0]) || Me(_, s.value[0])) ? [s.value[0], _] : e.fixedEnd && (et(_, s.value[1]) || Me(_, s.value[1])) ? [_, s.value[1]] : (t("invalid-fixed-range", _), s.value) : [], T = () => {
    e.autoApply && L.value && t("auto-apply", e.partialFlow);
  }, w = () => {
    e.autoApply && t("select-date");
  }, z = (_) => !ei({ start: _[0], end: _[1] }).some((F) => i(F)), ke = (_) => (s.value = m(U(_.value)), T()), oe = (_) => {
    const F = dt(U(_.value), M.hours, M.minutes, ne());
    e.multiDates ? S(F) : s.value = F, n(), T();
  }, ye = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Ne = (_, F) => {
    const le = [U(_.value), Dt(U(_.value), +e.autoRange)];
    z(le) && (F && O(_.value), h.value = le);
  }, ut = (_) => {
    ve(_.value) || !J(_.value, e.fixedStart ? 0 : 1) || (h.value = G(U(_.value)));
  }, ve = (_) => e.noDisabledRange ? H(h.value[0], _).some((F) => i(F)) : !1, ft = (_, F) => {
    if (ye(), e.autoRange)
      return Ne(_, F);
    if (e.fixedStart || e.fixedEnd)
      return ut(_);
    h.value[0] ? J(U(_.value)) && !ve(_.value) && (et(U(_.value), U(h.value[0])) ? h.value.unshift(U(_.value)) : h.value[1] = U(_.value)) : h.value[0] = U(_.value);
  }, ot = (_) => {
    h.value[_] = dt(
      h.value[_],
      M.hours[_],
      M.minutes[_],
      ne(_ !== 1)
    );
  }, ze = () => {
    h.value.length && (h.value[0] && !h.value[1] ? ot(0) : (ot(0), ot(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Zt = (_, F = !1) => {
    if (!(i(_.value) || !_.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return ke(_);
      if (!e.range)
        return oe(_);
      At(M.hours) && At(M.minutes) && !e.multiDates && (ft(_, F), ze());
    }
  }, ge = (_) => {
    const F = _[0];
    return e.weekNumbers === "local" ? wc(F.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? hc(F.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(F.value) : "";
  }, Pe = (_) => {
    for (let F = _ - 1; F >= 0; F--) {
      const le = jt(Je(U(), { month: W.value(F + 1), year: B.value(F + 1) }), 1);
      P(F, De(le), Re(le));
    }
    for (let F = _ + 1; F <= p.value.multiCalendars - 1; F++) {
      const le = gt(Je(U(), { month: W.value(F - 1), year: B.value(F - 1) }), 1);
      P(F, De(le), Re(le));
    }
  }, $e = (_) => d(U(), W.value(_), B.value(_)), Nt = (_) => dt(_, M.hours, M.minutes, ne()), Bt = (_, F) => {
    const le = e.monthPicker ? W.value(_) !== F.month || !F.fromNav : B.value(_) !== F.year;
    if (P(_, F.month, F.year), p.value.multiCalendars && !e.multiCalendarsSolo && Pe(_), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? et($e(_), se[0]) ? se.unshift($e(_)) : se[1] = $e(_) : se = [$e(_)], s.value = se;
        }
      } else
        s.value = $e(_);
    t("update-month-year", { instance: _, month: F.month, year: F.year }), r(e.multiCalendarsSolo ? _ : void 0);
  }, Qr = async (_ = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await lt();
      const F = e.monthPicker ? _ : !1;
      e.range ? t("auto-apply", F || !s.value || s.value.length === 1) : t("auto-apply", F);
    }
    n();
  }, sn = (_, F) => {
    const le = Je(U(), { month: W.value(F), year: B.value(F) }), se = _ < 0 ? gt(le, 1) : jt(le, 1);
    y(De(se), Re(se), _ < 0, e.preventMinMaxNavigation) && (P(F, De(se), Re(se)), p.value.multiCalendars && !e.multiCalendarsSolo && Pe(F), t("update-month-year", { instance: F, month: De(se), year: Re(se) }), r());
  }, Xt = (_) => {
    Tl(_) && Tl(s.value) && At(M.hours) && At(M.minutes) ? (_[0] && s.value[0] && (s.value[0] = dt(_[0], M.hours[0], M.minutes[0], ne())), _[1] && s.value[1] && (s.value[1] = dt(_[1], M.hours[1], M.minutes[1], ne(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(_) : !e.range && !Pl(_) && (s.value = Nt(_)), t("time-update");
  }, Zr = (_, F = !0, le = !1) => {
    const se = F ? _ : M.hours, Be = !F && !le ? _ : M.minutes, st = le ? _ : M.seconds;
    if (e.range && Pl(s.value) && At(se) && At(Be) && At(st) && !e.disableTimeRangeValidation) {
      const kt = (E) => dt(s.value[E], se[E], Be[E], st[E]), Kt = (E) => Ho(s.value[E], 0);
      if (Me(s.value[0], s.value[1]) && (Vo(kt(0), Kt(1)) || Yo(kt(1), Kt(0))))
        return;
    }
    if (V("hours", se), V("minutes", Be), V("seconds", st), s.value)
      if (e.multiDates) {
        const kt = $();
        kt && Xt(kt);
      } else
        Xt(s.value);
    else
      e.timePicker && Xt(e.range ? [U(), U()] : U());
    n();
  }, Xr = (_, F) => {
    e.monthChangeOnScroll && sn(e.monthChangeOnScroll !== "inverse" ? -_.deltaY : _.deltaY, F);
  }, Kr = (_, F, le = !1) => {
    e.monthChangeOnArrows && e.vertical === le && cn(_, F);
  }, cn = (_, F) => {
    sn(_ === "right" ? -1 : 1, F);
  };
  return {
    time: M,
    month: W,
    year: B,
    modelValue: s,
    calendars: g,
    monthYearSelect: Qr,
    isDisabled: i,
    updateTime: Zr,
    getWeekNum: ge,
    selectDate: Zt,
    updateMonthYear: Bt,
    handleScroll: Xr,
    getMarker: (_) => e.markers.find((F) => Me(u(_.value), u(F.date))),
    handleArrow: Kr,
    handleSwipe: cn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = et(U(), s.value[0]) ? [U(), s.value[0]] : [s.value[0], U()] : s.value = [U()] : s.value = U(), w();
    },
    presetDateRange: (_, F) => {
      F || _.length && _.length <= 2 && e.range && (s.value = _.map((le) => U(le)), w(), e.multiCalendars && lt().then(() => Q(!0)));
    }
  };
}, Ky = (e, t, n) => {
  const r = R(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: i,
    getDefaultPattern: u,
    checkRangeEnabled: m,
    checkPartialRangeValue: d,
    isValidDate: y,
    setDateMonthOrYear: p,
    defaults: s
  } = ct(t), h = R(""), g = nr(t, "format");
  Ze(r, () => {
    e("internal-model-change", r.value);
  }), Ze(g, () => {
    c();
  });
  const M = (T) => {
    const w = T || U();
    return t.modelType ? S(w) : {
      hours: $t(w),
      minutes: Ot(w),
      seconds: t.enableSeconds ? Gt(w) : 0
    };
  }, W = (T) => t.modelType ? S(T) : { month: De(T), year: Re(T) }, B = (T) => Array.isArray(T) ? m(() => [
    Yt(U(), T[0]),
    T[1] ? Yt(U(), T[1]) : d()
  ]) : Yt(U(), +T), L = (T, w) => (typeof T == "string" || typeof T == "number") && t.modelType ? O(T) : w, P = (T) => Array.isArray(T) ? [
    L(
      T[0],
      dt(null, +T[0].hours, +T[0].minutes, T[0].seconds)
    ),
    L(
      T[1],
      dt(null, +T[1].hours, +T[1].minutes, T[1].seconds)
    )
  ] : L(T, dt(null, T.hours, T.minutes, T.seconds)), V = (T) => Array.isArray(T) ? m(() => [
    L(T[0], p(null, +T[0].month, +T[0].year)),
    L(
      T[1],
      T[1] ? p(null, +T[1].month, +T[1].year) : d()
    )
  ]) : L(T, p(null, +T.month, +T.year)), Q = (T) => {
    if (Array.isArray(T))
      return T.map((w) => O(w));
    throw new Error(Lr.dateArr("multi-dates"));
  }, X = (T) => {
    if (Array.isArray(T))
      return [U(T[0]), U(T[1])];
    throw new Error(Lr.dateArr("week-picker"));
  }, ee = (T) => t.modelAuto ? Array.isArray(T) ? [O(T[0]), O(T[1])] : t.autoApply ? [O(T)] : [O(T), null] : Array.isArray(T) ? m(() => [
    O(T[0]),
    T[1] ? O(T[1]) : d()
  ]) : O(T), N = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(d());
  }, x = () => {
    const T = r.value;
    return [
      S(T[0]),
      T[1] ? S(T[1]) : d()
    ];
  }, A = () => r.value[1] ? x() : S(Xe(r.value[0])), I = () => (r.value || []).map((T) => S(T)), Z = () => (N(), t.modelAuto ? A() : t.multiDates ? I() : Array.isArray(r.value) ? m(() => x()) : S(Xe(r.value))), q = (T) => T ? t.timePicker ? P(Xe(T)) : t.monthPicker ? V(Xe(T)) : t.yearPicker ? B(Xe(T)) : t.multiDates ? Q(Xe(T)) : t.weekPicker ? X(Xe(T)) : ee(Xe(T)) : null, ne = (T) => {
    const w = q(T);
    y(Xe(w)) ? (r.value = Xe(w), c()) : (r.value = null, h.value = "");
  }, C = () => {
    var T;
    const w = (z) => {
      var ke;
      return an(z, (ke = s.value.textInputOptions) == null ? void 0 : ke.format);
    };
    return `${w(r.value[0])} ${(T = s.value.textInputOptions) == null ? void 0 : T.rangeSeparator} ${r.value[1] ? w(r.value[1]) : ""}`;
  }, $ = () => {
    var T;
    return n.value && r.value ? Array.isArray(r.value) ? C() : an(r.value, (T = s.value.textInputOptions) == null ? void 0 : T.format) : i(r.value);
  }, l = () => {
    var T;
    return r.value ? t.multiDates ? r.value.map((w) => i(w)).join("; ") : t.textInput && typeof ((T = s.value.textInputOptions) == null ? void 0 : T.format) == "string" ? $() : i(r.value) : "";
  }, c = () => {
    !t.format || typeof t.format == "string" ? h.value = l() : h.value = t.format(r.value);
  }, O = (T) => {
    if (t.utc) {
      const w = new Date(T);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(T)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? To(T, u(), /* @__PURE__ */ new Date()) : o(To(T, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(T));
  }, S = (T) => T ? t.utc ? dy(T, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(T) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(a(T)) : i(a(T), t.modelType) : a(T) : "", H = (T) => {
    e("update:model-value", T);
  }, J = (T) => Array.isArray(r.value) ? [
    T(r.value[0]),
    r.value[1] ? T(r.value[1]) : d()
  ] : T(Xe(r.value)), G = (T) => H(Xe(J(T)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ne,
    formatInputValue: c,
    emitModelValue: () => (c(), t.monthPicker ? G(W) : t.timePicker ? G(M) : t.yearPicker ? G(Re) : t.weekPicker ? H(r.value) : H(Z()))
  };
}, Jy = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = ct(e), i = (p, s) => {
    let h = p;
    return o.value.filters.months.includes(De(h)) ? (h = s ? gt(p, 1) : jt(p, 1), i(h, s)) : h;
  }, u = (p, s) => {
    let h = p;
    return o.value.filters.years.includes(Re(h)) ? (h = s ? Yl(p, 1) : sy(p, 1), u(h, s)) : h;
  }, m = (p) => {
    const s = Je(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let h = p ? gt(s, 1) : jt(s, 1), g = De(h), M = Re(h);
    o.value.filters.months.includes(g) && (h = i(h, p), g = De(h), M = Re(h)), o.value.filters.years.includes(M) && (h = u(h, p), M = Re(h)), n(g, M, p, e.preventMinMaxNavigation) && d(g, M);
  }, d = (p, s) => {
    t("update-month-year", { month: p, year: s });
  }, y = b(() => (p) => {
    if (!e.preventMinMaxNavigation || p && !e.maxDate || !p && !e.minDate)
      return !1;
    const s = Je(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), h = p ? gt(s, 1) : jt(s, 1), g = [De(h), Re(h)];
    return p ? !r(...g) : !a(...g);
  });
  return { handleMonthYearChange: m, isDisabled: y, updateMonthYear: d };
};
var tr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(tr || {});
const ev = (e, t, n, r) => {
  const a = R({
    top: "0",
    left: "0",
    transform: "none"
  }), o = R(!1), i = nr(r, "teleportCenter");
  Ze(i, () => {
    M();
  });
  const u = (N) => {
    if (r.teleport) {
      const x = N.getBoundingClientRect();
      return {
        left: x.left + window.scrollX,
        top: x.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, m = (N, x) => {
    a.value.left = `${N + x}px`, a.value.transform = "translateX(-100%)";
  }, d = (N) => {
    a.value.left = `${N}px`, a.value.transform = "translateX(0)";
  }, y = (N, x, A = !1) => {
    r.position === tr.left && d(N), r.position === tr.right && m(N, x), r.position === tr.center && (a.value.left = `${N + x / 2}px`, a.value.transform = A ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, p = (N) => {
    const { width: x, height: A } = N.getBoundingClientRect(), { top: I, left: Z } = r.altPosition ? r.altPosition(N) : u(N);
    return { top: +I, left: +Z, width: x, height: A };
  }, s = () => {
    const N = He(t);
    if (N) {
      const { top: x, left: A, width: I, height: Z } = p(N);
      a.value.top = `${x + Z / 2}px`, a.value.transform = "translateY(-50%)", y(A, I, !0);
    }
  }, h = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, g = () => {
    const N = He(t), { top: x, left: A, transform: I } = r.altPosition(N);
    a.value = { top: `${x}px`, left: `${A}px`, transform: I || "" };
  }, M = (N = !0) => {
    if (!r.inline)
      return i.value ? h() : r.altPosition !== null ? g() : (N && n("recalculate-position"), Q());
  }, W = ({
    inputEl: N,
    menuEl: x,
    left: A,
    width: I
  }) => {
    window.screen.width > 768 && y(A, I), P(N, x);
  }, B = (N, x) => {
    const { top: A, left: I, height: Z, width: q } = p(N);
    a.value.top = `${Z + A + +r.offset}px`, W({ inputEl: N, menuEl: x, left: I, width: q }), o.value = !1;
  }, L = (N, x) => {
    const { top: A, left: I, width: Z } = p(N), { height: q } = x.getBoundingClientRect();
    a.value.top = `${A - q - +r.offset}px`, W({ inputEl: N, menuEl: x, left: I, width: Z }), o.value = !0;
  }, P = (N, x) => {
    if (r.autoPosition) {
      const { left: A, width: I } = p(N), { left: Z, right: q } = x.getBoundingClientRect();
      return Z <= 0 || Z <= A ? d(A) : q >= document.documentElement.clientWidth ? m(A, I) : y(A, I);
    }
  }, V = (N, x) => {
    const { height: A } = x.getBoundingClientRect(), { top: I, height: Z } = N.getBoundingClientRect(), q = window.innerHeight - I - Z, ne = I;
    return A <= q ? B(N, x) : A > q && A <= ne ? L(N, x) : q >= ne ? B(N, x) : L(N, x);
  }, Q = () => {
    const N = He(t), x = He(e);
    if (N && x)
      return r.autoPosition ? V(N, x) : B(N, x);
  }, X = function(N) {
    if (N) {
      const x = N.scrollHeight > N.clientHeight, A = window.getComputedStyle(N).overflowY.indexOf("hidden") !== -1;
      return x && !A;
    }
    return !0;
  }, ee = function(N) {
    return !N || N === document.body ? window : X(N) ? N : ee(N.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: M, setInitialPosition: s, getScrollableParent: ee };
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
], tv = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], nv = {
  all: () => zt,
  monthYear: () => zt.filter((e) => e.use.includes("month-year")),
  input: () => tv,
  timePicker: () => zt.filter((e) => e.use.includes("time")),
  action: () => zt.filter((e) => e.use.includes("action")),
  calendar: () => zt.filter((e) => e.use.includes("calendar")),
  menu: () => zt.filter((e) => e.use.includes("menu"))
}, Vt = (e, t, n) => {
  const r = [];
  return nv[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, jr = (e) => ({ transitionName: b(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), It = {
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
}, rv = ["aria-label", "aria-disabled", "aria-readonly"], av = {
  key: 1,
  class: "dp__input_wrap"
}, ov = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], iv = {
  key: 2,
  class: "dp__input_icon"
}, lv = {
  key: 4,
  class: "dp__clear_icon"
}, uv = /* @__PURE__ */ ie({
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: i, getDefaultStartTime: u, assignDefaultTime: m } = ct(r), d = R(), y = R(null), p = R(!1), s = b(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: p.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), h = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), d.value = null);
    }, g = (x) => {
      var A;
      const I = u();
      return fy(
        x,
        ((A = i.value.textInputOptions) == null ? void 0 : A.format) || a(),
        I || m({}),
        r.inputValue
      );
    }, M = (x) => {
      const { rangeSeparator: A } = i.value.textInputOptions, [I, Z] = x.split(`${A}`);
      if (I) {
        const q = g(I.trim()), ne = Z ? g(Z.trim()) : null, C = q && ne ? [q, ne] : [q];
        d.value = q ? C : null;
      }
    }, W = (x) => {
      if (r.range)
        M(x);
      else if (r.multiDates) {
        const A = x.split(";");
        d.value = A.map((I) => g(I.trim())).filter((I) => I);
      } else
        d.value = g(x);
    }, B = (x) => {
      var A;
      const { value: I } = x.target;
      I !== "" ? ((A = i.value.textInputOptions) != null && A.openMenu && !r.isMenuOpen && n("open"), W(I), n("set-input-date", d.value)) : h(), n("update:input-value", I);
    }, L = () => {
      var x, A;
      (x = i.value.textInputOptions) != null && x.enterSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (A = i.value.textInputOptions) != null && A.enterSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, P = () => {
      var x, A;
      (x = i.value.textInputOptions) != null && x.tabSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (A = i.value.textInputOptions) != null && A.tabSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, V = () => {
      p.value = !0, n("focus");
    }, Q = (x) => {
      var A;
      x.preventDefault(), x.stopImmediatePropagation(), x.stopPropagation(), r.textInput && (A = i.value.textInputOptions) != null && A.openMenu && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, X = () => {
      p.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && d.value && (n("set-input-date", d.value), n("select-date"), d.value = null);
    }, ee = () => {
      n("clear");
    }, N = (x) => {
      r.textInput || x.preventDefault();
    };
    return t({
      focusInput: () => {
        y.value && y.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (x) => {
        d.value = x;
      }
    }), (x, A) => {
      var I;
      return v(), k("div", {
        onClick: Q,
        "aria-label": (I = f(i).ariaLabels) == null ? void 0 : I.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": x.disabled,
        "aria-readonly": x.readonly
      }, [
        x.$slots.trigger && !x.$slots["dp-input"] && !x.inline ? j(x.$slots, "trigger", { key: 0 }) : D("", !0),
        !x.$slots.trigger && (!x.inline || x.inlineWithInput) ? (v(), k("div", av, [
          x.$slots["dp-input"] && !x.$slots.trigger && !x.inline ? j(x.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: B,
            onEnter: L,
            onTab: P,
            onClear: ee
          }) : D("", !0),
          x.$slots["dp-input"] ? D("", !0) : (v(), k("input", {
            key: 1,
            ref_key: "inputRef",
            ref: y,
            id: x.uid ? `dp-input-${x.uid}` : void 0,
            name: x.name,
            class: fe(f(s)),
            inputmode: x.textInput ? "text" : "none",
            placeholder: x.placeholder,
            disabled: x.disabled,
            readonly: x.readonly,
            required: x.required,
            value: e.inputValue,
            autocomplete: x.autocomplete,
            onInput: B,
            onKeydown: [
              be(Q, ["enter"]),
              be(P, ["tab"]),
              N
            ],
            onBlur: X,
            onFocus: V,
            onKeypress: N
          }, null, 42, ov)),
          x.$slots["input-icon"] && !x.hideInputIcon ? (v(), k("span", iv, [
            j(x.$slots, "input-icon")
          ])) : D("", !0),
          !x.$slots["input-icon"] && !x.hideInputIcon && !x.$slots["dp-input"] ? (v(), te(f(zr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : D("", !0),
          x.$slots["clear-icon"] && e.inputValue && x.clearable && !x.disabled && !x.readonly ? (v(), k("span", lv, [
            j(x.$slots, "clear-icon", { clear: ee })
          ])) : D("", !0),
          x.clearable && !x.$slots["clear-icon"] && e.inputValue && !x.disabled && !x.readonly ? (v(), te(f(cy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ee(ee, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : D("", !0)
        ])) : D("", !0)
      ], 8, rv);
    };
  }
}), sv = { class: "dp__selection_preview" }, cv = { class: "dp__action_buttons" }, fv = ["onKeydown"], dv = /* @__PURE__ */ ie({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = ct(n), { buildMatrix: i } = Mt(), u = R(null), m = R(null);
    qe(() => {
      n.arrowNavigation && i([He(u), He(m)], "actionRow");
    });
    const d = b(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), y = b(() => !s.value || !h.value || !d.value), p = b(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: y.value
    })), s = b(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = b(() => n.monthPicker ? B(n.internalModelValue) : !0), g = () => {
      const P = o.value.previewFormat;
      return n.timePicker || n.monthPicker, P(Xe(n.internalModelValue));
    }, M = () => {
      const P = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(P[0])} - ${r(P[1])}` : [r(P[0]), r(P[1])];
    }, W = b(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? M() : n.multiDates ? n.internalModelValue.map((P) => `${r(P)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : g()), B = (P) => {
      if (!n.monthPicker)
        return !0;
      let V = !0;
      return n.minDate && n.maxDate ? at(U(P), U(n.minDate)) && et(U(P), U(n.maxDate)) : (n.minDate && (V = at(U(P), U(n.minDate))), n.maxDate && (V = et(U(P), U(n.maxDate))), V);
    }, L = () => {
      s.value && h.value && d.value ? t("select-date") : t("invalid-select");
    };
    return (P, V) => (v(), k("div", {
      class: "dp__action_row",
      style: St(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      P.$slots["action-row"] ? j(P.$slots, "action-row", Ke(je({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: f(y),
        selectDate: () => P.$emit("select-date"),
        closePicker: () => P.$emit("close-picker")
      }))) : (v(), k(me, { key: 1 }, [
        Y("div", sv, [
          P.$slots["action-preview"] ? j(P.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : D("", !0),
          P.$slots["action-preview"] ? D("", !0) : (v(), k(me, { key: 1 }, [
            Array.isArray(f(W)) ? D("", !0) : (v(), k(me, { key: 0 }, [
              Ie(he(f(W)), 1)
            ], 64)),
            Array.isArray(f(W)) ? (v(!0), k(me, { key: 1 }, Te(f(W), (Q, X) => (v(), k("div", { key: X }, he(Q), 1))), 128)) : D("", !0)
          ], 64))
        ]),
        Y("div", cv, [
          P.$slots["action-select"] ? j(P.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : D("", !0),
          P.$slots["action-select"] ? D("", !0) : (v(), k(me, { key: 1 }, [
            P.inline ? D("", !0) : (v(), k("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: V[0] || (V[0] = (Q) => P.$emit("close-picker")),
              onKeydown: [
                V[1] || (V[1] = be((Q) => P.$emit("close-picker"), ["enter"])),
                V[2] || (V[2] = be((Q) => P.$emit("close-picker"), ["space"]))
              ]
            }, he(P.cancelText), 545)),
            Y("span", {
              class: fe(f(p)),
              tabindex: "0",
              onKeydown: [
                be(L, ["enter"]),
                be(L, ["space"])
              ],
              onClick: L,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: m
            }, he(P.selectText), 43, fv)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), mv = ["aria-label"], pv = {
  class: "dp__calendar_header",
  role: "row"
}, yv = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, vv = /* @__PURE__ */ Y("div", { class: "dp__calendar_header_separator" }, null, -1), hv = ["aria-label"], gv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, bv = { class: "dp__cell_inner" }, _v = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], wv = /* @__PURE__ */ ie({
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: i } = ct(r), u = R(null), m = R({
      bottom: "",
      left: "",
      transform: ""
    }), d = R([]), y = R(null), p = R(!0), s = R(""), h = R({ startX: 0, endX: 0, startY: 0, endY: 0 }), g = R([]), M = R({ left: "50%" }), W = b(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Fy(r.locale, +r.weekStart));
    qe(() => {
      n("mount", { cmp: "calendar", refs: d }), r.noSwipe || y.value && (y.value.addEventListener("touchstart", I, { passive: !1 }), y.value.addEventListener("touchend", Z, { passive: !1 }), y.value.addEventListener("touchmove", q, { passive: !1 })), r.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", $, { passive: !1 });
    });
    const B = (l) => l ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", L = (l, c) => {
      if (r.transitions) {
        const O = _t(o(U(), r.month, r.year));
        s.value = at(_t(o(U(), l, c)), O) ? i.value.transitions[B(!0)] : i.value.transitions[B(!1)], p.value = !1, lt(() => {
          p.value = !0;
        });
      }
    }, P = b(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), V = b(() => (l) => {
      const c = Hy(l);
      return {
        dp__marker_dot: c.type === "dot",
        dp__marker_line: c.type === "line"
      };
    }), Q = b(() => (l) => Me(l, u.value)), X = b(() => ({
      dp__calendar: !0,
      dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
    })), ee = b(() => (l) => r.hideOffsetDates ? l.current : !0), N = b(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), x = async (l, c, O) => {
      var S, H;
      if (n("set-hover-date", l), (H = (S = l.marker) == null ? void 0 : S.tooltip) != null && H.length) {
        const J = He(d.value[c][O]);
        if (J) {
          const { width: G, height: T } = J.getBoundingClientRect();
          u.value = l.value;
          let w = { left: `${G / 2}px` }, z = -50;
          if (await lt(), g.value[0]) {
            const { left: ke, width: oe } = g.value[0].getBoundingClientRect();
            ke < 0 && (w = { left: "0" }, z = 0, M.value.left = `${G / 2}px`), window.innerWidth < ke + oe && (w = { right: "0" }, z = 0, M.value.left = `${oe - G / 2}px`);
          }
          m.value = {
            bottom: `${T}px`,
            ...w,
            transform: `translateX(${z}%)`
          }, n("tooltip-open", l.marker);
        }
      }
    }, A = (l) => {
      u.value && (u.value = null, m.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", l.marker));
    }, I = (l) => {
      h.value.startX = l.changedTouches[0].screenX, h.value.startY = l.changedTouches[0].screenY;
    }, Z = (l) => {
      h.value.endX = l.changedTouches[0].screenX, h.value.endY = l.changedTouches[0].screenY, ne();
    }, q = (l) => {
      r.vertical && !r.inline && l.preventDefault();
    }, ne = () => {
      const l = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${l}`] - h.value[`end${l}`]) > 10 && n("handle-swipe", h.value[`start${l}`] > h.value[`end${l}`] ? "right" : "left");
    }, C = (l, c, O) => {
      l && (Array.isArray(d.value[c]) ? d.value[c][O] = l : d.value[c] = [l]), r.arrowNavigation && a(d.value, "calendar");
    }, $ = (l) => {
      r.monthChangeOnScroll && (l.preventDefault(), n("handle-scroll", l));
    };
    return t({ triggerTransition: L }), (l, c) => {
      var O;
      return v(), k("div", {
        class: fe(f(X))
      }, [
        Y("div", {
          style: St(f(N))
        }, [
          e.specificMode ? D("", !0) : (v(), k("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: y,
            class: fe(f(P)),
            role: "grid",
            "aria-label": (O = f(i).ariaLabels) == null ? void 0 : O.calendarWrap
          }, [
            Y("div", pv, [
              l.weekNumbers ? (v(), k("div", yv, he(l.weekNumName), 1)) : D("", !0),
              (v(!0), k(me, null, Te(f(W), (S, H) => (v(), k("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: H,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? j(l.$slots, "calendar-header", {
                  key: 0,
                  day: S,
                  index: H
                }) : D("", !0),
                l.$slots["calendar-header"] ? D("", !0) : (v(), k(me, { key: 1 }, [
                  Ie(he(S), 1)
                ], 64))
              ]))), 128))
            ]),
            vv,
            pe(yt, {
              name: s.value,
              css: !!l.transitions
            }, {
              default: K(() => {
                var S;
                return [
                  p.value ? (v(), k("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (S = f(i).ariaLabels) == null ? void 0 : S.calendarDays
                  }, [
                    (v(!0), k(me, null, Te(e.mappedDates, (H, J) => (v(), k("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: J
                    }, [
                      l.weekNumbers ? (v(), k("div", gv, [
                        Y("div", bv, he(e.getWeekNum(H.days)), 1)
                      ])) : D("", !0),
                      (v(!0), k(me, null, Te(H.days, (G, T) => {
                        var w, z, ke;
                        return v(), k("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (oe) => C(oe, J, T),
                          key: T + J,
                          "aria-selected": G.classData.dp__active_date || G.classData.dp__range_start || G.classData.dp__range_start,
                          "aria-disabled": G.classData.dp__cell_disabled,
                          "aria-label": (z = (w = f(i).ariaLabels) == null ? void 0 : w.day) == null ? void 0 : z.call(w, G),
                          tabindex: "0",
                          "data-test": G.value,
                          onClick: Ee((oe) => l.$emit("select-date", G), ["stop", "prevent"]),
                          onKeydown: [
                            be((oe) => l.$emit("select-date", G), ["enter"]),
                            be((oe) => l.$emit("handle-space", G), ["space"])
                          ],
                          onMouseenter: (oe) => x(G, J, T),
                          onMouseleave: (oe) => A(G)
                        }, [
                          Y("div", {
                            class: fe(["dp__cell_inner", G.classData])
                          }, [
                            l.$slots.day && f(ee)(G) ? j(l.$slots, "day", {
                              key: 0,
                              day: +G.text,
                              date: G.value
                            }) : D("", !0),
                            l.$slots.day ? D("", !0) : (v(), k(me, { key: 1 }, [
                              Ie(he(G.text), 1)
                            ], 64)),
                            G.marker && f(ee)(G) ? (v(), k("div", {
                              key: 2,
                              class: fe(f(V)(G.marker)),
                              style: St(G.marker.color ? { backgroundColor: G.marker.color } : {})
                            }, null, 6)) : D("", !0),
                            f(Q)(G.value) ? (v(), k("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: g,
                              style: St(m.value)
                            }, [
                              (ke = G.marker) != null && ke.tooltip ? (v(), k("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: c[0] || (c[0] = Ee(() => {
                                }, ["stop"]))
                              }, [
                                (v(!0), k(me, null, Te(G.marker.tooltip, (oe, ye) => (v(), k("div", {
                                  key: ye,
                                  class: "dp__tooltip_text"
                                }, [
                                  l.$slots["marker-tooltip"] ? j(l.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: oe,
                                    day: G.value
                                  }) : D("", !0),
                                  l.$slots["marker-tooltip"] ? D("", !0) : (v(), k(me, { key: 1 }, [
                                    Y("div", {
                                      class: "dp__tooltip_mark",
                                      style: St(oe.color ? { backgroundColor: oe.color } : {})
                                    }, null, 4),
                                    Y("div", null, he(oe.text), 1)
                                  ], 64))
                                ]))), 128)),
                                Y("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: St(M.value)
                                }, null, 4)
                              ])) : D("", !0)
                            ], 4)) : D("", !0)
                          ], 2)
                        ], 40, _v);
                      }), 128))
                    ]))), 128))
                  ], 8, hv)) : D("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, mv))
        ], 4)
      ], 2);
    };
  }
}), kv = ["aria-label", "aria-disabled"], da = /* @__PURE__ */ ie({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = R(null);
    return qe(() => t("set-ref", n)), (r, a) => (v(), k("div", {
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
      Y("div", {
        class: fe(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        j(r.$slots, "default")
      ], 2)
    ], 40, kv));
  }
}), xv = ["onKeydown"], Sv = { class: "dp__selection_grid_header" }, $v = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Ov = ["aria-label", "onKeydown"], ln = /* @__PURE__ */ ie({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: i } = Mt(), { hideNavigationButtons: u } = ct(r), m = R(!1), d = R(null), y = R(null), p = R([]), s = R(), h = R(null), g = R(0), M = R(null);
    $u(() => {
      d.value = null;
    }), qe(() => {
      lt().then(() => x()), B(), W(!0);
    }), Ro(() => W(!1));
    const W = ($) => {
      var l;
      r.arrowNavigation && ((l = r.headerRefs) != null && l.length ? i($) : a($));
    }, B = () => {
      const $ = He(y);
      $ && (r.textInput || $.focus({ preventScroll: !0 }), m.value = $.clientHeight < $.scrollHeight);
    }, L = b(
      () => ({
        dp__overlay: !0
      })
    ), P = b(() => ({
      dp__overlay_col: !0
    })), V = ($) => r.skipActive ? !1 : $.value === r.modelValue, Q = b(() => r.items.map(($) => $.filter((l) => l).map((l) => {
      var c, O, S;
      const H = r.disabledValues.some((G) => G === l.value) || N(l.value), J = (c = r.multiModelValue) != null && c.length ? (O = r.multiModelValue) == null ? void 0 : O.some(
        (G) => Me(
          G,
          Yt(
            r.monthPicker ? on(/* @__PURE__ */ new Date(), l.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : l.value
          )
        )
      ) : V(l);
      return {
        ...l,
        className: {
          dp__overlay_cell_active: J,
          dp__overlay_cell: !J,
          dp__overlay_cell_disabled: H,
          dp__overlay_cell_active_disabled: H && J,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (S = r.multiModelValue) != null && S.length ? I(l.value) : !1
        }
      };
    }))), X = b(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: m.value,
        dp__button_bottom: r.autoApply
      })
    ), ee = b(() => {
      var $, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: (($ = r.items) == null ? void 0 : $.length) <= 6,
        dp__container_block: ((l = r.items) == null ? void 0 : l.length) > 6
      };
    }), N = ($) => {
      const l = r.maxValue || r.maxValue === 0, c = r.minValue || r.minValue === 0;
      return !l && !c ? !1 : l && c ? +$ > +r.maxValue || +$ < +r.minValue : l ? +$ > +r.maxValue : c ? +$ < +r.minValue : !1;
    }, x = () => {
      const $ = He(d), l = He(y), c = He(h), O = He(M), S = c ? c.getBoundingClientRect().height : 0;
      l && (g.value = l.getBoundingClientRect().height - S), $ && O && (O.scrollTop = $.offsetTop - O.offsetTop - (g.value / 2 - $.getBoundingClientRect().height) - S);
    }, A = ($) => {
      !r.disabledValues.some((l) => l === $) && !N($) && (n("update:model-value", $), n("selected"));
    }, I = ($) => {
      const l = r.monthPicker ? r.year : $;
      return su(
        r.multiModelValue,
        Yt(
          r.monthPicker ? on(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? l : s.value || l
        ),
        Yt(r.monthPicker ? on(/* @__PURE__ */ new Date(), $) : /* @__PURE__ */ new Date(), l)
      );
    }, Z = () => {
      n("toggle"), n("reset-flow");
    }, q = () => {
      r.escClose && Z();
    }, ne = ($, l, c, O) => {
      $ && (l.value === +r.modelValue && !r.disabledValues.includes(l.value) && (d.value = $), r.arrowNavigation && (Array.isArray(p.value[c]) ? p.value[c][O] = $ : p.value[c] = [$], C()));
    }, C = () => {
      var $, l;
      const c = ($ = r.headerRefs) != null && $.length ? [r.headerRefs].concat(p.value) : p.value.concat([r.skipButtonRef ? [] : [h.value]]);
      o(Xe(c), (l = r.headerRefs) != null && l.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: B }), ($, l) => {
      var c;
      return v(), k("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: fe(f(L)),
        role: "dialog",
        tabindex: "0",
        onKeydown: be(q, ["esc"])
      }, [
        Y("div", {
          class: fe(f(ee)),
          ref_key: "containerRef",
          ref: M,
          role: "grid",
          style: St({ height: `${g.value}px` })
        }, [
          Y("div", Sv, [
            j($.$slots, "header")
          ]),
          $.$slots.overlay ? j($.$slots, "overlay", { key: 0 }) : (v(!0), k(me, { key: 1 }, Te(f(Q), (O, S) => (v(), k("div", {
            class: "dp__overlay_row",
            key: S,
            role: "row"
          }, [
            (v(!0), k(me, null, Te(O, (H, J) => (v(), k("div", {
              role: "gridcell",
              class: fe(f(P)),
              key: H.value,
              "aria-selected": H.value === e.modelValue && !e.disabledValues.includes(H.value),
              "aria-disabled": H.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (G) => ne(G, H, S, J),
              tabindex: "0",
              "data-test": H.text,
              onClick: (G) => A(H.value),
              onKeydown: [
                be((G) => A(H.value), ["enter"]),
                be((G) => A(H.value), ["space"])
              ],
              onMouseover: (G) => s.value = H.value
            }, [
              Y("div", {
                class: fe(H.className)
              }, [
                $.$slots.item ? j($.$slots, "item", {
                  key: 0,
                  item: H
                }) : D("", !0),
                $.$slots.item ? D("", !0) : (v(), k(me, { key: 1 }, [
                  Ie(he(H.text), 1)
                ], 64))
              ], 2)
            ], 42, $v))), 128))
          ]))), 128))
        ], 6),
        $.$slots["button-icon"] ? Ct((v(), k("div", {
          key: 0,
          role: "button",
          "aria-label": (c = e.ariaLabels) == null ? void 0 : c.toggleOverlay,
          class: fe(f(X)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h,
          onClick: Z,
          onKeydown: be(Z, ["enter"])
        }, [
          j($.$slots, "button-icon")
        ], 42, Ov)), [
          [pn, !f(u)(e.type)]
        ]) : D("", !0)
      ], 42, xv);
    };
  }
}), Tv = ["aria-label"], Cl = /* @__PURE__ */ ie({
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
    const n = e, { transitionName: r, showTransition: a } = jr(n.transitions), o = R(null);
    return qe(() => t("set-ref", o)), (i, u) => (v(), k(me, null, [
      Y("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (m) => i.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = be((m) => i.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = be((m) => i.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        j(i.$slots, "default")
      ], 40, Tv),
      pe(yt, {
        name: f(r)(e.showSelectionGrid),
        css: f(a)
      }, {
        default: K(() => [
          e.showSelectionGrid ? (v(), te(ln, je({ key: 0 }, {
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
            "onUpdate:modelValue": u[3] || (u[3] = (m) => i.$emit("update:model-value", m)),
            onToggle: u[4] || (u[4] = (m) => i.$emit("toggle"))
          }), Le({
            "button-icon": K(() => [
              i.$slots["calendar-icon"] ? j(i.$slots, "calendar-icon", { key: 0 }) : D("", !0),
              i.$slots["calendar-icon"] ? D("", !0) : (v(), te(f(zr), { key: 1 }))
            ]),
            _: 2
          }, [
            i.$slots[e.slotName] ? {
              name: "item",
              fn: K(({ item: m }) => [
                j(i.$slots, e.slotName, { item: m })
              ]),
              key: "0"
            } : void 0,
            i.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: K(() => [
                j(i.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            i.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: K(() => [
                j(i.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : D("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Pv = { class: "dp__month_year_row" }, Cv = { class: "dp__month_year_wrap" }, Dv = { class: "dp__month_picker_header" }, Rv = ["aria-label"], Mv = ["aria-label"], Iv = ["aria-label"], Nv = /* @__PURE__ */ ie({
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
    const r = e, { defaults: a } = ct(r), { transitionName: o, showTransition: i } = jr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: m, isDisabled: d, updateMonthYear: y } = Jy(r, n), p = R(!1), s = R(!1), h = R([null, null, null, null]), g = R(null), M = R(null), W = R(null);
    qe(() => {
      n("mount");
    });
    const B = (w) => ({
      get: () => r[w],
      set: (z) => {
        const ke = w === "month" ? "year" : "month";
        n("update-month-year", { [w]: z, [ke]: r[ke] }), n("month-year-select", w === "year"), w === "month" ? S(!0) : H(!0);
      }
    }), L = b(B("month")), P = b(B("year")), V = (w) => {
      const z = Re(U(w));
      return r.year === z;
    }, Q = b(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((w) => U(w)).filter((w) => V(w)).map((w) => De(w)) : [] : []), X = b(() => (w) => {
      const z = w === "month";
      return {
        showSelectionGrid: (z ? p : s).value,
        items: (z ? $ : l).value,
        disabledValues: a.value.filters[z ? "months" : "years"].concat(Q.value),
        minValue: (z ? A : N).value,
        maxValue: (z ? I : x).value,
        headerRefs: z && r.monthPicker ? [g.value, M.value, W.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), ee = b(() => (w) => ({
      month: r.month,
      year: r.year,
      items: w === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: y,
      toggle: w === "month" ? S : H
    })), N = b(() => r.minDate ? Re(U(r.minDate)) : null), x = b(() => r.maxDate ? Re(U(r.maxDate)) : null), A = b(() => {
      if (r.minDate && N.value) {
        if (N.value > r.year)
          return 12;
        if (N.value === r.year)
          return De(U(r.minDate));
      }
      return null;
    }), I = b(() => r.maxDate && x.value ? x.value < r.year ? -1 : x.value === r.year ? De(U(r.maxDate)) : null : null), Z = b(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), q = (w) => w.reverse(), ne = (w, z = !1) => {
      const ke = [], oe = (ye) => z ? q(ye) : ye;
      for (let ye = 0; ye < w.length; ye += 3) {
        const Ne = [w[ye], w[ye + 1], w[ye + 2]];
        ke.push(oe(Ne));
      }
      return z ? ke.reverse() : ke;
    }, C = b(() => r.months.find((z) => z.value === r.month) || { text: "", value: 0 }), $ = b(() => ne(r.months)), l = b(() => ne(r.years, r.reverseYears)), c = b(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), O = b(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), S = (w = !1) => {
      J(w), p.value = !p.value, p.value || n("overlay-closed");
    }, H = (w = !1) => {
      J(w), s.value = !s.value, s.value || n("overlay-closed");
    }, J = (w) => {
      w || n("reset-flow");
    }, G = (w = !1) => {
      d.value(w) || n("update-month-year", {
        year: w ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, T = (w, z) => {
      r.arrowNavigation && (h.value[z] = He(w), u(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: S,
      toggleYearPicker: H,
      handleMonthYearChange: m
    }), (w, z) => {
      var ke, oe, ye, Ne, ut;
      return v(), k("div", Pv, [
        w.$slots["month-year"] ? j(w.$slots, "month-year", Ke(je({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: f(y), handleMonthYearChange: f(m), instance: e.instance }))) : (v(), k(me, { key: 1 }, [
          !w.monthPicker && !w.yearPicker ? (v(), k(me, { key: 0 }, [
            f(c) && !w.vertical ? (v(), te(da, {
              key: 0,
              "aria-label": (ke = f(a).ariaLabels) == null ? void 0 : ke.prevMonth,
              disabled: f(d)(!1),
              onActivate: z[0] || (z[0] = (ve) => f(m)(!1)),
              onSetRef: z[1] || (z[1] = (ve) => T(ve, 0))
            }, {
              default: K(() => [
                w.$slots["arrow-left"] ? j(w.$slots, "arrow-left", { key: 0 }) : D("", !0),
                w.$slots["arrow-left"] ? D("", !0) : (v(), te(f(pl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            Y("div", Cv, [
              pe(Cl, je({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (oe = f(a).ariaLabels) == null ? void 0 : oe.openMonthsOverlay,
                modelValue: f(L),
                "onUpdate:modelValue": z[2] || (z[2] = (ve) => Ye(L) ? L.value = ve : null)
              }, f(X)("month"), {
                onToggle: S,
                onSetRef: z[3] || (z[3] = (ve) => T(ve, 1))
              }), Le({
                default: K(() => [
                  w.$slots.month ? j(w.$slots, "month", Ke(je({ key: 0 }, f(C)))) : D("", !0),
                  w.$slots.month ? D("", !0) : (v(), k(me, { key: 1 }, [
                    Ie(he(f(C).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    j(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: K(({ item: ve }) => [
                    j(w.$slots, "month-overlay-value", {
                      text: ve.text,
                      value: ve.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: K(() => [
                    j(w.$slots, "month-overlay", Ke(pt(f(ee)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: K(() => [
                    j(w.$slots, "month-overlay-header", { toggle: S })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              pe(Cl, je({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (ye = f(a).ariaLabels) == null ? void 0 : ye.openYearsOverlay,
                modelValue: f(P),
                "onUpdate:modelValue": z[4] || (z[4] = (ve) => Ye(P) ? P.value = ve : null)
              }, f(X)("year"), {
                onToggle: H,
                onSetRef: z[5] || (z[5] = (ve) => T(ve, 2))
              }), Le({
                default: K(() => [
                  w.$slots.year ? j(w.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : D("", !0),
                  w.$slots.year ? D("", !0) : (v(), k(me, { key: 1 }, [
                    Ie(he(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    j(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: K(({ item: ve }) => [
                    j(w.$slots, "year-overlay-value", {
                      text: ve.text,
                      value: ve.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: K(() => [
                    j(w.$slots, "year-overlay", Ke(pt(f(ee)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: K(() => [
                    j(w.$slots, "year-overlay-header", { toggle: H })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            f(c) && w.vertical ? (v(), te(da, {
              key: 1,
              "aria-label": (Ne = f(a).ariaLabels) == null ? void 0 : Ne.prevMonth,
              disabled: f(d)(!1),
              onActivate: z[6] || (z[6] = (ve) => f(m)(!1))
            }, {
              default: K(() => [
                w.$slots["arrow-up"] ? j(w.$slots, "arrow-up", { key: 0 }) : D("", !0),
                w.$slots["arrow-up"] ? D("", !0) : (v(), te(f(lu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : D("", !0),
            f(O) ? (v(), te(da, {
              key: 2,
              ref: "rightIcon",
              disabled: f(d)(!0),
              "aria-label": (ut = f(a).ariaLabels) == null ? void 0 : ut.nextMonth,
              onActivate: z[7] || (z[7] = (ve) => f(m)(!0)),
              onSetRef: z[8] || (z[8] = (ve) => T(ve, 3))
            }, {
              default: K(() => [
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? j(w.$slots, w.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : D("", !0),
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? D("", !0) : (v(), te(Il(w.vertical ? f(uu) : f(yl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : D("", !0)
          ], 64)) : D("", !0),
          w.monthPicker ? (v(), te(ln, je({ key: 1 }, f(X)("month"), {
            "skip-active": w.range,
            year: e.year,
            "multi-model-value": f(Z),
            "month-picker": "",
            modelValue: f(L),
            "onUpdate:modelValue": z[17] || (z[17] = (ve) => Ye(L) ? L.value = ve : null),
            onToggle: S,
            onSelected: z[18] || (z[18] = (ve) => w.$emit("overlay-closed"))
          }), Le({
            header: K(() => {
              var ve, ft, ot;
              return [
                Y("div", Dv, [
                  Y("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: g,
                    onClick: z[9] || (z[9] = (ze) => G(!1)),
                    onKeydown: z[10] || (z[10] = be((ze) => G(!1), ["enter"]))
                  }, [
                    Y("div", {
                      class: fe(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!1) }]),
                      role: "button",
                      "aria-label": (ve = f(a).ariaLabels) == null ? void 0 : ve.prevMonth
                    }, [
                      w.$slots["arrow-left"] ? j(w.$slots, "arrow-left", { key: 0 }) : D("", !0),
                      w.$slots["arrow-left"] ? D("", !0) : (v(), te(f(pl), { key: 1 }))
                    ], 10, Rv)
                  ], 544),
                  Y("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: M,
                    "aria-label": (ft = f(a).ariaLabels) == null ? void 0 : ft.openYearsOverlay,
                    tabindex: "0",
                    onClick: z[11] || (z[11] = () => H(!1)),
                    onKeydown: z[12] || (z[12] = be(() => H(!1), ["enter"]))
                  }, [
                    w.$slots.year ? j(w.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : D("", !0),
                    w.$slots.year ? D("", !0) : (v(), k(me, { key: 1 }, [
                      Ie(he(e.year), 1)
                    ], 64))
                  ], 40, Mv),
                  Y("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: W,
                    onClick: z[13] || (z[13] = (ze) => G(!0)),
                    onKeydown: z[14] || (z[14] = be((ze) => G(!0), ["enter"]))
                  }, [
                    Y("div", {
                      class: fe(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!0) }]),
                      role: "button",
                      "aria-label": (ot = f(a).ariaLabels) == null ? void 0 : ot.nextMonth
                    }, [
                      w.$slots["arrow-right"] ? j(w.$slots, "arrow-right", { key: 0 }) : D("", !0),
                      w.$slots["arrow-right"] ? D("", !0) : (v(), te(f(yl), { key: 1 }))
                    ], 10, Iv)
                  ], 544)
                ]),
                pe(yt, {
                  name: f(o)(s.value),
                  css: f(i)
                }, {
                  default: K(() => [
                    s.value ? (v(), te(ln, je({ key: 0 }, f(X)("year"), {
                      modelValue: f(P),
                      "onUpdate:modelValue": z[15] || (z[15] = (ze) => Ye(P) ? P.value = ze : null),
                      onToggle: H,
                      onSelected: z[16] || (z[16] = (ze) => w.$emit("overlay-closed"))
                    }), Le({
                      "button-icon": K(() => [
                        w.$slots["calendar-icon"] ? j(w.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                        w.$slots["calendar-icon"] ? D("", !0) : (v(), te(f(zr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      w.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: K(({ item: ze }) => [
                          j(w.$slots, "year-overlay-value", {
                            text: ze.text,
                            value: ze.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : D("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            w.$slots["month-overlay-value"] ? {
              name: "item",
              fn: K(({ item: ve }) => [
                j(w.$slots, "month-overlay-value", {
                  text: ve.text,
                  value: ve.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : D("", !0),
          w.yearPicker ? (v(), te(ln, je({ key: 2 }, f(X)("year"), {
            modelValue: f(P),
            "onUpdate:modelValue": z[19] || (z[19] = (ve) => Ye(P) ? P.value = ve : null),
            "multi-model-value": f(Z),
            "skip-active": w.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: H,
            onSelected: z[20] || (z[20] = (ve) => w.$emit("overlay-closed"))
          }), Le({ _: 2 }, [
            w.$slots["year-overlay-value"] ? {
              name: "item",
              fn: K(({ item: ve }) => [
                j(w.$slots, "year-overlay-value", {
                  text: ve.text,
                  value: ve.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : D("", !0)
        ], 64))
      ]);
    };
  }
}), Bv = {
  key: 0,
  class: "dp__time_input"
}, Av = ["aria-label", "onKeydown", "onClick"], Ev = ["aria-label", "data-test", "onKeydown", "onClick"], Vv = ["aria-label", "onKeydown", "onClick"], Yv = { key: 0 }, Fv = ["aria-label", "onKeydown"], Uv = /* @__PURE__ */ ie({
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: i } = ct(r), { transitionName: u, showTransition: m } = jr(i.value.transitions), d = Pt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = R("AM"), p = R(null), s = R([]);
    qe(() => {
      n("mounted");
    });
    const h = b(() => (l) => !!(r.maxTime && r.maxTime[l] && r.maxTime[l] < r[l] + +r[`${l}Increment`])), g = b(() => (l) => !!(r.minTime && r.minTime[l] && r.minTime[l] > r[l] - +r[`${l}Increment`])), M = (l, c) => Vl(Je(U(), l), c), W = (l, c) => uy(Je(U(), l), c), B = b(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), L = b(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), P = b(() => L.value.filter((l) => !l.separator)), V = b(() => (l) => {
      if (l === "hours") {
        const c = Z(r.hours);
        return { text: c < 10 ? `0${c}` : `${c}`, value: c };
      }
      return { text: r[l] < 10 ? `0${r[l]}` : `${r[l]}`, value: r[l] };
    }), Q = (l) => {
      const c = r.is24 ? 24 : 12, O = l === "hours" ? c : 60, S = +r[`${l}GridIncrement`], H = l === "hours" && !r.is24 ? S : 0, J = [];
      for (let G = H; G < O; G += S)
        J.push({ value: G, text: G < 10 ? `0${G}` : `${G}` });
      return l === "hours" && !r.is24 && J.push({ value: 0, text: "12" }), Yy(J);
    }, X = (l, c) => {
      const O = r.minTime && r.minTime[c], S = r.maxTime && r.maxTime[c];
      return O && S ? l < O || l > S : O ? l < O : S ? l > S : !1;
    }, ee = b(() => (l) => Q(l).flat().filter((c) => c).map((c) => c.value).filter((c) => X(c, l))), N = (l) => r[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], x = (l) => {
      N(l) || (d[l] = !d[l], d[l] || n("overlay-closed"));
    }, A = (l) => l === "hours" ? $t : l === "minutes" ? Ot : Gt, I = (l, c = !0) => {
      const O = c ? M : W;
      (c ? h.value(l) : g.value(l)) || n(
        `update:${l}`,
        A(l)(O({ [l]: +r[l] }, { [l]: +r[`${l}Increment`] }))
      );
    }, Z = (l) => r.is24 ? l : (l >= 12 ? y.value = "PM" : y.value = "AM", Ly(l)), q = () => {
      y.value === "PM" ? (y.value = "AM", n("update:hours", r.hours - 12)) : (y.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (l) => {
      d[l] = !0;
    }, C = (l, c, O) => {
      if (l && r.arrowNavigation) {
        Array.isArray(s.value[c]) ? s.value[c][O] = l : s.value[c] = [l];
        const S = s.value.reduce(
          (H, J) => J.map((G, T) => [...H[T] || [], J[T]]),
          []
        );
        o(r.closeTimePickerBtn), p.value && (S[1] = S[1].concat(p.value)), a(S, r.order);
      }
    }, $ = (l, c) => l === "hours" && !r.is24 ? n(`update:${l}`, y.value === "PM" ? c + 12 : c) : n(`update:${l}`, c);
    return t({ openChildCmp: ne }), (l, c) => {
      var O;
      return l.disabled ? D("", !0) : (v(), k("div", Bv, [
        (v(!0), k(me, null, Te(f(L), (S, H) => {
          var J, G, T;
          return v(), k("div", {
            key: H,
            class: fe(f(B))
          }, [
            S.separator ? (v(), k(me, { key: 0 }, [
              Ie(" : ")
            ], 64)) : (v(), k(me, { key: 1 }, [
              Y("div", {
                class: fe({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(h)(S.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (J = f(i).ariaLabels) == null ? void 0 : J.incrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  be((w) => I(S.type), ["enter"]),
                  be((w) => I(S.type), ["space"])
                ],
                onClick: (w) => I(S.type),
                ref_for: !0,
                ref: (w) => C(w, H, 0)
              }, [
                l.$slots["arrow-up"] ? j(l.$slots, "arrow-up", { key: 0 }) : D("", !0),
                l.$slots["arrow-up"] ? D("", !0) : (v(), te(f(lu), { key: 1 }))
              ], 42, Av),
              Y("div", {
                role: "button",
                "aria-label": (G = f(i).ariaLabels) == null ? void 0 : G.openTpOverlay(S.type),
                class: fe(N(S.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${S.type}-toggle-overlay-btn`,
                onKeydown: [
                  be((w) => x(S.type), ["enter"]),
                  be((w) => x(S.type), ["space"])
                ],
                onClick: (w) => x(S.type),
                ref_for: !0,
                ref: (w) => C(w, H, 1)
              }, [
                l.$slots[S.type] ? j(l.$slots, S.type, {
                  key: 0,
                  text: f(V)(S.type).text,
                  value: f(V)(S.type).value
                }) : D("", !0),
                l.$slots[S.type] ? D("", !0) : (v(), k(me, { key: 1 }, [
                  Ie(he(f(V)(S.type).text), 1)
                ], 64))
              ], 42, Ev),
              Y("div", {
                class: fe({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(g)(S.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (T = f(i).ariaLabels) == null ? void 0 : T.decrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  be((w) => I(S.type, !1), ["enter"]),
                  be((w) => I(S.type, !1), ["space"])
                ],
                onClick: (w) => I(S.type, !1),
                ref_for: !0,
                ref: (w) => C(w, H, 2)
              }, [
                l.$slots["arrow-down"] ? j(l.$slots, "arrow-down", { key: 0 }) : D("", !0),
                l.$slots["arrow-down"] ? D("", !0) : (v(), te(f(uu), { key: 1 }))
              ], 42, Vv)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? D("", !0) : (v(), k("div", Yv, [
          l.$slots["am-pm-button"] ? j(l.$slots, "am-pm-button", {
            key: 0,
            toggle: q,
            value: y.value
          }) : D("", !0),
          l.$slots["am-pm-button"] ? D("", !0) : (v(), k("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: p,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (O = f(i).ariaLabels) == null ? void 0 : O.amPmButton,
            tabindex: "0",
            onClick: q,
            onKeydown: [
              be(Ee(q, ["prevent"]), ["enter"]),
              be(Ee(q, ["prevent"]), ["space"])
            ]
          }, he(y.value), 41, Fv))
        ])),
        (v(!0), k(me, null, Te(f(P), (S, H) => (v(), te(yt, {
          key: H,
          name: f(u)(d[S.type]),
          css: f(m)
        }, {
          default: K(() => [
            d[S.type] ? (v(), te(ln, {
              key: 0,
              items: Q(S.type),
              "disabled-values": f(i).filters.times[S.type].concat(f(ee)(S.type)),
              "esc-close": l.escClose,
              "aria-labels": f(i).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (J) => $(S.type, J),
              onSelected: (J) => x(S.type),
              onToggle: (J) => x(S.type),
              onResetFlow: c[0] || (c[0] = (J) => l.$emit("reset-flow")),
              type: S.type
            }, Le({
              "button-icon": K(() => [
                l.$slots["clock-icon"] ? j(l.$slots, "clock-icon", { key: 0 }) : D("", !0),
                l.$slots["clock-icon"] ? D("", !0) : (v(), te(f(iu), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${S.type}-overlay-value`] ? {
                name: "item",
                fn: K(({ item: J }) => [
                  j(l.$slots, `${S.type}-overlay-value`, {
                    text: J.text,
                    value: J.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : D("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Wv = ["aria-label"], Lv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Hv = {
  key: 1,
  class: "dp__overlay_row"
}, zv = ["aria-label"], jv = /* @__PURE__ */ ie({
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), i = mt(), { hideNavigationButtons: u, defaults: m } = ct(r), { transitionName: d, showTransition: y } = jr(m.value.transitions), p = R(null), s = R(null), h = R([]), g = R(null);
    qe(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([He(p.value)], "time") : o(!0, r.timePicker);
    });
    const M = b(() => r.range && r.modelAuto ? mu(r.internalModelValue) : !0), W = R(!1), B = (I) => ({
      hours: Array.isArray(r.hours) ? r.hours[I] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[I] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[I] : r.seconds
    }), L = b(() => {
      const I = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          I.push(B(Z));
      else
        I.push(B(0));
      return I;
    }), P = (I, Z = !1, q = "") => {
      Z || n("reset-flow"), W.value = I, I && n("overlay-opened"), r.arrowNavigation && (o(I), I || n("overlay-closed")), lt(() => {
        q !== "" && h.value[0] && h.value[0].openChildCmp(q);
      });
    }, V = b(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), Q = Vt(i, "timePicker"), X = (I, Z, q) => r.range ? Z === 0 ? [I, L.value[1][q]] : [L.value[0][q], I] : I, ee = (I) => {
      n("update:hours", I);
    }, N = (I) => {
      n("update:minutes", I);
    }, x = (I) => {
      n("update:seconds", I);
    }, A = () => {
      g.value && r.arrowNavigation && g.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: P }), (I, Z) => {
      var q;
      return v(), k("div", null, [
        I.timePicker ? D("", !0) : Ct((v(), k("div", {
          key: 0,
          class: fe(f(V)),
          role: "button",
          "aria-label": (q = f(m).ariaLabels) == null ? void 0 : q.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: p,
          onKeydown: [
            Z[0] || (Z[0] = be((ne) => P(!0), ["enter"])),
            Z[1] || (Z[1] = be((ne) => P(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (ne) => P(!0))
        }, [
          I.$slots["clock-icon"] ? j(I.$slots, "clock-icon", { key: 0 }) : D("", !0),
          I.$slots["clock-icon"] ? D("", !0) : (v(), te(f(iu), { key: 1 }))
        ], 42, Wv)), [
          [pn, !f(u)("time")]
        ]),
        pe(yt, {
          name: f(d)(W.value),
          css: f(y)
        }, {
          default: K(() => {
            var ne;
            return [
              W.value || I.timePicker ? (v(), k("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: g,
                tabindex: "0"
              }, [
                Y("div", Lv, [
                  I.$slots["time-picker-overlay"] ? j(I.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ee,
                    setMinutes: N,
                    setSeconds: x
                  }) : D("", !0),
                  I.$slots["time-picker-overlay"] ? D("", !0) : (v(), k("div", Hv, [
                    (v(!0), k(me, null, Te(f(L), (C, $) => Ct((v(), te(Uv, je({ key: $ }, {
                      ...I.$props,
                      order: $,
                      hours: C.hours,
                      minutes: C.minutes,
                      seconds: C.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: $ === 0 ? I.fixedStart : I.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (l) => ee(X(l, $, "hours")),
                      "onUpdate:minutes": (l) => N(X(l, $, "minutes")),
                      "onUpdate:seconds": (l) => x(X(l, $, "seconds")),
                      onMounted: A,
                      onOverlayClosed: A
                    }), Le({ _: 2 }, [
                      Te(f(Q), (l, c) => ({
                        name: l,
                        fn: K((O) => [
                          j(I.$slots, l, Ke(pt(O)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [pn, $ === 0 ? !0 : f(M)]
                    ])), 128))
                  ])),
                  I.timePicker ? D("", !0) : Ct((v(), k("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: fe(f(V)),
                    role: "button",
                    "aria-label": (ne = f(m).ariaLabels) == null ? void 0 : ne.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = be((C) => P(!1), ["enter"])),
                      Z[4] || (Z[4] = be((C) => P(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (C) => P(!1))
                  }, [
                    I.$slots["calendar-icon"] ? j(I.$slots, "calendar-icon", { key: 0 }) : D("", !0),
                    I.$slots["calendar-icon"] ? D("", !0) : (v(), te(f(zr), { key: 1 }))
                  ], 42, zv)), [
                    [pn, !f(u)("time")]
                  ])
                ])
              ], 512)) : D("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), qv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = ct(t), o = R(null), i = R(U()), u = (c) => {
    !c.current && t.hideOffsetDates || (o.value = c.value);
  }, m = () => {
    o.value = null;
  }, d = (c) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? c ? at(o.value, e.value[0]) : et(o.value, e.value[0]) : !0, y = (c, O) => {
    const S = () => e.value ? O ? e.value[0] || null : e.value[1] : null, H = e.value && Array.isArray(e.value) ? S() : null;
    return Me(U(c.value), H);
  }, p = (c) => {
    const O = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !et(o.value || null, O) : !0;
  }, s = (c, O = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Me(U(c.value), e.value[O ? 0 : 1]) : t.range ? y(c, O) && p(O) || Me(c.value, Array.isArray(e.value) ? e.value[0] : null) && d(O) : !1, h = (c, O, S) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : S ? at(e.value[0], O.value) : et(e.value[0], O.value) : !1, g = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Me(c.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((O) => Me(O, c.value)) : Me(c.value, e.value ? e.value : i.value), M = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = Dt(o.value, +t.autoRange), S = a(U(o.value));
        return t.weekPicker ? Me(S[1], U(c.value)) : Me(O, U(c.value));
      }
      return !1;
    }
    return !1;
  }, W = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const O = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const S = a(U(o.value));
        return t.weekPicker ? at(c.value, S[0]) && et(c.value, S[1]) : at(c.value, o.value) && et(c.value, O);
      }
      return !1;
    }
    return !1;
  }, B = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = a(U(o.value));
        return t.weekPicker ? Me(O[0], c.value) : Me(o.value, c.value);
      }
      return !1;
    }
    return !1;
  }, L = (c) => su(e.value, o.value, c.value), P = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, V = () => t.modelAuto ? mu(t.internalModelValue) : !0, Q = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const O = t.range ? !s(c) && !s(c, !1) : !0;
    return !n(c.value) && !g(c) && !(!c.current && t.hideOffsetDates) && O;
  }, X = (c) => t.range ? t.modelAuto ? P() && g(c) : !1 : g(c), ee = (c) => t.highlight ? r(c.value, t.highlight) : !1, N = (c) => n(c.value) && t.highlightDisabledDays === !1, x = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), A = (c) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || c.current) && V() && !(!c.current && t.hideOffsetDates) && !g(c) ? L(c) : !1, I = (c) => {
    const { isRangeStart: O, isRangeEnd: S } = ne(c), H = t.range ? O || S : !1;
    return {
      dp__cell_offset: !c.current,
      dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
      dp__cell_disabled: n(c.value),
      dp__cell_highlight: !N(c) && (ee(c) || x(c)) && !X(c) && !H,
      dp__cell_highlight_active: !N(c) && (ee(c) || x(c)) && X(c),
      dp__today: !t.noToday && Me(c.value, i.value) && c.current
    };
  }, Z = (c) => ({
    dp__active_date: X(c),
    dp__date_hover: Q(c)
  }), q = (c) => ({
    ...C(c),
    ...$(c),
    dp__range_between_week: A(c) && t.weekPicker
  }), ne = (c) => {
    const O = t.multiCalendars > 0 ? c.current && s(c) && V() : s(c) && V(), S = t.multiCalendars > 0 ? c.current && s(c, !1) && V() : s(c, !1) && V();
    return { isRangeStart: O, isRangeEnd: S };
  }, C = (c) => {
    const { isRangeStart: O, isRangeEnd: S } = ne(c);
    return {
      dp__range_start: O,
      dp__range_end: S,
      dp__range_between: A(c) && !t.weekPicker,
      dp__date_hover_start: h(Q(c), c, !0),
      dp__date_hover_end: h(Q(c), c, !1)
    };
  }, $ = (c) => ({
    ...C(c),
    dp__cell_auto_range: W(c),
    dp__cell_auto_range_start: B(c),
    dp__cell_auto_range_end: M(c)
  }), l = (c) => t.range ? t.autoRange ? $(c) : t.modelAuto ? { ...Z(c), ...C(c) } : C(c) : t.weekPicker ? q(c) : Z(c);
  return {
    setHoverDate: u,
    clearHoverDate: m,
    getDayClassData: (c) => ({
      ...I(c),
      ...l(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, Gv = ["id", "onKeydown"], Qv = {
  key: 0,
  class: "dp__sidebar_left"
}, Zv = {
  key: 1,
  class: "dp__preset_ranges"
}, Xv = ["onClick"], Kv = {
  key: 2,
  class: "dp__sidebar_right"
}, Jv = {
  key: 3,
  class: "dp__now_wrap"
}, eh = /* @__PURE__ */ ie({
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: i } = cu(), { getCalendarDays: u, defaults: m } = ct(r), d = mt(), y = R(null), p = Pt({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = R([]), h = R([]), g = R(null), M = R(null), W = R(0), B = R(!1), L = R(0);
    qe(() => {
      var E;
      B.value = !0, !((E = r.presetRanges) != null && E.length) && !d["left-sidebar"] && !d["right-sidebar"] && ge();
      const ae = He(M);
      if (ae && !r.textInput && !r.inline && (a(!0), N()), ae) {
        const tt = (it) => {
          ["action-row", "time-picker", "month-year"].some(
            (Wt) => Object.keys(d).includes(Wt)
          ) || it.preventDefault(), it.stopImmediatePropagation(), it.stopPropagation();
        };
        ae.addEventListener("pointerdown", tt), ae.addEventListener("mousedown", tt);
      }
      window.addEventListener("resize", ge);
    }), Ro(() => {
      window.removeEventListener("resize", ge);
    });
    const { arrowRight: P, arrowLeft: V, arrowDown: Q, arrowUp: X } = Mt(), ee = (E) => {
      E || E === 0 ? h.value[E].triggerTransition(
        q.value(E),
        ne.value(E)
      ) : h.value.forEach(
        (ae, tt) => ae.triggerTransition(q.value(tt), ne.value(tt))
      );
    }, N = () => {
      const E = He(M);
      E && E.focus({ preventScroll: !0 });
    }, x = () => {
      var E;
      (E = r.flow) != null && E.length && L.value !== -1 && (L.value += 1, n("flow-step", L.value), Be());
    }, A = () => {
      L.value = -1;
    }, {
      calendars: I,
      modelValue: Z,
      month: q,
      year: ne,
      time: C,
      updateTime: $,
      updateMonthYear: l,
      selectDate: c,
      getWeekNum: O,
      monthYearSelect: S,
      handleScroll: H,
      handleArrow: J,
      handleSwipe: G,
      getMarker: T,
      selectCurrentDate: w,
      presetDateRange: z
    } = Xy(r, n, x, ee, L), { setHoverDate: ke, clearHoverDate: oe, getDayClassData: ye } = qv(Z, r);
    Ze(
      I,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Ne = Vt(d, "calendar"), ut = Vt(d, "action"), ve = Vt(d, "timePicker"), ft = Vt(d, "monthYear"), ot = b(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), ze = b(() => Uy(r.yearRange)), Zt = b(() => Wy(r.locale, r.monthNameFormat)), ge = () => {
      const E = He(y);
      E && (W.value = E.getBoundingClientRect().width);
    }, Pe = b(() => (E) => u(q.value(E), ne.value(E))), $e = b(
      () => m.value.multiCalendars > 0 && r.range ? [...Array(m.value.multiCalendars).keys()] : [0]
    ), Nt = b(
      () => (E) => E === 1
    ), Bt = b(() => r.monthPicker || r.timePicker || r.yearPicker), Qr = b(
      () => ({
        dp__flex_display: m.value.multiCalendars > 0
      })
    ), sn = b(() => ({
      dp__instance_calendar: m.value.multiCalendars > 0
    })), Xt = b(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), Zr = b(
      () => (E) => Kr(Pe, E)
    ), Xr = b(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Kr = (E, ae) => E.value(ae).map((tt) => ({
      ...tt,
      days: tt.days.map((it) => (it.marker = T(it), it.classData = ye(it), it))
    })), cn = (E) => {
      E.stopPropagation(), E.stopImmediatePropagation();
    }, _ = () => {
      r.escClose && n("close-picker");
    }, F = (E, ae = !1) => {
      c(E, ae), r.spaceConfirm && n("select-date");
    }, le = (E) => {
      var ae;
      (ae = r.flow) != null && ae.length && (p[E] = !0, Object.keys(p).filter((tt) => !p[tt]).length || Be());
    }, se = (E, ae, tt, it, ...Wt) => {
      if (r.flow[L.value] === E) {
        const ue = it ? ae.value[0] : ae.value;
        ue && ue[tt](...Wt);
      }
    }, Be = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", g, "toggleTimePicker", !1, !1, !0), se("time", g, "toggleTimePicker", !1, !0, !0);
      const E = r.flow[L.value];
      (E === "hours" || E === "minutes" || E === "seconds") && se(E, g, "toggleTimePicker", !1, !0, !0, E);
    }, st = (E) => {
      if (r.arrowNavigation) {
        if (E === "up")
          return X();
        if (E === "down")
          return Q();
        if (E === "left")
          return V();
        if (E === "right")
          return P();
      } else
        E === "left" || E === "up" ? J("left", 0, E === "up") : J("right", 0, E === "down");
    }, kt = (E) => {
      o(E.shiftKey), !r.disableMonthYearSelect && E.code === "Tab" && E.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (E.preventDefault(), E.stopImmediatePropagation(), n("close-picker"));
    }, Kt = (E) => {
      s.value[0] && s.value[0].handleMonthYearChange(E);
    };
    return t({
      updateMonthYear: l
    }), (E, ae) => {
      var tt;
      return v(), te(yt, {
        appear: "",
        name: (tt = f(m).transitions) == null ? void 0 : tt.menuAppear,
        mode: "out-in",
        css: !!E.transitions
      }, {
        default: K(() => {
          var it, Wt;
          return [
            Y("div", {
              id: E.uid ? `dp-menu-${E.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: M,
              role: "dialog",
              class: fe(f(Xr)),
              onMouseleave: ae[15] || (ae[15] = //@ts-ignore
              (...ue) => f(oe) && f(oe)(...ue)),
              onClick: cn,
              onKeydown: [
                be(_, ["esc"]),
                ae[16] || (ae[16] = be(Ee((ue) => st("left"), ["prevent"]), ["left"])),
                ae[17] || (ae[17] = be(Ee((ue) => st("up"), ["prevent"]), ["up"])),
                ae[18] || (ae[18] = be(Ee((ue) => st("down"), ["prevent"]), ["down"])),
                ae[19] || (ae[19] = be(Ee((ue) => st("right"), ["prevent"]), ["right"])),
                kt
              ]
            }, [
              (E.disabled || E.readonly) && E.inline ? (v(), k("div", {
                key: 0,
                class: fe(f(Xt))
              }, null, 2)) : D("", !0),
              !E.inline && !E.teleportCenter ? (v(), k("div", {
                key: 1,
                class: fe(f(ot))
              }, null, 2)) : D("", !0),
              Y("div", {
                class: fe({
                  dp__menu_content_wrapper: ((it = E.presetRanges) == null ? void 0 : it.length) || !!E.$slots["left-sidebar"] || !!E.$slots["right-sidebar"]
                })
              }, [
                E.$slots["left-sidebar"] ? (v(), k("div", Qv, [
                  j(E.$slots, "left-sidebar", Ke(pt({ handleMonthYearChange: Kt })))
                ])) : D("", !0),
                (Wt = E.presetRanges) != null && Wt.length ? (v(), k("div", Zv, [
                  (v(!0), k(me, null, Te(E.presetRanges, (ue, Lt) => (v(), k("div", {
                    key: Lt,
                    style: St(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (_e) => f(z)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? j(E.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: f(z),
                      label: ue.label,
                      range: ue.range
                    }) : (v(), k(me, { key: 1 }, [
                      Ie(he(ue.label), 1)
                    ], 64))
                  ], 12, Xv))), 128))
                ])) : D("", !0),
                Y("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: y,
                  role: "document"
                }, [
                  Y("div", {
                    class: fe(f(Qr))
                  }, [
                    (v(!0), k(me, null, Te(f($e), (ue, Lt) => (v(), k("div", {
                      key: ue,
                      class: fe(f(sn))
                    }, [
                      !E.disableMonthYearSelect && !E.timePicker ? (v(), te(Nv, je({
                        key: 0,
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (s.value[Lt] = _e);
                        },
                        months: f(Zt),
                        years: f(ze),
                        month: f(q)(ue),
                        year: f(ne)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, E.$props, {
                        onMount: ae[0] || (ae[0] = (_e) => le("monthYearInput")),
                        onResetFlow: A,
                        onUpdateMonthYear: (_e) => f(l)(ue, _e),
                        onMonthYearSelect: f(S),
                        onOverlayClosed: N
                      }), Le({ _: 2 }, [
                        Te(f(ft), (_e, wu) => ({
                          name: _e,
                          fn: K((Jr) => [
                            j(E.$slots, _e, Ke(pt(Jr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : D("", !0),
                      pe(wv, je({
                        ref_for: !0,
                        ref: (_e) => {
                          _e && (h.value[Lt] = _e);
                        },
                        "specific-mode": f(Bt),
                        "get-week-num": f(O),
                        instance: ue,
                        "mapped-dates": f(Zr)(ue),
                        month: f(q)(ue),
                        year: f(ne)(ue)
                      }, E.$props, {
                        "flow-step": L.value,
                        "onUpdate:flowStep": ae[1] || (ae[1] = (_e) => L.value = _e),
                        onSelectDate: (_e) => f(c)(_e, !f(Nt)(ue)),
                        onHandleSpace: (_e) => F(_e, !f(Nt)(ue)),
                        onSetHoverDate: ae[2] || (ae[2] = (_e) => f(ke)(_e)),
                        onHandleScroll: (_e) => f(H)(_e, ue),
                        onHandleSwipe: (_e) => f(G)(_e, ue),
                        onMount: ae[3] || (ae[3] = (_e) => le("calendar")),
                        onResetFlow: A,
                        onTooltipOpen: ae[4] || (ae[4] = (_e) => E.$emit("tooltip-open", _e)),
                        onTooltipClose: ae[5] || (ae[5] = (_e) => E.$emit("tooltip-close", _e))
                      }), Le({ _: 2 }, [
                        Te(f(Ne), (_e, wu) => ({
                          name: _e,
                          fn: K((Jr) => [
                            j(E.$slots, _e, Ke(pt({ ...Jr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  Y("div", null, [
                    E.$slots["time-picker"] ? j(E.$slots, "time-picker", Ke(je({ key: 0 }, { time: f(C), updateTime: f($) }))) : (v(), k(me, { key: 1 }, [
                      E.enableTimePicker && !E.monthPicker && !E.weekPicker ? (v(), te(jv, je({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: g,
                        hours: f(C).hours,
                        minutes: f(C).minutes,
                        seconds: f(C).seconds,
                        "internal-model-value": e.internalModelValue
                      }, E.$props, {
                        onMount: ae[6] || (ae[6] = (ue) => le("timePicker")),
                        "onUpdate:hours": ae[7] || (ae[7] = (ue) => f($)(ue)),
                        "onUpdate:minutes": ae[8] || (ae[8] = (ue) => f($)(ue, !1)),
                        "onUpdate:seconds": ae[9] || (ae[9] = (ue) => f($)(ue, !1, !0)),
                        onResetFlow: A,
                        onOverlayClosed: N,
                        onOverlayOpened: ae[10] || (ae[10] = (ue) => E.$emit("time-picker-open", ue))
                      }), Le({ _: 2 }, [
                        Te(f(ve), (ue, Lt) => ({
                          name: ue,
                          fn: K((_e) => [
                            j(E.$slots, ue, Ke(pt(_e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : D("", !0)
                    ], 64))
                  ])
                ], 512),
                E.$slots["right-sidebar"] ? (v(), k("div", Kv, [
                  j(E.$slots, "right-sidebar", Ke(pt({ handleMonthYearChange: Kt })))
                ])) : D("", !0),
                E.showNowButton ? (v(), k("div", Jv, [
                  E.$slots["now-button"] ? j(E.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: f(w)
                  }) : D("", !0),
                  E.$slots["now-button"] ? D("", !0) : (v(), k("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ae[11] || (ae[11] = //@ts-ignore
                    (...ue) => f(w) && f(w)(...ue))
                  }, he(E.nowButtonLabel), 1))
                ])) : D("", !0)
              ], 2),
              !E.autoApply || E.keepActionRow ? (v(), te(dv, je({
                key: 2,
                "menu-mount": B.value,
                "calendar-width": W.value,
                "internal-model-value": e.internalModelValue
              }, E.$props, {
                onClosePicker: ae[12] || (ae[12] = (ue) => E.$emit("close-picker")),
                onSelectDate: ae[13] || (ae[13] = (ue) => E.$emit("select-date")),
                onInvalidSelect: ae[14] || (ae[14] = (ue) => E.$emit("invalid-select"))
              }), Le({ _: 2 }, [
                Te(f(ut), (ue, Lt) => ({
                  name: ue,
                  fn: K((_e) => [
                    j(E.$slots, ue, Ke(pt({ ..._e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : D("", !0)
            ], 42, Gv)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), th = typeof window < "u" ? window : void 0, ma = () => {
}, nh = (e) => Ou() ? (Tu(e), !0) : !1, rh = (e, t, n, r) => {
  if (!e)
    return ma;
  let a = ma;
  const o = Ze(
    () => f(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = ma;
      });
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    o(), a();
  };
  return nh(i), i;
}, ah = (e, t, n, r = {}) => {
  const { window: a = th, event: o = "pointerdown" } = r;
  return a ? rh(a, o, (i) => {
    const u = He(e), m = He(t);
    !u || !m || u === i.target || i.composedPath().includes(u) || i.composedPath().includes(m) || n(i);
  }, { passive: !0 }) : void 0;
}, oh = /* @__PURE__ */ ie({
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
    const r = e, a = mt(), o = R(!1), i = nr(r, "modelValue"), u = nr(r, "timezone"), m = R(null), d = R(null), y = R(!1), p = R(null), { setMenuFocused: s, setShiftKey: h } = cu(), { clearArrowNav: g } = Mt(), { validateDate: M, isValidTime: W, defaults: B } = ct(r);
    qe(() => {
      I(r.modelValue), r.inline || (N(p.value).addEventListener("scroll", c), window.addEventListener("resize", O)), r.inline && (o.value = !0);
    }), Ro(() => {
      if (!r.inline) {
        const ge = N(p.value);
        ge && ge.removeEventListener("scroll", c), window.removeEventListener("resize", O);
      }
    });
    const L = Vt(a, "all", r.presetRanges), P = Vt(a, "input");
    Ze(
      [i, u],
      () => {
        I(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: V, menuPosition: Q, setMenuPosition: X, setInitialPosition: ee, getScrollableParent: N } = ev(
      m,
      d,
      n,
      r
    ), {
      inputValue: x,
      internalModelValue: A,
      parseExternalModelValue: I,
      emitModelValue: Z,
      formatInputValue: q,
      checkBeforeEmit: ne
    } = Ky(n, r, y), C = b(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), $ = b(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), l = b(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), c = () => {
      o.value && (r.closeOnScroll ? oe() : X());
    }, O = () => {
      o.value && X();
    }, S = () => {
      !r.disabled && !r.readonly && (ee(), o.value = !0, lt().then(() => {
        X(), o.value && n("open");
      }), o.value || ke(), I(r.modelValue));
    }, H = () => {
      x.value = "", ke(), n("update:model-value", null), n("cleared"), oe();
    }, J = () => {
      const ge = A.value;
      return !ge || !Array.isArray(ge) && M(ge) ? !0 : Array.isArray(ge) ? ge.length === 2 && M(ge[0]) && M(ge[1]) ? !0 : M(ge[0]) : !1;
    }, G = () => {
      ne() && J() ? (Z(), oe()) : n("invalid-select", A.value);
    }, T = (ge) => {
      w(), Z(), r.closeOnAutoApply && !ge && oe();
    }, w = () => {
      d.value && r.textInput && d.value.setParsedDate(A.value);
    }, z = (ge = !1) => {
      r.autoApply && W(A.value) && J() && (r.range && Array.isArray(A.value) ? (r.partialRange || A.value.length === 2) && T(ge) : T(ge));
    }, ke = () => {
      r.textInput || (A.value = null);
    }, oe = () => {
      r.inline || (o.value && (o.value = !1, s(!1), h(!1), g(), n("closed"), ee(), x.value && I(i.value)), ke(), d.value && d.value.focusInput());
    }, ye = (ge, Pe) => {
      if (!ge) {
        A.value = null;
        return;
      }
      A.value = ge, Pe && (G(), n("text-submit"));
    }, Ne = () => {
      r.autoApply && W(A.value) && Z(), w();
    }, ut = () => o.value ? oe() : S(), ve = (ge) => {
      A.value = ge;
    }, ft = b(() => r.textInput && B.value.textInputOptions.format), ot = () => {
      ft.value && (y.value = !0, q()), n("focus");
    }, ze = () => {
      ft.value && (y.value = !1, q()), n("blur");
    }, Zt = (ge) => {
      m.value && m.value.updateMonthYear(0, {
        month: $l(ge.month),
        year: $l(ge.year)
      });
    };
    return ah(
      m,
      d,
      r.onClickOutside ? () => r.onClickOutside(J) : oe
    ), t({
      closeMenu: oe,
      selectDate: G,
      clearValue: H,
      openMenu: S,
      onScroll: c,
      formatInputValue: q,
      // exposed for testing purposes
      updateInternalModelValue: ve,
      // modify internal modelValue
      setMonthYear: Zt
    }), (ge, Pe) => (v(), k("div", {
      class: fe(f(C)),
      ref_key: "pickerWrapperRef",
      ref: p
    }, [
      pe(uv, je({
        ref_key: "inputRef",
        ref: d,
        "is-menu-open": o.value,
        "input-value": f(x),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Ye(x) ? x.value = $e : null)
      }, ge.$props, {
        onClear: H,
        onOpen: S,
        onSetInputDate: ye,
        onSetEmptyDate: f(Z),
        onSelectDate: G,
        onToggle: ut,
        onClose: oe,
        onFocus: ot,
        onBlur: ze
      }), Le({ _: 2 }, [
        Te(f(P), ($e, Nt) => ({
          name: $e,
          fn: K((Bt) => [
            j(ge.$slots, $e, Ke(pt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (v(), te(Il(ge.teleport ? Su : "div"), Ke(je({ key: 0 }, f(l))), {
        default: K(() => [
          o.value ? (v(), te(eh, je({
            key: 0,
            ref_key: "dpMenuRef",
            ref: m,
            class: f($),
            style: f(Q),
            "open-on-top": f(V)
          }, ge.$props, {
            "internal-model-value": f(A),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Ye(A) ? A.value = $e : null),
            onClosePicker: oe,
            onSelectDate: G,
            onAutoApply: z,
            onTimeUpdate: Ne,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ge.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ge.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ge.$emit("invalid-select", f(A))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ge.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: f(X),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ge.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ge.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ge.$emit("time-picker-open", $e))
          }), Le({ _: 2 }, [
            Te(f(L), ($e, Nt) => ({
              name: $e,
              fn: K((Bt) => [
                j(ge.$slots, $e, Ke(pt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : D("", !0)
        ]),
        _: 3
      }, 16)) : D("", !0)
    ], 2));
  }
}), Go = /* @__PURE__ */ (() => {
  const e = oh;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ih).forEach(([e, t]) => {
  e !== "default" && (Go[e] = t);
});
const lh = { class: "grid gap-y-1" }, uh = ["data-dark", "data-opened", "data-filled", "data-outlined", "data-readonly", "data-error"], sh = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], ch = ["onClick"], fh = { class: "cursor-pointer" }, dh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, mh = /* @__PURE__ */ ie({
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
    const n = e, r = R(!1), a = R(null), o = b({
      get() {
        return n.modelValue;
      },
      set(s) {
        t("update:model-value", s);
      }
    }), i = b(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = b(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), m = b(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), d = () => {
      a.value && a.value.openMenu();
    }, y = () => {
      r.value = !0;
    }, p = () => {
      r.value = !1;
    };
    return (s, h) => (v(), k("div", lh, [
      pe(f(Go), {
        ref_key: "datepicker",
        ref: a,
        modelValue: f(o),
        "onUpdate:modelValue": h[1] || (h[1] = (g) => Ye(o) ? o.value = g : null),
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
        onOpen: y,
        onClosed: p
      }, {
        "dp-input": K(({ value: g, onClear: M, onInput: W, onEnter: B }) => [
          Y("div", {
            "data-dark": e.dark,
            "data-opened": r.value,
            "data-filled": !!f(u),
            "data-outlined": e.outlined,
            "data-readonly": e.readonly,
            "data-error": !!e.errorMessage,
            class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
          }, [
            Y("input", {
              readonly: "",
              type: "text",
              value: g,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
              onClick: h[0] || (h[0] = Ee(() => {
              }, ["stop"])),
              onInput: W,
              onFocus: Ee(d, ["stop"]),
              onKeydown: be(B, ["enter"])
            }, null, 40, sh),
            Y("div", {
              class: "cursor-pointer hover:opacity-60 active:opacity-100",
              onClick: Ee(M, ["stop"])
            }, [
              g && !e.readonly && !e.disabled && e.clearable ? (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fm-circle-close"
              })) : D("", !0)
            ], 8, ch),
            Y("div", fh, [
              e.disabled ? D("", !0) : (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: f(m),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 8, uh)
        ]),
        "arrow-right": K(() => [
          pe(Fe, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-right"
          })
        ]),
        "arrow-left": K(() => [
          pe(Fe, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fm-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly", "month-picker"]),
      e.errorMessage ? (v(), k("div", dh, he(e.errorMessage), 1)) : D("", !0)
    ]));
  }
});
const Qo = /* @__PURE__ */ we(mh, [["__scopeId", "data-v-686c651f"]]), pu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, ph = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), pu(e, t.split("."), n)), yh = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return ph(e, t, n);
  if (Array.isArray(t))
    return pu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, vh = () => ({
  getPropertyFromItem: yh
});
/*! maska v2.1.7 | (c) Alexander Shabunevich | Released under the MIT license */
var hh = Object.defineProperty, gh = (e, t, n) => t in e ? hh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, un = (e, t, n) => (gh(e, typeof t != "symbol" ? t + "" : t, n), n);
const Dl = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class Rl {
  constructor(t = {}) {
    un(this, "opts", {}), un(this, "memo", /* @__PURE__ */ new Map());
    var n;
    const r = { ...t };
    if (r.tokens != null) {
      r.tokens = r.tokensReplace ? { ...r.tokens } : { ...Dl, ...r.tokens };
      for (const a of Object.values(r.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      r.tokens = Dl;
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
    const { mask: i, escaped: u } = this.escapeMask(n), m = [], d = this.opts.tokens != null ? this.opts.tokens : {}, y = this.isReversed() ? -1 : 1, p = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : i.length - 1, h = this.isReversed() ? () => B > -1 && L > -1 : () => B < i.length && L < t.length, g = (P) => !this.isReversed() && P <= s || this.isReversed() && P >= s;
    let M, W = -1, B = this.isReversed() ? i.length - 1 : 0, L = this.isReversed() ? t.length - 1 : 0;
    for (; h(); ) {
      const P = i.charAt(B), V = d[P], Q = (V == null ? void 0 : V.transform) != null ? V.transform(t.charAt(L)) : t.charAt(L);
      if (!u.includes(B) && V != null) {
        if (Q.match(V.pattern) != null)
          m[p](Q), V.repeated ? (W === -1 ? W = B : B === s && B !== W && (B = W - y), s === W && (B -= y)) : V.multiple && (B -= y), B += y;
        else if (V.multiple) {
          const X = ((a = m[L - y]) == null ? void 0 : a.match(V.pattern)) != null, ee = i.charAt(B + y);
          X && ee !== "" && d[ee] == null ? (B += y, L -= y) : m[p]("");
        } else
          Q === M ? M = void 0 : V.optional && (B += y, L -= y);
        L += y;
      } else
        r && !this.isEager() && m[p](P), Q === P && !this.isEager() ? L += y : M = P, this.isEager() || (B += y);
      if (this.isEager())
        for (; g(B) && (d[i.charAt(B)] == null || u.includes(B)); )
          r ? m[p](i.charAt(B)) : i.charAt(B) === t.charAt(L) && (L += y), B += y;
    }
    return this.memo.set(o, m.join("")), this.memo.get(o);
  }
}
const yu = (e) => JSON.parse(e.replaceAll("'", '"')), Ml = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = bh(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = pa(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = pa(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = pa(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = _h(e.dataset.maskaTokens)), n;
}, pa = (e) => e !== "" ? !!JSON.parse(e) : !0, bh = (e) => e.startsWith("[") && e.endsWith("]") ? yu(e) : e, _h = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return yu(e);
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
class wh {
  constructor(t, n = {}) {
    un(this, "items", /* @__PURE__ */ new Map()), un(this, "beforeinputEvent", (r) => {
      const a = r.target, o = this.items.get(a);
      o.isEager() && "inputType" in r && r.inputType.startsWith("delete") && o.unmasked(a.value).length <= 1 && this.setMaskedValue(a, "");
    }), un(this, "inputEvent", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked" in r.detail)
        return;
      const a = r.target, o = this.items.get(a), i = a.value, u = a.selectionStart, m = a.selectionEnd;
      let d = i;
      if (o.isEager()) {
        const y = o.masked(i), p = o.unmasked(i);
        p === "" && "data" in r && r.data != null ? d = r.data : p !== o.unmasked(y) && (d = p);
      }
      if (this.setMaskedValue(a, d), "inputType" in r && (r.inputType.startsWith("delete") || u != null && u < i.length))
        try {
          a.setSelectionRange(u, m);
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
    const r = this.items.get(t), a = new Rl(Ml(t, this.getMaskOpts(n)));
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
      const a = new Rl(Ml(r, n));
      this.items.set(r, a), r.value !== "" && this.setMaskedValue(r, r.value), r.addEventListener("input", this.inputEvent), r.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, n) {
    const r = this.items.get(t);
    this.options.preProcess != null && (n = this.options.preProcess(n));
    const a = r.masked(n), o = r.unmasked(r.isEager() ? a : n), i = r.completed(n), u = { masked: a, unmasked: o, completed: i };
    n = a, this.options.postProcess != null && (n = this.options.postProcess(n)), t.value = n, t.dataset.maskaValue = n, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((m) => m(u)) : this.options.onMaska(u)), t.dispatchEvent(new CustomEvent("maska", { detail: u })), t.dispatchEvent(new CustomEvent("input", { detail: u }));
  }
}
const Do = /* @__PURE__ */ new WeakMap(), kh = (e) => {
  setTimeout(() => {
    var t;
    ((t = Do.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, xh = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), r = { ...t.arg };
  if (n == null)
    return;
  kh(n);
  const a = Do.get(n);
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
  Do.set(n, new wh(n, r));
}, Sh = { class: "grid gap-y-1" }, $h = ["data-dark", "data-filled", "data-outlined", "data-error", "data-padding-right"], Oh = ["type", "data-maska", "disabled", "readonly", "placeholder", "data-maska-tokens"], Th = ["type", "disabled", "readonly", "placeholder"], Ph = ["onClick"], Ch = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, Dh = /* @__PURE__ */ ie({
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
    const n = e, r = mt(), a = b({
      get() {
        return n.modelValue;
      },
      set(s) {
        n.disabled || n.readonly || t("update:model-value", s);
      }
    }), o = () => !!r.append, i = () => {
      a.value && (a.value = "");
    }, u = (s) => {
      n.disabled || n.readonly || t("focus", s);
    }, m = (s) => {
      n.disabled || n.readonly || t("blur", s);
    }, d = (s) => {
      n.disabled || n.readonly || t("input", s);
    }, y = (s) => {
      n.disabled || n.readonly || t("keyup", s);
    }, p = (s) => {
      n.disabled || n.readonly || t("keydown", s);
    };
    return (s, h) => (v(), k("div", Sh, [
      Y("div", {
        "data-dark": e.dark,
        "data-filled": !!f(a),
        "data-outlined": e.outlined,
        "data-error": !!e.errorMessage,
        "data-padding-right": e.clearable || o(),
        class: "h-10 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
      }, [
        e.mask ? Ct((v(), k("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (g) => Ye(a) ? a.value = g : null),
          type: e.type,
          "data-maska": e.mask,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "data-maska-tokens": e.maskTokens,
          class: "h-9 outline-0 px-3 text-secundario text-base placeholder-neutro-4",
          onBlur: m,
          onFocus: u,
          onInput: d,
          onKeyup: y,
          onKeydown: p
        }, null, 40, Oh)), [
          [Ko, f(a)],
          [f(xh)]
        ]) : Ct((v(), k("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => Ye(a) ? a.value = g : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "h-9 outline-0 px-3 text-secundario text-base placeholder-neutro-4",
          onBlur: m,
          onFocus: u,
          onInput: d,
          onKeyup: y,
          onKeydown: p
        }, null, 40, Th)), [
          [Ko, f(a)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (v(), k("div", {
          key: 2,
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onClick: Ee(i, ["stop"])
        }, [
          f(a) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : D("", !0)
        ], 8, Ph)) : D("", !0),
        o() ? j(s.$slots, "append", { key: 3 }, void 0, !0) : D("", !0)
      ], 8, $h),
      e.errorMessage ? (v(), k("div", Ch, he(e.errorMessage), 1)) : D("", !0)
    ]));
  }
});
const qr = /* @__PURE__ */ we(Dh, [["__scopeId", "data-v-6b38752f"]]), Rh = ["data-dark", "data-filled", "data-outlined", "data-readonly", "data-error", "onMousedown"], Mh = ["value", "disabled", "placeholder", "onKeydown"], Ih = ["onClick"], Nh = ["data-opened"], Bh = ["data-selected", "onClick"], Ah = {
  key: 1,
  class: "leading-5 text-base text-center text-secundario"
}, Eh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, Vh = /* @__PURE__ */ ie({
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
    },
    searchFunction: {
      default: null,
      type: Function
    },
    searchPlaceholder: {
      default: "",
      type: String
    },
    hideNoDataMessage: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((c) => ({
      "0da804c1": a.value,
      b1566bca: o.value,
      "43e14632": i.value,
      "9eea95aa": e.textTransform
    }));
    const { getPropertyFromItem: r } = vh(), a = R(""), o = R(""), i = R(""), u = R(""), m = R(!1), d = R(!1), y = R(!1), p = R(null), s = R(null), h = R(null), g = b({
      get() {
        return n.modelValue;
      },
      set(c) {
        t("update:model-value", c);
      }
    }), M = b(
      () => L.value && n.clearable && !n.readonly && !n.disabled
    ), W = b(() => n.errorMessage ? "error" : n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), B = b(() => !n.searchable || !u.value ? n.items : n.items.filter((c) => n.searchFunction ? n.searchFunction(u.value, c) : V(c))), L = b(() => Array.isArray(g.value) ? g.value.length > 0 : !!g.value), P = b(() => {
      var c;
      if (g.value)
        if (Array.isArray(g.value)) {
          if (g.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(g.value, n.itemTitle, g.value);
          {
            const O = (c = n.items) == null ? void 0 : c.find((S) => {
              const H = r(S, n.itemValue, S), J = r(g.value, n.itemValue, g.value);
              return H === J;
            });
            return r(O, n.itemTitle, O);
          }
        }
      return "";
    });
    function V(c) {
      const O = u.value.trim().toLowerCase();
      return O ? Q(c).toLowerCase().includes(O) : !0;
    }
    function Q(c) {
      return r(c, n.itemTitle, c);
    }
    function X() {
      d.value = !0;
    }
    function ee() {
      d.value = !1;
    }
    async function N() {
      await lt();
      const c = s.value, O = h.value;
      if (!c || !O)
        return;
      const S = c.getBoundingClientRect(), H = O.getBoundingClientRect();
      o.value = `${S.left}px`, i.value = `${S.width}px`;
      const J = S.top + S.height + H.height, G = window.innerHeight, T = S.top + S.height - (n.errorMessage ? 18 : 0);
      if (J > G) {
        const w = J - G;
        a.value = `${T - w - 16}px`;
      } else
        a.value = `${T}px`;
    }
    function x() {
      n.disabled || n.readonly || m.value || (m.value = !0, N(), y.value = !0, document.addEventListener("click", q));
    }
    function A() {
      m.value = !1, d.value = !1, y.value = !1, document.removeEventListener("click", q);
    }
    function I() {
      d.value || A();
    }
    function Z() {
      m.value && A();
    }
    function q(c) {
      !s.value || !c.target || s.value.contains(c.target) || A();
    }
    function ne() {
      n.disabled || n.readonly || (m.value ? (A(), p.value && p.value.focus()) : (x(), p.value && p.value.blur()));
    }
    function C(c) {
      const O = r(c, n.itemValue, c);
      if (n.multiple && Array.isArray(g.value)) {
        const S = g.value.slice(), H = n.returnObject ? S.findIndex((J) => r(J, n.itemValue, J) === O) : S.indexOf(O);
        H >= 0 ? S.splice(H, 1) : S.push(n.returnObject ? c : O), g.value = S;
      } else
        g.value = n.returnObject ? c : O, A();
    }
    function $(c) {
      if (n.multiple && Array.isArray(g.value))
        return g.value.some((H) => {
          const J = r(H, n.itemValue, H), G = r(c, n.itemValue, c);
          return J === G;
        });
      const O = r(g.value, n.itemValue, g.value), S = r(c, n.itemValue, c);
      return O === S;
    }
    function l() {
      Array.isArray(g.value) ? g.value = [] : g.value = null;
    }
    return (c, O) => (v(), k("div", {
      ref_key: "container",
      ref: s,
      class: "grid gap-y-1",
      onMouseenter: X,
      onMouseleave: ee
    }, [
      Y("div", {
        "data-dark": e.dark,
        "data-filled": !!f(L),
        "data-outlined": e.outlined,
        "data-readonly": e.readonly,
        "data-error": !!e.errorMessage,
        class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent",
        onMousedown: Ee(ne, ["stop"])
      }, [
        Y("input", {
          ref_key: "input",
          ref: p,
          readonly: "",
          value: f(P),
          disabled: e.disabled,
          placeholder: e.placeholder,
          class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
          onFocus: x,
          onBlur: I,
          onKeydown: be(Z, ["tab"])
        }, null, 40, Mh),
        Y("div", {
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onMousedown: O[0] || (O[0] = Ee(() => {
          }, ["stop"])),
          onClick: Ee(l, ["stop"])
        }, [
          f(M) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : D("", !0)
        ], 40, Ih),
        e.readonly ? D("", !0) : (v(), k("div", {
          key: 0,
          "data-opened": m.value,
          class: "transition-all duration-200 ease-out data-[opened=true]:rotate-180"
        }, [
          pe(Fe, {
            size: "1rem",
            color: f(W),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ], 8, Nh))
      ], 40, Rh),
      pe(yt, null, {
        default: K(() => [
          m.value ? (v(), k("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: h,
            class: "z-[1008] grid p-4 fixed gap-y-2 overflow-y-auto max-h-80 bg-neutro-1 rounded-2xl custom-select__menu"
          }, [
            e.searchable && e.items.length > 5 ? (v(), te(qr, {
              key: 0,
              modelValue: u.value,
              "onUpdate:modelValue": O[1] || (O[1] = (S) => u.value = S),
              outlined: "",
              clearable: "",
              placeholder: e.searchPlaceholder || "Buscar"
            }, {
              append: K(() => [
                pe(Fe, {
                  size: "1rem",
                  color: "acento-principal",
                  name: "fm-magnify-glass"
                })
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder"])) : D("", !0),
            (v(!0), k(me, null, Te(f(B), (S, H) => (v(), k("div", {
              key: `item-${H}`,
              "data-selected": $(S),
              class: "custom-select__menu-item flex cursor-pointer text-base leading-5 gap-x-2 justify-start text-secundario transition-colors duration-100 data-[selected=true]:font-semibold",
              onClick: Ee((J) => C(S), ["stop"])
            }, [
              e.multiple ? (v(), te(Al, {
                key: 0,
                "model-value": $(S)
              }, null, 8, ["model-value"])) : D("", !0),
              Ie(" " + he(Q(S)), 1)
            ], 8, Bh))), 128)),
            f(B).length === 0 && !e.hideNoDataMessage ? (v(), k("div", Ah, " Sin datos disponibles ")) : D("", !0),
            j(c.$slots, "append-item", {
              close: A,
              filteredItems: f(B)
            }, void 0, !0)
          ], 512)) : D("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (v(), k("div", Eh, he(e.errorMessage), 1)) : D("", !0)
    ], 544));
  }
});
const Zo = /* @__PURE__ */ we(Vh, [["__scopeId", "data-v-6fb859e9"]]), Yh = (e, t) => {
  const n = R(1), r = R([]), a = R("asc"), o = R(null), i = b(() => {
    const P = e.value.slice();
    return o.value ? P.sort((V, Q) => {
      if (!o.value)
        return 0;
      const X = s(V, o.value.value), ee = s(Q, o.value.value);
      let N = X > ee ? 1 : -1;
      return o.value.sort && (N = o.value.sort(X, ee)), a.value === "asc" ? N : N * -1;
    }) : P;
  }), u = b(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), m = b(() => t.value !== null ? i.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? i.value : i.value.filter((P, V) => r.value[V] === n.value)), d = b(() => a.value);
  function y(P) {
    return P.id ?? Object.values(P)[0];
  }
  function p(P, V) {
    const Q = V.value;
    return `${y(P)}.${Q}`;
  }
  function s(P, V) {
    return P[V] ?? "";
  }
  function h(P) {
    e.value = P;
  }
  async function g(P, V) {
    var Q;
    P.sortable !== !1 && (n.value = 1, ((Q = o.value) == null ? void 0 : Q.value) === P.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = P, a.value = "asc"), t.value === null && await W(V));
  }
  function M(P) {
    var V;
    return ((V = o.value) == null ? void 0 : V.value) === P;
  }
  async function W(P) {
    r.value = [], await lt(), B(P);
  }
  function B(P) {
    if (e.value.length === 0)
      return;
    const V = [], Q = P.getBoundingClientRect(), X = Math.floor(Q.height - 52);
    let ee = 1, N = 0;
    const x = P.rows;
    for (let I = 0; I < x.length; I++) {
      const Z = x[I].offsetHeight;
      N += Z, N >= X && (N = Z, ee++), V.push(ee);
    }
    r.value = [...V];
    const A = Math.max(...r.value);
    n.value > A && (n.value = A);
  }
  function L() {
    r.value = [], n.value = 1;
  }
  return {
    // Computed
    pageCount: u,
    sortedItems: i,
    currentPage: n,
    getSortOrder: d,
    itemsCurrentPage: m,
    // Methods
    setItems: h,
    setSortBy: g,
    getRowKey: y,
    getCellKey: p,
    isSortedBy: M,
    getCellValue: s,
    paginationToZero: L,
    calculatePagination: B,
    recalculatePagination: W
  };
}, Fh = ["onMouseenter", "onMouseleave"], Uh = /* @__PURE__ */ ie({
  __name: "CustomTooltip",
  props: {
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = mt(), { overlayContainer: r } = Bl(), a = R("initial"), o = R("initial"), i = R("initial"), u = R(null), m = b(() => ({
      "custom-tooltip__container": !0,
      "custom-tooltip__container--disabled": t.disabled
    })), d = () => !!n.default, y = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await lt();
      const h = r.value.getBoundingClientRect(), g = s.target.getBoundingClientRect(), M = g.x + h.width;
      g.x < 0 ? (o.value = "0", i.value = "initial") : M >= window.innerWidth ? (o.value = "initial", i.value = "0") : g.x !== h.left ? o.value = `${g.x}px` : (o.value = "initial", i.value = "initial"), a.value = `${g.top + g.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value;
    }, p = () => {
      a.value = "", o.value = "", i.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = i.value);
    };
    return (s, h) => (v(), k("div", {
      class: fe(f(m))
    }, [
      Y("div", {
        onMouseenter: Ee(y, ["stop"]),
        onMouseleave: Ee(p, ["stop"])
      }, [
        j(s.$slots, "activator", {}, void 0, !0)
      ], 40, Fh),
      d() ? (v(), k("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        j(s.$slots, "default", {}, void 0, !0)
      ], 512)) : D("", !0)
    ], 2));
  }
});
const Gr = /* @__PURE__ */ we(Uh, [["__scopeId", "data-v-50fd21fc"]]), Wh = /* @__PURE__ */ ie({
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
      aa956d54: e.containerSize,
      b68d97ac: e.borderRadius,
      "079569fc": f(i)
    }));
    const r = mt(), a = Ge(), o = b(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), i = b(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = b(() => n.disabled ? "neutro-4" : n.color), m = () => !!r.default, d = (y) => {
      n.disabled || n.inactive || t("click", y);
    };
    return (y, p) => (v(), te(Gr, { disabled: e.disabled }, Le({
      activator: K(() => [
        Y("div", {
          class: fe(f(o)),
          onClick: d
        }, [
          e.icon.startsWith("fm") ? (v(), te(Fe, {
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
      m() && !e.disabled ? {
        name: "default",
        fn: K(() => [
          j(y.$slots, "default", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Qt = /* @__PURE__ */ we(Wh, [["__scopeId", "data-v-afde288b"]]), Lh = { class: "grid grid-flow-col items-center justify-center gap-x-1 select-none" }, Hh = { class: "pr-1" }, zh = ["data-active"], jh = {
  key: 1,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, qh = ["data-active", "onClick"], Gh = {
  key: 2,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, Qh = ["data-active"], Zh = { class: "pl-1" }, vu = /* @__PURE__ */ ie({
  __name: "TPagination",
  props: {
    modelValue: {
      default: 1,
      type: Number
    },
    pageCount: {
      default: 1,
      type: Number
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = b({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), a = b(() => Array.from({ length: n.pageCount - 2 }, (m, d) => d + 2).filter((m) => n.pageCount <= 7 ? !0 : r.value <= 4 ? m <= 5 : r.value > n.pageCount - 4 ? m > n.pageCount - 5 : m >= r.value - 1 && m <= r.value + 1));
    function o(m) {
      r.value = m;
    }
    function i() {
      r.value !== 1 && (r.value -= 1);
    }
    function u() {
      r.value !== n.pageCount && (r.value += 1);
    }
    return (m, d) => (v(), k("div", Lh, [
      e.pageCount > 1 ? (v(), k(me, { key: 0 }, [
        Y("div", Hh, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-left",
            color: "acento-principal",
            disabled: f(r) === 1,
            onClick: i
          }, null, 8, ["disabled"])
        ]),
        Y("button", {
          "data-active": f(r) === 1,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: d[0] || (d[0] = (y) => o(1))
        }, " 1 ", 8, zh)
      ], 64)) : D("", !0),
      f(r) > 4 && e.pageCount > 7 ? (v(), k("span", jh, " ... ")) : D("", !0),
      (v(!0), k(me, null, Te(f(a), (y) => (v(), k("button", {
        key: `page-${y}`,
        class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
        "data-active": f(r) === y,
        onClick: (p) => o(y)
      }, he(y), 9, qh))), 128)),
      f(r) < e.pageCount - 3 && e.pageCount > 7 ? (v(), k("span", Gh, " ... ")) : D("", !0),
      e.pageCount > 1 ? (v(), k(me, { key: 3 }, [
        Y("button", {
          "data-active": f(r) === e.pageCount,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: d[1] || (d[1] = (y) => o(e.pageCount))
        }, he(e.pageCount), 9, Qh),
        Y("div", Zh, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-right",
            color: "acento-principal",
            disabled: f(r) === e.pageCount,
            onClick: u
          }, null, 8, ["disabled"])
        ])
      ], 64)) : D("", !0)
    ]));
  }
}), Xh = { class: "data-table__container" }, Kh = ["onClick"], Jh = { class: "data-table__header-text" }, eg = {
  key: 0,
  class: "data-table__row--empty"
}, tg = ["onClick"], ng = /* @__PURE__ */ ie({
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
    xe((q) => ({
      "2635d436": e.height,
      87459388: e.maxHeight,
      "197896b4": e.backgroundColor,
      "020f2b2e": e.gridTemplateColumns
    }));
    const r = b(() => n.items), a = b(() => n.itemsPerPage), o = mt(), {
      pageCount: i,
      currentPage: u,
      getSortOrder: m,
      itemsCurrentPage: d,
      setSortBy: y,
      getRowKey: p,
      isSortedBy: s,
      getCellKey: h,
      getCellValue: g,
      calculatePagination: M,
      recalculatePagination: W
    } = Yh(r, a);
    qe(() => {
      !B.value || V.value || M(B.value);
    });
    const B = R(null), L = b(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), P = b(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    })), V = b(() => n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null);
    function Q(q) {
      return !!o[q];
    }
    function X(q) {
      return s(q) ? m.value === "asc" ? "fm-arrow-down" : "fm-arrow-up" : "fm-arrow-down";
    }
    function ee(q) {
      return {
        "data-table__sort-icon": !0,
        "data-table__sort-icon--active": s(q)
      };
    }
    function N(q) {
      return {
        "data-table__th": !0,
        "data-table__th--sortable": q.sortable !== !1
      };
    }
    function x(q) {
      return {
        "data-table__row": !0,
        "data-table__row--sticky-last": n.stickyLastColumn,
        "data-table__row--sticky-first": n.stickyFirstColumn,
        "data-table__row--selected": q[n.compareSelectedWith] === n.selected,
        "data-table__row--disabled": n.disabledKey && n.disabledValue && q[n.disabledKey] === n.disabledValue
      };
    }
    function A(q) {
      return s(q) ? "acento-secundario" : "neutro-3";
    }
    function I(q) {
      B.value && y(q, B.value);
    }
    function Z(q) {
      t("click:row", q);
    }
    return Ze(
      () => n.items,
      async () => {
        if (!B.value || V.value) {
          u.value > i.value && (u.value = Math.max(1, i.value));
          return;
        }
        await W(B.value);
      }
    ), (q, ne) => (v(), k("div", Xh, [
      Y("table", {
        class: fe(f(P)),
        "aria-describedby": "Reutility"
      }, [
        Y("thead", {
          class: fe(f(L))
        }, [
          Y("tr", null, [
            (v(!0), k(me, null, Te(e.headers, (C) => (v(), k("th", {
              key: C.value,
              class: fe(N(C)),
              onClick: ($) => I(C)
            }, [
              Y("div", Jh, [
                Q(`header.${C.value}`) ? j(q.$slots, `header.${C.value}`, {
                  key: 0,
                  headerText: C.text
                }, void 0, !0) : (v(), k(me, { key: 1 }, [
                  Ie(he(C.text), 1)
                ], 64))
              ]),
              C.sortable !== !1 ? (v(), k("div", {
                key: 0,
                class: fe(ee(C.value))
              }, [
                pe(Fe, {
                  name: X(C.value),
                  color: A(C.value)
                }, null, 8, ["name", "color"])
              ], 2)) : D("", !0)
            ], 10, Kh))), 128))
          ])
        ], 2),
        Y("tbody", {
          ref_key: "tableBodyRef",
          ref: B,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (v(), k("tr", eg, [
            Q("no-data") ? D("", !0) : (v(), k(me, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (v(), te(Fe, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? D("", !0) : (v(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ie(" " + he(e.noDataText), 1)
            ], 64)),
            j(q.$slots, "no-data", {}, void 0, !0)
          ])) : D("", !0),
          (v(!0), k(me, null, Te(f(d), (C) => (v(), k("tr", {
            key: f(p)(C),
            class: fe(x(C)),
            onClick: ($) => Z(C)
          }, [
            (v(!0), k(me, null, Te(e.headers, ($) => (v(), k("td", {
              key: f(h)(C, $)
            }, [
              Q($.value) ? j(q.$slots, $.value, {
                key: 0,
                item: C
              }, void 0, !0) : (v(), k(me, { key: 1 }, [
                Ie(he(f(g)(C, $.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, tg))), 128))
        ], 512)
      ], 2),
      pe(vu, {
        modelValue: f(u),
        "onUpdate:modelValue": ne[0] || (ne[0] = (C) => Ye(u) ? u.value = C : null),
        "page-count": f(i)
      }, null, 8, ["modelValue", "page-count"])
    ]));
  }
});
const rg = /* @__PURE__ */ we(ng, [["__scopeId", "data-v-f6176713"]]), ag = /* @__PURE__ */ ie({
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
    const t = e, n = b(() => t.disabled ? "neutro-4" : t.selected ? "acento-principal" : "secundario"), r = b(() => t.selected ? 700 : 400);
    return (a, o) => (v(), te(bt, {
      "font-size": "1rem",
      color: f(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": f(r),
      "text-transform": e.textTransform
    }, {
      default: K(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), og = { class: "filter-date-picker__container" }, ig = { class: "filter-date-picker__label" }, lg = /* @__PURE__ */ ie({
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
    const n = e, r = b({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), k("div", og, [
      Y("div", ig, he(e.label), 1),
      pe(Qo, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (i) => Ye(r) ? r.value = i : null),
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
const ug = /* @__PURE__ */ we(lg, [["__scopeId", "data-v-4d3bdb3f"]]), sg = { class: "filter-select__container" }, cg = { class: "filter-select__label" }, fg = /* @__PURE__ */ ie({
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
    },
    searchFunction: {
      default: null,
      type: Function
    },
    searchPlaceholder: {
      default: "",
      type: String
    },
    hideNoDataMessage: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = mt(), a = b({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, i) => (v(), k("div", sg, [
      Y("div", cg, he(e.label), 1),
      pe(Zo, {
        modelValue: f(a),
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ye(a) ? a.value = u : null),
        clearable: "",
        items: e.items,
        multiple: e.multiple,
        "item-title": e.itemTitle,
        "item-value": e.itemValue,
        searchable: e.searchable,
        placeholder: e.placeholder,
        "text-multiple": e.textMultiple,
        "return-object": e.returnObject,
        "text-transform": e.textTransform,
        "search-function": e.searchFunction,
        "search-placeholder": e.searchPlaceholder,
        "hide-no-data-message": e.hideNoDataMessage
      }, Le({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: m }) => [
            j(o.$slots, "append-item", {
              close: u,
              filteredItems: m
            }, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform", "search-function", "search-placeholder", "hide-no-data-message"])
    ]));
  }
});
const dg = /* @__PURE__ */ we(fg, [["__scopeId", "data-v-e005b2d4"]]), mg = { class: "flex__container" }, pg = /* @__PURE__ */ ie({
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
    })), (t, n) => (v(), k("div", mg, [
      j(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const hu = /* @__PURE__ */ we(pg, [["__scopeId", "data-v-4706ceca"]]), yg = { class: "grid gap-y-1 gap-x-3 items-center form-date-picker__container" }, vg = ["data-dark", "data-readonly", "data-disabled"], hg = /* @__PURE__ */ ie({
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
    xe((a) => ({
      "02d01a4e": e.gridTemplateColumns
    }));
    const r = b({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), k("div", yg, [
      Y("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, he(e.label), 9, vg),
      pe(Qo, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (i) => Ye(r) ? r.value = i : null),
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
const gg = /* @__PURE__ */ we(hg, [["__scopeId", "data-v-7f0d00f1"]]), bg = { class: "grid gap-y-1 gap-x-3 items-center form-select__container" }, _g = ["data-dark", "data-readonly", "data-disabled"], wg = /* @__PURE__ */ ie({
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
    },
    searchFunction: {
      default: null,
      type: Function
    },
    searchPlaceholder: {
      default: "",
      type: String
    },
    hideNoDataMessage: {
      type: Boolean
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((o) => ({
      "4c5465ce": e.gridTemplateColumns
    }));
    const r = mt(), a = b({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, i) => (v(), k("div", bg, [
      Y("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, he(e.label), 9, _g),
      pe(Zo, {
        modelValue: f(a),
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ye(a) ? a.value = u : null),
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
        "text-transform": e.textTransform,
        "search-function": e.searchFunction,
        "search-placeholder": e.searchPlaceholder,
        "hide-no-data-message": e.hideNoDataMessage
      }, Le({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: m }) => [
            j(o.$slots, "append-item", {
              close: u,
              filteredItems: m
            }, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform", "search-function", "search-placeholder", "hide-no-data-message"])
    ]));
  }
});
const kg = /* @__PURE__ */ we(wg, [["__scopeId", "data-v-83e0a6a4"]]), xg = { class: "grid gap-y-1 gap-x-3 items-center form-text-field__container" }, Sg = ["data-dark", "data-readonly", "data-disabled"], $g = /* @__PURE__ */ ie({
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
    xe((p) => ({
      "335f6d81": e.gridTemplateColumns
    }));
    const r = mt(), a = b({
      get() {
        return n.modelValue;
      },
      set(p) {
        t("update:model-value", p);
      }
    }), o = () => !!r.append, i = (p) => {
      t("focus", p);
    }, u = (p) => {
      t("blur", p);
    }, m = (p) => {
      t("input", p);
    }, d = (p) => {
      t("keyup", p);
    }, y = (p) => {
      t("keydown", p);
    };
    return (p, s) => (v(), k("div", xg, [
      Y("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, he(e.label), 9, Sg),
      pe(qr, {
        modelValue: f(a),
        "onUpdate:modelValue": s[0] || (s[0] = (h) => Ye(a) ? a.value = h : null),
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
        onBlur: u,
        onInput: m,
        onKeyup: d,
        onFocus: i,
        onKeydown: y
      }, Le({ _: 2 }, [
        o() ? {
          name: "append",
          fn: K(() => [
            j(p.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const Og = /* @__PURE__ */ we($g, [["__scopeId", "data-v-7c5824a6"]]), Tg = { class: "header-tabs__container" }, Pg = ["onClick"], Cg = /* @__PURE__ */ ie({
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
    const r = Ge(), a = b({
      get() {
        return n.modelValue;
      },
      set(d) {
        t("update:model-value", d);
      }
    }), o = b(() => r.getRealColor(n.color)), i = b(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (d) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === d
    }), m = (d) => {
      a.value = d;
    };
    return (d, y) => (v(), k("div", Tg, [
      (v(!0), k(me, null, Te(e.items, (p, s) => (v(), k("button", {
        key: `tab-${s}`,
        class: fe(u(s)),
        onClick: (h) => m(s)
      }, he(p), 11, Pg))), 128))
    ]));
  }
});
const Dg = /* @__PURE__ */ we(Cg, [["__scopeId", "data-v-bc4f98ee"]]), Rg = ["alt", "src"], Mg = /* @__PURE__ */ ie({
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
    const r = b(() => new URL(n.src, import.meta.url).href), a = b(() => ({
      image__container: !0,
      "image__container--clickable": n.clickable
    })), o = (i) => {
      t("click", i);
    };
    return (i, u) => (v(), k("img", {
      alt: e.alt,
      src: f(r),
      class: fe(f(a)),
      onClick: o
    }, null, 10, Rg));
  }
});
const Ig = /* @__PURE__ */ we(Mg, [["__scopeId", "data-v-2d0c5d22"]]), Ng = { class: "grid gap-x-3 items-center information-text__wrapper" }, Bg = { class: "text-base leading-4 information-text__text" }, Ag = { class: "text-base leading-4 pl-3 font-semibold information-text__text" }, Eg = /* @__PURE__ */ ie({
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
    },
    color: {
      default: "secundario",
      type: String
    }
  },
  setup(e) {
    const t = e;
    xe((a) => ({
      "3a0fb202": e.padding,
      "6871b3cb": e.gridTemplateColumns,
      "3a751fd3": f(r)
    }));
    const { getRealColor: n } = Ge(), r = b(() => n(t.color));
    return (a, o) => (v(), k("div", Ng, [
      Y("div", Bg, he(e.label), 1),
      Y("div", Ag, [
        j(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const Vg = /* @__PURE__ */ we(Eg, [["__scopeId", "data-v-e9d4a515"]]), Yg = {
  key: 0,
  class: "page-switch__label"
}, Fg = { class: "page-switch__switch" }, Ug = /* @__PURE__ */ ie({
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
    xe((s) => ({
      "759e40da": e.justifyContent,
      "7ae6ed99": f(y),
      "03894b02": e.labelWeight,
      "3bf1e2bc": e.width,
      "2380825b": f(u)
    }));
    const r = Ge(), a = b({
      get() {
        return n.modelValue;
      },
      set(s) {
        n.readonly || t("update:model-value", s);
      }
    }), o = b(() => r.getRealColor(n.activeColor)), i = b(() => r.getRealColor(n.color)), u = b(() => n.disabled ? "rgb(var(--neutro-4))" : n.activeColor && a.value ? o.value : i.value), m = b(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": a.value
    })), d = b(() => ({
      "page-switch__container": !0,
      "page-switch__container--disabled": n.disabled
    })), y = b(() => n.disabled ? "rgb(var(--neutro-4))" : "rgb(var(--secundario))"), p = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (s, h) => (v(), te(Gr, { disabled: e.disabled }, Le({
      activator: K(() => [
        Y("div", {
          class: fe(f(d)),
          onClick: p
        }, [
          e.label ? (v(), k("div", Yg, he(e.label), 1)) : D("", !0),
          Y("div", Fg, [
            Ct(Y("input", {
              "onUpdate:modelValue": h[0] || (h[0] = (g) => Ye(a) ? a.value = g : null),
              type: "checkbox",
              class: "page-switch__checkbox"
            }, null, 512), [
              [Pu, f(a)]
            ]),
            Y("div", {
              class: fe(f(m))
            }, null, 2)
          ])
        ], 2)
      ]),
      _: 2
    }, [
      e.tooltip && !e.disabled ? {
        name: "default",
        fn: K(() => [
          Ie(he(e.tooltip), 1)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Wg = /* @__PURE__ */ we(Ug, [["__scopeId", "data-v-6a99dbf1"]]), Lg = /* @__PURE__ */ ie({
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
    const r = Ge(), a = b(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = b(() => r.getRealColor(n.backgroundColor)), i = () => {
      t("click:close");
    };
    return (u, m) => (v(), k("div", {
      class: fe(f(a))
    }, [
      pe(bt, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: K(() => [
          j(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color", "predefined-style"]),
      e.closable ? (v(), k("div", {
        key: 0,
        class: "panel-title__close",
        onClick: i
      }, [
        pe(Fe, {
          color: "error",
          size: e.iconSize,
          name: "fm-circle-close"
        }, null, 8, ["size"])
      ])) : D("", !0)
    ], 2));
  }
});
const Hg = /* @__PURE__ */ we(Lg, [["__scopeId", "data-v-e0769a10"]]), zg = /* @__PURE__ */ ie({
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
    const n = e, r = b({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), te(qr, {
      modelValue: f(r),
      "onUpdate:modelValue": o[0] || (o[0] = (i) => Ye(r) ? r.value = i : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: K(() => [
        pe(Fe, {
          size: "1rem",
          name: "fm-magnify-glass",
          color: "acento-principal"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder"]));
  }
}), jg = /* @__PURE__ */ ie({
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
      b64fba12: e.width
    }));
    const r = b({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return Ze(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), Ze(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (v(), te(No, {
      persistent: "",
      "model-value": f(r)
    }, {
      default: K(() => [
        pe(Hr, {
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: K(() => [
            pe(hu, { "justify-content": "center" }, {
              default: K(() => [
                e.icon.startsWith("fm") ? (v(), te(Fe, {
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
            pe(bt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: K(() => [
                Ie(he(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(bt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: K(() => [
                Ie(he(e.subtitle), 1)
              ]),
              _: 1
            })) : D("", !0)
          ]),
          _: 1
        }, 8, ["width"])
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const qg = /* @__PURE__ */ we(jg, [["__scopeId", "data-v-5bd362ef"]]);
class xt {
  // 0-1
  constructor(t, n, r) {
    // HSV
    fn(this, "hue");
    // 0-360
    fn(this, "saturation");
    // 0-1
    fn(this, "value");
    this.hue = t, this.value = r, this.saturation = n;
  }
  get rgb() {
    return xt.hsvToRgb(this.hue, this.saturation, this.value);
  }
  get hex() {
    return `#${this.rgb.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
  }
  setFromRgb(t, n, r) {
    const [a, o, i] = xt.rgbToHsv(t, n, r);
    this.hue = a, this.value = i, this.saturation = o;
  }
  setFromHex(t) {
    const [n, r, a] = xt.hexToRgb(t);
    this.setFromRgb(n, r, a);
  }
  static rgbToHsv(t, n, r) {
    const a = t / 255, o = n / 255, i = r / 255, u = Math.max(a, o, i), m = Math.min(a, o, i);
    let d = 0, y = 0;
    const p = u, s = u - m;
    return u === m ? d = 0 : u === a && o >= i ? d = 60 * ((o - i) / s) : u === a && o < i ? d = 60 * ((o - i) / s) + 360 : u === o ? d = 60 * ((i - a) / s) + 120 : u === i && (d = 60 * ((a - o) / s) + 240), u > 0 && (y = 1 - m / u), [Math.round(d), Math.round(y * 100) / 100, Math.round(p * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, i = r * (1 - n), u = r * (1 - o * n), m = r * (1 - (1 - o) * n);
    let d = 0, y = 0, p = 0;
    switch (a) {
      case 0:
        d = r, y = m, p = i;
        break;
      case 1:
        d = u, y = r, p = i;
        break;
      case 2:
        d = i, y = r, p = m;
        break;
      case 3:
        d = i, y = u, p = r;
        break;
      case 4:
        d = m, y = i, p = r;
        break;
      case 5:
        d = r, y = i, p = u;
        break;
    }
    return [Math.round(d * 255), Math.round(y * 255), Math.round(p * 255)];
  }
  static hexToRgb(t) {
    if (!/^#([\da-fA-F]{3}|[\da-fA-F]{6})$/g.test(t))
      return [0, 0, 0];
    t = t.slice(1);
    let r, a, o;
    if (t.length === 3) {
      const [i, u, m] = t.split("");
      r = parseInt(i.repeat(2), 16), a = parseInt(u.repeat(2), 16), o = parseInt(m.repeat(2), 16);
    } else {
      const [i, u, m] = t.match(/.{2}/g) ?? ["0", "0", "0"];
      r = parseInt(i, 16), a = parseInt(u, 16), o = parseInt(m, 16);
    }
    return [r, a, o];
  }
  static fromRgb(t, n, r) {
    const [a, o, i] = xt.rgbToHsv(t, n, r);
    return new xt(a, o, i);
  }
  static fromHex(t) {
    const [n, r, a] = xt.hexToRgb(t);
    return xt.fromRgb(n, r, a);
  }
}
const Xo = (e) => (Mo("data-v-851bc20e"), e = e(), Io(), e), Gg = ["onMousedown"], Qg = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Y("div", { class: "color-picker__canvas-thumb" }, null, -1)), Zg = [
  Qg
], Xg = ["onMousedown"], Kg = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Y("div", { class: "color-picker__hue-thumb" }, null, -1)), Jg = [
  Kg
], e0 = { class: "color-picker__hex-input-container" }, t0 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Y("span", { class: "color-picker__hex-hash" }, " # ", -1)), n0 = { class: "color-picker__colors" }, r0 = ["onClick"], a0 = /* @__PURE__ */ ie({
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
    xe((C) => ({
      "44519b14": f(M),
      "21503e0b": f(B),
      d11f3254: f(W),
      "40a1b156": m.value,
      "67f5cab4": i.value
    }));
    const { getRealColor: r } = Ge(), a = R(!1), o = R(!1), i = R("translateX(0)"), u = R(null), m = R("translate(0, 0"), d = R(null), y = Pt(xt.fromHex(n.modelValue)), p = Pt({
      left: 0,
      width: 0
    }), s = Pt({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    qe(() => {
      P();
    });
    const h = b({
      get() {
        return n.modelValue;
      },
      set(C) {
        t("update:model-value", C);
      }
    }), g = b(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), M = b(() => r(n.background)), W = b(() => `rgb(${y.rgb.join(",")})`), B = b(() => `hsl(${y.hue}, 100%, 50%)`), L = b({
      get() {
        return y.hex.slice(1);
      },
      set(C) {
        y.setFromHex(C), P();
      }
    });
    function P() {
      if (!d.value || !u.value)
        return;
      const C = u.value.getBoundingClientRect(), $ = y.hue / 360 * C.width;
      i.value = `translateX(${$}px)`;
      const l = d.value.getBoundingClientRect(), c = y.saturation * l.width, O = (1 - y.value) * l.height;
      m.value = `translate(${c}px, ${O}px)`, h.value = y.hex;
    }
    function V(C) {
      const $ = Math.min(p.width, Math.max(0, C.clientX - p.left));
      y.hue = $ / p.width * 360, i.value = `translateX(${$}px)`, h.value = y.hex;
    }
    function Q(C) {
      if (!d.value)
        return;
      const $ = d.value.getBoundingClientRect(), l = Math.min($.width, Math.max(0, C.clientX - $.left)), c = Math.min($.height, Math.max(0, C.clientY - $.top));
      y.saturation = l / $.width, y.value = 1 - c / $.height, m.value = `translate(${l}px, ${c}px)`, h.value = y.hex;
    }
    function X(C) {
      if (!d.value)
        return;
      const $ = d.value.getBoundingClientRect();
      s.top = $.top, s.left = $.left, s.width = $.width, s.height = $.height, o.value = !0, Q(C), A();
    }
    function ee(C) {
      if (!u.value)
        return;
      const $ = u.value.getBoundingClientRect();
      p.left = $.left, p.width = $.width, a.value = !0, V(C), A();
    }
    function N(C) {
      a.value ? V(C) : o.value && Q(C);
    }
    function x() {
      a.value = !1, I();
    }
    function A() {
      document.addEventListener("mouseup", x), document.addEventListener("mousemove", N);
    }
    function I() {
      document.removeEventListener("mouseup", x), document.removeEventListener("mousemove", N);
    }
    function Z(C) {
      const $ = ["v", "c"];
      C.ctrlKey && $.includes(C.key) || C.preventDefault();
    }
    function q(C) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": h.value === C
      };
    }
    function ne(C) {
      L.value = C, h.value = C;
    }
    return (C, $) => (v(), k("div", {
      class: fe(f(g))
    }, [
      Y("div", {
        ref_key: "canvasRef",
        ref: d,
        class: "color-picker__canvas",
        onMousedown: Ee(X, ["stop", "prevent"])
      }, Zg, 40, Gg),
      Y("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: Ee(ee, ["stop", "prevent"])
      }, Jg, 40, Xg),
      Y("div", e0, [
        t0,
        Ct(Y("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (l) => Ye(L) ? L.value = l : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Cu, f(L)]
        ])
      ]),
      Y("div", n0, [
        (v(!0), k(me, null, Te(e.pickableColors, (l, c) => (v(), k("div", {
          key: `pickable-color-${c}`,
          style: St(`--color: ${l}`),
          class: fe(q(l)),
          onClick: (O) => ne(l)
        }, null, 14, r0))), 128))
      ])
    ], 2));
  }
});
const gu = /* @__PURE__ */ we(a0, [["__scopeId", "data-v-851bc20e"]]), o0 = { class: "form-color-picker__label" }, i0 = /* @__PURE__ */ ie({
  __name: "FormColorPicker",
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    large: {
      type: Boolean
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
    xe((B) => ({
      "7f6d82c2": e.gridTemplateColumns,
      "92f99466": f(p),
      "66ca7121": f(s),
      "1a24176b": f(y),
      "131ff3d2": r.value,
      "50e618f6": a.value
    }));
    const r = R(""), a = R(""), o = R(""), i = R(!1), u = R(!1), m = R(null), d = R(null), y = b({
      get() {
        return n.modelValue;
      },
      set(B) {
        t("update:model-value", B);
      }
    }), p = b(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), s = b(() => n.large ? "100%" : "2.75rem");
    async function h() {
      await lt();
      const B = m.value, L = d.value;
      if (!B || !L)
        return;
      const P = B.getBoundingClientRect(), V = L.getBoundingClientRect();
      a.value = `${P.left}px`, o.value = `${P.width}px`;
      const Q = P.top + P.height + V.height, X = window.innerHeight, ee = P.top + P.height;
      if (Q > X) {
        const N = Q - X;
        r.value = `${ee - N - 16}px`;
      } else
        r.value = `${ee}px`;
    }
    function g() {
      n.disabled || n.readonly || i.value || (i.value = !0, h(), u.value = !0, document.addEventListener("click", M));
    }
    function M(B) {
      !m.value || !B.target || m.value.contains(B.target) || W();
    }
    function W() {
      i.value = !1, u.value = !1, document.removeEventListener("click", M);
    }
    return (B, L) => (v(), k("div", {
      ref_key: "container",
      ref: m,
      class: "form-color-picker__container"
    }, [
      Y("div", o0, he(e.label), 1),
      Y("div", {
        class: "form-color-picker__input",
        onClick: g
      }),
      pe(yt, null, {
        default: K(() => [
          i.value ? (v(), k("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "form-color-picker__menu"
          }, [
            pe(gu, {
              modelValue: f(y),
              "onUpdate:modelValue": L[0] || (L[0] = (P) => Ye(y) ? y.value = P : null),
              dark: e.dark,
              background: e.background,
              "pickable-colors": e.pickableColors
            }, null, 8, ["modelValue", "dark", "background", "pickable-colors"])
          ], 512)) : D("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
const l0 = /* @__PURE__ */ we(i0, [["__scopeId", "data-v-2d3b2229"]]), u0 = ["onMousedown"], s0 = /* @__PURE__ */ ie({
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
    xe((g) => ({
      "26fcb3e4": n.value,
      b8a15b24: r.value
    })), qe(() => {
      t.default === !0 && y();
    });
    const n = R(""), r = R(""), a = R(""), o = R(!1), i = R(!1), u = R(null), m = R(null), d = async () => {
      n.value = "", r.value = "", await lt();
      const g = u.value, M = m.value;
      if (!g || !M)
        return;
      const W = g.getBoundingClientRect(), B = M.getBoundingClientRect(), L = t.nudgeLeft - t.nudgeRight, P = t.nudgeTop - t.nudgeBottom, V = W.left + L;
      r.value = `${V}px`, a.value = `${W.width}px`;
      const Q = W.top + W.height + B.height, X = window.innerHeight, ee = W.top + W.height + P;
      if (Q > X) {
        const A = Q - X;
        n.value = `${ee - A - 16}px`;
      } else
        n.value = `${ee}px`;
      const N = B.right, x = window.innerWidth;
      if (N > x) {
        const A = N - x;
        r.value = `${V - A}px`;
      }
    }, y = () => {
      t.disabled && !t.default || (o.value = !0, d(), !t.disabled && (i.value = !0, document.addEventListener("click", s)));
    }, p = () => {
      t.disabled || (o.value = !1, i.value = !1, document.removeEventListener("click", s));
    }, s = (g) => {
      !u.value || !g.target || u.value.contains(g.target) || p();
    }, h = () => {
      t.disabled || (o.value ? p() : y());
    };
    return (g, M) => (v(), k("div", {
      ref_key: "container",
      ref: u,
      class: "custom-menu__container"
    }, [
      Y("div", {
        onMousedown: Ee(h, ["stop"])
      }, [
        j(g.$slots, "activator", {}, void 0, !0)
      ], 40, u0),
      pe(yt, null, {
        default: K(() => [
          o.value ? (v(), k("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: m,
            class: "custom-menu__menu"
          }, [
            j(g.$slots, "default", { close: p }, void 0, !0)
          ], 512)) : D("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const c0 = /* @__PURE__ */ we(s0, [["__scopeId", "data-v-de3c3a3e"]]), f0 = {
  key: 0,
  class: "expansion-panel__content"
}, d0 = /* @__PURE__ */ ie({
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
    xe((p) => ({
      "2e51e708": e.boxShadow,
      cfec22fe: e.borderRadius,
      "27a20424": f(d),
      "050f266c": e.transitionDuration,
      "5a79b51a": e.transitionTimingFunction
    }));
    const r = Ge(), a = R(!1), o = b(() => {
      const p = parseInt(n.transitionDuration);
      return isNaN(p) ? 0 : p;
    }), i = b({
      get() {
        return n.modelValue === void 0 ? a.value : n.modelValue;
      },
      set(p) {
        a.value = p, t("update:model-value", p);
      }
    }), u = b(() => ({
      "expansion-panel__container": !0,
      "expansion-panel__container--outlined": n.outlined
    })), m = b(() => ({
      "expansion-panel__wrapper": !0,
      "expansion-panel__wrapper--opened": i.value
    })), d = b(() => r.getRealColor(n.backgroundColor));
    function y() {
      i.value = !i.value;
    }
    return (p, s) => (v(), k("div", {
      class: fe(f(u))
    }, [
      Y("div", {
        class: "expansion-panel__activator",
        onClick: y
      }, [
        j(p.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      Y("div", {
        class: fe(f(m))
      }, [
        pe(yt, { duration: f(o) }, {
          default: K(() => [
            a.value || f(i) ? (v(), k("div", f0, [
              j(p.$slots, "default", {}, void 0, !0)
            ])) : D("", !0)
          ]),
          _: 3
        }, 8, ["duration"])
      ], 2)
    ], 2));
  }
});
const m0 = /* @__PURE__ */ we(d0, [["__scopeId", "data-v-25b57f9a"]]), p0 = { class: "grid__container" }, y0 = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), k("div", p0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const v0 = /* @__PURE__ */ we(y0, [["__scopeId", "data-v-546aaa6e"]]), h0 = { class: "absolute__container" }, g0 = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), k("div", h0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const b0 = /* @__PURE__ */ we(g0, [["__scopeId", "data-v-b5f56ae6"]]), _0 = { class: "relative__container" }, w0 = /* @__PURE__ */ ie({
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
    const n = Ge(), r = b(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), k("div", _0, [
      j(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const k0 = /* @__PURE__ */ we(w0, [["__scopeId", "data-v-c8285f36"]]), x0 = /* @__PURE__ */ ie({
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
    const t = mt();
    function n(r = "default") {
      return !!t[r];
    }
    return (r, a) => (v(), te(Hr, null, {
      default: K(() => [
        pe(Gr, null, Le({
          activator: K(() => [
            pe(bt, {
              padding: "0.125rem 0",
              "text-transform": e.textTransform,
              "predefined-style": e.opened && e.showActiveStyle ? "body-2" : "body-1",
              color: e.opened && e.showActiveStyle ? "acento-principal" : "secundario"
            }, {
              default: K(() => [
                Ie(he(e.title), 1)
              ]),
              _: 1
            }, 8, ["text-transform", "predefined-style", "color"])
          ]),
          _: 2
        }, [
          n() ? {
            name: "default",
            fn: K(() => [
              j(r.$slots, "default")
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.opened ? (v(!0), k(me, { key: 0 }, Te(e.items, (o, i) => (v(), k(me, {
          key: `item-${i.toString()}`
        }, [
          n("value") ? j(r.$slots, "value", {
            key: 0,
            value: o
          }) : (v(), te(bt, {
            key: 1,
            color: e.itemColor,
            padding: "0.125rem 0",
            "predefined-style": "caption"
          }, {
            default: K(() => [
              Ie(he(o), 1)
            ]),
            _: 2
          }, 1032, ["color"]))
        ], 64))), 128)) : D("", !0)
      ]),
      _: 3
    }));
  }
}), S0 = /* @__PURE__ */ ie({
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
  emits: ["error:extension", "update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((y) => ({
      "05540b63": e.width,
      e94331ac: e.height,
      "7a873368": f(i),
      f38c0922: e.objectFit,
      "6de9f8be": e.borderRadius,
      "58a1d6ea": e.objectPosition
    }));
    const r = R(null), a = ["jpg", "png", "webp", "svg", "gif", "jpeg"], o = b({
      get() {
        return n.modelValue;
      },
      set(y) {
        t("update:model-value", y);
      }
    }), i = b(() => o.value ? `url("${URL.createObjectURL(o.value)}")` : n.src ? `url("${n.src}")` : ""), u = b(() => ({
      "input-image__wrapper": !0,
      "input-image__wrapper--hidden": !!(o.value || n.src)
    }));
    function m() {
      r.value && r.value.click();
    }
    function d() {
      var s;
      if (!r.value)
        return;
      const y = (s = r.value.files) == null ? void 0 : s[0];
      if (!y)
        return;
      const p = y.name.split(".").pop();
      !p || !a.includes(p) ? t("error:extension") : o.value = y, r.value.value = "";
    }
    return (y, p) => (v(), k("div", {
      class: fe(f(u))
    }, [
      Y("input", {
        ref_key: "inputRef",
        ref: r,
        hidden: "",
        type: "file",
        accept: ".jpg,.png,.webp,.svg,.gif,.jpeg",
        onChange: d
      }, null, 544),
      Y("div", {
        class: "input-image__icon",
        onClick: m
      }, [
        pe(Fe, {
          name: "fm-image",
          size: e.iconSize,
          color: "neutro-4"
        }, null, 8, ["size"])
      ])
    ], 2));
  }
});
const $0 = /* @__PURE__ */ we(S0, [["__scopeId", "data-v-d0c430c6"]]), O0 = /* @__PURE__ */ ie({
  __name: "CustomChip",
  props: {
    modelValue: {
      default: null,
      type: [String, Number, Array]
    },
    text: {
      type: String,
      required: !0
    },
    value: {
      required: !0,
      type: [String, Number]
    },
    maxWidth: {
      default: "initial",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((d) => ({
      "0cf12c20": e.maxWidth,
      "594394ee": f(i)
    }));
    const r = b(() => Array.isArray(n.modelValue) ? n.modelValue.includes(n.value) : n.modelValue === n.value), a = b(() => ({
      "custom-chip__wrapper": !0,
      "custom-chip__wrapper--selected": r.value
    })), o = b(() => r.value ? "acento-secundario-pressed" : "acento-secundario"), i = b(() => `rgb(var(--${o.value}))`);
    function u() {
      if (!r.value)
        if (Array.isArray(n.modelValue)) {
          const d = [...n.modelValue];
          d.push(n.value), t("update:model-value", d);
        } else
          t("update:model-value", n.value);
    }
    function m() {
      if (r.value)
        if (Array.isArray(n.modelValue)) {
          const d = [...n.modelValue], y = d.indexOf(n.value);
          d.splice(y, 1), t("update:model-value", d);
        } else
          t("update:model-value", null);
    }
    return (d, y) => (v(), k("div", {
      class: fe(f(a)),
      onClick: u
    }, [
      pe(bt, {
        color: f(o),
        "predefined-style": "caption"
      }, {
        default: K(() => [
          Ie(he(e.text), 1)
        ]),
        _: 1
      }, 8, ["color"]),
      f(r) ? (v(), te(Qt, {
        key: 0,
        size: "1rem",
        color: "neutro-4",
        icon: "fm-circle-close",
        onClick: Ee(m, ["stop"])
      }, null, 8, ["onClick"])) : D("", !0)
    ], 2));
  }
});
const T0 = /* @__PURE__ */ we(O0, [["__scopeId", "data-v-81015ccc"]]), bu = (e) => (Mo("data-v-f500483c"), e = e(), Io(), e), P0 = /* @__PURE__ */ bu(() => /* @__PURE__ */ Y("div", {
  role: "progressbar",
  class: "absolute h-2 w-2 rounded input-range__progress"
}, null, -1)), C0 = /* @__PURE__ */ bu(() => /* @__PURE__ */ Y("div", {
  role: "button",
  class: "h-5 w-5 rounded-full absolute pointer-events-none -top-1.5 -left-2.5 input-range__thump"
}, null, -1)), D0 = [
  P0,
  C0
], R0 = /* @__PURE__ */ ie({
  __name: "InputRange",
  props: {
    modelValue: {
      type: Number,
      required: !0
    },
    thumbColor: {
      default: "neutro-1",
      type: String
    },
    trackColor: {
      default: "neutro-1",
      type: String
    },
    progressColor: {
      default: "acento-principal",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((g) => ({
      a2c08aa2: f(u),
      "032d9904": f(i),
      "11dba316": a.value,
      "205f17ff": f(m)
    }));
    const { getRealColor: r } = Ge(), a = R(""), o = R(null);
    qe(s);
    const i = b(() => r(n.thumbColor)), u = b(() => r(n.trackColor)), m = b(() => r(n.progressColor)), d = b({
      get() {
        return n.modelValue;
      },
      set(g) {
        t("update:model-value", g);
      }
    });
    function y(g) {
      p(g), document.body.style.userSelect = "none", document.addEventListener("mouseup", h), document.addEventListener("mousemove", p);
    }
    function p({ clientX: g }) {
      if (!o.value)
        return;
      const { left: M, width: W } = o.value.getBoundingClientRect(), B = Math.min(W, Math.max(0, g - M));
      d.value = B * 100 / W, s();
    }
    function s() {
      if (!o.value)
        return;
      const { width: g } = o.value.getBoundingClientRect();
      a.value = `${d.value / 100 * g}px`;
    }
    function h() {
      document.body.style.userSelect = "inital", document.removeEventListener("mouseup", h), document.removeEventListener("mousemove", p);
    }
    return Ze(d, s), (g, M) => (v(), k("div", {
      ref_key: "barRef",
      ref: o,
      role: "slider",
      class: "h-2 w-full bg-amber-950 rounded relative input-range__track",
      onMousedown: y
    }, D0, 544));
  }
});
const _u = /* @__PURE__ */ we(R0, [["__scopeId", "data-v-f500483c"]]), M0 = (e) => (Mo("data-v-ec8ab006"), e = e(), Io(), e), I0 = { class: "image-editor__wrapper grid gap-y-8" }, N0 = ["width", "height"], B0 = /* @__PURE__ */ M0(() => /* @__PURE__ */ Y("div", { class: "absolute w-full top-0 left-0 h-full image-editor__area" }, null, -1)), A0 = {
  key: 0,
  class: "absolute grid grid-cols-[auto_1fr] gap-x-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] image-cropper__tooltip rounded-2xl p-2"
}, E0 = { class: "text-white text-base leading-5" }, V0 = { class: "grid grid-cols-[auto_50%_auto] justify-center gap-x-3 items-center" }, Y0 = /* @__PURE__ */ ie({
  __name: "ImageCropper",
  props: {
    file: {
      required: !0,
      type: Object
    },
    width: {
      type: Number,
      required: !0
    },
    height: {
      type: Number,
      required: !0
    },
    buttonColor: {
      default: "neutro-1",
      type: String
    },
    thumbColor: {
      default: "neutro-1",
      type: String
    },
    trackColor: {
      default: "neutro-1",
      type: String
    },
    progressColor: {
      default: "acento-principal",
      type: String
    },
    tooltip: {
      type: String,
      default: "Arrastre para recortar"
    }
  },
  setup(e, { expose: t }) {
    const n = e;
    xe((C) => ({
      "701c0bdd": f(h),
      "0b28d123": f(W)
    }));
    const r = R(1), a = R(0), o = R(0), i = R(0), u = R(0), m = R(0), d = R(!0), y = R(null), p = R(null), s = R(null);
    qe(async () => {
      p.value && (s.value = p.value.getContext("2d"), y.value = await X(), Q());
    });
    const h = b(() => `${n.width}px`), g = b(() => n.width / 2), M = b(() => n.height / 2), W = b(() => `${M.value}px`), B = b(() => {
      var C;
      return (((C = y.value) == null ? void 0 : C.width) ?? 0) * r.value;
    }), L = b(() => {
      var C;
      return (((C = y.value) == null ? void 0 : C.height) ?? 0) * r.value;
    }), P = b(() => B.value / 2 - M.value), V = b(() => L.value / 2 - M.value);
    function Q() {
      if (!s.value || !y.value)
        return;
      s.value.clearRect(0, 0, n.width, n.height), s.value.save(), s.value.translate(g.value + u.value, M.value + m.value), s.value.scale(r.value, r.value);
      const C = y.value.width / 2, $ = y.value.height / 2;
      s.value.drawImage(
        y.value,
        -C,
        -$,
        y.value.width,
        y.value.height
      ), s.value.restore();
    }
    function X() {
      return new Promise((C) => {
        const $ = new Image();
        $.onload = () => {
          const l = $.width / $.height;
          $.width = Math.max(n.height, n.height * l), $.height = Math.max(n.height, n.height / l), C($);
        }, $.src = URL.createObjectURL(n.file);
      });
    }
    async function ee() {
      await lt(), m.value = Math.max(-V.value, Math.min(V.value, m.value)), u.value = Math.max(-P.value, Math.min(P.value, u.value));
    }
    async function N() {
      r.value = 1 + i.value / 100 * 2, await ee(), Q();
    }
    function x({ clientX: C, clientY: $ }) {
      d.value && (d.value = !1), a.value = C, o.value = $, document.body.style.userSelect = "none", document.addEventListener("mouseup", I), document.addEventListener("mousemove", A);
    }
    function A({ clientX: C, clientY: $ }) {
      const l = m.value + $ - o.value, c = u.value + C - a.value;
      m.value = Math.max(-V.value, Math.min(V.value, l)), u.value = Math.max(-P.value, Math.min(P.value, c)), Q(), a.value = C, o.value = $;
    }
    function I() {
      document.body.style.userSelect = "initial", document.removeEventListener("mouseup", I), document.removeEventListener("mousemove", A);
    }
    async function Z(C) {
      return new Promise(($) => {
        C.toBlob((l) => $(l));
      });
    }
    async function q() {
      if (!p.value)
        return;
      const C = document.createElement("canvas"), $ = C.getContext("2d");
      if (!$)
        return;
      const l = n.height;
      C.width = l, C.height = l;
      const c = n.width / 2 - M.value, O = n.height / 2 - M.value;
      return $.drawImage(p.value, c, O, l, l, 0, 0, l, l), await Z(C);
    }
    async function ne(C) {
      i.value = Math.max(0, Math.min(100, C * 10 + i.value)), await N();
    }
    return t({ crop: q }), Ze(
      () => n.file,
      async () => {
        y.value = await X(), await ee(), Q();
      }
    ), (C, $) => (v(), k("div", I0, [
      Y("div", {
        class: "relative cursor-move image-editor__canvas",
        onMousedown: x
      }, [
        Y("canvas", {
          ref_key: "canvas",
          ref: p,
          width: e.width,
          height: e.height
        }, null, 8, N0),
        B0,
        d.value ? (v(), k("div", A0, [
          pe(Fe, {
            size: "1.25rem",
            name: "fm-move",
            color: "neutro-1"
          }),
          Y("p", E0, he(e.tooltip), 1)
        ])) : D("", !0)
      ], 32),
      Y("div", V0, [
        pe(Qt, {
          size: "1.5rem",
          color: e.buttonColor,
          icon: "fm-minus-circle",
          disabled: i.value === 0,
          onClick: $[0] || ($[0] = (l) => ne(-1))
        }, null, 8, ["color", "disabled"]),
        pe(_u, {
          modelValue: i.value,
          "onUpdate:modelValue": [
            $[1] || ($[1] = (l) => i.value = l),
            N
          ],
          "thumb-color": e.thumbColor,
          "track-color": e.trackColor,
          "progress-color": e.progressColor
        }, null, 8, ["modelValue", "thumb-color", "track-color", "progress-color"]),
        pe(Qt, {
          size: "1.5rem",
          color: e.buttonColor,
          icon: "fm-plus-circle",
          disabled: i.value === 100,
          onClick: $[2] || ($[2] = (l) => ne(1))
        }, null, 8, ["color", "disabled"])
      ])
    ]));
  }
});
const F0 = /* @__PURE__ */ we(Y0, [["__scopeId", "data-v-ec8ab006"]]), L0 = (e) => {
  Bl().generateOverlayContainer(), e.component("AbsoluteContainer", b0), e.component("RelativeContainer", k0), e.component("CheckBox", Al), e.component("ConfirmationDialog", ts), e.component("CustomButton", ya), e.component("CustomDatePicker", Qo), e.component("CustomDialog", No), e.component("CustomSelect", Zo), e.component("CustomTextField", qr), e.component("DataTable", rg), e.component("DataTableItem", ag), e.component("FilterDatePicker", ug), e.component("FilterSelect", dg), e.component("FlexContainer", hu), e.component("FormDatePicker", gg), e.component("FormSelect", kg), e.component("FormTextField", Og), e.component("GridColumn", Hr), e.component("GridRow", El), e.component("HeaderTabs", Dg), e.component("IconButton", Qt), e.component("ImageContainer", Ig), e.component("InformationText", Vg), e.component("PageSwitch", Wg), e.component("PanelTitle", Hg), e.component("SearchTextField", zg), e.component("SuccessDialog", qg), e.component("SvgIcon", Rt), e.component("TextContainer", bt), e.component("FormColorPicker", l0), e.component("ColorPicker", gu), e.component("CustomMenu", c0), e.component("FigmaIcon", Fe), e.component("ExpansionPanel", m0), e.component("GridContainer", v0), e.component("CustomTooltip", Gr), e.component("ExpandableDataTableItem", x0), e.component("ImageInput", $0), e.component("CustomChip", T0), e.component("InputRange", _u), e.component("ImageCropper", F0), e.component("TPagination", vu);
};
export {
  L0 as componentesReutility
};
