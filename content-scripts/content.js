function setMetaTheme() {
  document.querySelector("[name='theme-color']").remove()

  let head = document.getElementsByTagName('head')[0];
  let meta = document.createElement('meta');

  meta.setAttribute('name', 'theme-color')
  meta.content = "#404040";
  head.appendChild(meta);
}

function injectVars(color) {
  let root = document.documentElement;

  root.style.setProperty("--ic-brand-primary-darkened-5", color);
  root.style.setProperty("--ic-brand-primary-darkened-10", color);
  root.style.setProperty("--ic-brand-primary-darkened-15", color);
  root.style.setProperty("--ic-brand-primary-lightened-5", color);
  root.style.setProperty("--ic-brand-primary-lightened-10", color);
  root.style.setProperty("--ic-brand-primary-lightened-15", color);
  root.style.setProperty("--ic-brand-button--primary-bgd-darkened-5", color);
  root.style.setProperty("--ic-brand-button--primary-bgd-darkened-15", color);
  root.style.setProperty("--ic-brand-button--secondary-bgd-darkened-5", color);
  root.style.setProperty("--ic-brand-button--secondary-bgd-darkened-15", color);
  root.style.setProperty("--ic-brand-font-color-dark-lightened-15", "white");
  root.style.setProperty("--ic-brand-font-color-dark-lightened-30", "white");
  root.style.setProperty("--ic-link-color-darkened-10", "white");
  root.style.setProperty("--ic-link-color-lightened-10", "white");
  root.style.setProperty("--ic-brand-primary", "#303030");
  root.style.setProperty("--ic-brand-font-color-dark", "#AAA");
  root.style.setProperty("--ic-brand-button--primary-bgd", "#303030");
  root.style.setProperty("--ic-brand-button--primary-text", "white");
  root.style.setProperty("--ic-brand-button--secondary-bgd", "#303030");
  root.style.setProperty("--ic-brand-button--secondary-text", "white");
  root.style.setProperty("--ic-brand-global-nav-bgd", color);
  root.style.setProperty("--ic-brand-global-nav-ic-icon-svg-fill", "white");
  root.style.setProperty("--ic-link-color-darkened-10", "white");
  root.style.setProperty("--ic-brand-global-nav-ic-icon-svg-fill--active", color);
  root.style.setProperty("--ic-brand-global-nav-menu-item__text-color", "white");
  root.style.setProperty("--ic-brand-global-nav-menu-item__text-color--active", color);
  root.style.setProperty("--ic-brand-global-nav-avatar-border", "white");
  root.style.setProperty("--ic-brand-global-nav-menu-item__badge-bgd", color);
  root.style.setProperty("--ic-brand-global-nav-menu-item__badge-text", "white");
  root.style.setProperty("--ic-brand-global-nav-logo-bgd", color);
}

setMetaTheme();
injectVars();