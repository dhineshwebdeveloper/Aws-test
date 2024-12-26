const DomainTwo = () => {
  return (
    <section className="domain-name-area section-padding pt-0">
      <div className="container">
        <div className="domain-name-wrapper style-2">
          <h3
            className="text-white "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Find Your Perfect Domain Name
          </h3>
          <form
            action="#"
            className="domain-input-form "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="domain-input">
              <input type="text" placeholder="domain.com" />
              <button className="theme-btn bg-color-2" type="submit">
                Search Now
              </button>
              <div className="select-area">
                <select name="cate" className="category">
                  <option value="1">.com</option>
                  <option value="1">.net</option>
                  <option value="1">.info</option>
                  <option value="1">.store</option>
                </select>
              </div>
            </div>
          </form>
          <ul className="domain-list">
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <span>.com</span>
              $9.95
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <span>.Info</span>
              $11.99
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <span>.Net</span>
              $8.95
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              <span>.Store</span>
              $10.50
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
              <span>.ORG</span>
              $11.95
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DomainTwo;
