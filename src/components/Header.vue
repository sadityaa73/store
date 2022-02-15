<template>
  <div id="Header">
    <div id="headerStrip">
      <span class="fas fa-store"></span>
      <div id="search">
        <input
          type="search"
          placeholder="Search for products,brands and more"
          class="searchInput"
        />
        <span class="fas fa-search"></span>
      </div>
      <div id="btn-comp">
        <div id="btn-Login" @click="hover">{{ hover ? "" : "" }}Login</div>
      </div>
      <div id="more">More</div>
      <div id="cart">
        <span class="fas fa-cart-shopping"></span>
        <h2>Cart</h2>
      </div>
    </div>
  </div>
  <div v-if="HoverOnLogin" class="list">
    <ul class="loginExtn">
      <li>
        <div class="login-head">
          <span class="h1">New Customer ?</span>
          <span class="h2">Sign Up</span>
        </div>
      </li>
      <li class="Profile">
        <span class="fas fa-user"></span>
        <h2>My Profile</h2>
      </li>
      <li class="Orders">
        <span class="fas fa-bag-shopping"></span>
        <h2>Orders</h2>
      </li>
      <li class="WishList">
        <span class="fas fa-cart-arrow-down"></span>
        <h2>Wishlist</h2>
      </li>
    </ul>
  </div>
</template>
<script scoped>
export default {
  components: {},
  data: function () {
    return {
      HoverOnLogin: "",
    };
  },
  methods: {
    hover() {
      this.HoverOnLogin = !this.HoverOnLogin;
    },
  },
};
</script>
<style scoped>
#Header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
}
#headerStrip {
  display: flex;
  justify-content: center;
}
.fa-store {
  font-size: 44px;
  margin-right: 9px;
}
.searchInput {
  width: 602px;
  height: 44px;
  border: 0px;
}
#search {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 610px;
  height: 45px;
  border: 1px solid;
  background-color: green;
  box-shadow: 2px 2px 28px 5px;
}
.fa-search {
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 11px;
  width: 46px;
}
#btn-Login {
  border: 1px solid;
  margin-left: 61px;
  width: 123px;
  height: 34px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: sans-serif;
  color: blue;
  background: white;
  box-shadow: 1px 2px 18px 0px;
}
#more {
  border: 0px solid;
  display: flex;
  align-items: center;
  height: 34px;
  margin-top: 6px;
  margin-left: 62px;
  width: 93px;
  justify-content: center;
  font-size: 20px;
  font-family: sans-serif;
  color: white;
}
#cart {
  display: flex;
  align-items: center;
  border: 0px solid;
  height: 34px;
  margin-top: 6px;
  justify-content: center;
  margin-left: 18px;
  color: white;
}
.fa-cart-shopping {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cart h2 {
  font-size: 20px;
  font-family: serif;
  margin-left: 9px;
}
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 263px;
  margin-left: 817px;
  padding: 0px;
}
.loginExtn {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
}
.h1 {
  margin-right: 62px;
  margin-left: 14px;
  font-size: 17px;
  font-family: sans-serif;
}
.h2 {
  margin-left: -15px;
  color: blue;
  font-size: 17px;
  font-family: sans-serif;
}
.fa-user {
  font-size: 20px;
  margin-left: 16px;
  margin-top: 9px;
}
.fa-bag-shopping {
  font-size: 20px;
  margin-left: 16px;
  margin-top: 9px;
}
.fa-cart-arrow-down {
  font-size: 20px;
  margin-left: 16px;
  margin-top: 9px;
}
.Profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.Profile h2 {
  margin-left: 11px;
  font-family: sans-serif;
  font-size: 14px;
}
.Orders {
  display: flex;
}
.Orders h2 {
  margin-left: 11px;
  font-family: sans-serif;
  font-size: 14px;
}
.WishList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.WishList h2 {
  margin-left: 11px;
  font-family: sans-serif;
  font-size: 14px;
}
</style>
