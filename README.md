[Delivery is pet project - platform which consolidates few sources of restaurants.]

Main page
On the main pages is fetched data about available restaurants and data with each restaurant goods (products) from server.
Goods can be added to basket only from single restaurant at which time menu of other restaurants are "freezed".
For convenience there is "clear basket" button at header, which appears, when some goods are added into basket.
By clicking on product image you will be forwarded to page with full product data and possibility to add it into basket.

Basket page
Consists of form and list of goods added to basket, and small box with amount of basket, dicount and final amount for payment.
At basket quantity of goods can be changed by buttons "+" or "-".
After form submitting data about order and cutomer is sent to server and will be seen at orders page.
Size of dicount calculated automaticaly based on which dicount is higher if multipile discounts can be used for one order.

Orders page
Consists of form for searching of data about previous orders by phone number.
Lower is grid with data about present order and past orders if form was submited

Coupones page
Consist of list of available dicounts, which are fetched from the server.

[App markup is made for following screen resolutions] 
* - 1201px;
1200px - 993px;
992px - 769px;
768px - 577px;
576px - 320px;

[Technologies]
React
React-helmet
React-transition-group
ReduxToolkit
Styled-components
Formik & Yup

Server was made by using Express (https://github.com/DSidorchuk/deliveryAppBackend/tree/main)

