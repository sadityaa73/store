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
      <div id="btn-Login">Login</div>
      <div id="more">More</div>
      <div id="cart">
        <span class="fas fa-cart-shopping"></span>
        <h2>Cart</h2>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function () {
    return {};
  },
};
</script>
<style scoped>
#Header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  height: 70px;
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
  margin-left: 26px;
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
</style>
