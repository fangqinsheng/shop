<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 编辑会员</span>
        <el-form :model="EditForm" :inline="true" status-icon ref="EditForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称" prop="name" required>
            <el-input type="password" v-model="EditForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="EditForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="地区" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="会员备注" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="age" required="">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="邮编" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
          <el-form-item label="固定电话" prop="age">
            <el-input v-model.number="EditForm.age"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="他的订单">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="订单号"></el-table-column>
          <el-table-column prop="name" label="订单状态"></el-table-column>
          <el-table-column prop="address" label="支付状态"></el-table-column>
          <el-table-column prop="address" label="下单时间"></el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="他的收货地址">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="收货人"></el-table-column>
          <el-table-column prop="name" label="所在地区"></el-table-column>
          <el-table-column prop="address" label="详细地址"></el-table-column>
          <el-table-column prop="address" label="手机号码"></el-table-column>
          <el-table-column prop="address" label="默认"></el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data(){
    return {
      EditForm: {
        EditForm: {

        }
      },
      EditTable: []
    }
  }
}
</script>

<style scoped lang="scss">
.el-pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
