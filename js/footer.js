// Dynamic Footer
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
                <img src="img/light-logo.png" class="logo" alt="Logo">

                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">men</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>

                    <ul class="category">
                        <li class="category-title">women</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>
                </div>
            </div>

            <p class="footer-title">about company</p>
            <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto, delectus nisi aut explicabo doloremque nobis officia recusandae deserunt sint consectetur vitae qui hic dolores nemo a dignissimos beatae porro expedita fuga quibusdam mollitia excepturi incidunt! Nesciunt esse et odio unde illum obcaecati? Blanditiis nesciunt quae maxime tempore quasi delectus repellat consectetur et ipsa non facere asperiores amet autem hic illo tempora deserunt expedita, incidunt fuga animi molestias placeat! Eum molestias ipsa id omnis, dolore quo laboriosam eaque nobis recusandae odio reiciendis corrupti sint vero beatae. Suscipit ad porro, id sed quo, placeat, culpa voluptatem quisquam sit corporis odit blanditiis?</p>
            <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>

            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>

                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>

            <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();