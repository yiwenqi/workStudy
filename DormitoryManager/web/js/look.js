/* ab9bdcbf-c04b-4a3a-9d99-e45e06644bf4 */
(function(a, g) {
    function q(a) {
        for (var e in a)
            if (U[a[e]] !== g) return !0;
        return !1
    }

    function e(e, b, v) {
        var l = e;
        if ("object" === typeof b) return e.each(function() {
            o[this.id] && o[this.id].destroy();
            new a.mobiscroll.classes[b.component || "Scroller"](this, b)
        });
        "string" === typeof b && e.each(function() {
            var a;
            if ((a = o[this.id]) && a[b])
                if (a = a[b].apply(this, Array.prototype.slice.call(v, 1)), a !== g) return l = a, !1
        });
        return l
    }

    function b(a) {
        if (S.tapped && !a.tap) return a.stopPropagation(), a.preventDefault(), !1
    }
    var S, k = +new Date,
        o = {},
        Z = a.extend,
        U = document.createElement("modernizr").style,
        l = q(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
        v = q(["flex", "msFlex", "WebkitBoxDirection"]),
        X = function() {
            var a = ["Webkit", "Moz", "O", "ms"],
                e;
            for (e in a)
                if (q([a[e] + "Transform"])) return "-" + a[e].toLowerCase() + "-";
            return ""
        }(),
        T = X.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
    a.fn.mobiscroll = function(b) {
        Z(this, a.mobiscroll.components);
        return e(this, b, arguments)
    };
    S = a.mobiscroll = a.mobiscroll || {
        version: "2.16.0",
        util: {
            prefix: X,
            jsPrefix: T,
            has3d: l,
            hasFlex: v,
            testTouch: function(e, b) {
                if ("touchstart" == e.type) a(b).attr("data-touch", "1");
                else if (a(b).attr("data-touch")) return a(b).removeAttr("data-touch"), !1;
                return !0
            },
            objectToArray: function(a) {
                var e = [],
                    b;
                for (b in a) e.push(a[b]);
                return e
            },
            arrayToObject: function(a) {
                var e = {},
                    b;
                if (a)
                    for (b = 0; b < a.length; b++) e[a[b]] = a[b];
                return e
            },
            isNumeric: function(a) {
                return 0 <= a - parseFloat(a)
            },
            isString: function(a) {
                return "string" === typeof a
            },
            getCoord: function(a, e, b) {
                var g =
                    a.originalEvent || a,
                    e = (b ? "client" : "page") + e;
                return g.changedTouches ? g.changedTouches[0][e] : a[e]
            },
            getPosition: function(e, b) {
                var v = window.getComputedStyle ? getComputedStyle(e[0]) : e[0].style,
                    o, q;
                l ? (a.each(["t", "webkitT", "MozT", "OT", "msT"], function(a, e) {
                    if (v[e + "ransform"] !== g) return o = v[e + "ransform"], !1
                }), o = o.split(")")[0].split(", "), q = b ? o[13] || o[5] : o[12] || o[4]) : q = b ? v.top.replace("px", "") : v.left.replace("px", "");
                return q
            },
            constrain: function(a, e, b) {
                return Math.max(e, Math.min(a, b))
            },
            vibrate: function(a) {
                "vibrate" in
                navigator && navigator.vibrate(a || 50)
            }
        },
        tapped: 0,
        autoTheme: "mobiscroll",
        presets: {
            scroller: {},
            numpad: {},
            listview: {},
            menustrip: {}
        },
        themes: {
            form: {},
            frame: {},
            listview: {},
            menustrip: {}
        },
        i18n: {},
        instances: o,
        classes: {},
        components: {},
        defaults: {
            context: "body",
            mousewheel: !0,
            vibrate: !0
        },
        setDefaults: function(a) {
            Z(this.defaults, a)
        },
        presetShort: function(a, b, v) {
            this.components[a] = function(o) {
                return e(this, Z(o, {
                    component: b,
                    preset: !1 === v ? g : a
                }), arguments)
            }
        }
    };
    a.mobiscroll.classes.Base = function(e, b) {
        var v, g, l, q, x, r, y = a.mobiscroll,
            A = this;
        A.settings = {};
        A._presetLoad = function() {};
        A._init = function(a) {
            l = A.settings;
            Z(b, a);
            A._hasDef && (r = y.defaults);
            Z(l, A._defaults, r, b);
            if (A._hasTheme) {
                x = l.theme;
                if ("auto" == x || !x) x = y.autoTheme;
                "default" == x && (x = "mobiscroll");
                b.theme = x;
                q = y.themes[A._class][x]
            }
            A._hasLang && (v = y.i18n[l.lang]);
            A._hasTheme && A.trigger("onThemeLoad", [v, b]);
            Z(l, q, v, r, b);
            if (A._hasPreset && (A._presetLoad(l), g = y.presets[A._class][l.preset])) g = g.call(e, A), Z(l, g, b)
        };
        A._destroy = function() {
            A.trigger("onDestroy", []);
            delete o[e.id];
            A =
                null
        };
        A.trigger = function(v, o) {
            var l;
            o.push(A);
            a.each([r, q, g, b], function(a, b) {
                b && b[v] && (l = b[v].apply(e, o))
            });
            return l
        };
        A.option = function(a, b) {
            var e = {};
            "object" === typeof a ? e = a : e[a] = b;
            A.init(e)
        };
        A.getInst = function() {
            return A
        };
        b = b || {};
        e.id || (e.id = "mobiscroll" + ++k);
        o[e.id] = A
    };
    document.addEventListener && a.each(["mouseover", "mousedown", "mouseup", "click"], function(a, e) {
        document.addEventListener(e, b, !0)
    })
})(jQuery);
(function(a) {
    a.mobiscroll.i18n.zh = {
        setText: "\u786e\u5b9a",
        cancelText: "\u53d6\u6d88",
        clearText: "\u660e\u786e",
        selectedText: "\u9009",
        dateFormat: "yy/mm/dd",
        dateOrder: "yymmdd",
        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayText: "\u65e5",
        hourText: "\u65f6",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u5e74",
        nowText: "\u5f53\u524d",
        pmText: "\u4e0b\u5348",
        amText: "\u4e0a\u5348",
        dateText: "\u65e5",
        timeText: "\u65f6\u95f4",
        calendarText: "\u65e5\u5386",
        closeText: "\u5173\u95ed",
        fromText: "\u5f00\u59cb\u65f6\u95f4",
        toText: "\u7ed3\u675f\u65f6\u95f4",
        wholeText: "\u5408\u8ba1",
        fractionText: "\u5206\u6570",
        unitText: "\u5355\u4f4d",
        labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","),
        labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","),
        startText: "\u5f00\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u91cd\u7f6e",
        lapText: "\u5708",
        hideText: "\u9690\u85cf",
        backText: "\u80cc\u90e8",
        undoText: "\u590d\u539f",
        offText: "\u5173\u95ed",
        onText: "\u5f00\u542f"
    }
})(jQuery);
(function(a, g, q, e) {
    var b, S = a.extend,
        k = a.mobiscroll,
        o = k.classes,
        Z = k.util,
        U = Z.prefix,
        l = Z.jsPrefix,
        v = Z.has3d,
        X = Z.getCoord,
        T = Z.testTouch,
        ha = Z.vibrate,
        fa = 1,
        ia = function() {},
        R = g.requestAnimationFrame || function(a) {
            a()
        },
        da = g.cancelAnimationFrame || ia,
        ga = "webkitAnimationEnd animationend",
        x = "transparent";
    o.ListView = function(r, y) {
        function A() {
            Lb = Mb = !1;
            gc = sa = 0;
            hc = new Date;
            ab = ja.width();
            Eb = la(ja);
            ua = Eb.index(I);
            Ea = I.outerHeight();
            La = I[0].offsetTop;
            Ba = vb[I.attr("data-type") || "defaults"];
            Fb = Ba.stages
        }

        function z(gb) {
            "touchstart" ===
            gb.type && (Nb = !0, clearTimeout(ic));
            if (T(gb, this) && !pa && !hb && !b && !Ob && (d = pa = !0, Pb = X(gb, "X"), Qb = X(gb, "Y"), Ga = ka = 0, I = a(this), A(), Yb = P.onItemTap || Ba.tap || I.hasClass("mbsc-lv-parent") || I.hasClass("mbsc-lv-back"), Ma.offset(), qb = I.offset().top, Yb && ($ = setTimeout(function() {
                I.addClass("mbsc-lv-item-active");
                Aa("onItemActivate", [I, gb])
            }, 120)), J.sortable && !I.hasClass("mbsc-lv-back") && ((J.sortable.group || (Zb = I.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), $b = I.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")),
                rb = (!J.sortable.group ? $b.length ? $b.eq(-1) : I : ja.children("li").eq(0))[0].offsetTop - La, ib = (!J.sortable.group ? Zb.length ? Zb.eq(-1) : I : ja.children("li").eq(-1))[0].offsetTop - La, J.sortable.handle) ? a(gb.target).hasClass("mbsc-lv-handle") && (clearTimeout($), "Moz" === l ? (gb.preventDefault(), ma()) : Rb = setTimeout(function() {
                ma()
            }, 100)) : Rb = setTimeout(function() {
                if (P.fillAnimation) {
                    xa.appendTo(I);
                    xa[0].style[l + "Animation"] = "mbsc-lv-fill " + (P.sortDelay - 100) + "ms linear"
                }
                clearTimeout(bb);
                clearTimeout($);
                d = false;
                Rb = setTimeout(function() {
                    xa[0].style[l +
                    "Animation"] = "";
                    ma()
                }, P.sortDelay - 80)
            }, 80)), "mousedown" == gb.type)) a(q).on("mousemove", C).on("mouseup", L)
        }

        function C(a) {
            var d = !1,
                f = !0;
            if (pa)
                if (sb = X(a, "X"), Gb = X(a, "Y"), ka = sb - Pb, Ga = Gb - Qb, clearTimeout(bb), !Wa && !jb && !wb && !I.hasClass("mbsc-lv-back") && (10 < Math.abs(Ga) ? (wb = !0, I.trigger("mousemove" == a.type ? "mouseup" : "touchend"), clearTimeout($)) : 7 < Math.abs(ka) ? N() : "touchmove" === a.type && (bb = setTimeout(function() {
                    I.trigger("touchend")
                }, 300))), jb) a.preventDefault(), sa = 100 * (ka / ab), na();
                else if (Wa) {
                    a.preventDefault();
                    var h, c = Ia.scrollTop(),
                        a = Math.max(rb, Math.min(Ga + xb, ib)),
                        e = Ta ? qb - ac + c - xb : qb;
                    Hb + c < e + a + Ea ? (Ia.scrollTop(e + a - Hb + Ea), h = !0) : e + a < c && (Ia.scrollTop(e + a), h = !0);
                    h && (h = Ta ? Ia.scrollTop() - c : 0, xb += h);
                    if (kb && (J.sortable.multiLevel && va.hasClass("mbsc-lv-parent") ? La + Ea / 4 + a > kb ? d = !0 : La + Ea - Ea / 4 + a > kb && (Ja = va.addClass("mbsc-lv-item-hl"), f = !1) : La + Ea / 2 + a > kb && (va.hasClass("mbsc-lv-back") ? J.sortable.multiLevel && (qa = va.addClass("mbsc-lv-item-hl"), f = !1) : d = !0), d)) cb.insertAfter(va), Na = va, va = i(va, "next"), lb = kb, kb = va.length && va[0].offsetTop,
                        Ca++;
                    if (!d && lb && (J.sortable.multiLevel && Na.hasClass("mbsc-lv-parent") ? La + Ea - Ea / 4 + a < lb ? d = !0 : La + Ea / 4 + a < lb && (Ja = Na.addClass("mbsc-lv-item-hl"), f = !1) : La + Ea / 2 + a < lb && (Na.hasClass("mbsc-lv-back") ? J.sortable.multiLevel && (qa = Na.addClass("mbsc-lv-item-hl"), f = !1) : d = !0), d)) cb.insertBefore(Na), va = Na, Na = i(Na, "prev"), kb = lb, lb = Na.length && Na[0].offsetTop + Na.outerHeight(), Ca--;
                    if (f && (Ja && (Ja.removeClass("mbsc-lv-item-hl"), Ja = !1), qa)) qa.removeClass("mbsc-lv-item-hl"), qa = !1;
                    d && Aa("onSortChange", [I, Ca]);
                    s(I, a);
                    Aa("onSort",
                        [I, Ca])
                } else(5 < Math.abs(ka) || 5 < Math.abs(Ga)) && E()
        }

        function L(d) {
            var f, h;
            if (pa) {
                pa = !1;
                E();
                "mouseup" == d.type && a(q).off("mousemove", C).off("mouseup", L);
                wb || (ic = setTimeout(function() {
                    Nb = !1
                }, 300));
                if (jb || wb || Wa) Lb = !0;
                jb ? t() : Wa ? (f = ja, Ja ? (W(I.detach()), d = db[Ja.attr("data-ref")], Ca = la(d.child).length, Ja.removeClass("mbsc-lv-item-hl"), P.navigateOnDrop ? V(Ja, function() {
                    J.add(null, I, null, null, Ja, !0);
                    K(I);
                    n(I, ua, f, !0)
                }) : (J.add(null, I, null, null, Ja, !0), n(I, ua, f, !0))) : qa ? (W(I.detach()), d = db[qa.attr("data-back")],
                    Ca = la(d.parent).index(d.item) + 1, qa.removeClass("mbsc-lv-item-hl"), P.navigateOnDrop ? V(qa, function() {
                    J.add(null, I, Ca, null, ja, !0);
                    K(I);
                    n(I, ua, f, !0)
                }) : (J.add(null, I, Ca, null, d.parent, !0), n(I, ua, f, !0))) : (d = cb[0].offsetTop - La, s(I, d, 6 * Math.abs(d - Math.max(rb, Math.min(Ga + xb, ib))), function() {
                    W(I);
                    I.insertBefore(cb);
                    n(I, ua, f, Ca !== ua)
                })), Wa = !1) : !wb && 5 > Math.abs(ka) && 5 > Math.abs(Ga) && ("touchend" === d.type && (d.preventDefault(), k.tapped++, setTimeout(function() {
                    k.tapped--
                }, 500)), Ba.tap && (h = Ba.tap.call(Pa, I, ua, d, J)),
                Yb && (I.addClass("mbsc-lv-item-active"), Aa("onItemActivate", [I, d])), h = Aa("onItemTap", [I, ua, d]), !1 !== h && V(I));
                clearTimeout($);
                setTimeout(function() {
                    I.removeClass("mbsc-lv-item-active");
                    Aa("onItemDeactivate", [I])
                }, 100);
                wb = !1;
                Ka = null
            }
        }

        function N() {
            if (jb = u(Ba.swipe, [I, ua, 0 < ka ? "right" : "left", J])) E(), clearTimeout($), Ba.actions ? (D = ea(Ba), Oa.html(Ba.icons).show().children().css("width", D + "%"), Oa.find(".mbsc-lv-multi-ic-right").css("margin-left", 100 - D + "%"), Fa.hide(), a(".mbsc-lv-ic-m", Da).removeClass("mbsc-lv-ic-disabled"),
                a(Ba.leftMenu).each(j), a(Ba.rightMenu).each(j)) : (Fa.show(), Oa.hide(), Qa = Ba.start + (0 < ka ? 0 : 1), tb = Fb[Qa - 1], ub = Fb[Qa]), I.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Sb.css("line-height", Ea + "px"), Da.css({
                top: La,
                height: Ea,
                backgroundColor: (0 < ka ? Ba.right : Ba.left).color || x
            }).addClass("mbsc-lv-stage-c-v").appendTo(ja), P.iconSlide && I.append(Fa), Aa("onSlideStart", [I, ua])
        }

        function na() {
            var a = !1;
            if (!Tb) {
                if (Ba.actions) Da.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (0 > sa ? "right" :
                    "left"));
                else if (tb && sa <= tb.percent ? (Qa--, ub = tb, tb = Fb[Qa], a = !0) : ub && sa >= ub.percent && (Qa++, tb = ub, ub = Fb[Qa], a = !0), a)
                    if (Ka = 0 < sa ? tb : ub) ba(Ka, P.iconSlide), Aa("onStageChange", [I, ua, Ka]);
                yb || (Tb = !0, jc = R(m))
            }
        }

        function t(d) {
            var h, e, i = !1;
            da(jc);
            Tb = !1;
            yb || m();
            if (Ba.actions) 10 < Math.abs(sa) && D && (Y(I, 0 > sa ? -D : D, 200), b = i = !0, f = I, mb = ua, a(q).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                a.preventDefault();
                B(I, !0, d)
            }));
            else if (P.quickSwipe && !yb && (e = new Date - hc, h = 300 > e && -50 > ka, e = 300 > e && 50 < ka, h ? (Mb = !0,
                Ka = Ba.left, ba(Ka, P.iconSlide)) : e && (Mb = !0, Ka = Ba.right, ba(Ka, P.iconSlide))), Ka && Ka.action) Ra = u(Ka.disabled, [I, ua, J]), Ra || (i = !0, (b = yb || u(Ka.confirm, [I, ua, J])) ? (Y(I, 100 * (0 > sa ? -1 : 1) * Fa.outerWidth(!0) / ab, 200, !0), c(Ka, I, ua, !1, d)) : ca(Ka, I, ua, d));
            i || B(I, !0, d);
            jb = !1
        }

        function ma() {
            Wa = !0;
            qa = Ja = !1;
            xb = 0;
            Ca = ua;
            P.vibrate && ha();
            va = i(I, "next");
            kb = va.length && va[0].offsetTop;
            Na = i(I, "prev");
            lb = Na.length && Na[0].offsetTop + Na.outerHeight();
            cb.height(Ea).insertAfter(I);
            I.css({
                top: La
            }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Ua);
            Aa("onSortStart", [I, Ca])
        }

        function n(a, d, f, h) {
            a.removeClass("mbsc-lv-item-dragging");
            cb.remove();
            Aa("onSortStop", [a, Ca]);
            P.vibrate && ha();
            h && (J.addUndoAction(function(h) {
                J.move(a, d, null, h, f, !0)
            }, !0), Aa("onSortUpdate", [a, Ca]))
        }

        function H() {
            Nb || (clearTimeout(Ib), b && a(q).trigger("touchstart"), zb && (J.close(Ha, Xa), zb = !1, Ha = null))
        }

        function j(d, f) {
            u(f.disabled, [I, ua, J]) && a(".mbsc-ic-" + f.icon, Da).addClass("mbsc-lv-ic-disabled")
        }

        function ca(d, f, h, e) {
            var i, b = {
                icon: "undo2",
                text: P.undoText,
                color: "#b1b1b1",
                action: function() {
                    J.undo()
                }
            };
            d.undo && (J.startActionTrack(), a.isFunction(d.undo) && J.addUndoAction(function() {
                d.undo.call(Pa, f, J, h)
            }), Ub = f.attr("data-ref"));
            i = d.action.call(Pa, f, J, h);
            d.undo ? (J.endActionTrack(), !1 !== i && Y(f, 0 > +f.attr("data-pos") ? -100 : 100, 200), cb.height(Ea).insertAfter(f), f.css("top", La).addClass("mbsc-lv-item-undo"), Oa.hide(), Fa.show(), Da.append(Fa), ba(b), c(b, f, h, !0, e)) : B(f, i, e)
        }

        function c(d, f, h, e, c) {
            var i, D;
            b = !0;
            a(q).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                a.preventDefault();
                e && M(f);
                B(f, !0, c)
            });
            if (!Ya) Fa.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                a.stopPropagation();
                i = X(a, "X");
                D = X(a, "Y")
            }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(a) {
                a.preventDefault();
                "touchend" === a.type && (k.tapped++, setTimeout(function() {
                    k.tapped--
                }, 500));
                20 > Math.abs(X(a, "X") - i) && 20 > Math.abs(X(a, "Y") - D) && (ca(d, f, h, c), e && (Vb = null, M(f)))
            })
        }

        function m() {
            Y(I, gc + 100 * ka / ab);
            Tb = !1
        }

        function B(d, f, h) {
            a(q).off(".mbsc-lv-conf");
            Fa.off(".mbsc-lv-conf");
            !1 !==
            f ? Y(d, 0, "0" !== d.attr("data-pos") ? 200 : 0, !1, function() {
                w(d, h);
                W(d)
            }) : w(d, h);
            b = !1
        }

        function Y(a, d, f, h, e) {
            d = Math.max("right" == jb ? 0 : -100, Math.min(d, "left" == jb ? 0 : 100));
            Za = a[0].style;
            a.attr("data-pos", d);
            v ? (Za[l + "Transform"] = "translate3d(" + (h ? ab * d / 100 + "px" : d + "%") + ",0,0)", Za[l + "Transition"] = U + "transform " + (f || 0) + "ms") : Za.left = d + "%";
            e && (hb++, setTimeout(function() {
                e();
                hb--
            }, f));
            sa = d
        }

        function s(a, d, f, h) {
            d = Math.max(rb, Math.min(d, ib));
            Za = a[0].style;
            v ? (Za[l + "Transform"] = "translate3d(0," + d + "px,0)", Za[l + "Transition"] =
                U + "transform " + (f || 0) + "ms ease-out") : Za.top = La + d + "px";
            h && (hb++, setTimeout(function() {
                h();
                hb--
            }, f))
        }

        function E() {
            clearTimeout(Rb);
            !d && J.sortable && P.fillAnimation && (d = !0, xa.remove())
        }

        function ba(a, d) {
            var f = u(a.text, [I, ua, J]) || "";
            u(a.disabled, [I, ua, J]) ? Da.addClass("mbsc-lv-ic-disabled") : Da.removeClass("mbsc-lv-ic-disabled");
            Da.css("background-color", a.color || (0 === a.percent ? (0 < sa ? Ba.right : Ba.left).color || x : x));
            Fa.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (d ? "move-" : "") + (0 > sa ? "right" : "left"));
            ra.attr("class",
                " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (a.icon || "none"));
            Sb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (f ? "" : " mbsc-lv-ic-only")).html(f || "&nbsp;");
            P.animateIcons && (Mb ? ra.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                ra.addClass("mbsc-lv-ic-a")
            }, 10))
        }

        function w(a, d) {
            pa || (ra.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Da.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Sb.html(""));
            Da.removeClass("mbsc-lv-left mbsc-lv-right");
            a && (Aa("onSlideEnd", [a, ua]),
            d && d())
        }

        function M(a) {
            a.css("top", "").removeClass("mbsc-lv-item-undo");
            Vb ? J.animate(cb, "collapse", function() {
                cb.remove()
            }) : cb.remove();
            w();
            Vb = Ub = null
        }

        function W(a) {
            Za = a[0].style;
            Za[l + "Transform"] = "";
            Za[l + "Transition"] = "";
            Za.top = "";
            a.removeClass("mbsc-lv-item-swiping")
        }

        function u(d, f) {
            return a.isFunction(d) ? d.apply(this, f) : d
        }

        function Q(d) {
            var f;
            d.attr("data-ref") || (f = fa++, d.attr("data-ref", f), db[f] = {
                item: d,
                child: d.children("ul,ol"),
                parent: d.parent(),
                ref: d.parent()[0] === Pa ? null : d.parent().parent().attr("data-ref")
            });
            d.addClass("mbsc-lv-item");
            J.sortable.handle && "list-divider" != d.attr("data-role") && !d.children(".mbsc-lv-handle-c").length && d.append(nb);
            if (P.enhance && !d.hasClass("mbsc-lv-item-enhanced")) {
                f = d.attr("data-icon");
                var h = d.find("img").eq(0).addClass("mbsc-lv-img");
                h.is(":first-child") ? d.addClass("mbsc-lv-img-" + (P.rtl ? "right" : "left")) : h.length && d.addClass("mbsc-lv-img-" + (P.rtl ? "left" : "right"));
                d.addClass("mbsc-lv-item-enhanced").children().each(function(d, f) {
                    f = a(f);
                    f.is("p, h1, h2, h3, h4, h5, h6") && f.addClass("mbsc-lv-txt")
                });
                f && d.addClass("mbsc-lv-item-ic-" + (d.attr("data-icon-align") || (P.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + f + '"></div')
            }
        }

        function G(d) {
            a("li", d).not(".mbsc-lv-item").each(function() {
                Q(a(this))
            });
            a('li[data-role="list-divider"]', d).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");
            a("ul,ol", d).not(".mbsc-lv").addClass("mbsc-lv").prepend(Sa).parent().addClass("mbsc-lv-parent").prepend($a);
            a(".mbsc-lv-back", d).each(function() {
                a(this).attr("data-back", a(this).parent().parent().attr("data-ref"))
            })
        }

        function la(a) {
            return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
        }

        function oa(d) {
            "object" !== typeof d && (d = a('li[data-id="' + d + '"]', za));
            return d
        }

        function i(a, d) {
            for (a = a[d](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
                if (!J.sortable.group && a.hasClass("mbsc-lv-gr-title")) return !1;
                a = a[d]()
            }
            return a
        }

        function aa(a) {
            return Z.isNumeric(a) ? a + "" : 0
        }

        function ea(a) {
            return +(0 > ka ? aa((a.actionsWidth || 0).right) || aa(a.actionsWidth) ||
                aa(P.actionsWidth.right) || aa(P.actionsWidth) : aa((a.actionsWidth || 0).left) || aa(a.actionsWidth) || aa(P.actionsWidth.left) || aa(P.actionsWidth))
        }

        function K(a) {
            var d;
            a && (a = a.offset().top, d = Ta ? ac : Ia.scrollTop(), a < d ? Ia.scrollTop(a - (Ta ? Ia.children().offset().top : 0)) : a > d + Hb && Ia.scrollTop(a - Hb / 2))
        }

        function F(a, d, f, h) {
            var e = d.parent(),
                c = d.prev(),
                h = h || ia;
            c[0] === Fa[0] && (c = Fa.prev());
            ja[0] !== d[0] ? (Aa("onNavStart", [Ab, a, d]), bc.prepend(d.addClass("mbsc-lv-v mbsc-lv-sl-new")), K(za), O(bc, "mbsc-lv-sl-" + a, function() {
                ja.removeClass("mbsc-lv-sl-curr");
                d.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");
                ob && ob.length ? ja.removeClass("mbsc-lv-v").insertAfter(ob) : pb.append(ja.removeClass("mbsc-lv-v"));
                ob = c;
                pb = e;
                ja = d;
                K(f);
                h.call(Pa, f);
                Aa("onNavEnd", [Ab, a, d])
            })) : (K(f), h.call(Pa, f))
        }

        function V(a, d) {
            hb || (a.hasClass("mbsc-lv-parent") ? (Ab++, F("r", db[a.attr("data-ref")].child, null, d)) : a.hasClass("mbsc-lv-back") && (Ab--, F("l", db[a.attr("data-back")].parent, db[a.attr("data-back")].item, d)))
        }

        function O(a, d, f) {
            function h() {
                clearTimeout(e);
                hb--;
                a.off(ga,
                    h).removeClass(d);
                f.call(Pa, a)
            }
            var e, f = f || ia;
            v && P.animation && "mbsc-lv-item-none" !== d ? (hb++, a.on(ga, h).addClass(d), e = setTimeout(h, 500)) : f.call(Pa, a)
        }

        function h(a, d) {
            var f, e = a.attr("data-ref");
            f = cc[e] = cc[e] || [];
            d && f.push(d);
            a.attr("data-action") || (d = f.shift(), a.attr("data-action", 1), d(function() {
                a.removeAttr("data-action");
                f.length ? h(a) : delete cc[e]
            }))
        }

        function ya(d, f, h) {
            var c, i;
            d && d.length && (c = 100 / (d.length + 2), a.each(d, function(a, b) {
                b.key === e && (b.key = dc++);
                b.percent === e && (b.percent = f * c * (a + 1), h && (i =
                    S({}, b), i.key = dc++, i.percent = -c * (a + 1), d.push(i), Wb[i.key] = i));
                Wb[b.key] = b
            }))
        }
        var pa, D, $, sa, d, f, mb, za, Ca, ta, ja, ob, pb, Eb, Ka, Qa, Va, Ya, Ra, ka, Ga, Ja, qa, Wa, Ua, bb, sb, Gb, Aa, xa, eb, wa, Bb, Cb, Xb, p, Ta, nb, Jb, Ha, zb, Xa, fb, Ib, Sa, $a, ra, Fa, Da, ab, I, Ea, ua, qb, ib, rb, Oa, va, kb, ub, Zb, Lb, Nb, ic, $b, cb, Na, lb, tb, Mb, jc, Tb, P, wb, yb, bc, dc, Fb, gc, hc, Pb, Qb, Za, jb, ec, Yb, Sb, Rb, Ba, vb, Ub, Vb, Ia, Hb, xb, ac, J = this,
            Pa = r,
            Ma = a(Pa),
            hb = 0,
            Ab = 0,
            La = 0,
            Wb = {},
            cc = {},
            db = {};
        o.Base.call(this, r, y, !0);
        J.animate = function(a, d, f) {
            O(a, "mbsc-lv-item-" + d, f)
        };
        J.add = function(d,
                         f, c, i, b, D) {
            var j, p, n, t, V, v, O = "",
                g = b === e ? Ma : oa(b),
                m = g,
                F = "object" !== typeof f ? a('<li data-ref="' + fa++ + '" data-id="' + d + '">' + f + "</li>") : f,
                o = 0 > F.attr("data-pos") ? "left" : "right",
                l = F.attr("data-ref"),
                i = i || ia;
            l || (l = fa++, F.addClass("mbsc-lv-item").attr("data-ref", l));
            Q(F);
            D || J.addUndoAction(function(a) {
                t ? J.navigate(g, function() {
                    m.remove();
                    g.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();
                    V.child = g.children("ul,ol");
                    J.remove(F, null, a, true)
                }) : J.remove(F, null, a, true)
            }, !0);
            h(F, function(d) {
                W(F.css("top",
                    "").removeClass("mbsc-lv-item-undo"));
                if (g.is("li")) {
                    v = g.attr("data-ref");
                    if (!g.children("ul,ol").length) {
                        t = true;
                        g.append("<ul></ul>")
                    }
                } else v = g.children(".mbsc-lv-back").attr("data-back");
                if (V = db[v])
                    if (V.child.length) m = V.child;
                    else {
                        g.addClass("mbsc-lv-parent").prepend($a);
                        m = g.children("ul,ol").prepend(Sa).addClass("mbsc-lv");
                        V.child = m;
                        a(".mbsc-lv-back", g).attr("data-back", v)
                    } db[l] = {
                    item: F,
                    child: F.children("ul,ol"),
                    parent: m,
                    ref: v
                };
                n = la(m);
                p = n.length;
                if (c === e || c === null) c = p;
                D && (O = "mbsc-lv-item-new-" +
                    (D ? o : ""));
                G(F.addClass(O));
                if (c !== false)
                    if (p) c < p ? F.insertBefore(n.eq(c)) : F.insertAfter(n.eq(p - 1));
                    else {
                        j = a(".mbsc-lv-back", m);
                        j.length ? F.insertAfter(j) : m.append(F)
                    } if (m.hasClass("mbsc-lv-v")) J.animate(F.height(F.outerHeight()), D && Ub === l ? "none" : "expand", function(a) {
                    J.animate(a.height(""), D ? "add-" + o : "pop-in", function(a) {
                        i.call(Pa, a.removeClass(O));
                        d()
                    })
                });
                else {
                    i.call(Pa, F.removeClass(O));
                    d()
                }
                za.trigger("mbsc-enhance", [{
                    theme: P.theme,
                    lang: P.lang
                }]);
                Aa("onItemAdd", [F])
            })
        };
        J.swipe = function(a, d, f, h, c) {
            I =
                a = oa(a);
            Ya = h;
            pa = yb = !0;
            ka = 0 < d ? 1 : -1;
            A();
            N();
            Y(a, d, f === e ? 300 : f);
            clearInterval(ec);
            ec = setInterval(function() {
                sa = 100 * (Z.getPosition(a) / ab);
                na();
                Math.round(sa) == Math.round(d) && (clearInterval(ec), sa = d, na(), t(c), pa = yb = Ya = !1)
            }, 10)
        };
        J.openStage = function(a, d, f, h) {
            Wb[d] && J.swipe(a, Wb[d].percent, f, h)
        };
        J.openActions = function(a, d, f, h) {
            var c = ea(vb[a.attr("data-type") || "defaults"]);
            J.swipe(a, "left" == d ? -c : c, f, h)
        };
        J.close = function(a, d) {
            J.swipe(a, 0, d)
        };
        J.remove = function(a, d, f, c) {
            var e, i, f = f || ia,
                a = oa(a);
            a.length && (i =
                a.parent(), e = la(i).index(a), c || (a.attr("data-ref") === Ub && (Vb = !0), J.addUndoAction(function(d) {
                J.add(null, a, e, d, i, !0)
            }, !0)), h(a, function(h) {
                d = d || a.attr("data-pos") < 0 ? "left" : "right";
                if (i.hasClass("mbsc-lv-v")) J.animate(a.addClass("mbsc-lv-removed"), c ? "pop-out" : "remove-" + d, function(a) {
                    J.animate(a.height(a.outerHeight()), "collapse", function(a) {
                        W(a.height("").removeClass("mbsc-lv-removed").remove());
                        f.call(Pa, a);
                        h()
                    })
                });
                else {
                    a.remove();
                    f.call(Pa, a);
                    h()
                }
                Aa("onItemRemove", [a])
            }))
        };
        J.move = function(a, d, f, h,
                          c, e) {
            a = oa(a);
            e || J.startActionTrack();
            Da.append(Fa);
            J.remove(a, f, null, e);
            J.add(null, a, d, h, c, e);
            e || J.endActionTrack()
        };
        J.navigate = function(a, d) {
            var f, h, a = oa(a);
            f = db[a.attr("data-ref")];
            h = 0;
            for (var c = db[a.attr("data-ref")]; c.ref;) h++, c = db[c.ref];
            f && (F(h >= Ab ? "r" : "l", f.parent, a, d), Ab = h)
        };
        J.init = function(d) {
            var h = Ma.find("ul,ol").length ? "left" : "right",
                c = 0,
                i = "",
                D = "",
                j = "";
            J._init(d);
            d = P.sort || P.sortable;
            "group" === d && (d = {
                group: !1,
                multiLevel: !0
            });
            !0 === d && (d = {
                group: !0,
                multiLevel: !0,
                handle: P.sortHandle
            });
            d &&
            d.handle === e && (d.handle = P.sortHandle);
            J.sortable = d || !1;
            i += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
            Ma.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show();
            Da = a('<div class="mbsc-lv-stage-c">' + i + "</div>");
            Fa = a(".mbsc-lv-ic-c", Da);
            Oa = a(".mbsc-lv-multi-c", Da);
            ra = a(".mbsc-lv-ic-s", Da);
            Sb = a(".mbsc-lv-ic-text", Da);
            cb = a('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
            xa = a('<div class="mbsc-lv-fill-item"></div>');
            za = a('<div class="mbsc-lv-cont mbsc-lv-' + P.theme + (P.baseTheme ? " mbsc-lv-" + P.baseTheme : "") + (P.animateIcons ? " mbsc-lv-ic-anim" : "") + (v ? "" : " mbsc-lv-no3d") + (P.altRow ? " mbsc-lv-alt-row " : "") + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
            Ta = "body" !== P.context;
            Ia = a(Ta ? P.context : g);
            Ua = a(".mbsc-lv-dummy", za);
            za.insertAfter(Ma);
            J.sortable.handle && (p = !0 === J.sortable.handle ? h : J.sortable.handle, nb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + p + ' mbsc-lv-handle"><div class="' +
                P.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + P.handleMarkup + "</div></div>", za.addClass("mbsc-lv-handle-" + p));
            Ia.on("orientationchange.mbsc-lv resize.mbsc-lv", function() {
                clearTimeout(Va);
                Va = setTimeout(function() {
                    Hb = Ia[0].innerHeight || Ia.innerHeight();
                    ac = Ta ? Ia.offset().top : 0;
                    if (pa) {
                        La = I[0].offsetTop;
                        Ea = I.outerHeight();
                        Da.css({
                            top: La,
                            height: Ea
                        })
                    }
                }, 200)
            }).trigger("resize.mbsc-lv");
            za.on("touchstart mousedown", ".mbsc-lv-item", z).on("touchmove", ".mbsc-lv-item", C).on("touchend touchcancel", ".mbsc-lv-item",
                L);
            Pa.addEventListener && Pa.addEventListener("click", function(a) {
                if (Lb) {
                    a.stopPropagation();
                    a.preventDefault();
                    Lb = false
                }
            }, !0);
            za.on("touchstart mousedown", ".mbsc-lv-ic-m", function(a) {
                if (!Ya) {
                    a.stopPropagation();
                    a.preventDefault()
                }
                Pb = X(a, "X");
                Qb = X(a, "Y")
            }).on("touchend mouseup", ".mbsc-lv-ic-m", function(d) {
                if (!Ya) {
                    if (d.type === "touchend") {
                        k.tapped++;
                        setTimeout(function() {
                            k.tapped--
                        }, 500)
                    }
                    b && !a(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(X(d, "X") - Pb) < 20 && Math.abs(X(d, "Y") - Qb) < 20 && ca((sa < 0 ? Ba.rightMenu :
                        Ba.leftMenu)[a(this).index()], f, mb)
                }
            });
            bc = a(".mbsc-lv-sl-c", za).append(Ma.addClass("mbsc-lv-sl-curr")).attr("data-ref", fa++);
            ja = Ma;
            pb = za;
            Sa = '<li class="mbsc-lv-item mbsc-lv-back">' + P.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + P.leftArrowClass + '"></div></li>';
            $a = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + P.rightArrowClass + '"></div>';
            G(Ma);
            dc = 0;
            vb = P.itemGroups || {};
            vb.defaults = {
                swipeleft: P.swipeleft,
                swiperight: P.swiperight,
                stages: P.stages,
                actions: P.actions,
                actionsWidth: P.actionsWidth
            };
            a.each(vb, function(d, f) {
                f.swipe = f.swipe || P.swipe;
                f.stages = f.stages || [];
                ya(f.stages, 1, true);
                ya(f.stages.left, 1);
                ya(f.stages.right, -1);
                if (f.stages.left || f.stages.right) f.stages = [].concat(f.stages.left || [], f.stages.right || []);
                eb = false;
                if (!f.stages.length) {
                    f.swipeleft && f.stages.push({
                        percent: -30,
                        action: f.swipeleft
                    });
                    f.swiperight && f.stages.push({
                        percent: 30,
                        action: f.swiperight
                    })
                }
                a.each(f.stages, function(a, d) {
                    if (d.percent === 0) {
                        eb = true;
                        return false
                    }
                });
                eb || f.stages.push({
                    percent: 0
                });
                f.stages.sort(function(a,
                                       d) {
                    return a.percent - d.percent
                });
                a.each(f.stages, function(a, d) {
                    if (d.percent === 0) {
                        f.start = a;
                        return false
                    }
                });
                if (eb) f.left = f.right = f.stages[f.start];
                else {
                    f.left = f.stages[f.start - 1] || {};
                    f.right = f.stages[f.start + 1] || {}
                }
                if (f.actions) {
                    f.leftMenu = f.actions.left || f.actions;
                    f.rightMenu = f.actions.right || f.leftMenu;
                    j = D = "";
                    for (c = 0; c < f.leftMenu.length; c++) D = D + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + f.leftMenu[c].icon + '"></div>');
                    for (c = 0; c < f.rightMenu.length; ++c) j = j + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' +
                        f.rightMenu[c].icon + '"></div>');
                    if (f.actions.left) f.swipe = f.actions.right ? f.swipe : "right";
                    if (f.actions.right) f.swipe = f.actions.left ? f.swipe : "left";
                    f.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + D + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + j + "</div>"
                }
            });
            P.fixedHeader && (wa = a('<div class="mbsc-lv-fixed-header"></div>'), Bb = a(".mbsc-lv-gr-title", Ma), Ta ? (Ia.before(wa), wa.addClass("mbsc-lv-fixed-header-ctx mbsc-lv-" + P.theme + (P.baseTheme ? " mbsc-lv-" + P.baseTheme : ""))) : za.prepend(wa),
                Ia.on("scroll.mbsc-lv touchmove.mbsc-lv", function() {
                    if (Wa || !pa) {
                        var d = a(this).scrollTop(),
                            f = Ma.offset().top;
                        Bb.each(function(h, c) {
                            if (a(c).offset().top - (Ta ? f : 0) < d) Cb = h
                        });
                        ta = Bb[Cb];
                        f < (Ta ? Ia.offset().top : d) && d < (Ta ? Ma[0].scrollHeight : f + Ma.height()) ? wa.empty().append(a(ta).clone()).show() : wa.hide()
                    }
                }));
            P.rtl && za.addClass("mbsc-lv-rtl");
            P.hover && (Xa = P.hover.time || 200, fb = P.hover.timeout || 200, Jb = P.hover.direction || P.hover || "right", za.on("mouseenter.mbsc-lv", ".mbsc-lv-item", function() {
                if (!Ha || Ha[0] != this) {
                    H();
                    Ha = a(this);
                    if (vb[Ha.attr("data-type") || "defaults"].actions) Ib = setTimeout(function() {
                        if (Nb) Ha = null;
                        else {
                            zb = true;
                            J.openActions(Ha, Jb, Xa, false)
                        }
                    }, fb)
                }
            }).on("mouseleave.mbsc-lv", H));
            Ma.is("[mbsc-enhance]") && (Xb = !0, Ma.removeAttr("mbsc-enhance"), za.attr("mbsc-enhance", ""));
            za.trigger("mbsc-enhance", [{
                theme: P.theme,
                lang: P.lang
            }]);
            Aa("onInit", [])
        };
        J.destroy = function() {
            pb.append(ja);
            Ta && wa && wa.remove();
            Xb && Ma.attr("mbsc-enhance", "");
            za.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");
            za.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");
            a(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", za).remove();
            Ma.insertAfter(za);
            za.off().remove();
            Da.remove();
            Ia.off(".mbsc-lv");
            J._destroy()
        };
        var Ob, kc = [],
            Db = [],
            fc = [],
            Kb = 0;
        J.startActionTrack = function() {
            Kb || (fc = []);
            Kb++
        };
        J.endActionTrack = function() {
            Kb--;
            Kb || Db.push(fc)
        };
        J.addUndoAction = function(a, d) {
            var f = {
                action: a,
                async: d
            };
            Kb ? fc.push(f) : (Db.push([f]), Db.length > P.undoLimit && Db.shift())
        };
        J.undo = function() {
            function a() {
                0 > h ? (Ob = !1, d()) : (f = c[h], h--, f.async ? f.action(a) : (f.action(), a()))
            }

            function d() {
                if (c = kc.shift()) Ob = !0, h = c.length - 1, a()
            }
            var f, h, c;
            Db.length && kc.push(Db.pop());
            Ob || d()
        };
        P = J.settings;
        Aa = J.trigger;
        J.init(y)
    };
    o.ListView.prototype = {
        _class: "listview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: !0,
            quickSwipe: !0,
            animateIcons: !0,
            fillAnimation: !0,
            animation: !0,
            revert: !0,
            handleClass: "",
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: []
        }
    };
    k.themes.listview.mobiscroll = {
        leftArrowClass: "mbsc-ic-arrow-left5",
        rightArrowClass: "mbsc-ic-arrow-right5"
    };
    k.presetShort("listview", "ListView")
})(jQuery, window, document);
(function(a) {
    var g = a.mobiscroll.themes.listview,
        q = {
            onThemeLoad: function(a, b) {
                b.theme && (b.theme = b.theme.replace(" light", "-light"))
            },
            onInit: function() {
                a(this).closest(".mbsc-lv-cont").addClass("mbsc-lv-wp")
            }
        };
    g.wp = q;
    g["wp-light"] = q;
    g["wp light"] = q
})(jQuery);
(function(a, g, q, e) {
    var b, S, k = a.mobiscroll,
        o = k.util,
        Z = o.jsPrefix,
        U = o.has3d,
        l = o.getCoord,
        v = o.constrain,
        X = o.isString,
        T = /android [1-3]/i.test(navigator.userAgent),
        o = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent),
        ha = function() {},
        fa = function(a) {
            a.preventDefault()
        };
    k.classes.Frame = function(o, R, da) {
        function ga(c) {
            m && m.removeClass("dwb-a");
            m = a(this);
            !m.hasClass("dwb-d") && !m.hasClass("dwb-nhl") && m.addClass("dwb-a");
            if ("mousedown" === c.type) a(q).on("mouseup", x)
        }

        function x(c) {
            m && (m.removeClass("dwb-a"),
                m = null);
            "mouseup" === c.type && a(q).off("mouseup", x)
        }

        function r(a) {
            13 == a.keyCode ? i.select() : 27 == a.keyCode && i.cancel()
        }

        function y(c) {
            var j, Q, h, n = u.focusOnClose;
            i._markupRemove();
            t.remove();
            b && !c && setTimeout(function() {
                if (n === e || !0 === n) {
                    S = !0;
                    j = b[0];
                    h = j.type;
                    Q = j.value;
                    try {
                        j.type = "button"
                    } catch (c) {}
                    b.focus();
                    j.type = h;
                    j.value = Q
                } else n && a(n).focus()
            }, 200);
            i._isVisible = !1;
            Y("onHide", [])
        }

        function A(a) {
            clearTimeout(K[a.type]);
            K[a.type] = setTimeout(function() {
                var c = "scroll" == a.type;
                (!c || Q) && i.position(!c)
            }, 200)
        }

        function z(a) {
            a.target.nodeType && !H[0].contains(a.target) && H.focus()
        }

        function C(c, e) {
            c && c();
            a(q.activeElement).is("input,textarea") && a(q.activeElement).blur();
            b = e;
            i.show();
            setTimeout(function() {
                S = !1
            }, 300)
        }
        var L, N, na, t, ma, n, H, j, ca, c, m, B, Y, s, E, ba, w, M, W, u, Q, G, la, oa, i = this,
            aa = a(o),
            ea = [],
            K = {};
        k.classes.Base.call(this, o, R, !0);
        i.position = function(c) {
            var b, g, h, m, o, D, l, r, d, f, s = 0,
                G = 0;
            d = {};
            var B = Math.min(j[0].innerWidth || j.innerWidth(), n.width()),
                k = j[0].innerHeight || j.innerHeight();
            if (!(la === B && oa === k && c || W))
                if ((i._isFullScreen ||
                    /top|bottom/.test(u.display)) && H.width(B), !1 !== Y("onPosition", [t, B, k]) && E) {
                    g = j.scrollLeft();
                    c = j.scrollTop();
                    m = u.anchor === e ? aa : a(u.anchor);
                    i._isLiquid && "liquid" !== u.layout && (400 > B ? t.addClass("dw-liq") : t.removeClass("dw-liq"));
                    !i._isFullScreen && /modal|bubble/.test(u.display) && (ca.width(""), a(".mbsc-w-p", t).each(function() {
                        b = a(this).outerWidth(!0);
                        s += b;
                        G = b > G ? b : G
                    }), b = s > B ? G : s, ca.width(b + 1).css("white-space", s > B ? "" : "nowrap"));
                    ba = H.outerWidth();
                    w = H.outerHeight(!0);
                    Q = w <= k && ba <= B;
                    i.scrollLock = Q;
                    "modal" == u.display ?
                        (g = Math.max(0, g + (B - ba) / 2), h = c + (k - w) / 2) : "bubble" == u.display ? (f = !0, r = a(".dw-arrw-i", t), h = m.offset(), D = Math.abs(N.offset().top - h.top), l = Math.abs(N.offset().left - h.left), o = m.outerWidth(), m = m.outerHeight(), g = v(l - (H.outerWidth(!0) - o) / 2, g + 3, g + B - ba - 3), h = D - w, h < c || D > c + k ? (H.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), h = D + m) : H.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), r = r.outerWidth(), o = v(l + o / 2 - (g + (ba - r) / 2), 0, r), a(".dw-arr", t).css({
                            left: o
                        })) : "top" == u.display ? h = c : "bottom" == u.display &&
                        (h = c + k - w);
                    h = 0 > h ? 0 : h;
                    d.top = h;
                    d.left = g;
                    H.css(d);
                    n.height(0);
                    d = Math.max(h + w, "body" == u.context ? a(q).height() : N[0].scrollHeight);
                    n.css({
                        height: d
                    });
                    if (f && (h + w > c + k || D > c + k)) W = !0, setTimeout(function() {
                        W = false
                    }, 300), j.scrollTop(Math.min(h + w - k, d - k));
                    la = B;
                    oa = k
                }
        };
        i.attachShow = function(a, c) {
            ea.push({
                readOnly: a.prop("readonly"),
                el: a
            });
            if ("inline" !== u.display) {
                if (G && a.is("input")) a.prop("readonly", !0).on("mousedown.dw", function(a) {
                    a.preventDefault()
                });
                if (u.showOnFocus) a.on("focus.dw", function() {
                    S || C(c, a)
                });
                u.showOnTap &&
                (a.on("keydown.dw", function(e) {
                    if (32 == e.keyCode || 13 == e.keyCode) e.preventDefault(), e.stopPropagation(), C(c, a)
                }), i.tap(a, function() {
                    C(c, a)
                }))
            }
        };
        i.select = function() {
            if (!E || !1 !== i.hide(!1, "set")) i._fillValue(), Y("onSelect", [i._value])
        };
        i.cancel = function() {
            (!E || !1 !== i.hide(!1, "cancel")) && Y("onCancel", [i._value])
        };
        i.clear = function() {
            Y("onClear", [t]);
            E && !i.live && i.hide(!1, "clear");
            i.setVal(null, !0)
        };
        i.enable = function() {
            u.disabled = !1;
            i._isInput && aa.prop("disabled", !1)
        };
        i.disable = function() {
            u.disabled = !0;
            i._isInput && aa.prop("disabled", !0)
        };
        i.show = function(b, m) {
            var v;
            if (!u.disabled && !i._isVisible) {
                i._readValue();
                Y("onBeforeShow", []);
                B = T ? !1 : u.animate;
                !1 !== B && ("top" == u.display && (B = "slidedown"), "bottom" == u.display && (B = "slideup"));
                v = '<div lang="' + u.lang + '" class="mbsc-' + u.theme + (u.baseTheme ? " mbsc-" + u.baseTheme : "") + " dw-" + u.display + " " + (u.cssClass || "") + (i._isLiquid ? " dw-liq" : "") + (T ? " mbsc-old" : "") + (s ? "" : " dw-nobtn") + '"><div class="dw-persp">' + (E ? '<div class="dwo"></div>' : "") + "<div" + (E ? ' role="dialog" tabindex="-1"' :
                    "") + ' class="dw' + (u.rtl ? " dw-rtl" : " dw-ltr") + '">' + ("bubble" === u.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>' : "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (u.headerText ? '<div class="dwv">' + (X(u.headerText) ? u.headerText : "") + "</div>" : "") + '<div class="dwcc">';
                v += i._generateContent();
                v += "</div>";
                s && (v += '<div class="dwbc">', a.each(c, function(a, b) {
                    b = X(b) ? i.buttons[b] : b;
                    if (b.handler === "set") b.parentClass = "dwb-s";
                    if (b.handler ===
                        "cancel") b.parentClass = "dwb-c";
                    b.handler = X(b.handler) ? i.handlers[b.handler] : b.handler;
                    v = v + ("<div" + (u.btnWidth ? ' style="width:' + 100 / c.length + '%"' : "") + ' class="dwbw ' + (b.parentClass || "") + '"><div tabindex="0" role="button" class="dwb' + a + " dwb-e " + (b.cssClass === e ? u.btnClass : b.cssClass) + (b.icon ? " mbsc-ic mbsc-ic-" + b.icon : "") + '">' + (b.text || "") + "</div></div>")
                }), v += "</div>");
                v += "</div></div></div></div>";
                t = a(v);
                n = a(".dw-persp", t);
                ma = a(".dwo", t);
                ca = a(".dwwr", t);
                na = a(".dwv", t);
                H = a(".dw", t);
                L = a(".dw-aria",
                    t);
                i._markup = t;
                i._header = na;
                i._isVisible = !0;
                M = "orientationchange resize";
                i._markupReady(t);
                Y("onMarkupReady", [t]);
                if (E) {
                    a(g).on("keydown", r);
                    if (u.scrollLock) t.on("touchmove mousewheel wheel", function(a) {
                        Q && a.preventDefault()
                    });
                    "Moz" !== Z && a("input,select,button", N).each(function() {
                        this.disabled || a(this).addClass("dwtd").prop("disabled", true)
                    });
                    k.activeInstance && k.activeInstance.hide();
                    M += " scroll";
                    k.activeInstance = i;
                    t.appendTo(N);
                    j.on("focusin", z);
                    U && B && !b && t.addClass("dw-in dw-trans").on("webkitAnimationEnd animationend",
                        function() {
                            t.off("webkitAnimationEnd animationend").removeClass("dw-in dw-trans").find(".dw").removeClass("dw-" + B);
                            m || H.focus();
                            i.ariaMessage(u.ariaMessage)
                        }).find(".dw").addClass("dw-" + B)
                } else aa.is("div") && !i._hasContent ? aa.html(t) : t.insertAfter(aa);
                i._markupInserted(t);
                Y("onMarkupInserted", [t]);
                i.position();
                j.on(M, A);
                t.on("selectstart mousedown", fa).on("click", ".dwb-e", fa).on("keydown", ".dwb-e", function(h) {
                    if (h.keyCode == 32) {
                        h.preventDefault();
                        h.stopPropagation();
                        a(this).click()
                    }
                }).on("keydown",
                    function(h) {
                        if (h.keyCode == 32) h.preventDefault();
                        else if (h.keyCode == 9 && E) {
                            var c = t.find('[tabindex="0"]').filter(function() {
                                    return this.offsetWidth > 0 || this.offsetHeight > 0
                                }),
                                e = c.index(a(":focus", t)),
                                b = c.length - 1,
                                i = 0;
                            if (h.shiftKey) {
                                b = 0;
                                i = -1
                            }
                            if (e === b) {
                                c.eq(i).focus();
                                h.preventDefault()
                            }
                        }
                    });
                a("input,select,textarea", t).on("selectstart mousedown", function(a) {
                    a.stopPropagation()
                }).on("keydown", function(a) {
                    a.keyCode == 32 && a.stopPropagation()
                });
                a.each(c, function(c, e) {
                    i.tap(a(".dwb" + c, t), function(a) {
                        e = X(e) ? i.buttons[e] :
                            e;
                        e.handler.call(this, a, i)
                    }, true)
                });
                u.closeOnOverlay && i.tap(ma, function() {
                    i.cancel()
                });
                E && !B && (m || H.focus(), i.ariaMessage(u.ariaMessage));
                t.on("touchstart mousedown", ".dwb-e", ga).on("touchend", ".dwb-e", x);
                i._attachEvents(t);
                Y("onShow", [t, i._tempValue])
            }
        };
        i.hide = function(c, e, b) {
            if (!i._isVisible || !b && !i._isValid && "set" == e || !b && !1 === Y("onClose", [i._tempValue, e])) return !1;
            if (t) {
                "Moz" !== Z && a(".dwtd", N).each(function() {
                    a(this).prop("disabled", !1).removeClass("dwtd")
                });
                if (U && E && B && !c && !t.hasClass("dw-trans")) t.addClass("dw-out dw-trans").find(".dw").addClass("dw-" +
                    B).on("webkitAnimationEnd animationend", function() {
                    y(c)
                });
                else y(c);
                j.off(M, A).off("focusin", z)
            }
            E && (a(g).off("keydown", r), delete k.activeInstance)
        };
        i.ariaMessage = function(a) {
            L.html("");
            setTimeout(function() {
                L.html(a)
            }, 100)
        };
        i.isVisible = function() {
            return i._isVisible
        };
        i.setVal = ha;
        i._generateContent = ha;
        i._attachEvents = ha;
        i._readValue = ha;
        i._fillValue = ha;
        i._markupReady = ha;
        i._markupInserted = ha;
        i._markupRemove = ha;
        i._processSettings = ha;
        i._presetLoad = function(a) {
            a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);
            a.headerText = a.headerText === e ? "inline" !== a.display ? "{value}" : !1 : a.headerText
        };
        i.tap = function(a, c, e) {
            var h, b, i;
            if (u.tap) a.on("touchstart.dw", function(a) {
                e && a.preventDefault();
                h = l(a, "X");
                b = l(a, "Y");
                i = !1
            }).on("touchmove.dw", function(a) {
                if (!i && 20 < Math.abs(l(a, "X") - h) || 20 < Math.abs(l(a, "Y") - b)) i = !0
            }).on("touchend.dw", function(a) {
                i || (a.preventDefault(), c.call(this, a));
                k.tapped++;
                setTimeout(function() {
                    k.tapped--
                }, 500)
            });
            a.on("click.dw", function(a) {
                a.preventDefault();
                c.call(this, a)
            })
        };
        i.destroy = function() {
            i.hide(!0, !1, !0);
            a.each(ea, function(a, c) {
                c.el.off(".dw").prop("readonly", c.readOnly)
            });
            i._destroy()
        };
        i.init = function(e) {
            i._init(e);
            i._isLiquid = "liquid" === (u.layout || (/top|bottom/.test(u.display) ? "liquid" : ""));
            i._processSettings();
            aa.off(".dw");
            c = u.buttons || [];
            E = "inline" !== u.display;
            G = u.showOnFocus || u.showOnTap;
            j = a("body" == u.context ? g : u.context);
            N = a(u.context);
            i.context = j;
            i.live = !0;
            a.each(c, function(a, c) {
                if ("ok" == c || "set" == c || "set" == c.handler) return i.live = !1
            });
            i.buttons.set = {
                text: u.setText,
                handler: "set"
            };
            i.buttons.cancel = {
                text: i.live ? u.closeText : u.cancelText,
                handler: "cancel"
            };
            i.buttons.clear = {
                text: u.clearText,
                handler: "clear"
            };
            i._isInput = aa.is("input");
            s = 0 < c.length;
            i._isVisible && i.hide(!0, !1, !0);
            Y("onInit", []);
            E ? (i._readValue(), i._hasContent || i.attachShow(aa)) : i.show();
            aa.on("change.dw", function() {
                i._preventChange || i.setVal(aa.val(), true, false);
                i._preventChange = false
            })
        };
        i.buttons = {};
        i.handlers = {
            set: i.select,
            cancel: i.cancel,
            clear: i.clear
        };
        i._value = null;
        i._isValid = !0;
        i._isVisible = !1;
        u =
            i.settings;
        Y = i.trigger;
        da || i.init(R)
    };
    k.classes.Frame.prototype._defaults = {
        lang: "en",
        setText: "Set",
        selectedText: "Selected",
        closeText: "Close",
        cancelText: "Cancel",
        clearText: "Clear",
        disabled: !1,
        closeOnOverlay: !0,
        showOnFocus: !1,
        showOnTap: !0,
        display: "modal",
        scrollLock: !0,
        tap: !0,
        btnClass: "dwb",
        btnWidth: !0,
        focusOnClose: !o
    };
    k.themes.frame.mobiscroll = {
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    };
    a(g).on("focus", function() {
        b && (S = !0)
    })
})(jQuery, window, document);
(function(a) {
    var g = a.mobiscroll.themes.frame,
        q = {
            minWidth: 76,
            height: 76,
            dateOrder: "mmMMddDDyy",
            headerText: !1,
            showLabel: !1,
            deleteIcon: "backspace4",
            icon: {
                filled: "star3",
                empty: "star"
            },
            btnWidth: !1,
            btnStartClass: "mbsc-ic mbsc-ic-play3",
            btnStopClass: "mbsc-ic mbsc-ic-pause2",
            btnResetClass: "mbsc-ic mbsc-ic-stop2",
            btnLapClass: "mbsc-ic mbsc-ic-loop2",
            btnHideClass: "mbsc-ic mbsc-ic-close",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
            btnPlusClass: "mbsc-ic mbsc-ic-plus",
            btnMinusClass: "mbsc-ic mbsc-ic-minus",
            onMarkupInserted: function(e, b) {
                var g, k, o;
                if ("clickpick" != b.settings.mode) a(".dwwl", e).on("touchstart mousedown wheel mousewheel", function(b) {
                    "mousedown" === b.type && k || (k = "touchstart" === b.type, g = !0, o = a(this).hasClass("wpa"), a(".dwwl", e).removeClass("wpa"), a(".dw-sel", this).removeClass("dw-sel"), a(this).addClass("wpa"))
                }).on("touchmove mousemove", function() {
                    g = !1
                }).on("touchend mouseup", function(e) {
                    g && o && a(e.target).closest(".dw-li").hasClass("dw-sel") && a(this).removeClass("wpa");
                    "mouseup" === e.type && (k = !1);
                    g = !1
                })
            },
            onThemeLoad: function(a, b) {
                if (a && a.dateOrder && !b.dateOrder) {
                    var g = a.dateOrder,
                        g = g.match(/mm/i) ? g.replace(/mmMM|mm|MM/, "mmMM") : g.replace(/mM|m|M/, "mM"),
                        g = g.match(/dd/i) ? g.replace(/ddDD|dd|DD/, "ddDD") : g.replace(/dD|d|D/, "dD");
                    b.dateOrder = g
                }
            },
            onInit: function(a) {
                a = a.buttons;
                a.set.icon = "checkmark";
                a.cancel.icon = "close";
                a.clear.icon = "close";
                a.ok && (a.ok.icon = "checkmark");
                a.close && (a.close.icon = "close");
                a.now && (a.now.icon = "loop2")
            }
        };
    g.wp = q;
    g["wp-light"] = q;
    g["wp light"] = q
})(jQuery);
(function(a, g, q, e) {
    var b, g = a.mobiscroll,
        S = g.classes,
        k = g.util,
        o = k.jsPrefix,
        Z = k.has3d,
        U = k.hasFlex,
        l = k.getCoord,
        v = k.constrain,
        X = k.testTouch;
    g.presetShort("scroller", "Scroller", !1);
    S.Scroller = function(g, ha, fa) {
        function ia(d) {
            if (X(d, this) && !b && !u && !Y && !C(this) && (d.preventDefault(), d.stopPropagation(), b = !0, s = "clickpick" != w.mode, K = a(".dw-ul", this), N(K), i = (Q = pa[F] !== e) ? Math.round(-k.getPosition(K, !0) / E) : D[F], G = l(d, "Y"), la = new Date, oa = G, ma(K, F, i, 0.001), s && K.closest(".dwwl").addClass("dwa"), "mousedown" === d.type)) a(q).on("mousemove",
                R).on("mouseup", da)
        }

        function R(a) {
            if (b && s && (a.preventDefault(), a.stopPropagation(), oa = l(a, "Y"), 3 < Math.abs(oa - G) || Q)) ma(K, F, v(i + (G - oa) / E, aa - 1, ea + 1)), Q = !0
        }

        function da(d) {
            if (b) {
                var f = new Date - la,
                    c = v(Math.round(i + (G - oa) / E), aa - 1, ea + 1),
                    e = c,
                    g, D = K.offset().top;
                d.stopPropagation();
                b = !1;
                "mouseup" === d.type && a(q).off("mousemove", R).off("mouseup", da);
                Z && 300 > f ? (g = (oa - G) / f, f = g * g / w.speedUnit, 0 > oa - G && (f = -f)) : f = oa - G;
                if (Q) e = v(Math.round(i - f / E), aa, ea), f = g ? Math.max(0.1, Math.abs((e - c) / g) * w.timeUnit) : 0.1;
                else {
                    var c = Math.floor((oa -
                        D) / E),
                        n = a(a(".dw-li", K)[c]);
                    g = n.hasClass("dw-v");
                    D = s;
                    f = 0.1;
                    !1 !== W("onValueTap", [n]) && g ? e = c : D = !0;
                    D && g && (n.addClass("dw-hl"), setTimeout(function() {
                        n.removeClass("dw-hl")
                    }, 100));
                    if (!ba && (!0 === w.confirmOnTap || w.confirmOnTap[F]) && n.hasClass("dw-sel")) {
                        h.select();
                        return
                    }
                }
                s && j(K, F, e, 0, f, !0)
            }
        }

        function ga(d) {
            Y = a(this);
            X(d, this) && z(d, Y.closest(".dwwl"), Y.hasClass("dwwbp") ? ca : c);
            if ("mousedown" === d.type) a(q).on("mouseup", x)
        }

        function x(d) {
            Y = null;
            u && (clearInterval(O), u = !1);
            "mouseup" === d.type && a(q).off("mouseup",
                x)
        }

        function r(d) {
            38 == d.keyCode ? z(d, a(this), c) : 40 == d.keyCode && z(d, a(this), ca)
        }

        function y() {
            u && (clearInterval(O), u = !1)
        }

        function A(d) {
            if (!C(this)) {
                d.preventDefault();
                var d = d.originalEvent || d,
                    f = d.deltaY || d.wheelDelta || d.detail,
                    c = a(".dw-ul", this);
                N(c);
                ma(c, F, v(((0 > f ? -20 : 20) - $[F]) / E, aa - 1, ea + 1));
                clearTimeout(M);
                M = setTimeout(function() {
                    j(c, F, Math.round(D[F]), 0 < f ? 1 : 2, 0.1)
                }, 200)
            }
        }

        function z(a, f, c) {
            a.stopPropagation();
            a.preventDefault();
            if (!u && !C(f) && !f.hasClass("dwa")) {
                u = !0;
                var h = f.find(".dw-ul");
                N(h);
                clearInterval(O);
                O = setInterval(function() {
                    c(h)
                }, w.delay);
                c(h)
            }
        }

        function C(d) {
            return a.isArray(w.readonly) ? (d = a(".dwwl", B).index(d), w.readonly[d]) : w.readonly
        }

        function L(d) {
            var f = '<div class="dw-bf">',
                d = sa[d],
                c = 1,
                h = d.labels || [],
                b = d.values || [],
                e = d.keys || b;
            a.each(b, function(a, d) {
                0 === c % 20 && (f += '</div><div class="dw-bf">');
                f += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + e[a] + '"' + (h[a] ? ' aria-label="' + h[a] + '"' : "") + ' style="height:' + E + "px;line-height:" + E + 'px;"><div class="dw-i"' + (1 < V ? ' style="line-height:' +
                    Math.round(E / V) + "px;font-size:" + Math.round(0.8 * (E / V)) + 'px;"' : "") + ">" + d + "</div></div>";
                c++
            });
            return f += "</div>"
        }

        function N(d) {
            ba = d.closest(".dwwl").hasClass("dwwms");
            aa = a(".dw-li", d).index(a(ba ? ".dw-li" : ".dw-v", d).eq(0));
            ea = Math.max(aa, a(".dw-li", d).index(a(ba ? ".dw-li" : ".dw-v", d).eq(-1)) - (ba ? w.rows - ("scroller" == w.mode ? 1 : 3) : 0));
            F = a(".dw-ul", B).index(d)
        }

        function na(a) {
            var f = w.headerText;
            return f ? "function" === typeof f ? f.call(g, a) : f.replace(/\{value\}/i, a) : ""
        }

        function t(a, f) {
            clearTimeout(pa[f]);
            delete pa[f];
            a.closest(".dwwl").removeClass("dwa")
        }

        function ma(a, f, c, h, b) {
            var e = -c * E,
                i = a[0].style;
            e == $[f] && pa[f] || ($[f] = e, Z ? (i[o + "Transition"] = k.prefix + "transform " + (h ? h.toFixed(3) : 0) + "s ease-out", i[o + "Transform"] = "translate3d(0," + e + "px,0)") : i.top = e + "px", pa[f] && t(a, f), h && b && (a.closest(".dwwl").addClass("dwa"), pa[f] = setTimeout(function() {
                t(a, f)
            }, 1E3 * h)), D[f] = c)
        }

        function n(d, f, c, h, e) {
            var b = a('.dw-li[data-val="' + d + '"]', f),
                i = a(".dw-li", f),
                d = i.index(b),
                g = i.length;
            if (h) N(f);
            else if (!b.hasClass("dw-v")) {
                for (var j = b,
                         D = 0, n = 0; 0 <= d - D && !j.hasClass("dw-v");) D++, j = i.eq(d - D);
                for (; d + n < g && !b.hasClass("dw-v");) n++, b = i.eq(d + n);
                (n < D && n && 2 !== c || !D || 0 > d - D || 1 == c) && b.hasClass("dw-v") ? d += n : (b = j, d -= D)
            }
            c = b.hasClass("dw-sel");
            e && (h || (a(".dw-sel", f).removeAttr("aria-selected"), b.attr("aria-selected", "true")), a(".dw-sel", f).removeClass("dw-sel"), b.addClass("dw-sel"));
            return {
                selected: c,
                v: h ? v(d, aa, ea) : d,
                val: b.hasClass("dw-v") ? b.attr("data-val") : null
            }
        }

        function H(d, f, c, b, i) {
            !1 !== W("validate", [B, f, d, b]) && (a(".dw-ul", B).each(function(c) {
                var g =
                        a(this),
                    j = g.closest(".dwwl").hasClass("dwwms"),
                    D = c == f || f === e,
                    j = n(h._tempWheelArray[c], g, b, j, !0);
                if (!j.selected || D) h._tempWheelArray[c] = j.val, ma(g, c, j.v, D ? d : 0.1, D ? i : !1)
            }), W("onValidated", []), h._tempValue = w.formatValue(h._tempWheelArray, h), h.live && (h._hasValue = c || h._hasValue, m(c, c, 0, !0)), h._header.html(na(h._tempValue)), c && W("onChange", [h._tempValue]))
        }

        function j(d, f, c, b, e, i) {
            c = v(c, aa, ea);
            h._tempWheelArray[f] = a(".dw-li", d).eq(c).attr("data-val");
            ma(d, f, c, e, i);
            setTimeout(function() {
                H(e, f, !0, b, i)
            }, 10)
        }

        function ca(a) {
            var f = D[F] + 1;
            j(a, F, f > ea ? aa : f, 1, 0.1)
        }

        function c(a) {
            var f = D[F] - 1;
            j(a, F, f < aa ? ea : f, 2, 0.1)
        }

        function m(a, f, c, b, e) {
            h._isVisible && !b && H(c);
            h._tempValue = w.formatValue(h._tempWheelArray, h);
            e || (h._wheelArray = h._tempWheelArray.slice(0), h._value = h._hasValue ? h._tempValue : null);
            a && (W("onValueFill", [h._hasValue ? h._tempValue : "", f]), h._isInput && ya.val(h._hasValue ? h._tempValue : ""), f && (h._preventChange = !0, ya.change()))
        }
        var B, Y, s, E, ba, w, M, W, u, Q, G, la, oa, i, aa, ea, K, F, V, O, h = this,
            ya = a(g),
            pa = {},
            D = {},
            $ = {},
            sa = [];
        S.Frame.call(this, g, ha, !0);
        h.setVal = h._setVal = function(d, f, c, b, i) {
            h._hasValue = null !== d && d !== e;
            h._tempWheelArray = a.isArray(d) ? d.slice(0) : w.parseValue.call(g, d, h) || [];
            m(f, c === e ? f : c, i, !1, b)
        };
        h.getVal = h._getVal = function(a) {
            a = h._hasValue || a ? h[a ? "_tempValue" : "_value"] : null;
            return k.isNumeric(a) ? +a : a
        };
        h.setArrayVal = h.setVal;
        h.getArrayVal = function(a) {
            return a ? h._tempWheelArray : h._wheelArray
        };
        h.setValue = function(a, f, c, b, e) {
            h.setVal(a, f, e, b, c)
        };
        h.getValue = h.getArrayVal;
        h.changeWheel = function(d, f, c) {
            if (B) {
                var b =
                        0,
                    i = d.length;
                a.each(w.wheels, function(j, g) {
                    a.each(g, function(g, j) {
                        if (-1 < a.inArray(b, d) && (sa[b] = j, a(".dw-ul", B).eq(b).html(L(b)), i--, !i)) return h.position(), H(f, e, c), !1;
                        b++
                    });
                    if (!i) return !1
                })
            }
        };
        h.getValidCell = n;
        h.scroll = ma;
        h._generateContent = function() {
            var d, f = "",
                c = 0;
            a.each(w.wheels, function(h, b) {
                f += '<div class="mbsc-w-p dwc' + ("scroller" != w.mode ? " dwpm" : " dwsc") + (w.showLabel ? "" : " dwhl") + '"><div class="dwwc"' + (w.maxWidth ? "" : ' style="max-width:600px;"') + ">" + (U ? "" : '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>');
                a.each(b, function(a, h) {
                    sa[c] = h;
                    d = h.label !== e ? h.label : a;
                    f += "<" + (U ? "div" : "td") + ' class="dwfl" style="' + (w.fixedWidth ? "width:" + (w.fixedWidth[c] || w.fixedWidth) + "px;" : (w.minWidth ? "min-width:" + (w.minWidth[c] || w.minWidth) + "px;" : "min-width:" + w.width + "px;") + (w.maxWidth ? "max-width:" + (w.maxWidth[c] || w.maxWidth) + "px;" : "")) + '"><div class="dwwl dwwl' + c + (h.multiple ? " dwwms" : "") + '">' + ("scroller" != w.mode ? '<div class="dwb-e dwwb dwwbp ' + (w.btnPlusClass || "") + '" style="height:' + E + "px;line-height:" + E + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' +
                        (w.btnMinusClass || "") + '" style="height:' + E + "px;line-height:" + E + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + d + '</div><div tabindex="0" aria-live="off" aria-label="' + d + '" role="listbox" class="dwww"><div class="dww" style="height:' + w.rows * E + 'px;"><div class="dw-ul" style="margin-top:' + (h.multiple ? "scroller" == w.mode ? 0 : E : w.rows / 2 * E - E / 2) + 'px;">';
                    f += L(c) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (w.selectedLineHeight ? ' style="height:' + E + "px;margin-top:-" + (E / 2 + (w.selectedLineBorder ||
                        0)) + 'px;"' : "") + "></div></div>" + (U ? "</div>" : "</td>");
                    c++
                });
                f += (U ? "" : "</tr></table>") + "</div></div>"
            });
            return f
        };
        h._attachEvents = function(a) {
            a.on("keydown", ".dwwl", r).on("keyup", ".dwwl", y).on("touchstart mousedown", ".dwwl", ia).on("touchmove", ".dwwl", R).on("touchend", ".dwwl", da).on("touchstart mousedown", ".dwwb", ga).on("touchend", ".dwwb", x);
            if (w.mousewheel) a.on("wheel mousewheel", ".dwwl", A)
        };
        h._markupReady = function(a) {
            B = a;
            H()
        };
        h._fillValue = function() {
            h._hasValue = !0;
            m(!0, !0, 0, !0)
        };
        h._readValue = function() {
            var a =
                ya.val() || "";
            "" !== a && (h._hasValue = !0);
            h._tempWheelArray = h._hasValue && h._wheelArray ? h._wheelArray.slice(0) : w.parseValue.call(g, a, h) || [];
            m()
        };
        h._processSettings = function() {
            w = h.settings;
            W = h.trigger;
            E = w.height;
            V = w.multiline;
            h._isLiquid = "liquid" === (w.layout || (/top|bottom/.test(w.display) && 1 == w.wheels.length ? "liquid" : ""));
            w.formatResult && (w.formatValue = w.formatResult);
            1 < V && (w.cssClass = (w.cssClass || "") + " dw-ml");
            "scroller" != w.mode && (w.rows = Math.max(3, w.rows))
        };
        h._selectedValues = {};
        fa || h.init(ha)
    };
    S.Scroller.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _hasPreset: !0,
        _class: "scroller",
        _defaults: a.extend({}, S.Frame.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: !1,
            showLabel: !0,
            confirmOnTap: !0,
            wheels: [],
            mode: "scroller",
            preset: "",
            speedUnit: 0.0012,
            timeUnit: 0.08,
            formatValue: function(a) {
                return a.join(" ")
            },
            parseValue: function(b, g) {
                var v = [],
                    o = [],
                    l = 0,
                    k, q;
                null !== b && b !== e && (v = (b + "").split(" "));
                a.each(g.settings.wheels, function(b, e) {
                    a.each(e, function(b, e) {
                        q = e.keys || e.values;
                        k = q[0];
                        a.each(q,
                            function(a, b) {
                                if (v[l] == b) return k = b, !1
                            });
                        o.push(k);
                        l++
                    })
                });
                return o
            }
        })
    };
    g.themes.scroller = g.themes.frame
})(jQuery, window, document);
(function(a) {
    var g = a.mobiscroll;
    g.datetime = {
        defaults: {
            shortYearCutoff: "+10",
            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            dayNamesMin: "S,M,T,W,T,F,S".split(","),
            amText: "am",
            pmText: "pm",
            getYear: function(a) {
                return a.getFullYear()
            },
            getMonth: function(a) {
                return a.getMonth()
            },
            getDay: function(a) {
                return a.getDate()
            },
            getDate: function(a, e, b, g, k, o, Z) {
                return new Date(a, e, b, g || 0, k || 0, o || 0, Z || 0)
            },
            getMaxDayOfMonth: function(a, e) {
                return 32 - (new Date(a, e, 32)).getDate()
            },
            getWeekNumber: function(a) {
                a = new Date(a);
                a.setHours(0, 0, 0);
                a.setDate(a.getDate() + 4 - (a.getDay() || 7));
                var e = new Date(a.getFullYear(), 0, 1);
                return Math.ceil(((a - e) / 864E5 + 1) / 7)
            }
        },
        formatDate: function(q, e, b) {
            if (!e) return null;
            var b = a.extend({}, g.datetime.defaults, b),
                S = function(a) {
                    for (var b =
                        0; Z + 1 < q.length && q.charAt(Z + 1) == a;) b++, Z++;
                    return b
                },
                k = function(a, b, e) {
                    b = "" + b;
                    if (S(a))
                        for (; b.length < e;) b = "0" + b;
                    return b
                },
                o = function(a, b, e, g) {
                    return S(a) ? g[b] : e[b]
                },
                Z, U, l = "",
                v = !1;
            for (Z = 0; Z < q.length; Z++)
                if (v) "'" == q.charAt(Z) && !S("'") ? v = !1 : l += q.charAt(Z);
                else switch (q.charAt(Z)) {
                    case "d":
                        l += k("d", b.getDay(e), 2);
                        break;
                    case "D":
                        l += o("D", e.getDay(), b.dayNamesShort, b.dayNames);
                        break;
                    case "o":
                        l += k("o", (e.getTime() - (new Date(e.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
                        break;
                    case "m":
                        l += k("m", b.getMonth(e) + 1,
                            2);
                        break;
                    case "M":
                        l += o("M", b.getMonth(e), b.monthNamesShort, b.monthNames);
                        break;
                    case "y":
                        U = b.getYear(e);
                        l += S("y") ? U : (10 > U % 100 ? "0" : "") + U % 100;
                        break;
                    case "h":
                        U = e.getHours();
                        l += k("h", 12 < U ? U - 12 : 0 === U ? 12 : U, 2);
                        break;
                    case "H":
                        l += k("H", e.getHours(), 2);
                        break;
                    case "i":
                        l += k("i", e.getMinutes(), 2);
                        break;
                    case "s":
                        l += k("s", e.getSeconds(), 2);
                        break;
                    case "a":
                        l += 11 < e.getHours() ? b.pmText : b.amText;
                        break;
                    case "A":
                        l += 11 < e.getHours() ? b.pmText.toUpperCase() : b.amText.toUpperCase();
                        break;
                    case "'":
                        S("'") ? l += "'" : v = !0;
                        break;
                    default:
                        l +=
                            q.charAt(Z)
                }
            return l
        },
        parseDate: function(q, e, b) {
            var b = a.extend({}, g.datetime.defaults, b),
                S = b.defaultValue || new Date;
            if (!q || !e) return S;
            if (e.getTime) return e;
            var e = "object" == typeof e ? e.toString() : e + "",
                k = b.shortYearCutoff,
                o = b.getYear(S),
                Z = b.getMonth(S) + 1,
                U = b.getDay(S),
                l = -1,
                v = S.getHours(),
                X = S.getMinutes(),
                T = 0,
                ha = -1,
                fa = !1,
                ia = function(a) {
                    (a = x + 1 < q.length && q.charAt(x + 1) == a) && x++;
                    return a
                },
                R = function(a) {
                    ia(a);
                    a = e.substr(ga).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));
                    if (!a) return 0;
                    ga += a[0].length;
                    return parseInt(a[0], 10)
                },
                da = function(a, b, g) {
                    a = ia(a) ? g : b;
                    for (b = 0; b < a.length; b++)
                        if (e.substr(ga, a[b].length).toLowerCase() == a[b].toLowerCase()) return ga += a[b].length, b + 1;
                    return 0
                },
                ga = 0,
                x;
            for (x = 0; x < q.length; x++)
                if (fa) "'" == q.charAt(x) && !ia("'") ? fa = !1 : ga++;
                else switch (q.charAt(x)) {
                    case "d":
                        U = R("d");
                        break;
                    case "D":
                        da("D", b.dayNamesShort, b.dayNames);
                        break;
                    case "o":
                        l = R("o");
                        break;
                    case "m":
                        Z = R("m");
                        break;
                    case "M":
                        Z = da("M", b.monthNamesShort, b.monthNames);
                        break;
                    case "y":
                        o = R("y");
                        break;
                    case "H":
                        v =
                            R("H");
                        break;
                    case "h":
                        v = R("h");
                        break;
                    case "i":
                        X = R("i");
                        break;
                    case "s":
                        T = R("s");
                        break;
                    case "a":
                        ha = da("a", [b.amText, b.pmText], [b.amText, b.pmText]) - 1;
                        break;
                    case "A":
                        ha = da("A", [b.amText, b.pmText], [b.amText, b.pmText]) - 1;
                        break;
                    case "'":
                        ia("'") ? ga++ : fa = !0;
                        break;
                    default:
                        ga++
                }
            100 > o && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (o <= ("string" != typeof k ? k : (new Date).getFullYear() % 100 + parseInt(k, 10)) ? 0 : -100));
            if (-1 < l) {
                Z = 1;
                U = l;
                do {
                    k = 32 - (new Date(o, Z - 1, 32)).getDate();
                    if (U <= k) break;
                    Z++;
                    U -= k
                } while (1)
            }
            v =
                b.getDate(o, Z - 1, U, -1 == ha ? v : ha && 12 > v ? v + 12 : !ha && 12 == v ? 0 : v, X, T);
            return b.getYear(v) != o || b.getMonth(v) + 1 != Z || b.getDay(v) != U ? S : v
        }
    };
    g.formatDate = g.datetime.formatDate;
    g.parseDate = g.datetime.parseDate
})(jQuery);
(function(a, g, q, e) {
    var b = a.mobiscroll,
        S = b.presets.scroller,
        k = b.util,
        o = k.has3d,
        Z = k.jsPrefix,
        U = k.testTouch,
        l = {
            controls: ["calendar"],
            firstDay: 0,
            weekDays: "short",
            maxMonthWidth: 170,
            months: 1,
            preMonths: 1,
            highlight: !0,
            swipe: !0,
            liveSwipe: !0,
            divergentDayChange: !0,
            quickNav: !0,
            navigation: "yearMonth",
            dateText: "Date",
            timeText: "Time",
            calendarText: "Calendar",
            todayText: "Today",
            prevMonthText: "Previous Month",
            nextMonthText: "Next Month",
            prevYearText: "Previous Year",
            nextYearText: "Next Year",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6"
        };
    S.calbase = function(g) {
        function X(d, f, c) {
            var b, h, g, e, i = {},
                j = ra + Ja;
            d && a.each(d, function(a, d) {
                b = d.d || d.start || d;
                h = b + "";
                if (d.start && d.end)
                    for (e = new Date(d.start); e <= d.end;) g = new Date(e.getFullYear(), e.getMonth(), e.getDate()), i[g] = i[g] || [], i[g].push(d), e.setDate(e.getDate() + 1);
                else if (b.getTime) g = new Date(b.getFullYear(), b.getMonth(), b.getDate()), i[g] = i[g] || [], i[g].push(d);
                else if (h.match(/w/i)) {
                    var D = +h.replace("w", ""),
                        n = 0,
                        Q = p.getDate(f, c - ra - qa, 1).getDay();
                    1 < p.firstDay - Q + 1 && (n = 7);
                    for (m = 0; m < 5 * Ga; m++) g = p.getDate(f, c - ra - qa, 7 * m - n - Q + 1 + D), i[g] = i[g] || [], i[g].push(d)
                } else if (h = h.split("/"), h[1]) 11 <= c + j && (g = p.getDate(f + 1, h[0] - 1, h[1]), i[g] = i[g] || [], i[g].push(d)), 1 >= c - j && (g = p.getDate(f - 1, h[0] - 1, h[1]), i[g] = i[g] || [], i[g].push(d)), g = p.getDate(f, h[0] - 1, h[1]), i[g] = i[g] || [], i[g].push(d);
                else
                    for (m = 0; m < Ga; m++) g = p.getDate(f, c - ra - qa + m, h[0]), i[g] = i[g] || [], i[g].push(d)
            });
            return i
        }

        function T(a, d) {
            Ka = X(p.invalid, a, d);
            Eb = X(p.valid, a, d);
            g.onGenMonth(a, d)
        }

        function ha(a, d, f, b,
                    g, h, i) {
            var e = '<div class="dw-cal-h dw-cal-sc-c dw-cal-' + a + "-c " + (p.calendarClass || "") + '"><div class="dw-cal-sc"><div class="dw-cal-sc-p"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">';
            for (c = 1; c <= d; c++) e = 12 >= c || c > f ? e + '<div class="dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-sc-empty"><div class="dw-i">&nbsp;</div></div>' : e + ('<div tabindex="0" role="button"' + (h ? ' aria-label="' + h[c - 13] + '"' : "") + ' class="dwb-e dwb-nhl dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-' + a + '-s" data-val=' + (b + c - 13) + '><div class="dw-i dw-cal-sc-tbl"><div class="dw-cal-sc-cell">' +
                (i ? i[c - 13] : b + c - 13 + g) + "</div></div></div>"), c < d && (0 === c % 12 ? e += '</div></div></div><div class="dw-cal-sc-p" style="' + (Sa ? "top" : Xa ? "right" : "left") + ":" + 100 * Math.round(c / 12) + '%"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">' : 0 === c % 3 && (e += '</div><div class="dw-cal-sc-row">'));
            return e + "</div></div></div></div></div>"
        }

        function fa(d, f) {
            var c, b, h, i, j, D, n, Q, t, m, o, l, B, s, k = 1,
                G = 0;
            c = p.getDate(d, f, 1);
            var H = p.getYear(c),
                V = p.getMonth(c),
                $ = null === p.defaultValue && !g._hasValue ? null : g.getDate(!0),
                w = p.getDate(H,
                    V, 1).getDay(),
                r = '<div class="dw-cal-table">',
                q = '<div class="dw-week-nr-c">';
            1 < p.firstDay - w + 1 && (G = 7);
            for (s = 0; 42 > s; s++) B = s + p.firstDay - G, c = p.getDate(H, V, B - w + 1), b = c.getFullYear(), h = c.getMonth(), i = c.getDate(), j = p.getMonth(c), D = p.getDay(c), l = p.getMaxDayOfMonth(b, h), n = b + "-" + h + "-" + i, h = a.extend({
                valid: c < new Date(mb.getFullYear(), mb.getMonth(), mb.getDate()) || c > za ? !1 : Ka[c] === e || Eb[c] !== e,
                selected: $ && $.getFullYear() === b && $.getMonth() === h && $.getDate() === i
            }, g.getDayProps(c, $)), Q = h.valid, t = h.selected, b = h.cssClass,
                m = c.getTime() === (new Date).setHours(0, 0, 0, 0), o = j !== V, Bb[n] = h, 0 === s % 7 && (r += (s ? "</div>" : "") + '<div class="dw-cal-row' + (p.highlight && $ && 0 <= $ - c && 6048E5 > $ - c ? " dw-cal-week-hl" : "") + '">'), nb && 1 == c.getDay() && ("month" == nb && o && 1 < k ? k = 1 == i ? 1 : 2 : "year" == nb && (k = p.getWeekNumber(c)), q += '<div class="dw-week-nr"><div class="dw-week-nr-i">' + k + "</div></div>", k++), r += '<div role="button" tabindex="-1" aria-label="' + (m ? p.todayText + ", " : "") + p.dayNames[c.getDay()] + ", " + p.monthNames[j] + " " + D + " " + (h.ariaLabel ? ", " + h.ariaLabel :
                "") + '"' + (o && !Wa ? ' aria-hidden="true"' : "") + (t ? ' aria-selected="true"' : "") + (Q ? "" : ' aria-disabled="true"') + ' data-day="' + B % 7 + '" data-full="' + n + '"class="dw-cal-day ' + (m ? " dw-cal-today" : "") + (p.dayClass || "") + (t ? " dw-sel" : "") + (b ? " " + b : "") + (1 == D ? " dw-cal-day-first" : "") + (D == l ? " dw-cal-day-last" : "") + (o ? " dw-cal-day-diff" : "") + (Q ? " dw-cal-day-v dwb-e dwb-nhl" : " dw-cal-day-inv") + '"><div class="dw-i ' + (t ? ua : "") + " " + (p.innerDayClass || "") + '"><div class="dw-cal-day-fg">' + D + "</div>" + (h.markup || "") + '<div class="dw-cal-day-frame"></div></div></div>';
            return r + ("</div></div>" + q + "</div>")
        }

        function ia(b, g, i) {
            var e = p.getDate(b, g, 1),
                j = p.getYear(e),
                e = p.getMonth(e),
                n = j + Ea;
            if ($a) {
                bb && bb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ua);
                sb && sb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ua);
                bb = a('.dw-cal-year-s[data-val="' + j + '"]', s).addClass("dw-sel").attr("aria-selected", "true");
                sb = a('.dw-cal-month-s[data-val="' + e + '"]', s).addClass("dw-sel").attr("aria-selected", "true");
                bb.find(".dw-i").addClass(ua);
                sb.find(".dw-i").addClass(ua);
                Ua && Ua.scroll(bb, i);
                a(".dw-cal-month-s", s).removeClass("dwb-d");
                if (j === pa)
                    for (c = 0; c < $; c++) a('.dw-cal-month-s[data-val="' + c + '"]', s).addClass("dwb-d");
                if (j === D)
                    for (c = sa + 1; 12 >= c; c++) a('.dw-cal-month-s[data-val="' + c + '"]', s).addClass("dwb-d")
            }
            1 == h.length && h.attr("aria-label", j).html(n);
            for (c = 0; c < ka; ++c) e = p.getDate(b, g - qa + c, 1), j = p.getYear(e), e = p.getMonth(e), n = j + Ea, a(V[c]).attr("aria-label", p.monthNames[e] + (Fa ? "" : " " + j)).html((!Fa && ya < O ? n + " " : "") + ea[e] + (!Fa && ya > O ? " " + n : "")),
            1 < h.length && a(h[c]).html(n);
            p.getDate(b, g - qa - 1, 1) < d ? da(a(".dw-cal-prev-m", s)) : R(a(".dw-cal-prev-m", s));
            p.getDate(b, g + ka - qa, 1) > f ? da(a(".dw-cal-next-m", s)) : R(a(".dw-cal-next-m", s));
            p.getDate(b, g, 1).getFullYear() <= d.getFullYear() ? da(a(".dw-cal-prev-y", s)) : R(a(".dw-cal-prev-y", s));
            p.getDate(b, g, 1).getFullYear() >= f.getFullYear() ? da(a(".dw-cal-next-y", s)) : R(a(".dw-cal-next-y", s))
        }

        function R(a) {
            a.removeClass(rb).find(".dw-cal-btn-txt").removeAttr("aria-disabled")
        }

        function da(a) {
            a.addClass(rb).find(".dw-cal-btn-txt").attr("aria-disabled",
                "true")
        }

        function ga(d, f) {
            if (Q && ("calendar" === Va || f)) {
                var c, b, h = p.getDate(ta, ja, 1),
                    e = Math.abs(12 * (p.getYear(d) - p.getYear(h)) + p.getMonth(d) - p.getMonth(h));
                g.needsSlide && e && (ta = p.getYear(d), ja = p.getMonth(d), d > h ? (b = e > ra - qa + ka - 1, ja -= b ? 0 : e - ra, c = "next") : d < h && (b = e > ra + qa, ja += b ? 0 : e - ra, c = "prev"), A(ta, ja, c, Math.min(e, ra), b, !0));
                f || (g.trigger("onDayHighlight", [d]), p.highlight && (a(".dw-sel .dw-i", ba).removeClass(ua), a(".dw-sel", ba).removeClass("dw-sel").removeAttr("aria-selected"), a(".dw-cal-week-hl", ba).removeClass("dw-cal-week-hl"),
                (null !== p.defaultValue || g._hasValue) && a('.dw-cal-day[data-full="' + d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + '"]', ba).addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(ua).closest(".dw-cal-row").addClass("dw-cal-week-hl")));
                g.needsSlide = !0
            }
        }

        function x(a, d) {
            T(a, d);
            for (c = 0; c < Ga; c++) xa[c].html(fa(a, d - qa - ra + c));
            y();
            g.needsRefresh = !1
        }

        function r(c, b, h) {
            var g = ra,
                e = ra;
            if (h) {
                for (; e && p.getDate(c, b + g + ka - qa - 1, 1) > f;) e--;
                for (; g && p.getDate(c, b - e - qa, 1) < d;) g--
            }
            a.extend(K.settings, {
                contSize: ka *
                    M,
                snap: M,
                minScroll: W - (Xa ? g : e) * M,
                maxScroll: W + (Xa ? e : g) * M
            });
            K.refresh()
        }

        function y() {
            nb && oa.html(a(".dw-week-nr-c", xa[ra]).html());
            a(".dw-cal-slide-a .dw-cal-day", w).attr("tabindex", 0)
        }

        function A(d, f, b, h, e, i, j) {
            d && eb.push({
                y: d,
                m: f,
                dir: b,
                slideNr: h,
                load: e,
                active: i,
                callback: j
            });
            if (!Ya) {
                var D = eb.shift(),
                    d = D.y,
                    f = D.m,
                    b = "next" === D.dir,
                    h = D.slideNr,
                    e = D.load,
                    i = D.active,
                    j = D.callback || Cb,
                    D = p.getDate(d, f, 1),
                    d = p.getYear(D),
                    f = p.getMonth(D);
                Ya = !0;
                g.changing = !0;
                g.trigger("onMonthChange", [d, f]);
                T(d, f);
                if (e)
                    for (c = 0; c <
                    ka; c++) xa[b ? Ga - ka + c : c].html(fa(d, f - qa + c));
                i && Aa.addClass("dw-cal-slide-a");
                setTimeout(function() {
                    g.ariaMessage(p.monthNames[f] + " " + d);
                    ia(d, f, 200);
                    W = b ? W - M * h * fb : W + M * h * fb;
                    K.scroll(W, aa ? 200 : 0, function() {
                        setTimeout(function() {
                            var i;
                            if (xa.length) {
                                Aa.removeClass("dw-cal-slide-a").attr("aria-hidden", "true");
                                if (b) {
                                    i = xa.splice(0, h);
                                    for (c = 0; c < h; c++) xa.push(i[c]), C(xa[xa.length - 1], +xa[xa.length - 2].data("curr") + 100 * fb)
                                } else {
                                    i = xa.splice(Ga - h, h);
                                    for (c = h - 1; 0 <= c; c--) xa.unshift(i[c]), C(xa[0], +xa[1].data("curr") - 100 *
                                        fb)
                                }
                                for (c = 0; c < h; c++) xa[b ? Ga - h + c : c].html(fa(d, f - qa - ra + c + (b ? Ga - h : 0))), e && xa[b ? c : Ga - h + c].html(fa(d, f - qa - ra + c + (b ? 0 : Ga - h)));
                                for (c = 0; c < ka; c++) xa[ra + c].addClass("dw-cal-slide-a").removeAttr("aria-hidden");
                                r(d, f, !0);
                                Ya = !1
                            }
                            eb.length ? setTimeout(function() {
                                A()
                            }, 10) : (ta = d, ja = f, g.changing = !1, a(".dw-cal-day", w).attr("tabindex", -1), y(), g.needsRefresh && g.isVisible() && Q && x(ta, ja), g.trigger("onMonthLoaded", [d, f]), j())
                        }, aa ? 0 : 200)
                    })
                }, 10)
            }
        }

        function z() {
            var d = a(this),
                f = g.live,
                c = g.getDate(!0),
                b = d.attr("data-full"),
                h = b.split("-"),
                h = new Date(h[0], h[1], h[2]),
                c = new Date(h.getFullYear(), h.getMonth(), h.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()),
                e = d.hasClass("dw-sel");
            if ((Wa || !d.hasClass("dw-cal-day-diff")) && !1 !== g.trigger("onDayChange", [a.extend(Bb[b], {
                date: c,
                cell: this,
                selected: e
            })])) g.needsSlide = !1, u = !0, g.setDate(c, f, 0.2, !f, !0), p.divergentDayChange && (Ra = !0, h < p.getDate(ta, ja - qa, 1) ? N() : h > p.getDate(ta, ja - qa + ka, 0) && L(), Ra = !1)
        }

        function C(a, d) {
            a.data("curr", d);
            o ? a[0].style[Z + "Transform"] = "translate3d(" + (Sa ? "0," + d + "%," : d +
                "%,0,") + "0)" : a[0].style[Sa ? "top" : "left"] = d + "%"
        }

        function L() {
            Ra && p.getDate(ta, ja + ka - qa, 1) <= f && A(ta, ++ja, "next", 1, !1, !0, L)
        }

        function N() {
            Ra && p.getDate(ta, ja - qa - 1, 1) >= d && A(ta, --ja, "prev", 1, !1, !0, N)
        }

        function na(a) {
            Ra && p.getDate(ta, ja, 1) <= p.getDate(p.getYear(f) - 1, p.getMonth(f) - Ja, 1) ? A(++ta, ja, "next", ra, !0, !0, function() {
                na(a)
            }) : Ra && !a.hasClass("dwb-d") && A(p.getYear(f), p.getMonth(f) - Ja, "next", ra, !0, !0)
        }

        function t(a) {
            Ra && p.getDate(ta, ja, 1) >= p.getDate(p.getYear(d) + 1, p.getMonth(d) + qa, 1) ? A(--ta, ja, "prev", ra,
                !0, !0,
                function() {
                    t(a)
                }) : Ra && !a.hasClass("dwb-d") && A(p.getYear(d), p.getMonth(d) + qa, "prev", ra, !0, !0)
        }

        function ma(a, d) {
            a.hasClass("dw-cal-v") || (a.addClass("dw-cal-v" + (d ? "" : " dw-cal-p-in")).removeClass("dw-cal-p-out dw-cal-h"), g.trigger("onSelectShow", []))
        }

        function n(a, d) {
            a.hasClass("dw-cal-v") && a.removeClass("dw-cal-v dw-cal-p-in").addClass("dw-cal-h" + (d ? "" : " dw-cal-p-out"))
        }

        function H(a, d) {
            (d || a).hasClass("dw-cal-v") ? n(a) : ma(a)
        }

        function j() {
            a(this).removeClass("dw-cal-p-out dw-cal-p-in")
        }
        var ca, c, m,
            B, Y, s, E, ba, w, M, W, u, Q, G, la, oa, i, aa, ea, K, F, V, O, h, ya, pa, D, $, sa, d, f, mb, za, Ca, ta, ja, ob, pb, Eb, Ka, Qa, Va, Ya, Ra, ka, Ga, Ja, qa, Wa, Ua, bb, sb, Gb = this,
            Aa = [],
            xa = [],
            eb = [],
            wa = {},
            Bb = {},
            Cb = function() {},
            Xb = a.extend({}, g.settings),
            p = a.extend(g.settings, l, Xb),
            Ta = "full" == p.weekDays ? "" : "min" == p.weekDays ? "Min" : "Short",
            nb = p.weekCounter,
            Jb = p.layout || (/top|bottom/.test(p.display) ? "liquid" : ""),
            Ha = "liquid" == Jb && "bubble" !== p.display,
            zb = "modal" == p.display,
            Xa = p.rtl,
            fb = Xa ? -1 : 1,
            Ib = Ha ? null : p.calendarWidth,
            Sa = "vertical" == p.swipeDirection,
            $a = p.quickNav,
            ra = p.preMonths,
            Fa = "yearMonth" == p.navigation,
            Da = p.controls.join(","),
            ab = (!0 === p.tabs || !1 !== p.tabs && Ha) && 1 < p.controls.length,
            I = !ab && p.tabs === e && !Ha && 1 < p.controls.length,
            Ea = p.yearSuffix || "",
            ua = p.activeClass || "",
            qb = "dw-sel " + (p.activeTabClass || ""),
            ib = p.activeTabInnerClass || "",
            rb = "dwb-d " + (p.disabledClass || ""),
            Oa = "",
            va = "";
        Da.match(/calendar/) ? Q = !0 : $a = !1;
        Da.match(/date/) && (wa.date = 1);
        Da.match(/time/) && (wa.time = 1);
        Q && wa.date && (ab = !0, I = !1);
        p.layout = Jb;
        p.preset = (wa.date || Q ? "date" : "") + (wa.time ?
            "time" : "");
        if ("inline" == p.display) a(this).closest('[data-role="page"]').on("pageshow", function() {
            g.position()
        });
        g.changing = !1;
        g.needsRefresh = !1;
        g.needsSlide = !0;
        g.getDayProps = Cb;
        g.onGenMonth = Cb;
        g.prepareObj = X;
        g.refresh = function() {
            g.changing ? g.needsRefresh = true : g.isVisible() && Q && x(ta, ja)
        };
        g.navigate = function(a, d) {
            var f, c, b = g.isVisible();
            if (d && b) ga(a, true);
            else {
                f = p.getYear(a);
                c = p.getMonth(a);
                if (b && (f != ta || c != ja)) {
                    g.trigger("onMonthChange", [f, c]);
                    ia(f, c);
                    x(f, c)
                }
                ta = f;
                ja = c
            }
        };
        B = S.datetime.call(this, g);
        O =
            p.dateOrder.search(/m/i);
        ya = p.dateOrder.search(/y/i);
        a.extend(B, {
            ariaMessage: p.calendarText,
            onMarkupReady: function(l) {
                var B, r, u = "";
                s = l;
                E = p.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : g.context;
                Ca = g.getDate(true);
                if (!ta) {
                    ta = p.getYear(Ca);
                    ja = p.getMonth(Ca)
                }
                W = 0;
                la = true;
                Ya = false;
                ea = p.monthNames;
                Va = "calendar";
                if (p.minDate) {
                    d = new Date(p.minDate.getFullYear(), p.minDate.getMonth(), 1);
                    mb = p.minDate
                } else mb = d = new Date(p.startYear, 0, 1);
                if (p.maxDate) {
                    f = new Date(p.maxDate.getFullYear(), p.maxDate.getMonth(),
                        1);
                    za = p.maxDate
                } else za = f = new Date(p.endYear, 11, 31, 23, 59, 59);
                l.addClass("dw-calendar" + (o ? "" : " dw-cal-no3d"));
                Y = a(".dw", l);
                Qa = a(".dwcc", l);
                wa.date ? wa.date = a(".dwc", s).eq(0) : Q && a(".dwc", s).eq(0).addClass("dwc-hh");
                if (wa.time) wa.time = a(".dwc", s).eq(1);
                if (Q) {
                    ka = p.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Ib || E[0].innerWidth || E.innerWidth()) / 280))) : p.months;
                    Ga = ka + 2 * ra;
                    Ja = Math.floor(ka / 2);
                    qa = Math.round(ka / 2) - 1;
                    Wa = p.showDivergentDays === e ? ka < 2 : p.showDivergentDays;
                    Sa = Sa && ka < 2;
                    r = '<div class="dw-cal-btnw"><div class="' +
                        (Xa ? "dw-cal-next-m" : "dw-cal-prev-m") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (p.btnCalPrevClass || "") + '" aria-label="' + p.prevMonthText + '"></div></div>';
                    for (c = 0; c < ka; ++c) r = r + ('<div class="dw-cal-btnw-m" style="width: ' + 100 / ka + '%"><span role="button" class="dw-cal-month"></span></div>');
                    r = r + ('<div class="' + (Xa ? "dw-cal-prev-m" : "dw-cal-next-m") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (p.btnCalNextClass ||
                        "") + '" aria-label="' + p.nextMonthText + '"></div></div></div>');
                    Fa && (u = '<div class="dw-cal-btnw"><div class="' + (Xa ? "dw-cal-next-y" : "dw-cal-prev-y") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (p.btnCalPrevClass || "") + '" aria-label="' + p.prevYearText + '"></div></div><span role="button" class="dw-cal-year"></span><div class="' + (Xa ? "dw-cal-prev-y" : "dw-cal-next-y") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (p.btnCalNextClass ||
                        "") + '" aria-label="' + p.nextYearText + '"></div></div></div>');
                    if ($a) {
                        pa = p.getYear(d);
                        D = p.getYear(f);
                        $ = p.getMonth(d);
                        sa = p.getMonth(f);
                        pb = Math.ceil((D - pa + 1) / 12) + 2;
                        Oa = ha("month", 36, 24, 0, "", p.monthNames, p.monthNamesShort);
                        va = ha("year", pb * 12, D - pa + 13, pa, Ea)
                    }
                    G = '<div class="mbsc-w-p dw-cal-c"><div class="dw-cal ' + (ka > 1 ? " dw-cal-multi " : "") + (nb ? " dw-weeks " : "") + (Wa ? "" : " dw-hide-diff ") + (p.calendarClass || "") + '"><div class="dw-cal-header"><div class="dw-cal-btnc ' + (Fa ? "dw-cal-btnc-ym" : "dw-cal-btnc-m") + '">' + (ya <
                    O || ka > 1 ? u + r : r + u) + '</div></div><div class="dw-cal-body"><div class="dw-cal-m-c dw-cal-v"><div class="dw-cal-days-c">';
                    for (m = 0; m < ka; ++m) {
                        G = G + ('<div aria-hidden="true" class="dw-cal-days" style="width: ' + 100 / ka + '%"><table cellpadding="0" cellspacing="0"><tr>');
                        for (c = 0; c < 7; c++) G = G + ("<th>" + p["dayNames" + Ta][(c + p.firstDay) % 7] + "</th>");
                        G = G + "</tr></table></div>"
                    }
                    G = G + ('</div><div class="dw-cal-anim-c ' + (p.calendarClass || "") + '"><div class="dw-week-nrs-c ' + (p.weekNrClass || "") + '"><div class="dw-week-nrs"></div></div><div class="dw-cal-anim">');
                    for (c = 0; c < ka + 2 * ra; c++) G = G + '<div class="dw-cal-slide" aria-hidden="true"></div>';
                    G = G + ("</div></div></div>" + Oa + va + "</div></div></div>");
                    wa.calendar = a(G)
                }
                a.each(p.controls, function(d, f) {
                    wa[f] = a('<div class="dw-cal-pnl" id="' + (Gb.id + "_dw_pnl_" + d) + '"></div>').append(a('<div class="dw-cal-pnl-i"></div>').append(wa[f])).appendTo(Qa)
                });
                B = '<div class="dw-cal-tabs"><ul role="tablist">';
                a.each(p.controls, function(a, d) {
                    wa[d] && (B = B + ('<li role="tab" aria-controls="' + (Gb.id + "_dw_pnl_" + a) + '" class="dw-cal-tab ' +
                        (a ? "" : qb) + '" data-control="' + d + '"><a href="#" class="dwb-e dwb-nhl dw-i ' + (!a ? ib : "") + '">' + p[d + "Text"] + "</a></li>"))
                });
                B = B + "</ul></div>";
                Qa.before(B);
                ba = a(".dw-cal-anim-c", s);
                w = a(".dw-cal-anim", ba);
                oa = a(".dw-week-nrs", ba);
                if (Q) {
                    aa = true;
                    Aa = a(".dw-cal-slide", w).each(function(d, f) {
                        xa.push(a(f))
                    });
                    Aa.slice(ra, ra + ka).addClass("dw-cal-slide-a").removeAttr("aria-hidden");
                    for (c = 0; c < Ga; c++) C(xa[c], 100 * (c - ra) * fb);
                    x(ta, ja);
                    K = new b.classes.ScrollView(ba[0], {
                        axis: Sa ? "Y" : "X",
                        easing: "",
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: ra,
                        moveElement: w,
                        mousewheel: p.mousewheel,
                        swipe: p.swipe,
                        liveSwipe: p.liveSwipe,
                        time: 200,
                        lock: true,
                        onScrollStart: function(a, d) {
                            d.settings.scrollLock = g.scrollLock
                        },
                        onScrollEnd: function(a) {
                            (a = Math.round((a - W) / M) * fb) && A(ta, ja - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
                        }
                    })
                }
                V = a(".dw-cal-month", s);
                h = a(".dw-cal-year", s);
                i = a(".dw-cal-m-c", s);
                if ($a) {
                    i.on("webkitAnimationEnd animationend", j);
                    Oa = a(".dw-cal-month-c", s).on("webkitAnimationEnd animationend", j);
                    va = a(".dw-cal-year-c", s).on("webkitAnimationEnd animationend", j);
                    a(".dw-cal-sc-p",
                        s);
                    ob = {
                        axis: Sa ? "Y" : "X",
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: 1,
                        rtl: p.rtl,
                        mousewheel: p.mousewheel,
                        swipe: p.swipe,
                        liveSwipe: p.liveSwipe,
                        time: 200
                    };
                    Ua = new b.classes.ScrollView(va[0], ob);
                    F = new b.classes.ScrollView(Oa[0], ob)
                }
                setTimeout(function() {
                    g.tap(ba, function(d) {
                        d = a(d.target);
                        if (!Ya && !K.scrolled) {
                            d = d.closest(".dw-cal-day", this);
                            d.hasClass("dw-cal-day-v") && z.call(d[0])
                        }
                    });
                    a(".dw-cal-btn", s).on("touchstart mousedown keydown", function(d) {
                        var f = a(this);
                        if (d.type !== "keydown") {
                            d.preventDefault();
                            d = U(d, this)
                        } else d =
                            d.keyCode === 32;
                        if (!Ra && d && !f.hasClass("dwb-d")) {
                            Ra = true;
                            f.hasClass("dw-cal-prev-m") ? N() : f.hasClass("dw-cal-next-m") ? L() : f.hasClass("dw-cal-prev-y") ? t(f) : f.hasClass("dw-cal-next-y") && na(f);
                            a(q).on("mouseup.dwbtn", function() {
                                a(q).off(".dwbtn");
                                Ra = false
                            })
                        }
                    }).on("touchend touchcancel keyup", function() {
                        Ra = false
                    });
                    a(".dw-cal-tab", s).on("touchstart click", function(d) {
                        var f = a(this);
                        if (U(d, this) && !f.hasClass("dw-sel")) {
                            Va = f.attr("data-control");
                            a(".dw-cal-pnl", s).removeClass("dw-cal-p-in").addClass("dw-cal-pnl-h");
                            a(".dw-cal-tab", s).removeClass(qb).removeAttr("aria-selected").find(".dw-i").removeClass(ib);
                            f.addClass(qb).attr("aria-selected", "true").find(".dw-i").addClass(ib);
                            wa[Va].removeClass("dw-cal-pnl-h").addClass("dw-cal-p-in");
                            if (Va === "calendar") {
                                ca = g.getDate(true);
                                (ca.getFullYear() !== Ca.getFullYear() || ca.getMonth() !== Ca.getMonth() || ca.getDate() !== Ca.getDate()) && ga(ca)
                            } else {
                                Ca = g.getDate(true);
                                g.setDate(Ca, false, 0, true)
                            }
                            if ($a) {
                                n(va, true);
                                n(Oa, true);
                                ma(i, true)
                            }
                            g.trigger("onTabChange", [Va])
                        }
                    });
                    if ($a) {
                        g.tap(a(".dw-cal-month",
                            s), function() {
                            if (!va.hasClass("dw-cal-v")) {
                                H(i);
                                aa = i.hasClass("dw-cal-v")
                            }
                            H(Oa);
                            n(va)
                        });
                        g.tap(a(".dw-cal-year", s), function() {
                            va.hasClass("dw-cal-v") || Ua.scroll(bb);
                            if (!Oa.hasClass("dw-cal-v")) {
                                H(i);
                                aa = i.hasClass("dw-cal-v")
                            }
                            H(va);
                            n(Oa)
                        });
                        g.tap(a(".dw-cal-month-s", s), function() {
                            !F.scrolled && !a(this).hasClass("dwb-d") && g.navigate(p.getDate(ta, a(this).attr("data-val"), 1))
                        });
                        g.tap(a(".dw-cal-year-s", s), function() {
                            if (!Ua.scrolled) {
                                ca = p.getDate(a(this).attr("data-val"), ja, 1);
                                g.navigate(new Date(k.constrain(ca,
                                    d, f)))
                            }
                        });
                        g.tap(va, function() {
                            if (!Ua.scrolled) {
                                n(va);
                                ma(i);
                                aa = true
                            }
                        });
                        g.tap(Oa, function() {
                            if (!F.scrolled) {
                                n(Oa);
                                ma(i);
                                aa = true
                            }
                        })
                    }
                }, 300);
                Ha ? l.addClass("dw-cal-liq") : a(".dw-cal", s).width(Ib || 280 * ka);
                p.calendarHeight && a(".dw-cal-anim-c", s).height(p.calendarHeight)
            },
            onShow: function() {
                if (Q) {
                    ia(ta, ja);
                    g.trigger("onMonthLoaded", [ta, ja])
                }
            },
            onPosition: function(d, f, b) {
                var h, e, i, j = 0,
                    D = 0,
                    n = 0;
                if (Ha) {
                    zb && ba.height("");
                    Qa.height("");
                    w.width("")
                }
                M && (i = M);
                if (M = Math.round(Math.round(parseInt(ba.css(Sa ? "height" : "width"))) /
                    ka)) {
                    s.removeClass("mbsc-cal-m mbsc-cal-l");
                    M > 1024 ? s.addClass("mbsc-cal-l") : M > 640 && s.addClass("mbsc-cal-m")
                }
                if (ab && (la || Ha) || I) {
                    a(".dw-cal-pnl", s).removeClass("dw-cal-pnl-h");
                    a.each(wa, function(a, d) {
                        h = d.outerWidth();
                        j = Math.max(j, h);
                        D = Math.max(D, d.outerHeight());
                        n = n + h
                    });
                    if (ab || I && n > (E[0].innerWidth || E.innerWidth())) {
                        e = true;
                        Va = a(".dw-cal-tabs .dw-sel", s).attr("data-control");
                        Y.addClass("dw-cal-tabbed")
                    } else {
                        Va = "calendar";
                        D = j = "";
                        Y.removeClass("dw-cal-tabbed");
                        Qa.css({
                            width: "",
                            height: ""
                        })
                    }
                }
                if (Ha && zb) {
                    g._isFullScreen =
                        true;
                    e && Q && Qa.height(wa.calendar.outerHeight());
                    d = Y.outerHeight();
                    b >= d && ba.height(b - d + ba.outerHeight());
                    Q && (D = Math.max(D, wa.calendar.outerHeight()))
                }
                if (e) {
                    Qa.css({
                        width: Ha ? "" : j,
                        height: D
                    });
                    M = Math.round(Math.round(parseInt(ba.css(Sa ? "height" : "width"))) / ka)
                }
                if (M) {
                    w[Sa ? "height" : "width"](M);
                    if (M !== i) {
                        if (Fa) {
                            ea = p.maxMonthWidth > a(".dw-cal-btnw-m", s).width() ? p.monthNamesShort : p.monthNames;
                            for (c = 0; c < ka; ++c) a(V[c]).text(ea[p.getMonth(p.getDate(ta, ja - qa + c, 1))])
                        }
                        if ($a) {
                            b = va[Sa ? "height" : "width"]();
                            a.extend(Ua.settings, {
                                contSize: b,
                                snap: b,
                                minScroll: (2 - pb) * b,
                                maxScroll: -b
                            });
                            a.extend(F.settings, {
                                contSize: b,
                                snap: b,
                                minScroll: -b,
                                maxScroll: -b
                            });
                            Ua.refresh();
                            F.refresh();
                            va.hasClass("dw-cal-v") && Ua.scroll(bb)
                        }
                        if (Ha && !la && i) {
                            b = W / i;
                            W = b * M
                        }
                        r(ta, ja, !i)
                    }
                } else M = i;
                if (e) {
                    a(".dw-cal-pnl", s).addClass("dw-cal-pnl-h");
                    wa[Va].removeClass("dw-cal-pnl-h")
                }
                g.trigger("onCalResize", []);
                la = false
            },
            onHide: function() {
                eb = [];
                xa = [];
                ja = ta = Va = null;
                Ya = true;
                M = 0;
                K && K.destroy();
                if ($a && Ua && F) {
                    Ua.destroy();
                    F.destroy()
                }
            },
            onValidated: function() {
                var a, d, f;
                d = g.getDate(true);
                if (u) a = "calendar";
                else
                    for (f in g.order) f && g.order[f] === c && (a = /mdy/.test(f) ? "date" : "time");
                g.trigger("onSetDate", [{
                    date: d,
                    control: a
                }]);
                ga(d);
                u = false
            }
        });
        return B
    }
})(jQuery, window, document);
(function(a, g) {
    var q = a.mobiscroll,
        e = q.classes,
        b = q.util,
        S = b.constrain,
        k = b.jsPrefix,
        o = b.prefix,
        Z = b.has3d,
        U = b.getCoord,
        l = b.getPosition,
        v = b.testTouch,
        X = b.isNumeric,
        T = b.isString,
        ha = "webkitTransitionEnd transitionend",
        fa = window.requestAnimationFrame || function(a) {
            a()
        },
        ia = window.cancelAnimationFrame || function() {};
    e.ScrollView = function(b, q, ga) {
        function x(d) {
            if ((!$.lock || !M) && v(d, this) && !w) {
                "mousedown" == d.type && d.preventDefault();
                N && N.removeClass("mbsc-btn-a");
                B = !1;
                N = a(d.target).closest(".mbsc-btn-e", this);
                N.length && !N.hasClass("mbsc-btn-d") && (B = !0, na = setTimeout(function() {
                    N.addClass("mbsc-btn-a")
                }, 100));
                w = !0;
                ba = !1;
                h.scrolled = M;
                aa = U(d, "X");
                ea = U(d, "Y");
                c = aa;
                H = n = ma = 0;
                i = new Date;
                oa = +l(F, O) || 0;
                L(oa, 1);
                if ("mousedown" === d.type) a(document).on("mousemove", r).on("mouseup", A);
                V("onScrollStart", [ya])
            }
        }

        function r(a) {
            if (w) {
                c = U(a, "X");
                m = U(a, "Y");
                ma = c - aa;
                n = m - ea;
                H = O ? n : ma;
                if (B && (5 < Math.abs(n) || 5 < Math.abs(ma))) clearTimeout(na), N.removeClass("mbsc-btn-a"), B = !1;
                !ba && 5 < Math.abs(H) && (h.scrolled = !0, $.liveSwipe && !u && (u = !0,
                    W = fa(y)));
                O || $.scrollLock ? a.preventDefault() : h.scrolled ? a.preventDefault() : 7 < Math.abs(n) && (ba = !0, h.scrolled = !0, sa.trigger("touchend"))
            }
        }

        function y() {
            s && (H = S(H, -G * s, G * s));
            L(S(oa + H, E - ca, Y + ca));
            u = !1
        }

        function A(d) {
            if (w) {
                var f;
                f = new Date - i;
                ia(W);
                u = !1;
                !ba && h.scrolled && ($.momentum && Z && 300 > f && (f = H / f, H = Math.max(Math.abs(H), f * f / $.speedUnit) * (0 > H ? -1 : 1)), C(H));
                B && (clearTimeout(na), N.addClass("mbsc-btn-a"), setTimeout(function() {
                    N.removeClass("mbsc-btn-a")
                }, 100), !ba && !h.scrolled && V("onBtnTap", [N]));
                "mouseup" ==
                d.type && a(document).off("mousemove", r).off("mouseup", A);
                w = !1
            }
        }

        function z(a) {
            a = a.originalEvent || a;
            if (H = O ? a.deltaY || a.wheelDelta || a.detail : a.deltaX) a.preventDefault(), H = 0 > H ? 20 : -20, oa = ya, u || (u = !0, W = fa(y)), clearTimeout(Q), Q = setTimeout(function() {
                ia(W);
                u = false;
                C(H)
            }, 200)
        }

        function C(a) {
            var f;
            s && (a = S(a, -G * s, G * s));
            pa = Math.round((oa + a) / G);
            f = S(pa * G, E, Y);
            if (la) {
                if (0 > a)
                    for (a = la.length - 1; 0 <= a; a--) {
                        if (Math.abs(f) + t >= la[a].breakpoint) {
                            pa = a;
                            D = 2;
                            f = la[a].snap2;
                            break
                        }
                    } else if (0 <= a)
                    for (a = 0; a < la.length; a++)
                        if (Math.abs(f) <=
                            la[a].breakpoint) {
                            pa = a;
                            D = 1;
                            f = la[a].snap1;
                            break
                        } f = S(f, E, Y)
            }
            L(f, $.time || (ya < E || ya > Y ? 200 : Math.max(200, Math.abs(f - ya) * $.timeUnit)), function() {
                V("onScrollEnd", [ya])
            })
        }

        function L(a, f, c) {
            var b = function() {
                M = !1;
                c && c()
            };
            M = !0;
            if (Z)
                if (K[k + "Transition"] = f ? o + "transform " + Math.round(f) + "ms " + $.easing : "", K[k + "Transform"] = "translate3d(" + (O ? "0," + a + "px," : a + "px,0,") + "0)", ya == a || !f) b();
                else {
                    if (f) F.on(ha, function(a) {
                        a.target === F[0] && (F.off(ha), K[k + "Transition"] = "", b())
                    })
                }
            else setTimeout(b, f || 0), K[j] = a + "px";
            ya = a
        }
        var N,
            na, t, ma, n, H, j, ca, c, m, B, Y, s, E, ba, w, M, W, u, Q, G, la, oa, i, aa, ea, K, F, V, O, h = this,
            ya = 0,
            pa = 0,
            D = 1,
            $ = q,
            sa = a(b);
        e.Base.call(this, b, q, !0);
        h.scrolled = !1;
        h.scroll = function(d, f, c) {
            d = X(d) ? Math.round(d / G) * G : Math.ceil((a(d, b).length ? Math.round(F.offset()[j] - a(d, b).offset()[j]) : ya) / G) * G;
            pa = Math.round(d / G);
            L(S(d, E, Y), f, c)
        };
        h.refresh = function() {
            var a;
            t = $.contSize === g ? O ? sa.height() : sa.width() : $.contSize;
            E = $.minScroll === g ? O ? t - F.height() : t - F.width() : $.minScroll;
            Y = $.maxScroll === g ? 0 : $.maxScroll;
            !O && $.rtl && (a = Y, Y = -E, E = -a);
            T($.snap) &&
            (la = [], F.find($.snap).each(function() {
                var a = O ? this.offsetTop : this.offsetLeft,
                    d = O ? this.offsetHeight : this.offsetWidth;
                la.push({
                    breakpoint: a + d / 2,
                    snap1: -a,
                    snap2: t - a - d
                })
            }));
            G = X($.snap) ? $.snap : 1;
            s = $.snap ? $.maxSnapScroll : 0;
            ca = $.elastic ? X($.snap) ? G : X($.elastic) ? $.elastic : 0 : 0;
            h.scroll($.snap ? la ? la[pa]["snap" + D] : pa * G : ya)
        };
        h.init = function(a) {
            h._init(a);
            j = (O = "Y" == $.axis) ? "top" : "left";
            F = $.moveElement || sa.children().eq(0);
            K = F[0].style;
            h.refresh();
            if ($.swipe) sa.on("touchstart mousedown", x).on("touchmove", r).on("touchend touchcancel",
                A);
            if ($.mousewheel) sa.on("wheel mousewheel", z);
            b.addEventListener && b.addEventListener("click", function(a) {
                h.scrolled && (a.stopPropagation(), a.preventDefault())
            }, !0)
        };
        h.destroy = function() {
            sa.off("touchstart mousedown", x).off("touchmove", r).off("touchend touchcancel", A).off("wheel mousewheel", z);
            h._destroy()
        };
        $ = h.settings;
        V = h.trigger;
        ga || h.init(q)
    };
    e.ScrollView.prototype = {
        _class: "scrollview",
        _defaults: {
            speedUnit: 0.0022,
            timeUnit: 0.8,
            axis: "Y",
            easing: "ease-out",
            swipe: !0,
            liveSwipe: !0,
            momentum: !0,
            elastic: !0
        }
    };
    q.presetShort("scrollview", "ScrollView", !1)
})(jQuery);
(function(a, g) {
    var q = a.mobiscroll,
        e = q.datetime,
        b = new Date,
        S = {
            startYear: b.getFullYear() - 100,
            endYear: b.getFullYear() + 1,
            separator: " ",
            dateFormat: "mm/dd/yy",
            dateOrder: "mmddy",
            timeWheels: "hhiiA",
            timeFormat: "hh:ii A",
            dayText: "Day",
            monthText: "Month",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            ampmText: "&nbsp;",
            secText: "Seconds",
            nowText: "Now"
        },
        k = function(b) {
            function k(a, c, b) {
                return B[c] !== g ? +a[B[c]] : Y[c] !== g ? Y[c] : b !== g ? b : s[c](la)
            }

            function U(a, c, b, d) {
                a.push({
                    values: b,
                    keys: c,
                    label: d
                })
            }

            function l(a,
                       c, b, d) {
                return Math.min(d, Math.floor(a / c) * c + b)
            }

            function v(a) {
                if (null === a) return a;
                var c = k(a, "y"),
                    b = k(a, "m"),
                    d = Math.min(k(a, "d", 1), j.getMaxDayOfMonth(c, b)),
                    f = k(a, "h", 0);
                return j.getDate(c, b, d, k(a, "a", 0) ? f + 12 : f, k(a, "i", 0), k(a, "s", 0), k(a, "u", 0))
            }

            function X(a, c) {
                var b, d, f = !1,
                    h = !1,
                    g = 0,
                    e = 0;
                ea = v(da(ea));
                K = v(da(K));
                if (T(a)) return a;
                a < ea && (a = ea);
                a > K && (a = K);
                d = b = a;
                if (2 !== c)
                    for (f = T(b); !f && b < K;) b = new Date(b.getTime() + 864E5), f = T(b), g++;
                if (1 !== c)
                    for (h = T(d); !h && d > ea;) d = new Date(d.getTime() - 864E5), h = T(d), e++;
                return 1 ===
                c && f ? b : 2 === c && h ? d : e <= g && h ? d : b
            }

            function T(a) {
                return a < ea || a > K ? !1 : ha(a, ba) ? !0 : ha(a, E) ? !1 : !0
            }

            function ha(a, c) {
                var b, d, f;
                if (c)
                    for (d = 0; d < c.length; d++)
                        if (b = c[d], f = b + "", !b.start)
                            if (b.getTime) {
                                if (a.getFullYear() == b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate()) return !0
                            } else if (f.match(/w/i)) {
                                if (f = +f.replace("w", ""), f == a.getDay()) return !0
                            } else if (f = f.split("/"), f[1]) {
                                if (f[0] - 1 == a.getMonth() && f[1] == a.getDate()) return !0
                            } else if (f[0] == a.getDate()) return !0;
                return !1
            }

            function fa(a, b, c, d, f,
                        h, g) {
                var e, i, n;
                if (a)
                    for (e = 0; e < a.length; e++)
                        if (i = a[e], n = i + "", !i.start)
                            if (i.getTime) j.getYear(i) == b && j.getMonth(i) == c && (h[j.getDay(i) - 1] = g);
                            else if (n.match(/w/i)) {
                                n = +n.replace("w", "");
                                for (C = n - d; C < f; C += 7) 0 <= C && (h[C] = g)
                            } else n = n.split("/"), n[1] ? n[0] - 1 == c && (h[n[1] - 1] = g) : h[n[0] - 1] = g
            }

            function ia(b, h, e, d, f, t, m, k, B) {
                var s, o, G, V, r, w, q, u, v, O, x, E, y, Y, z, F, A, la, ma = {},
                    C = {
                        h: oa,
                        i: i,
                        s: aa,
                        a: 1
                    },
                    ca = j.getDate(f, t, m),
                    K = ["a", "h", "i", "s"];
                b && (a.each(b, function(a, d) {
                    if (d.start && (d.apply = !1, s = d.d, o = s + "", G = o.split("/"), s && (s.getTime &&
                        f == j.getYear(s) && t == j.getMonth(s) && m == j.getDay(s) || !o.match(/w/i) && (G[1] && m == G[1] && t == G[0] - 1 || !G[1] && m == G[0]) || o.match(/w/i) && ca.getDay() == +o.replace("w", "")))) d.apply = !0, ma[ca] = !0
                }), a.each(b, function(d, b) {
                    x = Y = y = 0;
                    E = g;
                    q = w = !0;
                    z = !1;
                    if (b.start && (b.apply || !b.d && !ma[ca])) {
                        V = b.start.split(":");
                        r = b.end.split(":");
                        for (O = 0; 3 > O; O++) V[O] === g && (V[O] = 0), r[O] === g && (r[O] = 59), V[O] = +V[O], r[O] = +r[O];
                        V.unshift(11 < V[0] ? 1 : 0);
                        r.unshift(11 < r[0] ? 1 : 0);
                        Q && (12 <= V[1] && (V[1] -= 12), 12 <= r[1] && (r[1] -= 12));
                        for (O = 0; O < h; O++)
                            if (c[O] !==
                                g) {
                                u = l(V[O], C[K[O]], n[K[O]], H[K[O]]);
                                v = l(r[O], C[K[O]], n[K[O]], H[K[O]]);
                                la = A = F = 0;
                                Q && 1 == O && (F = V[0] ? 12 : 0, A = r[0] ? 12 : 0, la = c[0] ? 12 : 0);
                                w || (u = 0);
                                q || (v = H[K[O]]);
                                if ((w || q) && u + F < c[O] + la && c[O] + la < v + A) z = !0;
                                c[O] != u && (w = !1);
                                c[O] != v && (q = !1)
                            } if (!B)
                            for (O = h + 1; 4 > O; O++) 0 < V[O] && (y = C[e]), r[O] < H[K[O]] && (Y = C[e]);
                        z || (u = l(V[h], C[e], n[e], H[e]) + y, v = l(r[h], C[e], n[e], H[e]) - Y, w && (x = 0 > u ? 0 : u > H[e] ? a(".dw-li", k).length : R(k, u) + 0), q && (E = 0 > v ? 0 : v > H[e] ? a(".dw-li", k).length : R(k, v) + 1));
                        if (w || q || z) B ? a(".dw-li", k).slice(x, E).addClass("dw-v") :
                            a(".dw-li", k).slice(x, E).removeClass("dw-v")
                    }
                }))
            }

            function R(b, c) {
                return a(".dw-li", b).index(a('.dw-li[data-val="' + c + '"]', b))
            }

            function da(b, c) {
                var h = [];
                if (null === b || b === g) return b;
                a.each("y,m,d,a,h,i,s,u".split(","), function(a, f) {
                    B[f] !== g && (h[B[f]] = s[f](b));
                    c && (Y[f] = s[f](b))
                });
                return h
            }

            function ga(a) {
                var b, c, d, f = [];
                if (a) {
                    for (b = 0; b < a.length; b++)
                        if (c = a[b], c.start && c.start.getTime)
                            for (d = new Date(c.start); d <= c.end;) f.push(new Date(d.getFullYear(), d.getMonth(), d.getDate())), d.setDate(d.getDate() + 1);
                        else f.push(c);
                    return f
                }
                return a
            }
            var x = a(this),
                r = {},
                y;
            if (x.is("input")) {
                switch (x.attr("type")) {
                    case "date":
                        y = "yy-mm-dd";
                        break;
                    case "datetime":
                        y = "yy-mm-ddTHH:ii:ssZ";
                        break;
                    case "datetime-local":
                        y = "yy-mm-ddTHH:ii:ss";
                        break;
                    case "month":
                        y = "yy-mm";
                        r.dateOrder = "mmyy";
                        break;
                    case "time":
                        y = "HH:ii:ss"
                }
                var A = x.attr("min"),
                    x = x.attr("max");
                A && (r.minDate = e.parseDate(y, A));
                x && (r.maxDate = e.parseDate(y, x))
            }
            var z, C, L, N, na, t, ma, n, H, A = a.extend({}, b.settings),
                j = a.extend(b.settings, q.datetime.defaults, S, r, A),
                ca = 0,
                c = [],
                r = [],
                m = [],
                B = {},
                Y = {},
                s = {
                    y: function(a) {
                        return j.getYear(a)
                    },
                    m: function(a) {
                        return j.getMonth(a)
                    },
                    d: function(a) {
                        return j.getDay(a)
                    },
                    h: function(a) {
                        a = a.getHours();
                        a = Q && 12 <= a ? a - 12 : a;
                        return l(a, oa, F, h)
                    },
                    i: function(a) {
                        return l(a.getMinutes(), i, V, ya)
                    },
                    s: function(a) {
                        return l(a.getSeconds(), aa, O, pa)
                    },
                    u: function(a) {
                        return a.getMilliseconds()
                    },
                    a: function(a) {
                        return u && 11 < a.getHours() ? 1 : 0
                    }
                },
                E = j.invalid,
                ba = j.valid,
                A = j.preset,
                w = j.dateOrder,
                M = j.timeWheels,
                W = w.match(/D/),
                u = M.match(/a/i),
                Q = M.match(/h/),
                G = "datetime" == A ? j.dateFormat +
                    j.separator + j.timeFormat : "time" == A ? j.timeFormat : j.dateFormat,
                la = new Date,
                x = j.steps || {},
                oa = x.hour || j.stepHour || 1,
                i = x.minute || j.stepMinute || 1,
                aa = x.second || j.stepSecond || 1,
                x = x.zeroBased,
                ea = j.minDate || new Date(j.startYear, 0, 1),
                K = j.maxDate || new Date(j.endYear, 11, 31, 23, 59, 59),
                F = x ? 0 : ea.getHours() % oa,
                V = x ? 0 : ea.getMinutes() % i,
                O = x ? 0 : ea.getSeconds() % aa,
                h = Math.floor(((Q ? 11 : 23) - F) / oa) * oa + F,
                ya = Math.floor((59 - V) / i) * i + V,
                pa = Math.floor((59 - V) / i) * i + V;
            y = y || G;
            if (A.match(/date/i)) {
                a.each(["y", "m", "d"], function(a, b) {
                    z = w.search(RegExp(b,
                        "i")); - 1 < z && m.push({
                        o: z,
                        v: b
                    })
                });
                m.sort(function(a, b) {
                    return a.o > b.o ? 1 : -1
                });
                a.each(m, function(a, b) {
                    B[b.v] = a
                });
                x = [];
                for (C = 0; 3 > C; C++)
                    if (C == B.y) {
                        ca++;
                        N = [];
                        L = [];
                        na = j.getYear(ea);
                        t = j.getYear(K);
                        for (z = na; z <= t; z++) L.push(z), N.push((w.match(/yy/i) ? z : (z + "").substr(2, 2)) + (j.yearSuffix || ""));
                        U(x, L, N, j.yearText)
                    } else if (C == B.m) {
                        ca++;
                        N = [];
                        L = [];
                        for (z = 0; 12 > z; z++) na = w.replace(/[dy]/gi, "").replace(/mm/, (9 > z ? "0" + (z + 1) : z + 1) + (j.monthSuffix || "")).replace(/m/, z + 1 + (j.monthSuffix || "")), L.push(z), N.push(na.match(/MM/) ? na.replace(/MM/,
                            '<span class="dw-mon">' + j.monthNames[z] + "</span>") : na.replace(/M/, '<span class="dw-mon">' + j.monthNamesShort[z] + "</span>"));
                        U(x, L, N, j.monthText)
                    } else if (C == B.d) {
                        ca++;
                        N = [];
                        L = [];
                        for (z = 1; 32 > z; z++) L.push(z), N.push((w.match(/dd/i) && 10 > z ? "0" + z : z) + (j.daySuffix || ""));
                        U(x, L, N, j.dayText)
                    }
                r.push(x)
            }
            if (A.match(/time/i)) {
                ma = !0;
                m = [];
                a.each(["h", "i", "s", "a"], function(a, b) {
                    a = M.search(RegExp(b, "i")); - 1 < a && m.push({
                        o: a,
                        v: b
                    })
                });
                m.sort(function(a, b) {
                    return a.o > b.o ? 1 : -1
                });
                a.each(m, function(a, b) {
                    B[b.v] = ca + a
                });
                x = [];
                for (C =
                         ca; C < ca + 4; C++)
                    if (C == B.h) {
                        ca++;
                        N = [];
                        L = [];
                        for (z = F; z < (Q ? 12 : 24); z += oa) L.push(z), N.push(Q && 0 === z ? 12 : M.match(/hh/i) && 10 > z ? "0" + z : z);
                        U(x, L, N, j.hourText)
                    } else if (C == B.i) {
                        ca++;
                        N = [];
                        L = [];
                        for (z = V; 60 > z; z += i) L.push(z), N.push(M.match(/ii/) && 10 > z ? "0" + z : z);
                        U(x, L, N, j.minuteText)
                    } else if (C == B.s) {
                        ca++;
                        N = [];
                        L = [];
                        for (z = O; 60 > z; z += aa) L.push(z), N.push(M.match(/ss/) && 10 > z ? "0" + z : z);
                        U(x, L, N, j.secText)
                    } else C == B.a && (ca++, A = M.match(/A/), U(x, [0, 1], A ? [j.amText.toUpperCase(), j.pmText.toUpperCase()] : [j.amText, j.pmText], j.ampmText));
                r.push(x)
            }
            b.getVal = function(a) {
                return b._hasValue || a ? v(b.getArrayVal(a)) : null
            };
            b.setDate = function(a, c, h, d, f) {
                b.setArrayVal(da(a), c, f, d, h)
            };
            b.getDate = b.getVal;
            b.format = G;
            b.order = B;
            b.handlers.now = function() {
                b.setDate(new Date, !1, 0.3, !0, !0)
            };
            b.buttons.now = {
                text: j.nowText,
                handler: "now"
            };
            E = ga(E);
            ba = ga(ba);
            n = {
                y: ea.getFullYear(),
                m: 0,
                d: 1,
                h: F,
                i: V,
                s: O,
                a: 0
            };
            H = {
                y: K.getFullYear(),
                m: 11,
                d: 31,
                h: h,
                i: ya,
                s: pa,
                a: 1
            };
            return {
                wheels: r,
                headerText: j.headerText ? function() {
                    return e.formatDate(G, v(b.getArrayVal(!0)), j)
                } : !1,
                formatValue: function(a) {
                    return e.formatDate(y,
                        v(a), j)
                },
                parseValue: function(a) {
                    a || (Y = {});
                    return da(a ? e.parseDate(y, a, j) : j.defaultValue || new Date, !!a && !!a.getTime)
                },
                validate: function(h, e, i, d) {
                    var e = X(v(b.getArrayVal(!0)), d),
                        f = da(e),
                        Q = k(f, "y"),
                        t = k(f, "m"),
                        m = !0,
                        l = !0;
                    a.each("y,m,d,a,h,i,s".split(","), function(d, b) {
                        if (B[b] !== g) {
                            var c = n[b],
                                e = H[b],
                                i = 31,
                                V = k(f, b),
                                o = a(".dw-ul", h).eq(B[b]);
                            if (b == "d") {
                                e = i = j.getMaxDayOfMonth(Q, t);
                                W && a(".dw-li", o).each(function() {
                                    var d = a(this),
                                        b = d.data("val"),
                                        c = j.getDate(Q, t, b).getDay(),
                                        b = w.replace(/[my]/gi, "").replace(/dd/,
                                            (b < 10 ? "0" + b : b) + (j.daySuffix || "")).replace(/d/, b + (j.daySuffix || ""));
                                    a(".dw-i", d).html(b.match(/DD/) ? b.replace(/DD/, '<span class="dw-day">' + j.dayNames[c] + "</span>") : b.replace(/D/, '<span class="dw-day">' + j.dayNamesShort[c] + "</span>"))
                                })
                            }
                            m && ea && (c = s[b](ea));
                            l && K && (e = s[b](K));
                            if (b != "y") {
                                var r = R(o, c),
                                    G = R(o, e);
                                a(".dw-li", o).removeClass("dw-v").slice(r, G + 1).addClass("dw-v");
                                b == "d" && a(".dw-li", o).removeClass("dw-h").slice(i).addClass("dw-h")
                            }
                            V < c && (V = c);
                            V > e && (V = e);
                            m && (m = V == c);
                            l && (l = V == e);
                            if (b == "d") {
                                c = j.getDate(Q,
                                    t, 1).getDay();
                                e = {};
                                fa(E, Q, t, c, i, e, 1);
                                fa(ba, Q, t, c, i, e, 0);
                                a.each(e, function(d, b) {
                                    b && a(".dw-li", o).eq(d).removeClass("dw-v")
                                })
                            }
                        }
                    });
                    ma && a.each(["a", "h", "i", "s"], function(e, i) {
                        var j = k(f, i),
                            n = k(f, "d"),
                            m = a(".dw-ul", h).eq(B[i]);
                        B[i] !== g && (ia(E, e, i, f, Q, t, n, m, 0), ia(ba, e, i, f, Q, t, n, m, 1), c[e] = +b.getValidCell(j, m, d).val)
                    });
                    b._tempWheelArray = f
                }
            }
        };
    a.each(["date", "time", "datetime"], function(a, b) {
        q.presets.scroller[b] = k
    })
})(jQuery);
(function(a, g) {
    var q = {
        invalid: [],
        showInput: !0,
        inputClass: ""
    };
    a.mobiscroll.presets.scroller.list = function(e) {
        function b(b, e, g, l) {
            for (var j, k = 0; k < e;) {
                var c = a(".dwwl" + k, b),
                    m;
                j = 0;
                m = void 0;
                for (var B = g, o = []; j < k;) {
                    var s = l[j];
                    for (m in B)
                        if (B[m].key == s) {
                            B = B[m].children;
                            break
                        } j++
                }
                for (j = 0; j < B.length;) B[j].invalid && o.push(B[j].key), j++;
                m = o;
                for (j = 0; j < m.length; j++) a('.dw-li[data-val="' + m[j] + '"]', c).removeClass("dw-v");
                k++
            }
        }

        function S(a, b) {
            for (var e = []; a;) e[--a] = !0;
            e[b] = !1;
            return e
        }

        function k(a, b, e) {
            var k = 0,
                j, l,
                c = [
                    []
                ],
                m = C;
            if (b)
                for (j = 0; j < b; j++) ha ? c[0][j] = {} : c[j] = [{}];
            for (; k < a.length;) {
                ha ? c[0][k] = Z(m, L[k]) : c[k] = [Z(m, L[k])];
                j = 0;
                for (b = g; j < m.length && b === g;) {
                    if (m[j].key == a[k] && (e !== g && k <= e || e === g)) b = j;
                    j++
                }
                if (b !== g && m[b].children) k++, m = m[b].children;
                else if ((l = o(m)) && l.children) k++, m = l.children;
                else break
            }
            return c
        }

        function o(a, b) {
            if (!a) return !1;
            for (var e = 0, g; e < a.length;)
                if (!(g = a[e++]).invalid) return b ? e - 1 : g;
            return !1
        }

        function Z(a, b) {
            for (var e = {
                keys: [],
                values: [],
                label: b
            }, g = 0; g < a.length;) e.values.push(a[g].value),
                e.keys.push(a[g].key), g++;
            return e
        }

        function U(b, e) {
            a(".dwfl", b).css("display", "").slice(e).hide()
        }

        function l(a, b) {
            var e = [],
                k = C,
                j = 0,
                l = !1,
                c, m;
            if (a[j] !== g && j <= b) {
                l = 0;
                c = a[j];
                for (m = g; l < k.length && m === g;) k[l].key == a[j] && !k[l].invalid && (m = l), l++
            } else m = o(k, !0), c = k[m].key;
            l = m !== g ? k[m].children : !1;
            for (e[j] = c; l;) {
                k = k[m].children;
                j++;
                if (a[j] !== g && j <= b) {
                    l = 0;
                    c = a[j];
                    for (m = g; l < k.length && m === g;) k[l].key == a[j] && !k[l].invalid && (m = l), l++
                } else m = o(k, !0), m = !1 === m ? g : m, c = k[m].key;
                l = m !== g && o(k[m].children) ? k[m].children :
                    !1;
                e[j] = c
            }
            return {
                lvl: j + 1,
                nVector: e
            }
        }

        function v(b) {
            var k = [];
            x = x > r++ ? x : r;
            b.children("li").each(function(b) {
                var l = a(this),
                    j = l.clone();
                j.children("ul,ol").remove();
                var j = e._processMarkup ? e._processMarkup(j) : j.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                    t = l.attr("data-invalid") ? !0 : !1,
                    b = {
                        key: l.attr("data-val") === g || null === l.attr("data-val") ? b : l.attr("data-val"),
                        value: j,
                        invalid: t,
                        children: null
                    },
                    l = l.children("ul,ol");
                l.length && (b.children = v(l));
                k.push(b)
            });
            r--;
            return k
        }
        var X = a.extend({}, e.settings),
            T = a.extend(e.settings, q, X),
            X = T.layout || (/top|bottom/.test(T.display) ? "liquid" : ""),
            ha = "liquid" == X,
            fa = T.readonly,
            ia = a(this),
            R, da, ga = this.id + "_dummy",
            x = 0,
            r = 0,
            y = {},
            A, z = [],
            C = T.wheelArray || v(ia),
            L = function(a) {
                var b = [],
                    e;
                for (e = 0; e < a; e++) b[e] = T.labels && T.labels[e] ? T.labels[e] : e;
                return b
            }(x),
            N = function(a) {
                var b = [],
                    e;
                e = !0;
                for (var g = 0; e;) e = o(a), b[g++] = e.key, (e = e.children) && (a = e);
                return b
            }(C),
            na = k(N, x);
        a("#" + ga).remove();
        T.showInput && (R = a('<input type="text" id="' + ga + '" value="" class="' + T.inputClass + '" placeholder="' +
            (T.placeholder || "") + '" readonly />').insertBefore(ia), T.anchor = R, e.attachShow(R));
        T.wheelArray || ia.hide().closest(".ui-field-contain").trigger("create");
        return {
            width: 50,
            wheels: na,
            layout: X,
            headerText: !1,
            formatValue: function(a) {
                if (A === g) A = l(a, a.length).lvl;
                return a.slice(0, A).join(" ")
            },
            parseValue: function(a) {
                return a ? (a + "").split(" ") : (T.defaultValue || N).slice(0)
            },
            onBeforeShow: function() {
                var a = e.getArrayVal(true);
                z = a.slice(0);
                T.wheels = k(a, x, x);
                da = true
            },
            onValueFill: function(a) {
                A = g;
                R && R.val(a)
            },
            onShow: function(b) {
                a(".dwwl",
                    b).on("mousedown touchstart", function() {
                    clearTimeout(y[a(".dwwl", b).index(this)])
                })
            },
            onDestroy: function() {
                R && R.remove();
                ia.show()
            },
            validate: function(a, o, n) {
                var r = [],
                    j = e.getArrayVal(true),
                    q = (o || 0) + 1,
                    c, m;
                if (o !== g && z[o] != j[o] || o === g && !da) {
                    T.wheels = k(j, null, o);
                    m = l(j, o === g ? j.length : o);
                    A = m.lvl;
                    for (c = 0; c < j.length; c++) j[c] = m.nVector[c] || 0;
                    for (; q < m.lvl;) r.push(q++);
                    if (r.length) {
                        T.readonly = S(x, o);
                        clearTimeout(y[o]);
                        y[o] = setTimeout(function() {
                            da = true;
                            U(a, m.lvl);
                            z = j.slice(0);
                            e.changeWheel(r, o === g ? n : 0, o !== g);
                            T.readonly = fa
                        }, o === g ? 0 : n * 1E3);
                        return false
                    }
                } else {
                    m = l(j, j.length);
                    A = m.lvl
                }
                z = j.slice(0);
                b(a, m.lvl, C, j);
                U(a, m.lvl);
                da = false
            }
        }
    }
})(jQuery);
(function(a) {
    var a = a.mobiscroll,
        g = a.presets.scroller;
    g.treelist = g.list;
    a.presetShort("list");
    a.presetShort("treelist")
})(jQuery);
(function(a, g) {
    var q = a.mobiscroll,
        e = q.presets.scroller,
        b = q.datetime,
        S = q.util.testTouch,
        k = {
            autoCorrect: !0,
            showSelector: !0,
            minRange: 1,
            fromText: "Start",
            toText: "End"
        };
    q.presetShort("rangepicker");
    q.presetShort("range");
    e.range = e.rangepicker = function(o) {
        function q(a, b) {
            a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()))
        }

        function U(e, g) {
            var j = !0;
            if (e && (y - r > n.maxRange - 1 && (j = !1, t ? r = new Date(y - n.maxRange + 1) : y = new Date(+r + n.maxRange - 1)), y - r < n.minRange - 1)) j = !1, t ? r = new Date(y -
                n.minRange + 1) : y = new Date(+r + n.minRange - 1);
            if (g) {
                var l, k, m, o, q, u = 0;
                ga = r ? b.formatDate(fa, r, n) : "";
                x = y ? b.formatDate(fa, y, n) : "";
                if (T && (a(".dw-drv0", T).html(ga || "&nbsp;"), a(".dw-drv1", T).html(x || "&nbsp;"), l = r ? new Date(r) : null, m = y ? new Date(y) : null, q = t ? m : l, a(".dw-cal-table .dw-sel .dw-i", T).removeClass(ca), a(".dw-cal-table .dw-cal-day-hl", T).removeClass(c), a(".dw-cal-table .dw-sel", T).removeClass("dw-sel dw-cal-sel-start dw-cal-sel-end").removeAttr("aria-selected"), q && a('.dw-cal-day[data-full="' + q.getFullYear() +
                    "-" + q.getMonth() + "-" + q.getDate() + '"]', T).addClass(c), !l && m && (l = new Date(m)), !m && l && (m = new Date(l)), l && m)) {
                    k = l.setHours(0, 0, 0, 0);
                    for (o = m.setHours(0, 0, 0, 0); m >= l && 84 > u;) a('.dw-cal-day[data-full="' + q.getFullYear() + "-" + q.getMonth() + "-" + q.getDate() + '"]', T).addClass("dw-sel" + (q.getTime() === k ? " dw-cal-sel-start" : "") + (q.getTime() === o ? " dw-cal-sel-end" : "")).attr("aria-selected", "true").find(".dw-i ").addClass(ca), q.setDate(q.getDate() + (t ? -1 : 1)), u++
                }
            }
            return j
        }

        function l() {
            v.removeClass("dw-sel").removeAttr("aria-checked").find(".dw-dr",
                T).removeClass(ca);
            v = a(".dw-dr-c", T).eq(t).addClass("dw-sel").attr("aria-checked", "true");
            v.find(".dw-dr").addClass(ca)
        }
        var v, X, T, ha, fa, ia, R, da, ga, x, r, y, A, z, C, L, N = o._startDate,
            na = o._endDate,
            t = 0;
        ia = new Date;
        var ma = a.extend({}, o.settings),
            n = a.extend(o.settings, k, ma),
            H = n.anchor,
            j = n.rangeTap,
            ca = n.activeClass || "",
            c = j ? "" : "dw-cal-day-hl",
            m = null === n.defaultValue ? [] : n.defaultValue || [new Date(ia.setHours(0, 0, 0, 0)), new Date(ia.getFullYear(), ia.getMonth(), ia.getDate() + 6, 23, 59, 59, 999)];
        j && (n.tabs = !0);
        ia = e.calbase.call(this,
            o);
        X = a.extend({}, ia);
        fa = o.format;
        A = "time" === n.controls.join("");
        L = 1 == n.controls.length && "calendar" == n.controls[0] ? n.showSelector : !0;
        n.startInput && (z = a(n.startInput).prop("readonly"), o.attachShow(a(n.startInput).prop("readonly", !0), function() {
            t = 0;
            n.anchor = H || a(n.startInput)
        }));
        n.endInput && (C = a(n.endInput).prop("readonly"), o.attachShow(a(n.endInput).prop("readonly", !0), function() {
            t = 1;
            n.anchor = H || a(n.endInput)
        }));
        o.setVal = function(a, c, e, j, l) {
            var k = a || [];
            if (k[0] === g || k[0] === null || k[0].getTime) {
                da = true;
                ga = (r = k[0] || null) ? b.formatDate(fa, r, n) : "";
                t || (a = X.parseValue(ga, o))
            }
            if (k[1] === g || k[1] === null || k[1].getTime) {
                da = true;
                x = (y = k[1] || null) ? b.formatDate(fa, y, n) : "";
                t && (a = X.parseValue(x, o))
            }
            if (!j) {
                o._startDate = N = r;
                o._endDate = na = y
            }
            o._setVal(a, c, e, j, l)
        };
        o.getVal = function(a) {
            return a ? [r, y] : o._hasValue ? [N, na] : null
        };
        o.getDayProps = function(a) {
            var b = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate()) : null,
                e = y ? new Date(y.getFullYear(), y.getMonth(), y.getDate()) : null;
            return {
                selected: b && e && a >= b && a <= y,
                cssClass: (!t &&
                b && b.getTime() === a.getTime() || t && e && e.getTime() === a.getTime() ? c : "") + (b && b.getTime() === a.getTime() ? " dw-cal-sel-start" : "") + (e && e.getTime() === a.getTime() ? " dw-cal-sel-end" : "")
            }
        };
        o.setActiveDate = function(b) {
            b = (t = b == "start" ? 0 : 1) ? y : r;
            if (o.isVisible()) {
                l();
                a(".dw-cal-table .dw-cal-day-hl", T).removeClass(c);
                b && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', T).addClass(c);
                R = true;
                o.setDate(b, false, 0.2, true)
            }
        };
        o.setValue = function(a, b, c, e, g) {
            o.setVal(a, b, g, e, c)
        };
        o.getValue =
            o.getVal;
        a.extend(ia, {
            highlight: !1,
            divergentDayChange: !1,
            formatValue: function() {
                return ga + (n.endInput ? "" : x ? " - " + x : "")
            },
            parseValue: function(c) {
                c = c ? c.split(" - ") : [];
                n.defaultValue = m[1];
                na = n.endInput ? a(n.endInput).val() ? b.parseDate(fa, a(n.endInput).val(), n) : m[1] : c[1] ? b.parseDate(fa, c[1], n) : m[1];
                n.defaultValue = m[0];
                N = n.startInput ? a(n.startInput).val() ? b.parseDate(fa, a(n.startInput).val(), n) : m[0] : c[0] ? b.parseDate(fa, c[0], n) : m[0];
                n.defaultValue = m[t];
                ga = N ? b.formatDate(fa, N, n) : "";
                x = na ? b.formatDate(fa, na,
                    n) : "";
                o._startDate = N;
                o._endDate = na;
                return X.parseValue(t ? x : ga, o)
            },
            onValueFill: function(b, c) {
                o._startDate = N = r;
                o._endDate = na = y;
                if (n.startInput) {
                    a(n.startInput).val(ga);
                    c && a(n.startInput).change()
                }
                if (n.endInput) {
                    a(n.endInput).val(x);
                    c && a(n.endInput).change()
                }
            },
            onClose: function(a, b) {
                if (b === "set" && !U(true, true)) {
                    o.setActiveDate(t ? "start" : "end");
                    return false
                }
            },
            onHide: function() {
                X.onHide.call(o);
                t = 0;
                T = null;
                n.anchor = H
            },
            onClear: function() {
                o.setVal([])
            },
            onBeforeShow: function() {
                n.headerText = false;
                r = N;
                y = na;
                if (n.counter) n.headerText =
                    function() {
                        return (r && y ? Math.max(1, Math.round(((new Date(y)).setHours(0, 0, 0, 0) - (new Date(r)).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0) + " " + n.selectedText
                    };
                da = true
            },
            onMarkupReady: function(b) {
                var c;
                T = b;
                if (r) {
                    R = true;
                    o.setDate(r, false, 0, true);
                    r = o.getDate(true)
                }
                if (y) {
                    R = true;
                    o.setDate(y, false, 0, true);
                    y = o.getDate(true)
                }
                R = true;
                o.setDate(t ? y : r, false, 0, true);
                X.onMarkupReady.call(this, b);
                b.addClass("dw-range");
                if (L) {
                    c = '<div class="dw-dr-t" role="radiogroup"><div class="dw-dr-c dw-dr0"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' +
                        n.fromText + '<div class="dw-drv dw-drv0">' + (ga || "&nbsp;") + '</div></div></div><div class="dw-dr-c dw-dr1"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + n.toText + '<div class="dw-drv dw-drv1">' + (x || "&nbsp;") + "</div></div></div></div>";
                    a(".dw-cal-tabs", b).before(c)
                }
                v = a(".dw-dr" + t, b).addClass("dw-sel").attr("aria-checked", "true");
                v.find(".dw-dr").addClass(ca);
                setTimeout(function() {
                    a(".dw-dr-c", b).on("touchstart click", function(b) {
                        if (!j || j && a(".dw-cal-tab.dw-sel", T).attr("data-control") !== "calendar") {
                            var c =
                                a(this);
                            S(b, this) && !c.hasClass("dw-sel") && o.setActiveDate(c.index() ? "end" : "start")
                        }
                    })
                }, 300)
            },
            onDayChange: function(a) {
                a.active = t ? "end" : "start";
                ha = true
            },
            onSetDate: function(a) {
                var b = a.date,
                    c = o.order;
                if (!R) {
                    c.h === g && b.setHours(t ? 23 : 0);
                    c.i === g && b.setMinutes(t ? 59 : 0);
                    c.s === g && b.setSeconds(t ? 59 : 0);
                    b.setMilliseconds(t ? 999 : 0);
                    if (!da || ha) {
                        if (j && ha) {
                            t == 1 && b < r && (t = 0);
                            t ? b.setHours(23, 59, 59, 999) : b.setHours(0, 0, 0, 0)
                        }
                        t ? y = new Date(b) : r = new Date(b);
                        if (A) {
                            q(r, b);
                            q(y, b)
                        }
                        j && ha && !t && (y = new Date(b.setHours(23, 59, 59, 999)))
                    }
                }
                U(da ||
                    ha || n.autoCorrect, !R);
                a.active = t ? "end" : "start";
                if (!R && j && ha) {
                    t = t ? 0 : 1;
                    l()
                }
                R = da = ha = false
            },
            onTabChange: function() {
                U(true, true)
            },
            onDestroy: function() {
                a(n.startInput).prop("readonly", z);
                a(n.endInput).prop("readonly", C)
            }
        });
        return ia
    }
})(jQuery);
(function(a, g, q, e) {
    var b = a.mobiscroll,
        S = a.extend,
        k = b.util,
        o = b.datetime,
        Z = b.presets.scroller,
        U = {
            labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","),
            fromText: "Start",
            toText: "End",
            eventText: "event",
            eventsText: "events"
        };
    b.presetShort("calendar");
    Z.calendar = function(l) {
        function q(b) {
            if (b) {
                if (ca[b]) return ca[b];
                var c = a('<div style="background-color:' + b + ';"></div>').appendTo("body"),
                    e = (g.getComputedStyle ? getComputedStyle(c[0]) : c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                    e = 130 <
                    0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2] ? "#000" : "#fff";
                c.remove();
                return ca[b] = e
            }
        }

        function X(a) {
            return a.sort(function(a, b) {
                var c = a.d || a.start,
                    e = b.d || b.start,
                    c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(),
                    e = !e.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : e.getTime();
                return c - e
            })
        }

        function T(b) {
            var c;
            c = a(".dw-cal-c", x).outerHeight();
            var e = b.outerHeight(),
                g = b.outerWidth(),
                i = b.offset().top - a(".dw-cal-c", x).offset().top,
                j = 2 > b.closest(".dw-cal-row").index();
            c = r.addClass("dw-cal-events-t").css({
                top: j ? i + e : "0",
                bottom: j ? "0" : c - i
            }).addClass("dw-cal-events-v").height();
            r.css(j ? "bottom" : "top", "auto").removeClass("dw-cal-events-t");
            C.css("max-height", c);
            z.refresh();
            z.scroll(0);
            j ? r.addClass("dw-cal-events-b") : r.removeClass("dw-cal-events-b");
            a(".dw-cal-events-arr", r).css("left", b.offset().left - r.offset().left + g / 2)
        }

        function ha(e, g) {
            var j = A[e];
            if (j) {
                var k, i, n, o, t, s = '<ul class="dw-cal-event-list">';
                y = g;
                g.addClass(m).find(".dw-i").addClass(Y);
                g.hasClass(B) && g.attr("data-hl",
                    "true").removeClass(B);
                X(j);
                a.each(j, function(a, e) {
                    o = e.d || e.start;
                    t = e.start && e.end && e.start.toDateString() !== e.end.toDateString();
                    n = e.color;
                    q(n);
                    i = k = "";
                    o.getTime && (k = b.datetime.formatDate((t ? "MM d yy " : "") + c.timeFormat, o));
                    e.end && (i = b.datetime.formatDate((t ? "MM d yy " : "") + c.timeFormat, e.end));
                    var h = s,
                        g = '<li role="button" aria-label="' + e.text + (k ? ", " + c.fromText + " " + k : "") + (i ? ", " + c.toText + " " + i : "") + '" class="dw-cal-event"><div class="dw-cal-event-color" style="' + (n ? "background:" + n + ";" : "") + '"></div><div class="dw-cal-event-text">' +
                            (o.getTime && !t ? '<div class="dw-cal-event-time">' + b.datetime.formatDate(c.timeFormat, o) + "</div>" : "") + e.text + "</div>",
                        j;
                    if (e.start && e.end) {
                        j = c.labelsShort;
                        var l = Math.abs(e.end - e.start) / 1E3,
                            m = l / 60,
                            Q = m / 60,
                            d = Q / 24,
                            f = d / 365;
                        j = '<div class="dw-cal-event-dur">' + (45 > l && Math.round(l) + " " + j[5].toLowerCase() || 45 > m && Math.round(m) + " " + j[4].toLowerCase() || 24 > Q && Math.round(Q) + " " + j[3].toLowerCase() || 30 > d && Math.round(d) + " " + j[2].toLowerCase() || 365 > d && Math.round(d / 30) + " " + j[1].toLowerCase() || Math.round(f) + " " + j[0].toLowerCase()) +
                            "</div>"
                    } else j = "";
                    s = h + (g + j + "</li>")
                });
                s += "</ul>";
                L.html(s);
                T(y);
                l.tap(a(".dw-cal-event", L), function(b) {
                    z.scrolled || l.trigger("onEventSelect", [b, j[a(this).index()], e])
                });
                N = !0;
                l.trigger("onEventBubbleShow", [y, r])
            }
        }

        function fa() {
            r && r.removeClass("dw-cal-events-v");
            y && (y.removeClass(m).find(".dw-i").removeClass(Y), y.attr("data-hl") && y.removeAttr("data-hl").addClass(B));
            N = !1
        }

        function ia(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }

        function R(a) {
            M = {};
            if (a && a.length)
                for (t = 0; t < a.length; t++) M[ia(a[t])] =
                    a[t]
        }

        function da() {
            W && fa();
            l.refresh()
        }
        var ga, x, r, y, A, z, C, L, N, na, t, ma, n, H, j, ca = {};
        H = S({}, l.settings);
        var c = S(l.settings, U, H),
            m = "dw-sel dw-cal-day-ev",
            B = "dw-cal-day-hl",
            Y = c.activeClass || "",
            s = c.multiSelect || "week" == c.selectType,
            E = c.markedDisplay,
            ba = !0 === c.events || !0 === c.markedText,
            w = 0,
            M = {},
            W = a.isArray(c.events),
            u = W ? S(!0, [], c.events) : [];
        H = Z.calbase.call(this, l);
        ga = S({}, H);
        na = c.firstSelectDay === e ? c.firstDay : c.firstSelectDay;
        if (c.selectedValues)
            for (t = 0; t < c.selectedValues.length; t++) M[ia(c.selectedValues[t])] =
                c.selectedValues[t];
        W && a.each(u, function(a, b) {
            b._id === e && (b._id = w++)
        });
        l.onGenMonth = function(a, b) {
            A = l.prepareObj(u, a, b);
            ma = l.prepareObj(c.marked, a, b)
        };
        l.getDayProps = function(b) {
            for (var g = s ? M[b] !== e : W ? b.getTime() === (new Date).setHours(0, 0, 0, 0) : e, j = ma[b] ? ma[b][0] : !1, k = A[b] ? A[b][0] : !1, i = j || k, j = j.text || (k ? A[b].length + " " + (1 < A[b].length ? c.eventsText : c.eventText) : 0), k = ma[b] || A[b] || [], l = i.color, m = ba && j ? q(l) : "", n = "", o = '<div class="dw-cal-day-m"' + (l ? ' style="background-color:' + l + ";border-color:" + l + " " + l + ' transparent transparent"' :
                "") + "></div>", b = 0; b < k.length; b++) k[b].icon && (n += '<span class="mbsc-ic mbsc-ic-' + k[b].icon + '"' + (k[b].text ? "" : k[b].color ? ' style="color:' + k[b].color + ';"' : "") + "></span>\n");
            if ("bottom" == E) {
                o = '<div class="dw-cal-day-m"><div class="dw-cal-day-m-t">';
                for (b = 0; b < k.length; b++) o += '<div class="dw-cal-day-m-c"' + (k[b].color ? ' style="background:' + k[b].color + ';"' : "") + "></div>";
                o += "</div></div>"
            }
            return {
                marked: i,
                selected: W ? !1 : g,
                cssClass: W && g ? "dw-cal-day-hl" : i ? "dw-cal-day-marked" : "",
                ariaLabel: ba || W ? j : "",
                markup: ba &&
                j ? '<div class="dw-cal-day-txt-c"><div class="dw-cal-day-txt ' + (c.eventTextClass || "") + '" title="' + a("<div>" + j + "</div>").text() + '"' + (l ? ' style="background:' + l + ";color:" + m + ';text-shadow:none;"' : "") + ">" + n + j + "</div></div>" : ba && n ? '<div class="dw-cal-day-ic-c">' + n + "</div>" : i ? o : ""
            }
        };
        l.addValue = function(a) {
            M[ia(a)] = a;
            da()
        };
        l.removeValue = function(a) {
            delete M[ia(a)];
            da()
        };
        l.setVal = function(a, b, c, e, g) {
            s && (R(a), a = a ? a[0] : null);
            l.setDate(a, b, g, e, c);
            da()
        };
        l.getVal = function(a) {
            return s ? k.objectToArray(M) : l.getDate(a)
        };
        l.setValues = function(a, b) {
            l.setDate(a ? a[0] : null, b);
            R(a);
            da()
        };
        l.getValues = function() {
            return s ? l.getVal() : [l.getDate()]
        };
        W && (l.addEvent = function(b) {
            var c = [],
                b = S(!0, [], a.isArray(b) ? b : [b]);
            a.each(b, function(a, b) {
                b._id === e && (b._id = w++);
                u.push(b);
                c.push(b._id)
            });
            da();
            return c
        }, l.removeEvent = function(b) {
            b = a.isArray(b) ? b : [b];
            a.each(b, function(b, c) {
                a.each(u, function(a, b) {
                    if (b._id === c) return u.splice(a, 1), !1
                })
            });
            da()
        }, l.getEvents = function(a) {
            var b;
            return a ? (a.setHours(0, 0, 0, 0), b = l.prepareObj(u, a.getFullYear(),
                a.getMonth()), b[a] ? X(b[a]) : []) : u
        }, l.setEvents = function(b) {
            var c = [];
            u = S(!0, [], b);
            a.each(u, function(a, b) {
                b._id === e && (b._id = w++);
                c.push(b._id)
            });
            da();
            return c
        });
        S(H, {
            highlight: !s && !W,
            divergentDayChange: !s && !W,
            buttons: W && "inline" !== c.display ? ["cancel"] : c.buttons,
            parseValue: function(a) {
                var b, e;
                if (s && a) {
                    M = {};
                    a = a.split(",");
                    for (b = 0; b < a.length; b++) {
                        e = o.parseDate(l.format, a[b].replace(/^\s+|\s+$/g, ""), c);
                        M[ia(e)] = e
                    }
                    a = a[0]
                }
                return ga.parseValue.call(this, a)
            },
            formatValue: function(a) {
                var b, e = [];
                if (s) {
                    for (b in M) e.push(o.formatDate(l.format,
                        M[b], c));
                    return e.join(", ")
                }
                return ga.formatValue.call(this, a)
            },
            onClear: function() {
                if (s) {
                    M = {};
                    l.refresh()
                }
            },
            onBeforeShow: function() {
                if (W) c.headerText = false;
                if (c.closeOnSelect) c.divergentDayChange = false;
                if (c.counter && s) c.headerText = function() {
                    var b = 0,
                        e = c.selectType == "week" ? 7 : 1;
                    a.each(M, function() {
                        b++
                    });
                    return b / e + " " + c.selectedText
                }
            },
            onMarkupReady: function(e) {
                ga.onMarkupReady.call(this, e);
                x = e;
                if (s) {
                    a(".dwv", e).attr("aria-live", "off");
                    n = S({}, M)
                }
                ba && a(".dw-cal", e).addClass("dw-cal-ev");
                E && a(".dw-cal",
                    e).addClass("dw-cal-m-" + E);
                if (W) {
                    e.addClass("dw-cal-em");
                    r = a('<div class="dw-cal-events ' + (c.eventBubbleClass || "") + '"><div class="dw-cal-events-arr"></div><div class="dw-cal-events-i"><div class="dw-cal-events-sc"></div></div></div>').appendTo(a(".dw-cal-c", e));
                    C = a(".dw-cal-events-i", r);
                    L = a(".dw-cal-events-sc", r);
                    z = new b.classes.ScrollView(C[0]);
                    N = false;
                    l.tap(C, function() {
                        z.scrolled || fa()
                    })
                }
            },
            onMonthChange: function() {
                W && fa()
            },
            onSelectShow: function() {
                W && fa()
            },
            onMonthLoaded: function() {
                if (j) {
                    ha(j.d,
                        a('.dw-cal-day-v[data-full="' + j.full + '"]:not(.dw-cal-day-diff)', x));
                    j = false
                }
            },
            onDayChange: function(b) {
                var e = b.date,
                    g = ia(e),
                    k = a(b.cell),
                    b = b.selected;
                if (W) {
                    fa();
                    k.hasClass("dw-cal-day-ev") || setTimeout(function() {
                        l.changing ? j = {
                            d: g,
                            full: k.attr("data-full")
                        } : ha(g, k)
                    }, 10)
                } else if (s)
                    if (c.selectType == "week") {
                        var i, m, n = g.getDay() - na,
                            n = n < 0 ? 7 + n : n;
                        c.multiSelect || (M = {});
                        for (i = 0; i < 7; i++) {
                            m = new Date(g.getFullYear(), g.getMonth(), g.getDate() - n + i);
                            b ? delete M[m] : M[m] = m
                        }
                        da()
                    } else {
                        i = a('.dw-cal .dw-cal-day[data-full="' +
                            k.attr("data-full") + '"]', x);
                        if (b) {
                            i.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(Y);
                            delete M[g]
                        } else {
                            i.addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(Y);
                            M[g] = g
                        }
                    } if (!W && !c.multiSelect && c.closeOnSelect && c.display !== "inline") {
                    l.needsSlide = false;
                    l.setDate(e);
                    l.select();
                    return false
                }
            },
            onCalResize: function() {
                N && T(y)
            },
            onCancel: function() {
                !l.live && s && (M = S({}, n))
            }
        });
        return H
    }
})(jQuery, window, document);
(function(a, g) {
    var q = a.mobiscroll,
        e = q.util,
        b = e.isString,
        S = {
            batch: 40,
            inputClass: "",
            invalid: [],
            rtl: !1,
            showInput: !0,
            groupLabel: "Groups",
            checkIcon: "checkmark",
            dataText: "text",
            dataValue: "value",
            dataGroup: "group",
            dataDisabled: "disabled"
        };
    q.presetShort("select");
    q.presets.scroller.select = function(k) {
        function o() {
            var b, c, e, i, j, k = 0,
                l = 0,
                n = {};
            K = {};
            F = {};
            z = [];
            da = [];
            u ? a.each(m.data, function(a, f) {
                i = f[m.dataText];
                j = f[m.dataValue];
                c = f[m.dataGroup];
                e = {
                    value: j,
                    text: i,
                    index: a
                };
                K[j] = e;
                z.push(e);
                Q && (n[c] === g ? (b = {
                    text: c,
                    value: l,
                    options: [],
                    index: l
                }, F[l] = b, n[c] = l, da.push(b), l++) : b = F[n[c]], la && (e.index = b.options.length), e.group = n[c], b.options.push(e));
                f[m.dataDisabled] && aa.push(j)
            }) : Q ? a("optgroup", s).each(function(b) {
                F[b] = {
                    text: this.label,
                    value: b,
                    options: [],
                    index: b
                };
                da.push(F[b]);
                a("option", this).each(function(a) {
                    e = {
                        value: this.value,
                        text: this.text,
                        index: la ? a : k++,
                        group: b
                    };
                    K[this.value] = e;
                    z.push(e);
                    F[b].options.push(e);
                    this.disabled && aa.push(this.value)
                })
            }) : a("option", s).each(function(a) {
                e = {
                    value: this.value,
                    text: this.text,
                    index: a
                };
                K[this.value] = e;
                z.push(e);
                this.disabled && aa.push(this.value)
            });
            z.length && (ia = z[0].value);
            oa && (z = [], k = 0, a.each(F, function(b, c) {
                j = "__group" + b;
                e = {
                    text: c.text,
                    value: j,
                    group: b,
                    index: k++
                };
                K[j] = e;
                z.push(e);
                aa.push(e.value);
                a.each(c.options, function(a, b) {
                    b.index = k++;
                    z.push(b)
                })
            }))
        }

        function q(a, b, c, e, i, k, l) {
            var m = [],
                d = [],
                e = Math.max(0, (c[e] !== g ? c[e].index : 0) - B),
                f = Math.min(b.length - 1, e + 2 * B);
            if (n[i] !== e || H[i] !== f) {
                for (c = e; c <= f; c++) d.push(b[c].text), m.push(b[c].value);
                ma[i] = !0;
                j[i] = e;
                ca[i] = f;
                b = {
                    multiple: k,
                    values: d,
                    keys: m,
                    label: l
                };
                Y ? a[0][i] = b : a[i] = [b]
            } else ma[i] = !1
        }

        function U(a) {
            q(a, da, F, R, r, !1, m.groupLabel)
        }

        function l(a) {
            q(a, la ? F[R].options : z, K, L, C, E, w)
        }

        function v(c) {
            E && (c && b(c) && (c = c.split(",")), a.isArray(c) && (c = c[0]));
            L = c === g || null === c || "" === c || !K[c] ? ia : c;
            G && (na = R = K[L] ? K[L].group : null)
        }

        function X(a, b) {
            var c = a ? k._tempWheelArray : k._hasValue ? k._wheelArray : null;
            return c ? m.group && b ? c : c[C] : null
        }

        function T() {
            var a, b;
            a = [];
            var c = 0;
            if (E) {
                b = [];
                for (c in ea) a.push(K[c] ? K[c].text : ""), b.push(c);
                a = a.join(", ")
            } else b =
                L, a = K[L] ? K[L].text : "";
            k._tempValue = b;
            A.val(a);
            s.val(b)
        }

        function ha(a) {
            var b = a.attr("data-val"),
                c = a.hasClass("dw-msel");
            if (E && a.closest(".dwwl").hasClass("dwwms")) return a.hasClass("dw-v") && (c ? (a.removeClass(M).removeAttr("aria-selected"), delete ea[b]) : (a.addClass(M).attr("aria-selected", "true"), ea[b] = b)), !1;
            a.hasClass("dw-w-gr") && (x = a.attr("data-val"))
        }
        var fa, ia, R, da, ga, x, r, y, A, z, C, L, N, na, t, ma = {},
            n = {},
            H = {},
            j = {},
            ca = {},
            c = a.extend({}, k.settings),
            m = a.extend(k.settings, S, c),
            B = m.batch,
            c = m.layout || (/top|bottom/.test(m.display) ?
                "liquid" : ""),
            Y = "liquid" == c,
            s = a(this),
            E = m.multiple || s.prop("multiple"),
            ba = this.id + "_dummy";
        y = a('label[for="' + this.id + '"]').attr("for", ba);
        var w = m.label !== g ? m.label : y.length ? y.text() : s.attr("name"),
            M = "dw-msel mbsc-ic mbsc-ic-" + m.checkIcon,
            W = m.readonly,
            u = !!m.data,
            Q = u ? !!m.group : a("optgroup", s).length;
        y = m.group;
        var G = Q && y && !1 !== y.groupWheel,
            la = Q && y && G && !0 === y.clustered,
            oa = Q && (!y || !1 !== y.header && !la),
            i = s.val() || [],
            aa = [],
            ea = {},
            K = {},
            F = {};
        m.invalid.length || (m.invalid = aa);
        G ? (r = 0, C = 1) : (r = -1, C = 0);
        if (E) {
            s.prop("multiple",
                !0);
            i && b(i) && (i = i.split(","));
            for (y = 0; y < i.length; y++) ea[i[y]] = i[y]
        }
        o();
        v(s.val());
        a("#" + ba).remove();
        s.next().is("input.mbsc-control") ? A = s.off(".mbsc-form").next().removeAttr("tabindex") : (A = a('<input type="text" id="' + ba + '" class="' + m.inputClass + '" readonly />'), m.showInput && A.insertBefore(s));
        k.attachShow(A.attr("placeholder", m.placeholder || ""));
        s.addClass("dw-hsel").attr("tabindex", -1).closest(".ui-field-contain").trigger("create");
        T();
        k.setVal = function(a, c, g, i, j) {
            if (E) {
                a && b(a) && (a = a.split(","));
                ea = e.arrayToObject(a);
                a = a ? a[0] : null
            }
            k._setVal(a, c, g, i, j)
        };
        k.getVal = function(a, b) {
            return E ? e.objectToArray(ea) : X(a, b)
        };
        k.refresh = function() {
            o();
            n = {};
            H = {};
            var a = m,
                b = [
                    []
                ];
            G && U(b);
            l(b);
            a.wheels = b;
            n[r] = j[r];
            H[r] = ca[r];
            n[C] = j[C];
            H[C] = ca[C];
            fa = true;
            v(L);
            k._tempWheelArray = G ? [R, L] : [L];
            k._isVisible && k.changeWheel(G ? [r, C] : [C])
        };
        k.getValues = k.getVal;
        k.getValue = X;
        return {
            width: 50,
            layout: c,
            headerText: !1,
            anchor: A,
            confirmOnTap: G ? [!1, !0] : !0,
            formatValue: function(a) {
                var b, c = [];
                if (E) {
                    for (b in ea) c.push(K[b] ? K[b].text :
                        "");
                    return c.join(", ")
                }
                a = a[C];
                return K[a] ? K[a].text : ""
            },
            parseValue: function(a) {
                v(a === g ? s.val() : a);
                return G ? [R, L] : [L]
            },
            onValueTap: ha,
            onValueFill: T,
            onBeforeShow: function() {
                if (E && m.counter) m.headerText = function() {
                    var b = 0;
                    a.each(ea, function() {
                        b++
                    });
                    return b + " " + m.selectedText
                };
                v(s.val());
                if (G) k._tempWheelArray = [R, L];
                k.refresh()
            },
            onMarkupReady: function(b) {
                b.addClass("dw-select");
                a(".dwwl" + r, b).on("mousedown touchstart", function() {
                    clearTimeout(t)
                });
                a(".dwwl" + C, b).on("mousedown touchstart", function() {
                    ga ||
                    clearTimeout(t)
                });
                oa && a(".dwwl" + C, b).addClass("dw-select-gr");
                if (E) {
                    b.addClass("dwms");
                    a(".dwwl", b).on("keydown", function(b) {
                        if (b.keyCode == 32) {
                            b.preventDefault();
                            b.stopPropagation();
                            ha(a(".dw-sel", this))
                        }
                    }).eq(C).addClass("dwwms").attr("aria-multiselectable", "true");
                    N = a.extend({}, ea)
                }
            },
            validate: function(b, c, e, i) {
                var o, q = [];
                o = k.getArrayVal(true);
                var s = o[r],
                    u = o[C],
                    d = a(".dw-ul", b).eq(r),
                    f = a(".dw-ul", b).eq(C);
                n[r] > 1 && a(".dw-li", d).slice(0, 2).removeClass("dw-v").addClass("dw-fv");
                H[r] < da.length - 2 && a(".dw-li",
                    d).slice(-2).removeClass("dw-v").addClass("dw-fv");
                n[C] > 1 && a(".dw-li", f).slice(0, 2).removeClass("dw-v").addClass("dw-fv");
                H[C] < (la ? F[s].options : z).length - 2 && a(".dw-li", f).slice(-2).removeClass("dw-v").addClass("dw-fv");
                if (!fa) {
                    L = u;
                    if (G) {
                        R = K[L].group;
                        if (c === g || c === r) {
                            R = +o[r];
                            ga = false;
                            if (R !== na) {
                                L = F[R].options[0].value;
                                n[C] = null;
                                H[C] = null;
                                ga = true;
                                m.readonly = [false, true]
                            } else m.readonly = W
                        }
                    }
                    if (Q && (/__group/.test(L) || x)) {
                        u = L = F[K[x || L].group].options[0].value;
                        x = false
                    }
                    k._tempWheelArray = G ? [s, u] : [u];
                    if (G) {
                        U(m.wheels);
                        ma[r] && q.push(r)
                    }
                    l(m.wheels);
                    ma[C] && q.push(C);
                    clearTimeout(t);
                    t = setTimeout(function() {
                        if (q.length) {
                            fa = true;
                            ga = false;
                            na = R;
                            n[r] = j[r];
                            H[r] = ca[r];
                            n[C] = j[C];
                            H[C] = ca[C];
                            k._tempWheelArray = G ? [s, L] : [L];
                            k.changeWheel(q, 0, c !== g)
                        }
                        if (G) {
                            c === C && k.scroll(d, r, k.getValidCell(R, d, i, false, true).v, 0.1);
                            k._tempWheelArray[r] = R
                        }
                        m.readonly = W
                    }, c === g ? 100 : e * 1E3);
                    if (q.length) return ga ? false : true
                }
                if (c === g && E) {
                    o = ea;
                    e = 0;
                    a(".dwwl" + C + " .dw-li", b).removeClass(M).removeAttr("aria-selected");
                    for (e in o) a(".dwwl" + C + ' .dw-li[data-val="' +
                        o[e] + '"]', b).addClass(M).attr("aria-selected", "true")
                }
                oa && a('.dw-li[data-val^="__group"]', b).addClass("dw-w-gr");
                a.each(m.invalid, function(b, c) {
                    a('.dw-li[data-val="' + c + '"]', f).removeClass("dw-v dw-fv")
                });
                fa = false
            },
            onValidated: function() {
                L = k._tempWheelArray[C]
            },
            onClear: function(b) {
                ea = {};
                A.val("");
                a(".dwwl" + C + " .dw-li", b).removeClass(M).removeAttr("aria-selected")
            },
            onCancel: function() {
                !k.live && E && (ea = a.extend({}, N))
            },
            onDestroy: function() {
                A.hasClass("mbsc-control") || A.remove();
                s.removeClass("dw-hsel").removeAttr("tabindex")
            }
        }
    }
})(jQuery);
(function(a) {
    a.each(["date", "time", "datetime"], function(g, q) {
        a.mobiscroll.presetShort(q)
    })
})(jQuery);
(function(a) {
    var g, q, e, b = a.mobiscroll,
        S = b.themes;
    q = navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows|Windows Phone|MSIE/i);
    if (/Android/i.test(q)) {
        if (g = "android-holo", q = navigator.userAgent.match(/Android\s+([\d\.]+)/i)) q = q[0].replace("Android ", ""), g = 5 <= q.split(".")[0] ? "material" : 4 <= q.split(".")[0] ? "android-holo" : "android"
    } else if (/iPhone/i.test(q) || /iPad/i.test(q) || /iPod/i.test(q)) {
        if (g = "ios", q = navigator.userAgent.match(/OS\s+([\d\_]+)/i)) q = q[0].replace(/_/g, ".").replace("OS ", ""), g = "7" <=
        q ? "ios" : "ios-classic"
    } else if (/Windows/i.test(q) || /MSIE/i.test(q) || /Windows Phone/i.test(q)) g = "wp";
    a.each(S, function(k, o) {
        a.each(o, function(a, k) {
            if (k.baseTheme == g) return b.autoTheme = a, e = !0, !1;
            a == g && (b.autoTheme = a)
        });
        if (e) return !1
    })
})(jQuery);
(function(a) {
    a.mobiscroll.themes.frame["winphone-red"] = {
        baseTheme: "wp",
        minWidth: 76,
        height: 76,
        accent: "none",
        dateOrder: "mmMMddDDyy",
        headerText: !1,
        showLabel: !1,
        deleteIcon: "backspace4",
        icon: {
            filled: "star3",
            empty: "star"
        },
        btnWidth: !1,
        btnStartClass: "mbsc-ic mbsc-ic-play3",
        btnStopClass: "mbsc-ic mbsc-ic-pause2",
        btnResetClass: "mbsc-ic mbsc-ic-stop2",
        btnLapClass: "mbsc-ic mbsc-ic-loop2",
        btnHideClass: "mbsc-ic mbsc-ic-close",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
        btnPlusClass: "mbsc-ic mbsc-ic-plus",
        btnMinusClass: "mbsc-ic mbsc-ic-minus",
        onMarkupInserted: function(g, q) {
            var e, b, S;
            if ("clickpick" != q.settings.mode) a(".dwwl", g).on("touchstart mousedown wheel mousewheel", function(k) {
                "mousedown" === k.type && b || (b = "touchstart" === k.type, e = !0, S = a(this).hasClass("wpa"), a(".dwwl", g).removeClass("wpa"), a(this).addClass("wpa"))
            }).on("touchmove mousemove", function() {
                e = !1
            }).on("touchend mouseup", function(g) {
                e && S && a(g.target).closest(".dw-li").hasClass("dw-sel") && a(this).removeClass("wpa");
                "mouseup" === g.type && (b = !1);
                e = !1
            })
        },
        onThemeLoad: function(a, q) {
            if (a && a.dateOrder && !q.dateOrder) {
                var e = a.dateOrder,
                    e = e.match(/mm/i) ? e.replace(/mmMM|mm|MM/, "mmMM") : e.replace(/mM|m|M/, "mM"),
                    e = e.match(/dd/i) ? e.replace(/ddDD|dd|DD/, "ddDD") : e.replace(/dD|d|D/, "dD");
                q.dateOrder = e
            }
        },
        onInit: function(a) {
            a = a.buttons;
            a.set.icon = "checkmark";
            a.cancel.icon = "close";
            a.clear.icon = "close";
            a.ok && (a.ok.icon = "checkmark");
            a.close && (a.close.icon = "close");
            a.now && (a.now.icon = "loop2")
        }
    };
    a.mobiscroll.themes.listview["winphone-red"] = {
        baseTheme: "wp"
    };
    a.mobiscroll.themes.menustrip["winphone-red"] = {
        baseTheme: "wp"
    };
    a.mobiscroll.themes.form["winphone-red"] = {
        baseTheme: "wp"
    }
})(jQuery);
(function(a) {
    a.mobiscroll.themes.frame["my-red"] = {
        baseTheme: "mobiscroll",
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    };
    a.mobiscroll.themes.listview["my-red"] = {
        baseTheme: "mobiscroll"
    };
    a.mobiscroll.themes.menustrip["my-red"] = {
        baseTheme: "mobiscroll"
    };
    a.mobiscroll.themes.form["my-red"] = {
        baseTheme: "mobiscroll"
    }
})(jQuery);