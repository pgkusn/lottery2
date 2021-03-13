<template>
    <div class="container">
        <div class="lottoContainer">
            <div class="title">Lottery Game</div>
            <div class="lottoMainPanel">
                <div class="panelContainer">
                    <div class="imgBox" :style="{backgroundImage:`url(https://pbs.twimg.com/media/C8PDDBMUwAAuid4.jpg)`}">
                        <div class="userName">我是玩家1</div>
                    </div>
                    <div class="btnBox">
                        <div class="statBtn">開始</div>
                        <!-- <div class="statBtn">停止</div>
                        <div class="statBtn">抽選中...還剩 ? 人</div> -->
                    </div>
                    <div class="title">設定中獎人數</div>
                    <div class="winnerSumBox">
                        <div class="option minus"></div>
                        <div class="winPlayerSum">1</div>
                        <div class="option plus"></div>
                    </div>
                </div>
            </div>
            <div class="lottoWinners">
                <div class="title">中獎名單</div>
                <div class="winnerLists">
                    <div class="item">
                        <div class="imgBox" :style="{backgroundImage:`url(https://pbs.twimg.com/media/C8PDDBMUwAAuid4.jpg)`}"></div>
                        <div class="userName">我是玩家1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
body {
  font-size: 14px;
  font-family: '微軟正黑體';
  background-color: #e76345;
  color: #fff;
}
.container {
  width: 700px;
  margin: 50px auto;
}
.lottoContainer {
  min-height: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
}
.lottoContainer:after {
  content: '';
  width: 0;
  display: block;
  clear: both;
}
.lottoMainPanel,
.lottoWinners {
  float: left;
}
.lottoMainPanel {
  width: 65%;
}
.lottoWinners {
  width: 35%;
}
.panelContainer {
  width: 200px;
  margin: auto;
  text-align: center;
}
.title {
  font-size: 20px;
  padding: 20px 0;
  text-align: center;
}
.panelContainer > .imgBox {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 3px solid #f5b43a;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
}
.btnBox {
  text-align: center;
}
.btnBox {
  padding: 20px 0;
}
.btnBox > .statBtn {
  display: inline-block;
  background-color: #f29807;
  border: 1px solid #f29807;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 0px #a17020;
}
.btnBox > .statBtn.start {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px 0px #a17020;
  background-color: transparent;
  color: #f29807;
}
.imgBox > .userName {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
.lottoWinners {
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
}
.lottoWinners > .title {
  font-size: 16px;
  text-align: center;
  padding: 5px;
  color: #f5b43a;
  position: relative;
}
.lottoWinners > .title::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  width: 100%;
  background-color: -webkit-linear-gradient(
    left,
    rgba(248, 215, 59, 0),
    #f0d03a,
    rgba(248, 215, 59, 0)
  );
  height: 1px;
}
.lottoWinners > .winnerLists {
  padding: 0 15px 10px;
  max-height: 300px;
  overflow-y: auto;
}
.winnerLists > .item::after {
  content: '';
  width: 0;
  display: block;
  clear: both;
}
.item {
  padding: 10px;
}
.item + .item {
  border-top: 1px solid #f5b43a;
}
.item > div {
  float: left;
}
.item > .imgBox {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f5b43a;
}
.imgBox {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.item > .imgBox > img {
  width: 100%;
  vertical-align: middle;
}
.item > .userName {
  width: calc(100% - 50px);
  line-height: 50px;
  padding: 0 10px;
}
.winnerSumBox {
  font-size: 0;
}
.winnerSumBox > div {
  display: inline-block;
  padding: 0 10px;
  font-size: 14px;
  vertical-align: middle;
  height: 30px;
  line-height: 30px;
  min-width: 30px;
}
.winnerSumBox > .option {
  cursor: pointer;
  position: relative;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
}
.winnerSumBox > .minus:active,
.winnerSumBox > .plus:active {
  transform: scale(0.9);
}
.winnerSumBox > .minus:before,
.winnerSumBox > .plus:before,
.winnerSumBox > .plus:after {
  content: '';
  width: 50%;
  height: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
}
.winPlayerSum {
  -moz-user-select: none; /* for Firefox */
  -webkit-user-select: none; /* for Chrome */
  user-select: none;
}
.winnerSumBox > .plus:after {
  transform: rotate(90deg);
}
@media only screen and (max-width: 415px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .lottoMainPanel,
  .lottoWinners {
    width: 100%;
  }
  .lottoWinners {
    margin-top: 20px;
  }
}
</style>
