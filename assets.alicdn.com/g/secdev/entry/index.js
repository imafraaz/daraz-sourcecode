(function(d, m, e, a, t, n, r) {
    if (d.__sec_entry_loaded || m.__no_sec_entry) {
        return
    }
    d.__sec_entry_loaded = true;
    var i = a.userAgent;
    var o = r("%58%75%65%58%69");
    var c = o.toLowerCase();
    if (i.indexOf(o) >= 0 || t.host.indexOf(c) >= 0 || top !== self && m.referrer.indexOf(c) >= 0) {
        return
    }
    var s = m.getElementsByTagName("head")[0];

    function p(e) {
        var a = m.createElement("script");
        a.src = e;
        return s.appendChild(a)
    }
    var l = "//g.alicdn.com";
    var f = self.goldlog;
    if (f && f.getCdnPath) {
        l = f.getCdnPath()
    }
    if (/lazada\./.test(t.host)) {
        l = "//laz-g-cdn.alicdn.com"
    }
    l += "/secdev/";
    var u = i.match(/Chrome\/(\d*)/);
    if (u) {
        u = +u[1]
    }
    if (!m._sufei_data2) {
        var v = "3.9.9";
        var h = p(l + "sufei_data/" + v + "/index.js");
        h.async = m.cookie.indexOf("isg=") < 0;
        h.id = "aplus-sufei"
    }

    function y(e, a) {
        var t = [];
        for (var r in e) {
            t.push(r + "=" + n(e[r]))
        }(new Image).src = a + t.join("&")
    }
    var _ = .001;
    if (e() < _) {
        m._linkstat_sample = _;
        p(l + "linkstat/index.js?v=1201")
    }
    d.nsrprtrt = 1e-4;
    var g = 0;
    var k = ["taobao", "alibaba.com", "alipay.com", "tmall.com", "lazada", "aliexpress", "1688.com", "alimama.com", "tb.cn", "xiami.com", "amap.com", "cainiao.com", "aliyun.com", "etao.com", "fliggy.com", "liangxinyao.com", "damai.cn", "daraz", "tmall.hk", "jiyoujia.com", "taopiaopiao.com", "alitrip.com", "fliggy.hk", "alihealth.cn", "alitrip.hk", "ele.me", "gaode", "mp.dfkhgj.com", "mp.bcvbw.com", "m.dfkhgj.com", "pailitao.com", "youku.com", "jiaoyimao", "sm.cn", "dingtalk.com", "alibaba-inc", "guoguo-app", "kaola", "alicdn", "soku"];
    for (var b = 0; b < k.length; b++) {
        if (~t.host.indexOf(k[b])) {
            g = 1;
            break
        }
    }
    if (g) {
        var j = ["1.0.78", "e", 88];
        var x = ["1.0.85", "f", 94];
        var w = 0;
        var M = j;
        if (t.host == "sycm.taobao.com" || t.host == "liveplatform.taobao.com") {
            d.nslog = .01;
            w = 1e4
        }
        if ((e() * 1e4 | 0) < w) {
            M = x
        }
        if (!M) {
            return
        }
        var E = l;
        var C = true;
        if (t.hostname.indexOf("buyertrade.taobao.com") > -1 || /refund2\.taobao\.com$|refund2\.tmall\.com$/.test(t.hostname) && t.pathname === "/dispute/apply.htm") {
            if (!C) {
                E = E.replace("/secdev/", "??xlly/spl/index.js,secdev/")
            } else {
                E = E.replace("/secdev/", "??xlly/spl/index.js,xlly/spl/rp.js,secdev/")
            }
        } else if (C) {
            E = E.replace("/secdev/", "??xlly/spl/rp.js,secdev/")
        }
        var L = E + "nsv/" + M[0] + "/";
        var O = L + "ns_" + M[1] + "_" + M[2] + "_3_f.js?v=1";
        var S = L + "ns_" + M[1] + "_" + M[2] + "_3_n.js?v=1";

        function I() {
            var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
            if ("WebkitAppearance" in m.documentElement.style) {
                if (escape(a.javaEnabled.toString()) === e) {
                    return true
                }
            }
            return false
        }
        var T = i.match(/Edge\/([\d]*)/);
        var A = i.match(/Safari\/([\d]*)/);
        var D = i.match(/Firefox\/([\d]*)/);
        var B = i.match(/MSIE|Trident/);
        if (T) {
            p(O)
        } else if (u) {
            p(O)
        } else if (A || D || B) {
            p(S)
        } else {
            if (I()) {
                p(O)
            } else {
                p(S)
            }
        }
    } else {
        p(l.replace("/secdev/", "/xlly/spl/rp.js"))
    }

    function H() {
        var e = d.atob;
        if (!e) {
            return
        }
        var a = 0;
        var t = "";

        function r() {
            if (++a == 3) {
                clearInterval(l)
            }
            o()
        }
        var n;
        var i = Math.random() * 1e8 | 0;

        function o() {
            var e = n.getUA({
                MaxMTLog: 500,
                MTInterval: 3
            });
            e = i + "|" + e;
            var a = {
                token: e,
                cna: t,
                ext: 7
            };
            y(a, "https://fourier.taobao.com/ts?")
        }
        var c = +localStorage._xlly;
        if (!c && /xlly=1/.test(m.cookie)) {
            c = +new Date;
            localStorage._xlly = c
        }
        if (c) {
            var s = new Date - c;
            if (s > 1e3 * 3600 * 24) {
                s = 0;
                delete localStorage._xlly
            }
            if (s < 1e3 * 60 * 20) {
                var l = setInterval(r, 1e3 * 60);
                if (d.addEventListener) {
                    d.addEventListener("unload", o)
                }
                var f = m.cookie.match(/cna=([^;]+)/);
                if (f) {
                    t = f[1]
                }
                var u = p(e("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));
                var v = unescape("%75%61%62");
                u.onload = function() {
                    d.AWSC && AWSC.use(v, function(e, a) {
                        if (e === "loaded") {
                            n = a
                        }
                    })
                }
            }
        }
    }
    try {
        H()
    } catch (e) {}
    try {
        d.etrprtrt = .01;
        var P = 0;
        for (var b = 0; b < k.length; b++) {
            if (t.host && ~t.host.indexOf(k[b])) {
                P = 1;
                break
            }
        }
        if (P) {
            if (Math.random() < .01) {
                function R(a) {
                    try {
                        a = (a || "url").split("?")[0].substr(0, 128);
                        if (d.__awsc_et__) {
                            if (Math.random() < .1) {
                                y({}, "https://acjs.aliyun.com/error?v=entry_hk2&e=loaded&tm=0" + "&u=" + a)
                            }
                        } else {
                            var t = +new Date;
                            var r = setInterval(function() {
                                var e = +new Date - t;
                                if (d.__awsc_et__ || e > 2e3) {
                                    y({}, "https://acjs.aliyun.com/error?v=entry_hk2&e=wait&tm=" + e + "&u=" + a);
                                    clearInterval(r)
                                }
                            }, 50)
                        }
                    } catch (e) {
                        y({}, "https://acjs.aliyun.com/error?v=entry_hk2_error&e=" + n(e.message) + "&stack=" + n(e.stack))
                    }
                }

                function N(e, a, t) {
                    switch (t.length) {
                        case 0:
                            return a();
                        case 1:
                            return a(t[0]);
                        case 2:
                            return a(t[0], t[1]);
                        default:
                            return a(t[0], t[2], t[3])
                    }
                }

                function W(e, a) {
                    switch (a.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(a[0]);
                        case 2:
                            return new e(a[0], a[1]);
                        default:
                            return new e(a[0], a[2], a[3])
                    }
                }

                function z(e, r, n) {
                    return function() {
                        var a = arguments;
                        var t;
                        try {
                            t = r.call(this, a, e)
                        } catch (e) {
                            t = a
                        }
                        if (t) {
                            if (t === -1) {
                                return
                            }
                            a = t
                        }
                        if (n) {
                            return W(e, a)
                        }
                        return "apply" in e ? e.apply(this, a) : N(this, e, a)
                    }
                }

                function X(e, a, t) {
                    if (!e) {
                        return false
                    }
                    var r = e[a];
                    if (!r) {
                        return false
                    }
                    e[a] = z(r, t, false);
                    return true
                }

                function F(e, a, t) {
                    if (!e) {
                        return false
                    }
                    var r = e[a];
                    if (!r) {
                        return false
                    }
                    e[a] = z(r, t, true);
                    return true
                }

                function U(e, a, t) {
                    var r = Object.getOwnPropertyDescriptor;
                    if (!r) {
                        return false
                    }
                    var n = r(e, a);
                    if (!n || !n.set) {
                        return false
                    }
                    n.set = z(n.set, t, false);
                    if (!self.addEventListener) {
                        n.get = function(e) {
                            return function() {
                                return e.call(this)
                            }
                        }(n.get)
                    }
                    Object.defineProperty(e, a, n);
                    return true
                }
                try {
                    var $ = "__entry_url";

                    function q(e) {
                        var a = X(e, "open", function(e) {
                            var a = e[1];
                            this[$] = a
                        });
                        var t = X(e, "send", function(e) {
                            var a = this[$];
                            R(a)
                        });
                        return a && t
                    }

                    function Q() {
                        F(self, "XMLHttpRequest", function() {
                            R("")
                        })
                    }

                    function V() {
                        var t = /XMLHTTP/i;
                        F(self, "ActiveXObject", function(e) {
                            var a = e[0];
                            if (a && t.test(a)) {
                                R("")
                            }
                        })
                    }
                    var G = self["XMLHttpRequest"];
                    if (G) {
                        var J = G.prototype;
                        if (J && q(J)) {} else {
                            Q()
                        }
                    }
                    V()
                } catch (e) {
                    y({}, "https://acjs.aliyun.com/error?v=entry_hk_error&e=" + n(e.message) + "&stack=" + n(e.stack))
                }
                try {
                    function K() {
                        var e = self["HTMLScriptElement"];
                        if (!e) {
                            return false
                        }
                        var a = e.prototype;
                        X(a, "setAttribute", function(e) {
                            var a = e[0],
                                t = e[1];
                            if (/^src$/i.test(a)) {
                                ee(t)
                            }
                        });
                        return U(a, "src", function(e) {
                            var a = e[0];
                            ee(a)
                        })
                    }

                    function Y(e) {
                        var a = self["Element"];
                        if (a) {
                            X(a.prototype, e, Z)
                        } else {
                            X(m.getElementsByTagName("head")[0], e, Z);
                            X(m.body, e, Z)
                        }
                    }

                    function Z(e) {
                        var a = e[0];
                        if (a && a.tagName === "SCRIPT") {
                            ee(a.src)
                        }
                    }

                    function ee(e) {
                        e += "";
                        if (/callback=/.test(e)) {
                            R(e)
                        }
                    }
                    if (!K()) {
                        Y("insertBefore");
                        Y("appendChild")
                    }
                } catch (e) {
                    y({}, "https://acjs.aliyun.com/error?v=entry_hk_error&e=" + n(e.message) + "&stack=" + n(e.stack))
                }
            }
            var ae = "1.61.1";
            var te = "1.62.1";
            var re = 1;
            var ne = ae;
            if (Math.random() < re) {
                ne = te
            }
            if (!ne) {
                return
            }
            var ie = "//g.alicdn.com/AWSC/et/" + ne + "/";
            var oe = ie + "et_f.js";
            var ce = ie + "et_n.js";
            if (T) {
                p(oe)
            } else if (u) {
                p(oe)
            } else if (A || D || B) {
                p(ce)
            } else {
                if (I()) {
                    p(oe)
                } else {
                    p(ce)
                }
            }
        }
    } catch (e) {}
})(window, document, Math.random, navigator, location, encodeURIComponent, decodeURIComponent);