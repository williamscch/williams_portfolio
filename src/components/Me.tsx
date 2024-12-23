import { Link } from "react-scroll";
import image from "@/assets/me.png";
import { Button } from "@/ui/button";
import { usePortfolioContext } from "@/context/portfolio";

export default function Me() {
  const { connect } = usePortfolioContext();

  return (
    <section id="me" className="w-full h-[94vh] bg-muted">
      <div className="relative h-full">
        <img
          src={image}
          alt="image"
          className="z-10 absolute md:left-[5%] xl:left-[10%] object-contain h-full"
        />
      </div>
      <div className="z-20 w-full h-full absolute top-0 left-0 bg-[#ffffffc3] xl:bg-transparent flex items-center justify-end px-6 md:px-24">
        <div className="flex flex-col gap-4 text-end items-end">
          <h1
            className="text-5xl font-medium text-accent-foreground drop-shadow-[0_2px_2px_#ffffff7f]
"
          >
            I&apos;m Williams Colmenares
          </h1>
          <span className="drop-shadow-[0_2px_2px_#ffffff7f] flex flex-col">
            <p>"Turning code into engaging digital experiences"</p>
            <p className="italic text-muted-foreground">
              Front-End Software Engineer | Full-Stack Developer
            </p>
          </span>

          <ul className="flex gap-4">
            {connect.accounts.map((account, index) => (
              <li
                key={index + account.name}
                className="transition-transform transform hover:scale-75 duration-300 ease-in-out active:opacity-60"
              >
                <a href={account.url} target="_blank" rel="noreferrer">
                  <account.icon />
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-fit" type="button">
            <Link
              to="portfolio"
              spy
              smooth
              hashSpy
              offset={40}
              delay={200}
              duration={600}
            >
              Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
