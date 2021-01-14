<template>
  <footer class="myFooter">
    <div class="myContainer">
      <div class="row mx-0">
        <div class="col-sm-3">
          <h4>Stations</h4>
          <ul>
            <li>
              <a href>Mien Dong station</a>
            </li>
            <li>
              <a href>Mien Dong station</a>
            </li>
            <li>
              <a href>Mien Dong station</a>
            </li>
            <li>
              <a href>Mien Dong station</a>
            </li>
            <li>
              <a href>Mien Dong station</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h4>Trip</h4>
          <ul>
            <li>
              <a href>Xe đi Vũng Tàu từ Sài Gòn</a>
            </li>
            <li>
              <a href>Xe đi Vũng Tàu từ Sài Gòn</a>
            </li>
            <li>
              <a href>Xe đi Vũng Tàu từ Sài Gòn</a>
            </li>
            <li>
              <a href>Xe đi Vũng Tàu từ Sài Gòn</a>
            </li>
            <li>
              <a href>Xe đi Vũng Tàu từ Sài Gòn</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href>Introduce</a>
            </li>
            <li>
              <a href>News</a>
            </li>
            <li>
              <a href>Recruitment</a>
            </li>
            <li>
              <a href>Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h4>Support</h4>
          <ul>
            <li>
              <a href>Paymnet</a>
            </li>
            <li>
              <a href>Policy</a>
            </li>
            <li>
              <a href>Question</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.myFooter {
  margin-top: 80px;
  padding: 50px 0 30px;
  background: 0% 0% no-repeat padding-box padding-box rgb(243, 243, 243);
  text-align: left;
  .row {
    ul {
      list-style: none;
      padding-left: 0;
      li {
        a {
          color: rgb(118, 118, 118);
          padding: 6px 0;
          &:hover {
            color: rgb(0, 96, 196);
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
