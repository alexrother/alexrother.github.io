import Image from "next/image";

const sites = [
  { name: "man7.org", url: "https://man7.org" },
  { name: "cppreference.com", url: "https://cppreference.com" },
  { name: "godbolt.org", url: "https://godbolt.org" },
  { name: "dogbolt.org", url: "https://dogbolt.org" },
  { name: "rosettacode.org", url: "https://rosettacode.org" },
  { name: "RISC-V Cheat Sheet", url: "https://projectf.io/posts/riscv-cheat-sheet/" },
  { name: "hoogle.haskell.org", url: "https://hoogle.haskell.org/" },
  { name: "julialang.org", url: "https://julialang.org/" },
  { name: "Starting Forth", url: "https://www.forth.com/wp-content/uploads/2018/01/Starting-FORTH.pdf" },
  { name: "webrtc.org", url: "https://webrtc.org/" },
  { name: "electronjs.org", url: "https://www.electronjs.org/" },
  { name: "python.org", url: "https://www.python.org/" },
  { name: "lua.org", url: "https://www.lua.org/" },
  { name: "wikipedia.org", url: "https://wikipedia.org" },
  { name: "arXiv.org", url: "https://arxiv.org" },
  { name: "browserleaks.com", url: "https://browserleaks.com/" },
  { name: "lookup.icann.org", url: "https://lookup.icann.org/en" },
  { name: "gnupg.org", url: "https://www.gnupg.org/" },
  { name: "openssl.org", url: "https://www.openssl.org/" },
  { name: "grapheneos.org", url: "https://grapheneos.org/" },
  { name: "signal.org", url: "https://signal.org/" },
  { name: "torproject.org", url: "https://www.torproject.org/" },
  { name: "mullvad.net", url: "https://mullvad.net" },
  { name: "spamhaus.com", url: "https://www.spamhaus.com/" },
  { name: "virustotal.com", url: "https://www.virustotal.com" },
  { name: "cobaltstrike.com", url: "https://www.cobaltstrike.com/" },
  { name: "sliver.sh", url: "https://sliver.sh/" },
  { name: "purelymail.com", url: "http://purelymail.com/" },
  { name: "coveryourtracks.eff.org", url: "https://coveryourtracks.eff.org/" },
  { name: "asecuritysite.com", url: "https://asecuritysite.com/" },
  { name: "Twemoji", url: "https://github.com/twitter/twemoji" },
  { name: "getmonero.org", url: "https://www.getmonero.org/" },
  { name: "bitcoin.org", url: "https://bitcoin.org/en/" },
  { name: "ethereum.org", url: "https://ethereum.org/" },
  { name: "nandgame.com", url: "https://nandgame.com/" },
  { name: "neko.m1k1o.net", url: "https://neko.m1k1o.net/" },
  { name: "tokipona.org", url: "https://tokipona.org" },
  { name: "lang.sg", url: "https://lang.sg" },
  { name: "lobste.rs", url: "https://lobste.rs" },
  { name: "news.ycombinator.com", url: "https://news.ycombinator.com" },
  { name: "blog.42.be", url: "https://blog.42.be/" },
  { name: "krebsonsecurity.com", url: "https://krebsonsecurity.com/" },
  { name: "stackoverflow.com", url: "https://stackoverflow.com" },
  { name: "stackexchange.com", url: "https://stackexchange.com" },
];

const bookmarkRows = Array.from({ length: 3 }, (_, row) =>
  sites.filter((_, index) => index % 3 === row),
);

const getFaviconUrl = (url: string) =>
  `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`;

export default function Bookmarks() {
  return (
    <main className="flex h-dvh min-h-0 flex-col overflow-hidden px-6">
      <header>
        <div className="mx-auto w-full max-w-2xl">
          <h1>Alex Rother</h1>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <section className="mx-auto w-full max-w-2xl">
          <h2>Bookmarks</h2>
          <div className="mt-2 space-y-2">
            {bookmarkRows.map((row, rowIndex) => (
              <div className="bookmark-row" key={rowIndex}>
                <div className="bookmark-track">
                  {[...row, ...row].map((site, index) => (
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
