import assert from "node:assert/strict";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import { JSDOM } from "jsdom";

const dom = new JSDOM(
  '<!doctype html><html><head></head><body><div id="root"></div></body></html>',
  { url: "https://nexora.test/", pretendToBeVisual: true },
);
for (const key of [
  "window",
  "document",
  "HTMLElement",
  "HTMLInputElement",
  "HTMLSelectElement",
  "Element",
  "Node",
  "Event",
  "MouseEvent",
  "MutationObserver",
  "localStorage",
  "getComputedStyle",
]) {
  Object.defineProperty(globalThis, key, {
    configurable: true,
    value: dom.window[key],
  });
}
Object.defineProperty(globalThis, "navigator", {
  configurable: true,
  value: dom.window.navigator,
});
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.requestAnimationFrame = (callback) =>
  setTimeout(() => callback(performance.now()), 0);
globalThis.cancelAnimationFrame = clearTimeout;
window.scrollTo = () => {};
globalThis.IntersectionObserver = window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Element.prototype.scrollIntoView = function () {
  this.dataset.scrolled = "true";
};
window.matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
});
let copied = "";
Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: async (text) => {
      copied = text;
    },
  },
});
const output = path.resolve("node_modules/.cache/nexora-tests/app.mjs");
await mkdir(path.dirname(output), { recursive: true });
await build({
  stdin: {
    contents: "import './src/i18n'; export {default as App} from './src/App';",
    resolveDir: process.cwd(),
    loader: "tsx",
  },
  outfile: output,
  bundle: true,
  packages: "external",
  platform: "node",
  format: "esm",
  loader: { ".jpg": "dataurl" },
  jsx: "automatic",
  logLevel: "silent",
});
const { createElement, act } = await import("react");
const { createRoot } = await import("react-dom/client");
const { default: i18n } = await import("i18next");
const { App } = await import(pathToFileURL(output).href);
let root;
async function settle() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
  });
}
async function mount(url = "/") {
  if (root) await act(async () => root.unmount());
  window.history.replaceState({}, "", url);
  root = createRoot(document.getElementById("root"));
  await act(async () => root.render(createElement(App)));
  await settle();
}
async function click(el) {
  assert(el, "Expected clickable element");
  await act(async () =>
    el.dispatchEvent(new MouseEvent("click", { bubbles: true, button: 0 })),
  );
  await settle();
}
const button = (text) =>
  Array.from(document.querySelectorAll("button")).find((el) =>
    el.textContent.includes(text),
  );
const link = (text) =>
  Array.from(document.querySelectorAll("a")).find((el) =>
    el.textContent.includes(text),
  );
async function input(id, value) {
  const el = document.getElementById(id);
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  ).set;
  await act(async () => {
    setter.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
}
try {
  await mount();
  assert.equal(document.querySelectorAll(".desktop-nav a").length, 5);
  assert.match(document.querySelector("h1").textContent, /Your salon/);
  await click(link("Try the salon demo"));
  assert.equal(window.location.pathname, "/for-salons");
  assert.equal(window.location.hash, "#demo");
  assert.equal(document.getElementById("demo").dataset.scrolled, "true");
  await input("demo-name", "Demo Visitor");
  await click(button("Next step"));
  assert.match(
    document.querySelector(".demo-content").textContent,
    /Demo Visitor/,
  );
  const select = document.getElementById("demo-service");
  await act(async () => {
    select.value = "Facial";
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
  await click(button("Next step"));
  assert.match(document.querySelector(".sample-record").textContent, /Facial/);
  await click(button("Restart demo"));
  assert.equal(document.getElementById("demo-name").value, "Demo Visitor");
  console.log(
    "PASS salon journey: route, anchor, customer, appointment, follow-up, restart",
  );
  await mount("/contact?interest=investor");
  assert.equal(document.getElementById("contact-interest").value, "investor");
  await input("contact-name", "Demo Person");
  await input("contact-email", "demo@example.com");
  await click(button("Copy draft"));
  assert.match(copied, /Demo Person/);
  assert.match(copied, /investor/);
  assert.match(
    document.querySelector('[role="status"]').textContent,
    /Draft copied/,
  );
  assert.doesNotMatch(
    document.body.textContent,
    /Enquiry Received Successfully/,
  );
  console.log(
    "PASS contact: intent, draft state and explicit email handoff; no fake delivery",
  );
  await mount("/investors");
  assert.match(
    document.querySelector("table").textContent,
    /Not verified for publication/,
  );
  assert.match(document.body.textContent, /₹3,72,00,000/);
  assert.match(document.body.textContent, /₹36,00,00,000/);
  assert.doesNotMatch(document.body.textContent, /₹11,575/);
  console.log(
    "PASS investor brief: actual-status register and calculated planning scenario",
  );
  await click(button("EN"));
  await click(button("हिन्दी"));
  assert.equal(document.documentElement.lang, "hi");
  await mount("/");
  assert.match(document.querySelector("h1").textContent, /आपका salon/);
  assert.equal(localStorage.getItem("i18nextLng"), "hi");
  await click(button("Menu"));
  assert(document.getElementById("mobile-menu"));
  await click(document.querySelector('#mobile-menu a[href="/for-customers"]'));
  assert.equal(window.location.pathname, "/for-customers");
  assert.equal(document.getElementById("mobile-menu"), null);
  console.log(
    "PASS language and navigation: Hindi, persistence, menu close on navigation",
  );
  await act(async () => i18n.changeLanguage("en"));
  for (const [from, to] of [
    ["/who-benefits#customer", "/for-customers"],
    ["/who-benefits#investor-section", "/investors"],
    ["/ecosystem", "/for-salons"],
    ["/vision-mission", "/about"],
    ["/insights", "/investor-guide"],
  ]) {
    await mount(from);
    assert.equal(window.location.pathname, to);
  }
  console.log(
    "PASS legacy links: customer, investor, ecosystem, vision and resource redirects",
  );
  for (const route of [
    "/pricing",
    "/products",
    "/verticals",
    "/about",
    "/for-customers",
    "/privacy-policy",
    "/market-research",
  ]) {
    await mount(route);
    await settle();
    assert.equal(document.querySelectorAll("h1").length, 1, route);
    assert.doesNotMatch(
      document.body.textContent,
      /This page could not open/,
      route,
    );
  }
  console.log("PASS canonical pages and lazy-loaded policies/research");
} finally {
  if (root) await act(async () => root.unmount());
  dom.window.close();
  await rm(output, { force: true });
}
