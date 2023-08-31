<div class="grid w-full h-full place-items-center">
	<div class="sticker_container">
		<div class="sticker_body">
			<div class="sticker_mountain" />
		</div>
	</div>
</div>

<style>
	.sticker_container {
		background-color: #293462;
		width: 300px;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sticker_body {
		width: 200px;
		height: 200px;
		border-radius: 100%;
		background-color: rgb(254 249 195);
		overflow: hidden;
	}

	.sticker_mountain {
		height: 100%;
		width: 100%;
		background-color: #fe5f55;
		clip-path: polygon(33% 70%, 72% 30%, 100% 60%, 100% 100%, 0 100%, 0 80%, 21% 57%);
	}
</style>
