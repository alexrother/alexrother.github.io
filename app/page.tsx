import Image from "next/image";

type LinkItem = {
  label?: string;
  value: string;
  url: string;
  icon?: string;
  iconClassName?: string;
  external?: boolean;
};

const contacts: LinkItem[] = [
  {
    label: "phone",
    value: "(615) 763-3279",
    url: "tel:+16157633279",
    icon: "/icons/phone.svg",
  },
  {
    label: "email",
    value: "alex@alexrother.com",
    url: "mailto:alex@alexrother.com",
    icon: "/icons/email.svg",
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
    icon: "/icons/github.webp",
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
    organization: "University of Tennessee, Knoxville",
    period: "May 2026–Present",
  },
  {
    role: "Student Intern, IT Assistant",
    organization: "Le Jardin Academy",
    period: "2020–2021",
  },
];

function LinkRow({ link }: { link: LinkItem }) {
  return (
    <a
      aria-label={link.label ?? link.value}
      className="contact-link group"
      href={link.url}
      rel={link.external ? "noreferrer" : undefined}
      target={link.external ? "_blank" : undefined}
    >
      {link.label ? (
        <span className="contact-label">
          {link.icon && (
            <Image
              alt=""
              className={link.iconClassName}
              height={20}
              src={link.icon}
              unoptimized
              width={20}
            />
          )}
          {link.label}
        </span>
      ) : (
        <span aria-hidden="true" />
      )}
      <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">{link.value}</span>
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
              Computer Science Undergraduate at the University of Tennessee, Knoxville, graduating in Spring 2027. Interests include systems
              programming, cybersecurity, computer networking, and web development.
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
