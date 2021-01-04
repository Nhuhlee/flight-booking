<template>
  <div>
    <h1>About Page</h1> 
  </div>
  <div v-if="loading"><Loader /></div>
  <div class="container mt-5" v-else>
    <div class="row">
      <h3>Nộp dự án cuối khóa - Deadline 04/01/2021</h3>
    </div>
    <div class="row">
      <ol>
      <li>PROJECT CUỐI KHÓA</li> 
      <li>Tạo thêm 1 file Note.txt: ghi chú từng chức năng, thành viên trong nhóm làm những chức năng gì</li>
      <li>Deploy lên server sau đó ghi link vào file note.txt (để tiện lợi cho việc chấm bài)</li>
      <li>Trung tâm sẽ tập hợp lại và tổ chức buổi bảo vệ cuối khóa cho các bạn, sau đó sẽ cấp Certificate</li>
      <li>Bạn nào ko bảo vệ, điểm tối đa của project là 8.0</li>
      <li>Deadline 04/01/2021 nhé</li>
      </ol>
    </div>
  </div>
 
  
</template>

<script>
export default {

}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>