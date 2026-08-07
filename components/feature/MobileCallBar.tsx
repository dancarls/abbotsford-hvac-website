'use client';

import settingsData from '../../lib/data/settings.json';

const PHONE = settingsData.phoneNumber || '(236) 477-3002';
const PHONE_RAW = settingsData.phoneRaw || PHONE.replace(/[^0-9]/g, '');

/**
 * Sticky bottom mobile call bar.
 * Only renders on mobile (hidden md:hidden). Always visible while scrolling.
 * Two buttons: tap-to-call (goes to Retell voice AI) and open-chat (fires Retell chat widget).
 */
export default function MobileCallBar() {
  const openChat = () => {
    // Retell widget exposes a global; if unavailable, focus the fab.
    const w = window as any;
    if (w.retellWidget && typeof w.retellWidget.open === 'function') {
      w.retellWidget.open();
      return;
    }
    // Fallback: click any element with a Retell-injected FAB class.
    const fab = document.querySelector<HTMLElement>(
      '[class*="retell"][class*="fab"], .retell-fab, #retell-widget-fab',
    );
    if (fab) fab.click();
  };

  return (
    <>
      {/* Spacer so page content isn't hidden behind the bar */}
      <div className="md:hidden h-16" aria-hidden="true" />

      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
        role="region"
        aria-label="Quick contact"
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform"
            aria-label={`Call ${PHONE}`}
          >
            <i className="ri-phone-fill text-lg" aria-hidden="true"></i>
            Call Now
          </a>
          <button
            type="button"
            onClick={openChat}
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform"
            aria-label="Open chat assistant"
          >
            <i className="ri-chat-3-fill text-lg" aria-hidden="true"></i>
            Chat
          </button>
        </div>
      </div>
    </>
  );
}
