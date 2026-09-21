import Image from "next/image";

type LinkItem = {
  label?: string;
  value: string;
  url: string;
  external?: boolean;
};

const contacts: LinkItem[] = [
  {
    label: "phone",
    value: "(615) 763-3279",
    url: "tel:+16157633279",
  },
  {
    label: "email",
    value: "alex@alexrother.com",
    url: "mailto:alex@alexrother.com",
  },
  {
    value: "alex@eecs.utk.edu",
    url: "mailto:alex@eecs.utk.edu",
  },
];

const githubProfiles: LinkItem[] = [
  {
    label: "github",
    value: "github.com/alexrother",
    url: "https://github.com/alexrother",
    external: true,
  },
  {
    value: "github.com/qqalex",
    url: "https://github.com/qqalex",
    external: true,
  },
];

const experience = [
  {
    role: "Student Worker, OIT Networking",
    organization: "University of Tennessee, Knoxville, Tennessee",
    period: "May 2026–Present",
  },
  {
    role: "Student Intern, IT Assistant",
    organization: "Le Jardin Academy, Kailua, Hawaii",
    period: "Fall 2020–Spring 2021",
  },
];

const education = {
  program: "Computer Science Undergraduate",
  school: "University of Tennessee, Knoxville, Tennessee",
  period: "Fall 2023–Spring 2027",
};

const getFaviconUrl = (url: string) =>
  `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`;

function LinkRow({ link }: { link: LinkItem }) {
  const faviconUrl = link.url.startsWith("mailto:")
    ? getFaviconUrl(`https://${link.value.split("@")[1]}`)
    : link.url.startsWith("http")
      ? getFaviconUrl(link.url)
      : undefined;

  return (
    <a
      aria-label={link.label ?? link.value}
      className="contact-link"
      href={link.url}
      rel={link.external ? "noreferrer" : undefined}
      target={link.external ? "_blank" : undefined}
    >
      {link.label ? (
        <span className="contact-label">{link.label}</span>
      ) : (
        <span aria-hidden="true" />
      )}
      <span className="inline-flex items-center gap-2 underline underline-offset-4">
        {faviconUrl && <Image alt="" height={16} src={faviconUrl} unoptimized width={16} />}
        {link.value}
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex h-dvh min-h-0 flex-col overflow-hidden px-6">
      <header>
        <div className="mx-auto w-full max-w-2xl">
          <h1>Alex Rother</h1>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <section>
            <h2>About</h2>
            <p className="mt-2 ml-4">
              I am a computer programmer interested in Application Development, Web Development, Cybersecurity, and Computer Networking.
            </p>
          </section>

          <section>
            <h2>Experience</h2>
            <ol className="mt-2 ml-4 space-y-4">
              {experience.map((item) => (
                <li key={`${item.organization}-${item.period}`}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium">{item.role}</p>
                    <p className="shrink-0 text-right text-sm text-foreground/70">{item.period}</p>
                  </div>
                  <p className="text-sm text-foreground/70">{item.organization}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2>Education</h2>
            <div className="mt-2 ml-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-medium">{education.program}</p>
                <p className="shrink-0 text-right text-sm text-foreground/70">{education.period}</p>
              </div>
              <p className="text-sm text-foreground/70">{education.school}</p>
            </div>
          </section>

          <address>
            <h2>Contact</h2>
            <div className="contact-links mt-2 ml-4">
              {contacts.map((contact) => (
                <LinkRow key={contact.url} link={contact} />
              ))}
            </div>
          </address>

          <section>
            <h2>Accounts</h2>
            <div className="contact-links mt-2 ml-4">
              {githubProfiles.map((profile) => (
                <LinkRow key={profile.url} link={profile} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
