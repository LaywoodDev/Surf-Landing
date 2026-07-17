export function PhoneShowcase() {
  return (
    <section className="phone-showcase" aria-label="App preview">
      <div className="phone-card phone-card--beige">
        <img
          src="/Hero/phone-1.png"
          alt="Surf call screen showing an active audio call"
          width="399"
          height="546"
        />
      </div>

      <div className="phone-card phone-card--gray">
        <img
          src="/Hero/phone-2.png"
          alt="Surf upgrade to Pro screen held in hand"
          width="468"
          height="534"
        />
      </div>
    </section>
  )
}
