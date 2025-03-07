import React, { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import Card from "../components/Card";
import Modal from "../components/Modal";
import logo1 from "../assets/dumb/info.png";
import logo2 from "../assets/dumb/call.png";
import logo3 from "../assets/dumb/house (2).png";
import Footer from "../components/Footer";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1>
            Temukan kos{" "}
            <span>
              sesuai <br />
              dengan kemauan
            </span>{" "}
            Anda !
          </h1>
          <img className="image1" src="../src/assets/dumb/Ellipse.png" alt="Ellipse" />
          <img className="image2" src="../src/assets/dumb/laptop.png" alt="Laptop" />
        </div>
        <p>
          <span>Kostify</span> membantu anda mencari kos sesuai dengan <br />
          spesifikasi, harga, dan lokasi yang anda inginkan.
        </p>
      </section>

      <section className="section2">
        <div className="container2">
          <img className="image3" src="../src/assets/dumb/Silhouette.png" alt="Silhouette" />
          <div className="card-container">
            <Card
              title="Informasi Data Kos Lengkap"
              content="Kostify memanfaatkan teknologi dengan mengelola dan menyajikan daftar kos dengan penjelasan fasilitas secara terperinci dan dilengkapi dengan foto serta detail dari setiap kos."
              logoUrl={logo1}
            />
            <Card
              title="Penghubung Pemilik dan Pencari Kos"
              content="Kami dapat menjadi penghubung antara pencari dan pemilik kos. Inovasi yang kami lakukan bertujuan untuk memberikan kenyamanan dan kemudahan bagi penyewa dan pemilik kos."
              logoUrl={logo2}
            />
            <Card
              title="Data Kos/Asrama SMK Telkom Malang"
              content="Kostify menyediakan seluruh data kost yang bekerja sama dengan SMK Telkom Malang, agar calon penghuni mendapatkan kemudahan dalam pencarian kos."
              logoUrl={logo3}
            />
          </div>
        </div>
        <div className="search">
          <h1>Mau cari kost?</h1>
          <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
          <br />
          <br />
          {posts.map((props, index) => (
            <Article {...props} key={index} onArticleClick={handleArticleClick} />
          ))}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
      {selectedArticle && (
        <Modal
          isOpen={!!selectedArticle}
          onClose={handleCloseModal}
          article={selectedArticle}
        />
      )}
    </>
  );
}

export default Homepage;
