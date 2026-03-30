import Contact from "../components/Contact";

const AboutMe = () => {
  return (
    <div className="px-4 text-lg font-normal text-justify sm:px-8 md:px-26 lg:px-48">
      <br />

      <p style={{ textIndent: "1.5rem", marginBottom: "1rem" }}>
        <span>
          {" "}
          Nama saya Shinta Dara Maghfirah, umur 16 tahun, alamat saya di
          kp.laksana jln. Tonggkol no.33A kec.Kuta alam{" "}
        </span>{" "}
      </p>

      <p style={{ textIndent: "1.5rem", marginBottom: "1rem" }}>
        {" "}
        saya bersekolah di MAN 1 MODEL BANDA ACEH sekarang saya duduk dikelas X
        dan saya memiliki minat belajar matematika
      </p>

      <p style={{ textIndent: "1.5rem", marginBottom: "1rem" }}>
        saya memiliki hobi seperti berlari, memasak dan juga olahraga lain
        seperti bersepeda karna bagi saya hobi yang saya miliki ini sangat
        bermanfaat bagi saya apalagi bagi kesehatan saya kemudian saya memiliki
        cita menjadi dokter,perawat dan ingin memasuki kedinasan yaitu PKN STAN,
        bagi saya sendiri untuk masuk dikedinasaan itu adalah tujuan utama saya
        karena masa depan yang terjamin dan juga biaya yang sudah ditanggung
        oleh negara
      </p>

      <p style={{ textIndent: "1.5rem" }}>
        dalam 5 tahun kedepan, saya mau jadi lulusan PKN STAN yang nanti saya
        inginkan ditugaskan diBanda Aceh
      </p>
      <Contact />
    </div>
  );
};

export default AboutMe;
