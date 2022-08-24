import Plausible from "plausible-tracker";
import config from "../data/config";

let plausible;
export const initPlausible = () => {
  plausible = Plausible({
    domain: config.domainHost,
    apiHost: config.statsHost,
  });
  plausible.enableAutoPageviews();
};

export const trackEvent = (eventName, options, eventData) => {
  if (plausible) {
    plausible.trackEvent(eventName, options, eventData);
  }
};

export const trackOutboundLinkClick = (url) => {
  plausible.trackEvent("Outbound Link: Click", { props: { url: url } });
};
