var Tu = Object.defineProperty;
var Pu = (e, t, n) => t in e ? Tu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dn = (e, t, n) => (Pu(e, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as M, defineComponent as re, useCssVars as xe, unref as c, onMounted as ze, computed as g, watch as He, openBlock as v, createElementBlock as _, createElementVNode as U, normalizeClass as de, createVNode as pe, Transition as pt, withCtx as K, Fragment as ce, createBlock as te, createCommentVNode as R, withDirectives as vt, isRef as Be, vModelCheckbox as Ni, renderSlot as L, nextTick as Xe, useSlots as ut, createTextVNode as Ie, toDisplayString as ye, reactive as Ct, toRef as nr, onUnmounted as Ro, mergeProps as Ge, createSlots as Ze, renderList as Te, normalizeProps as Je, guardReactiveProps as yt, resolveDynamicComponent as Bi, Teleport as Cu, withKeys as _e, withModifiers as Ce, normalizeStyle as $t, vShow as rn, onBeforeUpdate as Du, getCurrentScope as Ru, onScopeDispose as Mu, vModelDynamic as Jo, vModelText as Ai, pushScopeId as Mo, popScopeId as Io } from "vue";
const Ei = M(null), Vi = M(null), Yi = typeof document.documentElement.showPopover == "function";
function Iu() {
  const e = document.createElement("div");
  if (e.classList.add("custom-tooltip--overlay"), document.body.appendChild(e), Vi.value = e, !Yi) {
    const t = document.createElement("div");
    t.setAttribute("id", "tooltipWrapper"), document.body.appendChild(t), Ei.value = t;
  }
}
function No() {
  return {
    // Data
    tooltipWrapper: Ei,
    supportsPopover: Yi,
    overlayContainer: Vi,
    // Methods
    generateOverlayContainer: Iu
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
}, Nu = /* @__PURE__ */ re({
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
      "6c3a208c": c(a)
    }));
    const n = je();
    ze(() => {
      o();
    });
    const r = M(null), a = g(() => n.getRealColor(t.color)), o = async () => {
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
    return He(() => t.src, o), He(() => t.size, o), (l, u) => (v(), _("div", {
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
}, Rt = /* @__PURE__ */ be(Nu, [["__scopeId", "data-v-b7e98673"]]), Bu = { class: "font-awesome-icon__container" }, Au = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => `icon-${t.name}`), a = g(() => n.getRealColor(t.color));
    return (o, l) => (v(), _("div", Bu, [
      U("em", {
        class: de(c(r))
      }, null, 2)
    ]));
  }
});
const Fe = /* @__PURE__ */ be(Au, [["__scopeId", "data-v-f943628b"]]), Eu = { class: "grid place-items-center relative [&:has(input:focus-visible)]:outline" }, Vu = ["readonly", "disabled"], Fi = /* @__PURE__ */ re({
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
      set(l) {
        t("update:model-value", l);
      }
    }), a = g(() => n.disabled ? "neutro-4" : n.boxColor), o = g(() => n.disabled ? "neutro-4" : n.checkedColor);
    return (l, u) => (v(), _("div", Eu, [
      pe(pt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: K(() => [
          c(r) ? (v(), _(ce, { key: 0 }, [
            e.checkedIcon && e.checkedIcon.startsWith("fm") ? (v(), te(Fe, {
              key: 0,
              class: "absolute",
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(o)
            }, null, 8, ["name", "size", "color"])) : e.checkedIcon ? (v(), te(Rt, {
              key: 1,
              class: "absolute",
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(o)
            }, null, 8, ["src", "size", "color"])) : R("", !0)
          ], 64)) : R("", !0)
        ]),
        _: 1
      }),
      e.boxIcon && e.boxIcon.startsWith("fm") ? (v(), te(Fe, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: c(a)
      }, null, 8, ["name", "size", "color"])) : e.boxIcon ? (v(), te(Rt, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: c(a)
      }, null, 8, ["src", "size", "color"])) : R("", !0),
      vt(U("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (d) => Be(r) ? r.value = d : null),
        type: "checkbox",
        readonly: e.readonly,
        disabled: e.disabled,
        class: "absolute w-full h-full opacity-0 outline-1 cursor-pointer disabled:cursor-default"
      }, null, 8, Vu), [
        [Ni, c(r)]
      ])
    ]));
  }
});
const Yu = { class: "grid-row__container" }, Fu = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", Yu, [
      L(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Ui = /* @__PURE__ */ be(Fu, [["__scopeId", "data-v-65fb3aec"]]), Uu = { class: "grid-column__container" }, Wu = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", Uu, [
      L(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Hr = /* @__PURE__ */ be(Wu, [["__scopeId", "data-v-4058c78a"]]), Lu = ["width", "height"], Hu = ["fill"], zu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), ju = [
  zu
], qu = ["fill"], Gu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Qu = [
  Gu
], Zu = ["fill"], Xu = /* @__PURE__ */ U("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Ku = [
  Xu
], Ju = /* @__PURE__ */ re({
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
        fill: c(r)
      }, ju, 8, Hu),
      U("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: c(r)
      }, Qu, 8, qu),
      U("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: c(r)
      }, Ku, 8, Zu)
    ], 8, Lu));
  }
}), es = ["type", "disabled"], ts = { class: "custom-button__text" }, ns = /* @__PURE__ */ re({
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
      "54c17d1a": c(l),
      "7e48db42": e.justifyItems,
      a6dc2536: c(o),
      "6bd9610a": e.justifyContent,
      "7a663706": c(y),
      "9e4028ea": c(d),
      f72ab4c6: c(u)
    }));
    const r = je(), a = g(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = g(() => r.getRealColor(n.color)), l = g(() => r.getRealColor(n.contentColor)), u = g(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), d = g(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), f = g(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined
    })), y = g(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), m = (s) => {
      n.disabled || t("click", s);
    };
    return (s, h) => (v(), _("button", {
      type: e.type,
      disabled: e.disabled,
      class: de(c(f)),
      onClick: m
    }, [
      e.preppendIcon && !e.loading ? (v(), _(ce, { key: 0 }, [
        e.preppendIcon && e.preppendIcon.startsWith("fm") ? (v(), te(Fe, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"])) : (v(), te(Rt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : R("", !0),
      U("span", ts, [
        e.loading ? (v(), te(Ju, {
          key: 0,
          fill: c(a)
        }, null, 8, ["fill"])) : L(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (v(), _(ce, { key: 1 }, [
        e.appendIcon && e.appendIcon.startsWith("fm") ? (v(), te(Fe, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"])) : (v(), te(Rt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.appendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : R("", !0)
    ], 10, es));
  }
});
const ya = /* @__PURE__ */ be(ns, [["__scopeId", "data-v-ea175b6c"]]), rs = /* @__PURE__ */ re({
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
    const r = M(null), a = M(!1), o = M(!1), l = M(!1), u = g(() => ({
      custom__dialog: !0,
      "custom__dialog--closing": o.value,
      "custom__dialog--shaking": l.value,
      "custom__dialog--opening": a.value
    })), d = g({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    });
    He(d, (h) => {
      r.value && (h ? (a.value = !0, r.value.showModal()) : o.value = !0);
    });
    function f() {
      n.persistent ? l.value = !0 : d.value = !1;
    }
    function y(h) {
      h.target === h.currentTarget && f();
    }
    function m() {
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
      h.key === "Escape" && (h.preventDefault(), f());
    }
    return He(d, async (h) => {
      var S;
      h && (await Xe(), (S = r.value) == null || S.focus());
    }), (h, S) => (v(), _("dialog", {
      ref_key: "dialogRef",
      ref: r,
      class: de(c(u)),
      onClick: y,
      onKeydown: s,
      onAnimationend: m
    }, [
      L(h.$slots, "default", {}, void 0, !0)
    ], 34));
  }
});
const Bo = /* @__PURE__ */ be(rs, [["__scopeId", "data-v-049c2987"]]), as = ["data-clickable"], os = ["data-clickable"], ls = ["data-clickable", "data-style"], is = ["data-clickable"], us = ["data-clickable", "data-style"], ss = /* @__PURE__ */ re({
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
    xe((C) => ({
      "17ea02c3": e.padding,
      "2f5fb8c1": c(y),
      "65ec9f04": e.fontSize,
      "1dbf0fec": e.textAlign,
      "760a6b6e": e.lineHeight,
      "901a3096": e.fontWeight,
      "1b106b2a": e.whiteSpace,
      "2b5b946c": e.borderRadius,
      "00f6fa6f": e.letterSpacing,
      "5b797c1e": e.textTransform,
      "82fcd87e": c(m),
      "04440f7a": c(h),
      "8cb27c32": c(s),
      "0ff86dd8": c(S)
    }));
    const r = ut(), a = je();
    ze(() => {
      $(n.specialText);
    });
    const o = M(null), l = M(null), u = M(null), d = M(null), f = M(null), y = g(() => a.getRealColor(n.color)), m = g(() => a.getRealColor(n.hoverColor)), s = g(() => a.getRealColor(n.activeColor)), h = g(() => a.getRealColor(n.hoverBackground)), S = g(() => a.getRealColor(n.activeBackground));
    function $(C) {
      const E = o.value ?? f.value ?? d.value ?? u.value ?? l.value;
      if (!C || !E || r.default)
        return;
      const P = /\*([^*]+)\*/g;
      E.innerHTML = C.replace(P, (V) => `<strong>${V.slice(1, V.length - 1)}</strong>`);
    }
    function B(C) {
      n.clickable && t("click", C);
    }
    return He(() => n.specialText, $), (C, E) => e.predefinedStyle === "h1" ? (v(), _("h1", {
      key: 0,
      ref_key: "h1Ref",
      ref: l,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      L(C.$slots, "default", {}, void 0, !0)
    ], 8, as)) : e.predefinedStyle === "h2" ? (v(), _("h2", {
      key: 1,
      ref_key: "h2Ref",
      ref: u,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      L(C.$slots, "default", {}, void 0, !0)
    ], 8, os)) : e.predefinedStyle === "subtitle-1" || e.predefinedStyle === "subtitle-2" ? (v(), _("h3", {
      key: 2,
      ref_key: "h3Ref",
      ref: d,
      "data-clickable": e.clickable,
      "data-style": e.predefinedStyle,
      onClick: B
    }, [
      L(C.$slots, "default", {}, void 0, !0)
    ], 8, ls)) : e.predefinedStyle === "caption" ? (v(), _("small", {
      key: 3,
      ref_key: "smallRef",
      ref: f,
      "data-clickable": e.clickable,
      onClick: B
    }, [
      L(C.$slots, "default", {}, void 0, !0)
    ], 8, is)) : (v(), _("p", {
      key: 4,
      ref_key: "pRef",
      ref: o,
      "data-clickable": e.clickable,
      "data-style": e.predefinedStyle,
      onClick: B
    }, [
      L(C.$slots, "default", {}, void 0, !0)
    ], 8, us));
  }
});
const _t = /* @__PURE__ */ be(ss, [["__scopeId", "data-v-4403fb70"]]), cs = /* @__PURE__ */ re({
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
    return (l, u) => (v(), te(Bo, {
      modelValue: c(r),
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Be(r) ? r.value = d : null),
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
            pe(_t, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: K(() => [
                Ie(ye(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(_t, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: K(() => [
                Ie(ye(e.subtitle), 1)
              ]),
              _: 1
            })) : R("", !0),
            pe(Ui, { "column-gap": "0.75rem" }, {
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
function fe(e) {
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
  var n = me(e), r = fe(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function bt(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
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
function Wi(e, t) {
  if (ae(2, arguments), !t || vn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? fe(t.years) : 0, r = t.months ? fe(t.months) : 0, a = t.weeks ? fe(t.weeks) : 0, o = t.days ? fe(t.days) : 0, l = t.hours ? fe(t.hours) : 0, u = t.minutes ? fe(t.minutes) : 0, d = t.seconds ? fe(t.seconds) : 0, f = me(e), y = r || n ? bt(f, r + n * 12) : f, m = o || a ? Dt(y, o + a * 7) : y, s = u + l * 60, h = d + s * 60, S = h * 1e3, $ = new Date(m.getTime() + S);
  return $;
}
function fs(e, t) {
  ae(2, arguments);
  var n = me(e).getTime(), r = fe(t);
  return new Date(n + r);
}
var ds = {};
function kt() {
  return ds;
}
function Ft(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = kt(), m = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (d = y.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getDay(), S = (h < m ? 7 : 0) + h - m;
  return s.setDate(s.getDate() - S), s.setHours(0, 0, 0, 0), s;
}
function rr(e) {
  return ae(1, arguments), Ft(e, {
    weekStartsOn: 1
  });
}
function ms(e) {
  ae(1, arguments);
  var t = me(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = rr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var l = rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function ps(e) {
  ae(1, arguments);
  var t = ms(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = rr(n);
  return r;
}
function ar(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function el(e) {
  ae(1, arguments);
  var t = me(e);
  return t.setHours(0, 0, 0, 0), t;
}
var ys = 864e5;
function vs(e, t) {
  ae(2, arguments);
  var n = el(e), r = el(t), a = n.getTime() - ar(n), o = r.getTime() - ar(r);
  return Math.round((a - o) / ys);
}
function Li(e, t) {
  ae(2, arguments);
  var n = fe(t);
  return bt(e, n * 12);
}
var Ao = 6e4, Eo = 36e5, hs = 1e3;
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Hi(e) {
  return ae(1, arguments), e instanceof Date || hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function an(e) {
  if (ae(1, arguments), !Hi(e) && typeof e != "number")
    return !1;
  var t = me(e);
  return !isNaN(Number(t));
}
function tl(e, t) {
  var n;
  ae(1, arguments);
  var r = e || {}, a = me(r.start), o = me(r.end), l = o.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var u = [], d = a;
  d.setHours(0, 0, 0, 0);
  var f = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (f < 1 || isNaN(f))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; d.getTime() <= l; )
    u.push(me(d)), d.setDate(d.getDate() + f), d.setHours(0, 0, 0, 0);
  return u;
}
function gs(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = kt(), m = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (d = y.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getDay(), S = (h < m ? -7 : 0) + 6 - (h - m);
  return s.setDate(s.getDate() + S), s.setHours(23, 59, 59, 999), s;
}
function zi(e, t) {
  ae(2, arguments);
  var n = fe(t);
  return fs(e, -n);
}
var bs = 864e5;
function _s(e) {
  ae(1, arguments);
  var t = me(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / bs) + 1;
}
function qt(e) {
  ae(1, arguments);
  var t = 1, n = me(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function ji(e) {
  ae(1, arguments);
  var t = me(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = qt(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var l = qt(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function ws(e) {
  ae(1, arguments);
  var t = ji(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = qt(n);
  return r;
}
var ks = 6048e5;
function qi(e) {
  ae(1, arguments);
  var t = me(e), n = qt(t).getTime() - ws(t).getTime();
  return Math.round(n / ks) + 1;
}
function Ut(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = kt(), m = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : y.weekStartsOn) !== null && r !== void 0 ? r : (d = y.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = me(e), h = s.getUTCDay(), S = (h < m ? 7 : 0) + h - m;
  return s.setUTCDate(s.getUTCDate() - S), s.setUTCHours(0, 0, 0, 0), s;
}
function Vo(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = me(e), m = y.getUTCFullYear(), s = kt(), h = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = s.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = /* @__PURE__ */ new Date(0);
  S.setUTCFullYear(m + 1, 0, h), S.setUTCHours(0, 0, 0, 0);
  var $ = Ut(S, t), B = /* @__PURE__ */ new Date(0);
  B.setUTCFullYear(m, 0, h), B.setUTCHours(0, 0, 0, 0);
  var C = Ut(B, t);
  return y.getTime() >= $.getTime() ? m + 1 : y.getTime() >= C.getTime() ? m : m - 1;
}
function xs(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = kt(), m = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = y.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Vo(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(s, 0, m), h.setUTCHours(0, 0, 0, 0);
  var S = Ut(h, t);
  return S;
}
var Ss = 6048e5;
function Gi(e, t) {
  ae(1, arguments);
  var n = me(e), r = Ut(n, t).getTime() - xs(n, t).getTime();
  return Math.round(r / Ss) + 1;
}
function Oe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var $s = {
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
const Pt = $s;
var Ht = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Os = {
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
    var o = Vo(t, a), l = o > 0 ? o : 1 - o;
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
    var r = ji(t);
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
    var o = Gi(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Oe(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = qi(t);
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
    var a = _s(t);
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
        return rl(l);
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
        return rl(l);
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
        return "GMT" + nl(l, ":");
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
        return "GMT" + nl(l, ":");
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
function nl(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var l = t || "";
  return n + String(a) + l + Oe(o, 2);
}
function rl(e, t) {
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
const Ts = Os;
var al = function(t, n) {
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
}, Qi = function(t, n) {
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
}, Ps = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return al(t, n);
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
  return l.replace("{{date}}", al(a, n)).replace("{{time}}", Qi(o, n));
}, Cs = {
  p: Qi,
  P: Ps
};
const va = Cs;
var Ds = ["D", "DD"], Rs = ["YY", "YYYY"];
function Zi(e) {
  return Ds.indexOf(e) !== -1;
}
function Xi(e) {
  return Rs.indexOf(e) !== -1;
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
var Ms = {
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
}, Is = function(t, n, r) {
  var a, o = Ms[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Ns = Is;
function ea(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Bs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, As = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Es = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vs = {
  date: ea({
    formats: Bs,
    defaultWidth: "full"
  }),
  time: ea({
    formats: As,
    defaultWidth: "full"
  }),
  dateTime: ea({
    formats: Es,
    defaultWidth: "full"
  })
};
const Ys = Vs;
var Fs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Us = function(t, n, r, a) {
  return Fs[t];
};
const Ws = Us;
function Jt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[l] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, d = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[d] || e.values[u];
    }
    var f = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[f];
  };
}
var Ls = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zs = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, js = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, qs = {
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
}, Gs = {
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
}, Qs = function(t, n) {
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
}, Zs = {
  ordinalNumber: Qs,
  era: Jt({
    values: Ls,
    defaultWidth: "wide"
  }),
  quarter: Jt({
    values: Hs,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Jt({
    values: zs,
    defaultWidth: "wide"
  }),
  day: Jt({
    values: js,
    defaultWidth: "wide"
  }),
  dayPeriod: Jt({
    values: qs,
    defaultWidth: "wide",
    formattingValues: Gs,
    defaultFormattingWidth: "wide"
  })
};
const Xs = Zs;
function en(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? Js(u, function(m) {
      return m.test(l);
    }) : Ks(u, function(m) {
      return m.test(l);
    }), f;
    f = e.valueCallback ? e.valueCallback(d) : d, f = n.valueCallback ? n.valueCallback(f) : f;
    var y = t.slice(l.length);
    return {
      value: f,
      rest: y
    };
  };
}
function Ks(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Js(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ec(e) {
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
var tc = /^(\d+)(th|st|nd|rd)?/i, nc = /\d+/i, rc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ac = {
  any: [/^b/i, /^(a|c)/i]
}, oc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, lc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ic = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uc = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, sc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, cc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, fc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, dc = {
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
}, mc = {
  ordinalNumber: ec({
    matchPattern: tc,
    parsePattern: nc,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: en({
    matchPatterns: rc,
    defaultMatchWidth: "wide",
    parsePatterns: ac,
    defaultParseWidth: "any"
  }),
  quarter: en({
    matchPatterns: oc,
    defaultMatchWidth: "wide",
    parsePatterns: lc,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: en({
    matchPatterns: ic,
    defaultMatchWidth: "wide",
    parsePatterns: uc,
    defaultParseWidth: "any"
  }),
  day: en({
    matchPatterns: sc,
    defaultMatchWidth: "wide",
    parsePatterns: cc,
    defaultParseWidth: "any"
  }),
  dayPeriod: en({
    matchPatterns: fc,
    defaultMatchWidth: "any",
    parsePatterns: dc,
    defaultParseWidth: "any"
  })
};
const pc = mc;
var yc = {
  code: "en-US",
  formatDistance: Ns,
  formatLong: Ys,
  formatRelative: Ws,
  localize: Xs,
  match: pc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ki = yc;
var vc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gc = /^'([^]*?)'?$/, bc = /''/g, _c = /[a-zA-Z]/;
function on(e, t, n) {
  var r, a, o, l, u, d, f, y, m, s, h, S, $, B, C, E, P, V;
  ae(2, arguments);
  var Q = String(t), X = kt(), ee = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : X.locale) !== null && r !== void 0 ? r : Ki, A = fe((o = (l = (u = (d = n == null ? void 0 : n.firstWeekContainsDate) !== null && d !== void 0 ? d : n == null || (f = n.locale) === null || f === void 0 || (y = f.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : X.firstWeekContainsDate) !== null && l !== void 0 ? l : (m = X.locale) === null || m === void 0 || (s = m.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var x = fe((h = (S = ($ = (B = n == null ? void 0 : n.weekStartsOn) !== null && B !== void 0 ? B : n == null || (C = n.locale) === null || C === void 0 || (E = C.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && $ !== void 0 ? $ : X.weekStartsOn) !== null && S !== void 0 ? S : (P = X.locale) === null || P === void 0 || (V = P.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(x >= 0 && x <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Y = me(e);
  if (!an(Y))
    throw new RangeError("Invalid time value");
  var N = ar(Y), Z = zi(Y, N), G = {
    firstWeekContainsDate: A,
    weekStartsOn: x,
    locale: ee,
    _originalDate: Y
  }, ne = Q.match(hc).map(function(I) {
    var O = I[0];
    if (O === "p" || O === "P") {
      var i = va[O];
      return i(I, ee.formatLong);
    }
    return I;
  }).join("").match(vc).map(function(I) {
    if (I === "''")
      return "'";
    var O = I[0];
    if (O === "'")
      return wc(I);
    var i = Ts[O];
    if (i)
      return !(n != null && n.useAdditionalWeekYearTokens) && Xi(I) && or(I, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Zi(I) && or(I, t, String(e)), i(Z, I, ee.localize, G);
    if (O.match(_c))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + O + "`");
    return I;
  }).join("");
  return ne;
}
function wc(e) {
  var t = e.match(gc);
  return t ? t[1].replace(bc, "'") : e;
}
function kc(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function xc(e) {
  ae(1, arguments);
  var t = me(e), n = t.getDay();
  return n;
}
function Sc(e) {
  ae(1, arguments);
  var t = me(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Ot(e) {
  ae(1, arguments);
  var t = me(e), n = t.getHours();
  return n;
}
var $c = 6048e5;
function Oc(e) {
  ae(1, arguments);
  var t = me(e), n = rr(t).getTime() - ps(t).getTime();
  return Math.round(n / $c) + 1;
}
function Tt(e) {
  ae(1, arguments);
  var t = me(e), n = t.getMinutes();
  return n;
}
function Re(e) {
  ae(1, arguments);
  var t = me(e), n = t.getMonth();
  return n;
}
function Gt(e) {
  ae(1, arguments);
  var t = me(e), n = t.getSeconds();
  return n;
}
function Tc(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = me(e), m = y.getFullYear(), s = kt(), h = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = s.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = /* @__PURE__ */ new Date(0);
  S.setFullYear(m + 1, 0, h), S.setHours(0, 0, 0, 0);
  var $ = Ft(S, t), B = /* @__PURE__ */ new Date(0);
  B.setFullYear(m, 0, h), B.setHours(0, 0, 0, 0);
  var C = Ft(B, t);
  return y.getTime() >= $.getTime() ? m + 1 : y.getTime() >= C.getTime() ? m : m - 1;
}
function Pc(e, t) {
  var n, r, a, o, l, u, d, f;
  ae(1, arguments);
  var y = kt(), m = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = y.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Tc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(s, 0, m), h.setHours(0, 0, 0, 0);
  var S = Ft(h, t);
  return S;
}
var Cc = 6048e5;
function Dc(e, t) {
  ae(1, arguments);
  var n = me(e), r = Ft(n, t).getTime() - Pc(n, t).getTime();
  return Math.round(r / Cc) + 1;
}
function Me(e) {
  return ae(1, arguments), me(e).getFullYear();
}
function Yo(e, t) {
  ae(2, arguments);
  var n = me(e), r = me(t);
  return n.getTime() > r.getTime();
}
function Fo(e, t) {
  ae(2, arguments);
  var n = me(e), r = me(t);
  return n.getTime() < r.getTime();
}
function Ji(e, t) {
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
function eu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ha(e, t);
}
function ha(e, t) {
  return ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ha(e, t);
}
function tu(e) {
  var t = Mc();
  return function() {
    var r = lr(e), a;
    if (t) {
      var o = lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rc(this, a);
  };
}
function Rc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : ga(e);
}
function ga(e) {
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
function lr(e) {
  return lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, lr(e);
}
function Uo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wo(e, t, n) {
  return t && ol(e.prototype, t), n && ol(e, n), e;
}
function ba(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ic = 10, nu = /* @__PURE__ */ function() {
  function e() {
    Uo(this, e), ba(this, "subPriority", 0);
  }
  return Wo(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Nc = /* @__PURE__ */ function(e) {
  eu(n, e);
  var t = tu(n);
  function n(r, a, o, l, u) {
    var d;
    return Uo(this, n), d = t.call(this), d.value = r, d.validateValue = a, d.setValue = o, d.priority = l, u && (d.subPriority = u), d;
  }
  return Wo(n, [{
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
}(nu), Bc = /* @__PURE__ */ function(e) {
  eu(n, e);
  var t = tu(n);
  function n() {
    var r;
    Uo(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ba(ga(r), "priority", Ic), ba(ga(r), "subPriority", -1), r;
  }
  return Wo(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var l = /* @__PURE__ */ new Date(0);
      return l.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), l.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), l;
    }
  }]), n;
}(nu);
function Ac(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ec(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), e;
}
var Se = /* @__PURE__ */ function() {
  function e() {
    Ac(this, e);
  }
  return Ec(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var l = this.parse(n, r, a, o);
      return l ? {
        setter: new Nc(l.value, this.validate, this.set, this.priority, this.subPriority),
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
function Vc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yc(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function Fc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _a(e, t);
}
function _a(e, t) {
  return _a = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _a(e, t);
}
function Uc(e) {
  var t = Lc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wc(this, a);
  };
}
function Wc(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : wa(e);
}
function wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lc() {
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
function ul(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hc = /* @__PURE__ */ function(e) {
  Fc(n, e);
  var t = Uc(n);
  function n() {
    var r;
    Vc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ul(wa(r), "priority", 140), ul(wa(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Yc(n, [{
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
}, ht = {
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
function Ve(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function gt(e, t) {
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
    value: r * (a * Eo + o * Ao + l * hs),
    rest: t.slice(n[0].length)
  };
}
function ru(e) {
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
function au(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, l = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + l - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function ou(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function zc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jc(e, t, n) {
  return t && sl(e.prototype, t), n && sl(e, n), e;
}
function qc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ka(e, t);
}
function Gc(e) {
  var t = Zc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qc(this, a);
  };
}
function Qc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zc() {
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
function cl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xc = /* @__PURE__ */ function(e) {
  qc(n, e);
  var t = Gc(n);
  function n() {
    var r;
    zc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), cl(xa(r), "priority", 130), cl(xa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return jc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(f) {
        return {
          year: f,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return We(Ye(4, a), u);
        case "yo":
          return We(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return We(Ye(o.length, a), u);
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
        var d = au(l.year, u);
        return a.setUTCFullYear(d, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var f = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return a.setUTCFullYear(f, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
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
function Kc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jc(e, t, n) {
  return t && fl(e.prototype, t), n && fl(e, n), e;
}
function ef(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sa(e, t);
}
function Sa(e, t) {
  return Sa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Sa(e, t);
}
function tf(e) {
  var t = rf();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return nf(this, a);
  };
}
function nf(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : $a(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rf() {
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
function dl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var af = /* @__PURE__ */ function(e) {
  ef(n, e);
  var t = tf(n);
  function n() {
    var r;
    Kc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), dl($a(r), "priority", 130), dl($a(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Jc(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(f) {
        return {
          year: f,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return We(Ye(4, a), u);
        case "Yo":
          return We(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return We(Ye(o.length, a), u);
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
      var d = Vo(a, u);
      if (l.isTwoDigitYear) {
        var f = au(l.year, d);
        return a.setUTCFullYear(f, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Ut(a, u);
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
function of(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lf(e, t, n) {
  return t && ml(e.prototype, t), n && ml(e, n), e;
}
function uf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oa(e, t);
}
function Oa(e, t) {
  return Oa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Oa(e, t);
}
function sf(e) {
  var t = ff();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return cf(this, a);
  };
}
function cf(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ff() {
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
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var df = /* @__PURE__ */ function(e) {
  uf(n, e);
  var t = sf(n);
  function n() {
    var r;
    of(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), pl(Ta(r), "priority", 130), pl(Ta(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return lf(n, [{
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
function mf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pf(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
}
function yf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pa(e, t);
}
function vf(e) {
  var t = gf();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return hf(this, a);
  };
}
function hf(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gf() {
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
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bf = /* @__PURE__ */ function(e) {
  yf(n, e);
  var t = vf(n);
  function n() {
    var r;
    mf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), vl(Ca(r), "priority", 130), vl(Ca(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return pf(n, [{
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
function _f(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wf(e, t, n) {
  return t && hl(e.prototype, t), n && hl(e, n), e;
}
function kf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Da(e, t);
}
function xf(e) {
  var t = $f();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Sf(this, a);
  };
}
function Sf(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : Ra(e);
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
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function gl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Of = /* @__PURE__ */ function(e) {
  kf(n, e);
  var t = xf(n);
  function n() {
    var r;
    _f(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), gl(Ra(r), "priority", 120), gl(Ra(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return wf(n, [{
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
function Tf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pf(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
}
function Cf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function Df(e) {
  var t = Mf();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rf(this, a);
  };
}
function Rf(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : Ia(e);
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
function pr(e) {
  return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pr(e);
}
function _l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var If = /* @__PURE__ */ function(e) {
  Cf(n, e);
  var t = Df(n);
  function n() {
    var r;
    Tf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), _l(Ia(r), "priority", 120), _l(Ia(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Pf(n, [{
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
function Nf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bf(e, t, n) {
  return t && wl(e.prototype, t), n && wl(e, n), e;
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
  var t = Yf();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Vf(this, a);
  };
}
function Vf(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yf() {
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
function kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ff = /* @__PURE__ */ function(e) {
  Af(n, e);
  var t = Ef(n);
  function n() {
    var r;
    Nf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), kl(Ba(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), kl(Ba(r), "priority", 110), r;
  }
  return Bf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(f) {
        return f - 1;
      };
      switch (o) {
        case "M":
          return We(Ve(Ue.month, a), u);
        case "MM":
          return We(Ye(2, a), u);
        case "Mo":
          return We(l.ordinalNumber(a, {
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
function Uf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wf(e, t, n) {
  return t && xl(e.prototype, t), n && xl(e, n), e;
}
function Lf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Aa(e, t);
}
function Hf(e) {
  var t = jf();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return zf(this, a);
  };
}
function zf(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jf() {
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
function Sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qf = /* @__PURE__ */ function(e) {
  Lf(n, e);
  var t = Hf(n);
  function n() {
    var r;
    Uf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Sl(Ea(r), "priority", 110), Sl(Ea(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Wf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(f) {
        return f - 1;
      };
      switch (o) {
        case "L":
          return We(Ve(Ue.month, a), u);
        case "LL":
          return We(Ye(2, a), u);
        case "Lo":
          return We(l.ordinalNumber(a, {
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
function Gf(e, t, n) {
  ae(2, arguments);
  var r = me(e), a = fe(t), o = Gi(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
}
function Qf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Zf(e, t, n) {
  return t && $l(e.prototype, t), n && $l(e, n), e;
}
function Xf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Va(e, t);
}
function Va(e, t) {
  return Va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Va(e, t);
}
function Kf(e) {
  var t = ed();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Jf(this, a);
  };
}
function Jf(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Ya(e);
}
function Ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ed() {
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
function Ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var td = /* @__PURE__ */ function(e) {
  Xf(n, e);
  var t = Kf(n);
  function n() {
    var r;
    Qf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ol(Ya(r), "priority", 100), Ol(Ya(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Zf(n, [{
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
      return Ut(Gf(a, l, u), u);
    }
  }]), n;
}(Se);
function nd(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t), a = qi(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function rd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ad(e, t, n) {
  return t && Tl(e.prototype, t), n && Tl(e, n), e;
}
function od(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
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
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ua(e);
}
function Ua(e) {
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
function Pl(e, t, n) {
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
    return r = t.call.apply(t, [this].concat(o)), Pl(Ua(r), "priority", 100), Pl(Ua(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ad(n, [{
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
      return qt(nd(a, l));
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
function cd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fd(e, t, n) {
  return t && Cl(e.prototype, t), n && Cl(e, n), e;
}
function dd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wa(e, t);
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Wa(e, t);
}
function md(e) {
  var t = yd();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return pd(this, a);
  };
}
function pd(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Rn(e);
}
function Rn(e) {
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
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function ta(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], hd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gd = /* @__PURE__ */ function(e) {
  dd(n, e);
  var t = md(n);
  function n() {
    var r;
    cd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ta(Rn(r), "priority", 90), ta(Rn(r), "subPriority", 1), ta(Rn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return fd(n, [{
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
      var l = a.getUTCFullYear(), u = ou(l), d = a.getUTCMonth();
      return u ? o >= 1 && o <= hd[d] : o >= 1 && o <= vd[d];
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
function bd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _d(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function wd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function kd(e) {
  var t = Sd();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return xd(this, a);
  };
}
function xd(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sd() {
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
var $d = /* @__PURE__ */ function(e) {
  wd(n, e);
  var t = kd(n);
  function n() {
    var r;
    bd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), na(In(r), "priority", 90), na(In(r), "subpriority", 1), na(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return _d(n, [{
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
      var l = a.getUTCFullYear(), u = ou(l);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(0, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function Ho(e, t, n) {
  var r, a, o, l, u, d, f, y;
  ae(2, arguments);
  var m = kt(), s = fe((r = (a = (o = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && a !== void 0 ? a : (f = m.locale) === null || f === void 0 || (y = f.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = me(e), S = fe(t), $ = h.getUTCDay(), B = S % 7, C = (B + 7) % 7, E = (C < s ? 7 : 0) + S - $;
  return h.setUTCDate(h.getUTCDate() + E), h;
}
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function Od(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Td(e, t, n) {
  return t && Rl(e.prototype, t), n && Rl(e, n), e;
}
function Pd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function Cd(e) {
  var t = Rd();
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
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rd() {
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
function Ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Md = /* @__PURE__ */ function(e) {
  Pd(n, e);
  var t = Cd(n);
  function n() {
    var r;
    Od(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ml(za(r), "priority", 90), Ml(za(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Td(n, [{
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
      return a = Ho(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
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
function Id(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nd(e, t, n) {
  return t && Il(e.prototype, t), n && Il(e, n), e;
}
function Bd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ja(e, t);
}
function Ad(e) {
  var t = Vd();
  return function() {
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ed(this, a);
  };
}
function Ed(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vd() {
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
function Nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yd = /* @__PURE__ */ function(e) {
  Bd(n, e);
  var t = Ad(n);
  function n() {
    var r;
    Id(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Nl(qa(r), "priority", 90), Nl(qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Nd(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + m;
      };
      switch (o) {
        case "e":
        case "ee":
          return We(Ye(o.length, a), d);
        case "eo":
          return We(l.ordinalNumber(a, {
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
      return a = Ho(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
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
function Fd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ud(e, t, n) {
  return t && Bl(e.prototype, t), n && Bl(e, n), e;
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
function Ld(e) {
  var t = zd();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
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
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function Al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jd = /* @__PURE__ */ function(e) {
  Wd(n, e);
  var t = Ld(n);
  function n() {
    var r;
    Fd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Al(Qa(r), "priority", 90), Al(Qa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Ud(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(y) {
        var m = Math.floor((y - 1) / 7) * 7;
        return (y + u.weekStartsOn + 6) % 7 + m;
      };
      switch (o) {
        case "c":
        case "cc":
          return We(Ye(o.length, a), d);
        case "co":
          return We(l.ordinalNumber(a, {
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
      return a = Ho(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Se);
function qd(e, t) {
  ae(2, arguments);
  var n = fe(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = me(e), o = a.getUTCDay(), l = n % 7, u = (l + 7) % 7, d = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + d), a;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function Gd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function El(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qd(e, t, n) {
  return t && El(e.prototype, t), n && El(e, n), e;
}
function Zd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Xd(e) {
  var t = Jd();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var o = Sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Kd(this, a);
  };
}
function Kd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jd() {
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
function Vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var em = /* @__PURE__ */ function(e) {
  Zd(n, e);
  var t = Xd(n);
  function n() {
    var r;
    Gd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Vl(Xa(r), "priority", 90), Vl(Xa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Qd(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(f) {
        return f === 0 ? 7 : f;
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
          return We(l.day(a, {
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
          return We(l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return We(l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return We(l.day(a, {
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
      return a = qd(a, l), a.setUTCHours(0, 0, 0, 0), a;
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
function tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nm(e, t, n) {
  return t && Yl(e.prototype, t), n && Yl(e, n), e;
}
function rm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function am(e) {
  var t = lm();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return om(this, a);
  };
}
function om(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lm() {
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
function Fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var im = /* @__PURE__ */ function(e) {
  rm(n, e);
  var t = am(n);
  function n() {
    var r;
    tm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Fl(Ja(r), "priority", 80), Fl(Ja(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return nm(n, [{
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
function um(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sm(e, t, n) {
  return t && Ul(e.prototype, t), n && Ul(e, n), e;
}
function cm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function fm(e) {
  var t = mm();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dm(this, a);
  };
}
function dm(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mm() {
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
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pm = /* @__PURE__ */ function(e) {
  cm(n, e);
  var t = fm(n);
  function n() {
    var r;
    um(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Wl(to(r), "priority", 80), Wl(to(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return sm(n, [{
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
function ym(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vm(e, t, n) {
  return t && Ll(e.prototype, t), n && Ll(e, n), e;
}
function hm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function gm(e) {
  var t = _m();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return bm(this, a);
  };
}
function bm(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _m() {
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
var wm = /* @__PURE__ */ function(e) {
  hm(n, e);
  var t = gm(n);
  function n() {
    var r;
    ym(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Hl(ro(r), "priority", 80), Hl(ro(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return vm(n, [{
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
function km(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xm(e, t, n) {
  return t && zl(e.prototype, t), n && zl(e, n), e;
}
function Sm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function $m(e) {
  var t = Tm();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Om(this, a);
  };
}
function Om(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tm() {
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
function jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pm = /* @__PURE__ */ function(e) {
  Sm(n, e);
  var t = $m(n);
  function n() {
    var r;
    km(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), jl(oo(r), "priority", 70), jl(oo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return xm(n, [{
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
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function Cm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dm(e, t, n) {
  return t && ql(e.prototype, t), n && ql(e, n), e;
}
function Rm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Mm(e) {
  var t = Nm();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Im(this, a);
  };
}
function Im(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : io(e);
}
function io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nm() {
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
function Gl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bm = /* @__PURE__ */ function(e) {
  Rm(n, e);
  var t = Mm(n);
  function n() {
    var r;
    Cm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Gl(io(r), "priority", 70), Gl(io(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return Dm(n, [{
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
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function Am(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ql(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Em(e, t, n) {
  return t && Ql(e.prototype, t), n && Ql(e, n), e;
}
function Vm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Ym(e) {
  var t = Um();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Fm(this, a);
  };
}
function Fm(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Um() {
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
function Zl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wm = /* @__PURE__ */ function(e) {
  Vm(n, e);
  var t = Ym(n);
  function n() {
    var r;
    Am(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Zl(so(r), "priority", 70), Zl(so(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Em(n, [{
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
function Lm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hm(e, t, n) {
  return t && Xl(e.prototype, t), n && Xl(e, n), e;
}
function zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function jm(e) {
  var t = Gm();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qm(this, a);
  };
}
function qm(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gm() {
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
function Kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qm = /* @__PURE__ */ function(e) {
  zm(n, e);
  var t = jm(n);
  function n() {
    var r;
    Lm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Kl(fo(r), "priority", 70), Kl(fo(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Hm(n, [{
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
function Zm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xm(e, t, n) {
  return t && Jl(e.prototype, t), n && Jl(e, n), e;
}
function Km(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function Jm(e) {
  var t = tp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ep(this, a);
  };
}
function ep(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : po(e);
}
function po(e) {
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
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var np = /* @__PURE__ */ function(e) {
  Km(n, e);
  var t = Jm(n);
  function n() {
    var r;
    Zm(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ei(po(r), "priority", 60), ei(po(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Xm(n, [{
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
function rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ap(e, t, n) {
  return t && ti(e.prototype, t), n && ti(e, n), e;
}
function op(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function lp(e) {
  var t = up();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ip(this, a);
  };
}
function ip(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
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
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function ni(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sp = /* @__PURE__ */ function(e) {
  op(n, e);
  var t = lp(n);
  function n() {
    var r;
    rp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ni(vo(r), "priority", 50), ni(vo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return ap(n, [{
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
function cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fp(e, t, n) {
  return t && ri(e.prototype, t), n && ri(e, n), e;
}
function dp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function mp(e) {
  var t = yp();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return pp(this, a);
  };
}
function pp(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
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
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function ai(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vp = /* @__PURE__ */ function(e) {
  dp(n, e);
  var t = mp(n);
  function n() {
    var r;
    cp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ai(go(r), "priority", 30), ai(go(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return fp(n, [{
    key: "parse",
    value: function(a, o) {
      var l = function(d) {
        return Math.floor(d * Math.pow(10, -o.length + 3));
      };
      return We(Ye(o.length, a), l);
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
function hp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gp(e, t, n) {
  return t && oi(e.prototype, t), n && oi(e, n), e;
}
function bp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function _p(e) {
  var t = kp();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return wp(this, a);
  };
}
function wp(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
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
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function li(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xp = /* @__PURE__ */ function(e) {
  bp(n, e);
  var t = _p(n);
  function n() {
    var r;
    hp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), li(_o(r), "priority", 10), li(_o(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return gp(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return gt(ht.basicOptionalMinutes, a);
        case "XX":
          return gt(ht.basic, a);
        case "XXXX":
          return gt(ht.basicOptionalSeconds, a);
        case "XXXXX":
          return gt(ht.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return gt(ht.extended, a);
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
function Sp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ii(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $p(e, t, n) {
  return t && ii(e.prototype, t), n && ii(e, n), e;
}
function Op(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function Tp(e) {
  var t = Cp();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pp(this, a);
  };
}
function Pp(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
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
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function ui(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dp = /* @__PURE__ */ function(e) {
  Op(n, e);
  var t = Tp(n);
  function n() {
    var r;
    Sp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ui(ko(r), "priority", 10), ui(ko(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return $p(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return gt(ht.basicOptionalMinutes, a);
        case "xx":
          return gt(ht.basic, a);
        case "xxxx":
          return gt(ht.basicOptionalSeconds, a);
        case "xxxxx":
          return gt(ht.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return gt(ht.extended, a);
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
function Rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function si(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mp(e, t, n) {
  return t && si(e.prototype, t), n && si(e, n), e;
}
function Ip(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xo(e, t);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xo(e, t);
}
function Np(e) {
  var t = Ap();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bp(this, a);
  };
}
function Bp(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : So(e);
}
function So(e) {
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
function Er(e) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(e);
}
function ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ep = /* @__PURE__ */ function(e) {
  Ip(n, e);
  var t = Np(n);
  function n() {
    var r;
    Rp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ci(So(r), "priority", 40), ci(So(r), "incompatibleTokens", "*"), r;
  }
  return Mp(n, [{
    key: "parse",
    value: function(a) {
      return ru(a);
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
function Vp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yp(e, t, n) {
  return t && fi(e.prototype, t), n && fi(e, n), e;
}
function Fp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function Up(e) {
  var t = Lp();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var o = Vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wp(this, a);
  };
}
function Wp(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
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
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vr(e);
}
function di(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hp = /* @__PURE__ */ function(e) {
  Fp(n, e);
  var t = Up(n);
  function n() {
    var r;
    Vp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), di(Oo(r), "priority", 20), di(Oo(r), "incompatibleTokens", "*"), r;
  }
  return Yp(n, [{
    key: "parse",
    value: function(a) {
      return ru(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Se), zp = {
  G: new Hc(),
  y: new Xc(),
  Y: new af(),
  R: new df(),
  u: new bf(),
  Q: new Of(),
  q: new If(),
  M: new Ff(),
  L: new qf(),
  w: new td(),
  I: new sd(),
  d: new gd(),
  D: new $d(),
  E: new Md(),
  e: new Yd(),
  c: new jd(),
  i: new em(),
  a: new im(),
  b: new pm(),
  B: new wm(),
  h: new Pm(),
  H: new Bm(),
  K: new Wm(),
  k: new Qm(),
  m: new np(),
  s: new sp(),
  S: new vp(),
  X: new xp(),
  x: new Dp(),
  t: new Ep(),
  T: new Hp()
};
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function mi(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = jp(e)) || t && e && typeof e.length == "number") {
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
  var o = !0, l = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var f = n.next();
    return o = f.done, f;
  }, e: function(f) {
    l = !0, u = f;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l)
        throw u;
    }
  } };
}
function jp(e, t) {
  if (e) {
    if (typeof e == "string")
      return pi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pi(e, t);
  }
}
function pi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var qp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qp = /^'([^]*?)'?$/, Zp = /''/g, Xp = /\S/, Kp = /[a-zA-Z]/;
function To(e, t, n, r) {
  var a, o, l, u, d, f, y, m, s, h, S, $, B, C, E, P, V, Q;
  ae(3, arguments);
  var X = String(e), ee = String(t), A = kt(), x = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : A.locale) !== null && a !== void 0 ? a : Ki;
  if (!x.match)
    throw new RangeError("locale must contain match property");
  var Y = fe((l = (u = (d = (f = r == null ? void 0 : r.firstWeekContainsDate) !== null && f !== void 0 ? f : r == null || (y = r.locale) === null || y === void 0 || (m = y.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && d !== void 0 ? d : A.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = A.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(Y >= 1 && Y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var N = fe((S = ($ = (B = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (E = r.locale) === null || E === void 0 || (P = E.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && B !== void 0 ? B : A.weekStartsOn) !== null && $ !== void 0 ? $ : (V = A.locale) === null || V === void 0 || (Q = V.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && S !== void 0 ? S : 0);
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (ee === "")
    return X === "" ? me(n) : /* @__PURE__ */ new Date(NaN);
  var Z = {
    firstWeekContainsDate: Y,
    weekStartsOn: N,
    locale: x
  }, G = [new Bc()], ne = ee.match(Gp).map(function(le) {
    var ve = le[0];
    if (ve in va) {
      var Ae = va[ve];
      return Ae(le, x.formatLong);
    }
    return le;
  }).join("").match(qp), I = [], O = mi(ne), i;
  try {
    var p = function() {
      var ve = i.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Xi(ve) && or(ve, ee, e), !(r != null && r.useAdditionalDayOfYearTokens) && Zi(ve) && or(ve, ee, e);
      var Ae = ve[0], st = zp[Ae];
      if (st) {
        var he = st.incompatibleTokens;
        if (Array.isArray(he)) {
          var dt = I.find(function(qe) {
            return he.includes(qe.token) || qe.token === Ae;
          });
          if (dt)
            throw new RangeError("The format string mustn't contain `".concat(dt.fullToken, "` and `").concat(ve, "` at the same time"));
        } else if (st.incompatibleTokens === "*" && I.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ve, "` and any other token at the same time"));
        I.push({
          token: Ae,
          fullToken: ve
        });
        var lt = st.run(X, ve, x.match, Z);
        if (!lt)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        G.push(lt.setter), X = lt.rest;
      } else {
        if (Ae.match(Kp))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ae + "`");
        if (ve === "''" ? ve = "'" : Ae === "'" && (ve = Jp(ve)), X.indexOf(ve) === 0)
          X = X.slice(ve.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (O.s(); !(i = O.n()).done; ) {
      var k = p();
      if (Kn(k) === "object")
        return k.v;
    }
  } catch (le) {
    O.e(le);
  } finally {
    O.f();
  }
  if (X.length > 0 && Xp.test(X))
    return /* @__PURE__ */ new Date(NaN);
  var T = G.map(function(le) {
    return le.priority;
  }).sort(function(le, ve) {
    return ve - le;
  }).filter(function(le, ve, Ae) {
    return Ae.indexOf(le) === ve;
  }).map(function(le) {
    return G.filter(function(ve) {
      return ve.priority === le;
    }).sort(function(ve, Ae) {
      return Ae.subPriority - ve.subPriority;
    });
  }).map(function(le) {
    return le[0];
  }), W = me(n);
  if (isNaN(W.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var J = zi(W, ar(W)), q = {}, D = mi(T), w;
  try {
    for (D.s(); !(w = D.n()).done; ) {
      var j = w.value;
      if (!j.validate(J, Z))
        return /* @__PURE__ */ new Date(NaN);
      var ke = j.set(J, q, Z);
      Array.isArray(ke) ? (J = ke[0], kc(q, ke[1])) : J = ke;
    }
  } catch (le) {
    D.e(le);
  } finally {
    D.f();
  }
  return J;
}
function Jp(e) {
  return e.match(Qp)[1].replace(Zp, "'");
}
function ey(e, t) {
  ae(2, arguments);
  var n = fe(t);
  return Dt(e, -n);
}
function ty(e, t) {
  var n;
  ae(1, arguments);
  var r = fe((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = oy(e), o;
  if (a.date) {
    var l = ly(a.date, r);
    o = iy(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), d = 0, f;
  if (a.time && (d = uy(a.time), isNaN(d)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (f = sy(a.timezone), isNaN(f))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var y = new Date(u + d), m = /* @__PURE__ */ new Date(0);
    return m.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()), m.setHours(y.getUTCHours(), y.getUTCMinutes(), y.getUTCSeconds(), y.getUTCMilliseconds()), m;
  }
  return new Date(u + d + f);
}
var mn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, ny = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ry = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, ay = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function oy(e) {
  var t = {}, n = e.split(mn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], mn.timeZoneDelimiter.test(t.date) && (t.date = e.split(mn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = mn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function ly(e, t) {
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
function iy(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(ny);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = tn(n[1]), o = tn(n[2]) - 1, l = tn(n[3]), u = tn(n[4]), d = tn(n[5]) - 1;
  if (r)
    return py(t, u, d) ? cy(t, u, d) : /* @__PURE__ */ new Date(NaN);
  var f = /* @__PURE__ */ new Date(0);
  return !dy(t, o, l) || !my(t, a) ? /* @__PURE__ */ new Date(NaN) : (f.setUTCFullYear(t, o, Math.max(a, l)), f);
}
function tn(e) {
  return e ? parseInt(e) : 1;
}
function uy(e) {
  var t = e.match(ry);
  if (!t)
    return NaN;
  var n = ra(t[1]), r = ra(t[2]), a = ra(t[3]);
  return yy(n, r, a) ? n * Eo + r * Ao + a * 1e3 : NaN;
}
function ra(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function sy(e) {
  if (e === "Z")
    return 0;
  var t = e.match(ay);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return vy(r, a) ? n * (r * Eo + a * Ao) : NaN;
}
function cy(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var fy = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function lu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function dy(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (fy[t] || (lu(e) ? 29 : 28));
}
function my(e, t) {
  return t >= 1 && t <= (lu(e) ? 366 : 365);
}
function py(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function yy(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function vy(e, t) {
  return t >= 0 && t <= 59;
}
function ln(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t), a = n.getFullYear(), o = n.getDate(), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
  var u = Sc(l);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function et(e, t) {
  if (ae(2, arguments), Jn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = me(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = ln(n, t.month)), t.date != null && n.setDate(fe(t.date)), t.hours != null && n.setHours(fe(t.hours)), t.minutes != null && n.setMinutes(fe(t.minutes)), t.seconds != null && n.setSeconds(fe(t.seconds)), t.milliseconds != null && n.setMilliseconds(fe(t.milliseconds)), n);
}
function iu(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
  return n.setHours(r), n;
}
function zo(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
  return n.setMilliseconds(r), n;
}
function uu(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
  return n.setMinutes(r), n;
}
function su(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
  return n.setSeconds(r), n;
}
function Yt(e, t) {
  ae(2, arguments);
  var n = me(e), r = fe(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function jt(e, t) {
  ae(2, arguments);
  var n = fe(t);
  return bt(e, -n);
}
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function hy(e, t) {
  if (ae(2, arguments), !t || er(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? fe(t.years) : 0, r = t.months ? fe(t.months) : 0, a = t.weeks ? fe(t.weeks) : 0, o = t.days ? fe(t.days) : 0, l = t.hours ? fe(t.hours) : 0, u = t.minutes ? fe(t.minutes) : 0, d = t.seconds ? fe(t.seconds) : 0, f = jt(e, r + n * 12), y = ey(f, o + a * 7), m = u + l * 60, s = d + m * 60, h = s * 1e3, S = new Date(y.getTime() - h);
  return S;
}
function gy(e, t) {
  ae(2, arguments);
  var n = fe(t);
  return Li(e, -n);
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
function by() {
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
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function vi() {
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
function cu() {
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
function fu() {
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
function du() {
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
const hi = (e, t, n, r) => {
  const a = To(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return an(a) && Hi(a) ? r ? a : et(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, _y = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return hi(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const l of t)
      if (o = hi(e, l, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), wy = (e, t) => {
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
}, wt = (e) => {
  let t = z(JSON.parse(JSON.stringify(e)));
  return t = iu(t, 0), t = uu(t, 0), t = su(t, 0), t = zo(t, 0), t;
}, mt = (e, t, n, r) => {
  let a = e ? z(e) : z();
  return (t || t === 0) && (a = iu(a, +t)), (n || n === 0) && (a = uu(a, +n)), (r || r === 0) && (a = su(a, +r)), zo(a, 0);
}, tt = (e, t) => !e || !t ? !1 : Fo(wt(e), wt(t)), Ne = (e, t) => !e || !t ? !1 : Ji(wt(e), wt(t)), ot = (e, t) => !e || !t ? !1 : Yo(wt(e), wt(t)), mu = (e, t, n) => e && e[0] && e[1] ? ot(n, e[0]) && tt(n, e[1]) : e && e[0] && t ? ot(n, e[0]) && tt(n, t) || tt(n, e[0]) && ot(n, t) : !1, nn = Ct({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), pu = () => {
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
function jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = {}, ky = {
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
})(ky, Yr);
const xy = /* @__PURE__ */ jo(Yr);
var Fr = {}, Sy = {
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
})(Sy, Fr);
const gi = /* @__PURE__ */ jo(Fr);
function $y(e, t) {
  var n = Cy(t);
  return n.formatToParts ? Ty(n, e) : Py(n, e);
}
var Oy = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ty(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = Oy[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function Py(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var aa = {};
function Cy(e) {
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
function qo(e, t, n, r, a, o, l) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, l), u;
}
var bi = 36e5, Dy = 6e4, oa = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Go(e, t, n) {
  var r, a;
  if (!e || (r = oa.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = oa.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), _i(o) ? -(o * bi) : NaN;
  if (r = oa.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var l = parseInt(r[2], 10);
    return _i(o, l) ? (a = Math.abs(o) * bi + l * Dy, o > 0 ? -a : a) : NaN;
  }
  if (Iy(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : Ry(t), d = Po(u, e), f = n ? d : My(t, d, e);
    return -f;
  }
  return NaN;
}
function Ry(e) {
  return qo(
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
  var n = $y(e, t), r = qo(
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
function My(e, t, n) {
  var r = e.getTime(), a = r - t, o = Po(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var l = Po(new Date(a), n);
  return o === l ? o : Math.max(o, l);
}
function _i(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var wi = {};
function Iy(e) {
  if (wi[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), wi[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ny = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const yu = Ny;
var la = 36e5, ki = 6e4, By = 2, at = {
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
  timeZone: yu
};
function Co(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? By : xy(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Ay(e), o = Ey(a.date, r), l = o.year, u = o.restDateString, d = Vy(u, l);
  if (isNaN(d))
    return /* @__PURE__ */ new Date(NaN);
  if (d) {
    var f = d.getTime(), y = 0, m;
    if (a.time && (y = Yy(a.time), isNaN(y)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (m = Go(a.timeZone || n.timeZone, new Date(f + y)), isNaN(m))
        return /* @__PURE__ */ new Date(NaN);
    } else
      m = gi(new Date(f + y)), m = gi(new Date(f + y + m));
    return new Date(f + y + m);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Ay(e) {
  var t = {}, n = at.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = at.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = at.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function Ey(e, t) {
  var n = at.YYY[t], r = at.YYYYY[t], a;
  if (a = at.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = at.YY.exec(e) || n.exec(e), a) {
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
function Vy(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = at.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, Si(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = at.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var l = parseInt(n[1], 10);
    return Wy(t, l) ? (r.setUTCFullYear(t, 0, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = at.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return Si(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = at.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, $i(t, o) ? xi(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = at.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var d = parseInt(n[2], 10) - 1;
    return $i(t, o, d) ? xi(t, o, d) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Yy(e) {
  var t, n, r;
  if (t = at.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ia(n) ? n % 24 * la : NaN;
  if (t = at.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ia(n, r) ? n % 24 * la + r * ki : NaN;
  if (t = at.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ia(n, r, a) ? n % 24 * la + r * ki + a * 1e3 : NaN;
  }
  return null;
}
function xi(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Fy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Uy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function vu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Si(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = vu(e);
    if (r && n > Uy[t] || !r && n > Fy[t])
      return !1;
  }
  return !0;
}
function Wy(e, t) {
  if (t < 1)
    return !1;
  var n = vu(e);
  return !(n && t > 366 || !n && t > 365);
}
function $i(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ia(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ur = {}, Ly = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Wr = {}, Hy = {
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
})(Hy, Wr);
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
})(Ly, Ur);
const zy = /* @__PURE__ */ jo(Ur);
function jy(e, t, n) {
  var r = Co(e, n), a = Go(t, r, !0), o = new Date(r.getTime() - a), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
}
function qy(e, t, n) {
  if (typeof e == "string" && !e.match(yu)) {
    var r = zy(n);
    return r.timeZone = t, Co(e, r);
  }
  var a = Co(e, n), o = qo(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), l = Go(t, new Date(o));
  return new Date(o + l);
}
const Gy = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, Qy = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Zy = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Xy = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Ky = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Le = (e) => {
  const t = c(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Jy = (e) => Object.assign({ type: "dot" }, e), hu = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ke = (e) => e, Oi = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Ti = (e) => Object.assign(
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
), ev = (e) => Object.assign(
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
), tv = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, nv = (e, t, n) => e || (typeof n == "string" ? n : t), rv = (e) => typeof e == "boolean" ? e ? Ti({}) : !1 : Ti(e), av = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), ov = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), ft = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lr.prop("partial-range"));
  }, n = g(() => ({
    ariaLabels: ev(e.ariaLabels),
    textInputOptions: Object.assign(av(), e.textInputOptions),
    multiCalendars: tv(e.multiCalendars),
    previewFormat: nv(e.previewFormat, e.format, o()),
    filters: ov(e.filters),
    transitions: rv(e.transitions),
    startTime: s()
  })), r = (i) => {
    if (e.range)
      return i();
    throw new Error(Lr.prop("range"));
  }, a = () => {
    const i = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${i}` : `hh:mm${i} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", l = (i, p) => {
    if (typeof e.format == "function")
      return e.format(i);
    const k = p || o(), T = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(i) ? `${on(i[0], k, T)} ${e.modelAuto && !i[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${i[1] ? on(i[1], k, T) : ""}` : on(i, k, T);
  }, u = (i) => e.timezone ? jy(i, e.timezone) : i, d = (i) => e.timezone ? qy(i, e.timezone) : i, f = g(() => (i) => {
    var p;
    return (p = e.hideNavigation) == null ? void 0 : p.includes(i);
  }), y = (i) => {
    const p = e.maxDate ? ot(u(i), u(z(e.maxDate))) : !1, k = e.minDate ? tt(u(i), u(z(e.minDate))) : !1, T = C(i, e.disabledDates), W = n.value.filters.months.map((j) => +j).includes(Re(i)), J = e.disabledWeekDays.length ? e.disabledWeekDays.some((j) => +j === xc(i)) : !1, q = e.allowedDates.length ? !e.allowedDates.some((j) => Ne(u(z(j)), u(i))) : !1, D = Me(i), w = D < +e.yearRange[0] || D > +e.yearRange[1];
    return !(p || k || T || W || w || J || q);
  }, m = (i) => {
    const p = {
      hours: Ot(z()),
      minutes: Tt(z()),
      seconds: e.enableSeconds ? Gt(z()) : 0
    };
    return Object.assign(p, i);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [m(e.startTime[0]), m(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? m(e.startTime) : null, h = (i) => !y(i), S = (i) => Array.isArray(i) ? an(i[0]) && (i[1] ? an(i[1]) : !0) : i ? an(i) : !1, $ = (i) => i instanceof Date ? i : ty(i), B = (i) => {
    const p = Ft(u(i), { weekStartsOn: +e.weekStart }), k = gs(u(i), { weekStartsOn: +e.weekStart });
    return [p, k];
  }, C = (i, p) => Array.isArray(p) ? p.some((k) => Ne(u(z(k)), u(i))) : p(i), E = (i, p, k) => {
    let T = i ? z(i) : z();
    return (p || p === 0) && (T = ln(T, p)), k && (T = Yt(T, k)), T;
  }, P = (i) => et(z(), { hours: Ot(i), minutes: Tt(i), seconds: Gt(i) }), V = (i) => et(z(), {
    hours: +i.hours || 0,
    minutes: +i.minutes || 0,
    seconds: +i.seconds || 0
  }), Q = (i, p, k, T) => {
    if (!i)
      return !0;
    if (T) {
      const W = k === "max" ? Fo(i, p) : Yo(i, p), J = { seconds: 0, milliseconds: 0 };
      return W || Ji(et(i, J), et(p, J));
    }
    return k === "max" ? i.getTime() <= p.getTime() : i.getTime() >= p.getTime();
  }, X = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, ee = (i) => Array.isArray(i) ? [i[0] ? P(i[0]) : null, i[1] ? P(i[1]) : null] : P(i), A = (i) => {
    const p = e.maxTime ? V(e.maxTime) : z(e.maxDate);
    return Array.isArray(i) ? Q(i[0], p, "max", !!e.maxDate) && Q(i[1], p, "max", !!e.maxDate) : Q(i, p, "max", !!e.maxDate);
  }, x = (i, p) => {
    const k = e.minTime ? V(e.minTime) : z(e.minDate);
    return Array.isArray(i) ? Q(i[0], k, "min", !!e.minDate) && Q(i[1], k, "min", !!e.minDate) && p : Q(i, k, "min", !!e.minDate) && p;
  }, Y = (i) => {
    let p = !0;
    if (!i || X())
      return !0;
    const k = !e.minDate && !e.maxDate ? ee(i) : i;
    return (e.maxTime || e.maxDate) && (p = A(Ke(k))), (e.minTime || e.minDate) && (p = x(Ke(k), p)), p;
  }, N = (i, p) => {
    const k = z(JSON.parse(JSON.stringify(i))), T = [];
    for (let W = 0; W < 7; W++) {
      const J = Dt(k, W), q = Re(J) !== p;
      T.push({
        text: e.hideOffsetDates && q ? "" : J.getDate(),
        value: J,
        current: !q,
        classData: {}
      });
    }
    return T;
  }, Z = (i, p) => {
    const k = [], T = z(u(new Date(p, i))), W = z(u(new Date(p, i + 1, 0))), J = Ft(T, { weekStartsOn: e.weekStart }), q = (D) => {
      const w = N(D, i);
      if (k.push({ days: w }), !k[k.length - 1].days.some(
        (j) => Ne(wt(j.value), wt(W))
      )) {
        const j = Dt(D, 7);
        q(j);
      }
    };
    if (q(J), e.sixWeeks && k.length < 6) {
      const D = 6 - k.length;
      for (let w = 1; w <= D; w++) {
        const j = k[k.length - 1], ke = j.days[j.days.length - 1], le = N(Dt(ke.value, 1), Re(T));
        k.push({ days: le });
      }
    }
    return k;
  }, G = (i, p, k) => [et(z(i), { date: 1 }), et(z(), { month: p, year: k, date: 1 })], ne = (i, p) => tt(...G(e.minDate, i, p)) || Ne(...G(e.minDate, i, p)), I = (i, p) => ot(...G(e.maxDate, i, p)) || Ne(...G(e.maxDate, i, p)), O = (i, p, k) => {
    let T = !1;
    return e.maxDate && k && I(i, p) && (T = !0), e.minDate && !k && ne(i, p) && (T = !0), T;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: d,
    formatDate: l,
    getDefaultPattern: o,
    validateDate: y,
    getDefaultStartTime: s,
    isDisabled: h,
    isValidDate: S,
    sanitizeDate: $,
    getWeekFromDate: B,
    matchDate: C,
    setDateMonthOrYear: E,
    isValidTime: Y,
    getCalendarDays: Z,
    validateMonthYearInRange: (i, p, k, T) => {
      let W = !1;
      return T ? e.minDate && e.maxDate ? W = O(i, p, k) : (e.minDate && ne(i, p) || e.maxDate && I(i, p)) && (W = !0) : W = !0, W;
    },
    validateMaxDate: I,
    validateMinDate: ne,
    assignDefaultTime: m,
    defaults: n,
    hideNavigationButtons: f
  };
}, De = Ct({
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
}), ua = M(null), pn = M(!1), sa = M(!1), ca = M(!1), fa = M(!1), rt = M(0), Qe = M(0), Mt = () => {
  const e = g(() => pn.value ? [...De.selectionGrid, De.actionRow].filter((m) => m.length) : sa.value ? [
    ...De.timePicker[0],
    ...De.timePicker[1],
    fa.value ? [] : [ua.value],
    De.actionRow
  ].filter((m) => m.length) : ca.value ? [...De.monthPicker, De.actionRow] : [De.monthYear, ...De.calendar, De.time, De.actionRow].filter((m) => m.length)), t = (m) => {
    rt.value = m ? rt.value + 1 : rt.value - 1;
    let s = null;
    e.value[Qe.value] && (s = e.value[Qe.value][rt.value]), s || (rt.value = m ? rt.value - 1 : rt.value + 1);
  }, n = (m) => {
    Qe.value === 0 && !m || Qe.value === e.value.length && m || (Qe.value = m ? Qe.value + 1 : Qe.value - 1, e.value[Qe.value] ? e.value[Qe.value] && !e.value[Qe.value][rt.value] && rt.value !== 0 && (rt.value = e.value[Qe.value].length - 1) : Qe.value = m ? Qe.value - 1 : Qe.value + 1);
  }, r = (m) => {
    let s = null;
    e.value[Qe.value] && (s = e.value[Qe.value][rt.value]), s ? s.focus({ preventScroll: !pn.value }) : rt.value = m ? rt.value - 1 : rt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, l = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, d = (m, s) => {
    De[s] = m;
  }, f = (m, s) => {
    De[s] = m;
  }, y = () => {
    rt.value = 0, Qe.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: f,
    setTimePickerBackRef: (m) => {
      ua.value = m;
    },
    setSelectionGrid: (m) => {
      pn.value = m, y(), m || (De.selectionGrid = []);
    },
    setTimePicker: (m, s = !1) => {
      sa.value = m, fa.value = s, y(), m || (De.timePicker[0] = [], De.timePicker[1] = []);
    },
    setTimePickerElements: (m, s = 0) => {
      De.timePicker[s] = m;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: l,
    arrowDown: u,
    clearArrowNav: () => {
      De.monthYear = [], De.calendar = [], De.time = [], De.actionRow = [], De.selectionGrid = [], De.timePicker[0] = [], De.timePicker[1] = [], pn.value = !1, sa.value = !1, fa.value = !1, ca.value = !1, y(), ua.value = null;
    },
    setMonthPicker: (m) => {
      ca.value = m, y();
    },
    refSets: De
    // exposed for testing
  };
}, Pi = (e) => Array.isArray(e), At = (e) => Array.isArray(e), Ci = (e) => Array.isArray(e) && e.length === 2, lv = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: l,
    sanitizeDate: u,
    getWeekFromDate: d,
    setDateMonthOrYear: f,
    validateMonthYearInRange: y,
    defaults: m
  } = ft(e), s = g({
    get: () => e.internalModelValue,
    set: (b) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", b);
    }
  }), h = M([]);
  He(s, () => {
    Q();
  });
  const S = M([{ month: Re(z()), year: Me(z()) }]), $ = Ct({
    hours: e.range ? [Ot(z()), Ot(z())] : Ot(z()),
    minutes: e.range ? [Tt(z()), Tt(z())] : Tt(z()),
    seconds: e.range ? [0, 0] : 0
  }), B = g(
    () => (b) => S.value[b] ? S.value[b].month : 0
  ), C = g(
    () => (b) => S.value[b] ? S.value[b].year : 0
  ), E = g(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), P = (b, H, ie) => {
    var se, Ee;
    S.value[b] || (S.value[b] = { month: 0, year: 0 }), S.value[b].month = H === null ? (se = S.value[b]) == null ? void 0 : se.month : H, S.value[b].year = ie === null ? (Ee = S.value[b]) == null ? void 0 : Ee.year : ie;
  }, V = (b, H) => {
    $[b] = H;
  };
  ze(() => {
    s.value || (e.startDate && (P(0, Re(z(e.startDate)), Me(z(e.startDate))), m.value.multiCalendars && Pe(0)), m.value.startTime && I()), Q(!0);
  });
  const Q = (b = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (h.value = s.value, Y(b)) : ee(s.value);
    if (e.timePicker)
      return N();
    if (e.monthPicker && !e.range)
      return Z();
    if (e.yearPicker && !e.range)
      return G();
    if (m.value.multiCalendars && b && !e.startDate)
      return X(z(), b);
  }, X = (b, H = !1) => {
    if ((!m.value.multiCalendars || !e.multiStatic || H) && P(0, Re(b), Me(b)), m.value.multiCalendars)
      for (let ie = 1; ie < m.value.multiCalendars; ie++) {
        const se = et(z(), { month: B.value(ie - 1), year: C.value(ie - 1) }), Ee = Wi(se, { months: 1 });
        S.value[ie] = { month: Re(Ee), year: Me(Ee) };
      }
  }, ee = (b) => {
    X(b), V("hours", Ot(b)), V("minutes", Tt(b)), V("seconds", Gt(b));
  }, A = (b, H) => {
    X(b[0], H);
    const ie = (se, Ee) => [
      se(b[0]),
      b[1] ? se(b[1]) : $[Ee][1]
    ];
    V("hours", ie(Ot, "hours")), V("minutes", ie(Tt, "minutes")), V("seconds", ie(Gt, "seconds"));
  }, x = (b, H) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return A(b, H);
    if (e.multiDates) {
      const ie = b[b.length - 1];
      return ee(ie);
    }
  }, Y = (b) => {
    const H = s.value;
    x(H, b), m.value.multiCalendars && e.multiCalendarsSolo && i();
  }, N = () => {
    if (I(), !e.range)
      s.value = mt(z(), $.hours, $.minutes, ne());
    else {
      const b = $.hours, H = $.minutes;
      s.value = [
        mt(z(), b[0], H[0], ne()),
        mt(z(), b[1], H[1], ne(!1))
      ];
    }
  }, Z = () => {
    s.value = f(z(), B.value(0), C.value(0));
  }, G = () => {
    s.value = z();
  }, ne = (b = !0) => e.enableSeconds ? Array.isArray($.seconds) ? b ? $.seconds[0] : $.seconds[1] : $.seconds : 0, I = () => {
    const b = o();
    if (b) {
      const H = Array.isArray(b), ie = H ? [+b[0].hours, +b[1].hours] : +b.hours, se = H ? [+b[0].minutes, +b[1].minutes] : +b.minutes, Ee = H ? [+b[0].seconds, +b[1].seconds] : +b.seconds;
      V("hours", ie), V("minutes", se), e.enableSeconds && V("seconds", Ee);
    }
  }, O = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, i = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const b = z(
        z(s.value[1] ? s.value[1] : bt(s.value[0], 1))
      ), [H, ie] = [Re(s.value[0]), Me(s.value[0])], [se, Ee] = [Re(s.value[1]), Me(s.value[1])];
      (H !== se || H === se && ie !== Ee) && e.multiCalendarsSolo && P(1, Re(b), Me(b));
    }
  }, p = (b) => {
    const H = bt(b, 1);
    return { month: Re(H), year: Me(H) };
  }, k = (b) => {
    const H = Re(z(b)), ie = Me(z(b));
    if (P(0, H, ie), m.value.multiCalendars > 0)
      for (let se = 1; se < m.value.multiCalendars; se++) {
        const Ee = p(
          et(z(b), { year: B.value(se - 1), month: C.value(se - 1) })
        );
        P(se, Ee.month, Ee.year);
      }
  }, T = (b) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((H) => Ne(b, H))) {
        const H = s.value.filter((ie) => !Ne(ie, b));
        s.value = H.length ? H : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(b);
    else
      s.value = [b];
  }, W = (b, H) => {
    const ie = ot(b, H) ? H : b, se = ot(H, b) ? H : b;
    return tl({ start: ie, end: se });
  }, J = (b, H = 0) => {
    if (Array.isArray(s.value) && s.value[H]) {
      const ie = vs(b, s.value[H]), se = W(s.value[H], b), Ee = se.length === 1 ? 0 : se.filter((xt) => l(xt)).length, ct = Math.abs(ie) - Ee;
      if (e.minRange && e.maxRange)
        return ct >= +e.minRange && ct <= +e.maxRange;
      if (e.minRange)
        return ct >= +e.minRange;
      if (e.maxRange)
        return ct <= +e.maxRange;
    }
    return !0;
  }, q = (b) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (ot(b, s.value[0]) || Ne(b, s.value[0])) ? [s.value[0], b] : e.fixedEnd && (tt(b, s.value[1]) || Ne(b, s.value[1])) ? [b, s.value[1]] : (t("invalid-fixed-range", b), s.value) : [], D = () => {
    e.autoApply && E.value && t("auto-apply", e.partialFlow);
  }, w = () => {
    e.autoApply && t("select-date");
  }, j = (b) => !tl({ start: b[0], end: b[1] }).some((H) => l(H)), ke = (b) => (s.value = d(z(b.value)), D()), le = (b) => {
    const H = mt(z(b.value), $.hours, $.minutes, ne());
    e.multiDates ? T(H) : s.value = H, n(), D();
  }, ve = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Ae = (b, H) => {
    const ie = [z(b.value), Dt(z(b.value), +e.autoRange)];
    j(ie) && (H && k(b.value), h.value = ie);
  }, st = (b) => {
    he(b.value) || !J(b.value, e.fixedStart ? 0 : 1) || (h.value = q(z(b.value)));
  }, he = (b) => e.noDisabledRange ? W(h.value[0], b).some((H) => l(H)) : !1, dt = (b, H) => {
    if (ve(), e.autoRange)
      return Ae(b, H);
    if (e.fixedStart || e.fixedEnd)
      return st(b);
    h.value[0] ? J(z(b.value)) && !he(b.value) && (tt(z(b.value), z(h.value[0])) ? h.value.unshift(z(b.value)) : h.value[1] = z(b.value)) : h.value[0] = z(b.value);
  }, lt = (b) => {
    h.value[b] = mt(
      h.value[b],
      $.hours[b],
      $.minutes[b],
      ne(b !== 1)
    );
  }, qe = () => {
    h.value.length && (h.value[0] && !h.value[1] ? lt(0) : (lt(0), lt(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Zt = (b, H = !1) => {
    if (!(l(b.value) || !b.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return ke(b);
      if (!e.range)
        return le(b);
      At($.hours) && At($.minutes) && !e.multiDates && (dt(b, H), qe());
    }
  }, ge = (b) => {
    const H = b[0];
    return e.weekNumbers === "local" ? Dc(H.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? Oc(H.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(H.value) : "";
  }, Pe = (b) => {
    for (let H = b - 1; H >= 0; H--) {
      const ie = jt(et(z(), { month: B.value(H + 1), year: C.value(H + 1) }), 1);
      P(H, Re(ie), Me(ie));
    }
    for (let H = b + 1; H <= m.value.multiCalendars - 1; H++) {
      const ie = bt(et(z(), { month: B.value(H - 1), year: C.value(H - 1) }), 1);
      P(H, Re(ie), Me(ie));
    }
  }, $e = (b) => f(z(), B.value(b), C.value(b)), Nt = (b) => mt(b, $.hours, $.minutes, ne()), Bt = (b, H) => {
    const ie = e.monthPicker ? B.value(b) !== H.month || !H.fromNav : C.value(b) !== H.year;
    if (P(b, H.month, H.year), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(b), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (ie) {
          let se = s.value ? s.value.slice() : [];
          se.length === 2 && se[1] !== null && (se = []), se.length ? tt($e(b), se[0]) ? se.unshift($e(b)) : se[1] = $e(b) : se = [$e(b)], s.value = se;
        }
      } else
        s.value = $e(b);
    t("update-month-year", { instance: b, month: H.month, year: H.year }), r(e.multiCalendarsSolo ? b : void 0);
  }, Qr = async (b = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Xe();
      const H = e.monthPicker ? b : !1;
      e.range ? t("auto-apply", H || !s.value || s.value.length === 1) : t("auto-apply", H);
    }
    n();
  }, cn = (b, H) => {
    const ie = et(z(), { month: B.value(H), year: C.value(H) }), se = b < 0 ? bt(ie, 1) : jt(ie, 1);
    y(Re(se), Me(se), b < 0, e.preventMinMaxNavigation) && (P(H, Re(se), Me(se)), m.value.multiCalendars && !e.multiCalendarsSolo && Pe(H), t("update-month-year", { instance: H, month: Re(se), year: Me(se) }), r());
  }, Xt = (b) => {
    Pi(b) && Pi(s.value) && At($.hours) && At($.minutes) ? (b[0] && s.value[0] && (s.value[0] = mt(b[0], $.hours[0], $.minutes[0], ne())), b[1] && s.value[1] && (s.value[1] = mt(b[1], $.hours[1], $.minutes[1], ne(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Nt(b) : !e.range && !Ci(b) && (s.value = Nt(b)), t("time-update");
  }, Zr = (b, H = !0, ie = !1) => {
    const se = H ? b : $.hours, Ee = !H && !ie ? b : $.minutes, ct = ie ? b : $.seconds;
    if (e.range && Ci(s.value) && At(se) && At(Ee) && At(ct) && !e.disableTimeRangeValidation) {
      const xt = (F) => mt(s.value[F], se[F], Ee[F], ct[F]), Kt = (F) => zo(s.value[F], 0);
      if (Ne(s.value[0], s.value[1]) && (Yo(xt(0), Kt(1)) || Fo(xt(1), Kt(0))))
        return;
    }
    if (V("hours", se), V("minutes", Ee), V("seconds", ct), s.value)
      if (e.multiDates) {
        const xt = O();
        xt && Xt(xt);
      } else
        Xt(s.value);
    else
      e.timePicker && Xt(e.range ? [z(), z()] : z());
    n();
  }, Xr = (b, H) => {
    e.monthChangeOnScroll && cn(e.monthChangeOnScroll !== "inverse" ? -b.deltaY : b.deltaY, H);
  }, Kr = (b, H, ie = !1) => {
    e.monthChangeOnArrows && e.vertical === ie && fn(b, H);
  }, fn = (b, H) => {
    cn(b === "right" ? -1 : 1, H);
  };
  return {
    time: $,
    month: B,
    year: C,
    modelValue: s,
    calendars: S,
    monthYearSelect: Qr,
    isDisabled: l,
    updateTime: Zr,
    getWeekNum: ge,
    selectDate: Zt,
    updateMonthYear: Bt,
    handleScroll: Xr,
    getMarker: (b) => e.markers.find((H) => Ne(u(b.value), u(H.date))),
    handleArrow: Kr,
    handleSwipe: fn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = tt(z(), s.value[0]) ? [z(), s.value[0]] : [s.value[0], z()] : s.value = [z()] : s.value = z(), w();
    },
    presetDateRange: (b, H) => {
      H || b.length && b.length <= 2 && e.range && (s.value = b.map((ie) => z(ie)), w(), e.multiCalendars && Xe().then(() => Q(!0)));
    }
  };
}, iv = (e, t, n) => {
  const r = M(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: l,
    getDefaultPattern: u,
    checkRangeEnabled: d,
    checkPartialRangeValue: f,
    isValidDate: y,
    setDateMonthOrYear: m,
    defaults: s
  } = ft(t), h = M(""), S = nr(t, "format");
  He(r, () => {
    e("internal-model-change", r.value);
  }), He(S, () => {
    p();
  });
  const $ = (D) => {
    const w = D || z();
    return t.modelType ? T(w) : {
      hours: Ot(w),
      minutes: Tt(w),
      seconds: t.enableSeconds ? Gt(w) : 0
    };
  }, B = (D) => t.modelType ? T(D) : { month: Re(D), year: Me(D) }, C = (D) => Array.isArray(D) ? d(() => [
    Yt(z(), D[0]),
    D[1] ? Yt(z(), D[1]) : f()
  ]) : Yt(z(), +D), E = (D, w) => (typeof D == "string" || typeof D == "number") && t.modelType ? k(D) : w, P = (D) => Array.isArray(D) ? [
    E(
      D[0],
      mt(null, +D[0].hours, +D[0].minutes, D[0].seconds)
    ),
    E(
      D[1],
      mt(null, +D[1].hours, +D[1].minutes, D[1].seconds)
    )
  ] : E(D, mt(null, D.hours, D.minutes, D.seconds)), V = (D) => Array.isArray(D) ? d(() => [
    E(D[0], m(null, +D[0].month, +D[0].year)),
    E(
      D[1],
      D[1] ? m(null, +D[1].month, +D[1].year) : f()
    )
  ]) : E(D, m(null, +D.month, +D.year)), Q = (D) => {
    if (Array.isArray(D))
      return D.map((w) => k(w));
    throw new Error(Lr.dateArr("multi-dates"));
  }, X = (D) => {
    if (Array.isArray(D))
      return [z(D[0]), z(D[1])];
    throw new Error(Lr.dateArr("week-picker"));
  }, ee = (D) => t.modelAuto ? Array.isArray(D) ? [k(D[0]), k(D[1])] : t.autoApply ? [k(D)] : [k(D), null] : Array.isArray(D) ? d(() => [
    k(D[0]),
    D[1] ? k(D[1]) : f()
  ]) : k(D), A = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(f());
  }, x = () => {
    const D = r.value;
    return [
      T(D[0]),
      D[1] ? T(D[1]) : f()
    ];
  }, Y = () => r.value[1] ? x() : T(Ke(r.value[0])), N = () => (r.value || []).map((D) => T(D)), Z = () => (A(), t.modelAuto ? Y() : t.multiDates ? N() : Array.isArray(r.value) ? d(() => x()) : T(Ke(r.value))), G = (D) => D ? t.timePicker ? P(Ke(D)) : t.monthPicker ? V(Ke(D)) : t.yearPicker ? C(Ke(D)) : t.multiDates ? Q(Ke(D)) : t.weekPicker ? X(Ke(D)) : ee(Ke(D)) : null, ne = (D) => {
    const w = G(D);
    y(Ke(w)) ? (r.value = Ke(w), p()) : (r.value = null, h.value = "");
  }, I = () => {
    var D;
    const w = (j) => {
      var ke;
      return on(j, (ke = s.value.textInputOptions) == null ? void 0 : ke.format);
    };
    return `${w(r.value[0])} ${(D = s.value.textInputOptions) == null ? void 0 : D.rangeSeparator} ${r.value[1] ? w(r.value[1]) : ""}`;
  }, O = () => {
    var D;
    return n.value && r.value ? Array.isArray(r.value) ? I() : on(r.value, (D = s.value.textInputOptions) == null ? void 0 : D.format) : l(r.value);
  }, i = () => {
    var D;
    return r.value ? t.multiDates ? r.value.map((w) => l(w)).join("; ") : t.textInput && typeof ((D = s.value.textInputOptions) == null ? void 0 : D.format) == "string" ? O() : l(r.value) : "";
  }, p = () => {
    !t.format || typeof t.format == "string" ? h.value = i() : h.value = t.format(r.value);
  }, k = (D) => {
    if (t.utc) {
      const w = new Date(D);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(D)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? To(D, u(), /* @__PURE__ */ new Date()) : o(To(D, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(D));
  }, T = (D) => D ? t.utc ? wy(D, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(D) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? l(a(D)) : l(a(D), t.modelType) : a(D) : "", W = (D) => {
    e("update:model-value", D);
  }, J = (D) => Array.isArray(r.value) ? [
    D(r.value[0]),
    r.value[1] ? D(r.value[1]) : f()
  ] : D(Ke(r.value)), q = (D) => W(Ke(J(D)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ne,
    formatInputValue: p,
    emitModelValue: () => (p(), t.monthPicker ? q(B) : t.timePicker ? q($) : t.yearPicker ? q(Me) : t.weekPicker ? W(r.value) : W(Z()))
  };
}, uv = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = ft(e), l = (m, s) => {
    let h = m;
    return o.value.filters.months.includes(Re(h)) ? (h = s ? bt(m, 1) : jt(m, 1), l(h, s)) : h;
  }, u = (m, s) => {
    let h = m;
    return o.value.filters.years.includes(Me(h)) ? (h = s ? Li(m, 1) : gy(m, 1), u(h, s)) : h;
  }, d = (m) => {
    const s = et(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let h = m ? bt(s, 1) : jt(s, 1), S = Re(h), $ = Me(h);
    o.value.filters.months.includes(S) && (h = l(h, m), S = Re(h), $ = Me(h)), o.value.filters.years.includes($) && (h = u(h, m), $ = Me(h)), n(S, $, m, e.preventMinMaxNavigation) && f(S, $);
  }, f = (m, s) => {
    t("update-month-year", { month: m, year: s });
  }, y = g(() => (m) => {
    if (!e.preventMinMaxNavigation || m && !e.maxDate || !m && !e.minDate)
      return !1;
    const s = et(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), h = m ? bt(s, 1) : jt(s, 1), S = [Re(h), Me(h)];
    return m ? !r(...S) : !a(...S);
  });
  return { handleMonthYearChange: d, isDisabled: y, updateMonthYear: f };
};
var tr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(tr || {});
const sv = (e, t, n, r) => {
  const a = M({
    top: "0",
    left: "0",
    transform: "none"
  }), o = M(!1), l = nr(r, "teleportCenter");
  He(l, () => {
    $();
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
  }, d = (A, x) => {
    a.value.left = `${A + x}px`, a.value.transform = "translateX(-100%)";
  }, f = (A) => {
    a.value.left = `${A}px`, a.value.transform = "translateX(0)";
  }, y = (A, x, Y = !1) => {
    r.position === tr.left && f(A), r.position === tr.right && d(A, x), r.position === tr.center && (a.value.left = `${A + x / 2}px`, a.value.transform = Y ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, m = (A) => {
    const { width: x, height: Y } = A.getBoundingClientRect(), { top: N, left: Z } = r.altPosition ? r.altPosition(A) : u(A);
    return { top: +N, left: +Z, width: x, height: Y };
  }, s = () => {
    const A = Le(t);
    if (A) {
      const { top: x, left: Y, width: N, height: Z } = m(A);
      a.value.top = `${x + Z / 2}px`, a.value.transform = "translateY(-50%)", y(Y, N, !0);
    }
  }, h = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, S = () => {
    const A = Le(t), { top: x, left: Y, transform: N } = r.altPosition(A);
    a.value = { top: `${x}px`, left: `${Y}px`, transform: N || "" };
  }, $ = (A = !0) => {
    if (!r.inline)
      return l.value ? h() : r.altPosition !== null ? S() : (A && n("recalculate-position"), Q());
  }, B = ({
    inputEl: A,
    menuEl: x,
    left: Y,
    width: N
  }) => {
    window.screen.width > 768 && y(Y, N), P(A, x);
  }, C = (A, x) => {
    const { top: Y, left: N, height: Z, width: G } = m(A);
    a.value.top = `${Z + Y + +r.offset}px`, B({ inputEl: A, menuEl: x, left: N, width: G }), o.value = !1;
  }, E = (A, x) => {
    const { top: Y, left: N, width: Z } = m(A), { height: G } = x.getBoundingClientRect();
    a.value.top = `${Y - G - +r.offset}px`, B({ inputEl: A, menuEl: x, left: N, width: Z }), o.value = !0;
  }, P = (A, x) => {
    if (r.autoPosition) {
      const { left: Y, width: N } = m(A), { left: Z, right: G } = x.getBoundingClientRect();
      return Z <= 0 || Z <= Y ? f(Y) : G >= document.documentElement.clientWidth ? d(Y, N) : y(Y, N);
    }
  }, V = (A, x) => {
    const { height: Y } = x.getBoundingClientRect(), { top: N, height: Z } = A.getBoundingClientRect(), G = window.innerHeight - N - Z, ne = N;
    return Y <= G ? C(A, x) : Y > G && Y <= ne ? E(A, x) : G >= ne ? C(A, x) : E(A, x);
  }, Q = () => {
    const A = Le(t), x = Le(e);
    if (A && x)
      return r.autoPosition ? V(A, x) : C(A, x);
  }, X = function(A) {
    if (A) {
      const x = A.scrollHeight > A.clientHeight, Y = window.getComputedStyle(A).overflowY.indexOf("hidden") !== -1;
      return x && !Y;
    }
    return !0;
  }, ee = function(A) {
    return !A || A === document.body ? window : X(A) ? A : ee(A.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: $, setInitialPosition: s, getScrollableParent: ee };
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
], cv = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], fv = {
  all: () => zt,
  monthYear: () => zt.filter((e) => e.use.includes("month-year")),
  input: () => cv,
  timePicker: () => zt.filter((e) => e.use.includes("time")),
  action: () => zt.filter((e) => e.use.includes("action")),
  calendar: () => zt.filter((e) => e.use.includes("calendar")),
  menu: () => zt.filter((e) => e.use.includes("menu"))
}, Vt = (e, t, n) => {
  const r = [];
  return fv[t]().forEach((a) => {
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
}, dv = ["aria-label", "aria-disabled", "aria-readonly"], mv = {
  key: 1,
  class: "dp__input_wrap"
}, pv = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], yv = {
  key: 2,
  class: "dp__input_icon"
}, vv = {
  key: 4,
  class: "dp__clear_icon"
}, hv = /* @__PURE__ */ re({
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: l, getDefaultStartTime: u, assignDefaultTime: d } = ft(r), f = M(), y = M(null), m = M(!1), s = g(
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
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), f.value = null);
    }, S = (x) => {
      var Y;
      const N = u();
      return _y(
        x,
        ((Y = l.value.textInputOptions) == null ? void 0 : Y.format) || a(),
        N || d({}),
        r.inputValue
      );
    }, $ = (x) => {
      const { rangeSeparator: Y } = l.value.textInputOptions, [N, Z] = x.split(`${Y}`);
      if (N) {
        const G = S(N.trim()), ne = Z ? S(Z.trim()) : null, I = G && ne ? [G, ne] : [G];
        f.value = G ? I : null;
      }
    }, B = (x) => {
      if (r.range)
        $(x);
      else if (r.multiDates) {
        const Y = x.split(";");
        f.value = Y.map((N) => S(N.trim())).filter((N) => N);
      } else
        f.value = S(x);
    }, C = (x) => {
      var Y;
      const { value: N } = x.target;
      N !== "" ? ((Y = l.value.textInputOptions) != null && Y.openMenu && !r.isMenuOpen && n("open"), B(N), n("set-input-date", f.value)) : h(), n("update:input-value", N);
    }, E = () => {
      var x, Y;
      (x = l.value.textInputOptions) != null && x.enterSubmit && o(f.value) && r.inputValue !== "" ? (n("set-input-date", f.value, !0), f.value = null) : (Y = l.value.textInputOptions) != null && Y.enterSubmit && r.inputValue === "" && (f.value = null, n("clear"));
    }, P = () => {
      var x, Y;
      (x = l.value.textInputOptions) != null && x.tabSubmit && o(f.value) && r.inputValue !== "" ? (n("set-input-date", f.value, !0), f.value = null) : (Y = l.value.textInputOptions) != null && Y.tabSubmit && r.inputValue === "" && (f.value = null, n("clear"));
    }, V = () => {
      m.value = !0, n("focus");
    }, Q = (x) => {
      var Y;
      x.preventDefault(), x.stopImmediatePropagation(), x.stopPropagation(), r.textInput && (Y = l.value.textInputOptions) != null && Y.openMenu && !r.inlineWithInput ? r.isMenuOpen ? l.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, X = () => {
      m.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && f.value && (n("set-input-date", f.value), n("select-date"), f.value = null);
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
        f.value = x;
      }
    }), (x, Y) => {
      var N;
      return v(), _("div", {
        onClick: Q,
        "aria-label": (N = c(l).ariaLabels) == null ? void 0 : N.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": x.disabled,
        "aria-readonly": x.readonly
      }, [
        x.$slots.trigger && !x.$slots["dp-input"] && !x.inline ? L(x.$slots, "trigger", { key: 0 }) : R("", !0),
        !x.$slots.trigger && (!x.inline || x.inlineWithInput) ? (v(), _("div", mv, [
          x.$slots["dp-input"] && !x.$slots.trigger && !x.inline ? L(x.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: C,
            onEnter: E,
            onTab: P,
            onClear: ee
          }) : R("", !0),
          x.$slots["dp-input"] ? R("", !0) : (v(), _("input", {
            key: 1,
            ref_key: "inputRef",
            ref: y,
            id: x.uid ? `dp-input-${x.uid}` : void 0,
            name: x.name,
            class: de(c(s)),
            inputmode: x.textInput ? "text" : "none",
            placeholder: x.placeholder,
            disabled: x.disabled,
            readonly: x.readonly,
            required: x.required,
            value: e.inputValue,
            autocomplete: x.autocomplete,
            onInput: C,
            onKeydown: [
              _e(Q, ["enter"]),
              _e(P, ["tab"]),
              A
            ],
            onBlur: X,
            onFocus: V,
            onKeypress: A
          }, null, 42, pv)),
          x.$slots["input-icon"] && !x.hideInputIcon ? (v(), _("span", yv, [
            L(x.$slots, "input-icon")
          ])) : R("", !0),
          !x.$slots["input-icon"] && !x.hideInputIcon && !x.$slots["dp-input"] ? (v(), te(c(zr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : R("", !0),
          x.$slots["clear-icon"] && e.inputValue && x.clearable && !x.disabled && !x.readonly ? (v(), _("span", vv, [
            L(x.$slots, "clear-icon", { clear: ee })
          ])) : R("", !0),
          x.clearable && !x.$slots["clear-icon"] && e.inputValue && !x.disabled && !x.readonly ? (v(), te(c(by), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ce(ee, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : R("", !0)
        ])) : R("", !0)
      ], 8, dv);
    };
  }
}), gv = { class: "dp__selection_preview" }, bv = { class: "dp__action_buttons" }, _v = ["onKeydown"], wv = /* @__PURE__ */ re({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...It
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = ft(n), { buildMatrix: l } = Mt(), u = M(null), d = M(null);
    ze(() => {
      n.arrowNavigation && l([Le(u), Le(d)], "actionRow");
    });
    const f = g(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), y = g(() => !s.value || !h.value || !f.value), m = g(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: y.value
    })), s = g(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = g(() => n.monthPicker ? C(n.internalModelValue) : !0), S = () => {
      const P = o.value.previewFormat;
      return n.timePicker || n.monthPicker, P(Ke(n.internalModelValue));
    }, $ = () => {
      const P = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(P[0])} - ${r(P[1])}` : [r(P[0]), r(P[1])];
    }, B = g(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? $() : n.multiDates ? n.internalModelValue.map((P) => `${r(P)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : S()), C = (P) => {
      if (!n.monthPicker)
        return !0;
      let V = !0;
      return n.minDate && n.maxDate ? ot(z(P), z(n.minDate)) && tt(z(P), z(n.maxDate)) : (n.minDate && (V = ot(z(P), z(n.minDate))), n.maxDate && (V = tt(z(P), z(n.maxDate))), V);
    }, E = () => {
      s.value && h.value && f.value ? t("select-date") : t("invalid-select");
    };
    return (P, V) => (v(), _("div", {
      class: "dp__action_row",
      style: $t(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      P.$slots["action-row"] ? L(P.$slots, "action-row", Je(Ge({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: c(y),
        selectDate: () => P.$emit("select-date"),
        closePicker: () => P.$emit("close-picker")
      }))) : (v(), _(ce, { key: 1 }, [
        U("div", gv, [
          P.$slots["action-preview"] ? L(P.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : R("", !0),
          P.$slots["action-preview"] ? R("", !0) : (v(), _(ce, { key: 1 }, [
            Array.isArray(c(B)) ? R("", !0) : (v(), _(ce, { key: 0 }, [
              Ie(ye(c(B)), 1)
            ], 64)),
            Array.isArray(c(B)) ? (v(!0), _(ce, { key: 1 }, Te(c(B), (Q, X) => (v(), _("div", { key: X }, ye(Q), 1))), 128)) : R("", !0)
          ], 64))
        ]),
        U("div", bv, [
          P.$slots["action-select"] ? L(P.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : R("", !0),
          P.$slots["action-select"] ? R("", !0) : (v(), _(ce, { key: 1 }, [
            P.inline ? R("", !0) : (v(), _("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: V[0] || (V[0] = (Q) => P.$emit("close-picker")),
              onKeydown: [
                V[1] || (V[1] = _e((Q) => P.$emit("close-picker"), ["enter"])),
                V[2] || (V[2] = _e((Q) => P.$emit("close-picker"), ["space"]))
              ]
            }, ye(P.cancelText), 545)),
            U("span", {
              class: de(c(m)),
              tabindex: "0",
              onKeydown: [
                _e(E, ["enter"]),
                _e(E, ["space"])
              ],
              onClick: E,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: d
            }, ye(P.selectText), 43, _v)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), kv = ["aria-label"], xv = {
  class: "dp__calendar_header",
  role: "row"
}, Sv = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, $v = /* @__PURE__ */ U("div", { class: "dp__calendar_header_separator" }, null, -1), Ov = ["aria-label"], Tv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Pv = { class: "dp__cell_inner" }, Cv = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Dv = /* @__PURE__ */ re({
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
    const r = e, { buildMultiLevelMatrix: a } = Mt(), { setDateMonthOrYear: o, defaults: l } = ft(r), u = M(null), d = M({
      bottom: "",
      left: "",
      transform: ""
    }), f = M([]), y = M(null), m = M(!0), s = M(""), h = M({ startX: 0, endX: 0, startY: 0, endY: 0 }), S = M([]), $ = M({ left: "50%" }), B = g(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Qy(r.locale, +r.weekStart));
    ze(() => {
      n("mount", { cmp: "calendar", refs: f }), r.noSwipe || y.value && (y.value.addEventListener("touchstart", N, { passive: !1 }), y.value.addEventListener("touchend", Z, { passive: !1 }), y.value.addEventListener("touchmove", G, { passive: !1 })), r.monthChangeOnScroll && y.value && y.value.addEventListener("wheel", O, { passive: !1 });
    });
    const C = (i) => i ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", E = (i, p) => {
      if (r.transitions) {
        const k = wt(o(z(), r.month, r.year));
        s.value = ot(wt(o(z(), i, p)), k) ? l.value.transitions[C(!0)] : l.value.transitions[C(!1)], m.value = !1, Xe(() => {
          m.value = !0;
        });
      }
    }, P = g(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), V = g(() => (i) => {
      const p = Jy(i);
      return {
        dp__marker_dot: p.type === "dot",
        dp__marker_line: p.type === "line"
      };
    }), Q = g(() => (i) => Ne(i, u.value)), X = g(() => ({
      dp__calendar: !0,
      dp__calendar_next: l.value.multiCalendars > 0 && r.instance !== 0
    })), ee = g(() => (i) => r.hideOffsetDates ? i.current : !0), A = g(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), x = async (i, p, k) => {
      var T, W;
      if (n("set-hover-date", i), (W = (T = i.marker) == null ? void 0 : T.tooltip) != null && W.length) {
        const J = Le(f.value[p][k]);
        if (J) {
          const { width: q, height: D } = J.getBoundingClientRect();
          u.value = i.value;
          let w = { left: `${q / 2}px` }, j = -50;
          if (await Xe(), S.value[0]) {
            const { left: ke, width: le } = S.value[0].getBoundingClientRect();
            ke < 0 && (w = { left: "0" }, j = 0, $.value.left = `${q / 2}px`), window.innerWidth < ke + le && (w = { right: "0" }, j = 0, $.value.left = `${le - q / 2}px`);
          }
          d.value = {
            bottom: `${D}px`,
            ...w,
            transform: `translateX(${j}%)`
          }, n("tooltip-open", i.marker);
        }
      }
    }, Y = (i) => {
      u.value && (u.value = null, d.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", i.marker));
    }, N = (i) => {
      h.value.startX = i.changedTouches[0].screenX, h.value.startY = i.changedTouches[0].screenY;
    }, Z = (i) => {
      h.value.endX = i.changedTouches[0].screenX, h.value.endY = i.changedTouches[0].screenY, ne();
    }, G = (i) => {
      r.vertical && !r.inline && i.preventDefault();
    }, ne = () => {
      const i = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${i}`] - h.value[`end${i}`]) > 10 && n("handle-swipe", h.value[`start${i}`] > h.value[`end${i}`] ? "right" : "left");
    }, I = (i, p, k) => {
      i && (Array.isArray(f.value[p]) ? f.value[p][k] = i : f.value[p] = [i]), r.arrowNavigation && a(f.value, "calendar");
    }, O = (i) => {
      r.monthChangeOnScroll && (i.preventDefault(), n("handle-scroll", i));
    };
    return t({ triggerTransition: E }), (i, p) => {
      var k;
      return v(), _("div", {
        class: de(c(X))
      }, [
        U("div", {
          style: $t(c(A))
        }, [
          e.specificMode ? R("", !0) : (v(), _("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: y,
            class: de(c(P)),
            role: "grid",
            "aria-label": (k = c(l).ariaLabels) == null ? void 0 : k.calendarWrap
          }, [
            U("div", xv, [
              i.weekNumbers ? (v(), _("div", Sv, ye(i.weekNumName), 1)) : R("", !0),
              (v(!0), _(ce, null, Te(c(B), (T, W) => (v(), _("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: W,
                "data-test": "calendar-header"
              }, [
                i.$slots["calendar-header"] ? L(i.$slots, "calendar-header", {
                  key: 0,
                  day: T,
                  index: W
                }) : R("", !0),
                i.$slots["calendar-header"] ? R("", !0) : (v(), _(ce, { key: 1 }, [
                  Ie(ye(T), 1)
                ], 64))
              ]))), 128))
            ]),
            $v,
            pe(pt, {
              name: s.value,
              css: !!i.transitions
            }, {
              default: K(() => {
                var T;
                return [
                  m.value ? (v(), _("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (T = c(l).ariaLabels) == null ? void 0 : T.calendarDays
                  }, [
                    (v(!0), _(ce, null, Te(e.mappedDates, (W, J) => (v(), _("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: J
                    }, [
                      i.weekNumbers ? (v(), _("div", Tv, [
                        U("div", Pv, ye(e.getWeekNum(W.days)), 1)
                      ])) : R("", !0),
                      (v(!0), _(ce, null, Te(W.days, (q, D) => {
                        var w, j, ke;
                        return v(), _("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (le) => I(le, J, D),
                          key: D + J,
                          "aria-selected": q.classData.dp__active_date || q.classData.dp__range_start || q.classData.dp__range_start,
                          "aria-disabled": q.classData.dp__cell_disabled,
                          "aria-label": (j = (w = c(l).ariaLabels) == null ? void 0 : w.day) == null ? void 0 : j.call(w, q),
                          tabindex: "0",
                          "data-test": q.value,
                          onClick: Ce((le) => i.$emit("select-date", q), ["stop", "prevent"]),
                          onKeydown: [
                            _e((le) => i.$emit("select-date", q), ["enter"]),
                            _e((le) => i.$emit("handle-space", q), ["space"])
                          ],
                          onMouseenter: (le) => x(q, J, D),
                          onMouseleave: (le) => Y(q)
                        }, [
                          U("div", {
                            class: de(["dp__cell_inner", q.classData])
                          }, [
                            i.$slots.day && c(ee)(q) ? L(i.$slots, "day", {
                              key: 0,
                              day: +q.text,
                              date: q.value
                            }) : R("", !0),
                            i.$slots.day ? R("", !0) : (v(), _(ce, { key: 1 }, [
                              Ie(ye(q.text), 1)
                            ], 64)),
                            q.marker && c(ee)(q) ? (v(), _("div", {
                              key: 2,
                              class: de(c(V)(q.marker)),
                              style: $t(q.marker.color ? { backgroundColor: q.marker.color } : {})
                            }, null, 6)) : R("", !0),
                            c(Q)(q.value) ? (v(), _("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: S,
                              style: $t(d.value)
                            }, [
                              (ke = q.marker) != null && ke.tooltip ? (v(), _("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: p[0] || (p[0] = Ce(() => {
                                }, ["stop"]))
                              }, [
                                (v(!0), _(ce, null, Te(q.marker.tooltip, (le, ve) => (v(), _("div", {
                                  key: ve,
                                  class: "dp__tooltip_text"
                                }, [
                                  i.$slots["marker-tooltip"] ? L(i.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: le,
                                    day: q.value
                                  }) : R("", !0),
                                  i.$slots["marker-tooltip"] ? R("", !0) : (v(), _(ce, { key: 1 }, [
                                    U("div", {
                                      class: "dp__tooltip_mark",
                                      style: $t(le.color ? { backgroundColor: le.color } : {})
                                    }, null, 4),
                                    U("div", null, ye(le.text), 1)
                                  ], 64))
                                ]))), 128)),
                                U("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: $t($.value)
                                }, null, 4)
                              ])) : R("", !0)
                            ], 4)) : R("", !0)
                          ], 2)
                        ], 40, Cv);
                      }), 128))
                    ]))), 128))
                  ], 8, Ov)) : R("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, kv))
        ], 4)
      ], 2);
    };
  }
}), Rv = ["aria-label", "aria-disabled"], da = /* @__PURE__ */ re({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = M(null);
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
        L(r.$slots, "default")
      ], 2)
    ], 40, Rv));
  }
}), Mv = ["onKeydown"], Iv = { class: "dp__selection_grid_header" }, Nv = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Bv = ["aria-label", "onKeydown"], un = /* @__PURE__ */ re({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: l } = Mt(), { hideNavigationButtons: u } = ft(r), d = M(!1), f = M(null), y = M(null), m = M([]), s = M(), h = M(null), S = M(0), $ = M(null);
    Du(() => {
      f.value = null;
    }), ze(() => {
      Xe().then(() => x()), C(), B(!0);
    }), Ro(() => B(!1));
    const B = (O) => {
      var i;
      r.arrowNavigation && ((i = r.headerRefs) != null && i.length ? l(O) : a(O));
    }, C = () => {
      const O = Le(y);
      O && (r.textInput || O.focus({ preventScroll: !0 }), d.value = O.clientHeight < O.scrollHeight);
    }, E = g(
      () => ({
        dp__overlay: !0
      })
    ), P = g(() => ({
      dp__overlay_col: !0
    })), V = (O) => r.skipActive ? !1 : O.value === r.modelValue, Q = g(() => r.items.map((O) => O.filter((i) => i).map((i) => {
      var p, k, T;
      const W = r.disabledValues.some((q) => q === i.value) || A(i.value), J = (p = r.multiModelValue) != null && p.length ? (k = r.multiModelValue) == null ? void 0 : k.some(
        (q) => Ne(
          q,
          Yt(
            r.monthPicker ? ln(/* @__PURE__ */ new Date(), i.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : i.value
          )
        )
      ) : V(i);
      return {
        ...i,
        className: {
          dp__overlay_cell_active: J,
          dp__overlay_cell: !J,
          dp__overlay_cell_disabled: W,
          dp__overlay_cell_active_disabled: W && J,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (T = r.multiModelValue) != null && T.length ? N(i.value) : !1
        }
      };
    }))), X = g(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: d.value,
        dp__button_bottom: r.autoApply
      })
    ), ee = g(() => {
      var O, i;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((O = r.items) == null ? void 0 : O.length) <= 6,
        dp__container_block: ((i = r.items) == null ? void 0 : i.length) > 6
      };
    }), A = (O) => {
      const i = r.maxValue || r.maxValue === 0, p = r.minValue || r.minValue === 0;
      return !i && !p ? !1 : i && p ? +O > +r.maxValue || +O < +r.minValue : i ? +O > +r.maxValue : p ? +O < +r.minValue : !1;
    }, x = () => {
      const O = Le(f), i = Le(y), p = Le(h), k = Le($), T = p ? p.getBoundingClientRect().height : 0;
      i && (S.value = i.getBoundingClientRect().height - T), O && k && (k.scrollTop = O.offsetTop - k.offsetTop - (S.value / 2 - O.getBoundingClientRect().height) - T);
    }, Y = (O) => {
      !r.disabledValues.some((i) => i === O) && !A(O) && (n("update:model-value", O), n("selected"));
    }, N = (O) => {
      const i = r.monthPicker ? r.year : O;
      return mu(
        r.multiModelValue,
        Yt(
          r.monthPicker ? ln(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? i : s.value || i
        ),
        Yt(r.monthPicker ? ln(/* @__PURE__ */ new Date(), O) : /* @__PURE__ */ new Date(), i)
      );
    }, Z = () => {
      n("toggle"), n("reset-flow");
    }, G = () => {
      r.escClose && Z();
    }, ne = (O, i, p, k) => {
      O && (i.value === +r.modelValue && !r.disabledValues.includes(i.value) && (f.value = O), r.arrowNavigation && (Array.isArray(m.value[p]) ? m.value[p][k] = O : m.value[p] = [O], I()));
    }, I = () => {
      var O, i;
      const p = (O = r.headerRefs) != null && O.length ? [r.headerRefs].concat(m.value) : m.value.concat([r.skipButtonRef ? [] : [h.value]]);
      o(Ke(p), (i = r.headerRefs) != null && i.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: C }), (O, i) => {
      var p;
      return v(), _("div", {
        ref_key: "gridWrapRef",
        ref: y,
        class: de(c(E)),
        role: "dialog",
        tabindex: "0",
        onKeydown: _e(G, ["esc"])
      }, [
        U("div", {
          class: de(c(ee)),
          ref_key: "containerRef",
          ref: $,
          role: "grid",
          style: $t({ height: `${S.value}px` })
        }, [
          U("div", Iv, [
            L(O.$slots, "header")
          ]),
          O.$slots.overlay ? L(O.$slots, "overlay", { key: 0 }) : (v(!0), _(ce, { key: 1 }, Te(c(Q), (k, T) => (v(), _("div", {
            class: "dp__overlay_row",
            key: T,
            role: "row"
          }, [
            (v(!0), _(ce, null, Te(k, (W, J) => (v(), _("div", {
              role: "gridcell",
              class: de(c(P)),
              key: W.value,
              "aria-selected": W.value === e.modelValue && !e.disabledValues.includes(W.value),
              "aria-disabled": W.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (q) => ne(q, W, T, J),
              tabindex: "0",
              "data-test": W.text,
              onClick: (q) => Y(W.value),
              onKeydown: [
                _e((q) => Y(W.value), ["enter"]),
                _e((q) => Y(W.value), ["space"])
              ],
              onMouseover: (q) => s.value = W.value
            }, [
              U("div", {
                class: de(W.className)
              }, [
                O.$slots.item ? L(O.$slots, "item", {
                  key: 0,
                  item: W
                }) : R("", !0),
                O.$slots.item ? R("", !0) : (v(), _(ce, { key: 1 }, [
                  Ie(ye(W.text), 1)
                ], 64))
              ], 2)
            ], 42, Nv))), 128))
          ]))), 128))
        ], 6),
        O.$slots["button-icon"] ? vt((v(), _("div", {
          key: 0,
          role: "button",
          "aria-label": (p = e.ariaLabels) == null ? void 0 : p.toggleOverlay,
          class: de(c(X)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h,
          onClick: Z,
          onKeydown: _e(Z, ["enter"])
        }, [
          L(O.$slots, "button-icon")
        ], 42, Bv)), [
          [rn, !c(u)(e.type)]
        ]) : R("", !0)
      ], 42, Mv);
    };
  }
}), Av = ["aria-label"], Di = /* @__PURE__ */ re({
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
    const n = e, { transitionName: r, showTransition: a } = jr(n.transitions), o = M(null);
    return ze(() => t("set-ref", o)), (l, u) => (v(), _(ce, null, [
      U("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (d) => l.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = _e((d) => l.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = _e((d) => l.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        L(l.$slots, "default")
      ], 40, Av),
      pe(pt, {
        name: c(r)(e.showSelectionGrid),
        css: c(a)
      }, {
        default: K(() => [
          e.showSelectionGrid ? (v(), te(un, Ge({ key: 0 }, {
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
          }), Ze({
            "button-icon": K(() => [
              l.$slots["calendar-icon"] ? L(l.$slots, "calendar-icon", { key: 0 }) : R("", !0),
              l.$slots["calendar-icon"] ? R("", !0) : (v(), te(c(zr), { key: 1 }))
            ]),
            _: 2
          }, [
            l.$slots[e.slotName] ? {
              name: "item",
              fn: K(({ item: d }) => [
                L(l.$slots, e.slotName, { item: d })
              ]),
              key: "0"
            } : void 0,
            l.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: K(() => [
                L(l.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            l.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: K(() => [
                L(l.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : R("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Ev = { class: "dp__month_year_row" }, Vv = { class: "dp__month_year_wrap" }, Yv = { class: "dp__month_picker_header" }, Fv = ["aria-label"], Uv = ["aria-label"], Wv = ["aria-label"], Lv = /* @__PURE__ */ re({
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
    const r = e, { defaults: a } = ft(r), { transitionName: o, showTransition: l } = jr(a.value.transitions), { buildMatrix: u } = Mt(), { handleMonthYearChange: d, isDisabled: f, updateMonthYear: y } = uv(r, n), m = M(!1), s = M(!1), h = M([null, null, null, null]), S = M(null), $ = M(null), B = M(null);
    ze(() => {
      n("mount");
    });
    const C = (w) => ({
      get: () => r[w],
      set: (j) => {
        const ke = w === "month" ? "year" : "month";
        n("update-month-year", { [w]: j, [ke]: r[ke] }), n("month-year-select", w === "year"), w === "month" ? T(!0) : W(!0);
      }
    }), E = g(C("month")), P = g(C("year")), V = (w) => {
      const j = Me(z(w));
      return r.year === j;
    }, Q = g(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((w) => z(w)).filter((w) => V(w)).map((w) => Re(w)) : [] : []), X = g(() => (w) => {
      const j = w === "month";
      return {
        showSelectionGrid: (j ? m : s).value,
        items: (j ? O : i).value,
        disabledValues: a.value.filters[j ? "months" : "years"].concat(Q.value),
        minValue: (j ? Y : A).value,
        maxValue: (j ? N : x).value,
        headerRefs: j && r.monthPicker ? [S.value, $.value, B.value] : [],
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
      toggle: w === "month" ? T : W
    })), A = g(() => r.minDate ? Me(z(r.minDate)) : null), x = g(() => r.maxDate ? Me(z(r.maxDate)) : null), Y = g(() => {
      if (r.minDate && A.value) {
        if (A.value > r.year)
          return 12;
        if (A.value === r.year)
          return Re(z(r.minDate));
      }
      return null;
    }), N = g(() => r.maxDate && x.value ? x.value < r.year ? -1 : x.value === r.year ? Re(z(r.maxDate)) : null : null), Z = g(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), G = (w) => w.reverse(), ne = (w, j = !1) => {
      const ke = [], le = (ve) => j ? G(ve) : ve;
      for (let ve = 0; ve < w.length; ve += 3) {
        const Ae = [w[ve], w[ve + 1], w[ve + 2]];
        ke.push(le(Ae));
      }
      return j ? ke.reverse() : ke;
    }, I = g(() => r.months.find((j) => j.value === r.month) || { text: "", value: 0 }), O = g(() => ne(r.months)), i = g(() => ne(r.years, r.reverseYears)), p = g(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), k = g(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), T = (w = !1) => {
      J(w), m.value = !m.value, m.value || n("overlay-closed");
    }, W = (w = !1) => {
      J(w), s.value = !s.value, s.value || n("overlay-closed");
    }, J = (w) => {
      w || n("reset-flow");
    }, q = (w = !1) => {
      f.value(w) || n("update-month-year", {
        year: w ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, D = (w, j) => {
      r.arrowNavigation && (h.value[j] = Le(w), u(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: T,
      toggleYearPicker: W,
      handleMonthYearChange: d
    }), (w, j) => {
      var ke, le, ve, Ae, st;
      return v(), _("div", Ev, [
        w.$slots["month-year"] ? L(w.$slots, "month-year", Je(Ge({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: c(y), handleMonthYearChange: c(d), instance: e.instance }))) : (v(), _(ce, { key: 1 }, [
          !w.monthPicker && !w.yearPicker ? (v(), _(ce, { key: 0 }, [
            c(p) && !w.vertical ? (v(), te(da, {
              key: 0,
              "aria-label": (ke = c(a).ariaLabels) == null ? void 0 : ke.prevMonth,
              disabled: c(f)(!1),
              onActivate: j[0] || (j[0] = (he) => c(d)(!1)),
              onSetRef: j[1] || (j[1] = (he) => D(he, 0))
            }, {
              default: K(() => [
                w.$slots["arrow-left"] ? L(w.$slots, "arrow-left", { key: 0 }) : R("", !0),
                w.$slots["arrow-left"] ? R("", !0) : (v(), te(c(yi), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : R("", !0),
            U("div", Vv, [
              pe(Di, Ge({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (le = c(a).ariaLabels) == null ? void 0 : le.openMonthsOverlay,
                modelValue: c(E),
                "onUpdate:modelValue": j[2] || (j[2] = (he) => Be(E) ? E.value = he : null)
              }, c(X)("month"), {
                onToggle: T,
                onSetRef: j[3] || (j[3] = (he) => D(he, 1))
              }), Ze({
                default: K(() => [
                  w.$slots.month ? L(w.$slots, "month", Je(Ge({ key: 0 }, c(I)))) : R("", !0),
                  w.$slots.month ? R("", !0) : (v(), _(ce, { key: 1 }, [
                    Ie(ye(c(I).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    L(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: K(({ item: he }) => [
                    L(w.$slots, "month-overlay-value", {
                      text: he.text,
                      value: he.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: K(() => [
                    L(w.$slots, "month-overlay", Je(yt(c(ee)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: K(() => [
                    L(w.$slots, "month-overlay-header", { toggle: T })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              pe(Di, Ge({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (ve = c(a).ariaLabels) == null ? void 0 : ve.openYearsOverlay,
                modelValue: c(P),
                "onUpdate:modelValue": j[4] || (j[4] = (he) => Be(P) ? P.value = he : null)
              }, c(X)("year"), {
                onToggle: W,
                onSetRef: j[5] || (j[5] = (he) => D(he, 2))
              }), Ze({
                default: K(() => [
                  w.$slots.year ? L(w.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : R("", !0),
                  w.$slots.year ? R("", !0) : (v(), _(ce, { key: 1 }, [
                    Ie(ye(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: K(() => [
                    L(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: K(({ item: he }) => [
                    L(w.$slots, "year-overlay-value", {
                      text: he.text,
                      value: he.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: K(() => [
                    L(w.$slots, "year-overlay", Je(yt(c(ee)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: K(() => [
                    L(w.$slots, "year-overlay-header", { toggle: W })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            c(p) && w.vertical ? (v(), te(da, {
              key: 1,
              "aria-label": (Ae = c(a).ariaLabels) == null ? void 0 : Ae.prevMonth,
              disabled: c(f)(!1),
              onActivate: j[6] || (j[6] = (he) => c(d)(!1))
            }, {
              default: K(() => [
                w.$slots["arrow-up"] ? L(w.$slots, "arrow-up", { key: 0 }) : R("", !0),
                w.$slots["arrow-up"] ? R("", !0) : (v(), te(c(fu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : R("", !0),
            c(k) ? (v(), te(da, {
              key: 2,
              ref: "rightIcon",
              disabled: c(f)(!0),
              "aria-label": (st = c(a).ariaLabels) == null ? void 0 : st.nextMonth,
              onActivate: j[7] || (j[7] = (he) => c(d)(!0)),
              onSetRef: j[8] || (j[8] = (he) => D(he, 3))
            }, {
              default: K(() => [
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? L(w.$slots, w.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : R("", !0),
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? R("", !0) : (v(), te(Bi(w.vertical ? c(du) : c(vi)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : R("", !0)
          ], 64)) : R("", !0),
          w.monthPicker ? (v(), te(un, Ge({ key: 1 }, c(X)("month"), {
            "skip-active": w.range,
            year: e.year,
            "multi-model-value": c(Z),
            "month-picker": "",
            modelValue: c(E),
            "onUpdate:modelValue": j[17] || (j[17] = (he) => Be(E) ? E.value = he : null),
            onToggle: T,
            onSelected: j[18] || (j[18] = (he) => w.$emit("overlay-closed"))
          }), Ze({
            header: K(() => {
              var he, dt, lt;
              return [
                U("div", Yv, [
                  U("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: S,
                    onClick: j[9] || (j[9] = (qe) => q(!1)),
                    onKeydown: j[10] || (j[10] = _e((qe) => q(!1), ["enter"]))
                  }, [
                    U("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: c(f)(!1) }]),
                      role: "button",
                      "aria-label": (he = c(a).ariaLabels) == null ? void 0 : he.prevMonth
                    }, [
                      w.$slots["arrow-left"] ? L(w.$slots, "arrow-left", { key: 0 }) : R("", !0),
                      w.$slots["arrow-left"] ? R("", !0) : (v(), te(c(yi), { key: 1 }))
                    ], 10, Fv)
                  ], 544),
                  U("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: $,
                    "aria-label": (dt = c(a).ariaLabels) == null ? void 0 : dt.openYearsOverlay,
                    tabindex: "0",
                    onClick: j[11] || (j[11] = () => W(!1)),
                    onKeydown: j[12] || (j[12] = _e(() => W(!1), ["enter"]))
                  }, [
                    w.$slots.year ? L(w.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : R("", !0),
                    w.$slots.year ? R("", !0) : (v(), _(ce, { key: 1 }, [
                      Ie(ye(e.year), 1)
                    ], 64))
                  ], 40, Uv),
                  U("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: B,
                    onClick: j[13] || (j[13] = (qe) => q(!0)),
                    onKeydown: j[14] || (j[14] = _e((qe) => q(!0), ["enter"]))
                  }, [
                    U("div", {
                      class: de(["dp__inner_nav", { dp__inner_nav_disabled: c(f)(!0) }]),
                      role: "button",
                      "aria-label": (lt = c(a).ariaLabels) == null ? void 0 : lt.nextMonth
                    }, [
                      w.$slots["arrow-right"] ? L(w.$slots, "arrow-right", { key: 0 }) : R("", !0),
                      w.$slots["arrow-right"] ? R("", !0) : (v(), te(c(vi), { key: 1 }))
                    ], 10, Wv)
                  ], 544)
                ]),
                pe(pt, {
                  name: c(o)(s.value),
                  css: c(l)
                }, {
                  default: K(() => [
                    s.value ? (v(), te(un, Ge({ key: 0 }, c(X)("year"), {
                      modelValue: c(P),
                      "onUpdate:modelValue": j[15] || (j[15] = (qe) => Be(P) ? P.value = qe : null),
                      onToggle: W,
                      onSelected: j[16] || (j[16] = (qe) => w.$emit("overlay-closed"))
                    }), Ze({
                      "button-icon": K(() => [
                        w.$slots["calendar-icon"] ? L(w.$slots, "calendar-icon", { key: 0 }) : R("", !0),
                        w.$slots["calendar-icon"] ? R("", !0) : (v(), te(c(zr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      w.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: K(({ item: qe }) => [
                          L(w.$slots, "year-overlay-value", {
                            text: qe.text,
                            value: qe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : R("", !0)
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
                L(w.$slots, "month-overlay-value", {
                  text: he.text,
                  value: he.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : R("", !0),
          w.yearPicker ? (v(), te(un, Ge({ key: 2 }, c(X)("year"), {
            modelValue: c(P),
            "onUpdate:modelValue": j[19] || (j[19] = (he) => Be(P) ? P.value = he : null),
            "multi-model-value": c(Z),
            "skip-active": w.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: W,
            onSelected: j[20] || (j[20] = (he) => w.$emit("overlay-closed"))
          }), Ze({ _: 2 }, [
            w.$slots["year-overlay-value"] ? {
              name: "item",
              fn: K(({ item: he }) => [
                L(w.$slots, "year-overlay-value", {
                  text: he.text,
                  value: he.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : R("", !0)
        ], 64))
      ]);
    };
  }
}), Hv = {
  key: 0,
  class: "dp__time_input"
}, zv = ["aria-label", "onKeydown", "onClick"], jv = ["aria-label", "data-test", "onKeydown", "onClick"], qv = ["aria-label", "onKeydown", "onClick"], Gv = { key: 0 }, Qv = ["aria-label", "onKeydown"], Zv = /* @__PURE__ */ re({
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Mt(), { defaults: l } = ft(r), { transitionName: u, showTransition: d } = jr(l.value.transitions), f = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = M("AM"), m = M(null), s = M([]);
    ze(() => {
      n("mounted");
    });
    const h = g(() => (i) => !!(r.maxTime && r.maxTime[i] && r.maxTime[i] < r[i] + +r[`${i}Increment`])), S = g(() => (i) => !!(r.minTime && r.minTime[i] && r.minTime[i] > r[i] - +r[`${i}Increment`])), $ = (i, p) => Wi(et(z(), i), p), B = (i, p) => hy(et(z(), i), p), C = g(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), E = g(() => {
      const i = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? i.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : i;
    }), P = g(() => E.value.filter((i) => !i.separator)), V = g(() => (i) => {
      if (i === "hours") {
        const p = Z(r.hours);
        return { text: p < 10 ? `0${p}` : `${p}`, value: p };
      }
      return { text: r[i] < 10 ? `0${r[i]}` : `${r[i]}`, value: r[i] };
    }), Q = (i) => {
      const p = r.is24 ? 24 : 12, k = i === "hours" ? p : 60, T = +r[`${i}GridIncrement`], W = i === "hours" && !r.is24 ? T : 0, J = [];
      for (let q = W; q < k; q += T)
        J.push({ value: q, text: q < 10 ? `0${q}` : `${q}` });
      return i === "hours" && !r.is24 && J.push({ value: 0, text: "12" }), Gy(J);
    }, X = (i, p) => {
      const k = r.minTime && r.minTime[p], T = r.maxTime && r.maxTime[p];
      return k && T ? i < k || i > T : k ? i < k : T ? i > T : !1;
    }, ee = g(() => (i) => Q(i).flat().filter((p) => p).map((p) => p.value).filter((p) => X(p, i))), A = (i) => r[`no${i[0].toUpperCase() + i.slice(1)}Overlay`], x = (i) => {
      A(i) || (f[i] = !f[i], f[i] || n("overlay-closed"));
    }, Y = (i) => i === "hours" ? Ot : i === "minutes" ? Tt : Gt, N = (i, p = !0) => {
      const k = p ? $ : B;
      (p ? h.value(i) : S.value(i)) || n(
        `update:${i}`,
        Y(i)(k({ [i]: +r[i] }, { [i]: +r[`${i}Increment`] }))
      );
    }, Z = (i) => r.is24 ? i : (i >= 12 ? y.value = "PM" : y.value = "AM", Ky(i)), G = () => {
      y.value === "PM" ? (y.value = "AM", n("update:hours", r.hours - 12)) : (y.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (i) => {
      f[i] = !0;
    }, I = (i, p, k) => {
      if (i && r.arrowNavigation) {
        Array.isArray(s.value[p]) ? s.value[p][k] = i : s.value[p] = [i];
        const T = s.value.reduce(
          (W, J) => J.map((q, D) => [...W[D] || [], J[D]]),
          []
        );
        o(r.closeTimePickerBtn), m.value && (T[1] = T[1].concat(m.value)), a(T, r.order);
      }
    }, O = (i, p) => i === "hours" && !r.is24 ? n(`update:${i}`, y.value === "PM" ? p + 12 : p) : n(`update:${i}`, p);
    return t({ openChildCmp: ne }), (i, p) => {
      var k;
      return i.disabled ? R("", !0) : (v(), _("div", Hv, [
        (v(!0), _(ce, null, Te(c(E), (T, W) => {
          var J, q, D;
          return v(), _("div", {
            key: W,
            class: de(c(C))
          }, [
            T.separator ? (v(), _(ce, { key: 0 }, [
              Ie(" : ")
            ], 64)) : (v(), _(ce, { key: 1 }, [
              U("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(h)(T.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (J = c(l).ariaLabels) == null ? void 0 : J.incrementValue(T.type),
                tabindex: "0",
                onKeydown: [
                  _e((w) => N(T.type), ["enter"]),
                  _e((w) => N(T.type), ["space"])
                ],
                onClick: (w) => N(T.type),
                ref_for: !0,
                ref: (w) => I(w, W, 0)
              }, [
                i.$slots["arrow-up"] ? L(i.$slots, "arrow-up", { key: 0 }) : R("", !0),
                i.$slots["arrow-up"] ? R("", !0) : (v(), te(c(fu), { key: 1 }))
              ], 42, zv),
              U("div", {
                role: "button",
                "aria-label": (q = c(l).ariaLabels) == null ? void 0 : q.openTpOverlay(T.type),
                class: de(A(T.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${T.type}-toggle-overlay-btn`,
                onKeydown: [
                  _e((w) => x(T.type), ["enter"]),
                  _e((w) => x(T.type), ["space"])
                ],
                onClick: (w) => x(T.type),
                ref_for: !0,
                ref: (w) => I(w, W, 1)
              }, [
                i.$slots[T.type] ? L(i.$slots, T.type, {
                  key: 0,
                  text: c(V)(T.type).text,
                  value: c(V)(T.type).value
                }) : R("", !0),
                i.$slots[T.type] ? R("", !0) : (v(), _(ce, { key: 1 }, [
                  Ie(ye(c(V)(T.type).text), 1)
                ], 64))
              ], 42, jv),
              U("div", {
                class: de({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(S)(T.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (D = c(l).ariaLabels) == null ? void 0 : D.decrementValue(T.type),
                tabindex: "0",
                onKeydown: [
                  _e((w) => N(T.type, !1), ["enter"]),
                  _e((w) => N(T.type, !1), ["space"])
                ],
                onClick: (w) => N(T.type, !1),
                ref_for: !0,
                ref: (w) => I(w, W, 2)
              }, [
                i.$slots["arrow-down"] ? L(i.$slots, "arrow-down", { key: 0 }) : R("", !0),
                i.$slots["arrow-down"] ? R("", !0) : (v(), te(c(du), { key: 1 }))
              ], 42, qv)
            ], 64))
          ], 2);
        }), 128)),
        i.is24 ? R("", !0) : (v(), _("div", Gv, [
          i.$slots["am-pm-button"] ? L(i.$slots, "am-pm-button", {
            key: 0,
            toggle: G,
            value: y.value
          }) : R("", !0),
          i.$slots["am-pm-button"] ? R("", !0) : (v(), _("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: m,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (k = c(l).ariaLabels) == null ? void 0 : k.amPmButton,
            tabindex: "0",
            onClick: G,
            onKeydown: [
              _e(Ce(G, ["prevent"]), ["enter"]),
              _e(Ce(G, ["prevent"]), ["space"])
            ]
          }, ye(y.value), 41, Qv))
        ])),
        (v(!0), _(ce, null, Te(c(P), (T, W) => (v(), te(pt, {
          key: W,
          name: c(u)(f[T.type]),
          css: c(d)
        }, {
          default: K(() => [
            f[T.type] ? (v(), te(un, {
              key: 0,
              items: Q(T.type),
              "disabled-values": c(l).filters.times[T.type].concat(c(ee)(T.type)),
              "esc-close": i.escClose,
              "aria-labels": c(l).ariaLabels,
              "hide-navigation": i.hideNavigation,
              "onUpdate:modelValue": (J) => O(T.type, J),
              onSelected: (J) => x(T.type),
              onToggle: (J) => x(T.type),
              onResetFlow: p[0] || (p[0] = (J) => i.$emit("reset-flow")),
              type: T.type
            }, Ze({
              "button-icon": K(() => [
                i.$slots["clock-icon"] ? L(i.$slots, "clock-icon", { key: 0 }) : R("", !0),
                i.$slots["clock-icon"] ? R("", !0) : (v(), te(c(cu), { key: 1 }))
              ]),
              _: 2
            }, [
              i.$slots[`${T.type}-overlay-value`] ? {
                name: "item",
                fn: K(({ item: J }) => [
                  L(i.$slots, `${T.type}-overlay-value`, {
                    text: J.text,
                    value: J.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : R("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Xv = ["aria-label"], Kv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Jv = {
  key: 1,
  class: "dp__overlay_row"
}, eh = ["aria-label"], th = /* @__PURE__ */ re({
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Mt(), l = ut(), { hideNavigationButtons: u, defaults: d } = ft(r), { transitionName: f, showTransition: y } = jr(d.value.transitions), m = M(null), s = M(null), h = M([]), S = M(null);
    ze(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Le(m.value)], "time") : o(!0, r.timePicker);
    });
    const $ = g(() => r.range && r.modelAuto ? hu(r.internalModelValue) : !0), B = M(!1), C = (N) => ({
      hours: Array.isArray(r.hours) ? r.hours[N] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[N] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[N] : r.seconds
    }), E = g(() => {
      const N = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          N.push(C(Z));
      else
        N.push(C(0));
      return N;
    }), P = (N, Z = !1, G = "") => {
      Z || n("reset-flow"), B.value = N, N && n("overlay-opened"), r.arrowNavigation && (o(N), N || n("overlay-closed")), Xe(() => {
        G !== "" && h.value[0] && h.value[0].openChildCmp(G);
      });
    }, V = g(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), Q = Vt(l, "timePicker"), X = (N, Z, G) => r.range ? Z === 0 ? [N, E.value[1][G]] : [E.value[0][G], N] : N, ee = (N) => {
      n("update:hours", N);
    }, A = (N) => {
      n("update:minutes", N);
    }, x = (N) => {
      n("update:seconds", N);
    }, Y = () => {
      S.value && r.arrowNavigation && S.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: P }), (N, Z) => {
      var G;
      return v(), _("div", null, [
        N.timePicker ? R("", !0) : vt((v(), _("div", {
          key: 0,
          class: de(c(V)),
          role: "button",
          "aria-label": (G = c(d).ariaLabels) == null ? void 0 : G.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: m,
          onKeydown: [
            Z[0] || (Z[0] = _e((ne) => P(!0), ["enter"])),
            Z[1] || (Z[1] = _e((ne) => P(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (ne) => P(!0))
        }, [
          N.$slots["clock-icon"] ? L(N.$slots, "clock-icon", { key: 0 }) : R("", !0),
          N.$slots["clock-icon"] ? R("", !0) : (v(), te(c(cu), { key: 1 }))
        ], 42, Xv)), [
          [rn, !c(u)("time")]
        ]),
        pe(pt, {
          name: c(f)(B.value),
          css: c(y)
        }, {
          default: K(() => {
            var ne;
            return [
              B.value || N.timePicker ? (v(), _("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: S,
                tabindex: "0"
              }, [
                U("div", Kv, [
                  N.$slots["time-picker-overlay"] ? L(N.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ee,
                    setMinutes: A,
                    setSeconds: x
                  }) : R("", !0),
                  N.$slots["time-picker-overlay"] ? R("", !0) : (v(), _("div", Jv, [
                    (v(!0), _(ce, null, Te(c(E), (I, O) => vt((v(), te(Zv, Ge({ key: O }, {
                      ...N.$props,
                      order: O,
                      hours: I.hours,
                      minutes: I.minutes,
                      seconds: I.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: O === 0 ? N.fixedStart : N.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (i) => ee(X(i, O, "hours")),
                      "onUpdate:minutes": (i) => A(X(i, O, "minutes")),
                      "onUpdate:seconds": (i) => x(X(i, O, "seconds")),
                      onMounted: Y,
                      onOverlayClosed: Y
                    }), Ze({ _: 2 }, [
                      Te(c(Q), (i, p) => ({
                        name: i,
                        fn: K((k) => [
                          L(N.$slots, i, Je(yt(k)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [rn, O === 0 ? !0 : c($)]
                    ])), 128))
                  ])),
                  N.timePicker ? R("", !0) : vt((v(), _("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: de(c(V)),
                    role: "button",
                    "aria-label": (ne = c(d).ariaLabels) == null ? void 0 : ne.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = _e((I) => P(!1), ["enter"])),
                      Z[4] || (Z[4] = _e((I) => P(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (I) => P(!1))
                  }, [
                    N.$slots["calendar-icon"] ? L(N.$slots, "calendar-icon", { key: 0 }) : R("", !0),
                    N.$slots["calendar-icon"] ? R("", !0) : (v(), te(c(zr), { key: 1 }))
                  ], 42, eh)), [
                    [rn, !c(u)("time")]
                  ])
                ])
              ], 512)) : R("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), nh = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = ft(t), o = M(null), l = M(z()), u = (p) => {
    !p.current && t.hideOffsetDates || (o.value = p.value);
  }, d = () => {
    o.value = null;
  }, f = (p) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? p ? ot(o.value, e.value[0]) : tt(o.value, e.value[0]) : !0, y = (p, k) => {
    const T = () => e.value ? k ? e.value[0] || null : e.value[1] : null, W = e.value && Array.isArray(e.value) ? T() : null;
    return Ne(z(p.value), W);
  }, m = (p) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return p ? !tt(o.value || null, k) : !0;
  }, s = (p, k = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !p.current ? !1 : Ne(z(p.value), e.value[k ? 0 : 1]) : t.range ? y(p, k) && m(k) || Ne(p.value, Array.isArray(e.value) ? e.value[0] : null) && f(k) : !1, h = (p, k, T) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? p ? !1 : T ? ot(e.value[0], k.value) : tt(e.value[0], k.value) : !1, S = (p) => !e.value || t.hideOffsetDates && !p.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Ne(p.value, e.value[0] ? e.value[0] : l.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((k) => Ne(k, p.value)) : Ne(p.value, e.value ? e.value : l.value), $ = (p) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !p.current)
          return !1;
        const k = Dt(o.value, +t.autoRange), T = a(z(o.value));
        return t.weekPicker ? Ne(T[1], z(p.value)) : Ne(k, z(p.value));
      }
      return !1;
    }
    return !1;
  }, B = (p) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const k = Dt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !p.current)
          return !1;
        const T = a(z(o.value));
        return t.weekPicker ? ot(p.value, T[0]) && tt(p.value, T[1]) : ot(p.value, o.value) && tt(p.value, k);
      }
      return !1;
    }
    return !1;
  }, C = (p) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !p.current)
          return !1;
        const k = a(z(o.value));
        return t.weekPicker ? Ne(k[0], p.value) : Ne(o.value, p.value);
      }
      return !1;
    }
    return !1;
  }, E = (p) => mu(e.value, o.value, p.value), P = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, V = () => t.modelAuto ? hu(t.internalModelValue) : !0, Q = (p) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const k = t.range ? !s(p) && !s(p, !1) : !0;
    return !n(p.value) && !S(p) && !(!p.current && t.hideOffsetDates) && k;
  }, X = (p) => t.range ? t.modelAuto ? P() && S(p) : !1 : S(p), ee = (p) => t.highlight ? r(p.value, t.highlight) : !1, A = (p) => n(p.value) && t.highlightDisabledDays === !1, x = (p) => t.highlightWeekDays && t.highlightWeekDays.includes(p.value.getDay()), Y = (p) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || p.current) && V() && !(!p.current && t.hideOffsetDates) && !S(p) ? E(p) : !1, N = (p) => {
    const { isRangeStart: k, isRangeEnd: T } = ne(p), W = t.range ? k || T : !1;
    return {
      dp__cell_offset: !p.current,
      dp__pointer: !t.disabled && !(!p.current && t.hideOffsetDates) && !n(p.value),
      dp__cell_disabled: n(p.value),
      dp__cell_highlight: !A(p) && (ee(p) || x(p)) && !X(p) && !W,
      dp__cell_highlight_active: !A(p) && (ee(p) || x(p)) && X(p),
      dp__today: !t.noToday && Ne(p.value, l.value) && p.current
    };
  }, Z = (p) => ({
    dp__active_date: X(p),
    dp__date_hover: Q(p)
  }), G = (p) => ({
    ...I(p),
    ...O(p),
    dp__range_between_week: Y(p) && t.weekPicker
  }), ne = (p) => {
    const k = t.multiCalendars > 0 ? p.current && s(p) && V() : s(p) && V(), T = t.multiCalendars > 0 ? p.current && s(p, !1) && V() : s(p, !1) && V();
    return { isRangeStart: k, isRangeEnd: T };
  }, I = (p) => {
    const { isRangeStart: k, isRangeEnd: T } = ne(p);
    return {
      dp__range_start: k,
      dp__range_end: T,
      dp__range_between: Y(p) && !t.weekPicker,
      dp__date_hover_start: h(Q(p), p, !0),
      dp__date_hover_end: h(Q(p), p, !1)
    };
  }, O = (p) => ({
    ...I(p),
    dp__cell_auto_range: B(p),
    dp__cell_auto_range_start: C(p),
    dp__cell_auto_range_end: $(p)
  }), i = (p) => t.range ? t.autoRange ? O(p) : t.modelAuto ? { ...Z(p), ...I(p) } : I(p) : t.weekPicker ? G(p) : Z(p);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (p) => ({
      ...N(p),
      ...i(p),
      [t.dayClass ? t.dayClass(p.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, rh = ["id", "onKeydown"], ah = {
  key: 0,
  class: "dp__sidebar_left"
}, oh = {
  key: 1,
  class: "dp__preset_ranges"
}, lh = ["onClick"], ih = {
  key: 2,
  class: "dp__sidebar_right"
}, uh = {
  key: 3,
  class: "dp__now_wrap"
}, sh = /* @__PURE__ */ re({
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: l } = pu(), { getCalendarDays: u, defaults: d } = ft(r), f = ut(), y = M(null), m = Ct({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = M([]), h = M([]), S = M(null), $ = M(null), B = M(0), C = M(!1), E = M(0);
    ze(() => {
      var F;
      C.value = !0, !((F = r.presetRanges) != null && F.length) && !f["left-sidebar"] && !f["right-sidebar"] && ge();
      const oe = Le($);
      if (oe && !r.textInput && !r.inline && (a(!0), A()), oe) {
        const nt = (it) => {
          ["action-row", "time-picker", "month-year"].some(
            (Wt) => Object.keys(f).includes(Wt)
          ) || it.preventDefault(), it.stopImmediatePropagation(), it.stopPropagation();
        };
        oe.addEventListener("pointerdown", nt), oe.addEventListener("mousedown", nt);
      }
      window.addEventListener("resize", ge);
    }), Ro(() => {
      window.removeEventListener("resize", ge);
    });
    const { arrowRight: P, arrowLeft: V, arrowDown: Q, arrowUp: X } = Mt(), ee = (F) => {
      F || F === 0 ? h.value[F].triggerTransition(
        G.value(F),
        ne.value(F)
      ) : h.value.forEach(
        (oe, nt) => oe.triggerTransition(G.value(nt), ne.value(nt))
      );
    }, A = () => {
      const F = Le($);
      F && F.focus({ preventScroll: !0 });
    }, x = () => {
      var F;
      (F = r.flow) != null && F.length && E.value !== -1 && (E.value += 1, n("flow-step", E.value), Ee());
    }, Y = () => {
      E.value = -1;
    }, {
      calendars: N,
      modelValue: Z,
      month: G,
      year: ne,
      time: I,
      updateTime: O,
      updateMonthYear: i,
      selectDate: p,
      getWeekNum: k,
      monthYearSelect: T,
      handleScroll: W,
      handleArrow: J,
      handleSwipe: q,
      getMarker: D,
      selectCurrentDate: w,
      presetDateRange: j
    } = lv(r, n, x, ee, E), { setHoverDate: ke, clearHoverDate: le, getDayClassData: ve } = nh(Z, r);
    He(
      N,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Ae = Vt(f, "calendar"), st = Vt(f, "action"), he = Vt(f, "timePicker"), dt = Vt(f, "monthYear"), lt = g(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), qe = g(() => Zy(r.yearRange)), Zt = g(() => Xy(r.locale, r.monthNameFormat)), ge = () => {
      const F = Le(y);
      F && (B.value = F.getBoundingClientRect().width);
    }, Pe = g(() => (F) => u(G.value(F), ne.value(F))), $e = g(
      () => d.value.multiCalendars > 0 && r.range ? [...Array(d.value.multiCalendars).keys()] : [0]
    ), Nt = g(
      () => (F) => F === 1
    ), Bt = g(() => r.monthPicker || r.timePicker || r.yearPicker), Qr = g(
      () => ({
        dp__flex_display: d.value.multiCalendars > 0
      })
    ), cn = g(() => ({
      dp__instance_calendar: d.value.multiCalendars > 0
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
    ), Kr = (F, oe) => F.value(oe).map((nt) => ({
      ...nt,
      days: nt.days.map((it) => (it.marker = D(it), it.classData = ve(it), it))
    })), fn = (F) => {
      F.stopPropagation(), F.stopImmediatePropagation();
    }, b = () => {
      r.escClose && n("close-picker");
    }, H = (F, oe = !1) => {
      p(F, oe), r.spaceConfirm && n("select-date");
    }, ie = (F) => {
      var oe;
      (oe = r.flow) != null && oe.length && (m[F] = !0, Object.keys(m).filter((nt) => !m[nt]).length || Ee());
    }, se = (F, oe, nt, it, ...Wt) => {
      if (r.flow[E.value] === F) {
        const ue = it ? oe.value[0] : oe.value;
        ue && ue[nt](...Wt);
      }
    }, Ee = () => {
      se("month", s, "toggleMonthPicker", !0, !0), se("year", s, "toggleYearPicker", !0, !0), se("calendar", S, "toggleTimePicker", !1, !1, !0), se("time", S, "toggleTimePicker", !1, !0, !0);
      const F = r.flow[E.value];
      (F === "hours" || F === "minutes" || F === "seconds") && se(F, S, "toggleTimePicker", !1, !0, !0, F);
    }, ct = (F) => {
      if (r.arrowNavigation) {
        if (F === "up")
          return X();
        if (F === "down")
          return Q();
        if (F === "left")
          return V();
        if (F === "right")
          return P();
      } else
        F === "left" || F === "up" ? J("left", 0, F === "up") : J("right", 0, F === "down");
    }, xt = (F) => {
      o(F.shiftKey), !r.disableMonthYearSelect && F.code === "Tab" && F.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (F.preventDefault(), F.stopImmediatePropagation(), n("close-picker"));
    }, Kt = (F) => {
      s.value[0] && s.value[0].handleMonthYearChange(F);
    };
    return t({
      updateMonthYear: i
    }), (F, oe) => {
      var nt;
      return v(), te(pt, {
        appear: "",
        name: (nt = c(d).transitions) == null ? void 0 : nt.menuAppear,
        mode: "out-in",
        css: !!F.transitions
      }, {
        default: K(() => {
          var it, Wt;
          return [
            U("div", {
              id: F.uid ? `dp-menu-${F.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: $,
              role: "dialog",
              class: de(c(Xr)),
              onMouseleave: oe[15] || (oe[15] = //@ts-ignore
              (...ue) => c(le) && c(le)(...ue)),
              onClick: fn,
              onKeydown: [
                _e(b, ["esc"]),
                oe[16] || (oe[16] = _e(Ce((ue) => ct("left"), ["prevent"]), ["left"])),
                oe[17] || (oe[17] = _e(Ce((ue) => ct("up"), ["prevent"]), ["up"])),
                oe[18] || (oe[18] = _e(Ce((ue) => ct("down"), ["prevent"]), ["down"])),
                oe[19] || (oe[19] = _e(Ce((ue) => ct("right"), ["prevent"]), ["right"])),
                xt
              ]
            }, [
              (F.disabled || F.readonly) && F.inline ? (v(), _("div", {
                key: 0,
                class: de(c(Xt))
              }, null, 2)) : R("", !0),
              !F.inline && !F.teleportCenter ? (v(), _("div", {
                key: 1,
                class: de(c(lt))
              }, null, 2)) : R("", !0),
              U("div", {
                class: de({
                  dp__menu_content_wrapper: ((it = F.presetRanges) == null ? void 0 : it.length) || !!F.$slots["left-sidebar"] || !!F.$slots["right-sidebar"]
                })
              }, [
                F.$slots["left-sidebar"] ? (v(), _("div", ah, [
                  L(F.$slots, "left-sidebar", Je(yt({ handleMonthYearChange: Kt })))
                ])) : R("", !0),
                (Wt = F.presetRanges) != null && Wt.length ? (v(), _("div", oh, [
                  (v(!0), _(ce, null, Te(F.presetRanges, (ue, Lt) => (v(), _("div", {
                    key: Lt,
                    style: $t(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (we) => c(j)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? L(F.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: c(j),
                      label: ue.label,
                      range: ue.range
                    }) : (v(), _(ce, { key: 1 }, [
                      Ie(ye(ue.label), 1)
                    ], 64))
                  ], 12, lh))), 128))
                ])) : R("", !0),
                U("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: y,
                  role: "document"
                }, [
                  U("div", {
                    class: de(c(Qr))
                  }, [
                    (v(!0), _(ce, null, Te(c($e), (ue, Lt) => (v(), _("div", {
                      key: ue,
                      class: de(c(cn))
                    }, [
                      !F.disableMonthYearSelect && !F.timePicker ? (v(), te(Lv, Ge({
                        key: 0,
                        ref_for: !0,
                        ref: (we) => {
                          we && (s.value[Lt] = we);
                        },
                        months: c(Zt),
                        years: c(qe),
                        month: c(G)(ue),
                        year: c(ne)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, F.$props, {
                        onMount: oe[0] || (oe[0] = (we) => ie("monthYearInput")),
                        onResetFlow: Y,
                        onUpdateMonthYear: (we) => c(i)(ue, we),
                        onMonthYearSelect: c(T),
                        onOverlayClosed: A
                      }), Ze({ _: 2 }, [
                        Te(c(dt), (we, Ou) => ({
                          name: we,
                          fn: K((Jr) => [
                            L(F.$slots, we, Je(yt(Jr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : R("", !0),
                      pe(Dv, Ge({
                        ref_for: !0,
                        ref: (we) => {
                          we && (h.value[Lt] = we);
                        },
                        "specific-mode": c(Bt),
                        "get-week-num": c(k),
                        instance: ue,
                        "mapped-dates": c(Zr)(ue),
                        month: c(G)(ue),
                        year: c(ne)(ue)
                      }, F.$props, {
                        "flow-step": E.value,
                        "onUpdate:flowStep": oe[1] || (oe[1] = (we) => E.value = we),
                        onSelectDate: (we) => c(p)(we, !c(Nt)(ue)),
                        onHandleSpace: (we) => H(we, !c(Nt)(ue)),
                        onSetHoverDate: oe[2] || (oe[2] = (we) => c(ke)(we)),
                        onHandleScroll: (we) => c(W)(we, ue),
                        onHandleSwipe: (we) => c(q)(we, ue),
                        onMount: oe[3] || (oe[3] = (we) => ie("calendar")),
                        onResetFlow: Y,
                        onTooltipOpen: oe[4] || (oe[4] = (we) => F.$emit("tooltip-open", we)),
                        onTooltipClose: oe[5] || (oe[5] = (we) => F.$emit("tooltip-close", we))
                      }), Ze({ _: 2 }, [
                        Te(c(Ae), (we, Ou) => ({
                          name: we,
                          fn: K((Jr) => [
                            L(F.$slots, we, Je(yt({ ...Jr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  U("div", null, [
                    F.$slots["time-picker"] ? L(F.$slots, "time-picker", Je(Ge({ key: 0 }, { time: c(I), updateTime: c(O) }))) : (v(), _(ce, { key: 1 }, [
                      F.enableTimePicker && !F.monthPicker && !F.weekPicker ? (v(), te(th, Ge({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: S,
                        hours: c(I).hours,
                        minutes: c(I).minutes,
                        seconds: c(I).seconds,
                        "internal-model-value": e.internalModelValue
                      }, F.$props, {
                        onMount: oe[6] || (oe[6] = (ue) => ie("timePicker")),
                        "onUpdate:hours": oe[7] || (oe[7] = (ue) => c(O)(ue)),
                        "onUpdate:minutes": oe[8] || (oe[8] = (ue) => c(O)(ue, !1)),
                        "onUpdate:seconds": oe[9] || (oe[9] = (ue) => c(O)(ue, !1, !0)),
                        onResetFlow: Y,
                        onOverlayClosed: A,
                        onOverlayOpened: oe[10] || (oe[10] = (ue) => F.$emit("time-picker-open", ue))
                      }), Ze({ _: 2 }, [
                        Te(c(he), (ue, Lt) => ({
                          name: ue,
                          fn: K((we) => [
                            L(F.$slots, ue, Je(yt(we)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : R("", !0)
                    ], 64))
                  ])
                ], 512),
                F.$slots["right-sidebar"] ? (v(), _("div", ih, [
                  L(F.$slots, "right-sidebar", Je(yt({ handleMonthYearChange: Kt })))
                ])) : R("", !0),
                F.showNowButton ? (v(), _("div", uh, [
                  F.$slots["now-button"] ? L(F.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: c(w)
                  }) : R("", !0),
                  F.$slots["now-button"] ? R("", !0) : (v(), _("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: oe[11] || (oe[11] = //@ts-ignore
                    (...ue) => c(w) && c(w)(...ue))
                  }, ye(F.nowButtonLabel), 1))
                ])) : R("", !0)
              ], 2),
              !F.autoApply || F.keepActionRow ? (v(), te(wv, Ge({
                key: 2,
                "menu-mount": C.value,
                "calendar-width": B.value,
                "internal-model-value": e.internalModelValue
              }, F.$props, {
                onClosePicker: oe[12] || (oe[12] = (ue) => F.$emit("close-picker")),
                onSelectDate: oe[13] || (oe[13] = (ue) => F.$emit("select-date")),
                onInvalidSelect: oe[14] || (oe[14] = (ue) => F.$emit("invalid-select"))
              }), Ze({ _: 2 }, [
                Te(c(st), (ue, Lt) => ({
                  name: ue,
                  fn: K((we) => [
                    L(F.$slots, ue, Je(yt({ ...we })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : R("", !0)
            ], 42, rh)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), ch = typeof window < "u" ? window : void 0, ma = () => {
}, fh = (e) => Ru() ? (Mu(e), !0) : !1, dh = (e, t, n, r) => {
  if (!e)
    return ma;
  let a = ma;
  const o = He(
    () => c(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = ma;
      });
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    o(), a();
  };
  return fh(l), l;
}, mh = (e, t, n, r = {}) => {
  const { window: a = ch, event: o = "pointerdown" } = r;
  return a ? dh(a, o, (l) => {
    const u = Le(e), d = Le(t);
    !u || !d || u === l.target || l.composedPath().includes(u) || l.composedPath().includes(d) || n(l);
  }, { passive: !0 }) : void 0;
}, ph = /* @__PURE__ */ re({
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
    const r = e, a = ut(), o = M(!1), l = nr(r, "modelValue"), u = nr(r, "timezone"), d = M(null), f = M(null), y = M(!1), m = M(null), { setMenuFocused: s, setShiftKey: h } = pu(), { clearArrowNav: S } = Mt(), { validateDate: $, isValidTime: B, defaults: C } = ft(r);
    ze(() => {
      N(r.modelValue), r.inline || (A(m.value).addEventListener("scroll", p), window.addEventListener("resize", k)), r.inline && (o.value = !0);
    }), Ro(() => {
      if (!r.inline) {
        const ge = A(m.value);
        ge && ge.removeEventListener("scroll", p), window.removeEventListener("resize", k);
      }
    });
    const E = Vt(a, "all", r.presetRanges), P = Vt(a, "input");
    He(
      [l, u],
      () => {
        N(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: V, menuPosition: Q, setMenuPosition: X, setInitialPosition: ee, getScrollableParent: A } = sv(
      d,
      f,
      n,
      r
    ), {
      inputValue: x,
      internalModelValue: Y,
      parseExternalModelValue: N,
      emitModelValue: Z,
      formatInputValue: G,
      checkBeforeEmit: ne
    } = iv(n, r, y), I = g(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), O = g(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), i = g(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), p = () => {
      o.value && (r.closeOnScroll ? le() : X());
    }, k = () => {
      o.value && X();
    }, T = () => {
      !r.disabled && !r.readonly && (ee(), o.value = !0, Xe().then(() => {
        X(), o.value && n("open");
      }), o.value || ke(), N(r.modelValue));
    }, W = () => {
      x.value = "", ke(), n("update:model-value", null), n("cleared"), le();
    }, J = () => {
      const ge = Y.value;
      return !ge || !Array.isArray(ge) && $(ge) ? !0 : Array.isArray(ge) ? ge.length === 2 && $(ge[0]) && $(ge[1]) ? !0 : $(ge[0]) : !1;
    }, q = () => {
      ne() && J() ? (Z(), le()) : n("invalid-select", Y.value);
    }, D = (ge) => {
      w(), Z(), r.closeOnAutoApply && !ge && le();
    }, w = () => {
      f.value && r.textInput && f.value.setParsedDate(Y.value);
    }, j = (ge = !1) => {
      r.autoApply && B(Y.value) && J() && (r.range && Array.isArray(Y.value) ? (r.partialRange || Y.value.length === 2) && D(ge) : D(ge));
    }, ke = () => {
      r.textInput || (Y.value = null);
    }, le = () => {
      r.inline || (o.value && (o.value = !1, s(!1), h(!1), S(), n("closed"), ee(), x.value && N(l.value)), ke(), f.value && f.value.focusInput());
    }, ve = (ge, Pe) => {
      if (!ge) {
        Y.value = null;
        return;
      }
      Y.value = ge, Pe && (q(), n("text-submit"));
    }, Ae = () => {
      r.autoApply && B(Y.value) && Z(), w();
    }, st = () => o.value ? le() : T(), he = (ge) => {
      Y.value = ge;
    }, dt = g(() => r.textInput && C.value.textInputOptions.format), lt = () => {
      dt.value && (y.value = !0, G()), n("focus");
    }, qe = () => {
      dt.value && (y.value = !1, G()), n("blur");
    }, Zt = (ge) => {
      d.value && d.value.updateMonthYear(0, {
        month: Oi(ge.month),
        year: Oi(ge.year)
      });
    };
    return mh(
      d,
      f,
      r.onClickOutside ? () => r.onClickOutside(J) : le
    ), t({
      closeMenu: le,
      selectDate: q,
      clearValue: W,
      openMenu: T,
      onScroll: p,
      formatInputValue: G,
      // exposed for testing purposes
      updateInternalModelValue: he,
      // modify internal modelValue
      setMonthYear: Zt
    }), (ge, Pe) => (v(), _("div", {
      class: de(c(I)),
      ref_key: "pickerWrapperRef",
      ref: m
    }, [
      pe(hv, Ge({
        ref_key: "inputRef",
        ref: f,
        "is-menu-open": o.value,
        "input-value": c(x),
        "onUpdate:inputValue": Pe[0] || (Pe[0] = ($e) => Be(x) ? x.value = $e : null)
      }, ge.$props, {
        onClear: W,
        onOpen: T,
        onSetInputDate: ve,
        onSetEmptyDate: c(Z),
        onSelectDate: q,
        onToggle: st,
        onClose: le,
        onFocus: lt,
        onBlur: qe
      }), Ze({ _: 2 }, [
        Te(c(P), ($e, Nt) => ({
          name: $e,
          fn: K((Bt) => [
            L(ge.$slots, $e, Je(yt(Bt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (v(), te(Bi(ge.teleport ? Cu : "div"), Je(Ge({ key: 0 }, c(i))), {
        default: K(() => [
          o.value ? (v(), te(sh, Ge({
            key: 0,
            ref_key: "dpMenuRef",
            ref: d,
            class: c(O),
            style: c(Q),
            "open-on-top": c(V)
          }, ge.$props, {
            "internal-model-value": c(Y),
            "onUpdate:internalModelValue": Pe[1] || (Pe[1] = ($e) => Be(Y) ? Y.value = $e : null),
            onClosePicker: le,
            onSelectDate: q,
            onAutoApply: j,
            onTimeUpdate: Ae,
            onFlowStep: Pe[2] || (Pe[2] = ($e) => ge.$emit("flow-step", $e)),
            onUpdateMonthYear: Pe[3] || (Pe[3] = ($e) => ge.$emit("update-month-year", $e)),
            onInvalidSelect: Pe[4] || (Pe[4] = ($e) => ge.$emit("invalid-select", c(Y))),
            onInvalidFixedRange: Pe[5] || (Pe[5] = ($e) => ge.$emit("invalid-fixed-range", $e)),
            onRecalculatePosition: c(X),
            onTooltipOpen: Pe[6] || (Pe[6] = ($e) => ge.$emit("tooltip-open", $e)),
            onTooltipClose: Pe[7] || (Pe[7] = ($e) => ge.$emit("tooltip-close", $e)),
            onTimePickerOpen: Pe[8] || (Pe[8] = ($e) => ge.$emit("time-picker-open", $e))
          }), Ze({ _: 2 }, [
            Te(c(E), ($e, Nt) => ({
              name: $e,
              fn: K((Bt) => [
                L(ge.$slots, $e, Je(yt({ ...Bt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : R("", !0)
        ]),
        _: 3
      }, 16)) : R("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ (() => {
  const e = ph;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(yh).forEach(([e, t]) => {
  e !== "default" && (Qo[e] = t);
});
const vh = { class: "grid gap-y-1" }, hh = ["data-dark", "data-opened", "data-filled", "data-outlined", "data-readonly", "data-error"], gh = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], bh = ["onClick"], _h = { class: "cursor-pointer" }, wh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, kh = /* @__PURE__ */ re({
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
    const n = e, r = M(!1), a = M(null), o = g({
      get() {
        return n.modelValue;
      },
      set(s) {
        t("update:model-value", s);
      }
    }), l = g(() => n.monthPicker ? "MM yyyy" : n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = g(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), d = g(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), f = () => {
      a.value && a.value.openMenu();
    }, y = () => {
      r.value = !0;
    }, m = () => {
      r.value = !1;
    };
    return (s, h) => (v(), _("div", vh, [
      pe(c(Qo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: c(o),
        "onUpdate:modelValue": h[1] || (h[1] = (S) => Be(o) ? o.value = S : null),
        "auto-apply": "",
        range: e.range,
        locale: "es-CL",
        "hide-input-icon": "",
        format: c(l),
        clearable: !1,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        disabled: e.disabled,
        readonly: e.readonly,
        "month-picker": e.monthPicker,
        "enable-time-picker": !1,
        class: "custom-date-picker__picker",
        onOpen: y,
        onClosed: m
      }, {
        "dp-input": K(({ value: S, onClear: $, onInput: B, onEnter: C }) => [
          U("div", {
            "data-dark": e.dark,
            "data-opened": r.value,
            "data-filled": !!c(u),
            "data-outlined": e.outlined,
            "data-readonly": e.readonly,
            "data-error": !!e.errorMessage,
            class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
          }, [
            U("input", {
              readonly: "",
              type: "text",
              value: S,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
              onClick: h[0] || (h[0] = Ce(() => {
              }, ["stop"])),
              onInput: B,
              onFocus: Ce(f, ["stop"]),
              onKeydown: _e(C, ["enter"])
            }, null, 40, gh),
            U("div", {
              class: "cursor-pointer hover:opacity-60 active:opacity-100",
              onClick: Ce($, ["stop"])
            }, [
              S && !e.readonly && !e.disabled && e.clearable ? (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fm-circle-close"
              })) : R("", !0)
            ], 8, bh),
            U("div", _h, [
              e.disabled ? R("", !0) : (v(), te(Fe, {
                key: 0,
                size: "1rem",
                color: c(d),
                name: "fm-calendar"
              }, null, 8, ["color"]))
            ])
          ], 8, hh)
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
      e.errorMessage ? (v(), _("div", wh, ye(e.errorMessage), 1)) : R("", !0)
    ]));
  }
});
const Zo = /* @__PURE__ */ be(kh, [["__scopeId", "data-v-686c651f"]]), gu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, xh = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), gu(e, t.split("."), n)), Sh = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return xh(e, t, n);
  if (Array.isArray(t))
    return gu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, $h = () => ({
  getPropertyFromItem: Sh
});
/*! maska v2.1.7 | (c) Alexander Shabunevich | Released under the MIT license */
var Oh = Object.defineProperty, Th = (e, t, n) => t in e ? Oh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sn = (e, t, n) => (Th(e, typeof t != "symbol" ? t + "" : t, n), n);
const Ri = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class Mi {
  constructor(t = {}) {
    sn(this, "opts", {}), sn(this, "memo", /* @__PURE__ */ new Map());
    var n;
    const r = { ...t };
    if (r.tokens != null) {
      r.tokens = r.tokensReplace ? { ...r.tokens } : { ...Ri, ...r.tokens };
      for (const a of Object.values(r.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      r.tokens = Ri;
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
    const { mask: l, escaped: u } = this.escapeMask(n), d = [], f = this.opts.tokens != null ? this.opts.tokens : {}, y = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", s = this.isReversed() ? 0 : l.length - 1, h = this.isReversed() ? () => C > -1 && E > -1 : () => C < l.length && E < t.length, S = (P) => !this.isReversed() && P <= s || this.isReversed() && P >= s;
    let $, B = -1, C = this.isReversed() ? l.length - 1 : 0, E = this.isReversed() ? t.length - 1 : 0;
    for (; h(); ) {
      const P = l.charAt(C), V = f[P], Q = (V == null ? void 0 : V.transform) != null ? V.transform(t.charAt(E)) : t.charAt(E);
      if (!u.includes(C) && V != null) {
        if (Q.match(V.pattern) != null)
          d[m](Q), V.repeated ? (B === -1 ? B = C : C === s && C !== B && (C = B - y), s === B && (C -= y)) : V.multiple && (C -= y), C += y;
        else if (V.multiple) {
          const X = ((a = d[E - y]) == null ? void 0 : a.match(V.pattern)) != null, ee = l.charAt(C + y);
          X && ee !== "" && f[ee] == null ? (C += y, E -= y) : d[m]("");
        } else
          Q === $ ? $ = void 0 : V.optional && (C += y, E -= y);
        E += y;
      } else
        r && !this.isEager() && d[m](P), Q === P && !this.isEager() ? E += y : $ = P, this.isEager() || (C += y);
      if (this.isEager())
        for (; S(C) && (f[l.charAt(C)] == null || u.includes(C)); )
          r ? d[m](l.charAt(C)) : l.charAt(C) === t.charAt(E) && (E += y), C += y;
    }
    return this.memo.set(o, d.join("")), this.memo.get(o);
  }
}
const bu = (e) => JSON.parse(e.replaceAll("'", '"')), Ii = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = Ph(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = pa(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = pa(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = pa(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = Ch(e.dataset.maskaTokens)), n;
}, pa = (e) => e !== "" ? !!JSON.parse(e) : !0, Ph = (e) => e.startsWith("[") && e.endsWith("]") ? bu(e) : e, Ch = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return bu(e);
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
class Dh {
  constructor(t, n = {}) {
    sn(this, "items", /* @__PURE__ */ new Map()), sn(this, "beforeinputEvent", (r) => {
      const a = r.target, o = this.items.get(a);
      o.isEager() && "inputType" in r && r.inputType.startsWith("delete") && o.unmasked(a.value).length <= 1 && this.setMaskedValue(a, "");
    }), sn(this, "inputEvent", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked" in r.detail)
        return;
      const a = r.target, o = this.items.get(a), l = a.value, u = a.selectionStart, d = a.selectionEnd;
      let f = l;
      if (o.isEager()) {
        const y = o.masked(l), m = o.unmasked(l);
        m === "" && "data" in r && r.data != null ? f = r.data : m !== o.unmasked(y) && (f = m);
      }
      if (this.setMaskedValue(a, f), "inputType" in r && (r.inputType.startsWith("delete") || u != null && u < l.length))
        try {
          a.setSelectionRange(u, d);
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
    const r = this.items.get(t), a = new Mi(Ii(t, this.getMaskOpts(n)));
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
      const a = new Mi(Ii(r, n));
      this.items.set(r, a), r.value !== "" && this.setMaskedValue(r, r.value), r.addEventListener("input", this.inputEvent), r.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, n) {
    const r = this.items.get(t);
    this.options.preProcess != null && (n = this.options.preProcess(n));
    const a = r.masked(n), o = r.unmasked(r.isEager() ? a : n), l = r.completed(n), u = { masked: a, unmasked: o, completed: l };
    n = a, this.options.postProcess != null && (n = this.options.postProcess(n)), t.value = n, t.dataset.maskaValue = n, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((d) => d(u)) : this.options.onMaska(u)), t.dispatchEvent(new CustomEvent("maska", { detail: u })), t.dispatchEvent(new CustomEvent("input", { detail: u }));
  }
}
const Do = /* @__PURE__ */ new WeakMap(), Rh = (e) => {
  setTimeout(() => {
    var t;
    ((t = Do.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, Mh = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), r = { ...t.arg };
  if (n == null)
    return;
  Rh(n);
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
  Do.set(n, new Dh(n, r));
}, Ih = { class: "grid gap-y-1" }, Nh = ["data-dark", "data-filled", "data-outlined", "data-error", "data-padding-right"], Bh = ["type", "data-maska", "disabled", "readonly", "placeholder", "data-maska-tokens"], Ah = ["type", "disabled", "readonly", "placeholder"], Eh = ["onClick"], Vh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, Yh = /* @__PURE__ */ re({
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
    const n = e, r = ut(), a = g({
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
    }, d = (s) => {
      n.disabled || n.readonly || t("blur", s);
    }, f = (s) => {
      n.disabled || n.readonly || t("input", s);
    }, y = (s) => {
      n.disabled || n.readonly || t("keyup", s);
    }, m = (s) => {
      n.disabled || n.readonly || t("keydown", s);
    };
    return (s, h) => (v(), _("div", Ih, [
      U("div", {
        "data-dark": e.dark,
        "data-filled": !!c(a),
        "data-outlined": e.outlined,
        "data-error": !!e.errorMessage,
        "data-padding-right": e.clearable || o(),
        class: "h-10 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent"
      }, [
        e.mask ? vt((v(), _("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (S) => Be(a) ? a.value = S : null),
          type: e.type,
          "data-maska": e.mask,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "data-maska-tokens": e.maskTokens,
          class: "h-9 outline-0 px-3 text-secundario text-base placeholder-neutro-4",
          onBlur: d,
          onFocus: u,
          onInput: f,
          onKeyup: y,
          onKeydown: m
        }, null, 40, Bh)), [
          [Jo, c(a)],
          [c(Mh)]
        ]) : vt((v(), _("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (S) => Be(a) ? a.value = S : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "h-9 outline-0 px-3 text-secundario text-base placeholder-neutro-4",
          onBlur: d,
          onFocus: u,
          onInput: f,
          onKeyup: y,
          onKeydown: m
        }, null, 40, Ah)), [
          [Jo, c(a)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (v(), _("div", {
          key: 2,
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onClick: Ce(l, ["stop"])
        }, [
          c(a) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : R("", !0)
        ], 8, Eh)) : R("", !0),
        o() ? L(s.$slots, "append", { key: 3 }, void 0, !0) : R("", !0)
      ], 8, Nh),
      e.errorMessage ? (v(), _("div", Vh, ye(e.errorMessage), 1)) : R("", !0)
    ]));
  }
});
const qr = /* @__PURE__ */ be(Yh, [["__scopeId", "data-v-6b38752f"]]), Fh = ["data-dark", "data-filled", "data-outlined", "data-readonly", "data-error", "onMousedown"], Uh = ["value", "disabled", "placeholder", "onKeydown"], Wh = ["onClick"], Lh = ["data-opened"], Hh = ["data-selected", "onClick"], zh = {
  key: 2,
  class: "leading-5 text-base text-center text-secundario"
}, jh = {
  key: 0,
  class: "font-medium text-sm leading-[0.875rem] text-error"
}, qh = /* @__PURE__ */ re({
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
    xe((k) => ({
      "6c26f38f": o.value,
      "18b3b50d": l.value,
      "03408d00": u.value,
      "10800b0e": e.textTransform
    }));
    const r = ut(), { getPropertyFromItem: a } = $h(), o = M(""), l = M(""), u = M(""), d = M(""), f = M(!1), y = M(!1), m = M(!1), s = M(null), h = M(null), S = M(null), $ = g({
      get() {
        return n.modelValue;
      },
      set(k) {
        t("update:model-value", k);
      }
    }), B = g(
      () => P.value && n.clearable && !n.readonly && !n.disabled
    ), C = g(() => n.errorMessage ? "error" : n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), E = g(() => !n.searchable || !d.value ? n.items : n.items.filter((k) => n.searchFunction ? n.searchFunction(d.value, k) : Q(k))), P = g(() => Array.isArray($.value) ? $.value.length > 0 : !!$.value), V = g(() => {
      var k;
      if ($.value)
        if (Array.isArray($.value)) {
          if ($.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return a($.value, n.itemTitle, $.value);
          {
            const T = (k = n.items) == null ? void 0 : k.find((W) => {
              const J = a(W, n.itemValue, W), q = a($.value, n.itemValue, $.value);
              return J === q;
            });
            return a(T, n.itemTitle, T);
          }
        }
      return "";
    });
    function Q(k) {
      const T = d.value.trim().toLowerCase();
      return T ? X(k).toLowerCase().includes(T) : !0;
    }
    function X(k) {
      return a(k, n.itemTitle, k);
    }
    function ee() {
      y.value = !0;
    }
    function A() {
      y.value = !1;
    }
    async function x() {
      await Xe();
      const k = h.value, T = S.value;
      if (!k || !T)
        return;
      const W = k.getBoundingClientRect(), J = T.getBoundingClientRect();
      l.value = `${W.left}px`, u.value = `${W.width}px`;
      const q = W.top + W.height + J.height, D = window.innerHeight, w = W.top + W.height - (n.errorMessage ? 18 : 0);
      if (q > D) {
        const j = q - D;
        o.value = `${w - j - 16}px`;
      } else
        o.value = `${w}px`;
    }
    function Y() {
      n.disabled || n.readonly || f.value || (f.value = !0, x(), m.value = !0, document.addEventListener("click", ne));
    }
    function N() {
      f.value = !1, y.value = !1, m.value = !1, document.removeEventListener("click", ne);
    }
    function Z() {
      y.value || N();
    }
    function G() {
      f.value && N();
    }
    function ne(k) {
      !h.value || !k.target || h.value.contains(k.target) || N();
    }
    function I() {
      n.disabled || n.readonly || (f.value ? (N(), s.value && s.value.focus()) : (Y(), s.value && s.value.blur()));
    }
    function O(k) {
      const T = a(k, n.itemValue, k);
      if (n.multiple && Array.isArray($.value)) {
        const W = $.value.slice(), J = n.returnObject ? W.findIndex((q) => a(q, n.itemValue, q) === T) : W.indexOf(T);
        J >= 0 ? W.splice(J, 1) : W.push(n.returnObject ? k : T), $.value = W;
      } else
        $.value = n.returnObject ? k : T, N();
    }
    function i(k) {
      if (n.multiple && Array.isArray($.value))
        return $.value.some((J) => {
          const q = a(J, n.itemValue, J), D = a(k, n.itemValue, k);
          return q === D;
        });
      const T = a($.value, n.itemValue, $.value), W = a(k, n.itemValue, k);
      return T === W;
    }
    function p() {
      Array.isArray($.value) ? $.value = [] : $.value = null;
    }
    return (k, T) => (v(), _("div", {
      ref_key: "container",
      ref: h,
      class: "grid gap-y-1",
      onMouseenter: ee,
      onMouseleave: A
    }, [
      U("div", {
        "data-dark": e.dark,
        "data-filled": !!c(P),
        "data-outlined": e.outlined,
        "data-readonly": e.readonly,
        "data-error": !!e.errorMessage,
        class: "h-10 cursor-pointer pr-3 grid grid-flow-col grid-cols-1 items-center gap-x-3 bg-neutro-1 rounded-xl data-[dark=true]:bg-transparent",
        onMousedown: Ce(I, ["stop"])
      }, [
        U("input", {
          ref_key: "input",
          ref: s,
          readonly: "",
          value: c(V),
          disabled: e.disabled,
          placeholder: e.placeholder,
          class: "h-9 outline-0 cursor-pointer px-3 text-secundario text-base placeholder-neutro-4",
          onFocus: Y,
          onBlur: Z,
          onKeydown: _e(G, ["tab"])
        }, null, 40, Uh),
        U("div", {
          class: "cursor-pointer hover:opacity-60 active:opacity-100",
          onMousedown: T[0] || (T[0] = Ce(() => {
          }, ["stop"])),
          onClick: Ce(p, ["stop"])
        }, [
          c(B) ? (v(), te(Fe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fm-circle-close"
          })) : R("", !0)
        ], 40, Wh),
        e.readonly ? R("", !0) : (v(), _("div", {
          key: 0,
          "data-opened": f.value,
          class: "transition-all duration-200 ease-out data-[opened=true]:rotate-180"
        }, [
          pe(Fe, {
            size: "1rem",
            color: c(C),
            name: "fm-caret-down"
          }, null, 8, ["color"])
        ], 8, Lh))
      ], 40, Fh),
      pe(pt, null, {
        default: K(() => [
          f.value ? (v(), _("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: S,
            class: "z-[1008] grid p-4 fixed gap-y-2 overflow-y-auto max-h-80 bg-neutro-1 rounded-2xl custom-select__menu"
          }, [
            e.searchable && e.items.length > 5 ? (v(), te(qr, {
              key: 0,
              modelValue: d.value,
              "onUpdate:modelValue": T[1] || (T[1] = (W) => d.value = W),
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
            }, 8, ["modelValue", "placeholder"])) : R("", !0),
            c(r)["preppend-item"] ? L(k.$slots, "preppend-item", {
              key: 1,
              close: N,
              filteredItems: c(E)
            }, void 0, !0) : R("", !0),
            (v(!0), _(ce, null, Te(c(E), (W, J) => (v(), _("div", {
              key: `item-${J}`,
              "data-selected": i(W),
              class: "custom-select__menu-item flex cursor-pointer text-base leading-5 gap-x-2 justify-start text-secundario transition-colors duration-100 data-[selected=true]:font-semibold",
              onClick: Ce((q) => O(W), ["stop"])
            }, [
              e.multiple ? (v(), te(Fi, {
                key: 0,
                "model-value": i(W)
              }, null, 8, ["model-value"])) : R("", !0),
              Ie(" " + ye(X(W)), 1)
            ], 8, Hh))), 128)),
            c(E).length === 0 && !e.hideNoDataMessage ? (v(), _("div", zh, " Sin datos disponibles ")) : R("", !0),
            c(r)["append-item"] ? L(k.$slots, "append-item", {
              key: 3,
              close: N,
              filteredItems: c(E)
            }, void 0, !0) : R("", !0)
          ], 512)) : R("", !0)
        ]),
        _: 3
      }),
      e.errorMessage ? (v(), _("div", jh, ye(e.errorMessage), 1)) : R("", !0)
    ], 544));
  }
});
const Xo = /* @__PURE__ */ be(qh, [["__scopeId", "data-v-0cbaf3b3"]]), Gh = (e, t) => {
  const n = M(1), r = M([]), a = M("asc"), o = M(null), l = g(() => {
    const P = e.value.slice();
    return o.value ? P.sort((V, Q) => {
      if (!o.value)
        return 0;
      const X = s(V, o.value.value), ee = s(Q, o.value.value);
      let A = X > ee ? 1 : -1;
      return o.value.sort && (A = o.value.sort(X, ee)), a.value === "asc" ? A : A * -1;
    }) : P;
  }), u = g(() => t.value !== null ? Math.ceil(e.value.length / t.value) : Math.max(...r.value)), d = g(() => t.value !== null ? l.value.slice(
    (n.value - 1) * t.value,
    n.value * t.value
  ) : r.value.length === 0 ? l.value : l.value.filter((P, V) => r.value[V] === n.value)), f = g(() => a.value);
  function y(P) {
    return P.id ?? Object.values(P)[0];
  }
  function m(P, V) {
    const Q = V.value;
    return `${y(P)}.${Q}`;
  }
  function s(P, V) {
    return P[V] ?? "";
  }
  function h(P) {
    e.value = P;
  }
  async function S(P, V) {
    var Q;
    P.sortable !== !1 && (n.value = 1, ((Q = o.value) == null ? void 0 : Q.value) === P.value ? a.value === "asc" ? a.value = "desc" : (o.value = null, a.value = "asc") : (o.value = P, a.value = "asc"), t.value === null && await B(V));
  }
  function $(P) {
    var V;
    return ((V = o.value) == null ? void 0 : V.value) === P;
  }
  async function B(P) {
    r.value = [], await Xe(), C(P);
  }
  function C(P) {
    if (e.value.length === 0)
      return;
    const V = [], Q = P.getBoundingClientRect(), X = Math.floor(Q.height - 52);
    let ee = 1, A = 0;
    const x = P.rows;
    for (let N = 0; N < x.length; N++) {
      const Z = x[N].offsetHeight;
      A += Z, A >= X && (A = Z, ee++), V.push(ee);
    }
    r.value = [...V];
    const Y = Math.max(...r.value);
    n.value > Y && (n.value = Y);
  }
  function E() {
    r.value = [], n.value = 1;
  }
  return {
    // Computed
    pageCount: u,
    sortedItems: l,
    currentPage: n,
    getSortOrder: f,
    itemsCurrentPage: d,
    // Methods
    setItems: h,
    setSortBy: S,
    getRowKey: y,
    getCellKey: m,
    isSortedBy: $,
    getCellValue: s,
    paginationToZero: E,
    calculatePagination: C,
    recalculatePagination: B
  };
}, Gr = /* @__PURE__ */ re({
  __name: "TTooltip",
  props: {
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = ut(), { supportsPopover: r, tooltipWrapper: a } = No();
    let o = null;
    const l = M(null), u = M(null), d = () => !!n.default;
    async function f(s, h) {
      await Xe();
      const S = s.getBoundingClientRect(), $ = h.getBoundingClientRect();
      let B = S.left, C = S.top + S.height;
      C + $.height > window.innerHeight && (C -= $.height + S.height), B + $.width > window.innerWidth && (B -= $.width - S.width), h.style.top = `${C}px`, h.style.left = `${B}px`;
    }
    function y() {
      !l.value || !u.value || t.disabled || (r ? u.value.showPopover() : a.value && (o = u.value.cloneNode(!0), o.style.display = "block", a.value.appendChild(o)), f(l.value, o ?? u.value));
    }
    function m() {
      !u.value || t.disabled || (r ? u.value.hidePopover() : a.value && o && (a.value.removeChild(o), o = null));
    }
    return (s, h) => (v(), _("div", {
      ref_key: "wrapperRef",
      ref: l,
      onMouseenter: y,
      onMouseleave: m
    }, [
      L(s.$slots, "activator"),
      d() ? vt((v(), _("div", {
        key: 0,
        ref_key: "popoverRef",
        ref: u,
        popover: "",
        class: "fixed z-[2000] bg-transparent"
      }, [
        L(s.$slots, "default")
      ], 512)), [
        [rn, c(r)]
      ]) : R("", !0)
    ], 544));
  }
}), Qh = {
  key: 0,
  class: "p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
}, Zh = /* @__PURE__ */ re({
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
      40623532: e.containerSize,
      "74e351f9": e.borderRadius,
      "5cb845cd": c(l)
    }));
    const r = ut(), a = je(), o = g(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--inactive": n.inactive,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), l = g(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), u = g(() => n.disabled ? "neutro-4" : n.color), d = () => !!r.default, f = (y) => {
      n.disabled || n.inactive || t("click", y);
    };
    return (y, m) => (v(), te(Gr, { disabled: e.disabled }, {
      activator: K(() => [
        U("div", {
          class: de(c(o)),
          onClick: f
        }, [
          e.icon.startsWith("fm") ? (v(), te(Fe, {
            key: 0,
            name: e.icon,
            size: e.size,
            color: c(u)
          }, null, 8, ["name", "size", "color"])) : (v(), te(Rt, {
            key: 1,
            src: e.icon,
            size: e.size,
            color: c(u)
          }, null, 8, ["src", "size", "color"]))
        ], 2)
      ]),
      default: K(() => [
        d() && !e.disabled ? (v(), _("p", Qh, [
          L(y.$slots, "default", {}, void 0, !0)
        ])) : R("", !0)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
});
const Qt = /* @__PURE__ */ be(Zh, [["__scopeId", "data-v-6731d9c4"]]), Xh = { class: "grid grid-flow-col items-center justify-center gap-x-1 select-none" }, Kh = { class: "pr-1" }, Jh = ["data-active"], eg = {
  key: 1,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, tg = ["data-active", "onClick"], ng = {
  key: 2,
  class: "w-9 text-center text-sm font-medium text-acento-secundario leading-5"
}, rg = ["data-active"], ag = { class: "pl-1" }, _u = /* @__PURE__ */ re({
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
      set(d) {
        t("update:model-value", d);
      }
    }), a = g(() => Array.from({ length: n.pageCount - 2 }, (d, f) => f + 2).filter((d) => n.pageCount <= 7 ? !0 : r.value <= 4 ? d <= 5 : r.value > n.pageCount - 4 ? d > n.pageCount - 5 : d >= r.value - 1 && d <= r.value + 1));
    function o(d) {
      r.value = d;
    }
    function l() {
      r.value !== 1 && (r.value -= 1);
    }
    function u() {
      r.value !== n.pageCount && (r.value += 1);
    }
    return (d, f) => (v(), _("div", Xh, [
      e.pageCount > 1 ? (v(), _(ce, { key: 0 }, [
        U("div", Kh, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-left",
            color: "acento-principal",
            disabled: c(r) === 1,
            onClick: l
          }, null, 8, ["disabled"])
        ]),
        U("button", {
          "data-active": c(r) === 1,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: f[0] || (f[0] = (y) => o(1))
        }, " 1 ", 8, Jh)
      ], 64)) : R("", !0),
      c(r) > 4 && e.pageCount > 7 ? (v(), _("span", eg, " ... ")) : R("", !0),
      (v(!0), _(ce, null, Te(c(a), (y) => (v(), _("button", {
        key: `page-${y}`,
        class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
        "data-active": c(r) === y,
        onClick: (m) => o(y)
      }, ye(y), 9, tg))), 128)),
      c(r) < e.pageCount - 3 && e.pageCount > 7 ? (v(), _("span", ng, " ... ")) : R("", !0),
      e.pageCount > 1 ? (v(), _(ce, { key: 3 }, [
        U("button", {
          "data-active": c(r) === e.pageCount,
          class: "w-9 h-9 rounded-full text-base text-acento-secundario data-[active=true]:bg-acento-secundario data-[active=true]:text-neutro-1 data-[active=false]:hover:text-acento-secundario-hover data-[active=false]:active:text-acento-secundario-pressed",
          onClick: f[1] || (f[1] = (y) => o(e.pageCount))
        }, ye(e.pageCount), 9, rg),
        U("div", ag, [
          pe(Qt, {
            size: "1rem",
            icon: "fm-arrow-right",
            color: "acento-principal",
            disabled: c(r) === e.pageCount,
            onClick: u
          }, null, 8, ["disabled"])
        ])
      ], 64)) : R("", !0)
    ]));
  }
}), og = { class: "data-table__container" }, lg = ["data-dark"], ig = ["onClick"], ug = { class: "data-table__header-text" }, sg = {
  key: 0,
  class: "data-table__row--empty"
}, cg = ["onClick"], fg = /* @__PURE__ */ re({
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
    xe((G) => ({
      "002e0125": e.height,
      "13d22eed": e.maxHeight,
      ff64b6d2: e.backgroundColor,
      "17cdba9f": e.gridTemplateColumns
    }));
    const r = g(() => n.items), a = g(() => n.itemsPerPage), o = ut(), {
      pageCount: l,
      currentPage: u,
      getSortOrder: d,
      itemsCurrentPage: f,
      setSortBy: y,
      getRowKey: m,
      isSortedBy: s,
      getCellKey: h,
      getCellValue: S,
      calculatePagination: $,
      recalculatePagination: B
    } = Gh(r, a);
    ze(() => {
      !C.value || V.value || $(C.value);
    });
    const C = M(null), E = g(() => ({
      "data-table__head": !0,
      "data-table__head--sticky": n.stickyHead,
      "data-table__head--sticky-last": n.stickyLastColumn,
      "data-table__head--sticky-first": n.stickyFirstColumn
    })), P = g(() => ({
      "data-table__table": !0,
      "data-table__table--sticky": n.stickyHead || n.stickyFirstColumn || n.stickyLastColumn
    })), V = g(() => n.stickyHead || n.stickyLastColumn || n.stickyFirstColumn || n.itemsPerPage !== null);
    function Q(G) {
      return !!o[G];
    }
    function X(G) {
      return s(G) ? d.value === "asc" ? "fm-arrow-down" : "fm-arrow-up" : "fm-arrow-down";
    }
    function ee(G) {
      return {
        "data-table__sort-icon": !0,
        "data-table__sort-icon--active": s(G)
      };
    }
    function A(G) {
      return {
        "data-table__th": !0,
        "data-table__th--sortable": G.sortable !== !1
      };
    }
    function x(G) {
      return {
        "data-table__row": !0,
        "data-table__row--sticky-last": n.stickyLastColumn,
        "data-table__row--sticky-first": n.stickyFirstColumn,
        "data-table__row--selected": G[n.compareSelectedWith] === n.selected,
        "data-table__row--disabled": n.disabledKey && n.disabledValue && G[n.disabledKey] === n.disabledValue
      };
    }
    function Y(G) {
      return s(G) ? n.dark ? "neutro-1" : "acento-secundario" : "neutro-3";
    }
    function N(G) {
      C.value && y(G, C.value);
    }
    function Z(G) {
      t("click:row", G);
    }
    return He(
      () => n.items,
      async () => {
        if (!C.value || V.value) {
          u.value > l.value && (u.value = Math.max(1, l.value));
          return;
        }
        await B(C.value);
      }
    ), (G, ne) => (v(), _("div", og, [
      U("table", {
        "data-dark": e.dark,
        class: de(c(P)),
        "aria-describedby": "Reutility"
      }, [
        U("thead", {
          class: de(c(E))
        }, [
          U("tr", null, [
            (v(!0), _(ce, null, Te(e.headers, (I) => (v(), _("th", {
              key: I.value,
              class: de(A(I)),
              onClick: (O) => N(I)
            }, [
              U("div", ug, [
                Q(`header.${I.value}`) ? L(G.$slots, `header.${I.value}`, {
                  key: 0,
                  headerText: I.text
                }, void 0, !0) : (v(), _(ce, { key: 1 }, [
                  Ie(ye(I.text), 1)
                ], 64))
              ]),
              I.sortable !== !1 ? (v(), _("div", {
                key: 0,
                class: de(ee(I.value))
              }, [
                pe(Fe, {
                  name: X(I.value),
                  color: Y(I.value)
                }, null, 8, ["name", "color"])
              ], 2)) : R("", !0)
            ], 10, ig))), 128))
          ])
        ], 2),
        U("tbody", {
          ref_key: "tableBodyRef",
          ref: C,
          class: "data-table__body"
        }, [
          e.items.length === 0 ? (v(), _("tr", sg, [
            Q("no-data") ? R("", !0) : (v(), _(ce, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fm") ? (v(), te(Fe, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? R("", !0) : (v(), te(Rt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              Ie(" " + ye(e.noDataText), 1)
            ], 64)),
            L(G.$slots, "no-data", {}, void 0, !0)
          ])) : R("", !0),
          (v(!0), _(ce, null, Te(c(f), (I) => (v(), _("tr", {
            key: c(m)(I),
            class: de(x(I)),
            onClick: (O) => Z(I)
          }, [
            (v(!0), _(ce, null, Te(e.headers, (O) => (v(), _("td", {
              key: c(h)(I, O)
            }, [
              Q(O.value) ? L(G.$slots, O.value, {
                key: 0,
                item: I
              }, void 0, !0) : (v(), _(ce, { key: 1 }, [
                Ie(ye(c(S)(I, O.value)), 1)
              ], 64))
            ]))), 128))
          ], 10, cg))), 128))
        ], 512)
      ], 10, lg),
      pe(_u, {
        modelValue: c(u),
        "onUpdate:modelValue": ne[0] || (ne[0] = (I) => Be(u) ? u.value = I : null),
        "page-count": c(l)
      }, null, 8, ["modelValue", "page-count"])
    ]));
  }
});
const dg = /* @__PURE__ */ be(fg, [["__scopeId", "data-v-665ce0d3"]]), mg = /* @__PURE__ */ re({
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
    return (a, o) => (v(), te(_t, {
      "font-size": "1rem",
      color: c(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": c(r),
      "text-transform": e.textTransform
    }, {
      default: K(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), pg = { class: "filter-date-picker__container" }, yg = { class: "filter-date-picker__label" }, vg = /* @__PURE__ */ re({
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
    return (a, o) => (v(), _("div", pg, [
      U("div", yg, ye(e.label), 1),
      pe(Zo, {
        modelValue: c(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Be(r) ? r.value = l : null),
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
const hg = /* @__PURE__ */ be(vg, [["__scopeId", "data-v-4d3bdb3f"]]), gg = { class: "filter-select__container" }, bg = { class: "filter-select__label" }, _g = /* @__PURE__ */ re({
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
    const n = e, r = ut(), a = g({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, l) => (v(), _("div", gg, [
      U("div", bg, ye(e.label), 1),
      pe(Xo, {
        modelValue: c(a),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Be(a) ? a.value = u : null),
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
      }, Ze({ _: 2 }, [
        c(r)["preppend-item"] ? {
          name: "preppend-item",
          fn: K(({ close: u, filteredItems: d }) => [
            L(o.$slots, "preppend-item", {
              close: u,
              filteredItems: d
            }, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        c(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: d }) => [
            L(o.$slots, "append-item", {
              close: u,
              filteredItems: d
            }, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "items", "multiple", "item-title", "item-value", "searchable", "placeholder", "text-multiple", "return-object", "text-transform", "search-function", "search-placeholder", "hide-no-data-message"])
    ]));
  }
});
const wg = /* @__PURE__ */ be(_g, [["__scopeId", "data-v-7fec6caf"]]), kg = { class: "flex__container" }, xg = /* @__PURE__ */ re({
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
    })), (t, n) => (v(), _("div", kg, [
      L(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const wu = /* @__PURE__ */ be(xg, [["__scopeId", "data-v-4706ceca"]]), Sg = { class: "grid gap-y-1 gap-x-3 items-center form-date-picker__container" }, $g = ["data-dark", "data-readonly", "data-disabled"], Og = /* @__PURE__ */ re({
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
    return (a, o) => (v(), _("div", Sg, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, $g),
      pe(Zo, {
        modelValue: c(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Be(r) ? r.value = l : null),
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
const Tg = /* @__PURE__ */ be(Og, [["__scopeId", "data-v-7f0d00f1"]]), Pg = { class: "grid gap-y-1 gap-x-3 items-center form-select__container" }, Cg = ["data-dark", "data-readonly", "data-disabled"], Dg = /* @__PURE__ */ re({
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
      "7eb1cbd1": e.gridTemplateColumns
    }));
    const r = ut(), a = g({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    });
    return (o, l) => (v(), _("div", Pg, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, Cg),
      pe(Xo, {
        modelValue: c(a),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Be(a) ? a.value = u : null),
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
      }, Ze({ _: 2 }, [
        c(r)["preppend-item"] ? {
          name: "preppend-item",
          fn: K(({ close: u, filteredItems: d }) => [
            L(o.$slots, "preppend-item", {
              close: u,
              filteredItems: d
            }, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        c(r)["append-item"] ? {
          name: "append-item",
          fn: K(({ close: u, filteredItems: d }) => [
            L(o.$slots, "append-item", {
              close: u,
              filteredItems: d
            }, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "dark", "items", "readonly", "outlined", "disabled", "multiple", "clearable", "item-value", "item-title", "searchable", "placeholder", "error-message", "return-object", "text-multiple", "text-transform", "search-function", "search-placeholder", "hide-no-data-message"])
    ]));
  }
});
const Rg = /* @__PURE__ */ be(Dg, [["__scopeId", "data-v-43ba7ab0"]]), Mg = { class: "grid gap-y-1 gap-x-3 items-center form-text-field__container" }, Ig = ["data-dark", "data-readonly", "data-disabled"], Ng = /* @__PURE__ */ re({
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
    xe((m) => ({
      "335f6d81": e.gridTemplateColumns
    }));
    const r = ut(), a = g({
      get() {
        return n.modelValue;
      },
      set(m) {
        t("update:model-value", m);
      }
    }), o = () => !!r.append, l = (m) => {
      t("focus", m);
    }, u = (m) => {
      t("blur", m);
    }, d = (m) => {
      t("input", m);
    }, f = (m) => {
      t("keyup", m);
    }, y = (m) => {
      t("keydown", m);
    };
    return (m, s) => (v(), _("div", Mg, [
      U("div", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, Ig),
      pe(qr, {
        modelValue: c(a),
        "onUpdate:modelValue": s[0] || (s[0] = (h) => Be(a) ? a.value = h : null),
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
        onInput: d,
        onKeyup: f,
        onFocus: l,
        onKeydown: y
      }, Ze({ _: 2 }, [
        o() ? {
          name: "append",
          fn: K(() => [
            L(m.$slots, "append", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "dark", "mask", "readonly", "disabled", "outlined", "clearable", "mask-tokens", "placeholder", "error-message"])
    ]));
  }
});
const Bg = /* @__PURE__ */ be(Ng, [["__scopeId", "data-v-7c5824a6"]]), Ag = { class: "header-tabs__container" }, Eg = ["onClick"], Vg = /* @__PURE__ */ re({
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
      "67ff2df0": e.columnGap,
      "7d38144b": c(o),
      "40209b1f": c(l)
    }));
    const r = je(), a = g({
      get() {
        return n.modelValue;
      },
      set(f) {
        t("update:model-value", f);
      }
    }), o = g(() => r.getRealColor(n.color)), l = g(() => r.isCustom(n.color) ? `rgba(var(--${n.color}), 0.1)` : n.color), u = (f) => ({
      "header-tabs__button": !0,
      "header-tabs__button--selected": a.value === f
    }), d = (f) => {
      a.value = f;
    };
    return (f, y) => (v(), _("div", Ag, [
      (v(!0), _(ce, null, Te(e.items, (m, s) => (v(), _("button", {
        key: `tab-${s}`,
        class: de(u(s)),
        onClick: (h) => d(s)
      }, ye(m), 11, Eg))), 128))
    ]));
  }
});
const Yg = /* @__PURE__ */ be(Vg, [["__scopeId", "data-v-831ff6df"]]), Fg = ["alt", "src"], Ug = /* @__PURE__ */ re({
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
      src: c(r),
      class: de(c(a)),
      onClick: o
    }, null, 10, Fg));
  }
});
const Wg = /* @__PURE__ */ be(Ug, [["__scopeId", "data-v-2d0c5d22"]]), Lg = { class: "grid gap-x-3 items-center information-text__wrapper" }, Hg = { class: "text-base leading-4 information-text__text" }, zg = { class: "text-base leading-4 pl-3 font-semibold overflow-hidden text-ellipsis information-text__text" }, jg = /* @__PURE__ */ re({
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
      "55e9ced4": c(r)
    }));
    const { getRealColor: n } = je(), r = g(() => n(t.color));
    return (a, o) => (v(), _("div", Lg, [
      U("p", Hg, ye(e.label), 1),
      U("p", zg, [
        L(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const qg = /* @__PURE__ */ be(jg, [["__scopeId", "data-v-9aa564ba"]]), Gg = {
  key: 0,
  class: "page-switch__label"
}, Qg = { class: "page-switch__switch" }, Zg = {
  key: 0,
  class: "p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
}, Xg = /* @__PURE__ */ re({
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
      "56643f1c": e.justifyContent,
      "61ad35f8": c(y),
      "14e7e2fa": e.labelWeight,
      "0a299afd": e.width,
      "22b0321c": c(u)
    }));
    const r = je(), a = g({
      get() {
        return n.modelValue;
      },
      set(s) {
        n.readonly || t("update:model-value", s);
      }
    }), o = g(() => r.getRealColor(n.activeColor)), l = g(() => r.getRealColor(n.color)), u = g(() => n.disabled ? "rgb(var(--neutro-4))" : n.activeColor && a.value ? o.value : l.value), d = g(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": a.value
    })), f = g(() => ({
      "page-switch__container": !0,
      "page-switch__container--disabled": n.disabled
    })), y = g(() => n.disabled ? "rgb(var(--neutro-4))" : "rgb(var(--secundario))"), m = () => {
      n.readonly || n.disabled || (a.value = !a.value);
    };
    return (s, h) => (v(), te(Gr, { disabled: e.disabled }, {
      activator: K(() => [
        U("div", {
          class: de(c(f)),
          onClick: m
        }, [
          e.label ? (v(), _("div", Gg, ye(e.label), 1)) : R("", !0),
          U("div", Qg, [
            vt(U("input", {
              "onUpdate:modelValue": h[0] || (h[0] = (S) => Be(a) ? a.value = S : null),
              type: "checkbox",
              class: "page-switch__checkbox"
            }, null, 512), [
              [Ni, c(a)]
            ]),
            U("div", {
              class: de(c(d))
            }, null, 2)
          ])
        ], 2)
      ]),
      default: K(() => [
        e.tooltip && !e.disabled ? (v(), _("p", Zg, ye(e.tooltip), 1)) : R("", !0)
      ]),
      _: 1
    }, 8, ["disabled"]));
  }
});
const Kg = /* @__PURE__ */ be(Xg, [["__scopeId", "data-v-0a88b30a"]]), Jg = /* @__PURE__ */ re({
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
    const r = je(), a = g(() => ({
      "panel-title__container": !0,
      "panel-title__container--close": n.closable
    })), o = g(() => r.getRealColor(n.backgroundColor)), l = () => {
      t("click:close");
    };
    return (u, d) => (v(), _("div", {
      class: de(c(a))
    }, [
      pe(_t, {
        color: e.textColor,
        "text-align": "center",
        class: "panel-title__text",
        "predefined-style": e.predefinedStyle
      }, {
        default: K(() => [
          L(u.$slots, "default", {}, void 0, !0)
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
      ])) : R("", !0)
    ], 2));
  }
});
const e0 = /* @__PURE__ */ be(Jg, [["__scopeId", "data-v-e0769a10"]]), t0 = /* @__PURE__ */ re({
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
      modelValue: c(r),
      "onUpdate:modelValue": o[0] || (o[0] = (l) => Be(r) ? r.value = l : null),
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
}), n0 = /* @__PURE__ */ re({
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
    return He(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), He(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (v(), te(Bo, {
      persistent: "",
      "model-value": c(r)
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
            pe(wu, { "justify-content": "center" }, {
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
            pe(_t, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: K(() => [
                Ie(ye(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (v(), te(_t, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: K(() => [
                Ie(ye(e.subtitle), 1)
              ]),
              _: 1
            })) : R("", !0)
          ]),
          _: 1
        }, 8, ["width"])
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const r0 = /* @__PURE__ */ be(n0, [["__scopeId", "data-v-5bd362ef"]]);
class St {
  // 0-1
  constructor(t, n, r) {
    // HSV
    dn(this, "hue");
    // 0-360
    dn(this, "saturation");
    // 0-1
    dn(this, "value");
    this.hue = t, this.value = r, this.saturation = n;
  }
  get rgb() {
    return St.hsvToRgb(this.hue, this.saturation, this.value);
  }
  get hex() {
    return `#${this.rgb.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
  }
  setFromRgb(t, n, r) {
    const [a, o, l] = St.rgbToHsv(t, n, r);
    this.hue = a, this.value = l, this.saturation = o;
  }
  setFromHex(t) {
    const [n, r, a] = St.hexToRgb(t);
    this.setFromRgb(n, r, a);
  }
  static rgbToHsv(t, n, r) {
    const a = t / 255, o = n / 255, l = r / 255, u = Math.max(a, o, l), d = Math.min(a, o, l);
    let f = 0, y = 0;
    const m = u, s = u - d;
    return u === d ? f = 0 : u === a && o >= l ? f = 60 * ((o - l) / s) : u === a && o < l ? f = 60 * ((o - l) / s) + 360 : u === o ? f = 60 * ((l - a) / s) + 120 : u === l && (f = 60 * ((a - o) / s) + 240), u > 0 && (y = 1 - d / u), [Math.round(f), Math.round(y * 100) / 100, Math.round(m * 100) / 100];
  }
  static hsvToRgb(t, n, r) {
    const a = Math.floor(t / 60) % 6, o = t / 60 % 6 - a, l = r * (1 - n), u = r * (1 - o * n), d = r * (1 - (1 - o) * n);
    let f = 0, y = 0, m = 0;
    switch (a) {
      case 0:
        f = r, y = d, m = l;
        break;
      case 1:
        f = u, y = r, m = l;
        break;
      case 2:
        f = l, y = r, m = d;
        break;
      case 3:
        f = l, y = u, m = r;
        break;
      case 4:
        f = d, y = l, m = r;
        break;
      case 5:
        f = r, y = l, m = u;
        break;
    }
    return [Math.round(f * 255), Math.round(y * 255), Math.round(m * 255)];
  }
  static hexToRgb(t) {
    if (!/^#([\da-fA-F]{3}|[\da-fA-F]{6})$/g.test(t))
      return [0, 0, 0];
    t = t.slice(1);
    let r, a, o;
    if (t.length === 3) {
      const [l, u, d] = t.split("");
      r = parseInt(l.repeat(2), 16), a = parseInt(u.repeat(2), 16), o = parseInt(d.repeat(2), 16);
    } else {
      const [l, u, d] = t.match(/.{2}/g) ?? ["0", "0", "0"];
      r = parseInt(l, 16), a = parseInt(u, 16), o = parseInt(d, 16);
    }
    return [r, a, o];
  }
  static fromRgb(t, n, r) {
    const [a, o, l] = St.rgbToHsv(t, n, r);
    return new St(a, o, l);
  }
  static fromHex(t) {
    const [n, r, a] = St.hexToRgb(t);
    return St.fromRgb(n, r, a);
  }
}
const Ko = (e) => (Mo("data-v-851bc20e"), e = e(), Io(), e), a0 = ["onMousedown"], o0 = /* @__PURE__ */ Ko(() => /* @__PURE__ */ U("div", { class: "color-picker__canvas-thumb" }, null, -1)), l0 = [
  o0
], i0 = ["onMousedown"], u0 = /* @__PURE__ */ Ko(() => /* @__PURE__ */ U("div", { class: "color-picker__hue-thumb" }, null, -1)), s0 = [
  u0
], c0 = { class: "color-picker__hex-input-container" }, f0 = /* @__PURE__ */ Ko(() => /* @__PURE__ */ U("span", { class: "color-picker__hex-hash" }, " # ", -1)), d0 = { class: "color-picker__colors" }, m0 = ["onClick"], p0 = /* @__PURE__ */ re({
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
    xe((I) => ({
      "44519b14": c($),
      "21503e0b": c(C),
      d11f3254: c(B),
      "40a1b156": d.value,
      "67f5cab4": l.value
    }));
    const { getRealColor: r } = je(), a = M(!1), o = M(!1), l = M("translateX(0)"), u = M(null), d = M("translate(0, 0"), f = M(null), y = Ct(St.fromHex(n.modelValue)), m = Ct({
      left: 0,
      width: 0
    }), s = Ct({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    ze(() => {
      P();
    });
    const h = g({
      get() {
        return n.modelValue;
      },
      set(I) {
        t("update:model-value", I);
      }
    }), S = g(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), $ = g(() => r(n.background)), B = g(() => `rgb(${y.rgb.join(",")})`), C = g(() => `hsl(${y.hue}, 100%, 50%)`), E = g({
      get() {
        return y.hex.slice(1);
      },
      set(I) {
        y.setFromHex(I), P();
      }
    });
    function P() {
      if (!f.value || !u.value)
        return;
      const I = u.value.getBoundingClientRect(), O = y.hue / 360 * I.width;
      l.value = `translateX(${O}px)`;
      const i = f.value.getBoundingClientRect(), p = y.saturation * i.width, k = (1 - y.value) * i.height;
      d.value = `translate(${p}px, ${k}px)`, h.value = y.hex;
    }
    function V(I) {
      const O = Math.min(m.width, Math.max(0, I.clientX - m.left));
      y.hue = O / m.width * 360, l.value = `translateX(${O}px)`, h.value = y.hex;
    }
    function Q(I) {
      if (!f.value)
        return;
      const O = f.value.getBoundingClientRect(), i = Math.min(O.width, Math.max(0, I.clientX - O.left)), p = Math.min(O.height, Math.max(0, I.clientY - O.top));
      y.saturation = i / O.width, y.value = 1 - p / O.height, d.value = `translate(${i}px, ${p}px)`, h.value = y.hex;
    }
    function X(I) {
      if (!f.value)
        return;
      const O = f.value.getBoundingClientRect();
      s.top = O.top, s.left = O.left, s.width = O.width, s.height = O.height, o.value = !0, Q(I), Y();
    }
    function ee(I) {
      if (!u.value)
        return;
      const O = u.value.getBoundingClientRect();
      m.left = O.left, m.width = O.width, a.value = !0, V(I), Y();
    }
    function A(I) {
      a.value ? V(I) : o.value && Q(I);
    }
    function x() {
      a.value = !1, N();
    }
    function Y() {
      document.addEventListener("mouseup", x), document.addEventListener("mousemove", A);
    }
    function N() {
      document.removeEventListener("mouseup", x), document.removeEventListener("mousemove", A);
    }
    function Z(I) {
      const O = ["v", "c"];
      I.ctrlKey && O.includes(I.key) || I.preventDefault();
    }
    function G(I) {
      return {
        "color-picker__color": !0,
        "color-picker__color--selected": h.value === I
      };
    }
    function ne(I) {
      E.value = I, h.value = I;
    }
    return (I, O) => (v(), _("div", {
      class: de(c(S))
    }, [
      U("div", {
        ref_key: "canvasRef",
        ref: f,
        class: "color-picker__canvas",
        onMousedown: Ce(X, ["stop", "prevent"])
      }, l0, 40, a0),
      U("div", {
        ref_key: "hueRef",
        ref: u,
        class: "color-picker__hue",
        onMousedown: Ce(ee, ["stop", "prevent"])
      }, s0, 40, i0),
      U("div", c0, [
        f0,
        vt(U("input", {
          "onUpdate:modelValue": O[0] || (O[0] = (i) => Be(E) ? E.value = i : null),
          type: "text",
          maxlength: "7",
          class: "color-picker__hex-input",
          onKeydown: Z
        }, null, 544), [
          [Ai, c(E)]
        ])
      ]),
      U("div", d0, [
        (v(!0), _(ce, null, Te(e.pickableColors, (i, p) => (v(), _("div", {
          key: `pickable-color-${p}`,
          style: $t(`--color: ${i}`),
          class: de(G(i)),
          onClick: (k) => ne(i)
        }, null, 14, m0))), 128))
      ])
    ], 2));
  }
});
const ku = /* @__PURE__ */ be(p0, [["__scopeId", "data-v-851bc20e"]]), y0 = { class: "form-color-picker__label" }, v0 = /* @__PURE__ */ re({
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
    xe((C) => ({
      "7f6d82c2": e.gridTemplateColumns,
      "92f99466": c(m),
      "66ca7121": c(s),
      "1a24176b": c(y),
      "131ff3d2": r.value,
      "50e618f6": a.value
    }));
    const r = M(""), a = M(""), o = M(""), l = M(!1), u = M(!1), d = M(null), f = M(null), y = g({
      get() {
        return n.modelValue;
      },
      set(C) {
        t("update:model-value", C);
      }
    }), m = g(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), s = g(() => n.large ? "100%" : "2.75rem");
    async function h() {
      await Xe();
      const C = d.value, E = f.value;
      if (!C || !E)
        return;
      const P = C.getBoundingClientRect(), V = E.getBoundingClientRect();
      a.value = `${P.left}px`, o.value = `${P.width}px`;
      const Q = P.top + P.height + V.height, X = window.innerHeight, ee = P.top + P.height;
      if (Q > X) {
        const A = Q - X;
        r.value = `${ee - A - 16}px`;
      } else
        r.value = `${ee}px`;
    }
    function S() {
      n.disabled || n.readonly || l.value || (l.value = !0, h(), u.value = !0, document.addEventListener("click", $));
    }
    function $(C) {
      !d.value || !C.target || d.value.contains(C.target) || B();
    }
    function B() {
      l.value = !1, u.value = !1, document.removeEventListener("click", $);
    }
    return (C, E) => (v(), _("div", {
      ref_key: "container",
      ref: d,
      class: "form-color-picker__container"
    }, [
      U("div", y0, ye(e.label), 1),
      U("div", {
        class: "form-color-picker__input",
        onClick: S
      }),
      pe(pt, null, {
        default: K(() => [
          l.value ? (v(), _("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: f,
            class: "form-color-picker__menu"
          }, [
            pe(ku, {
              modelValue: c(y),
              "onUpdate:modelValue": E[0] || (E[0] = (P) => Be(y) ? y.value = P : null),
              dark: e.dark,
              background: e.background,
              "pickable-colors": e.pickableColors
            }, null, 8, ["modelValue", "dark", "background", "pickable-colors"])
          ], 512)) : R("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
const h0 = /* @__PURE__ */ be(v0, [["__scopeId", "data-v-2d3b2229"]]), g0 = ["onMousedown"], b0 = /* @__PURE__ */ re({
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
    xe(($) => ({
      "5e7c93f6": r.value,
      47714157: a.value
    })), ze(() => {
      n.default === !0 && m();
    });
    const r = M(""), a = M(""), o = M(""), l = M(!1), u = M(!1), d = M(null), f = M(null), y = async () => {
      r.value = "", a.value = "", await Xe();
      const $ = d.value, B = f.value;
      if (!$ || !B)
        return;
      const C = $.getBoundingClientRect(), E = B.getBoundingClientRect(), P = n.nudgeLeft - n.nudgeRight, V = n.nudgeTop - n.nudgeBottom, Q = C.left + P;
      a.value = `${Q}px`, o.value = `${C.width}px`;
      const X = C.top + C.height + E.height, ee = window.innerHeight, A = C.top + C.height + V;
      if (X > ee) {
        const N = X - ee;
        r.value = `${A - N - 16}px`;
      } else
        r.value = `${A}px`;
      const x = E.right, Y = window.innerWidth;
      if (x > Y) {
        const N = x - Y;
        a.value = `${Q - N}px`;
      }
    }, m = () => {
      n.disabled && !n.default || (l.value = !0, y(), !n.disabled && (u.value = !0, document.addEventListener("click", h)));
    }, s = () => {
      n.disabled || (l.value = !1, u.value = !1, document.removeEventListener("click", h), t("close"));
    }, h = ($) => {
      !d.value || !$.target || d.value.contains($.target) || s();
    }, S = () => {
      n.disabled || (l.value ? s() : m());
    };
    return ($, B) => (v(), _("div", {
      ref_key: "container",
      ref: d,
      class: "custom-menu__container"
    }, [
      U("div", {
        onMousedown: Ce(S, ["stop"])
      }, [
        L($.$slots, "activator", {}, void 0, !0)
      ], 40, g0),
      pe(pt, null, {
        default: K(() => [
          l.value ? (v(), _("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: f,
            class: "custom-menu__menu"
          }, [
            L($.$slots, "default", { close: s }, void 0, !0)
          ], 512)) : R("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const _0 = /* @__PURE__ */ be(b0, [["__scopeId", "data-v-b783ae39"]]), w0 = {
  key: 0,
  class: "expansion-panel__content"
}, k0 = /* @__PURE__ */ re({
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
    xe((m) => ({
      "2e51e708": e.boxShadow,
      cfec22fe: e.borderRadius,
      "27a20424": c(f),
      "050f266c": e.transitionDuration,
      "5a79b51a": e.transitionTimingFunction
    }));
    const r = je(), a = M(!1), o = g(() => {
      const m = parseInt(n.transitionDuration);
      return isNaN(m) ? 0 : m;
    }), l = g({
      get() {
        return n.modelValue === void 0 ? a.value : n.modelValue;
      },
      set(m) {
        a.value = m, t("update:model-value", m);
      }
    }), u = g(() => ({
      "expansion-panel__container": !0,
      "expansion-panel__container--outlined": n.outlined
    })), d = g(() => ({
      "expansion-panel__wrapper": !0,
      "expansion-panel__wrapper--opened": l.value
    })), f = g(() => r.getRealColor(n.backgroundColor));
    function y() {
      l.value = !l.value;
    }
    return (m, s) => (v(), _("div", {
      class: de(c(u))
    }, [
      U("div", {
        class: "expansion-panel__activator",
        onClick: y
      }, [
        L(m.$slots, "activator", { opened: a.value }, void 0, !0)
      ]),
      U("div", {
        class: de(c(d))
      }, [
        pe(pt, { duration: c(o) }, {
          default: K(() => [
            a.value || c(l) ? (v(), _("div", w0, [
              L(m.$slots, "default", {}, void 0, !0)
            ])) : R("", !0)
          ]),
          _: 3
        }, 8, ["duration"])
      ], 2)
    ], 2));
  }
});
const x0 = /* @__PURE__ */ be(k0, [["__scopeId", "data-v-25b57f9a"]]), S0 = { class: "grid__container" }, $0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", S0, [
      L(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const O0 = /* @__PURE__ */ be($0, [["__scopeId", "data-v-546aaa6e"]]), T0 = { class: "absolute__container" }, P0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", T0, [
      L(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const C0 = /* @__PURE__ */ be(P0, [["__scopeId", "data-v-b5f56ae6"]]), D0 = { class: "relative__container" }, R0 = /* @__PURE__ */ re({
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
    const n = je(), r = g(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (v(), _("div", D0, [
      L(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const M0 = /* @__PURE__ */ be(R0, [["__scopeId", "data-v-c8285f36"]]), I0 = ["onMouseenter", "onMouseleave"], N0 = /* @__PURE__ */ re({
  __name: "CustomTooltip",
  props: {
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = ut(), { overlayContainer: r } = No(), a = M("initial"), o = M("initial"), l = M("initial"), u = M(null), d = g(() => ({
      "custom-tooltip__container": !0,
      "custom-tooltip__container--disabled": t.disabled
    })), f = () => !!n.default, y = async (s) => {
      if (!u.value || !r.value)
        return;
      r.value.innerHTML = u.value.innerHTML, r.value.classList.add("custom-tooltip--overlay--opened"), await Xe();
      const h = r.value.getBoundingClientRect(), S = s.target.getBoundingClientRect(), $ = S.x + h.width;
      S.x < 0 ? (o.value = "0", l.value = "initial") : $ >= window.innerWidth ? (o.value = "initial", l.value = "0") : S.x !== h.left ? o.value = `${S.x}px` : (o.value = "initial", l.value = "initial"), a.value = `${S.top + S.height + 8}px`, r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = l.value;
    }, m = () => {
      a.value = "", o.value = "", l.value = "", r.value && (r.value.classList.remove("custom-tooltip--overlay--opened"), r.value.style.top = a.value, r.value.style.left = o.value, r.value.style.right = l.value);
    };
    return (s, h) => (v(), _("div", {
      class: de(c(d))
    }, [
      U("div", {
        onMouseenter: Ce(y, ["stop"]),
        onMouseleave: Ce(m, ["stop"])
      }, [
        L(s.$slots, "activator", {}, void 0, !0)
      ], 40, I0),
      f() ? (v(), _("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "custom-tooltip__tooltip"
      }, [
        L(s.$slots, "default", {}, void 0, !0)
      ], 512)) : R("", !0)
    ], 2));
  }
});
const B0 = /* @__PURE__ */ be(N0, [["__scopeId", "data-v-50fd21fc"]]), A0 = {
  key: 0,
  class: "p-2 rounded-2xl text-center text-neutro-1 bg-neutro-4 bg-opacity-70"
}, E0 = /* @__PURE__ */ re({
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
    const t = ut();
    function n(r = "default") {
      return !!t[r];
    }
    return (r, a) => (v(), te(Hr, null, {
      default: K(() => [
        pe(Gr, null, {
          activator: K(() => [
            pe(_t, {
              padding: "0.125rem 0",
              "text-transform": e.textTransform,
              "predefined-style": e.opened && e.showActiveStyle ? "body-2" : "body-1",
              color: e.opened && e.showActiveStyle ? "acento-principal" : "secundario"
            }, {
              default: K(() => [
                Ie(ye(e.title), 1)
              ]),
              _: 1
            }, 8, ["text-transform", "predefined-style", "color"])
          ]),
          default: K(() => [
            n() ? (v(), _("p", A0, [
              L(r.$slots, "default")
            ])) : R("", !0)
          ]),
          _: 3
        }),
        e.opened ? (v(!0), _(ce, { key: 0 }, Te(e.items, (o, l) => (v(), _(ce, {
          key: `item-${l.toString()}`
        }, [
          n("value") ? L(r.$slots, "value", {
            key: 0,
            value: o
          }) : (v(), te(_t, {
            key: 1,
            color: e.itemColor,
            padding: "0.125rem 0",
            "predefined-style": "caption"
          }, {
            default: K(() => [
              Ie(ye(o), 1)
            ]),
            _: 2
          }, 1032, ["color"]))
        ], 64))), 128)) : R("", !0)
      ]),
      _: 3
    }));
  }
}), V0 = /* @__PURE__ */ re({
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
      "7a873368": c(l),
      f38c0922: e.objectFit,
      "6de9f8be": e.borderRadius,
      "58a1d6ea": e.objectPosition
    }));
    const r = M(null), a = ["jpg", "png", "webp", "svg", "gif", "jpeg"], o = g({
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
    function d() {
      r.value && r.value.click();
    }
    function f() {
      var s;
      if (!r.value)
        return;
      const y = (s = r.value.files) == null ? void 0 : s[0];
      if (!y)
        return;
      const m = y.name.split(".").pop();
      !m || !a.includes(m) ? t("error:extension") : o.value = y, r.value.value = "";
    }
    return (y, m) => (v(), _("div", {
      class: de(c(u))
    }, [
      U("input", {
        ref_key: "inputRef",
        ref: r,
        hidden: "",
        type: "file",
        accept: ".jpg,.png,.webp,.svg,.gif,.jpeg",
        onChange: f
      }, null, 544),
      U("div", {
        class: "input-image__icon",
        onClick: d
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
const Y0 = /* @__PURE__ */ be(V0, [["__scopeId", "data-v-d0c430c6"]]), F0 = /* @__PURE__ */ re({
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
    xe((f) => ({
      "0cf12c20": e.maxWidth,
      "594394ee": c(l)
    }));
    const r = g(() => Array.isArray(n.modelValue) ? n.modelValue.includes(n.value) : n.modelValue === n.value), a = g(() => ({
      "custom-chip__wrapper": !0,
      "custom-chip__wrapper--selected": r.value
    })), o = g(() => r.value ? "acento-secundario-pressed" : "acento-secundario"), l = g(() => `rgb(var(--${o.value}))`);
    function u() {
      if (!r.value)
        if (Array.isArray(n.modelValue)) {
          const f = [...n.modelValue];
          f.push(n.value), t("update:model-value", f);
        } else
          t("update:model-value", n.value);
    }
    function d() {
      if (r.value)
        if (Array.isArray(n.modelValue)) {
          const f = [...n.modelValue], y = f.indexOf(n.value);
          f.splice(y, 1), t("update:model-value", f);
        } else
          t("update:model-value", null);
    }
    return (f, y) => (v(), _("div", {
      class: de(c(a)),
      onClick: u
    }, [
      pe(_t, {
        color: c(o),
        "predefined-style": "caption"
      }, {
        default: K(() => [
          Ie(ye(e.text), 1)
        ]),
        _: 1
      }, 8, ["color"]),
      c(r) ? (v(), te(Qt, {
        key: 0,
        size: "1rem",
        color: "neutro-4",
        icon: "fm-circle-close",
        onClick: Ce(d, ["stop"])
      }, null, 8, ["onClick"])) : R("", !0)
    ], 2));
  }
});
const U0 = /* @__PURE__ */ be(F0, [["__scopeId", "data-v-81015ccc"]]), xu = (e) => (Mo("data-v-f500483c"), e = e(), Io(), e), W0 = /* @__PURE__ */ xu(() => /* @__PURE__ */ U("div", {
  role: "progressbar",
  class: "absolute h-2 w-2 rounded input-range__progress"
}, null, -1)), L0 = /* @__PURE__ */ xu(() => /* @__PURE__ */ U("div", {
  role: "button",
  class: "h-5 w-5 rounded-full absolute pointer-events-none -top-1.5 -left-2.5 input-range__thump"
}, null, -1)), H0 = [
  W0,
  L0
], z0 = /* @__PURE__ */ re({
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
    xe((S) => ({
      a2c08aa2: c(u),
      "032d9904": c(l),
      "11dba316": a.value,
      "205f17ff": c(d)
    }));
    const { getRealColor: r } = je(), a = M(""), o = M(null);
    ze(s);
    const l = g(() => r(n.thumbColor)), u = g(() => r(n.trackColor)), d = g(() => r(n.progressColor)), f = g({
      get() {
        return n.modelValue;
      },
      set(S) {
        t("update:model-value", S);
      }
    });
    function y(S) {
      m(S), document.body.style.userSelect = "none", document.addEventListener("mouseup", h), document.addEventListener("mousemove", m);
    }
    function m({ clientX: S }) {
      if (!o.value)
        return;
      const { left: $, width: B } = o.value.getBoundingClientRect(), C = Math.min(B, Math.max(0, S - $));
      f.value = C * 100 / B, s();
    }
    function s() {
      if (!o.value)
        return;
      const { width: S } = o.value.getBoundingClientRect();
      a.value = `${f.value / 100 * S}px`;
    }
    function h() {
      document.body.style.userSelect = "inital", document.removeEventListener("mouseup", h), document.removeEventListener("mousemove", m);
    }
    return He(f, s), (S, $) => (v(), _("div", {
      ref_key: "barRef",
      ref: o,
      role: "slider",
      class: "h-2 w-full bg-amber-950 rounded relative input-range__track",
      onMousedown: y
    }, H0, 544));
  }
});
const Su = /* @__PURE__ */ be(z0, [["__scopeId", "data-v-f500483c"]]), j0 = (e) => (Mo("data-v-ec8ab006"), e = e(), Io(), e), q0 = { class: "image-editor__wrapper grid gap-y-8" }, G0 = ["width", "height"], Q0 = /* @__PURE__ */ j0(() => /* @__PURE__ */ U("div", { class: "absolute w-full top-0 left-0 h-full image-editor__area" }, null, -1)), Z0 = {
  key: 0,
  class: "absolute grid grid-cols-[auto_1fr] gap-x-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] image-cropper__tooltip rounded-2xl p-2"
}, X0 = { class: "text-white text-base leading-5" }, K0 = { class: "grid grid-cols-[auto_50%_auto] justify-center gap-x-3 items-center" }, J0 = /* @__PURE__ */ re({
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
    xe((I) => ({
      "701c0bdd": c(h),
      "0b28d123": c(B)
    }));
    const r = M(1), a = M(0), o = M(0), l = M(0), u = M(0), d = M(0), f = M(!0), y = M(null), m = M(null), s = M(null);
    ze(async () => {
      m.value && (s.value = m.value.getContext("2d"), y.value = await X(), Q());
    });
    const h = g(() => `${n.width}px`), S = g(() => n.width / 2), $ = g(() => n.height / 2), B = g(() => `${$.value}px`), C = g(() => {
      var I;
      return (((I = y.value) == null ? void 0 : I.width) ?? 0) * r.value;
    }), E = g(() => {
      var I;
      return (((I = y.value) == null ? void 0 : I.height) ?? 0) * r.value;
    }), P = g(() => C.value / 2 - $.value), V = g(() => E.value / 2 - $.value);
    function Q() {
      if (!s.value || !y.value)
        return;
      s.value.clearRect(0, 0, n.width, n.height), s.value.save(), s.value.translate(S.value + u.value, $.value + d.value), s.value.scale(r.value, r.value);
      const I = y.value.width / 2, O = y.value.height / 2;
      s.value.drawImage(
        y.value,
        -I,
        -O,
        y.value.width,
        y.value.height
      ), s.value.restore();
    }
    function X() {
      return new Promise((I) => {
        const O = new Image();
        O.onload = () => {
          const i = O.width / O.height;
          O.width = Math.max(n.height, n.height * i), O.height = Math.max(n.height, n.height / i), I(O);
        }, O.src = URL.createObjectURL(n.file);
      });
    }
    async function ee() {
      await Xe(), d.value = Math.max(-V.value, Math.min(V.value, d.value)), u.value = Math.max(-P.value, Math.min(P.value, u.value));
    }
    async function A() {
      r.value = 1 + l.value / 100 * 2, await ee(), Q();
    }
    function x({ clientX: I, clientY: O }) {
      f.value && (f.value = !1), a.value = I, o.value = O, document.body.style.userSelect = "none", document.addEventListener("mouseup", N), document.addEventListener("mousemove", Y);
    }
    function Y({ clientX: I, clientY: O }) {
      const i = d.value + O - o.value, p = u.value + I - a.value;
      d.value = Math.max(-V.value, Math.min(V.value, i)), u.value = Math.max(-P.value, Math.min(P.value, p)), Q(), a.value = I, o.value = O;
    }
    function N() {
      document.body.style.userSelect = "initial", document.removeEventListener("mouseup", N), document.removeEventListener("mousemove", Y);
    }
    async function Z(I) {
      return new Promise((O) => {
        I.toBlob((i) => O(i));
      });
    }
    async function G() {
      if (!m.value)
        return;
      const I = document.createElement("canvas"), O = I.getContext("2d");
      if (!O)
        return;
      const i = n.height;
      I.width = i, I.height = i;
      const p = n.width / 2 - $.value, k = n.height / 2 - $.value;
      return O.drawImage(m.value, p, k, i, i, 0, 0, i, i), await Z(I);
    }
    async function ne(I) {
      l.value = Math.max(0, Math.min(100, I * 10 + l.value)), await A();
    }
    return t({ crop: G }), He(
      () => n.file,
      async () => {
        y.value = await X(), await ee(), Q();
      }
    ), (I, O) => (v(), _("div", q0, [
      U("div", {
        class: "relative cursor-move image-editor__canvas",
        onMousedown: x
      }, [
        U("canvas", {
          ref_key: "canvas",
          ref: m,
          width: e.width,
          height: e.height
        }, null, 8, G0),
        Q0,
        f.value ? (v(), _("div", Z0, [
          pe(Fe, {
            size: "1.25rem",
            name: "fm-move",
            color: "neutro-1"
          }),
          U("p", X0, ye(e.tooltip), 1)
        ])) : R("", !0)
      ], 32),
      U("div", K0, [
        pe(Qt, {
          size: "1.5rem",
          color: e.buttonColor,
          icon: "fm-minus-circle",
          disabled: l.value === 0,
          onClick: O[0] || (O[0] = (i) => ne(-1))
        }, null, 8, ["color", "disabled"]),
        pe(Su, {
          modelValue: l.value,
          "onUpdate:modelValue": [
            O[1] || (O[1] = (i) => l.value = i),
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
          onClick: O[2] || (O[2] = (i) => ne(1))
        }, null, 8, ["color", "disabled"])
      ])
    ]));
  }
});
const eb = /* @__PURE__ */ be(J0, [["__scopeId", "data-v-ec8ab006"]]), tb = ["name", "rows", "data-dark", "readonly", "disabled", "data-filled", "maxlength", "data-outlined", "placeholder"], nb = {
  key: 0,
  class: "block text-right text-[#5E798F] text-sm leading-5 font-medium col-start-2"
}, rb = /* @__PURE__ */ re({
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
    return (a, o) => (v(), _(ce, null, [
      vt(U("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Be(r) ? r.value = l : null),
        name: e.name,
        rows: e.rows,
        "data-dark": e.dark,
        readonly: e.readonly,
        disabled: e.disabled,
        "data-filled": !!c(r),
        maxlength: e.maxLength,
        "data-outlined": e.outlined,
        placeholder: e.placeholder,
        class: "w-full resize-none rounded-xl p-3 outline-none"
      }, null, 8, tb), [
        [Ai, c(r)]
      ]),
      e.showCounter ? (v(), _("span", nb, [
        Ie(ye(c(r).length), 1),
        e.maxLength ? (v(), _(ce, { key: 0 }, [
          Ie("/" + ye(e.maxLength), 1)
        ], 64)) : R("", !0)
      ])) : R("", !0)
    ], 64));
  }
});
const $u = /* @__PURE__ */ be(rb, [["__scopeId", "data-v-8c53643b"]]), ab = { class: "grid gap-y-1 gap-x-3 t-form-texarea__container" }, ob = ["data-dark", "data-readonly", "data-disabled"], lb = /* @__PURE__ */ re({
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
    return (a, o) => (v(), _("label", ab, [
      U("span", {
        "data-dark": e.dark,
        "data-readonly": e.readonly,
        "data-disabled": e.disabled,
        class: "pt-3 text-base leading-5 font-semibold text-secundario data-[readonly=true]:font-normal data-[dark=true]:text-neutro-1 data-[disabled=true]:text-neutro-4"
      }, ye(e.label), 9, ob),
      pe($u, {
        modelValue: c(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Be(r) ? r.value = l : null),
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
const ib = /* @__PURE__ */ be(lb, [["__scopeId", "data-v-cbb0570e"]]), ub = ["name", "onSubmit"], sb = /* @__PURE__ */ re({
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
      e03e4746: c(a),
      "712b163a": e.gridTemplateColumns
    }));
    const { getRealColor: r } = je(), a = g(() => r(n.backgroundColor));
    function o(l) {
      t("submit", l);
    }
    return (l, u) => (v(), _("form", {
      name: e.name,
      class: "grid",
      onSubmit: Ce(o, ["prevent"])
    }, [
      L(l.$slots, "default", {}, void 0, !0)
    ], 40, ub));
  }
});
const cb = /* @__PURE__ */ be(sb, [["__scopeId", "data-v-6502906b"]]), fb = ["onClick"], db = ["onKeydown"], mb = /* @__PURE__ */ re({
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
    const n = e, r = M(!1), a = M(null), o = M(null);
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
      a.value && (a.value.classList.add(n.animation), B ? (a.value.classList.remove("animate-reverse"), a.value.classList.remove("hidden"), a.value.focus(), d(), document.addEventListener("click", s)) : (a.value.classList.add("animate-reverse"), document.removeEventListener("click", s)));
    }
    async function d() {
      if (await Xe(), !a.value || !o.value)
        return;
      const B = a.value.getBoundingClientRect(), C = o.value.getBoundingClientRect();
      let E = y(B, C), P = f(B, C);
      E = Math.max(0, Math.min(E, window.innerHeight - B.height)), P = Math.max(0, Math.min(P, window.innerWidth - B.width));
      const V = n.nudgeTop - n.nudgeBottom, Q = n.nudgeLeft - n.nudgeRight;
      a.value.style.top = `${E + V}px`, a.value.style.left = `${P + Q}px`;
    }
    function f(B, C) {
      let E = C.left;
      return n.position === "left" && (E -= B.width), n.position === "right" && (E += C.width), E;
    }
    function y(B, C) {
      let E = C.top;
      return n.position === "top" && (E -= B.height), n.position === "bottom" && (E = C.bottom), E;
    }
    function m(B) {
      B.newState !== "open" && (l.value = !1);
    }
    function s(B) {
      if (!a.value || !o.value || !l.value)
        return;
      const C = B.target;
      C.getAttribute("data-menu-activator") !== null || o.value === C || o.value.contains(C) || C !== a.value && !a.value.contains(C) && (l.value = !1);
    }
    function h() {
      a.value && (a.value.classList.remove(n.animation), !l.value && (a.value.classList.remove("animate-reverse"), a.value.classList.add("hidden")));
    }
    function S({ key: B }) {
      B === "Escape" && (l.value = !1);
    }
    function $() {
      n.disabled || (l.value = !l.value);
    }
    return He(l, () => {
      a.value && u(l.value);
    }), (B, C) => (v(), _("div", null, [
      U("button", {
        ref_key: "activatorButton",
        ref: o,
        type: "button",
        onClick: Ce($, ["stop"])
      }, [
        L(B.$slots, "activator")
      ], 8, fb),
      U("div", {
        ref_key: "menuDiv",
        ref: a,
        role: "menu",
        tabindex: "0",
        class: "animate-duration-300 bg-transparent outline-none fixed hidden z-[100]",
        onToggle: m,
        onKeydown: Ce(S, ["stop"]),
        onAnimationend: h
      }, [
        L(B.$slots, "default")
      ], 40, db)
    ]));
  }
}), pb = /* @__PURE__ */ re({
  __name: "TDialog",
  props: {
    modelValue: {
      type: Boolean
    },
    persistent: {
      type: Boolean
    }
  },
  emits: ["update:model-value", "closed"],
  setup(e, { emit: t }) {
    const n = e, r = M(!1), a = M(null), o = g({
      get() {
        return n.modelValue;
      },
      set(y) {
        t("update:model-value", y);
      }
    });
    function l() {
      n.persistent ? r.value = !0 : o.value = !1;
    }
    function u(y) {
      y.target === a.value && l();
    }
    function d(y) {
      y.key === "Escape" && (y.preventDefault(), l());
    }
    function f(y) {
      r.value = !1, !o.value && !y.pseudoElement && t("closed");
    }
    return He(o, async (y) => {
      if (await Xe(), y) {
        if (!a.value)
          return;
        a.value.showModal();
      }
    }), (y, m) => (v(), te(pt, { name: "scale-in" }, {
      default: K(() => [
        c(o) ? (v(), _("dialog", {
          key: 0,
          ref_key: "dialogEl",
          ref: a,
          class: de({
            "horizontal-shaking": r.value,
            "bg-transparent backdrop:bg-neutro-3/50 backdrop:backdrop-blur-sm m-auto outline-none": !0
          }),
          onClick: u,
          onKeydown: d,
          onAnimationend: f
        }, [
          L(y.$slots, "default", {}, void 0, !0)
        ], 34)) : R("", !0)
      ]),
      _: 3
    }));
  }
});
const yb = /* @__PURE__ */ be(pb, [["__scopeId", "data-v-d4e7afb1"]]), gb = (e) => {
  No().generateOverlayContainer(), e.component("AbsoluteContainer", C0), e.component("RelativeContainer", M0), e.component("CheckBox", Fi), e.component("ConfirmationDialog", cs), e.component("CustomButton", ya), e.component("CustomDatePicker", Zo), e.component("CustomDialog", Bo), e.component("CustomSelect", Xo), e.component("CustomTextField", qr), e.component("DataTable", dg), e.component("DataTableItem", mg), e.component("FilterDatePicker", hg), e.component("FilterSelect", wg), e.component("FlexContainer", wu), e.component("FormDatePicker", Tg), e.component("FormSelect", Rg), e.component("FormTextField", Bg), e.component("GridColumn", Hr), e.component("GridRow", Ui), e.component("HeaderTabs", Yg), e.component("IconButton", Qt), e.component("ImageContainer", Wg), e.component("InformationText", qg), e.component("PageSwitch", Kg), e.component("PanelTitle", e0), e.component("SearchTextField", t0), e.component("SuccessDialog", r0), e.component("SvgIcon", Rt), e.component("TextContainer", _t), e.component("FormColorPicker", h0), e.component("ColorPicker", ku), e.component("CustomMenu", _0), e.component("FigmaIcon", Fe), e.component("ExpansionPanel", x0), e.component("GridContainer", O0), e.component("CustomTooltip", B0), e.component("ExpandableDataTableItem", E0), e.component("ImageInput", Y0), e.component("CustomChip", U0), e.component("InputRange", Su), e.component("ImageCropper", eb), e.component("TPagination", _u), e.component("TTextarea", $u), e.component("TFormTextarea", ib), e.component("TForm", cb), e.component("TMenu", mb), e.component("TTooltip", Gr), e.component("TDialog", yb);
};
export {
  gb as componentesReutility
};
