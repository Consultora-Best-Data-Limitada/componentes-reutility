var Su = Object.defineProperty;
var $u = (e, t, n) => t in e ? Su(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fn = (e, t, n) => ($u(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as R, defineComponent as re, useCssVars as xe, unref as f, onMounted as ze, computed as g, watch as Qe, openBlock as v, createElementBlock as _, createElementVNode as U, normalizeClass as de, createVNode as pe, Transition as yt, withCtx as K, createBlock as te, createCommentVNode as M, renderSlot as H, Fragment as fe, nextTick as it, useSlots as mt, isRef as Ee, createTextVNode as Ce, toDisplayString as ye, reactive as Ct, toRef as nr, onUnmounted as Ro, mergeProps as Ge, createSlots as We, renderList as Te, normalizeProps as Ke, guardReactiveProps as pt, resolveDynamicComponent as Ii, Teleport as Ou, withKeys as _e, withModifiers as De, normalizeStyle as St, withDirectives as Tt, vShow as pn, onBeforeUpdate as Tu, getCurrentScope as Pu, onScopeDispose as Cu, vModelDynamic as Ko, vModelCheckbox as Du, vModelText as Ni, pushScopeId as Mo, popScopeId as Io } from "vue";
const Bi = R(null);
function Ru() {
  const e = document.createElement("div");
  e.classList.add("custom-tooltip--overlay"), document.body.appendChild(e), Bi.value = e;
}
function Ai() {
  return {
    overlayContainer: Bi,
    generateOverlayContainer: Ru
  };
}
const je = () => {
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
}, Mu = /* @__PURE__ */ re({
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
    xe((l) => ({
      "5f21c29a": e.size,
      "6c3a208c": f(a)
    }));
    const n = je();
    ze(() => {
      o();
    });
    const r = R(null), a = g(() => n.getRealColor(t.color)), o = async () => {
      if (r.value)
        try {
          const l = await fetch(t.src);
          r.value.innerHTML = await l.text();
          const u = r.value.querySelector("svg");
          if (!u)
            return;
          u.setAttribute("width", t.size.toString()), u.setAttribute("height", t.size.toString());
        } catch (l) {
          console.log(l);
        }
    };
    return Qe(() => t.src, o), Qe(() => t.size, o), (l, u) => (v(), _("div", {
      ref_key: "svgContent",
      ref: r,
      class: "svg-icon__container"
    }, null, 512));
  }
});
const be = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Rt = /* @__PURE__ */ be(Mu, [["__scopeId", "data-v-b7e98673"]]), Iu = { class: "font-awesome-icon__container" }, Nu = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => `icon-${t.name}`), a = g(() => n.getRealColor(t.color));
    return (o, l) => (v(), _("div", Iu, [
      U("em", {
        class: de(f(r))
      }, null, 2)
    ]));
  }
});
const Fe = /* @__PURE__ */ be(Nu, [["__scopeId", "data-v-f943628b"]]), Bu = {
  key: 0,
  class: "check-box__icon"
}, Ei = /* @__PURE__ */ re({
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
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), a = g(() => ({
      "check-box__container": !0,
      "check-box__container--disabled": n.disabled
    })), o = g(() => n.disabled ? "neutro-4" : n.boxColor), l = g(() => n.disabled ? "neutro-4" : n.checkedColor), u = () => {
      n.readonly || n.disabled || (r.value = !r.value);
    };
    return (m, d) => (v(), _("div", {
      class: de(f(a)),
      onClick: u
    }, [
      pe(yt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: K(() => [
          f(r) ? (v(), _("div", Bu, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (v(), te(Fe, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(l)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (v(), te(Rt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: f(l)
            }, null, 8, ["src", "size", "color"])) : M("", !0)
          ])) : M("", !0)
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
      }, null, 8, ["src", "size", "color"])) : M("", !0)
    ], 2));
  }
});
const Au = { class: "grid-row__container" }, Eu = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", Au, [
      H(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Vi = /* @__PURE__ */ be(Eu, [["__scopeId", "data-v-65fb3aec"]]), Vu = { class: "grid-column__container" }, Yu = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", Vu, [
      H(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Hr = /* @__PURE__ */ be(Yu, [["__scopeId", "data-v-4058c78a"]]), Fu = ["width", "height"], Uu = ["fill"], Lu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Wu = [
  Lu
], Hu = ["fill"], zu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), ju = [
  zu
], qu = ["fill"], Gu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Qu = [
  Gu
], Zu = /* @__PURE__ */ re({
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
    const t = e, n = je(), r = g(() => n.getRealColor(t.fill));
    return (a, o) => (v(), _("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 52 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      U("circle", {
        r: "6",
        cx: "6",
        cy: "6",
        stroke: "none",
        fill: f(r)
      }, Wu, 8, Uu),
      U("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: f(r)
      }, ju, 8, Hu),
      U("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: f(r)
      }, Qu, 8, qu)
    ], 8, Fu));
  }
}), Xu = ["type", "disabled"], Ku = { class: "custom-button__text" }, Ju = /* @__PURE__ */ re({
  __name: "CustomButton",
  props: {
    type: {
      default: "button",
      type: String
    },
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
      b0432458: e.width,
      "3a2052d9": e.height,
      "54c17d1a": f(l),
      "7e48db42": e.justifyItems,
      a6dc2536: f(o),
      "6bd9610a": e.justifyContent,
      "7a663706": f(y),
      "9e4028ea": f(m),
      f72ab4c6: f(u)
    }));
    const r = je(), a = g(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = g(() => r.getRealColor(n.color)), l = g(() => r.getRealColor(n.contentColor)), u = g(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), m = g(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), d = g(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined
    })), y = g(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), p = (s) => {
      n.disabled || t("click", s);
    };
    return (s, h) => (v(), _("button", {
      type: e.type,
      disabled: e.disabled,
      class: de(f(d)),
      onClick: p
    }, [
      e.preppendIcon && !e.loading ? (v(), _(fe, { key: 0 }, [
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
      ], 64)) : M("", !0),
      U("span", Ku, [
        e.loading ? (v(), te(Zu, {
          key: 0,
          fill: f(a)
        }, null, 8, ["fill"])) : H(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (v(), _(fe, { key: 1 }, [
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
      ], 64)) : M("", !0)
    ], 10, Xu));
  }
});
const ya = /* @__PURE__ */ be(Ju, [["__scopeId", "data-v-ea175b6c"]]), es = /* @__PURE__ */ re({
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
    const r = R(null), a = R(!1), o = R(!1), l = R(!1), u = g(() => ({
      custom__dialog: !0,
      "custom__dialog--closing": o.value,
      "custom__dialog--shaking": l.value,
      "custom__dialog--opening": a.value
    })), m = g({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    });
    Qe(m, (h) => {
      r.value && (h ? (a.value = !0, r.value.showModal()) : o.value = !0);
    });
    function d() {
      n.persistent ? l.value = !0 : m.value = !1;
    }
    function y(h) {
      h.target === h.currentTarget && d();
    }
    function p() {
      if (l.value)
        l.value = !1;
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
    return Qe(m, async (h) => {
      var k;
      h && (await it(), (k = r.value) == null || k.focus());
    }), (h, k) => (v(), _("dialog", {
      ref_key: "dialogRef",
      ref: r,
      class: de(f(u)),
      onClick: y,
      onKeydown: s,
      onAnimationend: p
    }, [
      H(h.$slots, "default", {}, void 0, !0)
    ], 34));
  }
});
const No = /* @__PURE__ */ be(es, [["__scopeId", "data-v-049c2987"]]), ts = ["data-clickable"], ns = ["data-clickable"], rs = ["data-clickable", "data-style"], as = ["data-clickable"], os = ["data-clickable", "data-style"], ls = /* @__PURE__ */ re({
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
      default: "secundario",
      type: String
    },
    hoverColor: {
      default: "initial",
      type: String
    },
    activeColor: {
      default: "initial",
      type: String
    },
    hoverBackground: {
      default: "initial",
      type: String
    },
    activeBackground: {
      default: "initial",
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
    xe((P) => ({
      "17ea02c3": e.padding,
      "2f5fb8c1": f(y),
      "65ec9f04": e.fontSize,
      "1dbf0fec": e.textAlign,
      "760a6b6e": e.lineHeight,
      "901a3096": e.fontWeight,
      "1b106b2a": e.whiteSpace,
      "2b5b946c": e.borderRadius,
      "00f6fa6f": e.letterSpacing,
      "5b797c1e": e.textTransform,
      "82fcd87e": f(p),
      "04440f7a": f(h),
      "8cb27c32": f(s),
      "0ff86dd8": f(k)
    }));
    const r = mt(), a = je();
    ze(() => {
      I(n.specialText);
    });
    const o = R(null), l = R(null), u = R(null), m = R(null), d = R(null), y = g(() => a.getRealColor(n.color)), p = g(() => a.getRealColor(n.hoverColor)), s = g(() => a.getRealColor(n.activeColor)), h = g(() => a.getRealColor(n.hoverBackground)), k = g(() => a.getRealColor(n.activeBackground));
    function I(P) {
      const V = o.value ?? d.value ?? m.value ?? u.value ?? l.value;
      if (!P || !V || r.default)
        return;
      const T = /\*([^*]+)\*/g;
      V.innerHTML = P.replace(T, (Y) => `<strong>${Y.slice(1, Y.length - 1)}</strong>`);
    }
    function B(P) {
      n.clickable && t("click", P);
    }
    return Qe(() => n.specialText, I), (P, V) => e.predefinedStyle === "h1" ? (v(), _("h1", {
      key: 0,
      ref_key: "h1Ref",
      ref: l,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      H(P.$slots, "default", {}, void 0, !0)
    ], 8, ts)) : e.predefinedStyle === "h2" ? (v(), _("h2", {
      key: 1,
      ref_key: "h2Ref",
      ref: u,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      H(P.$slots, "default", {}, void 0, !0)
    ], 8, ns)) : e.predefinedStyle === "subtitle-1" || e.predefinedStyle === "subtitle-2" ? (v(), _("h3", {
      key: 2,
      ref_key: "h3Ref",
      ref: m,
      "data-clickable": e.clickable,
      "data-style": e.predefinedStyle,
      onClick: B
    }, [
      H(P.$slots, "default", {}, void 0, !0)
    ], 8, rs)) : e.predefinedStyle === "caption" ? (v(), _("small", {
      key: 3,
      ref_key: "smallRef",
      ref: d,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      H(P.$slots, "default", {}, void 0, !0)
    ], 8, as)) : (v(), _("p", {
      key: 4,
      ref_key: "pRef",
      ref: o,
      "data-clickable": e.clickable,
      "data-style": e.predefinedStyle,
      onClick: B
    }, [
      H(P.$slots, "default", {}, void 0, !0)
    ], 8, os));
  }
});
const bt = /* @__PURE__ */ be(ls, [["__scopeId", "data-v-4403fb70"]]), is = /* @__PURE__ */ re({
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
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(l) {
        t("update:model-value", l);
      }
    });
    function a() {
      t("click:yes");
    }
    function o() {
      t("click:no");
    }
    return (l, u) => (v(), te(No, {
      modelValue: f(r),
      "onUpdate:modelValue": u[0] || (u[0] = (m) => Ee(r) ? r.value = m : null),
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
                Ce(ye(e.title), 1)
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
                Ce(ye(e.subtitle), 1)
              ]),
              _: 1
            })) : M("", !0),
            pe(Vi, { "column-gap": "0.75rem" }, {
              default: K(() => [
                pe(ya, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: K(() => [
                    Ce(" Sí ")
                  ]),
                  _: 1
                }),
                pe(ya, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: K(() => [
                    Ce(" No ")
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
function ae(e, t) {
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
function me(e) {
  ae(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || yn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Dt(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function gt(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + r + 1, 0);
  var l = o.getDate();
  return a >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
}
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(n) {
    return typeof n;
  } : vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vn(e);
}
function Yi(e, t) {
  if (ae(2, arguments), !t || vn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, l = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, m = t.seconds ? ce(t.seconds) : 0, d = me(e), y = r || n ? gt(d, r + n * 12) : d, p = o || a ? Dt(y, o + a * 7) : y, s = u + l * 60, h = m + s * 60, k = h * 1e3, I = new Date(p.getTime() + k);
  return I;
}
function us(e, t) {
  ae(2, arguments);
  var n = me(e).getTime(), r = ce(t);
  return new Date(n + r);
}
var ss = {};
function wt() {
  return ss;
}
function Ft(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getDay(), k = (h < p ? 7 : 0) + h - p;
  return s.setDate(s.getDate() - k), s.setHours(0, 0, 0, 0), s;
}
function rr(e) {
  return ae(1, arguments), Ft(e, {
    weekStartsOn: 1
  });
}
function cs(e) {
  ae(1, arguments);
  var t = me(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = rr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var l = rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function fs(e) {
  ae(1, arguments);
  var t = cs(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = rr(n);
  return r;
}
function ar(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Jo(e) {
  ae(1, arguments);
  var t = me(e);
  return t.setHours(0, 0, 0, 0), t;
}
var ds = 864e5;
function ms(e, t) {
  ae(2, arguments);
  var n = Jo(e), r = Jo(t), a = n.getTime() - ar(n), o = r.getTime() - ar(r);
  return Math.round((a - o) / ds);
}
function Fi(e, t) {
  ae(2, arguments);
  var n = ce(t);
  return gt(e, n * 12);
}
var Bo = 6e4, Ao = 36e5, ps = 1e3;
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Ui(e) {
  return ae(1, arguments), e instanceof Date || hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function rn(e) {
  if (ae(1, arguments), !Ui(e) && typeof e != "number")
    return !1;
  var t = me(e);
  return !isNaN(Number(t));
}
function el(e, t) {
  var n;
  ae(1, arguments);
  var r = e || {}, a = me(r.start), o = me(r.end), l = o.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var u = [], m = a;
  m.setHours(0, 0, 0, 0);
  var d = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; m.getTime() <= l; )
    u.push(me(m)), m.setDate(m.getDate() + d), m.setHours(0, 0, 0, 0);
  return u;
}
function ys(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getDay(), k = (h < p ? -7 : 0) + 6 - (h - p);
  return s.setDate(s.getDate() + k), s.setHours(23, 59, 59, 999), s;
}
function Li(e, t) {
  ae(2, arguments);
  var n = ce(t);
  return us(e, -n);
}
var vs = 864e5;
function hs(e) {
  ae(1, arguments);
  var t = me(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / vs) + 1;
}
function qt(e) {
  ae(1, arguments);
  var t = 1, n = me(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Wi(e) {
  ae(1, arguments);
  var t = me(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = qt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var l = qt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function gs(e) {
  ae(1, arguments);
  var t = Wi(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = qt(n);
  return r;
}
var bs = 6048e5;
function Hi(e) {
  ae(1, arguments);
  var t = me(e), n = qt(t).getTime() - gs(t).getTime();
  return Math.round(n / bs) + 1;
}
function Ut(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getUTCDay(), k = (h < p ? 7 : 0) + h - p;
  return s.setUTCDate(s.getUTCDate() - k), s.setUTCHours(0, 0, 0, 0), s;
}
function Eo(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = me(e), p = y.getUTCFullYear(), s = wt(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = s.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = /* @__PURE__ */ new Date(0);
  k.setUTCFullYear(p + 1, 0, h), k.setUTCHours(0, 0, 0, 0);
  var I = Ut(k, t), B = /* @__PURE__ */ new Date(0);
  B.setUTCFullYear(p, 0, h), B.setUTCHours(0, 0, 0, 0);
  var P = Ut(B, t);
  return y.getTime() >= I.getTime() ? p + 1 : y.getTime() >= P.getTime() ? p : p - 1;
}
function _s(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Eo(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(s, 0, p), h.setUTCHours(0, 0, 0, 0);
  var k = Ut(h, t);
  return k;
}
var ws = 6048e5;
function zi(e, t) {
  ae(1, arguments);
  var n = me(e), r = Ut(n, t).getTime() - _s(n, t).getTime();
  return Math.round(r / ws) + 1;
}
function Oe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var ks = {
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
const Pt = ks;
var Ht = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xs = {
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
    var o = Eo(t, a), l = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var u = l % 100;
      return Oe(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(l, {
      unit: "year"
    }) : Oe(l, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Wi(t);
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
    var o = zi(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Oe(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Hi(t);
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
    var a = hs(t);
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
    var o = t.getUTCDay(), l = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(l);
      case "ee":
        return Oe(l, 2);
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
        return Oe(l, n.length);
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
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (n) {
      case "X":
        return nl(l);
      case "XXXX":
      case "XX":
        return Et(l);
      case "XXXXX":
      case "XXX":
      default:
        return Et(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return nl(l);
      case "xxxx":
      case "xx":
        return Et(l);
      case "xxxxx":
      case "xxx":
      default:
        return Et(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + tl(l, ":");
      case "OOOO":
      default:
        return "GMT" + Et(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + tl(l, ":");
      case "zzzz":
      default:
        return "GMT" + Et(l, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var o = a._originalDate || t, l = Math.floor(o.getTime() / 1e3);
    return Oe(l, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTime();
    return Oe(l, n.length);
  }
};
function tl(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var l = t || "";
  return n + String(a) + l + Oe(o, 2);
}
function nl(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Oe(Math.abs(e) / 60, 2);
  }
  return Et(e, t);
}
function Et(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = Oe(Math.floor(a / 60), 2), l = Oe(a % 60, 2);
  return r + o + n + l;
}
const Ss = xs;
var rl = function(t, n) {
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
}, ji = function(t, n) {
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
}, $s = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return rl(t, n);
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
  return l.replace("{{date}}", rl(a, n)).replace("{{time}}", ji(o, n));
}, Os = {
  p: ji,
  P: $s
};
const va = Os;
var Ts = ["D", "DD"], Ps = ["YY", "YYYY"];
function qi(e) {
  return Ts.indexOf(e) !== -1;
}
function Gi(e) {
  return Ps.indexOf(e) !== -1;
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
var Cs = {
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
}, Ds = function(t, n, r) {
  var a, o = Cs[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Rs = Ds;
function ea(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Ms = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Is = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ns = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bs = {
  date: ea({
    formats: Ms,
    defaultWidth: "full"
  }),
  time: ea({
    formats: Is,
    defaultWidth: "full"
  }),
  dateTime: ea({
    formats: Ns,
    defaultWidth: "full"
  })
};
const As = Bs;
var Es = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Vs = function(t, n, r, a) {
  return Es[t];
};
const Ys = Vs;
function Jt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[l] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, m = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[m] || e.values[u];
    }
    var d = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[d];
  };
}
var Fs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Us = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ls = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ws = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Hs = {
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
}, zs = {
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
}, js = function(t, n) {
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
}, qs = {
  ordinalNumber: js,
  era: Jt({
    values: Fs,
    defaultWidth: "wide"
  }),
  quarter: Jt({
    values: Us,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Jt({
    values: Ls,
    defaultWidth: "wide"
  }),
  day: Jt({
    values: Ws,
    defaultWidth: "wide"
  }),
  dayPeriod: Jt({
    values: Hs,
    defaultWidth: "wide",
    formattingValues: zs,
    defaultFormattingWidth: "wide"
  })
};
const Gs = qs;
function en(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(u) ? Zs(u, function(p) {
      return p.test(l);
    }) : Qs(u, function(p) {
      return p.test(l);
    }), d;
    d = e.valueCallback ? e.valueCallback(m) : m, d = n.valueCallback ? n.valueCallback(d) : d;
    var y = t.slice(l.length);
    return {
      value: d,
      rest: y
    };
  };
}
function Qs(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Zs(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Xs(e) {
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
var Ks = /^(\d+)(th|st|nd|rd)?/i, Js = /\d+/i, ec = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, tc = {
  any: [/^b/i, /^(a|c)/i]
}, nc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ac = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, oc = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, lc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ic = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, uc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, sc = {
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
}, cc = {
  ordinalNumber: Xs({
    matchPattern: Ks,
    parsePattern: Js,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: en({
    matchPatterns: ec,
    defaultMatchWidth: "wide",
    parsePatterns: tc,
    defaultParseWidth: "any"
  }),
  quarter: en({
    matchPatterns: nc,
    defaultMatchWidth: "wide",
    parsePatterns: rc,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: en({
    matchPatterns: ac,
    defaultMatchWidth: "wide",
    parsePatterns: oc,
    defaultParseWidth: "any"
  }),
  day: en({
    matchPatterns: lc,
    defaultMatchWidth: "wide",
    parsePatterns: ic,
    defaultParseWidth: "any"
  }),
  dayPeriod: en({
    matchPatterns: uc,
    defaultMatchWidth: "any",
    parsePatterns: sc,
    defaultParseWidth: "any"
  })
};
const fc = cc;
var dc = {
  code: "en-US",
  formatDistance: Rs,
  formatLong: As,
  formatRelative: Ys,
  localize: Gs,
  match: fc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Qi = dc;
var mc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yc = /^'([^]*?)'?$/, vc = /''/g, hc = /[a-zA-Z]/;
function an(e, t, n) {
  var r, a, o, l, u, m, d, y, p, s, h, k, I, B, P, V, T, Y;
  ae(2, arguments);
  var G = String(t), X = wt(), ee = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : X.locale) !== null && r !== void 0 ? r : Qi, A = ce((o = (l = (u = (m = n == null ? void 0 : n.firstWeekContainsDate) !== null && m !== void 0 ? m : n == null || (d = n.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : X.firstWeekContainsDate) !== null && l !== void 0 ? l : (p = X.locale) === null || p === void 0 || (s = p.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var x = ce((h = (k = (I = (B = n == null ? void 0 : n.weekStartsOn) !== null && B !== void 0 ? B : n == null || (P = n.locale) === null || P === void 0 || (V = P.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && I !== void 0 ? I : X.weekStartsOn) !== null && k !== void 0 ? k : (T = X.locale) === null || T === void 0 || (Y = T.options) === null || Y === void 0 ? void 0 : Y.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(x >= 0 && x <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var E = me(e);
  if (!rn(E))
    throw new RangeError("Invalid time value");
  var N = ar(E), Z = Li(E, N), q = {
    firstWeekContainsDate: A,
    weekStartsOn: x,
    locale: ee,
    _originalDate: E
  }, ne = G.match(pc).map(function(D) {
    var $ = D[0];
    if ($ === "p" || $ === "P") {
      var i = va[$];
      return i(D, ee.formatLong);
    }
    return D;
  }).join("").match(mc).map(function(D) {
    if (D === "''")
      return "'";
    var $ = D[0];
    if ($ === "'")
      return gc(D);
    var i = Ss[$];
    if (i)
      return !(n != null && n.useAdditionalWeekYearTokens) && Gi(D) && or(D, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && qi(D) && or(D, t, String(e)), i(Z, D, ee.localize, q);
    if ($.match(hc))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + $ + "`");
    return D;
  }).join("");
  return ne;
}
function gc(e) {
  var t = e.match(yc);
  return t ? t[1].replace(vc, "'") : e;
}
function bc(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function _c(e) {
  ae(1, arguments);
  var t = me(e), n = t.getDay();
  return n;
}
function wc(e) {
  ae(1, arguments);
  var t = me(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function $t(e) {
  ae(1, arguments);
  var t = me(e), n = t.getHours();
  return n;
}
var kc = 6048e5;
function xc(e) {
  ae(1, arguments);
  var t = me(e), n = rr(t).getTime() - fs(t).getTime();
  return Math.round(n / kc) + 1;
}
function Ot(e) {
  ae(1, arguments);
  var t = me(e), n = t.getMinutes();
  return n;
}
function Me(e) {
  ae(1, arguments);
  var t = me(e), n = t.getMonth();
  return n;
}
function Gt(e) {
  ae(1, arguments);
  var t = me(e), n = t.getSeconds();
  return n;
}
function Sc(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = me(e), p = y.getFullYear(), s = wt(), h = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = s.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = /* @__PURE__ */ new Date(0);
  k.setFullYear(p + 1, 0, h), k.setHours(0, 0, 0, 0);
  var I = Ft(k, t), B = /* @__PURE__ */ new Date(0);
  B.setFullYear(p, 0, h), B.setHours(0, 0, 0, 0);
  var P = Ft(B, t);
  return y.getTime() >= I.getTime() ? p + 1 : y.getTime() >= P.getTime() ? p : p - 1;
}
function $c(e, t) {
  var n, r, a, o, l, u, m, d;
  ae(1, arguments);
  var y = wt(), p = ce((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (m = y.locale) === null || m === void 0 || (d = m.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Sc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(s, 0, p), h.setHours(0, 0, 0, 0);
  var k = Ft(h, t);
  return k;
}
var Oc = 6048e5;
function Tc(e, t) {
  ae(1, arguments);
  var n = me(e), r = Ft(n, t).getTime() - $c(n, t).getTime();
  return Math.round(r / Oc) + 1;
}
function Ie(e) {
  return ae(1, arguments), me(e).getFullYear();
}
function Vo(e, t) {
  ae(2, arguments);
  var n = me(e), r = me(t);
  return n.getTime() > r.getTime();
}
function Yo(e, t) {
  ae(2, arguments);
  var n = me(e), r = me(t);
  return n.getTime() < r.getTime();
}
function Zi(e, t) {
  ae(2, arguments);
  var n = me(e), r = me(t);
  return n.getTime() === r.getTime();
}
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Xi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ha(e, t);
}
function ha(e, t) {
  return ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ha(e, t);
}
function Ki(e) {
  var t = Cc();
  return function() {
    var r = lr(e), a;
    if (t) {
      var o = lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pc(this, a);
  };
}
function Pc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : ga(e);
}
function ga(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cc() {
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
function Fo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uo(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function ba(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dc = 10, Ji = /* @__PURE__ */ function() {
  function e() {
    Fo(this, e), ba(this, "subPriority", 0);
  }
  return Uo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Rc = /* @__PURE__ */ function(e) {
  Xi(n, e);
  var t = Ki(n);
  function n(r, a, o, l, u) {
    var m;
    return Fo(this, n), m = t.call(this), m.value = r, m.validateValue = a, m.setValue = o, m.priority = l, u && (m.subPriority = u), m;
  }
  return Uo(n, [{
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
}(Ji), Mc = /* @__PURE__ */ function(e) {
  Xi(n, e);
  var t = Ki(n);
  function n() {
    var r;
    Fo(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ba(ga(r), "priority", Dc), ba(ga(r), "subPriority", -1), r;
  }
  return Uo(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var l = /* @__PURE__ */ new Date(0);
      return l.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), l.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), l;
    }
  }]), n;
}(Ji);
function Ic(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nc(e, t, n) {
  return t && ol(e.prototype, t), n && ol(e, n), e;
}
var Se = /* @__PURE__ */ function() {
  function e() {
    Ic(this, e);
  }
  return Nc(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var l = this.parse(n, r, a, o);
      return l ? {
        setter: new Rc(l.value, this.validate, this.set, this.priority, this.subPriority),
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
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function Bc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ac(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), e;
}
function Ec(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
function Vc(e) {
  var t = Fc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
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
function Fc() {
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
function il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uc = /* @__PURE__ */ function(e) {
  Ec(n, e);
  var t = Vc(n);
  function n() {
    var r;
    Bc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), il(wa(r), "priority", 140), il(wa(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Ac(n, [{
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
function Le(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ve(e, t) {
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
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, l = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Ao + o * Bo + l * ps),
    rest: t.slice(n[0].length)
  };
}
function eu(e) {
  return Ve(Ue.anyDigitsSigned, e);
}
function Ye(e, t) {
  switch (e) {
    case 1:
      return Ve(Ue.singleDigit, t);
    case 2:
      return Ve(Ue.twoDigits, t);
    case 3:
      return Ve(Ue.threeDigits, t);
    case 4:
      return Ve(Ue.fourDigits, t);
    default:
      return Ve(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ur(e, t) {
  switch (e) {
    case 1:
      return Ve(Ue.singleDigitSigned, t);
    case 2:
      return Ve(Ue.twoDigitsSigned, t);
    case 3:
      return Ve(Ue.threeDigitsSigned, t);
    case 4:
      return Ve(Ue.fourDigitsSigned, t);
    default:
      return Ve(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Lo(e) {
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
function tu(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, l = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + l - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function nu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function Lc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wc(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
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
function zc(e) {
  var t = qc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return jc(this, a);
  };
}
function jc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qc() {
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
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gc = /* @__PURE__ */ function(e) {
  Hc(n, e);
  var t = zc(n);
  function n() {
    var r;
    Lc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), sl(xa(r), "priority", 130), sl(xa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Wc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(d) {
        return {
          year: d,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return Le(Ye(4, a), u);
        case "yo":
          return Le(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Le(Ye(o.length, a), u);
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
        var m = tu(l.year, u);
        return a.setUTCFullYear(m, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var d = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
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
function Qc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Zc(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function Xc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sa(e, t);
}
function Sa(e, t) {
  return Sa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Sa(e, t);
}
function Kc(e) {
  var t = ef();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Jc(this, a);
  };
}
function Jc(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : $a(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ef() {
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
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tf = /* @__PURE__ */ function(e) {
  Xc(n, e);
  var t = Kc(n);
  function n() {
    var r;
    Qc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), fl($a(r), "priority", 130), fl($a(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Zc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(d) {
        return {
          year: d,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return Le(Ye(4, a), u);
        case "Yo":
          return Le(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return Le(Ye(o.length, a), u);
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
      var m = Eo(a, u);
      if (l.isTwoDigitYear) {
        var d = tu(l.year, m);
        return a.setUTCFullYear(d, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ut(a, u);
      }
      var y = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
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
function nf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function rf(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function af(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oa(e, t);
}
function Oa(e, t) {
  return Oa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Oa(e, t);
}
function of(e) {
  var t = uf();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return lf(this, a);
  };
}
function lf(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uf() {
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
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sf = /* @__PURE__ */ function(e) {
  af(n, e);
  var t = of(n);
  function n() {
    var r;
    nf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ml(Ta(r), "priority", 130), ml(Ta(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return rf(n, [{
    key: "parse",
    value: function(a, o) {
      return ur(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(l, 0, 4), u.setUTCHours(0, 0, 0, 0), qt(u);
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
function cf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ff(e, t, n) {
  return t && pl(e.prototype, t), n && pl(e, n), e;
}
function df(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pa(e, t);
}
function mf(e) {
  var t = yf();
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
  return t && (xn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yf() {
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
function yl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vf = /* @__PURE__ */ function(e) {
  df(n, e);
  var t = mf(n);
  function n() {
    var r;
    cf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), yl(Ca(r), "priority", 130), yl(Ca(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return ff(n, [{
    key: "parse",
    value: function(a, o) {
      return ur(o === "u" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCFullYear(l, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
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
function hf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gf(e, t, n) {
  return t && vl(e.prototype, t), n && vl(e, n), e;
}
function bf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Da(e, t);
}
function _f(e) {
  var t = kf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return wf(this, a);
  };
}
function wf(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ra(e);
}
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kf() {
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
function hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xf = /* @__PURE__ */ function(e) {
  bf(n, e);
  var t = _f(n);
  function n() {
    var r;
    hf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), hl(Ra(r), "priority", 120), hl(Ra(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return gf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "Q":
        case "QQ":
          return Ye(o.length, a);
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
}(Se);
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function Sf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $f(e, t, n) {
  return t && gl(e.prototype, t), n && gl(e, n), e;
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
function Tf(e) {
  var t = Cf();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pf(this, a);
  };
}
function Pf(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cf() {
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
function bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Df = /* @__PURE__ */ function(e) {
  Of(n, e);
  var t = Tf(n);
  function n() {
    var r;
    Sf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), bl(Ia(r), "priority", 120), bl(Ia(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return $f(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "q":
        case "qq":
          return Ye(o.length, a);
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
}(Se);
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function Rf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mf(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function If(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Na(e, t);
}
function Nf(e) {
  var t = Af();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bf(this, a);
  };
}
function Bf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Af() {
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
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ef = /* @__PURE__ */ function(e) {
  If(n, e);
  var t = Nf(n);
  function n() {
    var r;
    Rf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), wl(Ba(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), wl(Ba(r), "priority", 110), r;
  }
  return Mf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "M":
          return Le(Ve(Ue.month, a), u);
        case "MM":
          return Le(Ye(2, a), u);
        case "Mo":
          return Le(l.ordinalNumber(a, {
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
}(Se);
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Vf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yf(e, t, n) {
  return t && kl(e.prototype, t), n && kl(e, n), e;
}
function Ff(e, t) {
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
    return Lf(this, a);
  };
}
function Lf(e, t) {
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
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hf = /* @__PURE__ */ function(e) {
  Ff(n, e);
  var t = Uf(n);
  function n() {
    var r;
    Vf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), xl(Ea(r), "priority", 110), xl(Ea(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Yf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(d) {
        return d - 1;
      };
      switch (o) {
        case "L":
          return Le(Ve(Ue.month, a), u);
        case "LL":
          return Le(Ye(2, a), u);
        case "Lo":
          return Le(l.ordinalNumber(a, {
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
}(Se);
function zf(e, t, n) {
  ae(2, arguments);
  var r = me(e), a = ce(t), o = zi(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
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
function Sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qf(e, t, n) {
  return t && Sl(e.prototype, t), n && Sl(e, n), e;
}
function Gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Va(e, t);
}
function Va(e, t) {
  return Va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Va(e, t);
}
function Qf(e) {
  var t = Xf();
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
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Ya(e);
}
function Ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xf() {
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
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kf = /* @__PURE__ */ function(e) {
  Gf(n, e);
  var t = Qf(n);
  function n() {
    var r;
    jf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), $l(Ya(r), "priority", 100), $l(Ya(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return qf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "w":
          return Ve(Ue.week, a);
        case "wo":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l, u) {
      return Ut(zf(a, l, u), u);
    }
  }]), n;
}(Se);
function Jf(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t), a = Hi(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function ed(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function td(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
}
function nd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function rd(e) {
  var t = od();
  return function() {
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ad(this, a);
  };
}
function ad(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ua(e);
}
function Ua(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function od() {
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
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ld = /* @__PURE__ */ function(e) {
  nd(n, e);
  var t = rd(n);
  function n() {
    var r;
    ed(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Tl(Ua(r), "priority", 100), Tl(Ua(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return td(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "I":
          return Ve(Ue.week, a);
        case "Io":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      return qt(Jf(a, l));
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
function id(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ud(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function sd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
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
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Rn(e);
}
function Rn(e) {
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
function ta(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yd = /* @__PURE__ */ function(e) {
  sd(n, e);
  var t = cd(n);
  function n() {
    var r;
    id(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ta(Rn(r), "priority", 90), ta(Rn(r), "subPriority", 1), ta(Rn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ud(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "d":
          return Ve(Ue.date, a);
        case "do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = nu(l), m = a.getUTCMonth();
      return u ? o >= 1 && o <= pd[m] : o >= 1 && o <= md[m];
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCDate(l), a.setUTCHours(0, 0, 0, 0), a;
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
function vd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hd(e, t, n) {
  return t && Cl(e.prototype, t), n && Cl(e, n), e;
}
function gd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wa(e, t);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Wa(e, t);
}
function bd(e) {
  var t = wd();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return _d(this, a);
  };
}
function _d(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wd() {
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
var kd = /* @__PURE__ */ function(e) {
  gd(n, e);
  var t = bd(n);
  function n() {
    var r;
    vd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), na(In(r), "priority", 90), na(In(r), "subpriority", 1), na(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return hd(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "D":
        case "DD":
          return Ve(Ue.dayOfYear, a);
        case "Do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ye(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = nu(l);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(0, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Wo(e, t, n) {
  var r, a, o, l, u, m, d, y;
  ae(2, arguments);
  var p = wt(), s = ce((r = (a = (o = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (m = u.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && o !== void 0 ? o : p.weekStartsOn) !== null && a !== void 0 ? a : (d = p.locale) === null || d === void 0 || (y = d.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = me(e), k = ce(t), I = h.getUTCDay(), B = k % 7, P = (B + 7) % 7, V = (P < s ? 7 : 0) + k - I;
  return h.setUTCDate(h.getUTCDate() + V), h;
}
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function xd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Sd(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function $d(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function Od(e) {
  var t = Pd();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Td(this, a);
  };
}
function Td(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pd() {
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
function Rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cd = /* @__PURE__ */ function(e) {
  $d(n, e);
  var t = Od(n);
  function n() {
    var r;
    xd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Rl(za(r), "priority", 90), Rl(za(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Sd(n, [{
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
      return a = Wo(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
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
function Dd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rd(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function Md(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Id(e) {
  var t = Bd();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Nd(this, a);
  };
}
function Nd(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bd() {
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
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ad = /* @__PURE__ */ function(e) {
  Md(n, e);
  var t = Id(n);
  function n() {
    var r;
    Dd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Il(qa(r), "priority", 90), Il(qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Rd(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var m = function(y) {
        var p = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + p;
      };
      switch (o) {
        case "e":
        case "ee":
          return Le(Ye(o.length, a), m);
        case "eo":
          return Le(l.ordinalNumber(a, {
            unit: "day"
          }), m);
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
      return a = Wo(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
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
function Ed(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vd(e, t, n) {
  return t && Nl(e.prototype, t), n && Nl(e, n), e;
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
function Fd(e) {
  var t = Ld();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
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
function Ld() {
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
function Bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wd = /* @__PURE__ */ function(e) {
  Yd(n, e);
  var t = Fd(n);
  function n() {
    var r;
    Ed(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Bl(Qa(r), "priority", 90), Bl(Qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Vd(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var m = function(y) {
        var p = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + p;
      };
      switch (o) {
        case "c":
        case "cc":
          return Le(Ye(o.length, a), m);
        case "co":
          return Le(l.ordinalNumber(a, {
            unit: "day"
          }), m);
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
      return a = Wo(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Hd(e, t) {
  ae(2, arguments);
  var n = ce(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = me(e), o = a.getUTCDay(), l = n % 7, u = (l + 7) % 7, m = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + m), a;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function zd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jd(e, t, n) {
  return t && Al(e.prototype, t), n && Al(e, n), e;
}
function qd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Gd(e) {
  var t = Zd();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qd(this, a);
  };
}
function Qd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zd() {
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
var Xd = /* @__PURE__ */ function(e) {
  qd(n, e);
  var t = Gd(n);
  function n() {
    var r;
    zd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), El(Xa(r), "priority", 90), El(Xa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return jd(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(d) {
        return d === 0 ? 7 : d;
      };
      switch (o) {
        case "i":
        case "ii":
          return Ye(o.length, a);
        case "io":
          return l.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Le(l.day(a, {
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
          return Le(l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return Le(l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return Le(l.day(a, {
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
      return a = Hd(a, l), a.setUTCHours(0, 0, 0, 0), a;
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
function Kd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jd(e, t, n) {
  return t && Vl(e.prototype, t), n && Vl(e, n), e;
}
function em(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function tm(e) {
  var t = rm();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return nm(this, a);
  };
}
function nm(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
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
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function Yl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var am = /* @__PURE__ */ function(e) {
  em(n, e);
  var t = tm(n);
  function n() {
    var r;
    Kd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Yl(Ja(r), "priority", 80), Yl(Ja(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Jd(n, [{
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
      return a.setUTCHours(Lo(l), 0, 0, 0), a;
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
function om(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lm(e, t, n) {
  return t && Fl(e.prototype, t), n && Fl(e, n), e;
}
function im(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function um(e) {
  var t = cm();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return sm(this, a);
  };
}
function sm(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
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
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function Ul(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fm = /* @__PURE__ */ function(e) {
  im(n, e);
  var t = um(n);
  function n() {
    var r;
    om(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ul(to(r), "priority", 80), Ul(to(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return lm(n, [{
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
      return a.setUTCHours(Lo(l), 0, 0, 0), a;
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
function dm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function mm(e, t, n) {
  return t && Ll(e.prototype, t), n && Ll(e, n), e;
}
function pm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function ym(e) {
  var t = hm();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return vm(this, a);
  };
}
function vm(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
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
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gm = /* @__PURE__ */ function(e) {
  pm(n, e);
  var t = ym(n);
  function n() {
    var r;
    dm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Wl(ro(r), "priority", 80), Wl(ro(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return mm(n, [{
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
      return a.setUTCHours(Lo(l), 0, 0, 0), a;
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
function bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _m(e, t, n) {
  return t && Hl(e.prototype, t), n && Hl(e, n), e;
}
function wm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function km(e) {
  var t = Sm();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return xm(this, a);
  };
}
function xm(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sm() {
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
function zl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $m = /* @__PURE__ */ function(e) {
  wm(n, e);
  var t = km(n);
  function n() {
    var r;
    bm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), zl(oo(r), "priority", 70), zl(oo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return _m(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "h":
          return Ve(Ue.hour12h, a);
        case "ho":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      var u = a.getUTCHours() >= 12;
      return u && l < 12 ? a.setUTCHours(l + 12, 0, 0, 0) : !u && l === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(l, 0, 0, 0), a;
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
function Om(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tm(e, t, n) {
  return t && jl(e.prototype, t), n && jl(e, n), e;
}
function Pm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Cm(e) {
  var t = Rm();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Dm(this, a);
  };
}
function Dm(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : io(e);
}
function io(e) {
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
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mm = /* @__PURE__ */ function(e) {
  Pm(n, e);
  var t = Cm(n);
  function n() {
    var r;
    Om(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ql(io(r), "priority", 70), ql(io(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return Tm(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "H":
          return Ve(Ue.hour23h, a);
        case "Ho":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      return a.setUTCHours(l, 0, 0, 0), a;
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
function Im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nm(e, t, n) {
  return t && Gl(e.prototype, t), n && Gl(e, n), e;
}
function Bm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Am(e) {
  var t = Vm();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Em(this, a);
  };
}
function Em(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vm() {
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
function Ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ym = /* @__PURE__ */ function(e) {
  Bm(n, e);
  var t = Am(n);
  function n() {
    var r;
    Im(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ql(so(r), "priority", 70), Ql(so(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Nm(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "K":
          return Ve(Ue.hour11h, a);
        case "Ko":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      var u = a.getUTCHours() >= 12;
      return u && l < 12 ? a.setUTCHours(l + 12, 0, 0, 0) : a.setUTCHours(l, 0, 0, 0), a;
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
function Fm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Um(e, t, n) {
  return t && Zl(e.prototype, t), n && Zl(e, n), e;
}
function Lm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Wm(e) {
  var t = zm();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hm(this, a);
  };
}
function Hm(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zm() {
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
function Xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jm = /* @__PURE__ */ function(e) {
  Lm(n, e);
  var t = Wm(n);
  function n() {
    var r;
    Fm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Xl(fo(r), "priority", 70), Xl(fo(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Um(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "k":
          return Ve(Ue.hour24h, a);
        case "ko":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      var u = l <= 24 ? l % 24 : l;
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
function qm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gm(e, t, n) {
  return t && Kl(e.prototype, t), n && Kl(e, n), e;
}
function Qm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function Zm(e) {
  var t = Km();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Xm(this, a);
  };
}
function Xm(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : po(e);
}
function po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Km() {
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
function Jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jm = /* @__PURE__ */ function(e) {
  Qm(n, e);
  var t = Zm(n);
  function n() {
    var r;
    qm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Jl(po(r), "priority", 60), Jl(po(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Gm(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "m":
          return Ve(Ue.minute, a);
        case "mo":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      return a.setUTCMinutes(l, 0, 0), a;
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
function ep(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ei(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tp(e, t, n) {
  return t && ei(e.prototype, t), n && ei(e, n), e;
}
function np(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function rp(e) {
  var t = op();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ap(this, a);
  };
}
function ap(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function op() {
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
function ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lp = /* @__PURE__ */ function(e) {
  np(n, e);
  var t = rp(n);
  function n() {
    var r;
    ep(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ti(vo(r), "priority", 50), ti(vo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return tp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "s":
          return Ve(Ue.second, a);
        case "so":
          return l.ordinalNumber(a, {
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
    value: function(a, o, l) {
      return a.setUTCSeconds(l, 0), a;
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
function ip(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function up(e, t, n) {
  return t && ni(e.prototype, t), n && ni(e, n), e;
}
function sp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function cp(e) {
  var t = dp();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return fp(this, a);
  };
}
function fp(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dp() {
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
function ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mp = /* @__PURE__ */ function(e) {
  sp(n, e);
  var t = cp(n);
  function n() {
    var r;
    ip(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ri(go(r), "priority", 30), ri(go(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return up(n, [{
    key: "parse",
    value: function(a, o) {
      var l = function(m) {
        return Math.floor(m * Math.pow(10, -o.length + 3));
      };
      return Le(Ye(o.length, a), l);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMilliseconds(l), a;
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
function pp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yp(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function vp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function hp(e) {
  var t = bp();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return gp(this, a);
  };
}
function gp(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bp() {
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
function oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _p = /* @__PURE__ */ function(e) {
  vp(n, e);
  var t = hp(n);
  function n() {
    var r;
    pp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), oi(_o(r), "priority", 10), oi(_o(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return yp(n, [{
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
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
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
function wp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function kp(e, t, n) {
  return t && li(e.prototype, t), n && li(e, n), e;
}
function xp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function Sp(e) {
  var t = Op();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return $p(this, a);
  };
}
function $p(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Op() {
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
function ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tp = /* @__PURE__ */ function(e) {
  xp(n, e);
  var t = Sp(n);
  function n() {
    var r;
    wp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ii(ko(r), "priority", 10), ii(ko(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return kp(n, [{
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
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
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
function Pp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cp(e, t, n) {
  return t && ui(e.prototype, t), n && ui(e, n), e;
}
function Dp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xo(e, t);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xo(e, t);
}
function Rp(e) {
  var t = Ip();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Mp(this, a);
  };
}
function Mp(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : So(e);
}
function So(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ip() {
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
function si(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Np = /* @__PURE__ */ function(e) {
  Dp(n, e);
  var t = Rp(n);
  function n() {
    var r;
    Pp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), si(So(r), "priority", 40), si(So(r), "incompatibleTokens", "*"), r;
  }
  return Cp(n, [{
    key: "parse",
    value: function(a) {
      return eu(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l * 1e3), {
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
function Bp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ap(e, t, n) {
  return t && ci(e.prototype, t), n && ci(e, n), e;
}
function Ep(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function Vp(e) {
  var t = Fp();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var o = Vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Yp(this, a);
  };
}
function Yp(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fp() {
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
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Up = /* @__PURE__ */ function(e) {
  Ep(n, e);
  var t = Vp(n);
  function n() {
    var r;
    Bp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), fi(Oo(r), "priority", 20), fi(Oo(r), "incompatibleTokens", "*"), r;
  }
  return Ap(n, [{
    key: "parse",
    value: function(a) {
      return eu(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se), Lp = {
  G: new Uc(),
  y: new Gc(),
  Y: new tf(),
  R: new sf(),
  u: new vf(),
  Q: new xf(),
  q: new Df(),
  M: new Ef(),
  L: new Hf(),
  w: new Kf(),
  I: new ld(),
  d: new yd(),
  D: new kd(),
  E: new Cd(),
  e: new Ad(),
  c: new Wd(),
  i: new Xd(),
  a: new am(),
  b: new fm(),
  B: new gm(),
  h: new $m(),
  H: new Mm(),
  K: new Ym(),
  k: new jm(),
  m: new Jm(),
  s: new lp(),
  S: new mp(),
  X: new _p(),
  x: new Tp(),
  t: new Np(),
  T: new Up()
};
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function di(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Wp(e)) || t && e && typeof e.length == "number") {
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
  var o = !0, l = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var d = n.next();
    return o = d.done, d;
  }, e: function(d) {
    l = !0, u = d;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l)
        throw u;
    }
  } };
}
function Wp(e, t) {
  if (e) {
    if (typeof e == "string")
      return mi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return mi(e, t);
  }
}
function mi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var Hp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jp = /^'([^]*?)'?$/, qp = /''/g, Gp = /\S/, Qp = /[a-zA-Z]/;
function To(e, t, n, r) {
  var a, o, l, u, m, d, y, p, s, h, k, I, B, P, V, T, Y, G;
  ae(3, arguments);
  var X = String(e), ee = String(t), A = wt(), x = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : A.locale) !== null && a !== void 0 ? a : Qi;
  if (!x.match)
    throw new RangeError("locale must contain match property");
  var E = ce((l = (u = (m = (d = r == null ? void 0 : r.firstWeekContainsDate) !== null && d !== void 0 ? d : r == null || (y = r.locale) === null || y === void 0 || (p = y.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && m !== void 0 ? m : A.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = A.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(E >= 1 && E <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var N = ce((k = (I = (B = (P = r == null ? void 0 : r.weekStartsOn) !== null && P !== void 0 ? P : r == null || (V = r.locale) === null || V === void 0 || (T = V.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && B !== void 0 ? B : A.weekStartsOn) !== null && I !== void 0 ? I : (Y = A.locale) === null || Y === void 0 || (G = Y.options) === null || G === void 0 ? void 0 : G.weekStartsOn) !== null && k !== void 0 ? k : 0);
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (ee === "")
    return X === "" ? me(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: E,
    weekStartsOn: N,
    locale: x
  }, q = [new Mc()], ne = ee.match(zp).map(function(le) {
    var ve = le[0];
    if (ve in va) {
      var Be = va[ve];
      return Be(le, x.formatLong);
    }
    return le;
  }).join("").match(Hp), D = [], $ = di(ne), i;
  try {
    var c = function() {
      var ve = i.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Gi(ve) && or(ve, ee, e), !(r != null && r.useAdditionalDayOfYearTokens) && qi(ve) && or(ve, ee, e);
      var Be = ve[0], ut = Lp[Be];
      if (ut) {
        var he = ut.incompatibleTokens;
        if (Array.isArray(he)) {
          var ft = D.find(function(qe) {
            return he.includes(qe.token) || qe.token === Be;
          });
          if (ft)
            throw new RangeError("The format string mustn't contain `".concat(ft.fullToken, "` and `").concat(ve, "` at the same time"));
        } else if (ut.incompatibleTokens === "*" && D.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ve, "` and any other token at the same time"));
        D.push({
          token: Be,
          fullToken: ve
        });
        var ot = ut.run(X, ve, x.match, Z);
        if (!ot)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        q.push(ot.setter), X = ot.rest;
      } else {
        if (Be.match(Qp))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Be + "`");
        if (ve === "''" ? ve = "'" : Be === "'" && (ve = Zp(ve)), X.indexOf(ve) === 0)
          X = X.slice(ve.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for ($.s(); !(i = $.n()).done; ) {
      var O = c();
      if (Kn(O) === "object")
        return O.v;
    }
  } catch (le) {
    $.e(le);
  } finally {
    $.f();
  }
  if (X.length > 0 && Gp.test(X))
    return /* @__PURE__ */ new Date(NaN);
  var S = q.map(function(le) {
    return le.priority;
  }).sort(function(le, ve) {
    return ve - le;
  }).filter(function(le, ve, Be) {
    return Be.indexOf(le) === ve;
  }).map(function(le) {
    return q.filter(function(ve) {
      return ve.priority === le;
    }).sort(function(ve, Be) {
      return Be.subPriority - ve.subPriority;
    });
  }).map(function(le) {
    return le[0];
  }), z = me(n);
  if (isNaN(z.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var J = Li(z, ar(z)), Q = {}, C = di(S), w;
  try {
    for (C.s(); !(w = C.n()).done; ) {
      var j = w.value;
      if (!j.validate(J, Z))
        return /* @__PURE__ */ new Date(NaN);
      var ke = j.set(J, Q, Z);
      Array.isArray(ke) ? (J = ke[0], bc(Q, ke[1])) : J = ke;
    }
  } catch (le) {
    C.e(le);
  } finally {
    C.f();
  }
  return J;
}
function Zp(e) {
  return e.match(jp)[1].replace(qp, "'");
}
function Xp(e, t) {
  ae(2, arguments);
  var n = ce(t);
  return Dt(e, -n);
}
function Kp(e, t) {
  var n;
  ae(1, arguments);
  var r = ce((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = ny(e), o;
  if (a.date) {
    var l = ry(a.date, r);
    o = ay(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), m = 0, d;
  if (a.time && (m = oy(a.time), isNaN(m)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (d = ly(a.timezone), isNaN(d))
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
}, Jp = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ey = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, ty = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ny(e) {
  var t = {}, n = e.split(dn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], dn.timeZoneDelimiter.test(t.date) && (t.date = e.split(dn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = dn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function ry(e, t) {
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
function ay(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(Jp);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = tn(n[1]), o = tn(n[2]) - 1, l = tn(n[3]), u = tn(n[4]), m = tn(n[5]) - 1;
  if (r)
    return fy(t, u, m) ? iy(t, u, m) : /* @__PURE__ */ new Date(NaN);
  var d = /* @__PURE__ */ new Date(0);
  return !sy(t, o, l) || !cy(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, o, Math.max(a, l)), d);
}
function tn(e) {
  return e ? parseInt(e) : 1;
}
function oy(e) {
  var t = e.match(ey);
  if (!t)
    return NaN;
  var n = ra(t[1]), r = ra(t[2]), a = ra(t[3]);
  return dy(n, r, a) ? n * Ao + r * Bo + a * 1e3 : NaN;
}
function ra(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function ly(e) {
  if (e === "Z")
    return 0;
  var t = e.match(ty);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return my(r, a) ? n * (r * Ao + a * Bo) : NaN;
}
function iy(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var uy = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ru(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function sy(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (uy[t] || (ru(e) ? 29 : 28));
}
function cy(e, t) {
  return t >= 1 && t <= (ru(e) ? 366 : 365);
}
function fy(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function dy(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function my(e, t) {
  return t >= 0 && t <= 59;
}
function on(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t), a = n.getFullYear(), o = n.getDate(), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
  var u = wc(l);
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
  if (ae(2, arguments), Jn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = me(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = on(n, t.month)), t.date != null && n.setDate(ce(t.date)), t.hours != null && n.setHours(ce(t.hours)), t.minutes != null && n.setMinutes(ce(t.minutes)), t.seconds != null && n.setSeconds(ce(t.seconds)), t.milliseconds != null && n.setMilliseconds(ce(t.milliseconds)), n);
}
function au(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return n.setHours(r), n;
}
function Ho(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return n.setMilliseconds(r), n;
}
function ou(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return n.setMinutes(r), n;
}
function lu(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return n.setSeconds(r), n;
}
function Yt(e, t) {
  ae(2, arguments);
  var n = me(e), r = ce(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function jt(e, t) {
  ae(2, arguments);
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
function py(e, t) {
  if (ae(2, arguments), !t || er(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, o = t.days ? ce(t.days) : 0, l = t.hours ? ce(t.hours) : 0, u = t.minutes ? ce(t.minutes) : 0, m = t.seconds ? ce(t.seconds) : 0, d = jt(e, r + n * 12), y = Xp(d, o + a * 7), p = u + l * 60, s = m + p * 60, h = s * 1e3, k = new Date(y.getTime() - h);
  return k;
}
function yy(e, t) {
  ae(2, arguments);
  var n = ce(t);
  return Fi(e, -n);
}
function zr() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      U("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      U("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      U("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function vy() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      U("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function pi() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function yi() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function iu() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      U("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function uu() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function su() {
  return v(), _(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      U("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const vi = (e, t, n, r) => {
  const a = To(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return rn(a) && Ui(a) ? r ? a : Je(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, hy = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return vi(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const l of t)
      if (o = vi(e, l, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, W = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), gy = (e, t) => {
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
}, _t = (e) => {
  let t = W(JSON.parse(JSON.stringify(e)));
  return t = au(t, 0), t = ou(t, 0), t = lu(t, 0), t = Ho(t, 0), t;
}, dt = (e, t, n, r) => {
  let a = e ? W(e) : W();
  return (t || t === 0) && (a = au(a, +t)), (n || n === 0) && (a = ou(a, +n)), (r || r === 0) && (a = lu(a, +r)), Ho(a, 0);
}, et = (e, t) => !e || !t ? !1 : Yo(_t(e), _t(t)), Ne = (e, t) => !e || !t ? !1 : Zi(_t(e), _t(t)), at = (e, t) => !e || !t ? !1 : Vo(_t(e), _t(t)), cu = (e, t, n) => e && e[0] && e[1] ? at(n, e[0]) && et(n, e[1]) : e && e[0] && t ? at(n, e[0]) && et(n, t) || et(n, e[0]) && at(n, t) : !1, nn = Ct({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), fu = () => {
  const e = (n) => {
    nn.menuFocused = n;
  }, t = (n) => {
    nn.shiftKeyInMenu !== n && (nn.shiftKeyInMenu = n);
  };
  return {
    control: g(() => ({ shiftKeyInMenu: nn.shiftKeyInMenu, menuFocused: nn.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = {}, by = {
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
})(by, Yr);
const _y = /* @__PURE__ */ zo(Yr);
var Fr = {}, wy = {
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
})(wy, Fr);
const hi = /* @__PURE__ */ zo(Fr);
function ky(e, t) {
  var n = Oy(t);
  return n.formatToParts ? Sy(n, e) : $y(n, e);
}
var xy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Sy(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = xy[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function $y(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var aa = {};
function Oy(e) {
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
function jo(e, t, n, r, a, o, l) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, l), u;
}
var gi = 36e5, Ty = 6e4, oa = {
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
    return o = parseInt(r[1], 10), bi(o) ? -(o * gi) : NaN;
  if (r = oa.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var l = parseInt(r[2], 10);
    return bi(o, l) ? (a = Math.abs(o) * gi + l * Ty, o > 0 ? -a : a) : NaN;
  }
  if (Dy(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : Py(t), m = Po(u, e), d = n ? m : Cy(t, m, e);
    return -d;
  }
  return NaN;
}
function Py(e) {
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
  var n = ky(e, t), r = jo(
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
function Cy(e, t, n) {
  var r = e.getTime(), a = r - t, o = Po(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var l = Po(new Date(a), n);
  return o === l ? o : Math.max(o, l);
}
function bi(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var _i = {};
function Dy(e) {
  if (_i[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _i[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ry = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const du = Ry;
var la = 36e5, wi = 6e4, My = 2, rt = {
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
  timeZone: du
};
function Co(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? My : _y(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Iy(e), o = Ny(a.date, r), l = o.year, u = o.restDateString, m = By(u, l);
  if (isNaN(m))
    return /* @__PURE__ */ new Date(NaN);
  if (m) {
    var d = m.getTime(), y = 0, p;
    if (a.time && (y = Ay(a.time), isNaN(y)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (p = qo(a.timeZone || n.timeZone, new Date(d + y)), isNaN(p))
        return /* @__PURE__ */ new Date(NaN);
    } else
      p = hi(new Date(d + y)), p = hi(new Date(d + y + p));
    return new Date(d + y + p);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Iy(e) {
  var t = {}, n = rt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = rt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = rt.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function Ny(e, t) {
  var n = rt.YYY[t], r = rt.YYYYY[t], a;
  if (a = rt.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = rt.YY.exec(e) || n.exec(e), a) {
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
function By(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = rt.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, xi(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var l = parseInt(n[1], 10);
    return Yy(t, l) ? (r.setUTCFullYear(t, 0, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return xi(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, Si(t, o) ? ki(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var m = parseInt(n[2], 10) - 1;
    return Si(t, o, m) ? ki(t, o, m) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Ay(e) {
  var t, n, r;
  if (t = rt.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ia(n) ? n % 24 * la : NaN;
  if (t = rt.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ia(n, r) ? n % 24 * la + r * wi : NaN;
  if (t = rt.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ia(n, r, a) ? n % 24 * la + r * wi + a * 1e3 : NaN;
  }
  return null;
}
function ki(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Ey = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Vy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function mu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function xi(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = mu(e);
    if (r && n > Vy[t] || !r && n > Ey[t])
      return !1;
  }
  return !0;
}
function Yy(e, t) {
  if (t < 1)
    return !1;
  var n = mu(e);
  return !(n && t > 366 || !n && t > 365);
}
function Si(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ia(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ur = {}, Fy = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Lr = {}, Uy = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
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
})(Uy, Lr);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(Lr);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(Fy, Ur);
const Ly = /* @__PURE__ */ zo(Ur);
function Wy(e, t, n) {
  var r = Co(e, n), a = qo(t, r, !0), o = new Date(r.getTime() - a), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
}
function Hy(e, t, n) {
  if (typeof e == "string" && !e.match(du)) {
    var r = Ly(n);
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
  ).getTime(), l = qo(t, new Date(o));
  return new Date(o + l);
}
const zy = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, jy = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, qy = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Gy = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Qy = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], He = (e) => {
  const t = f(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Zy = (e) => Object.assign({ type: "dot" }, e), pu = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Wr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Xe = (e) => e, $i = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Oi = (e) => Object.assign(
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
), Xy = (e) => Object.assign(
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
), Ky = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Jy = (e, t, n) => e || (typeof n == "string" ? n : t), ev = (e) => typeof e == "boolean" ? e ? Oi({}) : !1 : Oi(e), tv = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), nv = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), ct = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Wr.prop("partial-range"));
  }, n = g(() => ({
    ariaLabels: Xy(e.ariaLabels),
    textInputOptions: Object.assign(tv(), e.textInputOptions),
    multiCalendars: Ky(e.multiCalendars),
    previewFormat: Jy(e.previewFormat, e.format, o()),
    filters: nv(e.filters),
    transitions: ev(e.transitions),
    startTime: s()
  })), r = (i) => {
    if (e.range)
      return i();
    throw new Error(Wr.prop("range"));
  }, a = () => {
    const i = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${i}` : `hh:mm${i} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", l = (i, c) => {
    if (typeof e.format == "function")
      return e.format(i);
    const O = c || o(), S = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(i) ? `${an(i[0], O, S)} ${e.modelAuto && !i[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${i[1] ? an(i[1], O, S) : ""}` : an(i, O, S);
  }, u = (i) => e.timezone ? Wy(i, e.timezone) : i, m = (i) => e.timezone ? Hy(i, e.timezone) : i, d = g(() => (i) => {
    var c;
    return (c = e.hideNavigation) == null ? void 0 : c.includes(i);
  }), y = (i) => {
    const c = e.maxDate ? at(u(i), u(W(e.maxDate))) : !1, O = e.minDate ? et(u(i), u(W(e.minDate))) : !1, S = P(i, e.disabledDates), z = n.value.filters.months.map((j) => +j).includes(Me(i)), J = e.disabledWeekDays.length ? e.disabledWeekDays.some((j) => +j === _c(i)) : !1, Q = e.allowedDates.length ? !e.allowedDates.some((j) => Ne(u(W(j)), u(i))) : !1, C = Ie(i), w = C < +e.yearRange[0] || C > +e.yearRange[1];
    return !(c || O || S || z || w || J || Q);
  }, p = (i) => {
    const c = {
      hours: $t(W()),
      minutes: Ot(W()),
      seconds: e.enableSeconds ? Gt(W()) : 0
    };
    return Object.assign(c, i);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [p(e.startTime[0]), p(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? p(e.startTime) : null, h = (i) => !y(i), k = (i) => Array.isArray(i) ? rn(i[0]) && (i[1] ? rn(i[1]) : !0) : i ? rn(i) : !1, I = (i) => i instanceof Date ? i : Kp(i), B = (i) => {
    const c = Ft(u(i), { weekStartsOn: +e.weekStart }), O = ys(u(i), { weekStartsOn: +e.weekStart });
    return [c, O];
  }, P = (i, c) => Array.isArray(c) ? c.some((O) => Ne(u(W(O)), u(i))) : c(i), V = (i, c, O) => {
    let S = i ? W(i) : W();
    return (c || c === 0) && (S = on(S, c)), O && (S = Yt(S, O)), S;
  }, T = (i) => Je(W(), { hours: $t(i), minutes: Ot(i), seconds: Gt(i) }), Y = (i) => Je(W(), {
    hours: +i.hours || 0,
    minutes: +i.minutes || 0,
    seconds: +i.seconds || 0
  }), G = (i, c, O, S) => {
    if (!i)
      return !0;
    if (S) {
      const z = O === "max" ? Yo(i, c) : Vo(i, c), J = { seconds: 0, milliseconds: 0 };
      return z || Zi(Je(i, J), Je(c, J));
    }
    return O === "max" ? i.getTime() <= c.getTime() : i.getTime() >= c.getTime();
  }, X = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, ee = (i) => Array.isArray(i) ? [i[0] ? T(i[0]) : null, i[1] ? T(i[1]) : null] : T(i), A = (i) => {
    const c = e.maxTime ? Y(e.maxTime) : W(e.maxDate);
    return Array.isArray(i) ? G(i[0], c, "max", !!e.maxDate) && G(i[1], c, "max", !!e.maxDate) : G(i, c, "max", !!e.maxDate);
  }, x = (i, c) => {
    const O = e.minTime ? Y(e.minTime) : W(e.minDate);
    return Array.isArray(i) ? G(i[0], O, "min", !!e.minDate) && G(i[1], O, "min", !!e.minDate) && c : G(i, O, "min", !!e.minDate) && c;
  }, E = (i) => {
    let c = !0;
    if (!i || X())
      return !0;
    const O = !e.minDate && !e.maxDate ? ee(i) : i;
    return (e.maxTime || e.maxDate) && (c = A(Xe(O))), (e.minTime || e.minDate) && (c = x(Xe(O), c)), c;
  }, N = (i, c) => {
    const O = W(JSON.parse(JSON.stringify(i))), S = [];
    for (let z = 0; z < 7; z++) {
      const J = Dt(O, z), Q = Me(J) !== c;
      S.push({
        text: e.hideOffsetDates && Q ? "" : J.getDate(),
        value: J,
        current: !Q,
        classData: {}
      });
    }
    return S;
  }, Z = (i, c) => {
    const O = [], S = W(u(new Date(c, i))), z = W(u(new Date(c, i + 1, 0))), J = Ft(S, { weekStartsOn: e.weekStart }), Q = (C) => {
      const w = N(C, i);
      if (O.push({ days: w }), !O[O.length - 1].days.some(
        (j) => Ne(_t(j.value), _t(z))
      )) {
        const j = Dt(C, 7);
        Q(j);
      }
    };
    if (Q(J), e.sixWeeks && O.length < 6) {
      const C = 6 - O.length;
      for (let w = 1; w <= C; w++) {
        const j = O[O.length - 1], ke = j.days[j.days.length - 1], le = N(Dt(ke.value, 1), Me(S));
        O.push({ days: le });
      }
    }
    return O;
  }, q = (i, c, O) => [Je(W(i), { date: 1 }), Je(W(), { month: c, year: O, date: 1 })], ne = (i, c) => et(...q(e.minDate, i, c)) || Ne(...q(e.minDate, i, c)), D = (i, c) => at(...q(e.maxDate, i, c)) || Ne(...q(e.maxDate, i, c)), $ = (i, c, O) => {
    let S = !1;
    return e.maxDate && O && D(i, c) && (S = !0), e.minDate && !O && ne(i, c) && (S = !0), S;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: m,
    formatDate: l,
    getDefaultPattern: o,
    validateDate: y,
    getDefaultStartTime: s,
    isDisabled: h,
    isValidDate: k,
    sanitizeDate: I,
    getWeekFromDate: B,
    matchDate: P,
    setDateMonthOrYear: V,
    isValidTime: E,
    getCalendarDays: Z,
    validateMonthYearInRange: (i, c, O, S) => {
      let z = !1;
      return S ? e.minDate && e.maxDate ? z = $(i, c, O) : (e.minDate && ne(i, c) || e.maxDate && D(i, c)) && (z = !0) : z = !0, z;
    },
    validateMaxDate: D,
    validateMinDate: ne,
    assignDefaultTime: p,
    defaults: n,
    hideNavigationButtons: d
  };
}, Re = Ct({
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
}), ua = R(null), mn = R(!1), sa = R(!1), ca = R(!1), fa = R(!1), nt = R(0), Ze = R(0), Mt = () => {
  const e = g(() => mn.value ? [...Re.selectionGrid, Re.actionRow].filter((p) => p.length) : sa.value ? [
    ...Re.timePicker[0],
    ...Re.timePicker[1],
    fa.value ? [] : [ua.value],
    Re.actionRow
  ].filter((p) => p.length) : ca.value ? [...Re.monthPicker, Re.actionRow] : [Re.monthYear, ...Re.calendar, Re.time, Re.actionRow].filter((p) => p.length)), t = (p) => {
    nt.value = p ? nt.value + 1 : nt.value - 1;
    let s = null;
    e.value[Ze.value] && (s = e.value[Ze.value][nt.value]), s || (nt.value = p ? nt.value - 1 : nt.value + 1);
  }, n = (p) => {
    Ze.value === 0 && !p || Ze.value === e.value.length && p || (Ze.value = p ? Ze.value + 1 : Ze.value - 1, e.value[Ze.value] ? e.value[Ze.value] && !e.value[Ze.value][nt.value] && nt.value !== 0 && (nt.value = e.value[Ze.value].length - 1) : Ze.value = p ? Ze.value - 1 : Ze.value + 1);
  }, r = (p) => {
    let s = null;
    e.value[Ze.value] && (s = e.value[Ze.value][nt.value]), s ? s.focus({ preventScroll: !mn.value }) : nt.value = p ? nt.value - 1 : nt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, l = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, m = (p, s) => {
    Re[s] = p;
  }, d = (p, s) => {
    Re[s] = p;
  }, y = () => {
    nt.value = 0, Ze.value = 0;
  };
  return {
    buildMatrix: m,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (p) => {
      ua.value = p;
    },
    setSelectionGrid: (p) => {
      mn.value = p, y(), p || (Re.selectionGrid = []);
    },
    setTimePicker: (p, s = !1) => {
      sa.value = p, fa.value = s, y(), p || (Re.timePicker[0] = [], Re.timePicker[1] = []);
    },
    setTimePickerElements: (p, s = 0) => {
      Re.timePicker[s] = p;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: l,
    arrowDown: u,
    clearArrowNav: () => {
      Re.monthYear = [], Re.calendar = [], Re.time = [], Re.actionRow = [], Re.selectionGrid = [], Re.timePicker[0] = [], Re.timePicker[1] = [], mn.value = !1, sa.value = !1, fa.value = !1, ca.value = !1, y(), ua.value = null;
    },
    setMonthPicker: (p) => {
      ca.value = p, y();
    },
    refSets: Re
    // exposed for testing
  };
}, Ti = (e) => Array.isArray(e), At = (e) => Array.isArray(e), Pi = (e) => Array.isArray(e) && e.length === 2, rv = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: l,
    sanitizeDate: u,
    getWeekFromDate: m,
    setDateMonthOrYear: d,
    validateMonthYearInRange: y,
    defaults: p
  } = ct(e), s = g({
    get: () => e.internalModelValue,
    set: (b) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", b);
    }
  }), h = R([]);
  Qe(s, () => {
    G();
  });
  const k = R([{ month: Me(W()), year: Ie(W()) }]), I = Ct({
    hours: e.range ? [$t(W()), $t(W())] : $t(W()),
    minutes: e.range ? [Ot(W()), Ot(W())] : Ot(W()),
    seconds: e.range ? [0, 0] : 0
  }), B = g(
    () => (b) => k.value[b] ? k.value[b].month : 0
  ), P = g(
    () => (b) => k.value[b] ? k.value[b].year : 0
  ), V = g(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), T = (b, L, ie) => {
    var se, Ae;
    k.value[b] || (k.value[b] = { month: 0, year: 0 }), k.value[b].month = L === null ? (se = k.value[b]) == null ? void 0 : se.month : L, k.value[b].year = ie === null ? (Ae = k.value[b]) == null ? void 0 : Ae.year : ie;
  }, Y = (b, L) => {
    I[b] = L;
  };
  ze(() => {
    s.value || (e.startDate && (T(0, Me(W(e.startDate)), Ie(W(e.startDate))), p.value.multiCalendars && Pe(0)), p.value.startTime && D()), G(!0);
  });
  const G = (b = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (h.value = s.value, E(b)) : ee(s.value);
    if (e.timePicker)
      return N();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return q();
    if (p.value.multiCalendars && b && !e.startDate)
      return X(W(), b);
  }, X = (b, L = !1) => {
    if ((!p.value.multiCalendars || !e.multiStatic || L) && T(0, Me(b), Ie(b)), p.value.multiCalendars)
      for (let ie = 1; ie < p.value.multiCalendars; ie++) {
        const se = Je(W(), { month: B.value(ie - 1), year: P.value(ie - 1) }), Ae = Yi(se, { months: 1 });
        k.value[ie] = { month: Me(Ae), year: Ie(Ae) };
      }
  }, ee = (b) => {
    X(b), Y("hours", $t(b)), Y("minutes", Ot(b)), Y("seconds", Gt(b));
  }, A = (b, L) => {
    X(b[0], L);
    const ie = (se, Ae) => [
      se(b[0]),
      b[1] ? se(b[1]) : I[Ae][1]
    ];
    Y("hours", ie($t, "hours")), Y("minutes", ie(Ot, "minutes")), Y("seconds", ie(Gt, "seconds"));
  }, x = (b, L) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return A(b, L);
    if (e.multiDates) {
      const ie = b[b.length - 1];
      return ee(ie);
    }
  }, E = (b) => {
    const L = s.value;
    x(L, b), p.value.multiCalendars && e.multiCalendarsSolo && i();
  }, N = () => {
    if (D(), !e.range)
      s.value = dt(W(), I.hours, I.minutes, ne());
    else {
      const b = I.hours, L = I.minutes;
      s.value = [
        dt(W(), b[0], L[0], ne()),
        dt(W(), b[1], L[1], ne(!1))
      ];
    }
  }, Z = () => {
    s.value = d(W(), B.value(0), P.value(0));
  }, q = () => {
    s.value = W();
  }, ne = (b = !0) => e.enableSeconds ? Array.isArray(I.seconds) ? b ? I.seconds[0] : I.seconds[1] : I.seconds : 0, D = () => {
    const b = o();
    if (b) {
      const L = Array.isArray(b), ie = L ? [+b[0].hours, +b[1].hours] : +b.hours, se = L ? [+b[0].minutes, +b[1].minutes] : +b.minutes, Ae = L ? [+b[0].seconds, +b[1].seconds] : +b.seconds;
      Y("hours", ie), Y("minutes", se), e.enableSeconds && Y("seconds", Ae);
    }
  }, $ = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, i = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const b = W(
        W(s.value[1] ? s.value[1] : gt(s.value[0], 1))
      ), [L, ie] = [Me(s.value[0]), Ie(s.value[0])], [se, Ae] = [Me(s.value[1]), Ie(s.value[1])];
      (L !== se || L === se && ie !== Ae) && e.multiCalendarsSolo && T(1, Me(b), Ie(b));
    }
  }, c = (b) => {
    const L = gt(b, 1);
    return { month: Me(L), year: Ie(L) };
  }, O = (b) => {
    const L = Me(W(b)), ie = Ie(W(b));
    if (T(0, L, ie), p.value.multiCalendars > 0)
      for (let se = 1; se < p.value.multiCalendars; se++) {
        const Ae = c(
          Je(W(b), { year: B.value(se - 1), month: P.value(se - 1) })
        );
        T(se, Ae.month, Ae.year);
      }
  }, S = (b) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((L) => Ne(b, L))) {
        const L = s.value.filter((ie) => !Ne(ie, b));
        s.value = L.length ? L : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(b);
    else
      s.value = [b];
  }, z = (b, L) => {
    const ie = at(b, L) ? L : b, se = at(L, b) ? L : b;
    return el({ start: ie, end: se });
  }, J = (b, L = 0) => {
    if (Array.isArray(s.value) && s.value[L]) {
      const ie = ms(b, s.value[L]), se = z(s.value[L], b), Ae = se.length === 1 ? 0 : se.filter((kt) => l(kt)).length, st = Math.abs(ie) - Ae;
      if (e.minRange && e.maxRange)
        return st >= +e.minRange && st <= +e.maxRange;
      if (e.minRange)
        return st >= +e.minRange;
      if (e.maxRange)
        return st <= +e.maxRange;
    }
    return !0;
  }, Q = (b) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (at(b, s.value[0]) || Ne(b, s.value[0])) ? [s.value[0], b] : e.fixedEnd && (et(b, s.value[1]) || Ne(b, s.value[1])) ? [b, s.value[1]] : (t("invalid-fixed-range", b), s.value) : [], C = () => {
    e.autoApply && V.value && t("auto-apply", e.partialFlow);
  }, w = () => {
    e.autoApply && t("select-date");
  }, j = (b) => !el({ start: b[0], end: b[1] }).some((L) => l(L)), ke = (b) => (s.value = m(W(b.value)), C()), le = (b) => {
    const L = dt(W(b.value), I.hours, I.minutes, ne());
    e.multiDates ? S(L) : s.value = L, n(), C();
  }, ve = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Be = (b, L) => {
    const ie = [W(b.value), Dt(W(b.value), +e.autoRange)];
    j(ie) && (L && O(b.value), h.value = ie);
  }, ut = (b) => {
    he(b.value) || !J(b.value, e.fixedStart ? 0 : 1) || (h.value = Q(W(b.value)));
  }, he = (b) => e.noDisabledRange ? z(h.value[0], b).some((L) => l(L)) : !1, ft = (b, L) => {
    if (ve(), e.autoRange)
      return Be(b, L);
    if (e.fixedStart || e.fixedEnd)
      return ut(b);
    h.value[0] ? J(W(b.value)) && !he(b.value) && (et(W(b.value), W(h.value[0])) ? h.value.unshift(W(b.value)) : h.value[1] = W(b.value)) : h.value[0] = W(b.value);
  }, ot = (b) => {
    h.value[b] = dt(
      h.value[b],
      I.hours[b],
      I.minutes[b],
      ne(b !== 1)
    );
  }, qe = () => {
    h.value.length && (h.value[0] && !h.value[1] ? ot(0) : (ot(0), ot(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Zt = (b, L = !1) => {
    if (!(l(b.value) || !b.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return ke(b);
      if (!e.range)
        return le(b);
      At(I.hours) && At(I.minutes) && !e.multiDates && (ft(b, L), qe());
    }
  }, ge = (b) => {
    const L = b[0];
    return e.weekNumbers === "local" ? Tc(L.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? xc(L.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(L.value) : "";
  }, Pe = (b) => {
    for (let L = b - 1; L >= 0; L--) {
      const ie = jt(Je(W(), { month: B.value(L + 1), year: P.value(L + 1) }), 1);
      T(L, Me(ie), Ie(ie));
    }
    for (let L = b + 1; L <= p.value.multiCalendars - 1; L++) {
      const ie = gt(Je(W(), { month: B.value(L - 1), year: P.value(L - 1) }), 1);
      T(L, Me(ie), Ie(ie));
    }
  }, $e = (b) => d(W(), B.value(b), P.value(b)), Nt = (b) => dt(b, I.hours, I.minutes, ne()), Bt = (b, L) => {
    const ie = e.monthPicker ? B.value(b) !== L.month || !L.fromNav : P.value(b) !== L.year;
    if (T(b, L.month, L.year), p.value.multiCalendars && !e.multiCalendarsSolo && Pe(b), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (ie) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? et($e(b), se[0]) ? se.unshift($e(b)) : se[1] = $e(b) : se = [$e(b)], s.value = se;
        }
      } else
        s.value = $e(b);
    t("update-month-year", { instance: b, month: L.month, year: L.year }), r(e.multiCalendarsSolo ? b : void 0);
  }, Qr = async (b = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await it();
      const L = e.monthPicker ? b : !1;
      e.range ? t("auto-apply", L || !s.value || s.value.length === 1) : t("auto-apply", L);
    }
    n();
  }, sn = (b, L) => {
    const ie = Je(W(), { month: B.value(L), year: P.value(L) }), se = b < 0 ? gt(ie, 1) : jt(ie, 1);
    y(Me(se), Ie(se), b < 0, e.preventMinMaxNavigation) && (T(L, Me(se), Ie(se)), p.value.multiCalendars && !e.multiCalendarsSolo && Pe(L), t("update-month-year", { instance: L, month: Me(se), year: Ie(se) }), r());
  }, Xt = (b) => {
    Ti(b) && Ti(s.value) && At(I.hours) && At(I.minutes) ? (b[0] && s.value[0] && (s.value[0] = dt(b[0], I.hours[0], I.minutes[0], ne())), b[1] && s.value[1] && (s.value[1] = dt(b[1], I.hours[1], I.minutes[1], ne(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(b) : !e.range && !Pi(b) && (s.value = Nt(b)), t("time-update");
  }, Zr = (b, L = !0, ie = !1) => {
    const se = L ? b : I.hours, Ae = !L && !ie ? b : I.minutes, st = ie ? b : I.seconds;
    if (e.range && Pi(s.value) && At(se) && At(Ae) && At(st) && !e.disableTimeRangeValidation) {
      const kt = (F) => dt(s.value[F], se[F], Ae[F], st[F]), Kt = (F) => Ho(s.value[F], 0);
      if (Ne(s.value[0], s.value[1]) && (Vo(kt(0), Kt(1)) || Yo(kt(1), Kt(0))))
        return;
    }
    if (Y("hours", se), Y("minutes", Ae), Y("seconds", st), s.value)
      if (e.multiDates) {
        const kt = $();
        kt && Xt(kt);
      } else
        Xt(s.value);
    else
      e.timePicker && Xt(e.range ? [W(), W()] : W());
    n();
  }, Xr = (b, L) => {
    e.monthChangeOnScroll && sn(e.monthChangeOnScroll !== "inverse" ? -b.deltaY : b.deltaY, L);
  }, Kr = (b, L, ie = !1) => {
    e.monthChangeOnArrows && e.vertical === ie && cn(b, L);
  }, cn = (b, L) => {
    sn(b === "right" ? -1 : 1, L);
  };
  return {
    time: I,
    month: B,
    year: P,
    modelValue: s,
    calendars: k,
    monthYearSelect: Qr,
    isDisabled: l,
    updateTime: Zr,
    getWeekNum: ge,
    selectDate: Zt,
    updateMonthYear: Bt,
    handleScroll: Xr,
    getMarker: (b) => e.markers.find((L) => Ne(u(b.value), u(L.date))),
    handleArrow: Kr,
    handleSwipe: cn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = et(W(), s.value[0]) ? [W(), s.value[0]] : [s.value[0], W()] : s.value = [W()] : s.value = W(), w();
    },
    presetDateRange: (b, L) => {
      L || b.length && b.length <= 2 && e.range && (s.value = b.map((ie) => W(ie)), w(), e.multiCalendars && it().then(() => G(!0)));
    }
  };
}, av = (e, t, n) => {
  const r = R(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: l,
    getDefaultPattern: u,
    checkRangeEnabled: m,
    checkPartialRangeValue: d,
    isValidDate: y,
    setDateMonthOrYear: p,
    defaults: s
  } = ct(t), h = R(""), k = nr(t, "format");
  Qe(r, () => {
    e("internal-model-change", r.value);
  }), Qe(k, () => {
    c();
  });
  const I = (C) => {
    const w = C || W();
    return t.modelType ? S(w) : {
      hours: $t(w),
      minutes: Ot(w),
      seconds: t.enableSeconds ? Gt(w) : 0
    };
  }, B = (C) => t.modelType ? S(C) : { month: Me(C), year: Ie(C) }, P = (C) => Array.isArray(C) ? m(() => [
    Yt(W(), C[0]),
    C[1] ? Yt(W(), C[1]) : d()
  ]) : Yt(W(), +C), V = (C, w) => (typeof C == "string" || typeof C == "number") && t.modelType ? O(C) : w, T = (C) => Array.isArray(C) ? [
    V(
      C[0],
      dt(null, +C[0].hours, +C[0].minutes, C[0].seconds)
    ),
    V(
      C[1],
      dt(null, +C[1].hours, +C[1].minutes, C[1].seconds)
    )
  ] : V(C, dt(null, C.hours, C.minutes, C.seconds)), Y = (C) => Array.isArray(C) ? m(() => [
    V(C[0], p(null, +C[0].month, +C[0].year)),
    V(
      C[1],
      C[1] ? p(null, +C[1].month, +C[1].year) : d()
    )
  ]) : V(C, p(null, +C.month, +C.year)), G = (C) => {
    if (Array.isArray(C))
      return C.map((w) => O(w));
    throw new Error(Wr.dateArr("multi-dates"));
  }, X = (C) => {
    if (Array.isArray(C))
      return [W(C[0]), W(C[1])];
    throw new Error(Wr.dateArr("week-picker"));
  }, ee = (C) => t.modelAuto ? Array.isArray(C) ? [O(C[0]), O(C[1])] : t.autoApply ? [O(C)] : [O(C), null] : Array.isArray(C) ? m(() => [
    O(C[0]),
    C[1] ? O(C[1]) : d()
  ]) : O(C), A = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(d());
  }, x = () => {
    const C = r.value;
    return [
      S(C[0]),
      C[1] ? S(C[1]) : d()
    ];
  }, E = () => r.value[1] ? x() : S(Xe(r.value[0])), N = () => (r.value || []).map((C) => S(C)), Z = () => (A(), t.modelAuto ? E() : t.multiDates ? N() : Array.isArray(r.value) ? m(() => x()) : S(Xe(r.value))), q = (C) => C ? t.timePicker ? T(Xe(C)) : t.monthPicker ? Y(Xe(C)) : t.yearPicker ? P(Xe(C)) : t.multiDates ? G(Xe(C)) : t.weekPicker ? X(Xe(C)) : ee(Xe(C)) : null, ne = (C) => {
    const w = q(C);
    y(Xe(w)) ? (r.value = Xe(w), c()) : (r.value = null, h.value = "");
  }, D = () => {
    var C;
    const w = (j) => {
      var ke;
      return an(j, (ke = s.value.textInputOptions) == null ? void 0 : ke.format);
    };
    return `${w(r.value[0])} ${(C = s.value.textInputOptions) == null ? void 0 : C.rangeSeparator} ${r.value[1] ? w(r.value[1]) : ""}`;
  }, $ = () => {
    var C;
    return n.value && r.value ? Array.isArray(r.value) ? D() : an(r.value, (C = s.value.textInputOptions) == null ? void 0 : C.format) : l(r.value);
  }, i = () => {
    var C;
    return r.value ? t.multiDates ? r.value.map((w) => l(w)).join("; ") : t.textInput && typeof ((C = s.value.textInputOptions) == null ? void 0 : C.format) == "string" ? $() : l(r.value) : "";
  }, c = () => {
    !t.format || typeof t.format == "string" ? h.value = i() : h.value = t.format(r.value);
  }, O = (C) => {
    if (t.utc) {
      const w = new Date(C);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(C)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? To(C, u(), /* @__PURE__ */ new Date()) : o(To(C, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(C));
  }, S = (C) => C ? t.utc ? gy(C, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(C) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? l(a(C)) : l(a(C), t.modelType) : a(C) : "", z = (C) => {
    e("update:model-value", C);
  }, J = (C) => Array.isArray(r.value) ? [
    C(r.value[0]),
    r.value[1] ? C(r.value[1]) : d()
  ] : C(Xe(r.value)), Q = (C) => z(Xe(J(C)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ne,
    formatInputValue: c,
    emitModelValue: () => (c(), t.monthPicker ? Q(B) : t.timePicker ? Q(I) : t.yearPicker ? Q(Ie) : t.weekPicker ? z(r.value) : z(Z()))
  };
}, ov = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = ct(e), l = (p, s) => {
    let h = p;
    return o.value.filters.months.includes(Me(h)) ? (h = s ? gt(p, 1) : jt(p, 1), l(h, s)) : h;
  }, u = (p, s) => {
    let h = p;
    return o.value.filters.years.includes(Ie(h)) ? (h = s ? Fi(p, 1) : yy(p, 1), u(h, s)) : h;
  }, m = (p) => {
    const s = Je(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let h = p ? gt(s, 1) : jt(s, 1), k = Me(h), I = Ie(h);
    o.value.filters.months.includes(k) && (h = l(h, p), k = Me(h), I = Ie(h)), o.value.filters.years.includes(I) && (h = u(h, p), I = Ie(h)), n(k, I, p, e.preventMinMaxNavigation) && d(k, I);
  }, d = (p, s) => {
    t("update-month-year", { month: p, year: s });
  }, y = g(() => (p) => {
    if (!e.preventMinMaxNavigation || p && !e.maxDate || !p && !e.minDate)
      return !1;
    const s = Je(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), h = p ? gt(s, 1) : jt(s, 1), k = [Me(h), Ie(h)];
    return p ? !r(...k) : !a(...k);
  });
  return { handleMonthYearChange: m, isDisabled: y, updateMonthYear: d };
};
var tr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(tr || {});
const lv = (e, t, n, r) => {
  const a = R({
    top: "0",
    left: "0",
    transform: "none"
  }), o = R(!1), l = nr(r, "teleportCenter");
  Qe(l, () => {
    I();
  });
  const u = (A) => {
    if (r.teleport) {
      const x = A.getBoundingClientRect();
      return {
        left: x.left + window.scrollX,
        top: x.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, m = (A, x) => {
    a.value.left = `${A + x}px`, a.value.transform = "translateX(-100%)";
  }, d = (A) => {
    a.value.left = `${A}px`, a.value.transform = "translateX(0)";
  }, y = (A, x, E = !1) => {
    r.position === tr.left && d(A), r.position === tr.right && m(A, x), r.position === tr.center && (a.value.left = `${A + x / 2}px`, a.value.transform = E ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, p = (A) => {
    const { width: x, height: E } = A.getBoundingClientRect(), { top: N, left: Z } = r.altPosition ? r.altPosition(A) : u(A);
    return { top: +N, left: +Z, width: x, height: E };
  }, s = () => {
    const A = He(t);
    if (A) {
      const { top: x, left: E, width: N, height: Z } = p(A);
      a.value.top = `${x + Z / 2}px`, a.value.transform = "translateY(-50%)", y(E, N, !0);
    }
  }, h = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, k = () => {
    const A = He(t), { top: x, left: E, transform: N } = r.altPosition(A);
    a.value = { top: `${x}px`, left: `${E}px`, transform: N || "" };
  }, I = (A = !0) => {
    if (!r.inline)
      return l.value ? h() : r.altPosition !== null ? k() : (A && n("recalculate-position"), G());
  }, B = ({
    inputEl: A,
    menuEl: x,
    left: E,
    width: N
  }) => {
    window.screen.width > 768 && y(E, N), T(A, x);
  }, P = (A, x) => {
    const { top: E, left: N, height: Z, width: q } = p(A);
    a.value.top = `${Z + E + +r.offset}px`, B({ inputEl: A, menuEl: x, left: N, width: q }), o.value = !1;
  }, V = (A, x) => {
    const { top: E, left: N, width: Z } = p(A), { height: q } = x.getBoundingClientRect();
    a.value.top = `${E - q - +r.offset}px`, B({ inputEl: A, menuEl: x, left: N, width: Z }), o.value = !0;
  }, T = (A, x) => {
    if (r.autoPosition) {
      const { left: E, width: N } = p(A), { left: Z, right: q } = x.getBoundingClientRect();
      return Z <= 0 || Z <= E ? d(E) : q >= document.documentElement.clientWidth ? m(E, N) : y(E, N);
    }
  }, Y = (A, x) => {
    const { height: E } = x.getBoundingClientRect(), { top: N, height: Z } = A.getBoundingClientRect(), q = window.innerHeight - N - Z, ne = N;
    return E <= q ? P(A, x) : E > q && E <= ne ? V(A, x) : q >= ne ? P(A, x) : V(A, x);
  }, G = () => {
    const A = He(t), x = He(e);
    if (A && x)
      return r.autoPosition ? Y(A, x) : P(A, x);
  }, X = function(A) {
    if (A) {
      const x = A.scrollHeight > A.clientHeight, E = window.getComputedStyle(A).overflowY.indexOf("hidden") !== -1;
      return x && !E;
    }
    return !0;
  }, ee = function(A) {
    return !A || A === document.body ? window : X(A) ? A : ee(A.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: I, setInitialPosition: s, getScrollableParent: ee };
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
], iv = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], uv = {
  all: () => zt,
  monthYear: () => zt.filter((e) => e.use.includes("month-year")),
  input: () => iv,
  timePicker: () => zt.filter((e) => e.use.includes("time")),
  action: () => zt.filter((e) => e.use.includes("action")),
  calendar: () => zt.filter((e) => e.use.includes("calendar")),
  menu: () => zt.filter((e) => e.use.includes("menu"))
}, Vt = (e, t, n) => {
  const r = [];
  return uv[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, jr = (e) => ({ transitionName: g(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), It = {
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
}, sv = ["aria-label", "aria-disabled", "aria-readonly"], cv = {
  key: 1,
  class: "dp__input_wrap"
}, fv = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], dv = {
  key: 2,
  class: "dp__input_icon"
}, mv = {
  key: 4,
  class: "dp__clear_icon"
}, pv = /* @__PURE__ */ re({
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: l, getDefaultStartTime: u, assignDefaultTime: m } = ct(r), d = R(), y = R(null), p = R(!1), s = g(
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
    }, k = (x) => {
      var E;
      const N = u();
      return hy(
        x,
        ((E = l.value.textInputOptions) == null ? void 0 : E.format) || a(),
        N || m({}),
        r.inputValue
      );
    }, I = (x) => {
      const { rangeSeparator: E } = l.value.textInputOptions, [N, Z] = x.split(`${E}`);
      if (N) {
        const q = k(N.trim()), ne = Z ? k(Z.trim()) : null, D = q && ne ? [q, ne] : [q];
        d.value = q ? D : null;
      }
    }, B = (x) => {
      if (r.range)
        I(x);
      else if (r.multiDates) {
        const E = x.split(";");
        d.value = E.map((N) => k(N.trim())).filter((N) => N);
      } else
        d.value = k(x);
    }, P = (x) => {
      var E;
      const { value: N } = x.target;
      N !== "" ? ((E = l.value.textInputOptions) != null && E.openMenu && !r.isMenuOpen && n("open"), B(N), n("set-input-date", d.value)) : h(), n("update:input-value", N);
    }, V = () => {
      var x, E;
      (x = l.value.textInputOptions) != null && x.enterSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (E = l.value.textInputOptions) != null && E.enterSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, T = () => {
      var x, E;
      (x = l.value.textInputOptions) != null && x.tabSubmit && o(d.value) && r.inputValue !== "" ? (n("set-input-date", d.value, !0), d.value = null) : (E = l.value.textInputOptions) != null && E.tabSubmit && r.inputValue === "" && (d.value = null, n("clear"));
    }, Y = () => {
      p.value = !0, n("focus");
    }, G = (x) => {
      var E;
      x.preventDefault(), x.stopImmediatePropagation(), x.stopPropagation(), r.textInput && (E = l.value.textInputOptions) != null && E.openMenu && !r.inlineWithInput ? r.isMenuOpen ? l.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, X = () => {
      p.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && d.value && (n("set-input-date", d.value), n("select-date"), d.value = null);
    }, ee = () => {
      n("clear");
    }, A = (x) => {
      r.textInput || x.preventDefault();
    };
    return t({
      focusInput: () => {
        y.value && y.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (x) => {
        d.value = x;
      }
    }), (x, E) => {
      var N;
      return v(), _("div", {
        onClick: G,
        "aria-label": (N = f(l).ariaLabels) == null ? void 0 : N.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": x.disabled,
        "aria-readonly": x.readonly
      }, [
        x.$slots.trigger && !x.$slots["dp-input"] && !x.inline ? H(x.$slots, "trigger", { key: 0 }) : M("", !0),
        !x.$slots.trigger && (!x.inline || x.inlineWithInput) ? (v(), _("div", cv, [
          x.$slots["dp-input"] && !x.$slots.trigger && !x.inline ? H(x.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: P,
            onEnter: V,
            onTab: T,
            onClear: ee
          }) : M("", !0),
          x.$slots["dp-input"] ? M("", !0) : (v(), _("input", {
            key: 1,
            ref_key: "inputRef",
            ref: y,
            id: x.uid ? `dp-input-${x.uid}` : void 0,
            name: x.name,
            class: de(f(s)),
            inputmode: x.textInput ? "text" : "none",
            placeholder: x.placeholder,
            disabled: x.disabled,
            readonly: x.readonly,
            required: x.required,
            value: e.inputValue,
            autocomplete: x.autocomplete,
            onInput: P,
            onKeydown: [
              _e(G, ["enter"]),
              _e(T, ["tab"]),
              A
            ],
            onBlur: X,
            onFocus: Y,
            onKeypress: A
          }, null, 42, fv)),
          x.$slots["input-icon"] && !x.hideInputIcon ? (v(), _("span", dv, [
            H(x.$slots, "input-icon")
          ])) : M("", !0),
          !x.$slots["input-icon"] && !x.hideInputIcon && !x.$slots["dp-input"] ? (v(), te(f(zr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : M("", !0),
          x.$slots["clear-icon"] && e.inputValue && x.clearable && !x.disabled && !x.readonly ? (v(), _("span", mv, [
            H(x.$slots, "clear-icon", { clear: ee })
          ])) : M("", !0),
          x.clearable && !x.$slots["clear-icon"] && e.inputValue && !x.disabled && !x.readonly ? (v(), te(f(vy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: De(ee, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : M("", !0)
        ])) : M("", !0)
      ], 8, sv);
    };
  }
}), yv = { class: "dp__selection_preview" }, vv = { class: "dp__action_buttons" }, hv = ["onKeydown"], gv = /* @__PURE__ */ re({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = ct(n), { buildMatrix: l } = Mt(), u = R(null), m = R(null);
    ze(() => {
      n.arrowNavigation && l([He(u), He(m)], "actionRow");
    });
    const d = g(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), y = g(() => !s.value || !h.value || !d.value), p = g(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: y.value
    })), s = g(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = g(() => n.monthPicker ? P(n.internalModelValue) : !0), k = () => {
      const T = o.value.previewFormat;
      return n.timePicker || n.monthPicker, T(Xe(n.internalModelValue));
    }, I = () => {
      const T = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(T[0])} - ${r(T[1])}` : [r(T[0]), r(T[1])];
    }, B = g(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? I() : n.multiDates ? n.internalModelValue.map((T) => `${r(T)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : k()), P = (T) => {
      if (!n.monthPicker)
        return !0;
      let Y = !0;
      return n.minDate && n.maxDate ? at(W(T), W(n.minDate)) && et(W(T), W(n.maxDate)) : (n.minDate && (Y = at(W(T), W(n.minDate))), n.maxDate && (Y = et(W(T), W(n.maxDate))), Y);
    }, V = () => {
      s.value && h.value && d.value ? t("select-date") : t("invalid-select");
    };
    return (T, Y) => (v(), _("div", {
      class: "dp__action_row",
      style: St(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      T.$slots["action-row"] ? H(T.$slots, "action-row", Ke(Ge({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: f(y),
        selectDate: () => T.$emit("select-date"),
        closePicker: () => T.$emit("close-picker")
      }))) : (v(), _(fe, { key: 1 }, [
        U("div", yv, [
          T.$slots["action-preview"] ? H(T.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          T.$slots["action-preview"] ? M("", !0) : (v(), _(fe, { key: 1 }, [
            Array.isArray(f(B)) ? M("", !0) : (v(), _(fe, { key: 0 }, [
              Ce(ye(f(B)), 1)
            ], 64)),
            Array.isArray(f(B)) ? (v(!0), _(fe, { key: 1 }, Te(f(B), (G, X) => (v(), _("div", { key: X }, ye(G), 1))), 128)) : M("", !0)
          ], 64))
        ]),
        U("div", vv, [
          T.$slots["action-select"] ? H(T.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : M("", !0),
          T.$slots["action-select"] ? M("", !0) : (v(), _(fe, { key: 1 }, [
            T.inline ? M("", !0) : (v(), _("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: Y[0] || (Y[0] = (G) => T.$emit("close-picker")),
              onKeydown: [
                Y[1] || (Y[1] = _e((G) => T.$emit("close-picker"), ["enter"])),
                Y[2] || (Y[2] = _e((G) => T.$emit("close-picker"), ["space"]))
              ]
            }, ye(T.cancelText), 545)),
            U("span", {
              class: de(f(p)),
              tabindex: "0",
              onKeydown: [
                _e(V, ["enter"]),
                _e(V, ["space"])
              ],
              onClick: V,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: m
            }, ye(T.selectText), 43, hv)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), bv = ["aria-label"], _v = {
  class: "dp__calendar_header",
  role: "row"
}, wv = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, kv = /* @__PURE__ */ U("div", { class: "dp__calendar_header_separator" }, null, -1), xv = ["aria-label"], Sv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, $v = { class: "dp__cell_inner" }, Ov = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Tv = /* @__PURE__ */ re({
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: l } = ct(r), u = R(null), m = R({
      bottom: "",
      left: "",
      transform: ""
    }), d = R([]), y = R(null), p = R(!0), s = R(""), h = R({ startX: 0, endX: 0, startY: 0, endY: 0 }), k = R([]), I = R({ left: "50%" }), B = g(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : jy(r.locale, +r.weekStart));
    ze(() => {
      n("mount", { cmp: "calendar", refs: d }), r.noSwipe || y.value && (y.value.addEventListener("touchstart", N, { passive: !1 }), y.value.addEventListener("touchend", Z, { passive: !1 }), y.value.addEventListener("touchmove", q, { passive: !1 })), r.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", $, { passive: !1 });
    });
    const P = (i) => i ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", V = (i, c) => {
      if (r.transitions) {
        const O = _t(o(W(), r.month, r.year));
        s.value = at(_t(o(W(), i, c)), O) ? l.value.transitions[P(!0)] : l.value.transitions[P(!1)], p.value = !1, it(() => {
          p.value = !0;
        });
      }
    }, T = g(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), Y = g(() => (i) => {
      const c = Zy(i);
      return {
        dp__marker_dot: c.type === "dot",
        dp__marker_line: c.type === "line"
      };
    }), G = g(() => (i) => Ne(i, u.value)), X = g(() => ({
      dp__calendar: !0,
      dp__calendar_next: l.value.multiCalendars > 0 && r.instance !== 0
    })), ee = g(() => (i) => r.hideOffsetDates ? i.current : !0), A = g(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), x = async (i, c, O) => {
      var S, z;
      if (n("set-hover-date", i), (z = (S = i.marker) == null ? void 0 : S.tooltip) != null && z.length) {
        const J = He(d.value[c][O]);
        if (J) {
          const { width: Q, height: C } = J.getBoundingClientRect();
          u.value = i.value;
          let w = { left: `${Q / 2}px` }, j = -50;
          if (await it(), k.value[0]) {
            const { left: ke, width: le } = k.value[0].getBoundingClientRect();
            ke < 0 && (w = { left: "0" }, j = 0, I.value.left = `${Q / 2}px`), window.innerWidth < ke + le && (w = { right: "0" }, j = 0, I.value.left = `${le - Q / 2}px`);
          }
          m.value = {
            bottom: `${C}px`,
            ...w,
            transform: `translateX(${j}%)`
          }, n("tooltip-open", i.marker);
        }
      }
    }, E = (i) => {
      u.value && (u.value = null, m.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", i.marker));
    }, N = (i) => {
      h.value.startX = i.changedTouches[0].screenX, h.value.startY = i.changedTouches[0].screenY;
    }, Z = (i) => {
      h.value.endX = i.changedTouches[0].screenX, h.value.endY = i.changedTouches[0].screenY, ne();
    }, q = (i) => {
      r.vertical && !r.inline && i.preventDefault();
    }, ne = () => {
      const i = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${i}`] - h.value[`end${i}`]) > 10 && n("handle-swipe", h.value[`start${i}`] > h.value[`end${i}`] ? "right" : "left");
    }, D = (i, c, O) => {
      i && (Array.isArray(d.value[c]) ? d.value[c][O] = i : d.value[c] = [i]), r.arrowNavigation && a(d.value, "calendar");
    }, $ = (i) => {
      r.monthChangeOnScroll && (i.preventDefault(), n("handle-scroll", i));
    };
    return t({ triggerTransition: V }), (i, c) => {
      var O;
      return v(), _("div", {
        class: de(f(X))
      }, [
        U("div", {
          style: St(f(A))
        }, [
          e.specificMode ? M("", !0) : (v(), _("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: y,
            class: de(f(T)),
            role: "grid",
            "aria-label": (O = f(l).ariaLabels) == null ? void 0 : O.calendarWrap
          }, [
            U("div", _v, [
              i.weekNumbers ? (v(), _("div", wv, ye(i.weekNumName), 1)) : M("", !0),
              (v(!0), _(fe, null, Te(f(B), (S, z) => (v(), _("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: z,
                "data-test": "calendar-header"
              }, [
                i.$slots["calendar-header"] ? H(i.$slots, "calendar-header", {
                  key: 0,
                  day: S,
                  index: z
                }) : M("", !0),
                i.$slots["calendar-header"] ? M("", !0) : (v(), _(fe, { key: 1 }, [
                  Ce(ye(S), 1)
                ], 64))
              ]))), 128))
            ]),
            kv,
            pe(yt, {
              name: s.value,
              css: !!i.transitions
            }, {
              default: K(() => {
                var S;
                return [
                  p.value ? (v(), _("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (S = f(l).ariaLabels) == null ? void 0 : S.calendarDays
                  }, [
                    (v(!0), _(fe, null, Te(e.mappedDates, (z, J) => (v(), _("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: J
                    }, [
                      i.weekNumbers ? (v(), _("div", Sv, [
                        U("div", $v, ye(e.getWeekNum(z.days)), 1)
                      ])) : M("", !0),
                      (v(!0), _(fe, null, Te(z.days, (Q, C) => {
                        var w, j, ke;
                        return v(), _("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (le) => D(le, J, C),
                          key: C + J,
                          "aria-selected": Q.classData.dp__active_date || Q.classData.dp__range_start || Q.classData.dp__range_start,
                          "aria-disabled": Q.classData.dp__cell_disabled,
                          "aria-label": (j = (w = f(l).ariaLabels) == null ? void 0 : w.day) == null ? void 0 : j.call(w, Q),
                          tabindex: "0",
                          "data-test": Q.value,
                          onClick: De((le) => i.$emit("select-date", Q), ["stop", "prevent"]),
                          onKeydown: [
                            _e((le) => i.$emit("select-date", Q), ["enter"]),
                            _e((le) => i.$emit("handle-space", Q), ["space"])
                          ],
                          onMouseenter: (le) => x(Q, J, C),
                          onMouseleave: (le) => E(Q)
                        }, [
                          U("div", {
                            class: de(["dp__cell_inner", Q.classData])
                          }, [
                            i.$slots.day && f(ee)(Q) ? H(i.$slots, "day", {
                              key: 0,
                              day: +Q.text,
                              date: Q.value
                            }) : M("", !0),
                            i.$slots.day ? M("", !0) : (v(), _(fe, { key: 1 }, [
                              Ce(ye(Q.text), 1)
                            ], 64)),
                            Q.marker && f(ee)(Q) ? (v(), _("div", {
                              key: 2,
                              class: de(f(Y)(Q.marker)),
                              style: St(Q.marker.color ? { backgroundColor: Q.marker.color } : {})
                            }, null, 6)) : M("", !0),
                            f(G)(Q.value) ? (v(), _("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: k,
                              style: St(m.value)
                            }, [
                              (ke = Q.marker) != null && ke.tooltip ? (v(), _("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: c[0] || (c[0] = De(() => {
                                }, ["stop"]))
                              }, [
                                (v(!0), _(fe, null, Te(Q.marker.tooltip, (le, ve) => (v(), _("div", {
                                  key: ve,
                                  class: "dp__tooltip_text"
                                }, [
                                  i.$slots["marker-tooltip"] ? H(i.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: le,
                                    day: Q.value
                                  }) : M("", !0),
                                  i.$slots["marker-tooltip"] ? M("", !0) : (v(), _(fe, { key: 1 }, [
                                    U("div", {
                                      class: "dp__tooltip_mark",
                                      style: St(le.color ? { backgroundColor: le.color } : {})
                                    }, null, 4),
                                    U("div", null, ye(le.text), 1)
                                  ], 64))
                                ]))), 128)),
                                U("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: St(I.value)
                                }, null, 4)
                              ])) : M("", !0)
                            ], 4)) : M("", !0)
                          ], 2)
                        ], 40, Ov);
                      }), 128))
                    ]))), 128))
                  ], 8, xv)) : M("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, bv))
        ], 4)
      ], 2);
    };
  }
}), Pv = ["aria-label", "aria-disabled"], da = /* @__PURE__ */ re({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = R(null);
    return ze(() => t("set-ref", n)), (r, a) => (v(), _("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = _e((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = _e((o) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      U("div", {
        class: de(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        H(r.$slots, "default")
      ], 2)
    ], 40, Pv));
  }
}), Cv = ["onKeydown"], Dv = { class: "dp__selection_grid_header" }, Rv = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Mv = ["aria-label", "onKeydown"], ln = /* @__PURE__ */ re({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: l } = Mt(), { hideNavigationButtons: u } = ct(r), m = R(!1), d = R(null), y = R(null), p = R([]), s = R(), h = R(null), k = R(0), I = R(null);
    Tu(() => {
      d.value = null;
    }), ze(() => {
      it().then(() => x()), P(), B(!0);
    }), Ro(() => B(!1));
    const B = ($) => {
      var i;
      r.arrowNavigation && ((i = r.headerRefs) != null && i.length ? l($) : a($));
    }, P = () => {
      const $ = He(y);
      $ && (r.textInput || $.focus({ preventScroll: !0 }), m.value = $.clientHeight < $.scrollHeight);
    }, V = g(
      () => ({
        dp__overlay: !0
      })
    ), T = g(() => ({
      dp__overlay_col: !0
    })), Y = ($) => r.skipActive ? !1 : $.value === r.modelValue, G = g(() => r.items.map(($) => $.filter((i) => i).map((i) => {
      var c, O, S;
      const z = r.disabledValues.some((Q) => Q === i.value) || A(i.value), J = (c = r.multiModelValue) != null && c.length ? (O = r.multiModelValue) == null ? void 0 : O.some(
        (Q) => Ne(
          Q,
          Yt(
            r.monthPicker ? on(/* @__PURE__ */ new Date(), i.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : i.value
          )
        )
      ) : Y(i);
      return {
        ...i,
        className: {
          dp__overlay_cell_active: J,
          dp__overlay_cell: !J,
          dp__overlay_cell_disabled: z,
          dp__overlay_cell_active_disabled: z && J,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (S = r.multiModelValue) != null && S.length ? N(i.value) : !1
        }
      };
    }))), X = g(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: m.value,
        dp__button_bottom: r.autoApply
      })
    ), ee = g(() => {
      var $, i;
      return {
        dp__overlay_container: !0,
        dp__container_flex: (($ = r.items) == null ? void 0 : $.length) <= 6,
        dp__container_block: ((i = r.items) == null ? void 0 : i.length) > 6
      };
    }), A = ($) => {
      const i = r.maxValue || r.maxValue === 0, c = r.minValue || r.minValue === 0;
      return !i && !c ? !1 : i && c ? +$ > +r.maxValue || +$ < +r.minValue : i ? +$ > +r.maxValue : c ? +$ < +r.minValue : !1;
    }, x = () => {
      const $ = He(d), i = He(y), c = He(h), O = He(I), S = c ? c.getBoundingClientRect().height : 0;
      i && (k.value = i.getBoundingClientRect().height - S), $ && O && (O.scrollTop = $.offsetTop - O.offsetTop - (k.value / 2 - $.getBoundingClientRect().height) - S);
    }, E = ($) => {
      !r.disabledValues.some((i) => i === $) && !A($) && (n("update:model-value", $), n("selected"));
    }, N = ($) => {
      const i = r.monthPicker ? r.year : $;
      return cu(
        r.multiModelValue,
        Yt(
          r.monthPicker ? on(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? i : s.value || i
        ),
        Yt(r.monthPicker ? on(/* @__PURE__ */ new Date(), $) : /* @__PURE__ */ new Date(), i)
      );
    }, Z = () => {
      n("toggle"), n("reset-flow");
    }, q = () => {
      r.escClose && Z();
    }, ne = ($, i, c, O) => {
      $ && (i.value === +r.modelValue && !r.disabledValues.includes(i.value) && (d.value = $), r.arrowNavigation && (Array.isArray(p.value[c]) ? p.value[c][O] = $ : p.value[c] = [$], D()));
    }, D = () => {
      var $, i;
      const c = ($ = r.headerRefs) != null && $.length ? [r.headerRefs].concat(p.value) : p.value.concat([r.skipButtonRef ? [] : [h.value]]);
      o(Xe(c), (i = r.headerRefs) != null && i.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: P }), ($, i) => {
      var c;
      return v(), _("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: de(f(V)),
        role: "dialog",
        tabindex: "0",
        onKeydown: _e(q, ["esc"])
      }, [
        U("div", {
          class: de(f(ee)),
          ref_key: "containerRef",
          ref: I,
          role: "grid",
          style: St({ height: `${k.value}px` })
        }, [
          U("div", Dv, [
            H($.$slots, "header")
          ]),
          $.$slots.overlay ? H($.$slots, "overlay", { key: 0 }) : (v(!0), _(fe, { key: 1 }, Te(f(G), (O, S) => (v(), _("div", {
            class: "dp__overlay_row",
            key: S,
            role: "row"
          }, [
            (v(!0), _(fe, null, Te(O, (z, J) => (v(), _("div", {
              role: "gridcell",
              class: de(f(T)),
              key: z.value,
              "aria-selected": z.value === e.modelValue && !e.disabledValues.includes(z.value),
              "aria-disabled": z.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Q) => ne(Q, z, S, J),
              tabindex: "0",
              "data-test": z.text,
              onClick: (Q) => E(z.value),
              onKeydown: [
                _e((Q) => E(z.value), ["enter"]),
                _e((Q) => E(z.value), ["space"])
              ],
              onMouseover: (Q) => s.value = z.value
            }, [
              U("div", {
                class: de(z.className)
              }, [
                $.$slots.item ? H($.$slots, "item", {
                  key: 0,
                  item: z
                }) : M("", !0),
                $.$slots.item ? M("", !0) : (v(), _(fe, { key: 1 }, [
                  Ce(ye(z.text), 1)
                ], 64))
              ], 2)
            ], 42, Rv))), 128))
          ]))), 128))
        ], 6),
        $.$slots["button-icon"] ? Tt((v(), _("div", {
          key: 0,
          role: "button",
          "aria-label": (c = e.ariaLabels) == null ? void 0 : c.toggleOverlay,
          class: de(f(X)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h,
          onClick: Z,
          onKeydown: _e(Z, ["enter"])
        }, [
          H($.$slots, "button-icon")
        ], 42, Mv)), [
          [pn, !f(u)(e.type)]
        ]) : M("", !0)
      ], 42, Cv);
    };
  }
}), Iv = ["aria-label"], Ci = /* @__PURE__ */ re({
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
    return ze(() => t("set-ref", o)), (l, u) => (v(), _(fe, null, [
      U("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (m) => l.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = _e((m) => l.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = _e((m) => l.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        H(l.$slots, "default")
      ], 40, Iv),
      pe(yt, {
        name: f(r)(e.showSelectionGrid),
        css: f(a)
      }, {
        default: K(() => [
          e.showSelectionGrid ? (v(), te(ln, Ge({ key: 0 }, {
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
            "onUpdate:modelValue": u[3] || (u[3] = (m) => l.$emit("update:model-value", m)),
            onToggle: u[4] || (u[4] = (m) => l.$emit("toggle"))
          }), We({
            "button-icon": K(() => [
              l.$slots["calendar-icon"] ? H(l.$slots, "calendar-icon", { key: 0 }) : M("", !0),
              l.$slots["calendar-icon"] ? M("", !0) : (v(), te(f(zr), { key: 1 }))
            ]),
            _: 2
          }, [
            l.$slots[e.slotName] ? {
              name: "item",
              fn: K(({ item: m }) => [
                H(l.$slots, e.slotName, { item: m })
              ]),
              key: "0"
            } : void 0,
            l.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: K(() => [
                H(l.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            l.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: K(() => [
                H(l.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : M("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Nv = { class: "dp__month_year_row" }, Bv = { class: "dp__month_year_wrap" }, Av = { class: "dp__month_picker_header" }, Ev = ["aria-label"], Vv = ["aria-label"], Yv = ["aria-label"], Fv = /* @__PURE__ */ re({
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
    const r = e, { defaults: a } = ct(r), { transitionName: o, showTransition: l } = jr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: m, isDisabled: d, updateMonthYear: y } = ov(r, n), p = R(!1), s = R(!1), h = R([null, null, null, null]), k = R(null), I = R(null), B = R(null);
    ze(() => {
      n("mount");
    });
    const P = (w) => ({
      get: () => r[w],
      set: (j) => {
        const ke = w === "month" ? "year" : "month";
        n("update-month-year", { [w]: j, [ke]: r[ke] }), n("month-year-select", w === "year"), w === "month" ? S(!0) : z(!0);
      }
    }), V = g(P("month")), T = g(P("year")), Y = (w) => {
      const j = Ie(W(w));
      return r.year === j;
    }, G = g(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((w) => W(w)).filter((w) => Y(w)).map((w) => Me(w)) : [] : []), X = g(() => (w) => {
      const j = w === "month";
      return {
        showSelectionGrid: (j ? p : s).value,
        items: (j ? $ : i).value,
        disabledValues: a.value.filters[j ? "months" : "years"].concat(G.value),
        minValue: (j ? E : A).value,
        maxValue: (j ? N : x).value,
        headerRefs: j && r.monthPicker ? [k.value, I.value, B.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), ee = g(() => (w) => ({
      month: r.month,
      year: r.year,
      items: w === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: y,
      toggle: w === "month" ? S : z
    })), A = g(() => r.minDate ? Ie(W(r.minDate)) : null), x = g(() => r.maxDate ? Ie(W(r.maxDate)) : null), E = g(() => {
      if (r.minDate && A.value) {
        if (A.value > r.year)
          return 12;
        if (A.value === r.year)
          return Me(W(r.minDate));
      }
      return null;
    }), N = g(() => r.maxDate && x.value ? x.value < r.year ? -1 : x.value === r.year ? Me(W(r.maxDate)) : null : null), Z = g(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), q = (w) => w.reverse(), ne = (w, j = !1) => {
      const ke = [], le = (ve) => j ? q(ve) : ve;
      for (let ve = 0; ve < w.length; ve += 3) {
        const Be = [w[ve], w[ve + 1], w[ve + 2]];
        ke.push(le(Be));
      }
      return j ? ke.reverse() : ke;
    }, D = g(() => r.months.find((j) => j.value === r.month) || { text: "", value: 0 }), $ = g(() => ne(r.months)), i = g(() => ne(r.years, r.reverseYears)), c = g(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), O = g(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), S = (w = !1) => {
      J(w), p.value = !p.value, p.value || n("overlay-closed");
    }, z = (w = !1) => {
      J(w), s.value = !s.value, s.value || n("overlay-closed");
    }, J = (w) => {
      w || n("reset-flow");
    }, Q = (w = !1) => {
      d.value(w) || n("update-month-year", {
        year: w ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, C = (w, j) => {
      r.arrowNavigation && (h.value[j] = He(w), u(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: S,
      toggleYearPicker: z,
      handleMonthYearChange: m
    }), (w, j) => {
      var ke, le, ve, Be, ut;
      return v(), _("div", Nv, [
        w.$slots["month-year"] ? H(w.$slots, "month-year", Ke(Ge({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: f(y), handleMonthYearChange: f(m), instance: e.instance }))) : (v(), _(fe, { key: 1 }, [
          !w.monthPicker && !w.yearPicker ? (v(), _(fe, { key: 0 }, [
            f(c) && !w.vertical ? (v(), te(da, {
              key: 0,
              "aria-label": (ke = f(a).ariaLabels) == null ? void 0 : ke.prevMonth,
              disabled: f(d)(!1),
              onActivate: j[0] || (j[0] = (he) => f(m)(!1)),
              onSetRef: j[1] || (j[1] = (he) => C(he, 0))
            }, {
              default: K(() => [
                w.$slots["arrow-left"] ? H(w.$slots, "arrow-left", { key: 0 }) : M("", !0),
                w.$slots["arrow-left"] ? M("", !0) : (v(), te(f(pi), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            U("div", Bv, [
              pe(Ci, Ge({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (le = f(a).ariaLabels) == null ? void 0 : le.openMonthsOverlay,
                modelValue: f(V),
                "onUpdate:modelValue": j[2] || (j[2] = (he) => Ee(V) ? V.value = he : null)
              }, f(X)("month"), {
                onToggle: S,
                onSetRef: j[3] || (j[3] = (he) => C(he, 1))
              }), We({
                default: K(() => [
                  w.$slots.month ? H(w.$slots, "month", Ke(Ge({ key: 0 }, f(D)))) : M("", !0),
                  w.$slots.month ? M("", !0) : (v(), _(fe, { key: 1 }, [
                    Ce(ye(f(D).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    H(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: K(({ item: he }) => [
                    H(w.$slots, "month-overlay-value", {
                      text: he.text,
                      value: he.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: K(() => [
                    H(w.$slots, "month-overlay", Ke(pt(f(ee)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: K(() => [
                    H(w.$slots, "month-overlay-header", { toggle: S })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              pe(Ci, Ge({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (ve = f(a).ariaLabels) == null ? void 0 : ve.openYearsOverlay,
                modelValue: f(T),
                "onUpdate:modelValue": j[4] || (j[4] = (he) => Ee(T) ? T.value = he : null)
              }, f(X)("year"), {
                onToggle: z,
                onSetRef: j[5] || (j[5] = (he) => C(he, 2))
              }), We({
                default: K(() => [
                  w.$slots.year ? H(w.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : M("", !0),
                  w.$slots.year ? M("", !0) : (v(), _(fe, { key: 1 }, [
                    Ce(ye(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    H(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: K(({ item: he }) => [
                    H(w.$slots, "year-overlay-value", {
                      text: he.text,
                      value: he.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: K(() => [
                    H(w.$slots, "year-overlay", Ke(pt(f(ee)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: K(() => [
                    H(w.$slots, "year-overlay-header", { toggle: z })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            f(c) && w.vertical ? (v(), te(da, {
              key: 1,
              "aria-label": (Be = f(a).ariaLabels) == null ? void 0 : Be.prevMonth,
              disabled: f(d)(!1),
              onActivate: j[6] || (j[6] = (he) => f(m)(!1))
            }, {
              default: K(() => [
                w.$slots["arrow-up"] ? H(w.$slots, "arrow-up", { key: 0 }) : M("", !0),
                w.$slots["arrow-up"] ? M("", !0) : (v(), te(f(uu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : M("", !0),
            f(O) ? (v(), te(da, {
              key: 2,
              ref: "rightIcon",
              disabled: f(d)(!0),
              "aria-label": (ut = f(a).ariaLabels) == null ? void 0 : ut.nextMonth,
              onActivate: j[7] || (j[7] = (he) => f(m)(!0)),
              onSetRef: j[8] || (j[8] = (he) => C(he, 3))
            }, {
              default: K(() => [
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? H(w.$slots, w.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : M("", !0),
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? M("", !0) : (v(), te(Ii(w.vertical ? f(su) : f(yi)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : M("", !0)
          ], 64)) : M("", !0),
          w.monthPicker ? (v(), te(ln, Ge({ key: 1 }, f(X)("month"), {
            "skip-active": w.range,
            year: e.year,
            "multi-model-value": f(Z),
            "month-picker": "",
            modelValue: f(V),
            "onUpdate:modelValue": j[17] || (j[17] = (he) => Ee(V) ? V.value = he : null),
            onToggle: S,
            onSelected: j[18] || (j[18] = (he) => w.$emit("overlay-closed"))
          }), We({
            header: K(() => {
              var he, ft, ot;
              return [
                U("div", Av, [
                  U("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: k,
                    onClick: j[9] || (j[9] = (qe) => Q(!1)),
                    onKeydown: j[10] || (j[10] = _e((qe) => Q(!1), ["enter"]))
                  }, [
                    U("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!1) }]),
                      role: "button",
                      "aria-label": (he = f(a).ariaLabels) == null ? void 0 : he.prevMonth
                    }, [
                      w.$slots["arrow-left"] ? H(w.$slots, "arrow-left", { key: 0 }) : M("", !0),
                      w.$slots["arrow-left"] ? M("", !0) : (v(), te(f(pi), { key: 1 }))
                    ], 10, Ev)
                  ], 544),
                  U("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: I,
                    "aria-label": (ft = f(a).ariaLabels) == null ? void 0 : ft.openYearsOverlay,
                    tabindex: "0",
                    onClick: j[11] || (j[11] = () => z(!1)),
                    onKeydown: j[12] || (j[12] = _e(() => z(!1), ["enter"]))
                  }, [
                    w.$slots.year ? H(w.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : M("", !0),
                    w.$slots.year ? M("", !0) : (v(), _(fe, { key: 1 }, [
                      Ce(ye(e.year), 1)
                    ], 64))
                  ], 40, Vv),
                  U("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: B,
                    onClick: j[13] || (j[13] = (qe) => Q(!0)),
                    onKeydown: j[14] || (j[14] = _e((qe) => Q(!0), ["enter"]))
                  }, [
                    U("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: f(d)(!0) }]),
                      role: "button",
                      "aria-label": (ot = f(a).ariaLabels) == null ? void 0 : ot.nextMonth
                    }, [
                      w.$slots["arrow-right"] ? H(w.$slots, "arrow-right", { key: 0 }) : M("", !0),
                      w.$slots["arrow-right"] ? M("", !0) : (v(), te(f(yi), { key: 1 }))
                    ], 10, Yv)
                  ], 544)
                ]),
                pe(yt, {
                  name: f(o)(s.value),
                  css: f(l)
                }, {
                  default: K(() => [
                    s.value ? (v(), te(ln, Ge({ key: 0 }, f(X)("year"), {
                      modelValue: f(T),
                      "onUpdate:modelValue": j[15] || (j[15] = (qe) => Ee(T) ? T.value = qe : null),
                      onToggle: z,
                      onSelected: j[16] || (j[16] = (qe) => w.$emit("overlay-closed"))
                    }), We({
                      "button-icon": K(() => [
                        w.$slots["calendar-icon"] ? H(w.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                        w.$slots["calendar-icon"] ? M("", !0) : (v(), te(f(zr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      w.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: K(({ item: qe }) => [
                          H(w.$slots, "year-overlay-value", {
                            text: qe.text,
                            value: qe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : M("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            w.$slots["month-overlay-value"] ? {
              name: "item",
              fn: K(({ item: he }) => [
                H(w.$slots, "month-overlay-value", {
                  text: he.text,
                  value: he.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : M("", !0),
          w.yearPicker ? (v(), te(ln, Ge({ key: 2 }, f(X)("year"), {
            modelValue: f(T),
            "onUpdate:modelValue": j[19] || (j[19] = (he) => Ee(T) ? T.value = he : null),
            "multi-model-value": f(Z),
            "skip-active": w.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: z,
            onSelected: j[20] || (j[20] = (he) => w.$emit("overlay-closed"))
          }), We({ _: 2 }, [
            w.$slots["year-overlay-value"] ? {
              name: "item",
              fn: K(({ item: he }) => [
                H(w.$slots, "year-overlay-value", {
                  text: he.text,
                  value: he.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : M("", !0)
        ], 64))
      ]);
    };
  }
}), Uv = {
  key: 0,
  class: "dp__time_input"
}, Lv = ["aria-label", "onKeydown", "onClick"], Wv = ["aria-label", "data-test", "onKeydown", "onClick"], Hv = ["aria-label", "onKeydown", "onClick"], zv = { key: 0 }, jv = ["aria-label", "onKeydown"], qv = /* @__PURE__ */ re({
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: l } = ct(r), { transitionName: u, showTransition: m } = jr(l.value.transitions), d = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = R("AM"), p = R(null), s = R([]);
    ze(() => {
      n("mounted");
    });
    const h = g(() => (i) => !!(r.maxTime && r.maxTime[i] && r.maxTime[i] < r[i] + +r[`${i}Increment`])), k = g(() => (i) => !!(r.minTime && r.minTime[i] && r.minTime[i] > r[i] - +r[`${i}Increment`])), I = (i, c) => Yi(Je(W(), i), c), B = (i, c) => py(Je(W(), i), c), P = g(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), V = g(() => {
      const i = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? i.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : i;
    }), T = g(() => V.value.filter((i) => !i.separator)), Y = g(() => (i) => {
      if (i === "hours") {
        const c = Z(r.hours);
        return { text: c < 10 ? `0${c}` : `${c}`, value: c };
      }
      return { text: r[i] < 10 ? `0${r[i]}` : `${r[i]}`, value: r[i] };
    }), G = (i) => {
      const c = r.is24 ? 24 : 12, O = i === "hours" ? c : 60, S = +r[`${i}GridIncrement`], z = i === "hours" && !r.is24 ? S : 0, J = [];
      for (let Q = z; Q < O; Q += S)
        J.push({ value: Q, text: Q < 10 ? `0${Q}` : `${Q}` });
      return i === "hours" && !r.is24 && J.push({ value: 0, text: "12" }), zy(J);
    }, X = (i, c) => {
      const O = r.minTime && r.minTime[c], S = r.maxTime && r.maxTime[c];
      return O && S ? i < O || i > S : O ? i < O : S ? i > S : !1;
    }, ee = g(() => (i) => G(i).flat().filter((c) => c).map((c) => c.value).filter((c) => X(c, i))), A = (i) => r[`no${i[0].toUpperCase() + i.slice(1)}Overlay`], x = (i) => {
      A(i) || (d[i] = !d[i], d[i] || n("overlay-closed"));
    }, E = (i) => i === "hours" ? $t : i === "minutes" ? Ot : Gt, N = (i, c = !0) => {
      const O = c ? I : B;
      (c ? h.value(i) : k.value(i)) || n(
        `update:${i}`,
        E(i)(O({ [i]: +r[i] }, { [i]: +r[`${i}Increment`] }))
      );
    }, Z = (i) => r.is24 ? i : (i >= 12 ? y.value = "PM" : y.value = "AM", Qy(i)), q = () => {
      y.value === "PM" ? (y.value = "AM", n("update:hours", r.hours - 12)) : (y.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (i) => {
      d[i] = !0;
    }, D = (i, c, O) => {
      if (i && r.arrowNavigation) {
        Array.isArray(s.value[c]) ? s.value[c][O] = i : s.value[c] = [i];
        const S = s.value.reduce(
          (z, J) => J.map((Q, C) => [...z[C] || [], J[C]]),
          []
        );
        o(r.closeTimePickerBtn), p.value && (S[1] = S[1].concat(p.value)), a(S, r.order);
      }
    }, $ = (i, c) => i === "hours" && !r.is24 ? n(`update:${i}`, y.value === "PM" ? c + 12 : c) : n(`update:${i}`, c);
    return t({ openChildCmp: ne }), (i, c) => {
      var O;
      return i.disabled ? M("", !0) : (v(), _("div", Uv, [
        (v(!0), _(fe, null, Te(f(V), (S, z) => {
          var J, Q, C;
          return v(), _("div", {
            key: z,
            class: de(f(P))
          }, [
            S.separator ? (v(), _(fe, { key: 0 }, [
              Ce(" : ")
            ], 64)) : (v(), _(fe, { key: 1 }, [
              U("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(h)(S.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (J = f(l).ariaLabels) == null ? void 0 : J.incrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  _e((w) => N(S.type), ["enter"]),
                  _e((w) => N(S.type), ["space"])
                ],
                onClick: (w) => N(S.type),
                ref_for: !0,
                ref: (w) => D(w, z, 0)
              }, [
                i.$slots["arrow-up"] ? H(i.$slots, "arrow-up", { key: 0 }) : M("", !0),
                i.$slots["arrow-up"] ? M("", !0) : (v(), te(f(uu), { key: 1 }))
              ], 42, Lv),
              U("div", {
                role: "button",
                "aria-label": (Q = f(l).ariaLabels) == null ? void 0 : Q.openTpOverlay(S.type),
                class: de(A(S.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${S.type}-toggle-overlay-btn`,
                onKeydown: [
                  _e((w) => x(S.type), ["enter"]),
                  _e((w) => x(S.type), ["space"])
                ],
                onClick: (w) => x(S.type),
                ref_for: !0,
                ref: (w) => D(w, z, 1)
              }, [
                i.$slots[S.type] ? H(i.$slots, S.type, {
                  key: 0,
                  text: f(Y)(S.type).text,
                  value: f(Y)(S.type).value
                }) : M("", !0),
                i.$slots[S.type] ? M("", !0) : (v(), _(fe, { key: 1 }, [
                  Ce(ye(f(Y)(S.type).text), 1)
                ], 64))
              ], 42, Wv),
              U("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: f(k)(S.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (C = f(l).ariaLabels) == null ? void 0 : C.decrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  _e((w) => N(S.type, !1), ["enter"]),
                  _e((w) => N(S.type, !1), ["space"])
                ],
                onClick: (w) => N(S.type, !1),
                ref_for: !0,
                ref: (w) => D(w, z, 2)
              }, [
                i.$slots["arrow-down"] ? H(i.$slots, "arrow-down", { key: 0 }) : M("", !0),
                i.$slots["arrow-down"] ? M("", !0) : (v(), te(f(su), { key: 1 }))
              ], 42, Hv)
            ], 64))
          ], 2);
        }), 128)),
        i.is24 ? M("", !0) : (v(), _("div", zv, [
          i.$slots["am-pm-button"] ? H(i.$slots, "am-pm-button", {
            key: 0,
            toggle: q,
            value: y.value
          }) : M("", !0),
          i.$slots["am-pm-button"] ? M("", !0) : (v(), _("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: p,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (O = f(l).ariaLabels) == null ? void 0 : O.amPmButton,
            tabindex: "0",
            onClick: q,
            onKeydown: [
              _e(De(q, ["prevent"]), ["enter"]),
              _e(De(q, ["prevent"]), ["space"])
            ]
          }, ye(y.value), 41, jv))
        ])),
        (v(!0), _(fe, null, Te(f(T), (S, z) => (v(), te(yt, {
          key: z,
          name: f(u)(d[S.type]),
          css: f(m)
        }, {
          default: K(() => [
            d[S.type] ? (v(), te(ln, {
              key: 0,
              items: G(S.type),
              "disabled-values": f(l).filters.times[S.type].concat(f(ee)(S.type)),
              "esc-close": i.escClose,
              "aria-labels": f(l).ariaLabels,
              "hide-navigation": i.hideNavigation,
              "onUpdate:modelValue": (J) => $(S.type, J),
              onSelected: (J) => x(S.type),
              onToggle: (J) => x(S.type),
              onResetFlow: c[0] || (c[0] = (J) => i.$emit("reset-flow")),
              type: S.type
            }, We({
              "button-icon": K(() => [
                i.$slots["clock-icon"] ? H(i.$slots, "clock-icon", { key: 0 }) : M("", !0),
                i.$slots["clock-icon"] ? M("", !0) : (v(), te(f(iu), { key: 1 }))
              ]),
              _: 2
            }, [
              i.$slots[`${S.type}-overlay-value`] ? {
                name: "item",
                fn: K(({ item: J }) => [
                  H(i.$slots, `${S.type}-overlay-value`, {
                    text: J.text,
                    value: J.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : M("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Gv = ["aria-label"], Qv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Zv = {
  key: 1,
  class: "dp__overlay_row"
}, Xv = ["aria-label"], Kv = /* @__PURE__ */ re({
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), l = mt(), { hideNavigationButtons: u, defaults: m } = ct(r), { transitionName: d, showTransition: y } = jr(m.value.transitions), p = R(null), s = R(null), h = R([]), k = R(null);
    ze(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([He(p.value)], "time") : o(!0, r.timePicker);
    });
    const I = g(() => r.range && r.modelAuto ? pu(r.internalModelValue) : !0), B = R(!1), P = (N) => ({
      hours: Array.isArray(r.hours) ? r.hours[N] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[N] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[N] : r.seconds
    }), V = g(() => {
      const N = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          N.push(P(Z));
      else
        N.push(P(0));
      return N;
    }), T = (N, Z = !1, q = "") => {
      Z || n("reset-flow"), B.value = N, N && n("overlay-opened"), r.arrowNavigation && (o(N), N || n("overlay-closed")), it(() => {
        q !== "" && h.value[0] && h.value[0].openChildCmp(q);
      });
    }, Y = g(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), G = Vt(l, "timePicker"), X = (N, Z, q) => r.range ? Z === 0 ? [N, V.value[1][q]] : [V.value[0][q], N] : N, ee = (N) => {
      n("update:hours", N);
    }, A = (N) => {
      n("update:minutes", N);
    }, x = (N) => {
      n("update:seconds", N);
    }, E = () => {
      k.value && r.arrowNavigation && k.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: T }), (N, Z) => {
      var q;
      return v(), _("div", null, [
        N.timePicker ? M("", !0) : Tt((v(), _("div", {
          key: 0,
          class: de(f(Y)),
          role: "button",
          "aria-label": (q = f(m).ariaLabels) == null ? void 0 : q.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: p,
          onKeydown: [
            Z[0] || (Z[0] = _e((ne) => T(!0), ["enter"])),
            Z[1] || (Z[1] = _e((ne) => T(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (ne) => T(!0))
        }, [
          N.$slots["clock-icon"] ? H(N.$slots, "clock-icon", { key: 0 }) : M("", !0),
          N.$slots["clock-icon"] ? M("", !0) : (v(), te(f(iu), { key: 1 }))
        ], 42, Gv)), [
          [pn, !f(u)("time")]
        ]),
        pe(yt, {
          name: f(d)(B.value),
          css: f(y)
        }, {
          default: K(() => {
            var ne;
            return [
              B.value || N.timePicker ? (v(), _("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: k,
                tabindex: "0"
              }, [
                U("div", Qv, [
                  N.$slots["time-picker-overlay"] ? H(N.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ee,
                    setMinutes: A,
                    setSeconds: x
                  }) : M("", !0),
                  N.$slots["time-picker-overlay"] ? M("", !0) : (v(), _("div", Zv, [
                    (v(!0), _(fe, null, Te(f(V), (D, $) => Tt((v(), te(qv, Ge({ key: $ }, {
                      ...N.$props,
                      order: $,
                      hours: D.hours,
                      minutes: D.minutes,
                      seconds: D.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: $ === 0 ? N.fixedStart : N.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (i) => ee(X(i, $, "hours")),
                      "onUpdate:minutes": (i) => A(X(i, $, "minutes")),
                      "onUpdate:seconds": (i) => x(X(i, $, "seconds")),
                      onMounted: E,
                      onOverlayClosed: E
                    }), We({ _: 2 }, [
                      Te(f(G), (i, c) => ({
                        name: i,
                        fn: K((O) => [
                          H(N.$slots, i, Ke(pt(O)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [pn, $ === 0 ? !0 : f(I)]
                    ])), 128))
                  ])),
                  N.timePicker ? M("", !0) : Tt((v(), _("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: de(f(Y)),
                    role: "button",
                    "aria-label": (ne = f(m).ariaLabels) == null ? void 0 : ne.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = _e((D) => T(!1), ["enter"])),
                      Z[4] || (Z[4] = _e((D) => T(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (D) => T(!1))
                  }, [
                    N.$slots["calendar-icon"] ? H(N.$slots, "calendar-icon", { key: 0 }) : M("", !0),
                    N.$slots["calendar-icon"] ? M("", !0) : (v(), te(f(zr), { key: 1 }))
                  ], 42, Xv)), [
                    [pn, !f(u)("time")]
                  ])
                ])
              ], 512)) : M("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Jv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = ct(t), o = R(null), l = R(W()), u = (c) => {
    !c.current && t.hideOffsetDates || (o.value = c.value);
  }, m = () => {
    o.value = null;
  }, d = (c) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? c ? at(o.value, e.value[0]) : et(o.value, e.value[0]) : !0, y = (c, O) => {
    const S = () => e.value ? O ? e.value[0] || null : e.value[1] : null, z = e.value && Array.isArray(e.value) ? S() : null;
    return Ne(W(c.value), z);
  }, p = (c) => {
    const O = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !et(o.value || null, O) : !0;
  }, s = (c, O = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Ne(W(c.value), e.value[O ? 0 : 1]) : t.range ? y(c, O) && p(O) || Ne(c.value, Array.isArray(e.value) ? e.value[0] : null) && d(O) : !1, h = (c, O, S) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : S ? at(e.value[0], O.value) : et(e.value[0], O.value) : !1, k = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Ne(c.value, e.value[0] ? e.value[0] : l.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((O) => Ne(O, c.value)) : Ne(c.value, e.value ? e.value : l.value), I = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = Dt(o.value, +t.autoRange), S = a(W(o.value));
        return t.weekPicker ? Ne(S[1], W(c.value)) : Ne(O, W(c.value));
      }
      return !1;
    }
    return !1;
  }, B = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const O = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const S = a(W(o.value));
        return t.weekPicker ? at(c.value, S[0]) && et(c.value, S[1]) : at(c.value, o.value) && et(c.value, O);
      }
      return !1;
    }
    return !1;
  }, P = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = a(W(o.value));
        return t.weekPicker ? Ne(O[0], c.value) : Ne(o.value, c.value);
      }
      return !1;
    }
    return !1;
  }, V = (c) => cu(e.value, o.value, c.value), T = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, Y = () => t.modelAuto ? pu(t.internalModelValue) : !0, G = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const O = t.range ? !s(c) && !s(c, !1) : !0;
    return !n(c.value) && !k(c) && !(!c.current && t.hideOffsetDates) && O;
  }, X = (c) => t.range ? t.modelAuto ? T() && k(c) : !1 : k(c), ee = (c) => t.highlight ? r(c.value, t.highlight) : !1, A = (c) => n(c.value) && t.highlightDisabledDays === !1, x = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), E = (c) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || c.current) && Y() && !(!c.current && t.hideOffsetDates) && !k(c) ? V(c) : !1, N = (c) => {
    const { isRangeStart: O, isRangeEnd: S } = ne(c), z = t.range ? O || S : !1;
    return {
      dp__cell_offset: !c.current,
      dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
      dp__cell_disabled: n(c.value),
      dp__cell_highlight: !A(c) && (ee(c) || x(c)) && !X(c) && !z,
      dp__cell_highlight_active: !A(c) && (ee(c) || x(c)) && X(c),
      dp__today: !t.noToday && Ne(c.value, l.value) && c.current
    };
  }, Z = (c) => ({
    dp__active_date: X(c),
    dp__date_hover: G(c)
  }), q = (c) => ({
    ...D(c),
    ...$(c),
    dp__range_between_week: E(c) && t.weekPicker
  }), ne = (c) => {
    const O = t.multiCalendars > 0 ? c.current && s(c) && Y() : s(c) && Y(), S = t.multiCalendars > 0 ? c.current && s(c, !1) && Y() : s(c, !1) && Y();
    return { isRangeStart: O, isRangeEnd: S };
  }, D = (c) => {
    const { isRangeStart: O, isRangeEnd: S } = ne(c);
    return {
      dp__range_start: O,
      dp__range_end: S,
      dp__range_between: E(c) && !t.weekPicker,
      dp__date_hover_start: h(G(c), c, !0),
      dp__date_hover_end: h(G(c), c, !1)
    };
  }, $ = (c) => ({
    ...D(c),
    dp__cell_auto_range: B(c),
    dp__cell_auto_range_start: P(c),
    dp__cell_auto_range_end: I(c)
  }), i = (c) => t.range ? t.autoRange ? $(c) : t.modelAuto ? { ...Z(c), ...D(c) } : D(c) : t.weekPicker ? q(c) : Z(c);
  return {
    setHoverDate: u,
    clearHoverDate: m,
    getDayClassData: (c) => ({
      ...N(c),
      ...i(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, eh = ["id", "onKeydown"], th = {
  key: 0,
  class: "dp__sidebar_left"
}, nh = {
  key: 1,
  class: "dp__preset_ranges"
}, rh = ["onClick"], ah = {
  key: 2,
  class: "dp__sidebar_right"
}, oh = {
  key: 3,
  class: "dp__now_wrap"
}, lh = /* @__PURE__ */ re({
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: l } = fu(), { getCalendarDays: u, defaults: m } = ct(r), d = mt(), y = R(null), p = Ct({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = R([]), h = R([]), k = R(null), I = R(null), B = R(0), P = R(!1), V = R(0);
    ze(() => {
      var F;
      P.value = !0, !((F = r.presetRanges) != null && F.length) && !d["left-sidebar"] && !d["right-sidebar"] && ge();
      const oe = He(I);
      if (oe && !r.textInput && !r.inline && (a(!0), A()), oe) {
        const tt = (lt) => {
          ["action-row", "time-picker", "month-year"].some(
            (Lt) => Object.keys(d).includes(Lt)
          ) || lt.preventDefault(), lt.stopImmediatePropagation(), lt.stopPropagation();
        };
        oe.addEventListener("pointerdown", tt), oe.addEventListener("mousedown", tt);
      }
      window.addEventListener("resize", ge);
    }), Ro(() => {
      window.removeEventListener("resize", ge);
    });
    const { arrowRight: T, arrowLeft: Y, arrowDown: G, arrowUp: X } = Mt(), ee = (F) => {
      F || F === 0 ? h.value[F].triggerTransition(
        q.value(F),
        ne.value(F)
      ) : h.value.forEach(
        (oe, tt) => oe.triggerTransition(q.value(tt), ne.value(tt))
      );
    }, A = () => {
      const F = He(I);
      F && F.focus({ preventScroll: !0 });
    }, x = () => {
      var F;
      (F = r.flow) != null && F.length && V.value !== -1 && (V.value += 1, n("flow-step", V.value), Ae());
    }, E = () => {
      V.value = -1;
    }, {
      calendars: N,
      modelValue: Z,
      month: q,
      year: ne,
      time: D,
      updateTime: $,
      updateMonthYear: i,
      selectDate: c,
      getWeekNum: O,
      monthYearSelect: S,
      handleScroll: z,
      handleArrow: J,
      handleSwipe: Q,
      getMarker: C,
      selectCurrentDate: w,
      presetDateRange: j
    } = rv(r, n, x, ee, V), { setHoverDate: ke, clearHoverDate: le, getDayClassData: ve } = Jv(Z, r);
    Qe(
      N,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Be = Vt(d, "calendar"), ut = Vt(d, "action"), he = Vt(d, "timePicker"), ft = Vt(d, "monthYear"), ot = g(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), qe = g(() => qy(r.yearRange)), Zt = g(() => Gy(r.locale, r.monthNameFormat)), ge = () => {
      const F = He(y);
      F && (B.value = F.getBoundingClientRect().width);
    }, Pe = g(() => (F) => u(q.value(F), ne.value(F))), $e = g(
      () => m.value.multiCalendars > 0 && r.range ? [...Array(m.value.multiCalendars).keys()] : [0]
    ), Nt = g(
      () => (F) => F === 1
    ), Bt = g(() => r.monthPicker || r.timePicker || r.yearPicker), Qr = g(
      () => ({
        dp__flex_display: m.value.multiCalendars > 0
      })
    ), sn = g(() => ({
      dp__instance_calendar: m.value.multiCalendars > 0
    })), Xt = g(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), Zr = g(
      () => (F) => Kr(Pe, F)
    ), Xr = g(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Kr = (F, oe) => F.value(oe).map((tt) => ({
      ...tt,
      days: tt.days.map((lt) => (lt.marker = C(lt), lt.classData = ve(lt), lt))
    })), cn = (F) => {
      F.stopPropagation(), F.stopImmediatePropagation();
    }, b = () => {
      r.escClose && n("close-picker");
    }, L = (F, oe = !1) => {
      c(F, oe), r.spaceConfirm && n("select-date");
    }, ie = (F) => {
      var oe;
      (oe = r.flow) != null && oe.length && (p[F] = !0, Object.keys(p).filter((tt) => !p[tt]).length || Ae());
    }, se = (F, oe, tt, lt, ...Lt) => {
      if (r.flow[V.value] === F) {
        const ue = lt ? oe.value[0] : oe.value;
        ue && ue[tt](...Lt);
      }
    }, Ae = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", k, "toggleTimePicker", !1, !1, !0), se("time", k, "toggleTimePicker", !1, !0, !0);
      const F = r.flow[V.value];
      (F === "hours" || F === "minutes" || F === "seconds") && se(F, k, "toggleTimePicker", !1, !0, !0, F);
    }, st = (F) => {
      if (r.arrowNavigation) {
        if (F === "up")
          return X();
        if (F === "down")
          return G();
        if (F === "left")
          return Y();
        if (F === "right")
          return T();
      } else
        F === "left" || F === "up" ? J("left", 0, F === "up") : J("right", 0, F === "down");
    }, kt = (F) => {
      o(F.shiftKey), !r.disableMonthYearSelect && F.code === "Tab" && F.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (F.preventDefault(), F.stopImmediatePropagation(), n("close-picker"));
    }, Kt = (F) => {
      s.value[0] && s.value[0].handleMonthYearChange(F);
    };
    return t({
      updateMonthYear: i
    }), (F, oe) => {
      var tt;
      return v(), te(yt, {
        appear: "",
        name: (tt = f(m).transitions) == null ? void 0 : tt.menuAppear,
        mode: "out-in",
        css: !!F.transitions
      }, {
        default: K(() => {
          var lt, Lt;
          return [
            U("div", {
              id: F.uid ? `dp-menu-${F.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: I,
              role: "dialog",
              class: de(f(Xr)),
              onMouseleave: oe[15] || (oe[15] = //@ts-ignore
              (...ue) => f(le) && f(le)(...ue)),
              onClick: cn,
              onKeydown: [
                _e(b, ["esc"]),
                oe[16] || (oe[16] = _e(De((ue) => st("left"), ["prevent"]), ["left"])),
                oe[17] || (oe[17] = _e(De((ue) => st("up"), ["prevent"]), ["up"])),
                oe[18] || (oe[18] = _e(De((ue) => st("down"), ["prevent"]), ["down"])),
                oe[19] || (oe[19] = _e(De((ue) => st("right"), ["prevent"]), ["right"])),
                kt
              ]
            }, [
              (F.disabled || F.readonly) && F.inline ? (v(), _("div", {
                key: 0,
                class: de(f(Xt))
              }, null, 2)) : M("", !0),
              !F.inline && !F.teleportCenter ? (v(), _("div", {
                key: 1,
                class: de(f(ot))
              }, null, 2)) : M("", !0),
              U("div", {
                class: de({
                  dp__menu_content_wrapper: ((lt = F.presetRanges) == null ? void 0 : lt.length) || !!F.$slots["left-sidebar"] || !!F.$slots["right-sidebar"]
                })
              }, [
                F.$slots["left-sidebar"] ? (v(), _("div", th, [
                  H(F.$slots, "left-sidebar", Ke(pt({ handleMonthYearChange: Kt })))
                ])) : M("", !0),
                (Lt = F.presetRanges) != null && Lt.length ? (v(), _("div", nh, [
                  (v(!0), _(fe, null, Te(F.presetRanges, (ue, Wt) => (v(), _("div", {
                    key: Wt,
                    style: St(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (we) => f(j)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? H(F.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: f(j),
                      label: ue.label,
                      range: ue.range
                    }) : (v(), _(fe, { key: 1 }, [
                      Ce(ye(ue.label), 1)
                    ], 64))
                  ], 12, rh))), 128))
                ])) : M("", !0),
                U("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: y,
                  role: "document"
                }, [
                  U("div", {
                    class: de(f(Qr))
                  }, [
                    (v(!0), _(fe, null, Te(f($e), (ue, Wt) => (v(), _("div", {
                      key: ue,
                      class: de(f(sn))
                    }, [
                      !F.disableMonthYearSelect && !F.timePicker ? (v(), te(Fv, Ge({
                        key: 0,
                        ref_for: !0,
                        ref: (we) => {
                          we && (s.value[Wt] = we);
                        },
                        months: f(Zt),
                        years: f(qe),
                        month: f(q)(ue),
                        year: f(ne)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, F.$props, {
                        onMount: oe[0] || (oe[0] = (we) => ie("monthYearInput")),
                        onResetFlow: E,
                        onUpdateMonthYear: (we) => f(i)(ue, we),
                        onMonthYearSelect: f(S),
                        onOverlayClosed: A
                      }), We({ _: 2 }, [
                        Te(f(ft), (we, xu) => ({
                          name: we,
                          fn: K((Jr) => [
                            H(F.$slots, we, Ke(pt(Jr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : M("", !0),
                      pe(Tv, Ge({
                        ref_for: !0,
                        ref: (we) => {
                          we && (h.value[Wt] = we);
                        },
                        "specific-mode": f(Bt),
                        "get-week-num": f(O),
                        instance: ue,
                        "mapped-dates": f(Zr)(ue),
                        month: f(q)(ue),
                        year: f(ne)(ue)
                      }, F.$props, {
                        "flow-step": V.value,
                        "onUpdate:flowStep": oe[1] || (oe[1] = (we) => V.value = we),
                        onSelectDate: (we) => f(c)(we, !f(Nt)(ue)),
                        onHandleSpace: (we) => L(we, !f(Nt)(ue)),
                        onSetHoverDate: oe[2] || (oe[2] = (we) => f(ke)(we)),
                        onHandleScroll: (we) => f(z)(we, ue),
                        onHandleSwipe: (we) => f(Q)(we, ue),
                        onMount: oe[3] || (oe[3] = (we) => ie("calendar")),
                        onResetFlow: E,
                        onTooltipOpen: oe[4] || (oe[4] = (we) => F.$emit("tooltip-open", we)),
                        onTooltipClose: oe[5] || (oe[5] = (we) => F.$emit("tooltip-close", we))
                      }), We({ _: 2 }, [
                        Te(f(Be), (we, xu) => ({
                          name: we,
                          fn: K((Jr) => [
                            H(F.$slots, we, Ke(pt({ ...Jr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  U("div", null, [
                    F.$slots["time-picker"] ? H(F.$slots, "time-picker", Ke(Ge({ key: 0 }, { time: f(D), updateTime: f($) }))) : (v(), _(fe, { key: 1 }, [
                      F.enableTimePicker && !F.monthPicker && !F.weekPicker ? (v(), te(Kv, Ge({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: k,
                        hours: f(D).hours,
                        minutes: f(D).minutes,
                        seconds: f(D).seconds,
                        "internal-model-value": e.internalModelValue
                      }, F.$props, {
                        onMount: oe[6] || (oe[6] = (ue) => ie("timePicker")),
                        "onUpdate:hours": oe[7] || (oe[7] = (ue) => f($)(ue)),
                        "onUpdate:minutes": oe[8] || (oe[8] = (ue) => f($)(ue, !1)),
                        "onUpdate:seconds": oe[9] || (oe[9] = (ue) => f($)(ue, !1, !0)),
                        onResetFlow: E,
                        onOverlayClosed: A,
                        onOverlayOpened: oe[10] || (oe[10] = (ue) => F.$emit("time-picker-open", ue))
                      }), We({ _: 2 }, [
                        Te(f(he), (ue, Wt) => ({
                          name: ue,
                          fn: K((we) => [
                            H(F.$slots, ue, Ke(pt(we)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : M("", !0)
                    ], 64))
                  ])
                ], 512),
                F.$slots["right-sidebar"] ? (v(), _("div", ah, [
                  H(F.$slots, "right-sidebar", Ke(pt({ handleMonthYearChange: Kt })))
                ])) : M("", !0),
                F.showNowButton ? (v(), _("div", oh, [
                  F.$slots["now-button"] ? H(F.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: f(w)
                  }) : M("", !0),
                  F.$slots["now-button"] ? M("", !0) : (v(), _("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: oe[11] || (oe[11] = //@ts-ignore
                    (...ue) => f(w) && f(w)(...ue))
                  }, ye(F.nowButtonLabel), 1))
                ])) : M("", !0)
              ], 2),
              !F.autoApply || F.keepActionRow ? (v(), te(gv, Ge({
                key: 2,
                "menu-mount": P.value,
                "calendar-width": B.value,
                "internal-model-value": e.internalModelValue
              }, F.$props, {
                onClosePicker: oe[12] || (oe[12] = (ue) => F.$emit("close-picker")),
                onSelectDate: oe[13] || (oe[13] = (ue) => F.$emit("select-date")),
                onInvalidSelect: oe[14] || (oe[14] = (ue) => F.$emit("invalid-select"))
              }), We({ _: 2 }, [
                Te(f(ut), (ue, Wt) => ({
                  name: ue,
                  fn: K((we) => [
                    H(F.$slots, ue, Ke(pt({ ...we })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : M("", !0)
            ], 42, eh)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), ih = typeof window < "u" ? window : void 0, ma = () => {
}, uh = (e) => Pu() ? (Cu(e), !0) : !1, sh = (e, t, n, r) => {
  if (!e)
    return ma;
  let a = ma;
  const o = Qe(
    () => f(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = ma;
      });
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    o(), a();
  };
  return uh(l), l;
}, ch = (e, t, n, r = {}) => {
  const { window: a = ih, event: o = "pointerdown" } = r;
  return a ? sh(a, o, (l) => {
    const u = He(e), m = He(t);
    !u || !m || u === l.target || l.composedPath().includes(u) || l.composedPath().includes(m) || n(l);
  }, { passive: !0 }) : void 0;
}, fh = /* @__PURE__ */ re({
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
    const r = e, a = mt(), o = R(!1), l = nr(r, "modelValue"), u = nr(r, "timezone"), m = R(null), d = R(null), y = R(!1), p = R(null), { setMenuFocused: s, setShiftKey: h } = fu(), { clearArrowNav: k } = Mt(), { validateDate: I, isValidTime: B, defaults: P } = ct(r);
    ze(() => {
      N(r.modelValue), r.inline || (A(p.value).addEventListener("scroll", c), window.addEventListener("resize", O)), r.inline && (o.value = !0);
    }), Ro(() => {
      if (!r.inline) {
        const ge = A(p.value);
        ge && ge.removeEventListener("scroll", c), window.removeEventListener("resize", O);
      }
    });
    const V = Vt(a, "all", r.presetRanges), T = Vt(a, "input");
    Qe(
      [l, u],
      () => {
        N(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: Y, menuPosition: G, setMenuPosition: X, setInitialPosition: ee, getScrollableParent: A } = lv(
      m,
      d,
      n,
      r
    ), {
      inputValue: x,
      internalModelValue: E,
      parseExternalModelValue: N,
      emitModelValue: Z,
      formatInputValue: q,
      checkBeforeEmit: ne
    } = av(n, r, y), D = g(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), $ = g(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), i = g(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), c = () => {
      o.value && (r.closeOnScroll ? le() : X());
    }, O = () => {
      o.value && X();
    }, S = () => {
      !r.disabled && !r.readonly && (ee(), o.value = !0, it().then(() => {
        X(), o.value && n("open");
      }), o.value || ke(), N(r.modelValue));
    }, z = () => {
      x.value = "", ke(), n("update:model-value", null), n("cleared"), le();
    }, J = () => {
      const ge = E.value;
      return !ge || !Array.isArray(ge) && I(ge) ? !0 : Array.isArray(ge) ? ge.length === 2 && I(ge[0]) && I(ge[1]) ? !0 : I(ge[0]) : !1;
    }, Q = () => {
      ne() && J() ? (Z(), le()) : n("invalid-select", E.value);
    }, C = (ge) => {
      w(), Z(), r.closeOnAutoApply && !ge && le();
    }, w = () => {
      d.value && r.textInput && d.value.setParsedDate(E.value);
    }, j = (ge = !1) => {
      r.autoApply && B(E.value) && J() && (r.range && Array.isArray(E.value) ? (r.partialRange || E.value.length === 2) && C(ge) : C(ge));
    }, ke = () => {
      r.textInput || (E.value = null);
    }, le = () => {
      r.inline || (o.value && (o.value = !1, s(!1), h(!1), k(), n("closed"), ee(), x.value && N(l.value)), ke(), d.value && d.value.focusInput());
    }, ve = (ge, Pe) => {
      if (!ge) {
        E.value = null;
        return;
      }
      E.value = ge, Pe && (Q(), n("text-submit"));
    }, Be = () => {
      r.autoApply && B(E.value) && Z(), w();
    }, ut = () => o.value ? le() : S(), he = (ge) => {
      E.value = ge;
    }, ft = g(() => r.textInput && P.value.textInputOptions.format), ot = () => {
      ft.value && (y.value = !0, q()), n("focus");
    }, qe = () => {
      ft.value && (y.value = !1, q()), n("blur");
    }, Zt = (ge) => {
      m.value && m.value.updateMonthYear(0, {
        month: $i(ge.month),
        year: $i(ge.year)
      });
    };
    return ch(
      m,
      d,
      r.onClickOutside ? () => r.onClickOutside(J) : le
    ), t({
      closeMenu: le,
      selectDate: Q,
      clearValue: z,
      openMenu: S,
      onScroll: c,
      formatInputValue: q,
      // exposed for testing purposes
      updateInternalModelValue: he,
      // modify internal modelValue
      setMonthYear: Zt
    }), (ge, Pe) => (v(), _("div", {
      class: de(f(D)),
      ref_key: "pickerWrapperRef",
      ref: p
    }, [
      pe(pv, Ge({
        ref_key: "inputRef",
        ref: d,
        "is-menu-open": o.value,
        "input-value": f(x),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Ee(x) ? x.value = $e : null)
      }, ge.$props, {
        onClear: z,
        onOpen: S,
        onSetInputDate: ve,
        onSetEmptyDate: f(Z),
        onSelectDate: Q,
        onToggle: ut,
        onClose: le,
        onFocus: ot,
        onBlur: qe
      }), We({ _: 2 }, [
        Te(f(T), ($e, Nt) => ({
          name: $e,
          fn: K((Bt) => [
            H(ge.$slots, $e, Ke(pt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (v(), te(Ii(ge.teleport ? Ou : "div"), Ke(Ge({ key: 0 }, f(i))), {
        default: K(() => [
          o.value ? (v(), te(lh, Ge({
            key: 0,
            ref_key: "dpMenuRef",
            ref: m,
            class: f($),
            style: f(G),
            "open-on-top": f(Y)
          }, ge.$props, {
            "internal-model-value": f(E),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Ee(E) ? E.value = $e : null),
            onClosePicker: le,
            onSelectDate: Q,
            onAutoApply: j,
            onTimeUpdate: Be,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ge.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ge.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ge.$emit("invalid-select", f(E))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ge.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: f(X),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ge.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ge.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ge.$emit("time-picker-open", $e))
          }), We({ _: 2 }, [
            Te(f(V), ($e, Nt) => ({
              name: $e,
              fn: K((Bt) => [
                H(ge.$slots, $e, Ke(pt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : M("", !0)
        ]),
        _: 3
      }, 16)) : M("", !0)
    ], 2));
  }
}), Go = /* @__PURE__ */ (() => {
  const e = fh;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(dh).forEach(([e, t]) => {
  e !== "default" && (Go[e] = t);
});
const mh = { class: "grid gap-y-1" }, ph = ["data-dark", "data-opened", "data-filled", "data-outlined", "data-readonly", "data-error"], yh = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], vh = ["onClick"], hh = { class: "cursor-pointer" }, gh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, bh = /* @__PURE__ */ re({
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
    const n = e, r = R(!1), a = R(null), o = g({
      get() {
        return n.modelValue;
      },
      set(s) {
        t("update:model-value", s);
      }
    }), l = g(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = g(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), m = g(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), d = () => {
      a.value && a.value.openMenu();
    }, y = () => {
      r.value = !0;
    }, p = () => {
      r.value = !1;
    };
    return (s, h) => (v(), _("div", mh, [
      pe(f(Go), {
        ref_key: "datepicker",
        ref: a,
        modelValue: f(o),
        "onUpdate:modelValue": h[1] || (h[1] = (k) => Ee(o) ? o.value = k : null),
        "auto-apply": "",
        range: e.range,
        locale: "es-CL",
        "hide-input-icon": "",
        format: f(l),
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
        "dp-input": K(({ value: k, onClear: I, onInput: B, onEnter: P }) => [
          U("div", {
            "data-dark": e.dark,
            "data-opened": r.value,
            "data-filled": !!f(u),
            "data-outlined": e.outlined,
            "data-readonly": e.readonly,
            "data-error": !!e.errorMessage,
            class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
          }, [
            U("input", {
              readonly: "",
              type: "text",
              value: k,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
              onClick: h[0] || (h[0] = De(() => {
              }, ["stop"])),
              onInput: B,
              onFocus: De(d, ["stop"]),
              onKeydown: _e(P, ["enter"])
            }, null, 40, yh),
            U("div", {
              class: "cursor-pointer hover:opacity-60 active:opacity-100",
              onClick: De(I, ["stop"])
            }, [
              k && !e.readonly && !e.disabled && e.clearable ? (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fm-circle-close"
              })) : M("", !0)
            ], 8, vh),
            U("div", hh, [
              e.disabled ? M("", !0) : (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: f(m),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 8, ph)
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
      e.errorMessage ? (v(), _("div", gh, ye(e.errorMessage), 1)) : M("", !0)
    ]));
  }
});
const Qo = /* @__PURE__ */ be(bh, [["__scopeId", "data-v-686c651f"]]), yu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, _h = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), yu(e, t.split("."), n)), wh = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return _h(e, t, n);
  if (Array.isArray(t))
    return yu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, kh = () => ({
  getPropertyFromItem: wh
});
/*! maska v2.1.7 | (c) Alexander Shabunevich | Released under the MIT license */
var xh = Object.defineProperty, Sh = (e, t, n) => t in e ? xh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, un = (e, t, n) => (Sh(e, typeof t != "symbol" ? t + "" : t, n), n);
const Di = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class Ri {
  constructor(t = {}) {
    un(this, "opts", {}), un(this, "memo", /* @__PURE__ */ new Map());
    var n;
    const r = { ...t };
    if (r.tokens != null) {
      r.tokens = r.tokensReplace ? { ...r.tokens } : { ...Di, ...r.tokens };
      for (const a of Object.values(r.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      r.tokens = Di;
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
    return (r = a.find((l) => this.process(t, l, !1).length >= o.length)) != null ? r : "";
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
    const { mask: l, escaped: u } = this.escapeMask(n), m = [], d = this.opts.tokens != null ? this.opts.tokens : {}, y = this.isReversed() ? -1 : 1, p = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : l.length - 1, h = this.isReversed() ? () => P > -1 && V > -1 : () => P < l.length && V < t.length, k = (T) => !this.isReversed() && T <= s || this.isReversed() && T >= s;
    let I, B = -1, P = this.isReversed() ? l.length - 1 : 0, V = this.isReversed() ? t.length - 1 : 0;
    for (; h(); ) {
      const T = l.charAt(P), Y = d[T], G = (Y == null ? void 0 : Y.transform) != null ? Y.transform(t.charAt(V)) : t.charAt(V);
      if (!u.includes(P) && Y != null) {
        if (G.match(Y.pattern) != null)
          m[p](G), Y.repeated ? (B === -1 ? B = P : P === s && P !== B && (P = B - y), s === B && (P -= y)) : Y.multiple && (P -= y), P += y;
        else if (Y.multiple) {
          const X = ((a = m[V - y]) == null ? void 0 : a.match(Y.pattern)) != null, ee = l.charAt(P + y);
          X && ee !== "" && d[ee] == null ? (P += y, V -= y) : m[p]("");
        } else
          G === I ? I = void 0 : Y.optional && (P += y, V -= y);
        V += y;
      } else
        r && !this.isEager() && m[p](T), G === T && !this.isEager() ? V += y : I = T, this.isEager() || (P += y);
      if (this.isEager())
        for (; k(P) && (d[l.charAt(P)] == null || u.includes(P)); )
          r ? m[p](l.charAt(P)) : l.charAt(P) === t.charAt(V) && (V += y), P += y;
    }
    return this.memo.set(o, m.join("")), this.memo.get(o);
  }
}
const vu = (e) => JSON.parse(e.replaceAll("'", '"')), Mi = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = $h(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = pa(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = pa(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = pa(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Oh(e.dataset.maskaTokens)), n;
}, pa = (e) => e !== "" ? !!JSON.parse(e) : !0, $h = (e) => e.startsWith("[") && e.endsWith("]") ? vu(e) : e, Oh = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return vu(e);
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
    un(this, "items", /* @__PURE__ */ new Map()), un(this, "beforeinputEvent", (r) => {
      const a = r.target, o = this.items.get(a);
      o.isEager() && "inputType" in r && r.inputType.startsWith("delete") && o.unmasked(a.value).length <= 1 && this.setMaskedValue(a, "");
    }), un(this, "inputEvent", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked" in r.detail)
        return;
      const a = r.target, o = this.items.get(a), l = a.value, u = a.selectionStart, m = a.selectionEnd;
      let d = l;
      if (o.isEager()) {
        const y = o.masked(l), p = o.unmasked(l);
        p === "" && "data" in r && r.data != null ? d = r.data : p !== o.unmasked(y) && (d = p);
      }
      if (this.setMaskedValue(a, d), "inputType" in r && (r.inputType.startsWith("delete") || u != null && u < l.length))
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
    const r = this.items.get(t), a = new Ri(Mi(t, this.getMaskOpts(n)));
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
      const a = new Ri(Mi(r, n));
      this.items.set(r, a), r.value !== "" && this.setMaskedValue(r, r.value), r.addEventListener("input", this.inputEvent), r.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, n) {
    const r = this.items.get(t);
    this.options.preProcess != null && (n = this.options.preProcess(n));
    const a = r.masked(n), o = r.unmasked(r.isEager() ? a : n), l = r.completed(n), u = { masked: a, unmasked: o, completed: l };
    n = a, this.options.postProcess != null && (n = this.options.postProcess(n)), t.value = n, t.dataset.maskaValue = n, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((m) => m(u)) : this.options.onMaska(u)), t.dispatchEvent(new CustomEvent("maska", { detail: u })), t.dispatchEvent(new CustomEvent("input", { detail: u }));
  }
}
const Do = /* @__PURE__ */ new WeakMap(), Ph = (e) => {
  setTimeout(() => {
    var t;
    ((t = Do.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, Ch = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), r = { ...t.arg };
  if (n == null)
    return;
  Ph(n);
  const a = Do.get(n);
  if (a != null) {
    if (!a.needUpdateOptions(n, r))
      return;
    a.destroy();
  }
  if (t.value != null) {
    const o = t.value, l = (u) => {
      o.masked = u.masked, o.unmasked = u.unmasked, o.completed = u.completed;
    };
    r.onMaska = r.onMaska == null ? l : Array.isArray(r.onMaska) ? [...r.onMaska, l] : [r.onMaska, l];
  }
  Do.set(n, new Th(n, r));
}, Dh = { class: "grid gap-y-1" }, Rh = ["data-dark", "data-filled", "data-outlined", "data-error", "data-padding-right"], Mh = ["type", "data-maska", "disabled", "readonly", "placeholder", "data-maska-tokens"], Ih = ["type", "disabled", "readonly", "placeholder"], Nh = ["onClick"], Bh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, Ah = /* @__PURE__ */ re({
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
    const n = e, r = mt(), a = g({
      get() {
        return n.modelValue;
      },
      set(s) {
        n.disabled || n.readonly || t("update:model-value", s);
      }
    }), o = () => !!r.append, l = () => {
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
    return (s, h) => (v(), _("div", Dh, [
      U("div", {
        "data-dark": e.dark,
        "data-filled": !!f(a),
        "data-outlined": e.outlined,
        "data-error": !!e.errorMessage,
        "data-padding-right": e.clearable || o(),
        class: "h-10 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
      }, [
        e.mask ? Tt((v(), _("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (k) => Ee(a) ? a.value = k : null),
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
        }, null, 40, Mh)), [
          [Ko, f(a)],
          [f(Ch)]
        ]) : Tt((v(), _("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (k) => Ee(a) ? a.value = k : null),
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
        }, null, 40, Ih)), [
          [Ko, f(a)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (v(), _("div", {
          key: 2,
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onClick: De(l, ["stop"])
        }, [
          f(a) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : M("", !0)
        ], 8, Nh)) : M("", !0),
        o() ? H(s.$slots, "append", { key: 3 }, void 0, !0) : M("", !0)
      ], 8, Rh),
      e.errorMessage ? (v(), _("div", Bh, ye(e.errorMessage), 1)) : M("", !0)
    ]));
  }
});
const qr = /* @__PURE__ */ be(Ah, [["__scopeId", "data-v-6b38752f"]]), Eh = ["data-dark", "data-filled", "data-outlined", "data-readonly", "data-error", "onMousedown"], Vh = ["value", "disabled", "placeholder", "onKeydown"], Yh = ["onClick"], Fh = ["data-opened"], Uh = ["data-selected", "onClick"], Lh = {
  key: 1,
  class: "leading-5 text-base text-center text-secundario"
}, Wh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, Hh = /* @__PURE__ */ re({
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
      "43e14632": l.value,
      "9eea95aa": e.textTransform
    }));
    const { getPropertyFromItem: r } = kh(), a = R(""), o = R(""), l = R(""), u = R(""), m = R(!1), d = R(!1), y = R(!1), p = R(null), s = R(null), h = R(null), k = g({
      get() {
        return n.modelValue;
      },
      set(c) {
        t("update:model-value", c);
      }
    }), I = g(
      () => V.value && n.clearable && !n.readonly && !n.disabled
    ), B = g(() => n.errorMessage ? "error" : n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), P = g(() => !n.searchable || !u.value ? n.items : n.items.filter((c) => n.searchFunction ? n.searchFunction(u.value, c) : Y(c))), V = g(() => Array.isArray(k.value) ? k.value.length > 0 : !!k.value), T = g(() => {
      var c;
      if (k.value)
        if (Array.isArray(k.value)) {
          if (k.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(k.value, n.itemTitle, k.value);
          {
            const O = (c = n.items) == null ? void 0 : c.find((S) => {
              const z = r(S, n.itemValue, S), J = r(k.value, n.itemValue, k.value);
              return z === J;
            });
            return r(O, n.itemTitle, O);
          }
        }
      return "";
    });
    function Y(c) {
      const O = u.value.trim().toLowerCase();
      return O ? G(c).toLowerCase().includes(O) : !0;
    }
    function G(c) {
      return r(c, n.itemTitle, c);
    }
    function X() {
      d.value = !0;
    }
    function ee() {
      d.value = !1;
    }
    async function A() {
      await it();
      const c = s.value, O = h.value;
      if (!c || !O)
        return;
      const S = c.getBoundingClientRect(), z = O.getBoundingClientRect();
      o.value = `${S.left}px`, l.value = `${S.width}px`;
      const J = S.top + S.height + z.height, Q = window.innerHeight, C = S.top + S.height - (n.errorMessage ? 18 : 0);
      if (J > Q) {
        const w = J - Q;
        a.value = `${C - w - 16}px`;
      } else
        a.value = `${C}px`;
    }
    function x() {
      n.disabled || n.readonly || m.value || (m.value = !0, A(), y.value = !0, document.addEventListener("click", q));
    }
    function E() {
      m.value = !1, d.value = !1, y.value = !1, document.removeEventListener("click", q);
    }
    function N() {
      d.value || E();
    }
    function Z() {
      m.value && E();
    }
    function q(c) {
      !s.value || !c.target || s.value.contains(c.target) || E();
    }
    function ne() {
      n.disabled || n.readonly || (m.value ? (E(), p.value && p.value.focus()) : (x(), p.value && p.value.blur()));
    }
    function D(c) {
      const O = r(c, n.itemValue, c);
      if (n.multiple && Array.isArray(k.value)) {
        const S = k.value.slice(), z = n.returnObject ? S.findIndex((J) => r(J, n.itemValue, J) === O) : S.indexOf(O);
        z >= 0 ? S.splice(z, 1) : S.push(n.returnObject ? c : O), k.value = S;
      } else
        k.value = n.returnObject ? c : O, E();
    }
    function $(c) {
      if (n.multiple && Array.isArray(k.value))
        return k.value.some((z) => {
          const J = r(z, n.itemValue, z), Q = r(c, n.itemValue, c);
          return J === Q;
        });
      const O = r(k.value, n.itemValue, k.value), S = r(c, n.itemValue, c);
      return O === S;
    }
    function i() {
      Array.isArray(k.value) ? k.value = [] : k.value = null;
    }
    return (c, O) => (v(), _("div", {
      ref_key: "container",
      ref: s,
      class: "grid gap-y-1",
      onMouseenter: X,
      onMouseleave: ee
    }, [
      U("div", {
        "data-dark": e.dark,
        "data-filled": !!f(V),
        "data-outlined": e.outlined,
        "data-readonly": e.readonly,
        "data-error": !!e.errorMessage,
        class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent",
        onMousedown: De(ne, ["stop"])
      }, [
        U("input", {
          ref_key: "input",
          ref: p,
          readonly: "",
          value: f(T),
          disabled: e.disabled,
          placeholder: e.placeholder,
          class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
          onFocus: x,
          onBlur: N,
          onKeydown: _e(Z, ["tab"])
        }, null, 40, Vh),
        U("div", {
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onMousedown: O[0] || (O[0] = De(() => {
          }, ["stop"])),
          onClick: De(i, ["stop"])
        }, [
          f(I) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : M("", !0)
        ], 40, Yh),
        e.readonly ? M("", !0) : (v(), _("div", {
          key: 0,
          "data-opened": m.value,
          class: "transition-all duration-200 ease-out data-[opened=true]:rotate-180"
        }, [
          pe(Fe, {
            size: "1rem",
            color: f(B),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ], 8, Fh))
      ], 40, Eh),
      pe(yt, null, {
        default: K(() => [
          m.value ? (v(), _("div", {
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
            }, 8, ["modelValue", "placeholder"])) : M("", !0),
            (v(!0), _(fe, null, Te(f(P), (S, z) => (v(), _("div", {
              key: `item-${z}`,
              "data-selected": $(S),
              class: "custom-select__menu-item flex cursor-pointer text-base leading-5 gap-x-2 justify-start text-secundario transition-colors duration-100 data-[selected=true]:font-semibold",
              onClick: De((J) => D(S), ["stop"])
            }, [
              e.multiple ? (v(), te(Ei, {
                key: 0,
                "model-value": $(S)
              }, null, 8, ["model-value"])) : M("", !0),
              Ce(" " + ye(G(S)), 1)
            ], 8, Uh))), 128)),
            f(P).length === 0 && !e.hideNoDataMessage ? (v(), _("div", Lh, " Sin datos disponibles ")) : M("", !0),
            H(c.$slots, "append-item", {
              close: E,
              filteredItems: f(P)
            }, void 0, !0)
          ], 512)) : M("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (v(), _("div", Wh, ye(e.errorMessage), 1)) : M("", !0)
    ], 544));
  }
});
const Zo = /* @__PURE__ */ be(Hh, [["__scopeId", "data-v-6fb859e9"]]), zh = (e, t) => {
  const n = R(1), r = R([]), a = R("asc"), o = R(null), l = g(() => {
    const T = e.value.slice();
    return o.value ? T.sort((Y, G) => {
      if (!o.value)
        return 0;
      const X = s(Y, o.value.value), ee = s(G, o.value.value);
      let A = X > ee ? 1 : -1;
      return o.value.sort && (A = o.value.sort(X, ee)), a.value === "asc" ? A : A * -1;
    }) : T;
  }), u = g(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), m = g(() => t.value !== null ? l.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? l.value : l.value.filter((T, Y) => r.value[Y] === n.value)), d = g(() => a.value);
  function y(T) {
    return T.id ?? Object.values(T)[0];
  }
  function p(T, Y) {
    const G = Y.value;
    return `${y(T)}.${G}`;
  }
  function s(T, Y) {
    return T[Y] ?? "";
  }
  function h(T) {
    e.value = T;
  }
  async function k(T, Y) {
    var G;
    T.sortable !== !1 && (n.value = 1, ((G = o.value) == null ? void 0 : G.value) === T.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = T, a.value = "asc"), t.value === null && await B(Y));
  }
  function I(T) {
    var Y;
    return ((Y = o.value) == null ? void 0 : Y.value) === T;
  }
  async function B(T) {
    r.value = [], await it(), P(T);
  }
  function P(T) {
    if (e.value.length === 0)
      return;
    const Y = [], G = T.getBoundingClientRect(), X = Math.floor(G.height - 52);
    let ee = 1, A = 0;
    const x = T.rows;
    for (let N = 0; N < x.length; N++) {
      const Z = x[N].offsetHeight;
      A += Z, A >= X && (A = Z, ee++), Y.push(ee);
    }
    r.value = [...Y];
    const E = Math.max(...r.value);
    n.value > E && (n.value = E);
  }
  function V() {
    r.value = [], n.value = 1;
  }
  return {
    // Computed
    pageCount: u,
    sortedItems: l,
    currentPage: n,
    getSortOrder: d,
    itemsCurrentPage: m,
    // Methods
    setItems: h,
    setSortBy: k,
    getRowKey: y,
    getCellKey: p,
    isSortedBy: I,
    getCellValue: s,
    paginationToZero: V,
    calculatePagination: P,
    recalculatePagination: B
  };
}, jh = ["onMouseenter", "onMouseleave"], qh = /* @__PURE__ */ re({
  __name: "CustomTooltip",
  props: {
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = mt(), { overlayContainer: r } = Ai(), a = R("initial"), o = R("initial"), l = R("initial"), u = R(null), m = g(() => ({
      "custom-tooltip__container": !0,
      "custom-tooltip__container--disabled": t.disabled
    })), d = () => !!n.default, y = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await it();
      const h = r.value.getBoundingClientRect(), k = s.target.getBoundingClientRect(), I = k.x + h.width;
      k.x < 0 ? (o.value = "0", l.value = "initial") : I >= window.innerWidth ? (o.value = "initial", l.value = "0") : k.x !== h.left ? o.value = `${k.x}px` : (o.value = "initial", l.value = "initial"), a.value = `${k.top + k.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = l.value;
    }, p = () => {
      a.value = "", o.value = "", l.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = l.value);
    };
    return (s, h) => (v(), _("div", {
      class: de(f(m))
    }, [
      U("div", {
        onMouseenter: De(y, ["stop"]),
        onMouseleave: De(p, ["stop"])
      }, [
        H(s.$slots, "activator", {}, void 0, !0)
      ], 40, jh),
      d() ? (v(), _("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        H(s.$slots, "default", {}, void 0, !0)
      ], 512)) : M("", !0)
    ], 2));
  }
});
const Gr = /* @__PURE__ */ be(qh, [["__scopeId", "data-v-50fd21fc"]]), Gh = /* @__PURE__ */ re({
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
      "079569fc": f(l)
    }));
    const r = mt(), a = je(), o = g(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), l = g(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = g(() => n.disabled ? "neutro-4" : n.color), m = () => !!r.default, d = (y) => {
      n.disabled || n.inactive || t("click", y);
    };
    return (y, p) => (v(), te(Gr, { disabled: e.disabled }, We({
      activator: K(() => [
        U("div", {
          class: de(f(o)),
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
          H(y.$slots, "default", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Qt = /* @__PURE__ */ be(Gh, [["__scopeId", "data-v-afde288b"]]), Qh = { class: "grid grid-flow-col items-center justify-center gap-x-1 select-none" }, Zh = { class: "pr-1" }, Xh = ["data-active"], Kh = {
  key: 1,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, Jh = ["data-active", "onClick"], eg = {
  key: 2,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, tg = ["data-active"], ng = { class: "pl-1" }, hu = /* @__PURE__ */ re({
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
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), a = g(() => Array.from({ length: n.pageCount - 2 }, (m, d) => d + 2).filter((m) => n.pageCount <= 7 ? !0 : r.value <= 4 ? m <= 5 : r.value > n.pageCount - 4 ? m > n.pageCount - 5 : m >= r.value - 1 && m <= r.value + 1));
    function o(m) {
      r.value = m;
    }
    function l() {
      r.value !== 1 && (r.value -= 1);
    }
    function u() {
      r.value !== n.pageCount && (r.value += 1);
    }
    return (m, d) => (v(), _("div", Qh, [
      e.pageCount > 1 ? (v(), _(fe, { key: 0 }, [
        U("div", Zh, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-left",
            color: "acento-principal",
            disabled: f(r) === 1,
            onClick: l
          }, null, 8, ["disabled"])
        ]),
        U("button", {
          "data-active": f(r) === 1,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: d[0] || (d[0] = (y) => o(1))
        }, " 1 ", 8, Xh)
      ], 64)) : M("", !0),
      f(r) > 4 && e.pageCount > 7 ? (v(), _("span", Kh, " ... ")) : M("", !0),
      (v(!0), _(fe, null, Te(f(a), (y) => (v(), _("button", {
        key: `page-${y}`,
        class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
        "data-active": f(r) === y,
        onClick: (p) => o(y)
      }, ye(y), 9, Jh))), 128)),
      f(r) < e.pageCount - 3 && e.pageCount > 7 ? (v(), _("span", eg, " ... ")) : M("", !0),
      e.pageCount > 1 ? (v(), _(fe, { key: 3 }, [
        U("button", {
          "data-active": f(r) === e.pageCount,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: d[1] || (d[1] = (y) => o(e.pageCount))
        }, ye(e.pageCount), 9, tg),
        U("div", ng, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-right",
            color: "acento-principal",
            disabled: f(r) === e.pageCount,
            onClick: u
          }, null, 8, ["disabled"])
        ])
      ], 64)) : M("", !0)
    ]));
  }
}), rg = { class: "data-table__container" }, ag = ["data-dark"], og = ["onClick"], lg = { class: "data-table__header-text" }, ig = {
  key: 0,
  class: "data-table__row--empty"
}, ug = ["onClick"], sg = /* @__PURE__ */ re({
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
    dark: {
      type: Boolean
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
      "002e0125": e.height,
      "13d22eed": e.maxHeight,
      ff64b6d2: e.backgroundColor,
      "17cdba9f": e.gridTemplateColumns
    }));
    const r = g(() => n.items), a = g(() => n.itemsPerPage), o = mt(), {
      pageCount: l,
      currentPage: u,
      getSortOrder: m,
      itemsCurrentPage: d,
      setSortBy: y,
      getRowKey: p,
      isSortedBy: s,
      getCellKey: h,
      getCellValue: k,
      calculatePagination: I,
      recalculatePagination: B
    } = zh(r, a);
    ze(() => {
      !P.value || Y.value || I(P.value);
    });
    const P = R(null), V = g(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), T = g(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    })), Y = g(() => n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null);
    function G(q) {
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
    function A(q) {
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
    function E(q) {
      return s(q) ? n.dark ? "neutro-1" : "acento-secundario" : "neutro-3";
    }
    function N(q) {
      P.value && y(q, P.value);
    }
    function Z(q) {
      t("click:row", q);
    }
    return Qe(
      () => n.items,
      async () => {
        if (!P.value || Y.value) {
          u.value > l.value && (u.value = Math.max(1, l.value));
          return;
        }
        await B(P.value);
      }
    ), (q, ne) => (v(), _("div", rg, [
      U("table", {
        "data-dark": e.dark,
        class: de(f(T)),
        "aria-describedby": "Reutility"
      }, [
        U("thead", {
          class: de(f(V))
        }, [
          U("tr", null, [
            (v(!0), _(fe, null, Te(e.headers, (D) => (v(), _("th", {
              key: D.value,
              class: de(A(D)),
              onClick: ($) => N(D)
            }, [
              U("div", lg, [
                G(`header.${D.value}`) ? H(q.$slots, `header.${D.value}`, {
                  key: 0,
                  headerText: D.text
                }, void 0, !0) : (v(), _(fe, { key: 1 }, [
                  Ce(ye(D.text), 1)
                ], 64))
              ]),
              D.sortable !== !1 ? (v(), _("div", {
                key: 0,
                class: de(ee(D.value))
              }, [
                pe(Fe, {
                  name: X(D.value),
                  color: E(D.value)
                }, null, 8, ["name", "color"])
              ], 2)) : M("", !0)
            ], 10, og))), 128))
          ])
        ], 2),
        U("tbody", {
          ref_key: "tableBodyRef",
          ref: P,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (v(), _("tr", ig, [
            G("no-data") ? M("", !0) : (v(), _(fe, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (v(), te(Fe, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? M("", !0) : (v(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ce(" " + ye(e.noDataText), 1)
            ], 64)),
            H(q.$slots, "no-data", {}, void 0, !0)
          ])) : M("", !0),
          (v(!0), _(fe, null, Te(f(d), (D) => (v(), _("tr", {
            key: f(p)(D),
            class: de(x(D)),
            onClick: ($) => Z(D)
          }, [
            (v(!0), _(fe, null, Te(e.headers, ($) => (v(), _("td", {
              key: f(h)(D, $)
            }, [
              G($.value) ? H(q.$slots, $.value, {
                key: 0,
                item: D
              }, void 0, !0) : (v(), _(fe, { key: 1 }, [
                Ce(ye(f(k)(D, $.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, ug))), 128))
        ], 512)
      ], 10, ag),
      pe(hu, {
        modelValue: f(u),
        "onUpdate:modelValue": ne[0] || (ne[0] = (D) => Ee(u) ? u.value = D : null),
        "page-count": f(l)
      }, null, 8, ["modelValue", "page-count"])
    ]));
  }
});
const cg = /* @__PURE__ */ be(sg, [["__scopeId", "data-v-665ce0d3"]]), fg = /* @__PURE__ */ re({
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
    const t = e, n = g(() => t.disabled ? "neutro-4" : t.selected ? "acento-principal" : "secundario"), r = g(() => t.selected ? 700 : 400);
    return (a, o) => (v(), te(bt, {
      "font-size": "1rem",
      color: f(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": f(r),
      "text-transform": e.textTransform
    }, {
      default: K(() => [
        H(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), dg = { class: "filter-date-picker__container" }, mg = { class: "filter-date-picker__label" }, pg = /* @__PURE__ */ re({
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
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), _("div", dg, [
      U("div", mg, ye(e.label), 1),
      pe(Qo, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ee(r) ? r.value = l : null),
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
const yg = /* @__PURE__ */ be(pg, [["__scopeId", "data-v-4d3bdb3f"]]), vg = { class: "filter-select__container" }, hg = { class: "filter-select__label" }, gg = /* @__PURE__ */ re({
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
    const n = e, r = mt(), a = g({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, l) => (v(), _("div", vg, [
      U("div", hg, ye(e.label), 1),
      pe(Zo, {
        modelValue: f(a),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Ee(a) ? a.value = u : null),
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
      }, We({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: m }) => [
            H(o.$slots, "append-item", {
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
const bg = /* @__PURE__ */ be(gg, [["__scopeId", "data-v-e005b2d4"]]), _g = { class: "flex__container" }, wg = /* @__PURE__ */ re({
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
    })), (t, n) => (v(), _("div", _g, [
      H(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const gu = /* @__PURE__ */ be(wg, [["__scopeId", "data-v-4706ceca"]]), kg = { class: "grid gap-y-1 gap-x-3 items-center form-date-picker__container" }, xg = ["data-dark", "data-readonly", "data-disabled"], Sg = /* @__PURE__ */ re({
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
    const r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), _("div", kg, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, xg),
      pe(Qo, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ee(r) ? r.value = l : null),
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
const $g = /* @__PURE__ */ be(Sg, [["__scopeId", "data-v-7f0d00f1"]]), Og = { class: "grid gap-y-1 gap-x-3 items-center form-select__container" }, Tg = ["data-dark", "data-readonly", "data-disabled"], Pg = /* @__PURE__ */ re({
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
    const r = mt(), a = g({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, l) => (v(), _("div", Og, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, Tg),
      pe(Zo, {
        modelValue: f(a),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Ee(a) ? a.value = u : null),
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
      }, We({ _: 2 }, [
        f(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: m }) => [
            H(o.$slots, "append-item", {
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
const Cg = /* @__PURE__ */ be(Pg, [["__scopeId", "data-v-83e0a6a4"]]), Dg = { class: "grid gap-y-1 gap-x-3 items-center form-text-field__container" }, Rg = ["data-dark", "data-readonly", "data-disabled"], Mg = /* @__PURE__ */ re({
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
    const r = mt(), a = g({
      get() {
        return n.modelValue;
      },
      set(p) {
        t("update:model-value", p);
      }
    }), o = () => !!r.append, l = (p) => {
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
    return (p, s) => (v(), _("div", Dg, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, Rg),
      pe(qr, {
        modelValue: f(a),
        "onUpdate:modelValue": s[0] || (s[0] = (h) => Ee(a) ? a.value = h : null),
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
        onFocus: l,
        onKeydown: y
      }, We({ _: 2 }, [
        o() ? {
          name: "append",
          fn: K(() => [
            H(p.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const Ig = /* @__PURE__ */ be(Mg, [["__scopeId", "data-v-7c5824a6"]]), Ng = { class: "header-tabs__container" }, Bg = ["onClick"], Ag = /* @__PURE__ */ re({
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
      "3f1506a2": f(l)
    }));
    const r = je(), a = g({
      get() {
        return n.modelValue;
      },
      set(d) {
        t("update:model-value", d);
      }
    }), o = g(() => r.getRealColor(n.color)), l = g(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (d) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === d
    }), m = (d) => {
      a.value = d;
    };
    return (d, y) => (v(), _("div", Ng, [
      (v(!0), _(fe, null, Te(e.items, (p, s) => (v(), _("button", {
        key: `tab-${s}`,
        class: de(u(s)),
        onClick: (h) => m(s)
      }, ye(p), 11, Bg))), 128))
    ]));
  }
});
const Eg = /* @__PURE__ */ be(Ag, [["__scopeId", "data-v-bc4f98ee"]]), Vg = ["alt", "src"], Yg = /* @__PURE__ */ re({
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
    xe((l) => ({
      "4b1fc71c": e.width,
      "01ebbade": e.height,
      "43df32a8": e.objectFit,
      "577c0369": e.aspectRatio,
      "066055c8": e.borderRadius,
      "10f878f2": e.objectPosition
    }));
    const r = g(() => new URL(n.src, import.meta.url).href), a = g(() => ({
      image__container: !0,
      "image__container--clickable": n.clickable
    })), o = (l) => {
      t("click", l);
    };
    return (l, u) => (v(), _("img", {
      alt: e.alt,
      src: f(r),
      class: de(f(a)),
      onClick: o
    }, null, 10, Vg));
  }
});
const Fg = /* @__PURE__ */ be(Yg, [["__scopeId", "data-v-2d0c5d22"]]), Ug = { class: "grid gap-x-3 items-center information-text__wrapper" }, Lg = { class: "text-base leading-4 information-text__text" }, Wg = { class: "text-base leading-4 pl-3 font-semibold overflow-hidden text-ellipsis information-text__text" }, Hg = /* @__PURE__ */ re({
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
      "3d2b7482": e.padding,
      f7b45664: e.gridTemplateColumns,
      "55e9ced4": f(r)
    }));
    const { getRealColor: n } = je(), r = g(() => n(t.color));
    return (a, o) => (v(), _("div", Ug, [
      U("p", Lg, ye(e.label), 1),
      U("p", Wg, [
        H(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const zg = /* @__PURE__ */ be(Hg, [["__scopeId", "data-v-9aa564ba"]]), jg = {
  key: 0,
  class: "page-switch__label"
}, qg = { class: "page-switch__switch" }, Gg = /* @__PURE__ */ re({
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
    const r = je(), a = g({
      get() {
        return n.modelValue;
      },
      set(s) {
        n.readonly || t("update:model-value", s);
      }
    }), o = g(() => r.getRealColor(n.activeColor)), l = g(() => r.getRealColor(n.color)), u = g(() => n.disabled ? "rgb(var(--neutro-4))" : n.activeColor && a.value ? o.value : l.value), m = g(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": a.value
    })), d = g(() => ({
      "page-switch__container": !0,
      "page-switch__container--disabled": n.disabled
    })), y = g(() => n.disabled ? "rgb(var(--neutro-4))" : "rgb(var(--secundario))"), p = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (s, h) => (v(), te(Gr, { disabled: e.disabled }, We({
      activator: K(() => [
        U("div", {
          class: de(f(d)),
          onClick: p
        }, [
          e.label ? (v(), _("div", jg, ye(e.label), 1)) : M("", !0),
          U("div", qg, [
            Tt(U("input", {
              "onUpdate:modelValue": h[0] || (h[0] = (k) => Ee(a) ? a.value = k : null),
              type: "checkbox",
              class: "page-switch__checkbox"
            }, null, 512), [
              [Du, f(a)]
            ]),
            U("div", {
              class: de(f(m))
            }, null, 2)
          ])
        ], 2)
      ]),
      _: 2
    }, [
      e.tooltip && !e.disabled ? {
        name: "default",
        fn: K(() => [
          Ce(ye(e.tooltip), 1)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["disabled"]));
  }
});
const Qg = /* @__PURE__ */ be(Gg, [["__scopeId", "data-v-6a99dbf1"]]), Zg = /* @__PURE__ */ re({
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
    const r = je(), a = g(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = g(() => r.getRealColor(n.backgroundColor)), l = () => {
      t("click:close");
    };
    return (u, m) => (v(), _("div", {
      class: de(f(a))
    }, [
      pe(bt, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: K(() => [
          H(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["color", "predefined-style"]),
      e.closable ? (v(), _("div", {
        key: 0,
        class: "panel-title__close",
        onClick: l
      }, [
        pe(Fe, {
          color: "error",
          size: e.iconSize,
          name: "fm-circle-close"
        }, null, 8, ["size"])
      ])) : M("", !0)
    ], 2));
  }
});
const Xg = /* @__PURE__ */ be(Zg, [["__scopeId", "data-v-e0769a10"]]), Kg = /* @__PURE__ */ re({
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
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), te(qr, {
      modelValue: f(r),
      "onUpdate:modelValue": o[0] || (o[0] = (l) => Ee(r) ? r.value = l : null),
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
}), Jg = /* @__PURE__ */ re({
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
    const r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return Qe(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), Qe(
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
            pe(gu, { "justify-content": "center" }, {
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
                Ce(ye(e.text), 1)
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
                Ce(ye(e.subtitle), 1)
              ]),
              _: 1
            })) : M("", !0)
          ]),
          _: 1
        }, 8, ["width"])
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const e0 = /* @__PURE__ */ be(Jg, [["__scopeId", "data-v-5bd362ef"]]);
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
    const [a, o, l] = xt.rgbToHsv(t, n, r);
    this.hue = a, this.value = l, this.saturation = o;
  }
  setFromHex(t) {
    const [n, r, a] = xt.hexToRgb(t);
    this.setFromRgb(n, r, a);
  }
  static rgbToHsv(t, n, r) {
    const a = t / 255, o = n / 255, l = r / 255, u = Math.max(a, o, l), m = Math.min(a, o, l);
    let d = 0, y = 0;
    const p = u, s = u - m;
    return u === m ? d = 0 : u === a && o >= l ? d = 60 * ((o - l) / s) : u === a && o < l ? d = 60 * ((o - l) / s) + 360 : u === o ? d = 60 * ((l - a) / s) + 120 : u === l && (d = 60 * ((a - o) / s) + 240), u > 0 && (y = 1 - m / u), [Math.round(d), Math.round(y * 100) / 100, Math.round(p * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, l = r * (1 - n), u = r * (1 - o * n), m = r * (1 - (1 - o) * n);
    let d = 0, y = 0, p = 0;
    switch (a) {
      case 0:
        d = r, y = m, p = l;
        break;
      case 1:
        d = u, y = r, p = l;
        break;
      case 2:
        d = l, y = r, p = m;
        break;
      case 3:
        d = l, y = u, p = r;
        break;
      case 4:
        d = m, y = l, p = r;
        break;
      case 5:
        d = r, y = l, p = u;
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
      const [l, u, m] = t.split("");
      r = parseInt(l.repeat(2), 16), a = parseInt(u.repeat(2), 16), o = parseInt(m.repeat(2), 16);
    } else {
      const [l, u, m] = t.match(/.{2}/g) ?? ["0", "0", "0"];
      r = parseInt(l, 16), a = parseInt(u, 16), o = parseInt(m, 16);
    }
    return [r, a, o];
  }
  static fromRgb(t, n, r) {
    const [a, o, l] = xt.rgbToHsv(t, n, r);
    return new xt(a, o, l);
  }
  static fromHex(t) {
    const [n, r, a] = xt.hexToRgb(t);
    return xt.fromRgb(n, r, a);
  }
}
const Xo = (e) => (Mo("data-v-851bc20e"), e = e(), Io(), e), t0 = ["onMousedown"], n0 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ U("div", { class: "color-picker__canvas-thumb" }, null, -1)), r0 = [
  n0
], a0 = ["onMousedown"], o0 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ U("div", { class: "color-picker__hue-thumb" }, null, -1)), l0 = [
  o0
], i0 = { class: "color-picker__hex-input-container" }, u0 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ U("span", { class: "color-picker__hex-hash" }, " # ", -1)), s0 = { class: "color-picker__colors" }, c0 = ["onClick"], f0 = /* @__PURE__ */ re({
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
    xe((D) => ({
      "44519b14": f(I),
      "21503e0b": f(P),
      d11f3254: f(B),
      "40a1b156": m.value,
      "67f5cab4": l.value
    }));
    const { getRealColor: r } = je(), a = R(!1), o = R(!1), l = R("translateX(0)"), u = R(null), m = R("translate(0, 0"), d = R(null), y = Ct(xt.fromHex(n.modelValue)), p = Ct({
      left: 0,
      width: 0
    }), s = Ct({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    ze(() => {
      T();
    });
    const h = g({
      get() {
        return n.modelValue;
      },
      set(D) {
        t("update:model-value", D);
      }
    }), k = g(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), I = g(() => r(n.background)), B = g(() => `rgb(${y.rgb.join(",")})`), P = g(() => `hsl(${y.hue}, 100%, 50%)`), V = g({
      get() {
        return y.hex.slice(1);
      },
      set(D) {
        y.setFromHex(D), T();
      }
    });
    function T() {
      if (!d.value || !u.value)
        return;
      const D = u.value.getBoundingClientRect(), $ = y.hue / 360 * D.width;
      l.value = `translateX(${$}px)`;
      const i = d.value.getBoundingClientRect(), c = y.saturation * i.width, O = (1 - y.value) * i.height;
      m.value = `translate(${c}px, ${O}px)`, h.value = y.hex;
    }
    function Y(D) {
      const $ = Math.min(p.width, Math.max(0, D.clientX - p.left));
      y.hue = $ / p.width * 360, l.value = `translateX(${$}px)`, h.value = y.hex;
    }
    function G(D) {
      if (!d.value)
        return;
      const $ = d.value.getBoundingClientRect(), i = Math.min($.width, Math.max(0, D.clientX - $.left)), c = Math.min($.height, Math.max(0, D.clientY - $.top));
      y.saturation = i / $.width, y.value = 1 - c / $.height, m.value = `translate(${i}px, ${c}px)`, h.value = y.hex;
    }
    function X(D) {
      if (!d.value)
        return;
      const $ = d.value.getBoundingClientRect();
      s.top = $.top, s.left = $.left, s.width = $.width, s.height = $.height, o.value = !0, G(D), E();
    }
    function ee(D) {
      if (!u.value)
        return;
      const $ = u.value.getBoundingClientRect();
      p.left = $.left, p.width = $.width, a.value = !0, Y(D), E();
    }
    function A(D) {
      a.value ? Y(D) : o.value && G(D);
    }
    function x() {
      a.value = !1, N();
    }
    function E() {
      document.addEventListener("mouseup", x), document.addEventListener("mousemove", A);
    }
    function N() {
      document.removeEventListener("mouseup", x), document.removeEventListener("mousemove", A);
    }
    function Z(D) {
      const $ = ["v", "c"];
      D.ctrlKey && $.includes(D.key) || D.preventDefault();
    }
    function q(D) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": h.value === D
      };
    }
    function ne(D) {
      V.value = D, h.value = D;
    }
    return (D, $) => (v(), _("div", {
      class: de(f(k))
    }, [
      U("div", {
        ref_key: "canvasRef",
        ref: d,
        class: "color-picker__canvas",
        onMousedown: De(X, ["stop", "prevent"])
      }, r0, 40, t0),
      U("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: De(ee, ["stop", "prevent"])
      }, l0, 40, a0),
      U("div", i0, [
        u0,
        Tt(U("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (i) => Ee(V) ? V.value = i : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Ni, f(V)]
        ])
      ]),
      U("div", s0, [
        (v(!0), _(fe, null, Te(e.pickableColors, (i, c) => (v(), _("div", {
          key: `pickable-color-${c}`,
          style: St(`--color: ${i}`),
          class: de(q(i)),
          onClick: (O) => ne(i)
        }, null, 14, c0))), 128))
      ])
    ], 2));
  }
});
const bu = /* @__PURE__ */ be(f0, [["__scopeId", "data-v-851bc20e"]]), d0 = { class: "form-color-picker__label" }, m0 = /* @__PURE__ */ re({
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
    xe((P) => ({
      "7f6d82c2": e.gridTemplateColumns,
      "92f99466": f(p),
      "66ca7121": f(s),
      "1a24176b": f(y),
      "131ff3d2": r.value,
      "50e618f6": a.value
    }));
    const r = R(""), a = R(""), o = R(""), l = R(!1), u = R(!1), m = R(null), d = R(null), y = g({
      get() {
        return n.modelValue;
      },
      set(P) {
        t("update:model-value", P);
      }
    }), p = g(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), s = g(() => n.large ? "100%" : "2.75rem");
    async function h() {
      await it();
      const P = m.value, V = d.value;
      if (!P || !V)
        return;
      const T = P.getBoundingClientRect(), Y = V.getBoundingClientRect();
      a.value = `${T.left}px`, o.value = `${T.width}px`;
      const G = T.top + T.height + Y.height, X = window.innerHeight, ee = T.top + T.height;
      if (G > X) {
        const A = G - X;
        r.value = `${ee - A - 16}px`;
      } else
        r.value = `${ee}px`;
    }
    function k() {
      n.disabled || n.readonly || l.value || (l.value = !0, h(), u.value = !0, document.addEventListener("click", I));
    }
    function I(P) {
      !m.value || !P.target || m.value.contains(P.target) || B();
    }
    function B() {
      l.value = !1, u.value = !1, document.removeEventListener("click", I);
    }
    return (P, V) => (v(), _("div", {
      ref_key: "container",
      ref: m,
      class: "form-color-picker__container"
    }, [
      U("div", d0, ye(e.label), 1),
      U("div", {
        class: "form-color-picker__input",
        onClick: k
      }),
      pe(yt, null, {
        default: K(() => [
          l.value ? (v(), _("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "form-color-picker__menu"
          }, [
            pe(bu, {
              modelValue: f(y),
              "onUpdate:modelValue": V[0] || (V[0] = (T) => Ee(y) ? y.value = T : null),
              dark: e.dark,
              background: e.background,
              "pickable-colors": e.pickableColors
            }, null, 8, ["modelValue", "dark", "background", "pickable-colors"])
          ], 512)) : M("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
const p0 = /* @__PURE__ */ be(m0, [["__scopeId", "data-v-2d3b2229"]]), y0 = ["onMousedown"], v0 = /* @__PURE__ */ re({
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
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e;
    xe((I) => ({
      "5e7c93f6": r.value,
      47714157: a.value
    })), ze(() => {
      n.default === !0 && p();
    });
    const r = R(""), a = R(""), o = R(""), l = R(!1), u = R(!1), m = R(null), d = R(null), y = async () => {
      r.value = "", a.value = "", await it();
      const I = m.value, B = d.value;
      if (!I || !B)
        return;
      const P = I.getBoundingClientRect(), V = B.getBoundingClientRect(), T = n.nudgeLeft - n.nudgeRight, Y = n.nudgeTop - n.nudgeBottom, G = P.left + T;
      a.value = `${G}px`, o.value = `${P.width}px`;
      const X = P.top + P.height + V.height, ee = window.innerHeight, A = P.top + P.height + Y;
      if (X > ee) {
        const N = X - ee;
        r.value = `${A - N - 16}px`;
      } else
        r.value = `${A}px`;
      const x = V.right, E = window.innerWidth;
      if (x > E) {
        const N = x - E;
        a.value = `${G - N}px`;
      }
    }, p = () => {
      n.disabled && !n.default || (l.value = !0, y(), !n.disabled && (u.value = !0, document.addEventListener("click", h)));
    }, s = () => {
      n.disabled || (l.value = !1, u.value = !1, document.removeEventListener("click", h), t("close"));
    }, h = (I) => {
      !m.value || !I.target || m.value.contains(I.target) || s();
    }, k = () => {
      n.disabled || (l.value ? s() : p());
    };
    return (I, B) => (v(), _("div", {
      ref_key: "container",
      ref: m,
      class: "custom-menu__container"
    }, [
      U("div", {
        onMousedown: De(k, ["stop"])
      }, [
        H(I.$slots, "activator", {}, void 0, !0)
      ], 40, y0),
      pe(yt, null, {
        default: K(() => [
          l.value ? (v(), _("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "custom-menu__menu"
          }, [
            H(I.$slots, "default", { close: s }, void 0, !0)
          ], 512)) : M("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const h0 = /* @__PURE__ */ be(v0, [["__scopeId", "data-v-b783ae39"]]), g0 = {
  key: 0,
  class: "expansion-panel__content"
}, b0 = /* @__PURE__ */ re({
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
    const r = je(), a = R(!1), o = g(() => {
      const p = parseInt(n.transitionDuration);
      return isNaN(p) ? 0 : p;
    }), l = g({
      get() {
        return n.modelValue === void 0 ? a.value : n.modelValue;
      },
      set(p) {
        a.value = p, t("update:model-value", p);
      }
    }), u = g(() => ({
      "expansion-panel__container": !0,
      "expansion-panel__container--outlined": n.outlined
    })), m = g(() => ({
      "expansion-panel__wrapper": !0,
      "expansion-panel__wrapper--opened": l.value
    })), d = g(() => r.getRealColor(n.backgroundColor));
    function y() {
      l.value = !l.value;
    }
    return (p, s) => (v(), _("div", {
      class: de(f(u))
    }, [
      U("div", {
        class: "expansion-panel__activator",
        onClick: y
      }, [
        H(p.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      U("div", {
        class: de(f(m))
      }, [
        pe(yt, { duration: f(o) }, {
          default: K(() => [
            a.value || f(l) ? (v(), _("div", g0, [
              H(p.$slots, "default", {}, void 0, !0)
            ])) : M("", !0)
          ]),
          _: 3
        }, 8, ["duration"])
      ], 2)
    ], 2));
  }
});
const _0 = /* @__PURE__ */ be(b0, [["__scopeId", "data-v-25b57f9a"]]), w0 = { class: "grid__container" }, k0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", w0, [
      H(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const x0 = /* @__PURE__ */ be(k0, [["__scopeId", "data-v-546aaa6e"]]), S0 = { class: "absolute__container" }, $0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", S0, [
      H(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const O0 = /* @__PURE__ */ be($0, [["__scopeId", "data-v-b5f56ae6"]]), T0 = { class: "relative__container" }, P0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", T0, [
      H(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const C0 = /* @__PURE__ */ be(P0, [["__scopeId", "data-v-c8285f36"]]), D0 = /* @__PURE__ */ re({
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
        pe(Gr, null, We({
          activator: K(() => [
            pe(bt, {
              padding: "0.125rem 0",
              "text-transform": e.textTransform,
              "predefined-style": e.opened && e.showActiveStyle ? "body-2" : "body-1",
              color: e.opened && e.showActiveStyle ? "acento-principal" : "secundario"
            }, {
              default: K(() => [
                Ce(ye(e.title), 1)
              ]),
              _: 1
            }, 8, ["text-transform", "predefined-style", "color"])
          ]),
          _: 2
        }, [
          n() ? {
            name: "default",
            fn: K(() => [
              H(r.$slots, "default")
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.opened ? (v(!0), _(fe, { key: 0 }, Te(e.items, (o, l) => (v(), _(fe, {
          key: `item-${l.toString()}`
        }, [
          n("value") ? H(r.$slots, "value", {
            key: 0,
            value: o
          }) : (v(), te(bt, {
            key: 1,
            color: e.itemColor,
            padding: "0.125rem 0",
            "predefined-style": "caption"
          }, {
            default: K(() => [
              Ce(ye(o), 1)
            ]),
            _: 2
          }, 1032, ["color"]))
        ], 64))), 128)) : M("", !0)
      ]),
      _: 3
    }));
  }
}), R0 = /* @__PURE__ */ re({
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
      "7a873368": f(l),
      f38c0922: e.objectFit,
      "6de9f8be": e.borderRadius,
      "58a1d6ea": e.objectPosition
    }));
    const r = R(null), a = ["jpg", "png", "webp", "svg", "gif", "jpeg"], o = g({
      get() {
        return n.modelValue;
      },
      set(y) {
        t("update:model-value", y);
      }
    }), l = g(() => o.value ? `url("${URL.createObjectURL(o.value)}")` : n.src ? `url("${n.src}")` : ""), u = g(() => ({
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
    return (y, p) => (v(), _("div", {
      class: de(f(u))
    }, [
      U("input", {
        ref_key: "inputRef",
        ref: r,
        hidden: "",
        type: "file",
        accept: ".jpg,.png,.webp,.svg,.gif,.jpeg",
        onChange: d
      }, null, 544),
      U("div", {
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
const M0 = /* @__PURE__ */ be(R0, [["__scopeId", "data-v-d0c430c6"]]), I0 = /* @__PURE__ */ re({
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
      "594394ee": f(l)
    }));
    const r = g(() => Array.isArray(n.modelValue) ? n.modelValue.includes(n.value) : n.modelValue === n.value), a = g(() => ({
      "custom-chip__wrapper": !0,
      "custom-chip__wrapper--selected": r.value
    })), o = g(() => r.value ? "acento-secundario-pressed" : "acento-secundario"), l = g(() => `rgb(var(--${o.value}))`);
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
    return (d, y) => (v(), _("div", {
      class: de(f(a)),
      onClick: u
    }, [
      pe(bt, {
        color: f(o),
        "predefined-style": "caption"
      }, {
        default: K(() => [
          Ce(ye(e.text), 1)
        ]),
        _: 1
      }, 8, ["color"]),
      f(r) ? (v(), te(Qt, {
        key: 0,
        size: "1rem",
        color: "neutro-4",
        icon: "fm-circle-close",
        onClick: De(m, ["stop"])
      }, null, 8, ["onClick"])) : M("", !0)
    ], 2));
  }
});
const N0 = /* @__PURE__ */ be(I0, [["__scopeId", "data-v-81015ccc"]]), _u = (e) => (Mo("data-v-f500483c"), e = e(), Io(), e), B0 = /* @__PURE__ */ _u(() => /* @__PURE__ */ U("div", {
  role: "progressbar",
  class: "absolute h-2 w-2 rounded input-range__progress"
}, null, -1)), A0 = /* @__PURE__ */ _u(() => /* @__PURE__ */ U("div", {
  role: "button",
  class: "h-5 w-5 rounded-full absolute pointer-events-none -top-1.5 -left-2.5 input-range__thump"
}, null, -1)), E0 = [
  B0,
  A0
], V0 = /* @__PURE__ */ re({
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
    xe((k) => ({
      a2c08aa2: f(u),
      "032d9904": f(l),
      "11dba316": a.value,
      "205f17ff": f(m)
    }));
    const { getRealColor: r } = je(), a = R(""), o = R(null);
    ze(s);
    const l = g(() => r(n.thumbColor)), u = g(() => r(n.trackColor)), m = g(() => r(n.progressColor)), d = g({
      get() {
        return n.modelValue;
      },
      set(k) {
        t("update:model-value", k);
      }
    });
    function y(k) {
      p(k), document.body.style.userSelect = "none", document.addEventListener("mouseup", h), document.addEventListener("mousemove", p);
    }
    function p({ clientX: k }) {
      if (!o.value)
        return;
      const { left: I, width: B } = o.value.getBoundingClientRect(), P = Math.min(B, Math.max(0, k - I));
      d.value = P * 100 / B, s();
    }
    function s() {
      if (!o.value)
        return;
      const { width: k } = o.value.getBoundingClientRect();
      a.value = `${d.value / 100 * k}px`;
    }
    function h() {
      document.body.style.userSelect = "inital", document.removeEventListener("mouseup", h), document.removeEventListener("mousemove", p);
    }
    return Qe(d, s), (k, I) => (v(), _("div", {
      ref_key: "barRef",
      ref: o,
      role: "slider",
      class: "h-2 w-full bg-amber-950 rounded relative input-range__track",
      onMousedown: y
    }, E0, 544));
  }
});
const wu = /* @__PURE__ */ be(V0, [["__scopeId", "data-v-f500483c"]]), Y0 = (e) => (Mo("data-v-ec8ab006"), e = e(), Io(), e), F0 = { class: "image-editor__wrapper grid gap-y-8" }, U0 = ["width", "height"], L0 = /* @__PURE__ */ Y0(() => /* @__PURE__ */ U("div", { class: "absolute w-full top-0 left-0 h-full image-editor__area" }, null, -1)), W0 = {
  key: 0,
  class: "absolute grid grid-cols-[auto_1fr] gap-x-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] image-cropper__tooltip rounded-2xl p-2"
}, H0 = { class: "text-white text-base leading-5" }, z0 = { class: "grid grid-cols-[auto_50%_auto] justify-center gap-x-3 items-center" }, j0 = /* @__PURE__ */ re({
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
    xe((D) => ({
      "701c0bdd": f(h),
      "0b28d123": f(B)
    }));
    const r = R(1), a = R(0), o = R(0), l = R(0), u = R(0), m = R(0), d = R(!0), y = R(null), p = R(null), s = R(null);
    ze(async () => {
      p.value && (s.value = p.value.getContext("2d"), y.value = await X(), G());
    });
    const h = g(() => `${n.width}px`), k = g(() => n.width / 2), I = g(() => n.height / 2), B = g(() => `${I.value}px`), P = g(() => {
      var D;
      return (((D = y.value) == null ? void 0 : D.width) ?? 0) * r.value;
    }), V = g(() => {
      var D;
      return (((D = y.value) == null ? void 0 : D.height) ?? 0) * r.value;
    }), T = g(() => P.value / 2 - I.value), Y = g(() => V.value / 2 - I.value);
    function G() {
      if (!s.value || !y.value)
        return;
      s.value.clearRect(0, 0, n.width, n.height), s.value.save(), s.value.translate(k.value + u.value, I.value + m.value), s.value.scale(r.value, r.value);
      const D = y.value.width / 2, $ = y.value.height / 2;
      s.value.drawImage(
        y.value,
        -D,
        -$,
        y.value.width,
        y.value.height
      ), s.value.restore();
    }
    function X() {
      return new Promise((D) => {
        const $ = new Image();
        $.onload = () => {
          const i = $.width / $.height;
          $.width = Math.max(n.height, n.height * i), $.height = Math.max(n.height, n.height / i), D($);
        }, $.src = URL.createObjectURL(n.file);
      });
    }
    async function ee() {
      await it(), m.value = Math.max(-Y.value, Math.min(Y.value, m.value)), u.value = Math.max(-T.value, Math.min(T.value, u.value));
    }
    async function A() {
      r.value = 1 + l.value / 100 * 2, await ee(), G();
    }
    function x({ clientX: D, clientY: $ }) {
      d.value && (d.value = !1), a.value = D, o.value = $, document.body.style.userSelect = "none", document.addEventListener("mouseup", N), document.addEventListener("mousemove", E);
    }
    function E({ clientX: D, clientY: $ }) {
      const i = m.value + $ - o.value, c = u.value + D - a.value;
      m.value = Math.max(-Y.value, Math.min(Y.value, i)), u.value = Math.max(-T.value, Math.min(T.value, c)), G(), a.value = D, o.value = $;
    }
    function N() {
      document.body.style.userSelect = "initial", document.removeEventListener("mouseup", N), document.removeEventListener("mousemove", E);
    }
    async function Z(D) {
      return new Promise(($) => {
        D.toBlob((i) => $(i));
      });
    }
    async function q() {
      if (!p.value)
        return;
      const D = document.createElement("canvas"), $ = D.getContext("2d");
      if (!$)
        return;
      const i = n.height;
      D.width = i, D.height = i;
      const c = n.width / 2 - I.value, O = n.height / 2 - I.value;
      return $.drawImage(p.value, c, O, i, i, 0, 0, i, i), await Z(D);
    }
    async function ne(D) {
      l.value = Math.max(0, Math.min(100, D * 10 + l.value)), await A();
    }
    return t({ crop: q }), Qe(
      () => n.file,
      async () => {
        y.value = await X(), await ee(), G();
      }
    ), (D, $) => (v(), _("div", F0, [
      U("div", {
        class: "relative cursor-move image-editor__canvas",
        onMousedown: x
      }, [
        U("canvas", {
          ref_key: "canvas",
          ref: p,
          width: e.width,
          height: e.height
        }, null, 8, U0),
        L0,
        d.value ? (v(), _("div", W0, [
          pe(Fe, {
            size: "1.25rem",
            name: "fm-move",
            color: "neutro-1"
          }),
          U("p", H0, ye(e.tooltip), 1)
        ])) : M("", !0)
      ], 32),
      U("div", z0, [
        pe(Qt, {
          size: "1.5rem",
          color: e.buttonColor,
          icon: "fm-minus-circle",
          disabled: l.value === 0,
          onClick: $[0] || ($[0] = (i) => ne(-1))
        }, null, 8, ["color", "disabled"]),
        pe(wu, {
          modelValue: l.value,
          "onUpdate:modelValue": [
            $[1] || ($[1] = (i) => l.value = i),
            A
          ],
          "thumb-color": e.thumbColor,
          "track-color": e.trackColor,
          "progress-color": e.progressColor
        }, null, 8, ["modelValue", "thumb-color", "track-color", "progress-color"]),
        pe(Qt, {
          size: "1.5rem",
          color: e.buttonColor,
          icon: "fm-plus-circle",
          disabled: l.value === 100,
          onClick: $[2] || ($[2] = (i) => ne(1))
        }, null, 8, ["color", "disabled"])
      ])
    ]));
  }
});
const q0 = /* @__PURE__ */ be(j0, [["__scopeId", "data-v-ec8ab006"]]), G0 = ["name", "rows", "data-dark", "readonly", "disabled", "data-filled", "maxlength", "data-outlined", "placeholder"], Q0 = {
  key: 0,
  class: "block text-right text-[#5E798F] text-sm leading-5 font-medium col-start-2"
}, Z0 = /* @__PURE__ */ re({
  __name: "TTextarea",
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: null
    },
    maxLength: {
      default: null,
      type: [Number, String]
    },
    showCounter: {
      type: Boolean
    },
    placeholder: {
      default: "",
      type: String
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    dark: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    rows: {
      default: null,
      type: [Number, String]
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), _(fe, null, [
      Tt(U("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ee(r) ? r.value = l : null),
        name: e.name,
        rows: e.rows,
        "data-dark": e.dark,
        readonly: e.readonly,
        disabled: e.disabled,
        "data-filled": !!f(r),
        maxlength: e.maxLength,
        "data-outlined": e.outlined,
        placeholder: e.placeholder,
        class: "w-full resize-none rounded-xl p-3 outline-none"
      }, null, 8, G0), [
        [Ni, f(r)]
      ]),
      e.showCounter ? (v(), _("span", Q0, [
        Ce(ye(f(r).length), 1),
        e.maxLength ? (v(), _(fe, { key: 0 }, [
          Ce("/" + ye(e.maxLength), 1)
        ], 64)) : M("", !0)
      ])) : M("", !0)
    ], 64));
  }
});
const ku = /* @__PURE__ */ be(Z0, [["__scopeId", "data-v-8c53643b"]]), X0 = { class: "grid gap-y-1 gap-x-3 t-form-texarea__container" }, K0 = ["data-dark", "data-readonly", "data-disabled"], J0 = /* @__PURE__ */ re({
  __name: "TFormTextarea",
  props: {
    modelValue: {
      default: "",
      type: String
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: !0
    },
    placeholder: {
      default: "",
      type: String
    },
    maxLength: {
      default: null,
      type: [Number, String]
    },
    showCounter: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    dark: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    rows: {
      default: null,
      type: [Number, String]
    },
    gridTemplateColumns: {
      default: "1fr 3fr",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e;
    xe((a) => ({
      "110931ba": e.gridTemplateColumns
    }));
    const r = g({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return (a, o) => (v(), _("label", X0, [
      U("span", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "pt-3 text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, K0),
      pe(ku, {
        modelValue: f(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ee(r) ? r.value = l : null),
        rows: e.rows,
        dark: e.dark,
        name: e.name,
        readonly: e.readonly,
        disabled: e.disabled,
        outlined: e.outlined,
        "max-length": e.maxLength,
        placeholder: e.placeholder,
        "show-counter": e.showCounter
      }, null, 8, ["modelValue", "rows", "dark", "name", "readonly", "disabled", "outlined", "max-length", "placeholder", "show-counter"])
    ]));
  }
});
const eb = /* @__PURE__ */ be(J0, [["__scopeId", "data-v-cbb0570e"]]), tb = ["name", "onSubmit"], nb = /* @__PURE__ */ re({
  __name: "TForm",
  props: {
    name: {
      type: String,
      default: null
    },
    gridTemplateColumns: {
      default: "initial",
      type: String
    },
    gridTemplateRows: {
      default: "initial",
      type: String
    },
    gridAutoFlow: {
      default: "initial",
      type: String
    },
    gridAutoColumns: {
      default: "initial",
      type: String
    },
    gridAutoRows: {
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
    justifyContent: {
      default: "initial",
      type: String
    },
    rowGap: {
      default: "initial",
      type: String
    },
    columnGap: {
      default: "initial",
      type: String
    },
    backgroundColor: {
      default: "initial",
      type: String
    },
    padding: {
      default: "initial",
      type: String
    },
    borderRadius: {
      default: "initial",
      type: String
    }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e;
    xe((l) => ({
      e781a454: e.rowGap,
      "78f7cc17": e.padding,
      "05782226": e.columnGap,
      "309db416": e.alignItems,
      "7a93b96e": e.alignContent,
      "51502aca": e.justifyItems,
      "104b00d0": e.borderRadius,
      f79e9ec6: e.gridAutoFlow,
      f7939d70: e.gridAutoRows,
      "0ef645fa": e.justifyContent,
      f74a03e4: e.gridAutoColumns,
      "07459ada": e.gridTemplateRows,
      e03e4746: f(a),
      "712b163a": e.gridTemplateColumns
    }));
    const { getRealColor: r } = je(), a = g(() => r(n.backgroundColor));
    function o(l) {
      t("submit", l);
    }
    return (l, u) => (v(), _("form", {
      name: e.name,
      class: "grid",
      onSubmit: De(o, ["prevent"])
    }, [
      H(l.$slots, "default", {}, void 0, !0)
    ], 40, tb));
  }
});
const rb = /* @__PURE__ */ be(nb, [["__scopeId", "data-v-6502906b"]]), ab = ["onClick"], ob = ["onKeydown"], lb = /* @__PURE__ */ re({
  __name: "TMenu",
  props: {
    disabled: {
      type: Boolean
    },
    modelValue: {
      default: null,
      type: Boolean
    },
    nudgeTop: {
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
    },
    nudgeBottom: {
      default: 0,
      type: Number
    },
    animation: {
      default: "animate-fade-down",
      type: String
    },
    position: {
      default: "bottom",
      type: String
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = R(!1), a = R(null), o = R(null);
    ze(() => {
      u(l.value);
    });
    const l = g({
      get() {
        return n.modelValue === null ? r.value : n.modelValue;
      },
      set(B) {
        t("update:model-value", B), r.value = B;
      }
    });
    function u(B) {
      a.value && (a.value.classList.add(n.animation), B ? (a.value.classList.remove("animate-reverse"), a.value.classList.remove("hidden"), a.value.focus(), m(), document.addEventListener("click", s)) : (a.value.classList.add("animate-reverse"), document.removeEventListener("click", s)));
    }
    function m() {
      if (!a.value || !o.value)
        return;
      const B = a.value.getBoundingClientRect(), P = o.value.getBoundingClientRect();
      let V = y(B, P), T = d(B, P);
      V = Math.max(0, Math.min(V, window.innerHeight - B.height)), T = Math.max(0, Math.min(T, window.innerWidth - B.width));
      const Y = n.nudgeTop - n.nudgeBottom, G = n.nudgeLeft - n.nudgeRight;
      a.value.style.top = `${V + Y}px`, a.value.style.left = `${T + G}px`;
    }
    function d(B, P) {
      let V = P.left;
      return n.position === "left" && (V -= B.width), n.position === "right" && (V += P.width), V;
    }
    function y(B, P) {
      let V = P.top;
      return n.position === "top" && (V -= B.height), n.position === "bottom" && (V = P.bottom), V;
    }
    function p(B) {
      B.newState !== "open" && (l.value = !1);
    }
    function s(B) {
      if (!a.value || !o.value || !l.value)
        return;
      const P = B.target;
      P.getAttribute("data-menu-activator") !== null || o.value === P || o.value.contains(P) || P !== a.value && !a.value.contains(P) && (l.value = !1);
    }
    function h() {
      a.value && (a.value.classList.remove(n.animation), !l.value && (a.value.classList.remove("animate-reverse"), a.value.classList.add("hidden")));
    }
    function k({ key: B }) {
      B === "Escape" && (l.value = !1);
    }
    function I() {
      n.disabled || (l.value = !l.value);
    }
    return Qe(l, () => {
      a.value && u(l.value);
    }), (B, P) => (v(), _("div", null, [
      U("button", {
        ref_key: "activatorButton",
        ref: o,
        type: "button",
        onClick: De(I, ["stop"])
      }, [
        H(B.$slots, "activator")
      ], 8, ab),
      U("div", {
        ref_key: "menuDiv",
        ref: a,
        role: "menu",
        tabindex: "0",
        class: "animate-duration-300 bg-transparent outline-none fixed hidden",
        onToggle: p,
        onKeydown: De(k, ["stop"]),
        onAnimationend: h
      }, [
        H(B.$slots, "default")
      ], 40, ob)
    ]));
  }
}), sb = (e) => {
  Ai().generateOverlayContainer(), e.component("AbsoluteContainer", O0), e.component("RelativeContainer", C0), e.component("CheckBox", Ei), e.component("ConfirmationDialog", is), e.component("CustomButton", ya), e.component("CustomDatePicker", Qo), e.component("CustomDialog", No), e.component("CustomSelect", Zo), e.component("CustomTextField", qr), e.component("DataTable", cg), e.component("DataTableItem", fg), e.component("FilterDatePicker", yg), e.component("FilterSelect", bg), e.component("FlexContainer", gu), e.component("FormDatePicker", $g), e.component("FormSelect", Cg), e.component("FormTextField", Ig), e.component("GridColumn", Hr), e.component("GridRow", Vi), e.component("HeaderTabs", Eg), e.component("IconButton", Qt), e.component("ImageContainer", Fg), e.component("InformationText", zg), e.component("PageSwitch", Qg), e.component("PanelTitle", Xg), e.component("SearchTextField", Kg), e.component("SuccessDialog", e0), e.component("SvgIcon", Rt), e.component("TextContainer", bt), e.component("FormColorPicker", p0), e.component("ColorPicker", bu), e.component("CustomMenu", h0), e.component("FigmaIcon", Fe), e.component("ExpansionPanel", _0), e.component("GridContainer", x0), e.component("CustomTooltip", Gr), e.component("ExpandableDataTableItem", D0), e.component("ImageInput", M0), e.component("CustomChip", N0), e.component("InputRange", wu), e.component("ImageCropper", q0), e.component("TPagination", hu), e.component("TTextarea", ku), e.component("TFormTextarea", eb), e.component("TForm", rb), e.component("TMenu", lb);
};
export {
  sb as componentesReutility
};
