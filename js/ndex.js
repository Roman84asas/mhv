!function (t) {
    "use strict";

    function e(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    t.fn.hasAttr = function (t) {
        return void 0 !== this.attr(t)
    };
    var a = function (t, e, a, o, i) {
        if (o = void 0 !== o ? o : 0, i = void 0 !== i ? i : 0, 0 != t) {
            var n = Math.pow(1 + t, e);
            return -t * (o + n * a) / ((-1 + n) * (1 + t * i))
        }
        return 0 != e ? -(o + a) / e : 0
    }, o = {
        init: function () {
            this.okHeader(), this.checkInputsForValue(), this.nrOnlyInputs(), this.slickInit(), this.toggles(), this.selectBoxes(), this.tabs(), this.stickyElements(), this.okeyMaps(), this.embededIframes(), t(".ok-financing-calculator-box").length && this.financingCalculator(), this.fbInit(), this.wpToggles(), this.newHeroSection(), this.widgetRequestCall(), this.widgetSocial(), this.propertyPriceSubscribe()
        }, okHeader: function () {
            t(".header-top-bar .form-submit").on("click", function (e) {
                t(window).width() < 1451 && 0 == t(".header-top-bar .form-input")[0].value.length && (e.preventDefault(), t(".header-top-bar").toggleClass("search-form-visible"))
            }), t(".ok-main-nav-toggle").on("click", function () {
                return t(".ok-main-nav").toggleClass("visible"), !1
            }), t(document).on("click", function (e) {
                t(e.target).is(".ok-main-nav") || t(e.target).closest(".ok-main-nav").length || t(".ok-main-nav").removeClass("visible")
            }), t(".ok-main-nav .close-main-nav").on("click", function () {
                t(".ok-main-nav").removeClass("visible")
            }), t(".ok-main-nav .menu-item-has-children > a").on("click", function (e) {
                t(window).width() > 991 || (e.preventDefault(), t(this).parent().toggleClass("open"), t(this).next("ul").slideToggle(200))
            })
        }, checkInputsForValue: function () {
            t(document).on("focusout", ".check-value, .wpcf7-text, .wpcf7-textarea", function () {
                var e = t(this).val();
                "" === e || "" === e.replace(/^\s+|\s+$/g, "") ? t(this).removeClass("has-value") : t(this).addClass("has-value")
            }), t('input[type="file"]').each(function () {
                var e = t(this);
                e.on("change", function () {
                    e.closest("label").find("span.file-upload-placeholder").text(this.files[0].name).addClass("has-value")
                })
            })
        }, nrOnlyInputs: function () {
            t(".nr-only").keypress(function (t) {
                if (8 !== t.which && 0 !== t.which && (t.which < 48 || t.which > 57)) return !1
            })
        }, slickInitElement: function (e, a, o) {
            var i = a, n = e;
            "carousel" == o ? i.slick({
                focusOnSelect: !!n.hasAttr("data-focus-on-select") && n.data("focus-on-select"),
                speed: n.hasAttr("data-speed") ? n.data("speed") : 250,
                slidesToShow: n.hasAttr("data-items-desktop") ? n.data("items-desktop") : 4,
                arrows: !n.hasAttr("data-arrows") || n.data("arrows"),
                dots: !n.hasAttr("data-dots") || n.data("dots"),
                infinite: !!n.hasAttr("data-infinite") && n.data("infinite"),
                slidesToScroll: n.hasAttr("data-items-to-slide") ? n.data("items-to-slide") : 1,
                initialSlide: n.hasAttr("data-start") ? n.data("start") : 0,
                asNavFor: n.hasAttr("data-as-nav-for") ? n.data("as-nav-for") : "",
                centerMode: !!n.hasAttr("data-center-mode") && n.data("center-mode"),
                vertical: !!n.hasAttr("data-vertical") && n.data("vertical"),
                adaptiveHeight: !0,
                swipe: !n.hasAttr("data-swipe") || n.data("swipe"),
                responsive: [{
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: n.hasAttr("data-items-small-desktop") ? n.data("items-small-desktop") : 3,
                        slidesToScroll: n.hasAttr("data-items-small-desktop") ? n.data("items-small-desktop") : 3
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: n.hasAttr("data-items-tablet") ? n.data("items-tablet") : 2,
                        slidesToScroll: n.hasAttr("data-items-tablet") ? n.data("items-tablet") : 2
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: n.hasAttr("data-items-phone") ? n.data("items-phone") : 2,
                        slidesToScroll: n.hasAttr("data-items-phone") ? n.data("items-phone") : 2
                    }
                }]
            }) : "slider" == o && i.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: !!n.hasAttr("data-focus-on-select") && n.data("focus-on-select"),
                autoplay: !!n.hasAttr("data-autoplay") && n.data("autoplay"),
                autoplaySpeed: n.hasAttr("data-autoplay-speed") ? n.data("autoplay-speed") : 2e3,
                pauseOnHover: !n.hasAttr("data-pause-on-hover") || n.data("pause-on-hover"),
                fade: !!n.hasAttr("data-fade") && n.data("fade"),
                dots: !n.hasAttr("data-dots") || n.data("dots"),
                speed: n.hasAttr("data-speed") ? n.data("speed") : 250,
                arrows: !n.hasAttr("data-arrows") || n.data("arrows"),
                infinite: !!n.hasAttr("data-infinite") && n.data("infinite"),
                initialSlide: n.hasAttr("data-start") ? n.data("start") : 0,
                asNavFor: n.hasAttr("data-as-nav-for") ? n.data("as-nav-for") : "",
                prevArrow: n.hasAttr("data-prev") ? t(n.data("prev")) : '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: n.hasAttr("data-next") ? t(n.data("next")) : '<button type="button" class="slick-next">Next</button>',
                adaptiveHeight: !0,
                lazyLoad: "ondemand"
            })
        }, slickInit: function () {
            var e = t(".ok-carousel"), a = t(".ok-slider");
            e.each(function () {
                var e = t(this), a = e.find(".carousel-items");
                o.slickInitElement(e, a, "carousel")
            }), a.each(function () {
                var e = t(this), a = e.find(".slides-list");
                o.slickInitElement(e, a, "slider")
            }), t(".single-property-wrapper .property-cover img").on("click", function () {
                t(window).width() <= 767 && t(".single-property-wrapper .property-cover .slick-slider").slick("slickNext")
            })
        }, toggles: function () {
            t(".scroll-top-btn").on("click", function () {
                t("html, body").animate({scrollTop: 0}, 750, "swing")
            }), t(".widget-filters-box .box-title, .collapse-box .box-title").on("click", function () {
                if (!(t(window).width() > 767)) {
                    var e = t(this);
                    e.parent().toggleClass("open"), e.next().slideToggle(200)
                }
            }), t(".property-description-list .extend-list-toggle").on("click", function () {
                t(this).parent().toggleClass("expanded")
            }), t(".add-to-favorites-toggle").on("click", function () {
                t(this).toggleClass("added-to-favorites")
            }), t(".add-property-trigger, .get-call-trigger, .btn-submit-testimonial, .client-price-offer a.desktop").on("click", function (e) {
                if (t(window).width() > 767) {
                    e.preventDefault();
                    var a = t(this).data("open");
                    t("html").addClass("popup-visible"), t(".ok-page-popup").removeClass("content-get-call content-add-property content-add-testimonial content-offer-price content-price-subscribe").addClass("ok-popup-visible " + a)
                }
            }), t(".client-price-offer .subscribe").on("click", function (e) {
                e.preventDefault();
                var a = t(this).data("current-price"), o = t(this).data("object-id"),
                    i = t('form.price-subscribe [name="subscribe_id"]'),
                    n = t('form.price-subscribe [name="subscribe_current_price"]');
                i.length && n.length && (n[0].setAttribute("value", a), i[0].setAttribute("value", o), t("form.price-subscribe .content").show(), t("form.price-subscribe .error").hide(), t("form.price-subscribe .success").hide(), t("html").addClass("popup-visible"), t(".ok-page-popup").removeClass("content-get-call content-add-property content-add-testimonial content-offer-price").addClass("ok-popup-visible content-price-subscribe"))
            }), t(".ok-page-popup .close-popup").on("click", function () {
                t(".ok-page-popup").removeClass("ok-popup-visible content-offer-price content-get-call content-add-property content-add-testimonial"), t("html").removeClass("popup-visible")
            }), t(".ok-page-popup .popup-inner").on("click", function (e) {
                var a = t(e.target);
                a.is(".popup-content-wrapper") || a.closest(".popup-content-wrapper").length || (t(".ok-page-popup").removeClass("ok-popup-visible content-get-call content-add-property content-add-testimonial"), t("html").removeClass("popup-visible"))
            }), t(".ok-contact-form .rating-item").on("click", function () {
                var e = t(this), a = e.index() + 1, o = e.closest(".ratings-box"), i = o.find('input[type="number"]');
                o.find(".rating-items")[0].setAttribute("data-stars", a), i[0].setAttribute("value", a)
            }), t(".btn-sent-testimonial").on("click", function (e) {
                e.preventDefault(), t(".agent-section-body .tabs-option").removeClass("current"), t('.agent-section-body .tabs-option[data-link="agent-testimonials"]').addClass("current"), t(".agent-section-body .tabs-item").removeClass("open"), t('.agent-section-body .tabs-item[data-id="agent-testimonials"]').addClass("open"), t("html, body").animate({scrollTop: t(".ok-tabs").offset().top - 40}, 600, "swing"), t(".ok-contact-form.testimonials-form .input-line").eq(0).find(".form-input").focus()
            }), t(".agent-rating-meta .rating-items i").on("click", function () {
                var e = t(this), a = e.index() + 1;
                e.closest(".rating-items")[0].setAttribute("data-stars", a), t(".agent-section-body .tabs-option").removeClass("current"), t('.agent-section-body .tabs-option[data-link="agent-testimonials"]').addClass("current"), t(".agent-section-body .tabs-item").removeClass("open"), t('.agent-section-body .tabs-item[data-id="agent-testimonials"]').addClass("open"), t("html, body").animate({scrollTop: t(".ok-tabs").offset().top - 40}, 600, "swing"), t(".ok-contact-form.testimonials-form .input-line").eq(0).find(".form-input").focus(), t('.ok-contact-form.testimonials-form .ratings-box [name="testimonial-rating"]').val(a), t(".ok-contact-form.testimonials-form .ratings-box .rating-items")[0].setAttribute("data-stars", a)
            }), t('.ok-sidebar input[type="checkbox"]').on("change", function () {
                var e = t(this).closest(".widget-filters-box").find(".checkbox-group-values")[0],
                    a = this.getAttribute("value");
                e && (e.getAttribute("value").indexOf(a) < 0 ? e.getAttribute("value").length > 0 ? e.setAttribute("value", e.getAttribute("value") + "+" + a) : e.setAttribute("value", a) : e.setAttribute("value", e.getAttribute("value").replace(a, "")), e.setAttribute("value", function (t) {
                    var e = t;
                    "+" === e[0] && e.replace(e[0], ""), "+" === e[e.length - 1] && e.replace(e[e.length - 1], "");
                    for (var a = 0; a < e.length; a++) "+" == e[a] && "+" == e[a + 1] && e.replace(e[a], "");
                    return e
                }(e.getAttribute("value"))));
                var o = t('.ok-sidebar input[type="checkbox"][value="spatiu"]');
                o.length && (o[0].checked ? t(".commercial-destination").show() : t(".commercial-destination").hide());
                var i = t('.ok-sidebar input[type="checkbox"][value="vanzare"]');
                i.length && (i[0].checked ? t(".prima_casa_filter-box").show() : t(".prima_casa_filter-box").hide())
            }), t('.prima_casa_filter-box input[type="checkbox"], .mobile-prima_casa-checkbox').on("change", function () {
                var e = t(this)[0];
                e.checked ? e.setAttribute("value", "prima_casa") : e.setAttribute("value", "")
            }), window.location.search.indexOf("for=vanzare") >= 0 && t(".prima_casa_filter-box").show(), t(".ok-single-complex-section .read-more-toggle").on("click", function () {
                t(".ok-single-complex-section .complex-body").toggleClass("extended")
            }), t(".hiring-box-toggle").on("click", function () {
                t(this).parent().toggleClass("extended")
            }), t(".mobile-fitlers-toggle").on("click", function () {
                t(this).closest(".widget-filters-form").toggleClass("open")
            }), /**t("[data-ok-property-id]").length && history.replaceState(null, null, t("[data-ok-property-id]").data("ok-property-id")),**/ t(".ok-testimonial-box .btn-toggle-view").on("click", function (e) {
                e.preventDefault(), t(this).closest(".ok-testimonial-box").toggleClass("expanded")
            })
        }, selectBoxes: function () {
            t('.ok-main-search-form [name="mobile-offer-selection"]').on("change", function () {
                t('input[name="for"]')[0].setAttribute("value", t(this).attr("data-selection"))
            }), t(".select-box").each(function () {
                var e = t(this), a = e.find(".hidden-input"), o = e.find(".box-input"), i = e.find(".box-options li");
                o.on("click", function () {
                    return e.toggleClass("open"), t(".select-box").not(e[0]).removeClass("open"), !1
                }), i.on("click", function (i) {
                    var n = t(this);
                    e.hasClass("hard-close") || (a[0].setAttribute("value", n.data("option")), o.text(n.text()), o.hasClass("has-value") || o.addClass("has-value"), e.removeClass("open")), n.hasAttr("data-url") && (window.location.href = n.attr("data-url"))
                });
                var n = i.find('input[type="checkbox"]'), s = [];
                n.on("change", function () {
                    var e = this.checked, i = t(this).closest("[data-option]");
                    e ? s.push({name: i.find(".text").text(), slug: i.data("option")}) : t.each(s, function (t, e) {
                        if (e.slug == i.data("option")) return s.splice(t, 1), !1
                    }), o.text(""), o[0].setAttribute("data-selection", ""), t.each(s, function (t, e) {
                        var i = "", n = "";
                        t < s.length - 1 && (i = ", ", n = "+"), o[0].innerHTML += e.name + i, o[0].setAttribute("data-selection", o[0].getAttribute("data-selection") + e.slug + n), a[0].setAttribute("value", o[0].getAttribute("data-selection"))
                    }), s.length > 0 && !o.hasClass("has-value") ? o.addClass("has-value") : 0 == s.length && o.removeClass("has-value")
                })
            }), t(document).on("click", function (e) {
                var a = t(e.target);
                a.is(".select-box") || a.closest(".select-box").length || t(".select-box").removeClass("open")
            })
        }, tabs: function () {
            t(".ok-tabs").each(function () {
                var e = t(this), a = e.find(".tabs-option:not(.external)"), o = e.find(".tabs-item");
                a.on("click", function () {
                    var e = t(this);
                    e.hasClass("current") || (a.removeClass("current"), e.addClass("current"), o.removeClass("open"), t('.tabs-item[data-id="' + e.data("link") + '"]').addClass("open"), o.find(".ok-slider .slides-list").slick("setPosition")), t(".tabs-item .ok-carousel").length && (t(".tabs-item .ok-carousel .carousel-items").slick("refresh"), t(".tabs-item .ok-carousel .carousel-items .slides-list").slick("setPosition"))
                })
            }), t(".accordion-panel .panel-heading").on("click", function () {
                var e = t(this).closest(".accordion-panel");
                e.toggleClass("open").find(".panel-body").slideToggle(300), t(".accordion-panel").not(e).removeClass("open").find(".panel-body").slideUp(250)
            })
        }, stickyElements: function () {
            var e = 0, a = t(".ok-header"), o = a.outerHeight(!0);
            t(window).on("scroll", function () {
                var i = t(this).scrollTop();
                i > 200 && !t(".footer-sticky-bar").hasClass("visible") ? (t(".footer-sticky-bar").addClass("visible"), t(".ok-viber-box").addClass("raised")) : i <= 200 && t(".footer-sticky-bar").hasClass("visible") && (t(".footer-sticky-bar").removeClass("visible"), t(".ok-viber-box").removeClass("raised")), i > 70 ? t(".scroll-top-btn").addClass("visible") : t(".scroll-top-btn").removeClass("visible"), t(".ok-main-nav").hasClass("visible") || (i > o ? (t(".ok-header").addClass("fixed"), t(".ok-content-box").css("margin-top", o + "px")) : (t(".ok-header").removeClass("fixed reaveal-sticky-header"), t(".ok-content-box").css("margin-top", 0)), e > i ? a.addClass("reaveal-sticky-header") : a.removeClass("reaveal-sticky-header")), e = i
            }), t(".ok-viber-box .viber-icon").on("click", function () {
                return t(this).parent().addClass("open"), !1
            }), t(".ok-viber-box .close-viber").on("click", function () {
                t(".ok-viber-box").removeClass("open")
            }), t(document).on("click", function (e) {
                var a = t(e.target);
                a.is(".ok-viber-box") || a.closest(".ok-viber-box").length || t(".ok-viber-box").removeClass("open")
            })
        }, okeyMaps: function () {
            if (t("#property-location-on-map").length) {
                var e = t("#property-location-on-map"),
                    a = L.map("property-location-on-map").setView([47.0188699, 28.8266118], 18),
                    o = e.data("theme-directory") + "/assets/ok-marker.png",
                    i = L.icon({iconUrl: o, iconAnchor: [70, 80]});
                if (L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(a), e.hasAttr("data-object-coord")) {
                    var n = {
                        lat: parseFloat(e.data("object-coord").split(",")[0]),
                        lng: parseFloat(e.data("object-coord").split(",")[1])
                    };
                    L.marker([n.lat, n.lng], {icon: i}).addTo(a), a.setView(L.latLng(n.lat, n.lng), 17)
                } else {
                    var s = "";
                    t(".address-component .value").each(function () {
                        s += t(this).text().replace(/\s\s+/g, " ") + " "
                    }), s = s.replace(/\s\s+/g, " "), (new window.GeoSearch.OpenStreetMapProvider).search({query: s}).then(function (t) {
                        if (t.length) {
                            var o = {lat: parseFloat(t[0].y, 10), lng: parseFloat(t[0].x, 10)};
                            L.marker([o.lat, o.lng], {icon: i}).addTo(a), a.setView(L.latLng(o.lat, o.lng), 17)
                        } else e.hide()
                    })
                }
            }
            if (t("#complex-on-map").length) {
                e = t("#complex-on-map"), a = L.map("complex-on-map").setView([47.0188699, 28.8266118], 18), o = e.data("theme-directory") + "/assets/ok-pin.png", i = L.icon({
                    iconUrl: o,
                    iconAnchor: [70, 80]
                });
                var r = e.data("complex-address");
                L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(a), (new window.GeoSearch.OpenStreetMapProvider).search({query: r}).then(function (t) {
                    if (t.length) {
                        var e = {lat: parseFloat(t[0].y, 10), lng: parseFloat(t[0].x, 10)};
                        L.marker([e.lat, e.lng], {icon: i}).addTo(a), a.setView(L.latLng(e.lat, e.lng), 17)
                    }
                })
            }
            if (t("#office-map-canvas").length) {
                var l = L.map("office-map-canvas").setView([47.0289399, 28.8491689], 18);
                i = L.icon({
                    iconUrl: t("#office-map-canvas").data("theme-directory") + "/assets/ok-marker.png",
                    iconAnchor: [70, 80]
                });
                L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(l), L.marker([47.0289399, 28.8491689], {icon: i}).addTo(l)
            }
        }, financingCalculator: function () {
            var o = t(".no-ui-slider-box"), i = t("#downpayment-percent")[0], n = t("#payment-period")[0],
                s = t("#downpayment-cash")[0], r = t("#property-price")[0],
                l = t(".ok-financing-calculator-box .monthly-payment .value"),
                c = t(".ok-financing-calculator-box .financed-sum .value"), d = !1, p = !1,
                u = t(".ok-financing-calculator-box").hasClass("prima_casa"),
                f = t(".ok-financing-calculator-box").hasClass("low_percentage");
            o.each(function () {
                var a = t(this), o = a.find("> .no-ui-slider")[0], i = a.find(".no-ui-input"),
                    n = parseInt(a.data("min")), s = parseInt(a.data("max")), r = parseInt(a.data("start")),
                    l = parseInt(a.data("step")), c = [a.find(".no-ui-lower-val"), a.find(".no-ui-upper-val")];
                noUiSlider.create(o, {
                    connect: [!0, !1],
                    start: r,
                    min: n,
                    max: s,
                    range: {min: n, max: s},
                    step: l
                }), i.val(r), i.on("change", function () {
                    var e = parseInt(t(this).val());
                    e >= n && e <= s && NaN != e && o.noUiSlider.set([e, null])
                }), o.noUiSlider.on("update", function (a, o) {
                    var n = parseInt(a[o]);
                    i.val(e(n)), c[o].text(e(n));
                    var s = i.val().toString().length, r = t(window).width() < 1200 ? s > 4 ? 10 : 15 : s > 4 ? 13 : 18;
                    i.width((i.val().toString().length > 2 ? i.val().toString().length - 1 : i.val().toString().length) * r + "px")
                })
            }), i.noUiSlider.on("update", function (t, o) {
                var i = parseInt(r.noUiSlider.get()) / 100 * parseInt(t[o]),
                    p = parseInt(r.noUiSlider.get()) - parseInt(s.noUiSlider.get());
                if (u) {
                    var f = parseInt(n.noUiSlider.get(), 10),
                        h = parseInt(-a(.0782 * f / (12 * f), 12 * f, p, 0, 0), 10);
                    l.text(e(h))
                } else l.text(e(parseInt(p / t[o] / 12 * 1.5)));
                c.text(e(p)), d && s.noUiSlider.set([i, null])
            }), i.noUiSlider.on("start", function () {
                d = !0
            }), i.noUiSlider.on("end", function () {
                d = !1
            }), s.noUiSlider.on("update", function (t, o) {
                var s = 100 * parseInt(t[o]) / parseInt(r.noUiSlider.get()),
                    d = parseInt(r.noUiSlider.get()) - parseInt(t[o]);
                if (u) {
                    var f = parseInt(n.noUiSlider.get(), 10), h = parseInt(-a(f / 12 * .0782 / f, f, d, 0, 0), 10);
                    l.text(e(h))
                } else l.text(e(parseInt(d / parseInt(n.noUiSlider.get()) / 12 * 1.5)));
                c.text(e(d)), p && i.noUiSlider.set([s, null])
            }), s.noUiSlider.on("start", function () {
                p = !0
            }), s.noUiSlider.on("end", function () {
                p = !1
            }), n.noUiSlider.on("update", function (t, o) {
                var i = parseInt(r.noUiSlider.get()) - parseInt(s.noUiSlider.get());
                if (u) {
                    var d = parseInt(n.noUiSlider.get(), 10),
                        p = parseInt(-a(.0782 * d / (12 * d), 12 * d, i, 0, 0), 10);
                    l.text(e(p))
                } else l.text(e(parseInt(i / t[o] / 12 * 1.5)));
                c.text(e(i))
            }), r.noUiSlider.on("update", function (o, r) {
                var d = parseInt(o[r]), p = 500 * Math.round(parseInt(d * (u ? .1 : f ? .1 : .3)) / 500),
                    h = 500 * Math.round(parseInt(.9 * d) / 500), m = d - parseInt(s.noUiSlider.get()),
                    g = parseInt(1.5 * m / (u ? 1 : 12) / parseInt(n.noUiSlider.get()));
                if (s.noUiSlider.updateOptions({
                    min: p,
                    max: h,
                    start: p,
                    range: {min: p, max: h}
                }), t("#downpayment-cash").closest(".box-component").find(".no-ui-upper-val").text(e(h)), i.noUiSlider.set([u ? 10 : f ? 10 : 30, null]), u) {
                    var v = parseInt(n.noUiSlider.get(), 10),
                        b = parseInt(-a(.0782 * v / (12 * v), 12 * v, m, 0, 0), 10);
                    l.text(e(b))
                } else l.text(e(g));
                c.text(e(m))
            }), t(".no-ui-input").each(function () {
                var a = t(this), o = a.val().toString().length,
                    i = t(window).width() < 1200 ? o > 4 ? 10 : 12 : o > 4 ? 13 : 18;
                a.width((a.val().toString().length > 2 ? a.val().toString().length - 1 : a.val().toString().length) * i + "px"), a.val(e(a.val()))
            }), t(".no-ui-input").on("keyup focusout", function () {
                var e = t(this), a = e.val().toString().length,
                    o = t(window).width() < 1200 ? a > 4 ? 10 : 12 : a > 4 ? 13 : 14;
                e.width(e.val().toString().length * o + "px")
            }), t(".no-ui-input").on("focus", function () {
                var e = parseInt(t(this).val().replace(" ", ""));
                t(this).val(e)
            }), t(".no-ui-input").on("focusout", function () {
                var a = t(this);
                a.val(e(a.val()))
            })
        }, propertyImagePopup: function () {
            t(".property-image-link").magnificPopup({
                type: "image",
                mainClass: "mfp-with-zoom",
                zoom: {enabled: !0, duration: 300, easing: "ease-in-out"},
                gallery: {enabled: !0},
                disableOn: 767
            })
        }, fbInit: function () {
            var e, a, o, i, n;
            t("body").append('<div id="fb-root"></div>'), e = document, a = "script", o = "facebook-jssdk", n = e.getElementsByTagName(a)[0], e.getElementById(o) || ((i = e.createElement(a)).id = o, i.src = "//connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v2.9", n.parentNode.insertBefore(i, n))
        }, wpToggles: function () {
            function e(t) {
                for (var e = t + "=", a = decodeURIComponent(document.cookie).split(";"), o = 0; o < a.length; o++) {
                    for (var i = a[o]; " " == i.charAt(0);) i = i.substring(1);
                    if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
                }
                return ""
            }

            function a(t, e, a) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3);
                var i = "expires=" + o.toUTCString();
                document.cookie = t + "=" + e + ";" + i + ";path=/"
            }

            if (t(".add-to-favorites-toggle").on("click", function () {
                if (e("okey_favoritest_post")) {
                    var o = e("okey_favoritest_post"), i = JSON.parse(o), n = i.indexOf(t(this).data("property"));
                    n > -1 ? (i.splice(n, 1), a("okey_favoritest_post", JSON.stringify(i), 360), t(this).removeClass("added-to-favorites")) : (i.push(t(this).data("property")), a("okey_favoritest_post", JSON.stringify(i), 360), t(this).addClass("added-to-favorites"))
                } else a("okey_favoritest_post", JSON.stringify([t(this).data("property")]), 360), t(this).addClass("added-to-favorites")
            }), t(".remove-from-fav").on("click", function () {
                var o = e("okey_favoritest_post"), i = JSON.parse(o), n = i.indexOf(t(this).data("property"));
                i.splice(n, 1), a("okey_favoritest_post", JSON.stringify(i), 360), t(this).parent(".ok-property-box").parent(".col-xs-12").remove()
            }), t(".single-estate_property").length) if (e("okey_visited_post")) {
                var i = e("okey_visited_post"), n = JSON.parse(i);
                n.indexOf(t(".add-to-favorites-toggle").data("property")) < 0 && (n.push(t(".add-to-favorites-toggle").data("property")), a("okey_visited_post", JSON.stringify(n), 360))
            } else a("okey_visited_post", JSON.stringify([t(".add-to-favorites-toggle").data("property")]), 360);
            t('[data-id="properties-hot"] a.page-numbers').on("click", function (e) {
                e.preventDefault();
                var a = t(this), i = a.data("offset"), n = t('[data-id="properties-hot"]').find(".ajax-target");
                n.fadeOut(), t("html, body").animate({scrollTop: t('[data-id="properties-hot"]').offset().top - 160}, 400, "swing"), t('[data-id="properties-hot"] a.page-numbers').removeClass("current"), a.addClass("current"), jQuery.ajax({
                    url: ajaxurl,
                    data: {action: "okey_hot_load", offset: i},
                    type: "POST",
                    success: function (e) {
                        setTimeout(function () {
                            n.html(e), n.removeClass("loading"), n.find(".ok-slider").each(function () {
                                var e = t(this), a = e.find(".slides-list");
                                o.slickInitElement(e, a, "slider")
                            })
                        }, 100), n.fadeIn(300)
                    },
                    error: function (t, e, a) {
                        console.log(t, e, a)
                    }
                })
            }), t('[data-id="agent-properties"] a.page-numbers').on("click", function (e) {
                e.preventDefault();
                var a = t(this), i = a.data("offset"), n = a.data("agent"), s = a.attr("href"),
                    r = t('[data-id="agent-properties"]').find(".ajax-target");
                r.css({opacity: 0}), t("html, body").animate({scrollTop: t('[data-id="agent-properties"]').offset().top - 160}, 500, "swing"), t('[data-id="agent-properties"] a.page-numbers').removeClass("current"), a.addClass("current"), history.pushState(null, null, s), jQuery.ajax({
                    url: ajaxurl,
                    data: {action: "okey_agent_load", offset: i, agent_id: n},
                    type: "POST",
                    success: function (e) {
                        r.html(e), setTimeout(function () {
                            r.find(".ok-slider").each(function () {
                                var e = t(this), a = e.find(".slides-list");
                                o.slickInitElement(e, a, "slider")
                            }), r.css({opacity: 1})
                        })
                    },
                    error: function (t, e, a) {
                        console.log(t, e, a)
                    }
                })
            }), t('[data-id="agent-properties"] a.page-numbers').length && window.addEventListener("popstate", function () {
                window.scrollTo(0, 0), location.reload()
            }), t(".subscribe-form").submit(function (e) {
                e.preventDefault(), "" !== t(this).find(".form-input").val() ? jQuery.ajax({
                    url: ajaxurl,
                    data: {action: "okey_abonare", email: t(this).find(".form-input").val()},
                    type: "POST",
                    success: function (e) {
                        t(".subscribe-form").find(".btn").text(e), setTimeout(function () {
                            t(".subscribe-form").find(".btn").text("Abonare")
                        }, 3e3)
                    },
                    error: function (t, e, a) {
                        console.log(t, e, a)
                    }
                }) : (t(".subscribe-form").find(".btn").text("Introduceți email"), setTimeout(function () {
                    t(".subscribe-form").find(".btn").text("Abonare")
                }, 3e3))
            }), t(".single-agent-testimonial").submit(function (e) {
                e.preventDefault(), jQuery.ajax({
                    url: ajaxurl,
                    data: {action: "okey_adauga_recenzie", form: t(this).serialize(), agentid: t(this).data("agent")},
                    type: "POST",
                    success: function (e) {
                        t(".single-agent-testimonial").find(".btn").text(e), setTimeout(function () {
                            t(".single-agent-testimonial").find(".btn").text("Trimite")
                        }, 3e3), "eroare" !== e && document.getElementsByClassName("single-agent-testimonial")[0].reset()
                    },
                    error: function (t, e, a) {
                        console.log(t, e, a)
                    }
                })
            }), t(".submit_price-offer-form").submit(function (e) {
                e.preventDefault();
                var a = t(this);
                a.find(".form-submit").text("Trimitere..."), jQuery.ajax({
                    url: ajaxurl,
                    data: {action: "okey_offer_price", form: a.serialize()},
                    type: "POST",
                    success: function (e) {
                        e ? a.find(".form-submit").text("Trimis cu success!") : a.find(".form-submit").text("Eroare. Încercați mai târziu."), setTimeout(function () {
                            a.hasClass("mobile") ? window.history.back() : (t(".ok-page-popup").removeClass("ok-popup-visible content-offer-price content-get-call content-add-property content-add-testimonial"), t("html").removeClass("popup-visible"))
                        }, 2e3)
                    },
                    error: function (t, e, a) {
                        console.log(t, e, a)
                    }
                })
            })
        }, embededIframes: function () {
            t(".single-blog-post iframe, .single-property-wrapper .property-body iframe").wrapAll('<div class="iframe-wrapper" style="display: block; position: relative; padding-top: 56.25%;"></div>'), t(".single-blog-post iframe, .single-property-wrapper .property-body iframe").css({
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%"
            }), t(".video-slide .play-wrapper").on("click", function () {
                var e = t(this).closest(".video-slide"), a = e.find("iframe");
                a && (a[0].setAttribute("src", a.attr("src") + "&autoplay=1"), e.addClass("started"))
            })
        }, newHeroSection: function () {
            t(".ok-new-hero .tabs-option").on("click", function () {
                var e = t(this).index();
                t(".hero-bg-slider .slides-list").slick("slickGoTo", e), setTimeout(function () {
                    var e = t(".ok-new-hero .tabs-option.current").index();
                    t(".hero-bg-slider .slides-list").slick("slickGoTo", e)
                }, 1e3)
            }), t(".ok-search-form-2 .adv-filters-toggle").on("click", function () {
                var e = t(this).closest("form"), a = e.find(".advanced-filters"), o = e.closest(".ok-tabs");
                e.hasClass("open") ? (o.removeClass("filters-open"), a.slideUp(240, function () {
                    t(".ok-search-form-2").removeClass("open"), t(".advanced-filters").removeAttr("style")
                })) : (o.addClass("filters-open"), a.slideDown(240), t(".ok-search-form-2").addClass("open"))
            }), t(".ok-search-form-2 .group-item").each(function () {
                var e = t(this).find(".checkbox-group-values")[0];
                t(this).find('input[type="checkbox"]').on("change", function () {
                    var t = this.checked, a = this.value;
                    t ? e.setAttribute("value", e.value + a + "+") : e.setAttribute("value", e.value.replace(a + "+", ""))
                })
            })
        }, widgetRequestCall: function () {
            t(".widget_property-agent .request-phone").on("click", function (e) {
                e.preventDefault(), t("html").addClass("popup-visible"), t(".ok-page-popup").removeClass("content-get-call content-add-property content-add-testimonial content-offer-price").addClass("ok-popup-visible content-get-call");
                var a = t('.content-get-call [name="property-url"]');
                a.length && (a[0].value = window.location.origin + window.location.pathname)
            })
        }, widgetSocial: function () {
            t(".social-b-o .tooltip .content").text(t(".social-b-o .tooltip .content").data("default-state")), t(".social-b-o .tooltip").on("click", function (e) {
                var a, o;
                a = window.location.origin + window.location.pathname, (o = document.createElement("textarea")).value = a, document.body.appendChild(o), o.select(), document.execCommand("copy"), document.body.removeChild(o), t(".social-b-o .tooltip .content").text(t(".social-b-o .tooltip .content").data("succes-state")), e.preventDefault()
            }), t(".social-b-o .tooltip").on("mouseleave", function () {
                setTimeout(() => {
                    t(".social-b-o .tooltip .content").text(t(".social-b-o .tooltip .content").data("default-state"))
                }, 300)
            })
        }, propertyPriceSubscribe: function () {
            var e = t("form.price-subscribe"), a = !1;
            e.on("submit", function (t) {
                if (t.preventDefault(), !a) {
                    a = !0;
                    var o = e.find('[name="subscribe_name"]').val(), i = e.find('[name="subscribe_email"]').val(),
                        n = e.find('[name="subscribe_id"]').val(), s = e.find('[name="subscribe_current_price"]').val();
                    jQuery.ajax({
                        url: ajaxurl,
                        type: "POST",
                        data: {action: "okey_price_subscribe", post_id: n, name: o, email: i, initial_price: s},
                        success: function () {
                            a = !1, e.find("p.success").fadeIn(150), e.find(".content").fadeOut(150)
                        },
                        error: function (t, o, i) {
                            a = !1, e.find("p.error").fadeIn(150), console.log(i)
                        }
                    })
                }
            })
        }
    };
    t(document).ready(function () {
        o.init(), t("#page").addClass("dom-ready")
    })
}(jQuery);