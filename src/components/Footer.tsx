import { usePortfolioContext } from "@/context/portfolio";

export default function Footer() {
  const { connect } = usePortfolioContext();
  return (
    <footer className="bg-muted py-8 px-4 md:py-24 md:px-12 lg:px-24">
      <div className="w-full flex justify-between flex-col md:flex-row gap-4 md:gap-6 flex-wrap">
        <div>
          <h3 className="mb-2 md:mb-4 text-xl font-medium">Where to Find Me</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Located in San Cristóbal, Táchira, Venezuela.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            A Global Citizen 🌎, connecting with the world.
          </p>
        </div>

        <div>
          <h3 className="mb-2 md:mb-4 text-xl font-medium">Links</h3>
          <ul className="text-muted-foreground text-sm md:text-base">
            <li className="hover:text-accent-foreground">
              <a href={connect.links.resume} target="_blank" rel="noreferrer">
                My Resume
              </a>
            </li>
            <li className="hover:text-accent-foreground">
              <a
                href={connect.links.repositories}
                target="_blank"
                rel="noreferrer"
              >
                My Repositories
              </a>
            </li>
            <li className="hover:text-accent-foreground">
              <a
                href={connect.links.recommendations}
                target="_blank"
                rel="noreferrer"
              >
                Recommendations
              </a>
            </li>
            <li className="hover:text-accent-foreground">
              <a
                href={connect.links.microverse}
                target="_blank"
                rel="noreferrer"
              >
                Join Microverse
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 md:mb-4 text-xl font-medium">Accounts</h3>
          <ul className="text-muted-foreground text-sm md:text-base">
            {connect.accounts.map((account, index) => (
              <li
                key={index + account.name}
                className="hover:text-accent-foreground"
              >
                <a target="_blank" rel="noreferrer" href={account.url}>
                  {account.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 md:mb-4 text-xl font-medium">Contact</h3>
          <ul className="text-muted-foreground text-sm md:text-base">
            <li className="hover:text-accent-foreground">
              <a href={connect.links.email} target="_blank" rel="noreferrer">
                {connect.email}
              </a>
            </li>
            <li className="hover:text-accent-foreground">
              <a href={connect.links.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
