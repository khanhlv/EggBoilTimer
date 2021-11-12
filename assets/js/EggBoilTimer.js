! function() {
    var e, t = {
            9650: function() {
                window.addEventListener("DOMContentLoaded", (function() {
                    var e = 400,
                        t = 400,
                        n = "egg-timer-bg",
                        r = "egg-timer-canvas",
                        o = document.getElementById("egg-timer-bg-small"),
                        i = document.getElementById("egg-timer-canvas-small"),
                        l = document.getElementById(n),
                        c = document.getElementById(r);
                    window.innerWidth < 500 && (e = 300, t = 300, o.style.display = "block", i.style.display = "block", l.style.display = "none", c.style.display = "none", n = "egg-timer-bg-small", r = "egg-timer-canvas-small");
                    var a, u = !1,
                        s = new Audio("assets/sound/egg-timer-sound.mp3");
                    ! function() {
                        var r = document.getElementById(n).getContext("2d"),
                            o = new Image;
                        o.width = toString(e), o.height = toString(t), o.onload = function() {
                            r.drawImage(o, 0, 0, t, e)
                        }, o.src = "assets/img/timer.png"
                    }();
                    var d = document.getElementById(r),
                        g = d.getContext("2d");
                    v();

                    function f() {
                        g.clearRect(0, 0, d.width, d.height)
                    }

                    function m(n) {
                        g.translate(t / 2, e / 2), g.rotate(n * (Math.PI / 180)), g.translate(-t / 2, -e / 2)
                    }

                    function v(n) {
                        f(), n && n > 10 && (g.save(), g.beginPath(), g.setTransform(1, 0, 0, 1, 0, 0), g.translate(t / 2, e / 2), g.arc(0, 0, .282 * t, -.5 * Math.PI, (n + -90) * (Math.PI / 180)), g.lineTo(0, 0), g.globalAlpha = .5, g.fillStyle = "#2c3e50", g.fill(), g.closePath(), g.restore());
                        g.save(), g.beginPath(), g.translate(t / 2, e / 2), g.moveTo(0, .16 * e), g.lineTo(0, .1 * -e), g.lineWidth = .095 * t, g.lineCap = "round", g.strokeStyle = "#2c3e50", g.stroke(), g.closePath(), g.restore(), g.save(), g.beginPath(), g.translate(t / 2, .31 * e), g.moveTo(-.035 * t, 0), g.lineTo(0, -.07 * t), g.lineTo(.035 * t, 0), g.lineTo(-.035 * t, 0), g.fillStyle = "#f1c40f", g.fill(), g.strokeStyle = "#2c3e50", g.stroke(), g.closePath(), g.restore()
                    }

                    function h(e) {
                        return e / 3600 * 360
                    }

                    function y(n, r) {
						s.pause();
						s.currentTime = 0;
                        if (!u) {
                            u = !0, g.setTransform(1, 0, 0, 1, 0, 0);
                            var o = 60 * n + r,
                                i = h(o);
                            m(i), v(i);
                            var l = new Date;
                            a = setInterval((function() {
                                var n = (new Date - l) / 1e3;
                                n > o ? (clearInterval(a), g.setTransform(1, 0, 0, 1, 0, 0), v(), s.play(), function(n) {
                                    g.setTransform(1, 0, 0, 1, 0, 0), g.save(), g.translate(0, .25 * e), g.rect(0, 0, t, .5 * e), g.globalAlpha = .8, g.fillStyle = "white", g.fill();
                                    var r = .0875 * t;
                                    g.fillStyle = "black", g.textAlign = "center", g.textBaseline = "middle", g.font = "bold " + r + "px Arial", g.fillText(n, t / 2, .25 * e), g.restore()
                                }("Your eggs are ready!"), d.addEventListener("click", p)) : (g.setTransform(1, 0, 0, 1, 0, 0), m(i = h(o - n)), v(i))
                            }), 1e3)
                        }
                    }

                    function p() {
                        b()
                    }

                    function b() {
                        g.setTransform(1, 0, 0, 1, 0, 0), clearInterval(a), s.pause(), s.currentTime = 0, f(), v(), d.removeEventListener("click", p), u = !1
                    }

                    function k(e) {
                        document.querySelector('input[name="egg-choice"]:checked').checked = !1, e.querySelector('input[type="radio"]').checked = !0, document.querySelectorAll(".egg-option").forEach((function(e) {
                            e.style.background = ""
                        }));
                        var t = document.querySelector(".selected-egg-option");
                        t && t.parentNode.removeChild(t), e.style.background = "#f5f5f5", e.insertAdjacentHTML("beforeend", '<div class="selected-egg-option"><img src="assets/img/checkmark.png">Chọn</div>')
                    }
                    document.getElementById("egg-choice-btn").addEventListener("click", (function() {
						s.play();
                        y(document.querySelector('input[name="egg-choice"]:checked').value, null)
                    })), document.getElementById("egg-reset-btn").addEventListener("click", (function() {
                        b()
                    })), document.querySelectorAll(".egg-option").forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            k(e.currentTarget)
                        }))
                    })), k(document.querySelector('input[name="egg-choice"]:checked').parentElement)
                }))
            },
            1183: function() {},
            145: function() {}
        },
        n = {};

    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = n[e] = {
            exports: {}
        };
        return t[e](i, i.exports, r), i.exports
    }
    r.m = t, e = [], r.O = function(t, n, o, i) {
            if (!n) {
                var l = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    n = e[s][0], o = e[s][1], i = e[s][2];
                    for (var c = !0, a = 0; a < n.length; a++)(!1 & i || l >= i) && Object.keys(r.O).every((function(e) {
                        return r.O[e](n[a])
                    })) ? n.splice(a--, 1) : (c = !1, i < l && (l = i));
                    if (c) {
                        e.splice(s--, 1);
                        var u = o();
                        void 0 !== u && (t = u)
                    }
                }
                return t
            }
            i = i || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
            e[s] = [n, o, i]
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {
                139: 0,
                449: 0,
                33: 0
            };
            r.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, n) {
                    var o, i, l = n[0],
                        c = n[1],
                        a = n[2],
                        u = 0;
                    if (l.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in c) r.o(c, o) && (r.m[o] = c[o]);
                        if (a) var s = a(r)
                    }
                    for (t && t(n); u < l.length; u++) i = l[u], r.o(e, i) && e[i] && e[i][0](), e[l[u]] = 0;
                    return r.O(s)
                },
                n = self.webpackChunk = self.webpackChunk || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }(), r.O(void 0, [449, 33], (function() {
            return r(9650)
        })), r.O(void 0, [449, 33], (function() {
            return r(1183)
        }));
    var o = r.O(void 0, [449, 33], (function() {
        return r(145)
    }));
    o = r.O(o)
}();