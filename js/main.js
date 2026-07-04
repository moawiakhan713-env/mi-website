/* ============================================================
   MI Real Estate & Construction — site script
   ============================================================

   ★★★  EDIT YOUR BUSINESS DETAILS BELOW  ★★★
   This is the ONLY place you need to change your contact info.
   It updates the phone number, WhatsApp, email, address and
   office hours EVERYWHERE on the website automatically.

   How to edit: open this file in Notepad, change the text
   between the quotes "..." and save. Do not remove the quotes
   or the commas.
   ============================================================ */

var MI_CONFIG = {

  // Your phone number as people should read it:
  phoneDisplay: "+92 300 0000000",

  // Same number for dialing (no spaces or dashes, keep the +92):
  phoneDial: "+923000000000",

  // WhatsApp number (digits only, country code first, NO + sign):
  whatsapp: "923000000000",

  // Your email address:
  email: "info@mirealestate.pk",

  // Office address (shown in Contact page and footer):
  address: "Office # — , Main Boulevard, Karachi, Pakistan",

  // Office hours:
  hours: "Mon – Sat: 10:00 AM – 8:00 PM",

  // Social media links (paste your full page links, or leave as "#"):
  facebook: "#",
  instagram: "#",
  youtube: "#",
  tiktok: "#"
};

/* ============================================================
   ▼▼▼  Do not edit below this line  ▼▼▼
   ============================================================ */

(function () {
  "use strict";

  /* ----- Fill contact details everywhere ----- */
  function setAll(selector, fn) {
    document.querySelectorAll(selector).forEach(fn);
  }

  document.addEventListener("DOMContentLoaded", function () {

    setAll(".js-phone", function (el) {
      el.textContent = MI_CONFIG.phoneDisplay;
      if (el.tagName === "A") el.href = "tel:" + MI_CONFIG.phoneDial;
    });

    setAll(".js-email", function (el) {
      el.textContent = MI_CONFIG.email;
      if (el.tagName === "A") el.href = "mailto:" + MI_CONFIG.email;
    });

    setAll(".js-address", function (el) { el.textContent = MI_CONFIG.address; });
    setAll(".js-hours", function (el) { el.textContent = MI_CONFIG.hours; });

    setAll(".js-whatsapp", function (el) {
      el.href = "https://wa.me/" + MI_CONFIG.whatsapp +
        "?text=" + encodeURIComponent("Hello MI Real Estate & Construction! I would like to inquire about your projects.");
    });

    var socials = { facebook: ".js-facebook", instagram: ".js-instagram", youtube: ".js-youtube", tiktok: ".js-tiktok" };
    Object.keys(socials).forEach(function (key) {
      setAll(socials[key], function (el) { el.href = MI_CONFIG[key] || "#"; });
    });

    setAll(".js-year", function (el) { el.textContent = new Date().getFullYear(); });

    /* ----- Missing photos: show branded placeholder ----- */
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      img.addEventListener("error", function () {
        if (img.src.indexOf("placeholder.svg") === -1) {
          img.src = img.closest("body") ? relativePrefix() + "images/placeholder.svg" : "images/placeholder.svg";
        }
      });
      // Trigger check for already-failed images
      if (img.complete && img.naturalWidth === 0) {
        img.src = relativePrefix() + "images/placeholder.svg";
      }
    });

    function relativePrefix() { return ""; }

    /* ----- Hero background photo (only if images/hero.jpg exists) ----- */
    var heroPhoto = document.querySelector(".hero-photo");
    if (heroPhoto) {
      var test = new Image();
      test.onload = function () {
        heroPhoto.style.backgroundImage = "url('images/hero.jpg')";
        heroPhoto.classList.add("loaded");
      };
      test.src = "images/hero.jpg";
    }

    /* ----- Sticky header ----- */
    var header = document.querySelector(".site-header");
    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ----- Mobile menu ----- */
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("open");
        toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.textContent = "☰";
        });
      });
    }

    /* ----- Reveal on scroll ----- */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
    }

    /* ----- Animated counters ----- */
    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var start = null;
      var duration = 1800;
      function stepFn(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(stepFn);
      }
      requestAnimationFrame(stepFn);
    }
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });
    } else {
      document.querySelectorAll("[data-count]").forEach(function (el) {
        el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
      });
    }

    /* ----- Contact form → opens WhatsApp with the message ----- */
    var form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var name = (document.getElementById("cf-name") || {}).value || "";
        var phone = (document.getElementById("cf-phone") || {}).value || "";
        var interest = (document.getElementById("cf-interest") || {}).value || "";
        var msg = (document.getElementById("cf-message") || {}).value || "";

        var text =
          "New inquiry from website:\n" +
          "Name: " + name + "\n" +
          "Phone: " + phone + "\n" +
          "Interested in: " + interest + "\n" +
          "Message: " + msg;

        window.open("https://wa.me/" + MI_CONFIG.whatsapp + "?text=" + encodeURIComponent(text), "_blank");
      });
    }

    /* ----- FAQ accordion ----- */
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var answer = item.querySelector(".faq-a");
        var isOpen = item.classList.contains("open");
        // close others in the same list
        item.parentElement.querySelectorAll(".faq-item.open").forEach(function (other) {
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    /* ----- Lightbox for project photos ----- */
    var lb = document.querySelector(".lightbox");
    if (lb) {
      var lbImg = lb.querySelector("img");
      document.querySelectorAll(".pd-media img").forEach(function (img) {
        img.addEventListener("click", function () {
          lbImg.src = img.src;
          lb.classList.add("open");
        });
      });
      lb.addEventListener("click", function (ev) {
        if (ev.target !== lbImg) lb.classList.remove("open");
      });
    }
  });
})();
