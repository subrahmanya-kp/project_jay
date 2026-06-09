const testimonials = [
  {
    quote: "Dr Nagalakshmi listened to all our problems and diagnosed the things perfectly which never worked for us previously even after going to multiple places. She writes the perfect medicine which suits our skin.",
    name: "Verified Patient",
    detail: "Skin consultation, Bangalore",
    initials: "VP",
  },
  {
    quote: "Dr. Nagalakshmi is very knowledgeable and takes the time to truly listen. Since starting the treatment plan, I have noticed real improvement in my condition. I am very grateful and would highly recommend her.",
    name: "Verified Patient",
    detail: "Dermatology consultation, Bangalore",
    initials: "VP",
  },
  {
    quote: "I struggled with warts on my leg for a long time and tried so many ways to remove them. I finally decided to visit this clinic, and I'm so glad I did. The treatment here actually worked! The progress is incredible.",
    name: "Verified Patient",
    detail: "Wart treatment, Bangalore",
    initials: "VP",
  },
  {
    quote: "I was suffering from a fungal infection for several months. Dr. Nagalakshmi listened very patiently and prescribed the right medicine. After the treatment, my finger is returning to its previous condition.",
    name: "Verified Patient",
    detail: "Fungal infection treatment, Bangalore",
    initials: "VP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="band alt">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">Patient Voices</span>
          <h2 className="h-section">What Our Patients Say</h2>
          <p className="lead">Real feedback from patients treated at Pranava Skin, Hair &amp; Aesthetics Clinic.</p>
        </div>

        <div className="quote-grid">
          {testimonials.map((t, i) => (
            <article className="quote-card" key={i}>
              <div className="stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="quote-who">
                <div className="av">{t.initials}</div>
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="mt">{t.detail}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
