export function Partners() {
  const partners = [
    'Sotheby\'s International Realty',
    'Christie\'s Real Estate',
    'Coldwell Banker',
    'RE/MAX',
    'Keller Williams',
    'Compass'
  ];

  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide uppercase text-muted-foreground">
            Trusted Partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 px-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-center font-medium text-foreground/80 text-sm">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
