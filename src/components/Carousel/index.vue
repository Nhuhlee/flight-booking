<template>
  <section class="myCarousel">
    section
    <img src="https://images5.alphacoders.com/863/863248.jpg" alt />
    <div class="myCarousel-banner">
      <div class="myCarousel-banner__content w-100">
        <h2
          style="
            text-transform: uppercase;
            color: rgb(255, 197, 0);
            text-shadow: 0 0 5px white;
          "
        >
          Hệ thống đặt vé máy bay
        </h2>
        <div class="myCarousel-banner__search">
          <div class="row mx-0">
            <div class="col-sm-5 row-flex justify-content-between">
              <div
                class="d-flex justify-content-between align-items-center w-100"
              >
                <i class="fa fa-map-marker-alt mr-3"></i>
                <!-- <input type="text" placeholder="Ho Chi Minh" /> -->
                <!--  -->
                <select class="custom-select shadow-none border-0">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <!--  -->
              <div class="d-flex align-items-center justify-content-center">
                <div class="myCarousel-banner__divide"></div>
                <i
                  class="fa fa-exchange-alt"
                  style="
                    font-size: 25px;
                    border: 1px solid #007aff;
                    padding: 5px;
                    border-radius: 50%;
                    background: white;
                    z-index: 10;
                    margin-left: 2px;
                  "
                ></i>
              </div>
            </div>

            <div class="col-sm-5 row-flex justify-content-between">
              <div
                class="d-flex justify-content-between align-items-center w-100"
              >
                <i class="fa fa-map-marker-alt mr-3"></i>
                <!-- <input type="text" placeholder="Ho Chi Minh" /> -->
                <!--  -->
                <select class="custom-select shadow-none border-0">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <!--  -->

              <!-- <div class="myCarousel-banner__divide"></div> -->
            </div>

            <!-- <div class="col-sm-2 row-flex">
              <i class="fa fa-calendar-alt mr-3"></i>
              <input type="text" id="datepicker" />
            </div> -->
            <div
              class="col-sm-2 btn-search row-flex rounded-right justify-content-center"
              style="padding: 0"
            >
              <button
                type="button"
                class="btn btn-warning text-white"
                style="border: none; height: 100%; padding: 0; width: 100%"
              >
                SEARCH TICKET
              </button>
            </div>
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
.myCarousel {
  width: 100%;
  height: 550px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1;
  transition: all 200ms ease 0s;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .myCarousel-banner {
    position: relative;
    width: 980px;
    height: 100%;
    display: flex;
    align-items: center;
    .myCarousel-banner__content {
      h2 {
        font-size: 34px;
        font-weight: 500;
        margin-bottom: 22px;
        color: white;
        text-align: center;
      }
      .myCarousel-banner__search {
        // background: rgba(255, 255, 255, 0.64);
        background: #fff;
        color: #484848;
        border-radius: 5px;
        height: 60px;
        font-size: 16px;
        .row {
          height: 100%;
          .btn-search {
            background: rgb(255, 197, 0);
            font-weight: bold;
          }
          i {
            color: rgb(0, 122, 255);
          }
          .myCarousel-banner__divide {
            width: 1px;
            height: 37px;
            background: rgb(187, 187, 187);
            transform: translateX(15px);
          }
          input {
            border: none;
            width: 100%;
            &:focus {
              outline: none;
            }
          }
        }
        .row-flex {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
