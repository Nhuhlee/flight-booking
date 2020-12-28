<template>
  <section class="mySystem myContainer">
    <h3>System Booking Ticket</h3>
    <div class="row mx-0">
      <div class="col-sm-3 px-0">
        <div class="mySystem-group">
          <img
            src="https://storage.googleapis.com/fe-production/svgIcon/static-icon-1.svg"
            alt=""
          />
          <div class="mySystem-group__detail">
            <h3>5000+</h3>
            <h3>Route</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-3 px-0">
        <div class="mySystem-group">
          <img
            src="https://storage.googleapis.com/fe-production/svgIcon/static-icon-2.svg"
            alt=""
          />
          <div class="mySystem-group__detail">
            <h3>2000+</h3>
            <h3>Trip</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-3 px-0">
        <div class="mySystem-group">
          <img
            src="https://storage.googleapis.com/fe-production/svgIcon/static-icon-3.svg"
            alt=""
          />
          <div class="mySystem-group__detail">
            <h3>5000+</h3>
            <h3>Agent</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-3 px-0">
        <div class="mySystem-group">
          <img
            src="https://storage.googleapis.com/fe-production/svgIcon/static-icon-4.svg"
            alt=""
          />
          <div class="mySystem-group__detail">
            <h3>2000+</h3>
            <h3>Station</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mySystem {
  margin-top: 50px;
  text-align: left;
  .mySystem-group {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 111px;
    opacity: 1;
    margin-right: 16px;
    border-width: 1px;
    border-style: outset;
    border-color: rgba(0, 0, 0, 0.06);
    border-image: initial;
    border-radius: 4px;
    img {
      width: 50px;
      height: 45px;
      margin-right: 15px;
      margin-left: 10px;
    }
    .mySystem-group__detail {
      width: 50%;
      height: 60%;
      text-align: center;
      font-size: 16px;
      h3 {
        font-size: 22px;
      }
      h3:first-child {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
