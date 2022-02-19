<template>
  <div id="top-body">
        <router-view></router-view>
    <section class="images">
      <!-- メモ：後ろの画像はback-groud -->
      <div class="box imageanimationleft">
        <p class="imagestextleft">テキストメッセージ</p>
      </div>
      <div class="box imageanimationcenter">
        <p class="imagestextcenter">
          テキストメッセージ<br>
          テキストメッセージ
        </p>
      </div>
      <div class="box imageanimationright">
        <p class="imagestextright">
          テキストメッセージ<br>
          テキストメッセージ<br>
          テキストメッセージ
        </p>
      </div>
    </section>

    <section class="anchor">
      <span class="anchor-text pointer" @click="applyScroll">
        プロフィール<br>
        ⌵
      </span>
    </section>
    <!-- <transition appear> -->
      <section class="apply" id="apply">
        <div class="box b-green">
          <h2 class="t-center">
            あなたは<br>
            なぜ<br>
            我が社に？<br>
          </h2>
          <div class="t-center w-max">
            <router-link to="first">
              <span class="t-center">リンク先</span>
            </router-link>
          </div>
        </div>
        <div class="box b-blue">
          <h2 class="t-center">
            あなたは<br>
            どうなりたい？<br>
          </h2>
          <div class="t-center w-max">
            <router-link to="first">
              <span class="t-center">リンク先</span>
            </router-link>
          </div>
        </div>
      </section>
    <!-- </transition> -->
    <section class="disablity">
      <router-link to="/first">
      <span class="lin">別リンク</span>
      </router-link>
    </section>

    <section class="other">
      <div class="inner">
        <h3>その他グループ</h3>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
        <div class="companies">
          <h4>タイトル</h4>
          <div class="toggleArea">
            <p>
              <strong>企業名<br></strong>
              コメント-------------------------
            </p>
            <router-link
            to="second"
            class="sec"
            >
              <span class="blue-btn">企業サイトへ</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer">
        フッター
      </div>
    </footer>
  </div>
  <router-view/>
</template>

<style scoped lang="scss">
@import './sass/app.scss';
@import './sass/default.scss';
@import './sass/reset.scss';

#top-body{
  .t-center{
    text-align: center;
  }
  .w-max{
    width: 100%;
  }
  .b-green{
    background-color: rgba(172, 255, 47, 0.486);
  }
  .b-blue{
    background-color: rgba(135, 135, 235, 0.603);
  }
  box-sizing: border-box;
  width: 100%;
  border: solid #5B6DCD 5px;
  
  

  .anchor{
    height: 100px;
    z-index: 2;
    background-color: #000;
    text-align: center;

    .anchor-text{
      text-decoration: none;
      list-style: none;
      font-size: 36px;
      color: #fff;
    }
  }

  .apply{
    display: flex;
    .box{
      width: 50%;
      height: 582px;
      min-height: 40vw;
      border:#4f1486 solid 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .disablity{
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .other{
    h3{
      width: 100%;
      padding: 62px 0px 31px 0px;
      text-align: center;
      display: block;
    }
    .inner{
      display: flex;
      flex-wrap: wrap;
      max-width: 980px;
      margin: 0 auto;
      .companies{
        border: solid 2px rgb(41, 41, 105);
        margin: 0px 14px 21px 14px;
        width: calc(50% - 36px);
        text-align: center;

        a{
          display: block;
          width: 45%;
          height: auto;
          margin: 0px auto;
          text-decoration: none;
          border-radius: 100px;
          background: linear-gradient(to right, #22a6e6 30%, #004db1 100%);
          padding: 10px;

          .blue-btn{
            color: white;
          }
        }
        .toggleArea{
          padding: 0px 0px 35px 0px;
          background-color: #fff;
        }
      }
    }
  }
  
  .footer{
    height: 150px;
    background-color: rgba(156, 202, 156, 0.507);
  }
}
</style>