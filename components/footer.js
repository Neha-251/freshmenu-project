function footer() {
    return ` <hr>
    <div id="badadiv">

        <div id="dodiv1">

            <div class="teendiv">
                <h3>COMPANY</h3>
                <h4>FAQ</h4>
                <h4>About</h4>
                <h4>Career</h4>
                <h4>Blog</h4>
                <br>
                <br>
                <div id="chotadiv" style="display: flex;">
                    <h3>Terms</h3>
                    <h3>Privacy</h3>
                </div>
            </div>

            <div class="teendiv">
                <h3>HELP & CONTACT</h3>
                <h4>Help Center</h4>
                <h4>Email Us</h4>
                <h4>080-4042-4242</h4>
            </div>

            <div class="teendiv">
                <h3>MORE FROM US</h3>
                <h4>Bulk/Party Order</h4>
                <h4>Cake Orders</h4>
                <h4>Fresh Club</h4>
                <h4>Offers</h4>
            </div>

        </div>

        <div id="dodiv2">

          <div id="dodiv21">
              <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
          </div>

          <div id="dodiv22">
              <input id="inp" type="text" placeholder="Enter Your Email">
              <button id="btn1">Subscribe</button>
          </div>

          <div style="margin-top: 70px;" id="dodiv23">

              <div id="dodiv231">
                <img id="btn1img" src="https://www.freshmenu.com/pages/common/images/google-play.jpg" alt="">
                <img id="btn2img" src="https://www.freshmenu.com/pages/common/images/btn-app-store-normal-2.svg" alt="">
              </div>

              <div id="dodiv232">
                <div>
                    <img src="https://i0.wp.com/traffordrapecrisis.com/wp-content/uploads/2017/12/facebook-logo-grey1.png?ssl=1" alt="">
                </div>

                <div>
                    <img src="data:image/png;base64,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" alt="">
                </div>

                <div>
                    <img src="data:image/png;base64,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" alt="">
                </div>
              </div>
             
          </div>

        </div>

    </div>


    <div id="nichekadiv">

    <div id="andarkadiv">

        <div id="nichekadiv1">
            <h3>CATEGORIES</h3>
            <h4>Mains</h4>
            <h4>Pizzas</h4>
            <h4>Salads</h4>
            <h4>Desserts</h4>
            <h4>Quickbites</h4>
        </div>


        <div id="nichekadiv1">
            <h3>CUISINES</h3>
            <h4>Indian</h4>
            <h4>Chinese</h4>
            <h4>Italian</h4>
            <h4>American</h4>
        </div>

        <div id="nichekadiv3">
            <h4>Mexican</h4>
            <h4>Thai</h4>
            <h4>Continental</h4>
            <h4>Mediterranean</h4>
        </div>

    </div>
       

    </div>`

}

export default footer