<template>
  <div class="container">
    <el-table :data="table" stripe style="width: 100%"><el-table-column prop="date" label="日期" width="180">
    </el-table-column>
      <el-table-column prop="code" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="date" label="下单时间"></el-table-column>
      <el-table-column prop="total" label="订单总额"></el-table-column>
      <el-table-column prop="consignee" label="收货人"></el-table-column>
      <el-table-column prop="status" label="订单状态"></el-table-column>
      <el-table-column prop="method" label="发货方式"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Refund",
  data(){
    return {
      table: [
        {
          code: '2322',
          date: '',
          total: '',
          consignee: '',
          status: '',
          method: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
