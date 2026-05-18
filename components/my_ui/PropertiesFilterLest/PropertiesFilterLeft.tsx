export default function PropertiesFilterLeft(){
    return(<aside className="lg:col-span-3" data-testid="sacred-spots-sidebar">
        <div className="lg:sticky lg:top-28 space-y-5">
          <div className="bg-white border border-brand-cream rounded-2xl p-5 shadow-soft">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red font-semibold mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              Sacred spots across the Brij
            </div>
            <nav className="space-y-4">
              <div>
                <button
                  data-testid="sidebar-area-Jatipura"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Jatipura</span>
                  <span className="text-xs text-brand-ink-soft">1</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Jatipura-Parikrama Marg"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Parikrama Marg
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Govardhan"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Govardhan</span>
                  <span className="text-xs text-brand-ink-soft">8</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Govardhan Hill"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Govardhan Hill
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Radha Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Radha Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Shyam Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shyam Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Kusum Sarovar"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Kusum Sarovar
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Mansi Ganga"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Mansi Ganga
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Gulal Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Gulal Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Surabhi Kund"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Surabhi Kund
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Govardhan-Luk Luk Dau Ji"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Luk Luk Dau Ji
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Barsana"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Barsana</span>
                  <span className="text-xs text-brand-ink-soft">4</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Shri Radha Rani Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shri Radha Rani Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Mor Kutir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Mor Kutir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Maan Mandir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Maan Mandir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Barsana-Rangeeli Mahal"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Rangeeli Mahal
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Vrindavan"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Vrindavan</span>
                  <span className="text-xs text-brand-ink-soft">6</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Ring Road"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Ring Road
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Prem Mandir"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Prem Mandir
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Banke Bihari Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Banke Bihari Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-ISKCON Temple Vrindavan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      ISKCON Temple Vrindavan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Nidhivan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Nidhivan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Vrindavan-Seva Kunj"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Seva Kunj
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  data-testid="sidebar-area-Mathura"
                  className="w-full flex items-center justify-between text-left font-display text-base font-medium transition-colors mb-2 text-brand-ink hover:text-brand-red"
                >
                  <span>📍 Mathura</span>
                  <span className="text-xs text-brand-ink-soft">3</span>
                </button>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-cream">
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Shri Krishna Janmabhoomi"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Shri Krishna Janmabhoomi
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Dwarkadhish Temple"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Dwarkadhish Temple
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-spot-Mathura-Vishram Ghat"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Vishram Ghat
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-brand-cream">
                <div className="font-display text-base font-medium text-brand-ink mb-2">
                  📍 Nearby Braj
                </div>
                <ul className="space-y-1.5 pl-5 border-l-2 border-brand-gold/40">
                  <li>
                    <button
                      data-testid="sidebar-nearby-Nand Bhavan"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Nand Bhavan
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Kokilavan Dham"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Kokilavan Dham
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Gokul Dham"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Gokul Dham
                    </button>
                  </li>
                  <li>
                    <button
                      data-testid="sidebar-nearby-Raman Reti"
                      className="text-left text-sm transition-colors w-full text-brand-ink-soft hover:text-brand-red"
                    >
                      Raman Reti
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </aside>)
}