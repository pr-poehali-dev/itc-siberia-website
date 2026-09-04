export const CONSENT_KEY = 'itc_cookie_consent';
export const CONSENT_EVENT = 'itc-cookie-consent-change';

export interface ConsentState {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  date: string;
  version: number;
}

export const CONSENT_VERSION = 1;

export const getConsent = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    if (raw.charAt(0) !== '{') {
      return {
        necessary: true,
        functional: raw === 'accepted',
        analytics: raw === 'accepted',
        date: localStorage.getItem(`${CONSENT_KEY}_date`) || new Date().toISOString(),
        version: CONSENT_VERSION
      };
    }
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const saveConsent = (value: { functional: boolean; analytics: boolean }) => {
  const state: ConsentState = {
    necessary: true,
    functional: value.functional,
    analytics: value.analytics,
    date: new Date().toISOString(),
    version: CONSENT_VERSION
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  applyConsent(state);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  return state;
};

export const revokeConsent = () => {
  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(`${CONSENT_KEY}_date`);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
};

export const applyConsent = (state: ConsentState) => {
  if (state.analytics && typeof window.itcLoadMetrika === 'function') {
    window.itcLoadMetrika();
  }
};

export const hasAnalyticsConsent = () => getConsent()?.analytics === true;
export const hasFunctionalConsent = () => getConsent()?.functional === true;

export const METRIKA_ID = 106249715;

export const trackGoal = (goal: string) => {
  if (!hasAnalyticsConsent()) return;
  if (typeof window.ym === 'function' && window.__itcMetrikaLoaded) {
    window.ym(METRIKA_ID, 'reachGoal', goal);
  }
};

declare global {
  interface Window {
    itcLoadMetrika?: () => void;
    __itcMetrikaLoaded?: boolean;
  }
}