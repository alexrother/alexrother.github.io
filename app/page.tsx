import Image from "next/image";

const contacts = [
  {
    label: "phone",
    value: "(615) 763-3279",
    url: "tel:+16157633279",
    icon: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4f2.svg",
  },
  {
    label: "email",
    value: "alex@alexrother.com",
    url: "mailto:alex@alexrother.com",
    icon: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/1f4ec.svg",
  },
  {
    value: "alex@eecs.utk.edu",
    url: "mailto:alex@eecs.utk.edu",
  },
];

const sites = [
  { name: "man7.org", url: "https://man7.org" },
  { name: "cppreference.com", url: "https://cppreference.com" },
  { name: "godbolt.org", url: "https://godbolt.org" },
  { name: "dogbolt.org", url: "https://dogbolt.org" },
  { name: "rosettacode.org", url: "https://rosettacode.org" },
  { name: "risc-v cheat sheet", url: "https://projectf.io/posts/riscv-cheat-sheet/" },
  { name: "hoogle.haskell.org", url: "https://hoogle.haskell.org/" },
  { name: "nim-lang.org", url: "https://nim-lang.org/" },
  { name: "julialang.org", url: "https://julialang.org/" },
  { name: "starting forth", url: "https://www.forth.com/wp-content/uploads/2018/01/Starting-FORTH.pdf" },
  { name: "webrtc.org", url: "https://webrtc.org/" },
  { name: "electronjs.org", url: "https://www.electronjs.org/" },
  { name: "wikipedia.org", url: "https://wikipedia.org" },
  { name: "arxiv.org", url: "https://arxiv.org" },
  { name: "osint4all", url: "https://start.me/p/L1rEYQ/osint4all" },
  { name: "browserleaks.com", url: "https://browserleaks.com/" },
  { name: "whonix.org", url: "https://www.whonix.org/" },
  { name: "lookup.icann.org", url: "https://lookup.icann.org/en" },
  { name: "gnupg.org", url: "https://www.gnupg.org/" },
  { name: "grapheneos.org", url: "https://grapheneos.org/" },
  { name: "coveryourtracks.eff.org", url: "https://coveryourtracks.eff.org/" },
  { name: "asecuritysite.com", url: "https://asecuritysite.com/" },
  { name: "getmonero.org", url: "https://www.getmonero.org/" },
  { name: "bitcoin.org", url: "https://bitcoin.org/en/" },
  { name: "ethereum.org", url: "https://ethereum.org/" },
  { name: "nfa-to-dfa", url: "https://joeylemon.github.io/nfa-to-dfa/" },
  { name: "nandgame.com", url: "https://nandgame.com/" },
  { name: "neko.m1k1o.net", url: "https://neko.m1k1o.net/" },
  { name: "remotedesktop.google.com", url: "https://remotedesktop.google.com/?pli=1" },
  { name: "inv.nadeko.net", url: "https://inv.nadeko.net" },
  { name: "tokipona.org", url: "https://tokipona.org" },
  { name: "lang.sg", url: "https://lang.sg" },
  { name: "ragajunglism.org", url: "https://ragajunglism.org/" },
  { name: "lobste.rs", url: "https://lobste.rs" },
  { name: "news.ycombinator.com", url: "https://news.ycombinator.com" },
  { name: "blog.42.be", url: "https://blog.42.be/" },
  { name: "krebsonsecurity.com", url: "https://krebsonsecurity.com/" },
  { name: "straitbizarre.com", url: "https://straitbizarre.com/" },
  { name: "stackoverflow.com", url: "https://stackoverflow.com" },
  { name: "crypto.stackexchange.com", url: "https://crypto.stackexchange.com" },
  { name: "math.stackexchange.com", url: "https://math.stackexchange.com" },
];

const getFaviconUrl = (url: string) =>
  `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`;

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-hidden px-6">
      <head>
        <title>alexrother.com</title>
      </head>

      <header>
        <div className="mx-auto w-full max-w-2xl">
          <h1>alex rother</h1>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <section>
            <h2>about</h2>
            <p className="mt-2">
              I am a Computer Science Undergraduate at the University of Tennessee, Knoxville, graduating in Spring 2027. I am interested in systems
              programming, cybersecurity, computer networking, and web development.
            </p>
          </section>

          <address>
            <h2>contact</h2>
            <div className="contact-links mt-2">
              {contacts.map((contact) => (
                <a
                  aria-label={contact.label ?? contact.value}
                  className="contact-link"
                  href={contact.url}
                  key={contact.url}
                >
                  {contact.label ? (
                    <span className="contact-label">
                      <Image
                        alt=""
                        height={20}
                        src={contact.icon}
                        unoptimized
                        width={20}
                      />
                      {contact.label}
                    </span>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </address>

          <section>
            <div className="contact-links">
              <a
                className="contact-link"
                href="https://github.com/alexrother"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-label">
                  <Image
                    alt=""
                    className="github-logo"
                    height={20}
                    src="https://cdn.simpleicons.org/github"
                    unoptimized
                    width={20}
                  />
                  github
                </span>
                <span>github.com/alexrother</span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/qqalex"
                rel="noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" />
                <span>github.com/qqalex</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <footer className="site-ticker" aria-label="Useful links">
        <div className="site-ticker-track">
          {[...sites, ...sites].map((site, index) => (
            <a
              className="site-ticker-link"
              href={site.url}
              key={`${site.url}-${index}`}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt=""
                height={16}
                src={getFaviconUrl(site.url)}
                unoptimized
                width={16}
              />
              {site.name}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
