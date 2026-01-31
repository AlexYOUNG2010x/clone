const universities = [
  { name: "Harvard University", url: "https://harvard.edu", logo: "https://www.harvard.edu/wp-content/uploads/2021/02/Veritas_and_Adorned_Shield_2880x1920_RGB-1024x683.png" },
  { name: "Duke University", url: "https://duke.edu", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Duke_University_logo.svg/1280px-Duke_University_logo.svg.png" },
  { name: "Stanford University", url: "https://stanford.edu", logo: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/the-meaning-behind-the-stanford-university-logo.png" },
  { name: "Yale University", url: "https://yale.edu", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1143px-Yale_University_Shield_1.svg.png" },
];

export default function Universities() {
  return (
    <section className="border-b border-white/10 bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          TRUSTED BY STUDENTS AT
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {universities.map((u) => (
            <a
              key={u.name}
              href={u.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-32 items-center justify-center grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
            >
              <img src={u.logo} alt={u.name} className="max-h-12 max-w-full object-contain" />
            </a>
          ))}
          {universities.map((u) => (
            <a
              key={`${u.name}-2`}
              href={u.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-32 items-center justify-center grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
            >
              <img src={u.logo} alt={u.name} className="max-h-12 max-w-full object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
