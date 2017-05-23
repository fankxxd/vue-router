<template>
	<div class="reset header">
		<div class="reset top"><img src="../../static/imgs/logo.png">
			<div class="tab-item">
				<router-link :to="'/main'">主页</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/info">信息</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/contact">联系</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='../../static/css/header.css'>

</style>