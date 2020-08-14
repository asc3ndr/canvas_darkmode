function injectVars() {
  let root = document.documentElement;
  root.style.setProperty("--ic-link-color", "#000000");
  root.style.setProperty("--ic-brand-primary", "#000000");
  root.style.setProperty("--ic-brand-primary-darkened-5", "#000000");
  root.style.setProperty("--ic-brand-primary-darkened-10", "#000000");
  root.style.setProperty("--ic-brand-primary-darkened-15", "#000000");
  root.style.setProperty("--ic-brand-primary-lightened-5", "#000000");
  root.style.setProperty("--ic-brand-primary-lightened-10", "#000000");
  root.style.setProperty("--ic-brand-primary-lightened-15", "#000000");
  root.style.setProperty("--ic-brand-button--primary-bgd-darkened-5", "#000000");
  root.style.setProperty("--ic-brand-button--primary-bgd-darkened-15", "#000000");
  root.style.setProperty("--ic-brand-button--secondary-bgd-darkened-5", "#000000");
  root.style.setProperty("--ic-brand-button--secondary-bgd-darkened-15", "#000000");
  root.style.setProperty("--ic-brand-font-color-dark-lightened-15", "#000000");
  root.style.setProperty("--ic-brand-font-color-dark-lightened-30", "#000000");
  root.style.setProperty("--ic-link-color-darkened-10", "#000000");
  root.style.setProperty("--ic-link-color-lightened-10", "#000000");
  root.style.setProperty("--ic-brand-font-color-dark", "#000000");
  root.style.setProperty("--ic-brand-button--primary-bgd", "#000000");
  root.style.setProperty("--ic-brand-button--primary-text", "#000000");
  root.style.setProperty("--ic-brand-button--secondary-bgd", "#000000");
  root.style.setProperty("--ic-brand-button--secondary-text", "#000000");
  root.style.setProperty("--ic-brand-global-nav-bgd", "#000000");
  root.style.setProperty("--ic-brand-global-nav-ic-icon-svg-fill", "#000000");
  root.style.setProperty("--ic-link-color-darkened-10", "#000000");
  root.style.setProperty("--ic-brand-global-nav-ic-icon-svg-fill--active", "#000000");
  root.style.setProperty("--ic-brand-global-nav-menu-item__text-color", "#000000");
  root.style.setProperty("--ic-brand-global-nav-menu-item__text-color--active", "#000000");
  root.style.setProperty("--ic-brand-global-nav-avatar-border", "#000000");
  root.style.setProperty("--ic-brand-global-nav-menu-item__badge-bgd", "#000000");
  root.style.setProperty("--ic-brand-global-nav-menu-item__badge-text", "#000000");
  root.style.setProperty("--ic-brand-global-nav-logo-bgd", "#000000");

  let meta = document.querySelector("[name='theme-color']")
  meta.content = "#000000";
}

injectVars();