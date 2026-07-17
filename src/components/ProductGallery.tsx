const phones = [
  {
    src: '/Product/phone%201.png',
    alt: 'Surf chat list screen',
  },
  {
    src: '/Product/phone%202.png',
    alt: 'Surf audio call screen',
  },
  {
    src: '/Product/phone%203.png',
    alt: 'Surf sign up screen',
  },
  {
    src: '/Product/phone%204.png',
    alt: 'Surf Upgrade to Pro screen',
  },
]

export function ProductGallery() {
  return (
    <section className="product-gallery" id="product">
      <div className="product-header">
        <h2>Product</h2>
        <p>
          Everything you need to stay connected, organized, and productive in
          one place.
        </p>
      </div>

      <div className="product-phones">
        {phones.map((phone) => (
          <div key={phone.src} className="product-phone">
            <img src={phone.src} alt={phone.alt} width="306" height="631" />
          </div>
        ))}
      </div>
    </section>
  )
}
