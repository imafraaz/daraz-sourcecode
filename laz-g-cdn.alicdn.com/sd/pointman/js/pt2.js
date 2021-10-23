! function(e, t) {
    var n = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
        o = "_pointman_q",
        a = e[o] = e[o] || [];

    function r() {
        var t, n = a.length,
            o;
        for (t = 0; t < n; t++)(o = a.shift()) && o[0] && ("um" !== o[0] && "umx" !== o[0] || "function" != typeof o[1] ? a.push(o) : o[1](e.umx || e.um))
    }
    if (e.umx) r();
    else if (e.__pt2);
    else {
        e.__pt2 = 1,
            function(e, t) {
                var n = 1e4,
                    g_moduleConfig = {
                        uabModule: {
                            grey: ["AWSC/uab/1.140.0/collina.js"],
                            stable: ["AWSC/uab/1.140.0/collina.js"],
                            greyBr: ["AWSC-br/uab/1.140.0/collina.js"],
                            stableBr: ["AWSC-br/uab/1.140.0/collina.js"],
                            ratio: 10000,
                            greyConfig: {},
                            stableConfig: {}
                        },
                        fyModule: {
                            grey: ["AWSC/fireyejs/1.216.2/fireyejs.js"],
                            stable: ["AWSC/fireyejs/1.215.0/fireyejs.js"],
                            greyBr: ["AWSC-br/fireyejs/1.216.2/fireyejs.js"],
                            stableBr: ["AWSC-br/fireyejs/1.215.0/fireyejs.js"],
                            ratio: 9999,
                            greyConfig: {},
                            stableConfig: {}
                        },
                        nsModule: {
                            grey: ["js/nc/60.js"],
                            stable: ["js/nc/60.js"],
                            ratio: 1e4,
                            greyConfig: {},
                            stableConfig: {}
                        },
                        umidPCModule: {
                            grey: ["AWSC/WebUMID/1.88.4/um.js"],
                            stable: ["AWSC/WebUMID/1.88.4/um.js"],
                            greyBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
                            stableBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
                            ratio: 10000,
                            greyConfig: {},
                            stableConfig: {}
                        },
                        etModule: {
                            grey: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
                            stable: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
                            greyBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
                            stableBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
                            ratio: 10000,
                            greyConfig: {
                                "whitelist": ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
                            },
                            stableConfig: {
                                "whitelist": ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
                            }
                        },
                        ncModule: {
                            grey: ["AWSC/nc/1.85.0/nc.js"],
                            stable: ["AWSC/nc/1.85.0/nc.js"],
                            ratio: 10000,
                            greyConfig: {},
                            stableConfig: {}
                        }
                    },
                    o = [{
                        name: "umidPCModule",
                        features: ["umpc", "um", "umh5"],
                        depends: [],
                        sync: !1
                    }, {
                        name: "uabModule",
                        features: ["uab"],
                        depends: [],
                        sync: !1
                    }, {
                        name: "fyModule",
                        features: ["fy"],
                        depends: [],
                        sync: !1
                    }, {
                        name: "nsModule",
                        features: ["ns"],
                        depends: [],
                        sync: !1
                    }, {
                        name: "etModule",
                        features: ["et"],
                        depends: [],
                        sync: !1
                    }, {
                        name: "ncModule",
                        features: ["nc", "nvc", "ic"],
                        depends: ["fy"],
                        sync: !1
                    }],
                    a = navigator.userAgent,
                    r = a.match(/Chrome\/(\d*)/);
                r && (r = +r[1]);
                var i = a.match(/Edge\/([\d]*)/),
                    s = a.match(/Safari\/([\d]*)/),
                    u = a.match(/Firefox\/([\d]*)/),
                    c = a.match(/MSIE|Trident/);

                function d() {
                    var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
                    return "WebkitAppearance" in document.documentElement.style && escape(navigator.javaEnabled.toString()) === e
                }

                function l(t, n) {
                    var o = "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES";
                    if (e[o]) return e[o];
                    var a = {
                        normalAddresses: [],
                        brAddresses: []
                    };
                    for (var l in g_moduleConfig)
                        if (g_moduleConfig.hasOwnProperty(l) && l === t) {
                            var f = g_moduleConfig[l],
                                m = Math.ceil(1e4 * Math.random()) <= f.ratio;
                            a.normalAddresses = m ? f.grey.slice() : f.stable.slice(), f.stableBr && f.greyBr && (a.brAddresses = m ? f.greyBr.slice() : f.stableBr.slice()), "etModule" === t && (i || r ? (a.normalAddresses.pop(), a.brAddresses.pop()) : s || u || c ? (a.normalAddresses.shift(), a.brAddresses.shift()) : d() ? (a.normalAddresses.pop(), a.brAddresses.pop()) : (a.normalAddresses.shift(), a.brAddresses.shift()));
                            for (var g = 0; g < a.normalAddresses.length; g++) {
                                var p = n ? "https://" + n + "/" : A;
                                "https://assets.alicdn.com/" === p && (p += "g/"), a.normalAddresses[g] = p + a.normalAddresses[g], a.brAddresses[g] && (a.brAddresses[g] = p + a.brAddresses[g])
                            }
                            return a
                        }
                }
                var f = [],
                    m = "loading",
                    g = "loaded",
                    p = "timeout",
                    b = "unexpected",
                    h = "no such feature",
                    v = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
                    A = y(_());

                function y(e) {
                    var t = "https://g.alicdn.com/";
                    if (!e) return t;
                    if (/aliexpress/.test(location.href)) return "https://aeis.alicdn.com/";
                    var n = v.exec(e);
                    return n ? "https://" + n[3] + (n[4] ? ":" + n[4] : "") + "/" : t
                }

                function _() {
                    for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                        var n = e[t],
                            o = n.hasAttribute ? n.src : n.getAttribute("src", 4);
                        if (/\/awsc\.js/.test(o)) return o
                    }
                }

                function C(e) {
                    for (var t = void 0, n = 0; n < o.length; n++) {
                        for (var a = o[n], r = 0; r < a.features.length; r++)
                            if (a.features[r] === e) {
                                t = a;
                                break
                            }
                        if (t) break
                    }
                    return t
                }

                function w(e) {
                    for (var t = 0; t < f.length; t++) {
                        var n = f[t];
                        if (n.name === e) return n
                    }
                }

                function T(e) {
                    for (var t = void 0, n = 0; n < o.length; n++) {
                        var a = o[n];
                        if (a.name === e) {
                            t = a;
                            break
                        }
                        if (t) break
                    }
                    return t
                }

                function S(e, n, o) {
                    if (o)
                        for (var a = 0; a < e.normalAddresses.length; a++) {
                            var r = e.normalAddresses[a];
                            t.write("<script src=" + r + "><\/script>")
                        } else {
                            function i(e, o, a) {
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r],
                                        s = t.createElement("script");
                                    s.async = !1, s.src = i, s.id = n, s.onerror = o || function() {}, s.onload = a || function() {};
                                    var u = t.getElementsByTagName("script")[0];
                                    u && u.parentNode ? u.parentNode.insertBefore(s, u) : (u = t.body || t.head) && u.appendChild(s)
                                }
                            }
                            i(e.normalAddresses)
                        }
                }

                function k(t, n, o) {
                    var a = "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(n) + "&stack=" + encodeURIComponent(o),
                        r = new Image,
                        i = "_awsc_img_" + Math.floor(1e6 * Math.random());
                    e[i] = r, r.onload = r.onerror = function() {
                        try {
                            delete e[i]
                        } catch (t) {
                            e[i] = null
                        }
                    }, r.src = a
                }

                function j(e, t) {
                    Math.random() < 1e-4 && k("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
                    for (var n = void 0; n = e.callbacks.shift();) try {
                        if ("function" == typeof n) n(e.state, e.exportObj);
                        else if ("object" == typeof n) {
                            var o = e.exportObj;
                            o && "function" == typeof o.init && o.init(n)
                        }
                    } catch (n) {
                        if (t) throw n;
                        k(e.name, n.message, n.stack)
                    }
                }

                function W(e, t, n, o) {
                    var a = C(e);
                    if (!a) return "function" == typeof t && t("no such feature"), void 0;
                    var r = n && n.cdn,
                        i = n && n.sync,
                        s = n && n.timeout || 5e3;
                    if (0 !== a.depends.length)
                        for (var u = 0; u < a.depends.length; u++) {
                            var c = a.depends[u];
                            n && (delete n.sync, delete n.timeout, delete n.cdn), M(c, void 0, n)
                        }
                    var d = o || {};
                    d.module = a, d.name = e, d.state = "loading", d.callbacks = d.callbacks || [], d.options = n, t && d.callbacks.push(t), d.timeoutTimer = setTimeout((function() {
                        d.state = "timeout", j(d, n && n.throwExceptionInCallback)
                    }), s), o || f.push(d);
                    var m = a.sync,
                        g;
                    i && (m = i), S(l(a.name, r), "AWSC_" + a.name, m)
                }

                function M(e, t, n) {
                    var o = w(e);
                    if (o)
                        if ("timeout" === o.state) W(e, t, n, o);
                        else if ("loaded" === o.state) {
                        if ("function" == typeof t) t(o.state, o.exportObj);
                        else if ("object" == typeof t) {
                            var a = o.exportObj;
                            a && "function" == typeof a.init && a.init(t)
                        }
                    } else "loading" === o.state ? t && o.callbacks.push(t) : void 0;
                    else W(e, t, n)
                }

                function x(e, t, n) {
                    var o = !1;
                    try {
                        var a = T(e);
                        a, a.moduleLoadStatus = "loaded";
                        for (var r = void 0, i = 0; i < f.length; i++) {
                            var s = f[i];
                            s.module === a && s.name === t && (o = s.options && s.options.throwExceptionInCallback, r = s, clearTimeout(r.timeoutTimer), delete r.timeoutTimer, r.exportObj = n, ("loading" === s.state || "timeout" === s.state) && (r.state = "loaded", setTimeout((function() {
                                j(r, o)
                            }), 0)))
                        }
                        r || ((r = {}).module = a, r.name = t, r.state = "loaded", r.exportObj = n, r.callbacks = [], f.push(r))
                    } catch (e) {
                        if (o) throw e;
                        k("awsc_error", e.message, e.stack)
                    }
                }

                function E(e) {
                    function t(t, n, o, a) {
                        var r = location.protocol + "//" + location.host + location.pathname,
                            i = new e.AWSCFY;
                        e._umopt_npfp = 0;
                        var s = !1;
                        i.umidToken = "defaultToken1_um_not_loaded@@" + r + "@@" + (new Date).getTime(), e.AWSC.use("um", (function(e, t) {
                            "loaded" === e ? (i.umidToken = "defaultToken3_init_callback_not_called@@" + r + "@@" + (new Date).getTime(), t.init(n, (function(e, t) {
                                i.umidToken = "success" === e ? t.tn : "defaultToken4_init_failed with " + e + "@@" + r + "@@" + (new Date).getTime(), s = !0, d()
                            }))) : (i.umidToken = "defaultToken2_load_failed with " + e + "@@" + r + "@@" + (new Date).getTime(), s = !0, d())
                        }));
                        var u = !1;
                        if (i.getUA = function() {
                                return "defaultUA1_uab_not_loaded@@" + r + "@@" + (new Date).getTime()
                            }, e.AWSC.use("uab", (function(e, t) {
                                u = !0, "loaded" === e ? (i.uabModule = t, i.uabConfig = o, i.getUA = function() {
                                    return this.uabModule.getUA(this.uabConfig)
                                }) : i.getUA = function() {
                                    return "defaultUA2_load_failed with " + e + "@@" + r + "@@" + (new Date).getTime()
                                }, d()
                            })), null != t) var c = e.setTimeout((function() {
                            d(!0)
                        }), a || 2e3);

                        function d(n) {
                            null != t && (u && s || n) && (t(i), e.clearTimeout(c))
                        }
                        return null == t ? i : void 0
                    }
                    e.AWSCFY = function() {}, e.AWSC.configFY = function(e, n, o, a) {
                        return t(e, n, o, a)
                    }, e.AWSC.configFYSync = function(e, n) {
                        return t(null, e, n)
                    }
                }

                function U(e) {
                    var t = function() {};

                    function n(n, o, a) {
                        var r = (location.protocol + "//" + location.host + location.pathname).substr(0, 128),
                            i = new t;
                        if (a = a || 2e3, "function" == typeof n) var s = e.setTimeout((function() {
                            u()
                        }), a);

                        function u() {
                            "function" == typeof n && (n(i), e.clearTimeout(s))
                        }
                        return i.getFYToken = i.getUidToken = function() {
                            return "defaultFY1_fyjs_not_loaded@@" + r + "@@" + (new Date).getTime()
                        }, e.fyglobalopt = o, e.AWSC.use("fy", (function(e, t) {
                            "loaded" === e ? (i.getFYToken = i.getUidToken = function() {
                                return "defaultFY3_fyjs_not_initialized@@" + r + "@@" + (new Date).getTime()
                            }, i.fyObj = t, t.init(o, (function(e) {
                                i.getFYToken = function() {
                                    return this.fyObj.getFYToken(o)
                                }, i.getUidToken = function() {
                                    return this.fyObj.getUidToken(o)
                                }, u()
                            }))) : (i.getFYToken = i.getUidToken = function() {
                                return "defaultFY2_load_failed with " + e + "@@" + r + "@@" + (new Date).getTime()
                            }, u())
                        })), "function" == typeof n ? void 0 : i
                    }
                    e.AWSC.configFYEx = function(e, t, o) {
                        return n(e, t, o)
                    }, e.AWSC.configFYSyncEx = function(e) {
                        return n(null, e)
                    }
                }

                function F(e) {
                    var t = g_moduleConfig.etModule,
                        n, o = Math.ceil(1e4 * Math.random()) <= t.ratio ? t.greyConfig.whitelist : t.stableConfig.whitelist,
                        a;
                    new RegExp(("^" + o.join("$|^") + "$").replace(/\*/g, ".*")).test(location.host + location.pathname) && (window.etrprtrt = .01, e.AWSC.use("et"))
                }

                function Y(e) {
                    e.AWSC || (e.AWSC = {}, e.AWSC.use = M, e.AWSCInner = {}, e.AWSCInner.register = x, E(e), U(e), F(e))
                }
                Y(e)
            }(window, document);
        var i, s = u(d(c()));
        e.AWSC.use("um", (function(e, t) {
            r()
        }), {
            cdn: s.substr(2)
        })
    }

    function u(e) {
        var t = "//g.alicdn.com";
        if (!e) return t;
        if (/aliexpress/.test(location.href)) return "//aeis.alicdn.com";
        var o = n.exec(e);
        return o ? "//" + o[3] + (o[4] ? ":" + o[4] : "") : t
    }

    function c() {
        for (var e = t.getElementsByTagName("script"), n = /sd\/pointman\/js\/pt\d?\.js/, o, a = 0; a < e.length; a++)
            if (o = d(e[a]), n.test(o)) return e[a];
        return t.currentScript ? t.currentScript : e[e.length - 1]
    }

    function d(e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }
}(window, document);