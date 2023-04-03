import { defineComponent as ge, useCssVars as We, unref as c, onMounted as ft, ref as M, computed as k, watch as bt, openBlock as m, createElementBlock as P, createElementVNode as V, normalizeClass as pe, createVNode as xe, Transition as wt, withCtx as ne, createBlock as re, createCommentVNode as R, renderSlot as Q, Fragment as be, useSlots as Vt, withKeys as we, isRef as Ge, createTextVNode as ze, toDisplayString as ke, reactive as At, toRef as nr, onUnmounted as xo, mergeProps as Xe, createSlots as yt, renderList as Ne, normalizeProps as nt, guardReactiveProps as _t, resolveDynamicComponent as ki, Teleport as lu, withModifiers as Ke, normalizeStyle as gt, nextTick as St, withDirectives as Nt, vShow as yn, onBeforeUpdate as iu, getCurrentScope as uu, onScopeDispose as su, vModelText as ua, vModelDynamic as cu, vModelCheckbox as fu, pushScopeId as du, popScopeId as pu } from "vue";
const kt = () => {
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
}, yu = /* @__PURE__ */ ge({
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
      "437391c4": e.size,
      cc23bbe0: c(a)
    }));
    const n = kt();
    ft(() => {
      o();
    });
    const r = M(null), a = k(() => n.getRealColor(t.color)), o = async () => {
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
    return bt(() => t.src, o), bt(() => t.size, o), (l, u) => (m(), P("div", {
      ref_key: "svgContent",
      ref: r,
      class: "svg-icon__container"
    }, null, 512));
  }
});
const Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Yt = /* @__PURE__ */ Me(yu, [["__scopeId", "data-v-87c68bf1"]]), mu = { class: "font-awesome-icon__container" }, vu = /* @__PURE__ */ ge({
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
      b0be874e: c(o)
    }));
    const n = kt(), r = {
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
      const w = r[d];
      return w ? l ? `fa-sharp fa-${w} fa-${p}` : `fa-${w} fa-${p}` : "fa-solid fa-bug";
    }), o = k(() => n.getRealColor(t.color));
    return (l, u) => (m(), P("div", mu, [
      V("em", {
        class: pe(c(a))
      }, null, 2)
    ]));
  }
});
const Qe = /* @__PURE__ */ Me(vu, [["__scopeId", "data-v-b0b932e1"]]), hu = {
  key: 0,
  class: "check-box__icon"
}, $i = /* @__PURE__ */ ge({
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
    return (d, p) => (m(), P("div", {
      class: pe(c(a)),
      onClick: u
    }, [
      xe(wt, {
        name: "bounce",
        mode: "out-in"
      }, {
        default: ne(() => [
          c(r) ? (m(), P("div", hu, [
            e.checkedIcon.startsWith("fa") ? (m(), re(Qe, {
              key: 0,
              name: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(l)
            }, null, 8, ["name", "size", "color"])) : (m(), re(Yt, {
              key: 1,
              src: e.checkedIcon,
              size: e.checkedIconSize,
              color: c(l)
            }, null, 8, ["src", "size", "color"]))
          ])) : R("", !0)
        ]),
        _: 1
      }),
      e.boxIcon.startsWith("fa") ? (m(), re(Qe, {
        key: 0,
        name: e.boxIcon,
        size: e.boxIconSize,
        color: c(o)
      }, null, 8, ["name", "size", "color"])) : (m(), re(Yt, {
        key: 1,
        src: e.boxIcon,
        size: e.boxIconSize,
        color: c(o)
      }, null, 8, ["src", "size", "color"]))
    ], 2));
  }
});
const gu = { class: "grid-row__container" }, _u = /* @__PURE__ */ ge({
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
      ed5c38d8: c(r),
      d898df2c: e.gridTemplateColumns
    }));
    const n = kt(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (m(), P("div", gu, [
      Q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Oi = /* @__PURE__ */ Me(_u, [["__scopeId", "data-v-e59af6d9"]]), bu = { class: "grid-column__container" }, wu = /* @__PURE__ */ ge({
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
      b20bf524: c(r)
    }));
    const n = kt(), r = k(() => n.getRealColor(t.backgroundColor));
    return (a, o) => (m(), P("div", bu, [
      Q(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const So = /* @__PURE__ */ Me(wu, [["__scopeId", "data-v-584f9924"]]), ku = ["width", "height"], $u = ["fill"], Ou = /* @__PURE__ */ V("animate", {
  dur: "1s",
  begin: "0.1",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), xu = [
  Ou
], Su = ["fill"], Pu = /* @__PURE__ */ V("animate", {
  dur: "1s",
  begin: "0.2",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Tu = [
  Pu
], Cu = ["fill"], Du = /* @__PURE__ */ V("animate", {
  dur: "1s",
  begin: "0.3",
  values: "0;1;0",
  attributeName: "opacity",
  repeatCount: "indefinite"
}, null, -1), Mu = [
  Du
], xi = /* @__PURE__ */ ge({
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
    const t = e, n = kt(), r = k(() => n.getRealColor(t.fill));
    return (a, o) => (m(), P("svg", {
      width: e.size,
      height: e.size,
      viewBox: "0 0 52 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      V("circle", {
        r: "6",
        cx: "6",
        cy: "6",
        stroke: "none",
        fill: c(r)
      }, xu, 8, $u),
      V("circle", {
        r: "6",
        cy: "6",
        cx: "26",
        stroke: "none",
        fill: c(r)
      }, Tu, 8, Su),
      V("circle", {
        r: "6",
        cy: "6",
        cx: "46",
        stroke: "none",
        fill: c(r)
      }, Mu, 8, Cu)
    ], 8, ku));
  }
}), Ru = ["disabled"], Iu = { class: "custom-button__text" }, Nu = /* @__PURE__ */ ge({
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
    We((s) => ({
      "8a2861a2": c(l),
      "7c0b7769": e.width,
      "28d70838": e.height,
      "6e1ed00d": e.justifyItems,
      "7336ce20": c(o),
      "1c3f3d86": e.justifyContent,
      74225192: c(w),
      "27c882d6": c(d),
      "77bc78f2": c(u)
    }));
    const r = kt(), a = k(() => n.disabled ? "neutro-4" : n.outlined ? n.color : n.contentColor), o = k(() => r.getRealColor(n.color)), l = k(() => r.getRealColor(n.contentColor)), u = k(() => {
      const s = `${n.color}-hover`;
      return !n.hoverColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.hoverColor);
    }), d = k(() => {
      const s = `${n.color}-pressed`;
      return !n.activeColor && r.isCustom(s) ? r.getRealColor(s) : r.getRealColor(n.activeColor);
    }), p = k(() => ({
      "custom-button__container": !0,
      "custom-button__container--loading": n.loading,
      "custom-button__container--outlined": n.outlined
    })), w = k(() => {
      if (n.gridTemplateColumns)
        return n.gridTemplateColumns;
      const s = ["1fr"];
      return n.preppendIcon && s.unshift("1rem"), n.appendIcon && s.push("1rem"), s.join(" ");
    }), y = (s) => {
      n.disabled || t("click", s);
    };
    return (s, h) => (m(), P("button", {
      disabled: e.disabled,
      class: pe(c(p)),
      onClick: y
    }, [
      e.preppendIcon && !e.loading ? (m(), P(be, { key: 0 }, [
        e.preppendIcon.startsWith("fa") ? (m(), re(Qe, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.preppendIcon
        }, null, 8, ["color", "name"])) : (m(), re(Yt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : R("", !0),
      V("span", Iu, [
        e.loading ? (m(), re(xi, {
          key: 0,
          fill: c(a)
        }, null, 8, ["fill"])) : Q(s.$slots, "default", { key: 1 }, void 0, !0)
      ]),
      e.appendIcon && !e.loading ? (m(), P(be, { key: 1 }, [
        e.appendIcon.startsWith("fa") ? (m(), re(Qe, {
          key: 0,
          size: "1rem",
          color: c(a),
          name: e.appendIcon
        }, null, 8, ["color", "name"])) : (m(), re(Yt, {
          key: 1,
          size: "1rem",
          color: c(a),
          src: e.preppendIcon
        }, null, 8, ["color", "src"]))
      ], 64)) : R("", !0)
    ], 10, Ru));
  }
});
const sa = /* @__PURE__ */ Me(Nu, [["__scopeId", "data-v-e48ae763"]]), Bu = /* @__PURE__ */ ge({
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
    },
    specialText: {
      default: "",
      type: String
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((h) => ({
      "6447e1c2": e.padding,
      "0f410562": c(u),
      "0c67b15f": e.fontSize,
      c4fad96e: e.textAlign,
      b647d22c: e.lineHeight,
      d0579754: e.fontWeight,
      "5b4dd1e8": e.whiteSpace,
      cfc78666: e.borderRadius,
      "2c4b5e2e": e.letterSpacing,
      "04d0b4a0": e.textTransform,
      "7a9b4d42": e.fontFamily,
      "664c03c0": c(d),
      "706a724a": c(w),
      "0b2a51c8": c(p),
      b558045a: c(y)
    }));
    const r = Vt(), a = kt(), o = M(null);
    ft(() => {
      if (!n.specialText || !o.value || r.default)
        return;
      const h = /\*([^*]+)\*/g;
      o.value.innerHTML = n.specialText.replace(h, (O) => `<b>${O.slice(1, O.length - 1)}</b>`);
    });
    const l = k(() => {
      const h = ["text__container"];
      return n.clickable && h.push("text__container--clickable"), h.push(`text__container--${n.predefinedStyle}`), h;
    }), u = k(() => a.getRealColor(n.color)), d = k(() => a.getRealColor(n.hoverColor)), p = k(() => a.getRealColor(n.activeColor)), w = k(() => a.getRealColor(n.hoverBackground)), y = k(() => a.getRealColor(n.activeBackground)), s = (h) => {
      t("click", h);
    };
    return (h, O) => (m(), P("div", {
      ref_key: "container",
      ref: o,
      class: pe(c(l)),
      onClick: s
    }, [
      Q(h.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Jt = /* @__PURE__ */ Me(Bu, [["__scopeId", "data-v-60493096"]]), Au = ["onKeydown"], Eu = /* @__PURE__ */ ge({
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
    const n = e, r = M(!1), a = M(null), o = k({
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
    }, w = (y) => {
      y.currentTarget === y.target && (n.persistent ? r.value = !0 : o.value = !1);
    };
    return (y, s) => (m(), re(wt, { name: "fade" }, {
      default: ne(() => [
        c(o) ? (m(), P("div", {
          key: 0,
          ref_key: "container",
          ref: a,
          tabindex: "-1",
          class: pe(c(l)),
          onKeyup: d,
          onMouseover: p,
          onMouseup: d,
          onKeydown: we(u, ["esc"]),
          onMousedown: w
        }, [
          Q(y.$slots, "default", {}, void 0, !0)
        ], 42, Au)) : R("", !0)
      ]),
      _: 3
    }));
  }
});
const Po = /* @__PURE__ */ Me(Eu, [["__scopeId", "data-v-742c0053"]]), Yu = /* @__PURE__ */ ge({
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
    return (l, u) => (m(), re(Po, {
      modelValue: c(r),
      "onUpdate:modelValue": u[0] || (u[0] = (d) => Ge(r) ? r.value = d : null),
      persistent: ""
    }, {
      default: ne(() => [
        xe(So, {
          padding: "1rem",
          "row-gap": "1rem",
          width: e.width,
          "border-radius": "1rem",
          "background-color": "neutro-1",
          class: "confirmation-dialog__column",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: ne(() => [
            xe(Jt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: ne(() => [
                ze(ke(e.title), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (m(), re(Jt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: ne(() => [
                ze(ke(e.subtitle), 1)
              ]),
              _: 1
            })) : R("", !0),
            xe(Oi, { "column-gap": "0.75rem" }, {
              default: ne(() => [
                xe(sa, {
                  color: "acento-principal",
                  height: "2.75rem",
                  onClick: a
                }, {
                  default: ne(() => [
                    ze(" Sí ")
                  ]),
                  _: 1
                }),
                xe(sa, {
                  color: "error",
                  height: "2.75rem",
                  onClick: o
                }, {
                  default: ne(() => [
                    ze(" No ")
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
function oe(e, t) {
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
function ye(e) {
  oe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || mn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Et(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function xt(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
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
function Si(e, t) {
  if (oe(2, arguments), !t || vn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? fe(t.years) : 0, r = t.months ? fe(t.months) : 0, a = t.weeks ? fe(t.weeks) : 0, o = t.days ? fe(t.days) : 0, l = t.hours ? fe(t.hours) : 0, u = t.minutes ? fe(t.minutes) : 0, d = t.seconds ? fe(t.seconds) : 0, p = ye(e), w = r || n ? xt(p, r + n * 12) : p, y = o || a ? Et(w, o + a * 7) : w, s = u + l * 60, h = d + s * 60, O = h * 1e3, N = new Date(y.getTime() + O);
  return N;
}
function Vu(e, t) {
  oe(2, arguments);
  var n = ye(e).getTime(), r = fe(t);
  return new Date(n + r);
}
var Fu = {};
function Tt() {
  return Fu;
}
function jt(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = Tt(), y = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : w.weekStartsOn) !== null && r !== void 0 ? r : (d = w.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = ye(e), h = s.getDay(), O = (h < y ? 7 : 0) + h - y;
  return s.setDate(s.getDate() - O), s.setHours(0, 0, 0, 0), s;
}
function rr(e) {
  return oe(1, arguments), jt(e, {
    weekStartsOn: 1
  });
}
function Uu(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = rr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var l = rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Wu(e) {
  oe(1, arguments);
  var t = Uu(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = rr(n);
  return r;
}
function ar(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function zo(e) {
  oe(1, arguments);
  var t = ye(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Lu = 864e5;
function Hu(e, t) {
  oe(2, arguments);
  var n = zo(e), r = zo(t), a = n.getTime() - ar(n), o = r.getTime() - ar(r);
  return Math.round((a - o) / Lu);
}
function Pi(e, t) {
  oe(2, arguments);
  var n = fe(t);
  return xt(e, n * 12);
}
var To = 6e4, Co = 36e5, zu = 1e3;
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(n) {
    return typeof n;
  } : hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hn(e);
}
function Ti(e) {
  return oe(1, arguments), e instanceof Date || hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function un(e) {
  if (oe(1, arguments), !Ti(e) && typeof e != "number")
    return !1;
  var t = ye(e);
  return !isNaN(Number(t));
}
function jo(e, t) {
  var n;
  oe(1, arguments);
  var r = e || {}, a = ye(r.start), o = ye(r.end), l = o.getTime();
  if (!(a.getTime() <= l))
    throw new RangeError("Invalid interval");
  var u = [], d = a;
  d.setHours(0, 0, 0, 0);
  var p = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (p < 1 || isNaN(p))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; d.getTime() <= l; )
    u.push(ye(d)), d.setDate(d.getDate() + p), d.setHours(0, 0, 0, 0);
  return u;
}
function ju(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = Tt(), y = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : w.weekStartsOn) !== null && r !== void 0 ? r : (d = w.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = ye(e), h = s.getDay(), O = (h < y ? -7 : 0) + 6 - (h - y);
  return s.setDate(s.getDate() + O), s.setHours(23, 59, 59, 999), s;
}
function Ci(e, t) {
  oe(2, arguments);
  var n = fe(t);
  return Vu(e, -n);
}
var qu = 864e5;
function Gu(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / qu) + 1;
}
function en(e) {
  oe(1, arguments);
  var t = 1, n = ye(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Di(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = en(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var l = en(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Qu(e) {
  oe(1, arguments);
  var t = Di(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = en(n);
  return r;
}
var Zu = 6048e5;
function Mi(e) {
  oe(1, arguments);
  var t = ye(e), n = en(t).getTime() - Qu(t).getTime();
  return Math.round(n / Zu) + 1;
}
function qt(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = Tt(), y = fe((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : w.weekStartsOn) !== null && r !== void 0 ? r : (d = w.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = ye(e), h = s.getUTCDay(), O = (h < y ? 7 : 0) + h - y;
  return s.setUTCDate(s.getUTCDate() - O), s.setUTCHours(0, 0, 0, 0), s;
}
function Do(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = ye(e), y = w.getUTCFullYear(), s = Tt(), h = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = s.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = /* @__PURE__ */ new Date(0);
  O.setUTCFullYear(y + 1, 0, h), O.setUTCHours(0, 0, 0, 0);
  var N = qt(O, t), I = /* @__PURE__ */ new Date(0);
  I.setUTCFullYear(y, 0, h), I.setUTCHours(0, 0, 0, 0);
  var j = qt(I, t);
  return w.getTime() >= N.getTime() ? y + 1 : w.getTime() >= j.getTime() ? y : y - 1;
}
function Xu(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = Tt(), y = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : w.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = w.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = Do(e, t), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(s, 0, y), h.setUTCHours(0, 0, 0, 0);
  var O = qt(h, t);
  return O;
}
var Ku = 6048e5;
function Ri(e, t) {
  oe(1, arguments);
  var n = ye(e), r = qt(n, t).getTime() - Xu(n, t).getTime();
  return Math.round(r / Ku) + 1;
}
function Ce(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Ju = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return Ce(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ce(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ce(t.getUTCDate(), n.length);
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
    return Ce(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ce(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ce(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ce(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return Ce(o, n.length);
  }
};
const Bt = Ju;
var Zt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, es = {
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
    return Bt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var o = Do(t, a), l = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var u = l % 100;
      return Ce(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(l, {
      unit: "year"
    }) : Ce(l, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Di(t);
    return Ce(r, n.length);
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
    return Ce(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return Ce(a, 2);
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
        return Ce(a, 2);
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
        return Bt.M(t, n);
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
        return Ce(a + 1, 2);
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
    var o = Ri(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ce(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = Mi(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ce(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Bt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = Gu(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : Ce(a, n.length);
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
        return Ce(l, 2);
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
        return Ce(l, n.length);
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
        return Ce(o, n.length);
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
    switch (a === 12 ? o = Zt.noon : a === 0 ? o = Zt.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? o = Zt.evening : a >= 12 ? o = Zt.afternoon : a >= 4 ? o = Zt.morning : o = Zt.night, n) {
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
    return Bt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Bt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Ce(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Ce(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Bt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Bt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Bt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (n) {
      case "X":
        return Go(l);
      case "XXXX":
      case "XX":
        return Lt(l);
      case "XXXXX":
      case "XXX":
      default:
        return Lt(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return Go(l);
      case "xxxx":
      case "xx":
        return Lt(l);
      case "xxxxx":
      case "xxx":
      default:
        return Lt(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + qo(l, ":");
      case "OOOO":
      default:
        return "GMT" + Lt(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + qo(l, ":");
      case "zzzz":
      default:
        return "GMT" + Lt(l, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var o = a._originalDate || t, l = Math.floor(o.getTime() / 1e3);
    return Ce(l, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var o = a._originalDate || t, l = o.getTime();
    return Ce(l, n.length);
  }
};
function qo(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var l = t || "";
  return n + String(a) + l + Ce(o, 2);
}
function Go(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ce(Math.abs(e) / 60, 2);
  }
  return Lt(e, t);
}
function Lt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = Ce(Math.floor(a / 60), 2), l = Ce(a % 60, 2);
  return r + o + n + l;
}
const ts = es;
var Qo = function(t, n) {
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
}, Ii = function(t, n) {
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
}, ns = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return Qo(t, n);
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
  return l.replace("{{date}}", Qo(a, n)).replace("{{time}}", Ii(o, n));
}, rs = {
  p: Ii,
  P: ns
};
const ca = rs;
var as = ["D", "DD"], os = ["YY", "YYYY"];
function Ni(e) {
  return as.indexOf(e) !== -1;
}
function Bi(e) {
  return os.indexOf(e) !== -1;
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
var ls = {
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
}, is = function(t, n, r) {
  var a, o = ls[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const us = is;
function Gr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var ss = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, cs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ds = {
  date: Gr({
    formats: ss,
    defaultWidth: "full"
  }),
  time: Gr({
    formats: cs,
    defaultWidth: "full"
  }),
  dateTime: Gr({
    formats: fs,
    defaultWidth: "full"
  })
};
const ps = ds;
var ys = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ms = function(t, n, r, a) {
  return ys[t];
};
const vs = ms;
function rn(e) {
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
var hs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, gs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _s = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, bs = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ws = {
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
}, ks = {
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
}, $s = function(t, n) {
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
}, Os = {
  ordinalNumber: $s,
  era: rn({
    values: hs,
    defaultWidth: "wide"
  }),
  quarter: rn({
    values: gs,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: rn({
    values: _s,
    defaultWidth: "wide"
  }),
  day: rn({
    values: bs,
    defaultWidth: "wide"
  }),
  dayPeriod: rn({
    values: ws,
    defaultWidth: "wide",
    formattingValues: ks,
    defaultFormattingWidth: "wide"
  })
};
const xs = Os;
function an(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var l = o[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(u) ? Ps(u, function(y) {
      return y.test(l);
    }) : Ss(u, function(y) {
      return y.test(l);
    }), p;
    p = e.valueCallback ? e.valueCallback(d) : d, p = n.valueCallback ? n.valueCallback(p) : p;
    var w = t.slice(l.length);
    return {
      value: p,
      rest: w
    };
  };
}
function Ss(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ps(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ts(e) {
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
var Cs = /^(\d+)(th|st|nd|rd)?/i, Ds = /\d+/i, Ms = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rs = {
  any: [/^b/i, /^(a|c)/i]
}, Is = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Bs = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, As = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Es = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ys = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Vs = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Fs = {
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
}, Us = {
  ordinalNumber: Ts({
    matchPattern: Cs,
    parsePattern: Ds,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: an({
    matchPatterns: Ms,
    defaultMatchWidth: "wide",
    parsePatterns: Rs,
    defaultParseWidth: "any"
  }),
  quarter: an({
    matchPatterns: Is,
    defaultMatchWidth: "wide",
    parsePatterns: Ns,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: an({
    matchPatterns: Bs,
    defaultMatchWidth: "wide",
    parsePatterns: As,
    defaultParseWidth: "any"
  }),
  day: an({
    matchPatterns: Es,
    defaultMatchWidth: "wide",
    parsePatterns: Ys,
    defaultParseWidth: "any"
  }),
  dayPeriod: an({
    matchPatterns: Vs,
    defaultMatchWidth: "any",
    parsePatterns: Fs,
    defaultParseWidth: "any"
  })
};
const Ws = Us;
var Ls = {
  code: "en-US",
  formatDistance: us,
  formatLong: ps,
  formatRelative: vs,
  localize: xs,
  match: Ws,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ai = Ls;
var Hs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zs = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, js = /^'([^]*?)'?$/, qs = /''/g, Gs = /[a-zA-Z]/;
function sn(e, t, n) {
  var r, a, o, l, u, d, p, w, y, s, h, O, N, I, j, H, D, z;
  oe(2, arguments);
  var K = String(t), Z = Tt(), te = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : Z.locale) !== null && r !== void 0 ? r : Ai, T = fe((o = (l = (u = (d = n == null ? void 0 : n.firstWeekContainsDate) !== null && d !== void 0 ? d : n == null || (p = n.locale) === null || p === void 0 || (w = p.options) === null || w === void 0 ? void 0 : w.firstWeekContainsDate) !== null && u !== void 0 ? u : Z.firstWeekContainsDate) !== null && l !== void 0 ? l : (y = Z.locale) === null || y === void 0 || (s = y.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = fe((h = (O = (N = (I = n == null ? void 0 : n.weekStartsOn) !== null && I !== void 0 ? I : n == null || (j = n.locale) === null || j === void 0 || (H = j.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && N !== void 0 ? N : Z.weekStartsOn) !== null && O !== void 0 ? O : (D = Z.locale) === null || D === void 0 || (z = D.options) === null || z === void 0 ? void 0 : z.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(_ >= 0 && _ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!te.localize)
    throw new RangeError("locale must contain localize property");
  if (!te.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var b = ye(e);
  if (!un(b))
    throw new RangeError("Invalid time value");
  var C = ar(b), X = Ci(b, C), J = {
    firstWeekContainsDate: T,
    weekStartsOn: _,
    locale: te,
    _originalDate: b
  }, le = K.match(zs).map(function(ee) {
    var F = ee[0];
    if (F === "p" || F === "P") {
      var i = ca[F];
      return i(ee, te.formatLong);
    }
    return ee;
  }).join("").match(Hs).map(function(ee) {
    if (ee === "''")
      return "'";
    var F = ee[0];
    if (F === "'")
      return Qs(ee);
    var i = ts[F];
    if (i)
      return !(n != null && n.useAdditionalWeekYearTokens) && Bi(ee) && or(ee, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Ni(ee) && or(ee, t, String(e)), i(X, ee, te.localize, J);
    if (F.match(Gs))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + F + "`");
    return ee;
  }).join("");
  return le;
}
function Qs(e) {
  var t = e.match(js);
  return t ? t[1].replace(qs, "'") : e;
}
function Zs(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function Xs(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getDay();
  return n;
}
function Ks(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Rt(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getHours();
  return n;
}
var Js = 6048e5;
function ec(e) {
  oe(1, arguments);
  var t = ye(e), n = rr(t).getTime() - Wu(t).getTime();
  return Math.round(n / Js) + 1;
}
function It(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getMinutes();
  return n;
}
function Ae(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getMonth();
  return n;
}
function tn(e) {
  oe(1, arguments);
  var t = ye(e), n = t.getSeconds();
  return n;
}
function tc(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = ye(e), y = w.getFullYear(), s = Tt(), h = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : s.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = s.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = /* @__PURE__ */ new Date(0);
  O.setFullYear(y + 1, 0, h), O.setHours(0, 0, 0, 0);
  var N = jt(O, t), I = /* @__PURE__ */ new Date(0);
  I.setFullYear(y, 0, h), I.setHours(0, 0, 0, 0);
  var j = jt(I, t);
  return w.getTime() >= N.getTime() ? y + 1 : w.getTime() >= j.getTime() ? y : y - 1;
}
function nc(e, t) {
  var n, r, a, o, l, u, d, p;
  oe(1, arguments);
  var w = Tt(), y = fe((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : w.firstWeekContainsDate) !== null && r !== void 0 ? r : (d = w.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), s = tc(e, t), h = /* @__PURE__ */ new Date(0);
  h.setFullYear(s, 0, y), h.setHours(0, 0, 0, 0);
  var O = jt(h, t);
  return O;
}
var rc = 6048e5;
function ac(e, t) {
  oe(1, arguments);
  var n = ye(e), r = jt(n, t).getTime() - nc(n, t).getTime();
  return Math.round(r / rc) + 1;
}
function Ee(e) {
  return oe(1, arguments), ye(e).getFullYear();
}
function Mo(e, t) {
  oe(2, arguments);
  var n = ye(e), r = ye(t);
  return n.getTime() > r.getTime();
}
function Ro(e, t) {
  oe(2, arguments);
  var n = ye(e), r = ye(t);
  return n.getTime() < r.getTime();
}
function Ei(e, t) {
  oe(2, arguments);
  var n = ye(e), r = ye(t);
  return n.getTime() === r.getTime();
}
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(n) {
    return typeof n;
  } : gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gn(e);
}
function Yi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && fa(e, t);
}
function fa(e, t) {
  return fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, fa(e, t);
}
function Vi(e) {
  var t = lc();
  return function() {
    var r = lr(e), a;
    if (t) {
      var o = lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return oc(this, a);
  };
}
function oc(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : da(e);
}
function da(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lc() {
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
function Io(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function No(e, t, n) {
  return t && Zo(e.prototype, t), n && Zo(e, n), e;
}
function pa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ic = 10, Fi = /* @__PURE__ */ function() {
  function e() {
    Io(this, e), pa(this, "subPriority", 0);
  }
  return No(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), uc = /* @__PURE__ */ function(e) {
  Yi(n, e);
  var t = Vi(n);
  function n(r, a, o, l, u) {
    var d;
    return Io(this, n), d = t.call(this), d.value = r, d.validateValue = a, d.setValue = o, d.priority = l, u && (d.subPriority = u), d;
  }
  return No(n, [{
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
}(Fi), sc = /* @__PURE__ */ function(e) {
  Yi(n, e);
  var t = Vi(n);
  function n() {
    var r;
    Io(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), pa(da(r), "priority", ic), pa(da(r), "subPriority", -1), r;
  }
  return No(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var l = /* @__PURE__ */ new Date(0);
      return l.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), l.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), l;
    }
  }]), n;
}(Fi);
function cc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fc(e, t, n) {
  return t && Xo(e.prototype, t), n && Xo(e, n), e;
}
var Pe = /* @__PURE__ */ function() {
  function e() {
    cc(this, e);
  }
  return fc(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var l = this.parse(n, r, a, o);
      return l ? {
        setter: new uc(l.value, this.validate, this.set, this.priority, this.subPriority),
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
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(n) {
    return typeof n;
  } : _n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _n(e);
}
function dc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ko(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pc(e, t, n) {
  return t && Ko(e.prototype, t), n && Ko(e, n), e;
}
function yc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ya(e, t);
}
function ya(e, t) {
  return ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ya(e, t);
}
function mc(e) {
  var t = hc();
  return function() {
    var r = ir(e), a;
    if (t) {
      var o = ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return vc(this, a);
  };
}
function vc(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : ma(e);
}
function ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hc() {
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
function Jo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gc = /* @__PURE__ */ function(e) {
  yc(n, e);
  var t = mc(n);
  function n() {
    var r;
    dc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Jo(ma(r), "priority", 140), Jo(ma(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return pc(n, [{
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
}(Pe), je = {
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
}, $t = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function qe(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ue(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function Ot(e, t) {
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
    value: r * (a * Co + o * To + l * zu),
    rest: t.slice(n[0].length)
  };
}
function Ui(e) {
  return Ue(je.anyDigitsSigned, e);
}
function Le(e, t) {
  switch (e) {
    case 1:
      return Ue(je.singleDigit, t);
    case 2:
      return Ue(je.twoDigits, t);
    case 3:
      return Ue(je.threeDigits, t);
    case 4:
      return Ue(je.fourDigits, t);
    default:
      return Ue(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ur(e, t) {
  switch (e) {
    case 1:
      return Ue(je.singleDigitSigned, t);
    case 2:
      return Ue(je.twoDigitsSigned, t);
    case 3:
      return Ue(je.threeDigitsSigned, t);
    case 4:
      return Ue(je.fourDigitsSigned, t);
    default:
      return Ue(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Bo(e) {
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
function Wi(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, l = Math.floor(o / 100) * 100, u = e >= o % 100;
    a = e + l - (u ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Li(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(n) {
    return typeof n;
  } : bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bn(e);
}
function _c(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bc(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function wc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && va(e, t);
}
function va(e, t) {
  return va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, va(e, t);
}
function kc(e) {
  var t = Oc();
  return function() {
    var r = sr(e), a;
    if (t) {
      var o = sr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return $c(this, a);
  };
}
function $c(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : ha(e);
}
function ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oc() {
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
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xc = /* @__PURE__ */ function(e) {
  wc(n, e);
  var t = kc(n);
  function n() {
    var r;
    _c(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), tl(ha(r), "priority", 130), tl(ha(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return bc(n, [{
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
          return qe(Le(4, a), u);
        case "yo":
          return qe(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return qe(Le(o.length, a), u);
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
        var d = Wi(l.year, u);
        return a.setUTCFullYear(d, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var p = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return a.setUTCFullYear(p, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(n) {
    return typeof n;
  } : wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wn(e);
}
function Sc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pc(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function Tc(e, t) {
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
  var t = Mc();
  return function() {
    var r = cr(e), a;
    if (t) {
      var o = cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Dc(this, a);
  };
}
function Dc(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : _a(e);
}
function _a(e) {
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
function cr(e) {
  return cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cr(e);
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rc = /* @__PURE__ */ function(e) {
  Tc(n, e);
  var t = Cc(n);
  function n() {
    var r;
    Sc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), rl(_a(r), "priority", 130), rl(_a(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Pc(n, [{
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
          return qe(Le(4, a), u);
        case "Yo":
          return qe(l.ordinalNumber(a, {
            unit: "year"
          }), u);
        default:
          return qe(Le(o.length, a), u);
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
      var d = Do(a, u);
      if (l.isTwoDigitYear) {
        var p = Wi(l.year, d);
        return a.setUTCFullYear(p, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), qt(a, u);
      }
      var w = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return a.setUTCFullYear(w, 0, u.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), qt(a, u);
    }
  }]), n;
}(Pe);
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function Ic(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nc(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function Bc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ba(e, t);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ba(e, t);
}
function Ac(e) {
  var t = Yc();
  return function() {
    var r = fr(e), a;
    if (t) {
      var o = fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ec(this, a);
  };
}
function Ec(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : wa(e);
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
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fr(e);
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vc = /* @__PURE__ */ function(e) {
  Bc(n, e);
  var t = Ac(n);
  function n() {
    var r;
    Ic(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ol(wa(r), "priority", 130), ol(wa(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Nc(n, [{
    key: "parse",
    value: function(a, o) {
      return ur(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(l, 0, 4), u.setUTCHours(0, 0, 0, 0), en(u);
    }
  }]), n;
}(Pe);
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function Fc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uc(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), e;
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
function Lc(e) {
  var t = zc();
  return function() {
    var r = dr(e), a;
    if (t) {
      var o = dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hc(this, a);
  };
}
function Hc(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : $a(e);
}
function $a(e) {
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
function dr(e) {
  return dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dr(e);
}
function il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jc = /* @__PURE__ */ function(e) {
  Wc(n, e);
  var t = Lc(n);
  function n() {
    var r;
    Fc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), il($a(r), "priority", 130), il($a(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Uc(n, [{
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
}(Pe);
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function qc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gc(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Qc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oa(e, t);
}
function Oa(e, t) {
  return Oa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Oa(e, t);
}
function Zc(e) {
  var t = Kc();
  return function() {
    var r = pr(e), a;
    if (t) {
      var o = pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Xc(this, a);
  };
}
function Xc(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
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
function pr(e) {
  return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pr(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jc = /* @__PURE__ */ function(e) {
  Qc(n, e);
  var t = Zc(n);
  function n() {
    var r;
    qc(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), sl(xa(r), "priority", 120), sl(xa(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Gc(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "Q":
        case "QQ":
          return Le(o.length, a);
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
}(Pe);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function ef(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tf(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function nf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sa(e, t);
}
function Sa(e, t) {
  return Sa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Sa(e, t);
}
function rf(e) {
  var t = of();
  return function() {
    var r = yr(e), a;
    if (t) {
      var o = yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return af(this, a);
  };
}
function af(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Pa(e);
}
function Pa(e) {
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
function yr(e) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yr(e);
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lf = /* @__PURE__ */ function(e) {
  nf(n, e);
  var t = rf(n);
  function n() {
    var r;
    ef(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), fl(Pa(r), "priority", 120), fl(Pa(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return tf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "q":
        case "qq":
          return Le(o.length, a);
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
}(Pe);
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
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sf(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function cf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ta(e, t);
}
function Ta(e, t) {
  return Ta = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ta(e, t);
}
function ff(e) {
  var t = pf();
  return function() {
    var r = mr(e), a;
    if (t) {
      var o = mr(this).constructor;
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
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yf = /* @__PURE__ */ function(e) {
  cf(n, e);
  var t = ff(n);
  function n() {
    var r;
    uf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), pl(Ca(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), pl(Ca(r), "priority", 110), r;
  }
  return sf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p - 1;
      };
      switch (o) {
        case "M":
          return qe(Ue(je.month, a), u);
        case "MM":
          return qe(Le(2, a), u);
        case "Mo":
          return qe(l.ordinalNumber(a, {
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
}(Pe);
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
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
function vf(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
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
  var t = bf();
  return function() {
    var r = vr(e), a;
    if (t) {
      var o = vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return _f(this, a);
  };
}
function _f(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Ma(e);
}
function Ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bf() {
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
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wf = /* @__PURE__ */ function(e) {
  hf(n, e);
  var t = gf(n);
  function n() {
    var r;
    mf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ml(Ma(r), "priority", 110), ml(Ma(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return vf(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p - 1;
      };
      switch (o) {
        case "L":
          return qe(Ue(je.month, a), u);
        case "LL":
          return qe(Le(2, a), u);
        case "Lo":
          return qe(l.ordinalNumber(a, {
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
}(Pe);
function kf(e, t, n) {
  oe(2, arguments);
  var r = ye(e), a = fe(t), o = Ri(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function $f(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Of(e, t, n) {
  return t && vl(e.prototype, t), n && vl(e, n), e;
}
function xf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ra(e, t);
}
function Ra(e, t) {
  return Ra = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ra(e, t);
}
function Sf(e) {
  var t = Tf();
  return function() {
    var r = hr(e), a;
    if (t) {
      var o = hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pf(this, a);
  };
}
function Pf(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ia(e);
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
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hr(e);
}
function hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cf = /* @__PURE__ */ function(e) {
  xf(n, e);
  var t = Sf(n);
  function n() {
    var r;
    $f(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), hl(Ia(r), "priority", 100), hl(Ia(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Of(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "w":
          return Ue(je.week, a);
        case "wo":
          return l.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Le(o.length, a);
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
      return qt(kf(a, l, u), u);
    }
  }]), n;
}(Pe);
function Df(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t), a = Mi(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Mf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rf(e, t, n) {
  return t && gl(e.prototype, t), n && gl(e, n), e;
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
    var r = gr(e), a;
    if (t) {
      var o = gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bf(this, a);
  };
}
function Bf(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ba(e);
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
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gr(e);
}
function _l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ef = /* @__PURE__ */ function(e) {
  If(n, e);
  var t = Nf(n);
  function n() {
    var r;
    Mf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), _l(Ba(r), "priority", 100), _l(Ba(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Rf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "I":
          return Ue(je.week, a);
        case "Io":
          return l.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Le(o.length, a);
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
      return en(Df(a, l));
    }
  }]), n;
}(Pe);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function Yf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vf(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
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
  var t = Lf();
  return function() {
    var r = _r(e), a;
    if (t) {
      var o = _r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wf(this, a);
  };
}
function Wf(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Mn(e);
}
function Mn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lf() {
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
function Qr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zf = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], jf = /* @__PURE__ */ function(e) {
  Ff(n, e);
  var t = Uf(n);
  function n() {
    var r;
    Yf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Qr(Mn(r), "priority", 90), Qr(Mn(r), "subPriority", 1), Qr(Mn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Vf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "d":
          return Ue(je.date, a);
        case "do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Le(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = Li(l), d = a.getUTCMonth();
      return u ? o >= 1 && o <= zf[d] : o >= 1 && o <= Hf[d];
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCDate(l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function qf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gf(e, t, n) {
  return t && wl(e.prototype, t), n && wl(e, n), e;
}
function Qf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ea(e, t);
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ea(e, t);
}
function Zf(e) {
  var t = Kf();
  return function() {
    var r = br(e), a;
    if (t) {
      var o = br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Xf(this, a);
  };
}
function Xf(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
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
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function Zr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jf = /* @__PURE__ */ function(e) {
  Qf(n, e);
  var t = Zf(n);
  function n() {
    var r;
    qf(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Zr(In(r), "priority", 90), Zr(In(r), "subpriority", 1), Zr(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return Gf(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "D":
        case "DD":
          return Ue(je.dayOfYear, a);
        case "Do":
          return l.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Le(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var l = a.getUTCFullYear(), u = Li(l);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMonth(0, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Ao(e, t, n) {
  var r, a, o, l, u, d, p, w;
  oe(2, arguments);
  var y = Tt(), s = fe((r = (a = (o = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && o !== void 0 ? o : y.weekStartsOn) !== null && a !== void 0 ? a : (p = y.locale) === null || p === void 0 || (w = p.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = ye(e), O = fe(t), N = h.getUTCDay(), I = O % 7, j = (I + 7) % 7, H = (j < s ? 7 : 0) + O - N;
  return h.setUTCDate(h.getUTCDate() + H), h;
}
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function ed(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function td(e, t, n) {
  return t && kl(e.prototype, t), n && kl(e, n), e;
}
function nd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function rd(e) {
  var t = od();
  return function() {
    var r = wr(e), a;
    if (t) {
      var o = wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ad(this, a);
  };
}
function ad(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
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
function wr(e) {
  return wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, wr(e);
}
function $l(e, t, n) {
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
    return r = t.call.apply(t, [this].concat(o)), $l(Va(r), "priority", 90), $l(Va(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return td(n, [{
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
      return a = Ao(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function id(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ud(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
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
    var r = kr(e), a;
    if (t) {
      var o = kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return fd(this, a);
  };
}
function fd(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : Ua(e);
}
function Ua(e) {
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
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pd = /* @__PURE__ */ function(e) {
  sd(n, e);
  var t = cd(n);
  function n() {
    var r;
    id(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), xl(Ua(r), "priority", 90), xl(Ua(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return ud(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(w) {
        var y = Math.floor((w - 1) / 7) * 7;
        return (w + u.weekStartsOn + 6) % 7 + y;
      };
      switch (o) {
        case "e":
        case "ee":
          return qe(Le(o.length, a), d);
        case "eo":
          return qe(l.ordinalNumber(a, {
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
      return a = Ao(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function yd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function md(e, t, n) {
  return t && Sl(e.prototype, t), n && Sl(e, n), e;
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
  var t = _d();
  return function() {
    var r = $r(e), a;
    if (t) {
      var o = $r(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return gd(this, a);
  };
}
function gd(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : La(e);
}
function La(e) {
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
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function Pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bd = /* @__PURE__ */ function(e) {
  vd(n, e);
  var t = hd(n);
  function n() {
    var r;
    yd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Pl(La(r), "priority", 90), Pl(La(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return md(n, [{
    key: "parse",
    value: function(a, o, l, u) {
      var d = function(w) {
        var y = Math.floor((w - 1) / 7) * 7;
        return (w + u.weekStartsOn + 6) % 7 + y;
      };
      switch (o) {
        case "c":
        case "cc":
          return qe(Le(o.length, a), d);
        case "co":
          return qe(l.ordinalNumber(a, {
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
      return a = Ao(a, l, u), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function wd(e, t) {
  oe(2, arguments);
  var n = fe(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = ye(e), o = a.getUTCDay(), l = n % 7, u = (l + 7) % 7, d = (u < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + d), a;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function kd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $d(e, t, n) {
  return t && Tl(e.prototype, t), n && Tl(e, n), e;
}
function Od(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function xd(e) {
  var t = Pd();
  return function() {
    var r = Or(e), a;
    if (t) {
      var o = Or(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Sd(this, a);
  };
}
function Sd(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : za(e);
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
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function Cl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Td = /* @__PURE__ */ function(e) {
  Od(n, e);
  var t = xd(n);
  function n() {
    var r;
    kd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Cl(za(r), "priority", 90), Cl(za(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return $d(n, [{
    key: "parse",
    value: function(a, o, l) {
      var u = function(p) {
        return p === 0 ? 7 : p;
      };
      switch (o) {
        case "i":
        case "ii":
          return Le(o.length, a);
        case "io":
          return l.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return qe(l.day(a, {
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
          return qe(l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return qe(l.day(a, {
            width: "short",
            context: "formatting"
          }) || l.day(a, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return qe(l.day(a, {
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
      return a = wd(a, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function Cd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dd(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
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
function Rd(e) {
  var t = Nd();
  return function() {
    var r = xr(e), a;
    if (t) {
      var o = xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Id(this, a);
  };
}
function Id(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : qa(e);
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
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function Ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bd = /* @__PURE__ */ function(e) {
  Md(n, e);
  var t = Rd(n);
  function n() {
    var r;
    Cd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ml(qa(r), "priority", 80), Ml(qa(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Dd(n, [{
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
      return a.setUTCHours(Bo(l), 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vn = function(n) {
    return typeof n;
  } : Vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vn(e);
}
function Ad(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ed(e, t, n) {
  return t && Rl(e.prototype, t), n && Rl(e, n), e;
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
  var t = Ud();
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
  return t && (Vn(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ud() {
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
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wd = /* @__PURE__ */ function(e) {
  Yd(n, e);
  var t = Vd(n);
  function n() {
    var r;
    Ad(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Il(Qa(r), "priority", 80), Il(Qa(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return Ed(n, [{
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
      return a.setUTCHours(Bo(l), 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function Ld(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hd(e, t, n) {
  return t && Nl(e.prototype, t), n && Nl(e, n), e;
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
    var r = Pr(e), a;
    if (t) {
      var o = Pr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qd(this, a);
  };
}
function qd(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : Xa(e);
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
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function Bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qd = /* @__PURE__ */ function(e) {
  zd(n, e);
  var t = jd(n);
  function n() {
    var r;
    Ld(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Bl(Xa(r), "priority", 80), Bl(Xa(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return Hd(n, [{
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
      return a.setUTCHours(Bo(l), 0, 0, 0), a;
    }
  }]), n;
}(Pe);
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(n) {
    return typeof n;
  } : Un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Un(e);
}
function Zd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xd(e, t, n) {
  return t && Al(e.prototype, t), n && Al(e, n), e;
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
    var r = Tr(e), a;
    if (t) {
      var o = Tr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ep(this, a);
  };
}
function ep(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : Ja(e);
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
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function El(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var np = /* @__PURE__ */ function(e) {
  Kd(n, e);
  var t = Jd(n);
  function n() {
    var r;
    Zd(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), El(Ja(r), "priority", 70), El(Ja(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return Xd(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "h":
          return Ue(je.hour12h, a);
        case "ho":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ap(e, t, n) {
  return t && Yl(e.prototype, t), n && Yl(e, n), e;
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
function lp(e) {
  var t = up();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var o = Cr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ip(this, a);
  };
}
function ip(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : to(e);
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
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function Vl(e, t, n) {
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
    return r = t.call.apply(t, [this].concat(o)), Vl(to(r), "priority", 70), Vl(to(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return ap(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "H":
          return Ue(je.hour23h, a);
        case "Ho":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fp(e, t, n) {
  return t && Fl(e.prototype, t), n && Fl(e, n), e;
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
  var t = mp();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var o = Dr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return yp(this, a);
  };
}
function yp(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
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
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function Ul(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vp = /* @__PURE__ */ function(e) {
  dp(n, e);
  var t = pp(n);
  function n() {
    var r;
    cp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ul(ro(r), "priority", 70), Ul(ro(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return fp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "K":
          return Ue(je.hour11h, a);
        case "Ko":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function hp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gp(e, t, n) {
  return t && Wl(e.prototype, t), n && Wl(e, n), e;
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
function bp(e) {
  var t = kp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return wp(this, a);
  };
}
function wp(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : oo(e);
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
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function Ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $p = /* @__PURE__ */ function(e) {
  _p(n, e);
  var t = bp(n);
  function n() {
    var r;
    hp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ll(oo(r), "priority", 70), Ll(oo(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return gp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "k":
          return Ue(je.hour24h, a);
        case "ko":
          return l.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function Op(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xp(e, t, n) {
  return t && Hl(e.prototype, t), n && Hl(e, n), e;
}
function Sp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Pp(e) {
  var t = Cp();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var o = Rr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Tp(this, a);
  };
}
function Tp(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : io(e);
}
function io(e) {
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
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rr(e);
}
function zl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dp = /* @__PURE__ */ function(e) {
  Sp(n, e);
  var t = Pp(n);
  function n() {
    var r;
    Op(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), zl(io(r), "priority", 60), zl(io(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return xp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "m":
          return Ue(je.minute, a);
        case "mo":
          return l.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Mp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rp(e, t, n) {
  return t && jl(e.prototype, t), n && jl(e, n), e;
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
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bp(this, a);
  };
}
function Bp(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : so(e);
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
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ep = /* @__PURE__ */ function(e) {
  Ip(n, e);
  var t = Np(n);
  function n() {
    var r;
    Mp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ql(so(r), "priority", 50), ql(so(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Rp(n, [{
    key: "parse",
    value: function(a, o, l) {
      switch (o) {
        case "s":
          return Ue(je.second, a);
        case "so":
          return l.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Le(o.length, a);
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
}(Pe);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function Yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vp(e, t, n) {
  return t && Gl(e.prototype, t), n && Gl(e, n), e;
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
function Up(e) {
  var t = Lp();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wp(this, a);
  };
}
function Wp(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : fo(e);
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
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function Ql(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hp = /* @__PURE__ */ function(e) {
  Fp(n, e);
  var t = Up(n);
  function n() {
    var r;
    Yp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Ql(fo(r), "priority", 30), Ql(fo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Vp(n, [{
    key: "parse",
    value: function(a, o) {
      var l = function(d) {
        return Math.floor(d * Math.pow(10, -o.length + 3));
      };
      return qe(Le(o.length, a), l);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return a.setUTCMilliseconds(l), a;
    }
  }]), n;
}(Pe);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function zp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jp(e, t, n) {
  return t && Zl(e.prototype, t), n && Zl(e, n), e;
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
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qp(this, a);
  };
}
function Qp(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : yo(e);
}
function yo(e) {
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
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function Xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xp = /* @__PURE__ */ function(e) {
  qp(n, e);
  var t = Gp(n);
  function n() {
    var r;
    zp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Xl(yo(r), "priority", 10), Xl(yo(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return jp(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return Ot($t.basicOptionalMinutes, a);
        case "XX":
          return Ot($t.basic, a);
        case "XXXX":
          return Ot($t.basicOptionalSeconds, a);
        case "XXXXX":
          return Ot($t.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return Ot($t.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
    }
  }]), n;
}(Pe);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function Kp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jp(e, t, n) {
  return t && Kl(e.prototype, t), n && Kl(e, n), e;
}
function ey(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function ty(e) {
  var t = ry();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ny(this, a);
  };
}
function ny(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : vo(e);
}
function vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ry() {
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
function Jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ay = /* @__PURE__ */ function(e) {
  ey(n, e);
  var t = ty(n);
  function n() {
    var r;
    Kp(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), Jl(vo(r), "priority", 10), Jl(vo(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return Jp(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return Ot($t.basicOptionalMinutes, a);
        case "xx":
          return Ot($t.basic, a);
        case "xxxx":
          return Ot($t.basicOptionalSeconds, a);
        case "xxxxx":
          return Ot($t.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return Ot($t.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return o.timestampIsSet ? a : new Date(a.getTime() - l);
    }
  }]), n;
}(Pe);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function oy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ei(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ly(e, t, n) {
  return t && ei(e.prototype, t), n && ei(e, n), e;
}
function iy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ho(e, t);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ho(e, t);
}
function uy(e) {
  var t = cy();
  return function() {
    var r = Er(e), a;
    if (t) {
      var o = Er(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return sy(this, a);
  };
}
function sy(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cy() {
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
function ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fy = /* @__PURE__ */ function(e) {
  iy(n, e);
  var t = uy(n);
  function n() {
    var r;
    oy(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ti(go(r), "priority", 40), ti(go(r), "incompatibleTokens", "*"), r;
  }
  return ly(n, [{
    key: "parse",
    value: function(a) {
      return Ui(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Pe);
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function dy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ni(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function py(e, t, n) {
  return t && ni(e.prototype, t), n && ni(e, n), e;
}
function yy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _o(e, t);
}
function _o(e, t) {
  return _o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _o(e, t);
}
function my(e) {
  var t = hy();
  return function() {
    var r = Yr(e), a;
    if (t) {
      var o = Yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return vy(this, a);
  };
}
function vy(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : bo(e);
}
function bo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hy() {
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
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yr(e);
}
function ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gy = /* @__PURE__ */ function(e) {
  yy(n, e);
  var t = my(n);
  function n() {
    var r;
    dy(this, n);
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
      o[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(o)), ri(bo(r), "priority", 20), ri(bo(r), "incompatibleTokens", "*"), r;
  }
  return py(n, [{
    key: "parse",
    value: function(a) {
      return Ui(a);
    }
  }, {
    key: "set",
    value: function(a, o, l) {
      return [new Date(l), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(Pe), _y = {
  G: new gc(),
  y: new xc(),
  Y: new Rc(),
  R: new Vc(),
  u: new jc(),
  Q: new Jc(),
  q: new lf(),
  M: new yf(),
  L: new wf(),
  w: new Cf(),
  I: new Ef(),
  d: new jf(),
  D: new Jf(),
  E: new ld(),
  e: new pd(),
  c: new bd(),
  i: new Td(),
  a: new Bd(),
  b: new Wd(),
  B: new Qd(),
  h: new np(),
  H: new sp(),
  K: new vp(),
  k: new $p(),
  m: new Dp(),
  s: new Ep(),
  S: new Hp(),
  X: new Xp(),
  x: new ay(),
  t: new fy(),
  T: new gy()
};
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function ai(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = by(e)) || t && e && typeof e.length == "number") {
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
function by(e, t) {
  if (e) {
    if (typeof e == "string")
      return oi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return oi(e, t);
  }
}
function oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var wy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ky = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $y = /^'([^]*?)'?$/, Oy = /''/g, xy = /\S/, Sy = /[a-zA-Z]/;
function wo(e, t, n, r) {
  var a, o, l, u, d, p, w, y, s, h, O, N, I, j, H, D, z, K;
  oe(3, arguments);
  var Z = String(e), te = String(t), T = Tt(), _ = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : T.locale) !== null && a !== void 0 ? a : Ai;
  if (!_.match)
    throw new RangeError("locale must contain match property");
  var b = fe((l = (u = (d = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (w = r.locale) === null || w === void 0 || (y = w.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && d !== void 0 ? d : T.firstWeekContainsDate) !== null && u !== void 0 ? u : (s = T.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(b >= 1 && b <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = fe((O = (N = (I = (j = r == null ? void 0 : r.weekStartsOn) !== null && j !== void 0 ? j : r == null || (H = r.locale) === null || H === void 0 || (D = H.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && I !== void 0 ? I : T.weekStartsOn) !== null && N !== void 0 ? N : (z = T.locale) === null || z === void 0 || (K = z.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && O !== void 0 ? O : 0);
  if (!(C >= 0 && C <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (te === "")
    return Z === "" ? ye(n) : /* @__PURE__ */ new Date(NaN);
  var X = {
    firstWeekContainsDate: b,
    weekStartsOn: C,
    locale: _
  }, J = [new sc()], le = te.match(ky).map(function(ae) {
    var de = ae[0];
    if (de in ca) {
      var Re = ca[de];
      return Re(ae, _.formatLong);
    }
    return ae;
  }).join("").match(wy), ee = [], F = ai(le), i;
  try {
    var f = function() {
      var de = i.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Bi(de) && or(de, te, e), !(r != null && r.useAdditionalDayOfYearTokens) && Ni(de) && or(de, te, e);
      var Re = de[0], ot = _y[Re];
      if (ot) {
        var ve = ot.incompatibleTokens;
        if (Array.isArray(ve)) {
          var dt = ee.find(function(He) {
            return ve.includes(He.token) || He.token === Re;
          });
          if (dt)
            throw new RangeError("The format string mustn't contain `".concat(dt.fullToken, "` and `").concat(de, "` at the same time"));
        } else if (ot.incompatibleTokens === "*" && ee.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(de, "` and any other token at the same time"));
        ee.push({
          token: Re,
          fullToken: de
        });
        var et = ot.run(Z, de, _.match, X);
        if (!et)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        J.push(et.setter), Z = et.rest;
      } else {
        if (Re.match(Sy))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Re + "`");
        if (de === "''" ? de = "'" : Re === "'" && (de = Py(de)), Z.indexOf(de) === 0)
          Z = Z.slice(de.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (F.s(); !(i = F.n()).done; ) {
      var $ = f();
      if (Kn($) === "object")
        return $.v;
    }
  } catch (ae) {
    F.e(ae);
  } finally {
    F.f();
  }
  if (Z.length > 0 && xy.test(Z))
    return /* @__PURE__ */ new Date(NaN);
  var x = J.map(function(ae) {
    return ae.priority;
  }).sort(function(ae, de) {
    return de - ae;
  }).filter(function(ae, de, Re) {
    return Re.indexOf(ae) === de;
  }).map(function(ae) {
    return J.filter(function(de) {
      return de.priority === ae;
    }).sort(function(de, Re) {
      return Re.subPriority - de.subPriority;
    });
  }).map(function(ae) {
    return ae[0];
  }), B = ye(n);
  if (isNaN(B.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var G = Ci(B, ar(B)), W = {}, S = ai(x), g;
  try {
    for (S.s(); !(g = S.n()).done; ) {
      var L = g.value;
      if (!L.validate(G, X))
        return /* @__PURE__ */ new Date(NaN);
      var Oe = L.set(G, W, X);
      Array.isArray(Oe) ? (G = Oe[0], Zs(W, Oe[1])) : G = Oe;
    }
  } catch (ae) {
    S.e(ae);
  } finally {
    S.f();
  }
  return G;
}
function Py(e) {
  return e.match($y)[1].replace(Oy, "'");
}
function Ty(e, t) {
  oe(2, arguments);
  var n = fe(t);
  return Et(e, -n);
}
function Cy(e, t) {
  var n;
  oe(1, arguments);
  var r = fe((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Iy(e), o;
  if (a.date) {
    var l = Ny(a.date, r);
    o = By(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var u = o.getTime(), d = 0, p;
  if (a.time && (d = Ay(a.time), isNaN(d)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (p = Ey(a.timezone), isNaN(p))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var w = new Date(u + d), y = /* @__PURE__ */ new Date(0);
    return y.setFullYear(w.getUTCFullYear(), w.getUTCMonth(), w.getUTCDate()), y.setHours(w.getUTCHours(), w.getUTCMinutes(), w.getUTCSeconds(), w.getUTCMilliseconds()), y;
  }
  return new Date(u + d + p);
}
var dn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Dy = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, My = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Ry = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Iy(e) {
  var t = {}, n = e.split(dn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], dn.timeZoneDelimiter.test(t.date) && (t.date = e.split(dn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = dn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function Ny(e, t) {
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
function By(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(Dy);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = on(n[1]), o = on(n[2]) - 1, l = on(n[3]), u = on(n[4]), d = on(n[5]) - 1;
  if (r)
    return Wy(t, u, d) ? Yy(t, u, d) : /* @__PURE__ */ new Date(NaN);
  var p = /* @__PURE__ */ new Date(0);
  return !Fy(t, o, l) || !Uy(t, a) ? /* @__PURE__ */ new Date(NaN) : (p.setUTCFullYear(t, o, Math.max(a, l)), p);
}
function on(e) {
  return e ? parseInt(e) : 1;
}
function Ay(e) {
  var t = e.match(My);
  if (!t)
    return NaN;
  var n = Xr(t[1]), r = Xr(t[2]), a = Xr(t[3]);
  return Ly(n, r, a) ? n * Co + r * To + a * 1e3 : NaN;
}
function Xr(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function Ey(e) {
  if (e === "Z")
    return 0;
  var t = e.match(Ry);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return Hy(r, a) ? n * (r * Co + a * To) : NaN;
}
function Yy(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Vy = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Hi(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Fy(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Vy[t] || (Hi(e) ? 29 : 28));
}
function Uy(e, t) {
  return t >= 1 && t <= (Hi(e) ? 366 : 365);
}
function Wy(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Ly(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Hy(e, t) {
  return t >= 0 && t <= 59;
}
function cn(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t), a = n.getFullYear(), o = n.getDate(), l = /* @__PURE__ */ new Date(0);
  l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
  var u = Ks(l);
  return n.setMonth(r, Math.min(o, u)), n;
}
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function rt(e, t) {
  if (oe(2, arguments), Jn(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = ye(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = cn(n, t.month)), t.date != null && n.setDate(fe(t.date)), t.hours != null && n.setHours(fe(t.hours)), t.minutes != null && n.setMinutes(fe(t.minutes)), t.seconds != null && n.setSeconds(fe(t.seconds)), t.milliseconds != null && n.setMilliseconds(fe(t.milliseconds)), n);
}
function zi(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return n.setHours(r), n;
}
function Eo(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return n.setMilliseconds(r), n;
}
function ji(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return n.setMinutes(r), n;
}
function qi(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return n.setSeconds(r), n;
}
function zt(e, t) {
  oe(2, arguments);
  var n = ye(e), r = fe(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function Kt(e, t) {
  oe(2, arguments);
  var n = fe(t);
  return xt(e, -n);
}
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function zy(e, t) {
  if (oe(2, arguments), !t || er(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? fe(t.years) : 0, r = t.months ? fe(t.months) : 0, a = t.weeks ? fe(t.weeks) : 0, o = t.days ? fe(t.days) : 0, l = t.hours ? fe(t.hours) : 0, u = t.minutes ? fe(t.minutes) : 0, d = t.seconds ? fe(t.seconds) : 0, p = Kt(e, r + n * 12), w = Ty(p, o + a * 7), y = u + l * 60, s = d + y * 60, h = s * 1e3, O = new Date(w.getTime() - h);
  return O;
}
function jy(e, t) {
  oe(2, arguments);
  var n = fe(t);
  return Pi(e, -n);
}
function Hr() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      V("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      V("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      V("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function qy() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      V("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function li() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function ii() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Gi() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      V("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Qi() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Zi() {
  return m(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      V("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const ui = (e, t, n, r) => {
  const a = wo(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return un(a) && Ti(a) ? r ? a : rt(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, Gy = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return ui(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const l of t)
      if (o = ui(e, l, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, Y = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Qy = (e, t) => {
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
}, Pt = (e) => {
  let t = Y(JSON.parse(JSON.stringify(e)));
  return t = zi(t, 0), t = ji(t, 0), t = qi(t, 0), t = Eo(t, 0), t;
}, ht = (e, t, n, r) => {
  let a = e ? Y(e) : Y();
  return (t || t === 0) && (a = zi(a, +t)), (n || n === 0) && (a = ji(a, +n)), (r || r === 0) && (a = qi(a, +r)), Eo(a, 0);
}, at = (e, t) => !e || !t ? !1 : Ro(Pt(e), Pt(t)), Ve = (e, t) => !e || !t ? !1 : Ei(Pt(e), Pt(t)), ct = (e, t) => !e || !t ? !1 : Mo(Pt(e), Pt(t)), Xi = (e, t, n) => e && e[0] && e[1] ? ct(n, e[0]) && at(n, e[1]) : e && e[0] && t ? ct(n, e[0]) && at(n, t) || at(n, e[0]) && ct(n, t) : !1, ln = At({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ki = () => {
  const e = (n) => {
    ln.menuFocused = n;
  }, t = (n) => {
    ln.shiftKeyInMenu !== n && (ln.shiftKeyInMenu = n);
  };
  return {
    control: k(() => ({ shiftKeyInMenu: ln.shiftKeyInMenu, menuFocused: ln.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function Yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = {}, Zy = {
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
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(Zy, Vr);
const Xy = /* @__PURE__ */ Yo(Vr);
var Fr = {}, Ky = {
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
})(Ky, Fr);
const si = /* @__PURE__ */ Yo(Fr);
function Jy(e, t) {
  var n = rm(t);
  return n.formatToParts ? tm(n, e) : nm(n, e);
}
var em = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function tm(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = em[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function nm(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var Kr = {};
function rm(e) {
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
function Vo(e, t, n, r, a, o, l) {
  var u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(e, t, n), u.setUTCHours(r, a, o, l), u;
}
var ci = 36e5, am = 6e4, Jr = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Fo(e, t, n) {
  var r, a;
  if (!e || (r = Jr.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = Jr.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), fi(o) ? -(o * ci) : NaN;
  if (r = Jr.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var l = parseInt(r[2], 10);
    return fi(o, l) ? (a = Math.abs(o) * ci + l * am, o > 0 ? -a : a) : NaN;
  }
  if (im(e)) {
    t = new Date(t || Date.now());
    var u = n ? t : om(t), d = ko(u, e), p = n ? d : lm(t, d, e);
    return -p;
  }
  return NaN;
}
function om(e) {
  return Vo(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function ko(e, t) {
  var n = Jy(e, t), r = Vo(
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
function lm(e, t, n) {
  var r = e.getTime(), a = r - t, o = ko(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var l = ko(new Date(a), n);
  return o === l ? o : Math.max(o, l);
}
function fi(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var di = {};
function im(e) {
  if (di[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), di[e] = !0, !0;
  } catch {
    return !1;
  }
}
var um = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Ji = um;
var ea = 36e5, pi = 6e4, sm = 2, st = {
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
  timeZone: Ji
};
function $o(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? sm : Xy(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = cm(e), o = fm(a.date, r), l = o.year, u = o.restDateString, d = dm(u, l);
  if (isNaN(d))
    return /* @__PURE__ */ new Date(NaN);
  if (d) {
    var p = d.getTime(), w = 0, y;
    if (a.time && (w = pm(a.time), isNaN(w)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (y = Fo(a.timeZone || n.timeZone, new Date(p + w)), isNaN(y))
        return /* @__PURE__ */ new Date(NaN);
    } else
      y = si(new Date(p + w)), y = si(new Date(p + w + y));
    return new Date(p + w + y);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function cm(e) {
  var t = {}, n = st.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = st.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = st.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function fm(e, t) {
  var n = st.YYY[t], r = st.YYYYY[t], a;
  if (a = st.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = st.YY.exec(e) || n.exec(e), a) {
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
function dm(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = st.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, mi(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = st.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var l = parseInt(n[1], 10);
    return vm(t, l) ? (r.setUTCFullYear(t, 0, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = st.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var u = parseInt(n[2], 10);
    return mi(t, a, u) ? (r.setUTCFullYear(t, a, u), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = st.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, vi(t, o) ? yi(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = st.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var d = parseInt(n[2], 10) - 1;
    return vi(t, o, d) ? yi(t, o, d) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function pm(e) {
  var t, n, r;
  if (t = st.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ta(n) ? n % 24 * ea : NaN;
  if (t = st.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ta(n, r) ? n % 24 * ea + r * pi : NaN;
  if (t = st.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ta(n, r, a) ? n % 24 * ea + r * pi + a * 1e3 : NaN;
  }
  return null;
}
function yi(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var ym = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mm = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function eu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function mi(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = eu(e);
    if (r && n > mm[t] || !r && n > ym[t])
      return !1;
  }
  return !0;
}
function vm(e, t) {
  if (t < 1)
    return !1;
  var n = eu(e);
  return !(n && t > 366 || !n && t > 365);
}
function vi(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ta(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ur = {}, hm = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Wr = {}, gm = {
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
})(gm, Wr);
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
})(hm, Ur);
const _m = /* @__PURE__ */ Yo(Ur);
function bm(e, t, n) {
  var r = $o(e, n), a = Fo(t, r, !0), o = new Date(r.getTime() - a), l = /* @__PURE__ */ new Date(0);
  return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
}
function wm(e, t, n) {
  if (typeof e == "string" && !e.match(Ji)) {
    var r = _m(n);
    return r.timeZone = t, $o(e, r);
  }
  var a = $o(e, n), o = Vo(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), l = Fo(t, new Date(o));
  return new Date(o + l);
}
const km = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, $m = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Om = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, xm = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Sm = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ze = (e) => {
  const t = c(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Pm = (e) => Object.assign({ type: "dot" }, e), tu = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, tt = (e) => e, hi = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, gi = (e) => Object.assign(
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
), Tm = (e) => Object.assign(
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
), Cm = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Dm = (e, t, n) => e || (typeof n == "string" ? n : t), Mm = (e) => typeof e == "boolean" ? e ? gi({}) : !1 : gi(e), Rm = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Im = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), vt = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lr.prop("partial-range"));
  }, n = k(() => ({
    ariaLabels: Tm(e.ariaLabels),
    textInputOptions: Object.assign(Rm(), e.textInputOptions),
    multiCalendars: Cm(e.multiCalendars),
    previewFormat: Dm(e.previewFormat, e.format, o()),
    filters: Im(e.filters),
    transitions: Mm(e.transitions),
    startTime: s()
  })), r = (i) => {
    if (e.range)
      return i();
    throw new Error(Lr.prop("range"));
  }, a = () => {
    const i = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${i}` : `hh:mm${i} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", l = (i, f) => {
    if (typeof e.format == "function")
      return e.format(i);
    const $ = f || o(), x = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(i) ? `${sn(i[0], $, x)} ${e.modelAuto && !i[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${i[1] ? sn(i[1], $, x) : ""}` : sn(i, $, x);
  }, u = (i) => e.timezone ? bm(i, e.timezone) : i, d = (i) => e.timezone ? wm(i, e.timezone) : i, p = k(() => (i) => {
    var f;
    return (f = e.hideNavigation) == null ? void 0 : f.includes(i);
  }), w = (i) => {
    const f = e.maxDate ? ct(u(i), u(Y(e.maxDate))) : !1, $ = e.minDate ? at(u(i), u(Y(e.minDate))) : !1, x = j(i, e.disabledDates), B = n.value.filters.months.map((L) => +L).includes(Ae(i)), G = e.disabledWeekDays.length ? e.disabledWeekDays.some((L) => +L === Xs(i)) : !1, W = e.allowedDates.length ? !e.allowedDates.some((L) => Ve(u(Y(L)), u(i))) : !1, S = Ee(i), g = S < +e.yearRange[0] || S > +e.yearRange[1];
    return !(f || $ || x || B || g || G || W);
  }, y = (i) => {
    const f = {
      hours: Rt(Y()),
      minutes: It(Y()),
      seconds: e.enableSeconds ? tn(Y()) : 0
    };
    return Object.assign(f, i);
  }, s = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [y(e.startTime[0]), y(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? y(e.startTime) : null, h = (i) => !w(i), O = (i) => Array.isArray(i) ? un(i[0]) && (i[1] ? un(i[1]) : !0) : i ? un(i) : !1, N = (i) => i instanceof Date ? i : Cy(i), I = (i) => {
    const f = jt(u(i), { weekStartsOn: +e.weekStart }), $ = ju(u(i), { weekStartsOn: +e.weekStart });
    return [f, $];
  }, j = (i, f) => Array.isArray(f) ? f.some(($) => Ve(u(Y($)), u(i))) : f(i), H = (i, f, $) => {
    let x = i ? Y(i) : Y();
    return (f || f === 0) && (x = cn(x, f)), $ && (x = zt(x, $)), x;
  }, D = (i) => rt(Y(), { hours: Rt(i), minutes: It(i), seconds: tn(i) }), z = (i) => rt(Y(), {
    hours: +i.hours || 0,
    minutes: +i.minutes || 0,
    seconds: +i.seconds || 0
  }), K = (i, f, $, x) => {
    if (!i)
      return !0;
    if (x) {
      const B = $ === "max" ? Ro(i, f) : Mo(i, f), G = { seconds: 0, milliseconds: 0 };
      return B || Ei(rt(i, G), rt(f, G));
    }
    return $ === "max" ? i.getTime() <= f.getTime() : i.getTime() >= f.getTime();
  }, Z = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, te = (i) => Array.isArray(i) ? [i[0] ? D(i[0]) : null, i[1] ? D(i[1]) : null] : D(i), T = (i) => {
    const f = e.maxTime ? z(e.maxTime) : Y(e.maxDate);
    return Array.isArray(i) ? K(i[0], f, "max", !!e.maxDate) && K(i[1], f, "max", !!e.maxDate) : K(i, f, "max", !!e.maxDate);
  }, _ = (i, f) => {
    const $ = e.minTime ? z(e.minTime) : Y(e.minDate);
    return Array.isArray(i) ? K(i[0], $, "min", !!e.minDate) && K(i[1], $, "min", !!e.minDate) && f : K(i, $, "min", !!e.minDate) && f;
  }, b = (i) => {
    let f = !0;
    if (!i || Z())
      return !0;
    const $ = !e.minDate && !e.maxDate ? te(i) : i;
    return (e.maxTime || e.maxDate) && (f = T(tt($))), (e.minTime || e.minDate) && (f = _(tt($), f)), f;
  }, C = (i, f) => {
    const $ = Y(JSON.parse(JSON.stringify(i))), x = [];
    for (let B = 0; B < 7; B++) {
      const G = Et($, B), W = Ae(G) !== f;
      x.push({
        text: e.hideOffsetDates && W ? "" : G.getDate(),
        value: G,
        current: !W,
        classData: {}
      });
    }
    return x;
  }, X = (i, f) => {
    const $ = [], x = Y(u(new Date(f, i))), B = Y(u(new Date(f, i + 1, 0))), G = jt(x, { weekStartsOn: e.weekStart }), W = (S) => {
      const g = C(S, i);
      if ($.push({ days: g }), !$[$.length - 1].days.some(
        (L) => Ve(Pt(L.value), Pt(B))
      )) {
        const L = Et(S, 7);
        W(L);
      }
    };
    if (W(G), e.sixWeeks && $.length < 6) {
      const S = 6 - $.length;
      for (let g = 1; g <= S; g++) {
        const L = $[$.length - 1], Oe = L.days[L.days.length - 1], ae = C(Et(Oe.value, 1), Ae(x));
        $.push({ days: ae });
      }
    }
    return $;
  }, J = (i, f, $) => [rt(Y(i), { date: 1 }), rt(Y(), { month: f, year: $, date: 1 })], le = (i, f) => at(...J(e.minDate, i, f)) || Ve(...J(e.minDate, i, f)), ee = (i, f) => ct(...J(e.maxDate, i, f)) || Ve(...J(e.maxDate, i, f)), F = (i, f, $) => {
    let x = !1;
    return e.maxDate && $ && ee(i, f) && (x = !0), e.minDate && !$ && le(i, f) && (x = !0), x;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: u,
    getZonedToUtc: d,
    formatDate: l,
    getDefaultPattern: o,
    validateDate: w,
    getDefaultStartTime: s,
    isDisabled: h,
    isValidDate: O,
    sanitizeDate: N,
    getWeekFromDate: I,
    matchDate: j,
    setDateMonthOrYear: H,
    isValidTime: b,
    getCalendarDays: X,
    validateMonthYearInRange: (i, f, $, x) => {
      let B = !1;
      return x ? e.minDate && e.maxDate ? B = F(i, f, $) : (e.minDate && le(i, f) || e.maxDate && ee(i, f)) && (B = !0) : B = !0, B;
    },
    validateMaxDate: ee,
    validateMinDate: le,
    assignDefaultTime: y,
    defaults: n,
    hideNavigationButtons: p
  };
}, Be = At({
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
}), na = M(null), pn = M(!1), ra = M(!1), aa = M(!1), oa = M(!1), ut = M(0), Je = M(0), Ft = () => {
  const e = k(() => pn.value ? [...Be.selectionGrid, Be.actionRow].filter((y) => y.length) : ra.value ? [
    ...Be.timePicker[0],
    ...Be.timePicker[1],
    oa.value ? [] : [na.value],
    Be.actionRow
  ].filter((y) => y.length) : aa.value ? [...Be.monthPicker, Be.actionRow] : [Be.monthYear, ...Be.calendar, Be.time, Be.actionRow].filter((y) => y.length)), t = (y) => {
    ut.value = y ? ut.value + 1 : ut.value - 1;
    let s = null;
    e.value[Je.value] && (s = e.value[Je.value][ut.value]), s || (ut.value = y ? ut.value - 1 : ut.value + 1);
  }, n = (y) => {
    Je.value === 0 && !y || Je.value === e.value.length && y || (Je.value = y ? Je.value + 1 : Je.value - 1, e.value[Je.value] ? e.value[Je.value] && !e.value[Je.value][ut.value] && ut.value !== 0 && (ut.value = e.value[Je.value].length - 1) : Je.value = y ? Je.value - 1 : Je.value + 1);
  }, r = (y) => {
    let s = null;
    e.value[Je.value] && (s = e.value[Je.value][ut.value]), s ? s.focus({ preventScroll: !pn.value }) : ut.value = y ? ut.value - 1 : ut.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, l = () => {
    n(!1), r(!0);
  }, u = () => {
    n(!0), r(!0);
  }, d = (y, s) => {
    Be[s] = y;
  }, p = (y, s) => {
    Be[s] = y;
  }, w = () => {
    ut.value = 0, Je.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: p,
    setTimePickerBackRef: (y) => {
      na.value = y;
    },
    setSelectionGrid: (y) => {
      pn.value = y, w(), y || (Be.selectionGrid = []);
    },
    setTimePicker: (y, s = !1) => {
      ra.value = y, oa.value = s, w(), y || (Be.timePicker[0] = [], Be.timePicker[1] = []);
    },
    setTimePickerElements: (y, s = 0) => {
      Be.timePicker[s] = y;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: l,
    arrowDown: u,
    clearArrowNav: () => {
      Be.monthYear = [], Be.calendar = [], Be.time = [], Be.actionRow = [], Be.selectionGrid = [], Be.timePicker[0] = [], Be.timePicker[1] = [], pn.value = !1, ra.value = !1, oa.value = !1, aa.value = !1, w(), na.value = null;
    },
    setMonthPicker: (y) => {
      aa.value = y, w();
    },
    refSets: Be
    // exposed for testing
  };
}, _i = (e) => Array.isArray(e), Wt = (e) => Array.isArray(e), bi = (e) => Array.isArray(e) && e.length === 2, Nm = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: l,
    sanitizeDate: u,
    getWeekFromDate: d,
    setDateMonthOrYear: p,
    validateMonthYearInRange: w,
    defaults: y
  } = vt(e), s = k({
    get: () => e.internalModelValue,
    set: (v) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", v);
    }
  }), h = M([]);
  bt(s, () => {
    K();
  });
  const O = M([{ month: Ae(Y()), year: Ee(Y()) }]), N = At({
    hours: e.range ? [Rt(Y()), Rt(Y())] : Rt(Y()),
    minutes: e.range ? [It(Y()), It(Y())] : It(Y()),
    seconds: e.range ? [0, 0] : 0
  }), I = k(
    () => (v) => O.value[v] ? O.value[v].month : 0
  ), j = k(
    () => (v) => O.value[v] ? O.value[v].year : 0
  ), H = k(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), D = (v, E, ue) => {
    var ce, Fe;
    O.value[v] || (O.value[v] = { month: 0, year: 0 }), O.value[v].month = E === null ? (ce = O.value[v]) == null ? void 0 : ce.month : E, O.value[v].year = ue === null ? (Fe = O.value[v]) == null ? void 0 : Fe.year : ue;
  }, z = (v, E) => {
    N[v] = E;
  };
  ft(() => {
    s.value || (e.startDate && (D(0, Ae(Y(e.startDate)), Ee(Y(e.startDate))), y.value.multiCalendars && De(0)), y.value.startTime && ee()), K(!0);
  });
  const K = (v = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (h.value = s.value, b(v)) : te(s.value);
    if (e.timePicker)
      return C();
    if (e.monthPicker && !e.range)
      return X();
    if (e.yearPicker && !e.range)
      return J();
    if (y.value.multiCalendars && v && !e.startDate)
      return Z(Y(), v);
  }, Z = (v, E = !1) => {
    if ((!y.value.multiCalendars || !e.multiStatic || E) && D(0, Ae(v), Ee(v)), y.value.multiCalendars)
      for (let ue = 1; ue < y.value.multiCalendars; ue++) {
        const ce = rt(Y(), { month: I.value(ue - 1), year: j.value(ue - 1) }), Fe = Si(ce, { months: 1 });
        O.value[ue] = { month: Ae(Fe), year: Ee(Fe) };
      }
  }, te = (v) => {
    Z(v), z("hours", Rt(v)), z("minutes", It(v)), z("seconds", tn(v));
  }, T = (v, E) => {
    Z(v[0], E);
    const ue = (ce, Fe) => [
      ce(v[0]),
      v[1] ? ce(v[1]) : N[Fe][1]
    ];
    z("hours", ue(Rt, "hours")), z("minutes", ue(It, "minutes")), z("seconds", ue(tn, "seconds"));
  }, _ = (v, E) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return T(v, E);
    if (e.multiDates) {
      const ue = v[v.length - 1];
      return te(ue);
    }
  }, b = (v) => {
    const E = s.value;
    _(E, v), y.value.multiCalendars && e.multiCalendarsSolo && i();
  }, C = () => {
    if (ee(), !e.range)
      s.value = ht(Y(), N.hours, N.minutes, le());
    else {
      const v = N.hours, E = N.minutes;
      s.value = [
        ht(Y(), v[0], E[0], le()),
        ht(Y(), v[1], E[1], le(!1))
      ];
    }
  }, X = () => {
    s.value = p(Y(), I.value(0), j.value(0));
  }, J = () => {
    s.value = Y();
  }, le = (v = !0) => e.enableSeconds ? Array.isArray(N.seconds) ? v ? N.seconds[0] : N.seconds[1] : N.seconds : 0, ee = () => {
    const v = o();
    if (v) {
      const E = Array.isArray(v), ue = E ? [+v[0].hours, +v[1].hours] : +v.hours, ce = E ? [+v[0].minutes, +v[1].minutes] : +v.minutes, Fe = E ? [+v[0].seconds, +v[1].seconds] : +v.seconds;
      z("hours", ue), z("minutes", ce), e.enableSeconds && z("seconds", Fe);
    }
  }, F = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, i = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const v = Y(
        Y(s.value[1] ? s.value[1] : xt(s.value[0], 1))
      ), [E, ue] = [Ae(s.value[0]), Ee(s.value[0])], [ce, Fe] = [Ae(s.value[1]), Ee(s.value[1])];
      (E !== ce || E === ce && ue !== Fe) && e.multiCalendarsSolo && D(1, Ae(v), Ee(v));
    }
  }, f = (v) => {
    const E = xt(v, 1);
    return { month: Ae(E), year: Ee(E) };
  }, $ = (v) => {
    const E = Ae(Y(v)), ue = Ee(Y(v));
    if (D(0, E, ue), y.value.multiCalendars > 0)
      for (let ce = 1; ce < y.value.multiCalendars; ce++) {
        const Fe = f(
          rt(Y(v), { year: I.value(ce - 1), month: j.value(ce - 1) })
        );
        D(ce, Fe.month, Fe.year);
      }
  }, x = (v) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((E) => Ve(v, E))) {
        const E = s.value.filter((ue) => !Ve(ue, v));
        s.value = E.length ? E : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(v);
    else
      s.value = [v];
  }, B = (v, E) => {
    const ue = ct(v, E) ? E : v, ce = ct(E, v) ? E : v;
    return jo({ start: ue, end: ce });
  }, G = (v, E = 0) => {
    if (Array.isArray(s.value) && s.value[E]) {
      const ue = Hu(v, s.value[E]), ce = B(s.value[E], v), Fe = ce.length === 1 ? 0 : ce.filter((Mt) => l(Mt)).length, mt = Math.abs(ue) - Fe;
      if (e.minRange && e.maxRange)
        return mt >= +e.minRange && mt <= +e.maxRange;
      if (e.minRange)
        return mt >= +e.minRange;
      if (e.maxRange)
        return mt <= +e.maxRange;
    }
    return !0;
  }, W = (v) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (ct(v, s.value[0]) || Ve(v, s.value[0])) ? [s.value[0], v] : e.fixedEnd && (at(v, s.value[1]) || Ve(v, s.value[1])) ? [v, s.value[1]] : (t("invalid-fixed-range", v), s.value) : [], S = () => {
    e.autoApply && H.value && t("auto-apply", e.partialFlow);
  }, g = () => {
    e.autoApply && t("select-date");
  }, L = (v) => !jo({ start: v[0], end: v[1] }).some((E) => l(E)), Oe = (v) => (s.value = d(Y(v.value)), S()), ae = (v) => {
    const E = ht(Y(v.value), N.hours, N.minutes, le());
    e.multiDates ? x(E) : s.value = E, n(), S();
  }, de = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Re = (v, E) => {
    const ue = [Y(v.value), Et(Y(v.value), +e.autoRange)];
    L(ue) && (E && $(v.value), h.value = ue);
  }, ot = (v) => {
    ve(v.value) || !G(v.value, e.fixedStart ? 0 : 1) || (h.value = W(Y(v.value)));
  }, ve = (v) => e.noDisabledRange ? B(h.value[0], v).some((E) => l(E)) : !1, dt = (v, E) => {
    if (de(), e.autoRange)
      return Re(v, E);
    if (e.fixedStart || e.fixedEnd)
      return ot(v);
    h.value[0] ? G(Y(v.value)) && !ve(v.value) && (at(Y(v.value), Y(h.value[0])) ? h.value.unshift(Y(v.value)) : h.value[1] = Y(v.value)) : h.value[0] = Y(v.value);
  }, et = (v) => {
    h.value[v] = ht(
      h.value[v],
      N.hours[v],
      N.minutes[v],
      le(v !== 1)
    );
  }, He = () => {
    h.value.length && (h.value[0] && !h.value[1] ? et(0) : (et(0), et(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Ct = (v, E = !1) => {
    if (!(l(v.value) || !v.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return Oe(v);
      if (!e.range)
        return ae(v);
      Wt(N.hours) && Wt(N.minutes) && !e.multiDates && (dt(v, E), He());
    }
  }, he = (v) => {
    const E = v[0];
    return e.weekNumbers === "local" ? ac(E.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? ec(E.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(E.value) : "";
  }, De = (v) => {
    for (let E = v - 1; E >= 0; E--) {
      const ue = Kt(rt(Y(), { month: I.value(E + 1), year: j.value(E + 1) }), 1);
      D(E, Ae(ue), Ee(ue));
    }
    for (let E = v + 1; E <= y.value.multiCalendars - 1; E++) {
      const ue = xt(rt(Y(), { month: I.value(E - 1), year: j.value(E - 1) }), 1);
      D(E, Ae(ue), Ee(ue));
    }
  }, Se = (v) => p(Y(), I.value(v), j.value(v)), Dt = (v) => ht(v, N.hours, N.minutes, le()), U = (v, E) => {
    const ue = e.monthPicker ? I.value(v) !== E.month || !E.fromNav : j.value(v) !== E.year;
    if (D(v, E.month, E.year), y.value.multiCalendars && !e.multiCalendarsSolo && De(v), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (ue) {
          let ce = s.value ? s.value.slice() : [];
          ce.length === 2 && ce[1] !== null && (ce = []), ce.length ? at(Se(v), ce[0]) ? ce.unshift(Se(v)) : ce[1] = Se(v) : ce = [Se(v)], s.value = ce;
        }
      } else
        s.value = Se(v);
    t("update-month-year", { instance: v, month: E.month, year: E.year }), r(e.multiCalendarsSolo ? v : void 0);
  }, q = async (v = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await St();
      const E = e.monthPicker ? v : !1;
      e.range ? t("auto-apply", E || !s.value || s.value.length === 1) : t("auto-apply", E);
    }
    n();
  }, me = (v, E) => {
    const ue = rt(Y(), { month: I.value(E), year: j.value(E) }), ce = v < 0 ? xt(ue, 1) : Kt(ue, 1);
    w(Ae(ce), Ee(ce), v < 0, e.preventMinMaxNavigation) && (D(E, Ae(ce), Ee(ce)), y.value.multiCalendars && !e.multiCalendarsSolo && De(E), t("update-month-year", { instance: E, month: Ae(ce), year: Ee(ce) }), r());
  }, _e = (v) => {
    _i(v) && _i(s.value) && Wt(N.hours) && Wt(N.minutes) ? (v[0] && s.value[0] && (s.value[0] = ht(v[0], N.hours[0], N.minutes[0], le())), v[1] && s.value[1] && (s.value[1] = ht(v[1], N.hours[1], N.minutes[1], le(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Dt(v) : !e.range && !bi(v) && (s.value = Dt(v)), t("time-update");
  }, Ye = (v, E = !0, ue = !1) => {
    const ce = E ? v : N.hours, Fe = !E && !ue ? v : N.minutes, mt = ue ? v : N.seconds;
    if (e.range && bi(s.value) && Wt(ce) && Wt(Fe) && Wt(mt) && !e.disableTimeRangeValidation) {
      const Mt = (A) => ht(s.value[A], ce[A], Fe[A], mt[A]), nn = (A) => Eo(s.value[A], 0);
      if (Ve(s.value[0], s.value[1]) && (Mo(Mt(0), nn(1)) || Ro(Mt(1), nn(0))))
        return;
    }
    if (z("hours", ce), z("minutes", Fe), z("seconds", mt), s.value)
      if (e.multiDates) {
        const Mt = F();
        Mt && _e(Mt);
      } else
        _e(s.value);
    else
      e.timePicker && _e(e.range ? [Y(), Y()] : Y());
    n();
  }, Ie = (v, E) => {
    e.monthChangeOnScroll && me(e.monthChangeOnScroll !== "inverse" ? -v.deltaY : v.deltaY, E);
  }, Te = (v, E, ue = !1) => {
    e.monthChangeOnArrows && e.vertical === ue && lt(v, E);
  }, lt = (v, E) => {
    me(v === "right" ? -1 : 1, E);
  };
  return {
    time: N,
    month: I,
    year: j,
    modelValue: s,
    calendars: O,
    monthYearSelect: q,
    isDisabled: l,
    updateTime: Ye,
    getWeekNum: he,
    selectDate: Ct,
    updateMonthYear: U,
    handleScroll: Ie,
    getMarker: (v) => e.markers.find((E) => Ve(u(v.value), u(E.date))),
    handleArrow: Te,
    handleSwipe: lt,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = at(Y(), s.value[0]) ? [Y(), s.value[0]] : [s.value[0], Y()] : s.value = [Y()] : s.value = Y(), g();
    },
    presetDateRange: (v, E) => {
      E || v.length && v.length <= 2 && e.range && (s.value = v.map((ue) => Y(ue)), g(), e.multiCalendars && St().then(() => K(!0)));
    }
  };
}, Bm = (e, t, n) => {
  const r = M(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: l,
    getDefaultPattern: u,
    checkRangeEnabled: d,
    checkPartialRangeValue: p,
    isValidDate: w,
    setDateMonthOrYear: y,
    defaults: s
  } = vt(t), h = M(""), O = nr(t, "format");
  bt(r, () => {
    e("internal-model-change", r.value);
  }), bt(O, () => {
    f();
  });
  const N = (S) => {
    const g = S || Y();
    return t.modelType ? x(g) : {
      hours: Rt(g),
      minutes: It(g),
      seconds: t.enableSeconds ? tn(g) : 0
    };
  }, I = (S) => t.modelType ? x(S) : { month: Ae(S), year: Ee(S) }, j = (S) => Array.isArray(S) ? d(() => [
    zt(Y(), S[0]),
    S[1] ? zt(Y(), S[1]) : p()
  ]) : zt(Y(), +S), H = (S, g) => (typeof S == "string" || typeof S == "number") && t.modelType ? $(S) : g, D = (S) => Array.isArray(S) ? [
    H(
      S[0],
      ht(null, +S[0].hours, +S[0].minutes, S[0].seconds)
    ),
    H(
      S[1],
      ht(null, +S[1].hours, +S[1].minutes, S[1].seconds)
    )
  ] : H(S, ht(null, S.hours, S.minutes, S.seconds)), z = (S) => Array.isArray(S) ? d(() => [
    H(S[0], y(null, +S[0].month, +S[0].year)),
    H(
      S[1],
      S[1] ? y(null, +S[1].month, +S[1].year) : p()
    )
  ]) : H(S, y(null, +S.month, +S.year)), K = (S) => {
    if (Array.isArray(S))
      return S.map((g) => $(g));
    throw new Error(Lr.dateArr("multi-dates"));
  }, Z = (S) => {
    if (Array.isArray(S))
      return [Y(S[0]), Y(S[1])];
    throw new Error(Lr.dateArr("week-picker"));
  }, te = (S) => t.modelAuto ? Array.isArray(S) ? [$(S[0]), $(S[1])] : t.autoApply ? [$(S)] : [$(S), null] : Array.isArray(S) ? d(() => [
    $(S[0]),
    S[1] ? $(S[1]) : p()
  ]) : $(S), T = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(p());
  }, _ = () => {
    const S = r.value;
    return [
      x(S[0]),
      S[1] ? x(S[1]) : p()
    ];
  }, b = () => r.value[1] ? _() : x(tt(r.value[0])), C = () => (r.value || []).map((S) => x(S)), X = () => (T(), t.modelAuto ? b() : t.multiDates ? C() : Array.isArray(r.value) ? d(() => _()) : x(tt(r.value))), J = (S) => S ? t.timePicker ? D(tt(S)) : t.monthPicker ? z(tt(S)) : t.yearPicker ? j(tt(S)) : t.multiDates ? K(tt(S)) : t.weekPicker ? Z(tt(S)) : te(tt(S)) : null, le = (S) => {
    const g = J(S);
    w(tt(g)) ? (r.value = tt(g), f()) : (r.value = null, h.value = "");
  }, ee = () => {
    var S;
    const g = (L) => {
      var Oe;
      return sn(L, (Oe = s.value.textInputOptions) == null ? void 0 : Oe.format);
    };
    return `${g(r.value[0])} ${(S = s.value.textInputOptions) == null ? void 0 : S.rangeSeparator} ${r.value[1] ? g(r.value[1]) : ""}`;
  }, F = () => {
    var S;
    return n.value && r.value ? Array.isArray(r.value) ? ee() : sn(r.value, (S = s.value.textInputOptions) == null ? void 0 : S.format) : l(r.value);
  }, i = () => {
    var S;
    return r.value ? t.multiDates ? r.value.map((g) => l(g)).join("; ") : t.textInput && typeof ((S = s.value.textInputOptions) == null ? void 0 : S.format) == "string" ? F() : l(r.value) : "";
  }, f = () => {
    !t.format || typeof t.format == "string" ? h.value = i() : h.value = t.format(r.value);
  }, $ = (S) => {
    if (t.utc) {
      const g = new Date(S);
      return t.utc === "preserve" ? new Date(g.getTime() + g.getTimezoneOffset() * 6e4) : g;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(S)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? wo(S, u(), /* @__PURE__ */ new Date()) : o(wo(S, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(S));
  }, x = (S) => S ? t.utc ? Qy(S, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(S) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? l(a(S)) : l(a(S), t.modelType) : a(S) : "", B = (S) => {
    e("update:model-value", S);
  }, G = (S) => Array.isArray(r.value) ? [
    S(r.value[0]),
    r.value[1] ? S(r.value[1]) : p()
  ] : S(tt(r.value)), W = (S) => B(tt(G(S)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: le,
    formatInputValue: f,
    emitModelValue: () => (f(), t.monthPicker ? W(I) : t.timePicker ? W(N) : t.yearPicker ? W(Ee) : t.weekPicker ? B(r.value) : B(X()))
  };
}, Am = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = vt(e), l = (y, s) => {
    let h = y;
    return o.value.filters.months.includes(Ae(h)) ? (h = s ? xt(y, 1) : Kt(y, 1), l(h, s)) : h;
  }, u = (y, s) => {
    let h = y;
    return o.value.filters.years.includes(Ee(h)) ? (h = s ? Pi(y, 1) : jy(y, 1), u(h, s)) : h;
  }, d = (y) => {
    const s = rt(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let h = y ? xt(s, 1) : Kt(s, 1), O = Ae(h), N = Ee(h);
    o.value.filters.months.includes(O) && (h = l(h, y), O = Ae(h), N = Ee(h)), o.value.filters.years.includes(N) && (h = u(h, y), N = Ee(h)), n(O, N, y, e.preventMinMaxNavigation) && p(O, N);
  }, p = (y, s) => {
    t("update-month-year", { month: y, year: s });
  }, w = k(() => (y) => {
    if (!e.preventMinMaxNavigation || y && !e.maxDate || !y && !e.minDate)
      return !1;
    const s = rt(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), h = y ? xt(s, 1) : Kt(s, 1), O = [Ae(h), Ee(h)];
    return y ? !r(...O) : !a(...O);
  });
  return { handleMonthYearChange: d, isDisabled: w, updateMonthYear: p };
};
var tr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(tr || {});
const Em = (e, t, n, r) => {
  const a = M({
    top: "0",
    left: "0",
    transform: "none"
  }), o = M(!1), l = nr(r, "teleportCenter");
  bt(l, () => {
    N();
  });
  const u = (T) => {
    if (r.teleport) {
      const _ = T.getBoundingClientRect();
      return {
        left: _.left + window.scrollX,
        top: _.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, d = (T, _) => {
    a.value.left = `${T + _}px`, a.value.transform = "translateX(-100%)";
  }, p = (T) => {
    a.value.left = `${T}px`, a.value.transform = "translateX(0)";
  }, w = (T, _, b = !1) => {
    r.position === tr.left && p(T), r.position === tr.right && d(T, _), r.position === tr.center && (a.value.left = `${T + _ / 2}px`, a.value.transform = b ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, y = (T) => {
    const { width: _, height: b } = T.getBoundingClientRect(), { top: C, left: X } = r.altPosition ? r.altPosition(T) : u(T);
    return { top: +C, left: +X, width: _, height: b };
  }, s = () => {
    const T = Ze(t);
    if (T) {
      const { top: _, left: b, width: C, height: X } = y(T);
      a.value.top = `${_ + X / 2}px`, a.value.transform = "translateY(-50%)", w(b, C, !0);
    }
  }, h = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, O = () => {
    const T = Ze(t), { top: _, left: b, transform: C } = r.altPosition(T);
    a.value = { top: `${_}px`, left: `${b}px`, transform: C || "" };
  }, N = (T = !0) => {
    if (!r.inline)
      return l.value ? h() : r.altPosition !== null ? O() : (T && n("recalculate-position"), K());
  }, I = ({
    inputEl: T,
    menuEl: _,
    left: b,
    width: C
  }) => {
    window.screen.width > 768 && w(b, C), D(T, _);
  }, j = (T, _) => {
    const { top: b, left: C, height: X, width: J } = y(T);
    a.value.top = `${X + b + +r.offset}px`, I({ inputEl: T, menuEl: _, left: C, width: J }), o.value = !1;
  }, H = (T, _) => {
    const { top: b, left: C, width: X } = y(T), { height: J } = _.getBoundingClientRect();
    a.value.top = `${b - J - +r.offset}px`, I({ inputEl: T, menuEl: _, left: C, width: X }), o.value = !0;
  }, D = (T, _) => {
    if (r.autoPosition) {
      const { left: b, width: C } = y(T), { left: X, right: J } = _.getBoundingClientRect();
      return X <= 0 || X <= b ? p(b) : J >= document.documentElement.clientWidth ? d(b, C) : w(b, C);
    }
  }, z = (T, _) => {
    const { height: b } = _.getBoundingClientRect(), { top: C, height: X } = T.getBoundingClientRect(), J = window.innerHeight - C - X, le = C;
    return b <= J ? j(T, _) : b > J && b <= le ? H(T, _) : J >= le ? j(T, _) : H(T, _);
  }, K = () => {
    const T = Ze(t), _ = Ze(e);
    if (T && _)
      return r.autoPosition ? z(T, _) : j(T, _);
  }, Z = function(T) {
    if (T) {
      const _ = T.scrollHeight > T.clientHeight, b = window.getComputedStyle(T).overflowY.indexOf("hidden") !== -1;
      return _ && !b;
    }
    return !0;
  }, te = function(T) {
    return !T || T === document.body ? window : Z(T) ? T : te(T.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: N, setInitialPosition: s, getScrollableParent: te };
}, Xt = [
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
], Ym = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Vm = {
  all: () => Xt,
  monthYear: () => Xt.filter((e) => e.use.includes("month-year")),
  input: () => Ym,
  timePicker: () => Xt.filter((e) => e.use.includes("time")),
  action: () => Xt.filter((e) => e.use.includes("action")),
  calendar: () => Xt.filter((e) => e.use.includes("calendar")),
  menu: () => Xt.filter((e) => e.use.includes("menu"))
}, Ht = (e, t, n) => {
  const r = [];
  return Vm[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, zr = (e) => ({ transitionName: k(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Ut = {
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
}, Fm = ["aria-label", "aria-disabled", "aria-readonly"], Um = {
  key: 1,
  class: "dp__input_wrap"
}, Wm = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Lm = {
  key: 2,
  class: "dp__input_icon"
}, Hm = {
  key: 4,
  class: "dp__clear_icon"
}, zm = /* @__PURE__ */ ge({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Ut
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
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: l, getDefaultStartTime: u, assignDefaultTime: d } = vt(r), p = M(), w = M(null), y = M(!1), s = k(
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
    ), h = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), p.value = null);
    }, O = (_) => {
      var b;
      const C = u();
      return Gy(
        _,
        ((b = l.value.textInputOptions) == null ? void 0 : b.format) || a(),
        C || d({}),
        r.inputValue
      );
    }, N = (_) => {
      const { rangeSeparator: b } = l.value.textInputOptions, [C, X] = _.split(`${b}`);
      if (C) {
        const J = O(C.trim()), le = X ? O(X.trim()) : null, ee = J && le ? [J, le] : [J];
        p.value = J ? ee : null;
      }
    }, I = (_) => {
      if (r.range)
        N(_);
      else if (r.multiDates) {
        const b = _.split(";");
        p.value = b.map((C) => O(C.trim())).filter((C) => C);
      } else
        p.value = O(_);
    }, j = (_) => {
      var b;
      const { value: C } = _.target;
      C !== "" ? ((b = l.value.textInputOptions) != null && b.openMenu && !r.isMenuOpen && n("open"), I(C), n("set-input-date", p.value)) : h(), n("update:input-value", C);
    }, H = () => {
      var _, b;
      (_ = l.value.textInputOptions) != null && _.enterSubmit && o(p.value) && r.inputValue !== "" ? (n("set-input-date", p.value, !0), p.value = null) : (b = l.value.textInputOptions) != null && b.enterSubmit && r.inputValue === "" && (p.value = null, n("clear"));
    }, D = () => {
      var _, b;
      (_ = l.value.textInputOptions) != null && _.tabSubmit && o(p.value) && r.inputValue !== "" ? (n("set-input-date", p.value, !0), p.value = null) : (b = l.value.textInputOptions) != null && b.tabSubmit && r.inputValue === "" && (p.value = null, n("clear"));
    }, z = () => {
      y.value = !0, n("focus");
    }, K = (_) => {
      var b;
      _.preventDefault(), _.stopImmediatePropagation(), _.stopPropagation(), r.textInput && (b = l.value.textInputOptions) != null && b.openMenu && !r.inlineWithInput ? r.isMenuOpen ? l.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, Z = () => {
      y.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && p.value && (n("set-input-date", p.value), n("select-date"), p.value = null);
    }, te = () => {
      n("clear");
    }, T = (_) => {
      r.textInput || _.preventDefault();
    };
    return t({
      focusInput: () => {
        w.value && w.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (_) => {
        p.value = _;
      }
    }), (_, b) => {
      var C;
      return m(), P("div", {
        onClick: K,
        "aria-label": (C = c(l).ariaLabels) == null ? void 0 : C.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": _.disabled,
        "aria-readonly": _.readonly
      }, [
        _.$slots.trigger && !_.$slots["dp-input"] && !_.inline ? Q(_.$slots, "trigger", { key: 0 }) : R("", !0),
        !_.$slots.trigger && (!_.inline || _.inlineWithInput) ? (m(), P("div", Um, [
          _.$slots["dp-input"] && !_.$slots.trigger && !_.inline ? Q(_.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: j,
            onEnter: H,
            onTab: D,
            onClear: te
          }) : R("", !0),
          _.$slots["dp-input"] ? R("", !0) : (m(), P("input", {
            key: 1,
            ref_key: "inputRef",
            ref: w,
            id: _.uid ? `dp-input-${_.uid}` : void 0,
            name: _.name,
            class: pe(c(s)),
            inputmode: _.textInput ? "text" : "none",
            placeholder: _.placeholder,
            disabled: _.disabled,
            readonly: _.readonly,
            required: _.required,
            value: e.inputValue,
            autocomplete: _.autocomplete,
            onInput: j,
            onKeydown: [
              we(K, ["enter"]),
              we(D, ["tab"]),
              T
            ],
            onBlur: Z,
            onFocus: z,
            onKeypress: T
          }, null, 42, Wm)),
          _.$slots["input-icon"] && !_.hideInputIcon ? (m(), P("span", Lm, [
            Q(_.$slots, "input-icon")
          ])) : R("", !0),
          !_.$slots["input-icon"] && !_.hideInputIcon && !_.$slots["dp-input"] ? (m(), re(c(Hr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : R("", !0),
          _.$slots["clear-icon"] && e.inputValue && _.clearable && !_.disabled && !_.readonly ? (m(), P("span", Hm, [
            Q(_.$slots, "clear-icon", { clear: te })
          ])) : R("", !0),
          _.clearable && !_.$slots["clear-icon"] && e.inputValue && !_.disabled && !_.readonly ? (m(), re(c(qy), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Ke(te, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : R("", !0)
        ])) : R("", !0)
      ], 8, Fm);
    };
  }
}), jm = { class: "dp__selection_preview" }, qm = { class: "dp__action_buttons" }, Gm = ["onKeydown"], Qm = /* @__PURE__ */ ge({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Ut
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = vt(n), { buildMatrix: l } = Ft(), u = M(null), d = M(null);
    ft(() => {
      n.arrowNavigation && l([Ze(u), Ze(d)], "actionRow");
    });
    const p = k(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), w = k(() => !s.value || !h.value || !p.value), y = k(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: w.value
    })), s = k(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = k(() => n.monthPicker ? j(n.internalModelValue) : !0), O = () => {
      const D = o.value.previewFormat;
      return n.timePicker || n.monthPicker, D(tt(n.internalModelValue));
    }, N = () => {
      const D = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(D[0])} - ${r(D[1])}` : [r(D[0]), r(D[1])];
    }, I = k(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? N() : n.multiDates ? n.internalModelValue.map((D) => `${r(D)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : O()), j = (D) => {
      if (!n.monthPicker)
        return !0;
      let z = !0;
      return n.minDate && n.maxDate ? ct(Y(D), Y(n.minDate)) && at(Y(D), Y(n.maxDate)) : (n.minDate && (z = ct(Y(D), Y(n.minDate))), n.maxDate && (z = at(Y(D), Y(n.maxDate))), z);
    }, H = () => {
      s.value && h.value && p.value ? t("select-date") : t("invalid-select");
    };
    return (D, z) => (m(), P("div", {
      class: "dp__action_row",
      style: gt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      D.$slots["action-row"] ? Q(D.$slots, "action-row", nt(Xe({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: c(w),
        selectDate: () => D.$emit("select-date"),
        closePicker: () => D.$emit("close-picker")
      }))) : (m(), P(be, { key: 1 }, [
        V("div", jm, [
          D.$slots["action-preview"] ? Q(D.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : R("", !0),
          D.$slots["action-preview"] ? R("", !0) : (m(), P(be, { key: 1 }, [
            Array.isArray(c(I)) ? R("", !0) : (m(), P(be, { key: 0 }, [
              ze(ke(c(I)), 1)
            ], 64)),
            Array.isArray(c(I)) ? (m(!0), P(be, { key: 1 }, Ne(c(I), (K, Z) => (m(), P("div", { key: Z }, ke(K), 1))), 128)) : R("", !0)
          ], 64))
        ]),
        V("div", qm, [
          D.$slots["action-select"] ? Q(D.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : R("", !0),
          D.$slots["action-select"] ? R("", !0) : (m(), P(be, { key: 1 }, [
            D.inline ? R("", !0) : (m(), P("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: u,
              tabindex: "0",
              onClick: z[0] || (z[0] = (K) => D.$emit("close-picker")),
              onKeydown: [
                z[1] || (z[1] = we((K) => D.$emit("close-picker"), ["enter"])),
                z[2] || (z[2] = we((K) => D.$emit("close-picker"), ["space"]))
              ]
            }, ke(D.cancelText), 545)),
            V("span", {
              class: pe(c(y)),
              tabindex: "0",
              onKeydown: [
                we(H, ["enter"]),
                we(H, ["space"])
              ],
              onClick: H,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: d
            }, ke(D.selectText), 43, Gm)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), Zm = ["aria-label"], Xm = {
  class: "dp__calendar_header",
  role: "row"
}, Km = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Jm = /* @__PURE__ */ V("div", { class: "dp__calendar_header_separator" }, null, -1), ev = ["aria-label"], tv = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, nv = { class: "dp__cell_inner" }, rv = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], av = /* @__PURE__ */ ge({
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
    ...Ut
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
    const r = e, { buildMultiLevelMatrix: a } = Ft(), { setDateMonthOrYear: o, defaults: l } = vt(r), u = M(null), d = M({
      bottom: "",
      left: "",
      transform: ""
    }), p = M([]), w = M(null), y = M(!0), s = M(""), h = M({ startX: 0, endX: 0, startY: 0, endY: 0 }), O = M([]), N = M({ left: "50%" }), I = k(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : $m(r.locale, +r.weekStart));
    ft(() => {
      n("mount", { cmp: "calendar", refs: p }), r.noSwipe || w.value && (w.value.addEventListener("touchstart", C, { passive: !1 }), w.value.addEventListener("touchend", X, { passive: !1 }), w.value.addEventListener("touchmove", J, { passive: !1 })), r.monthChangeOnScroll && w.value && w.value.addEventListener("wheel", F, { passive: !1 });
    });
    const j = (i) => i ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", H = (i, f) => {
      if (r.transitions) {
        const $ = Pt(o(Y(), r.month, r.year));
        s.value = ct(Pt(o(Y(), i, f)), $) ? l.value.transitions[j(!0)] : l.value.transitions[j(!1)], y.value = !1, St(() => {
          y.value = !0;
        });
      }
    }, D = k(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), z = k(() => (i) => {
      const f = Pm(i);
      return {
        dp__marker_dot: f.type === "dot",
        dp__marker_line: f.type === "line"
      };
    }), K = k(() => (i) => Ve(i, u.value)), Z = k(() => ({
      dp__calendar: !0,
      dp__calendar_next: l.value.multiCalendars > 0 && r.instance !== 0
    })), te = k(() => (i) => r.hideOffsetDates ? i.current : !0), T = k(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), _ = async (i, f, $) => {
      var x, B;
      if (n("set-hover-date", i), (B = (x = i.marker) == null ? void 0 : x.tooltip) != null && B.length) {
        const G = Ze(p.value[f][$]);
        if (G) {
          const { width: W, height: S } = G.getBoundingClientRect();
          u.value = i.value;
          let g = { left: `${W / 2}px` }, L = -50;
          if (await St(), O.value[0]) {
            const { left: Oe, width: ae } = O.value[0].getBoundingClientRect();
            Oe < 0 && (g = { left: "0" }, L = 0, N.value.left = `${W / 2}px`), window.innerWidth < Oe + ae && (g = { right: "0" }, L = 0, N.value.left = `${ae - W / 2}px`);
          }
          d.value = {
            bottom: `${S}px`,
            ...g,
            transform: `translateX(${L}%)`
          }, n("tooltip-open", i.marker);
        }
      }
    }, b = (i) => {
      u.value && (u.value = null, d.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", i.marker));
    }, C = (i) => {
      h.value.startX = i.changedTouches[0].screenX, h.value.startY = i.changedTouches[0].screenY;
    }, X = (i) => {
      h.value.endX = i.changedTouches[0].screenX, h.value.endY = i.changedTouches[0].screenY, le();
    }, J = (i) => {
      r.vertical && !r.inline && i.preventDefault();
    }, le = () => {
      const i = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${i}`] - h.value[`end${i}`]) > 10 && n("handle-swipe", h.value[`start${i}`] > h.value[`end${i}`] ? "right" : "left");
    }, ee = (i, f, $) => {
      i && (Array.isArray(p.value[f]) ? p.value[f][$] = i : p.value[f] = [i]), r.arrowNavigation && a(p.value, "calendar");
    }, F = (i) => {
      r.monthChangeOnScroll && (i.preventDefault(), n("handle-scroll", i));
    };
    return t({ triggerTransition: H }), (i, f) => {
      var $;
      return m(), P("div", {
        class: pe(c(Z))
      }, [
        V("div", {
          style: gt(c(T))
        }, [
          e.specificMode ? R("", !0) : (m(), P("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: w,
            class: pe(c(D)),
            role: "grid",
            "aria-label": ($ = c(l).ariaLabels) == null ? void 0 : $.calendarWrap
          }, [
            V("div", Xm, [
              i.weekNumbers ? (m(), P("div", Km, ke(i.weekNumName), 1)) : R("", !0),
              (m(!0), P(be, null, Ne(c(I), (x, B) => (m(), P("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: B,
                "data-test": "calendar-header"
              }, [
                i.$slots["calendar-header"] ? Q(i.$slots, "calendar-header", {
                  key: 0,
                  day: x,
                  index: B
                }) : R("", !0),
                i.$slots["calendar-header"] ? R("", !0) : (m(), P(be, { key: 1 }, [
                  ze(ke(x), 1)
                ], 64))
              ]))), 128))
            ]),
            Jm,
            xe(wt, {
              name: s.value,
              css: !!i.transitions
            }, {
              default: ne(() => {
                var x;
                return [
                  y.value ? (m(), P("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (x = c(l).ariaLabels) == null ? void 0 : x.calendarDays
                  }, [
                    (m(!0), P(be, null, Ne(e.mappedDates, (B, G) => (m(), P("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: G
                    }, [
                      i.weekNumbers ? (m(), P("div", tv, [
                        V("div", nv, ke(e.getWeekNum(B.days)), 1)
                      ])) : R("", !0),
                      (m(!0), P(be, null, Ne(B.days, (W, S) => {
                        var g, L, Oe;
                        return m(), P("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (ae) => ee(ae, G, S),
                          key: S + G,
                          "aria-selected": W.classData.dp__active_date || W.classData.dp__range_start || W.classData.dp__range_start,
                          "aria-disabled": W.classData.dp__cell_disabled,
                          "aria-label": (L = (g = c(l).ariaLabels) == null ? void 0 : g.day) == null ? void 0 : L.call(g, W),
                          tabindex: "0",
                          "data-test": W.value,
                          onClick: Ke((ae) => i.$emit("select-date", W), ["stop", "prevent"]),
                          onKeydown: [
                            we((ae) => i.$emit("select-date", W), ["enter"]),
                            we((ae) => i.$emit("handle-space", W), ["space"])
                          ],
                          onMouseenter: (ae) => _(W, G, S),
                          onMouseleave: (ae) => b(W)
                        }, [
                          V("div", {
                            class: pe(["dp__cell_inner", W.classData])
                          }, [
                            i.$slots.day && c(te)(W) ? Q(i.$slots, "day", {
                              key: 0,
                              day: +W.text,
                              date: W.value
                            }) : R("", !0),
                            i.$slots.day ? R("", !0) : (m(), P(be, { key: 1 }, [
                              ze(ke(W.text), 1)
                            ], 64)),
                            W.marker && c(te)(W) ? (m(), P("div", {
                              key: 2,
                              class: pe(c(z)(W.marker)),
                              style: gt(W.marker.color ? { backgroundColor: W.marker.color } : {})
                            }, null, 6)) : R("", !0),
                            c(K)(W.value) ? (m(), P("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: O,
                              style: gt(d.value)
                            }, [
                              (Oe = W.marker) != null && Oe.tooltip ? (m(), P("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: f[0] || (f[0] = Ke(() => {
                                }, ["stop"]))
                              }, [
                                (m(!0), P(be, null, Ne(W.marker.tooltip, (ae, de) => (m(), P("div", {
                                  key: de,
                                  class: "dp__tooltip_text"
                                }, [
                                  i.$slots["marker-tooltip"] ? Q(i.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: ae,
                                    day: W.value
                                  }) : R("", !0),
                                  i.$slots["marker-tooltip"] ? R("", !0) : (m(), P(be, { key: 1 }, [
                                    V("div", {
                                      class: "dp__tooltip_mark",
                                      style: gt(ae.color ? { backgroundColor: ae.color } : {})
                                    }, null, 4),
                                    V("div", null, ke(ae.text), 1)
                                  ], 64))
                                ]))), 128)),
                                V("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: gt(N.value)
                                }, null, 4)
                              ])) : R("", !0)
                            ], 4)) : R("", !0)
                          ], 2)
                        ], 40, rv);
                      }), 128))
                    ]))), 128))
                  ], 8, ev)) : R("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, Zm))
        ], 4)
      ], 2);
    };
  }
}), ov = ["aria-label", "aria-disabled"], la = /* @__PURE__ */ ge({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = M(null);
    return ft(() => t("set-ref", n)), (r, a) => (m(), P("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = we((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = we((o) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      V("div", {
        class: pe(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        Q(r.$slots, "default")
      ], 2)
    ], 40, ov));
  }
}), lv = ["onKeydown"], iv = { class: "dp__selection_grid_header" }, uv = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], sv = ["aria-label", "onKeydown"], fn = /* @__PURE__ */ ge({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: l } = Ft(), { hideNavigationButtons: u } = vt(r), d = M(!1), p = M(null), w = M(null), y = M([]), s = M(), h = M(null), O = M(0), N = M(null);
    iu(() => {
      p.value = null;
    }), ft(() => {
      St().then(() => _()), j(), I(!0);
    }), xo(() => I(!1));
    const I = (F) => {
      var i;
      r.arrowNavigation && ((i = r.headerRefs) != null && i.length ? l(F) : a(F));
    }, j = () => {
      const F = Ze(w);
      F && (r.textInput || F.focus({ preventScroll: !0 }), d.value = F.clientHeight < F.scrollHeight);
    }, H = k(
      () => ({
        dp__overlay: !0
      })
    ), D = k(() => ({
      dp__overlay_col: !0
    })), z = (F) => r.skipActive ? !1 : F.value === r.modelValue, K = k(() => r.items.map((F) => F.filter((i) => i).map((i) => {
      var f, $, x;
      const B = r.disabledValues.some((W) => W === i.value) || T(i.value), G = (f = r.multiModelValue) != null && f.length ? ($ = r.multiModelValue) == null ? void 0 : $.some(
        (W) => Ve(
          W,
          zt(
            r.monthPicker ? cn(/* @__PURE__ */ new Date(), i.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : i.value
          )
        )
      ) : z(i);
      return {
        ...i,
        className: {
          dp__overlay_cell_active: G,
          dp__overlay_cell: !G,
          dp__overlay_cell_disabled: B,
          dp__overlay_cell_active_disabled: B && G,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (x = r.multiModelValue) != null && x.length ? C(i.value) : !1
        }
      };
    }))), Z = k(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: d.value,
        dp__button_bottom: r.autoApply
      })
    ), te = k(() => {
      var F, i;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((F = r.items) == null ? void 0 : F.length) <= 6,
        dp__container_block: ((i = r.items) == null ? void 0 : i.length) > 6
      };
    }), T = (F) => {
      const i = r.maxValue || r.maxValue === 0, f = r.minValue || r.minValue === 0;
      return !i && !f ? !1 : i && f ? +F > +r.maxValue || +F < +r.minValue : i ? +F > +r.maxValue : f ? +F < +r.minValue : !1;
    }, _ = () => {
      const F = Ze(p), i = Ze(w), f = Ze(h), $ = Ze(N), x = f ? f.getBoundingClientRect().height : 0;
      i && (O.value = i.getBoundingClientRect().height - x), F && $ && ($.scrollTop = F.offsetTop - $.offsetTop - (O.value / 2 - F.getBoundingClientRect().height) - x);
    }, b = (F) => {
      !r.disabledValues.some((i) => i === F) && !T(F) && (n("update:model-value", F), n("selected"));
    }, C = (F) => {
      const i = r.monthPicker ? r.year : F;
      return Xi(
        r.multiModelValue,
        zt(
          r.monthPicker ? cn(/* @__PURE__ */ new Date(), s.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? i : s.value || i
        ),
        zt(r.monthPicker ? cn(/* @__PURE__ */ new Date(), F) : /* @__PURE__ */ new Date(), i)
      );
    }, X = () => {
      n("toggle"), n("reset-flow");
    }, J = () => {
      r.escClose && X();
    }, le = (F, i, f, $) => {
      F && (i.value === +r.modelValue && !r.disabledValues.includes(i.value) && (p.value = F), r.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][$] = F : y.value[f] = [F], ee()));
    }, ee = () => {
      var F, i;
      const f = (F = r.headerRefs) != null && F.length ? [r.headerRefs].concat(y.value) : y.value.concat([r.skipButtonRef ? [] : [h.value]]);
      o(tt(f), (i = r.headerRefs) != null && i.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: j }), (F, i) => {
      var f;
      return m(), P("div", {
        ref_key: "gridWrapRef",
        ref: w,
        class: pe(c(H)),
        role: "dialog",
        tabindex: "0",
        onKeydown: we(J, ["esc"])
      }, [
        V("div", {
          class: pe(c(te)),
          ref_key: "containerRef",
          ref: N,
          role: "grid",
          style: gt({ height: `${O.value}px` })
        }, [
          V("div", iv, [
            Q(F.$slots, "header")
          ]),
          F.$slots.overlay ? Q(F.$slots, "overlay", { key: 0 }) : (m(!0), P(be, { key: 1 }, Ne(c(K), ($, x) => (m(), P("div", {
            class: "dp__overlay_row",
            key: x,
            role: "row"
          }, [
            (m(!0), P(be, null, Ne($, (B, G) => (m(), P("div", {
              role: "gridcell",
              class: pe(c(D)),
              key: B.value,
              "aria-selected": B.value === e.modelValue && !e.disabledValues.includes(B.value),
              "aria-disabled": B.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (W) => le(W, B, x, G),
              tabindex: "0",
              "data-test": B.text,
              onClick: (W) => b(B.value),
              onKeydown: [
                we((W) => b(B.value), ["enter"]),
                we((W) => b(B.value), ["space"])
              ],
              onMouseover: (W) => s.value = B.value
            }, [
              V("div", {
                class: pe(B.className)
              }, [
                F.$slots.item ? Q(F.$slots, "item", {
                  key: 0,
                  item: B
                }) : R("", !0),
                F.$slots.item ? R("", !0) : (m(), P(be, { key: 1 }, [
                  ze(ke(B.text), 1)
                ], 64))
              ], 2)
            ], 42, uv))), 128))
          ]))), 128))
        ], 6),
        F.$slots["button-icon"] ? Nt((m(), P("div", {
          key: 0,
          role: "button",
          "aria-label": (f = e.ariaLabels) == null ? void 0 : f.toggleOverlay,
          class: pe(c(Z)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h,
          onClick: X,
          onKeydown: we(X, ["enter"])
        }, [
          Q(F.$slots, "button-icon")
        ], 42, sv)), [
          [yn, !c(u)(e.type)]
        ]) : R("", !0)
      ], 42, lv);
    };
  }
}), cv = ["aria-label"], wi = /* @__PURE__ */ ge({
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
    const n = e, { transitionName: r, showTransition: a } = zr(n.transitions), o = M(null);
    return ft(() => t("set-ref", o)), (l, u) => (m(), P(be, null, [
      V("div", {
        class: "dp__month_year_select",
        onClick: u[0] || (u[0] = (d) => l.$emit("toggle")),
        onKeydown: [
          u[1] || (u[1] = we((d) => l.$emit("toggle"), ["enter"])),
          u[2] || (u[2] = we((d) => l.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        Q(l.$slots, "default")
      ], 40, cv),
      xe(wt, {
        name: c(r)(e.showSelectionGrid),
        css: c(a)
      }, {
        default: ne(() => [
          e.showSelectionGrid ? (m(), re(fn, Xe({ key: 0 }, {
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
          }), yt({
            "button-icon": ne(() => [
              l.$slots["calendar-icon"] ? Q(l.$slots, "calendar-icon", { key: 0 }) : R("", !0),
              l.$slots["calendar-icon"] ? R("", !0) : (m(), re(c(Hr), { key: 1 }))
            ]),
            _: 2
          }, [
            l.$slots[e.slotName] ? {
              name: "item",
              fn: ne(({ item: d }) => [
                Q(l.$slots, e.slotName, { item: d })
              ]),
              key: "0"
            } : void 0,
            l.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ne(() => [
                Q(l.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            l.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ne(() => [
                Q(l.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : R("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), fv = { class: "dp__month_year_row" }, dv = { class: "dp__month_year_wrap" }, pv = { class: "dp__month_picker_header" }, yv = ["aria-label"], mv = ["aria-label"], vv = ["aria-label"], hv = /* @__PURE__ */ ge({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Ut
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = vt(r), { transitionName: o, showTransition: l } = zr(a.value.transitions), { buildMatrix: u } = Ft(), { handleMonthYearChange: d, isDisabled: p, updateMonthYear: w } = Am(r, n), y = M(!1), s = M(!1), h = M([null, null, null, null]), O = M(null), N = M(null), I = M(null);
    ft(() => {
      n("mount");
    });
    const j = (g) => ({
      get: () => r[g],
      set: (L) => {
        const Oe = g === "month" ? "year" : "month";
        n("update-month-year", { [g]: L, [Oe]: r[Oe] }), n("month-year-select", g === "year"), g === "month" ? x(!0) : B(!0);
      }
    }), H = k(j("month")), D = k(j("year")), z = (g) => {
      const L = Ee(Y(g));
      return r.year === L;
    }, K = k(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((g) => Y(g)).filter((g) => z(g)).map((g) => Ae(g)) : [] : []), Z = k(() => (g) => {
      const L = g === "month";
      return {
        showSelectionGrid: (L ? y : s).value,
        items: (L ? F : i).value,
        disabledValues: a.value.filters[L ? "months" : "years"].concat(K.value),
        minValue: (L ? b : T).value,
        maxValue: (L ? C : _).value,
        headerRefs: L && r.monthPicker ? [O.value, N.value, I.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), te = k(() => (g) => ({
      month: r.month,
      year: r.year,
      items: g === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: w,
      toggle: g === "month" ? x : B
    })), T = k(() => r.minDate ? Ee(Y(r.minDate)) : null), _ = k(() => r.maxDate ? Ee(Y(r.maxDate)) : null), b = k(() => {
      if (r.minDate && T.value) {
        if (T.value > r.year)
          return 12;
        if (T.value === r.year)
          return Ae(Y(r.minDate));
      }
      return null;
    }), C = k(() => r.maxDate && _.value ? _.value < r.year ? -1 : _.value === r.year ? Ae(Y(r.maxDate)) : null : null), X = k(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), J = (g) => g.reverse(), le = (g, L = !1) => {
      const Oe = [], ae = (de) => L ? J(de) : de;
      for (let de = 0; de < g.length; de += 3) {
        const Re = [g[de], g[de + 1], g[de + 2]];
        Oe.push(ae(Re));
      }
      return L ? Oe.reverse() : Oe;
    }, ee = k(() => r.months.find((L) => L.value === r.month) || { text: "", value: 0 }), F = k(() => le(r.months)), i = k(() => le(r.years, r.reverseYears)), f = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), $ = k(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), x = (g = !1) => {
      G(g), y.value = !y.value, y.value || n("overlay-closed");
    }, B = (g = !1) => {
      G(g), s.value = !s.value, s.value || n("overlay-closed");
    }, G = (g) => {
      g || n("reset-flow");
    }, W = (g = !1) => {
      p.value(g) || n("update-month-year", {
        year: g ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, S = (g, L) => {
      r.arrowNavigation && (h.value[L] = Ze(g), u(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: x,
      toggleYearPicker: B,
      handleMonthYearChange: d
    }), (g, L) => {
      var Oe, ae, de, Re, ot;
      return m(), P("div", fv, [
        g.$slots["month-year"] ? Q(g.$slots, "month-year", nt(Xe({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: c(w), handleMonthYearChange: c(d), instance: e.instance }))) : (m(), P(be, { key: 1 }, [
          !g.monthPicker && !g.yearPicker ? (m(), P(be, { key: 0 }, [
            c(f) && !g.vertical ? (m(), re(la, {
              key: 0,
              "aria-label": (Oe = c(a).ariaLabels) == null ? void 0 : Oe.prevMonth,
              disabled: c(p)(!1),
              onActivate: L[0] || (L[0] = (ve) => c(d)(!1)),
              onSetRef: L[1] || (L[1] = (ve) => S(ve, 0))
            }, {
              default: ne(() => [
                g.$slots["arrow-left"] ? Q(g.$slots, "arrow-left", { key: 0 }) : R("", !0),
                g.$slots["arrow-left"] ? R("", !0) : (m(), re(c(li), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : R("", !0),
            V("div", dv, [
              xe(wi, Xe({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (ae = c(a).ariaLabels) == null ? void 0 : ae.openMonthsOverlay,
                modelValue: c(H),
                "onUpdate:modelValue": L[2] || (L[2] = (ve) => Ge(H) ? H.value = ve : null)
              }, c(Z)("month"), {
                onToggle: x,
                onSetRef: L[3] || (L[3] = (ve) => S(ve, 1))
              }), yt({
                default: ne(() => [
                  g.$slots.month ? Q(g.$slots, "month", nt(Xe({ key: 0 }, c(ee)))) : R("", !0),
                  g.$slots.month ? R("", !0) : (m(), P(be, { key: 1 }, [
                    ze(ke(c(ee).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                g.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ne(() => [
                    Q(g.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                g.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ne(({ item: ve }) => [
                    Q(g.$slots, "month-overlay-value", {
                      text: ve.text,
                      value: ve.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                g.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ne(() => [
                    Q(g.$slots, "month-overlay", nt(_t(c(te)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                g.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ne(() => [
                    Q(g.$slots, "month-overlay-header", { toggle: x })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              xe(wi, Xe({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (de = c(a).ariaLabels) == null ? void 0 : de.openYearsOverlay,
                modelValue: c(D),
                "onUpdate:modelValue": L[4] || (L[4] = (ve) => Ge(D) ? D.value = ve : null)
              }, c(Z)("year"), {
                onToggle: B,
                onSetRef: L[5] || (L[5] = (ve) => S(ve, 2))
              }), yt({
                default: ne(() => [
                  g.$slots.year ? Q(g.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : R("", !0),
                  g.$slots.year ? R("", !0) : (m(), P(be, { key: 1 }, [
                    ze(ke(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                g.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ne(() => [
                    Q(g.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                g.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ne(({ item: ve }) => [
                    Q(g.$slots, "year-overlay-value", {
                      text: ve.text,
                      value: ve.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                g.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ne(() => [
                    Q(g.$slots, "year-overlay", nt(_t(c(te)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                g.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ne(() => [
                    Q(g.$slots, "year-overlay-header", { toggle: B })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            c(f) && g.vertical ? (m(), re(la, {
              key: 1,
              "aria-label": (Re = c(a).ariaLabels) == null ? void 0 : Re.prevMonth,
              disabled: c(p)(!1),
              onActivate: L[6] || (L[6] = (ve) => c(d)(!1))
            }, {
              default: ne(() => [
                g.$slots["arrow-up"] ? Q(g.$slots, "arrow-up", { key: 0 }) : R("", !0),
                g.$slots["arrow-up"] ? R("", !0) : (m(), re(c(Qi), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : R("", !0),
            c($) ? (m(), re(la, {
              key: 2,
              ref: "rightIcon",
              disabled: c(p)(!0),
              "aria-label": (ot = c(a).ariaLabels) == null ? void 0 : ot.nextMonth,
              onActivate: L[7] || (L[7] = (ve) => c(d)(!0)),
              onSetRef: L[8] || (L[8] = (ve) => S(ve, 3))
            }, {
              default: ne(() => [
                g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? Q(g.$slots, g.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : R("", !0),
                g.$slots[g.vertical ? "arrow-down" : "arrow-right"] ? R("", !0) : (m(), re(ki(g.vertical ? c(Zi) : c(ii)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : R("", !0)
          ], 64)) : R("", !0),
          g.monthPicker ? (m(), re(fn, Xe({ key: 1 }, c(Z)("month"), {
            "skip-active": g.range,
            year: e.year,
            "multi-model-value": c(X),
            "month-picker": "",
            modelValue: c(H),
            "onUpdate:modelValue": L[17] || (L[17] = (ve) => Ge(H) ? H.value = ve : null),
            onToggle: x,
            onSelected: L[18] || (L[18] = (ve) => g.$emit("overlay-closed"))
          }), yt({
            header: ne(() => {
              var ve, dt, et;
              return [
                V("div", pv, [
                  V("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: O,
                    onClick: L[9] || (L[9] = (He) => W(!1)),
                    onKeydown: L[10] || (L[10] = we((He) => W(!1), ["enter"]))
                  }, [
                    V("div", {
                      class: pe(["dp__inner_nav", { dp__inner_nav_disabled: c(p)(!1) }]),
                      role: "button",
                      "aria-label": (ve = c(a).ariaLabels) == null ? void 0 : ve.prevMonth
                    }, [
                      g.$slots["arrow-left"] ? Q(g.$slots, "arrow-left", { key: 0 }) : R("", !0),
                      g.$slots["arrow-left"] ? R("", !0) : (m(), re(c(li), { key: 1 }))
                    ], 10, yv)
                  ], 544),
                  V("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: N,
                    "aria-label": (dt = c(a).ariaLabels) == null ? void 0 : dt.openYearsOverlay,
                    tabindex: "0",
                    onClick: L[11] || (L[11] = () => B(!1)),
                    onKeydown: L[12] || (L[12] = we(() => B(!1), ["enter"]))
                  }, [
                    g.$slots.year ? Q(g.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : R("", !0),
                    g.$slots.year ? R("", !0) : (m(), P(be, { key: 1 }, [
                      ze(ke(e.year), 1)
                    ], 64))
                  ], 40, mv),
                  V("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: I,
                    onClick: L[13] || (L[13] = (He) => W(!0)),
                    onKeydown: L[14] || (L[14] = we((He) => W(!0), ["enter"]))
                  }, [
                    V("div", {
                      class: pe(["dp__inner_nav", { dp__inner_nav_disabled: c(p)(!0) }]),
                      role: "button",
                      "aria-label": (et = c(a).ariaLabels) == null ? void 0 : et.nextMonth
                    }, [
                      g.$slots["arrow-right"] ? Q(g.$slots, "arrow-right", { key: 0 }) : R("", !0),
                      g.$slots["arrow-right"] ? R("", !0) : (m(), re(c(ii), { key: 1 }))
                    ], 10, vv)
                  ], 544)
                ]),
                xe(wt, {
                  name: c(o)(s.value),
                  css: c(l)
                }, {
                  default: ne(() => [
                    s.value ? (m(), re(fn, Xe({ key: 0 }, c(Z)("year"), {
                      modelValue: c(D),
                      "onUpdate:modelValue": L[15] || (L[15] = (He) => Ge(D) ? D.value = He : null),
                      onToggle: B,
                      onSelected: L[16] || (L[16] = (He) => g.$emit("overlay-closed"))
                    }), yt({
                      "button-icon": ne(() => [
                        g.$slots["calendar-icon"] ? Q(g.$slots, "calendar-icon", { key: 0 }) : R("", !0),
                        g.$slots["calendar-icon"] ? R("", !0) : (m(), re(c(Hr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      g.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ne(({ item: He }) => [
                          Q(g.$slots, "year-overlay-value", {
                            text: He.text,
                            value: He.value
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
            g.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ne(({ item: ve }) => [
                Q(g.$slots, "month-overlay-value", {
                  text: ve.text,
                  value: ve.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : R("", !0),
          g.yearPicker ? (m(), re(fn, Xe({ key: 2 }, c(Z)("year"), {
            modelValue: c(D),
            "onUpdate:modelValue": L[19] || (L[19] = (ve) => Ge(D) ? D.value = ve : null),
            "multi-model-value": c(X),
            "skip-active": g.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: B,
            onSelected: L[20] || (L[20] = (ve) => g.$emit("overlay-closed"))
          }), yt({ _: 2 }, [
            g.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ne(({ item: ve }) => [
                Q(g.$slots, "year-overlay-value", {
                  text: ve.text,
                  value: ve.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : R("", !0)
        ], 64))
      ]);
    };
  }
}), gv = {
  key: 0,
  class: "dp__time_input"
}, _v = ["aria-label", "onKeydown", "onClick"], bv = ["aria-label", "data-test", "onKeydown", "onClick"], wv = ["aria-label", "onKeydown", "onClick"], kv = { key: 0 }, $v = ["aria-label", "onKeydown"], Ov = /* @__PURE__ */ ge({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Ut
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Ft(), { defaults: l } = vt(r), { transitionName: u, showTransition: d } = zr(l.value.transitions), p = At({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), w = M("AM"), y = M(null), s = M([]);
    ft(() => {
      n("mounted");
    });
    const h = k(() => (i) => !!(r.maxTime && r.maxTime[i] && r.maxTime[i] < r[i] + +r[`${i}Increment`])), O = k(() => (i) => !!(r.minTime && r.minTime[i] && r.minTime[i] > r[i] - +r[`${i}Increment`])), N = (i, f) => Si(rt(Y(), i), f), I = (i, f) => zy(rt(Y(), i), f), j = k(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), H = k(() => {
      const i = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? i.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : i;
    }), D = k(() => H.value.filter((i) => !i.separator)), z = k(() => (i) => {
      if (i === "hours") {
        const f = X(r.hours);
        return { text: f < 10 ? `0${f}` : `${f}`, value: f };
      }
      return { text: r[i] < 10 ? `0${r[i]}` : `${r[i]}`, value: r[i] };
    }), K = (i) => {
      const f = r.is24 ? 24 : 12, $ = i === "hours" ? f : 60, x = +r[`${i}GridIncrement`], B = i === "hours" && !r.is24 ? x : 0, G = [];
      for (let W = B; W < $; W += x)
        G.push({ value: W, text: W < 10 ? `0${W}` : `${W}` });
      return i === "hours" && !r.is24 && G.push({ value: 0, text: "12" }), km(G);
    }, Z = (i, f) => {
      const $ = r.minTime && r.minTime[f], x = r.maxTime && r.maxTime[f];
      return $ && x ? i < $ || i > x : $ ? i < $ : x ? i > x : !1;
    }, te = k(() => (i) => K(i).flat().filter((f) => f).map((f) => f.value).filter((f) => Z(f, i))), T = (i) => r[`no${i[0].toUpperCase() + i.slice(1)}Overlay`], _ = (i) => {
      T(i) || (p[i] = !p[i], p[i] || n("overlay-closed"));
    }, b = (i) => i === "hours" ? Rt : i === "minutes" ? It : tn, C = (i, f = !0) => {
      const $ = f ? N : I;
      (f ? h.value(i) : O.value(i)) || n(
        `update:${i}`,
        b(i)($({ [i]: +r[i] }, { [i]: +r[`${i}Increment`] }))
      );
    }, X = (i) => r.is24 ? i : (i >= 12 ? w.value = "PM" : w.value = "AM", Sm(i)), J = () => {
      w.value === "PM" ? (w.value = "AM", n("update:hours", r.hours - 12)) : (w.value = "PM", n("update:hours", r.hours + 12));
    }, le = (i) => {
      p[i] = !0;
    }, ee = (i, f, $) => {
      if (i && r.arrowNavigation) {
        Array.isArray(s.value[f]) ? s.value[f][$] = i : s.value[f] = [i];
        const x = s.value.reduce(
          (B, G) => G.map((W, S) => [...B[S] || [], G[S]]),
          []
        );
        o(r.closeTimePickerBtn), y.value && (x[1] = x[1].concat(y.value)), a(x, r.order);
      }
    }, F = (i, f) => i === "hours" && !r.is24 ? n(`update:${i}`, w.value === "PM" ? f + 12 : f) : n(`update:${i}`, f);
    return t({ openChildCmp: le }), (i, f) => {
      var $;
      return i.disabled ? R("", !0) : (m(), P("div", gv, [
        (m(!0), P(be, null, Ne(c(H), (x, B) => {
          var G, W, S;
          return m(), P("div", {
            key: B,
            class: pe(c(j))
          }, [
            x.separator ? (m(), P(be, { key: 0 }, [
              ze(" : ")
            ], 64)) : (m(), P(be, { key: 1 }, [
              V("div", {
                class: pe({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(h)(x.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (G = c(l).ariaLabels) == null ? void 0 : G.incrementValue(x.type),
                tabindex: "0",
                onKeydown: [
                  we((g) => C(x.type), ["enter"]),
                  we((g) => C(x.type), ["space"])
                ],
                onClick: (g) => C(x.type),
                ref_for: !0,
                ref: (g) => ee(g, B, 0)
              }, [
                i.$slots["arrow-up"] ? Q(i.$slots, "arrow-up", { key: 0 }) : R("", !0),
                i.$slots["arrow-up"] ? R("", !0) : (m(), re(c(Qi), { key: 1 }))
              ], 42, _v),
              V("div", {
                role: "button",
                "aria-label": (W = c(l).ariaLabels) == null ? void 0 : W.openTpOverlay(x.type),
                class: pe(T(x.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${x.type}-toggle-overlay-btn`,
                onKeydown: [
                  we((g) => _(x.type), ["enter"]),
                  we((g) => _(x.type), ["space"])
                ],
                onClick: (g) => _(x.type),
                ref_for: !0,
                ref: (g) => ee(g, B, 1)
              }, [
                i.$slots[x.type] ? Q(i.$slots, x.type, {
                  key: 0,
                  text: c(z)(x.type).text,
                  value: c(z)(x.type).value
                }) : R("", !0),
                i.$slots[x.type] ? R("", !0) : (m(), P(be, { key: 1 }, [
                  ze(ke(c(z)(x.type).text), 1)
                ], 64))
              ], 42, bv),
              V("div", {
                class: pe({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: c(O)(x.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (S = c(l).ariaLabels) == null ? void 0 : S.decrementValue(x.type),
                tabindex: "0",
                onKeydown: [
                  we((g) => C(x.type, !1), ["enter"]),
                  we((g) => C(x.type, !1), ["space"])
                ],
                onClick: (g) => C(x.type, !1),
                ref_for: !0,
                ref: (g) => ee(g, B, 2)
              }, [
                i.$slots["arrow-down"] ? Q(i.$slots, "arrow-down", { key: 0 }) : R("", !0),
                i.$slots["arrow-down"] ? R("", !0) : (m(), re(c(Zi), { key: 1 }))
              ], 42, wv)
            ], 64))
          ], 2);
        }), 128)),
        i.is24 ? R("", !0) : (m(), P("div", kv, [
          i.$slots["am-pm-button"] ? Q(i.$slots, "am-pm-button", {
            key: 0,
            toggle: J,
            value: w.value
          }) : R("", !0),
          i.$slots["am-pm-button"] ? R("", !0) : (m(), P("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: y,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": ($ = c(l).ariaLabels) == null ? void 0 : $.amPmButton,
            tabindex: "0",
            onClick: J,
            onKeydown: [
              we(Ke(J, ["prevent"]), ["enter"]),
              we(Ke(J, ["prevent"]), ["space"])
            ]
          }, ke(w.value), 41, $v))
        ])),
        (m(!0), P(be, null, Ne(c(D), (x, B) => (m(), re(wt, {
          key: B,
          name: c(u)(p[x.type]),
          css: c(d)
        }, {
          default: ne(() => [
            p[x.type] ? (m(), re(fn, {
              key: 0,
              items: K(x.type),
              "disabled-values": c(l).filters.times[x.type].concat(c(te)(x.type)),
              "esc-close": i.escClose,
              "aria-labels": c(l).ariaLabels,
              "hide-navigation": i.hideNavigation,
              "onUpdate:modelValue": (G) => F(x.type, G),
              onSelected: (G) => _(x.type),
              onToggle: (G) => _(x.type),
              onResetFlow: f[0] || (f[0] = (G) => i.$emit("reset-flow")),
              type: x.type
            }, yt({
              "button-icon": ne(() => [
                i.$slots["clock-icon"] ? Q(i.$slots, "clock-icon", { key: 0 }) : R("", !0),
                i.$slots["clock-icon"] ? R("", !0) : (m(), re(c(Gi), { key: 1 }))
              ]),
              _: 2
            }, [
              i.$slots[`${x.type}-overlay-value`] ? {
                name: "item",
                fn: ne(({ item: G }) => [
                  Q(i.$slots, `${x.type}-overlay-value`, {
                    text: G.text,
                    value: G.value
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
}), xv = ["aria-label"], Sv = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Pv = {
  key: 1,
  class: "dp__overlay_row"
}, Tv = ["aria-label"], Cv = /* @__PURE__ */ ge({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Ut
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
    const r = e, { buildMatrix: a, setTimePicker: o } = Ft(), l = Vt(), { hideNavigationButtons: u, defaults: d } = vt(r), { transitionName: p, showTransition: w } = zr(d.value.transitions), y = M(null), s = M(null), h = M([]), O = M(null);
    ft(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Ze(y.value)], "time") : o(!0, r.timePicker);
    });
    const N = k(() => r.range && r.modelAuto ? tu(r.internalModelValue) : !0), I = M(!1), j = (C) => ({
      hours: Array.isArray(r.hours) ? r.hours[C] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[C] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[C] : r.seconds
    }), H = k(() => {
      const C = [];
      if (r.range)
        for (let X = 0; X < 2; X++)
          C.push(j(X));
      else
        C.push(j(0));
      return C;
    }), D = (C, X = !1, J = "") => {
      X || n("reset-flow"), I.value = C, C && n("overlay-opened"), r.arrowNavigation && (o(C), C || n("overlay-closed")), St(() => {
        J !== "" && h.value[0] && h.value[0].openChildCmp(J);
      });
    }, z = k(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), K = Ht(l, "timePicker"), Z = (C, X, J) => r.range ? X === 0 ? [C, H.value[1][J]] : [H.value[0][J], C] : C, te = (C) => {
      n("update:hours", C);
    }, T = (C) => {
      n("update:minutes", C);
    }, _ = (C) => {
      n("update:seconds", C);
    }, b = () => {
      O.value && r.arrowNavigation && O.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: D }), (C, X) => {
      var J;
      return m(), P("div", null, [
        C.timePicker ? R("", !0) : Nt((m(), P("div", {
          key: 0,
          class: pe(c(z)),
          role: "button",
          "aria-label": (J = c(d).ariaLabels) == null ? void 0 : J.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: y,
          onKeydown: [
            X[0] || (X[0] = we((le) => D(!0), ["enter"])),
            X[1] || (X[1] = we((le) => D(!0), ["space"]))
          ],
          onClick: X[2] || (X[2] = (le) => D(!0))
        }, [
          C.$slots["clock-icon"] ? Q(C.$slots, "clock-icon", { key: 0 }) : R("", !0),
          C.$slots["clock-icon"] ? R("", !0) : (m(), re(c(Gi), { key: 1 }))
        ], 42, xv)), [
          [yn, !c(u)("time")]
        ]),
        xe(wt, {
          name: c(p)(I.value),
          css: c(w)
        }, {
          default: ne(() => {
            var le;
            return [
              I.value || C.timePicker ? (m(), P("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: O,
                tabindex: "0"
              }, [
                V("div", Sv, [
                  C.$slots["time-picker-overlay"] ? Q(C.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: te,
                    setMinutes: T,
                    setSeconds: _
                  }) : R("", !0),
                  C.$slots["time-picker-overlay"] ? R("", !0) : (m(), P("div", Pv, [
                    (m(!0), P(be, null, Ne(c(H), (ee, F) => Nt((m(), re(Ov, Xe({ key: F }, {
                      ...C.$props,
                      order: F,
                      hours: ee.hours,
                      minutes: ee.minutes,
                      seconds: ee.seconds,
                      closeTimePickerBtn: s.value,
                      disabled: F === 0 ? C.fixedStart : C.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (i) => te(Z(i, F, "hours")),
                      "onUpdate:minutes": (i) => T(Z(i, F, "minutes")),
                      "onUpdate:seconds": (i) => _(Z(i, F, "seconds")),
                      onMounted: b,
                      onOverlayClosed: b
                    }), yt({ _: 2 }, [
                      Ne(c(K), (i, f) => ({
                        name: i,
                        fn: ne(($) => [
                          Q(C.$slots, i, nt(_t($)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [yn, F === 0 ? !0 : c(N)]
                    ])), 128))
                  ])),
                  C.timePicker ? R("", !0) : Nt((m(), P("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: s,
                    class: pe(c(z)),
                    role: "button",
                    "aria-label": (le = c(d).ariaLabels) == null ? void 0 : le.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      X[3] || (X[3] = we((ee) => D(!1), ["enter"])),
                      X[4] || (X[4] = we((ee) => D(!1), ["space"]))
                    ],
                    onClick: X[5] || (X[5] = (ee) => D(!1))
                  }, [
                    C.$slots["calendar-icon"] ? Q(C.$slots, "calendar-icon", { key: 0 }) : R("", !0),
                    C.$slots["calendar-icon"] ? R("", !0) : (m(), re(c(Hr), { key: 1 }))
                  ], 42, Tv)), [
                    [yn, !c(u)("time")]
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
}), Dv = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = vt(t), o = M(null), l = M(Y()), u = (f) => {
    !f.current && t.hideOffsetDates || (o.value = f.value);
  }, d = () => {
    o.value = null;
  }, p = (f) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? f ? ct(o.value, e.value[0]) : at(o.value, e.value[0]) : !0, w = (f, $) => {
    const x = () => e.value ? $ ? e.value[0] || null : e.value[1] : null, B = e.value && Array.isArray(e.value) ? x() : null;
    return Ve(Y(f.value), B);
  }, y = (f) => {
    const $ = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !at(o.value || null, $) : !0;
  }, s = (f, $ = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !f.current ? !1 : Ve(Y(f.value), e.value[$ ? 0 : 1]) : t.range ? w(f, $) && y($) || Ve(f.value, Array.isArray(e.value) ? e.value[0] : null) && p($) : !1, h = (f, $, x) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : x ? ct(e.value[0], $.value) : at(e.value[0], $.value) : !1, O = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Ve(f.value, e.value[0] ? e.value[0] : l.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some(($) => Ve($, f.value)) : Ve(f.value, e.value ? e.value : l.value), N = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const $ = Et(o.value, +t.autoRange), x = a(Y(o.value));
        return t.weekPicker ? Ve(x[1], Y(f.value)) : Ve($, Y(f.value));
      }
      return !1;
    }
    return !1;
  }, I = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const $ = Et(o.value, +t.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const x = a(Y(o.value));
        return t.weekPicker ? ct(f.value, x[0]) && at(f.value, x[1]) : ct(f.value, o.value) && at(f.value, $);
      }
      return !1;
    }
    return !1;
  }, j = (f) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const $ = a(Y(o.value));
        return t.weekPicker ? Ve($[0], f.value) : Ve(o.value, f.value);
      }
      return !1;
    }
    return !1;
  }, H = (f) => Xi(e.value, o.value, f.value), D = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, z = () => t.modelAuto ? tu(t.internalModelValue) : !0, K = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const $ = t.range ? !s(f) && !s(f, !1) : !0;
    return !n(f.value) && !O(f) && !(!f.current && t.hideOffsetDates) && $;
  }, Z = (f) => t.range ? t.modelAuto ? D() && O(f) : !1 : O(f), te = (f) => t.highlight ? r(f.value, t.highlight) : !1, T = (f) => n(f.value) && t.highlightDisabledDays === !1, _ = (f) => t.highlightWeekDays && t.highlightWeekDays.includes(f.value.getDay()), b = (f) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || f.current) && z() && !(!f.current && t.hideOffsetDates) && !O(f) ? H(f) : !1, C = (f) => {
    const { isRangeStart: $, isRangeEnd: x } = le(f), B = t.range ? $ || x : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !n(f.value),
      dp__cell_disabled: n(f.value),
      dp__cell_highlight: !T(f) && (te(f) || _(f)) && !Z(f) && !B,
      dp__cell_highlight_active: !T(f) && (te(f) || _(f)) && Z(f),
      dp__today: !t.noToday && Ve(f.value, l.value) && f.current
    };
  }, X = (f) => ({
    dp__active_date: Z(f),
    dp__date_hover: K(f)
  }), J = (f) => ({
    ...ee(f),
    ...F(f),
    dp__range_between_week: b(f) && t.weekPicker
  }), le = (f) => {
    const $ = t.multiCalendars > 0 ? f.current && s(f) && z() : s(f) && z(), x = t.multiCalendars > 0 ? f.current && s(f, !1) && z() : s(f, !1) && z();
    return { isRangeStart: $, isRangeEnd: x };
  }, ee = (f) => {
    const { isRangeStart: $, isRangeEnd: x } = le(f);
    return {
      dp__range_start: $,
      dp__range_end: x,
      dp__range_between: b(f) && !t.weekPicker,
      dp__date_hover_start: h(K(f), f, !0),
      dp__date_hover_end: h(K(f), f, !1)
    };
  }, F = (f) => ({
    ...ee(f),
    dp__cell_auto_range: I(f),
    dp__cell_auto_range_start: j(f),
    dp__cell_auto_range_end: N(f)
  }), i = (f) => t.range ? t.autoRange ? F(f) : t.modelAuto ? { ...X(f), ...ee(f) } : ee(f) : t.weekPicker ? J(f) : X(f);
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
}, Mv = ["id", "onKeydown"], Rv = {
  key: 0,
  class: "dp__sidebar_left"
}, Iv = {
  key: 1,
  class: "dp__preset_ranges"
}, Nv = ["onClick"], Bv = {
  key: 2,
  class: "dp__sidebar_right"
}, Av = {
  key: 3,
  class: "dp__now_wrap"
}, Ev = /* @__PURE__ */ ge({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Ut
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
    const r = e, { setMenuFocused: a, setShiftKey: o, control: l } = Ki(), { getCalendarDays: u, defaults: d } = vt(r), p = Vt(), w = M(null), y = At({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), s = M([]), h = M([]), O = M(null), N = M(null), I = M(0), j = M(!1), H = M(0);
    ft(() => {
      var A;
      j.value = !0, !((A = r.presetRanges) != null && A.length) && !p["left-sidebar"] && !p["right-sidebar"] && he();
      const ie = Ze(N);
      if (ie && !r.textInput && !r.inline && (a(!0), T()), ie) {
        const it = (pt) => {
          ["action-row", "time-picker", "month-year"].some(
            (Gt) => Object.keys(p).includes(Gt)
          ) || pt.preventDefault(), pt.stopImmediatePropagation(), pt.stopPropagation();
        };
        ie.addEventListener("pointerdown", it), ie.addEventListener("mousedown", it);
      }
      window.addEventListener("resize", he);
    }), xo(() => {
      window.removeEventListener("resize", he);
    });
    const { arrowRight: D, arrowLeft: z, arrowDown: K, arrowUp: Z } = Ft(), te = (A) => {
      A || A === 0 ? h.value[A].triggerTransition(
        J.value(A),
        le.value(A)
      ) : h.value.forEach(
        (ie, it) => ie.triggerTransition(J.value(it), le.value(it))
      );
    }, T = () => {
      const A = Ze(N);
      A && A.focus({ preventScroll: !0 });
    }, _ = () => {
      var A;
      (A = r.flow) != null && A.length && H.value !== -1 && (H.value += 1, n("flow-step", H.value), Fe());
    }, b = () => {
      H.value = -1;
    }, {
      calendars: C,
      modelValue: X,
      month: J,
      year: le,
      time: ee,
      updateTime: F,
      updateMonthYear: i,
      selectDate: f,
      getWeekNum: $,
      monthYearSelect: x,
      handleScroll: B,
      handleArrow: G,
      handleSwipe: W,
      getMarker: S,
      selectCurrentDate: g,
      presetDateRange: L
    } = Nm(r, n, _, te, H), { setHoverDate: Oe, clearHoverDate: ae, getDayClassData: de } = Dv(X, r);
    bt(
      C,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Re = Ht(p, "calendar"), ot = Ht(p, "action"), ve = Ht(p, "timePicker"), dt = Ht(p, "monthYear"), et = k(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), He = k(() => Om(r.yearRange)), Ct = k(() => xm(r.locale, r.monthNameFormat)), he = () => {
      const A = Ze(w);
      A && (I.value = A.getBoundingClientRect().width);
    }, De = k(() => (A) => u(J.value(A), le.value(A))), Se = k(
      () => d.value.multiCalendars > 0 && r.range ? [...Array(d.value.multiCalendars).keys()] : [0]
    ), Dt = k(
      () => (A) => A === 1
    ), U = k(() => r.monthPicker || r.timePicker || r.yearPicker), q = k(
      () => ({
        dp__flex_display: d.value.multiCalendars > 0
      })
    ), me = k(() => ({
      dp__instance_calendar: d.value.multiCalendars > 0
    })), _e = k(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), Ye = k(
      () => (A) => Te(De, A)
    ), Ie = k(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), Te = (A, ie) => A.value(ie).map((it) => ({
      ...it,
      days: it.days.map((pt) => (pt.marker = S(pt), pt.classData = de(pt), pt))
    })), lt = (A) => {
      A.stopPropagation(), A.stopImmediatePropagation();
    }, v = () => {
      r.escClose && n("close-picker");
    }, E = (A, ie = !1) => {
      f(A, ie), r.spaceConfirm && n("select-date");
    }, ue = (A) => {
      var ie;
      (ie = r.flow) != null && ie.length && (y[A] = !0, Object.keys(y).filter((it) => !y[it]).length || Fe());
    }, ce = (A, ie, it, pt, ...Gt) => {
      if (r.flow[H.value] === A) {
        const se = pt ? ie.value[0] : ie.value;
        se && se[it](...Gt);
      }
    }, Fe = () => {
      ce("month", s, "toggleMonthPicker", !0, !0), ce("year", s, "toggleYearPicker", !0, !0), ce("calendar", O, "toggleTimePicker", !1, !1, !0), ce("time", O, "toggleTimePicker", !1, !0, !0);
      const A = r.flow[H.value];
      (A === "hours" || A === "minutes" || A === "seconds") && ce(A, O, "toggleTimePicker", !1, !0, !0, A);
    }, mt = (A) => {
      if (r.arrowNavigation) {
        if (A === "up")
          return Z();
        if (A === "down")
          return K();
        if (A === "left")
          return z();
        if (A === "right")
          return D();
      } else
        A === "left" || A === "up" ? G("left", 0, A === "up") : G("right", 0, A === "down");
    }, Mt = (A) => {
      o(A.shiftKey), !r.disableMonthYearSelect && A.code === "Tab" && A.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (A.preventDefault(), A.stopImmediatePropagation(), n("close-picker"));
    }, nn = (A) => {
      s.value[0] && s.value[0].handleMonthYearChange(A);
    };
    return t({
      updateMonthYear: i
    }), (A, ie) => {
      var it;
      return m(), re(wt, {
        appear: "",
        name: (it = c(d).transitions) == null ? void 0 : it.menuAppear,
        mode: "out-in",
        css: !!A.transitions
      }, {
        default: ne(() => {
          var pt, Gt;
          return [
            V("div", {
              id: A.uid ? `dp-menu-${A.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: N,
              role: "dialog",
              class: pe(c(Ie)),
              onMouseleave: ie[15] || (ie[15] = //@ts-ignore
              (...se) => c(ae) && c(ae)(...se)),
              onClick: lt,
              onKeydown: [
                we(v, ["esc"]),
                ie[16] || (ie[16] = we(Ke((se) => mt("left"), ["prevent"]), ["left"])),
                ie[17] || (ie[17] = we(Ke((se) => mt("up"), ["prevent"]), ["up"])),
                ie[18] || (ie[18] = we(Ke((se) => mt("down"), ["prevent"]), ["down"])),
                ie[19] || (ie[19] = we(Ke((se) => mt("right"), ["prevent"]), ["right"])),
                Mt
              ]
            }, [
              (A.disabled || A.readonly) && A.inline ? (m(), P("div", {
                key: 0,
                class: pe(c(_e))
              }, null, 2)) : R("", !0),
              !A.inline && !A.teleportCenter ? (m(), P("div", {
                key: 1,
                class: pe(c(et))
              }, null, 2)) : R("", !0),
              V("div", {
                class: pe({
                  dp__menu_content_wrapper: ((pt = A.presetRanges) == null ? void 0 : pt.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"]
                })
              }, [
                A.$slots["left-sidebar"] ? (m(), P("div", Rv, [
                  Q(A.$slots, "left-sidebar", nt(_t({ handleMonthYearChange: nn })))
                ])) : R("", !0),
                (Gt = A.presetRanges) != null && Gt.length ? (m(), P("div", Iv, [
                  (m(!0), P(be, null, Ne(A.presetRanges, (se, Qt) => (m(), P("div", {
                    key: Qt,
                    style: gt(se.style || {}),
                    class: "dp__preset_range",
                    onClick: ($e) => c(L)(se.range, !!se.slot)
                  }, [
                    se.slot ? Q(A.$slots, se.slot, {
                      key: 0,
                      presetDateRange: c(L),
                      label: se.label,
                      range: se.range
                    }) : (m(), P(be, { key: 1 }, [
                      ze(ke(se.label), 1)
                    ], 64))
                  ], 12, Nv))), 128))
                ])) : R("", !0),
                V("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: w,
                  role: "document"
                }, [
                  V("div", {
                    class: pe(c(q))
                  }, [
                    (m(!0), P(be, null, Ne(c(Se), (se, Qt) => (m(), P("div", {
                      key: se,
                      class: pe(c(me))
                    }, [
                      !A.disableMonthYearSelect && !A.timePicker ? (m(), re(hv, Xe({
                        key: 0,
                        ref_for: !0,
                        ref: ($e) => {
                          $e && (s.value[Qt] = $e);
                        },
                        months: c(Ct),
                        years: c(He),
                        month: c(J)(se),
                        year: c(le)(se),
                        instance: se,
                        "internal-model-value": e.internalModelValue
                      }, A.$props, {
                        onMount: ie[0] || (ie[0] = ($e) => ue("monthYearInput")),
                        onResetFlow: b,
                        onUpdateMonthYear: ($e) => c(i)(se, $e),
                        onMonthYearSelect: c(x),
                        onOverlayClosed: T
                      }), yt({ _: 2 }, [
                        Ne(c(dt), ($e, ou) => ({
                          name: $e,
                          fn: ne((qr) => [
                            Q(A.$slots, $e, nt(_t(qr)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : R("", !0),
                      xe(av, Xe({
                        ref_for: !0,
                        ref: ($e) => {
                          $e && (h.value[Qt] = $e);
                        },
                        "specific-mode": c(U),
                        "get-week-num": c($),
                        instance: se,
                        "mapped-dates": c(Ye)(se),
                        month: c(J)(se),
                        year: c(le)(se)
                      }, A.$props, {
                        "flow-step": H.value,
                        "onUpdate:flowStep": ie[1] || (ie[1] = ($e) => H.value = $e),
                        onSelectDate: ($e) => c(f)($e, !c(Dt)(se)),
                        onHandleSpace: ($e) => E($e, !c(Dt)(se)),
                        onSetHoverDate: ie[2] || (ie[2] = ($e) => c(Oe)($e)),
                        onHandleScroll: ($e) => c(B)($e, se),
                        onHandleSwipe: ($e) => c(W)($e, se),
                        onMount: ie[3] || (ie[3] = ($e) => ue("calendar")),
                        onResetFlow: b,
                        onTooltipOpen: ie[4] || (ie[4] = ($e) => A.$emit("tooltip-open", $e)),
                        onTooltipClose: ie[5] || (ie[5] = ($e) => A.$emit("tooltip-close", $e))
                      }), yt({ _: 2 }, [
                        Ne(c(Re), ($e, ou) => ({
                          name: $e,
                          fn: ne((qr) => [
                            Q(A.$slots, $e, nt(_t({ ...qr })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  V("div", null, [
                    A.$slots["time-picker"] ? Q(A.$slots, "time-picker", nt(Xe({ key: 0 }, { time: c(ee), updateTime: c(F) }))) : (m(), P(be, { key: 1 }, [
                      A.enableTimePicker && !A.monthPicker && !A.weekPicker ? (m(), re(Cv, Xe({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: O,
                        hours: c(ee).hours,
                        minutes: c(ee).minutes,
                        seconds: c(ee).seconds,
                        "internal-model-value": e.internalModelValue
                      }, A.$props, {
                        onMount: ie[6] || (ie[6] = (se) => ue("timePicker")),
                        "onUpdate:hours": ie[7] || (ie[7] = (se) => c(F)(se)),
                        "onUpdate:minutes": ie[8] || (ie[8] = (se) => c(F)(se, !1)),
                        "onUpdate:seconds": ie[9] || (ie[9] = (se) => c(F)(se, !1, !0)),
                        onResetFlow: b,
                        onOverlayClosed: T,
                        onOverlayOpened: ie[10] || (ie[10] = (se) => A.$emit("time-picker-open", se))
                      }), yt({ _: 2 }, [
                        Ne(c(ve), (se, Qt) => ({
                          name: se,
                          fn: ne(($e) => [
                            Q(A.$slots, se, nt(_t($e)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : R("", !0)
                    ], 64))
                  ])
                ], 512),
                A.$slots["right-sidebar"] ? (m(), P("div", Bv, [
                  Q(A.$slots, "right-sidebar", nt(_t({ handleMonthYearChange: nn })))
                ])) : R("", !0),
                A.showNowButton ? (m(), P("div", Av, [
                  A.$slots["now-button"] ? Q(A.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: c(g)
                  }) : R("", !0),
                  A.$slots["now-button"] ? R("", !0) : (m(), P("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ie[11] || (ie[11] = //@ts-ignore
                    (...se) => c(g) && c(g)(...se))
                  }, ke(A.nowButtonLabel), 1))
                ])) : R("", !0)
              ], 2),
              !A.autoApply || A.keepActionRow ? (m(), re(Qm, Xe({
                key: 2,
                "menu-mount": j.value,
                "calendar-width": I.value,
                "internal-model-value": e.internalModelValue
              }, A.$props, {
                onClosePicker: ie[12] || (ie[12] = (se) => A.$emit("close-picker")),
                onSelectDate: ie[13] || (ie[13] = (se) => A.$emit("select-date")),
                onInvalidSelect: ie[14] || (ie[14] = (se) => A.$emit("invalid-select"))
              }), yt({ _: 2 }, [
                Ne(c(ot), (se, Qt) => ({
                  name: se,
                  fn: ne(($e) => [
                    Q(A.$slots, se, nt(_t({ ...$e })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : R("", !0)
            ], 42, Mv)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Yv = typeof window < "u" ? window : void 0, ia = () => {
}, Vv = (e) => uu() ? (su(e), !0) : !1, Fv = (e, t, n, r) => {
  if (!e)
    return ia;
  let a = ia;
  const o = bt(
    () => c(e),
    (u) => {
      a(), u && (u.addEventListener(t, n, r), a = () => {
        u.removeEventListener(t, n, r), a = ia;
      });
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    o(), a();
  };
  return Vv(l), l;
}, Uv = (e, t, n, r = {}) => {
  const { window: a = Yv, event: o = "pointerdown" } = r;
  return a ? Fv(a, o, (l) => {
    const u = Ze(e), d = Ze(t);
    !u || !d || u === l.target || l.composedPath().includes(u) || l.composedPath().includes(d) || n(l);
  }, { passive: !0 }) : void 0;
}, Wv = /* @__PURE__ */ ge({
  __name: "VueDatePicker",
  props: {
    ...Ut
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
    const r = e, a = Vt(), o = M(!1), l = nr(r, "modelValue"), u = nr(r, "timezone"), d = M(null), p = M(null), w = M(!1), y = M(null), { setMenuFocused: s, setShiftKey: h } = Ki(), { clearArrowNav: O } = Ft(), { validateDate: N, isValidTime: I, defaults: j } = vt(r);
    ft(() => {
      C(r.modelValue), r.inline || (T(y.value).addEventListener("scroll", f), window.addEventListener("resize", $)), r.inline && (o.value = !0);
    }), xo(() => {
      if (!r.inline) {
        const he = T(y.value);
        he && he.removeEventListener("scroll", f), window.removeEventListener("resize", $);
      }
    });
    const H = Ht(a, "all", r.presetRanges), D = Ht(a, "input");
    bt(
      [l, u],
      () => {
        C(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: z, menuPosition: K, setMenuPosition: Z, setInitialPosition: te, getScrollableParent: T } = Em(
      d,
      p,
      n,
      r
    ), {
      inputValue: _,
      internalModelValue: b,
      parseExternalModelValue: C,
      emitModelValue: X,
      formatInputValue: J,
      checkBeforeEmit: le
    } = Bm(n, r, w), ee = k(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), F = k(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), i = k(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), f = () => {
      o.value && (r.closeOnScroll ? ae() : Z());
    }, $ = () => {
      o.value && Z();
    }, x = () => {
      !r.disabled && !r.readonly && (te(), o.value = !0, St().then(() => {
        Z(), o.value && n("open");
      }), o.value || Oe(), C(r.modelValue));
    }, B = () => {
      _.value = "", Oe(), n("update:model-value", null), n("cleared"), ae();
    }, G = () => {
      const he = b.value;
      return !he || !Array.isArray(he) && N(he) ? !0 : Array.isArray(he) ? he.length === 2 && N(he[0]) && N(he[1]) ? !0 : N(he[0]) : !1;
    }, W = () => {
      le() && G() ? (X(), ae()) : n("invalid-select", b.value);
    }, S = (he) => {
      g(), X(), r.closeOnAutoApply && !he && ae();
    }, g = () => {
      p.value && r.textInput && p.value.setParsedDate(b.value);
    }, L = (he = !1) => {
      r.autoApply && I(b.value) && G() && (r.range && Array.isArray(b.value) ? (r.partialRange || b.value.length === 2) && S(he) : S(he));
    }, Oe = () => {
      r.textInput || (b.value = null);
    }, ae = () => {
      r.inline || (o.value && (o.value = !1, s(!1), h(!1), O(), n("closed"), te(), _.value && C(l.value)), Oe(), p.value && p.value.focusInput());
    }, de = (he, De) => {
      if (!he) {
        b.value = null;
        return;
      }
      b.value = he, De && (W(), n("text-submit"));
    }, Re = () => {
      r.autoApply && I(b.value) && X(), g();
    }, ot = () => o.value ? ae() : x(), ve = (he) => {
      b.value = he;
    }, dt = k(() => r.textInput && j.value.textInputOptions.format), et = () => {
      dt.value && (w.value = !0, J()), n("focus");
    }, He = () => {
      dt.value && (w.value = !1, J()), n("blur");
    }, Ct = (he) => {
      d.value && d.value.updateMonthYear(0, {
        month: hi(he.month),
        year: hi(he.year)
      });
    };
    return Uv(
      d,
      p,
      r.onClickOutside ? () => r.onClickOutside(G) : ae
    ), t({
      closeMenu: ae,
      selectDate: W,
      clearValue: B,
      openMenu: x,
      onScroll: f,
      formatInputValue: J,
      // exposed for testing purposes
      updateInternalModelValue: ve,
      // modify internal modelValue
      setMonthYear: Ct
    }), (he, De) => (m(), P("div", {
      class: pe(c(ee)),
      ref_key: "pickerWrapperRef",
      ref: y
    }, [
      xe(zm, Xe({
        ref_key: "inputRef",
        ref: p,
        "is-menu-open": o.value,
        "input-value": c(_),
        "onUpdate:inputValue": De[0] || (De[0] = (Se) => Ge(_) ? _.value = Se : null)
      }, he.$props, {
        onClear: B,
        onOpen: x,
        onSetInputDate: de,
        onSetEmptyDate: c(X),
        onSelectDate: W,
        onToggle: ot,
        onClose: ae,
        onFocus: et,
        onBlur: He
      }), yt({ _: 2 }, [
        Ne(c(D), (Se, Dt) => ({
          name: Se,
          fn: ne((U) => [
            Q(he.$slots, Se, nt(_t(U)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (m(), re(ki(he.teleport ? lu : "div"), nt(Xe({ key: 0 }, c(i))), {
        default: ne(() => [
          o.value ? (m(), re(Ev, Xe({
            key: 0,
            ref_key: "dpMenuRef",
            ref: d,
            class: c(F),
            style: c(K),
            "open-on-top": c(z)
          }, he.$props, {
            "internal-model-value": c(b),
            "onUpdate:internalModelValue": De[1] || (De[1] = (Se) => Ge(b) ? b.value = Se : null),
            onClosePicker: ae,
            onSelectDate: W,
            onAutoApply: L,
            onTimeUpdate: Re,
            onFlowStep: De[2] || (De[2] = (Se) => he.$emit("flow-step", Se)),
            onUpdateMonthYear: De[3] || (De[3] = (Se) => he.$emit("update-month-year", Se)),
            onInvalidSelect: De[4] || (De[4] = (Se) => he.$emit("invalid-select", c(b))),
            onInvalidFixedRange: De[5] || (De[5] = (Se) => he.$emit("invalid-fixed-range", Se)),
            onRecalculatePosition: c(Z),
            onTooltipOpen: De[6] || (De[6] = (Se) => he.$emit("tooltip-open", Se)),
            onTooltipClose: De[7] || (De[7] = (Se) => he.$emit("tooltip-close", Se)),
            onTimePickerOpen: De[8] || (De[8] = (Se) => he.$emit("time-picker-open", Se))
          }), yt({ _: 2 }, [
            Ne(c(H), (Se, Dt) => ({
              name: Se,
              fn: ne((U) => [
                Q(he.$slots, Se, nt(_t({ ...U })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : R("", !0)
        ]),
        _: 3
      }, 16)) : R("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ (() => {
  const e = Wv;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Lv).forEach(([e, t]) => {
  e !== "default" && (Uo[e] = t);
});
const Hv = { class: "custom-date-picker__container" }, zv = ["value", "disabled", "placeholder", "onInput", "onFocus", "onKeydown"], jv = ["onClick"], qv = { class: "custom-date-picker__icon" }, Gv = {
  key: 0,
  class: "custom-date-picker__error"
}, Qv = /* @__PURE__ */ ge({
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
    const n = e, r = M(!1), a = M(null), o = k({
      get() {
        return n.modelValue;
      },
      set(h) {
        t("update:model-value", h);
      }
    }), l = k(() => n.range ? "dd/MM/yy" : "dd/MM/yyyy"), u = k(() => Array.isArray(o.value) ? o.value.length > 0 : !!o.value), d = k(() => ({
      "custom-date-picker__input-container": !0,
      "custom-date-picker__input-container--dark": n.dark,
      "custom-date-picker__input-container--disabled": n.disabled,
      "custom-date-picker__input-container--outlined": n.outlined,
      "custom-date-picker__input-container--error": !!n.errorMessage,
      "custom-date-picker__input-container--opened": r.value || u.value
    })), p = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), w = () => {
      a.value && a.value.openMenu();
    }, y = () => {
      r.value = !0;
    }, s = () => {
      r.value = !1;
    };
    return (h, O) => (m(), P("div", Hv, [
      xe(c(Uo), {
        ref_key: "datepicker",
        ref: a,
        modelValue: c(o),
        "onUpdate:modelValue": O[1] || (O[1] = (N) => Ge(o) ? o.value = N : null),
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
        "enable-time-picker": !1,
        class: "custom-date-picker__picker",
        onOpen: y,
        onClosed: s
      }, {
        "dp-input": ne(({ value: N, onClear: I, onInput: j, onEnter: H }) => [
          V("div", {
            class: pe(c(d))
          }, [
            V("input", {
              readonly: "",
              type: "text",
              value: N,
              disabled: e.disabled,
              placeholder: e.placeholder,
              class: "custom-date-picker__input",
              onClick: O[0] || (O[0] = Ke(() => {
              }, ["stop"])),
              onInput: j,
              onFocus: Ke(w, ["stop"]),
              onKeydown: we(H, ["enter"])
            }, null, 40, zv),
            V("div", {
              class: "custom-date-picker__clear",
              onClick: Ke(I, ["stop"])
            }, [
              N && !e.readonly && !e.disabled ? (m(), re(Qe, {
                key: 0,
                size: "1rem",
                color: "neutro-4",
                name: "fas-circle-xmark"
              })) : R("", !0)
            ], 8, jv),
            V("div", qv, [
              e.disabled ? R("", !0) : (m(), re(Qe, {
                key: 0,
                size: "1rem",
                color: c(p),
                name: "far-calendar-days"
              }, null, 8, ["color"]))
            ])
          ], 2)
        ]),
        "arrow-right": ne(() => [
          xe(Qe, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fas-circle-chevron-right"
          })
        ]),
        "arrow-left": ne(() => [
          xe(Qe, {
            size: "1.5rem",
            color: "acento-principal",
            name: "fas-circle-chevron-left"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "range", "format", "max-date", "min-date", "disabled", "readonly"]),
      e.errorMessage ? (m(), P("div", Gv, ke(e.errorMessage), 1)) : R("", !0)
    ]));
  }
});
const Wo = /* @__PURE__ */ Me(Qv, [["__scopeId", "data-v-4994f401"]]), nu = (e, t, n) => {
  const r = t.length - 1;
  if (r < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < r; a++) {
    if (e == null)
      return n;
    e = e[t[a]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}, Zv = (e, t, n) => e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)]/g, ".$1"), t = t.replace(/^\./, ""), nu(e, t.split("."), n)), Xv = (e, t, n) => {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e))
    return n === void 0 ? e : n;
  if (typeof t == "string")
    return Zv(e, t, n);
  if (Array.isArray(t))
    return nu(e, t, n);
  if (typeof t != "function")
    return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}, Kv = () => ({
  getPropertyFromItem: Xv
}), Jv = ["onMousedown"], eh = ["value", "placeholder", "onKeydown"], th = ["onClick"], nh = { class: "custom-select__icon" }, rh = {
  key: 0,
  class: "custom-select__search-container"
}, ah = ["onClick"], oh = {
  key: 0,
  class: "custom-select__error"
}, lh = /* @__PURE__ */ ge({
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
    We(($) => ({
      "2f6887ca": e.textTransform,
      "006fc220": a.value,
      "0d84b89c": o.value,
      b8a1b05e: l.value
    }));
    const { getPropertyFromItem: r } = Kv(), a = M(""), o = M(""), l = M(""), u = M(""), d = M(!1), p = M(!1), w = M(!1), y = M(null), s = M(null), h = M(null), O = k({
      get() {
        return n.modelValue;
      },
      set($) {
        t("update:model-value", $);
      }
    }), N = k(
      () => H.value && n.clearable && !n.readonly && !n.disabled
    ), I = k(() => n.dark ? n.disabled ? "neutro-3" : "neutro-1" : n.disabled ? "neutro-4" : "acento-principal"), j = k(() => !n.searchable || !u.value ? n.items : n.items.filter(($) => {
      const x = u.value.trim().toLowerCase();
      return x ? K($).toLowerCase().includes(x) : !0;
    })), H = k(() => Array.isArray(O.value) ? O.value.length > 0 : !!O.value), D = k(() => ({
      "custom-select__text-container": !0,
      "custom-select__text-container--dark": n.dark,
      "custom-select__text-container--opened": d.value,
      "custom-select__text-container--active": H.value,
      "custom-select__text-container--disabled": n.disabled,
      "custom-select__text-container--outlined": n.outlined,
      "custom-select__text-container--error": !!n.errorMessage
    })), z = k(() => {
      var $;
      if (O.value)
        if (Array.isArray(O.value)) {
          if (O.value.length > 0)
            return n.textMultiple;
        } else {
          if (n.returnObject)
            return r(O.value, n.itemTitle, O.value);
          {
            const x = ($ = n.items) == null ? void 0 : $.find((B) => {
              const G = r(B, n.itemValue, B), W = r(O.value, n.itemValue, O.value);
              return G === W;
            });
            return r(x, n.itemTitle, x);
          }
        }
      return "";
    }), K = ($) => r($, n.itemTitle, $), Z = () => {
      p.value = !0;
    }, te = () => {
      p.value = !1;
    }, T = ($) => ({
      "custom-select__menu-item": !0,
      "custom-select__menu-item--selected": i($)
    }), _ = async () => {
      await St();
      const $ = s.value, x = h.value;
      if (!$ || !x)
        return;
      const B = $.getBoundingClientRect(), G = x.getBoundingClientRect();
      o.value = `${B.left}px`, l.value = `${B.width}px`;
      const W = B.top + B.height + G.height, S = window.innerHeight, g = B.top + B.height - (n.errorMessage ? 18 : 0);
      if (W > S) {
        const L = W - S;
        a.value = `${g - L - 16}px`;
      } else
        a.value = `${g}px`;
    }, b = () => {
      n.disabled || n.readonly || d.value || (d.value = !0, _(), w.value = !0, document.addEventListener("click", le));
    }, C = () => {
      d.value = !1, p.value = !1, w.value = !1, document.removeEventListener("click", le);
    }, X = () => {
      p.value || C();
    }, J = () => {
      d.value && C();
    }, le = ($) => {
      !s.value || !$.target || s.value.contains($.target) || C();
    }, ee = () => {
      n.disabled || n.readonly || (d.value ? (C(), y.value && y.value.focus()) : (b(), y.value && y.value.blur()));
    }, F = ($) => {
      const x = r($, n.itemValue, $);
      if (n.multiple && Array.isArray(O.value)) {
        const B = O.value.slice(), G = n.returnObject ? B.findIndex((W) => r(W, n.itemValue, W) === x) : B.indexOf(x);
        G >= 0 ? B.splice(G, 1) : B.push(n.returnObject ? $ : x), O.value = B;
      } else
        O.value = n.returnObject ? $ : x, C();
    }, i = ($) => {
      if (n.multiple && Array.isArray(O.value))
        return O.value.some((G) => {
          const W = r(G, n.itemValue, G), S = r($, n.itemValue, $);
          return W === S;
        });
      const x = r(O.value, n.itemValue, O.value), B = r($, n.itemValue, $);
      return x === B;
    }, f = () => {
      Array.isArray(O.value) ? O.value = [] : O.value = null;
    };
    return ($, x) => (m(), P("div", {
      ref_key: "container",
      ref: s,
      class: "custom-select__container",
      onMouseenter: Z,
      onMouseleave: te
    }, [
      V("div", {
        class: pe(c(D)),
        onMousedown: Ke(ee, ["stop"])
      }, [
        V("input", {
          ref_key: "input",
          ref: y,
          readonly: "",
          value: c(z),
          placeholder: e.placeholder,
          class: "custom-select__text",
          onFocus: b,
          onBlur: X,
          onKeydown: we(J, ["tab"])
        }, null, 40, eh),
        V("div", {
          class: "custom-select__clear",
          onMousedown: x[0] || (x[0] = Ke(() => {
          }, ["stop"])),
          onClick: Ke(f, ["stop"])
        }, [
          c(N) ? (m(), re(Qe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fas-circle-xmark"
          })) : R("", !0)
        ], 40, th),
        V("div", nh, [
          xe(Qe, {
            size: "1rem",
            color: c(I),
            name: "fas-caret-down"
          }, null, 8, ["color"])
        ])
      ], 42, Jv),
      xe(wt, null, {
        default: ne(() => [
          d.value ? (m(), P("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: h,
            class: "custom-select__menu"
          }, [
            e.searchable ? (m(), P("div", rh, [
              Nt(V("input", {
                "onUpdate:modelValue": x[1] || (x[1] = (B) => u.value = B),
                type: "text",
                placeholder: "Buscar",
                class: "custom-select__search",
                onClick: x[2] || (x[2] = Ke(() => {
                }, ["stop"]))
              }, null, 512), [
                [ua, u.value]
              ]),
              xe(Qe, {
                size: "1rem",
                color: "acento-principal",
                name: "fas-magnifying-glass"
              })
            ])) : R("", !0),
            (m(!0), P(be, null, Ne(c(j), (B, G) => (m(), P("div", {
              key: `item-${G}`,
              class: pe(T(B)),
              onClick: Ke((W) => F(B), ["stop"])
            }, [
              e.multiple ? (m(), re($i, {
                key: 0,
                "model-value": i(B)
              }, null, 8, ["model-value"])) : R("", !0),
              ze(" " + ke(K(B)), 1)
            ], 10, ah))), 128))
          ], 512)) : R("", !0)
        ]),
        _: 1
      }),
      e.errorMessage ? (m(), P("div", oh, ke(e.errorMessage), 1)) : R("", !0)
    ], 544));
  }
});
const Lo = /* @__PURE__ */ Me(lh, [["__scopeId", "data-v-1e538e22"]]), ih = { class: "custom-text-field__container" }, uh = ["type", "disabled", "readonly", "placeholder"], sh = {
  key: 0,
  class: "custom-text-field__error"
}, ch = /* @__PURE__ */ ge({
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
    We((I) => ({
      "132d79fc": c(u),
      fc3ee0f4: c(l)
    }));
    const r = Vt(), a = M(!1), o = k({
      get() {
        return n.modelValue;
      },
      set(I) {
        n.disabled || n.readonly || t("update:model-value", I);
      }
    }), l = k(() => {
      let I = "1fr";
      return n.clearable && (I += " 1rem"), p() && (I += " 1rem"), I;
    }), u = k(() => n.clearable || p() ? "0.75rem" : 0), d = k(() => ({
      "custom-text-field__input-container": !0,
      "custom-text-field__input-container--dark": n.dark,
      "custom-text-field__input-container--outlined": n.outlined,
      "custom-text-field__input-container--disabled": n.disabled,
      "custom-text-field__input-container--error": !!n.errorMessage,
      "custom-text-field__input-container--focused": a.value || !!o.value
    })), p = () => !!r.append, w = () => {
      o.value && (o.value = "");
    }, y = (I) => {
      n.disabled || n.readonly || (a.value = !0, t("focus", I));
    }, s = (I) => {
      n.disabled || n.readonly || (a.value = !1, t("blur", I));
    }, h = (I) => {
      n.disabled || n.readonly || t("input", I);
    }, O = (I) => {
      n.disabled || n.readonly || t("keyup", I);
    }, N = (I) => {
      n.disabled || n.readonly || t("keydown", I);
    };
    return (I, j) => (m(), P("div", ih, [
      V("div", {
        class: pe(c(d))
      }, [
        Nt(V("input", {
          "onUpdate:modelValue": j[0] || (j[0] = (H) => Ge(o) ? o.value = H : null),
          type: e.type,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          class: "custom-text-field__input",
          onBlur: s,
          onFocus: y,
          onInput: h,
          onKeyup: O,
          onKeydown: N
        }, null, 40, uh), [
          [cu, c(o)]
        ]),
        e.clearable && !e.disabled && !e.readonly ? (m(), P("div", {
          key: 0,
          class: "custom-text-field__button",
          onClick: w
        }, [
          c(o) ? (m(), re(Qe, {
            key: 0,
            size: "1rem",
            color: "neutro-4",
            name: "fas-circle-xmark"
          })) : R("", !0)
        ])) : R("", !0),
        p() ? Q(I.$slots, "append", { key: 1 }, void 0, !0) : R("", !0)
      ], 2),
      e.errorMessage ? (m(), P("div", sh, ke(e.errorMessage), 1)) : R("", !0)
    ]));
  }
});
const Ho = /* @__PURE__ */ Me(ch, [["__scopeId", "data-v-8e17ae9c"]]), fh = (e, t) => {
  const n = M(null), r = M(1), a = M("asc"), o = k(() => {
    const D = e.value.slice();
    return n.value ? D.sort((z, K) => {
      if (!n.value)
        return 0;
      const Z = h(z, n.value.value), te = h(K, n.value.value);
      let T = Z > te ? 1 : -1;
      return n.value.sort && (T = n.value.sort(Z, te)), a.value === "asc" ? T : T * -1;
    }) : D;
  }), l = k(() => Math.ceil(e.value.length / t.value)), u = k(() => o.value.slice(
    (r.value - 1) * t.value,
    r.value * t.value
  )), d = k(() => a.value), p = () => {
    r.value < l.value && r.value++;
  }, w = () => {
    r.value > 1 && r.value--;
  }, y = (D) => D.id ?? Object.values(D)[0], s = (D, z) => {
    const K = z.value;
    return `${y(D)}.${K}`;
  }, h = (D, z) => D[z] ?? "";
  return {
    // Computed
    pageCount: l,
    currentPage: r,
    itemsCurrentPage: u,
    // Methods
    setItems: (D) => {
      e.value = D;
    },
    nextPage: p,
    setSortBy: (D) => {
      var z;
      r.value = 1, ((z = n.value) == null ? void 0 : z.value) === D.value ? a.value === "asc" ? a.value = "desc" : (n.value = null, a.value = "asc") : (n.value = D, a.value = "asc");
    },
    getRowKey: y,
    getCellKey: s,
    isSortedBy: (D) => {
      var z;
      return ((z = n.value) == null ? void 0 : z.value) === D;
    },
    getSortOrder: d,
    getCellValue: h,
    previousPage: w,
    setCurrentPage: (D) => {
      r.value = D;
    },
    setItemsPerPage: (D) => {
      t.value = D;
    }
  };
}, dh = /* @__PURE__ */ ge({
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
    },
    borderRadius: {
      default: "1rem",
      type: String
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    We((I) => ({
      "2167b3d2": e.containerSize,
      "75633b49": e.borderRadius,
      fc2fcb06: c(w),
      a5eb0b1c: o.value,
      "16c995de": l.value
    }));
    const r = Vt(), a = kt(), o = M("initial"), l = M("initial"), u = M(null), d = k(() => ({
      "icon-button__tooltip-container": !0,
      "icon-button__tooltip-container--disabled": n.disabled
    })), p = k(() => ({
      "icon-button__button": !0,
      "icon-button__button--disabled": n.disabled,
      "icon-button__button--background": !!n.backgroundColor,
      "icon-button__button--background-disabled": n.disabled && n.backgroundColor
    })), w = k(() => n.backgroundColor ? a.getRealColor(n.backgroundColor) : ""), y = k(
      () => n.disabled ? "neutro-4" : n.color
    ), s = () => !!r.default, h = () => {
      if (!u.value)
        return;
      const I = u.value.getBoundingClientRect(), j = I.x + I.width;
      I.x < 0 ? (o.value = "0", l.value = "initial") : j >= window.innerWidth ? (o.value = "initial", l.value = "0") : (o.value = "initial", l.value = "initial");
    }, O = () => {
      o.value = "", l.value = "";
    }, N = (I) => {
      t("click", I);
    };
    return (I, j) => (m(), P("div", {
      class: pe(c(d))
    }, [
      V("div", {
        class: pe(c(p)),
        onClick: N,
        onMouseenter: h,
        onMouseleave: O
      }, [
        e.icon.startsWith("fa") ? (m(), re(Qe, {
          key: 0,
          name: e.icon,
          size: e.size,
          color: c(y)
        }, null, 8, ["name", "size", "color"])) : (m(), re(Yt, {
          key: 1,
          src: e.icon,
          size: e.size,
          color: c(y)
        }, null, 8, ["src", "size", "color"]))
      ], 34),
      s() ? (m(), P("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: u,
        class: "icon-button__tooltip"
      }, [
        Q(I.$slots, "default", {}, void 0, !0)
      ], 512)) : R("", !0)
    ], 2));
  }
});
const Oo = /* @__PURE__ */ Me(dh, [["__scopeId", "data-v-62622f09"]]), ph = { class: "data-table__container" }, yh = {
  class: "data-table__table",
  "aria-describedby": "Reutility"
}, mh = { class: "data-table__head" }, vh = ["onClick"], hh = { class: "data-table__header-text" }, gh = { class: "data-table__body" }, _h = {
  key: 0,
  class: "data-table__row--empty"
}, bh = {
  key: 0,
  class: "data-table__footer"
}, wh = { class: "data-table__footer-buttons" }, kh = ["onClick"], $h = /* @__PURE__ */ ge({
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
    We((T) => ({
      "4c513d9c": e.height,
      "543690f0": e.gridTemplateColumns
    }));
    const n = k(() => t.items), r = k(() => t.itemsPerPage), a = Vt(), o = fh(n, r), l = o.pageCount, u = o.currentPage, d = o.itemsCurrentPage, p = k(() => {
      const T = u.value;
      let _;
      return T === 1 ? _ = [T, T + 1, T + 2] : T === l.value ? _ = [T - 2, T - 1, T] : _ = [T - 1, T, T + 1], _.filter((b) => b > 0 && b <= l.value);
    }), w = o.nextPage, y = o.getRowKey, s = o.getCellKey, h = o.getCellValue, O = o.previousPage, N = o.setCurrentPage, I = (T) => !!a[T], j = (T) => o.isSortedBy(T) ? o.getSortOrder.value === "asc" ? "fad-sort-down" : "fad-sort-up" : "fas-sort", H = (T) => {
      T.sortable !== !1 && o.setSortBy(T);
    }, D = (T) => ({
      "data-table__footer-page": !0,
      "data-table__footer-page--selected": T === u.value
    }), z = (T) => ({
      "data-table__sort-icon": !0,
      "data-table__sort-icon--active": o.isSortedBy(T)
    }), K = (T) => ({
      "data-table__th": !0,
      "data-table__th--sortable": T.sortable !== !1
    }), Z = (T) => ({
      "data-table__row": !0,
      "data-table__row--selected": T[t.compareSelectedWith] === t.selected,
      "data-table__row--disabled": t.disabledKey && t.disabledValue && T[t.disabledKey] === t.disabledValue
    }), te = (T) => o.isSortedBy(T) ? "acento-secundario" : "neutro-3";
    return (T, _) => (m(), P("div", ph, [
      V("table", yh, [
        V("thead", mh, [
          V("tr", null, [
            (m(!0), P(be, null, Ne(e.headers, (b) => (m(), P("th", {
              key: b.value,
              class: pe(K(b)),
              onClick: (C) => H(b)
            }, [
              V("div", hh, ke(b.text), 1),
              b.sortable !== !1 ? (m(), P("div", {
                key: 0,
                class: pe(z(b.value))
              }, [
                xe(Qe, {
                  name: j(b.value),
                  color: te(b.value)
                }, null, 8, ["name", "color"])
              ], 2)) : R("", !0)
            ], 10, vh))), 128))
          ])
        ]),
        V("tbody", gh, [
          e.items.length === 0 ? (m(), P("tr", _h, [
            I("no-data") ? R("", !0) : (m(), P(be, { key: 0 }, [
              !e.hideNoDataIcon && e.noDataIcon.startsWith("fa") ? (m(), re(Qe, {
                key: 0,
                size: "5rem",
                color: "neutro-4",
                name: e.noDataIcon
              }, null, 8, ["name"])) : e.hideNoDataIcon ? R("", !0) : (m(), re(Yt, {
                key: 1,
                size: "5rem",
                color: "neutro-4",
                src: e.noDataIcon
              }, null, 8, ["src"])),
              ze(" " + ke(e.noDataText), 1)
            ], 64)),
            Q(T.$slots, "no-data", {}, void 0, !0)
          ])) : R("", !0),
          (m(!0), P(be, null, Ne(c(d), (b) => (m(), P("tr", {
            key: c(y)(b),
            class: pe(Z(b))
          }, [
            (m(!0), P(be, null, Ne(e.headers, (C) => (m(), P("td", {
              key: c(s)(b, C)
            }, [
              I(C.value) ? Q(T.$slots, C.value, {
                key: 0,
                item: b
              }, void 0, !0) : (m(), P(be, { key: 1 }, [
                ze(ke(c(h)(b, C.value)), 1)
              ], 64))
            ]))), 128))
          ], 2))), 128))
        ])
      ]),
      c(l) > 1 ? (m(), P("div", bh, [
        xe(Oo, {
          size: "1rem",
          icon: "fas-arrow-left",
          color: "acento-principal",
          disabled: c(u) === 1,
          onClick: c(O)
        }, null, 8, ["disabled", "onClick"]),
        V("div", wh, [
          (m(!0), P(be, null, Ne(c(p), (b) => (m(), P("button", {
            key: `page-${b}`,
            class: pe(D(b)),
            onClick: (C) => c(N)(b)
          }, ke(b), 11, kh))), 128))
        ]),
        xe(Oo, {
          size: "1rem",
          icon: "fas-arrow-right",
          color: "acento-principal",
          disabled: c(u) === c(l),
          onClick: c(w)
        }, null, 8, ["disabled", "onClick"])
      ])) : R("", !0)
    ]));
  }
});
const Oh = /* @__PURE__ */ Me($h, [["__scopeId", "data-v-7b8d889a"]]), xh = /* @__PURE__ */ ge({
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
    return (a, o) => (m(), re(Jt, {
      "font-size": "1rem",
      color: c(n),
      "line-height": "1.25rem",
      "text-align": e.textAlign,
      "font-weight": c(r),
      "text-transform": e.textTransform
    }, {
      default: ne(() => [
        Q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["color", "text-align", "font-weight", "text-transform"]));
  }
}), Sh = { class: "filter-date-picker__container" }, Ph = { class: "filter-date-picker__label" }, Th = /* @__PURE__ */ ge({
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
    return (a, o) => (m(), P("div", Sh, [
      V("div", Ph, ke(e.label), 1),
      xe(Wo, {
        modelValue: c(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ge(r) ? r.value = l : null),
        range: e.range,
        "max-date": e.maxDate,
        "min-date": e.minDate,
        placeholder: e.placeholder
      }, null, 8, ["modelValue", "range", "max-date", "min-date", "placeholder"])
    ]));
  }
});
const Ch = /* @__PURE__ */ Me(Th, [["__scopeId", "data-v-279f171d"]]), Dh = { class: "filter-select__container" }, Mh = { class: "filter-select__label" }, Rh = /* @__PURE__ */ ge({
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
    return (a, o) => (m(), P("div", Dh, [
      V("div", Mh, ke(e.label), 1),
      xe(Lo, {
        modelValue: c(r),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => Ge(r) ? r.value = l : null),
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
const Ih = /* @__PURE__ */ Me(Rh, [["__scopeId", "data-v-feb1008c"]]), Nh = { class: "flex__container" }, Bh = /* @__PURE__ */ ge({
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
    })), (t, n) => (m(), P("div", Nh, [
      Q(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ru = /* @__PURE__ */ Me(Bh, [["__scopeId", "data-v-eaa92100"]]), Ah = { class: "form-date-picker__container" }, Eh = { class: "form-date-picker__label" }, Yh = /* @__PURE__ */ ge({
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
      "09c329ec": e.gridTemplateColumns,
      "4fd55502": c(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, l) => (m(), P("div", Ah, [
      V("div", Eh, ke(e.label), 1),
      xe(Wo, {
        modelValue: c(r),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Ge(r) ? r.value = u : null),
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
const Vh = /* @__PURE__ */ Me(Yh, [["__scopeId", "data-v-0c79f251"]]), Fh = { class: "form-select__container" }, Uh = { class: "form-select__label" }, Wh = /* @__PURE__ */ ge({
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
      "4f9d5d3c": e.gridTemplateColumns,
      "763dc290": c(a)
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(o) {
        t("update:model-value", o);
      }
    }), a = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (o, l) => (m(), P("div", Fh, [
      V("div", Uh, ke(e.label), 1),
      xe(Lo, {
        modelValue: c(r),
        "onUpdate:modelValue": l[0] || (l[0] = (u) => Ge(r) ? r.value = u : null),
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
const Lh = /* @__PURE__ */ Me(Wh, [["__scopeId", "data-v-d34d4c30"]]), Hh = { class: "form-text-field__container" }, zh = { class: "form-text-field__label" }, jh = /* @__PURE__ */ ge({
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
    We((s) => ({
      "1a45221c": e.gridTemplateColumns,
      "9789fca0": c(o)
    }));
    const r = Vt(), a = k({
      get() {
        return n.modelValue;
      },
      set(s) {
        t("update:model-value", s);
      }
    }), o = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))"), l = () => !!r.append, u = (s) => {
      t("focus", s);
    }, d = (s) => {
      t("blur", s);
    }, p = (s) => {
      t("input", s);
    }, w = (s) => {
      t("keyup", s);
    }, y = (s) => {
      t("keydown", s);
    };
    return (s, h) => (m(), P("div", Hh, [
      V("div", zh, ke(e.label), 1),
      xe(Ho, {
        modelValue: c(a),
        "onUpdate:modelValue": h[0] || (h[0] = (O) => Ge(a) ? a.value = O : null),
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
        onKeyup: w,
        onFocus: u,
        onKeydown: y
      }, {
        default: ne(() => [
          l() ? Q(s.$slots, "append", { key: 0 }, void 0, !0) : R("", !0)
        ]),
        _: 3
      }, 8, ["modelValue", "type", "dark", "readonly", "disabled", "outlined", "clearable", "placeholder", "error-message"])
    ]));
  }
});
const qh = /* @__PURE__ */ Me(jh, [["__scopeId", "data-v-98adbf38"]]), Gh = {
  key: 0,
  class: "gradient-button__content"
}, Qh = /* @__PURE__ */ ge({
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
      da8c368c: c(o),
      "042a7d9c": c(a),
      "209753a3": c(r)
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
    return (d, p) => (m(), P("div", {
      class: pe(c(l)),
      onClick: u
    }, [
      e.loading ? (m(), re(xi, {
        key: 1,
        size: "1.125rem",
        fill: "neutro-1"
      })) : (m(), P("div", Gh, [
        e.icon ? (m(), re(Qe, {
          key: 0,
          size: "1rem",
          name: e.icon,
          color: e.textColor
        }, null, 8, ["name", "color"])) : R("", !0),
        Q(d.$slots, "default", {}, void 0, !0)
      ]))
    ], 2));
  }
});
const Zh = /* @__PURE__ */ Me(Qh, [["__scopeId", "data-v-f6c4cd13"]]), Xh = { class: "header-tabs__container" }, Kh = ["onClick"], Jh = /* @__PURE__ */ ge({
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
      a03e58da: c(o),
      "72c95a67": c(l)
    }));
    const r = kt(), a = k({
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
    return (p, w) => (m(), P("div", Xh, [
      (m(!0), P(be, null, Ne(e.items, (y, s) => (m(), P("button", {
        key: `tab-${s}`,
        class: pe(u(s)),
        onClick: (h) => d(s)
      }, ke(y), 11, Kh))), 128))
    ]));
  }
});
const e0 = /* @__PURE__ */ Me(Jh, [["__scopeId", "data-v-dff7a459"]]), t0 = ["alt", "src"], n0 = /* @__PURE__ */ ge({
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
    return (l, u) => (m(), P("img", {
      alt: e.alt,
      src: c(r),
      class: pe(c(a)),
      onClick: o
    }, null, 10, t0));
  }
});
const r0 = /* @__PURE__ */ Me(n0, [["__scopeId", "data-v-eb6d75f4"]]), a0 = { class: "information-text__container" }, o0 = { class: "information-text__label" }, l0 = { class: "information-text__value" }, i0 = /* @__PURE__ */ ge({
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
    })), (t, n) => (m(), P("div", a0, [
      V("div", o0, ke(e.label), 1),
      V("div", l0, [
        Q(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
const u0 = /* @__PURE__ */ Me(i0, [["__scopeId", "data-v-6a5dc30c"]]), s0 = { class: "page-switch__tooltip-container" }, c0 = /* @__PURE__ */ ge({
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
    We((H) => ({
      d1917682: a.value,
      "5007b464": o.value
    }));
    const r = kt(), a = M("initial"), o = M("initial"), l = M(null), u = k({
      get() {
        return n.modelValue;
      },
      set(H) {
        n.readonly || t("update:model-value", H);
      }
    }), d = k(() => r.getRealColor(n.activeColor)), p = k(() => r.getRealColor(n.color)), w = k(() => n.activeColor && u.value ? d.value : p.value), y = k(() => ({
      "page-switch__slider": !0,
      "page-switch__slider--active": u.value
    })), s = k(() => ({
      "justify-content": n.justifyContent,
      "pointer-events": n.disabled ? "none" : "initial",
      "grid-template-columns": n.label ? n.gridTemplateColumns : "1fr"
    })), h = k(() => ({
      width: n.width,
      "background-color": n.disabled ? "rgb(var(--neutro-4))" : w.value
    })), O = k(() => ({
      "font-weight": n.labelWeight
    })), N = () => {
      n.readonly || n.disabled || (u.value = !u.value);
    }, I = () => {
      if (!l.value)
        return;
      const H = l.value.getBoundingClientRect(), D = H.x + H.width;
      H.x < 0 ? (a.value = "0", o.value = "initial") : D >= window.innerWidth ? (a.value = "initial", o.value = "0") : (a.value = "initial", o.value = "initial");
    }, j = () => {
      a.value = "", o.value = "";
    };
    return (H, D) => (m(), P("div", s0, [
      V("div", {
        style: gt(c(s)),
        class: "page-switch__container",
        onClick: N,
        onMouseenter: I,
        onMouseleave: j
      }, [
        e.label ? (m(), P("div", {
          key: 0,
          style: gt(c(O)),
          class: "page-switch__label"
        }, ke(e.label), 5)) : R("", !0),
        V("div", {
          style: gt(c(h)),
          class: "page-switch__switch"
        }, [
          Nt(V("input", {
            "onUpdate:modelValue": D[0] || (D[0] = (z) => Ge(u) ? u.value = z : null),
            type: "checkbox",
            class: "page-switch__checkbox"
          }, null, 512), [
            [fu, c(u)]
          ]),
          V("div", {
            class: pe(c(y))
          }, null, 2)
        ], 4)
      ], 36),
      e.tooltip ? (m(), P("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: l,
        class: "page-switch__tooltip"
      }, ke(e.tooltip), 513)) : R("", !0)
    ]));
  }
});
const f0 = /* @__PURE__ */ Me(c0, [["__scopeId", "data-v-66ab7cd9"]]), d0 = { class: "panel-title__text" }, p0 = /* @__PURE__ */ ge({
  __name: "PanelTitle",
  props: {
    closable: {
      type: Boolean
    },
    dialog: {
      type: Boolean
    }
  },
  emits: ["click:close"],
  setup(e, { emit: t }) {
    const n = e, r = k(() => ({
      "panel-title__container": !0,
      "panel-title__container--dialog": n.dialog,
      "panel-title__container--close": n.closable
    })), a = k(() => n.dialog ? "2.75rem" : "1.5rem"), o = () => {
      t("click:close");
    };
    return (l, u) => (m(), P("div", {
      class: pe(c(r))
    }, [
      V("div", d0, [
        Q(l.$slots, "default", {}, void 0, !0)
      ]),
      e.closable ? (m(), P("div", {
        key: 0,
        class: "panel-title__close",
        onClick: o
      }, [
        xe(Qe, {
          color: "error",
          size: c(a),
          name: "fas-xmark-circle"
        }, null, 8, ["size"])
      ])) : R("", !0)
    ], 2));
  }
});
const y0 = /* @__PURE__ */ Me(p0, [["__scopeId", "data-v-342d4403"]]), m0 = /* @__PURE__ */ ge({
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
    return (a, o) => (m(), re(Ho, {
      modelValue: c(r),
      "onUpdate:modelValue": o[0] || (o[0] = (l) => Ge(r) ? r.value = l : null),
      clearable: "",
      placeholder: e.placeholder
    }, {
      append: ne(() => [
        xe(Qe, {
          size: "1rem",
          color: "acento-principal",
          name: "fas-magnifying-glass"
        })
      ]),
      _: 1
    }, 8, ["modelValue", "placeholder"]));
  }
}), v0 = /* @__PURE__ */ ge({
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
    We((a) => ({
      "042303aa": e.width
    }));
    const r = k({
      get() {
        return n.modelValue;
      },
      set(a) {
        t("update:model-value", a);
      }
    });
    return bt(r, (a) => {
      a && n.duration > 0 && window.setTimeout(() => {
        t("close");
      }, n.duration);
    }), bt(
      () => n.duration,
      (a) => {
        a > 0 && window.setTimeout(() => {
          t("close");
        }, a);
      }
    ), (a, o) => (m(), re(Po, {
      persistent: "",
      "model-value": c(r)
    }, {
      default: ne(() => [
        c(r) ? (m(), re(So, {
          key: 0,
          width: e.width,
          padding: "1rem",
          "row-gap": "1rem",
          "border-radius": "1rem",
          "background-color": "neutro-1",
          "box-shadow": "3px 3px 17px rgba(151, 168, 194, 0.24)"
        }, {
          default: ne(() => [
            xe(ru, { "justify-content": "center" }, {
              default: ne(() => [
                e.icon.startsWith("fa") ? (m(), re(Qe, {
                  key: 0,
                  size: "5rem",
                  name: e.icon,
                  color: e.iconColor
                }, null, 8, ["name", "color"])) : (m(), re(Yt, {
                  key: 1,
                  size: "5rem",
                  src: e.icon,
                  color: e.iconColor
                }, null, 8, ["src", "color"]))
              ]),
              _: 1
            }),
            xe(Jt, {
              "text-align": "center",
              "predefined-style": "h2",
              color: "acento-secundario"
            }, {
              default: ne(() => [
                ze(ke(e.text), 1)
              ]),
              _: 1
            }),
            e.subtitle ? (m(), re(Jt, {
              key: 0,
              color: "secundario",
              "text-align": "center",
              "predefined-style": "subtitle-2"
            }, {
              default: ne(() => [
                ze(ke(e.subtitle), 1)
              ]),
              _: 1
            })) : R("", !0)
          ]),
          _: 1
        }, 8, ["width"])) : R("", !0)
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
});
const h0 = /* @__PURE__ */ Me(v0, [["__scopeId", "data-v-9262ded4"]]), jr = (e) => (du("data-v-ddcc71b5"), e = e(), pu(), e), g0 = /* @__PURE__ */ jr(() => /* @__PURE__ */ V("div", { class: "color-picker__canvas-cursor" }, null, -1)), _0 = [
  g0
], b0 = /* @__PURE__ */ jr(() => /* @__PURE__ */ V("div", { class: "color-picker__line-cursor" }, null, -1)), w0 = [
  b0
], k0 = /* @__PURE__ */ jr(() => /* @__PURE__ */ V("div", { class: "color-picker__opacity-line-cursor" }, null, -1)), $0 = [
  k0
], O0 = { class: "color-picker__result" }, x0 = /* @__PURE__ */ jr(() => /* @__PURE__ */ V("div", { class: "color-picker__picked-color" }, null, -1)), S0 = { class: "color-picker__hexa-input-container" }, P0 = { class: "color-picker__opacity-input-container" }, T0 = { class: "color-picker__colors" }, C0 = ["onClick"], D0 = /* @__PURE__ */ ge({
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
  emits: [
    "update:model-value"
  ],
  setup(e, { emit: t }) {
    const n = e;
    We((U) => ({
      "36d34425": c(X),
      "668445c8": c(f),
      "6a5bc991": te.value,
      "1fb38400": c(i),
      d37d1826: Z.value,
      a1f2b644: T.value,
      "67f309ca": c($)
    }));
    const { getRealColor: r } = kt();
    ft(() => {
      _.hexa = n.modelValue.toUpperCase(), Ct();
    });
    const a = M(0), o = M(0), l = M(0), u = M(0), d = M(0), p = M(0), w = M(0), y = M(0), s = M(0), h = M(0), O = M(0), N = M(!1), I = M(!1), j = M(!1), H = M(null), D = M(null), z = M(null), K = M(null), Z = M("translate(0, 0)"), te = M("translate(0, 0)"), T = M("translate(0, 0)"), _ = At({
      r: 255,
      g: 219,
      b: 0,
      a: 1,
      hexa: "#FFFE00FF"
    }), b = At({
      r: 0,
      g: 0,
      b: 0,
      a: 1,
      hexa: "#000000FF"
    }), C = At({
      r: 0,
      g: 0,
      b: 0
    }), X = k(() => r(n.background)), J = k(() => ({
      "color-picker__container": !0,
      "color-picker__container--dark": n.dark
    })), le = k({
      get() {
        return n.modelValue;
      },
      set(U) {
        t("update:model-value", U);
      }
    }), ee = k({
      get() {
        const U = Math.ceil(_.a * 100);
        return isNaN(U) ? "0" : U.toString();
      },
      set(U) {
        const q = parseInt(U.replace(/\D/g, "") || "0");
        _.a = q > 100 ? 1 : q / 100;
      }
    }), F = k({
      get() {
        return _.hexa.slice(1, 7);
      },
      set(U) {
        _.hexa = "", U.startsWith("#") ? _.hexa = U : _.hexa = `#${U}`;
      }
    }), i = k(() => `rgba(${b.r}, ${b.g}, ${b.b}, ${b.a})`), f = k(() => `rgba(${C.r}, ${C.g}, ${C.b}, 1)`), $ = k(() => {
      const U = `rgba(${b.r}, ${b.g}, ${b.b}, 0)`, q = `rgba(${b.r}, ${b.g}, ${b.b}, 1)`;
      return `linear-gradient(to right, ${U}, ${q})`;
    }), x = (U) => ({
      "color-picker__color": !0,
      "color-picker__color--selected": _.hexa.slice(0, 7) === U
    }), B = () => {
      if (!H.value)
        return;
      const U = H.value.getBoundingClientRect();
      if (a.value = U.left, l.value = U.width, !z.value)
        return;
      const q = z.value.getBoundingClientRect();
      if (o.value = q.top, u.value = q.left, p.value = q.width, y.value = q.height, !K.value)
        return;
      const me = K.value.getBoundingClientRect();
      d.value = me.left, w.value = me.width;
    }, G = (U) => {
      const q = U.toString(16).toUpperCase();
      return q.length == 1 ? "0" + q : q;
    }, W = () => {
      let U = 255 * (1 - s.value);
      U = Math.min(255, Math.max(0, Math.round(U)));
      const q = U - C.r, me = U - C.g, _e = U - C.b, Ye = h.value * q, Ie = h.value * me, Te = h.value * _e, lt = C.r + Ye, v = C.g + Ie, E = C.b + Te;
      b.r = Math.min(U, Math.max(0, Math.round(lt))), b.g = Math.min(U, Math.max(0, Math.round(v))), b.b = Math.min(U, Math.max(0, Math.round(E))), b.a = Math.min(1, Math.max(0, Number(O.value.toFixed(2)))), _.r = b.r, _.g = b.g, _.b = b.b, _.a = b.a, b.hexa = "#" + G(b.r) + G(b.g) + G(b.b) + G(Math.round(b.a * 255)), _.hexa = b.hexa, le.value = b.hexa;
    }, S = (U) => {
      const q = U / l.value, me = parseFloat((q % (1 / 6)).toFixed(5)), _e = parseFloat((me / (1 / 6)).toFixed(5));
      let Ye = 1, Ie = 1, Te = 1;
      q < 1 / 6 ? (Ie = _e, Te = 0) : q < 2 / 6 ? (Ye = 1 - _e, Te = 0) : q < 3 / 6 ? (Ye = 0, Te = _e) : q < 4 / 6 ? (Ye = 0, Ie = 1 - _e) : q < 5 / 6 ? (Ye = _e, Ie = 0) : q < 1 ? (Ie = 0, Te = 1 - _e) : (Te = 0, Ie = 0), C.r = Math.min(255, Math.max(0, Math.round(Ye * 255))), C.g = Math.min(255, Math.max(0, Math.round(Ie * 255))), C.b = Math.min(255, Math.max(0, Math.round(Te * 255)));
    }, g = (U) => {
      Se(), D.value = i.value, I.value = !0, B(), te.value = `translate(${U.offsetX}px, ${U.offsetY}px)`, s.value = U.offsetY / y.value, h.value = 1 - U.offsetX / p.value, W(), U.stopPropagation(), U.preventDefault();
    }, L = (U) => {
      Se(), D.value = i.value, N.value = !0, B(), Z.value = `translate(${U.offsetX}px, 0px)`, S(U.offsetX), W(), U.stopPropagation(), U.preventDefault();
    }, Oe = (U) => {
      Se(), D.value = i.value, j.value = !0, B(), T.value = `translate(${U.offsetX}px, 0px)`, O.value = U.offsetX / w.value, W(), U.stopPropagation(), U.preventDefault();
    }, ae = () => {
      (N.value || I.value || j.value) && D.value !== i.value && (le.value = b.hexa), N.value = !1, I.value = !1, j.value = !1, Dt();
    }, de = (U) => {
      if (N.value) {
        let q = U.pageX - a.value;
        q = Math.min(l.value, Math.max(0, q)), Z.value = `translate(${q}px, 0px)`, S(q);
      } else if (I.value) {
        let q = U.pageX - u.value, me = U.pageY - o.value;
        q = Math.min(p.value, Math.max(0, q)), me = Math.min(y.value, Math.max(0, me)), te.value = `translate(${q}px, ${me}px)`, s.value = me / y.value, h.value = 1 - q / p.value;
      } else if (j.value) {
        let q = U.pageX - d.value;
        q = Math.min(w.value, Math.max(0, q)), T.value = `translate(${q}px, 0px)`, O.value = q / w.value;
      }
      W();
    }, Re = (U) => U.length < 0 || U.length > 1 ? "0" : isNaN(parseInt(U, 16)) ? ["A", "B", "C", "D", "E", "F"].includes(U.toUpperCase()) ? U.toUpperCase() : "0" : U, ot = (U) => {
      if (!U || U.length < 3)
        return "#000000FF";
      let q = U.toUpperCase();
      if (q.startsWith("#") && (q = q.slice(1)), q.length < 3)
        return "#000000FF";
      let me, _e, Ye, Ie;
      if (me = _e = Ye = "00", Ie = "FF", q.length === 3) {
        let Te = q.split("").map((lt) => `0${lt}`).map((lt) => Re(lt));
        me = Te[0], _e = Te[1], Ye = Te[2];
      } else if (q.length >= 6) {
        const Te = q.split("").map((lt) => Re(lt));
        me = Te[0] + Te[1], _e = Te[2] + Te[3], Ye = Te[4] + Te[5], Te.length === 8 && (Ie = Te[6] + Te[7]);
      }
      return `#${me}${_e}${Ye}${Ie}`;
    }, ve = (U) => {
      const q = ot(U).slice(1).split(""), me = q[0] + q[1], _e = q[2] + q[3], Ye = q[4] + q[5], Ie = q[6] + q[7], Te = parseInt(me, 16), lt = parseInt(_e, 16), v = parseInt(Ye, 16), E = parseInt(Ie, 16) / 255;
      return {
        hexa: "#" + me + _e + Ye + Ie,
        r: Te,
        g: lt,
        b: v,
        a: E
      };
    }, dt = () => {
      const U = ve(_.hexa);
      b.hexa = U.hexa, b.a = U.a, b.r = U.r, b.g = U.g, b.b = U.b, _.r = b.r, _.g = b.g, _.b = b.b, _.a = b.a;
    }, et = () => {
      const U = {
        r: null,
        g: null,
        b: null,
        variable: null
      }, { r: q, g: me, b: _e } = b;
      return _e > me && _e > q ? U.b = 1 : me > q && me > _e ? U.g = 1 : q > me && q > _e && (U.r = 1), q < me && q < _e ? U.r = 0 : me < q && me < _e ? U.g = 0 : _e < q && _e < _e && (U.b = 0), ["r", "g", "b"].forEach((Ie) => {
        U[Ie] === null && (U.variable = Ie, U[Ie] = b[Ie] / 255);
      }), U;
    }, He = () => {
      B(), O.value = b.a;
      const U = O.value * w.value;
      T.value = `translate(${U}px, 0px)`;
      const q = et();
      let me = 0, _e = 0;
      q.variable === "r" ? q.g === 1 ? (me = 1, _e = 1 - b.r / 255) : q.b === 1 && (me = 4, _e = b.r / 255) : q.variable === "b" ? q.r === 1 ? (me = 5, _e = 1 - b.b / 255) : q.g === 1 && (me = 2, _e = b.b / 255) : q.r === 1 ? (me = 0, _e = b.g / 255) : q.b === 1 && (me = 3, _e = 1 - b.g / 255);
      const Ye = l.value / 6, Ie = _e * Ye, Te = Ye * me + Ie;
      Z.value = `translate(${Te}px, 0px)`, C.r = Math.min(255, Math.max(0, Math.round((q.r ?? 0) * 255))), C.g = Math.min(255, Math.max(0, Math.round((q.g ?? 0) * 255))), C.b = Math.min(255, Math.max(0, Math.round((q.b ?? 0) * 255))), ["r", "g", "b"].forEach((ue) => {
        C[ue] === 0 ? h.value = b[ue] / 255 : C[ue] === 255 && (s.value = 1 - b[ue] / 255);
      });
      const v = p.value * (1 - h.value), E = y.value * s.value;
      te.value = `translate(${v}px, ${E}px)`;
    }, Ct = () => {
      dt(), He();
    }, he = (U) => {
      _.hexa = U, Ct(), le.value = U;
    }, De = () => {
      b.a = _.a, He(), W();
    }, Se = () => {
      document.addEventListener("mouseup", ae), document.addEventListener("mousemove", de);
    }, Dt = () => {
      document.removeEventListener("mouseup", ae), document.removeEventListener("mousemove", de);
    };
    return (U, q) => (m(), P("div", {
      class: pe(c(J))
    }, [
      V("div", {
        ref_key: "canvas",
        ref: z,
        class: "color-picker__canvas",
        onMousedown: g
      }, _0, 544),
      V("div", {
        ref_key: "line",
        ref: H,
        class: "color-picker__line",
        onMousedown: L
      }, w0, 544),
      V("div", {
        ref_key: "opacityLine",
        ref: K,
        class: "color-picker__opacity-line",
        onMousedown: Oe
      }, $0, 544),
      V("div", O0, [
        x0,
        V("div", S0, [
          ze(" # "),
          Nt(V("input", {
            "onUpdate:modelValue": q[0] || (q[0] = (me) => Ge(F) ? F.value = me : null),
            type: "text",
            maxlength: "7",
            placeholder: "FFFFFF",
            class: "color-picker__hexa-input",
            onInput: Ct
          }, null, 544), [
            [ua, c(F)]
          ])
        ]),
        V("div", P0, [
          Nt(V("input", {
            "onUpdate:modelValue": q[1] || (q[1] = (me) => Ge(ee) ? ee.value = me : null),
            type: "text",
            maxlength: "3",
            placeholder: "100",
            class: "color-picker__opacity-input",
            onInput: De
          }, null, 544), [
            [ua, c(ee)]
          ]),
          ze(" % ")
        ])
      ]),
      V("div", T0, [
        (m(!0), P(be, null, Ne(e.pickableColors, (me, _e) => (m(), P("div", {
          key: `pickable-color-${_e}`,
          style: gt(`--color: ${me}`),
          class: pe(x(me)),
          onClick: (Ye) => he(me)
        }, null, 14, C0))), 128))
      ])
    ], 2));
  }
});
const au = /* @__PURE__ */ Me(D0, [["__scopeId", "data-v-ddcc71b5"]]), M0 = { class: "form-color-picker__label" }, R0 = /* @__PURE__ */ ge({
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
  emits: [
    "update:model-value"
  ],
  setup(e, { emit: t }) {
    const n = e;
    We((I) => ({
      "7a521176": e.gridTemplateColumns,
      "09920a67": c(N),
      "21b54a91": c(w),
      "5adfcabd": r.value,
      "0115c39f": a.value
    }));
    const r = M(""), a = M(""), o = M(""), l = M(!1), u = M(!1), d = M(null), p = M(null), w = k({
      get() {
        return n.modelValue;
      },
      set(I) {
        t("update:model-value", I);
      }
    }), y = async () => {
      await St();
      const I = d.value, j = p.value;
      if (!I || !j)
        return;
      const H = I.getBoundingClientRect(), D = j.getBoundingClientRect();
      a.value = `${H.left}px`, o.value = `${H.width}px`;
      const z = H.top + H.height + D.height, K = window.innerHeight, Z = H.top + H.height;
      if (z > K) {
        const te = z - K;
        r.value = `${Z - te - 16}px`;
      } else
        r.value = `${Z}px`;
    }, s = () => {
      n.disabled || n.readonly || l.value || (l.value = !0, y(), u.value = !0, document.addEventListener("click", h));
    }, h = (I) => {
      !d.value || !I.target || d.value.contains(I.target) || O();
    }, O = () => {
      l.value = !1, u.value = !1, document.removeEventListener("click", h);
    }, N = k(() => n.disabled ? "rgb(var(--neutro-4))" : n.dark ? "rgb(var(--neutro-1))" : "rgb(var(--secundario))");
    return (I, j) => (m(), P("div", {
      ref_key: "container",
      ref: d,
      class: "form-color-picker__container"
    }, [
      V("div", M0, ke(e.label), 1),
      V("div", {
        class: "form-color-picker__input",
        onClick: s
      }),
      xe(wt, null, {
        default: ne(() => [
          l.value ? (m(), P("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: p,
            class: "form-color-picker__menu"
          }, [
            xe(au, {
              modelValue: c(w),
              "onUpdate:modelValue": j[0] || (j[0] = (H) => Ge(w) ? w.value = H : null),
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
const I0 = /* @__PURE__ */ Me(R0, [["__scopeId", "data-v-7d558f07"]]), N0 = ["onMousedown"], B0 = /* @__PURE__ */ ge({
  __name: "CustomMenu",
  props: {
    disabled: {
      type: Boolean
    },
    default: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e) {
    const t = e;
    We((O) => ({
      "78a1d785": n.value,
      c8d56052: r.value
    })), ft(() => {
      t.default === !0 && w();
    });
    const n = M(""), r = M(""), a = M(""), o = M(!1), l = M(!1), u = M(null), d = M(null), p = async () => {
      n.value = "", r.value = "", await St();
      const O = u.value, N = d.value;
      if (!O || !N)
        return;
      const I = O.getBoundingClientRect(), j = N.getBoundingClientRect();
      r.value = `${I.left}px`, a.value = `${I.width}px`;
      const H = I.top + I.height + j.height, D = window.innerHeight, z = I.top + I.height;
      if (H > D) {
        const te = H - D;
        n.value = `${z - te - 16}px`;
      } else
        n.value = `${z}px`;
      const K = j.right, Z = window.innerWidth;
      if (K > Z) {
        const te = K - Z;
        r.value = `${I.left - te}px`;
      }
    }, w = () => {
      t.disabled && !t.default || (o.value = !0, p(), !t.disabled && (l.value = !0, document.addEventListener("click", s)));
    }, y = () => {
      t.disabled || (o.value = !1, l.value = !1, document.removeEventListener("click", s));
    }, s = (O) => {
      !u.value || !O.target || u.value.contains(O.target) || y();
    }, h = () => {
      t.disabled || (o.value ? y() : w());
    };
    return (O, N) => (m(), P("div", {
      ref_key: "container",
      ref: u,
      class: "custom-menu__container"
    }, [
      V("div", {
        onMousedown: Ke(h, ["stop"])
      }, [
        Q(O.$slots, "activator", {}, void 0, !0)
      ], 40, N0),
      xe(wt, null, {
        default: ne(() => [
          o.value ? (m(), P("div", {
            key: 0,
            ref_key: "menuContainer",
            ref: d,
            class: "custom-menu__menu"
          }, [
            Q(O.$slots, "default", { close: y }, void 0, !0)
          ], 512)) : R("", !0)
        ]),
        _: 3
      })
    ], 512));
  }
});
const A0 = /* @__PURE__ */ Me(B0, [["__scopeId", "data-v-a9ef51af"]]), Y0 = (e) => {
  e.component("CheckBox", $i), e.component("ConfirmationDialog", Yu), e.component("CustomButton", sa), e.component("CustomDatePicker", Wo), e.component("CustomDialog", Po), e.component("CustomSelect", Lo), e.component("CustomTextField", Ho), e.component("DataTable", Oh), e.component("DataTableItem", xh), e.component("FilterDatePicker", Ch), e.component("FilterSelect", Ih), e.component("FlexContainer", ru), e.component("FontAwesomeIcon", Qe), e.component("FormDatePicker", Vh), e.component("FormSelect", Lh), e.component("FormTextField", qh), e.component("GradientButton", Zh), e.component("GridColumn", So), e.component("GridRow", Oi), e.component("HeaderTabs", e0), e.component("IconButton", Oo), e.component("ImageContainer", r0), e.component("InformationText", u0), e.component("PageSwitch", f0), e.component("PanelTitle", y0), e.component("SearchTextField", m0), e.component("SuccessDialog", h0), e.component("SvgIcon", Yt), e.component("TextContainer", Jt), e.component("FormColorPicker", I0), e.component("ColorPicker", au), e.component("CustomMenu", A0);
};
export {
  Y0 as componentesReutility
};
